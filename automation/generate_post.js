const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

// Check for API Key
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY is not set.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });

// ============================================================
// TOPICAL AUTHORITY: 4 Content Clusters
// Each cluster = pillar page + supporting topics
// Posts rotate weekly: kira → is → bosanma → tazminat
// ============================================================

const topicClusters = {
    kira: {
        pillarPage: "/izmir-kira-avukati/",
        pillarAnchor: "İzmir kira avukatı",
        category: "Kira Hukuku",
        tags: ["kira hukuku", "İzmir kira avukatı", "kiracı hakları"],
        existingPosts: [
            "/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/",
            "/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/",
            "/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/",
            "/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/",
            "/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/",
            "/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/",
            "/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/",
        ],
        siblingLinks: [
            { url: "/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/", anchor: "kiracıyı çıkarma koşulları" },
            { url: "/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/", anchor: "kira tespit davası" },
            { url: "/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/", anchor: "ihtiyaç nedeniyle tahliye" },
            { url: "/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/", anchor: "işyeri kira sözleşmesi" },
            { url: "/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/", anchor: "iki haklı ihtar" },
            { url: "/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/", anchor: "zorunlu arabuluculuk" },
        ],
        glossaryLinks: [
            { url: "/sozluk/tahliye-taahhutnamesi/", anchor: "tahliye taahhütnamesi" },
            { url: "/sozluk/kira-tespit-davasi/", anchor: "kira tespit davası" },
            { url: "/sozluk/ihtiyac-nedeniyle-tahliye/", anchor: "ihtiyaç nedeniyle tahliye" },
            { url: "/sozluk/fuzuli-isgal/", anchor: "fuzuli işgal" },
            { url: "/sozluk/kira-artis-orani/", anchor: "kira artış oranı" },
            { url: "/sozluk/depozito/", anchor: "depozito" },
            { url: "/sozluk/kiraci-haklari/", anchor: "kiracı hakları" },
        ],
        topics: [
            {
                topic: "Kira Sözleşmesi Fesih Sebepleri ve Hukuki Süreç",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Kira sözleşmesi feshi"
            },
            {
                topic: "Depozito İadesi Davası: Kiracının Hakları ve Süreç",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Depozito iadesi"
            },
            {
                topic: "Kiracının Aidat Borcu ve Ev Sahibinin Sorumlulukları",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Aidat borcu hukuku"
            },
            {
                topic: "Kira Uyarlama Davası: Şartlar ve Yargıtay Kararları",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Kira uyarlama davası"
            },
            {
                topic: "Alt Kiracı ve Devir Yasağı: Kiracının Sözleşme İhlali",
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Alt kiracı hukuku"
            },
            {
                topic: "Fuzuli İşgal ve Haksız Kullanım Tazminatı Davası",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Fuzuli işgal davası"
            },
            {
                topic: "Kentsel Dönüşümde Kiracı Hakları ve Tahliye Süreci",
                image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Kentsel dönüşüm kiracı hakları"
            },
            {
                topic: "10 Yıllık Uzama Süresi Dolan Kiracının Tahliyesi",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "10 yıllık uzama süresi"
            },
            {
                topic: "Kira Artış Oranı Sınırı 2026: Güncel Hesaplama Rehberi",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Kira artış oranı hesaplama"
            },
            {
                topic: "Eşya Hasarı Nedeniyle Kiracıya Tazminat Davası",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Kiracı hasar tazminatı"
            },
        ]
    },
    is: {
        pillarPage: "/izmir-is-avukati/",
        pillarAnchor: "İzmir iş avukatı",
        category: "İş Hukuku",
        tags: ["iş hukuku", "İzmir iş avukatı", "işçi hakları"],
        existingPosts: [
            "/blog/isten-cikarildiginda-ne-yapmali/",
            "/blog/kidem-tazminati-nasil-hesaplanir/",
            "/blog/is-kazasi-tazminati-sureci-ve-haklariniz/",
        ],
        siblingLinks: [
            { url: "/blog/isten-cikarildiginda-ne-yapmali/", anchor: "işten çıkarılınca ne yapmalı" },
            { url: "/blog/kidem-tazminati-nasil-hesaplanir/", anchor: "kıdem tazminatı hesaplama" },
            { url: "/blog/is-kazasi-tazminati-sureci-ve-haklariniz/", anchor: "iş kazası tazminatı" },
        ],
        glossaryLinks: [
            { url: "/sozluk/kidem-tazminati/", anchor: "kıdem tazminatı" },
            { url: "/sozluk/ihbar-tazminati/", anchor: "ihbar tazminatı" },
            { url: "/sozluk/ise-iade-davasi/", anchor: "işe iade davası" },
            { url: "/sozluk/mobbing/", anchor: "mobbing" },
            { url: "/sozluk/hakli-fesih/", anchor: "haklı fesih" },
        ],
        topics: [
            {
                topic: "İşe İade Davası Şartları ve Arabuluculuk Süreci 2026",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "İşe iade davası"
            },
            {
                topic: "İhbar Tazminatı Nedir? Hesaplama ve Hak Kazanma Şartları",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "İhbar tazminatı hesaplama"
            },
            {
                topic: "Fazla Mesai Ücreti Alacağı: İspat ve Zamanaşımı",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Fazla mesai ücreti"
            },
            {
                topic: "İşyerinde Mobbing: Hukuki Tanım ve Dava Süreci",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "İşyerinde mobbing"
            },
            {
                topic: "Haklı Nedenle Fesih: İşçinin İş Sözleşmesini Sona Erdirmesi",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Haklı fesih"
            },
            {
                topic: "SGK Bildirimi Yapılmadan Çalıştırma: Hizmet Tespit Davası",
                image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Sigortasız çalıştırma"
            },
            {
                topic: "Yıllık İzin Ücreti Alacağı ve İşçinin Hakları",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Yıllık izin ücreti"
            },
            {
                topic: "İş Sözleşmesi Türleri: Belirli Süreli ve Belirsiz Süreli",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "İş sözleşmesi türleri"
            },
            {
                topic: "Sendika Üyeliği Nedeniyle İşten Çıkarılma ve Sendikal Tazminat",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Sendikal haklar"
            },
            {
                topic: "Ücretsiz İzin Hakkı: İşverenin ve İşçinin Yükümlülükleri",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Ücretsiz izin hakkı"
            },
        ]
    },
    bosanma: {
        pillarPage: "/izmir-bosanma-avukati/",
        pillarAnchor: "İzmir boşanma avukatı",
        category: "Boşanma Hukuku",
        tags: ["boşanma hukuku", "İzmir boşanma avukatı", "aile hukuku"],
        existingPosts: [
            "/blog/anlasmali-bosanma-nasil-acilir/",
            "/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/",
            "/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/",
        ],
        siblingLinks: [
            { url: "/blog/anlasmali-bosanma-nasil-acilir/", anchor: "anlaşmalı boşanma rehberi" },
            { url: "/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/", anchor: "velayet davası süreci" },
            { url: "/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/", anchor: "nafaka hesaplama" },
        ],
        glossaryLinks: [
            { url: "/sozluk/anlasmali-bosanma/", anchor: "anlaşmalı boşanma" },
            { url: "/sozluk/cekismeli-bosanma/", anchor: "çekişmeli boşanma" },
            { url: "/sozluk/velayet/", anchor: "velayet" },
            { url: "/sozluk/nafaka/", anchor: "nafaka" },
            { url: "/sozluk/mal-paylasimi/", anchor: "mal paylaşımı" },
        ],
        topics: [
            {
                topic: "Çekişmeli Boşanma Davası Süreci ve Kusur Tespiti",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Çekişmeli boşanma davası"
            },
            {
                topic: "Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Boşanmada mal paylaşımı"
            },
            {
                topic: "Boşanmada Tazminat Davası: Maddi ve Manevi Tazminat",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Boşanma tazminatı"
            },
            {
                topic: "Velayet Değişikliği Davası: Şartlar ve Mahkeme Kriterleri",
                image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Velayet değişikliği"
            },
            {
                topic: "Aile İçi Şiddet ve Koruma Kararı Süreci (6284 Sayılı Kanun)",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Koruma kararı"
            },
            {
                topic: "Düğün Takılarının İadesi Davası: Yargıtay Kararları",
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Düğün takıları davası"
            },
            {
                topic: "Nafaka Artırım ve Nafaka Kaldırma Davası Şartları",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Nafaka artırım davası"
            },
            {
                topic: "Boşanma Davasında Sosyal Medya Delilleri ve Hukuki Geçerlilik",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Sosyal medya delilleri"
            },
            {
                topic: "Yabancı Uyruklu Eşle Boşanma: Milletlerarası Özel Hukuk",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Yabancı uyruklu boşanma"
            },
            {
                topic: "Çocukla Kişisel İlişki Kurulması ve Teslim İcra Takibi",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Çocukla kişisel ilişki"
            },
        ]
    },
    tazminat: {
        pillarPage: "/izmir-tazminat-avukati/",
        pillarAnchor: "İzmir tazminat avukatı",
        category: "Tazminat Hukuku",
        tags: ["tazminat hukuku", "İzmir tazminat avukatı", "tazminat davası"],
        existingPosts: [
            "/blog/trafik-kazasi-tazminati-alma-sureci/",
            "/blog/maddi-ve-manevi-tazminat-davasi-farklari/",
            "/blog/malpraktis-davasi-doktor-hatasi-tazminati/",
            "/blog/is-kazasi-tazminati-sureci-ve-haklariniz/",
        ],
        siblingLinks: [
            { url: "/blog/trafik-kazasi-tazminati-alma-sureci/", anchor: "trafik kazası tazminatı" },
            { url: "/blog/maddi-ve-manevi-tazminat-davasi-farklari/", anchor: "maddi ve manevi tazminat farkları" },
            { url: "/blog/malpraktis-davasi-doktor-hatasi-tazminati/", anchor: "malpraktis davası" },
            { url: "/blog/is-kazasi-tazminati-sureci-ve-haklariniz/", anchor: "iş kazası tazminatı" },
        ],
        glossaryLinks: [
            { url: "/sozluk/maddi-tazminat/", anchor: "maddi tazminat" },
            { url: "/sozluk/manevi-tazminat/", anchor: "manevi tazminat" },
            { url: "/sozluk/malpraktis/", anchor: "malpraktis" },
            { url: "/sozluk/destekten-yoksun-kalma/", anchor: "destekten yoksun kalma" },
            { url: "/sozluk/haksiz-fiil/", anchor: "haksız fiil" },
        ],
        topics: [
            {
                topic: "Destekten Yoksun Kalma Tazminatı: Hesaplama ve Dava Süreci",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Destekten yoksun kalma tazminatı"
            },
            {
                topic: "Sigorta Tahkim Komisyonu Başvurusu: Trafik Kazası Tazminatı",
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Sigorta tahkim komisyonu"
            },
            {
                topic: "İş Göremezlik Raporu ve Maluliyet Tazminatı Davası",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "İş göremezlik tazminatı"
            },
            {
                topic: "Haksız Fiil Tazminatı: TBK Kapsamında Sorumluluk",
                image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Haksız fiil tazminatı"
            },
            {
                topic: "Trafik Kazasında Kusur Oranı ve Bilirkişi Raporu",
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Trafik kazası kusur oranı"
            },
            {
                topic: "Devlet Hastanesinde Tıbbi Hata: İdari Yargıda Tam Yargı Davası",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Devlet hastanesi malpraktis"
            },
            {
                topic: "Manevi Tazminat Miktarı Nasıl Belirlenir? Yargıtay Kriterleri",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Manevi tazminat hesaplama"
            },
            {
                topic: "Ürün Sorumluluğundan Doğan Tazminat Davaları",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Ürün sorumluluğu tazminatı"
            },
            {
                topic: "Belediye Hizmet Kusuru Nedeniyle Tazminat Davası",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Belediye hizmet kusuru"
            },
            {
                topic: "Tazminat Davasında Zamanaşımı Süreleri ve İstisnalar",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Tazminat zamanaşımı"
            },
        ]
    }
};

