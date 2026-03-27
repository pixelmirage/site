import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home, ShieldCheck, Scale, Gavel, Users, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { articleProseClasses } from "@/lib/prose-classes";
import { GoogleReviews } from "@/components/sections/GoogleReviews";


function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir Boşanma Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de boşanma davaları, anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-bosanma-avukati/",
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
            "name": "Aile Hukuku Hizmetleri",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anlaşmalı Boşanma Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Çekişmeli Boşanma Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Velayet Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nafaka Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mal Paylaşımı Davası" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Boşanma Protokolü Hazırlama" } }
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
        absolute: "İzmir Boşanma Avukatı | Velayet & Nafaka | Hemen Arayın",
    },
    description: "İzmir boşanma avukatı Av. Mert Kağan Çetin ile anlaşmalı boşanma, velayet, nafaka ve mal paylaşımı davalarında uzman hukuki destek alın. Hemen arayın.",
    keywords: ["İzmir boşanma avukatı", "boşanma avukatı İzmir", "anlaşmalı boşanma", "çekişmeli boşanma", "velayet davası", "nafaka davası", "mal paylaşımı davası", "boşanma davası ücreti", "nafaka hesaplama", "velayet kime verilir", "aile hukuku avukatı İzmir", "boşanma protokolü"],
    openGraph: {
        title: "İzmir Boşanma Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanma davaları, velayet ve nafaka davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-03-20",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/",
    },
};

