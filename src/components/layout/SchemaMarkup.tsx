export function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://mertkagancetin.com/#organization",
                "name": "Mert Kağan Çetin Hukuk Bürosu",
                "url": "https://mertkagancetin.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://mertkagancetin.com/og-image.jpg"
                },
                "sameAs": [
                    "https://www.facebook.com/mertkagancetin",
                    "https://www.instagram.com/mertkagancetin",
                    "https://www.linkedin.com/in/mertkagancetin"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+905445854645",
                    "contactType": "customer service",
                    "availableLanguage": "Turkish"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://mertkagancetin.com/#website",
                "url": "https://mertkagancetin.com",
                "name": "Av. Mert Kağan Çetin - İzmir Kira Avukatı",
                "publisher": {
                    "@id": "https://mertkagancetin.com/#organization"
                },
                "inLanguage": "tr-TR"
            },
            {
                "@type": ["Attorney", "LegalService", "LocalBusiness"],
                "@id": "https://mertkagancetin.com/#attorney",
                "name": "Av. Mert Kağan Çetin",
                "image": "https://mertkagancetin.com/og-image.jpg",
                "url": "https://mertkagancetin.com",
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
                "priceRange": "$$",
                "description": "İzmir'de kira hukuku, tahliye davaları ve gayrimenkul uyuşmazlıkları alanında uzman avukatlık hizmeti. Kiracı tahliye, kira tespit, kira sözleşmesi hazırlama ve arabuluculuk hizmetleri.",
                "knowsAbout": [
                    "Kira Hukuku",
                    "Tahliye Davaları",
                    "Gayrimenkul Hukuku",
                    "Kira Tespit Davası",
                    "Tahliye Taahhütnamesi",
                    "Zorunlu Arabuluculuk",
                    "Kira Sözleşmesi"
                ],
                "memberOf": {
                    "@type": "Organization",
                    "name": "İzmir Barosu"
                },
                "areaServed": [
                    { "@type": "City", "name": "İzmir" },
                    { "@type": "AdministrativeArea", "name": "Bayraklı" },
                    { "@type": "AdministrativeArea", "name": "Karşıyaka" },
                    { "@type": "AdministrativeArea", "name": "Bornova" },
                    { "@type": "AdministrativeArea", "name": "Konak" },
                    { "@type": "AdministrativeArea", "name": "Buca" },
                    { "@type": "AdministrativeArea", "name": "Çiğli" },
                    { "@type": "AdministrativeArea", "name": "Gaziemir" },
                    { "@type": "AdministrativeArea", "name": "Balçova" },
                    { "@type": "AdministrativeArea", "name": "Narlıdere" },
                    { "@type": "AdministrativeArea", "name": "Karabağlar" },
                    { "@type": "AdministrativeArea", "name": "Güzelbahçe" }
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Kira Hukuku Hizmetleri",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kiracı Tahliye Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Tespit Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tahliye Taahhütnamesi İcra Takibi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Sözleşmesi Hazırlama" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zorunlu Arabuluculuk" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gayrimenkul Devir ve Tescil" } }
                    ]
                }
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
