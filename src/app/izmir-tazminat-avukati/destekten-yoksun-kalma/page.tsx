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
    title: "İzmir Destekten Yoksun Kalma Avukatı",
    description: "İzmir destekten yoksun kalma tazminatı avukatı Av. Mert Kağan Çetin. Ölüm halinde hak sahiplerinin tazminat davalarında uzman destek.",
    keywords: ["destekten yoksun kalma tazminatı avukatı İzmir", "destekten yoksun kalma", "ölüm tazminatı", "destek tazminatı"],
    openGraph: {
        title: "İzmir Destekten Yoksun Kalma Tazminatı Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de destekten yoksun kalma tazminatı davalarında uzman avukatlık hizmeti. Kaybedilen yakının desteği için tazminat.",
        url: "https://mertkagancetin.com/izmir-tazminat-avukati/destekten-yoksun-kalma/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-tazminat-avukati/destekten-yoksun-kalma/" },
};

const faqs = [
    {
        question: "Destekten yoksun kalma tazminatını kimler talep edebilir?",
        answer: "Destekten yoksun kalma tazminatını ölen kişiden fiilen destek alan veya ileride destek alması muhtemel olan herkes talep edebilir. Bunlar arasında eş, çocuklar, anne ve baba en başta gelir. Bunun yanı sıra ölen kişiyle evlilik dışı birliktelik yaşayan kişi, kardeşler ve hatta ölen kişinin düzenli olarak maddi destek sağladığı yakın akrabalar da bu tazminatı isteyebilir. Hukuki mirasçılık şartı aranmaz; fiili destek ilişkisinin varlığı yeterlidir."
    },
    {
        question: "Aktüer hesap raporu nedir ve nasıl hazırlanır?",
        answer: "Aktüer hesap raporu, destekten yoksun kalma tazminatının hesaplanmasında kullanılan matematiksel bir değerlendirme raporudur. Raporda ölenin yaşı, geliri, mesleği, yaşam beklentisi (PMF veya CSO yaşam tablolarına göre), destek payı oranları ve iskonto oranı dikkate alınır. Bilirkişi aktüer uzmanı tarafından hazırlanır. Mahkeme bu rapora dayanarak tazminat miktarını belirler."
    },
    {
        question: "Trafik kazasında ölen kişinin yakınları sigorta şirketinden tazminat alabilir mi?",
        answer: "Evet. Trafik kazasında hayatını kaybeden kişinin yakınları, karşı tarafın ZMSS sigortasından destekten yoksun kalma tazminatı talep edebilir. Sigorta şirketine yazılı başvuru yapılır ve 15 iş günü içinde yanıt beklenir. Sigorta şirketi ödemeyi reddederse veya düşük teklif sunarsa Sigorta Tahkim Komisyonu&apos;na başvurulabilir ya da doğrudan dava açılabilir. Sigortasız araç kazasında ise Güvence Hesabı&apos;na başvurulur."
    },
    {
        question: "Destekten yoksun kalma tazminatında zamanaşımı süresi nedir?",
        answer: "Destekten yoksun kalma tazminatında zamanaşımı süresi TBK m. 72 uyarınca zararın ve sorumlu kişinin öğrenilmesinden itibaren 2 yıldır. Her halükarda fiilin işlendiği tarihten itibaren 10 yıl içinde dava açılmalıdır. Ancak ölüm bir suç sonucu meydana gelmişse (örneğin trafik kazası veya iş kazası) ceza zamanaşımı süresi uygulanır ve bu süre genellikle 8-15 yıl arasında değişir."
    },
    {
        question: "Destekten yoksun kalma tazminat miktarı neye göre belirlenir?",
        answer: "Tazminat miktarı aktüer hesap raporuyla belirlenir. Hesaplamada ölen kişinin yaşı, gelir durumu, mesleği, destek süresi, desteklenen kişilerin sayısı ve yaşları, destek payı oranları ve yaşam tabloları (PMF/CSO) dikkate alınır. Ayrıca ölen kişinin kusur oranı tazminattan indirim sebebidir. Mahkeme manevi tazminata da ayrıca hükmedebilir."
    }
];