// Cross-cluster links for topical depth
const crossClusterLinks = [
    { url: "/izmir-kira-avukati/", anchor: "kira avukatı" },
    { url: "/izmir-is-avukati/", anchor: "iş avukatı" },
    { url: "/izmir-bosanma-avukati/", anchor: "boşanma avukatı" },
    { url: "/izmir-tazminat-avukati/", anchor: "tazminat avukatı" },
    { url: "/hizmetler/", anchor: "hizmetlerimiz" },
    { url: "/hakkimda/", anchor: "hakkımızda" },
    { url: "/iletisim/", anchor: "iletişim" },
];

function getExistingPostSlugs() {
    const blogDir = path.join(process.cwd(), "src/content/blog");
    if (!fs.existsSync(blogDir)) return [];
    return fs.readdirSync(blogDir)
        .filter(f => f.endsWith(".mdx") || f.endsWith(".md"))
        .map(f => f.replace(/\.(mdx|md)$/, ""));
}

function getCurrentCluster() {
    // Rotate weekly: week 0=kira, 1=is, 2=bosanma, 3=tazminat
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const weekNumber = Math.floor((now - startOfYear) / (7 * 24 * 60 * 60 * 1000));
    const clusterKeys = ["kira", "is", "bosanma", "tazminat"];
    const index = weekNumber % 4;
    console.log(`Week ${weekNumber} → Cluster: ${clusterKeys[index]}`);
    return clusterKeys[index];
}

