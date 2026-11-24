import { imageObject } from "@/lib/photo";

interface ArticleSchemaProps {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
    url: string;
    /** GEO: "Kısa Cevap" paragrafı */
    abstract?: string;
    /** GEO: yazıda atıf yapılan mevzuat ve (içtihat notlarında) karar */
    citations?: Record<string, unknown>[];
}

export function ArticleSchema({
    title,
    description,
    datePublished,
    dateModified,
    author = "Av. Mert Kağan Çetin",
    image,
    url,
    abstract,
    citations,
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": imageObject(image || "/images/izmir-kira-avukati-og.jpg"),
        "inLanguage": "tr-TR",
        "author": {
            "@type": "Person",
            "@id": "https://mertkagancetin.com/#person",
            "name": author,
            "url": "https://mertkagancetin.com/hakkimda/",
            "jobTitle": "Avukat",
            "memberOf": { "@type": "Organization", "name": "İzmir Barosu" }
        },
        "publisher": {
            "@id": "https://mertkagancetin.com/#organization"
        },
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "@id": `${url}#article`,
        "url": url,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${url}#webpage`
        },
        "isPartOf": {
            "@id": "https://mertkagancetin.com/#website"
        },
        ...(abstract ? { "abstract": abstract } : {}),
        ...(citations && citations.length ? { "citation": citations } : {}),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
