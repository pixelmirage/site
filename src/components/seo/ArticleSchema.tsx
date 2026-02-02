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
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image || "https://mertkagancetin.com/og-image.jpg",
        "author": {
            "@type": "Person",
            "name": author,
            "url": "https://mertkagancetin.com/hakkimda"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Mert Kağan Çetin Hukuk Bürosu",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mertkagancetin.com/logo.png"
            }
        },
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
