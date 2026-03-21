import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle, Briefcase, FileText, Users, ArrowRight, ChevronRight, Home, ShieldCheck, Scale, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";


function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir İş Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de iş hukuku, işe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı ve işçi alacakları davalarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-is-avukati/",
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
            "name": "İş Hukuku Hizmetleri",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İşe İade Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kıdem Tazminatı Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İhbar Tazminatı Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İş Kazası Tazminatı" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İşçi Alacakları Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zorunlu Arabuluculuk (İş Hukuku)" } }
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
        absolute: "İzmir İş Avukatı | İşe İade & Tazminat | Hemen Arayın",
    },
    description: "İzmir iş avukatı Av. Mert Kağan Çetin ile işe iade, kıdem tazminatı, iş kazası ve işçi alacakları davalarında uzman hukuki destek alın. Hemen arayın.",
    keywords: ["İzmir iş avukatı", "iş davası avukatı İzmir", "işe iade davası", "kıdem tazminatı avukatı", "ihbar tazminatı", "iş kazası tazminatı", "işçi hakları", "mobbing davası", "fazla mesai alacağı", "iş sözleşmesi feshi", "iş hukuku avukatı İzmir", "işten çıkarma tazminatı"],
    openGraph: {
        title: "İzmir İş Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de iş hukuku, işe iade davaları ve tazminat davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-is-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-03-20",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-is-avukati/",
    },
};

