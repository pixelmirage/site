import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import { YouTubeShorts } from "@/components/ui/YouTubeShorts";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { articleProseClasses } from "@/lib/prose-classes";


function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir Kira Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de kira hukuku, kiracı tahliye davaları, kira tespit davaları ve gayrimenkul uyuşmazlıklarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-kira-avukati/",
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
            "name": "Kira Hukuku Hizmetleri",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kiracı Tahliye Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Tespit Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tahliye Taahhütnamesi İcra Takibi" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Sözleşmesi Hazırlama" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zorunlu Arabuluculuk" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira Artırım ve Tespit Davası" } }
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
        absolute: "İzmir Kira Avukatı | Tahliye & Kira Tespit Davası | Av. Mert Kağan Çetin",
    },
    description: "İzmir kira avukatı Av. Mert Kağan Çetin — kiracı tahliye davaları, kira tespit ve artırım davaları, kira sözleşmesi uyuşmazlıklarında uzman hukuki destek. Bayraklı, İzmir.",
    keywords: ["İzmir kira avukatı", "kira avukatı izmir", "kira hukuku avukatı izmir", "izmir kira hukuku avukatı", "kira artırım avukatı izmir", "kiracı tahliye avukatı İzmir", "kira tespit davası", "tahliye davası İzmir", "izmir en iyi kira avukatı", "kira avukatı izmir yakınında", "kira hukuku avukatları izmir"],
    openGraph: {
        title: "İzmir Kira Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira hukuku, tahliye davaları ve kira tespit davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-04-16",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-kira-avukati/",
    },
};

const faqs = [
    {
        question: "Avukata soru sormak kaç TL?",
        answer: "2026 yılı itibarıyla avukata soru sormak (danışma ücreti) İzmir Barosu tarifesine göre sözlü danışma için en az 3.000 TL, yazılı danışma için ise en az 6.000 TL'dir. Ancak bu tutarlar asgari ücretlerdir; avukatın deneyimine, konunun karmaşıklığına ve görüşme süresine göre değişiklik gösterebilir. Bazı avukatlar ilk görüşmeyi ücretsiz sunmaktadır. Büromuzda kira hukuku alanında ilk ön görüşme ücretsizdir. Bu görüşmede davanızın genel değerlendirmesi yapılır, hukuki haklarınız anlatılır ve izlenecek yol hakkında bilgilendirme sağlanır. Danışma ücreti, ileride dava açılması halinde avukatlık ücretinden mahsup edilebilir."
    },
    {
        question: "Kira davalarında avukat ücreti ne kadar?",
        answer: "2026 yılında İzmir'de kira davalarında avukat ücreti davanın türüne göre değişmektedir. Tahliye taahhütnamesi ile tahliye davalarında 35.000–50.000 TL, ihtiyaç nedeniyle tahliye davalarında 45.000–70.000 TL, iki haklı ihtar nedeniyle tahliye davalarında 50.000–80.000 TL, kira tespit davalarında ise 40.000–60.000 TL arasında ücret belirlenmektedir. Bu tutarlar İzmir Barosu asgari ücret tarifesinin üzerinde olup, davanın karmaşıklığına, süresine ve dava değerine göre farklılık gösterebilir. Ev sahibi kiracı anlaşmazlıklarında avukat ücreti konusunda kesin bilgi almak için ücretsiz ön görüşme hakkınızı kullanabilirsiniz."
    },
    {
        question: "Kiracı tahliyesine hangi avukat bakar?",
        answer: "Kiracı tahliye davalarına kira hukuku alanında uzmanlaşmış avukatlar bakar. Genel olarak \"gayrimenkul avukatı\" veya \"kira avukatı\" olarak anılan bu avukatlar, Türk Borçlar Kanunu'nun kira hükümlerini, İcra ve İflas Kanunu'nun tahliye prosedürlerini ve Yargıtay'ın güncel içtihatlarını yakından takip eder. Tahliye davaları hukuk mahkemelerinde (sulh hukuk mahkemesi) görülür ve avukat tutma zorunluluğu bulunmamakla birlikte, sürecin teknik detayları nedeniyle uzman avukat desteği kritik önem taşır. İzmir'de kiracı tahliye davaları için büromuz profesyonel hukuki destek sunmaktadır."
    },
    {
        question: "1 dava için avukat ne kadar alır?",
        answer: "2026 yılında İzmir'de bir kira davası için avukat ücreti davanın türüne ve karmaşıklığına göre 35.000 TL ile 80.000 TL arasında değişmektedir. Avukat ücreti belirlenirken davanın süresi, dava değeri, yapılacak işlem sayısı ve davanın zorluğu dikkate alınır. İzmir Barosu asgari ücret tarifesi altında ücret belirlenmesi mümkün değildir. Ücret genellikle dava başında peşin veya taksitli olarak ödenir. Bazı avukatlar başarıya bağlı (nispi) ücret de uygulayabilir. Ayrıca avukatlık ücreti dışında mahkeme harçları, bilirkişi ücreti, tebligat masrafı gibi yargılama giderleri de bulunmaktadır."
    },
    {
        question: "10 yıllık kiracının tahliye davası ne kadar sürer?",
        answer: "10 yıllık uzama süresini dolduran kiracının tahliye davası, TBK m. 347 kapsamında açılır ve ortalama 6 ay ile 1.5 yıl arasında sürer. Kiraya veren, 10 yıllık uzama süresinin sonunda herhangi bir sebep göstermeksizin sözleşmeyi feshedebilir; ancak bunun için sürenin bitiminden en az 3 ay önce yazılı bildirim (fesih ihtarnamesi) gönderilmesi şarttır. Kiracı tahliye etmezse dava açılır. Dava süresince kiracı taşınmazda oturmaya devam edebilir. Mahkeme genellikle bilirkişi incelemesi yapmaz, süre hesabı ve ihtarname incelemesi ile karar verir."
    },
    {
        question: "Kiracı en hızlı nasıl tahliye edilir?",
        answer: "Kiracıyı en hızlı tahliye etmenin yolu tahliye taahhütnamesi ile icra takibi başlatmaktır. Geçerli bir tahliye taahhütnamesi varsa, taahhüt edilen tarihte kiracı çıkmazsa 1 ay içinde icra dairesine başvurulur. Kiracı itiraz etmezse 15 gün içinde tahliye gerçekleşir; toplamda 1-2 ayda sonuç alınır. Tahliye taahhütnamesi yoksa en hızlı yol iki haklı ihtar yöntemidir: Kiracı bir kira yılı içinde iki kez kira bedelini geç öderse, kira yılı sonunda tahliye davası açılabilir. Kira borcunu hiç ödemeyen kiracı için ise ihtarname çekildikten 30 gün sonra tahliye davası açılabilir."
    },
];