const faqs = [
    {
        question: "Boşanma avukatı kaç TL alır?",
        answer: "2026 yılında İzmir'de boşanma avukatı ücreti davanın türüne göre değişmektedir. Anlaşmalı boşanma davalarında 25.000–40.000 TL, çekişmeli boşanma davalarında 40.000–80.000 TL arasında ücret belirlenmektedir. Velayet davası, nafaka davası veya mal paylaşımı davası ayrıca açılacaksa her biri için ek ücret talep edilir. İzmir Barosu asgari ücret tarifesi altında ücret belirlenmesi mümkün değildir. Ücret, davanın karmaşıklığına, süresine, çocuk sayısına ve mal varlığının büyüklüğüne göre farklılık gösterebilir. Büromuzda ilk ön görüşme ücretsiz olup, bu görüşmede davanızın genel değerlendirmesi yapılarak kesin ücret bilgisi sunulmaktadır."
    },
    {
        question: "Avukata soru sormak kaç TL?",
        answer: "2026 yılı itibarıyla avukata danışma ücreti İzmir Barosu tarifesine göre sözlü danışma için en az 3.000 TL, yazılı hukuki mütalaa için ise en az 6.000 TL'dir. Bu tutarlar asgari ücretler olup avukatın deneyimine ve konunun karmaşıklığına göre artabilir. Boşanma hukuku gibi aile hukuku konularında ilk görüşmede davanın genel çerçevesi, haklarınız, nafaka ve velayet konularındaki beklentileriniz değerlendirilir. Büromuzda boşanma hukuku alanında ilk ön görüşme ücretsizdir. Danışma ücretinin ileride dava açılması halinde avukatlık ücretinden düşülüp düşülmeyeceğini avukatınıza sormanız önerilir."
    },
    {
        question: "Devlet ücretsiz boşanma avukatı veriyor mu?",
        answer: "Evet, maddi durumu yetersiz vatandaşlar baroların Adli Yardım Büroları aracılığıyla ücretsiz boşanma avukatı talep edebilir. Başvuru için nüfus cüzdanı fotokopisi, gelir durumunu gösteren belge ve dava konusuna ilişkin evraklar gereklidir. İzmir Barosu Adli Yardım Merkezi bu başvuruları değerlendirerek uygun görürse avukat atar. Adli yardım kapsamında mahkeme harçları ve yargılama giderleri de ertelenir. Ancak adli yardım süreci zaman alabilir ve atanan avukatın boşanma hukuku konusunda uzman olma garantisi yoktur. Bu nedenle velayet, nafaka ve mal paylaşımı gibi kritik konularda alanında uzman bir boşanma avukatıyla çalışmanız daha sağlıklı sonuçlar verir."
    },
    {
        question: "İyi bir boşanma avukatı nasıl olur?",
        answer: "İyi bir boşanma avukatı öncelikle aile hukuku alanında uzmanlaşmış ve bu alanda yeterli dava deneyimine sahip olmalıdır. Müvekkilin duygusal durumunu anlayan, empati kurabilen ancak hukuki süreci objektif yöneten bir yaklaşım sergilemelidir. Nafaka hesaplama, velayet kriterleri, mal paylaşımı rejimi ve Yargıtay içtihatları konusunda güncel bilgiye sahip olmalıdır. Şeffaf ücret politikası uygulamalı ve süreç hakkında düzenli bilgilendirme yapmalıdır. Anlaşmalı çözümü teşvik etmeli ancak gerektiğinde çekişmeli davada güçlü bir şekilde müvekkilini temsil edebilmelidir. Referans ve baro sicil kontrolü yapmak da doğru avukat seçiminde önemli bir adımdır."
    },
    {
        question: "Eşler ne kadar ayrı kalırsa boşanır?",
        answer: "Türk Medeni Kanunu'na göre belirli bir süre ayrı yaşamak otomatik olarak boşanma sebebi oluşturmaz. Ancak TMK m. 166/son fıkrası uyarınca boşanma davası reddedildikten sonra eşler 3 yıl boyunca bir araya gelmezse, taraflardan birinin başvurusu üzerine boşanmaya karar verilir. Fiili ayrılık tek başına boşanma sebebi değildir; evlilik birliğinin temelinden sarsılması (TMK m. 166) gibi bir sebebe dayanılması gerekir. Ancak uzun süreli ayrı yaşama, evlilik birliğinin fiilen sona erdiğinin güçlü bir delili olarak mahkemece değerlendirilir. Ayrılık süresi boyunca nafaka ve velayet gibi konularda tedbir kararı alınabilir."
    },
    {
        question: "Boşanmada erkeğin ağır kusurları nelerdir?",
        answer: "Yargıtay içtihatlarına göre boşanmada erkeğe ağır kusur olarak yüklenen başlıca davranışlar şunlardır: Fiziksel şiddet (dövme, yaralama), psikolojik şiddet ve sürekli hakaret, aldatma (zina), eşi evden kovma, aile bireylerine kötü davranma, ekonomik şiddet (eve para vermeme, eşin çalışmasını engelleme), alkol veya madde bağımlılığı, eşin ailesiyle sürekli sorun çıkarma ve güven sarsıcı davranışlar. Ağır kusurlu bulunan eş aleyhine maddi ve manevi tazminata hükmedilir. Ayrıca ağır kusurlu eş yoksulluk nafakası talep edemez. Kusur tespiti mahkeme tarafından tanık beyanları, mesajlar, kamera kayıtları ve uzman raporları değerlendirilerek yapılır."
    },
    {
        question: "Boşanırken hangi mal paylaşılmaz?",
        answer: "Türk Medeni Kanunu'na göre \"kişisel mal\" sayılan varlıklar boşanmada paylaşıma dahil edilmez. Bunlar: Evlilik öncesi sahip olunan mallar, miras yoluyla edinilen mallar, bağış olarak alınan mallar, manevi tazminat alacakları ve kişisel kullanıma özgü eşyalardır (kıyafet, takı gibi). 2002 sonrası evliliklerde edinilmiş mallara katılma rejimi geçerlidir; evlilik süresince maaş, kira geliri, yatırım kazancı gibi edinilmiş mallar eşit paylaşılır. Ancak kişisel malın geliri (örneğin miras kalan evin kira geliri) edinilmiş mal sayılır ve paylaşıma tabidir. Mal rejimi sözleşmesiyle bu kurallar değiştirilebilir."
    },
    {
        question: "Boşanma davası açmadan önce evden ayrılmak suç mu?",
        answer: "Hayır, boşanma davası açmadan önce evden ayrılmak tek başına suç değildir. Ancak hukuki sonuçları olabilir. TMK m. 164'e göre eşlerden biri haklı bir sebep olmaksızın ortak konutu terk ederse ve en az 6 ay dönmezse, diğer eş \"terk\" sebebiyle boşanma davası açabilir. Bu nedenle evden ayrılmadan önce haklı sebebinizi belgelemeniz önemlidir. Şiddet, hakaret, aldatma gibi haklı nedenlerle ayrılıyorsanız, bu durumu kanıtlayan delilleri (hastane raporu, mesajlar, tanıklar) muhafaza edin. Mümkünse evden ayrılmadan önce veya hemen sonrasında boşanma davası açmanız, terk iddiasını bertaraf eder."
    },
    {
        question: "Boşanma davasını kim açarsa avantajlı olur?",
        answer: "Boşanma davasını kimin açtığı tek başına hukuki bir avantaj sağlamaz. Türk hukukunda davacı veya davalı olmak, hakimin kusur değerlendirmesini etkilemez. Mahkeme her iki tarafın kusurlarını objektif olarak değerlendirerek karar verir. Ancak pratikte davayı ilk açan tarafın bazı stratejik avantajları olabilir: Delilleri önceden hazırlama imkânı, dava sürecini kontrol etme, tedbir nafakası ve tedbir kararlarını (çocukla kişisel ilişki, aile konutu kullanımı) erken aşamada talep edebilme. Özellikle şiddet veya aldatma durumlarında erken hareket etmek, delillerin kaybolmasını önler. Ancak aceleye getirilmiş bir dava da zayıf delillerle sonuçsuz kalabilir."
    },
    {
        question: "Çekişmeli boşanma sebepleri nelerdir?",
        answer: "Türk Medeni Kanunu'nda düzenlenen çekişmeli boşanma sebepleri özel ve genel sebepler olarak ikiye ayrılır. Özel boşanma sebepleri: Zina/aldatma (TMK m. 161), hayata kast, pek kötü veya onur kırıcı davranış (m. 162), suç işleme ve haysiyetsiz hayat sürme (m. 163), terk (m. 164) ve akıl hastalığı (m. 165). Genel boşanma sebebi ise evlilik birliğinin temelinden sarsılmasıdır (m. 166) — bu en sık başvurulan sebeptir. Sürekli tartışma, şiddet, ekonomik sorunlar, cinsel uyumsuzluk, ailelerle yaşanan sorunlar, güven sarsıcı davranışlar bu kapsamda değerlendirilir. Her sebep için ispat yükü ve zamanaşımı süreleri farklıdır."
    },
    {
        question: "Çekişmeli boşanma sürecinde evde kim kalır?",
        answer: "Çekişmeli boşanma davasında ortak konutun kullanımına hakim karar verir. TMK m. 169 uyarınca mahkeme, dava süresince eşlerin barınmasına ilişkin geçici önlemler alır. Genellikle çocukların velayetini fiilen kullanan eş evde kalır. Şiddet iddiası varsa, şiddet uygulayan eşin evden uzaklaştırılmasına karar verilebilir (6284 sayılı Kanun). Evin mülkiyetinin kime ait olduğu bu kararı doğrudan etkilemez; kirada otunan konutlarda da aynı kural geçerlidir. Evde kalan eş aleyhine kira veya kullanım bedeli istenebilir. Tedbir kararları dava sonuna kadar geçerlidir ve ihlali halinde zorlama hapsi uygulanabilir."
    },
    {
        question: "Boşanmayı kadın açarsa ne olur?",
        answer: "Boşanma davasını kadının açması, hukuki süreç açısından herhangi bir dezavantaj oluşturmaz. Kadın davacı olarak haklarını talep edebilir: Tedbir nafakası (dava süresince), yoksulluk nafakası (boşanma sonrası), maddi ve manevi tazminat, velayet talebi ve mal paylaşımı. Kadın, kusursuz veya daha az kusurlu ise tazminat talep edebilir. Davayı kadının açması, erkeğin kusurlu olduğu anlamına gelmediği gibi kadının kusursuz olduğu anlamına da gelmez. Mahkeme her iki tarafın kusurlarını ayrı ayrı değerlendirir. Özellikle şiddet mağduru kadınların erken aşamada dava açması ve koruma kararı talep etmesi tavsiye edilir."
    },
    {
        question: "Erkek hangi durumda nafaka ödemez?",
        answer: "Erkek şu durumlarda nafaka ödemekten kurtulabilir: Kadının tam kusurlu olması halinde yoksulluk nafakası hükmedilmez. Kadının boşanma sonrası yoksulluğa düşmeyecek düzeyde geliri veya mal varlığı varsa yoksulluk nafakasına gerek kalmaz. Kadının yeniden evlenmesi halinde yoksulluk nafakası kendiliğinden sona erer. Kadının evlilik dışı bir kişiyle fiilen birlikte yaşaması nafakanın kaldırılma sebebidir. Nafaka alacaklısının haysiyetsiz hayat sürmesi de kaldırma nedenidir. İştirak nafakası ise çocuğun 18 yaşını doldurması veya eğitim hayatının sona ermesiyle biter. Nafaka miktarının azaltılması için koşulların değiştiğinin ispatı gerekir."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "Aile Hukuku Hizmetlerimiz" },
    { id: "ne-zaman-avukat", title: "Boşanma Avukatına Ne Zaman İhtiyaç Duyulur?" },
    { id: "anlasmalai-bosanma", title: "Anlaşmalı Boşanma" },
    { id: "cekismeli-bosanma", title: "Çekişmeli Boşanma" },
    { id: "velayet", title: "Velayet Davası" },
    { id: "nafaka", title: "Nafaka Davası" },
    { id: "mal-paylasimi", title: "Mal Paylaşımı" },
    { id: "avukatli-avukatsiz", title: "Avukatlı mı Avukatsız mı?" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirBosanmaAvukatiPage() {
    return (
        <main className="bg-white">
            <LegalServiceSchema />
            <PersonSchema knowsAbout={["Boşanma Hukuku", "Anlaşmalı Boşanma", "Çekişmeli Boşanma", "Velayet Davası", "Nafaka", "Mal Paylaşımı", "Aile Hukuku"]} />

            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" }
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
                        <span className="text-secondary">İzmir Boşanma Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Boşanma Avukatı Hizmeti
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında
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
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-4xl mx-auto ${articleProseClasses}`}>

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir boşanma avukatı</strong>, evlilik birliğinin sona erdirilmesi sürecinde eşleri hukuki olarak temsil eden avukattır. Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka ve mal paylaşımı konularında uzmanlaşmıştır. Av. Mert Kağan Çetin, <a href="https://www.izmirbarosu.org.tr/" target="_blank" rel="noopener noreferrer">İzmir Barosu</a>&apos;na kayıtlıdır. Bayraklı merkezli ofisinden İzmir genelinde aile hukuku hizmeti verir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 15 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p className="text-xl leading-relaxed">
                            İzmir'de aile hukuku alanında uzmanlaşmış bir avukat olarak boşanma sürecinde profesyonel hukuki destek sunuyoruz. <a href="https://izmir.adalet.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold no-underline"><strong>Bayraklı Adliyesi</strong></a> (İzmir Adliyesi) yakınındaki ofisimizden tüm süreçleri yakından takip ediyoruz. <strong>İzmir boşanma avukatı</strong> olarak anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında müvekkillerimize rehberlik ediyoruz.
                        </p>

                        <p>
                            Boşanma hukuku, Türk Medeni Kanunu'nun 161-184. maddeleri kapsamında düzenlenen hassas bir hukuk dalıdır. <strong>Boşanma davası nasıl açılır</strong>, <strong>velayet kime verilir</strong>,
                            <strong> <Link href="/sozluk/nafaka/" className="text-secondary font-bold">nafaka</Link> nasıl hesaplanır</strong> gibi sorular her gün büromuzda yanıtladığımız konuların başında gelir. Aile hukuku uyuşmazlıkları duygusal boyutunun yanı sıra mali ve hukuki açıdan da dikkatli bir yaklaşım gerektirir.
                        </p>

                        {/* İzmir Boşanma İstatistikleri */}
                        <div className="not-prose my-10 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary text-sm font-bold">#</span>
                                İzmir&apos;de Boşanma Davaları: Rakamlarla Güncel Durum
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { value: "13.927", label: "İzmir'de boşanan çift (2024)", sub: "Türkiye genelinde 187.343 çift boşandı", source: "TÜİK 2024" },
                                    { value: "‰ 3,28", label: "İzmir kaba boşanma hızı (2025)", sub: "Türkiye birincisi — Türkiye ortalaması ‰ 2,26", source: "TÜİK 2025" },
                                    { value: "%8,37", label: "İzmir'de boşanmış nüfus oranı", sub: "315.019 kişi — Türkiye'de en yüksek oran", source: "TÜİK 2025" },
                                    { value: "%74,4", label: "Velayet anneye verilme oranı", sub: "Babalara velayet oranı %25,6", source: "TÜİK 2024" },
                                    { value: "156 gün", label: "Ortalama boşanma davası süresi", sub: "2020'de 198 gündü — son 4 yılda kısaldı", source: "Adalet Bakanlığı 2024" },
                                    { value: "320.000", label: "Boşanma dosyası (2024, Türkiye)", sub: "Aile mahkemelerine toplam 435.000 dosya geldi", source: "Adalet Bakanlığı" },
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
                                Veriler TÜİK ve Adalet Bakanlığı resmi kaynaklarından derlenmiştir.
                            </p>
                        </div>

                        {/* Hizmetlerimiz */}
                        <h2 id="hizmetlerimiz" className="scroll-mt-24">İzmir Boşanma Avukatı Hizmetlerimiz</h2>

                        <p>
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir'de aile hukuku alanında kapsamlı hizmetler sunuyoruz.
                            <strong> İzmir boşanma davası avukatı</strong> olarak aşağıdaki hizmetleri sağlıyoruz:
                        </p>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            {[
                                { icon: FileText, title: "Anlaşmalı Boşanma", desc: "Boşanma protokolü hazırlama ve tek celsede boşanma süreci yönetimi" },
                                { icon: Gavel, title: "Çekişmeli Boşanma", desc: "Anlaşma sağlanamayan durumlarda çekişmeli boşanma davası ve süreç yönetimi" },
                                { icon: Users, title: "Velayet & Nafaka", desc: "Çocuk velayeti, iştirak nafakası ve yoksulluk nafakası davaları" },
                                { icon: Scale, title: "Mal Paylaşımı", desc: "Edinilmiş mallara katılma alacağı ve mal rejimi tasfiyesi davaları" },
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
                            <strong>İzmir boşanma avukatı</strong> olarak tüm hizmetlerimizde müvekkil menfaatini ön planda tutuyoruz.
                            Süreci en az hasarla ve en kısa sürede tamamlamayı hedefliyoruz. Detaylı bilgi için
                            <Link href="/hizmetler/" className="text-secondary font-bold"> hizmetlerimiz sayfasını</Link> inceleyin.
                        </p>

                        {/* Hangi Durumlarda Boşanma Avukatına İhtiyacınız Var */}
                        <h2 id="ne-zaman-avukat" className="scroll-mt-24">Hangi Durumlarda Boşanma Avukatına İhtiyacınız Var?</h2>

                        <p>
                            Boşanma süreci hem duygusal hem de hukuki açıdan karmaşıktır. Aşağıdaki durumlardan herhangi birini
                            yaşıyorsanız bir <strong>İzmir boşanma avukatı</strong> ile görüşün. Bu, hak kaybı yaşamamanız açısından
                            kritik önem taşır:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { title: "Çekişmeli boşanma davası açmayı düşünüyorsanız", desc: "Velayet, nafaka veya mal paylaşımında anlaşamıyorsanız, davanın her aşamasında profesyonel hukuki temsil gerekir." },
                                { title: "Velayetin size verilmesini istiyorsanız", desc: "Çocuğunuzun üstün yararını mahkemede ispat etmek için pedagog raporu, tanık ifadeleri ve güçlü bir dava stratejisi gerekir." },
                                { title: "Adil bir nafaka miktarı talep ediyorsanız", desc: "Nafaka hesaplaması gelir durumu, yaşam standardı ve çocuk sayısına göre yapılır. Düşük veya yüksek talepler avukat desteği gerektirir." },
                                { title: "Mal kaçırma şüphesi varsa", desc: "Eşinizin mallarını gizlediğini veya devrettiğini düşünüyorsanız, ihtiyati tedbir kararı alınması acil avukat müdahalesi gerektirir." },
                                { title: "Aldatma veya şiddet nedeniyle boşanıyorsanız", desc: "Özel boşanma sebeplerinde zamanaşımı süreleri çok kısadır (aldatmada 6 ay). Delillerin hukuki olarak toplanması kritik önem taşır." },
                                { title: "Anlaşmalı boşanma protokolü hazırlamanız gerekiyorsa", desc: "Protokolde eksik veya belirsiz maddeler ileride yeni davalara neden olabilir. Avukat tarafından hazırlanması şiddetle önerilir." },
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
                            Bu durumlardan birini yaşıyorsanız süreleri kaçırmadan bir <strong>İzmir boşanma avukatı</strong> ile görüşün.
                        </p>

                        {/* Anlaşmalı Boşanma */}
                        <h2 id="anlasmalai-bosanma" className="scroll-mt-24">Anlaşmalı Boşanma Nedir?</h2>

                        <p>
                            <Link href="/sozluk/anlasmali-bosanma/" className="text-secondary font-bold">Anlaşmalı boşanma</Link>, eşlerin boşanmanın tüm sonuçlarında (nafaka, velayet, mal paylaşımı,
                            tazminat) anlaşarak açtığı davadır. Türk Medeni Kanunu m. 166/3 kapsamında düzenlenir. En hızlı ve en az yıpratıcı boşanma yoludur.
                        </p>

                        <p>
                            <strong>Anlaşmalı boşanma şartları:</strong>
                        </p>

                        <ul>
                            <li><strong>Evlilik süresi:</strong> Evliliğin en az 1 yıl sürmüş olması gerekmektedir</li>
                            <li><strong>Ortak başvuru:</strong> Eşlerin birlikte başvurması veya birinin açtığı davanın diğerince kabul edilmesi</li>
                            <li><strong>Protokol:</strong> Nafaka, velayet, mal paylaşımı ve tazminat konularında yazılı anlaşma</li>
                            <li><strong>Hakim onayı:</strong> Hakimin tarafları bizzat dinlemesi ve protokolü uygun bulması</li>
                        </ul>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak anlaşmalı boşanmada en kritik adım olan protokolü hazırlıyoruz. Her iki tarafın haklarını koruyan bir protokol oluşturuyoruz. Eksik veya belirsiz maddeler ileride yeni davalara neden olabilir.
                        </p>

                        <h3>Anlaşmalı Boşanma Protokolü Nasıl Hazırlanır?</h3>
                        <p>
                            Anlaşmalı boşanma protokolü, eşlerin boşanmanın tüm sonuçlarında anlaştığını gösteren yazılı belgedir. Protokolde şu konular açıkça yer almalıdır: nafaka miktarı ve süresi, çocuk velayeti ve kişisel ilişki düzenlemesi, mal paylaşımı ve maddi-manevi tazminat. <strong>İzmir boşanma avukatı</strong> olarak her iki tarafın haklarını koruyan ve mahkemece kabul edilecek protokoller hazırlıyoruz.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Anlaşmalı boşanma hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Çekişmeli Boşanma */}
                        <SectionCTA text="Boşanma süreciniz için hukuki destek almak ister misiniz?" />

                        <figure className="not-prose my-10">
                            <Image
                                src="/images/infographics/anlasmali-vs-cekismeli-bosanma.webp"
                                alt="Anlaşmalı boşanma ile çekişmeli boşanma karşılaştırması: tek celse ve protokol ile birden fazla duruşma ve kusur tespiti arasındaki farklar"
                                width={768}
                                height={1024}
                                className="w-full max-w-md mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Anlaşmalı ve çekişmeli boşanma arasındaki farklar</figcaption>
                        </figure>

                        <h2 id="cekismeli-bosanma" className="scroll-mt-24">Çekişmeli Boşanma Davası</h2>

                        <p>
                            Çekişmeli boşanma davası, eşlerin boşanma veya sonuçları konusunda anlaşamadığında açılır. Türk Medeni Kanunu'nda düzenlenen boşanma sebepleri şunlardır:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Boşanma Sebebi</th>
                                        <th className="px-6 py-4 text-left">Yasal Dayanak ve Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Zina (Aldatma)", desc: "Eşlerden birinin sadakat yükümlülüğünü ihlal etmesi (TMK m. 161). Öğrenmeden itibaren 6 ay ve her halükarda 5 yıl içinde dava açılmalıdır." },
                                        { title: "Hayata Kast & Kötü Muamele", desc: "Eşlerden birinin diğerinin hayatına kast etmesi, pek kötü davranması veya onur kırıcı davranışta bulunması (TMK m. 162)." },
                                        { title: "Suç İşleme & Haysiyetsiz Yaşam", desc: "Eşlerden birinin küçük düşürücü bir suç işlemesi veya haysiyetsiz bir yaşam sürmesi (TMK m. 163)." },
                                        { title: "Terk", desc: "Eşlerden birinin ortak konutu en az 6 ay boyunca terk etmesi ve ihtar sonrası 2 ay içinde dönmemesi (TMK m. 164)." },
                                        { title: "Akıl Hastalığı", desc: "Eşlerden birinin iyileşmesi olanağı bulunmayan akıl hastalığına yakalanması (TMK m. 165)." },
                                        { title: "Evlilik Birliğinin Temelinden Sarsılması", desc: "Ortak hayatın sürdürülmesinin eşlerden beklenmeyecek derecede temelinden sarsılması. En yaygın boşanma sebebidir (TMK m. 166)." },
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
                            Uygulamada davaların büyük çoğunluğu <Link href="/sozluk/evlilik-birliginin-temelden-sarsilmasi/" className="text-secondary font-bold">evlilik birliğinin temelden sarsılması</Link> sebebine dayanır (TMK m. 166). Her boşanma sebebinin kendine özgü ispat şartları ve zamanaşımı süreleri vardır.
                            <strong> İzmir boşanma avukatı</strong> desteği almadan hareket ederseniz hak kaybı yaşayabilirsiniz.
                        </p>

                        {/* Velayet */}
                        <h2 id="velayet" className="scroll-mt-24">Velayet Davası</h2>

                        <p>
                            <Link href="/sozluk/velayet/" className="text-secondary font-bold">Velayet davası</Link>, boşanma sonrasında çocuğun hangi ebeveynle yaşayacağını belirler. Mevcut velayet kararının değiştirilmesi için de açılabilir.
                            Türk Medeni Kanunu m. 336-337 kapsamında düzenlenir.
                            <strong> Çocuğun üstün yararı</strong> ilkesi temel belirleyicidir.
                        </p>

                        <p>
                            <strong>Velayet kime verilir</strong> sorusu boşanma davalarının en hassas konusudur.
                            Mahkeme velayet kararında şu kriterleri değerlendirir:
                        </p>

                        <ul>
                            <li><strong>Çocuğun yaşı:</strong> 0-3 yaş arası çocuklar kural olarak anneye bırakılır (anne bakımı ilkesi)</li>
                            <li><strong>Çocuğun görüşü:</strong> İdrak çağındaki (genellikle 8+) çocukların tercihini mahkeme dikkate alır</li>
                            <li><strong>Ebeveyn yeterliliği:</strong> Ebeveynlerin bakım kapasitesi, ekonomik durumları ve yaşam koşulları</li>
                            <li><strong>Kardeş ilişkisi:</strong> Kardeşlerin birbirinden ayrılmaması ilkesi gözetilir</li>
                            <li><strong>Uzman raporu:</strong> Pedagog, psikolog ve sosyal hizmet uzmanı raporu değerlendirilir</li>
                        </ul>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak velayet davalarında çocuğun üstün yararını gözetiyoruz. En adil sonucu almak için titizlikle çalışıyoruz. Kişisel ilişki (görüşme) düzenlemesi de velayet kararının önemli bir parçasıdır.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Velayet davası hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Nafaka */}
                        <h2 id="nafaka" className="scroll-mt-24">Nafaka Davası</h2>

                        <p>
                            Nafaka, boşanma sürecinde ve sonrasında maddi destek amacıyla hükmedilen ödemedir.
                            Türk Medeni Kanunu&apos;nda üç temel nafaka türü vardır:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Nafaka Türü</th>
                                        <th className="px-6 py-4 text-left">Açıklama ve Şartları</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Tedbir Nafakası", desc: "Dava süresince ihtiyaç sahibi eş ve çocuklar için hükmedilir. Dava tarihinden itibaren başlar ve boşanma kararının kesinleşmesine kadar devam eder." },
                                        { title: "İştirak Nafakası", desc: "Boşanma sonrası velayeti kendisinde olmayan ebeveynin, çocuğun bakım ve eğitim giderlerine katkısıdır. Çocuk ergin olana (18 yaş) kadar devam eder." },
                                        { title: "Yoksulluk Nafakası", desc: "Boşanma nedeniyle yoksulluğa düşecek olan eş lehine hükmedilir. Kusuru daha ağır olan eşten talep edilemez. Süresiz olarak hükmedilir ancak şartların değişmesiyle kaldırılabilir." },
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
                            <strong>Nafaka nasıl belirlenir</strong> sorusu boşanma davalarının mali boyutunu doğrudan etkiler. Hakimler nafaka miktarını belirlerken tarafların gelirini, yaşam standardını, çocuk sayısını ve ihtiyaçlarını dikkate alır. <strong>İzmir boşanma avukatı</strong> olarak müvekkillerimizin adil nafaka alması veya ödemesi için stratejik savunma hazırlıyoruz.
                        </p>

                        <h3>Nafaka Hesaplama ve Güncel Miktarlar</h3>
                        <p>
                            Nafaka hesaplamasında tarafların gelir ve giderleri, çocukların eğitim masrafları, yaşam standardı ve enflasyon oranı dikkate alınır. 2026 yılında İzmir aile mahkemelerinde iştirak nafakası çocuk başına ortalama 3.000-8.000 TL arasında değişir. Yoksulluk nafakası ise alacaklının geçinme ihtiyacına göre belirlenir.
                        </p>

                        <div className="not-prose my-6 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                            <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="flex items-center justify-between text-primary font-bold hover:text-secondary transition-colors">
                                <span>Nafaka davası hizmetimiz hakkında detaylı bilgi</span>
                                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                            </Link>
                        </div>

                        {/* Mal Paylaşımı */}
                        <h2 id="mal-paylasimi" className="scroll-mt-24">Boşanmada Mal Paylaşımı</h2>

                        <p>
                            Mal paylaşımı davası, boşanma kararının kesinleşmesinden sonra açılır. Evlilik süresince edinilen malların tasfiyesini konu alır. 1 Ocak 2002 sonrası evlenen çiftlerde yasal mal rejimi <strong><Link href="/sozluk/mal-paylasimi/" className="text-secondary">edinilmiş mallara katılma rejimi</Link></strong>dir.
                        </p>

                        <p>
                            Mal paylaşımında temel kurallar:
                        </p>

                        <ul>
                            <li><strong>Edinilmiş mallar:</strong> Evlilik süresince çalışma karşılığı veya edinilmiş mal gelirleriyle elde edilen mallar eşit paylaşılır</li>
                            <li><strong>Kişisel mallar:</strong> Evlilik öncesi sahip olunan mallar, miras ve bağış yoluyla edinilen mallar kişisel maldır ve paylaşıma dahil değildir</li>
                            <li><strong>Katılma alacağı:</strong> Her eş, diğer eşin edinilmiş mallarının toplam değerinin yarısı üzerinde alacak hakkına sahiptir</li>
                            <li><strong>Değer artış payı:</strong> Bir eşin kişisel malıyla diğer eşin malının edinilmesine katkısı varsa, değer artış payı talep edilebilir</li>
                        </ul>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak mal paylaşımı davalarında müvekkillerimizin haklarını titizlikle koruyoruz. Mal kaçırma girişimlerini önlemek için ihtiyati tedbir kararı alıyoruz. Bu adım sürecin en kritik aşamalarından biridir.
                        </p>

                        {/* Avukatlı mı Avukatsız mı */}
                        <h2 id="avukatli-avukatsiz" className="scroll-mt-24">Boşanma Davası Avukatsız mı Açılmalı, Avukatla mı?</h2>

                        <p>
                            Boşanma davalarında avukat tutmak zorunlu değildir. Ancak çekişmeli davalarda velayet, nafaka ve
                            mal paylaşımı konularında ciddi hak kayıpları yaşanabilir. İşte iki seçeneğin karşılaştırması:
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
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Velayet</td><td className="px-6 py-4 text-slate-600">Pedagog raporu ve delil stratejisinde eksiklik riski</td><td className="px-6 py-4 text-slate-600">Çocuğun üstün yararını ispatlayan güçlü dosya hazırlanır</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Nafaka</td><td className="px-6 py-4 text-slate-600">Hak ettiğinizden düşük nafaka veya fahiş nafaka riski</td><td className="px-6 py-4 text-slate-600">Gelir araştırması ve emsal kararlarla adil miktar belirlenir</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Mal paylaşımı</td><td className="px-6 py-4 text-slate-600">Gizlenen malları tespit edememe riski</td><td className="px-6 py-4 text-slate-600">İhtiyati tedbir ve mal araştırması ile haklar korunur</td></tr>
                                    <tr className="hover:bg-slate-50 bg-slate-50/50"><td className="px-6 py-4 font-bold text-primary">Protokol hazırlama</td><td className="px-6 py-4 text-slate-600">Eksik maddeler ileride yeni davalara yol açabilir</td><td className="px-6 py-4 text-slate-600">Kapsamlı ve hukuki açıdan geçerli protokol hazırlanır</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-primary">Duygusal süreç</td><td className="px-6 py-4 text-slate-600">Duruşmada duygusal kararlar hak kaybına yol açabilir</td><td className="px-6 py-4 text-slate-600">Objektif ve stratejik temsil sağlanır</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <Link href="/sozluk/cekismeli-bosanma/" className="text-secondary font-bold">Çekişmeli boşanma</Link>, <Link href="/sozluk/velayet/" className="text-secondary font-bold">velayet davası</Link> ve <Link href="/sozluk/mal-paylasimi/" className="text-secondary font-bold">mal paylaşımı</Link> davalarında avukat desteği sonucu doğrudan etkiler.
                        </p>

                        {/* Ücretler */}
                        <SectionCTA text="Boşanma davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Yılı İzmir Boşanma Davası Ücretleri</h2>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz.
                            2026 yılı avukatlık ücretleri aşağıdaki gibidir:
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
                                        <td className="px-4 py-3 font-medium">Anlaşmalı Boşanma</td>
                                        <td className="px-4 py-3">1-3 ay</td>
                                        <td className="px-4 py-3">25.000 - 40.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">Çekişmeli Boşanma</td>
                                        <td className="px-4 py-3">1 - 3 yıl</td>
                                        <td className="px-4 py-3">40.000 - 80.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">Velayet Davası</td>
                                        <td className="px-4 py-3">6 ay - 1.5 yıl</td>
                                        <td className="px-4 py-3">30.000 - 60.000 TL</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="px-4 py-3 font-medium">Nafaka Davası</td>
                                        <td className="px-4 py-3">3 - 6 ay</td>
                                        <td className="px-4 py-3">20.000 - 40.000 TL</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-4 py-3 font-medium">Mal Paylaşımı Davası</td>
                                        <td className="px-4 py-3">1 - 2 yıl</td>
                                        <td className="px-4 py-3">40.000 - 80.000 TL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve özel durumuna göre belirlenir.
                            <strong> İzmir boşanma avukatı</strong> olarak ilk görüşmede detaylı ücret bilgisi sunuyoruz.
                        </p>

                        {/* Neden Biz */}
                        <h2 id="neden-biz" className="scroll-mt-24">Neden Bizi Tercih Etmelisiniz?</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            {[
                                { title: "Aile Hukuku Uzmanlığı", desc: "Boşanma ve aile hukuku alanında deneyimli avukat ekibi" },
                                { title: "Gizlilik İlkesi", desc: "Tüm boşanma süreciniz mutlak gizlilik prensibiyle yönetilir" },
                                { title: "Şeffaf İletişim", desc: "Davanızın her aşamasında düzenli bilgilendirme" },
                                { title: "Çocuk Odaklı Yaklaşım", desc: "Velayet konularında çocuğun üstün yararını ön planda tutuyoruz" },
                            ].map((item, i) => (
                                <div key={i} className="border border-slate-200 rounded-xl p-6">
                                    <CheckCircle className="w-8 h-8 text-secondary mb-4" />
                                    <p className="font-bold text-primary text-lg mb-2">{item.title}</p>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            <strong>İzmir boşanma avukatı yorumları</strong> incelendiğinde müvekkillerimizin memnuniyeti açıkça görülür. Bu bizim için en önemli başarı kriteridir. Daha fazla bilgi için <Link href="/hakkimda/" className="text-secondary font-bold">hakkımızda sayfamızı</Link> ziyaret edin.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İzmir Boşanma Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Boşanma Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. 2019&apos;dan bu yana boşanma, kira, iş ve tazminat hukuku alanlarında profesyonel hukuki destek sunuyor. Bayraklı merkezli ofisinden İzmir genelinde aile hukuku davalarını aktif olarak takip ediyor.
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

                        <p>
                            Boşanma sürecinde tazminat talepleri için <Link href="/izmir-tazminat-avukati/" className="text-secondary font-bold">tazminat hukuku hizmetlerimizden</Link> yararlanabilirsiniz. Boşanma sonrası kira uyuşmazlıkları yaşarsanız <Link href="/izmir-kira-avukati/" className="text-secondary font-bold">kira hukuku desteğimiz</Link> de mevcuttur.
                        </p>

                        {/* İlgili Makaleler */}
                        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">Aile Hukuku Makaleleri</p>
                            <div className="space-y-3">
                                <Link href="/blog/anlasmali-bosanma-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Anlaşmalı Boşanma Nasıl Açılır? Adım Adım Rehber
                                </Link>
                                <Link href="/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Velayet Davası Süreci ve Mahkeme Kriterleri
                                </Link>
                                <Link href="/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası
                                </Link>
                                <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Çekişmeli Boşanma Davası Süreci ve Kusur Tespiti
                                </Link>
                                <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi
                                </Link>
                            </div>
                            <Link href="/blog/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                Tüm Makaleler <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* Faydalı Yerel Kaynaklar */}
                        <div className="not-prose my-12 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-playfair font-bold text-primary mb-2">Faydalı Yerel Kaynaklar</h2>
                            <p className="text-sm text-slate-500 mb-6">İzmir&apos;de boşanma ve aile hukuku süreçlerinde başvurabileceğiniz resmi kurum ve kaynaklar:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { name: "İzmir Barosu", desc: "Avukat arama ve baro hizmetleri", url: "https://www.izmirbarosu.org.tr/" },
                                    { name: "İzmir Adliyesi (Bayraklı)", desc: "Adliye iletişim bilgileri ve duyurular", url: "https://izmir.adalet.gov.tr/" },
                                    { name: "UYAP Vatandaş Portal", desc: "Dava dosyası sorgulama ve e-imza ile dilekçe gönderme", url: "https://vatandas.uyap.gov.tr/" },
                                    { name: "Nüfus ve Vatandaşlık İl Md.", desc: "Nüfus hizmetleri hakkında bilgi", url: "https://www.nvi.gov.tr/" },
                                    { name: "Aile ve Sosyal Hizmetler İl Md.", desc: "Aile destek hizmetleri hakkında bilgi", url: "https://www.aile.gov.tr/" },
                                    { name: "e-Devlet Kapısı", desc: "Nüfus kayıt örneği ve adli sicil sorgulamaları", url: "https://www.turkiye.gov.tr/" },
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

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Boşanma Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Boşanma davalarınız için hemen randevu alın.
                                    <strong className="text-white"> İzmir boşanma avukatı</strong> ekibimiz size yardımcı olmaktan mutluluk duyar.
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
                            <h2 className="text-2xl font-playfair font-bold text-primary text-center mb-2">Aile Hukuku Uzmanlık Alanlarımız</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto text-sm">
                                Her aile hukuku uyuşmazlığı türüne özel hizmet sayfalarımızda detaylı bilgi alabilirsiniz.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Anlaşmalı Boşanma", desc: "Tek celsede anlaşmalı boşanma ve protokol hazırlama hizmetimiz", url: "/izmir-bosanma-avukati/anlasmali-bosanma/" },
                                    { title: "Velayet Davası", desc: "Çocuk velayeti ve velayet değişikliği davası hizmetimiz", url: "/izmir-bosanma-avukati/velayet-davasi/" },
                                    { title: "Nafaka Davası", desc: "İştirak, yoksulluk ve tedbir nafakası davası hizmetimiz", url: "/izmir-bosanma-avukati/nafaka-davasi/" },
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
                            <h2 className="text-2xl font-playfair font-bold text-primary text-center mb-4">İlçe Bazlı Boşanma Avukatı Hizmetlerimiz</h2>
                            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                                Ofisimiz Bayraklı Adliyesi&apos;nin hemen karşısındadır. İzmir&apos;in tüm merkez ilçelerinde
                                boşanma ve aile hukuku davalarını takip ediyoruz.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { name: "Bayraklı Boşanma Avukatı", url: "/bayrakli-bosanma-avukati" },
                                    { name: "Karşıyaka Boşanma Avukatı", url: "/karsiyaka-bosanma-avukati" },
                                    { name: "Bornova Boşanma Avukatı", url: "/bornova-bosanma-avukati" },
                                    { name: "Konak Boşanma Avukatı", url: "/konak-bosanma-avukati" },
                                    { name: "Buca Boşanma Avukatı", url: "/buca-bosanma-avukati" },
                                    { name: "Çiğli Boşanma Avukatı", url: "/cigli-bosanma-avukati" },
                                    { name: "Gaziemir Boşanma Avukatı", url: "/gaziemir-bosanma-avukati" },
                                    { name: "Balçova Boşanma Avukatı", url: "/balcova-bosanma-avukati" },
                                    { name: "Narlıdere Boşanma Avukatı", url: "/narlidere-bosanma-avukati" },
                                    { name: "Karabağlar Boşanma Avukatı", url: "/karabaglar-bosanma-avukati" },
                                    { name: "Güzelbahçe Boşanma Avukatı", url: "/guzelbahce-bosanma-avukati" },
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
