import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle, Scale, FileText, Users, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import { YouTubeShorts } from "@/components/ui/YouTubeShorts";
import { SectionCTA } from "@/components/ui/SectionCTA";


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
        absolute: "İzmir Kira Avukatı | Tahliye & Kira Tespit | Hemen Arayın",
    },
    description: "İzmir kira avukatı Av. Mert Kağan Çetin ile kiracı tahliye, kira tespit ve sözleşme uyuşmazlıklarında uzman hukuki destek alın. Hemen arayın.",
    keywords: ["İzmir kira avukatı", "kiracı tahliye avukatı İzmir", "kira tespit davası", "tahliye davası İzmir", "kira avukatı", "kira tespit davası ne zaman açılır", "kira bedelinin tespiti davası", "kiracının hakları", "kira sözleşmesi nasıl yapılır", "tahliye taahhütnamesi örneği", "10 yıllık kiracının tahliyesi", "kiracı nasıl çıkarılır", "ihtiyaç nedeniyle tahliye dava açma süresi"],
    openGraph: {
        title: "İzmir Kira Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira hukuku, tahliye davaları ve kira tespit davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-03-20",
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
        question: "Ücretsiz avukat danışma hattı var mı?",
        answer: "Evet, Türkiye'de ücretsiz hukuki danışma almak için birkaç yol bulunmaktadır. Baroların \"Adli Yardım Büroları\" maddi durumu yetersiz vatandaşlara ücretsiz avukat atamaktadır. İzmir Barosu Adli Yardım Merkezi'ne 0232 463 00 13 numarasından ulaşabilirsiniz. Bunun dışında ALO 176 (UYAP) ve CİMER üzerinden de hukuki başvuru yapılabilir. Ancak bu kanallar genel bilgilendirme sağlar, dava stratejisi gibi detaylı hukuki analiz sunmaz. Kira uyuşmazlıklarında doğru stratejiyi belirlemek için alanında uzman bir kira avukatından danışmanlık almanız önerilir."
    },
    {
        question: "Ücretsiz avukat nasıl istenir?",
        answer: "Ücretsiz avukat hizmetinden yararlanmak için bulunduğunuz ilin barosuna \"adli yardım başvurusu\" yapmanız gerekmektedir. Başvuru için nüfus cüzdanı fotokopisi, gelir durumunu gösteren belge (maaş bordrosu, SGK dökümü veya muhtardan fakirlik ilmühaberi) ve dava konusuna ilişkin belgeler gereklidir. Baro, başvuruyu değerlendirerek uygun görürse ücretsiz avukat atar. Adli yardım kapsamında mahkeme harçları ve yargılama giderleri de ertelenir. İzmir Barosu Adli Yardım Merkezi'ne şahsen veya online başvuru yapılabilir. Ancak adli yardım süreci zaman alabilir ve atanan avukatın uzmanlık alanı dava konusuyla örtüşmeyebilir."
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
        question: "Davayı kaybeden kiracı ne kadar öder?",
        answer: "Tahliye davasını kaybeden kiracı, karşı tarafın (ev sahibinin) yargılama giderlerini ve vekalet ücretini ödemek zorundadır. 2026 yılında asgari vekalet ücreti İzmir Barosu tarifesine göre belirlenir ve genellikle 15.000–30.000 TL arasındadır. Bunun yanı sıra mahkeme harçları, tebligat masrafları, bilirkişi ücreti gibi yargılama giderleri de kaybeden tarafa yükletilir. Kiracı ayrıca dava süresince birikmiş kira borçlarını ve varsa gecikme faizlerini de ödemek zorundadır. Tahliye kararı kesinleştikten sonra kiracı taşınmazı boşaltmazsa icra yoluyla tahliye yapılır ve icra masrafları da kiracıya yüklenir."
    },
    {
        question: "Ev sahibi tahliye davasını kazanırsa ne olur?",
        answer: "Ev sahibi tahliye davasını kazandığında mahkeme tahliye kararı verir. Karar kesinleştikten sonra kiracıya taşınmazı boşaltması için süre tanınır. Kiracı bu süre içinde çıkmazsa, ev sahibi icra dairesine başvurarak zorla tahliye işlemi başlatır. İcra müdürlüğü kiracıya tahliye emri gönderir ve verilen sürede taşınmaz boşaltılmazsa, icra memuru ve gerekirse kolluk kuvvetleri eşliğinde fiili tahliye gerçekleştirilir. Kiracının eşyaları yediemine teslim edilir. Ayrıca ev sahibi, dava süresince oluşan yargılama giderleri ve vekalet ücretini kiracıdan tahsil edebilir. İhtiyaç nedeniyle tahliye kararı alınmışsa, ev sahibi 3 yıl boyunca taşınmazı başkasına kiralayamaz."
    },
    {
        question: "Kiracı en hızlı nasıl tahliye edilir?",
        answer: "Kiracıyı en hızlı tahliye etmenin yolu tahliye taahhütnamesi ile icra takibi başlatmaktır. Geçerli bir tahliye taahhütnamesi varsa, taahhüt edilen tarihte kiracı çıkmazsa 1 ay içinde icra dairesine başvurulur. Kiracı itiraz etmezse 15 gün içinde tahliye gerçekleşir; toplamda 1-2 ayda sonuç alınır. Tahliye taahhütnamesi yoksa en hızlı yol iki haklı ihtar yöntemidir: Kiracı bir kira yılı içinde iki kez kira bedelini geç öderse, kira yılı sonunda tahliye davası açılabilir. Kira borcunu hiç ödemeyen kiracı için ise ihtarname çekildikten 30 gün sonra tahliye davası açılabilir."
    },
    {
        question: "Tahliye davası sürerken kiracı çıkarsa masrafları kim öder?",
        answer: "Tahliye davası devam ederken kiracı taşınmazı tahliye ederse, davaya \"konusuz kalma\" nedeniyle son verilir. Bu durumda yargılama giderlerinin kime yükleneceğini hakim takdir eder. Genel uygulamada, davanın açılmasına sebebiyet veren taraf (yani tahliye etmeyen kiracı) yargılama giderlerini ve karşı vekalet ücretini öder. Yargıtay da bu yönde kararlar vermektedir: Dava açıldıktan sonra tahliye eden kiracı, davaya sebebiyet verdiği için masraflardan sorumlu tutulur. Ancak kiracı, dava açılmadan önce tahliye etmişse veya tahliye iradesini dava öncesinde bildirmişse, masraflar ev sahibine yüklenebilir."
    },
    {
        question: "Kiracıyı kesin tahliye etme sebepleri nelerdir?",
        answer: "Türk Borçlar Kanunu'na göre kiracıyı kesin tahliye etme sebepleri şunlardır: Tahliye taahhütnamesi (TBK m. 352/1) — kiracı yazılı taahhüt vermiş ancak tahliye etmemişse. İki haklı ihtar (TBK m. 352/2) — kiracı bir kira yılında iki kez kira bedelini geç ödemişse. İhtiyaç nedeniyle tahliye (TBK m. 350) — ev sahibi veya yakınları konutu kullanma ihtiyacı duyuyorsa. Yeni malikin ihtiyacı (TBK m. 351) — taşınmazı satın alan yeni malik ihtiyaç nedeniyle tahliye isteyebilir. Tadilat/yıkım (TBK m. 350/2) — esaslı tadilat veya yeniden inşa gerekiyorsa. 10 yıllık uzama süresi (TBK m. 347) — kira ilişkisi 10 yılı aştığında sebepsiz fesih hakkı doğar."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "Kira Hukuku Hizmetlerimiz" },
    { id: "ne-zaman-avukat", title: "İzmir Kira Avukatına Ne Zaman İhtiyaç Duyulur?" },
    { id: "tahliye-davasi", title: "Kiracı Tahliye Davası Nedir?" },
    { id: "tahliye-sureci", title: "Tahliye Davası Süreci" },
    { id: "kira-tespit-davasi", title: "Kira Tespit Davası Ne Zaman Açılır?" },
    { id: "10-yillik-kiraci", title: "10 Yıllık Kiracının Tahliyesi" },
    { id: "kira-sozlesmesi", title: "Kira Sözleşmesi Nasıl Yapılır?" },
    { id: "kiracinin-haklari", title: "Kiracının Hakları" },
    { id: "avukatli-avukatsiz", title: "Avukatlı mı Avukatsız mı?" },
    { id: "ucretler", title: "2026 İzmir Kira Avukatı Ücretleri" },
    { id: "neden-biz", title: "İzmir Kira Avukatı Olarak Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "İzmir Kira Avukatı Hakkında SSS" },
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
                            İzmir Kira Avukatı Hizmeti
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong className="text-white">İzmir kira avukatı</strong> olarak kiracı tahliye davaları, kira tespit davaları ve tüm kira uyuşmazlıklarında
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

                        {/* Definition Block - AI SEO Optimized */}
                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir kira avukatı</strong>, kira sözleşmelerinden doğan uyuşmazlıklarda kiracı veya ev sahibini temsil eden avukattır. Tahliye davaları, kira tespit davaları ve kira alacağı takibi başlıca çalışma alanlarıdır. <strong>Kira hukuku avukatı İzmir</strong> arayanlar için Av. Mert Kağan Çetin, <a href="https://www.izmirbarosu.org.tr/" target="_blank" rel="noopener noreferrer">İzmir Barosu</a>&apos;na kayıtlı olarak Bayraklı merkezli ofisinden hizmet vermektedir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 15 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p className="text-xl leading-relaxed">
                            İzmir'de kira hukuku alanında uzman avukat olarak ev sahipleri ve kiracılara destek sunuyoruz. <a href="https://izmir.adalet.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold no-underline"><strong>Bayraklı Adliyesi</strong></a> (İzmir Adliyesi) yakınındaki ofisimizden tüm süreçleri yakından takip ediyoruz. <strong>İzmir kira avukatı</strong> olarak tahliye, kira tespiti, sözleşme hazırlama ve arabuluculuk konularında yanınızdayız.
                        </p>

                        <p>
                            Kira hukuku, Türk Borçlar Kanunu ve İcra İflas Kanunu kapsamında düzenlenir. Deneyimli bir <strong>kira hukuku avukatı</strong> ile çalışmak, hak kaybını önlemenin en etkili yoludur.
                        </p>

                        <p>
                            İzmir'de kira uyuşmazlıkları son yıllarda belirgin şekilde arttı. <strong>Kiracı nasıl çıkarılır</strong>, <strong>kira tespit davası ne zaman açılır</strong>, <strong>kiracının hakları</strong> nelerdir gibi sorular her gün büromuza gelir. <strong>İzmir kira avukatı</strong> ile çalışmak, hak kaybı yaşamamanız için kritik önem taşır.
                        </p>

                        <YouTubeShorts
                            videoId="JeM-o0sl9j8"
                            title="İzmir'de Kira Avukatıyla Çalışmanın Önemi - Kısa Video"
                        />

                        {/* İzmir Kira İstatistikleri */}
                        <div className="not-prose my-10 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">#</span>
                                İzmir&apos;de Kira Davaları: Rakamlarla Güncel Durum
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { value: "127.676", label: "Tahliye davası (2024, Türkiye)", sub: "2020'de 28.430 — 4 yılda 5 kat artış", source: "Adalet Bakanlığı / UYAP" },
                                    { value: "383.502", label: "Kira arabuluculuk başvurusu", sub: "135.673'ü anlaşmayla sonuçlandı", source: "Adalet Bakanı Yılmaz Tunç, 2025" },
                                    { value: "23.000", label: "İzmir'de arabuluculukla çözüm", sub: "Kira uyuşmazlığını arabuluculukla çözen vatandaş", source: "Adalet Bakanı Yılmaz Tunç" },
                                    { value: "%38,5", label: "İzmir kira artışı (Ocak 2026)", sub: "Türkiye birincisi — İstanbul %38,1", source: "TCMB Yeni Kiracı Kira Endeksi" },
                                    { value: "27.532 ₺", label: "İzmir ortalama kira (Ocak 2026)", sub: "2021'de 2.510 ₺ idi — 10 kat artış", source: "Endeksa / TCMB" },
                                    { value: "%31,1", label: "İzmir kiracı hane oranı", sub: "~1,46 milyon hane, ~454 bin kiracı", source: "TÜİK ADNKS" },
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
                                Veriler TÜİK, TCMB, Adalet Bakanlığı ve Endeksa resmi kaynaklarından derlenmiştir.
                            </p>
                        </div>

                        {/* Hizmetlerimiz */}
                        <h2 id="hizmetlerimiz" className="scroll-mt-24">İzmir Kira Avukatı Hizmetlerimiz</h2>

                        <p>
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir'de kira hukuku alanında kapsamlı hizmet sunuyoruz.
                            <strong> İzmir kiracı tahliye avukatı</strong> ve kira davaları konusunda uzman ekibimizle aşağıdaki hizmetleri sağlıyoruz:
                        </p>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            {[
                                { icon: Scale, title: "Kira Bedelinin Tespiti Davası", desc: "Kira bedelinin güncel piyasa rayiçlerine göre yeniden belirlenmesi" },
                                { icon: FileText, title: "Kira Sözleşmesi ve Taahhütname", desc: "Kira sözleşmesi hazırlama, tahliye taahhütnamesi düzenleme ve icra takibi" },
                                { icon: Users, title: "Zorunlu Arabuluculuk", desc: "Kira uyuşmazlıklarında arabuluculuk sürecinde profesyonel temsil" },
                                { icon: CheckCircle, title: "İhtiyaç Nedeniyle Tahliye", desc: "Konut veya işyeri ihtiyacına dayalı tahliye davası ve süreç yönetimi" },
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
                            <strong>İzmir kira avukatı</strong> olarak tüm hizmetlerde müvekkil menfaatini ön planda tutuyoruz. En kısa sürede etkili sonuç almayı hedefliyoruz. Detaylı bilgi için
                            <Link href="/hizmetler/" className="text-secondary font-bold"> hizmetlerimiz sayfasını</Link> inceleyin.
                        </p>

                        {/* Hangi Durumlarda Kira Avukatına İhtiyacınız Var */}
                        <h2 id="ne-zaman-avukat" className="scroll-mt-24">İzmir Kira Avukatına Ne Zaman İhtiyaç Duyulur?</h2>

                        <p>
                            Kira uyuşmazlıkları her zaman dava gerektirmez. Ancak bazı durumlar profesyonel hukuki destek almayı zorunlu kılar.
                            Aşağıdaki durumlardan biri sizin için geçerliyse bir <strong>İzmir kira avukatı</strong> ile görüşün.
                            Hak kaybı yaşamamak için erken hareket etmek önemlidir.
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { title: "Kiracınız kira ödemiyor veya sürekli geç ödüyor", desc: "İhtarname çekme, iki haklı ihtar süreci ve tahliye davası açma aşamalarında hukuki destek gerekir." },
                                { title: "Kiracınız tahliye taahhütnamesine rağmen çıkmıyor", desc: "Taahhütnamenin geçerliliği, icra takibi başlatma ve tahliye süreci avukat desteği gerektirir." },
                                { title: "Kira artış oranında anlaşamıyorsunuz", desc: "TÜFE sınırı, 5 yılı aşan kira ilişkilerinde emsal kira tespiti ve kira tespit davası süreci teknik bilgi gerektirir." },
                                { title: "Ev sahibiniz sizi haksız yere çıkarmaya çalışıyor", desc: "Kiracı hakları kapsamında tahliye talebine itiraz, hukuka aykırı baskılara karşı korunma." },
                                { title: "Depozitonuz iade edilmiyor", desc: "Depozito iadesi için ihtarname çekme ve gerekirse alacak davası süreci." },
                                { title: "Kira sözleşmenizde sorunlu maddeler var", desc: "Sözleşme incelemesi, hukuka aykırı maddelerin tespiti ve yeni sözleşme hazırlanması." },
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
                            Bu durumlardan birini yaşıyorsanız zamanaşımı sürelerini kaçırmadan harekete geçin. <strong>Kira hukuku avukatı İzmir</strong>'de
                            görüşme almak ilk adımdır. Kira uyuşmazlıklarında dava öncesi <Link href="/sozluk/zorunlu-arabuluculuk/" className="text-secondary font-bold">zorunlu arabuluculuk</Link> süreci
                            de dahil tüm aşamalarda yanınızdayız.
                        </p>

                        <SectionCTA text="Kira uyuşmazlığınız için hukuki destek almak ister misiniz?" />

                        {/* Tahliye Davası */}
                        <h2 id="tahliye-davasi" className="scroll-mt-24">Kiracı Tahliye Davası Nedir?</h2>

                        <p>
                            Kiracı tahliye davası, kiracının kiralanan yerden hukuki yollarla çıkarılması için açılan davadır. Bu dava türü Türk Borçlar Kanunu'nun 350-356. maddeleri arasında düzenlenmiştir. Kanun, kiraya verene belirli koşullar altında kiracıyı tahliye etme hakkı tanır.
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
                            Her tahliye sebebinin kendine özgü ispat şartları vardır. <Link href="/sozluk/tahliye-taahhutnamesi/" className="text-secondary font-bold">Tahliye taahhütnamesi</Link> ile açılan davalarda tüm geçerlilik şartları eksiksiz olmalıdır. <Link href="/sozluk/ihtiyac-nedeniyle-tahliye/" className="text-secondary font-bold">İhtiyaç nedeniyle tahliye</Link> davalarında ise ihtiyacın samimi ve zorunlu olduğu kanıtlanmalıdır.
                        </p>

                        <p>
                            <strong>İzmir kira avukatı</strong> desteği almadan açılan davalarda ret riski yüksektir. <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/" className="text-secondary font-bold">Kiracı tahliye rehberimizi</Link> okumanızı tavsiye ederiz.
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
                                        { step: 3, title: "Zorunlu Arabuluculuk", desc: "Dava öncesi zorunlu arabuluculuk görüşmelerinin yapılması (detaylar için blog yazımızı okuyun)" },
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
                            Tahliye taahhütnamesi ile tahliye, diğer yollara göre çok daha hızlıdır. Tahliye kararına rağmen taşınmazı boşaltmayan kiracıdan <Link href="/sozluk/ecrimisil/" className="text-secondary font-bold">ecrimisil</Link> (haksız işgal tazminatı) talep edilebilir. <strong>İzmir kira avukatı</strong> olarak müvekkillerimize taahhütname almalarını öneririz. Detaylı bilgi için <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" className="text-secondary font-bold">tahliye davası rehberimizi</Link> okuyun. <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="text-secondary font-bold">İki haklı ihtar makalemiz</Link> de faydalı olacaktır.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Tahliye davası hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Kira Tespit Davası */}
                        <h2 id="kira-tespit-davasi" className="scroll-mt-24">Kira Tespit Davası Ne Zaman Açılır?</h2>

                        <p>
                            <Link href="/sozluk/kira-tespit-davasi/" className="text-secondary font-bold">Kira bedelinin tespiti davası</Link>, kira bedelinin piyasa rayicinin çok altında kaldığı durumlarda açılır. Uzun süreli kiralarda <Link href="/sozluk/kira-artis-orani/" className="text-secondary font-bold">kira artış oranı</Link> enflasyonun gerisinde kalabilir. Bu da davayı kiraya verenler için zorunlu hale getirir.
                        </p>

                        <p>
                            <strong>Kira tespit davası ne zaman açılır?</strong> Bu soru kira hukukunun en sık sorulanlarından biridir.
                            Davanın açılma zamanı Türk Borçlar Kanunu'na göre şu koşullara bağlıdır:
                        </p>

                        <ul>
                            <li>
                                <strong>İhtarname çekilmişse:</strong> Yeni kira döneminden en az 30 gün önce yazılı bildirim yapılmalıdır. Bu durumda dava dönem sonuna kadar her zaman açılabilir.
                            </li>
                            <li>
                                <strong>İhtarname çekilmemişse:</strong> Dava yeni kira döneminin başında açılmalıdır. Mahkeme kararı yine dönem başından itibaren geçerli olur.
                            </li>
                            <li>
                                <strong>5 yıldan uzun kira ilişkilerinde:</strong> <strong>Kira sözleşmesi</strong> 5 yılı aştığında TÜFE sınırı uygulanmaz. <strong>Kira bedelinin tespiti davası</strong> ile emsal kira bedeli talep edilebilir (TBK m. 344/3).
                            </li>
                        </ul>

                        <p>
                            <strong>İzmir kira avukatı</strong> olarak kira tespit davalarında güçlü bir dosya hazırlıyoruz. Bilirkişi raporu, emsal kira bedelleri ve piyasa analizleri bu dosyanın temelini oluşturur. Mahkemenin belirlediği yeni kira bedeli, dava tarihinden değil kira döneminin başından itibaren geçerli olur. Bu yüzden davayı doğru zamanda açmak çok önemlidir. Dava öncesi zorunlu olan <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" className="text-secondary font-bold">arabuluculuk sürecini</Link> de incelemenizi tavsiye ederiz.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Kira tespit davası hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* 10 Yıllık Kiracının Tahliyesi */}
                        <h2 id="10-yillik-kiraci" className="scroll-mt-24">10 Yıllık Kiracının Tahliyesi</h2>

                        <p>
                            <strong>10 yıllık kiracının tahliyesi</strong>, Türk Borçlar Kanunu m. 347'de düzenlenen önemli bir tahliye yoludur. Konut ve çatılı işyeri kiralarında <Link href="/sozluk/kira-sozlesmesi/" className="text-secondary font-bold">kira sözleşmesi</Link> <Link href="/sozluk/10-yillik-uzama-suresi/" className="text-secondary font-bold">10 yıllık uzama süresi</Link>ni doldurduğunda kiraya veren sözleşmeyi feshedebilir. Bunun için herhangi bir gerekçe göstermesi gerekmez.
                        </p>

                        <p>
                            Peki <strong>kiracı nasıl çıkarılır</strong>? 10 yıllık süre dolduğunda yapılması gereken tek şey vardır. Uzama yılının bitiminden en az 3 ay önce yazılı fesih bildirimi gönderin. Kiracı bu bildirime rağmen çıkmazsa tahliye davası açabilirsiniz. Bu yol başka bir sebep ispatlamayı gerektirmez. Bu nedenle ev sahipleri için oldukça avantajlıdır.
                        </p>

                        <p>
                            Süre hesabında önemli bir ayrıntı vardır. 10 yıllık süre <strong>kira sözleşmesi</strong>nin başlangıcından değil, ilk uzama tarihinden itibaren sayılır. Örneğin 1 yıllık bir sözleşmede uzama ikinci yıldan başlar. 10 yıllık süre toplamda 11. yılın sonunda dolar.
                        </p>

                        <h3>İhtiyaç Nedeniyle Tahliye Dava Açma Süresi</h3>

                        <p>
                            <strong>İhtiyaç nedeniyle tahliye dava açma süresi</strong> sözleşme türüne göre değişir. Belirli süreli sözleşmelerde dava, kira süresinin bitiminden itibaren <strong>1 ay</strong> içinde açılmalıdır. Belirsiz süreli sözleşmelerde ise her 6 aylık dönem sonu için en az <strong>3 ay önceden</strong> fesih bildirimi gerekir.
                        </p>

                        <p>
                            Bu davada kiraya veren, kendisinin veya yakınlarının gerçek bir konut ihtiyacını ispatlamalıdır. Mahkeme, ihtiyacın samimi olup olmadığını titizlikle değerlendirir. Tahliye kararı sonrasında taşınmaz 3 yıl boyunca başkasına kiraya verilemez (TBK m. 355).
                            <strong> İzmir kira avukatı</strong> olarak <strong>ihtiyaç nedeniyle tahliye dava açma süresi</strong>ni
                            kaçırmamanız için süreç takibinizi titizlikle yapıyoruz.
                        </p>

                        {/* Kira Sözleşmesi */}
                        <h2 id="kira-sozlesmesi" className="scroll-mt-24">Kira Sözleşmesi Nasıl Yapılır?</h2>

                        <p>
                            <strong>Kira sözleşmesi nasıl yapılır?</strong> Bu soru hem ev sahipleri hem de kiracılar tarafından sıkça sorulur. <strong>Kira sözleşmesi</strong> mutlaka yazılı olarak düzenlenmelidir. İyi bir sözleşme şu unsurları içermelidir:
                        </p>

                        <ul>
                            <li><strong>Tarafların kimlik bilgileri:</strong> Kiraya veren ve kiracının TC kimlik numarası, adresi ve iletişim bilgileri</li>
                            <li><strong>Taşınmaz bilgileri:</strong> Kiralanan yerin açık adresi, ada/parsel numarası ve kullanım amacı (konut veya işyeri)</li>
                            <li><strong>Kira bedeli ve ödeme koşulları:</strong> Aylık kira tutarı, ödeme günü ve ödeme yöntemi (banka havalesi önerilir)</li>
                            <li><strong>Kira artış oranı:</strong> Yıllık artış oranı — konut kiralarında yasal üst sınır bir önceki yılın TÜFE oranıdır</li>
                            <li><strong>Depozito:</strong> Güvence bedeli miktarı (en fazla 3 aylık kira bedeli) ve iade koşulları</li>
                            <li><strong>Sözleşme süresi:</strong> Başlangıç ve bitiş tarihi ile yenileme koşulları</li>
                        </ul>

                        <p>
                            Doğru hazırlanmış bir <strong>kira sözleşmesi</strong> ilerideki uyuşmazlıkları büyük ölçüde önler. Eksik veya hatalı maddeler ciddi sorunlara yol açabilir. Bu sorunlar hem <strong>kiracının hakları</strong>nı hem de kiraya verenin haklarını olumsuz etkiler. İşyeri kiralamaları için <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/" className="text-secondary font-bold">işyeri kira sözleşmesi rehberimizi</Link> inceleyin.
                        </p>

                        <h3>Tahliye Taahhütnamesi Örneği ve Önemi</h3>

                        <p>
                            <Link href="/tahliye-taahhutnamesi/" className="text-secondary font-bold">Tahliye taahhütnamesi örneği</Link> hazırlarken en önemli kural şudur: Taahhütname, kiralananın tesliminden <em>sonra</em> alınmalıdır. <strong>Kira sözleşmesi</strong> ile aynı tarihte alınan taahhütnameler geçersiz sayılabilir. Geçerli bir <strong>tahliye taahhütnamesi örneği</strong> şu unsurları içermelidir:
                        </p>

                        <ul>
                            <li>Kiracının el yazısıyla yazılmış tarih ve ıslak imza</li>
                            <li>Tahliye edilecek taşınmazın açık adresi</li>
                            <li>Taahhüt edilen kesin tahliye tarihi</li>
                            <li>Kiralananın teslim alındığı tarihten sonraki bir tarihte düzenlendiğinin kanıtlanabilir olması</li>
                        </ul>

                        <p>
                            <strong>İzmir kira avukatı</strong> olarak müvekkillerimize hem <strong>kira sözleşmesi</strong> hazırlama
                            hem de hukuki açıdan geçerli tahliye taahhütnamesi düzenleme hizmeti sunmaktayız.
                        </p>

                        <SectionCTA text="Kira sözleşmeniz hakkında danışmak mı istiyorsunuz?" />

                        {/* Kiracının Hakları */}
                        <h2 id="kiracinin-haklari" className="scroll-mt-24">Kiracının Hakları</h2>

                        <p>
                            Türk Borçlar Kanunu kiracıları koruyan güçlü kurallar içerir. <strong>Kiracının hakları</strong> konusunda hem kiracıların hem de ev sahiplerinin bilmesi gereken başlıca hükümler şunlardır:
                        </p>

                        <ul>
                            <li>
                                <strong>Kira artış sınırı:</strong> Konut kiralarında yıllık artış oranı bir önceki yılın TÜFE oranını aşamaz. Bu sınırı aşan artışlar kiracıyı bağlamaz. Fazla ödenen tutar geri istenebilir.
                            </li>
                            <li>
                                <strong>Tahliye koruması:</strong> Kiracı kira bedelini düzenli ödediği sürece sözleşme süresinin dolması tek başına tahliye sebebi değildir. <strong>Kira sözleşmesi</strong> otomatik olarak birer yıl uzar.
                            </li>
                            <li>
                                <strong><Link href="/sozluk/depozito/" className="text-secondary">Depozito</Link> güvencesi:</strong> Güvence bedeli en fazla 3 aylık kira tutarı olabilir. Bu bedel vadeli mevduat hesabına yatırılmalıdır. Taşınmaz hasarsız teslim edildiğinde iade edilir.
                            </li>
                            <li>
                                <strong>Onarım hakkı:</strong> Kiracı, taşınmazdaki esaslı ayıpların giderilmesini ev sahibinden isteyebilir. Onarım yapılmazsa kira bedelinden indirim talep edilebilir.
                            </li>
                            <li>
                                <strong>Ön alım hakkı:</strong> Kiralanan satışa çıkarıldığında kiracının öncelikli satın alma hakkı vardır. Yeni malik de mevcut <strong>kira sözleşmesi</strong>nin şartlarına uymak zorundadır.
                            </li>
                        </ul>

                        <p>
                            <strong>Kiracının hakları</strong> ihlal edildiğinde hukuki yollara başvurmak mümkündür. Bu süreçte deneyimli bir <strong>kira hukuku avukatı</strong> ile çalışmak büyük fark yaratır.
                            <strong> İzmir kira avukatı</strong> olarak hem kiracı hem de ev sahibi tarafında müvekkillerimizin haklarını koruyoruz. Detaylı bilgi için <Link href="/sozluk/kiraci-haklari/" className="text-secondary font-bold">kiracı hakları sözlük sayfamızı</Link> inceleyin.
                        </p>

                        {/* Avukatlı mı Avukatsız mı */}
                        <h2 id="avukatli-avukatsiz" className="scroll-mt-24">Kira Davası Avukatsız mı Açılmalı, Avukatla mı?</h2>

                        <p>
                            Türk hukukunda kira davaları için avukat tutmak zorunlu değildir. Ancak avukatsız açılan davalarda ciddi sorunlar yaşanır. Usul hatası, süre kaçırma ve delil yetersizliği en sık karşılaşılan problemlerdir. İşte iki seçeneğin karşılaştırması:
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
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Süre takibi</td><td className="px-6 py-4 text-slate-600">Zamanaşımı ve hak düşürücü süreleri kaçırma riski yüksek</td><td className="px-6 py-4 text-slate-600">Tüm süreler profesyonel olarak takip edilir</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">İhtarname</td><td className="px-6 py-4 text-slate-600">Eksik veya hatalı ihtarname davanın reddine yol açabilir</td><td className="px-6 py-4 text-slate-600">Hukuki geçerliliği olan ihtarname hazırlanır</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Arabuluculuk</td><td className="px-6 py-4 text-slate-600">Arabuluculuk sürecinde dezavantajlı pozisyon</td><td className="px-6 py-4 text-slate-600">Müzakere gücü ve hukuki argüman desteği</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Delil sunumu</td><td className="px-6 py-4 text-slate-600">Hangi delillerin geçerli olduğu bilinmeyebilir</td><td className="px-6 py-4 text-slate-600">Delil stratejisi ve bilirkişi süreç yönetimi</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Dava süresi</td><td className="px-6 py-4 text-slate-600">Usul hataları nedeniyle süreç uzayabilir</td><td className="px-6 py-4 text-slate-600">Ortalama %30-40 daha kısa sürede sonuç</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Maliyet</td><td className="px-6 py-4 text-slate-600">Avukatlık ücreti yok, ancak hak kaybı riski var</td><td className="px-6 py-4 text-slate-600">Avukatlık ücreti var, ancak sonuç odaklı</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <Link href="/sozluk/kira-tespit-davasi/" className="text-secondary font-bold">Kira tespit davası</Link>, <Link href="/sozluk/ihtiyac-nedeniyle-tahliye/" className="text-secondary font-bold">ihtiyaç nedeniyle tahliye</Link> ve <Link href="/sozluk/iki-hakli-ihtar/" className="text-secondary font-bold">iki haklı ihtar</Link> gibi teknik davalarda avukat desteği çok önemlidir. <strong>Kira hukuku avukatı</strong> ile çalışmak davanızın lehine sonuçlanma şansını artırır.
                            <strong> İzmir kira avukatı</strong> olarak ilk görüşmede davanızın güçlü ve zayıf yönlerini analiz ediyoruz. Size en uygun stratejiyi sunuyoruz.
                        </p>

                        <SectionCTA text="Kira davanız için avukat desteği almak ister misiniz?" />

                        {/* Ücretler */}
                        <h2 id="ucretler" className="scroll-mt-24">2026 İzmir Kira Avukatı Ücretleri</h2>

                        <p>
                            <strong>Ev sahibi kiracı anlaşmazlıklarında avukat ücreti</strong> dava türüne göre değişir.
                            <strong> İzmir kira avukatı</strong> olarak şeffaf fiyatlandırma uyguluyoruz.
                            2026 yılı güncel ücretlerimiz aşağıdadır:
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
                            Yukarıdaki ücretler ortalama değerlerdir. Kesin tutar davanın durumuna göre belirlenir. <strong>İzmir kira avukatı</strong> olarak ilk görüşmede detaylı ücret bilgisi sunuyoruz.
                        </p>

                        {/* Neden Biz */}
                        <h2 id="neden-biz" className="scroll-mt-24">İzmir Kira Avukatı Olarak Neden Bizi Tercih Etmelisiniz?</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: "Uzman Kadro", desc: "Kira hukuku alanında deneyimli avukat ve danışman ekibi" },
                                { title: "Hızlı Sonuç", desc: "Tahliye taahhüdü ile ortalama 3-6 ayda sonuç" },
                                { title: "Şeffaf İletişim", desc: "Davanızın her aşamasında düzenli bilgilendirme" },
                                { title: "Uygun Ücret", desc: "Piyasa ortalamasına uygun, şeffaf fiyatlandırma" },
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-xl p-6">
                                    <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                                    <p className="font-bold text-primary text-lg mb-2">{item.title}</p>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            <strong>En iyi kira hukuku avukatı</strong> arayışınızda doğru adrese ulaştınız. Müvekkil memnuniyeti bizim için en önemli başarı ölçütüdür. <strong>Kira hukuku avukatı İzmir</strong> olarak her davada sonuç odaklı çalışıyoruz. Hakkımızda bilgi almak için <Link href="/hakkimda/" className="text-secondary font-bold">hakkımızda sayfamızı</Link> ziyaret edin. İzmir gayrimenkul piyasasındaki güncel hukuki gelişmeler için <Link href="/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/" className="text-secondary font-bold">güncel gelişmeler makalemizi</Link> okuyun.
                        </p>

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
                                <Link href="/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Gayrimenkul Piyasasında Güncel Hukuki Gelişmeler
                                </Link>
                            </div>
                            <Link href="/blog/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                Tüm Makaleler <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* Yerel Kaynaklar */}
                        <div className="not-prose my-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6">Faydalı Yerel Kaynaklar</h2>
                            <p className="text-sm text-slate-600 mb-6">
                                İzmir&apos;de kira uyuşmazlıklarında başvurabileceğiniz resmi kurumlar ve iletişim bilgileri:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: "İzmir Barosu", desc: "Avukat arama ve baro hizmetleri", url: "https://www.izmirbarosu.org.tr/" },
                                    { name: "İzmir Adliyesi (Bayraklı)", desc: "Adliye iletişim bilgileri ve duyurular", url: "https://izmir.adalet.gov.tr/" },
                                    { name: "UYAP Vatandaş Portal", desc: "Dava dosyası sorgulama ve e-imza ile dilekçe gönderme", url: "https://vatandas.uyap.gov.tr/" },
                                    { name: "Arabuluculuk Daire Başkanlığı", desc: "Arabulucu sicil listesi ve mevzuat bilgileri", url: "https://adb.adalet.gov.tr/" },
                                    { name: "TKGM (Tapu Kadastro)", desc: "Tapu ve kadastro mevzuatı bilgileri", url: "https://www.tkgm.gov.tr/" },
                                    { name: "e-Devlet Kapısı", desc: "Tapu, adli sicil ve nüfus sorgulamaları", url: "https://www.turkiye.gov.tr/" },
                                ].map((resource, i) => (
                                    <a key={i} href={resource.url} target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 bg-white border border-slate-100 rounded-xl hover:border-secondary hover:shadow-md transition-all">
                                        <span className="font-bold text-primary text-sm mb-1">{resource.name}</span>
                                        <span className="text-xs text-slate-500 mb-2">{resource.desc}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">İzmir Kira Avukatı Hakkında Sıkça Sorulan Sorular</h2>

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
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Kira Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira davalarınız için hemen randevu alın. <strong className="text-white">En iyi kira hukuku avukatı</strong> desteğiyle haklarınızı koruyun. <strong className="text-white">İzmir kira avukatı</strong> ekibimiz size yardımcı olmaya hazır.
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

                        {/* Uzmanlık Alanları */}
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

                        {/* Local Hub Section - Internal Linking Strategy */}
                        <div className="not-prose my-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h2 className="text-2xl font-bold mb-6 text-center">İzmir'in Tüm İlçelerinde Kira Avukatı Hizmeti</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                                Ofisimiz Bayraklı Adliyesi'nin karşısında yer alır. İzmir'in tüm merkez ilçelerinde kira davalarını takip ediyoruz:
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