const tocItems = [
    { id: "destekten-yoksun-kalma-nedir", title: "Destekten Yoksun Kalma Nedir?" },
    { id: "kimler-talep-edebilir", title: "Kimler Talep Edebilir?" },
    { id: "hesaplama-yontemi", title: "Tazminat Hesaplama Yöntemi" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function DestektenYoksunKalmaPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Destekten Yoksun Kalma Tazminatı", "Aktüer Hesap Raporu", "Destek Payı Hesaplaması", "Ölüm Tazminatı", "Trafik Kazası Tazminatı", "İş Kazası Tazminatı"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Tazminat Avukatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/" },
                    { name: "Destekten Yoksun Kalma Tazminatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/destekten-yoksun-kalma/" }
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
                        <span className="text-secondary">Destekten Yoksun Kalma Tazminatı</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Destekten Yoksun Kalma Tazminatı Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Kaybettiğiniz yakınınızın desteği için tazminat alıyoruz. Trafik kazası, iş kazası ve tıbbi hata kaynaklı ölüm davalarında
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
                            <strong>İzmir destekten yoksun kalma tazminatı avukatı</strong> olarak trafik kazası, iş kazası ve tıbbi hata sonucu hayatını kaybeden kişilerin yakınlarının <Link href="/sozluk/destekten-yoksun-kalma/">destekten yoksun kalma</Link> tazminatı davalarını yürütüyoruz. TBK m. 53/3 kapsamında destek tazminatı hesaplama, aktüer rapor takibi ve sigorta şirketine başvuru sürecinde profesyonel hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Destekten yoksun kalma tazminatı, Türk Borçlar Kanunu m. 53/3 uyarınca bir kişinin ölümü halinde ondan fiilen destek alan veya ileride destek alması muhtemel olan kişilere tanınan tazminat hakkıdır. Bu tazminat, ölen kişinin sağlığında sağladığı maddi desteğin karşılanması amacını taşır. <strong>Destekten yoksun kalma tazminatı avukatı</strong> olarak müvekkillerimizin hak ettiği tazminatı aktüer hesap raporuyla desteklenmiş şekilde talep ediyoruz.
                        </p>

                        <h2 id="destekten-yoksun-kalma-nedir" className="scroll-mt-24">Destekten Yoksun Kalma Tazminatı Nedir?</h2>

                        <p>
                            Destekten yoksun kalma tazminatı, ölen kişinin sağlığında bakmakla yükümlü olduğu veya fiilen destek sağladığı kişilere ödenen bir tazminat türüdür. Bu tazminat miras hukukundan bağımsız olup ölenin mirasçısı olsun veya olmasın, fiili destek ilişkisi ispat edilen herkes tarafından talep edilebilir.
                        </p>

                        <p>
                            Tazminat hakkı şu kaynaklardan doğan ölüm hallerinde gündeme gelir:
                        </p>

                        <ul>
                            <li><strong>Trafik kazası:</strong> 2918 sayılı KTK kapsamında araç işleteni ve sürücüsünün sorumluluğu. ZMSS sigortasından veya Güvence Hesabı&apos;ndan talep edilebilir</li>
                            <li><strong>İş kazası:</strong> 5510 sayılı SGK Kanunu ve 6331 sayılı İSG Kanunu kapsamında işverenin sorumluluğu. SGK&apos;nın rücu davası da gündeme gelebilir</li>
                            <li><strong>Tıbbi hata (malpraktis):</strong> Doktor veya hastanenin kusuru sonucu hastanın ölümü. Özel hastanede asliye hukuk, devlet hastanesinde idare mahkemesinde dava açılır</li>
                            <li><strong>Diğer haksız fiiller:</strong> Cinayet, darp sonucu ölüm, iş cinayeti ve benzeri haksız fiil sonucu meydana gelen ölümler</li>
                        </ul>

                        <h2 id="kimler-talep-edebilir" className="scroll-mt-24">Destekten Yoksun Kalma Tazminatını Kimler Talep Edebilir?</h2>

                        <p>
                            <strong>Destekten yoksun kalma tazminatı</strong> talep edebilmek için ölen kişiyle arasında fiili destek ilişkisi bulunan herkes hak sahibidir. Mirasçılık şartı aranmaz:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Hak Sahibi</th>
                                        <th className="px-6 py-4 text-left">Koşullar ve Destek Payı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Eş", desc: "Ölenin eşi, evlilik birliği süresince destek aldığı kabul edilir. Destek payı genellikle %30-40 arasında hesaplanır. Yeniden evlenme ihtimali tazminat miktarını etkileyebilir." },
                                        { title: "Çocuklar", desc: "Ölenin çocukları, 18 yaşına kadar (erkek) veya 22 yaşına kadar (öğrenim görüyorsa) destek alır. Her çocuğun destek payı ayrı hesaplanır. Engelli çocuklarda destek süresi ömür boyudur." },
                                        { title: "Anne ve Baba", desc: "Ölenin anne ve babasının fiili destek aldığı ispat edilirse tazminat hakkı doğar. Yargıtay, anne-baba için destek karinesi uygulamaktadır." },
                                        { title: "Fiilen Destek Alanlar", desc: "Ölen kişiyle evlilik dışı birliktelik yaşayan kişi, kardeşler veya düzenli maddi destek sağlanan diğer yakınlar da fiili destek ilişkisini ispat ederek tazminat talep edebilir." },
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
                            Destekten yoksun kalma tazminatı hesaplama yöntemi ve dava süreci hakkında ayrıntılı bilgi için <Link href="/blog/destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci/">destekten yoksun kalma tazminatı rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="hesaplama-yontemi" className="scroll-mt-24">Destekten Yoksun Kalma Tazminatı Hesaplama Yöntemi</h2>

                        <p>
                            <strong>Destekten yoksun kalma tazminatı avukatı</strong> olarak tazminat hesaplama sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Gelir ve Destek Tespiti", desc: "Ölen kişinin gelir durumunu, mesleğini ve desteklediği kişileri belirliyoruz. Gelir belgesi, maaş bordrosu, vergi beyannamesi ve SGK kayıtlarını topluyoruz. Serbest çalışanlar için emsal gelir araştırması yapıyoruz." },
                                { step: "2", title: "Destek Payı Oranlarının Belirlenmesi", desc: "Her hak sahibinin destek payı oranını Yargıtay içtihatlarına uygun biçimde hesaplıyoruz. Eş, çocuk, anne-baba ve diğer desteklenen kişilerin payları toplamda %100&apos;ü geçemez." },
                                { step: "3", title: "Yaşam Tablosu ve Aktüer Hesap", desc: "PMF (Population Mortality Female/Male) veya CSO yaşam tablolarını kullanarak ölenin ve hak sahiplerinin beklenen yaşam sürelerini belirliyoruz. Bu verilerle aktüer bilirkişi raporunu hazırlatıyoruz." },
                                { step: "4", title: "Sigorta Şirketine Başvuru", desc: "Trafik kazası kaynaklı ölümlerde karşı tarafın ZMSS sigortasına veya Güvence Hesabı&apos;na başvuru yapıyoruz. Sigorta şirketinin teklifi yetersizse Tahkim Komisyonu&apos;na veya mahkemeye başvuruyoruz." },
                                { step: "5", title: "Dava ve Tazminat Tahsili", desc: "Asliye hukuk mahkemesinde destekten yoksun kalma davası açıyoruz. Aktüer bilirkişi raporu doğrultusunda tazminat miktarını talep ediyor, kesinleşen kararı icra yoluyla tahsil ediyoruz." },
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

                        <p>
                            Aktüer hesap raporunda kullanılan yaşam tabloları (PMF ve CSO) uluslararası standartlara dayanır. Türk mahkemeleri genellikle PMF 1931 tablosunu kullanmakla birlikte güncel tablolara geçiş eğilimi artmaktadır. Doğru tablonun seçimi tazminat miktarını önemli ölçüde etkiler.
                        </p>

                        <SectionCTA text="Destekten yoksun kalma tazminatınız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Destekten Yoksun Kalma Davası Ücretleri</h2>

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
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Destekten Yoksun Kalma Davası</td><td className="px-4 py-3">1-2 yıl</td><td className="px-4 py-3">50.000 - 100.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Nispi Ücret (Tazminata Oranla)</td><td className="px-4 py-3">1-2 yıl</td><td className="px-4 py-3">%10 - %20</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve tazminat miktarına göre ilk görüşmede belirlenir. Trafik kazası ve malpraktis kaynaklı tazminat davalarınız için <Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/">trafik kazası tazminatı</Link> ve <Link href="/izmir-tazminat-avukati/malpraktis-davasi/">malpraktis davası</Link> sayfalarımızı ziyaret edebilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Destekten Yoksun Kalma Tazminatı Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Destekten Yoksun Kalma Tazminatı Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Destekten yoksun kalma tazminatı davaları, aktüer hesap raporu takibi ve ölüm tazminatı davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde tazminat davalarını takip ediyor.
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
                                <Link href="/blog/destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Destekten Yoksun Kalma Tazminatı Hesaplama ve Dava Süreci
                                </Link>
                                <Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Trafik Kazası Tazminatı
                                </Link>
                                <Link href="/izmir-tazminat-avukati/malpraktis-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Malpraktis Davası Avukatı
                                </Link>
                                <Link href="/sozluk/destekten-yoksun-kalma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Destekten Yoksun Kalma Nedir? (Sözlük)
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Destekten Yoksun Kalma Tazminatınız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kaybettiğiniz yakınınızın desteği için tazminat sürecinizi başlatın.
                                    <strong className="text-white"> Destekten yoksun kalma tazminatı avukatı</strong> olarak size yardımcı olmaya hazırız.
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
