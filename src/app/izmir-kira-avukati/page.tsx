import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import dynamic from "next/dynamic";
const YouTubeShorts = dynamic(() => import("@/components/ui/YouTubeShorts").then(m => ({ default: m.YouTubeShorts })));
import { articleProseClasses } from "@/lib/prose-classes";

const pageTitle = "İzmir Kira Avukatı – Tahliye ve Kira Tespit | Av. Mert Kağan Çetin";
const pageDescription = "İzmir kira avukatı Av. Mert Kağan Çetin (İzmir Barosu, sicil 15556): ev sahibi ve kiracılar için tahliye, kira tespit ve arabuluculuk. Bayraklı ofis, telefonla ön görüşme.";

export const metadata: Metadata = {
    title: {
        absolute: pageTitle,
    },
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://mertkagancetin.com/izmir-kira-avukati/",
        type: "website",
        locale: "tr_TR",
        images: [{ url: "/og-image.jpg", alt: "Av. Mert Kağan Çetin - İzmir Kira Avukatı" }],
    },
    other: {
        "article:modified_time": "2026-10-15",
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-kira-avukati/",
    },
};

const tocItems = [
    { id: "iletisim-bilgileri", title: "İletişim ve Ofis" },
    { id: "kira-davalari", title: "Hangi Davalara Bakar?" },
    { id: "kiraci-tahliyesi", title: "Kiracı Tahliyesi" },
    { id: "kira-tespit-davasi", title: "Kira Tespit ve Uyarlama" },
    { id: "depozito-isyeri", title: "Depozito ve İşyeri Kirası" },
    { id: "arabuluculuk", title: "Zorunlu Arabuluculuk" },
    { id: "gorevli-mahkeme", title: "Görevli Mahkeme" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "sss", title: "Sık Sorulan Sorular" },
];

