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
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

// Topics with matching Unsplash images
const topicsWithImages = [
    {
        topic: "İzmir'de Kira Artış Oranı Hesaplama ve Kanuni Sınırlar",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kira artış oranı hesaplama"
    },
    {
        topic: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Ev tahliye süreci"
    },
    {
        topic: "Tahliye Taahhütnamesinin Geçerlilik Şartları Nelerdir?",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Tahliye taahhütnamesi imzalama"
    },
    {
        topic: "Hangi Durumlarda Kira Tespit Davası Açılabilir?",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kira tespit davası"
    },
    {
        topic: "İşyeri Kira Sözleşmelerinde Dikkat Edilmesi Gereken Hususlar",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "İşyeri kira sözleşmesi"
    },
    {
        topic: "Kiracının Tahliyesi İçin İki Haklı İhtar Nedir?",
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "İki haklı ihtar süreci"
    },
    {
        topic: "Kira Hukukunda Zorunlu Arabuluculuk Süreci",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Arabuluculuk görüşmesi"
    },
    {
        topic: "Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Acil tahliye durumları"
    },
    {
        topic: "Kira Sözleşmesi Yaparken Hak Kaybını Önleyen Maddeler",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kira sözleşmesi hazırlama"
    },
    {
        topic: "İzmir Gayrimenkul Piyasasında Güncel Hukuki Gelişmeler",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "İzmir gayrimenkul piyasası"
    }
];

