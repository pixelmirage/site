interface VideoSchemaProps {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    contentUrl: string;
    embedUrl: string;
}

export function VideoSchema({
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl,
}: VideoSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": name,
        "description": description,
        "thumbnailUrl": thumbnailUrl,
        "uploadDate": uploadDate,
        "contentUrl": contentUrl,
        "embedUrl": embedUrl,
        "publisher": {
            "@id": "https://mertkagancetin.com/#organization"
        },
        "inLanguage": "tr-TR",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
