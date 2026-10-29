import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import dynamic from "next/dynamic";
const YouTubeShorts = dynamic(() => import("@/components/ui/YouTubeShorts").then(m => ({ default: m.YouTubeShorts })));
import { AlertCircle } from "lucide-react";
import { PrintButton } from "@/components/tools/PrintButton";
import { PdfDownloadButton } from "@/components/tools/PdfDownloadButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PAGE_URL = "https://mertkagancetin.com/tahliye-taahhutnamesi/";
const TITLE = "Tahliye Taahhütnamesi Nedir? Geçerlilik Şartları ve Örnek (2026)";
const DESCRIPTION = "Tahliye taahhütnamesi nedir, ne zaman geçerli olur? Yazılı şekil, teslimden sonra imza, belli tarih şartları; örnek metin ve 1 ay içinde icra veya dava ile tahliye (TBK 352/1, İİK 272-275).";
const DATE_MODIFIED = "2026-10-15";
const TBK_URL = "https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6098.pdf";
const IIK_URL = "https://www.mevzuat.gov.tr/MevzuatMetin/1.3.2004.pdf";

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    openGraph: {
        images: ["/og-image.jpg"],
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        type: "article",
    },
    other: {
        "article:modified_time": DATE_MODIFIED,
    },
    alternates: {
        canonical: PAGE_URL,
    },
};

