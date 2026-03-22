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
    title: "İzmir Trafik Kazası Tazminat Avukatı",
    description: "İzmir trafik kazası tazminat avukatı Av. Mert Kağan Çetin. Sigorta başvurusu ve trafik kazası tazminat davalarında uzman destek.",
    keywords: ["trafik kazası tazminat avukatı İzmir", "trafik kazası tazminatı", "sigorta tazminatı", "trafik kazası avukatı"],
    openGraph: {
        title: "İzmir Trafik Kazası Tazminat Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de trafik kazası tazminat davalarında uzman avukatlık hizmeti. Sigorta başvurusu ve dava sürecinde hukuki destek.",
        url: "https://mertkagancetin.com/izmir-tazminat-avukati/trafik-kazasi-tazminati/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-tazminat-avukati/trafik-kazasi-tazminati/" },
};

const faqs = [
    {
        question: "Sigorta şirketi düşük teklif verirse ne yapmalıyım?",
        answer: "Sigorta şirketlerinin teklif ettiği tazminat miktarı çoğu zaman gerçek zararın çok altındadır. Teklifi kabul etmek zorunda değilsiniz. Öncelikle teklifi reddettiğinizi yazılı olarak bildirin. Ardından Sigorta Tahkim Komisyonu'na başvurabilir veya doğrudan dava açabilirsiniz. Aktüer bilirkişi raporu ile gerçek zararınız hesaplanır ve mahkeme sigorta şirketini bu tutarı ödemeye mahkum eder. Teklifi kabul etmeden önce mutlaka bir trafik kazası tazminat avukatına danışmanızı öneririz."
    },
    {
        question: "Sigorta Tahkim Komisyonu süreci nasıl işler?",
        answer: "Sigorta Tahkim Komisyonu, sigorta şirketiyle anlaşmazlık halinde başvurulan bağımsız bir karar organıdır. Başvuru için önce sigorta şirketine yazılı başvuru yapılmış ve 15 iş günü içinde yanıt alınamamış veya olumsuz yanıt alınmış olmalıdır. Komisyona başvuru ücreti dava masraflarından düşüktür. 40.000 TL altı uyuşmazlıklarda hakem kararı kesindir, üzerinde itiraz yolu açıktır. Süreç genellikle 4-6 ay içinde sonuçlanır."
    },
    {
        question: "Kusur oranına nasıl itiraz edebilirim?",
        answer: "Trafik kazası tespit tutanağındaki kusur oranı kesin değildir. Tutanaktaki kusur oranına itiraz etmek için dava sırasında bilirkişi incelemesi talep edilir. Bilirkişi heyeti kaza yerini, güvenlik kamerası kayıtlarını, araç hasar durumunu ve tanık ifadelerini değerlendirerek yeni bir kusur raporu düzenler. Ayrıca Adli Tıp Kurumu veya üniversite öğretim üyelerinden oluşan bilirkişi heyetinden ek rapor alınabilir."
    },
    {
        question: "Sigortasız araç çarptığında tazminat alabilir miyim?",
        answer: "Evet, sigortasız aracın karıştığı kazalarda Güvence Hesabı devreye girer. Güvence Hesabı, ZMSS poliçesi bulunmayan araçların sebep olduğu kazalarda mağdurların zararını karşılamak için kurulmuş bir fondur. Ayrıca faili meçhul kazalarda ve çalıntı araçla yapılan kazalarda da Güvence Hesabı'na başvurulabilir. Başvuru süreci sigorta şirketine başvuruya benzer şekilde yürütülür."
    },
    {
        question: "Trafik kazası tazminatında zamanaşımı süresi nedir?",
        answer: "Trafik kazası tazminat davalarında zamanaşımı süresi 2918 sayılı Karayolları Trafik Kanunu m. 109 uyarınca 2 yıldır. Bu süre kazanın ve sorumlu kişinin öğrenildiği tarihten itibaren başlar. Ancak kaza aynı zamanda bir ceza hukuku suçu teşkil ediyorsa ceza zamanaşımı süresi uygulanır ki bu süre genellikle 8-15 yıl arasında değişir. Her durumda en geç 10 yıl içinde dava açılmalıdır."
    }
];

