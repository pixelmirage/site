import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";

export const metadata: Metadata = {
    title: "İzmir Velayet Davası Avukatı | Çocuğunuzun Hakları | Hemen Arayın",
    description: "İzmir velayet davası avukatı Av. Mert Kağan Çetin. Çocuk velayeti, velayetin değiştirilmesi, kişisel ilişki düzenlemesi ve pedagog raporu stratejisi konularında uzman hukuki destek.",
    keywords: ["velayet davası avukatı İzmir", "velayet davası", "çocuk velayeti", "velayet değişikliği"],
    openGraph: {
        title: "İzmir Velayet Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de velayet davalarında uzman avukatlık hizmeti. Çocuğunuzun üstün yararı için mücadele ediyoruz.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/velayet-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/velayet-davasi/" },
};

const faqs = [
    {
        question: "Velayet hangi yaşta çocuğa sorulur?",
        answer: "Türk hukukunda çocuğun idrak yaşına ulaşması halinde velayet konusundaki görüşü alınır. Uygulamada genellikle 8 yaş ve üzeri çocukların görüşü pedagog aracılığıyla dinlenir. Ancak çocuğun görüşü bağlayıcı değildir; hakim çocuğun üstün yararını gözeterek karar verir. Çocuk hangi ebeveynle yaşamak istediğini söylese bile hakim aksine karar verebilir."
    },
    {
        question: "Babaya velayet verilir mi?",
        answer: "Evet, babaya velayet verilebilir. Türk hukukunda velayet konusunda cinsiyet ayrımı yoktur. Hakim çocuğun üstün yararını değerlendirirken ebeveynlerin ekonomik durumu, yaşam koşulları, çocukla ilişkileri ve bakım kapasitelerini inceler. Annenin bakım kapasitesinin yetersiz olduğu, baba ile çocuk arasında güçlü bağ olduğu durumlarda velayet babaya verilebilir."
    },
    {
        question: "Velayet değişikliği şartları nelerdir?",
        answer: "TMK m. 183 ve 348 uyarınca velayetin değiştirilmesi için velayet sahibi ebeveynin durumunda esaslı değişiklik olması gerekir. Çocuğun ihmal edilmesi, kötü muamele, ebeveynin madde bağımlılığı, çocuğun eğitiminin aksatılması veya çocuğun yaşam koşullarının kötüleşmesi velayet değişikliği sebepleri arasındadır. Değişiklik her zaman çocuğun üstün yararı gözetilerek değerlendirilir."
    },
    {
        question: "Kişisel ilişki düzenlemesi nasıl yapılır?",
        answer: "Velayeti almayan ebeveyn ile çocuk arasında kişisel ilişki kurulması TMK m. 323 kapsamında düzenlenir. Mahkeme genellikle dönüşümlü hafta sonları, dini bayramlar, yarıyıl ve yaz tatillerini kapsayan bir takvim belirler. Kişisel ilişki düzenlemesi çocuğun yaşına, okul durumuna ve ebeveynlerin yaşadığı şehre göre değişir. Taraflar anlaşamazsa mahkeme resen düzenleme yapar."
    },
    {
        question: "Velayet kararına uyulmazsa ne olur?",
        answer: "Velayet kararına veya kişisel ilişki düzenlemesine uymayan ebeveyn hakkında İcra ve İflas Kanunu m. 341 uyarınca tazyik hapsi uygulanabilir. Çocuğu teslim etmeyen veya kişisel ilişkiyi engelleyen ebeveyn aleyhine icra takibi başlatılır. Sürekli ihlal halinde velayet değişikliği davası da açılabilir. Mahkeme kararını uygulamak her iki ebeveynin de yükümlülüğüdür."
    }
];

