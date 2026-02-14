import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle, Scale, FileText, Users, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir Kira Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de kira hukuku, kiracı tahliye davaları, kira tespit davaları ve gayrimenkul uyuşmazlıklarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-kira-avukati/",
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
            "name": "Kira Hukuku Hizmetleri",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kiracı Tahliye Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Tespit Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tahliye Taahhütnamesi İcra Takibi" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Sözleşmesi Hazırlama" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zorunlu Arabuluculuk" } }
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
        absolute: "İzmir Kira Avukatı | Tahliye Davası & Kira Tespit | Av. Mert Kağan Çetin",
    },
    description: "İzmir kira avukatı Mert Kağan Çetin ile kiracı tahliye davaları, kira tespit davaları ve kira sözleşmesi uyuşmazlıklarında profesyonel hukuki destek alın. 2026 güncel fiyatlar.",
    keywords: ["İzmir kira avukatı", "kiracı tahliye avukatı İzmir", "kira tespit davası", "tahliye davası İzmir", "kira avukatı"],
    openGraph: {
        title: "İzmir Kira Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira hukuku, tahliye davaları ve kira tespit davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/",
        type: "website",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-kira-avukati/",
    },
};

const faqs = [
    {
        question: "İzmir'de kira avukatı tutmak zorunlu mu?",
        answer: "Kira davalarında avukat tutmak zorunlu değildir ancak hak kaybı yaşamamak için mutlaka uzman bir İzmir kira avukatı ile çalışmanızı öneririz. Tahliye davaları, kira tespit davaları gibi süreçler teknik hukuki bilgi gerektirmektedir."
    },
    {
        question: "Kiracı tahliye davası ne kadar sürer?",
        answer: "Kiracı tahliye davası süresi, tahliye sebebine göre değişmektedir. Tahliye taahhütnamesi ile açılan davalarda 3-6 ay, ihtiyaç nedeniyle tahliye davalarında 6 ay - 1.5 yıl, iki haklı ihtar nedeniyle tahliye davalarında ise 1-2 yıl sürebilmektedir."
    },
    {
        question: "2026 yılında kiracı tahliye davası ücreti ne kadar?",
        answer: "2026 yılında İzmir'de kiracı tahliye davası avukatlık ücreti 35.000 TL ile 60.000 TL arasında değişmektedir. Ücret, davanın türüne, karmaşıklığına ve süresine göre belirlenmektedir."
    },
    {
        question: "Kiracım kira ödemiyor, ne yapmalıyım?",
        answer: "Kiracınız kira ödemiyorsa öncelikle noter aracılığıyla ihtarname çekmeniz gerekmektedir. İhtarnameye rağmen ödeme yapılmazsa tahliye davası açılabilir. İzmir kira avukatı olarak bu süreçte size rehberlik edebiliriz."
    },
    {
        question: "Kira tespit davası nedir?",
        answer: "Kira tespit davası, kira bedelinin rayiç değerlere göre yeniden belirlenmesi için açılan davadır. Kira artış oranının TÜFE'nin altında kalması veya piyasa koşullarına uygun olmaması durumunda açılabilir."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "Kira Hukuku Hizmetlerimiz" },
    { id: "tahliye-davasi", title: "Kiracı Tahliye Davası Nedir?" },
    { id: "tahliye-sureci", title: "Tahliye Davası Süreci" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirKiraAvukatiPage() {
    return (
        <main className="bg-white">
            {/* Schema Markup */}
            <LegalServiceSchema />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">İzmir Kira Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kira Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Kiracı tahliye davaları, kira tespit davaları ve tüm kira uyuşmazlıklarında
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
            [&>h1]:text-[2.5rem] [&>h1]:mb-8 [&>h1]:mt-16 [&>h1]:leading-tight [&>h1]:bg-gradient-to-r [&>h1]:from-primary/10 [&>h1]:to-transparent [&>h1]:py-4 [&>h1]:px-6 [&>h1]:-mx-6 [&>h1]:rounded-lg [&>h1]:border-l-4 [&>h1]:border-primary
            [&>h2]:text-[1.75rem] [&>h2]:mb-6 [&>h2]:mt-14 [&>h2]:bg-slate-100 [&>h2]:py-4 [&>h2]:px-6 [&>h2]:-mx-6 [&>h2]:rounded-lg [&>h2]:border-l-4 [&>h2]:border-secondary
            [&>h3]:text-[1.375rem] [&>h3]:mb-4 [&>h3]:mt-10 [&>h3]:text-primary [&>h3]:font-bold [&>h3]:border-b [&>h3]:border-slate-200 [&>h3]:pb-2
            [&>p]:text-[1rem] [&>p]:text-slate-700 [&>p]:leading-[1.85] [&>p]:mb-5
            prose-strong:text-primary prose-strong:font-bold
            prose-a:text-secondary prose-a:font-semibold prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            [&>ul>li]:text-[1rem] [&>ul>li]:text-slate-700 [&>ul>li]:mb-2 [&>ul>li]:leading-relaxed
            [&>ol>li]:text-[1rem] [&>ol>li]:text-slate-700 [&>ol>li]:mb-2 [&>ol>li]:leading-relaxed
            prose-ul:my-6 prose-ul:pl-6
            prose-ol:my-6 prose-ol:pl-6
            prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-slate-800 prose-blockquote:font-medium
            prose-hr:my-12 prose-hr:border-slate-200 prose-hr:border-t-2
            prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-sm
            prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-3 prose-td:text-sm
            prose-tr:even:bg-slate-50">

                        {/* Intro */}
                        <p className="text-xl leading-relaxed">
                            İzmir'de kira hukuku alanında uzmanlaşmış bir avukat olarak, ev sahipleri ve kiracılar arasındaki
                            uyuşmazlıkların çözümünde profesyonel hukuki destek sunuyoruz. Özellikle <strong>Bayraklı Adliyesi</strong> (İzmir Adliyesi) bölgesindeki ofisimizden
                            tüm süreçleri yakından takip ediyoruz. <strong>İzmir kira avukatı</strong> olarak
                            tahliye davaları, kira tespit davaları, kira sözleşmesi hazırlanması ve arabuluculuk süreçlerinde
                            müvekkillerimize rehberlik ediyoruz.
                        </p>

                        <p>
                            Kira hukuku, Türk Borçlar Kanunu ve İcra İflas Kanunu çerçevesinde düzenlenen karmaşık bir hukuk dalıdır.
                            İzmir ve çevresinde yaşanan kira uyuşmazlıkları, son yıllarda ekonomik koşulların etkisiyle önemli ölçüde
                            artmıştır. Bu nedenle <strong>İzmir kira avukatı</strong> ile çalışmak, hak kaybı yaşamamanız için kritik önem taşımaktadır.
                        </p>

                        {/* Hizmetlerimiz */}
                        <h2 id="hizmetlerimiz" className="scroll-mt-24">İzmir Kira Avukatı Hizmetlerimiz</h2>

                        <p>
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir'de kira hukuku alanında kapsamlı hizmetler sunmaktayız.
                            <strong>İzmir kiracı tahliye avukatı</strong> ve kira davaları konusunda uzman ekibimizle aşağıdaki
                            hizmetleri sağlamaktayız:
                        </p>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            {[
                                { icon: Scale, title: "Kira Tespit Davası", desc: "Kira bedelinin güncel rayiçlere göre belirlenmesi" },
                                { icon: FileText, title: "Tahliye Taahhütnamesi", desc: "Geçerli taahhütname hazırlama ve icra takibi" },
                                { icon: Users, title: "Zorunlu Arabuluculuk", desc: "Arabuluculuk sürecinde profesyonel temsil" },
                                { icon: CheckCircle, title: "İhtiyaç Tahliyesi", desc: "Konut veya işyeri ihtiyacına dayalı tahliye" },
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

                        <p>
                            <strong>İzmir kira avukatı</strong> olarak sunduğumuz tüm hizmetlerde müvekkil menfaatini ön planda tutarak,
                            en kısa sürede en etkili sonuçları almayı hedefliyoruz. Detaylı bilgi için
                            <Link href="/hizmetler" className="text-secondary font-bold"> hizmetlerimiz sayfasını</Link> inceleyebilirsiniz.
                        </p>

                        {/* Tahliye Davası */}
                        <h2 id="tahliye-davasi" className="scroll-mt-24">Kiracı Tahliye Davası Nedir?</h2>

                        <p>
                            Kiracı tahliye davası, kiracının kiralanan konut veya işyerinden hukuki yollarla çıkarılması için açılan
                            dava türüdür. Türk Borçlar Kanunu'nun 350-356. maddeleri arasında düzenlenen tahliye sebepleri, kiraya verene
                            belirli koşulların varlığında kiracıyı tahliye etme hakkı tanımaktadır.
                        </p>

                        <p>
                            <strong>İzmir kiracı tahliye avukatı</strong> olarak sıklıkla karşılaştığımız tahliye nedenleri şunlardır:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Tahliye Sebebi</th>
                                        <th className="px-6 py-4 text-left">Yasal Dayanak ve Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Tahliye Taahhütnamesi", desc: "Kiracının yazılı olarak belirli bir tarihte taşınmazı boşaltmayı taahhüt etmesi (TBK m. 352/1)" },
                                        { title: "İhtiyaç Nedeniyle Tahliye", desc: "Kiraya verenin kendisi, eşi, altsoyu veya üstsoyu için konut ihtiyacı (TBK m. 350)" },
                                        { title: "İki Haklı İhtar", desc: "Bir kira yılı içinde iki kez haklı ihtara rağmen kiranın ödenmemesi (TBK m. 352/2)" },
                                        { title: "10 Yıllık Kira Süresi", desc: "10 yıl geçtikten sonra her uzama yılı sonunda fesih hakkı (TBK m. 347)" },
                                        { title: "Yeniden İnşa", desc: "Kiralananın yeniden inşası veya esaslı onarımı (TBK m. 350/2)" },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 text-slate-600">
                                                {item.desc}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Her bir tahliye sebebinin kendine özgü ispat şartları ve prosedürleri vardır. Bu nedenle <strong>İzmir kira avukatı</strong>
                            desteği almadan hareket etmeniz durumunda davanın reddedilme riski bulunmaktadır.
                        </p>

                        {/* Süreç */}
                        <h2 id="tahliye-sureci" className="scroll-mt-24">Kiracı Tahliye Davası Süreci</h2>

                        <p className="text-center">
                            <strong>İzmir'de kiracı tahliye davası</strong> açmak isteyen mal sahipleri için süreç aşağıdaki aşamalardan oluşmaktadır:
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
                                        { step: 1, title: "Ön Değerlendirme", desc: "İzmir kira avukatı ile görüşme, durumun analizi ve tahliye sebebinin belirlenmesi" },
                                        { step: 2, title: "İhtarname Gönderimi", desc: "Noter aracılığıyla yasal ihtarnamenin kiracıya tebliği" },
                                        { step: 3, title: "Zorunlu Arabuluculuk", desc: "Dava öncesi zorunlu arabuluculuk görüşmelerinin yapılması" },
                                        { step: 4, title: "Dava Açılması", desc: "Sulh Hukuk Mahkemesi'nde tahliye davasının açılması" },
                                        { step: 5, title: "Yargılama Süreci", desc: "Duruşmalar, delil sunumu ve tanık dinlenmesi" },
                                        { step: 6, title: "Karar ve İcra", desc: "Mahkeme kararı ve gerekirse icra yoluyla tahliye" },
                                    ].map((item) => (
                                        <tr key={item.step} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-center font-bold text-secondary bg-slate-50/50">
                                                {item.step}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-primary">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4 text-slate-600">
                                                {item.desc}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-center">
                            Tahliye taahhütnamesine dayalı tahliye, diğer tahliye türlerine göre çok daha hızlı sonuçlanmaktadır.
                            <strong>İzmir kira avukatı</strong> olarak müvekkillerimize mümkün olduğunca tahliye taahhütnamesi almalarını önermekteyiz.
                            Bu konuda detaylı bilgi için <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi" className="text-secondary font-bold">tahliye davası rehberimizi</Link> okuyabilirsiniz.
                        </p>

                        {/* Ücretler */}
                        <h2 id="ucretler" className="scroll-mt-24">2026 Yılı İzmir Kira Davası Ücretleri</h2>

                        <p>
                            <strong>İzmir kira avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz.
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
                                        <td className="px-4 py-3 font-medium">Tahliye Taahhüdü ile Tahliye</td>
                                        <td className="px-4 py-3">3-6 ay</td>
                                        <td className="px-4 py-3">35.000 - 50.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">İhtiyaç Nedeniyle Tahliye</td>
                                        <td className="px-4 py-3">6 ay - 1.5 yıl</td>
                                        <td className="px-4 py-3">45.000 - 70.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">İki Haklı İhtar Tahliyesi</td>
                                        <td className="px-4 py-3">1 - 2 yıl</td>
                                        <td className="px-4 py-3">50.000 - 80.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">Kira Tespit Davası</td>
                                        <td className="px-4 py-3">6 ay - 1 yıl</td>
                                        <td className="px-4 py-3">40.000 - 60.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">Kira Sözleşmesi Hazırlama</td>
                                        <td className="px-4 py-3">1-3 gün</td>
                                        <td className="px-4 py-3">5.000 - 15.000 TL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki ücretler ortalama değerlerdir. Kesin ücret, davanın karmaşıklığına ve özel durumuna göre belirlenir.
                            <strong>İzmir kira avukatı</strong> olarak ilk görüşmede detaylı ücret bilgisi sunmaktayız.
                        </p>

                        {/* Neden Biz */}
                        <h2 id="neden-biz" className="scroll-mt-24">Neden Bizi Tercih Etmelisiniz?</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: "Uzman Kadro", desc: "Kira hukuku alanında deneyimli avukat ve danışman ekibi" },
                                { title: "Hızlı Sonuç", desc: "Tahliye taahhüdü ile ortalama 3-6 ayda sonuç" },
                                { title: "Şeffaf İletişim", desc: "Davanızın her aşamasında düzenli bilgilendirme" },
                                { title: "Uygun Ücret", desc: "Piyasa ortalamasına uygun, şeffaf fiyatlandırma" },
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-xl p-6">
                                    <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                                    <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            <strong>İzmir kira avukatı</strong> arayışınızda doğru adrese ulaştınız. Müvekkillerimizin memnuniyeti bizim için en önemli
                            başarı kriteridir. Hakkımızda daha fazla bilgi almak için <Link href="/hakkimda" className="text-secondary font-bold">hakkımızda sayfamızı</Link> ziyaret edebilirsiniz.
                        </p>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <div className="not-prose space-y-6 my-8">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border-b border-slate-200 pb-6">
                                    <h3 className="font-bold text-primary text-lg mb-2">{faq.question}</h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Kira Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira davalarınız için ücretsiz ön görüşme randevusu alın.
                                    <strong className="text-white"> İzmir kira avukatı</strong> ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
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

                        {/* Local Hub Section - Internal Linking Strategy */}
                        <div className="not-prose my-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h2 className="text-2xl font-bold mb-6 text-center">İzmir'in Tüm İlçelerinde Kira Avukatı Hizmeti</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                                Ofisimiz Bayraklı Adliyesi'nin hemen karşısında yer almakta olup, İzmir'in tüm merkez ilçelerinde
                                kira hukuku davalarını takip etmektedir. İlçe bazlı hizmetlerimiz için aşağıdaki bağlantıları inceleyebilirsiniz:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "Bayraklı Kira Avukatı", url: "/bayrakli-kira-avukati" },
                                    { name: "Karşıyaka Kira Avukatı", url: "/karsiyaka-kira-avukati" },
                                    { name: "Bornova Kira Avukatı", url: "/bornova-kira-avukati" },
                                    { name: "Konak Kira Avukatı", url: "/konak-kira-avukati" },
                                    { name: "Buca Kira Avukatı", url: "/buca-kira-avukati" },
                                    { name: "Çiğli Kira Avukatı", url: "/cigli-kira-avukati" },
                                    { name: "Gaziemir Kira Avukatı", url: "/gaziemir-kira-avukati" },
                                    { name: "Balçova Kira Avukatı", url: "/balcova-kira-avukati" },
                                    { name: "Narlıdere Kira Avukatı", url: "/narlidere-kira-avukati" },
                                    { name: "Karabağlar Kira Avukatı", url: "/karabaglar-kira-avukati" },
                                    { name: "Güzelbahçe Kira Avukatı", url: "/guzelbahce-kira-avukati" },
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

                    </div>
                </div>
            </article>
        </main>
    );
}
