interface ServiceSchemaProps {
    name: string;
    description: string;
    serviceType: string;
    areaServed?: string;
}

export function ServiceSchema({ name, description, serviceType, areaServed = "İzmir" }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "serviceType": serviceType,
        "provider": {
            "@id": "https://mertkagancetin.com/#attorney"
        },
        "areaServed": {
            "@type": "City",
            "name": areaServed
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