const faqs = [
    {
        question: "Kiracı tahliye taahhütnamesi nedir?",
        answer: "Tahliye taahhütnamesi, kiracının kiraladığı taşınmazı belli bir tarihte boşaltacağını kiraya verene karşı yazılı olarak üstlendiği belgedir. Dayanağı TBK m. 352/1'dir. Kiracı bu tarihte taşınmazı boşaltmazsa kiraya veren, bu tarihten başlayarak bir ay içinde icraya başvurarak veya dava açarak kira sözleşmesini sona erdirebilir.",
    },
    {
        question: "Tahliye taahhütnamesi hangi şartlarda geçersiz olur?",
        answer: "TBK m. 352/1'deki şartlardan biri eksikse taahhüde dayanılamaz: sözlü verilen taahhüt, kiralananın tesliminden önce (örneğin kira sözleşmesiyle aynı anda) imzalatılan taahhüt, belli bir boşaltma tarihi içermeyen taahhüt ve kiracı dışındaki biri tarafından verilen taahhüt bu kapsamdadır. Ayrıca taahhüt yanılma, aldatma veya korkutma altında verilmişse TBK m. 30-39 uyarınca iptali ileri sürülebilir. Taahhüt tarihinden itibaren bir aylık süre geçirilmişse de o taahhüde dayanılarak tahliye istenemeyebilir.",
    },
    {
        question: "Boş (tarihsiz) tahliye taahhütnamesi geçerli mi?",
        answer: "Kanun belli bir boşaltma tarihi arar. Kira başında boş imzalatılıp sonradan doldurulan taahhütlerde asıl tartışma, taahhüdün teslimden önce verilip verilmediğidir. Kiracı, boş imzaladığı belgenin anlaşmaya aykırı doldurulduğunu ileri sürerse bunu kural olarak yazılı delille ispat etmelidir (HMK m. 207). Bu nedenle tarihlerin imza anında el yazısıyla ve açıkça yazılması önerilir.",
    },
    {
        question: "Tahliye taahhütnamesi nasıl doldurulur?",
        answer: "Taahhütnamede kiracının ve kiraya verenin kimlik bilgileri, taşınmazın açık adresi, kiralananın teslim tarihi, taahhüdün düzenlendiği tarih ve taşınmazın boşaltılacağı belli tarih yer almalı; belgeyi kiracı imzalamalıdır. Düzenleme tarihi teslim tarihinden sonra olmalıdır. Boşaltma tarihi boş bırakılmamalıdır.",
    },
    {
        question: "Tahliye taahhüdü varsa ihtarname çekmek gerekir mi?",
        answer: "TBK m. 352/1 tahliye taahhüdüne dayalı icra takibi veya dava için ayrıca ihtar şartı öngörmez. Önemli olan, taahhüt edilen boşaltma tarihinden başlayarak bir aylık süre içinde icraya başvurulması veya dava açılmasıdır.",
    },
    {
        question: "Tahliye taahhüdü noterden mi alınmalı?",
        answer: "Kanun noter şartı aramaz; TBK m. 352/1 yalnızca yazılı şekli öngörür. Ancak adi yazılı taahhütte kiracı imzayı veya tarihi inkâr ederse icra mahkemesi itirazı kaldıramaz (İİK m. 275) ve uyuşmazlık genel mahkemede çözülür. Noterce düzenlenen veya onaylanan taahhüt bu ispat sorununu azaltır.",
    },
    {
        question: "Kira sözleşmesiyle aynı gün imzalanan tahliye taahhüdü geçerli mi?",
        answer: "TBK m. 352/1, taahhüdün kiralananın teslim edilmesinden sonra verilmesini şart koşar. Sözleşmeyle aynı anda veya teslimden önce imzalatılan taahhütler uygulamada geçersizlik tartışmasına yol açar. Somut olayda teslim tarihi ve imza tarihinin nasıl ispat edileceği belirleyicidir.",
    },
    {
        question: "Bir aylık süre kaçırılırsa ne olur?",
        answer: "TBK m. 352/1'e göre kiraya veren, taahhüt edilen boşaltma tarihinden başlayarak bir ay içinde icraya başvurabilir veya dava açabilir. Bu süre hak düşürücü niteliktedir; kaçırılırsa o taahhüde dayanarak tahliye isteme imkânı kaybedilebilir. Bu nedenle sürenin takibi önemlidir.",
    },
    {
        question: "Tahliye emrine itiraz süresi kaç gün?",
        answer: "Kiracı, tahliye emrinin tebliğinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine itiraz edebilir (İİK m. 274). Süresinde yapılan itiraz takibi durdurur.",
    },
    {
        question: "Tahliye emrindeki 15 gün ne anlama gelir?",
        answer: "On beş günlük süre itiraz süresi değildir. İİK m. 272'ye göre icra dairesi, tahliye emriyle taşınmazın on beş gün içinde tahliye ve teslimini emreder. İtiraz süresi ise yedi gündür (İİK m. 274).",
    },
    {
        question: "Kiracı imzayı inkâr ederse süreç nasıl ilerler?",
        answer: "Adi yazılı taahhütteki imza veya tarih kiracı tarafından inkâr edilirse icra mahkemesi itirazı kaldıramaz (İİK m. 275). Bu durumda uyuşmazlık genel mahkemede yargılamayı gerektirir.",
    },
    {
        question: "Tahliye taahhüdü için icra mı dava mı daha uygun?",
        answer: "TBK m. 352/1 iki yolu da öngörür: icraya başvurmak veya dava açmak. Hangisinin tercih edileceği taahhüdün şekline, imza inkârı ihtimaline ve somut olayın özelliklerine göre değişir. Her iki yolda da bir aylık süre geçerlidir.",
    },
    {
        question: "Birden fazla kiracı varsa hepsinin imzası gerekir mi?",
        answer: "Birden çok kiracının bulunduğu, kiracının şirket olduğu veya taşınmazın aile konutu olarak kullanıldığı durumlarda taahhüdü kimin vermesi gerektiği uygulamada tartışmalıdır. Somut duruma göre bir avukattan görüş alınması önerilir.",
    },
    {
        question: "Taahhüdü imzalayan kiracı sonradan itiraz edebilir mi?",
        answer: "Evet. Kiracı, tahliye emrinin tebliğinden itibaren yedi gün içinde itiraz edebilir (İİK m. 274). İtirazda imza veya tarih inkârı ileri sürülebileceği gibi, taahhüdün irade sakatlığı altında verildiği de TBK m. 30-39'daki genel hükümler çerçevesinde ileri sürülebilir.",
    },
    {
        question: "İcra yoluyla tahliye ne kadar sürer?",
        answer: "Kesin bir süre verilemez. Süreç; başvuru, tahliye emrinin tebliği, yedi günlük itiraz süresi ve itiraz yoksa on beş günlük tahliye süresinden oluşur (İİK m. 272-274). İtiraz edilirse icra mahkemesi veya genel mahkeme aşaması eklenir; fiili süre tebligat ve iş yüküne göre değişir.",
    },
];

const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Av. Mert Kağan Çetin",
    "url": "https://mertkagancetin.com",
    "telephone": "+905445854645",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17",
        "addressLocality": "Bayraklı",
        "addressRegion": "İzmir",
        "addressCountry": "TR",
    },
    "areaServed": { "@type": "City", "name": "İzmir" },
    "knowsAbout": ["Kira hukuku", "Tahliye taahhütnamesi", "İcra yoluyla tahliye"],
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tahliye Taahhütnamesi: Nedir, Geçerlilik Şartları, Örnek ve İcra Yoluyla Tahliye",
    "description": DESCRIPTION,
    "mainEntityOfPage": PAGE_URL,
    "image": "https://mertkagancetin.com/og-image.jpg",
    "inLanguage": "tr-TR",
    "dateModified": DATE_MODIFIED,
    "author": {
        "@type": "Person",
        "name": "Av. Mert Kağan Çetin",
        "url": "https://mertkagancetin.com/hakkimda/",
    },
    "publisher": {
        "@type": "Organization",
        "name": "Av. Mert Kağan Çetin",
        "url": "https://mertkagancetin.com",
    },
};

