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
    { id: "izmir-kira-avukati", title: "İzmir Kira Avukatı" },
    { id: "iletisim-bilgileri", title: "İletişim" },
    { id: "kira-avukatinin-onemi", title: "Kira Avukatının Önemi" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "kira-davalari", title: "Kira Davaları" },
    { id: "hangi-avukat-bakar", title: "Hangi Avukat Bakar?" },
    { id: "kiraci-nasil-cikarilir", title: "Kiracı Nasıl Çıkarılır?" },
    { id: "sss", title: "Sık Sorulan Sorular" },
];

const faqs = [
    {
        question: "Kira davası hangi mahkemede görülür?",
        answer: "Kira ilişkisinden doğan davalar, dava değerine bakılmaksızın Sulh Hukuk Mahkemesinde görülür (HMK m. 4/1-a). İcra yoluyla tahliye takiplerinde itirazın kaldırılması ve tahliye talepleri İcra Hukuk Mahkemesinde incelenir."
    },
    {
        question: "Kira davalarında avukatlık ücreti nasıl belirlenir?",
        answer: "Ücret, işin niteliği ve gerektirdiği emek dikkate alınarak yazılı ücret sözleşmesiyle kararlaştırılır ve Avukatlık Asgari Ücret Tarifesi'nin altında olamaz (Avukatlık Kanunu m. 163-164). Somut dosyaya ilişkin bilgi ön görüşmede verilir."
    },
    {
        question: "Kiracı kira ödemezse tahliye süreci nasıl işler?",
        answer: "Konut ve çatılı işyeri kiralarında kiracıya en az 30 gün süre verilerek, ödenmezse sözleşmenin feshedileceği yazılı olarak bildirilir (TBK m. 315). Süre sonunda tahliye davası açılabilir veya icra yoluyla tahliye istenebilir (İİK m. 269 vd.)."
    },
    {
        question: "Tahliye taahhütnamesi imzalayan kiracı çıkmazsa ne yapılır?",
        answer: "Kiraya veren, taahhüt edilen tarihten itibaren bir ay içinde icraya başvurabilir veya dava açabilir (TBK m. 352/1). İcra yolunda kiracının itiraz süresi 7 gün (İİK m. 274), tahliye emrindeki boşaltma süresi 15 gündür (İİK m. 272)."
    },
    {
        question: "Kira tespit davası ne zaman açılabilir?",
        answer: "Kira tespit davası her zaman açılabilir. Belirlenen bedelin yeni kira yılının başından geçerli olması için dava, yeni dönemden en geç 30 gün önce açılmalı veya bu süre içinde kiracıya yazılı bildirim yapılmalıdır (TBK m. 345)."
    },
    {
        question: "Yeni ev sahibi kiracıyı çıkarabilir mi?",
        answer: "Gereksinimi olan yeni malik, edinmeden itibaren bir ay içinde kiracıya yazılı bildirimde bulunarak edinme tarihinden altı ay sonra veya sözleşme süresinin bitiminden itibaren bir ay içinde tahliye davası açabilir (TBK m. 351)."
    },
    {
        question: "Depozito iade edilmezse ne yapılır?",
        answer: "Para olarak verilen güvence bedeli bankada vadeli hesaba yatırılır; kiraya veren sözleşmenin bitiminden itibaren üç ay içinde dava veya takip yaptığını bankaya bildirmezse banka güvenceyi kiracıya iade eder (TBK m. 342). Uyuşmazlıkta önce arabulucuya başvurulur."
    },
    {
        question: "Ön görüşme nasıl yapılır?",
        answer: "Ön görüşmeler telefonla yapılır. Kira sözleşmesi, varsa tahliye taahhütnamesi, ihtarnameler ve ödeme kayıtları birlikte değerlendirilir. Ofis Bayraklı/İzmir'dedir; telefon: 0544 585 46 45."
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
                            "@type": "Article",
                            "@id": "https://mertkagancetin.com/izmir-kira-avukati/#article",
                            "headline": "İzmir Kira Avukatı",
                            "mainEntityOfPage": { "@id": "https://mertkagancetin.com/izmir-kira-avukati/#webpage" },
                            "author": { "@id": "https://mertkagancetin.com/#person" },
                            "publisher": { "@id": "https://mertkagancetin.com/#attorney" },
                            "dateModified": "2026-10-15",
                            "inLanguage": "tr-TR"
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

                        {/* 1 */}
                        <h2 id="izmir-kira-avukati" className="scroll-mt-24">İzmir Kira Avukatı</h2>

                        <p>
                            <strong>İzmir kira avukatı</strong> olarak kira bedelinin tespiti ve kiracının tahliyesi davalarında ev sahibi ve kiracılara hizmet vermekteyiz. Kiracının tahliyesi, Türk Borçlar Kanunu&apos;nda oldukça sıkı şekil şartlarına ve sürelere bağlanmış olması sebebiyle üzerinde titizlikle çalışılması gereken bir konudur. Kira hukukunu ilgilendiren sorunlarınızda İzmir genelinde avukatlık hizmeti sunuyoruz.
                        </p>

                        {/* 2 */}
                        <h2 id="iletisim-bilgileri" className="scroll-mt-24">İzmir Kira Avukatı İletişim</h2>

                        <p>
                            Kira avukatı; kiracılar ve ev sahipleri için kira sözleşmesinin hazırlanması, tarafların haklarının korunması, kira artışı ve tahliye gibi konularda hukuki destek verir. Ön görüşmeler telefonla yapılır; kira sözleşmesi, ihtarname ve ödeme kayıtları bu görüşmede değerlendirilir.
                        </p>

                        <ul>
                            <li><strong>Kira Avukatı:</strong> Av. Mert Kağan Çetin (İzmir Barosu Sicil No: 15556)</li>
                            <li><strong>Telefon:</strong> <a href="tel:+905445854645">+90 544 585 46 45</a></li>
                            <li><strong>Adres:</strong> Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17, Bayraklı/İzmir</li>
                            <li><strong>E-posta:</strong> <a href="mailto:mertkagancetin@gmail.com">mertkagancetin@gmail.com</a></li>
                        </ul>

                        <p>
                            Bayraklı, Karşıyaka, Bornova, Konak, Buca, Çiğli ve diğer ilçeler başta olmak üzere İzmir genelinde hizmet verilmektedir (ör. <Link href="/bayrakli-kira-avukati/">Bayraklı</Link>, <Link href="/karsiyaka-kira-avukati/">Karşıyaka</Link>, <Link href="/bornova-kira-avukati/">Bornova</Link>).
                        </p>

                        {/* 3 */}
                        <h2 id="kira-avukatinin-onemi" className="scroll-mt-24">İzmir Kira Avukatının Önemi</h2>

                        <ul>
                            <li><strong>Sıkı şekil şartları:</strong> İhtarname, bildirim ve tahliye taahhüdü kanunda belirli şekil şartlarına bağlıdır; şekle aykırı bir işlem hak kaybına yol açabilir.</li>
                            <li><strong>Sürelerin kaçırılmaması:</strong> Tahliye davalarında dava açma süreleri çoğunlukla bir aydır ve hak düşürücü niteliktedir.</li>
                            <li><strong>Sözleşme, artış ve tahliye:</strong> Kira sözleşmesinin hazırlanması, kira artışının belirlenmesi ve tahliye süreci birlikte planlanmalıdır.</li>
                            <li><strong>Mahkemede dava:</strong> Kira avukatı, gerektiğinde zorunlu arabuluculuk aşamasından sonra Sulh Hukuk Mahkemesinde dava açar ve takip eder.</li>
                        </ul>

                        <p>
                            Kira ilişkisinden doğan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak dava şartıdır (7445 sayılı Kanunla eklenen HUAK m. 18/B); icra yoluyla tahliye talepleri bu şartın dışındadır. Ayrıntılar: <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">kira hukukunda zorunlu arabuluculuk</Link>.
                        </p>

                        {/* 4 */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Ev Sahibi Kiracı Davalarında Avukatlık Ücreti</h2>

                        <p>
                            Avukatlık ücreti; davanın türü, dava değeri ve işin gerektirdiği emek dikkate alınarak avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır (Avukatlık Kanunu m. 163-164). Kararlaştırılan ücret, Türkiye Barolar Birliği&apos;nin her yıl yayımladığı Avukatlık Asgari Ücret Tarifesi&apos;nin altında olamaz. Somut dosyaya ilişkin ücret bilgisi, belgeler incelendikten sonra telefonla yapılan ön görüşmede verilir. Ayrıntılar: <Link href="/izmir-kira-avukati/izmir-kira-avukati-ucret/">kira avukatı ücreti nasıl belirlenir</Link>.
                        </p>

                        {/* 5 */}
                        <h2 id="kira-davalari" className="scroll-mt-24">Kira Davaları</h2>

                        <p>
                            İzmir kira avukatı olarak takip ettiğimiz başlıca kira davaları şunlardır:
                        </p>

                        <ol>
                            <li><Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Kiracının tahliyesi davası</Link></li>
                            <li>Kira bedelinin artırımı ve <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link> (TBK m. 344); olağanüstü durumlarda <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">kira uyarlama davası</Link> (TBK m. 138)</li>
                            <li>Kiralananın olağan kullanım dışında yıpratılmasından (hor kullanım) doğan tazminat davası (TBK m. 334)</li>
                            <li><Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">Depozito (güvence bedeli) iadesi</Link> davası (TBK m. 342)</li>
                            <li>Kira sözleşmesinden doğan alacak davaları ve <Link href="/izmir-kira-avukati/kira-borcu-icra/">kira alacağı icra takibi</Link></li>
                            <li>Kira sözleşmesinden doğan tespit davaları (ör. sözleşmenin varlığı, süresi veya <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/">işyeri kira</Link> koşullarının tespiti)</li>
                        </ol>

                        {/* 6 */}
                        <h2 id="hangi-avukat-bakar" className="scroll-mt-24">Kira İşlerine Hangi Avukat Bakar?</h2>

                        <p>
                            Kira işlerine kira hukuku avukatı bakar. Kira hukuku avukatı; ev sahibi ile kiracı arasındaki ilişkiyi düzenleyen Türk Borçlar Kanunu hükümleri çerçevesinde sözleşme hazırlama, ihtarname, arabuluculuk, dava ve icra takibi aşamalarında müvekkilini temsil eden avukattır. Avukatlar Türkiye&apos;nin her yerinde dava takip edebilir; ancak duruşma ve keşif gibi işlemler nedeniyle taşınmazın bulunduğu yerdeki bir avukatla çalışmak pratik kolaylık sağlar. Kira davaları Sulh Hukuk Mahkemesinde görülür (HMK m. 4/1-a).
                        </p>

                        {/* 7 */}
                        <h2 id="kiraci-nasil-cikarilir" className="scroll-mt-24">Kiracı Nasıl Çıkarılır?</h2>

                        <p>
                            Kiracı yalnızca kanunda sayılan sebeplerle, dava veya icra yoluyla çıkarılabilir; kendiliğinden tahliye hukuka aykırıdır. Tahliye sebepleri dört grupta toplanabilir:
                        </p>

                        <h3>1. Bildirim Yoluyla Fesih</h3>
                        <ul>
                            <li><strong>Belirli süreli sözleşmede:</strong> Kira süresi ve ardından gelen on uzama yılı dolduktan sonra, her uzama yılının bitiminden en az üç ay önce bildirimde bulunularak sebep gösterilmeksizin fesih (TBK m. 347).</li>
                            <li><strong>Belirsiz süreli sözleşmede:</strong> Kiranın başlangıcından itibaren on yıl geçtikten sonra, genel hükümlere göre fesih bildirim sürelerine uyularak fesih (TBK m. 347). Ayrıntılar: <Link href="/izmir-kira-avukati/on-yillik-kiraci-tahliye/">10 yıllık kiracı tahliyesi</Link>.</li>
                        </ul>
                        <p>Bu kural konut ve çatılı işyeri kiraları için geçerlidir.</p>

                        <h3>2. Dava Yoluyla Tahliye</h3>
                        <ul>
                            <li><strong>Konut veya işyeri gereksinimi:</strong> Kiraya verenin, eşinin, altsoyunun, üstsoyunun veya bakmakla yükümlü olduğu kişilerin gereksinimi (TBK m. 350/1; bkz. <Link href="/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/">ihtiyaç nedeniyle tahliye</Link>).</li>
                            <li><strong>Yeniden inşa ve imar:</strong> Kiralananın kullanımının imkânsız olduğu esaslı onarım, yeniden inşa veya değişiklik zorunluluğu (TBK m. 350/2).</li>
                            <li><strong>Yeni malikin gereksinimi:</strong> Taşınmazı sonradan edinen yeni malikin gereksinimi (TBK m. 351; bkz. <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/">yeni malik ve fesih sebepleri</Link>).</li>
                            <li><strong>Yazılı tahliye taahhüdü:</strong> Taahhüt edilen tarihten itibaren bir ay içinde icra takibi veya dava (TBK m. 352/1). İcra yolunda itiraz süresi 7 gün (İİK m. 274), tahliye emrindeki boşaltma süresi 15 gündür (İİK m. 272-275; bkz. <Link href="/tahliye-taahhutnamesi/">tahliye taahhütnamesi</Link>).</li>
                            <li><strong>İki haklı ihtar:</strong> Kiracının bir kira yılı içinde kira bedelini ödemeyerek iki kez haklı yazılı ihtara sebep olması (TBK m. 352/2; bkz. <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">iki haklı ihtar</Link>).</li>
                            <li><strong>Aynı ilçede konut:</strong> Kiracının veya birlikte yaşadığı eşinin aynı ilçe veya belde belediye sınırları içinde oturmaya elverişli bir konutunun bulunması ve kiraya verenin bunu sözleşme kurulurken bilmemesi (TBK m. 352/3).</li>
                        </ul>

                        <h3>3. Kiracının Yükümlülüklerine Aykırılık</h3>
                        <p>
                            Kiracı, kiralananı sözleşmeye uygun olarak özenle kullanmak ve komşulara saygı göstermekle yükümlüdür (TBK m. 316). Konut ve çatılı işyeri kiralarında kiraya veren, en az 30 gün süre vererek aykırılığın giderilmesini, aksi halde sözleşmenin feshedileceğini yazılı olarak ihtar eder. Kiracının kiralanana kasten ağır zarar vermesi veya ihtarın sonuç vermeyeceğinin anlaşılması halinde 30 gün önceden yazılı bildirimle fesih mümkündür. Bu kapsamda değerlendirilebilecek başlıca durumlar:
                        </p>
                        <ul>
                            <li>Kiralanana ağır hasar verilmesi</li>
                            <li>Kiralananın özgülendiği amaca aykırı kullanılması (ör. çiçekçi olarak kiralanan dükkânın kebapçıya dönüştürülmesi)</li>
                            <li>Konut ve çatılı işyerinde kiraya verenin yazılı rızası olmadan alt kiraya verilmesi (TBK m. 322)</li>
                            <li>Komşulara saygı borcuna aykırı davranışlar</li>
                            <li>Kiraya verene yönelik hakaret veya tehdit gibi ağır davranışlar; bunların hangi hükme dayanacağı somut olaya göre değerlendirilir</li>
                        </ul>

                        <h3>4. Kira Bedelinin Ödenmemesi (Temerrüt)</h3>
                        <p>
                            Kira bedelini ödemeyen kiracıya, konut ve çatılı işyeri kiralarında en az 30 gün süre verilerek, bu süre içinde ödeme yapılmazsa sözleşmenin feshedileceği yazılı olarak bildirilir (TBK m. 315). Süre sonunda tahliye davası açılabilir veya icra yoluyla tahliye istenebilir (İİK m. 269 vd.). Temerrüt nedeniyle fesih, bir kira yılı içinde iki haklı ihtara dayanan tahliye (TBK m. 352/2) ile karıştırılmamalıdır; ikisinin şartları ve süreleri farklıdır.
                        </p>

                        {/* SSS */}
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
                                    Ön görüşmeler telefonla yapılır.
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
                                            İletişim <ArrowRight className="w-5 h-5" />
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
