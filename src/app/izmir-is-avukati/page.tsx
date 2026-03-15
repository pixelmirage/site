import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle, Briefcase, FileText, Users, ArrowRight, ChevronRight, Home, ShieldCheck, Scale, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir İş Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de iş hukuku, işe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı ve işçi alacakları davalarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-is-avukati/",
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
        absolute: "İzmir İş Avukatı | İşe İade & Tazminat | Av. Mert Kağan Çetin",
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
        "article:modified_time": "2026-03-15",
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
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "İş Hukuku Hizmetlerimiz" },
    { id: "ise-iade", title: "İşe İade Davası" },
    { id: "kidem-tazminati", title: "Kıdem Tazminatı" },
    { id: "ihbar-tazminati", title: "İhbar Tazminatı" },
    { id: "is-kazasi", title: "İş Kazası Tazminatı" },
    { id: "isci-haklari", title: "İşçi Hakları" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirIsAvukatiPage() {
    return (
        <main className="bg-white">
            <LegalServiceSchema />
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
                            <strong>İzmir iş avukatı</strong>, işçi ve işveren arasındaki hukuki uyuşmazlıklarda tarafları temsil eden, işe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı ve işçi alacakları konularında uzmanlaşmış avukattır. Av. Mert Kağan Çetin, İzmir Barosu&apos;na kayıtlı olarak Bayraklı merkezli ofisinden İzmir genelinde iş hukuku hizmeti vermektedir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 10 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p className="text-xl leading-relaxed">
                            İzmir'de iş hukuku alanında uzmanlaşmış bir avukat olarak, işçi ve işveren arasındaki
                            uyuşmazlıkların çözümünde profesyonel hukuki destek sunuyoruz. <strong>Bayraklı Adliyesi</strong> (İzmir Adliyesi) yakınındaki ofisimizden
                            tüm süreçleri yakından takip ediyoruz. <strong>İzmir iş avukatı</strong> olarak
                            işe iade davaları, tazminat davaları, iş kazası davaları ve arabuluculuk süreçlerinde
                            müvekkillerimize rehberlik ediyoruz.
                        </p>

                        <p>
                            İş hukuku, 4857 sayılı İş Kanunu, Borçlar Kanunu ve Sosyal Sigortalar mevzuatı çerçevesinde
                            düzenlenen kapsamlı bir hukuk dalıdır. İzmir'de yaşanan işçi-işveren uyuşmazlıkları, ekonomik
                            koşulların etkisiyle her geçen gün artmaktadır. <strong>İşten çıkarıldım ne yapmalıyım</strong>,
                            <strong> kıdem tazminatı nasıl hesaplanır</strong>, <strong>işe iade davası şartları</strong> nelerdir
                            gibi sorular büromuzda en sık yanıtladığımız konuların başında gelmektedir.
                        </p>

                        {/* Hizmetlerimiz */}
                        <h2 id="hizmetlerimiz" className="scroll-mt-24">İzmir İş Avukatı Hizmetlerimiz</h2>

                        <p>
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir'de iş hukuku alanında kapsamlı hizmetler sunmaktayız.
                            <strong> İzmir iş davası avukatı</strong> ve tazminat davaları konusunda uzman ekibimizle aşağıdaki
                            hizmetleri sağlamaktayız:
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
                            <strong>İzmir iş avukatı</strong> olarak sunduğumuz tüm hizmetlerde müvekkil menfaatini ön planda tutarak,
                            en kısa sürede en etkili sonuçları almayı hedefliyoruz. Detaylı bilgi için
                            <Link href="/hizmetler" className="text-secondary font-bold"> hizmetlerimiz sayfasını</Link> inceleyebilirsiniz.
                        </p>

                        {/* İşe İade Davası */}
                        <h2 id="ise-iade" className="scroll-mt-24">İşe İade Davası Nedir?</h2>

                        <p>
                            İşe iade davası, iş güvencesi kapsamındaki işçilerin haksız veya geçersiz nedenle işten çıkarılması
                            halinde açtığı davadır. 4857 sayılı İş Kanunu'nun 18-21. maddeleri arasında düzenlenen bu dava,
                            işçinin işine geri dönmesini veya tazminat almasını sağlar.
                        </p>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak işe iade davası açılabilmesi için aranan şartlar:
                        </p>

                        <ul>
                            <li><strong>İş güvencesi kapsamı:</strong> İşyerinde en az 30 işçi çalışıyor olmalıdır</li>
                            <li><strong>Kıdem şartı:</strong> İşçi en az 6 ay kıdeme sahip olmalıdır</li>
                            <li><strong>Belirsiz süreli sözleşme:</strong> İş sözleşmesi belirsiz süreli olmalıdır</li>
                            <li><strong>Süre:</strong> Fesih bildiriminden itibaren 1 ay içinde <Link href="/sozluk/zorunlu-arabuluculuk" className="text-secondary font-semibold">arabulucuya</Link> başvurulmalıdır</li>
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
                            İşe iade davası kazanılmasına rağmen işveren işçiyi işe başlatmazsa, işçiye en az 4 aylık,
                            en fazla 8 aylık boşta geçen süre ücreti ve iş güvencesi tazminatı ödenmek zorundadır.
                            <strong> İzmir iş avukatı</strong> olarak bu süreçte müvekkillerimizi en etkin şekilde temsil ediyoruz.
                        </p>

                        {/* Kıdem Tazminatı */}
                        <h2 id="kidem-tazminati" className="scroll-mt-24">Kıdem Tazminatı Nasıl Hesaplanır?</h2>

                        <p>
                            <strong>Kıdem tazminatı</strong>, en az 1 yıl çalışmış olan işçinin iş sözleşmesinin belirli
                            koşullarla sona ermesi halinde hak ettiği tazminattır. 1475 sayılı eski İş Kanunu'nun
                            halen yürürlükte olan 14. maddesi kapsamında düzenlenmektedir.
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
                            <strong>İzmir iş avukatı</strong> olarak kıdem tazminatı davalarında müvekkillerimizin tüm haklarını
                            koruyarak en yüksek tazminat miktarının alınmasını hedefliyoruz. 5 yıllık zamanaşımı süresi
                            dolmadan haklarınızı talep etmeniz büyük önem taşımaktadır.
                        </p>

                        {/* İhbar Tazminatı */}
                        <h2 id="ihbar-tazminati" className="scroll-mt-24">İhbar Tazminatı Nedir?</h2>

                        <p>
                            <strong>İhbar tazminatı</strong>, belirsiz süreli iş sözleşmesinin bildirim süresine uyulmaksızın
                            feshedilmesi halinde, karşı tarafa ödenmesi gereken tazminattır. İş Kanunu m. 17&apos;de
                            düzenlenen bildirim süreleri şu şekildedir:
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
                            İhbar tazminatı hem işçi hem de işveren tarafından talep edilebilir. İhbar süresine uymayan
                            taraf, karşı tarafa bildirim süresine ilişkin ücreti tazminat olarak ödemek zorundadır.
                        </p>

                        {/* İş Kazası */}
                        <h2 id="is-kazasi" className="scroll-mt-24">İş Kazası Tazminatı</h2>

                        <p>
                            İş kazası, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu&apos;nun 13. maddesinde
                            tanımlanmıştır. İşçinin işyerinde veya işin yürütümü nedeniyle meydana gelen kazalar sonucunda
                            bedensel veya ruhsal zarar görmesi halinde işverenden tazminat talep edilebilir.
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
                            İş kazalarında zamanaşımı süresi, zararın ve failin öğrenildiği tarihten itibaren 2 yıl ve
                            her halükarda kazanın meydana geldiği tarihten itibaren 10 yıldır. İş kazasının SGK&apos;ya 3 iş
                            günü içinde bildirilmesi zorunludur. <strong>İzmir iş avukatı</strong> olarak iş kazası
                            sürecinin her aşamasında müvekkillerimizin yanındayız. İş kazası sonucunda doğan tazminat talepleri hakkında detaylı bilgi için <Link href="/izmir-tazminat-avukati" className="text-secondary font-semibold">İzmir tazminat avukatı</Link> sayfamızı da inceleyebilirsiniz.
                        </p>

                        {/* İşçi Hakları */}
                        <h2 id="isci-haklari" className="scroll-mt-24">İşçi Hakları</h2>

                        <p>
                            4857 sayılı İş Kanunu, işçileri koruyan kapsamlı düzenlemeler içermektedir. <strong>İşçi hakları</strong>
                            kapsamında hem işçilerin hem de işverenlerin bilmesi gereken temel hükümler şunlardır:
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
                                <strong>Mobbinge karşı koruma:</strong> İşçinin işyerinde sistematik psikolojik baskıya maruz
                                kalması halinde iş sözleşmesini haklı nedenle feshederek tazminat hakkı doğar.
                            </li>
                        </ul>

                        <p>
                            <strong>İşçi hakları</strong> ihlal edildiğinde hukuki yollara başvurmak mümkündür.
                            <strong> İzmir iş avukatı</strong> olarak müvekkillerimizin yasal haklarını en etkin şekilde koruyoruz.
                        </p>

                        <h3>Mobbing Davası</h3>

                        <p>
                            Mobbing (işyerinde psikolojik taciz), işçinin sistematik olarak baskıya, aşağılamaya veya
                            dışlanmaya maruz kalmasıdır. İş Kanunu ve Borçlar Kanunu kapsamında işverenin işçiyi
                            koruma yükümlülüğü bulunmaktadır. Mobbinge maruz kalan işçi, iş sözleşmesini haklı nedenle
                            feshederek kıdem tazminatı talep edebilir ve ayrıca manevi tazminat davası açabilir.
                            Mobbing davasında e-posta yazışmaları, mesajlar, tanık ifadeleri ve psikolojik sağlık
                            raporları en önemli deliller arasındadır. <strong>İzmir iş avukatı</strong> olarak
                            mobbing mağdurlarına hukuki süreçte rehberlik ediyoruz.
                        </p>

                        <h3>Fazla Mesai Alacağı Davası</h3>

                        <p>
                            Fazla mesai alacağı davası, haftalık 45 saati aşan çalışmalar için ödenmesi gereken %50
                            zamlı ücretin işveren tarafından ödenmemesi halinde açılan davadır. Fazla mesai alacağı
                            5 yıllık zamanaşımına tabidir ve bu süre içinde talep edilmelidir. İspat yükü işçide
                            olmakla birlikte, bordrolar, işyeri giriş-çıkış kayıtları, mesaj ve e-posta yazışmaları
                            ile tanık beyanları delil olarak kullanılabilir. Mahkeme, fazla mesai alacağından takdiri
                            indirim (hakkaniyet indirimi) uygulayabilmektedir.
                        </p>

                        {/* Ücretler */}
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
                            Yukarıdaki ücretler ortalama değerlerdir. Kesin ücret, davanın karmaşıklığına ve özel durumuna göre belirlenir.
                            <strong> İzmir iş avukatı</strong> olarak ilk görüşmede detaylı ücret bilgisi sunmaktayız.
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
                            <strong>İzmir iş avukatı</strong> arayışınızda doğru adrese ulaştınız. Müvekkillerimizin memnuniyeti bizim için en önemli
                            başarı kriteridir. Hakkımızda daha fazla bilgi almak için <Link href="/hakkimda" className="text-secondary font-bold">hakkımızda sayfamızı</Link> ziyaret edebilirsiniz.
                        </p>

                        {/* İlgili Makaleler */}
                        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">İş Hukuku Makaleleri</p>
                            <div className="space-y-3">
                                <Link href="/blog/isten-cikarildiginda-ne-yapmali" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi
                                </Link>
                                <Link href="/blog/kidem-tazminati-nasil-hesaplanir" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kıdem Tazminatı Nasıl Hesaplanır?
                                </Link>
                                <Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İş Kazası Tazminatı Süreci ve Haklarınız
                                </Link>
                            </div>
                            <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                Tüm Makaleler <ArrowRight className="w-3 h-3" />
                            </Link>
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
                                    İş davalarınız için ücretsiz ön görüşme randevusu alın.
                                    <strong className="text-white"> İzmir iş avukatı</strong> ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
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
                                        <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
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