const faqs = [
    {
        question: "Kira işlerine hangi avukat bakar?",
        answer: "Kira işlerine, kira ilişkisinden doğan uyuşmazlıklarda çalışan avukatlar bakar. Kira avukatı; kira sözleşmesi ve tahliye taahhütnamesinin hazırlanması, ihtarname çekilmesi, zorunlu arabuluculuk görüşmeleri, tahliye, kira tespit, kira uyarlama, depozito ve kira alacağı davaları ile icra yoluyla tahliye takiplerinde ev sahibini veya kiracıyı temsil eder. Bu davalar Sulh Hukuk Mahkemesinde görülür (HMK m. 4/1-a)."
    },
    {
        question: "Kira davalarında avukatlık ücreti nasıl belirlenir?",
        answer: "Avukatlık ücreti; davanın türü, dava değeri, işin gerektirdiği emek ve süre dikkate alınarak avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır (Avukatlık Kanunu m. 163-164) ve Türkiye Barolar Birliği'nin yayımladığı Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Her taraf kendi avukatının ücretini öder; dava sonunda haksız çıkan taraf ise mahkemenin tarifeye göre hükmettiği karşı vekalet ücreti ile yargılama giderlerini öder. Somut dosyaya ilişkin ücret bilgisi, belgeler incelendikten sonra ön görüşmede verilir."
    },
    {
        question: "Kiracı kira ödemezse tahliye süreci nasıl işler?",
        answer: "Kira bedelini ödemeyen kiracıya yazılı ihtarla süre verilir; konut ve çatılı işyeri kiralarında bu süre en az 30 gündür ve ihtarnamede süre içinde ödeme yapılmazsa sözleşmenin feshedileceği açıkça bildirilmelidir (TBK m. 315). Süre sonunda ödeme yapılmazsa kiraya veren tahliye davası açabilir veya icra dairesinden ilamsız tahliye takibi başlatabilir (İİK m. 269 vd.). İcra yoluyla tahliye talepleri zorunlu arabuluculuk şartına tabi değildir."
    },
    {
        question: "Tahliye taahhütnamesi imzalayan kiracı çıkmazsa ne yapılır?",
        answer: "Kiracı, kiralananın tesliminden sonra belli bir tarihte boşaltmayı yazılı olarak taahhüt edip çıkmamışsa, kiraya veren bu tarihten itibaren bir ay içinde icraya başvurabilir veya dava açabilir (TBK m. 352/1). İcra yolunda kiracıya tahliye emri tebliğ edilir; taşınmazı boşaltmak için 15 gün, itiraz için 7 gün süre vardır (İİK m. 272, 274)."
    },
    {
        question: "Kira tespit davası ne zaman açılabilir?",
        answer: "Kira bedelinin belirlenmesi için her zaman dava açılabilir; ancak beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde yeni kira yılı bedeli hakim tarafından emsal kira bedelleri, TÜFE ve kiralananın durumu dikkate alınarak hakkaniyete uygun biçimde belirlenir (TBK m. 344). Tespit edilen bedelin yeni kira yılının başından itibaren geçerli olması için dava, yeni dönem başlangıcından en geç 30 gün önce açılmalı veya kiracıya bu süre içinde yazılı bildirimde bulunulmalıdır (TBK m. 345)."
    },
    {
        question: "Yeni ev sahibi kiracıyı çıkarabilir mi?",
        answer: "Kiralananı sonradan edinen yeni malik, kendisi veya yakınları için konut ya da işyeri ihtiyacı varsa, edinme tarihinden itibaren bir ay içinde durumu kiracıya yazılı olarak bildirmek koşuluyla, edinme tarihinden itibaren altı ay sonra tahliye davası açabilir (TBK m. 351). Dilerse sözleşme süresinin bitiminden itibaren bir ay içinde de dava açabilir."
    },
    {
        question: "Depozito iade edilmezse ne yapılır?",
        answer: "Para olarak verilen güvence bedeli en fazla üç aylık kira bedeli kadar olabilir ve bir bankada vadeli tasarruf hesabına yatırılmalıdır (TBK m. 342). Banka, kiracının rızası veya kiraya verenin kira sözleşmesinin bitiminden itibaren üç ay içinde kiracı aleyhine dava açtığını ya da icra takibi yaptığını bildirmemesi halinde güvenceyi kiracıya geri verir. Uyuşmazlık halinde önce arabulucuya başvurulur."
    },
    {
        question: "Ön görüşme nasıl yapılır?",
        answer: "Ön görüşmeler telefonla yapılır. Görüşmede kira sözleşmesi, varsa tahliye taahhütnamesi, ihtarnameler ve ödeme kayıtları birlikte değerlendirilerek izlenecek hukuki yol belirlenir. Ofis Bayraklı/İzmir'dedir; iletişim için 0544 585 46 45 numaralı telefon kullanılabilir."
    }
];

