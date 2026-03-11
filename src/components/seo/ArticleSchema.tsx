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
        "image": image || "https://mertkagancetin.com/og-image.jpg",
        "inLanguage": "tr-TR",
        "author": {
            "@id": "https://mertkagancetin.com/#attorney"
        },
        "publisher": {
            "@id": "https://mertkagancetin.com/#organization"
        },
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
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
