import { GBP_URL } from "@/lib/gbp";
import { PHOTO_OBJECT } from "@/lib/photo";

interface PersonSchemaProps {
    knowsAbout: string[];
}

export function PersonSchema({ knowsAbout }: PersonSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://mertkagancetin.com/#person",
        "name": "Av. Mert Kağan Çetin",
        "givenName": "Mert Kağan",
        "familyName": "Çetin",
        "jobTitle": "Avukat",
        "url": "https://mertkagancetin.com/hakkimda/",
        "image": PHOTO_OBJECT,
        "telephone": "+905445854645",
        "email": "mertkagancetin@gmail.com",
        "worksFor": { "@id": "https://mertkagancetin.com/#organization" },
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
            GBP_URL
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
