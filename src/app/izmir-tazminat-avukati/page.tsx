import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home, ShieldCheck, Scale, Gavel, Briefcase, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir Tazminat Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de tazminat davaları, maddi ve manevi tazminat, iş kazası tazminatı, trafik kazası tazminatı ve destekten yoksun kalma davalarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-tazminat-avukati/",
        "telephone": "+905445854645",
        "email": "info@mertkagancetin.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17",
            "addressLocality": "Bayraklı",
            "addressRegion": "İzmir",
            "postalCode": "35535",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.4517,
            "longitude": 27.1845
        },
        "priceRange": "$$",
        "areaServed": {
            "@type": "City",
            "name": "İzmir"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tazminat Hukuku Hizmetleri",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maddi Tazminat Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manevi Tazminat Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İş Kazası Tazminatı" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trafik Kazası Tazminatı" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Destekten Yoksun Kalma Tazminatı" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Malpraktis Tazminatı" } }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export const metadata: Metadata = {
    title: {
        absolute: "İzmir Tazminat Avukatı | Maddi & Manevi Tazminat | Av. Mert Kağan Çetin",
    },
    description: "İzmir tazminat avukatı Mert Kağan Çetin ile maddi ve manevi tazminat, iş kazası tazminatı, trafik kazası tazminatı ve destekten yoksun kalma davalarında profesyonel hukuki destek alın.",
    keywords: ["İzmir tazminat avukatı", "tazminat avukatı İzmir", "maddi tazminat davası", "manevi tazminat davası", "iş kazası tazminatı", "trafik kazası tazminatı", "destekten yoksun kalma tazminatı", "malpraktis davası", "tazminat hesaplama", "tazminat davası ücreti", "tazminat avukatı"],
    openGraph: {
        title: "İzmir Tazminat Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de maddi ve manevi tazminat, iş kazası ve trafik kazası tazminatı davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-tazminat-avukati/",
        type: "website",
    },
    other: {
        "article:modified_time": "2026-03-10",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-tazminat-avukati/",
    },
};

