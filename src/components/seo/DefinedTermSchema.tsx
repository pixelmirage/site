interface DefinedTermSchemaProps {
    term: string;
    description: string;
    url: string;
    inDefinedTermSet: string;
    lastUpdated: string;
}

export function DefinedTermSchema({ term, description, url, inDefinedTermSet, lastUpdated }: DefinedTermSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: term,
        description: description,
        url: url,
        inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: inDefinedTermSet,
            url: "https://mertkagancetin.com/sozluk/",
        },
        dateModified: lastUpdated,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
