import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { articleProseClasses } from "@/lib/prose-classes";

export const metadata: Metadata = {
    title: "İzmir Malpraktis Davası Avukatı",
    description: "İzmir malpraktis davası avukatı Av. Mert Kağan Çetin. Doktor hatası ve tıbbi ihmal kaynaklı tazminat davalarında uzman destek.",
    keywords: ["malpraktis davası avukatı İzmir", "doktor hatası avukatı", "malpraktis tazminatı", "tıbbi hata davası"],
    openGraph: {
        title: "İzmir Malpraktis Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de malpraktis davalarında uzman avukatlık hizmeti. Doktor hatası ve tıbbi ihmal tazminat davalarında hukuki destek.",
        url: "https://mertkagancetin.com/izmir-tazminat-avukati/malpraktis-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-tazminat-avukati/malpraktis-davasi/" },
};

const faqs = [
    {
        question: "Devlet hastanesinde yapılan tıbbi hatada hangi mahkemeye başvurulur?",
        answer: "Devlet hastanesi, üniversite hastanesi veya şehir hastanesi gibi kamu sağlık kuruluşlarında meydana gelen tıbbi hatalarda idare mahkemesine tam yargı davası açılır. Davalı taraf ilgili sağlık bakanlığı veya üniversite rektörlüğüdür. Doktora doğrudan dava açılamaz; ancak idare, kusurlu personeline rücu edebilir. İdari dava açmadan önce idareye yazılı başvuru yapılması zorunludur."
    },
    {
        question: "Doktoru malpraktis nedeniyle dava edebilir miyim?",
        answer: "Özel hastanede çalışan doktoru TBK m. 49 (haksız fiil) veya TBK m. 116 (yardımcı kişilerin fiilleri) kapsamında doğrudan dava edebilirsiniz. Doktor ile birlikte hastaneyi de davalı olarak gösterebilirsiniz; bu durumda her ikisi de müteselsilen sorumlu olur. Asliye hukuk mahkemesinde dava açılır. Devlet hastanesindeki doktora ise doğrudan dava açılamaz, idare mahkemesine başvurulmalıdır."
    },
    {
        question: "Adli Tıp Kurumu raporu nasıl alınır?",
        answer: "Adli Tıp Kurumu raporu mahkeme tarafından resen veya taraf talebi üzerine istenir. Davacı olarak Adli Tıp Kurumu&apos;na doğrudan başvuramazsınız; rapor talebi mahkeme kanalıyla yapılır. Mahkeme dosyayı Adli Tıp Kurumu 3. İhtisas Kurulu&apos;na gönderir. Kurul, tıbbi kayıtları ve hasta dosyasını inceleyerek kusurun varlığını ve oranını belirler. Rapor süresi genellikle 3-6 ay arasındadır."
    },
    {
        question: "Malpraktis davasında ne kadar tazminat alınabilir?",
        answer: "Malpraktis tazminat miktarı hastanın yaşına, gelir durumuna, uğradığı zararın ağırlığına ve kusurun derecesine göre değişir. Maddi tazminat kapsamında tedavi giderleri, iş göremezlik tazminatı ve bakıcı giderleri talep edilir. Manevi tazminat ise hastanın ve yakınlarının çektiği acı ve üzüntüyü karşılar. Ağır kusurlarda yüz binlerce liraya ulaşan tazminatlara hükmedilmektedir."
    },
    {
        question: "Estetik operasyonda hata durumunda ne yapılabilir?",
        answer: "Estetik operasyonlar eser sözleşmesi niteliğindedir; yani doktor belirli bir sonucu taahhüt eder. Vaat edilen sonucun gerçekleşmemesi halinde doktorun kusuru karineten kabul edilir. Hasta, yeniden ameliyat masrafları, maddi zarar ve manevi tazminat talep edebilir. İspat yükü doktordadır; doktor kusursuzluğunu ispatlamalıdır. Dava açmadan önce detaylı bir tıbbi değerlendirme raporu alınması önerilir."
    }
];

