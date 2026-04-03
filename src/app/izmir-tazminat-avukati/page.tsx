import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home, ShieldCheck, Scale, Gavel, Briefcase, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { articleProseClasses } from "@/lib/prose-classes";


function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir Tazminat Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de tazminat davaları, maddi ve manevi tazminat, iş kazası tazminatı, trafik kazası tazminatı ve destekten yoksun kalma davalarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-tazminat-avukati/",
        "telephone": "+905445854645",
        "email": "mertkagancetin@gmail.com",
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
        absolute: "İzmir Tazminat Avukatı | Maddi & Manevi | Hemen Arayın",
    },
    description: "İzmir tazminat avukatı Av. Mert Kağan Çetin ile maddi-manevi tazminat, iş kazası, trafik kazası ve malpraktis davalarında uzman hukuki destek. Hemen arayın.",
    keywords: ["İzmir tazminat avukatı", "tazminat avukatı İzmir", "maddi tazminat davası", "manevi tazminat davası", "iş kazası tazminatı", "trafik kazası tazminatı", "destekten yoksun kalma tazminatı", "malpraktis davası", "tazminat hesaplama", "tazminat davası ücreti", "tazminat avukatı"],
    openGraph: {
        title: "İzmir Tazminat Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de maddi ve manevi tazminat, iş kazası ve trafik kazası tazminatı davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-tazminat-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-03-22",
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
    },
    {
        question: "Tazminat davalarına hangi avukat bakar?",
        answer: "Tazminat davalarına borçlar hukuku ve haksız fiil alanında uzmanlaşmış avukatlar bakar. Tazminat davaları geniş bir alanı kapsar: Trafik kazası tazminatı, iş kazası tazminatı, malpraktis (doktor hatası), destekten yoksun kalma ve genel haksız fiil tazminatları. Her bir tazminat türü farklı uzmanlık gerektirir. Trafik kazası davalarında sigorta hukuku bilgisi, iş kazası davalarında iş hukuku bilgisi, malpraktis davalarında ise sağlık hukuku bilgisi önem taşır. Tazminat davaları asliye hukuk mahkemelerinde görülür. İzmir'de tazminat davalarında büromuz maddi ve manevi tazminat hesaplama, bilirkişi raporu değerlendirme ve sigorta şirketleriyle müzakere konularında uzman hukuki destek sunmaktadır."
    },
    {
        question: "Avukatlar tazminat davasında yüzde kaç alır?",
        answer: "Tazminat davalarında avukatlar genellikle iki farklı ücretlendirme yöntemi uygular: Maktu (sabit) ücret veya nispi (yüzdelik) ücret. Nispi ücret sisteminde avukat, kazanılan tazminat miktarının belirli bir yüzdesini alır. Bu oran genellikle %10 ile %25 arasında değişir ve Avukatlık Kanunu m. 164 uyarınca %25'i geçemez. Maktu ücret sisteminde ise dava başında belirlenen sabit bir tutar ödenir. Trafik kazası ve iş kazası gibi yüksek miktarlı tazminat davalarında nispi ücret tercih edilir; bu yöntemde müvekkil dava başında büyük bir ödeme yapmaz, avukat da sonuç odaklı çalışır. İzmir Barosu asgari ücret tarifesinin altında ücret belirlenemez."
    },
    {
        question: "İzmir'de telefonla ücretsiz avukat danışma hattı var mı?",
        answer: "İzmir'de ücretsiz hukuki danışma almak için birkaç kanal bulunmaktadır. İzmir Barosu Adli Yardım Merkezi'ne 0232 463 00 13 numarasından ulaşabilirsiniz. ALO 176 (UYAP Bilgi Hattı) üzerinden genel hukuki bilgilendirme alabilirsiniz. Ayrıca CİMER ve e-Devlet üzerinden de hukuki başvuru yapılabilir. Ancak bu kanallar genel bilgilendirme sağlar; tazminat hesaplama, kusur oranı tespiti ve dava stratejisi gibi detaylı hukuki analiz sunmaz. Tazminat davalarında doğru tazminat miktarını belirlemek ve zamanaşımı sürelerini kaçırmamak için alanında uzman bir tazminat avukatına danışmanız önerilir. Büromuzda tazminat hukuku alanında ilk ön görüşme ücretsizdir."
    },
    {
        question: "Manevi tazminat davasında avukat ücretini kim öder?",
        answer: "Manevi tazminat davasında avukatlık ücreti kural olarak davayı açan kişi (davacı) tarafından ödenir. Ancak dava kazanıldığında, mahkeme karşı tarafa (davalıya) vekalet ücreti yükler. Bu vekalet ücreti Avukatlık Asgari Ücret Tarifesi'ne göre belirlenir ve davacının kendi avukatına ödediği ücretten farklı olabilir. Davayı kaybeden taraf ise hem kendi avukatının ücretini hem de karşı tarafa hükmedilen vekalet ücretini öder. Adli yardım kapsamında dava açılmışsa avukat ücreti devlet tarafından karşılanır. Nispi ücret anlaşması yapılmışsa avukat ücreti tazminat miktarından tahsil edilir, yani müvekkil dava başında ödeme yapmayabilir."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "Tazminat Hukuku Hizmetlerimiz" },
    { id: "ne-zaman-avukat", title: "Tazminat Avukatına Ne Zaman İhtiyaç Duyulur?" },
    { id: "dava-sureci", title: "Tazminat Davası Süreci" },
    { id: "maddi-tazminat", title: "Maddi Tazminat Davası" },
    { id: "manevi-tazminat", title: "Manevi Tazminat Davası" },
    { id: "is-kazasi", title: "İş Kazası Tazminatı" },
    { id: "trafik-kazasi", title: "Trafik Kazası Tazminatı" },
    { id: "destekten-yoksun", title: "Destekten Yoksun Kalma" },
    { id: "zamanasimi", title: "Zamanaşımı Süreleri" },
    { id: "avukatli-avukatsiz", title: "Avukatlı mı Avukatsız mı?" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirTazminatAvukatiPage() {
    return (
        <main className="bg-white">
            <LegalServiceSchema />
            <PersonSchema knowsAbout={["Tazminat Hukuku", "Maddi Tazminat", "Manevi Tazminat", "Trafik Kazası Tazminatı", "İş Kazası Tazminatı", "Malpraktis Davası", "Destekten Yoksun Kalma Tazminatı"]} />

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
                            İzmir Tazminat Avukatı Hizmeti
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Maddi ve manevi tazminat, iş kazası, trafik kazası ve destekten yoksun kalma davalarında
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile profesyonel hukuki destek alın.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim/">
                                    <Phone className="w-5 h-5" />
                                    Hemen Arayın
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
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">İçindekiler</p>
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
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-4xl mx-auto ${articleProseClasses}`}>

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir tazminat avukatı</strong>, hukuka aykırı eylem veya sözleşme ihlali sonucu zarar gören kişilerin haklarını korur. Bu avukat, maddi ve manevi zararların tazmini için dava açar. İş kazası, trafik kazası ve malpraktis gibi alanlarda uzmanlaşmıştır. Av. Mert Kağan Çetin, <a href="https://www.izmirbarosu.org.tr/" target="_blank" rel="noopener noreferrer">İzmir Barosu</a>&apos;na kayıtlıdır. Bayraklı merkezli ofisinden İzmir genelinde tazminat hukuku hizmeti veriyor.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Tazminat hukuku, Türk Borçlar Kanunu&apos;nun 49-76. maddeleri kapsamında düzenlenen geniş bir hukuk dalıdır. Haksız fiil, sözleşme ihlali veya kusursuz sorumluluk hallerinde zarar gören kişiler tazminat talep edebilir. Bu, temel bir hukuki haktır. <strong>İzmir tazminat avukatı</strong> olarak müvekkillerimizin zararlarının tam ve eksiksiz şekilde karşılanmasını sağlıyoruz.
                        </p>

                        {/* İzmir Tazminat İstatistikleri */}
                        <div className="not-prose my-10 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">#</span>
                                İzmir&apos;de Tazminat Davaları: Rakamlarla Güncel Durum
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { value: "15.025", label: "İzmir trafik kazası (2024)", sub: "Ölümlü ve yaralamalı kaza sayısı", source: "TÜİK 2024" },
                                    { value: "198.000", label: "Tazminat dosyası (2024, Türkiye)", sub: "2023'te 141.000 idi — %40 artış", source: "Adalet Bakanlığı 2024" },
                                    { value: "615.240", label: "Sigorta Tahkim başvurusu (2024)", sub: "%94'ü trafik sigortası kaynaklı", source: "Sigorta Tahkim Komisyonu" },
                                    { value: "6.352", label: "Trafik kazası ölüm (2024, Türkiye)", sub: "Günde ortalama 17,4 can kaybı", source: "TÜİK / EGM 2024" },
                                    { value: "54.701", label: "İzmir iş kazası (2024)", sub: "112 işçi hayatını kaybetti", source: "SGK 2024" },
                                    { value: "5.933", label: "Malpraktis davası (5 yıllık)", sub: "172 milyon ₺ tazminata hükmedildi", source: "Sağlık Bakanlığı 2017-2022" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                                        <p className="text-2xl font-bold text-secondary mb-1">{stat.value}</p>
                                        <p className="text-sm font-semibold text-slate-800 mb-1">{stat.label}</p>
                                        <p className="text-xs text-slate-500 mb-2">{stat.sub}</p>
                                        <p className="text-[10px] text-slate-400 italic">Kaynak: {stat.source}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 mt-4 text-center">
                                Veriler TÜİK, SGK, Adalet Bakanlığı, Sigorta Tahkim Komisyonu ve Sağlık Bakanlığı resmi kaynaklarından derlenmiştir.
                            </p>
                        </div>

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
                                        <p className="font-bold text-primary mb-1">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hangi Durumlarda Tazminat Avukatına İhtiyacınız Var */}
                        <h2 id="ne-zaman-avukat" className="scroll-mt-24">Hangi Durumlarda Tazminat Avukatına İhtiyacınız Var?</h2>

                        <p>
                            Tazminat davaları teknik bir hukuk alanıdır. Zamanaşımı süreleri, bilirkişi raporları ve kusur oranları büyük önem taşır.
                            Aşağıdaki durumlardan birini yaşıyorsanız bir <strong>İzmir tazminat avukatı</strong> ile görüşün.
                            Böylece hak kaybı yaşamazsınız:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { title: "Trafik kazasında yaralandıysanız veya yakınınızı kaybettiyseniz", desc: "Sigorta şirketi başvurusu, kusur tespiti ve tazminat hesaplaması profesyonel destek gerektirir. Sigorta şirketinin ilk teklifini kabul etmeyin." },
                                { title: "İş kazası geçirdiyseniz", desc: "İşverenin iş güvenliği yükümlülüklerini yerine getirmemesi halinde maddi ve manevi tazminat hakkınız doğar." },
                                { title: "Doktor hatası (malpraktis) nedeniyle zarar gördüyseniz", desc: "Yanlış teşhis, hatalı ameliyat veya tedavi ihmali sonucu Adli Tıp Kurumu raporu ile tazminat talep edebilirsiniz." },
                                { title: "Haksız fiil nedeniyle maddi zarara uğradıysanız", desc: "Malvarlığınıza verilen zararın tazmini için 2 yıllık zamanaşımı süresi içinde dava açmanız gerekir." },
                                { title: "Sigorta şirketi tazminat ödemeyi reddediyorsa", desc: "Zorunlu trafik sigortası veya kasko kapsamında hak ettiğiniz tazminatı almak için hukuki süreç başlatılabilir." },
                                { title: "Destekten yoksun kaldıysanız", desc: "Yakınınızın vefatı nedeniyle maddi desteğinden yoksun kaldıysanız, aktüer hesap raporu ile tazminat talep edebilirsiniz." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border-l-4 border-secondary">
                                    <div>
                                        <p className="font-bold text-primary mb-1">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            Bu durumlardan birini yaşıyorsanız vakit kaybetmeyin. Zamanaşımı sürelerini kaçırmadan bir <strong>İzmir tazminat avukatı</strong> ile görüşün.
                        </p>

                        <h2 id="dava-sureci" className="scroll-mt-24">Tazminat Davası Süreci: Adım Adım</h2>

                        <p>
                            Tazminat davası açmadan önce sürecin her aşamasını bilmeniz önemlidir. <strong>İzmir tazminat avukatı</strong> olarak dava sürecini baştan sona yönetiyoruz. Aşağıda genel dava akışını bulabilirsiniz:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-center w-16">#</th>
                                        <th className="px-6 py-4 text-left w-1/3">Aşama</th>
                                        <th className="px-6 py-4 text-left">Yapılacak İşlem</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { step: 1, title: "Delil Toplama", desc: "Hekim raporu, maluliyet raporu, iş göremezlik belgesi ve tanık ifadeleri toplanır. Kusur durumu ön değerlendirilir." },
                                        { step: 2, title: "Sigorta Başvurusu", desc: "Trafik kazalarında sigorta şirketine yazılı başvuru zorunludur (KTK m. 97). Sigorta şirketi 15 gün içinde yanıt vermezse dava yolu açılır." },
                                        { step: 3, title: "Arabuluculuk", desc: "Sigorta şirketine karşı davalarda zorunlu arabuluculuk gerekir (TTK m. 5/A). İş kazası tazminatında arabuluculuk zorunlu değildir." },
                                        { step: 4, title: "Dava Açılması", desc: "Asliye Hukuk, İş Mahkemesi veya Asliye Ticaret Mahkemesi'nde dava dilekçesi sunulur." },
                                        { step: 5, title: "Bilirkişi İncelemesi", desc: "Tazminat hesaplaması için bilirkişi heyeti atanır. TRH 2010 yaşam tablosu esas alınarak maluliyet, gelir kaybı ve tazminat miktarı hesaplanır." },
                                        { step: 6, title: "Karar ve İtiraz", desc: "Mahkeme kararını verir. İstinaf (2 hafta) ve temyiz yolları açıktır. Ortalama süre: 1-3 yıl." },
                                    ].map((item) => (
                                        <tr key={item.step} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-center font-bold text-secondary bg-slate-50/50">{item.step}</td>
                                            <td className="px-6 py-4 font-bold text-primary">{item.title}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Tazminat davası sürecinde zamanaşımı sürelerini kaçırmamak kritik öneme sahiptir. <strong>İzmir tazminat avukatı</strong> olarak dava açma sürelerini titizlikle takip ediyor, müvekkillerimizin hak kaybı yaşamasını önlüyoruz.
                        </p>

                        <h2 id="maddi-tazminat" className="scroll-mt-24">Maddi Tazminat Davası</h2>

                        <p>
                            <Link href="/sozluk/maddi-tazminat/" className="text-secondary font-bold">Maddi tazminat davası</Link>, hukuka aykırı bir fiil sonucu kişinin malvarlığında oluşan azalmayı gidermek için açılır. Türk Borçlar Kanunu m. 49-50 kapsamında düzenlenir. Amaç, zarar görenin uğradığı gerçek zararı karşılamaktır.
                        </p>

                        <p>Maddi tazminat kapsamında talep edilebilecek kalemler:</p>

                        <ul>
                            <li><strong>Fiili zarar:</strong> Doğrudan uğranılan kayıplar (tedavi giderleri, tamir masrafları, yıkılan malların bedeli)</li>
                            <li><strong>Kazanç kaybı:</strong> Zarar verici olay nedeniyle yoksun kalınan gelir ve kazançlar</li>
                            <li><strong>İş gücü kaybı:</strong> Kalıcı sakatlık durumunda gelecekteki çalışma kapasitesindeki azalma</li>
                            <li><strong>Bakıcı giderleri:</strong> Sürekli bakıma muhtaç hale gelen mağdurun bakım masrafları</li>
                        </ul>

                        <h3>Maddi Tazminat Hesaplama Yöntemleri</h3>

                        <p>
                            Maddi tazminat hesaplama sürecinde bilirkişi raporu kritik öneme sahiptir. Bilirkişiler zarar görenin yaşını, gelirini, kusur oranını ve yaşam beklentisini değerlendirir. Böylece tazminat miktarı belirlenir. İzmir tazminat avukatı olarak bilirkişi raporlarını titizlikle denetliyoruz. Gerektiğinde itiraz ediyoruz.
                        </p>

                        <h2 id="manevi-tazminat" className="scroll-mt-24">Manevi Tazminat Davası</h2>

                        <p>
                            <Link href="/sozluk/manevi-tazminat/" className="text-secondary font-bold">Manevi tazminat</Link>, kişilik haklarının ihlali sonucu duyulan acı, elem ve ıstırabın karşılığıdır. Mahkeme bu tazminata hükmeder. Türk Borçlar Kanunu m. 56 ve 58 kapsamında düzenlenir.
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

                        <SectionCTA text="Tazminat hakkınız konusunda danışmak mı istiyorsunuz?" />

                        <h2 id="is-kazasi" className="scroll-mt-24">İş Kazası Tazminatı</h2>

                        <p>
                            <Link href="/izmir-is-avukati/">İş kazası</Link> tazminatı, 5510 sayılı Kanun kapsamında düzenlenir. İş kazası veya meslek hastalığı sonucu zarar gören işçi, işverenden tazminat talep eder. <strong>İzmir tazminat avukatı</strong> olarak iş kazası davalarında müvekkillerimize kapsamlı destek sunuyoruz.
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
                            İş kazası tazminatında zamanaşımı süresi iki şekilde hesaplanır. Zararın ve failin öğrenilmesinden itibaren 2 yıl, kazadan itibaren ise 10 yıldır. <Link href="/izmir-is-avukati/" className="text-secondary font-bold">İş hukuku hizmetlerimiz</Link> hakkında daha fazla bilgi alın.
                        </p>

                        <h2 id="trafik-kazasi" className="scroll-mt-24">Trafik Kazası Tazminatı</h2>

                        <p>
                            Trafik kazalarında zarar gören kişiler, kusurlu sürücüden ve sigorta şirketinden tazminat talep edebilir. Bu davalar 2918 sayılı Karayolları Trafik Kanunu kapsamında düzenlenir. <strong>İzmir tazminat avukatı</strong> olarak trafik kazası davalarında müvekkillerimizi temsil ediyoruz.
                        </p>

                        <ul>
                            <li><strong>ZMSS (Zorunlu Trafik Sigortası):</strong> Kusurlu sürücünün sigortasından doğrudan başvuru ile tazminat alınabilir</li>
                            <li><strong>İhtiyari Mali Mesuliyet:</strong> ZMSS limitlerini aşan zararlar için kasko sigortasından talep</li>
                            <li><strong>Rücu davası:</strong> Sigorta şirketi ödemeyi reddederse veya eksik öderse dava yoluyla tahsil</li>
                            <li><strong>Güvence Hesabı:</strong> Sigortasız araç veya faili meçhul kazalarda Güvence Hesabı&apos;na başvuru</li>
                        </ul>

                        <h3>Sigorta Tahkim Komisyonu Yolu</h3>

                        <p>
                            Trafik kazası tazminatında <a href="https://www.sigortatahkim.org/" target="_blank" rel="noopener noreferrer">Sigorta Tahkim Komisyonu</a> (STK) önemli bir alternatif çözüm yoludur. STK&apos;ya başvuru zorunlu değil, ihtiyaridir. Ancak mahkeme yoluna göre daha hızlı sonuçlanır (ortalama 4-6 ay). STK&apos;ya başvuruda arabuluculuk ön koşulu aranmaz.
                        </p>

                        <p>
                            2025 yılında zorunlu trafik sigortası (ZMSS) kapsamında yaralanan kazazedeye ödenecek en yüksek tazminat tutarı <strong>2.700.000 TL</strong> olarak belirlenmiştir. Bu limiti aşan tazminat talepleri için kusurlu sürücüye veya araç işletenine karşı ayrıca dava açılabilir.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Trafik kazası tazminatı hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        <h2 id="destekten-yoksun" className="scroll-mt-24">Destekten Yoksun Kalma Tazminatı</h2>

                        <p>
                            <Link href="/sozluk/destekten-yoksun-kalma/" className="text-secondary font-bold">Destekten yoksun kalma tazminatı</Link>, bir kişinin ölümü nedeniyle maddi desteğinden yoksun kalan yakınların talep ettiği tazminattır (TBK m. 53). Eş, çocuklar, anne-baba ve fiilen destek alan kişiler bu tazminatı isteyebilir.
                        </p>

                        <p>
                            Hesaplamada ölen kişinin yaşı, geliri ve yaşam beklentisi dikkate alınır. Destekten yararlananların yaşları ve destek payları da hesaba katılır. Aktüer hesap raporu ile kesin miktar belirlenir.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Destekten yoksun kalma tazminatı hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        <h3>Malpraktis Davası (Doktor Hatası Tazminatı)</h3>

                        <p>
                            <Link href="/sozluk/malpraktis/" className="text-secondary font-bold">Malpraktis davası</Link>, tıbbi hata sonucu hastanın zarar görmesi halinde açılır. Yanlış teşhis, hatalı ameliyat, ilaç hatası ve tedavi ihmali bu kapsamdadır. İzmir tazminat avukatı olarak Adli Tıp Kurumu ve bilirkişi raporları ile güçlü dava dosyaları hazırlıyoruz.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-tazminat-avukati/malpraktis-davasi/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Malpraktis davası hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        <h2 id="zamanasimi" className="scroll-mt-24">Tazminat Davası Zamanaşımı Süreleri</h2>

                        <p>
                            Tazminat davalarında zamanaşımı süresi, dava türüne ve hukuki dayanağa göre değişir. Süreyi kaçırmak hakkın tamamen kaybedilmesi anlamına gelir. Türk Borçlar Kanunu m. 72 haksız fiillerde temel zamanaşımını düzenlerken, cezayı gerektiren fiillerde uzamış zamanaşımı (TBK m. 72/2) uygulanır.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Dava Türü</th>
                                        <th className="px-6 py-4 text-left">Zamanaşımı Süresi</th>
                                        <th className="px-6 py-4 text-left">Yasal Dayanak</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Genel haksız fiil</td><td className="px-6 py-4 text-slate-600">2 yıl (öğrenme) / 10 yıl (mutlak)</td><td className="px-6 py-4 text-slate-600">TBK m. 72</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Trafik kazası (yaralanma)</td><td className="px-6 py-4 text-slate-600">8 yıl (uzamış ceza zamanaşımı)</td><td className="px-6 py-4 text-slate-600">KTK m. 109/II + TCK m. 89</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Trafik kazası (ölümlü)</td><td className="px-6 py-4 text-slate-600">15 yıl (uzamış ceza zamanaşımı)</td><td className="px-6 py-4 text-slate-600">KTK m. 109/II + TCK m. 85</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">İş kazası tazminatı</td><td className="px-6 py-4 text-slate-600">10 yıl</td><td className="px-6 py-4 text-slate-600">TBK m. 146</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Malpraktis (vekalet)</td><td className="px-6 py-4 text-slate-600">5 yıl</td><td className="px-6 py-4 text-slate-600">TBK m. 147/5</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Destekten yoksun kalma</td><td className="px-6 py-4 text-slate-600">2 yıl / 10 yıl (haksız fiil); ceza zamanaşımına göre uzar</td><td className="px-6 py-4 text-slate-600">TBK m. 72</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Zamanaşımı süresinin hesaplanması teknik bir konudur. Bedensel zararda hastalık seyrinin tamamlandığı tarih esas alınır (Yargıtay HGK, E. 2018/906, K. 2024/104). Bir <strong>İzmir tazminat avukatı</strong> ile görüşerek zamanaşımı sürenizin dolup dolmadığını öğrenin.
                        </p>

                        {/* Avukatlı mı Avukatsız mı */}
                        <SectionCTA text="Tazminat davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="avukatli-avukatsiz" className="scroll-mt-24">Tazminat Davası Avukatsız mı Açılmalı, Avukatla mı?</h2>

                        <p>
                            Tazminat davalarında avukat tutmak zorunlu değildir. Ancak bilirkişi raporu kontrolü, kusur oranı itirazı ve
                            tazminat hesaplaması teknik konulardır. Avukatsız açılan davalarda ciddi hak kayıpları yaşanıyor:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Kriter</th>
                                        <th className="px-6 py-4 text-left">Avukatsız</th>
                                        <th className="px-6 py-4 text-left">Avukatla</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Bilirkişi raporu</td><td className="px-6 py-4 text-slate-600">Hatalı rapora itiraz edememe, düşük tazminat</td><td className="px-6 py-4 text-slate-600">Rapor denetimi, gerektiğinde itiraz ve yeni rapor talebi</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Kusur oranı</td><td className="px-6 py-4 text-slate-600">Yüksek kusur oranı kabul etme riski</td><td className="px-6 py-4 text-slate-600">Kusur tespitine itiraz ve lehte delil sunumu</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Sigorta müzakeresi</td><td className="px-6 py-4 text-slate-600">Sigorta şirketinin düşük teklifini kabul etme</td><td className="px-6 py-4 text-slate-600">Gerçek zarar miktarı üzerinden müzakere</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Tazminat miktarı</td><td className="px-6 py-4 text-slate-600">Eksik kalem talep etme, düşük hesaplama</td><td className="px-6 py-4 text-slate-600">Tüm zarar kalemleri eksiksiz talep edilir</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Zamanaşımı</td><td className="px-6 py-4 text-slate-600">Süreleri kaçırarak hak kaybı riski</td><td className="px-6 py-4 text-slate-600">Tüm süreler profesyonel olarak takip edilir</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Özellikle <Link href="/sozluk/maddi-tazminat/" className="text-secondary font-bold">maddi tazminat</Link>, <Link href="/sozluk/manevi-tazminat/" className="text-secondary font-bold">manevi tazminat</Link> ve <Link href="/sozluk/destekten-yoksun-kalma/" className="text-secondary font-bold">destekten yoksun kalma</Link> davalarında
                            avukat desteği alın. Avukat desteği tazminat miktarını doğrudan etkiler.
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
                                    <p className="font-bold text-primary text-lg mb-2">{item.title}</p>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            İzmir boşanma davalarında da tazminat talepleri gündeme gelebilir. Bu konuda <Link href="/izmir-bosanma-avukati/">İzmir boşanma avukatı</Link> hizmetlerimizden yararlanın. Kira uyuşmazlıklarından doğan tazminat talepleri için <Link href="/izmir-kira-avukati/">İzmir kira avukatı</Link> sayfamızı inceleyin.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İzmir Tazminat Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Tazminat Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukattır. 2019 yılından bu yana tazminat, kira, iş ve boşanma hukuku alanlarında
                                        müvekkillerine destek sunuyor. Bayraklı merkezli ofisinden İzmir genelinde tazminat davalarını takip ediyor.
                                    </p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                                        <span><strong className="text-slate-700">İzmir Barosu Sicil:</strong> 15556</span>
                                        <span><strong className="text-slate-700">TBB Sicil:</strong> 162439</span>
                                        <span><strong className="text-slate-700">Büro Kuruluş:</strong> Ocak 2019</span>
                                    </div>
                                    <div className="mt-4">
                                        <Link href="/hakkimda/" className="text-secondary font-bold text-sm hover:text-primary transition-colors">
                                            Detaylı Özgeçmiş →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* İlgili Makaleler */}
                        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">Tazminat Hukuku Makaleleri</p>
                            <div className="space-y-3">
                                <Link href="/blog/trafik-kazasi-tazminati-alma-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Trafik Kazası Tazminatı Alma Süreci
                                </Link>
                                <Link href="/blog/maddi-ve-manevi-tazminat-davasi-farklari/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Maddi ve Manevi Tazminat Davası Arasındaki Farklar
                                </Link>
                                <Link href="/blog/malpraktis-davasi-doktor-hatasi-tazminati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Malpraktis Davası: Doktor Hatası Tazminatı
                                </Link>
                                <Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İş Kazası Tazminatı Süreci ve Haklarınız
                                </Link>
                                <Link href="/blog/destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Destekten Yoksun Kalma Tazminatı: Hesaplama ve Dava Süreci
                                </Link>
                                <Link href="/blog/sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Sigorta Tahkim Komisyonu Başvurusu: Trafik Kazası Tazminatı
                                </Link>
                                <Link href="/blog/is-goremezlik-raporu-ve-maluliyet-tazminati-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İş Göremezlik Raporu ve Maluliyet Tazminatı Davası
                                </Link>
                            </div>
                            <Link href="/blog/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                Tüm Makaleler <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* Faydalı Yerel Kaynaklar */}
                        <div className="not-prose my-12 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-2">Faydalı Yerel Kaynaklar</h2>
                            <p className="text-sm text-slate-500 mb-6">İzmir&apos;de tazminat davaları sürecinde başvurabileceğiniz resmi kurum ve kaynaklar:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { name: "İzmir Barosu", desc: "Avukat arama ve baro hizmetleri", url: "https://www.izmirbarosu.org.tr/" },
                                    { name: "İzmir Adliyesi (Bayraklı)", desc: "Adliye iletişim bilgileri ve duyurular", url: "https://izmir.adalet.gov.tr/" },
                                    { name: "SGK", desc: "Sosyal güvenlik hizmetleri ve e-SGK portalı", url: "https://www.sgk.gov.tr/" },
                                    { name: "UYAP Vatandaş Portal", desc: "Dava dosyası sorgulama ve e-imza ile dilekçe gönderme", url: "https://vatandas.uyap.gov.tr/" },
                                    { name: "Sigorta Tahkim Komisyonu", desc: "Sigorta uyuşmazlıkları online başvuru ve karar sorgulama", url: "https://www.sigortatahkim.org/" },
                                    { name: "Güvence Hesabı", desc: "Sigortasız araç kazaları için başvuru bilgileri", url: "https://www.guvencehesabi.org.tr/" },
                                ].map((item, i) => (
                                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/30 transition-all group">
                                        <p className="font-bold text-primary group-hover:text-secondary transition-colors text-sm mb-1">{item.name}</p>
                                        <p className="text-xs text-slate-500 mb-2 flex-1">{item.desc}</p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Danışan Yorumları */}
                        <div className="not-prose">
                            <GoogleReviews />
                        </div>

                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Tazminat Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Tazminat davalarınız için hemen randevu alın.
                                    <strong className="text-white"> İzmir tazminat avukatı</strong> ekibimiz size yardımcı olmaya hazır.
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
                                            <a href="mailto:mertkagancetin@gmail.com" className="font-bold hover:text-secondary transition-colors">mertkagancetin@gmail.com</a>
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
                                        <Link href="/iletisim/">
                                            Randevu Alın <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-primary gap-2" asChild>
                                        <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                            WhatsApp ile Yazın
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                        {/* Uzmanlık Alanları */}
                        <div className="not-prose my-16 bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
                            <h2 className="text-2xl font-playfair font-bold text-primary text-center mb-2">Tazminat Hukuku Uzmanlık Alanlarımız</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto text-sm">
                                Her tazminat davası türüne özel hizmet sayfalarımızda detaylı bilgi alabilirsiniz.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Trafik Kazası Tazminatı", desc: "Trafik kazası sonrası sigorta ve tazminat davası hizmetimiz", url: "/izmir-tazminat-avukati/trafik-kazasi-tazminati/" },
                                    { title: "Malpraktis Davası", desc: "Doktor hatası ve tıbbi malpraktis tazminat davası hizmetimiz", url: "/izmir-tazminat-avukati/malpraktis-davasi/" },
                                    { title: "Destekten Yoksun Kalma", desc: "Yakın kaybı sonrası destekten yoksun kalma tazminatı hizmetimiz", url: "/izmir-tazminat-avukati/destekten-yoksun-kalma/" },
                                ].map((item, i) => (
                                    <Link key={i} href={item.url} className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-secondary hover:shadow-lg transition-all">
                                        <h3 className="font-bold text-primary group-hover:text-secondary transition-colors mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                                        <span className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Detaylı Bilgi <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* İlçe Bazlı Hizmet Sayfaları */}
                        <div className="not-prose mt-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                            <h2 className="text-2xl font-playfair font-bold text-primary text-center mb-4">İlçe Bazlı Tazminat Avukatı Hizmetlerimiz</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                                Ofisimiz Bayraklı Adliyesi&apos;nin hemen karşısındadır. İzmir&apos;in tüm merkez ilçelerinde
                                tazminat davalarını takip ediyoruz.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "Bayraklı Tazminat Avukatı", url: "/bayrakli-tazminat-avukati/" },
                                    { name: "Karşıyaka Tazminat Avukatı", url: "/karsiyaka-tazminat-avukati/" },
                                    { name: "Bornova Tazminat Avukatı", url: "/bornova-tazminat-avukati/" },
                                    { name: "Konak Tazminat Avukatı", url: "/konak-tazminat-avukati/" },
                                    { name: "Buca Tazminat Avukatı", url: "/buca-tazminat-avukati/" },
                                    { name: "Çiğli Tazminat Avukatı", url: "/cigli-tazminat-avukati/" },
                                    { name: "Gaziemir Tazminat Avukatı", url: "/gaziemir-tazminat-avukati/" },
                                    { name: "Balçova Tazminat Avukatı", url: "/balcova-tazminat-avukati/" },
                                    { name: "Narlıdere Tazminat Avukatı", url: "/narlidere-tazminat-avukati/" },
                                    { name: "Karabağlar Tazminat Avukatı", url: "/karabaglar-tazminat-avukati/" },
                                    { name: "Güzelbahçe Tazminat Avukatı", url: "/guzelbahce-tazminat-avukati/" },
                                ].map((district) => (
                                    <Link
                                        key={district.url}
                                        href={district.url}
                                        className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-secondary transition-all text-sm font-medium text-slate-700 border border-slate-200"
                                    >
                                        <ChevronRight className="w-4 h-4 text-secondary" />
                                        {district.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

            </article>

        </main>
    );
}
