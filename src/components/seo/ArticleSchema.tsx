import { imageObject } from "@/lib/photo";

interface ArticleSchemaProps {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
    url: string;
}

export function ArticleSchema({
    title,
    description,
    datePublished,
    dateModified,
    author = "Av. Mert Kağan Çetin",
    image,
    url
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": imageObject(image || "/og-image.jpg"),
        "inLanguage": "tr-TR",
        "author": {
            "@id": "https://mertkagancetin.com/#person"
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
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
