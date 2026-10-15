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
      permanent: true,
    }));
  }),
  { source: '/post/:slug*', has: OLD_HOST, destination: `${NEW}/blog/`, permanent: true },
  { source: '/blog/:path*', has: OLD_HOST, destination: `${NEW}/blog/`, permanent: true },
  { source: '/:path*', has: OLD_HOST, destination: `${NEW}/`, permanent: true },
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
      // Same rules Next adds when trailingSlash: true (next/dist/lib/load-custom-routes.js);
      // (?!/) keeps '/x/' from matching, since user sources also match an optional trailing slash.
      {
        source: '/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',
        destination: '/:file',
        permanent: true,
        missing: [{ type: 'header', key: 'x-nextjs-data' }],
      },
      {
        source: '/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+(?!/))',
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
