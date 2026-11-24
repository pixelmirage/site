interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
    /** WebPage düğümüne eklenecek ek alanlar (ör. lastReviewed, reviewedBy, citation) */
    page?: Record<string, unknown>;
}

const SITE = "https://mertkagancetin.com";

// Emits the page's WebPage node + BreadcrumbList with stable @ids that link
// into the sitewide @graph (#website, #attorney) from SchemaMarkup.
export function BreadcrumbSchema({ items, page }: BreadcrumbSchemaProps) {
    const last = items[items.length - 1];
    const pageUrl = last?.url || `${SITE}/`;
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${pageUrl}#webpage`,
                "url": pageUrl,
                "name": last?.name,
                "inLanguage": "tr-TR",
                "isPartOf": { "@id": `${SITE}/#website` },
                "about": { "@id": `${SITE}/#attorney` },
                "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
                ...(page || {}),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
                "itemListElement": items.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.name,
                    "item": item.url,
                })),
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
