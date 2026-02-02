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
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const topics = [
    "İzmir'de Kira Artış Oranı Hesaplama ve Kanuni Sınırlar",
    "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?",
    "Tahliye Taahhütnamesinin Geçerlilik Şartları Nelerdir?",
    "Hangi Durumlarda Kira Tespit Davası Açılabilir?",
    "İşyeri Kira Sözleşmelerinde Dikkat Edilmesi Gereken Hususlar",
    "Kiracının Tahliyesi İçin İki Haklı İhtar Nedir?",
    "Kira Hukukunda Zorunlu Arabuluculuk Süreci",
    "Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?",
    "Kira Sözleşmesi Yaparken Hak Kaybını Önleyen Maddeler",
    "İzmir Gayrimenkul Piyasasında Güncel Hukuki Gelişmeler"
];

async function generatePost() {
    console.log("Starting blog post generation...");

    // Pick a random topic (In real usage, you might want to track used topics)
    const topic = topics[Math.floor(Math.random() * topics.length)];
    console.log(`Target Topic: ${topic}`);

    const dateString = new Date().toISOString().split('T')[0];
    const prompt = `
    Sen uzman bir Türkiye Cumhuriyeti hukukçusu ve SEO uzmanısın. 
    Aşağıdaki konu başlığı hakkında, 'İzmir Kira Avukatı' anahtar kelimesini doğal bir şekilde içeren, 
    yüksek kaliteli, bilgilendirici ve profesyonel bir blog yazısı hazırla.
    
    Konu: ${topic}
    Hedef: Mert Kağan Çetin Hukuk Bürosu web sitesi.
    Bugünün Tarihi: ${dateString} (Lütfen bu tarihi kullan)
    
    Yazı şu formatta (MDX) olmalı:
    ---
    title: "[SEO Uyumlu Başlık]"
    date: "${dateString}"
    excerpt: "[160 karakterlik SEO açıklaması]"
    tags: ["kira hukuku", "tahliye davası", "izmir avukat"]
    imagePrompt: "[Banana Nano Pro için 2026 standartlarında ultra-detaylı görsel üretim komutu]"
    ---
    
    # [Başlık]
    ![[Görsel Açıklaması]](/api/placeholder-image)
    
    [Giriş Paragrafı - İzmir Kira Avukatı vurgulu]
    
    ## [Alt Başlık 1]
    [Detaylı Bilgi]
    
    ## [Alt Başlık 2]
    [Detaylı Bilgi]
    
    ### Sonuç
    [Özet ve Mert Kağan Çetin ile iletişime geçme çağrısı]
    
    Kurallar:
    1. Dil bilgisi kusursuz olmalı.
    2. Hukuki terimler doğru kullanılmalı.
    3. Okunabilirlik için kısa paragraflar kullan.
    4. Markdown formatında çıktı ver.
    5. Başka bir açıklama yazma, sadece MDX içeriğini döndür.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up response (sometimes AI adds markdown blocks ```mdx ... ```)
        text = text.replace(/```mdx/g, "").replace(/```/g, "").trim();

        const date = new Date().toISOString().split('T')[0];
        const slug = slugify(topic, { lower: true, strict: true, locale: 'tr' });
        const fileName = `${date}-${slug}.mdx`;
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
