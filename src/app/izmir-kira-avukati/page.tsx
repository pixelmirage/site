import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import dynamic from "next/dynamic";
const YouTubeShorts = dynamic(() => import("@/components/ui/YouTubeShorts").then(m => ({ default: m.YouTubeShorts })));
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { articleProseClasses } from "@/lib/prose-classes";


export const metadata: Metadata = {
    title: {
        absolute: "İzmir Kira Avukatı - Tahliye ve Kira Davaları | Av. Mert Kağan Çetin",
    },
    description: "İzmir kira avukatı Mert Kağan Çetin ile tahliye, kira tespit ve depozito iadesi davalarında uzman destek alın. 2026 güncel ücretler. Hemen arayın: 0544 585 46 45",
    keywords: ["İzmir kira avukatı", "kira avukatı izmir", "kira hukuku avukatı izmir", "izmir kira hukuku avukatı", "kira artırım avukatı izmir", "kiracı tahliye avukatı İzmir", "kira tespit davası", "tahliye davası İzmir", "izmir en iyi kira avukatı", "kira avukatı izmir yakınında", "kira hukuku avukatları izmir"],
    openGraph: {
        title: "İzmir Kira Avukatı - Tahliye ve Kira Davaları | Av. Mert Kağan Çetin",
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

const tocItems = [
    { id: "iletisim-bilgileri", title: "İletişim" },
    { id: "kira-hukuku-avukatlari", title: "Kira Hukuku Avukatları" },
    { id: "kira-davalari", title: "Kira Davaları" },
    { id: "kira-davalarina-bakan-avukat", title: "Kira Davalarına Bakan Avukat" },
    { id: "kiraci-nasil-cikarilir", title: "Kiracı Nasıl Çıkarılır?" },
    { id: "kiraci-tahliye-davasi-avukati", title: "Tahliye Davası Avukatı" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "tahliye-avukat-ucretini-kim-oder", title: "Ücreti Kim Öder?" },
    { id: "en-iyi-kira-avukati", title: "En İyi Kira Avukatı" },
{ id: "kira-avukati-zorunlu-mu", title: "Avukat Zorunlu Mu?" },
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
            <FAQSchema faqs={[
                {
                    question: "Kiracı nasıl çıkarılır?",
                    answer: "Kiracının tahliyesi için kanunda öngörülen sebeplerden birini ileri sürmek gerekir: 10 yıllık uzama süresinin dolması (TBK m. 347), ihtiyaç nedeniyle tahliye (TBK m. 350), tahliye taahhüdü (TBK m. 352/1), iki haklı ihtar (TBK m. 352/2), kiracının temerrüdü veya yükümlülüklerine aykırı davranması."
                },
                {
                    question: "Ev sahibi kiracı davalarında avukatlık ücreti ne kadar?",
                    answer: "2026 yılı güncel ücretleri: Tahliye taahhüdü ile tahliye 35.000-50.000 TL, ihtiyaç nedeniyle tahliye 45.000-70.000 TL, iki haklı ihtar tahliyesi 50.000-80.000 TL, kira tespit davası 40.000-60.000 TL, kira sözleşmesi hazırlama 5.000-15.000 TL aralığındadır."
                },
                {
                    question: "En iyi İzmir kira hukuku avukatı nasıl bulunur?",
                    answer: "Avukatın kira hukuku alanındaki deneyimine, dava geçmişine ve başarı oranına bakılmalıdır. İzmir Barosu'na kayıtlı avukatlar arasından kira hukuku konusunda uzmanlaşmış isimleri araştırabilir, iletişim becerisi ve ücret politikasını değerlendirebilirsiniz."
                },
                {
                    question: "İzmir kira avukatı tutmak zorunlu mu?",
                    answer: "Kira davaları için avukat tutma zorunluluğu bulunmamaktadır. Ancak kira hukuku sürelere ve şekil şartlarına sıkı sıkıya bağlı olduğundan, yanlış hesaplanan bir süre veya eksik çekilen bir ihtarname davanın reddine yol açabilir. Bu nedenle uzman bir kira avukatı ile çalışmanız önerilir."
                }
            ]} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "name": "Av. Mert Kağan Çetin - İzmir Kira Avukatı",
                    "description": "İzmir'de kira hukuku, tahliye davaları ve kira tespit davalarında uzman avukatlık hizmeti.",
                    "url": "https://mertkagancetin.com/izmir-kira-avukati/",
                    "telephone": "+905445854645",
                    "email": "mertkagancetin@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17",
                        "addressLocality": "Bayraklı",
                        "addressRegion": "İzmir",
                        "addressCountry": "TR"
                    },
                    "areaServed": {
                        "@type": "City",
                        "name": "İzmir"
                    },
                    "priceRange": "₺₺",
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    }
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
                            Bu sebeple kira hukuku konusunda deneyimli bir İzmir kira avukatı ile çalışmak hızlı sonuç almanızda büyük önem taşımaktadır. Kira hukukunu ilgilendiren sorunlarınıza ilişkin etkin bir kira avukatı hizmeti sunmaktayız.
                        </p>

                        {/* İletişim */}
                        <h2 id="iletisim-bilgileri" className="scroll-mt-24">İzmir Kira Avukatı İletişim</h2>

                        <p>
                            İzmir&apos;de kira hukuku konusunda uzmanlaşmış avukatlar, hem kiracıların hem de ev sahiplerinin karşılaşabileceği hukuki sorunların çözümünde yardımcı olmaktadır. <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/">Kira sözleşmelerinin</Link> hazırlanması, kiracı veya ev sahibi haklarının korunması, kira artışı uygulamaları, <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye işlemleri</Link> gibi konularda profesyonel destek almak isteyenler İzmir kira avukatına başvurabilir.
                        </p>

                        <p>
                            İzmir kira avukatları, müvekkillerine hukuki danışmanlık hizmeti sunarak kira hukuku konusunda doğru adımlar atmalarına yardımcı olurlar. Kiracıların veya ev sahiplerinin haklarını korumak için gerekli olan tüm prosedürleri takip ederek müvekkillerinin haklarını savunurlar.
                        </p>

                        <p>
                            Eğer siz de İzmir&apos;de kira hukuku konusunda uzman bir avukattan destek almak istiyorsanız, <strong>Av. Mert Kağan Çetin</strong> ile iletişime geçebilirsiniz.
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
                        <h2 id="kira-hukuku-avukatlari" className="scroll-mt-24">İzmir'de Kira Hukuku Avukatları</h2>

                        <p>
                            Kiraya ilişkin hususlar sıkı şekil şartlarına bağlanmıştır. Ev sahibi ve kiracı arasındaki anlaşmazlıkların yetkin bir kira avukatı tarafından takip edilmesi çok önemlidir. Kira hukuku avukatının yardımları sayesinde süreleri kaçırmazsınız. <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Tahliye işlemlerini</Link> ve davaları daha hızlı sonuçlandırır, böylece hak kaybına uğramanın önüne geçmiş olursunuz.
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

                        <p>
                            Profesyonel danışmanlık ve hukuki desteğe ihtiyaç duyduğunuzda, kira hukuku alanında uzmanlaşmış avukatlara başvurmanızda büyük yarar vardır.
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
                            Kira hukuku avukatı, müvekkillerden gelen kira kontratlarını revize eden ve düzenleyen, TBK hükümlerine göre kira hukukuna uygun çeşitli sözleşme ve protokolleri hazırlayan, kira hukuku kaynaklı <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye davaları</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davaları</Link> gibi her türlü kira ilişkisinden doğan uyuşmazlıklarla ilgilenen alanında uzman hukukçuya denir.
                        </p>

                        <p>
                            Kiraya verilen taşınmazın İzmir&apos;de bulunması durumunda kira hukuku avukatının İzmir&apos;den tutulması önerilir. Zira kira ile ilgili bir uyuşmazlık çıktığında erken, hızlı ve doğru müdahaleyi taşınmazın bulunduğu yerdeki avukat yapacaktır. Dava öncesi <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">zorunlu arabuluculuk</Link> sürecinde de yerel avukatla çalışmak önemli bir avantaj sağlar.
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
                            İzmir&apos;de kiracının tahliyesi davası açmak isteyen ev sahipleri için deneyimli bir kira avukatı ile çalışmak büyük önem taşır. Tahliye davaları TBK&apos;nın öngördüğü sıkı usul kurallarına tabi olduğundan sürelerin doğru hesaplanması ve ihtarnamelerin usulüne uygun çekilmesi gerekmektedir.
                        </p>

                        <p>
                            İzmir kira avukatı olarak <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye taahhütnamesi</Link>, <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/">ihtiyaç nedeniyle tahliye</Link>, <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">iki haklı ihtar</Link> ve 10 yıllık uzama süresinin dolması gibi tüm tahliye sebeplerine dayalı davalarda müvekkillerimize profesyonel hukuki destek sunmaktayız. Tahliye davasında hak kaybı yaşamamak için sürecin başından itibaren uzman bir avukatla hareket etmeniz önerilir.
                        </p>

                        {/* Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Ev Sahibi Kiracı Davalarında Avukatlık Ücreti Ne Kadar?</h2>

                        <p>
                            Tahliye davalarında genellikle İzmir avukatları olarak yıllık kira bedelinin belirli bir yüzdesi üzerinden ücretlendirme yapılmaktadır. Ancak çoğu avukatın bir taban fiyat uygulaması bulunmaktadır. 2026 yılı güncel ücret aralıklarımız:
                        </p>

                        <div className="not-prose my-6 grid gap-3">
                            {[
                                { title: <><Link href="/sozluk/tahliye-taahhutnamesi/" className="text-primary hover:text-secondary transition-colors underline underline-offset-2">Tahliye Taahhüdü</Link> ile Tahliye</>, sure: "3-6 ay", ucret: "35.000 - 50.000 TL" },
                                { title: "İhtiyaç Nedeniyle Tahliye", sure: "6 ay - 1.5 yıl", ucret: "45.000 - 70.000 TL" },
                                { title: "İki Haklı İhtar Tahliyesi", sure: "1 - 2 yıl", ucret: "50.000 - 80.000 TL" },
                                { title: <><Link href="/sozluk/kira-tespit-davasi/" className="text-primary hover:text-secondary transition-colors underline underline-offset-2">Kira Tespit Davası</Link></>, sure: "6 ay - 1 yıl", ucret: "40.000 - 60.000 TL" },
                                { title: "Kira Sözleşmesi Hazırlama", sure: "1-3 gün", ucret: "5.000 - 15.000 TL" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                                    <span className="font-bold text-primary text-sm sm:flex-1">{item.title}</span>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" />{item.sure}</span>
                                        <span className="text-slate-300">|</span>
                                        <span className="font-semibold text-slate-800">{item.ucret}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            Lütfen kira hukukunu ilgilendiren sorununuzla ilgili kesin fiyat bilgisi almak için kira hukuku avukatı ile <Link href="/iletisim/">iletişime geçiniz</Link>.
                        </p>

                        {/* Kiracı Tahliye Davası Avukat Ücretini Kim Öder? */}
                        <h3 id="tahliye-avukat-ucretini-kim-oder" className="scroll-mt-24">Kiracı Tahliye Davası Avukat Ücretini Kim Öder?</h3>

                        <p>
                            Kiracı tahliye davasında her taraf kendi avukatlık ücretini öder. Davayı açan ev sahibi kendi avukatının ücretini, kiracı da kendi avukatının ücretini karşılar. Ancak dava sonunda kaybeden taraf, karşı tarafın avukatı lehine mahkeme tarafından belirlenen vekalet ücretini ödemekle yükümlü tutulur.
                        </p>

                        <p>
                            Bu vekalet ücreti Avukatlık Asgari Ücret Tarifesi&apos;ne göre belirlenir ve tarafların avukatlarıyla anlaştıkları ücretten farklıdır. Örneğin ev sahibi tahliye davasını kazanırsa kiracı, mahkemenin hükmettiği karşı vekalet ücretini ev sahibinin avukatına ödemek zorunda kalır. Bunun yanı sıra mahkeme harçları ve yargılama giderleri de davayı kaybeden tarafa yüklenir.
                        </p>

                        {/* En İyi İzmir Kira Hukuku Avukatı Nasıl Bulunur? */}
                        <h2 id="en-iyi-kira-avukati" className="scroll-mt-24">En İyi İzmir Kira Hukuku Avukatı Nasıl Bulunur?</h2>

                        <p>
                            En iyi <strong>İzmir kira avukatı</strong>nı bulmak için öncelikle avukatın kira hukuku alanındaki deneyimine ve dava geçmişine bakmanız gerekir. İzmir Barosu&apos;na kayıtlı avukatlar arasından kira hukuku konusunda uzmanlaşmış isimleri araştırabilirsiniz.
                        </p>

                        <p>
                            Avukatın daha önce yürüttüğü <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye davaları</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davaları</Link> ve kira uyuşmazlıklarındaki başarı oranı önemli bir kriter olmalıdır. Ayrıca avukatın iletişim becerisi, müvekkile geri dönüş hızı ve ücret politikası da tercih sürecinde değerlendirilmesi gereken faktörlerdir. Ücretsiz ön görüşme imkanı sunan İzmir kira avukatlarıyla tanışarak kendinize en uygun avukatı belirleyebilirsiniz.
                        </p>

                        <h3>En İyi Kira Avukatı Hangisi?</h3>

                        <p>
                            En iyi kira avukatı; müvekkilin haklarını en etkili şekilde savunan, kira hukuku mevzuatını ve Yargıtay içtihatlarını yakından takip eden, dava süreçlerini zamanında ve eksiksiz yürüten avukattır. &quot;En iyi&quot; kavramı kişiden kişiye değişebilir; ancak avukatın alanında uzmanlaşmış olması, deneyim yılı ve müvekkil memnuniyeti en önemli göstergelerdir. İzmir&apos;de kira avukatı ararken mutlaka yüz yüze veya telefonla ön görüşme yapmanız ve davanızın değerlendirilmesini istemeniz tavsiye edilir.
                        </p>

                        {/* İzmir Kira Avukatı Tutmak Zorunlu Mu? */}
                        <h2 id="kira-avukati-zorunlu-mu" className="scroll-mt-24">İzmir Kira Avukatı Tutmak Zorunlu Mu?</h2>

                        <p>
                            Türk hukukunda kira davaları için avukat tutma zorunluluğu bulunmamaktadır. Kiracı veya ev sahibi davayı bizzat kendisi de takip edebilir. Ancak kira hukuku, sürelere ve şekil şartlarına sıkı sıkıya bağlı bir alan olduğundan avukatsız açılan davalarda usul hatası yapma riski oldukça yüksektir.
                        </p>

                        <p>
                            Yanlış hesaplanan bir süre, eksik çekilen bir ihtarname veya hatalı hazırlanan bir dilekçe davanın reddine yol açabilir. Bu nedenle özellikle <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye davaları</Link> ve <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davaları</Link>nda İzmir kira avukatı ile çalışmanız hak kaybını önlemek açısından büyük önem taşımaktadır.
                        </p>

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
                                    Kira davalarınız için hemen randevu alın.
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
                            <p className="text-xl font-playfair font-bold text-primary mb-6">Kira Hukuku Uzmanlık Alanlarımız</p>
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
                                    { title: "Kira Avukatı Ücretleri", desc: "2026 güncel avukatlık ücretleri ve danışmanlık", url: "/izmir-kira-avukati/izmir-kira-avukati-ucret/" },
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