function pickUnpublishedTopic(cluster) {
    const existingSlugs = getExistingPostSlugs();
    const unpublished = cluster.topics.filter(t => {
        const slug = slugify(t.topic, { lower: true, strict: true, locale: "tr" });
        return !existingSlugs.includes(slug);
    });

    if (unpublished.length === 0) {
        console.log("All topics in this cluster are published. Picking random for refresh.");
        return cluster.topics[Math.floor(Math.random() * cluster.topics.length)];
    }

    // Pick first unpublished (systematic coverage) instead of random
    return unpublished[0];
}

function buildInternalLinksSection(cluster, clusterKey) {
    const lines = [];
    lines.push(`   Kullanabileceğin iç linkler (EN AZ 5 TANE KULLAN):`);
    lines.push(``);
    lines.push(`   A) ANA PİLLAR SAYFA (MUTLAKA KULLAN):`);
    lines.push(`   - [${cluster.pillarAnchor}](${cluster.pillarPage})`);
    lines.push(``);
    lines.push(`   B) AYNI KÜMEDEKİ KARDEŞ MAKALELER (EN AZ 2 TANE KULLAN):`);
    for (const s of cluster.siblingLinks) {
        lines.push(`   - [${s.anchor}](${s.url})`);
    }
    lines.push(``);
    lines.push(`   C) SÖZLÜK TERİMLERİ (EN AZ 1 TANE KULLAN):`);
    for (const g of cluster.glossaryLinks) {
        lines.push(`   - [${g.anchor}](${g.url})`);
    }
    lines.push(``);
    lines.push(`   D) DİĞER HİZMET SAYFALARI (1 TANE KULLANABİLİRSİN):`);
    for (const c of crossClusterLinks) {
        if (c.url !== cluster.pillarPage) {
            lines.push(`   - [${c.anchor}](${c.url})`);
        }
    }
    return lines.join("\n");
}

