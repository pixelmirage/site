import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home, ShieldCheck, Scale, Gavel, Users, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

function LegalServiceSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "İzmir Boşanma Avukatı - Av. Mert Kağan Çetin",
        "description": "İzmir'de boşanma davaları, anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında uzman avukatlık hizmeti.",
        "url": "https://mertkagancetin.com/izmir-bosanma-avukati/",
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
        absolute: "İzmir Boşanma Avukatı | Velayet & Nafaka | Av. Mert Kağan Çetin",
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
        "article:modified_time": "2026-03-15",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/",
    },
};

const faqs = [
    {
        question: "Anlaşmalı boşanma ne kadar sürer?",
        answer: "Anlaşmalı boşanma, tarafların tüm konularda (nafaka, velayet, mal paylaşımı) uzlaşması halinde tek celsede sonuçlanabilir. Ortalama süre dilekçe hazırlığı dahil 1-3 aydır. Evliliğin en az 1 yıl sürmüş olması şarttır."
    },
    {
        question: "Çekişmeli boşanma davası ne kadar sürer?",
        answer: "Çekişmeli boşanma davası, taraflar arasındaki anlaşmazlığın boyutuna göre 1-3 yıl sürebilmektedir. Velayet, nafaka ve mal paylaşımı konularındaki çekişmeler süreyi uzatabilir."
    },
    {
        question: "Velayet kime verilir?",
        answer: "Velayet kararında çocuğun üstün yararı ilkesi esas alınır. Mahkeme; çocuğun yaşı, ebeveynlerin bakım kapasitesi, ekonomik durumları, çocuğun görüşü (idrak yaşındaysa) ve uzman pedagog raporunu değerlendirir. 0-3 yaş arası çocuklar genellikle anneye bırakılır."
    },
    {
        question: "Nafaka nasıl belirlenir?",
        answer: "Nafaka miktarı belirlenirken nafaka yükümlüsünün geliri, nafaka alacaklısının ihtiyaçları, çocuk sayısı ve yaşam standardı dikkate alınır. Tedbir nafakası dava süresince, iştirak nafakası çocuklar için, yoksulluk nafakası ise boşanma sonrası geçim sıkıntısı yaşayacak eş için hükmedilir."
    },
    {
        question: "Boşanmada mal paylaşımı nasıl yapılır?",
        answer: "2002 sonrası evliliklerde edinilmiş mallara katılma rejimi uygulanır. Evlilik süresince edinilen mallar eşit olarak paylaşılır. Miras, bağış gibi kişisel mallar paylaşım dışındadır. Mal paylaşımı davası boşanma kesinleştikten sonra açılabilir."
    },
    {
        question: "Boşanma davası ücreti ne kadar?",
        answer: "2026 yılında İzmir'de anlaşmalı boşanma avukatlık ücreti 25.000-40.000 TL, çekişmeli boşanma ücreti 40.000-80.000 TL arasında değişmektedir. Velayet ve nafaka davaları ayrıca ücretlendirilir."
    },
    {
        question: "Boşanma davası için hangi belgeler gerekli?",
        answer: "Boşanma davası için nüfus cüzdanı fotokopisi, evlilik cüzdanı fotokopisi, nüfus kayıt örneği, varsa deliller (mesajlar, fotoğraflar, tanık listesi) ve boşanma dilekçesi gerekmektedir. Anlaşmalı boşanmada ek olarak boşanma protokolü hazırlanmalıdır."
    },
    {
        question: "Aldatma durumunda boşanma nasıl açılır?",
        answer: "Aldatma (zina), Türk Medeni Kanunu m. 161 kapsamında özel boşanma sebebidir. Aldatmanın öğrenilmesinden itibaren 6 ay ve her halükarda 5 yıl içinde dava açılmalıdır. Aldatan eş aleyhine maddi ve manevi tazminata hükmedilebilir."
    },
    {
        question: "Boşanmada çocuğun görüşü alınır mı?",
        answer: "Evet, idrak çağındaki (genellikle 8 yaş üzeri) çocukların görüşü mahkeme tarafından alınır. Çocuğun beyanı velayet kararında önemli bir etkendir ancak tek başına belirleyici değildir. Mahkeme, çocuğun üstün yararını bütüncül olarak değerlendirir."
    }
];

