import type { NextConfig } from "next";
import { oldDomainMap } from './src/lib/oldDomainMap';


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
      // Removed district pages (2026-10-16): single-hop 301 to service hub; source matches with/without trailing slash.
      { source: '/balcova-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/bayrakli-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/bornova-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/buca-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/cigli-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/gaziemir-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/guzelbahce-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/karabaglar-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/karsiyaka-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/konak-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/narlidere-kira-avukati', destination: '/izmir-kira-avukati/', statusCode: 301 },
      { source: '/balcova-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/bayrakli-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/bornova-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/buca-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/cigli-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/gaziemir-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/guzelbahce-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/karabaglar-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/karsiyaka-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/konak-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/narlidere-is-avukati', destination: '/izmir-is-avukati/', statusCode: 301 },
      { source: '/balcova-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/bayrakli-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/bornova-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/buca-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/cigli-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/gaziemir-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/guzelbahce-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/karabaglar-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/karsiyaka-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/konak-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/narlidere-bosanma-avukati', destination: '/izmir-bosanma-avukati/', statusCode: 301 },
      { source: '/balcova-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/bayrakli-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/bornova-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/buca-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/cigli-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/gaziemir-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/guzelbahce-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/karabaglar-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/karsiyaka-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/konak-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      { source: '/narlidere-tazminat-avukati', destination: '/izmir-tazminat-avukati/', statusCode: 301 },
      // Same rules Next adds when trailingSlash: true (next/dist/lib/load-custom-routes.js);
      // (?!/) keeps '/x/' from matching, since user sources also match an optional trailing slash.
      {
        source: '/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',
        destination: '/:file',
        permanent: true,
        missing: [{ type: 'header', key: 'x-nextjs-data' }],
      },
      {
        source: '/:notfile((?!\\.well-known(?:/.*)?)(?!(?:balcova|bayrakli|bornova|buca|cigli|gaziemir|guzelbahce|karabaglar|karsiyaka|konak|narlidere)-(?:kira|is|bosanma|tazminat)-avukati$)(?:[^/]+/)*[^/\\.]+(?!/))',
        destination: '/:notfile/',
        permanent: true,
        missing: OLD_HOST,
      },
      {
        source: '/blog/ihtiyac-nedeniyle-tahliye-davasi/',
        destination: '/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/',
        permanent: true,
      },
      {
        source: '/blog/isyeri-kira-sozlesmesi-rehberi/',
        destination: '/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/',
        permanent: true,
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