const tocItems = [
    { id: "kira-avukatinin-onemi", title: "İzmir Kira Avukatının Önemi" },
    { id: "kira-davalari", title: "Kira Davaları" },
    { id: "kira-islerine-hangi-avukat-bakar", title: "Kira İşlerine Hangi Avukat Bakar?" },
    { id: "kiraci-nasil-cikarilir", title: "Kiracı Nasıl Çıkarılır?" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirKiraAvukatiPage() {
    return (
        <main className="bg-white">
            {/* Schema Markup */}
            <LegalServiceSchema />
            <PersonSchema knowsAbout={["Kira Hukuku", "Kiracı Tahliye Davaları", "Kira Tespit Davası", "Tahliye Taahhütnamesi", "Gayrimenkul Hukuku", "Kira Sözleşmesi Hazırlama"]} />
            <VideoSchema
                name="İzmir'de Kira Avukatıyla Çalışmanın Önemi | Kısa Video"
                description="Kira davası sürecinde en sık yapılan hatalar ve uzman kira avukatının farkı. İzmir'de kira uyuşmazlıklarında profesyonel destek."
                thumbnailUrl="https://img.youtube.com/vi/JeM-o0sl9j8/maxresdefault.jpg"
                uploadDate="2026-03-13"
                contentUrl="https://www.youtube.com/shorts/JeM-o0sl9j8"
                embedUrl="https://www.youtube.com/embed/JeM-o0sl9j8"
            />

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
                            <strong className="text-white">İzmir kira avukatı</strong> olarak kira bedelinin tespiti ve kiracının tahliyesi davalarında etkin hukuki hizmet sunmaktayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <a href="tel:+905445854645">
                                    <Phone className="w-5 h-5" />
                                    Hemen Arayın
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                    WhatsApp ile Yazın
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
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-4xl mx-auto ${articleProseClasses}`}>

                        {/* Giriş */}
                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir kira avukatı</strong> olarak kira bedelinin tespiti ve kiracının tahliyesi davalarında İzmir genelinde hizmet vermekteyiz. Kiracının tahliyesi, Borçlar Kanununda oldukça sıkı şekil şartlarına bağlanmış olması sebebiyle üzerinde titizlikle çalışılması gereken bir konudur.
                        </p>

                        <p>
                            Bu sebeple kira hukuku konusunda deneyimli bir <strong>İzmir kira avukatı</strong> ile çalışmak hızlı sonuç almanızda büyük önem taşımaktadır. Kira hukukunu ilgilendiren sorunlarınıza ilişkin etkin bir <strong>kira avukatı</strong> hizmeti sunmaktayız.
                        </p>

                        {/* İletişim Kutusu */}
                        <div className="not-prose my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                            <p className="font-playfair font-bold text-xl text-primary mb-4">İzmir Kira Avukatı İletişim</p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                İzmir&apos;de kira hukuku konusunda uzmanlaşmış avukatlar, hem kiracıların hem de ev sahiplerinin karşılaşabileceği hukuki sorunların çözümünde yardımcı olmaktadır. <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="text-secondary font-bold">Kira sözleşmelerinin</Link> hazırlanması, kiracı veya ev sahibi haklarının korunması, kira artışı uygulamaları, <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="text-secondary font-bold">tahliye işlemleri</Link> gibi konularda profesyonel destek almak isteyenler İzmir kira avukatına başvurabilir.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                İzmir kira avukatları, müvekkillerine hukuki danışmanlık hizmeti sunarak kira hukuku konusunda doğru adımlar atmalarına yardımcı olurlar. Kiracıların veya ev sahiplerinin haklarını korumak için gerekli olan tüm prosedürleri takip ederek müvekkillerinin haklarını savunurlar.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Eğer siz de İzmir&apos;de kira hukuku konusunda uzman bir avukattan destek almak istiyorsanız, <strong>Av. Mert Kağan Çetin</strong> ile iletişime geçebilirsiniz.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-slate-500">Telefon</p>
                                        <a href="tel:+905445854645" className="font-bold text-primary hover:text-secondary transition-colors text-sm">0544 585 46 45</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-slate-500">Adres</p>
                                        <span className="font-bold text-primary text-sm">Mansuroğlu Mah. Bayraklı/İzmir</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-slate-500">E-posta</p>
                                        <a href="mailto:mertkagancetin@gmail.com" className="font-bold text-primary hover:text-secondary transition-colors text-sm">mertkagancetin@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <YouTubeShorts
                            videoId="JeM-o0sl9j8"
                            title="İzmir'de Kira Avukatıyla Çalışmanın Önemi - Kısa Video"
                        />

                        {/* İzmir Kira Avukatının Önemi */}
                        <h2 id="kira-avukatinin-onemi" className="scroll-mt-24">İzmir Kira Avukatının Önemi</h2>

                        <p>
                            Kiraya ilişkin hususlar sıkı şekil şartlarına bağlanmıştır. Ev sahibi ve kiracı arasındaki anlaşmazlıkların yetkin bir <strong>kira avukatı</strong> tarafından takip edilmesi çok önemlidir. <strong>Kira hukuku avukatı</strong>nın yardımları sayesinde süreleri kaçırmazsınız. <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="text-secondary font-bold">Tahliye işlemlerini</Link> ve davaları daha hızlı sonuçlandırır, böylece hak kaybına uğramanın önüne geçmiş olursunuz.
                        </p>

                        <p>
                            İzmir&apos;de kira hukukuyla ilgili bir sorun yaşıyorsanız bir <strong>kira hukuku avukatı</strong> arayışı içerisinde olabilirsiniz. Kira hukuku avukatları, ev sahibi ve kiracı arasındaki ilişkileri düzenlerler. Yasal düzenlemeleri bilirler ve bu konuda danışmanlık yapabilirler.
                        </p>

                        <p>
                            <strong>İzmir kira avukatları</strong>, <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/" className="text-secondary font-bold">kira sözleşmesi hazırlama</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="text-secondary font-bold">kira artışı</Link> ve kiracı tahliyesi gibi konularda müvekkillerine yardımcı olurlar. Ayrıca <strong>İzmir kira hukuku avukatları</strong>, kiracıların haklarını ve ev sahiplerinin haklarını savunmak için gerektiğinde mahkemede dava açabilirler.
                        </p>

                        <p>
                            Kiralama sürecinde veya <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="text-secondary font-bold">kira sözleşmesinin sona ermesi</Link> ile ilgili birçok sorunla karşılaşma ihtimaliniz vardır. İzmir&apos;deki kira hukuku avukatları size bu konularda hukuki destek sağlayabilirler.
                        </p>

                        <p>
                            Profesyonel danışmanlık ve hukuki desteğe ihtiyaç duyduğunuzda, kira hukuku alanında uzmanlaşmış avukatlara başvurmanızda büyük yarar vardır.
                        </p>

                        <SectionCTA text="Kira uyuşmazlığınız için hukuki destek almak ister misiniz?" />

                        {/* Kira Davaları */}
                        <h2 id="kira-davalari" className="scroll-mt-24">Kira Davaları</h2>

                        <p>
                            <strong>İzmir kira avukatı</strong> olarak kira hukukuyla ilgili aşağıdaki davalarda hizmet vermekteyiz:
                        </p>

                        <div className="not-prose my-8 space-y-3">
                            {[
                                { num: "1", title: "Kiracının Tahliyesi Davaları", url: "/izmir-kira-avukati/kiraci-tahliye-davasi/" },
                                { num: "2", title: "Kira Bedelinin Artırımı ve Tespiti Davaları", url: "/izmir-kira-avukati/kira-tespit-davasi/" },
                                { num: "3", title: "Kiralananın Hor Kullanımından Kaynaklanan Tazminat Davası", url: "/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/" },
                                { num: "4", title: "Depozitonun İadesinden Kaynaklanan Davalar", url: "/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/" },
                                { num: "5", title: "Kira Sözleşmesinden Kaynaklanan Alacak Davaları", url: "/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/" },
                                { num: "6", title: "Kira Sözleşmesinden Kaynaklanan Tespit Davaları", url: "/izmir-kira-avukati/kira-uyarlama-davasi/" },
                            ].map((item) => (
                                <Link key={item.num} href={item.url} className="group flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 border-l-4 border-secondary transition-colors no-underline">
                                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-sm flex-shrink-0">{item.num}</span>
                                    <span className="font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Kira İşlerine Hangi Avukat Bakar */}
                        <h2 id="kira-islerine-hangi-avukat-bakar" className="scroll-mt-24">Kira İşlerine Hangi Avukat Bakar?</h2>

                        <p>
                            <strong>Kira hukuku avukatı</strong>, müvekkillerden gelen kira kontratlarını revize eden ve düzenleyen, TBK hükümlerine göre kira hukukuna uygun çeşitli sözleşme ve protokolleri hazırlayan, kira hukuku kaynaklı <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="text-secondary font-bold">tahliye davaları</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="text-secondary font-bold">kira tespit davaları</Link> gibi her türlü kira ilişkisinden doğan uyuşmazlıklarla ilgilenen alanında uzman hukukçuya denir.
                        </p>

                        <p>
                            Kiraya verilen taşınmazın İzmir&apos;de bulunması durumunda <strong>kira hukuku avukatı</strong>nın İzmir&apos;den tutulması önerilir. Zira kira ile ilgili bir uyuşmazlık çıktığında erken, hızlı ve doğru müdahaleyi taşınmazın bulunduğu yerdeki avukat yapacaktır. Dava öncesi <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" className="text-secondary font-bold">zorunlu arabuluculuk</Link> sürecinde de yerel avukatla çalışmak önemli bir avantaj sağlar.
                        </p>

                        {/* Kiracı Nasıl Çıkarılır */}
                        <h2 id="kiraci-nasil-cikarilir" className="scroll-mt-24">Kiracı Nasıl Çıkarılır?</h2>

                        <p>
                            Kiracılarıyla sorun yaşayan ev sahipleri &quot;kiracı nasıl çıkarılır?&quot;, &quot;kirasını düzenli ödeyen kiracı evden çıkarılabilir mi?&quot; şeklinde sorular sormaktadır.
                        </p>

                        <p>
                            Kiracının tahliye edilebilmesi için kanunda öngörülen belli başlı sebepleri ileri sürmelisiniz. Detaylı bilgi için <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/" className="text-secondary font-bold">kiracının tahliyesi hakkındaki yazımızı</Link> inceleyebilirsiniz. Tahliye sebepleri aşağıdaki gibidir:
                        </p>

                        <h3>1. Bildirim Yolu ile Fesih</h3>

                        <ul>
                            <li><strong>Belirli süreli kira sözleşmeleri için:</strong> Kira süresi + 10 uzama yılı geçtikten sonra kiraya veren sözleşmeyi feshedebilir (TBK m. 347).</li>
                            <li><strong>Belirsiz süreli kira sözleşmeleri için:</strong> Sözleşme tarihinden itibaren 10 yıl geçtikten sonra fesih hakkı doğar.</li>
                        </ul>

                        <h3>2. Dava Yolu ile Fesih</h3>

                        <ul>
                            <li>Konut ya da iş yeri gereksinimi nedeniyle <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" className="text-secondary font-bold">tahliye davası</Link> (TBK m. 350)</li>
                            <li>Kiralananın yeniden inşası ve imarı nedeniyle tahliye davası</li>
                            <li>Yeni malikin gereksinimi nedeniyle tahliye davası</li>
                            <li>Yazılı olarak verilmiş <Link href="/tahliye-taahhutnamesi/" className="text-secondary font-bold">tahliye taahhüdü</Link> nedeniyle kiracının tahliyesi (TBK m. 352/1)</li>
                            <li>Bir kira döneminde <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="text-secondary font-bold">iki haklı ihtar</Link> nedeniyle tahliye davası (TBK m. 352/2)</li>
                            <li>Kiracının veya birlikte yaşadığı eşinin aynı ilçe sınırları içinde konutunun bulunması</li>
                        </ul>

                        <h3>3. Kiracının Yükümlülüklerine Aykırı Davranması Nedeniyle Fesih</h3>

                        <ul>
                            <li>Kiracının taşınmaza ağır hasar vermesi</li>
                            <li>Kiracının, kiraya verenin şahsına veya ailesine karşı ağır hakaret, tehdit veya darp gibi eylemlerde bulunması</li>
                            <li>Kiracının kiraladığı taşınmazı özgülenme amacına aykırı kullanması (örneğin: çiçekçi olarak kiralanan işyerinin kebapçı olarak kullanılması)</li>
                            <li>Kiracının taşınmazı kiraya verenin yazılı rızası olmaksızın üçüncü şahıslara kiralaması (izinsiz alt kira)</li>
                            <li>Kiracının komşulara saygı gösterme borcunu yerine getirmemesi (gürültü yapması vb.)</li>
                        </ul>

                        <h3>4. Kiracının Temerrüdü Nedeniyle Tahliye</h3>

                        <p>
                            Borcunu sözleşmede kararlaştırılan tarihte ödemeyen kiracıya ihtarname çekilerek 30 günlük süre verilir. 30 gün içerisinde kirasını ödemeyen kiracı temerrüt sebebiyle tahliye edilebilir. <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="text-secondary font-bold">İki haklı ihtar nedeniyle tahliye</Link> sebebiyle karıştırılmaması gerekir.
                        </p>

                        {/* İnfografik */}
                        <figure className="not-prose my-10">
                            <Image
                                src="/images/infographics/tahliye-sebepleri-ve-dayanaklari.webp"
                                alt="Kiracı tahliye sebepleri ve hukuki dayanakları: TBK m. 350 ihtiyaç, m. 352 taahhütname ve iki haklı ihtar, m. 347 süre sonu ile tahliye davası açma koşulları"
                                width={768}
                                height={1024}
                                className="w-full max-w-md mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Kiracı tahliye sebepleri ve hukuki dayanakları</figcaption>
                        </figure>

                        {/* Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Ev Sahibi Kiracı Davalarında Avukatlık Ücreti</h2>

                        <p>
                            Tahliye davalarında genellikle İzmir avukatları olarak yıllık kira bedelinin belirli bir yüzdesi üzerinden ücretlendirme yapılmaktadır. Ancak çoğu avukatın bir taban fiyat uygulaması bulunmaktadır. 2026 yılı güncel ücret aralıklarımız:
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
                            Lütfen kira hukukunu ilgilendiren sorununuzla ilgili kesin fiyat bilgisi almak için <strong>kira hukuku avukatı</strong> ile <Link href="/iletisim/" className="text-secondary font-bold">iletişime geçiniz</Link>.
                        </p>

                        <SectionCTA text="Kira davanız için avukat desteği almak ister misiniz?" />

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İzmir Kira Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. 2019 yılından bu yana kira, iş, boşanma ve tazminat hukuku alanlarında hizmet vermektedir. Bayraklı merkezli ofisinden İzmir genelinde kira davalarını takip etmektedir.
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
                            <p className="font-bold text-primary text-xl mb-4">Kira Hukuku Makaleleri</p>
                            <div className="space-y-3">
                                <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?
                                </Link>
                                <Link href="/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Hangi Durumlarda Kira Tespit Davası Açılabilir?
                                </Link>
                                <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?
                                </Link>
                                <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kiracının Tahliyesi İçin İki Haklı İhtar Nedir?
                                </Link>
                                <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Hukukunda Zorunlu Arabuluculuk Süreci
                                </Link>
                                <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşyeri Kira Sözleşmelerinde Dikkat Edilmesi Gereken Hususlar
                                </Link>
                                <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Sözleşmesi Fesih Sebepleri ve Hukuki Süreç
                                </Link>
                                <Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Depozito İadesi Davası: Kiracının Hakları ve Hukuki Süreç
                                </Link>
                                <Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kiracının Aidat Borcu ve Ev Sahibinin Sorumlulukları
                                </Link>
                            </div>
                            <Link href="/blog/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                Tüm Makaleler <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* Yerel Kaynaklar */}
                        <div className="not-prose my-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6">Faydalı Yerel Kaynaklar</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: "İzmir Barosu", desc: "Avukat arama ve baro hizmetleri", url: "https://www.izmirbarosu.org.tr/" },
                                    { name: "İzmir Adliyesi (Bayraklı)", desc: "Adliye iletişim ve duyurular", url: "https://izmir.adalet.gov.tr/" },
                                    { name: "UYAP Vatandaş Portal", desc: "Dava dosyası sorgulama", url: "https://vatandas.uyap.gov.tr/" },
                                    { name: "Arabuluculuk Daire Başkanlığı", desc: "Arabulucu sicil listesi", url: "https://adb.adalet.gov.tr/" },
                                ].map((resource, i) => (
                                    <a key={i} href={resource.url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 bg-white border border-slate-100 rounded-xl hover:border-secondary hover:shadow-md transition-all">
                                        <span className="font-bold text-primary text-sm mb-1">{resource.name}</span>
                                        <span className="text-xs text-slate-500">{resource.desc}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Google Reviews */}
                        <div className="not-prose">
                            <GoogleReviews />
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">İzmir Kira Avukatı Hakkında Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* Son Paragraf */}
                        <p>
                            Kira hukukunu ilgilendiren her türlü sorununuza ilişkin hukuki danışmanlık almak için <strong>İzmir kira avukatı</strong> ile <Link href="/iletisim/" className="text-secondary font-bold">iletişime geçebilirsiniz</Link>.
                        </p>

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Kira Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira davalarınız için hemen randevu alın. <strong className="text-white">İzmir kira avukatı</strong> olarak size yardımcı olmaya hazırız.
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

                        {/* Uzmanlık Alanları Alt Sayfalar */}
                        <div className="not-prose my-16 bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
                            <h2 className="text-2xl font-playfair font-bold text-primary text-center mb-2">Kira Hukuku Uzmanlık Alanlarımız</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto text-sm">
                                Her kira uyuşmazlığı türüne özel hizmet sayfalarımızda detaylı bilgi alabilirsiniz.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Kiracı Tahliye Davası", desc: "Tüm tahliye sebepleri ve İzmir'de tahliye davası hizmetimiz", url: "/izmir-kira-avukati/kiraci-tahliye-davasi/" },
                                    { title: "Kira Tespit Davası", desc: "Kira bedelinin güncel rayice göre tespiti davası hizmetimiz", url: "/izmir-kira-avukati/kira-tespit-davasi/" },
                                    { title: "Kira Uyarlama Davası", desc: "Olağanüstü koşullarda kira bedelinin uyarlanması davası hizmetimiz", url: "/izmir-kira-avukati/kira-uyarlama-davasi/" },
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

                    </div>
                </div>
            </article>
        </main>
    );
}
