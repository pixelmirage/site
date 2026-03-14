interface VideoSchemaProps {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    contentUrl: string;
    embedUrl: string;
    duration?: string;
}

export function VideoSchema({
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl,
    duration,
}: VideoSchemaProps) {
    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": name,
        "description": description,
        "thumbnailUrl": thumbnailUrl,
        "uploadDate": uploadDate.includes('T') ? uploadDate : `${uploadDate}T00:00:00+03:00`,
        "contentUrl": contentUrl,
        "embedUrl": embedUrl,
        "publisher": {
            "@id": "https://mertkagancetin.com/#organization"
        },
        "inLanguage": "tr-TR",
    };

    if (duration) {
        schema.duration = duration;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
