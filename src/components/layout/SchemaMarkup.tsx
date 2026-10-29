import { GBP_URL, GBP_GEO } from "@/lib/gbp";

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
                "url": "https://mertkagancetin.com/",
                "name": "Av. Mert Kağan Çetin",
                "alternateName": "Mert Kağan Çetin Hukuk Bürosu",
                "publisher": {
                    "@id": "https://mertkagancetin.com/#organization"
                },
                "inLanguage": "tr-TR"
            },
            {
                "@type": "Person",
                "@id": "https://mertkagancetin.com/#person",
                "name": "Av. Mert Kağan Çetin",
                "jobTitle": "Avukat",
                "url": "https://mertkagancetin.com/hakkimda/",
                "image": "https://mertkagancetin.com/logo.png",
                "sameAs": [
                    GBP_URL,
                    "https://www.youtube.com/channel/UCUFW-qTe-nvUmkxkRisriYQ",
                    "https://www.linkedin.com/in/mert-ka%C4%9Fan-%C3%A7etin-28a264298/",
                    "https://www.instagram.com/avukatmertkagancetin/"
                ],
                "worksFor": {
                    "@id": "https://mertkagancetin.com/#organization"
                },
                "memberOf": {
                    "@type": "Organization",
                    "name": "İzmir Barosu"
                },
                "identifier": [
                    { "@type": "PropertyValue", "propertyID": "İzmir Barosu Sicil No", "value": "15556" },
                    { "@type": "PropertyValue", "propertyID": "TBB Sicil No", "value": "162439" }
                ],
                "knowsAbout": ["Kira Hukuku", "Tahliye Davaları", "Kira Tespit Davası", "Kira Uyarlama Davası", "Kira Alacağı İcra Takibi", "Tahliye Taahhüdü", "Kira Sözleşmesi", "Kira Arabuluculuğu"]
            },
            {
                "@type": ["Attorney", "LegalService", "LocalBusiness"],
                "@id": "https://mertkagancetin.com/#attorney",
                "founder": { "@id": "https://mertkagancetin.com/#person" },
                "parentOrganization": { "@id": "https://mertkagancetin.com/#organization" },
                "name": "Av. Mert Kağan Çetin",
                "image": "https://mertkagancetin.com/logo.png",
                "url": "https://mertkagancetin.com/",
                "employee": { "@id": "https://mertkagancetin.com/#person" },
                "identifier": { "@type": "PropertyValue", "propertyID": "İzmir Barosu Sicil No", "value": "15556" },
                "telephone": "+905445854645",
                "email": "mertkagancetin@gmail.com",
                "sameAs": [
                    GBP_URL,
                    "https://www.youtube.com/channel/UCUFW-qTe-nvUmkxkRisriYQ",
                    "https://www.linkedin.com/in/mert-ka%C4%9Fan-%C3%A7etin-28a264298/",
                    "https://www.instagram.com/avukatmertkagancetin/"
                ],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17",
                    "addressLocality": "Bayraklı",
                    "addressRegion": "İzmir",
                    "addressCountry": "TR"
                },
                "hasMap": GBP_URL,
                "geo": { "@type": "GeoCoordinates", ...GBP_GEO },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "description": "İzmir kira avukatı: ev sahibi ve kiracı uyuşmazlıkları, kiracı tahliye davası, kira tespit ve kira uyarlama davası, kira alacağı icra takibi, tahliye taahhüdüne dayalı icra, kira sözleşmesi ve kira arabuluculuğu.",
                "knowsAbout": [
                    "Kira Hukuku", "Tahliye Davaları", "Kiracı Tahliye Davası", "Kira Tespit Davası", "Kira Uyarlama Davası",
                    "Kira Alacağı İcra Takibi", "Tahliye Taahhütnamesi", "Kira Sözleşmesi", "Zorunlu Arabuluculuk", "Türk Borçlar Kanunu Kira Hükümleri"
                ],
                "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "İzmir Ekonomi Üniversitesi",
                    "department": {
                        "@type": "Organization",
                        "name": "Hukuk Fakültesi"
                    }
                },
                "hasCredential": [
                    {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Bar Admission",
                        "recognizedBy": {
                            "@type": "Organization",
                            "name": "İzmir Barosu"
                        },
                        "identifier": "15556"
                    },
                    {
                        "@type": "EducationalOccupationalCredential",
                        "credentialCategory": "Bar Admission",
                        "recognizedBy": {
                            "@type": "Organization",
                            "name": "Türkiye Barolar Birliği"
                        },
                        "identifier": "162439"
                    }
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
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kiracı Tahliye Davası", "url": "https://mertkagancetin.com/izmir-kiraci-tahliye-davasi-avukati/" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Tespit Davası", "url": "https://mertkagancetin.com/izmir-kira-tespit-davasi-avukati/" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Uyarlama Davası", "url": "https://mertkagancetin.com/izmir-kira-uyarlama-davasi-avukati/" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Alacağı İcra Takibi", "url": "https://mertkagancetin.com/izmir-kira-alacagi-icra-takibi-avukati/" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tahliye Taahhüdüne Dayalı İcra", "url": "https://mertkagancetin.com/izmir-tahliye-taahhudu-icra-avukati/" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Sözleşmesi Hazırlama ve İnceleme", "url": "https://mertkagancetin.com/izmir-kira-sozlesmesi-avukati/" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Uyuşmazlıklarında Arabuluculuk", "url": "https://mertkagancetin.com/izmir-kira-arabuluculuk-avukati/" } }
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
