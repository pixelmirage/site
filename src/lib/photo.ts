// Real office portrait of Av. Mert Kağan Çetin (not AI-generated). Metadata (XMP/IPTC) embedded in the files.
export const PHOTO = {
    src: "/images/izmir-kira-avukati-mert-kagan-cetin.webp",
    jpg: "/images/izmir-kira-avukati-mert-kagan-cetin.jpg",
    og: "/images/izmir-kira-avukati-mert-kagan-cetin-og.jpg",
    avatar: "/images/izmir-kira-avukati-mert-kagan-cetin-avatar.webp",
    width: 1200,
    height: 900,
    alt: "İzmir Kira Avukatı Av. Mert Kağan Çetin hukuk bürosunda",
};

const SITE = "https://mertkagancetin.com";

/** Google Görsel meta verisi: sitedeki her ImageObject'e eklenir. */
export const IMAGE_RIGHTS = {
    "creditText": "Av. Mert Kağan Çetin",
    "creator": { "@id": `${SITE}/#person` },
    "copyrightNotice": "© Av. Mert Kağan Çetin",
    "license": `${SITE}/iletisim/`,
    "acquireLicensePage": `${SITE}/iletisim/`,
};

/**
 * Site görseli için ImageObject. Göreli yol mutlak URL'ye çevrilir.
 * Harici (başka alan adındaki) görseller bize ait olmadığından düz URL olarak bırakılır.
 */
export function imageObject(src: string, extra: Record<string, unknown> = {}) {
    const url = src.startsWith("/") ? `${SITE}${src}` : src;
    if (!url.startsWith(SITE)) return url;
    return { "@type": "ImageObject", "url": url, "contentUrl": url, ...extra, ...IMAGE_RIGHTS };
}

export const PHOTO_OBJECT = {
    "@type": "ImageObject",
    "@id": "https://mertkagancetin.com/#photo",
    "url": `https://mertkagancetin.com${PHOTO.src}`,
    "contentUrl": `https://mertkagancetin.com${PHOTO.src}`,
    "caption": "İzmir kira avukatı Av. Mert Kağan Çetin, İzmir'deki hukuk bürosunda",
    "width": PHOTO.width,
    "height": PHOTO.height,
    ...IMAGE_RIGHTS,
};