async function generatePost() {
    console.log("Starting blog post generation...");

    // Pick a random topic
    const selected = topicsWithImages[Math.floor(Math.random() * topicsWithImages.length)];
    console.log(`Target Topic: ${selected.topic}`);

    const dateString = new Date().toISOString().split('T')[0];

    const prompt = `
Sen, Türkiye'nin önde gelen hukuk büroları için içerik üreten kıdemli bir hukuk editörü ve SEO stratejistisin. 
Hedefimiz, "İzmir Kira Avukatı" anahtar kelimesinde Google'da 1. sıraya yükselmek.

Konu: ${selected.topic}
Hedef Web Sitesi: Mert Kağan Çetin Hukuk Bürosu
Bugünün Tarihi: ${dateString}
Makale İçi Görsel URL: ${selected.image}
Görsel Alt Metni: ${selected.imageAlt}

Lütfen aşağıdaki kurallara göre PROFESYONEL bir hukuki makale hazırla:

1. YAZI TARZI (ÇOK ÖNEMLİ):
   - Akıcı, profesyonel paragraflar yaz. Her paragraf 3-5 cümle olsun.
   - Her başlık altında 2-3 paragraf bulunmalı.
   - Hukuki ama anlaşılır bir dil kullan.
   - Emoji KULLANMA. Sadece düz metin.
   - Tablolar ve maddeli listeler KULLANMA. Sadece düz paragraflar.
   
2. GÖRSEL YERLEŞTİRME:
   - Makalenin ortasına (yaklaşık 3. veya 4. başlıktan sonra) şu şekilde bir görsel ekle:
   ![${selected.imageAlt}](${selected.image})

3. İÇERİK YAPISI (GEO - YAPAY ZEKAYI OPTİMİZASYONU):
   - **YÖNETİCİ ÖZETİ (Executive Summary):** Yazının en başına, "Özet" başlığı altında 3-4 maddelik, okuyucunun ve yapay zekaların içeriği hızlıca anlamasını sağlayacak hap bilgiler ekle. Bu çok önemli.
    
4. İÇERİK DERİNLİĞİ:
   - Yazı en az 1200-1500 kelime olmalı.
   - İlgili kanun maddelerini (TBK m. 350, 351 vb.) açıkla.
   - Pratik örnekler ver.
   - Sık Sorulan Sorular bölümü ekle (en az 3 soru).

5. SEO STRATEJİSİ:
   - "İzmir Kira Avukatı" anahtar kelimesini doğal şekilde 3-4 kez kullan.
   - Başlık ve alt başlıklarda anahtar kelime olsun.

6. İÇ LİNKLER (ÇOK ÖNEMLİ - SEO İÇİN KRİTİK):
   - **ZORUNLU LİNK:** Her makale kesinlikle en az bir kez "İzmir kira avukatı" metni üzerinden [İzmir kira avukatı](/izmir-kira-avukati/) sayfasına link vermelidir. Bu en önemli kuraldır.
   - Makale içinde TOPLAMDA EN AZ 4 iç link kullan.
   - Linkleri şu formatta yaz: [link metni](/sayfa-yolu)
   
   Kullanabileceğin sayfalar:
   - [İzmir kira avukatı](/izmir-kira-avukati/) - ANA HEDEF SAYFA (MUTLAKA KULLAN)
   - [hizmetlerimiz](/hizmetler) - Hizmetler sayfası
   - [iletişim](/iletisim) - İletişim sayfası  
   - [hakkımızda](/hakkimda) - Hakkımızda sayfası
   - [tahliye davası hakkında](/blog/ihtiyac-nedeniyle-tahliye-davasi) - Tahliye blog yazısı
   - [işyeri kira sözleşmesi](/blog/isyeri-kira-sozlesmesi-rehberi) - İşyeri kira blog yazısı
   - [arabuluculuk süreci](/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci) - Arabuluculuk blog yazısı
   
   Örnek kullanım:
   "Bu konuda profesyonel destek için [İzmir kira avukatı](/izmir-kira-avukati/) ekibimizle görüşebilirsiniz."
   "Detaylı bilgi için [hizmetlerimiz](/hizmetler) sayfamıza göz atın."

7. YAZI BİÇİMLENDİRME KURALLARI (ÇOK ÖNEMLİ):
   - **BAŞLIK HİYERARŞİSİ:** 
     * # (H1) sadece yazının başında BİR KEZ kullan
     * ## (H2) ana bölümler için kullan (her bölüm --- ile ayrılsın)
     * ### (H3) alt başlıklar için kullan (SSS soruları dahil)
   - **PARAGRAFLAR:** Her paragraf maksimum 4-5 cümle olsun. Uzun paragrafları böl.
   - **BÖLÜM AYIRICI:** Her ## başlığından önce --- (yatay çizgi) kullan.
   - **BOŞLUKLAR:** Başlıklar ve paragraflar arasında boş satır bırak.

8. FORMAT (MDX):
---
title: "[Konu ile ilgili SEO odaklı başlık]"
date: "${dateString}"
excerpt: "[160 karakterlik, merak uyandıran açıklama]"
tags: ["kira hukuku", "tahliye davası", "İzmir kira avukatı", "Mert Kağan Çetin"]
coverImage: "${selected.image}"
---

# [Ana Başlık]

[Giriş paragrafı - konuyu tanıt ve okuyucunun ilgisini çek]

[İkinci paragraf - neden bu konunun önemli olduğunu açıkla]

---

## [Alt Başlık 1]

[Detaylı açıklama paragrafları...]

---

## [Alt Başlık 2]

[Detaylı açıklama paragrafları...]

---

[Burada görseli ekle: ![${selected.imageAlt}](${selected.image})]

---

## [Alt Başlık 3]

[Detaylı açıklama paragrafları...]

---

## Sık Sorulan Sorular

### [Soru 1]

[Detaylı cevap paragrafı]

### [Soru 2]

[Detaylı cevap paragrafı]

### [Soru 3]

[Detaylı cevap paragrafı]

---

## Profesyonel Hukuki Destek

[İzmir kira avukatı Mert Kağan Çetin hakkında kapanış paragrafı ve iletişim çağrısı]

---

*Bu makale genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımamaktadır. Somut durumunuz için mutlaka bir avukata danışmanız önerilir.*

KURALLAR:
- Sadece MDX kodunu ver, başka açıklama yapma.
- Emoji KULLANMA.
- Paragraflar akıcı ve profesyonel olsun.
- Her bölümü "---" ile ayır.
- Görseli makalenin ortasına ekle.
`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up response
        text = text.replace(/```mdx/g, "").replace(/```/g, "").trim();

        // --- POST-PROCESSING: FORCE INTERNAL LINKS ---
        // 1. Fix missing trailing slash in existing links
        text = text.replace(/\]\(\/izmir-kira-avukati\)/g, "](/izmir-kira-avukati/)");

        // 2. If no link exists yet, force link the first occurrence of the keyword
        if (!text.includes("](/izmir-kira-avukati/)")) {
            text = text.replace(/İzmir kira avukatı/i, "[İzmir kira avukatı](/izmir-kira-avukati/)");
        }

        const slug = slugify(selected.topic, { lower: true, strict: true, locale: 'tr' });
        const fileName = `${slug}.mdx`;
        const filePath = path.join(process.cwd(), "src/content/blog", fileName);

        // Create dir if not exists
        if (!fs.existsSync(path.join(process.cwd(), "src/content/blog"))) {
            fs.mkdirSync(path.join(process.cwd(), "src/content/blog"), { recursive: true });
        }

        fs.writeFileSync(filePath, text);
        console.log(`Success! Post generated: ${filePath}`);
    } catch (error) {
        console.error("Error generating post:", error);
        process.exit(1);
    }
}

generatePost();