const tocItems = [
    { id: "velayet-hukuku", title: "Velayet Hukuku" },
    { id: "dava-sureci", title: "Velayet Davası Sürecimiz" },
    { id: "velayet-degisikligi", title: "Velayetin Değiştirilmesi" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function VelayetDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Velayet Davası", "Çocuk Velayeti", "Velayetin Değiştirilmesi", "Kişisel İlişki Düzenlemesi", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Velayet Davası", url: "https://mertkagancetin.com/izmir-bosanma-avukati/velayet-davasi/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-bosanma-avukati/" className="hover:text-white transition-colors">İzmir Boşanma Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Velayet Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Velayet Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Çocuğunuzun velayeti için mücadele ediyoruz.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile çocuğunuzun üstün yararını koruyun.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim/"><Phone className="w-5 h-5" />Hemen Arayın</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2" asChild>
                                <a href="tel:+905445854645">0544 585 46 45</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOC */}
            <section className="py-8 bg-slate-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">İçindekiler</p>
                        <nav className="flex flex-wrap gap-3">
                            {tocItems.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="text-sm text-primary hover:text-secondary font-medium transition-colors">{item.title}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* Article */}
            <article className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-slate max-w-none
                        prose-headings:font-playfair prose-headings:font-black prose-headings:text-slate-900
                        [&>h2]:text-[1.75rem] [&>h2]:mb-6 [&>h2]:mt-14 [&>h2]:bg-slate-100 [&>h2]:py-4 [&>h2]:px-6 [&>h2]:-mx-6 [&>h2]:rounded-lg [&>h2]:border-l-4 [&>h2]:border-secondary
                        [&>h3]:text-[1.375rem] [&>h3]:mb-4 [&>h3]:mt-10 [&>h3]:text-primary [&>h3]:font-bold [&>h3]:border-b [&>h3]:border-slate-200 [&>h3]:pb-2
                        [&>p]:text-[1rem] [&>p]:text-slate-700 [&>p]:leading-[1.85] [&>p]:mb-5
                        prose-strong:text-primary prose-strong:font-bold
                        prose-a:text-secondary prose-a:font-semibold prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary
                        [&>ul>li]:text-[1rem] [&>ul>li]:text-slate-700 [&>ul>li]:mb-2 [&>ul>li]:leading-relaxed
                        [&>ol>li]:text-[1rem] [&>ol>li]:text-slate-700 [&>ol>li]:mb-2 [&>ol>li]:leading-relaxed
                        prose-ul:my-6 prose-ul:pl-6 prose-ol:my-6 prose-ol:pl-6
                        prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-slate-800 prose-blockquote:font-medium">

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir velayet davası avukatı</strong> olarak boşanma sürecinde ve boşanma sonrasında çocuğunuzun <Link href="/sozluk/velayet/">velayeti</Link> için hukuki mücadele yürütüyoruz. Çocuğun üstün yararı ilkesi doğrultusunda velayet, kişisel ilişki düzenlemesi ve velayetin değiştirilmesi davalarında profesyonel destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Velayet davaları, Türk Medeni Kanunu&apos;nun 335-351. maddeleri kapsamında düzenlenir. Velayet kararlarında temel ölçüt çocuğun üstün yararıdır. <strong>Velayet davası avukatı</strong> olarak Bayraklı Adliyesi Aile Mahkemesi&apos;ndeki velayet davalarını yakından takip ediyoruz.
                        </p>

                        <h2 id="velayet-hukuku" className="scroll-mt-24">Velayet Hukuku ve Çocuğun Üstün Yararı</h2>

                        <p>
                            TMK m. 335 uyarınca ergin olmayan çocuk ana ve babasının velayeti altındadır. Boşanma halinde hakim, velayeti eşlerden birine verir. Velayet kararında çocuğun üstün yararı belirleyici faktördür. Mahkeme bu değerlendirmeyi yaparken şu kriterleri göz önünde bulundurur:
                        </p>

                        <ul>
                            <li><strong>Çocuğun yaşı ve gelişim durumu:</strong> Küçük yaştaki çocukların anne bakımına ihtiyacı gözetilir ancak bu mutlak bir kural değildir</li>
                            <li><strong>Ebeveynlerin bakım kapasitesi:</strong> Çocuğun fiziksel, duygusal ve eğitim ihtiyaçlarını karşılayabilme yeteneği değerlendirilir</li>
                            <li><strong>Çocuğun alışkın olduğu ortam:</strong> Çocuğun okulu, arkadaş çevresi ve yaşam düzeni göz önünde bulundurulur</li>
                            <li><strong>Ebeveyn-çocuk ilişkisi:</strong> Pedagog ve sosyal hizmet uzmanı raporları ile ebeveynlerin çocukla ilişkisi incelenir</li>
                            <li><strong>Çocuğun görüşü:</strong> İdrak yaşına ulaşmış çocuğun tercihi dikkate alınır</li>
                        </ul>

                        <p>
                            Velayet davası süreci hakkında detaylı bilgi için <Link href="/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/">velayet davası rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="dava-sureci" className="scroll-mt-24">İzmir&apos;de Velayet Davası Sürecimiz</h2>

                        <p>
                            <strong>Velayet davası avukatı</strong> olarak dava sürecini stratejik bir yaklaşımla yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Dosya İnceleme ve Strateji", desc: "Aile yapısını, çocuğun durumunu ve mevcut delilleri inceliyoruz. Pedagog raporu, okul kayıtları ve tanık beyanları gibi delil stratejisini belirliyoruz." },
                                { step: "2", title: "Dava Dilekçesi Hazırlama", desc: "Çocuğun üstün yararını ortaya koyan güçlü bir dava dilekçesi hazırlıyoruz. Tüm delilleri eksiksiz olarak dilekçeye ekliyoruz." },
                                { step: "3", title: "Pedagog ve Uzman Raporları", desc: "Mahkemenin görevlendireceği pedagog ve sosyal hizmet uzmanı incelemelerini takip ediyor, gerektiğinde özel uzman raporu aldırıyoruz." },
                                { step: "4", title: "Duruşma Takibi", desc: "Tüm duruşmalara katılıyor, tanıkları dinletiyor ve karşı tarafın iddialarına etkin cevap veriyoruz. Çocuğun dinlenmesi sürecini takip ediyoruz." },
                                { step: "5", title: "Karar ve Uygulama", desc: "Velayet kararının kesinleşmesini sağlıyor, kişisel ilişki düzenlemesinin uygulanmasını takip ediyoruz. Karara uyulmaması halinde icra takibi başlatıyoruz." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border-l-4 border-secondary">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-secondary font-bold">{item.step}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary mb-1">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="velayet-degisikligi" className="scroll-mt-24">Velayetin Değiştirilmesi Davası</h2>

                        <p>
                            Boşanma kararıyla verilen velayet, koşulların değişmesi halinde değiştirilebilir. TMK m. 183 uyarınca velayetin değiştirilmesi davası açılabilmesi için esaslı sebeplerin varlığı aranır. Velayetin değiştirilmesini gerektiren durumlar şunlardır:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Değişiklik Sebebi</th>
                                        <th className="px-6 py-4 text-left">Açıklama ve Hizmetimiz</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Çocuğun İhmal Edilmesi", desc: "Velayet sahibi ebeveynin çocuğun bakımını, eğitimini veya sağlığını ihmal etmesi durumunda velayetin değiştirilmesi talep edilir." },
                                        { title: "Kötü Muamele ve İstismar", desc: "Çocuğa fiziksel, duygusal veya cinsel istismar uygulanması en acil velayet değişikliği sebebidir. Derhal tedbir kararı talep ediyoruz." },
                                        { title: "Ebeveynin Yaşam Koşullarının Değişmesi", desc: "Velayet sahibinin madde bağımlılığı, uzun süreli hastalık veya cezaevi gibi durumlarda velayetin değiştirilmesi istenir." },
                                        { title: "Kişisel İlişkinin Engellenmesi", desc: "Velayet sahibi ebeveynin diğer ebeveynle çocuğun kişisel ilişkisini sürekli engellemesi velayet değişikliği sebebidir." },
                                        { title: "Çocuğun Yaşam Ortamının Kötüleşmesi", desc: "Çocuğun eğitiminin aksatılması, sosyal çevresinin zarar görmesi veya güvenliğinin tehlikeye girmesi halinde velayetin değiştirilmesi talep edilir." },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.title}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Velayet değişikliği davası açmadan önce yeterli delil toplamak kritik önem taşır. <strong>Velayet davası avukatı</strong> olarak delil stratejinizi belirliyor ve güçlü bir dosya hazırlıyoruz. <Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka davası</Link> konusunda da bilgi alabilirsiniz.
                        </p>

                        <SectionCTA text="Velayet davanız için uzman avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Velayet Davası Ücretleri</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">Dava Türü</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                        <th className="px-4 py-3 text-left">Ücret Aralığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Velayet Davası</td><td className="px-4 py-3">6-18 ay</td><td className="px-4 py-3">30.000 - 60.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Velayet Değişikliği</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">30.000 - 50.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına göre ilk görüşmede belirlenir. <Link href="/izmir-bosanma-avukati/">Boşanma hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Velayet Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Velayet Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Velayet davaları, velayetin değiştirilmesi ve kişisel ilişki düzenlemesi konularında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde aile hukuku davalarını takip ediyor.
                                    </p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                                        <span><strong className="text-slate-700">İzmir Barosu Sicil:</strong> 15556</span>
                                        <span><strong className="text-slate-700">TBB Sicil:</strong> 162439</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* İlgili İçerikler */}
                        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">İlgili İçerikler</p>
                            <div className="space-y-3">
                                <Link href="/izmir-bosanma-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &larr; İzmir Boşanma Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Velayet Davası Süreci ve Mahkeme Kriterleri
                                </Link>
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/sozluk/velayet/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Sözlük: Velayet Nedir?
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <div className="not-prose space-y-6 my-8">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border-b border-slate-200 pb-6">
                                    <p className="font-bold text-primary text-lg mb-2">{faq.question}</p>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Velayet Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Çocuğunuzun velayeti için hemen randevu alın.
                                    <strong className="text-white"> Velayet davası avukatı</strong> olarak size yardımcı olmaya hazırız.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="flex items-center gap-3"><Phone className="w-6 h-6 text-secondary" /><div><p className="text-sm text-slate-400">Telefon</p><a href="tel:+905445854645" className="font-bold hover:text-secondary transition-colors">0544 585 46 45</a></div></div>
                                    <div className="flex items-center gap-3"><Mail className="w-6 h-6 text-secondary" /><div><p className="text-sm text-slate-400">E-posta</p><a href="mailto:mertkagancetin@gmail.com" className="font-bold hover:text-secondary transition-colors">mertkagancetin@gmail.com</a></div></div>
                                    <div className="flex items-center gap-3"><MapPin className="w-6 h-6 text-secondary" /><div><p className="text-sm text-slate-400">Adres</p><span className="font-bold">Bayraklı, İzmir</span></div></div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                        <Link href="/iletisim/">Randevu Alın <ArrowRight className="w-5 h-5" /></Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-primary gap-2" asChild>
                                        <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">WhatsApp ile Yazın</a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </main>
    );
}