const ext = "text-secondary hover:underline";

export default function EvictionTemplatePage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/" },
                    { name: "Tahliye Taahhütnamesi", url: PAGE_URL },
                ]}
            />

            <VideoSchema
                name="Tahliye Taahhütnamesi Nedir? | Kısa Video"
                description="Tahliye taahhütnamesi nedir, nasıl doldurulur ve ne zaman geçerlidir? Kısa videoda öğrenin."
                thumbnailUrl="https://img.youtube.com/vi/0I5No4QamYA/maxresdefault.jpg"
                uploadDate="2026-03-13"
                contentUrl="https://www.youtube.com/shorts/0I5No4QamYA"
                embedUrl="https://www.youtube.com/embed/0I5No4QamYA"
            />

            <FAQSchema faqs={faqs} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* Hero / Header - Hidden in Print */}
            <section className="bg-primary text-white py-16 print:hidden">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Tahliye Taahhütnamesi: Nedir, Ne Zaman Geçerli Olur?</h1>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        Tahliye taahhütnamesinin ne olduğunu, geçerlilik şartlarını, nasıl doldurulacağını ve kiracı taahhüt ettiği tarihte çıkmazsa izlenecek icra ve dava yolunu kanun maddeleriyle anlatıyoruz. Sayfadaki taahhütname örneğini yazdırabilir veya PDF olarak kaydedebilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PrintButton />
                        <PdfDownloadButton />
                    </div>
                </div>
            </section>

            {/* Main Content - Hidden in Print */}
            <section className="pt-12 container mx-auto px-4 print:hidden">
                <div className="mx-auto doc-prose">
                    <p className="text-sm text-slate-500 italic mb-8">
                        Son güncelleme: 15 Ekim 2026 – Hukuki inceleme: <Link href="/hakkimda/" className={ext}>Av. Mert Kağan Çetin</Link>, İzmir Barosu
                    </p>

                    <h2 id="kisa-cevap">Kısa cevap: Tahliye taahhütnamesi nedir?</h2>
                    <p>
                        <strong>Tahliye taahhütnamesi</strong>, kiracının kiraladığı konutu veya işyerini belli bir tarihte boşaltacağını kiraya verene karşı yazılı olarak üstlendiği belgedir (TBK m. 352/1). Geçerli olması için üç temel şart aranır: <strong>yazılı</strong> olmalı, kiralananın kiracıya <strong>tesliminden sonra</strong> imzalanmalı ve <strong>belli bir boşaltma tarihi</strong> içermelidir.
                    </p>
                    <p>
                        Yargıtay uygulamasında kira sözleşmesiyle aynı anda, teslimden önce alınan taahhütler geçerli kabul edilmemektedir.
                    </p>
                    <p>
                        Kiracı taahhüt ettiği tarihte çıkmazsa kiraya veren, bu tarihten başlayarak <strong>bir ay içinde</strong> icra dairesine başvurabilir (İİK m. 272-275) veya tahliye davası açabilir (TBK m. 352/1).
                    </p>
                    <p>
                        İcra yolunda kiracıya tahliye emri gönderilir; kiracının yedi gün itiraz hakkı vardır.
                    </p>
                    <div className="not-prose overflow-x-auto my-6">
                        <table className="w-full text-sm border-collapse bg-white">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="text-left p-3 border border-slate-200 font-bold">Süre</th>
                                    <th className="text-left p-3 border border-slate-200 font-bold">Ne için?</th>
                                    <th className="text-left p-3 border border-slate-200 font-bold">Dayanak</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border border-slate-200 font-semibold">1 ay</td>
                                    <td className="p-3 border border-slate-200">Taahhüt edilen boşaltma tarihinden itibaren icraya başvurma veya dava açma süresi</td>
                                    <td className="p-3 border border-slate-200">TBK m. 352/1</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-3 border border-slate-200 font-semibold">7 gün</td>
                                    <td className="p-3 border border-slate-200">Tahliye emrinin tebliğinden itibaren kiracının itiraz süresi</td>
                                    <td className="p-3 border border-slate-200">İİK m. 274</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-slate-200 font-semibold">15 gün</td>
                                    <td className="p-3 border border-slate-200">Tahliye emrinde taşınmazın boşaltılıp teslimi için verilen süre</td>
                                    <td className="p-3 border border-slate-200">İİK m. 272</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-base">
                        Taahhüdünüzün geçerliliğini veya başlattığınız takibe yapılan itirazı değerlendirmek için <Link href="/iletisim/" className={ext}>iletişim</Link> sayfamızdan ön görüşme talep edebilirsiniz.
                    </p>
                    <p>
                        Bu sayfa hem kiracısı taahhüt ettiği tarihte çıkmayan ev sahiplerine hem de taahhüt imzalamış kiracılara yöneliktir. Taahhüde dayalı icra sürecinin ayrıntıları için <Link href="/izmir-tahliye-taahhudu-icra-avukati/" className={ext}>İzmir tahliye taahhüdü icra avukatı</Link>, kira uyuşmazlıklarının tamamı için <Link href="/" className={ext}>İzmir kira avukatı</Link> sayfasına bakılabilir.
                    </p>

                    <h2 id="nedir">Kanuni dayanak: TBK m. 352/1</h2>
                    <YouTubeShorts
                        videoId="0I5No4QamYA"
                        title="Tahliye Taahhütnamesi Nedir? - Kısa Video ile Açıklama"
                    />
                    <p>
                        <Link href="/sozluk/tahliye-taahhutnamesi/" className={ext}>Tahliye taahhütnamesi (sözlük)</Link>, kiracının kiraladığı taşınmazı belli bir tarihte boşaltacağını kiraya verene yazılı olarak bildirdiği belgedir. Dayanağı Türk Borçlar Kanunu&apos;nun 352. maddesinin birinci fıkrasıdır:
                    </p>
                    <blockquote>
                        &quot;Kiracı, kiralananın teslim edilmesinden sonra, kiraya verene karşı, kiralananı belli bir tarihte boşaltmayı yazılı olarak üstlendiği hâlde boşaltmamışsa kiraya veren, kira sözleşmesini bu tarihten başlayarak bir ay içinde icraya başvurmak veya dava açmak suretiyle sona erdirebilir.&quot; (<a href={TBK_URL} target="_blank" rel="noopener noreferrer" className={ext}>TBK m. 352/1, mevzuat.gov.tr</a>)
                    </blockquote>
                    <p>
                        Aynı maddenin ikinci fıkrası ise farklı bir tahliye sebebi olan <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className={ext}>iki haklı ihtar</Link> durumunu düzenler. Bu ikisi sıkça karıştırılır.
                    </p>
                    <ul>
                        <li><strong>Tahliye taahhüdünde</strong> sebep, kiracının kendi yazılı beyanıdır.</li>
                        <li><strong>İki haklı ihtarda</strong> sebep, kira bedelinin ödenmemesi nedeniyle yapılan ihtarlardır.</li>
                    </ul>
                    <p>
                        Kira borcunun ödenmemesine dayalı takip de ayrı bir yoldur; bunun için <Link href="/izmir-kira-alacagi-icra-takibi-avukati/" className={ext}>kira alacağı icra takibi</Link> sayfamıza bakabilirsiniz.
                    </p>

                    <h2 id="gecerlilik-sartlari">Tahliye taahhüdünün geçerlilik şartları</h2>
                    <p>
                        TBK m. 352/1&apos;e göre geçerli bir tahliye taahhüdü yazılı olmalı, kiralananın kiracıya tesliminden sonra verilmeli, belli bir boşaltma tarihi içermeli ve kiracı tarafından kiraya verene verilmelidir. Sözleşmeyle aynı anda imzalatılan veya tarihi boş bırakılan taahhütler uygulamada geçersizlik tartışmasına yol açar.
                    </p>
                    <p>
                        Bu şartlar kanun metninden doğrudan çıkar. Taahhüt metnini hazırlarken <Link href="/kira-sozlesmesi-ornegi/" className={ext}>kira sözleşmesi örneği</Link> ile birlikte değerlendirmek, tarihlerin tutarlılığını kontrol etmeyi kolaylaştırır.
                    </p>
                    <h3>Yazılı olmalı</h3>
                    <p>
                        Kanun &quot;yazılı olarak&quot; üstlenmeyi arar. Sözlü olarak verilen boşaltma sözü, TBK m. 352/1 kapsamında tahliye sebebi oluşturmaz. Yazılı şekil için noter zorunlu değildir; ancak aşağıda açıklandığı gibi noter onayı ispat açısından fark yaratır.
                    </p>
                    <h3>Kiralananın tesliminden sonra verilmeli</h3>
                    <p>
                        Madde, taahhüdün &quot;kiralananın teslim edilmesinden sonra&quot; verilmesini şart koşar. Kira sözleşmesiyle aynı anda ya da teslimden önce imzalatılan taahhütler bu şartı karşılamadığı gerekçesiyle tartışmalı hâle gelir. Uygulamada en sık karşılaşılan sorunlardan biri, düzenleme tarihi ile teslim tarihinin ispatıdır.
                    </p>
                    <h3>Belli bir boşaltma tarihi içermeli</h3>
                    <p>
                        Kiracı kiralananı &quot;belli bir tarihte&quot; boşaltmayı üstlenmelidir. Tarihi olmayan veya boşaltma tarihi boş bırakılmış taahhütler uyuşmazlık riski taşır; ayrıca bir aylık başvuru süresi bu tarihten itibaren hesaplandığından tarihin açık yazılması önemlidir.
                    </p>
                    <h3>Kiracı tarafından kiraya verene verilmeli</h3>
                    <p>
                        Taahhüt, kiracı tarafından kiraya verene karşı verilmelidir. Birden çok kiracının bulunduğu, kiracının şirket olduğu veya taşınmazın aile konutu olarak kullanıldığı durumlarda kimin imzasının gerektiği uygulamada tartışmalıdır; bu hâllerde somut olaya göre bir avukata danışılması önerilir.
                    </p>
                    <p>
                        Taşınmaz aile konutu ise, kiracı eşin aile konutuna ilişkin kira sözleşmesini diğer eşin açık rızası olmadan feshedemeyeceğini düzenleyen TMK m. 194 de dikkate alınmalıdır.
                    </p>

                    <h2 id="gecersiz-olur-mu">Tahliye taahhütnamesi hangi durumlarda geçersiz olur?</h2>
                    <p>
                        Aşağıdaki durumlarda taahhüde dayanarak tahliye istemek ya mümkün değildir ya da ciddi uyuşmazlık riski doğar:
                    </p>
                    <ul>
                        <li><strong>Teslimden önce alınan taahhüt:</strong> Kira sözleşmesiyle aynı gün ve teslimden önce imzalatılan taahhüt, TBK m. 352/1&apos;deki &quot;teslim edilmesinden sonra&quot; şartını karşılamaz.</li>
                        <li><strong>Sözlü taahhüt:</strong> Kanun yazılı şekil arar; sözlü boşaltma sözü bu madde kapsamında tahliye sebebi değildir.</li>
                        <li><strong>Belli bir tarih içermeyen taahhüt:</strong> &quot;Ev satılırsa&quot; gibi belirsiz bir olaya bağlanan veya tarihi boş bırakılan taahhütler uyuşmazlık konusu olur.</li>
                        <li><strong>Kiracı dışındaki birinin verdiği taahhüt:</strong> Taahhüt kiracı tarafından (veya yetkili temsilcisi tarafından) verilmelidir.</li>
                        <li><strong>İrade sakatlığı:</strong> Yanılma, aldatma veya korkutma altında verilen taahhüt TBK m. 30-39 çerçevesinde iptal edilebilir; ispat yükü bunu ileri sürene aittir.</li>
                        <li><strong>Bir aylık sürenin kaçırılması:</strong> Taahhüt edilen tarihten itibaren bir ay içinde icraya başvurulmaz veya dava açılmazsa o taahhüde dayanılamayabilir.</li>
                    </ul>
                    <p>
                        <strong>Boş imzalanan taahhüt:</strong> Kira başında tarihleri boş imzalatılıp sonradan doldurulan taahhütlerde kiracı, belgenin anlaşmaya aykırı doldurulduğunu ileri sürerse bunu kural olarak yazılı delille ispat etmelidir (HMK m. 207). Bu nedenle tarihlerin imza anında açıkça yazılması hem kiracı hem kiraya veren açısından önemlidir.
                    </p>

                    <h2 id="nasil-doldurulur">Tahliye taahhütnamesi nasıl doldurulur?</h2>
                    <p>
                        Aşağıdaki örnek, kanundaki şartları karşılamaya yönelik genel bir şablondur. Doldururken şunlara dikkat edin:
                    </p>
                    <ol>
                        <li>Kiracının ve kiraya verenin ad-soyad ve T.C. kimlik numaralarını eksiksiz yazın.</li>
                        <li>Taşınmazın açık adresini (varsa bağımsız bölüm numarasıyla) yazın.</li>
                        <li>Kiralananın kiracıya <strong>teslim tarihini</strong> yazın.</li>
                        <li><strong>Düzenleme tarihinin</strong> teslim tarihinden sonra olduğuna dikkat edin.</li>
                        <li><strong>Boşaltma tarihini</strong> gün/ay/yıl olarak açıkça yazın; boş bırakmayın.</li>
                        <li>Belgeyi kiracı imzalasın. İspat kolaylığı için imzanın noterde onaylatılması değerlendirilebilir.</li>
                    </ol>
                </div>
            </section>

            {/* Template Preview Section */}
            <section className="py-12 container mx-auto px-4">
                <div className="max-w-[210mm] mx-auto bg-white shadow-xl p-6 sm:p-[20mm] min-h-[297mm] text-black print:shadow-none print:p-0 print:w-full print:max-w-none">

                    <div className="print-content font-serif leading-relaxed">
                        <h2 className="text-center font-bold text-2xl mb-12 uppercase border-b-2 border-black pb-2 inline-block relative left-1/2 -translate-x-1/2">Tahliye Taahhütnamesi</h2>

                        <div className="space-y-6 text-base sm:text-lg [overflow-wrap:anywhere]">
                            <p>
                                <strong>TAAHHÜT EDEN (KİRACI):</strong> ....................................................................................
                            </p>
                            <p>
                                <strong>T.C. KİMLİK NO:</strong> ....................................................................................
                            </p>
                            <p>
                                <strong>ALACAKLI (KİRAYA VEREN):</strong> ....................................................................................
                            </p>
                            <p>
                                <strong>TAHLİYE EDİLECEK MECURUN ADRESİ:</strong> ....................................................................................<br />
                                ................................................................................................................................................................
                            </p>
                            <p>
                                <strong>KİRALANANIN TESLİM TARİHİ:</strong> ..... / ..... / 20.....
                            </p>
                            <p>
                                <strong>TAHLİYE (BOŞALTMA) TARİHİ:</strong> ..... / ..... / 20.....
                            </p>

                            <div className="my-12 text-justify">
                                <p className="mb-4">
                                    Yukarıda belirtilen tarihte tarafıma teslim edilen ve halen kiracı olarak kullanmakta olduğum yukarıda adresi yazılı taşınmazı, hiçbir ihtar ve ihbara gerek kalmaksızın,
                                    kayıtsız ve şartsız olarak, 6098 sayılı Türk Borçlar Kanunu'nun 352/1 maddesi gereğince, yukarıda belirtilen tarihte
                                    tahliye edeceğimi;
                                </p>
                                <p className="mb-4">
                                    Belirtilen tarihte taşınmazı boş ve eksiksiz olarak mal sahibine teslim edeceğimi;
                                </p>
                                <p>
                                    Tahliye etmediğim takdirde, mal sahibinin icra dairesi aracılığıyla tahliye işlemini gerçekleştirebileceğini,
                                    bu nedenle oluşacak tüm mahkeme masrafları, icra harçları, avukatlık ücretleri ve diğer tüm giderleri
                                    peşinen ödemeyi kabul, beyan ve taahhüt ederim.
                                </p>
                            </div>

                            <div className="flex justify-between gap-4 mt-24 sm:px-8">
                                <div className="text-center">
                                    <p className="font-bold mb-16">DÜZENLEME TARİHİ</p>
                                    <p>..... / ..... / 20.....</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold mb-8">TAAHHÜT EDEN (KİRACI)</p>
                                    <p className="text-sm text-slate-400 mb-8">(İmza)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Warning Box - Hidden in Print */}
                <div className="max-w-[210mm] mx-auto mt-8 print:hidden">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-800 mb-2">Örneği kullanmadan önce</h4>
                            <p className="text-sm text-amber-700 leading-relaxed">
                                Taahhütname, kiralananın kiracıya <strong>tesliminden sonra</strong> imzalanmalı ve boşaltma tarihi açıkça yazılmalıdır (TBK m. 352/1). Örnek genel bilgilendirme amaçlıdır; somut durumunuza uygunluğu ayrıca değerlendirilmelidir.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SEO Content - Hidden in Print */}
                <div className="mx-auto mt-12 doc-prose print:hidden">
                    <h2 id="icra-yoluyla-tahliye">Kiracı taahhüt tarihinde çıkmazsa: icra yoluyla tahliye adım adım</h2>
                    <p>
                        Kiracı taahhüt ettiği tarihte taşınmazı boşaltmazsa süreç, <a href={IIK_URL} target="_blank" rel="noopener noreferrer" className={ext}>İcra ve İflas Kanunu</a>&apos;nun 272-276. maddelerine göre aşağıdaki sırayla ilerler.
                    </p>
                    <h3>1. Adım: Taahhüt tarihinden itibaren 1 ay içinde icra dairesine başvuru</h3>
                    <p>
                        Kiraya veren, taahhüt edilen boşaltma tarihinden başlayarak bir ay içinde icra dairesine tahliye talebiyle başvurur (TBK m. 352/1). Bu süre hak düşürücü niteliktedir ve kaçırılmamalıdır; süre geçtikten sonra aynı taahhüde dayanarak tahliye istemek mümkün olmayabilir.
                    </p>
                    <h3>2. Adım: Tahliye emrinin kiracıya tebliği</h3>
                    <p>
                        Başvuru üzerine icra dairesi kiracıya bir <strong>tahliye emri</strong> tebliğ eder. Bu takipte kiracıya gönderilen belge ödeme emri değil, tahliye emridir. İİK m. 272&apos;ye göre tahliye emriyle taşınmazın on beş gün içinde tahliye ve teslimi emredilir; emirde, itiraz varsa yedi gün içinde bildirilmesi, aksi hâlde zorla çıkarılacağı ihtarı yer alır.
                    </p>
                    <h3>3. Adım: Kiracının 7 gün içinde itiraz hakkı</h3>
                    <p>
                        Tahliye taahhüdüne dayalı icra takibinde kiracı, tahliye emrinin tebliğinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine itiraz edebilir (İİK m. 274). Süresinde yapılan itiraz takibi durdurur. Tahliye emrindeki on beş günlük süre ise itiraz değil, taşınmazın boşaltılıp teslimi için verilen süredir (İİK m. 272).
                    </p>
                    <h3>4a. İtiraz yoksa: zorla tahliye</h3>
                    <p>
                        Kiracı yedi gün içinde itiraz etmezse veya itiraz kaldırılırsa, tahliye emrinde belirtilen on beş günlük süre dolduktan sonra taşınmaz zorla tahliye edilerek kiraya verene teslim edilir (İİK m. 272-273). Uygulamadaki fiili süre tebligat ve icra dairesinin iş yüküne göre değişir; kesin süre vaat edilemez.
                    </p>
                    <h3>4b. İtiraz varsa: itirazın kaldırılması ve tahliye</h3>
                    <p>
                        Süresinde itiraz edilirse takip durur. Kiraya veren, icra mahkemesinden itirazın kaldırılmasını ve tahliyeyi isteyebilir (İİK m. 275). Ancak adi yazılı taahhütteki imza veya tarih kiracı tarafından inkâr edilirse icra mahkemesi itirazı kaldıramaz.
                    </p>
                    <p>
                        Uyuşmazlık bu durumda genel mahkemede yapılacak yargılamayı gerektirir ve süreç uzayabilir.
                    </p>
                    <p>
                        İcra mahkemesinin sınırlı inceleme yetkisi nedeniyle, imza veya tarih tartışmasının olduğu dosyalarda genel mahkemede açılacak dava gündeme gelir.
                    </p>
                    <h3>Taşınmazda kiracıdan başka biri varsa</h3>
                    <p>
                        Tahliyesi istenen yerde kiracıdan başka bir kişinin bulunması hâlinde izlenecek usul İİK m. 276&apos;da ayrıca düzenlenmiştir. Bu durumda icra memurunun işlemleri ve üçüncü kişinin durumu madde çerçevesinde değerlendirilir.
                    </p>

                    <h2 id="noter-adi-yazili">Noter onaylı mı, adi yazılı mı? (karşılaştırma tablosu)</h2>
                    <p>
                        Her iki şekilde verilen taahhüt de TBK m. 352/1&apos;deki yazılılık şartını karşılar. Fark, kiracının imza veya tarihi inkâr etmesi hâlinde ortaya çıkar.
                    </p>
                    <div className="not-prose overflow-x-auto my-8">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="text-left p-3 border border-slate-200 font-bold">Kriter</th>
                                    <th className="text-left p-3 border border-slate-200 font-bold">Adi yazılı</th>
                                    <th className="text-left p-3 border border-slate-200 font-bold">Noterce düzenlenen / onaylanan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border border-slate-200">Yazılılık şartı (TBK m. 352/1)</td>
                                    <td className="p-3 border border-slate-200">Karşılar</td>
                                    <td className="p-3 border border-slate-200">Karşılar</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-3 border border-slate-200">İmza / tarih inkârı</td>
                                    <td className="p-3 border border-slate-200">İnkâr hâlinde icra mahkemesi itirazı kaldıramaz (İİK m. 275)</td>
                                    <td className="p-3 border border-slate-200">Resmî onay nedeniyle bu ispat sorunu azalır</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-slate-200">İtiraz hâlinde olası yol</td>
                                    <td className="p-3 border border-slate-200">İnkârda genel mahkemede yargılama</td>
                                    <td className="p-3 border border-slate-200">İcra mahkemesinden itirazın kaldırılması talebi</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-3 border border-slate-200">Maliyet</td>
                                    <td className="p-3 border border-slate-200">Noter masrafı yok</td>
                                    <td className="p-3 border border-slate-200">Güncel Noterlik Ücret Tarifesi&apos;ne göre noter ücreti</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 id="icra-mi-dava-mi">İcra yolu mu, tahliye davası mı?</h2>
                    <p>
                        TBK m. 352/1 kiraya verene iki yol tanır: &quot;icraya başvurmak veya dava açmak&quot;. Her iki yolda da bir aylık süre geçerlidir. İcra yolu, imza ve tarihin tartışılmadığı dosyalarda daha doğrudan bir yol olarak düşünülebilir.
                    </p>
                    <p>
                        İmza veya tarih inkârı beklenen, taahhüdün teslimden önce verildiği iddia edilebilecek ya da birden fazla tahliye sebebinin birlikte ileri sürüleceği durumlarda ise doğrudan <Link href="/izmir-kiraci-tahliye-davasi-avukati/" className={ext}>kiracı tahliye davası</Link> açılması değerlendirilebilir.
                    </p>
                    <p>
                        Hangi yolun uygun olduğu somut olaya göre değişir; hiçbir yol belirli bir sonucu garanti etmez.
                    </p>
                    <p>
                        Dava yolunu tercih etmeden önce dava şartı arabuluculuğun somut uyuşmazlığa uygulanıp uygulanmadığı güncel mevzuat çerçevesinde kontrol edilmelidir. Genel bilgi için <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" className={ext}>kira uyuşmazlıklarında arabuluculuk</Link> yazımızı inceleyebilirsiniz.
                    </p>

                    <h2 id="kiraci-acisindan">Kiracı açısından: taahhüde nasıl itiraz edilir?</h2>
                    <p>
                        Taahhüt imzalamış olmak, kiracının itiraz hakkını ortadan kaldırmaz. Kiracı, tahliye emrinin tebliğinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine itiraz edebilir (İİK m. 274). Süresinde itiraz takibi durdurur.
                    </p>
                    <ul>
                        <li><strong>İmza veya tarih inkârı:</strong> Adi yazılı taahhütte imza veya tarih inkâr edilirse icra mahkemesi itirazı kaldıramaz (İİK m. 275).</li>
                        <li><strong>Geçerlilik şartlarına itiraz:</strong> Taahhüdün teslimden önce verildiği veya belli bir tarih içermediği gibi TBK m. 352/1 şartlarına ilişkin itirazlar ileri sürülebilir.</li>
                        <li><strong>İrade sakatlığı:</strong> Taahhüdün yanılma, aldatma veya korkutma altında verildiği iddiası TBK m. 30-39&apos;daki genel hükümler çerçevesinde değerlendirilir; ispatı iddia edene düşer.</li>
                        <li><strong>Süre itirazı:</strong> Kiraya verenin bir aylık süreyi geçirip geçirmediği kontrol edilmelidir (TBK m. 352/1).</li>
                    </ul>
                    <p>
                        Kiracı tarafının diğer hakları için <Link href="/sozluk/kiraci-haklari/" className={ext}>kiracı hakları</Link> sayfamıza bakabilirsiniz.
                    </p>

                    <h2 id="sss">Sık sorulan sorular</h2>
                    <div className="not-prose space-y-3">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="bg-white border border-slate-200 rounded-lg px-5 py-4 open:shadow-sm">
                                <summary className="font-semibold text-primary cursor-pointer"><h3 className="inline text-base">{faq.question}</h3></summary>
                                <p className="mt-3 pt-3 border-t border-slate-100 text-slate-700 leading-7">{faq.answer}</p>
                            </details>
                        ))}
                    </div>

                    <h2 id="hukuki-destek">İzmir&apos;de tahliye taahhüdü süreçlerinde hukuki destek</h2>
                    <p>
                        Bayraklı&apos;daki ofisimizden İzmir genelinde kira hukuku uyuşmazlıklarında avukatlık hizmeti veriyoruz. Ofis bilgilerimiz ve çalışma şeklimiz hakkında <Link href="/iletisim/" className={ext}>iletişim</Link> sayfamızdan bilgi alabilirsiniz.
                    </p>

                    <div className="not-prose mt-8 text-center bg-slate-100 p-8 rounded-2xl">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Tahliye Sürecinde Hukuki Destek</h3>
                        <p className="mb-6 text-muted-foreground">Tahliye taahhüdünüzün geçerliliğini veya başlattığınız takibe yapılan itirazı değerlendirmek için ön görüşme talep edebilirsiniz.</p>
                        <p className="mb-6 text-sm text-slate-600">Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17, Bayraklı/İzmir · 0544 585 46 45</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-primary text-white" asChild>
                                <Link href="/iletisim/">İletişim</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="tel:+905445854645">Telefon</a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            </Button>
                        </div>
                    </div>

                    <div className="not-prose mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
                        <p className="mb-2"><strong>Yazar:</strong> <Link href="/hakkimda/" className={ext}>Av. Mert Kağan Çetin</Link>, İzmir Barosu Sicil: 15556. Son güncelleme: 15 Ekim 2026.</p>
                        <p className="mb-2"><strong>Kaynaklar:</strong> <a href={TBK_URL} target="_blank" rel="noopener noreferrer" className={ext}>6098 sayılı Türk Borçlar Kanunu</a>; <a href={IIK_URL} target="_blank" rel="noopener noreferrer" className={ext}>2004 sayılı İcra ve İflas Kanunu</a> (mevzuat.gov.tr).</p>
                        <p><em>Bu içerik genel bilgilendirme amaçlıdır, hukuki mütalaa değildir.</em></p>
                    </div>
                </div>

            </section>
        </div>
    );
}
