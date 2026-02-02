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
    Sen, Türkiye'nin önde gelen hukuk büroları için içerik üreten kıdemli bir hukuk editörü ve SEO stratejistisin. 
    Hedefimiz, "İzmir Kira Avukatı" anahtar kelimesinde Google'da 1. sıraya yükselmek.
    
    Konu: ${topic}
    Hedef Web Sitesi: Mert Kağan Çetin Hukuk Bürosu
    Bugünün Tarihi: ${dateString}
    
    Lütfen aşağıdaki kurallara göre kapsamlı bir REHBER (Guide) hazırla:
    
    1. OKUNUŞ KOLAYLIĞI (ÇOK ÖNEMLİ): 
       - Her bölüm arasında "---" (yatay çizgi) ile ayrım yap.
       - Paragraflar kısa olsun, en fazla 2-3 cümle.
       - Emojiler kullan (✅ ❌ 💡 ⚠️ 📝 🏠 ⚖️ 📞 gibi).
       - Maddeli listeler kullan (- veya 1. 2. 3. ile).
       - Karmaşık bilgileri tablolarla sun.
       - "Salağa anlatır gibi" basit, anlaşılır bir dil kullan.
       - Her başlıktan sonra kısa bir özet cümle ver.
    
    2. İÇERİK DERİNLİĞİ: 
       - Yazı en az 1000-1500 kelime aralığında olmalı.
       - İlgili kanun maddelerini (TBK m. 350, 351 vb.) ekle ama basitçe açıkla.
       - Pratik örnekler ver (Örnek: "Oğlunuz evleniyor ve bu eve ihtiyacı var...").
       - Sıkça Sorulan Sorular (SSS) bölümü ekle.
    
    3. SEO STRATEJİSİ:
       - "İzmir Kira Avukatı" ve ilgili anahtar kelimeleri doğal şekilde kullan.
       - Okuyucuyu ikna edici, otoriter ama anlaşılır bir dil kullan.
    
    4. FORMAT (MDX):
       ---
       title: "[Kısa, Net Başlık - SEO Odaklı]"
       date: "${dateString}"
       excerpt: "[160 karakterlik, merak uyandıran açıklama]"
       tags: ["kira hukuku", "tahliye davası", "İzmir kira avukatı", "Mert Kağan Çetin"]
       coverImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop"
       ---
       
       # [Başlık]
       
       [Sorulu bir giriş - okuyucunun ilgisini çek]
       
       **Bu rehberde şunları öğreneceksiniz:** basitçe açıkla.
       
       ---
       
       ## 🏠 [Alt Başlık 1]
       
       [Kısa paragraf]
       
       - ✅ Madde 1
       - ✅ Madde 2
       
       > 💡 **İpucu:** [Pratik bilgi]
       
       ---
       
       [... Benzer formatta devam et ...]
       
       ## ❓ Sık Sorulan Sorular
       
       ### "Soru 1?"
       
       **Cevap:** Basit açıklama.
       
       ---
       
       ## 📞 Profesyonel Destek
       
       [İzmir kira avukatı Mert Kağan Çetin ile iletişime geçin.]
       
    Kurallar:
    - Sadece MDX kodunu ver, başka açıklama yapma.
    - Her bölümü "---" ile ayır.
    - Paragraflar KISA olsun.
    - Emojiler kullan.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up response (sometimes AI adds markdown blocks \`\`\`mdx ... \`\`\`)
        text = text.replace(/\`\`\`mdx/g, "").replace(/\`\`\`/g, "").trim();

        const date = new Date().toISOString().split('T')[0];
        const slug = slugify(topic, { lower: true, strict: true, locale: 'tr' });
        // Don't include date in filename for cleaner URLs
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