const faqs = [
    {
        question: "Tazminat davası ne kadar sürer?",
        answer: "Tazminat davasının süresi, davanın türüne ve karmaşıklığına göre değişir. Basit maddi tazminat davaları 6 ay - 1 yıl, iş kazası tazminatı davaları 1-2 yıl, trafik kazası davaları ise 1-3 yıl sürebilmektedir."
    },
    {
        question: "Maddi tazminat nasıl hesaplanır?",
        answer: "Maddi tazminat, zarar görenin uğradığı gerçek mali kayıp üzerinden hesaplanır. Tedavi giderleri, iş gücü kaybı, kazanç kaybı ve gelecekte doğacak zararlar dahil edilir. Bilirkişi raporu ile kesin miktar belirlenir."
    },
    {
        question: "Manevi tazminat miktarı nasıl belirlenir?",
        answer: "Manevi tazminat miktarı hakimin takdirine bağlıdır. Olayın ağırlığı, kusurun derecesi, tarafların sosyal ve ekonomik durumları ve yaşanan acı ve elem dikkate alınır. Zenginleşmeye yol açmayacak, caydırıcı bir miktar belirlenir."
    },
    {
        question: "İş kazası tazminatı nasıl alınır?",
        answer: "İş kazası geçiren işçi, işverenden maddi ve manevi tazminat talep edebilir. Kazanın SGK'ya bildirilmesi, iş göremezlik raporu alınması ve kusur oranlarının tespiti gerekir. Zamanaşımı süresi zararın öğrenilmesinden itibaren 2 yıl, kazadan itibaren 10 yıldır."
    },
    {
        question: "Trafik kazasında tazminat nasıl alınır?",
        answer: "Trafik kazasında yaralanan veya yakınını kaybeden kişiler, kusurlu sürücüden ve sigorta şirketinden tazminat talep edebilir. Zorunlu trafik sigortası (ZMSS) ve ihtiyari mali mesuliyet sigortası (kasko) kapsamında başvuru yapılabilir."
    },
    {
        question: "Destekten yoksun kalma tazminatı nedir?",
        answer: "Destekten yoksun kalma tazminatı, bir kişinin ölümü nedeniyle onun desteğinden yoksun kalan yakınlarının talep ettiği tazminattır. Eş, çocuklar ve bakmakla yükümlü olunan kişiler bu tazminatı talep edebilir."
    },
    {
        question: "Tazminat davası avukat ücreti ne kadar?",
        answer: "2026 yılında İzmir'de tazminat davası avukatlık ücreti davanın türüne göre 30.000 TL ile 100.000 TL arasında değişmektedir. İş kazası ve trafik kazası tazminatı davalarında genellikle nisbi ücret (tazminat miktarının yüzdesi) uygulanmaktadır."
    },
    {
        question: "Malpraktis (doktor hatası) tazminatı alınabilir mi?",
        answer: "Evet, tıbbi müdahale sırasında yapılan hata sonucu zarara uğrayan hastalar, hekim ve/veya hastaneden maddi ve manevi tazminat talep edebilir. Bilirkişi raporu ile tıbbi hatanın varlığı ve nedensellik bağı tespit edilmelidir."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "Tazminat Hukuku Hizmetlerimiz" },
    { id: "maddi-tazminat", title: "Maddi Tazminat Davası" },
    { id: "manevi-tazminat", title: "Manevi Tazminat Davası" },
    { id: "is-kazasi", title: "İş Kazası Tazminatı" },
    { id: "trafik-kazasi", title: "Trafik Kazası Tazminatı" },
    { id: "destekten-yoksun", title: "Destekten Yoksun Kalma" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirTazminatAvukatiPage() {
    return (
        <main className="bg-white">
            <LegalServiceSchema />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Tazminat Avukatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/" }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">İzmir Tazminat Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Tazminat Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Maddi ve manevi tazminat, iş kazası, trafik kazası ve destekten yoksun kalma davalarında
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile profesyonel hukuki destek alın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim">
                                    <Phone className="w-5 h-5" />
                                    Ücretsiz Ön Görüşme
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2" asChild>
                                <a href="tel:+905445854645">
                                    Hemen Arayın
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 bg-slate-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">İçindekiler</h2>
                        <nav className="flex flex-wrap gap-3">
                            {tocItems.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="text-sm text-primary hover:text-secondary font-medium transition-colors">
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content */}
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
            prose-ul:my-6 prose-ul:pl-6
            prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-sm
            prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-3 prose-td:text-sm
            prose-tr:even:bg-slate-50">

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir tazminat avukatı</strong>, hukuka aykırı eylem veya sözleşme ihlali sonucu zarar gören kişilerin maddi ve manevi zararlarının tazmini için dava açan, iş kazası, trafik kazası ve malpraktis gibi alanlarda uzmanlaşmış avukattır. Av. Mert Kağan Çetin, İzmir Barosu&apos;na kayıtlı olarak Bayraklı merkezli ofisinden İzmir genelinde tazminat hukuku hizmeti vermektedir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 10 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Tazminat hukuku, Türk Borçlar Kanunu&apos;nun 49-76. maddeleri kapsamında düzenlenen geniş bir hukuk dalıdır. Haksız fiil, sözleşme ihlali veya kusursuz sorumluluk hallerinde zarar gören kişilerin zararlarının tazmini, temel bir hukuki haktır. <strong>İzmir tazminat avukatı</strong> olarak müvekkillerimizin uğradıkları zararların tam ve eksiksiz olarak tazmin edilmesini sağlıyoruz.
                        </p>

                        <h2 id="hizmetlerimiz" className="scroll-mt-24">Tazminat Hukuku Hizmetlerimiz</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            {[
                                { icon: Scale, title: "Maddi Tazminat Davası", desc: "Tedavi giderleri, kazanç kaybı ve malvarlığı zararlarının tazmini" },
                                { icon: ShieldCheck, title: "Manevi Tazminat Davası", desc: "Acı, elem ve ıstırap nedeniyle manevi tazminat talepleri" },
                                { icon: Briefcase, title: "İş Kazası Tazminatı", desc: "İş kazası ve meslek hastalığı nedeniyle tazminat davaları" },
                                { icon: Gavel, title: "Trafik Kazası Tazminatı", desc: "Trafik kazası nedeniyle sigorta ve kusurlu sürücüden tazminat" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="maddi-tazminat" className="scroll-mt-24">Maddi Tazminat Davası</h2>

                        <p>
                            <strong>Maddi tazminat davası</strong>, bir kişinin hukuka aykırı bir fiil sonucunda malvarlığında meydana gelen azalmayı tazmin etmek amacıyla açılan davadır. Türk Borçlar Kanunu m. 49-50 kapsamında düzenlenen maddi tazminat, zarar görenin uğradığı gerçek zararı karşılamayı amaçlar.
                        </p>

                        <p>Maddi tazminat kapsamında talep edilebilecek kalemler:</p>

                        <ul>
                            <li><strong>Fiili zarar:</strong> Doğrudan uğranılan kayıplar (tedavi giderleri, tamir masrafları, yıkılan malların bedeli)</li>
                            <li><strong>Kazanç kaybı:</strong> Zarar verici olay nedeniyle yoksun kalınan gelir ve kazançlar</li>
                            <li><strong>İş gücü kaybı:</strong> Kalıcı sakatlık durumunda gelecekteki çalışma kapasitesindeki azalma</li>
                            <li><strong>Bakıcı giderleri:</strong> Sürekli bakıma muhtaç hale gelen mağdurun bakım masrafları</li>
                        </ul>

                        <h2 id="manevi-tazminat" className="scroll-mt-24">Manevi Tazminat Davası</h2>

                        <p>
                            <strong>Manevi tazminat</strong>, bir kişinin kişilik haklarının ihlali sonucunda duyduğu acı, elem ve ıstırabın karşılığı olarak hükmedilen tazminattır. Türk Borçlar Kanunu m. 56 ve 58 kapsamında düzenlenir.
                        </p>

                        <p>
                            Manevi tazminat miktarı belirlenirken hakimin dikkate aldığı kriterler:
                        </p>

                        <ul>
                            <li><strong>Olayın ağırlığı:</strong> Zarar verici fiilin niteliği ve sonuçlarının ciddiyeti</li>
                            <li><strong>Kusur derecesi:</strong> Zarar verenin kasıt veya ihmal derecesi</li>
                            <li><strong>Tarafların durumu:</strong> Sosyal ve ekonomik koşullar, toplumsal konumları</li>
                            <li><strong>Paranın alım gücü:</strong> Hükmedilecek miktarın caydırıcılığı ve hakkaniyeti</li>
                        </ul>

                        <h2 id="is-kazasi" className="scroll-mt-24">İş Kazası Tazminatı</h2>

                        <p>
                            İş kazası tazminatı, 5510 sayılı Kanun kapsamında iş kazası veya meslek hastalığı sonucu zarar gören işçinin, işverenden talep ettiği tazminattır. <strong>İzmir tazminat avukatı</strong> olarak iş kazası davalarında müvekkillerimize kapsamlı hukuki destek sunuyoruz.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Tazminat Türü</th>
                                        <th className="px-6 py-4 text-left">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Geçici İş Göremezlik", desc: "Tedavi süresince çalışamadığı dönem için gelir kaybı tazminatı" },
                                        { title: "Sürekli İş Göremezlik", desc: "Kalıcı sakatlık durumunda gelecekteki kazanç kaybı tazminatı" },
                                        { title: "Manevi Tazminat", desc: "İş kazası nedeniyle yaşanan fiziksel ve psikolojik acı için tazminat" },
                                        { title: "Destekten Yoksun Kalma", desc: "İş kazası sonucu vefat halinde yakınlara ödenen tazminat" },
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
                            İş kazası tazminatı davalarında zamanaşımı süresi, zararın ve failin öğrenilmesinden itibaren 2 yıl, kazanın meydana gelmesinden itibaren 10 yıldır. <Link href="/izmir-is-avukati" className="text-secondary font-bold">İş hukuku hizmetlerimiz</Link> hakkında daha fazla bilgi alabilirsiniz.
                        </p>

                        <h2 id="trafik-kazasi" className="scroll-mt-24">Trafik Kazası Tazminatı</h2>

                        <p>
                            Trafik kazalarında zarar gören kişiler, kusurlu sürücüden ve sigorta şirketinden tazminat talep edebilir. 2918 sayılı Karayolları Trafik Kanunu kapsamında düzenlenen trafik kazası tazminatı davalarında <strong>İzmir tazminat avukatı</strong> olarak müvekkillerimizi temsil ediyoruz.
                        </p>

                        <ul>
                            <li><strong>ZMSS (Zorunlu Trafik Sigortası):</strong> Kusurlu sürücünün sigortasından doğrudan başvuru ile tazminat alınabilir</li>
                            <li><strong>İhtiyari Mali Mesuliyet:</strong> ZMSS limitlerini aşan zararlar için kasko sigortasından talep</li>
                            <li><strong>Rücu davası:</strong> Sigorta şirketi ödemeyi reddederse veya eksik öderse dava yoluyla tahsil</li>
                            <li><strong>Güvence Hesabı:</strong> Sigortasız araç veya faili meçhul kazalarda Güvence Hesabı&apos;na başvuru</li>
                        </ul>

                        <h2 id="destekten-yoksun" className="scroll-mt-24">Destekten Yoksun Kalma Tazminatı</h2>

                        <p>
                            <strong>Destekten yoksun kalma tazminatı</strong>, bir kişinin ölümü nedeniyle onun maddi desteğinden yoksun kalan yakınlarının talep ettiği tazminattır (TBK m. 53). Bu tazminatı eş, çocuklar, anne-baba ve fiilen destek alan kişiler talep edebilir.
                        </p>

                        <p>
                            Hesaplamada ölen kişinin yaşı, geliri, yaşam beklentisi, destekten yararlananların yaşları ve destek payları dikkate alınır. Aktüer hesap raporu ile kesin miktar belirlenir.
                        </p>

                        <h2 id="ucretler" className="scroll-mt-24">2026 Yılı İzmir Tazminat Davası Ücretleri</h2>

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
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">Maddi Tazminat Davası</td>
                                        <td className="px-4 py-3">6 ay - 1.5 yıl</td>
                                        <td className="px-4 py-3">30.000 - 60.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">İş Kazası Tazminatı</td>
                                        <td className="px-4 py-3">1 - 2 yıl</td>
                                        <td className="px-4 py-3">50.000 - 100.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">Trafik Kazası Tazminatı</td>
                                        <td className="px-4 py-3">1 - 3 yıl</td>
                                        <td className="px-4 py-3">40.000 - 80.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">Destekten Yoksun Kalma</td>
                                        <td className="px-4 py-3">1 - 2 yıl</td>
                                        <td className="px-4 py-3">50.000 - 100.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">Malpraktis Davası</td>
                                        <td className="px-4 py-3">1 - 3 yıl</td>
                                        <td className="px-4 py-3">50.000 - 120.000 TL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="neden-biz" className="scroll-mt-24">Neden Bizi Tercih Etmelisiniz?</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: "Tazminat Uzmanlığı", desc: "Tazminat hukuku alanında deneyimli avukat ekibi" },
                                { title: "Maksimum Tazminat", desc: "Müvekkillerimizin en yüksek tazminatı alması için stratejik yaklaşım" },
                                { title: "Şeffaf İletişim", desc: "Davanızın her aşamasında düzenli bilgilendirme" },
                                { title: "Sonuç Odaklı", desc: "Bilirkişi raporları ve emsal kararlarla güçlü dava dosyası" },
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-xl p-6">
                                    <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                                    <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <div className="not-prose space-y-6 my-8">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border-b border-slate-200 pb-6">
                                    <h3 className="font-bold text-primary text-lg mb-2">{faq.question}</h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Tazminat Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Tazminat davalarınız için ücretsiz ön görüşme randevusu alın.
                                    <strong className="text-white"> İzmir tazminat avukatı</strong> ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-6 h-6 text-secondary" />
                                        <div>
                                            <p className="text-sm text-slate-400">Telefon</p>
                                            <a href="tel:+905445854645" className="font-bold hover:text-secondary transition-colors">0544 585 46 45</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-6 h-6 text-secondary" />
                                        <div>
                                            <p className="text-sm text-slate-400">E-posta</p>
                                            <a href="mailto:info@mertkagancetin.com" className="font-bold hover:text-secondary transition-colors">info@mertkagancetin.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-6 h-6 text-secondary" />
                                        <div>
                                            <p className="text-sm text-slate-400">Adres</p>
                                            <span className="font-bold">Bayraklı, İzmir</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                        <Link href="/iletisim">
                                            Randevu Alın <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-primary gap-2" asChild>
                                        <a href="https://wa.me/905445854645">
                                            WhatsApp ile Yazın
                                        </a>
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
