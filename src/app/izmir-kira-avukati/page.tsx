import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import dynamic from "next/dynamic";
const YouTubeShorts = dynamic(() => import("@/components/ui/YouTubeShorts").then(m => ({ default: m.YouTubeShorts })));
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { articleProseClasses } from "@/lib/prose-classes";


export const metadata: Metadata = {
    title: {
        absolute: "İzmir Kira Avukatı | Tahliye, Kira Tespit – Av. M.K. Çetin",
    },
    description: "İzmir'de kiracı tahliyesi, kira tespit ve uyarlama davaları, depozito iadesi ve zorunlu arabuluculuk süreçlerinde avukatlık desteği. Bayraklı ofis.",
    keywords: ["İzmir kira avukatı", "kira avukatı izmir", "kira hukuku avukatı izmir", "kiracı tahliye avukatı İzmir", "kira tespit davası izmir", "tahliye davası İzmir"],
    openGraph: {
        title: "İzmir Kira Avukatı | Tahliye, Kira Tespit – Av. M.K. Çetin",
        description: "İzmir'de kiracı tahliyesi, kira tespit ve uyarlama davaları, depozito iadesi ve zorunlu arabuluculuk süreçlerinde avukatlık desteği. Bayraklı ofis.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/",
        type: "website",
        locale: "tr_TR",
        images: [{ url: "/og-image.jpg", alt: "Av. Mert Kağan Çetin - İzmir Kira Avukatı" }],
    },
    other: {
        "article:modified_time": "2026-10-13",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-kira-avukati/",
    },
};

const tocItems = [
    { id: "iletisim-bilgileri", title: "İletişim" },
    { id: "kira-hukuku-avukatlari", title: "Kira Hukuku Avukatları" },
    { id: "kira-davalari", title: "Kira Davaları" },
    { id: "arabuluculuk", title: "Zorunlu Arabuluculuk" },
    { id: "kiraci-nasil-cikarilir", title: "Kiracı Nasıl Çıkarılır?" },
    { id: "yeni-malik-tahliye", title: "Yeni Malik Tahliyesi" },
    { id: "icra-yoluyla-tahliye", title: "İcra Yoluyla Tahliye" },
    { id: "kira-tespit-davasi", title: "Kira Tespit Davası" },
    { id: "kira-artis-orani", title: "Kira Artış Oranı (TÜFE)" },
    { id: "kira-uyarlama-davasi", title: "Kira Uyarlama Davası" },
    { id: "depozito-iadesi", title: "Depozito İadesi" },
    { id: "ticari-kira", title: "İşyeri Kirası" },
    { id: "gorevli-mahkeme", title: "Görevli Mahkeme" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "kira-avukati-secerken", title: "Avukat Seçerken" },
    { id: "kira-avukati-zorunlu-mu", title: "Avukat Zorunlu Mu?" },
    { id: "ilceler", title: "Hizmet Verilen İlçeler" },
    { id: "sss", title: "Sık Sorulan Sorular" },
];