const tocItems = [
    { id: "trafik-kazasi-turleri", title: "Trafik Kazası Türleri" },
    { id: "tazminat-sureci", title: "Tazminat Başvuru Süreci" },
    { id: "sigorta-basvurusu", title: "Sigorta ve Tahkim Süreci" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function TrafikKazasiTazminatiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Trafik Kazası Tazminatı", "Karayolları Trafik Kanunu", "ZMSS Başvurusu", "Sigorta Tahkim Komisyonu", "Güvence Hesabı", "Maddi ve Manevi Tazminat"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Tazminat Avukatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/" },
                    { name: "Trafik Kazası Tazminatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/trafik-kazasi-tazminati/" }
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
                        <span className="text-secondary">Trafik Kazası Tazminatı</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Trafik Kazası Tazminat Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Trafik kazası tazminatınızı alıyoruz. Sigorta başvurusu, Tahkim Komisyonu ve dava sürecinde
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
                            <strong>İzmir trafik kazası tazminat avukatı</strong> olarak 2918 sayılı Karayolları Trafik Kanunu kapsamında trafik kazası mağdurlarının <Link href="/sozluk/maddi-tazminat/">maddi</Link> ve <Link href="/sozluk/manevi-tazminat/">manevi tazminat</Link> haklarını koruyoruz. Sigorta şirketine başvurudan Tahkim Komisyonu&apos;na, dava sürecinden icra takibine kadar her aşamada profesyonel hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Trafik kazaları Türkiye&apos;de en yaygın <Link href="/sozluk/haksiz-fiil/">haksız fiil</Link> davalarından biridir. 2918 sayılı Karayolları Trafik Kanunu, kaza sonrası mağdurların tazminat haklarını ayrıntılı biçimde düzenler. Ancak sigorta şirketleri genellikle gerçek zararın çok altında teklifler sunarak mağdurları hızlı uzlaşmaya yönlendirir. <strong>Trafik kazası tazminat avukatı</strong> olarak müvekkillerimizin hak ettiği tazminatı eksiksiz almalarını sağlıyoruz.
                        </p>

                        <h2 id="trafik-kazasi-turleri" className="scroll-mt-24">Trafik Kazası Türleri ve Tazminat Hakları</h2>

                        <p>
                            Trafik kazası türüne göre tazminat talep süreci ve sorumluluk rejimi farklılık gösterir. İzmir&apos;de en sık karşılaştığımız trafik kazası türleri:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Kaza Türü</th>
                                        <th className="px-6 py-4 text-left">Tazminat Süreci ve Hizmetimiz</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Araç Çarpışması", desc: "İki veya daha fazla aracın karıştığı kazalarda kusur oranı tespiti, trafik kazası tespit tutanağı incelenmesi ve ZMSS başvurusu yapıyoruz. Karşı tarafın sigortasından tazminat alıyoruz." },
                                        { title: "Yayaya Çarpma", desc: "Yayaya çarpan aracın işleteni ve sürücüsü KTK m. 85-86 uyarınca kusursuz sorumluluk ilkesine tabidir. Yaya tamamen kusurlu olsa bile araç işleteninin sorumluluğu devam eder." },
                                        { title: "Araç Devrilmesi", desc: "Tek taraflı devrilme kazalarında kasko poliçesi ve araç imalat hatası sorumlulukları araştırılır. Yolcu konumundaki kişilerin ZMSS kapsamında tazminat hakları mevcuttur." },
                                        { title: "Sigortasız Araç Kazası", desc: "ZMSS poliçesi bulunmayan araçların karıştığı kazalarda Güvence Hesabı&apos;na başvurarak mağdurların zararını tazmin ediyoruz." },
                                        { title: "Faili Meçhul Kaza", desc: "Kazaya neden olan aracın tespit edilemediği durumlarda Güvence Hesabı devreye girer. Olay yeri inceleme raporu ve tanık ifadeleri ile başvuru sürecini yürütüyoruz." },
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
                            Trafik kazası tazminat sürecinin tüm aşamaları hakkında detaylı bilgi için <Link href="/blog/trafik-kazasi-tazminati-alma-sureci/">trafik kazası tazminatı alma süreci rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="tazminat-sureci" className="scroll-mt-24">Trafik Kazası Tazminat Başvuru Süreci</h2>

                        <p>
                            <strong>Trafik kazası tazminat avukatı</strong> olarak tazminat sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Kaza Sonrası Delil Toplama", desc: "Trafik kazası tespit tutanağı, hastane raporları, iş göremezlik belgesi, araç hasar fotoğrafları ve güvenlik kamerası kayıtlarını topluyoruz. Kusur oranı tespiti için gerekli tüm delilleri derliyoruz." },
                                { step: "2", title: "ZMSS Sigorta Başvurusu", desc: "Karşı tarafın Zorunlu Mali Sorumluluk Sigortası kapsamında sigorta şirketine başvuru yapıyoruz. Ekspertiz raporunu inceliyor ve gerçek zarar miktarını hesaplıyoruz." },
                                { step: "3", title: "Bilirkişi ve Aktüer Hesap", desc: "Maddi zarar, iş göremezlik tazminatı ve manevi tazminat kalemlerini aktüer bilirkişi raporu ile hesaplatıyoruz. Tüm tazminat kalemlerinin eksiksiz talep edilmesini sağlıyoruz." },
                                { step: "4", title: "Tahkim veya Dava Yolu", desc: "Sigorta şirketinin reddi veya düşük teklifi halinde Sigorta Tahkim Komisyonu&apos;na başvuruyor veya Asliye Hukuk Mahkemesi&apos;nde dava açıyoruz." },
                                { step: "5", title: "Tazminat Tahsili", desc: "Kesinleşen tazminat kararını icra takibi yoluyla tahsil ediyoruz. Sigorta şirketinin ödeme yapmaması halinde malvarlığı araştırması ve haciz işlemleri başlatıyoruz." },
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

                        <h2 id="sigorta-basvurusu" className="scroll-mt-24">Sigorta Başvurusu ve Tahkim Komisyonu Süreci</h2>

                        <p>
                            Trafik kazası sonrası tazminat almanın ilk adımı karşı tarafın ZMSS sigortasına başvurmaktır. Sigorta şirketi 15 iş günü içinde başvuruya yanıt vermek zorundadır. Yanıt verilmemesi veya yetersiz teklif sunulması halinde iki yol mevcuttur:
                        </p>

                        <h3>Sigorta Tahkim Komisyonu Başvurusu</h3>

                        <p>
                            Sigorta Tahkim Komisyonu, mahkemeye göre daha hızlı ve düşük maliyetli bir çözüm yoludur. Komisyona başvuru için sigorta şirketine başvuru yapılmış ve sonuç alınamamış olması gerekir. Hakem heyeti dosya üzerinden karar verir; duruşma yapılmaz. Süreç ortalama 4-6 ayda sonuçlanır.
                        </p>

                        <h3>Güvence Hesabı Başvurusu</h3>

                        <p>
                            Güvence Hesabı şu durumlarda devreye girer: Kazaya karışan aracın ZMSS poliçesi yoksa, sigorta şirketi iflas etmişse, araç çalıntıysa veya faili meçhul kazalarda. Güvence Hesabı ZMSS limitlerinde tazminat öder. Başvuru süreci sigorta başvurusuna paralel yürütülür.
                        </p>

                        <p>
                            <strong>Kusur oranı tespiti</strong> trafik kazası tazminatının belirlenmesinde en kritik unsurdur. Trafik kazası tespit tutanağındaki kusur oranı tarafların mutabakatına dayansa bile mahkemece yeniden değerlendirilebilir. Bilirkişi heyeti kaza yerini, kamera kayıtlarını ve araç hasarlarını inceleyerek nihai kusur raporunu düzenler.
                        </p>

                        <SectionCTA text="Trafik kazası tazminatınız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Trafik Kazası Tazminat Dava Ücretleri</h2>

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
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Sigorta Tahkim Başvurusu</td><td className="px-4 py-3">4-6 ay</td><td className="px-4 py-3">30.000 - 50.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Trafik Kazası Tazminat Davası</td><td className="px-4 py-3">6 ay - 2 yıl</td><td className="px-4 py-3">40.000 - 80.000 TL</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Nispi Ücret (Tazminata Oranla)</td><td className="px-4 py-3">6 ay - 2 yıl</td><td className="px-4 py-3">%10 - %20</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve tazminat miktarına göre ilk görüşmede belirlenir. Destekten yoksun kalma tazminatı hakkında bilgi almak için <Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/">destekten yoksun kalma tazminatı sayfamızı</Link> ziyaret edebilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Trafik Kazası Tazminat Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Trafik Kazası Tazminat Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Trafik kazası tazminat davaları, sigorta uyuşmazlıkları ve Tahkim Komisyonu başvurularında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde tazminat davalarını takip ediyor.
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
                                <Link href="/blog/trafik-kazasi-tazminati-alma-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Trafik Kazası Tazminatı Alma Süreci Rehberi
                                </Link>
                                <Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Destekten Yoksun Kalma Tazminatı
                                </Link>
                                <Link href="/izmir-tazminat-avukati/malpraktis-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Malpraktis Davası Avukatı
                                </Link>
                                <Link href="/sozluk/maddi-tazminat/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Maddi Tazminat Nedir? (Sözlük)
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Trafik Kazası Tazminatınız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Trafik kazası tazminat süreciniz için hemen randevu alın.
                                    <strong className="text-white"> Trafik kazası tazminat avukatı</strong> olarak size yardımcı olmaya hazırız.
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
