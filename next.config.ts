import type { NextConfig } from "next";
import { oldDomainMap } from './src/lib/oldDomainMap';
import { removedPageRedirects } from './src/lib/removedPages';


// Slashless old-domain URLs are handled in src/proxy.ts (one hop); the notfile rule skips old hosts.
// Old Wix domain (av-mertkagancetin.com) -> mertkagancetin.com 301 map.
// Source list: Wayback CDX + archived sitemaps (blog-posts / pages / blog-categories).
const OLD_HOST = [{ type: 'host' as const, value: '(www\\.)?av-mertkagancetin\\.com' }];
const NEW = 'https://mertkagancetin.com';
const enc = (p: string) => p.split('/').map(encodeURIComponent).join('/');
const oldDomainRedirects = [
  ...oldDomainMap.flatMap(([src, dst]) => {
    const variants = Array.from(new Set([src, enc(src)]));
    return variants.flatMap((v) => (v === '/' ? ['/'] : [v, `${v}/`])).map((source) => ({
      source,
      has: OLD_HOST,
      destination: `${NEW}${dst}`,
      statusCode: 301 as const,
    }));
  }),
  { source: '/post/:slug*', has: OLD_HOST, destination: `${NEW}/blog/`, statusCode: 301 as const },
  { source: '/blog/:path*', has: OLD_HOST, destination: `${NEW}/blog/`, statusCode: 301 as const },
  { source: '/:path*', has: OLD_HOST, destination: `${NEW}/`, statusCode: 301 as const },
];

// Slashless removed URLs must not hit the trailing-slash rule first (that would add a second hop).
const NOTFILE_SKIP = [
  'izmir-kira-avukati/izmir-kira-hukuku',
  'izmir-bosanma-avukati/bosanma-sureci-izmir',
  'izmir-bosanma-avukati/aile-hukuku-avukati-izmir',
  'izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir',
  ...removedPageRedirects
    .map(([src]) => src.slice(1))
    .filter((src) => /^[a-z0-9\-/]+(?:\/:path\*)?$/.test(src))
    .map((src) => (src.endsWith('/:path*') ? `${src.slice(0, -7)}(?:/.*)?` : src)),
].join('|');

const nextConfig: NextConfig = {
  experimental: {},
  trailingSlash: true,
  // Built-in trailing-slash redirect is re-declared below (after the old-domain rules)
  // so old-domain URLs 301 to mertkagancetin.com in a single hop.
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      ...oldDomainRedirects,
      // Slashless variants are excluded from the trailing-slash rule below and handled here / in src/proxy.ts.
      // 2026-10-29 kira restructure: the site is kira-only; removed pages 301 in a single hop to their final target.
      // User sources also match an optional trailing slash, and these rules run before the trailing-slash rule below.
      ...removedPageRedirects.map(([source, destination]) => ({ source, destination, statusCode: 301 as const })),
      { source: '/:district((?:balcova|bayrakli|bornova|buca|cigli|gaziemir|guzelbahce|karabaglar|karsiyaka|konak|narlidere)-(?:kira|is|bosanma|tazminat)-avukati)', destination: '/', statusCode: 301 },
      { source: '/sozluk/:term(kidem-tazminati|ihbar-tazminati|ise-iade-davasi|mobbing|hakli-fesih|fazla-mesai|is-goremezlik|anlasmali-bosanma|cekismeli-bosanma|velayet|nafaka|mal-paylasimi|maddi-tazminat|manevi-tazminat|malpraktis|destekten-yoksun-kalma|haksiz-fiil|is-guvencesi|evlilik-birliginin-temelden-sarsilmasi|koruma-karari)', destination: '/sozluk/', statusCode: 301 },
      // Same rules Next adds when trailingSlash: true (next/dist/lib/load-custom-routes.js);
      // (?!/) keeps '/x/' from matching, since user sources also match an optional trailing slash.
      {
        source: '/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',
        destination: '/:file',
        permanent: true,
        missing: [{ type: 'header', key: 'x-nextjs-data' }],
      },
      {
        source: `/:notfile((?!\\.well-known(?:/.*)?)(?!(?:${NOTFILE_SKIP})$)(?!(?:balcova|bayrakli|bornova|buca|cigli|gaziemir|guzelbahce|karabaglar|karsiyaka|konak|narlidere)-(?:kira|is|bosanma|tazminat)-avukati$)(?:[^/]+/)*[^/\\.]+(?!/))`,
        destination: '/:notfile/',
        permanent: true,
        missing: OLD_HOST,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