const faqs = [
    {
        question: "İzmir'de kira davası hangi mahkemede açılır?",
        answer: "Kira ilişkisinden doğan davalar, dava değerine bakılmaksızın Sulh Hukuk Mahkemesinde görülür (HMK m. 4/1-a). Yetkili mahkeme kural olarak davalının yerleşim yeri mahkemesidir (HMK m. 6); sözleşmenin ifa yeri mahkemesinde de dava açılabilir (HMK m. 10)."
    },
    {
        question: "Kira davalarında arabuluculuk zorunlu mu?",
        answer: "Evet. 1 Eylül 2023'ten itibaren kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak dava şartıdır (6325 sayılı HUAK m. 18/B; 7445 sayılı Kanun ile eklenmiştir). Ancak İcra ve İflas Kanunu hükümlerine göre ilamsız icra yoluyla tahliye talepleri bu şartın dışındadır."
    },
    {
        question: "Kiracı nasıl çıkarılır?",
        answer: "Kiracının tahliyesi için kanunda sayılan sebeplerden birinin bulunması gerekir: 10 yıllık uzama süresinin dolması (TBK m. 347), kiraya verenin veya yakınlarının konut ya da işyeri ihtiyacı, yeniden inşa ve imar (TBK m. 350), yeni malikin ihtiyacı (TBK m. 351), yazılı tahliye taahhüdü veya iki haklı ihtar (TBK m. 352) ve kira bedelinin ödenmemesi nedeniyle temerrüt (TBK m. 315)."
    },
    {
        question: "Yeni ev sahibi kiracıyı çıkarabilir mi?",
        answer: "Kiralananı sonradan edinen yeni malik, kendisi veya yakınları için konut ya da işyeri ihtiyacı varsa, edinme tarihinden itibaren bir ay içinde durumu kiracıya yazılı olarak bildirmek koşuluyla, edinme tarihinden itibaren altı ay sonra tahliye davası açabilir (TBK m. 351). Dilerse sözleşme süresinin bitiminden itibaren bir ay içinde de dava açabilir."
    },
    {
        question: "Kira tespit davası ne zaman açılabilir?",
        answer: "Kira bedelinin belirlenmesi için her zaman dava açılabilir; ancak beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde yeni kira yılı bedeli hakim tarafından emsal kira bedelleri, TÜFE ve kiralananın durumu dikkate alınarak hakkaniyete uygun biçimde belirlenir (TBK m. 344). Tespit edilen bedelin yeni kira yılının başından itibaren geçerli olması için dava, yeni dönem başlangıcından en geç 30 gün önce açılmalı veya kiracıya bu süre içinde yazılı bildirimde bulunulmalıdır (TBK m. 345)."
    },
    {
        question: "Kira artış oranı nasıl hesaplanır?",
        answer: "Konut ve çatılı işyeri kiralarında taraflarca kararlaştırılan artış oranı, bir önceki kira yılındaki TÜFE'nin on iki aylık ortalamasına göre değişim oranını geçemez (TBK m. 344/1). Konut kiraları için uygulanan geçici %25 sınırı 1 Temmuz 2024 itibarıyla sona ermiştir."
    },
    {
        question: "Depozito iade edilmezse ne yapılır?",
        answer: "Para olarak verilen güvence bedeli en fazla üç aylık kira bedeli kadar olabilir ve bir bankada vadeli tasarruf hesabına yatırılmalıdır (TBK m. 342). Banka, kiracının rızası veya kiraya verenin kira sözleşmesinin bitiminden itibaren üç ay içinde kiracı aleyhine dava açtığını ya da icra takibi yaptığını bildirmemesi halinde güvenceyi kiracıya geri verir. Uyuşmazlık halinde önce arabulucuya başvurulur."
    },
    {
        question: "Kira avukatı ücreti nasıl belirlenir ve kim öder?",
        answer: "Avukatlık ücreti, işin niteliğine göre avukat ile müvekkil arasında yazılı olarak kararlaştırılır ve Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Her taraf kendi avukatının ücretini öder; dava sonunda haksız çıkan taraf ise mahkemenin tarifeye göre hükmettiği karşı vekalet ücreti ile yargılama giderlerini öder."
    },
    {
        question: "Kira davasında avukat tutmak zorunlu mu?",
        answer: "Hayır, kira davalarında avukatla temsil zorunlu değildir. Ancak kira hukuku sürelere ve şekil şartlarına sıkı biçimde bağlıdır; hatalı hesaplanan bir süre veya usulüne uygun çekilmemiş bir ihtarname hak kaybına yol açabilir."
    }
];

const kiraDistricts = [
    { name: "Bayraklı", slug: "bayrakli" },
    { name: "Karşıyaka", slug: "karsiyaka" },
    { name: "Bornova", slug: "bornova" },
    { name: "Konak", slug: "konak" },
    { name: "Buca", slug: "buca" },
    { name: "Çiğli", slug: "cigli" },
    { name: "Gaziemir", slug: "gaziemir" },
    { name: "Balçova", slug: "balcova" },
    { name: "Narlıdere", slug: "narlidere" },
    { name: "Karabağlar", slug: "karabaglar" },
    { name: "Güzelbahçe", slug: "guzelbahce" },
];

