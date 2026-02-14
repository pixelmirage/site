export function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Attorney",
        "name": "Av. Mert Kağan Çetin",
        "image": "https://www.mertkagancetin.com/og-image.jpg",
        "@id": "https://www.mertkagancetin.com",
        "url": "https://www.mertkagancetin.com",
        "telephone": "+905445854645",
        "email": "info@mertkagancetin.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17",
            "addressLocality": "Bayraklı",
            "addressRegion": "İzmir",
            "postalCode": "35535",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.4517,
            "longitude": 27.1845
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/mertkagancetin",
            "https://www.instagram.com/mertkagancetin",
            "https://www.linkedin.com/in/mertkagancetin"
        ],
        "priceRange": "$$",
        "description": "İzmir'de kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıkları alanında uzman avukatlık hizmeti.",
        "knowsAbout": [
            "Kira Hukuku",
            "Tahliye Davaları",
            "Gayrimenkul Hukuku",
            "Kira Tespit Davası",
            "Tahliye Taahhütnamesi"
        ],
        "memberOf": {
            "@type": "Organization",
            "name": "İzmir Barosu"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "İzmir"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Bayraklı"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Karşıyaka"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