const faqs = [
    {
        question: "İzmir'de iş avukatı tutmak zorunlu mu?",
        answer: "İş davalarında avukat tutmak zorunlu değildir ancak iş hukuku teknik süreleri ve ispat yükü açısından karmaşık bir alandır. Hak kaybı yaşamamak için İzmir iş avukatı ile çalışmanızı kesinlikle öneririz."
    },
    {
        question: "İşe iade davası ne kadar sürer?",
        answer: "İşe iade davası, İş Kanunu m. 20 gereği ivedi yargılama usulüne tabidir. Arabuluculuk süreci dahil ortalama 3-6 ay sürmektedir. Mahkeme kararının ardından işverenin 30 gün içinde işçiyi işe başlatması gerekmektedir."
    },
    {
        question: "Kıdem tazminatı nasıl hesaplanır?",
        answer: "Kıdem tazminatı, işçinin her tam çalışma yılı için brüt 30 günlük ücreti üzerinden hesaplanır. Hesaplamaya temel ücret, yemek, yol, prim gibi düzenli ödemeler dahil edilir. 2026 yılı kıdem tazminatı tavanı 41.828,44 TL'dir."
    },
    {
        question: "İş kazası tazminatı nasıl alınır?",
        answer: "İş kazası geçiren işçi, işverenden maddi ve manevi tazminat talep edebilir. Bunun için kazanın SGK'ya bildirilmesi, iş göremezlik raporu alınması ve kusur oranlarının tespiti gerekmektedir. İzmir iş avukatı olarak tüm süreci takip ediyoruz."
    },
    {
        question: "İşten çıkarıldım, ne yapmalıyım?",
        answer: "Haksız olarak işten çıkarıldıysanız, fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurmanız gerekmektedir. Arabuluculuk anlaşmazlıkla sonuçlanırsa 2 hafta içinde işe iade davası açabilirsiniz."
    },
    {
        question: "Mobbing davası nasıl açılır?",
        answer: "İşyerinde sistematik psikolojik baskıya (mobbing) maruz kalıyorsanız, öncelikle delil toplamanız gerekir. E-postalar, mesajlar, tanık ifadeleri ve sağlık raporları önemli delillerdir. İş sözleşmenizi haklı nedenle feshederek kıdem tazminatınızı alabilir, ayrıca manevi tazminat davası açabilirsiniz."
    },
    {
        question: "Fazla mesai alacağı nasıl hesaplanır?",
        answer: "Haftalık 45 saati aşan çalışmalar fazla mesai olarak değerlendirilir. Fazla mesai ücreti, normal saat ücretinin %50 zamlı halidir. 5 yıllık zamanaşımı süresi içinde talep edilebilir. İspat yükü işçidedir; bordrolar, mesaj kayıtları ve tanıklar önemli delillerdir."
    },
    {
        question: "İş davalarında arabuluculuk zorunlu mu?",
        answer: "Evet, 2018'den itibaren işe iade davaları ve işçi alacakları davalarında dava açmadan önce arabulucuya başvurmak zorunludur. Arabuluculuk görüşmesi en fazla 3 hafta sürer. Anlaşma sağlanamazsa dava yoluna gidilir."
    },
    {
        question: "2026 yılında iş davası avukat ücreti ne kadar?",
        answer: "2026 yılında İzmir'de iş davası avukatlık ücreti davanın türüne göre 30.000 TL ile 80.000 TL arasında değişmektedir. İşe iade davaları, kıdem tazminatı davaları ve iş kazası tazminatı davaları için farklı ücret tarifeleri uygulanmaktadır."
    },
    {
        question: "Ücretsiz avukata nasıl ulaşabilirim?",
        answer: "Ücretsiz avukat hizmetinden yararlanmak için İzmir Barosu Adli Yardım Merkezi'ne başvuru yapabilirsiniz. Başvuru için nüfus cüzdanı fotokopisi, gelir durumunuzu gösteren belge (maaş bordrosu, SGK dökümü veya muhtardan fakirlik ilmühaberi) ve dava konusuna ilişkin belgelerinizi sunmanız gerekir. Baro, başvuruyu değerlendirerek maddi durumu yetersiz bulunan kişilere ücretsiz avukat atar. Adli yardım kapsamında mahkeme harçları ve yargılama giderleri de ertelenir. Ancak atanan avukatın iş hukuku konusunda uzman olma garantisi yoktur. İş davalarında sürelerin kısa olması (işe iade için 1 ay) nedeniyle adli yardım başvurusuyla eş zamanlı olarak alanında uzman bir iş avukatına da danışmanız tavsiye edilir."
    },
    {
        question: "İş avukatı ne iş yapar?",
        answer: "İş avukatı, işçi ve işveren arasındaki hukuki uyuşmazlıkların çözümünde uzmanlaşmış avukattır. Başlıca faaliyet alanları şunlardır: İşe iade davaları açma ve takip etme, kıdem ve ihbar tazminatı talepleri, fazla mesai, yıllık izin ve ücret alacakları davaları, iş kazası ve meslek hastalığı tazminatı, mobbing (işyerinde psikolojik taciz) davaları, iş sözleşmesi hazırlama ve fesih süreçleri, zorunlu arabuluculuk görüşmelerine katılım ve toplu iş hukuku uyuşmazlıkları. İş avukatı ayrıca işçilere haklarını bilmeleri konusunda danışmanlık verir, işverenlere ise İş Kanunu'na uygun personel yönetimi konusunda rehberlik eder."
    },
    {
        question: "İş davalarına hangi avukat bakar?",
        answer: "İş davalarına iş hukuku alanında uzmanlaşmış avukatlar bakar. 4857 sayılı İş Kanunu, 6356 sayılı Sendikalar Kanunu ve İş Mahkemeleri Kanunu kapsamındaki uyuşmazlıklar bu avukatların uzmanlık alanına girer. İş davaları iş mahkemelerinde görülür; iş mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi iş mahkemesi sıfatıyla davaya bakar. Avukat tutmak zorunlu olmamakla birlikte, iş hukukunun teknik süreleri (arabuluculuk başvuru süresi, işe iade dava süresi gibi) ve ispat kuralları nedeniyle uzman avukat desteği büyük önem taşır. İzmir'de iş hukuku davalarında büromuz işçi ve işveren tarafı için profesyonel hukuki destek sunmaktadır."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "İş Hukuku Hizmetlerimiz" },
    { id: "ne-zaman-avukat", title: "İş Avukatına Ne Zaman İhtiyaç Duyulur?" },
    { id: "ise-iade", title: "İşe İade Davası" },
    { id: "kidem-tazminati", title: "Kıdem Tazminatı" },
    { id: "ihbar-tazminati", title: "İhbar Tazminatı" },
    { id: "is-kazasi", title: "İş Kazası Tazminatı" },
    { id: "isci-haklari", title: "İşçi Hakları" },
    { id: "avukatli-avukatsiz", title: "Avukatlı mı Avukatsız mı?" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirIsAvukatiPage() {
    return (
        <main className="bg-white">
            <LegalServiceSchema />
            <PersonSchema knowsAbout={["İş Hukuku", "İşe İade Davası", "Kıdem Tazminatı", "İhbar Tazminatı", "Mobbing", "İş Kazası Tazminatı", "Fazla Mesai Alacağı"]} />

            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir İş Avukatı", url: "https://mertkagancetin.com/izmir-is-avukati/" }
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
                        <span className="text-secondary">İzmir İş Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir İş Avukatı Hizmeti
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İşe iade davaları, kıdem tazminatı, iş kazası tazminatı ve tüm işçi alacaklarında
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
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-sm text-primary hover:text-secondary font-medium transition-colors"
                                >
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
            [&>ol>li]:text-[1rem] [&>ol>li]:text-slate-700 [&>ol>li]:mb-2 [&>ol>li]:leading-relaxed
            prose-ul:my-6 prose-ul:pl-6
            prose-ol:my-6 prose-ol:pl-6
            prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-slate-800 prose-blockquote:font-medium
            prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-sm
            prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-3 prose-td:text-sm
            prose-tr:even:bg-slate-50">

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir iş avukatı</strong>, işçi ve işveren arasındaki hukuki uyuşmazlıklarda tarafları temsil eder. İşe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı ve işçi alacakları bu avukatın uzmanlık alanıdır. Av. Mert Kağan Çetin, <a href="https://www.izmirbarosu.org.tr/" target="_blank" rel="noopener noreferrer">İzmir Barosu</a>&apos;na kayıtlıdır. Bayraklı merkezli ofisinden İzmir genelinde iş hukuku hizmeti vermektedir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 15 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p className="text-xl leading-relaxed">
                            İzmir'de iş hukuku alanında uzman bir avukat olarak işçi ve işveren uyuşmazlıklarında profesyonel destek sunuyoruz. Ofisimiz <a href="https://izmir.adalet.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold no-underline"><strong>Bayraklı Adliyesi</strong></a> (İzmir Adliyesi) yakınındadır. Tüm süreçleri yakından takip ediyoruz. <strong>İzmir iş avukatı</strong> olarak işe iade, tazminat, iş kazası davaları ve arabuluculuk süreçlerinde müvekkillerimize rehberlik ediyoruz.
                        </p>

                        <p>
                            İş hukuku; 4857 sayılı İş Kanunu, Borçlar Kanunu ve Sosyal Sigortalar mevzuatı ile düzenlenen kapsamlı bir hukuk dalıdır. Bu alanda deneyimli bir <strong>iş mahkemesi avukatı</strong> ile çalışmak, süreçlerin doğru yönetilmesi için çok önemlidir. İzmir'de işçi-işveren uyuşmazlıkları ekonomik koşullarla birlikte her geçen gün artıyor. <strong>İşten çıkarıldım ne yapmalıyım</strong>, <strong>kıdem tazminatı nasıl hesaplanır</strong>, <strong>işe iade davası şartları</strong> nelerdir gibi sorular büromuzda en sık yanıtladığımız konulardır.
                        </p>

                        {/* İzmir İş Hukuku İstatistikleri */}
                        <div className="not-prose my-10 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">#</span>
                                İzmir&apos;de İş Davaları: Rakamlarla Güncel Durum
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { value: "54.701", label: "İzmir'de iş kazası (2024)", sub: "112 işçi hayatını kaybetti", source: "SGK 2024 İstatistik Yıllığı" },
                                    { value: "733.646", label: "Türkiye iş kazası (2024)", sub: "2023'e göre %8 artış — 1.908 ölüm", source: "SGK 2024" },
                                    { value: "%51", label: "Arabuluculuk anlaşma oranı", sub: "2 milyondan fazla iş uyuşmazlığı dosyası (2024)", source: "Adalet Bakanlığı" },
                                    { value: "%11", label: "İzmir işsizlik oranı (2024)", sub: "Türkiye ortalaması %8,7 — Ege 1.'si", source: "TÜİK İşgücü İstatistikleri" },
                                    { value: "%26,3", label: "Kayıt dışı istihdam (Türkiye)", sub: "Tarım sektöründe %82,1'e ulaşıyor", source: "SGK / TÜİK 2024" },
                                    { value: "4.022", label: "İzmir inşaat iş kazası (2023)", sub: "İstanbul, Mersin ve Ankara'nın ardından 4. sıra", source: "SGK / ÇSGB" },
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
                                Veriler SGK, TÜİK, Adalet Bakanlığı ve ÇSGB resmi kaynaklarından derlenmiştir.
                            </p>
                        </div>

                        {/* Hizmetlerimiz */}
                        <h2 id="hizmetlerimiz" className="scroll-mt-24">İzmir İş Avukatı Hizmetlerimiz</h2>

                        <p>
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir'de iş hukuku alanında kapsamlı hizmetler sunuyoruz.
                            <strong> İzmir iş davası avukatı</strong> ve tazminat davaları konusunda uzman ekibimizle aşağıdaki
                            hizmetleri sağlıyoruz:
                        </p>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            {[
                                { icon: Briefcase, title: "İşe İade Davası", desc: "Haksız fesih halinde işe iadeniz için dava açma ve arabuluculuk süreci yönetimi" },
                                { icon: Scale, title: "Kıdem & İhbar Tazminatı", desc: "Kıdem tazminatı hesaplama, ihbar tazminatı ve işçilik alacaklarının tahsili" },
                                { icon: ShieldCheck, title: "İş Kazası Tazminatı", desc: "İş kazası ve meslek hastalığı nedeniyle maddi ve manevi tazminat davaları" },
                                { icon: Users, title: "Zorunlu Arabuluculuk", desc: "İş uyuşmazlıklarında zorunlu arabuluculuk sürecinde profesyonel temsil" },
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

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak tüm hizmetlerimizde müvekkil menfaatini ön planda tutuyoruz.
                            En kısa sürede en etkili sonuçları almayı hedefliyoruz. Detaylı bilgi için
                            <Link href="/hizmetler/" className="text-secondary font-bold"> hizmetlerimiz sayfasını</Link> inceleyin.
                        </p>

                        {/* Hangi Durumlarda İş Avukatına İhtiyacınız Var */}
                        <h2 id="ne-zaman-avukat" className="scroll-mt-24">Hangi Durumlarda İş Avukatına İhtiyacınız Var?</h2>

                        <p>
                            İş hukuku uyuşmazlıkları, zamanaşımı süreleri ve ispat yükü nedeniyle profesyonel destek gerektirir.
                            Aşağıdaki durumlardan birini yaşıyorsanız bir <strong>İzmir iş avukatı</strong> ile görüşün. Aksi halde hak kaybına uğrayabilirsiniz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { title: "Haksız veya geçersiz nedenle işten çıkarıldıysanız", desc: "İşe iade davası için fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurmanız gerekir. Bu süreyi kaçırmak hakkınızı tamamen kaybetmenize neden olur." },
                                { title: "Kıdem veya ihbar tazminatınız ödenmiyorsa", desc: "İşvereniniz tazminat ödemekten kaçınıyorsa veya eksik ödeme yapıyorsa, 5 yıllık zamanaşımı içinde dava açmanız gerekir." },
                                { title: "İş kazası geçirdiyseniz", desc: "İş kazası sonrası maddi ve manevi tazminat hakkınız vardır. Kazanın SGK'ya bildirilmesi ve kusur oranlarının tespiti avukat desteği gerektirir." },
                                { title: "Fazla mesai ücretleriniz ödenmiyorsa", desc: "Haftalık 45 saati aşan çalışmalar için %50 zamlı ücret hakkınız vardır. Bordro, mesaj ve tanık delilleri ile ispat edilebilir." },
                                { title: "İşyerinde mobbinge maruz kalıyorsanız", desc: "Sistematik psikolojik baskı altındaysanız iş sözleşmenizi haklı nedenle feshederek kıdem tazminatı ve manevi tazminat talep edebilirsiniz." },
                                { title: "Sigortanız eksik yatırılıyorsa", desc: "Gerçek maaşınızın altında sigorta primi yatırılması haklı fesih sebebidir. Hizmet tespit davası ile geriye dönük haklarınızı alabilirsiniz." },
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
                            Bu durumlardan birini yaşıyorsanız zamanaşımı sürelerini kaçırmadan bir <strong>İzmir iş avukatı</strong> ile görüşün. Dava öncesi <Link href="/sozluk/zorunlu-arabuluculuk/" className="text-secondary font-bold">zorunlu arabuluculuk</Link> süreci dahil tüm aşamalarda yanınızdayız.
                        </p>

                        {/* İşe İade Davası */}
                        <SectionCTA text="İş hukuku sorununuz için hukuki destek almak ister misiniz?" />

                        <h2 id="ise-iade" className="scroll-mt-24">İşe İade Davası Nedir?</h2>

                        <p>
                            İşe iade davası, <Link href="/sozluk/is-guvencesi/" className="text-secondary font-semibold">iş güvencesi</Link> kapsamındaki işçilerin haksız veya geçersiz nedenle işten çıkarılması halinde açılır. Bu dava 4857 sayılı İş Kanunu'nun 18-21. maddeleri arasında düzenlenmiştir. Dava sonucunda işçi işine geri döner ya da tazminat alır.
                        </p>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak işe iade davası açılabilmesi için aranan şartlar:
                        </p>

                        <ul>
                            <li><strong>İş güvencesi kapsamı:</strong> İşyerinde en az 30 işçi çalışıyor olmalıdır</li>
                            <li><strong>Kıdem şartı:</strong> İşçi en az 6 ay kıdeme sahip olmalıdır</li>
                            <li><strong>Belirsiz süreli sözleşme:</strong> İş sözleşmesi belirsiz süreli olmalıdır</li>
                            <li><strong>Süre:</strong> Fesih bildiriminden itibaren 1 ay içinde <Link href="/sozluk/zorunlu-arabuluculuk/" className="text-secondary font-semibold">arabulucuya</Link> başvurulmalıdır</li>
                        </ul>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">İşe İade Süreci</th>
                                        <th className="px-6 py-4 text-left">Süre ve Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Arabuluculuk Başvurusu", desc: "Fesih tebliğinden itibaren 1 ay içinde arabulucuya başvuru zorunludur" },
                                        { title: "Arabuluculuk Süreci", desc: "En fazla 3 hafta sürer; anlaşma sağlanamazsa son tutanak düzenlenir" },
                                        { title: "Dava Açma Süresi", desc: "Arabuluculuk son tutanağından itibaren 2 hafta içinde dava açılmalıdır" },
                                        { title: "Yargılama", desc: "İvedi yargılama usulüyle ortalama 2-4 ay; kesinleşme süresi dahil 3-6 ay" },
                                        { title: "İşe Başlatma", desc: "Kesinleşen karardan itibaren 10 gün içinde işverene başvuru, 30 gün içinde işe başlatma" },
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
                            İşe iade davası kazanılsa bile işveren işçiyi işe başlatmayabilir. Bu durumda işçiye en az 4 aylık, en fazla 8 aylık boşta geçen süre ücreti ödenir. Ayrıca iş güvencesi tazminatı da verilir. <strong>İzmir iş avukatı</strong> olarak bu süreçte müvekkillerimizi en etkin şekilde temsil ediyoruz.
                        </p>

                        {/* Kıdem Tazminatı */}
                        <h2 id="kidem-tazminati" className="scroll-mt-24">Kıdem Tazminatı Nasıl Hesaplanır?</h2>

                        <p>
                            <Link href="/sozluk/kidem-tazminati/" className="text-secondary font-bold">Kıdem tazminatı</Link>, en az 1 yıl çalışmış olan işçinin belirli koşullarla iş sözleşmesi sona erdiğinde hak ettiği tazminattır. Bu tazminat 1475 sayılı eski İş Kanunu'nun halen yürürlükte olan 14. maddesinde düzenlenmiştir.
                        </p>

                        <p>
                            <strong>Kıdem tazminatı nasıl hesaplanır</strong> sorusu, iş hukukunun en sık sorulan sorularından
                            biridir. Hesaplama şu şekilde yapılır:
                        </p>

                        <ul>
                            <li><strong>Temel formül:</strong> Her tam çalışma yılı için 30 günlük brüt ücret</li>
                            <li><strong>Giydirilmiş ücret:</strong> Temel ücretin yanı sıra yemek, yol, prim gibi düzenli ödemeler dahil edilir</li>
                            <li><strong>Tavan sınırı:</strong> 2026 yılı kıdem tazminatı tavanı 41.828,44 TL&apos;dir (6 aylık dönemlerle güncellenir)</li>
                            <li><strong>Kısmi yıl:</strong> Tam yıldan arta kalan süreler de orantılı olarak hesaba katılır</li>
                        </ul>

                        <h3>Kıdem Tazminatı Hak Edilen Haller</h3>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Fesih Türü</th>
                                        <th className="px-6 py-4 text-left">Kıdem Tazminatı Hakkı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "İşveren tarafından haksız fesih", desc: "Evet — İşçi kıdem tazminatına hak kazanır" },
                                        { title: "İşçi tarafından haklı fesih (m.24)", desc: "Evet — Sağlık, ahlak ve iyi niyet kuralları veya zorunlu nedenlerle" },
                                        { title: "Askerlik veya emeklilik", desc: "Evet — Yasal koşulları sağlayan işçi hak kazanır" },
                                        { title: "Evlilik nedeniyle (kadın işçi)", desc: "Evet — Evlenme tarihinden itibaren 1 yıl içinde istifa eden kadın işçi" },
                                        { title: "İşçi istifası", desc: "Hayır — Haklı neden olmaksızın istifa halinde tazminat ödenmez" },
                                        { title: "İşveren haklı fesih (m.25/II)", desc: "Hayır — Ahlak ve iyi niyet kurallarına aykırılık halinde" },
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
                            <strong>İzmir iş avukatı</strong> olarak kıdem tazminatı davalarında müvekkillerimizin tüm haklarını koruyoruz. Amacımız en yüksek tazminat miktarını almaktır. 5 yıllık zamanaşımı süresi dolmadan haklarınızı talep etmeniz çok önemlidir.
                        </p>

                        {/* İhbar Tazminatı */}
                        <h2 id="ihbar-tazminati" className="scroll-mt-24">İhbar Tazminatı Nedir?</h2>

                        <p>
                            <Link href="/sozluk/ihbar-tazminati/" className="text-secondary font-bold">İhbar tazminatı</Link>, belirsiz süreli iş sözleşmesinin bildirim süresine uyulmadan feshedilmesi durumunda ödenir. Bu tazminat karşı tarafa verilir. İş Kanunu m. 17&apos;de düzenlenen bildirim süreleri şu şekildedir:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Çalışma Süresi</th>
                                        <th className="px-6 py-4 text-left">Bildirim Süresi</th>
                                        <th className="px-6 py-4 text-left">İhbar Tazminatı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { period: "0 - 6 ay", notice: "2 hafta", compensation: "2 haftalık ücret" },
                                        { period: "6 ay - 1.5 yıl", notice: "4 hafta", compensation: "4 haftalık ücret" },
                                        { period: "1.5 - 3 yıl", notice: "6 hafta", compensation: "6 haftalık ücret" },
                                        { period: "3 yıldan fazla", notice: "8 hafta", compensation: "8 haftalık ücret" },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.period}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.notice}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.compensation}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            İhbar tazminatını hem işçi hem de işveren talep edebilir. İhbar süresine uymayan taraf, karşı tarafa bu süreye ait ücreti tazminat olarak öder.
                        </p>

                        {/* İş Kazası */}
                        <SectionCTA text="Tazminat hakkınız konusunda danışmak mı istiyorsunuz?" />

                        <h2 id="is-kazasi" className="scroll-mt-24">İş Kazası Tazminatı</h2>

                        <p>
                            İş kazası, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu&apos;nun 13. maddesinde tanımlanmıştır. İşçi, işyerinde veya iş sebebiyle kaza geçirirse bedensel ya da ruhsal zarar görebilir. Bu durumda işverenden tazminat talep edilebilir.
                        </p>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak iş kazası davalarında talep ettiğimiz tazminat kalemleri:
                        </p>

                        <ul>
                            <li><strong>Maddi tazminat:</strong> Tedavi giderleri, iş göremezlik nedeniyle gelir kaybı ve sürekli iş göremezlik tazminatı</li>
                            <li><strong>Manevi tazminat:</strong> İş kazası nedeniyle yaşanan acı, elem ve ıstırap için talep edilen tazminat</li>
                            <li><strong>Destekten yoksun kalma:</strong> İş kazası sonucu vefat halinde, destekten yoksun kalan yakınların tazminat hakkı</li>
                        </ul>

                        <p>
                            İş kazalarında zamanaşımı süresi, zararın ve failin öğrenildiği tarihten itibaren 2 yıldır. Her durumda kazanın olduğu tarihten itibaren 10 yıl içinde dava açılmalıdır. İş kazası <a href="https://www.sgk.gov.tr/" target="_blank" rel="noopener noreferrer">SGK</a>&apos;ya 3 iş günü içinde bildirilmelidir. <strong>İzmir iş avukatı</strong> olarak iş kazası sürecinin her aşamasında yanınızdayız. Tazminat talepleri hakkında detaylı bilgi için <Link href="/izmir-tazminat-avukati/" className="text-secondary font-semibold">İzmir tazminat avukatı</Link> sayfamızı da inceleyin.
                        </p>

                        {/* İşçi Hakları */}
                        <h2 id="isci-haklari" className="scroll-mt-24">İşçi Hakları</h2>

                        <p>
                            4857 sayılı İş Kanunu, işçileri koruyan kapsamlı düzenlemeler içerir. <strong>İşçi hakları</strong> kapsamında işçi ve işverenlerin bilmesi gereken temel hükümler şunlardır:
                        </p>

                        <ul>
                            <li>
                                <strong>Fazla mesai ücreti:</strong> Haftalık 45 saati aşan çalışmalar için %50 zamlı ücret
                                ödenmesi zorunludur. Yıllık 270 saati aşan fazla mesai yaptırılamaz.
                            </li>
                            <li>
                                <strong>Yıllık izin hakkı:</strong> 1-5 yıl arası çalışanlara 14 gün, 5-15 yıl arası
                                çalışanlara 20 gün, 15 yıldan fazla çalışanlara 26 gün yıllık ücretli izin hakkı tanınır.
                            </li>
                            <li>
                                <strong>SGK bildirimi:</strong> İşverenin işçiyi çalışmaya başladığı gün SGK&apos;ya bildirme
                                yükümlülüğü vardır. Sigortasız çalıştırma suçtur.
                            </li>
                            <li>
                                <strong>Eşit davranma:</strong> İşveren, dil, ırk, cinsiyet, siyasi düşünce, din ve mezhep
                                ayrımı gözetmeksizin tüm çalışanlara eşit davranmak zorundadır.
                            </li>
                            <li>
                                <strong><Link href="/sozluk/mobbing/" className="text-secondary">Mobbinge</Link> karşı koruma:</strong> İşçinin işyerinde sistematik psikolojik baskıya maruz
                                kalması halinde iş sözleşmesini haklı nedenle feshederek tazminat hakkı doğar.
                            </li>
                        </ul>

                        <p>
                            <strong>İşçi hakları</strong> ihlal edildiğinde hukuki yollara başvurmak mümkündür.
                            <strong> İzmir iş avukatı</strong> olarak müvekkillerimizin yasal haklarını en etkin şekilde koruyoruz.
                        </p>

                        {/* Avukatlı mı Avukatsız mı */}
                        <h2 id="avukatli-avukatsiz" className="scroll-mt-24">İş Davası Avukatsız mı Açılmalı, Avukatla mı?</h2>

                        <p>
                            İş davalarında avukat tutmak zorunlu değildir. Ancak iş hukukunda teknik süreler ve ispat yükü nedeniyle avukatsız davalarda ciddi hak kayıpları yaşanır. İşte iki seçeneğin karşılaştırması:
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
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Arabuluculuk süreci</td><td className="px-6 py-4 text-slate-600">İşveren avukatı karşısında dezavantajlı pozisyon</td><td className="px-6 py-4 text-slate-600">Eşit müzakere gücü ve hukuki argüman desteği</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Süre takibi</td><td className="px-6 py-4 text-slate-600">1 ay arabuluculuk, 2 hafta dava sürelerini kaçırma riski</td><td className="px-6 py-4 text-slate-600">Tüm hak düşürücü süreler profesyonel olarak takip edilir</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Tazminat hesaplama</td><td className="px-6 py-4 text-slate-600">Giydirilmiş ücret ve tavan hesaplarında hata riski</td><td className="px-6 py-4 text-slate-600">Maksimum tazminat için doğru hesaplama ve bilirkişi kontrolü</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Delil toplama</td><td className="px-6 py-4 text-slate-600">Hangi delillerin geçerli olduğu bilinmeyebilir</td><td className="px-6 py-4 text-slate-600">Bordro, SGK kaydı, mesaj ve tanık stratejisi</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Sonuç</td><td className="px-6 py-4 text-slate-600">Eksik talep veya usul hatası nedeniyle düşük tazminat</td><td className="px-6 py-4 text-slate-600">Ortalama %30-50 daha yüksek tazminat miktarı</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Özellikle <Link href="/sozluk/ise-iade-davasi/" className="text-secondary font-bold">işe iade davası</Link>, <Link href="/sozluk/kidem-tazminati/" className="text-secondary font-bold">kıdem tazminatı</Link> ve <Link href="/sozluk/hakli-fesih/" className="text-secondary font-bold">haklı fesih</Link> gibi teknik davalarda avukat desteği almak çok önemlidir. Avukatla açılan davalar lehine sonuçlanma olasılığını belirgin şekilde artırır.
                        </p>

                        <h3>Mobbing Davası</h3>

                        <p>
                            Mobbing (işyerinde psikolojik taciz), işçinin sistematik olarak baskıya, aşağılamaya veya dışlanmaya maruz kalmasıdır. İş Kanunu ve Borçlar Kanunu kapsamında işverenin işçiyi koruma yükümlülüğü vardır. Mobbinge maruz kalan işçi, iş sözleşmesini haklı nedenle feshedebilir. Bu durumda kıdem tazminatı talep edebilir. Ayrıca manevi tazminat davası da açabilir. Mobbing davasında e-posta yazışmaları, mesajlar, tanık ifadeleri ve psikolojik sağlık raporları en önemli delillerdir. <strong>İzmir iş avukatı</strong> olarak mobbing mağdurlarına hukuki süreçte rehberlik ediyoruz.
                        </p>

                        <h3>Fazla Mesai Alacağı Davası</h3>

                        <p>
                            Fazla mesai alacağı davası, haftalık 45 saati aşan çalışmalar için %50 zamlı ücretin ödenmemesi durumunda açılır. Bu alacak 5 yıllık zamanaşımına tabidir. İspat yükü işçidedir. Bordrolar, işyeri giriş-çıkış kayıtları, mesaj ve e-posta yazışmaları ile tanık beyanları delil olarak kullanılabilir. Mahkeme, fazla mesai alacağından takdiri indirim (hakkaniyet indirimi) uygulayabilir.
                        </p>

                        {/* Ücretler */}
                        <SectionCTA text="İş davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Yılı İzmir İş Davası Ücretleri</h2>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz.
                            2026 yılı için geçerli avukatlık ücretleri aşağıdaki gibidir:
                        </p>

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
                                        <td className="px-4 py-3 font-medium">İşe İade Davası</td>
                                        <td className="px-4 py-3">3-6 ay</td>
                                        <td className="px-4 py-3">35.000 - 55.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">Kıdem Tazminatı Davası</td>
                                        <td className="px-4 py-3">6 ay - 1.5 yıl</td>
                                        <td className="px-4 py-3">30.000 - 60.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">İş Kazası Tazminatı</td>
                                        <td className="px-4 py-3">1 - 2 yıl</td>
                                        <td className="px-4 py-3">50.000 - 100.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">Fazla Mesai & İşçi Alacakları</td>
                                        <td className="px-4 py-3">6 ay - 1 yıl</td>
                                        <td className="px-4 py-3">25.000 - 50.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">İş Sözleşmesi Hazırlama</td>
                                        <td className="px-4 py-3">1-3 gün</td>
                                        <td className="px-4 py-3">5.000 - 15.000 TL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki ücretler ortalama değerlerdir. Kesin ücret, davanın durumuna göre belirlenir.
                            <strong> İzmir iş avukatı</strong> olarak ilk görüşmede detaylı ücret bilgisi sunuyoruz.
                        </p>

                        {/* Neden Biz */}
                        <h2 id="neden-biz" className="scroll-mt-24">Neden Bizi Tercih Etmelisiniz?</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: "İş Hukuku Uzmanlığı", desc: "İş davaları alanında deneyimli avukat ve danışman ekibi" },
                                { title: "Hızlı Arabuluculuk", desc: "İvedi yargılama ile ortalama 3-6 ayda sonuç" },
                                { title: "Şeffaf İletişim", desc: "Davanızın her aşamasında düzenli bilgilendirme" },
                                { title: "Sonuç Odaklı", desc: "Müvekkillerimizin en yüksek tazminatı alması için stratejik yaklaşım" },
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-xl p-6">
                                    <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                                    <p className="font-bold text-primary text-lg mb-2">{item.title}</p>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            İzmir'de <strong>en iyi iş hukuku avukatı</strong> arayışınızda doğru adrestesiniz. Müvekkillerimizin memnuniyeti bizim için en önemli başarı kriteridir. Daha fazla bilgi için <Link href="/hakkimda/" className="text-secondary font-bold">hakkımızda sayfamızı</Link> ziyaret edin.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İzmir İş Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir İş Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukattır. 2019 yılından bu yana iş hukuku, kira hukuku, boşanma hukuku ve tazminat hukuku alanlarında hizmet veriyor. Bayraklı merkezli ofisinden İzmir genelinde iş davalarını takip ediyor.
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
                            <p className="font-bold text-primary text-xl mb-4">İş Hukuku Makaleleri</p>
                            <div className="space-y-3">
                                <Link href="/blog/isten-cikarildiginda-ne-yapmali/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi
                                </Link>
                                <Link href="/blog/kidem-tazminati-nasil-hesaplanir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kıdem Tazminatı Nasıl Hesaplanır?
                                </Link>
                                <Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İş Kazası Tazminatı Süreci ve Haklarınız
                                </Link>
                                <Link href="/blog/ise-iade-davasi-sartlari-ve-arabuluculuk-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşe İade Davası Şartları ve Arabuluculuk Süreci 2026
                                </Link>
                            </div>
                            <Link href="/blog/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                Tüm Makaleler <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* Hesaplama Araçları */}
                        <div className="not-prose bg-primary/5 border border-primary/10 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">Hesaplama Araçları</p>
                            <div className="space-y-3">
                                <Link href="/kidem-tazminati-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kıdem Tazminatı Hesaplama (2026 Güncel Tavan)
                                </Link>
                            </div>
                        </div>

                        {/* Yerel Kaynaklar */}
                        <div className="not-prose my-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6">Faydalı Yerel Kaynaklar</h2>
                            <p className="text-sm text-slate-600 mb-6">
                                İzmir&apos;de iş hukuku uyuşmazlıklarında başvurabileceğiniz resmi kurumlar ve iletişim bilgileri:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: "İzmir Barosu", desc: "Adli yardım başvurusu ve avukat bilgi sistemi", url: "https://www.izmirbarosu.org.tr/", phone: "0232 463 00 13" },
                                    { name: "İzmir Adliyesi (Bayraklı)", desc: "İş mahkemesi dava dosya sorgulama ve duruşma takvimi", url: "https://izmir.adalet.gov.tr/", phone: "0232 462 80 80" },
                                    { name: "SGK İzmir İl Müdürlüğü", desc: "Sigorta primi sorgulama, iş kazası bildirimi ve hizmet dökümü", url: "https://www.sgk.gov.tr/", phone: "ALO 170" },
                                    { name: "Arabuluculuk Daire Başkanlığı", desc: "İş uyuşmazlığı arabuluculuk başvurusu ve arabulucu listesi", url: "https://adb.adalet.gov.tr/", phone: null },
                                    { name: "İŞKUR İzmir", desc: "İşsizlik maaşı başvurusu ve iş arama kaydı", url: "https://www.iskur.gov.tr/", phone: "ALO 170" },
                                    { name: "ÇSGB İzmir Bölge Müdürlüğü", desc: "İş müfettişi şikayeti ve iş güvenliği denetimi", url: "https://www.csgb.gov.tr/", phone: "ALO 170" },
                                ].map((resource, i) => (
                                    <a key={i} href={resource.url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 bg-white border border-slate-100 rounded-xl hover:border-secondary hover:shadow-md transition-all">
                                        <span className="font-bold text-primary text-sm mb-1">{resource.name}</span>
                                        <span className="text-xs text-slate-500 mb-2">{resource.desc}</span>
                                        {resource.phone && <span className="text-xs text-secondary font-medium">Tel: {resource.phone}</span>}
                                    </a>
                                ))}
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir İş Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    İş davalarınız için hemen randevu alın.
                                    <strong className="text-white"> İzmir iş avukatı</strong> ekibimiz size yardımcı olmaya hazırdır.
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

                        {/* İlçe Bazlı Hizmet Sayfaları */}
                        <div className="not-prose mt-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
                            <h2 className="text-2xl font-playfair font-bold text-primary text-center mb-4">İlçe Bazlı İş Avukatı Hizmetlerimiz</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                                Ofisimiz Bayraklı Adliyesi&apos;nin hemen karşısındadır. İzmir&apos;in tüm merkez ilçelerinde iş hukuku davalarını takip ediyoruz.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "Bayraklı İş Avukatı", url: "/bayrakli-is-avukati" },
                                    { name: "Karşıyaka İş Avukatı", url: "/karsiyaka-is-avukati" },
                                    { name: "Bornova İş Avukatı", url: "/bornova-is-avukati" },
                                    { name: "Konak İş Avukatı", url: "/konak-is-avukati" },
                                    { name: "Buca İş Avukatı", url: "/buca-is-avukati" },
                                    { name: "Çiğli İş Avukatı", url: "/cigli-is-avukati" },
                                    { name: "Gaziemir İş Avukatı", url: "/gaziemir-is-avukati" },
                                    { name: "Balçova İş Avukatı", url: "/balcova-is-avukati" },
                                    { name: "Narlıdere İş Avukatı", url: "/narlidere-is-avukati" },
                                    { name: "Karabağlar İş Avukatı", url: "/karabaglar-is-avukati" },
                                    { name: "Güzelbahçe İş Avukatı", url: "/guzelbahce-is-avukati" },
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
