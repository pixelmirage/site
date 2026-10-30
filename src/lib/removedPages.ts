// 2026-10-29: site restructured around İzmir kira avukatı (homepage) + 7 kira service pages.
// Removed URLs -> final destination (single-hop 301, see next.config.ts). Order matters: exact paths before :path* catch-alls.
export const removedPageRedirects: [string, string][] = [
  ['/izmir-kira-avukati/kiraci-tahliye-davasi', '/izmir-kiraci-tahliye-davasi-avukati/'],
  ['/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye', '/izmir-kiraci-tahliye-davasi-avukati/'],
  ['/izmir-kira-avukati/on-yillik-kiraci-tahliye', '/izmir-kiraci-tahliye-davasi-avukati/'],
  ['/izmir-kira-avukati/kira-tespit-davasi', '/izmir-kira-tespit-davasi-avukati/'],
  ['/izmir-kira-avukati/kira-uyarlama-davasi', '/izmir-kira-uyarlama-davasi-avukati/'],
  ['/izmir-kira-avukati/kira-borcu-icra', '/izmir-kira-alacagi-icra-takibi-avukati/'],
  ['/izmir-kira-avukati/kira-sozlesmesi-rehberi', '/izmir-kira-sozlesmesi-avukati/'],
  ['/izmir-kira-avukati/:path*', '/'],
  ['/izmir-is-avukati/:path*', '/'],
  ['/izmir-bosanma-avukati/:path*', '/'],
  ['/izmir-tazminat-avukati/:path*', '/'],
  ['/hizmetler/:path*', '/'],
  ['/kidem-tazminati-hesaplama', '/'],
];
