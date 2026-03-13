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
                    "url": "https://mertkagancetin.com/logo.png"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+905445854645",
                    "contactType": "legal consultation",
                    "availableLanguage": "Turkish"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://mertkagancetin.com/#website",
                "url": "https://mertkagancetin.com",
                "name": "Av. Mert Kağan Çetin - İzmir Avukat | Kira, İş ve Boşanma Hukuku",
                "publisher": {
                    "@id": "https://mertkagancetin.com/#organization"
                },
                "inLanguage": "tr-TR"
            },
            {
                "@type": ["Attorney", "LegalService", "LocalBusiness"],
                "@id": "https://mertkagancetin.com/#attorney",
                "name": "Av. Mert Kağan Çetin",
                "image": "https://mertkagancetin.com/attorney-photo.jpg",
                "url": "https://mertkagancetin.com",
                "telephone": "+905445854645",
                "email": "info@mertkagancetin.com",
                "sameAs": [
                    "https://maps.app.goo.gl/J4yG2ppHjVpBEVgY7",
                    "https://www.youtube.com/channel/UCUFW-qTe-nvUmkxkRisriYQ"
                ],
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
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Saturday", "Sunday"],
                        "opens": "00:00",
                        "closes": "00:00"
                    }
                ],
                "priceRange": "$$",
                "description": "İzmir'de kira hukuku, iş hukuku, boşanma davaları ve gayrimenkul uyuşmazlıkları alanında uzman avukatlık hizmeti. Kiracı tahliye, kira tespit, işe iade, kıdem tazminatı, anlaşmalı boşanma, velayet ve nafaka davaları.",
                "knowsAbout": [
                    "Kira Hukuku", "Tahliye Davaları", "Gayrimenkul Hukuku",
                    "Kira Tespit Davası", "Tahliye Taahhütnamesi", "Zorunlu Arabuluculuk",
                    "Kira Sözleşmesi", "İş Hukuku", "İşe İade Davası",
                    "Kıdem Tazminatı", "İhbar Tazminatı", "İş Kazası Tazminatı",
                    "Boşanma Hukuku", "Aile Hukuku", "Velayet Davası",
                    "Nafaka Davası", "Mal Paylaşımı", "Tazminat Hukuku",
                    "Maddi Tazminat", "Manevi Tazminat", "Trafik Kazası Tazminatı"
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
                    "name": "Hukuki Hizmetler",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kiracı Tahliye Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Tespit Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tahliye Taahhütnamesi İcra Takibi" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Sözleşmesi Hazırlama" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zorunlu Arabuluculuk" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gayrimenkul Devir ve Tescil" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İşe İade Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kıdem Tazminatı Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İş Kazası Tazminatı" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anlaşmalı Boşanma Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Çekişmeli Boşanma Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Velayet Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nafaka Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maddi Tazminat Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manevi Tazminat Davası" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trafik Kazası Tazminatı" } }
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
