interface PersonSchemaProps {
    knowsAbout: string[];
}

export function PersonSchema({ knowsAbout }: PersonSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Av. Mert Kağan Çetin",
        "givenName": "Mert Kağan",
        "familyName": "Çetin",
        "jobTitle": "Avukat",
        "url": "https://mertkagancetin.com/hakkimda",
        "image": "https://mertkagancetin.com/attorney-photo.jpg",
        "telephone": "+905445854645",
        "email": "mertkagancetin@gmail.com",
        "worksFor": {
            "@type": "LegalService",
            "name": "Av. Mert Kağan Çetin Hukuk Bürosu",
            "url": "https://mertkagancetin.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17",
                "addressLocality": "Bayraklı",
                "addressRegion": "İzmir",
                "postalCode": "35535",
                "addressCountry": "TR"
            }
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "İzmir Ekonomi Üniversitesi",
            "department": {
                "@type": "Organization",
                "name": "Hukuk Fakültesi"
            }
        },
        "memberOf": [
            {
                "@type": "Organization",
                "name": "İzmir Barosu",
                "identifier": "15556"
            },
            {
                "@type": "Organization",
                "name": "Türkiye Barolar Birliği",
                "identifier": "162439"
            }
        ],
        "knowsAbout": knowsAbout,
        "sameAs": [
            "https://www.linkedin.com/in/mert-ka%C4%9Fan-%C3%A7etin-28a264298/",
            "https://share.google/UwexXrbcBVkpI4lc9"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