export default function IzmirKiraAvukatiPage() {
    return (
        <main className="bg-white">
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
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "İhtiyaç nedeniyle tahliye", "url": "https://mertkagancetin.com/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" } }
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
                            "dateModified": "2026-10-13",
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
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kira Avukatı – Ev Sahibi ve Kiracı Uyuşmazlıkları
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong className="text-white">İzmir kira avukatı</strong> Av. Mert Kağan Çetin; tahliye, kira tespiti, kira uyarlama, depozito ve kira alacağı uyuşmazlıklarında Bayraklı ofisinden İzmir genelinde avukatlık hizmeti vermektedir.
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

            {/* Table of Contents */}
            <section className="py-8 bg-slate-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
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
                    <div className={`max-w-3xl mx-auto ${articleProseClasses}`}>

                        {/* Giriş */}
                        <p>
                            <strong>İzmir kira avukatı</strong> olarak kira bedelinin tespiti ve kiracının tahliyesi davalarında İzmir genelinde hizmet vermekteyiz. Kiracının tahliyesi, Borçlar Kanununda oldukça sıkı şekil şartlarına bağlanmış olması sebebiyle üzerinde titizlikle çalışılması gereken bir konudur.
                        </p>

                        <p>
                            Kira uyuşmazlıklarında süreler, ihtarnamelerin şekli ve dava öncesi zorunlu arabuluculuk aşaması sonucu doğrudan etkiler. Bu sayfada İzmir&apos;de kira hukukuna ilişkin temel süreçleri, ilgili Türk Borçlar Kanunu (TBK) hükümleriyle birlikte özetledik.
                        </p>

                        {/* İletişim */}
                        <h2 id="iletisim-bilgileri" className="scroll-mt-24">İzmir Kira Avukatı İletişim</h2>

                        <p>
                            İzmir&apos;de kira hukuku alanında çalışan avukatlar, hem kiracıların hem de ev sahiplerinin karşılaşabileceği hukuki sorunların çözümünde yardımcı olmaktadır. <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/">Kira sözleşmelerinin</Link> hazırlanması, kiracı veya ev sahibi haklarının korunması, kira artışı uygulamaları, <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye işlemleri</Link> gibi konularda hukuki destek almak isteyenler İzmir kira avukatına başvurabilir.
                        </p>

                        <p>
                            İzmir kira avukatları, müvekkillerine hukuki danışmanlık hizmeti sunarak kira hukuku konusunda doğru adımlar atmalarına yardımcı olurlar. Kiracıların veya ev sahiplerinin haklarını korumak için gerekli olan tüm prosedürleri takip ederek müvekkillerinin haklarını savunurlar.
                        </p>

                        <p>
                            Kira hukukuna ilişkin sorularınız için <strong>Av. Mert Kağan Çetin</strong> ile iletişime geçebilirsiniz.
                        </p>

                        <ul>
                            <li><strong>Kira Avukatı:</strong> Av. Mert Kağan Çetin</li>
                            <li><strong>Telefon:</strong> <a href="tel:+905445854645">0544 585 46 45</a></li>
                            <li><strong>Adres:</strong> Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                            <li><strong>E-posta:</strong> <a href="mailto:mertkagancetin@gmail.com">mertkagancetin@gmail.com</a></li>
                        </ul>

                        <YouTubeShorts
                            videoId="JeM-o0sl9j8"
                            title="İzmir'de Kira Avukatıyla Çalışmanın Önemi - Kısa Video"
                        />

                        {/* İzmir Kira Avukatının Önemi */}
                        <h2 id="kira-hukuku-avukatlari" className="scroll-mt-24">İzmir&apos;de Kira Hukuku Avukatları</h2>

                        <p>
                            Kiraya ilişkin hususlar sıkı şekil şartlarına bağlanmıştır. Ev sahibi ve kiracı arasındaki anlaşmazlıklarda sürelerin doğru hesaplanması ve <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye işlemlerinin</Link> usulüne uygun yürütülmesi, hak kaybını önlemek açısından önemlidir.
                        </p>

                        <p>
                            İzmir&apos;de kira hukukuyla ilgili bir sorun yaşıyorsanız bir <strong>kira hukuku avukatı</strong> arayışı içerisinde olabilirsiniz. Kira hukuku avukatları, ev sahibi ve kiracı arasındaki ilişkileri düzenlerler. Yasal düzenlemeleri bilirler ve bu konuda danışmanlık yapabilirler.
                        </p>

                        <p>
                            İzmir kira avukatları, <Link href="/kira-sozlesmesi-ornegi/">kira sözleşmesi hazırlama</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira artışı</Link> ve kiracı tahliyesi gibi konularda müvekkillerine yardımcı olurlar. Kira artış oranınızı öğrenmek için <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama</Link> aracımızı kullanabilirsiniz. Ayrıca İzmir kira hukuku avukatları, kiracıların haklarını ve ev sahiplerinin haklarını savunmak için gerektiğinde mahkemede dava açabilirler.
                        </p>

                        <p>
                            Kiralama sürecinde veya <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/">kira sözleşmesinin sona ermesi</Link> ile ilgili birçok sorunla karşılaşma ihtimaliniz vardır. İzmir&apos;deki kira hukuku avukatları size bu konularda hukuki destek sağlayabilirler.
                        </p>


                        {/* Kira Davaları */}
                        <h2 id="kira-davalari" className="scroll-mt-24">Kira Davaları</h2>

                        <p>
                            İzmir kira avukatı olarak kira hukukuyla ilgili aşağıdaki davalarda hizmet vermekteyiz:
                        </p>

                        <ol>
                            <li><Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Kiracının Tahliyesi Davaları</Link></li>
                            <li><Link href="/izmir-kira-avukati/kira-tespit-davasi/">Kira Bedelinin Artırımı ve Tespiti Davaları</Link></li>
                            <li><Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">Kiralananın Hor Kullanımından Kaynaklanan Tazminat Davası</Link></li>
                            <li><Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">Depozitonun İadesinden Kaynaklanan Davalar</Link></li>
                            <li><Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/">Kira Sözleşmesinden Kaynaklanan Alacak Davaları</Link></li>
                            <li><Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">Kira Sözleşmesinden Kaynaklanan Tespit Davaları</Link></li>
                        </ol>

                        {/* Kira İşlerine Hangi Avukat Bakar */}
                        <h3 id="kira-davalarina-bakan-avukat" className="scroll-mt-24">İzmir&apos;de Kira Davalarına Bakan Avukat</h3>

                        <p>
                            Kira hukuku avukatı, müvekkillerden gelen kira kontratlarını revize eden ve düzenleyen, TBK hükümlerine göre kira hukukuna uygun çeşitli sözleşme ve protokolleri hazırlayan, kira hukuku kaynaklı <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye davaları</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davaları</Link> gibi kira ilişkisinden doğan uyuşmazlıklarla ilgilenen avukatı ifade eder.
                        </p>

                        <p>
                            Kiraya verilen taşınmazın İzmir&apos;de bulunması durumunda kira hukuku avukatının İzmir&apos;den tutulması önerilir. Taşınmazın bulunduğu yerdeki avukat, keşif, bilirkişi incelemesi ve dava öncesi <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">zorunlu arabuluculuk</Link> görüşmelerine katılım bakımından süreci yakından takip edebilir.
                        </p>

                        {/* Zorunlu Arabuluculuk */}
                        <h2 id="arabuluculuk" className="scroll-mt-24">Kira Uyuşmazlıklarında Zorunlu Arabuluculuk</h2>

                        <p>
                            1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açmadan önce arabulucuya başvurulması <strong>dava şartıdır</strong> (6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu m. 18/B). Tahliye, kira tespiti, kira uyarlama, kira alacağı ve depozito iadesi talepleri bu kapsamdadır. Arabulucuya başvurmadan açılan dava, usulden reddedilir.
                        </p>

                        <p>
                            Başvuru, karşı tarafın yerleşim yerindeki veya görevli mahkemenin bulunduğu yerdeki arabuluculuk bürosuna yapılır. Arabulucu, görevlendirildiği tarihten itibaren üç hafta içinde süreci sonuçlandırır; bu süre zorunlu hallerde en fazla bir hafta uzatılabilir. Anlaşma sağlanırsa düzenlenen anlaşma belgesi, avukatlar tarafından imzalandığında ilam niteliğinde belge sayılır. Anlaşma sağlanamazsa son tutanakla birlikte dava açılabilir.
                        </p>

                        <p>
                            <strong>İstisna:</strong> İcra ve İflas Kanunu kapsamında ilamsız icra yoluyla tahliye talepleri (kira bedelinin ödenmemesi veya tahliye taahhüdüne dayalı takipler) zorunlu arabuluculuk şartına tabi değildir. Ayrıntılar için <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">kira hukukunda zorunlu arabuluculuk süreci</Link> yazımızı inceleyebilirsiniz.
                        </p>

                        {/* Kiracı Nasıl Çıkarılır */}
                        <h2 id="kiraci-nasil-cikarilir" className="scroll-mt-24">Kiracı Nasıl Çıkarılır?</h2>

                        <p>
                            Kiracılarıyla sorun yaşayan ev sahipleri &quot;kiracı nasıl çıkarılır?&quot;, &quot;kirasını düzenli ödeyen kiracı evden çıkarılabilir mi?&quot; şeklinde sorular sormaktadır.
                        </p>

                        <p>
                            Kiracının tahliye edilebilmesi için kanunda öngörülen belli başlı sebepleri ileri sürmelisiniz. Detaylı bilgi için <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/">kiracının tahliyesi hakkındaki yazımızı</Link> inceleyebilirsiniz. Tahliye sebepleri aşağıdaki gibidir:
                        </p>

                        <h3>1. Bildirim Yolu ile Fesih</h3>

                        <ul>
                            <li><strong>Belirli süreli kira sözleşmeleri için:</strong> Kira süresi + 10 uzama yılı geçtikten sonra kiraya veren sözleşmeyi feshedebilir (TBK m. 347).</li>
                            <li><strong>Belirsiz süreli kira sözleşmeleri için:</strong> Sözleşme tarihinden itibaren 10 yıl geçtikten sonra fesih hakkı doğar.</li>
                        </ul>

                        <h3>2. Dava Yolu ile Fesih</h3>

                        <ul>
                            <li>Konut ya da iş yeri gereksinimi nedeniyle <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/">tahliye davası</Link> (TBK m. 350)</li>
                            <li>Kiralananın yeniden inşası ve imarı nedeniyle tahliye davası</li>
                            <li>Yeni malikin gereksinimi nedeniyle tahliye davası</li>
                            <li>Yazılı olarak verilmiş <Link href="/tahliye-taahhutnamesi/">tahliye taahhüdü</Link> nedeniyle kiracının tahliyesi (TBK m. 352/1)</li>
                            <li>Bir kira döneminde <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">iki haklı ihtar</Link> nedeniyle tahliye davası (TBK m. 352/2)</li>
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
                            Borcunu sözleşmede kararlaştırılan tarihte ödemeyen kiracıya ihtarname çekilerek 30 günlük süre verilir. 30 gün içerisinde kirasını ödemeyen kiracı temerrüt sebebiyle tahliye edilebilir. <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">İki haklı ihtar nedeniyle tahliye</Link> sebebiyle karıştırılmaması gerekir.
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

                        {/* Kiracının Tahliyesi Davası Avukatı İzmir */}
                        <h3 id="kiraci-tahliye-davasi-avukati" className="scroll-mt-24">Kiracının Tahliyesi Davası Avukatı İzmir</h3>

                        <p>
                            İzmir&apos;de kiracının tahliyesi davası açmak isteyen ev sahiplerinin sürecin başında hukuki durumu değerlendirmesi önemlidir. Tahliye davaları TBK&apos;nın öngördüğü sıkı usul kurallarına tabi olduğundan sürelerin doğru hesaplanması ve ihtarnamelerin usulüne uygun çekilmesi gerekmektedir.
                        </p>

                        <p>
                            İzmir kira avukatı olarak <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye taahhütnamesi</Link>, <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/">ihtiyaç nedeniyle tahliye</Link>, <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">iki haklı ihtar</Link> ve 10 yıllık uzama süresinin dolması gibi tahliye sebeplerine dayalı davalarda hukuki destek vermekteyiz. Tahliye sebebine göre dava açma süreleri farklıdır; bu sürelerin kaçırılması halinde tahliye hakkı bir sonraki döneme kalabilir.
                        </p>

                        {/* Yeni Malik */}
                        <h3 id="yeni-malik-tahliye" className="scroll-mt-24">Yeni Malikin İhtiyacı Nedeniyle Tahliye (TBK m. 351)</h3>

                        <p>
                            Kiralananı satın alma veya başka bir yolla sonradan edinen yeni malik, kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu kişiler için konut ya da işyeri ihtiyacı varsa kira sözleşmesini dava yoluyla sona erdirebilir. Bunun için iki yol vardır:
                        </p>

                        <ul>
                            <li>Sözleşme süresinin bitiminden itibaren <strong>bir ay içinde</strong> tahliye davası açmak,</li>
                            <li>Edinme tarihinden itibaren <strong>bir ay içinde</strong> durumu kiracıya yazılı olarak bildirmek ve edinme tarihinden <strong>altı ay sonra</strong> tahliye davası açmak.</li>
                        </ul>

                        <p>
                            İhtiyacın gerçek, samimi ve sürekli olması gerekir. Ayrıca kiraya veren, haklı sebep olmaksızın kiralananı üç yıl geçmedikçe eski kiracı dışındaki birine kiralayamaz (TBK m. 355).
                        </p>

                        {/* İcra Yoluyla Tahliye */}
                        <h2 id="icra-yoluyla-tahliye" className="scroll-mt-24">Kira Alacağı ve İcra Yoluyla Tahliye</h2>

                        <p>
                            Kira bedeli ödenmediğinde kiraya veren, dava açmak yerine doğrudan icra dairesine başvurarak <strong>ilamsız tahliye takibi</strong> başlatabilir (İİK m. 269 vd.). Kiracıya gönderilen ödeme emrinde, konut ve çatılı işyeri kiralarında 30 günlük ödeme süresi verilir ve bu süre içinde borç ödenmezse tahliye edileceği ihtar edilir. Kiracı yedi gün içinde itiraz edebilir; itiraz halinde kiraya veren icra mahkemesinden itirazın kaldırılmasını ve tahliyeyi talep eder.
                        </p>

                        <p>
                            Yazılı <Link href="/tahliye-taahhutnamesi/">tahliye taahhüdü</Link> bulunan durumlarda da taahhüt edilen tarihten itibaren bir ay içinde icra takibi başlatılabilir (İİK m. 272). Bu takipler zorunlu arabuluculuk şartının dışındadır. Ayrıntılı bilgi için <Link href="/izmir-kira-avukati/kira-borcu-icra/">kira borcu icra takibi</Link> sayfamıza bakabilirsiniz.
                        </p>

                        {/* Kira Tespit */}
                        <h2 id="kira-tespit-davasi" className="scroll-mt-24">Kira Tespit Davası İzmir</h2>

                        <p>
                            Kira tespit davası, yeni kira yılında uygulanacak kira bedelinin mahkemece belirlenmesi için açılır. Beş yıldan uzun süreli kira sözleşmelerinde ve beş yıldan sonra yenilenen sözleşmelerde, her beş yılın sonunda ve izleyen kira yıllarında yeni kira bedeli; TÜFE&apos;nin on iki aylık ortalamasına göre değişim oranı, kiralananın durumu ve emsal kira bedelleri göz önünde tutularak hakkaniyete uygun biçimde belirlenir (TBK m. 344/3).
                        </p>

                        <p>
                            Mahkemece belirlenen bedelin yeni kira yılının başından itibaren geçerli olması için davanın yeni kira döneminin başlangıcından en geç <strong>30 gün önce</strong> açılması veya kiraya verenin bu süre içinde kiracıya yazılı bildirimde bulunmuş olması gerekir; aksi halde belirlenen bedel bir sonraki kira yılından itibaren uygulanır (TBK m. 345). Dava, taşınmazın bulunduğu yerdeki keşif ve bilirkişi incelemesiyle yürütülür. Ayrıntılar: <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link>.
                        </p>

                        {/* Kira Artışı */}
                        <h3 id="kira-artis-orani" className="scroll-mt-24">Kira Artış Oranı ve TÜFE Sınırı</h3>

                        <p>
                            Konut ve çatılı işyeri kiralarında taraflarca kararlaştırılan kira artış oranı, bir önceki kira yılında <strong>tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalara göre değişim oranını</strong> geçemez (TBK m. 344/1). Taraflar bir anlaşma yapmamışsa kira bedeli, bu oranı geçmemek koşuluyla hakim tarafından belirlenir. Konut kiralarında 11 Haziran 2022 ile 1 Temmuz 2024 arasında uygulanan geçici %25 artış sınırı sona ermiştir. Güncel oranı <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama</Link> aracımızla hesaplayabilirsiniz.
                        </p>

                        {/* Kira Uyarlama */}
                        <h2 id="kira-uyarlama-davasi" className="scroll-mt-24">Kira Uyarlama Davası</h2>

                        <p>
                            Sözleşmenin kurulduğu sırada taraflarca öngörülemeyen olağanüstü bir durum ortaya çıkar ve bu durum borçluya yüklenemeyecek bir sebeple sözleşmenin ifasını aşırı ölçüde güçleştirirse, kira bedelinin yeni koşullara uyarlanması istenebilir (TBK m. 138 – aşırı ifa güçlüğü). Uyarlama davası, özellikle kira bedelinin döviz cinsinden kararlaştırıldığı veya ekonomik dengenin ağır biçimde bozulduğu uzun süreli sözleşmelerde gündeme gelir. Kira tespit davasından farkı, beş yıllık süre şartına bağlı olmaması ve olağanüstü değişikliğin ispatını gerektirmesidir. Ayrıntılar: <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">kira uyarlama davası</Link>.
                        </p>

                        {/* Depozito */}
                        <h2 id="depozito-iadesi" className="scroll-mt-24">Depozito (Güvence Bedeli) İadesi</h2>

                        <p>
                            Konut ve çatılı işyeri kiralarında kiracıya güvence verme borcu yüklenmişse, güvence bedeli <strong>üç aylık kira bedelini aşamaz</strong>. Para olarak verilen güvencenin, kiraya verenin onayı olmadan çekilemeyecek şekilde bir bankada vadeli tasarruf hesabına yatırılması gerekir (TBK m. 342). Banka, kiracının rızası varsa veya kiraya veren, kira sözleşmesinin sona ermesinden itibaren üç ay içinde kiracı aleyhine dava açtığını ya da icra takibi yaptığını bildirmemişse güvenceyi kiracıya geri verir.
                        </p>

                        <p>
                            Uygulamada depozitonun elden verildiği ve iade edilmediği durumlarda kiracı, zorunlu arabuluculuk sonrasında alacak davası açabilir. Kiraya veren ise kiralananın olağan kullanım dışında hasar gördüğünü ispat ederek zararı mahsup etmek isteyebilir. Ayrıntılar: <Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">depozito iadesi davası</Link>.
                        </p>

                        {/* Ticari Kira */}
                        <h2 id="ticari-kira" className="scroll-mt-24">İşyeri (Çatılı İşyeri) Kira Uyuşmazlıkları</h2>

                        <p>
                            Dükkan, ofis ve mağaza gibi çatılı işyeri kiraları da konut kiralarına ilişkin koruyucu hükümlere tabidir (TBK m. 339 vd.). Bu nedenle TÜFE artış sınırı, tahliye sebepleri, kira tespit ve güvence bedeli kuralları işyeri kiralarında da uygulanır. Kiracı ile kiraya verenin tacir olduğu işyeri kiralarında sözleşmeye konulan cezai şart, muacceliyet ve kira artışına ilişkin bazı kayıtlar ayrıca değerlendirilmelidir. İşyeri devri, kira sözleşmesinin devri (TBK m. 323) ve alt kira konularında kiraya verenin yazılı rızası önem taşır. Ayrıntılar: <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/">işyeri kira sözleşmelerinde dikkat edilmesi gereken hususlar</Link>.
                        </p>

                        {/* Görevli Mahkeme */}
                        <h2 id="gorevli-mahkeme" className="scroll-mt-24">İzmir&apos;de Kira Davalarında Görevli ve Yetkili Mahkeme</h2>

                        <p>
                            Kira ilişkisinden doğan alacak davaları da dahil olmak üzere tüm kira uyuşmazlıklarında, dava değerine bakılmaksızın <strong>Sulh Hukuk Mahkemesi</strong> görevlidir (HMK m. 4/1-a). Yetkili mahkeme kural olarak davalının yerleşim yeri mahkemesidir (HMK m. 6); sözleşmeden doğan davalarda sözleşmenin ifa yeri mahkemesinde de dava açılabilir (HMK m. 10). İcra yoluyla tahliye takiplerinde itirazın kaldırılması ve tahliye talepleri ise İcra Hukuk Mahkemesinde incelenir.
                        </p>

                        {/* Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Kira Davalarında Avukatlık Ücreti Nasıl Belirlenir?</h2>

                        <p>
                            Avukatlık ücreti; davanın türü, dava değeri, işin gerektirdiği emek ve süre dikkate alınarak avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır (Avukatlık Kanunu m. 163-164). Kararlaştırılan ücret, Türkiye Barolar Birliği tarafından her yıl yayımlanan <strong>Avukatlık Asgari Ücret Tarifesi</strong>&apos;nin altında olamaz. İzmir Barosu da yerel uygulamaya yön veren tavsiye niteliğinde ücret tarifesi yayımlamaktadır.
                        </p>

                        <p>
                            Somut dosyanıza ilişkin ücret bilgisi, belgeler incelendikten sonra ön görüşmede verilir. Ayrıntılı açıklama için <Link href="/izmir-kira-avukati/izmir-kira-avukati-ucret/">kira avukatı ücreti</Link> sayfamıza bakabilir veya <Link href="/iletisim/">iletişim</Link> sayfamızdan ulaşabilirsiniz.
                        </p>


                        {/* Kiracı Tahliye Davası Avukat Ücretini Kim Öder? */}
                        <h3 id="tahliye-avukat-ucretini-kim-oder" className="scroll-mt-24">Kiracı Tahliye Davası Avukat Ücretini Kim Öder?</h3>

                        <p>
                            Kiracı tahliye davasında her taraf kendi avukatlık ücretini öder. Davayı açan ev sahibi kendi avukatının ücretini, kiracı da kendi avukatının ücretini karşılar. Ancak dava sonunda kaybeden taraf, karşı tarafın avukatı lehine mahkeme tarafından belirlenen vekalet ücretini ödemekle yükümlü tutulur.
                        </p>

                        <p>
                            Bu vekalet ücreti Avukatlık Asgari Ücret Tarifesi&apos;ne göre belirlenir ve tarafların avukatlarıyla anlaştıkları ücretten farklıdır. Örneğin ev sahibi tahliye davasını kazanırsa kiracı, mahkemenin hükmettiği karşı vekalet ücretini ev sahibinin avukatına ödemek zorunda kalır. Bunun yanı sıra mahkeme harçları ve yargılama giderleri de davayı kaybeden tarafa yüklenir.
                        </p>

                        {/* Kira Avukatı Seçerken */}
                        <h2 id="kira-avukati-secerken" className="scroll-mt-24">İzmir&apos;de Kira Avukatı Seçerken Nelere Dikkat Edilmeli?</h2>

                        <ul>
                            <li>Avukatın İzmir Barosu&apos;na kayıtlı olup olmadığını baro sicil numarasıyla kontrol edebilirsiniz.</li>
                            <li>Kira hukukunda süreler kısa olduğundan, sözleşme, ihtarname ve ödeme belgeleriyle erken aşamada görüşme yapılması önemlidir.</li>
                            <li>Ücretin, kapsamı belli bir yazılı ücret sözleşmesiyle kararlaştırılması tarafların haklarını korur.</li>
                            <li>Hiçbir avukat dava sonucunu garanti edemez; sonuç vaat eden yaklaşımlara karşı dikkatli olunmalıdır.</li>
                        </ul>


                        {/* İzmir Kira Avukatı Tutmak Zorunlu Mu? */}
                        <h2 id="kira-avukati-zorunlu-mu" className="scroll-mt-24">İzmir Kira Avukatı Tutmak Zorunlu Mu?</h2>

                        <p>
                            Türk hukukunda kira davaları için avukat tutma zorunluluğu bulunmamaktadır. Kiracı veya ev sahibi davayı bizzat kendisi de takip edebilir. Ancak kira hukuku, sürelere ve şekil şartlarına sıkı sıkıya bağlı bir alan olduğundan avukatsız açılan davalarda usul hatası yapma riski oldukça yüksektir.
                        </p>

                        <p>
                            Yanlış hesaplanan bir süre, eksik çekilen bir ihtarname veya hatalı hazırlanan bir dilekçe davanın reddine yol açabilir. Bu nedenle özellikle <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye davaları</Link> ve <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davaları</Link>nda sürecin başında hukuki destek alınması, hak kaybı riskini azaltır.
                        </p>

                        {/* İlçeler */}
                        <h2 id="ilceler" className="scroll-mt-24">İzmir&apos;de Hizmet Verilen İlçeler</h2>

                        <p>
                            Bayraklı&apos;daki ofisimizden İzmir&apos;in merkez ilçelerindeki kira uyuşmazlıklarında hizmet vermekteyiz. İlçeye özgü bilgiler için ilgili sayfaları inceleyebilirsiniz:
                        </p>

                        <ul className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-2 my-6">
                            {kiraDistricts.map((d) => (
                                <li key={d.slug}>
                                    <Link href={`/${d.slug}-kira-avukati/`} className="block px-3 py-2 rounded-lg border border-slate-200 text-sm text-primary hover:border-secondary hover:text-secondary transition-colors">
                                        {d.name} Kira Avukatı
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">İzmir Kira Avukatı – Sık Sorulan Sorular</h2>

                        {faqs.map((f) => (
                            <div key={f.question}>
                                <h3>{f.question}</h3>
                                <p>{f.answer}</p>
                            </div>
                        ))}

                        <p className="text-sm text-slate-500">Son güncelleme: 13 Ekim 2026</p>

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
                                        İzmir Barosu&apos;na kayıtlı avukat. 2019 yılından bu yana kira, iş, boşanma ve tazminat hukuku alanlarında hizmet vermektedir.
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

                        {/* Google Reviews */}
                        <div className="not-prose">
                            <GoogleReviews />
                        </div>

                        {/* İlgili Makaleler */}
                        <h2>Kira Hukuku Makaleleri</h2>

                        <ul>
                            <li><Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/">Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?</Link></li>
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

                        {/* Uzmanlık Alanları Alt Sayfalar */}
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
        </main>
    );
}