async function generatePost() {
    console.log("Starting topical authority blog post generation...");

    const clusterKey = getCurrentCluster();
    const cluster = topicClusters[clusterKey];
    const selected = pickUnpublishedTopic(cluster);

    console.log(`Category: ${cluster.category}`);
    console.log(`Topic: ${selected.topic}`);

    const dateString = new Date().toISOString().split("T")[0];
    const internalLinks = buildInternalLinksSection(cluster, clusterKey);

    const prompt = `
Sen, Türkiye'nin önde gelen hukuk büroları için içerik üreten kıdemli bir hukuk editörü ve SEO stratejistisin.
Bu makale "${cluster.category}" alanında TOPICAL AUTHORITY oluşturma stratejisinin parçasıdır.

Konu: ${selected.topic}
Kategori: ${cluster.category}
Ana Hedef Anahtar Kelime: "${cluster.pillarAnchor}"
Hedef Web Sitesi: Mert Kağan Çetin Hukuk Bürosu (İzmir)
Bugünün Tarihi: ${dateString}
Makale İçi Görsel URL: ${selected.image}
Görsel Alt Metni: ${selected.imageAlt}

TOPICAL AUTHORITY KURALLARI (ÇOK ÖNEMLİ):
- Bu makale, "${cluster.pillarAnchor}" ana sayfasını destekleyen bir alt içeriktir.
- Makalenin amacı, bu hukuk alanında sitenin uzmanlığını Google'a kanıtlamaktır.
- Konuyu DERİNLEMESİNE işle. Yüzeysel genel bilgi verme, detaya in.
- İlgili kanun maddelerini (TBK, İş Kanunu, TMK, SGK Kanunu vb.) spesifik olarak belirt.
- Yargıtay kararlarına atıf yap (gerçekçi daire ve yıl bilgisi ver).
- Pratik örnekler ve senaryolar ekle.

1. YAZI TARZI:
   - Akıcı, profesyonel paragraflar yaz. Her paragraf 3-5 cümle olsun.
   - Hukuki ama anlaşılır bir dil kullan.
   - Emoji KULLANMA. Sadece düz metin.
   - Tablolar ve maddeli listeler KULLANMA. Sadece düz paragraflar.

2. GÖRSEL YERLEŞTİRME:
   - Makalenin ortasına şu görseli ekle:
   ![${selected.imageAlt}](${selected.image})

3. YÖNETİCİ ÖZETİ:
   - Yazının en başına "Özet" başlığı altında 3-4 maddelik hap bilgiler ekle.

4. İÇERİK DERİNLİĞİ:
   - Yazı en az 1500-2000 kelime olmalı.
   - İlgili kanun maddelerini spesifik olarak açıkla.
   - En az 2 pratik senaryo/örnek ver.
   - Sık Sorulan Sorular bölümü ekle (en az 4 soru, her cevap 3-4 cümle).

5. İÇ LİNKLER (TOPİCAL OTORİTE İÇİN KRİTİK):
   - "${cluster.pillarAnchor}" metni üzerinden pillar sayfaya MUTLAKA link ver.
   - Aynı kümedeki kardeş makalelere EN AZ 2 link ver.
   - Sözlük terimlerine EN AZ 1 link ver.
   - TOPLAMDA EN AZ 5 iç link kullan.
   - Linkleri doğal ve akıcı şekilde metin içine yerleştir.

${internalLinks}

   Örnek kullanımlar:
   "Bu konuda profesyonel destek için [${cluster.pillarAnchor}](${cluster.pillarPage}) ekibimizle iletişime geçebilirsiniz."
   "[Kıdem tazminatı](/sozluk/kidem-tazminati/) hesaplamasında brüt ücret esas alınmaktadır."

6. BAŞLIK VE SEO:
   - "${cluster.pillarAnchor}" anahtar kelimesini doğal şekilde 3-4 kez kullan.
   - Başlık ve alt başlıklarda anahtar kelime varyasyonları kullan.

7. FORMAT (MDX):
---
title: "[SEO odaklı başlık - ${cluster.category} ile ilgili]"
date: "${dateString}"
excerpt: "[160 karakterlik açıklama]"
tags: ${JSON.stringify(cluster.tags)}
coverImage: "${selected.image}"
---

# [Ana Başlık]

## Özet

[3-4 maddelik hap bilgiler]

---

## [Alt Başlık 1]

[Detaylı paragraflar, kanun maddeleri, örnekler...]

---

## [Alt Başlık 2]

[Detaylı paragraflar...]

---

![${selected.imageAlt}](${selected.image})

---

## [Alt Başlık 3]

[Detaylı paragraflar...]

---

## Sık Sorulan Sorular

### [Soru 1]
[3-4 cümlelik detaylı cevap]

### [Soru 2]
[3-4 cümlelik detaylı cevap]

### [Soru 3]
[3-4 cümlelik detaylı cevap]

### [Soru 4]
[3-4 cümlelik detaylı cevap]

---

## Profesyonel Hukuki Destek

[${cluster.pillarAnchor} hakkında kapanış ve CTA]

---

*Bu makale genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımamaktadır. Somut durumunuz için mutlaka bir avukata danışmanız önerilir.*

KURALLAR:
- Sadece MDX kodunu ver, başka açıklama yapma.
- Emoji KULLANMA.
- Her bölümü "---" ile ayır.
- İç link sayısı EN AZ 5 olmalı.
- Pillar sayfaya link ZORUNLU.
`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up response
        text = text.replace(/```mdx/g, "").replace(/```/g, "").trim();

        // POST-PROCESSING: Ensure pillar page link exists
        const pillarLinkPattern = `](${cluster.pillarPage})`;
        if (!text.includes(pillarLinkPattern)) {
            // Force add pillar link on first keyword occurrence
            const regex = new RegExp(cluster.pillarAnchor, "i");
            text = text.replace(regex, `[${cluster.pillarAnchor}](${cluster.pillarPage})`);
        }

        // Fix missing trailing slashes
        text = text.replace(/\]\(\/izmir-kira-avukati\)/g, "](/izmir-kira-avukati/)");
        text = text.replace(/\]\(\/izmir-is-avukati\)/g, "](/izmir-is-avukati/)");
        text = text.replace(/\]\(\/izmir-bosanma-avukati\)/g, "](/izmir-bosanma-avukati/)");
        text = text.replace(/\]\(\/izmir-tazminat-avukati\)/g, "](/izmir-tazminat-avukati/)");

        const slug = slugify(selected.topic, { lower: true, strict: true, locale: "tr" });
        const fileName = `${slug}.mdx`;
        const filePath = path.join(process.cwd(), "src/content/blog", fileName);

        if (!fs.existsSync(path.join(process.cwd(), "src/content/blog"))) {
            fs.mkdirSync(path.join(process.cwd(), "src/content/blog"), { recursive: true });
        }

        fs.writeFileSync(filePath, text);
        console.log(`Success! Post generated: ${filePath}`);
        console.log(`Cluster: ${cluster.category}`);
        console.log(`Pillar: ${cluster.pillarPage}`);

        // Count internal links
        const linkCount = (text.match(/\]\(\//g) || []).length;
        console.log(`Internal links found: ${linkCount}`);
    } catch (error) {
        console.error("Error generating post:", error);
        process.exit(1);
    }
}

generatePost();