const tocItems = [
    { id: "malpraktis-turleri", title: "Malpraktis Türleri" },
    { id: "dava-sureci", title: "Malpraktis Davası Süreci" },
    { id: "ozel-devlet-farki", title: "Özel ve Devlet Hastanesi Farkı" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function MalpraktisDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Malpraktis Davası", "Tıbbi Hata Tazminatı", "Doktor Hatası", "Sağlık Hukuku", "Adli Tıp Raporu", "Haksız Fiil Sorumluluğu"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Tazminat Avukatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/" },
                    { name: "Malpraktis Davası", url: "https://mertkagancetin.com/izmir-tazminat-avukati/malpraktis-davasi/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-tazminat-avukati/" className="hover:text-white transition-colors">İzmir Tazminat Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Malpraktis Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Malpraktis Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Tıbbi hata tazminat davanızı yürütüyoruz. Yanlış teşhis, hatalı ameliyat ve tedavi ihmali davalarında
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile profesyonel hukuki destek alın.
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
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-4xl mx-auto ${articleProseClasses}`}>

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir malpraktis davası avukatı</strong> olarak tıbbi hata sonucu zarar gören hastaların <Link href="/sozluk/malpraktis/">malpraktis</Link> tazminat davalarını yürütüyoruz. TBK m. 49 (haksız fiil) ve TBK m. 116 (yardımcı kişilerin fiillerinden sorumluluk) kapsamında doktor hatası, hastane ihmali ve tedavi kusuru davalarında profesyonel hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Malpraktis, sağlık profesyonelinin tıbbi standartlara aykırı davranarak hastaya zarar vermesidir. Türk hukuk sisteminde tıbbi hata davaları hem özel hukuk hem de idare hukuku kapsamında ele alınır. Özel hastanedeki hatalar asliye hukuk mahkemesinde, devlet hastanesindeki hatalar ise idare mahkemesinde dava edilir. <strong>Malpraktis davası avukatı</strong> olarak her iki yargı kolunda da müvekkillerimizi temsil ediyoruz.
                        </p>

                        <h2 id="malpraktis-turleri" className="scroll-mt-24">Malpraktis Türleri ve Tıbbi Hata Örnekleri</h2>

                        <p>
                            Tıbbi hata pek çok farklı biçimde ortaya çıkabilir. İzmir&apos;de en sık karşılaştığımız malpraktis türleri:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Malpraktis Türü</th>
                                        <th className="px-6 py-4 text-left">Açıklama ve Hukuki Süreç</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Yanlış Teşhis", desc: "Hastanın rahatsızlığının yanlış veya geç teşhis edilmesi sonucu tedavinin gecikmesi veya yanlış tedavi uygulanması. Tanı testlerinin yapılmaması veya sonuçlarının yanlış yorumlanması bu kategoriye girer." },
                                        { title: "Hatalı Ameliyat", desc: "Cerrahi müdahale sırasında yapılan teknik hatalar: yanlış organ veya uzuv ameliyatı, ameliyat bölgesinde unutulan yabancı cisim, sinir hasarı veya gereksiz organ alınması gibi durumlar." },
                                        { title: "İlaç Hatası", desc: "Yanlış ilaç reçete edilmesi, doz hatası, ilaç etkileşimlerinin göz ardı edilmesi veya hastanın alerjisine rağmen kontrendike ilaç verilmesi durumlarında sorumluluk doğar." },
                                        { title: "Tedavi İhmali", desc: "Hastanın takibinin yapılmaması, kontrol muayenelerinin atlanması, gerekli tetkiklerin istenmemesi veya komplikasyonlara zamanında müdahale edilmemesi tedavi ihmali kapsamındadır." },
                                        { title: "Bilgilendirme Eksikliği", desc: "Hastanın tedavi riskleri, alternatif yöntemler ve olası komplikasyonlar hakkında yeterince bilgilendirilmemesi aydınlatılmış onam yükümlülüğünün ihlalidir. Aydınlatma yapılmadan alınan onam geçersizdir." },
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
                            Tıbbi hata tazminat davası sürecinin detayları için <Link href="/blog/malpraktis-davasi-doktor-hatasi-tazminati/">malpraktis davası ve doktor hatası tazminatı rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="dava-sureci" className="scroll-mt-24">Malpraktis Davası Süreci</h2>

                        <p>
                            <strong>Malpraktis davası avukatı</strong> olarak tıbbi hata tazminat sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Tıbbi Kayıt ve Dosya İnceleme", desc: "Hastane kayıtları, epikriz raporları, ameliyat notları, anestezi formları ve hasta onam formlarını temin ediyoruz. Tıbbi uzman görüşü alarak kusurun varlığını ön değerlendirmeye tabi tutuyoruz." },
                                { step: "2", title: "Zamanaşımı ve Görev Tespiti", desc: "Malpraktis davalarında zamanaşımı zararın öğrenilmesinden itibaren 2 yıl, her halukarda 10 yıldır. Özel hastane için asliye hukuk, devlet hastanesi için idare mahkemesi görevlidir. Doğru mahkemeyi belirleyerek süreci başlatıyoruz." },
                                { step: "3", title: "Dava ve Delil Sunumu", desc: "Tıbbi kayıtlar, tanık ifadeleri ve uzman görüşleriyle birlikte dava dilekçesini hazırlıyoruz. Adli Tıp Kurumu 3. İhtisas Kurulu veya üniversite öğretim üyelerinden bilirkişi raporu talep ediyoruz." },
                                { step: "4", title: "Bilirkişi Raporu Takibi", desc: "Adli Tıp Kurumu raporunun dosyaya gelmesini takip ediyoruz. Rapor aleyhte ise itiraz dilekçesi hazırlayarak yeni bilirkişi heyetinden rapor istiyoruz. Kusur oranı ve tazminat miktarı bu raporla belirlenir." },
                                { step: "5", title: "Karar ve Tazminat Tahsili", desc: "Mahkeme kararı sonrası tazminatın tahsili için icra takibi başlatıyoruz. Kararın istinaf veya temyiz aşamalarını takip ediyor, kesinleşen tazminatı tahsil ediyoruz." },
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

                        <h2 id="ozel-devlet-farki" className="scroll-mt-24">Özel Hastane ve Devlet Hastanesi Farkı</h2>

                        <p>
                            Malpraktis davasının açılacağı mahkeme, hatanın meydana geldiği sağlık kuruluşunun türüne göre farklılık gösterir. Bu ayrım davacının stratejisini doğrudan etkiler.
                        </p>

                        <h3>Özel Hastanede Tıbbi Hata</h3>

                        <p>
                            Özel hastanede meydana gelen tıbbi hatalarda <strong>asliye hukuk mahkemesi</strong> görevlidir. Davada hem doktor hem de hastane birlikte davalı olarak gösterilebilir. Hastane ile hasta arasında vekalet sözleşmesi (estetik operasyonlarda eser sözleşmesi) ilişkisi vardır. TBK m. 116 uyarınca hastane, bünyesinde çalıştırdığı doktorun kusurundan sorumludur. Doktor ve hastane müteselsil sorumluluk altındadır.
                        </p>

                        <h3>Devlet Hastanesinde Tıbbi Hata</h3>

                        <p>
                            Devlet hastanesi, üniversite hastanesi veya şehir hastanesinde meydana gelen hatalarda <strong>idare mahkemesi</strong> görevlidir. Dava doğrudan doktora değil, ilgili idareye (Sağlık Bakanlığı, üniversite rektörlüğü) karşı açılır. İdari dava açmadan önce idareye yazılı başvuru yapılması zorunludur. İdare 60 gün içinde yanıt vermezse dava açılabilir. İspat yükü idarededir; idare, tıbbi müdahalenin standartlara uygun olduğunu ispatlamalıdır.
                        </p>

                        <SectionCTA text="Tıbbi hata tazminat davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Malpraktis Davası Ücretleri</h2>

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
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Malpraktis Davası - Özel Hastane</td><td className="px-4 py-3">1-3 yıl</td><td className="px-4 py-3">50.000 - 120.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Malpraktis Davası - Devlet Hastanesi (İdari Dava)</td><td className="px-4 py-3">1-3 yıl</td><td className="px-4 py-3">50.000 - 100.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve tazminat miktarına göre ilk görüşmede belirlenir. Trafik kazası kaynaklı tazminat davalarınız için <Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/">trafik kazası tazminatı sayfamızı</Link> ziyaret edebilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Malpraktis Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Malpraktis Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Malpraktis davaları, doktor hatası tazminat davaları ve sağlık hukuku uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde tazminat davalarını takip ediyor.
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
                                <Link href="/izmir-tazminat-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    ← İzmir Tazminat Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/blog/malpraktis-davasi-doktor-hatasi-tazminati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Malpraktis Davası ve Doktor Hatası Tazminatı Rehberi
                                </Link>
                                <Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Trafik Kazası Tazminatı
                                </Link>
                                <Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Destekten Yoksun Kalma Tazminatı
                                </Link>
                                <Link href="/sozluk/malpraktis/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Malpraktis Nedir? (Sözlük)
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Malpraktis Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Tıbbi hata tazminat süreciniz için hemen randevu alın.
                                    <strong className="text-white"> Malpraktis davası avukatı</strong> olarak size yardımcı olmaya hazırız.
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
