import type { NextConfig } from "next";


// Old Wix domain (av-mertkagancetin.com) -> mertkagancetin.com 301 map.
// Source list: Wayback CDX + archived sitemaps (blog-posts / pages / blog-categories).
const OLD_HOST = [{ type: 'host' as const, value: '(www\\.)?av-mertkagancetin\\.com' }];
const NEW = 'https://mertkagancetin.com';
const oldDomainMap: [string, string][] = [
  ['/', '/'],
  ['/izmir-kira-avukati', '/izmir-kira-avukati/'],
  ['/kira-hukuku-avukati', '/izmir-kira-avukati/'],
  ['/izmir-bosanma-avukati', '/izmir-bosanma-avukati/'],
  ['/izmir-is-kazasi-avukati', '/izmir-tazminat-avukati/'],
  ['/izmir-miras-avukati', '/hizmetler/'],
  ['/iletisim', '/iletisim/'],
  ['/blog', '/blog/'],
  ['/blog/categories/kira-hukuku', '/izmir-kira-avukati/'],
  ['/blog/categories/bosanma-hukuku', '/izmir-bosanma-avukati/'],
  ['/blog/categories/i̇ş-kazası', '/izmir-tazminat-avukati/'],
  ['/blog/categories/kentsel-donusum', '/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/'],
  ['/blog/categories/yabancılar-hukuku', '/hizmetler/'],
  ['/post/ki̇ra-bedeli̇ni̇n-tespi̇ti̇-artirimi-davasi', '/izmir-kira-avukati/kira-tespit-davasi/'],
  ['/post/kira-tespit-islah', '/izmir-kira-avukati/kira-tespit-davasi/'],
  ['/post/ki̇ra-bedeli̇ne-kararlaştirilan-artiş-oranindan-daha-az-zam-yapilmasi-ve-zimni̇-kabul', '/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/'],
  ['/post/klima-taktirmak-tahliye-sebebi-mi', '/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/'],
  ['/post/kiracı-nasıl-çıkarılır', '/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/'],
  ['/post/ihtiyaç-nedeniyle-tahliye', '/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/'],
  ['/post/iki-hakli-ihtar-nedeniyle-tahliye', '/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/'],
  ['/post/bos-tahliye-taahhudu-gecerli-mi', '/tahliye-taahhutnamesi/'],
  ['/post/kentsel-donusum-rantsal-donusum', '/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/'],
  ['/post/kentsel-donusum-itiraz', '/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/'],
  ['/post/adim-adim-kentsel-dönüşüm', '/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/'],
  ['/post/bosanmada-mal-paylasimi', '/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/'],
  ['/post/bosanmada-tazminat', '/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/'],
  ['/post/nafaka', '/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/'],
  ['/post/bosanma-sebepleri', '/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/'],
  ['/post/i-zmir-bosanma-avukatiyla-anlasmali-bosanma-protokolu', '/izmir-bosanma-avukati/anlasmali-bosanma/'],
  ['/post/anlasmali-bosanma-nasil-olur', '/blog/anlasmali-bosanma-nasil-acilir/'],
  ['/post/is-kazasi-nedir', '/blog/is-kazasi-tazminati-sureci-ve-haklariniz/'],
  ['/post/mirasta-tenkis-davasi-rehberi', '/hizmetler/'],
  ['/post/residence-permit-in-turkey', '/hizmetler/'],
];
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