export default function IzmirKiraAvukatiPage() {
    return (
        <div className="bg-white">
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" }
                ]}
            />
            <FAQSchema faqs={faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Service",
                            "@id": "https://mertkagancetin.com/izmir-kira-avukati/#service",
                            "name": "İzmir Kira Avukatı – Kira Hukuku Hizmetleri",
                            "serviceType": "Kira hukuku avukatlığı",
                            "url": "https://mertkagancetin.com/izmir-kira-avukati/",
                            "provider": { "@id": "https://mertkagancetin.com/#attorney" },
                            "areaServed": { "@type": "City", "name": "İzmir" },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Kira davaları",
                                "itemListElement": [
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kiracı tahliye davası", "url": "https://mertkagancetin.com/izmir-kira-avukati/kiraci-tahliye-davasi/" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira tespit davası", "url": "https://mertkagancetin.com/izmir-kira-avukati/kira-tespit-davasi/" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira uyarlama davası", "url": "https://mertkagancetin.com/izmir-kira-avukati/kira-uyarlama-davasi/" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kira alacağı icra takibi", "url": "https://mertkagancetin.com/izmir-kira-avukati/kira-borcu-icra/" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İhtiyaç nedeniyle tahliye", "url": "https://mertkagancetin.com/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tahliye taahhüdüne dayalı icra takibi", "url": "https://mertkagancetin.com/tahliye-taahhutnamesi/" } }
                                ]
                            }
                        },
                        {
                            "@type": "WebPage",
                            "@id": "https://mertkagancetin.com/izmir-kira-avukati/#webpage",
                            "url": "https://mertkagancetin.com/izmir-kira-avukati/",
                            "name": "İzmir Kira Avukatı",
                            "isPartOf": { "@id": "https://mertkagancetin.com/#website" },
                            "about": { "@id": "https://mertkagancetin.com/izmir-kira-avukati/#service" },
                            "author": { "@id": "https://mertkagancetin.com/#person" },
                            "dateModified": "2026-10-15",
                            "inLanguage": "tr-TR"
                        }
                    ]
                }) }}
            />


            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">İzmir Kira Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 leading-tight">
                            İzmir Kira Avukatı
                        </h1>
                        <p className="text-sm md:text-base text-slate-300 mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
                            <span>İzmir Barosu Sicil No: 15556</span>
                            <span aria-hidden="true">·</span>
                            <span>Bayraklı/İzmir ofis</span>
                            <span aria-hidden="true">·</span>
                            <a href="tel:+905445854645" className="hover:text-white">0544 585 46 45</a>
                        </p>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong className="text-white">İzmir kira avukatı</strong> Av. Mert Kağan Çetin, ev sahibi ve kiracılar için tahliye, kira tespit, kira uyarlama, depozito ve kira alacağı uyuşmazlıklarında İzmir genelinde avukatlık hizmeti verir. Ofis Bayraklı/İzmir&apos;dedir; ön görüşmeler telefonla yapılır.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <a href="tel:+905445854645">
                                    <Phone className="w-5 h-5" />
                                    0544 585 46 45
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

            {/* Main Content */}
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-3xl mx-auto ${articleProseClasses}`}>

                        {/* Giriş */}
                        <p>
                            Kira uyuşmazlıklarında süreler, ihtarnamelerin şekli ve dava öncesi zorunlu arabuluculuk aşaması sonucu doğrudan etkiler. Bu nedenle kira sözleşmesi, ihtarname ve ödeme kayıtları gibi belgelerin görüşmede birlikte değerlendirilmesi önerilir. Aşağıda İzmir&apos;de kira hukukuna ilişkin temel süreçleri, ilgili kanun hükümleriyle birlikte özetledik.
                        </p>

                        {/* İçindekiler */}
                        <details className="not-prose my-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <summary className="cursor-pointer text-sm font-bold text-slate-600 uppercase tracking-wider">İçindekiler</summary>
                            <nav className="mt-3 flex flex-wrap gap-3">
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
                        </details>

                        {/* İletişim */}
                        <h2 id="iletisim-bilgileri" className="scroll-mt-24">İzmir Kira Avukatı İletişim ve Ofis</h2>

                        <p>
                            Ofis Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17, 35000 Bayraklı/İzmir adresindedir. Ön görüşmeler telefonla yapılır; kira sözleşmesi, ihtarname ve ödeme kayıtları bu görüşmede değerlendirilerek izlenecek yol belirlenir. Bayraklı, Karşıyaka, Bornova, Konak, Buca, Çiğli, Gaziemir, Balçova, Narlıdere, Karabağlar ve Güzelbahçe başta olmak üzere İzmir genelinde hizmet verilmektedir (ör. <Link href="/bayrakli-kira-avukati/">Bayraklı</Link>, <Link href="/karsiyaka-kira-avukati/">Karşıyaka</Link>, <Link href="/bornova-kira-avukati/">Bornova</Link>).
                        </p>

                        <ul>
                            <li><strong>Avukat:</strong> Av. Mert Kağan Çetin (İzmir Barosu Sicil No: 15556)</li>
                            <li><strong>Telefon:</strong> <a href="tel:+905445854645">0544 585 46 45</a></li>
                            <li><strong>Adres:</strong> Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17, 35000 Bayraklı/İzmir</li>
                            <li><strong>E-posta:</strong> <a href="mailto:mertkagancetin@gmail.com">mertkagancetin@gmail.com</a></li>
                        </ul>

                        {/* 1. Hangi Davalara Bakar */}
                        <h2 id="kira-davalari" className="scroll-mt-24">İzmir Kira Avukatı Hangi Davalara Bakar?</h2>

                        <p>
                            Kira avukatı; kira sözleşmesinin hazırlanması, ihtarname çekilmesi, zorunlu arabuluculuk görüşmeleri ve kira ilişkisinden doğan davalarla icra takiplerinde ev sahibini veya kiracıyı temsil eder. İzmir&apos;de bu kapsamda başlıca şu işlerde hizmet verilmektedir:
                        </p>

                        <ul>
                            <li><Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Kiracı tahliye davaları</Link> ve <Link href="/tahliye-taahhutnamesi/">tahliye taahhüdüne dayalı icra takibi</Link></li>
                            <li><Link href="/izmir-kira-avukati/kira-tespit-davasi/">Kira tespit davası</Link></li>
                            <li><Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">Kira uyarlama davası</Link></li>
                            <li><Link href="/izmir-kira-avukati/kira-borcu-icra/">Kira alacağı ve icra yoluyla tahliye</Link></li>
                            <li><Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">Depozito (güvence bedeli) iadesi</Link></li>
                            <li><Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/">İşyeri kira uyuşmazlıkları</Link> ve <Link href="/kira-sozlesmesi-ornegi/">kira sözleşmesi hazırlama</Link></li>
                        </ul>

                        <p>
                            Kira davalarında avukatla temsil zorunlu değildir; ancak kira hukuku sürelere ve şekil şartlarına sıkı biçimde bağlıdır ve hatalı hesaplanan bir süre veya usulüne uygun çekilmemiş bir ihtarname hak kaybına yol açabilir.
                        </p>

                        {/* 2. Kiracı Tahliyesi */}
                        <h2 id="kiraci-tahliyesi" className="scroll-mt-24">Kiracı Tahliyesi: Hangi Sebeplerle Dava Açılır?</h2>

                        <p>
                            Kiracı yalnızca kanunda sayılan sebeplerle çıkarılabilir; tahliye dava veya icra yoluyla sağlanır ve kiracı hiçbir durumda zorla çıkarılamaz. Ayrıntılı bilgi için <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/">kiracının tahliyesi hakkındaki yazımızı</Link> inceleyebilirsiniz.
                        </p>

                        <h3>Süre Sonu ve Bildirim Yoluyla Fesih</h3>
                        <p>
                            Belirli süreli sözleşmelerde kira süresi ile <Link href="/sozluk/10-yillik-uzama-suresi/">on yıllık uzama süresi</Link>, belirsiz süreli sözleşmelerde ise sözleşme tarihinden itibaren on yıl geçtikten sonra kiraya veren sözleşmeyi bildirimle sona erdirebilir (TBK m. 347). Ayrıntılar: <Link href="/izmir-kira-avukati/on-yillik-kiraci-tahliye/">10 yıllık kiracı tahliyesi</Link>.
                        </p>

                        <h3>Dava Yoluyla Tahliye Sebepleri</h3>
                        <ul>
                            <li>Kiraya verenin veya yakınlarının konut ya da işyeri ihtiyacı ile yeniden inşa ve imar (TBK m. 350; bkz. <Link href="/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/">ihtiyaç nedeniyle tahliye</Link>)</li>
                            <li>Yazılı <Link href="/tahliye-taahhutnamesi/">tahliye taahhüdü</Link> (TBK m. 352/1) ve bir kira döneminde <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">iki haklı ihtar</Link> (TBK m. 352/2)</li>
                            <li>Kiracının veya birlikte yaşadığı eşinin aynı ilçe veya belde belediye sınırları içinde oturmaya elverişli bir konutunun bulunması ve kiraya verenin bunu sözleşmenin kurulması sırasında bilmemesi; dava, kira süresinin sona ermesinden itibaren bir ay içinde açılmalıdır (TBK m. 352/3)</li>
                            <li>Kiracının kiralananı özenle kullanma ve komşulara saygı borcuna aykırılığı ile kiraya verenin yazılı rızası olmaksızın alt kiraya verme</li>
                        </ul>

                        <h3>Kira Ödenmezse: Temerrüt ve İcra Yoluyla Tahliye</h3>
                        <p>
                            Kira bedelini ödemeyen kiracıya yazılı ihtarla süre verilir; konut ve çatılı işyeri kiralarında bu süre en az 30 gündür ve ihtarnamede süre içinde ödeme yapılmazsa sözleşmenin feshedileceği açıkça bildirilmelidir (TBK m. 315). Süre sonunda kiraya veren tahliye davası açabilir veya dava açmadan icra dairesinden <strong>ilamsız tahliye takibi</strong> başlatabilir (İİK m. 269 vd.). Ayrıntılar: <Link href="/izmir-kira-avukati/kira-borcu-icra/">kira borcu icra takibi</Link>.
                        </p>

                        <h3>Tahliye Taahhüdü ile Kiracı Nasıl Çıkarılır?</h3>
                        <p>
                            Kiracı, kiralananın tesliminden sonra belli bir tarihte boşaltmayı yazılı olarak taahhüt edip çıkmamışsa, kiraya veren bu tarihten itibaren bir ay içinde icraya başvurabilir veya dava açabilir (TBK m. 352/1). İcra yolunda kiracıya tahliye emri tebliğ edilir; taşınmazı boşaltmak için 15 gün, itiraz için 7 gün süre vardır (İİK m. 272, 274). Adımlar için <Link href="/tahliye-taahhutnamesi/">tahliye taahhüdü ile icra yoluyla tahliye</Link> rehberimize bakabilirsiniz.
                        </p>

                        <h3>Yeni Ev Sahibi Kiracıyı Çıkarabilir mi?</h3>
                        <p>
                            Kiralananı sonradan edinen yeni malik, kendisi veya yakınları için konut ya da işyeri ihtiyacı varsa sözleşme süresinin bitiminden itibaren bir ay içinde ya da edinmeden itibaren bir ay içinde kiracıya yazılı bildirimde bulunarak edinme tarihinden altı ay sonra tahliye davası açabilir (TBK m. 351). İhtiyacın gerçek, samimi ve sürekli olması gerekir. Ayrıntılar: <Link href="/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/">ihtiyaç nedeniyle tahliye</Link>.
                        </p>

                        {/* İnfografik */}
                        <figure className="not-prose my-10 flex flex-col items-center">
                            <Image
                                src="/images/infographics/tahliye-sebepleri-ve-dayanaklari.webp"
                                alt="Kiracı tahliye sebepleri ve hukuki dayanakları: TBK m. 350 ihtiyaç, m. 352 taahhütname ve iki haklı ihtar, m. 347 süre sonu ile tahliye davası açma koşulları"
                                title="Kiracı tahliye sebepleri ve hukuki dayanakları"
                                width={768}
                                height={1024}
                                className="w-full max-w-md mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Kiracı tahliye sebepleri ve hukuki dayanakları</figcaption>
                        </figure>

                        {/* 3. Kira Tespit */}
                        <h2 id="kira-tespit-davasi" className="scroll-mt-24">İzmir&apos;de Kira Tespit Davası Ne Zaman Açılır?</h2>

                        <p>
                            Kira tespit davası, yeni kira yılında uygulanacak kira bedelinin mahkemece belirlenmesi için açılır. Beş yıldan uzun süreli ve beş yıldan sonra yenilenen sözleşmelerde yeni kira bedeli; TÜFE&apos;nin on iki aylık ortalamasına göre değişim oranı, kiralananın durumu ve emsal kira bedelleri göz önünde tutularak hakkaniyete uygun biçimde belirlenir (TBK m. 344/3). Belirlenen bedelin yeni kira yılının başından itibaren geçerli olması için davanın yeni dönemden en geç <strong>30 gün önce</strong> açılması veya bu süre içinde kiracıya yazılı bildirimde bulunulması gerekir (TBK m. 345). Ayrıntılar: <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link>.
                        </p>

                        <h3 id="kira-artis-orani" className="scroll-mt-24">Kira Artış Oranı ve TÜFE Sınırı</h3>
                        <p>
                            Konut ve çatılı işyeri kiralarında kararlaştırılan artış oranı, bir önceki kira yılındaki TÜFE&apos;nin on iki aylık ortalamasına göre değişim oranını geçemez (TBK m. 344/1). Konut kiralarında uygulanan geçici %25 sınırı 1 Temmuz 2024 itibarıyla sona ermiştir. Güncel oranı <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama</Link> aracımızla hesaplayabilirsiniz.
                        </p>

                        <h3 id="kira-uyarlama-davasi" className="scroll-mt-24">Kira Uyarlama Davası</h3>
                        <p>
                            Sözleşmenin kurulduğu sırada öngörülemeyen olağanüstü bir durum ifayı aşırı ölçüde güçleştirirse kira bedelinin yeni koşullara uyarlanması istenebilir (TBK m. 138). Kira tespit davasından farkı, beş yıllık süre şartına bağlı olmaması ve olağanüstü değişikliğin ispatını gerektirmesidir. Ayrıntılar: <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">kira uyarlama davası</Link>.
                        </p>

                        {/* 4. Depozito ve İşyeri */}
                        <h2 id="depozito-isyeri" className="scroll-mt-24">Depozito ve İşyeri Kira Uyuşmazlıkları</h2>

                        <p>
                            Konut ve çatılı işyeri kiralarında <Link href="/sozluk/depozito/">güvence bedeli (depozito)</Link> üç aylık kira bedelini aşamaz ve para olarak verilmişse bir bankada vadeli tasarruf hesabına yatırılır; banka, kiraya veren sözleşmenin bitiminden itibaren üç ay içinde dava veya takip yaptığını bildirmezse güvenceyi kiracıya iade eder (TBK m. 342). Ayrıntılar: <Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">depozito iadesi davası</Link>.
                        </p>

                        <p>
                            Dükkan, ofis ve mağaza gibi çatılı işyeri kiraları da konut kiralarına ilişkin koruyucu hükümlere tabidir (TBK m. 339 vd.); TÜFE sınırı, tahliye sebepleri ve güvence bedeli kuralları burada da uygulanır. Kira sözleşmesinin devri (TBK m. 323) ve alt kira konularında kiraya verenin yazılı rızası önem taşır. Ayrıntılar: <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/">işyeri kira sözleşmelerinde dikkat edilmesi gereken hususlar</Link>.
                        </p>

                        {/* 5. Arabuluculuk */}
                        <h2 id="arabuluculuk" className="scroll-mt-24">Kira Uyuşmazlıklarında Arabuluculuk Zorunlu mu?</h2>

                        <p>
                            1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açmadan önce arabulucuya başvurulması <strong>dava şartıdır</strong> (<Link href="/sozluk/zorunlu-arabuluculuk/">zorunlu arabuluculuk</Link>; 6325 sayılı HUAK m. 18/B). Tahliye, kira tespiti, kira uyarlama, kira alacağı ve depozito iadesi talepleri bu kapsamdadır; arabulucuya başvurmadan açılan dava usulden reddedilir. Arabulucu süreci görevlendirmeden itibaren üç hafta içinde sonuçlandırır; bu süre zorunlu hallerde en fazla bir hafta uzatılabilir.
                        </p>

                        <p>
                            <strong>İstisna:</strong> İcra ve İflas Kanunu kapsamında ilamsız icra yoluyla tahliye talepleri (kira bedelinin ödenmemesi veya tahliye taahhüdüne dayalı takipler) zorunlu arabuluculuk şartına tabi değildir. Ayrıntılar: <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">kira hukukunda zorunlu arabuluculuk süreci</Link>.
                        </p>

                        {/* 6. Görevli Mahkeme */}
                        <h2 id="gorevli-mahkeme" className="scroll-mt-24">İzmir&apos;de Kira Davası Hangi Mahkemede Görülür?</h2>

                        <p>
                            Kira ilişkisinden doğan alacak davaları da dahil olmak üzere kira uyuşmazlıklarında, dava değerine bakılmaksızın <strong>Sulh Hukuk Mahkemesi</strong> görevlidir (HMK m. 4/1-a). Yetkili mahkeme kural olarak davalının yerleşim yeri mahkemesidir (HMK m. 6); sözleşmenin ifa yeri mahkemesinde de dava açılabilir (HMK m. 10). İcra yoluyla tahliye takiplerinde itirazın kaldırılması ve tahliye talepleri ise İcra Hukuk Mahkemesinde incelenir.
                        </p>

                        {/* 7. Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Kira Davalarında Avukatlık Ücreti Nasıl Belirlenir?</h2>

                        <p>
                            Avukatlık ücreti; davanın türü, dava değeri, işin gerektirdiği emek ve süre dikkate alınarak avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır (Avukatlık Kanunu m. 163-164). Kararlaştırılan ücret, Türkiye Barolar Birliği tarafından her yıl yayımlanan <strong>Avukatlık Asgari Ücret Tarifesi</strong>&apos;nin altında olamaz.
                        </p>

                        <p>
                            Her taraf kendi avukatının ücretini öder; dava sonunda haksız çıkan taraf, mahkemenin tarifeye göre hükmettiği karşı vekalet ücreti ile harç ve yargılama giderlerini öder. Bu vekalet ücreti, tarafların avukatlarıyla anlaştıkları ücretten farklıdır. Somut dosyaya ilişkin ücret bilgisi belgeler incelendikten sonra ön görüşmede verilir; ayrıntılı açıklama için <Link href="/izmir-kira-avukati/izmir-kira-avukati-ucret/">kira avukatı ücreti</Link> sayfamıza bakabilirsiniz.
                        </p>

                        {/* 9. SSS */}
                        <h2 id="sss" className="scroll-mt-24">İzmir Kira Avukatı – Sık Sorulan Sorular</h2>

                        {faqs.map((f) => (
                            <div key={f.question}>
                                <h3>{f.question}</h3>
                                <p>{f.answer}</p>
                            </div>
                        ))}

                        <YouTubeShorts
                            videoId="JeM-o0sl9j8"
                            title="İzmir'de Kira Avukatıyla Çalışmanın Önemi - Kısa Video"
                        />

                        <p className="text-sm text-slate-500">Son güncelleme: 15 Ekim 2026</p>

                        <hr />

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-10 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-6 py-3">
                                <p className="text-white font-bold">Yazar Hakkında</p>
                            </div>
                            <div className="p-6 flex flex-col sm:flex-row gap-5">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Avukatı" title="Av. Mert Kağan Çetin - İzmir Kira Avukatı" width={96} height={96} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-bold text-primary mb-1">Av. Mert Kağan Çetin</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira, iş, boşanma ve tazminat hukuku alanlarında hizmet vermektedir.
                                    </p>
                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
                                        <span>İzmir Barosu Sicil: 15556</span>
                                        <span>TBB Sicil: 162439</span>
                                    </div>
                                    <Link href="/hakkimda/" className="inline-block mt-3 text-secondary font-bold text-sm hover:text-primary transition-colors">
                                        Detaylı Özgeçmiş →
                                    </Link>
                                </div>
                            </div>
                        </div>


                        {/* İlgili Makaleler */}
                        <p className="text-xl font-playfair font-bold text-primary">Kira Hukuku Makaleleri</p>

                        <ul>
                            <li><Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/">Ev Sahibi Hangi Durumlarda Kiracıyı Çıkarabilir?</Link></li>
                            <li><Link href="/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/">Hangi Durumlarda Kira Tespit Davası Açılabilir?</Link></li>
                            <li><Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/">İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?</Link></li>
                            <li><Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">Kiracının Tahliyesi İçin İki Haklı İhtar Nedir?</Link></li>
                            <li><Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">Kira Hukukunda Zorunlu Arabuluculuk Süreci</Link></li>
                            <li><Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/">İşyeri Kira Sözleşmelerinde Dikkat Edilmesi Gereken Hususlar</Link></li>
                            <li><Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/">Kira Sözleşmesi Fesih Sebepleri ve Hukuki Süreç</Link></li>
                            <li><Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">Depozito İadesi Davası: Kiracının Hakları ve Hukuki Süreç</Link></li>
                            <li><Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/">Kiracının Aidat Borcu ve Ev Sahibinin Sorumlulukları</Link></li>
                            <li><Link href="/blog/10-yillik-uzama-suresi-dolan-kiracinin-tahliyesi/">10 Yıllık Uzama Süresi Dolan Kiracının Tahliyesi</Link></li>
                        </ul>

                        <p>
                            Kira hukukunu ilgilendiren her türlü sorununuza ilişkin hukuki danışmanlık almak için İzmir kira avukatı ile <Link href="/iletisim/">iletişime geçebilirsiniz</Link>.
                        </p>

                        {/* Hukuki Uyarı */}
                        <div className="not-prose my-8 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 leading-relaxed">
                            <p className="font-bold mb-1">Hukuki Uyarı</p>
                            <p>
                                Bu sayfadaki bilgiler genel bilgilendirme amacıyla hazırlanmış olup hukuki danışmanlık veya avukatlık hizmeti niteliği taşımamaktadır. Her hukuki uyuşmazlık kendine özgü koşullar içerdiğinden, somut durumunuza ilişkin değerlendirme için mutlaka bir avukatla görüşmeniz önerilir.
                            </p>
                        </div>

                        {/* İletişim CTA */}
                        <div className="not-prose scroll-mt-24 my-12">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-2xl p-8 md:p-10">
                                <p className="text-2xl font-playfair font-bold mb-3">İzmir Kira Avukatı ile Görüşün</p>
                                <p className="text-slate-300 mb-6">
                                    Kira uyuşmazlığınızla ilgili görüşme için randevu oluşturabilirsiniz.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 mb-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-secondary" />
                                        <a href="tel:+905445854645" className="font-bold hover:text-secondary transition-colors">0544 585 46 45</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-secondary" />
                                        <a href="mailto:mertkagancetin@gmail.com" className="font-bold hover:text-secondary transition-colors">mertkagancetin@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-secondary" />
                                        <span className="font-bold">Bayraklı, İzmir</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
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

                        {/* Çalışma Alanları Alt Sayfalar */}
                        <div className="not-prose my-12">
                            <p className="text-xl font-playfair font-bold text-primary mb-6">Kira Hukuku Çalışma Alanlarımız</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Kiracı Tahliye Davası", desc: "Tüm tahliye sebepleri ve dava süreçleri", url: "/izmir-kira-avukati/kiraci-tahliye-davasi/" },
                                    { title: "Kira Tespit Davası", desc: "Kira bedelinin rayice göre tespiti", url: "/izmir-kira-avukati/kira-tespit-davasi/" },
                                    { title: "Kira Uyarlama Davası", desc: "Kira bedelinin uyarlanması davası", url: "/izmir-kira-avukati/kira-uyarlama-davasi/" },
                                    { title: "Kira Hukuku Rehberi", desc: "Temel kavramlar ve yasal süreçler", url: "/izmir-kira-avukati/izmir-kira-hukuku/" },
                                    { title: "Kiracı Hakları", desc: "Kiracıların yasal hakları ve korunma yolları", url: "/izmir-kira-avukati/kiraci-haklari-izmir/" },
                                    { title: "Ev Sahibi Hakları", desc: "Ev sahiplerinin hakları ve yasal başvuru yolları", url: "/izmir-kira-avukati/ev-sahibi-haklari-izmir/" },
                                    { title: "Kira Sözleşmesi Rehberi", desc: "Sözleşme hazırlama ve hukuki detaylar", url: "/izmir-kira-avukati/kira-sozlesmesi-rehberi/" },
                                    { title: "Kira Borcu İcra Takibi", desc: "Ödenmeyen kira alacağı ve icra süreçleri", url: "/izmir-kira-avukati/kira-borcu-icra/" },
                                    { title: "İhtiyaç Nedeniyle Tahliye", desc: "TBK m. 350 kapsamında tahliye davaları", url: "/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" },
                                    { title: "10 Yıllık Kiracı Tahliyesi", desc: "Uzama süresini dolduran kiracının tahliyesi", url: "/izmir-kira-avukati/on-yillik-kiraci-tahliye/" },
                                    { title: "Kira Avukatı Ücretleri", desc: "Avukatlık ücretinin belirlenmesi", url: "/izmir-kira-avukati/izmir-kira-avukati-ucret/" },
                                ].map((item, i) => (
                                    <Link key={i} href={item.url} className="group block p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-secondary transition-all">
                                        <p className="font-bold text-primary group-hover:text-secondary transition-colors mb-1">{item.title}</p>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
}