const tocItems = [
    { id: "hizmetlerimiz", title: "Aile Hukuku Hizmetlerimiz" },
    { id: "anlasmalai-bosanma", title: "Anlaşmalı Boşanma" },
    { id: "cekismeli-bosanma", title: "Çekişmeli Boşanma" },
    { id: "velayet", title: "Velayet Davası" },
    { id: "nafaka", title: "Nafaka Davası" },
    { id: "mal-paylasimi", title: "Mal Paylaşımı" },
    { id: "ucretler", title: "2026 Yılı Ücret Bilgileri" },
    { id: "neden-biz", title: "Neden Bizi Tercih Etmelisiniz?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
    { id: "iletisim", title: "Bize Ulaşın" },
];

export default function IzmirBosanmaAvukatiPage() {
    return (
        <main className="bg-white">
            <LegalServiceSchema />
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
                            <strong>İzmir boşanma avukatı</strong>, evlilik birliğinin sona erdirilmesi sürecinde eşleri hukuki olarak temsil eden, anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka ve mal paylaşımı konularında uzmanlaşmış avukattır. Av. Mert Kağan Çetin, İzmir Barosu&apos;na kayıtlı olarak Bayraklı merkezli ofisinden İzmir genelinde aile hukuku hizmeti vermektedir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 10 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p className="text-xl leading-relaxed">
                            İzmir'de aile hukuku alanında uzmanlaşmış bir avukat olarak, boşanma sürecindeki
                            müvekkillerimize profesyonel hukuki destek sunuyoruz. <strong>Bayraklı Adliyesi</strong> (İzmir Adliyesi) yakınındaki ofisimizden
                            tüm süreçleri yakından takip ediyoruz. <strong>İzmir boşanma avukatı</strong> olarak
                            anlaşmalı ve çekişmeli boşanma davaları, velayet davaları, nafaka ve mal paylaşımı
                            süreçlerinde müvekkillerimize rehberlik ediyoruz.
                        </p>

                        <p>
                            Boşanma hukuku, Türk Medeni Kanunu'nun 161-184. maddeleri kapsamında düzenlenen hassas bir hukuk
                            dalıdır. <strong>Boşanma davası nasıl açılır</strong>, <strong>velayet kime verilir</strong>,
                            <strong> <Link href="/sozluk/nafaka" className="text-secondary font-bold">nafaka</Link> nasıl hesaplanır</strong> gibi sorular her gün büromuzda yanıtladığımız konuların
                            başında gelmektedir. Aile hukukunda yaşanan uyuşmazlıklar, duygusal boyutunun yanı sıra mali
                            ve hukuki açıdan da dikkatli bir yaklaşım gerektirmektedir.
                        </p>

                        {/* Hizmetlerimiz */}
                        <h2 id="hizmetlerimiz" className="scroll-mt-24">İzmir Boşanma Avukatı Hizmetlerimiz</h2>

                        <p>
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir'de aile hukuku alanında kapsamlı hizmetler sunmaktayız.
                            <strong> İzmir boşanma davası avukatı</strong> olarak aşağıdaki hizmetleri sağlamaktayız:
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
                            <strong>İzmir boşanma avukatı</strong> olarak sunduğumuz tüm hizmetlerde müvekkil menfaatini ön planda tutarak,
                            süreci en az hasarla ve en kısa sürede tamamlamayı hedefliyoruz. Detaylı bilgi için
                            <Link href="/hizmetler" className="text-secondary font-bold"> hizmetlerimiz sayfasını</Link> inceleyebilirsiniz.
                        </p>

                        {/* Anlaşmalı Boşanma */}
                        <h2 id="anlasmalai-bosanma" className="scroll-mt-24">Anlaşmalı Boşanma Nedir?</h2>

                        <p>
                            Anlaşmalı boşanma, eşlerin boşanma ve boşanmanın tüm sonuçları (nafaka, velayet, mal paylaşımı,
                            tazminat) konusunda mutabık kalarak açtığı boşanma davasıdır. Türk Medeni Kanunu m. 166/3
                            kapsamında düzenlenen bu dava türü, en hızlı ve en az yıpratıcı boşanma yoludur.
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
                            <strong>İzmir boşanma avukatı</strong> olarak anlaşmalı boşanma sürecinde en kritik adım olan
                            boşanma protokolünü her iki tarafın haklarını koruyan şekilde hazırlıyoruz. Protokolde
                            eksik veya belirsiz maddeler, ileride yeni davalara neden olabilir.
                        </p>

                        <h3>Anlaşmalı Boşanma Protokolü Nasıl Hazırlanır?</h3>
                        <p>
                            Anlaşmalı boşanma protokolü, eşlerin boşanmanın tüm sonuçları üzerinde mutabık kaldığını gösteren yazılı belgedir. Protokolde nafaka miktarı ve süresi, çocuk velayeti ve kişisel ilişki düzenlemesi, mal paylaşımı ve maddi-manevi tazminat konuları açıkça belirtilmelidir. <strong>İzmir boşanma avukatı</strong> olarak her iki tarafın haklarını koruyan, mahkemece kabul edilecek kapsamlı protokoller hazırlıyoruz.
                        </p>

                        {/* Çekişmeli Boşanma */}
                        <h2 id="cekismeli-bosanma" className="scroll-mt-24">Çekişmeli Boşanma Davası</h2>

                        <p>
                            Çekişmeli boşanma davası, eşlerin boşanma veya boşanmanın sonuçları konusunda anlaşamadığı
                            durumlarda açılan davadır. Türk Medeni Kanunu'nda düzenlenen boşanma sebepleri şunlardır:
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
                            Her bir boşanma sebebinin kendine özgü ispat şartları ve zamanaşımı süreleri vardır. Bu nedenle
                            <strong> İzmir boşanma avukatı</strong> desteği almadan hareket etmeniz durumunda hak kaybı
                            yaşama riskiniz bulunmaktadır.
                        </p>

                        {/* Velayet */}
                        <h2 id="velayet" className="scroll-mt-24">Velayet Davası</h2>

                        <p>
                            <Link href="/sozluk/velayet-davasi" className="text-secondary font-bold">Velayet davası</Link>, boşanma sonrasında çocuğun hangi ebeveynle birlikte yaşayacağının
                            belirlenmesi veya mevcut velayet kararının değiştirilmesi için açılan davadır.
                            Türk Medeni Kanunu m. 336-337 kapsamında düzenlenen velayet hukukunda
                            <strong> çocuğun üstün yararı</strong> ilkesi temel belirleyicidir.
                        </p>

                        <p>
                            <strong>Velayet kime verilir</strong> sorusu, boşanma davalarının en hassas konularından biridir.
                            Mahkeme velayet kararı verirken şu kriterleri değerlendirir:
                        </p>

                        <ul>
                            <li><strong>Çocuğun yaşı:</strong> 0-3 yaş arası çocuklar kural olarak anneye bırakılır (anne bakımı ilkesi)</li>
                            <li><strong>Çocuğun görüşü:</strong> İdrak çağındaki (genellikle 8+) çocukların tercihini mahkeme dikkate alır</li>
                            <li><strong>Ebeveyn yeterliliği:</strong> Ebeveynlerin bakım kapasitesi, ekonomik durumları ve yaşam koşulları</li>
                            <li><strong>Kardeş ilişkisi:</strong> Kardeşlerin birbirinden ayrılmaması ilkesi gözetilir</li>
                            <li><strong>Uzman raporu:</strong> Pedagog, psikolog ve sosyal hizmet uzmanı raporu değerlendirilir</li>
                        </ul>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak velayet davalarında çocuğun üstün yararını
                            gözeterek en adil sonucun alınması için titizlikle çalışıyoruz. Kişisel ilişki (görüşme)
                            düzenlemesi de velayet kararının önemli bir parçasıdır.
                        </p>

                        {/* Nafaka */}
                        <h2 id="nafaka" className="scroll-mt-24">Nafaka Davası</h2>

                        <p>
                            Nafaka, boşanma sürecinde ve sonrasında maddi destek sağlanması amacıyla hükmedilen ödemeyi ifade eder.
                            Türk Medeni Kanunu&apos;nda üç temel nafaka türü düzenlenmiştir:
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
                            <strong>Nafaka nasıl belirlenir</strong> sorusu, boşanma davalarının mali boyutunu doğrudan
                            etkiler. Hakimler nafaka miktarını belirlerken tarafların gelir durumu, yaşam standardı,
                            çocuk sayısı ve ihtiyaçları dikkate alır. <strong>İzmir boşanma avukatı</strong> olarak
                            müvekkillerimizin adil bir nafaka miktarı alması veya ödemesi için stratejik savunma hazırlıyoruz.
                        </p>

                        <h3>Nafaka Hesaplama ve Güncel Miktarlar</h3>
                        <p>
                            Nafaka hesaplama sürecinde tarafların gelir ve giderleri, çocukların eğitim masrafları, yaşam standardı ve enflasyon oranı dikkate alınır. 2026 yılında İzmir aile mahkemelerinde hükmedilen iştirak nafakası miktarları çocuk başına ortalama 3.000-8.000 TL arasında değişmektedir. Yoksulluk nafakası ise nafaka alacaklısının geçinme ihtiyacına göre belirlenir.
                        </p>

                        {/* Mal Paylaşımı */}
                        <h2 id="mal-paylasimi" className="scroll-mt-24">Boşanmada Mal Paylaşımı</h2>

                        <p>
                            Mal paylaşımı davası, boşanma kararının kesinleşmesinden sonra açılabilen, evlilik
                            süresince edinilen malların tasfiyesini konu alan davadır. 1 Ocak 2002 tarihinden
                            sonra evlenen çiftlerde yasal mal rejimi <strong>edinilmiş mallara katılma rejimi</strong>dir.
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
                            <strong>İzmir boşanma avukatı</strong> olarak mal paylaşımı davalarında müvekkillerimizin
                            haklarını titizlikle koruyoruz. Özellikle mal kaçırma girişimlerinin önlenmesi için
                            ihtiyati tedbir kararları almak bu sürecin kritik adımlarından biridir.
                        </p>

                        {/* Ücretler */}
                        <h2 id="ucretler" className="scroll-mt-24">2026 Yılı İzmir Boşanma Davası Ücretleri</h2>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz.
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
                            Yukarıdaki ücretler ortalama değerlerdir. Kesin ücret, davanın karmaşıklığına ve özel durumuna göre belirlenir.
                            <strong> İzmir boşanma avukatı</strong> olarak ilk görüşmede detaylı ücret bilgisi sunmaktayız.
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
                            <strong>İzmir boşanma avukatı</strong> arayışınızda doğru adrese ulaştınız. Müvekkillerimizin memnuniyeti bizim için en önemli
                            başarı kriteridir. Hakkımızda daha fazla bilgi almak için <Link href="/hakkimda" className="text-secondary font-bold">hakkımızda sayfamızı</Link> ziyaret edebilirsiniz.
                        </p>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak boşanma sürecinde ortaya çıkan tazminat talepleri için <Link href="/izmir-tazminat-avukati" className="text-secondary font-bold">tazminat hukuku hizmetlerimizden</Link> de yararlanabilirsiniz. Boşanma sonrası kira uyuşmazlıkları yaşanması durumunda ise <Link href="/izmir-kira-avukati" className="text-secondary font-bold">kira hukuku desteğimiz</Link> mevcuttur.
                        </p>

                        {/* İlgili Makaleler */}
                        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">Aile Hukuku Makaleleri</p>
                            <div className="space-y-3">
                                <Link href="/blog/anlasmali-bosanma-nasil-acilir" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Anlaşmalı Boşanma Nasıl Açılır? Adım Adım Rehber
                                </Link>
                                <Link href="/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Velayet Davası Süreci ve Mahkeme Kriterleri
                                </Link>
                                <Link href="/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">İzmir Boşanma Avukatı ile Görüşün</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Boşanma davalarınız için ücretsiz ön görüşme randevusu alın.
                                    <strong className="text-white"> İzmir boşanma avukatı</strong> ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
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
