import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import { YouTubeShorts } from "@/components/ui/YouTubeShorts";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { articleProseClasses } from "@/lib/prose-classes";


export const metadata: Metadata = {
    title: {
        absolute: "İzmir Kira Avukatı - Uzman Hukuki Danışmanlık",
    },
    description: "İzmir kira avukatı arıyorsanız avukat Mert Kağan Çetin ile iletişime geçebilirsiniz. Kira sözleşmesi, tahliye davası, kira bedeli artışı, kira alacağı gibi konularda size yardımcı olabiliriz.",
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
    { id: "iletisim-bilgileri", title: "İletişim" },
    { id: "kira-avukatinin-onemi", title: "Kira Avukatının Önemi" },
    { id: "kira-davalari", title: "Kira Davaları" },
    { id: "kira-islerine-hangi-avukat-bakar", title: "Hangi Avukat Bakar?" },
    { id: "kiraci-nasil-cikarilir", title: "Kiracı Nasıl Çıkarılır?" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "sss", title: "SSS" },
];

export default function IzmirKiraAvukatiPage() {
    return (
        <main className="bg-white">
            {/* Schema Markup */}
            <VideoSchema
                name="İzmir'de Kira Avukatıyla Çalışmanın Önemi | Kısa Video"
                description="Kira davası sürecinde en sık yapılan hatalar ve uzman kira avukatının farkı. İzmir'de kira uyuşmazlıklarında profesyonel destek."
                thumbnailUrl="https://img.youtube.com/vi/JeM-o0sl9j8/maxresdefault.jpg"
                uploadDate="2026-03-13"
                contentUrl="https://www.youtube.com/shorts/JeM-o0sl9j8"
                embedUrl="https://www.youtube.com/embed/JeM-o0sl9j8"
            />

            <ServiceSchema
                name="Kira Hukuku Danışmanlığı"
                description="İzmir'de kira sözleşmesi, kiracı tahliye davası, kira tespit davası ve kira uyarlama davası hizmetleri."
                serviceType="Kira Hukuku"
            />
            <HowToSchema
                name="Kiracı Nasıl Tahliye Edilir?"
                description="İzmir'de kiracı tahliye süreci adım adım rehber."
                steps={[
                    { name: "Tahliye sebebini belirleyin", text: "TBK kapsamında geçerli bir tahliye sebebi (ihtiyaç, taahhütname, iki haklı ihtar, temerrüt, 10 yıl uzama) tespit edin." },
                    { name: "İhtarname veya bildirim gönderin", text: "Noter aracılığıyla kiracıya yazılı ihtarname veya fesih bildirimi gönderin." },
                    { name: "Zorunlu arabuluculuğa başvurun", text: "Dava öncesi zorunlu arabuluculuk sürecini başlatın ve arabuluculuk tutanağı alın." },
                    { name: "Tahliye davası açın veya icra takibi başlatın", text: "Arabuluculuk anlaşmazlıkla sonuçlanırsa sulh hukuk mahkemesinde tahliye davası açın. Tahliye taahhütnamesi varsa doğrudan icra takibi başlatın." },
                    { name: "Mahkeme kararını icra ettirin", text: "Mahkeme tahliye kararı verdikten sonra icra dairesi aracılığıyla tahliyeyi gerçekleştirin." },
                ]}
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
                            Bu sebeple kira hukuku konusunda deneyimli bir <strong>İzmir kira avukatı</strong> ile çalışmak hızlı sonuç almanızda büyük önem taşımaktadır. Kira hukukunu ilgilendiren sorunlarınıza ilişkin etkin bir <strong>kira avukatı</strong> hizmeti sunmaktayız.
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
                        <h2 id="kira-avukatinin-onemi" className="scroll-mt-24">İzmir Kira Avukatının Önemi</h2>

                        <p>
                            Kiraya ilişkin hususlar sıkı şekil şartlarına bağlanmıştır. Ev sahibi ve kiracı arasındaki anlaşmazlıkların yetkin bir <strong>kira avukatı</strong> tarafından takip edilmesi çok önemlidir. <strong>Kira hukuku avukatı</strong>nın yardımları sayesinde süreleri kaçırmazsınız. <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Tahliye işlemlerini</Link> ve davaları daha hızlı sonuçlandırır, böylece hak kaybına uğramanın önüne geçmiş olursunuz.
                        </p>

                        <p>
                            İzmir&apos;de kira hukukuyla ilgili bir sorun yaşıyorsanız bir <strong>kira hukuku avukatı</strong> arayışı içerisinde olabilirsiniz. Kira hukuku avukatları, ev sahibi ve kiracı arasındaki ilişkileri düzenlerler. Yasal düzenlemeleri bilirler ve bu konuda danışmanlık yapabilirler.
                        </p>

                        <p>
                            <strong>İzmir kira avukatları</strong>, <Link href="/kira-sozlesmesi-ornegi/">kira sözleşmesi hazırlama</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira artışı</Link> ve kiracı tahliyesi gibi konularda müvekkillerine yardımcı olurlar. Kira artış oranınızı öğrenmek için <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama</Link> aracımızı kullanabilirsiniz. Ayrıca <strong>İzmir kira hukuku avukatları</strong>, kiracıların haklarını ve ev sahiplerinin haklarını savunmak için gerektiğinde mahkemede dava açabilirler.
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
                            <strong>İzmir kira avukatı</strong> olarak kira hukukuyla ilgili aşağıdaki davalarda hizmet vermekteyiz:
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
                        <h2 id="kira-islerine-hangi-avukat-bakar" className="scroll-mt-24">Kira İşlerine Hangi Avukat Bakar?</h2>

                        <p>
                            <strong>Kira hukuku avukatı</strong>, müvekkillerden gelen kira kontratlarını revize eden ve düzenleyen, TBK hükümlerine göre kira hukukuna uygun çeşitli sözleşme ve protokolleri hazırlayan, kira hukuku kaynaklı <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">tahliye davaları</Link>, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davaları</Link> gibi her türlü kira ilişkisinden doğan uyuşmazlıklarla ilgilenen alanında uzman hukukçuya denir.
                        </p>

                        <p>
                            Kiraya verilen taşınmazın İzmir&apos;de bulunması durumunda <strong>kira hukuku avukatı</strong>nın İzmir&apos;den tutulması önerilir. Zira kira ile ilgili bir uyuşmazlık çıktığında erken, hızlı ve doğru müdahaleyi taşınmazın bulunduğu yerdeki avukat yapacaktır. Dava öncesi <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">zorunlu arabuluculuk</Link> sürecinde de yerel avukatla çalışmak önemli bir avantaj sağlar.
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
                        <figure className="not-prose my-10">
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

                        {/* Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Ev Sahibi Kiracı Davalarında Avukatlık Ücreti</h2>

                        <p>
                            Tahliye davalarında genellikle İzmir avukatları olarak yıllık kira bedelinin belirli bir yüzdesi üzerinden ücretlendirme yapılmaktadır. Ancak çoğu avukatın bir taban fiyat uygulaması bulunmaktadır. 2026 yılı güncel ücret aralıklarımız:
                        </p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Dava Türü</th>
                                    <th>Süre (Ortalama)</th>
                                    <th>Ücret Aralığı</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link href="/sozluk/tahliye-taahhutnamesi/">Tahliye Taahhüdü</Link> ile Tahliye</td>
                                    <td>3-6 ay</td>
                                    <td>35.000 - 50.000 TL</td>
                                </tr>
                                <tr>
                                    <td>İhtiyaç Nedeniyle Tahliye</td>
                                    <td>6 ay - 1.5 yıl</td>
                                    <td>45.000 - 70.000 TL</td>
                                </tr>
                                <tr>
                                    <td>İki Haklı İhtar Tahliyesi</td>
                                    <td>1 - 2 yıl</td>
                                    <td>50.000 - 80.000 TL</td>
                                </tr>
                                <tr>
                                    <td><Link href="/sozluk/kira-tespit-davasi/">Kira Tespit Davası</Link></td>
                                    <td>6 ay - 1 yıl</td>
                                    <td>40.000 - 60.000 TL</td>
                                </tr>
                                <tr>
                                    <td>Kira Sözleşmesi Hazırlama</td>
                                    <td>1-3 gün</td>
                                    <td>5.000 - 15.000 TL</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            Lütfen kira hukukunu ilgilendiren sorununuzla ilgili kesin fiyat bilgisi almak için <strong>kira hukuku avukatı</strong> ile <Link href="/iletisim/">iletişime geçiniz</Link>.
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

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

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
                        </ul>

                        <p>
                            Kira hukukunu ilgilendiren her türlü sorununuza ilişkin hukuki danışmanlık almak için <strong>İzmir kira avukatı</strong> ile <Link href="/iletisim/">iletişime geçebilirsiniz</Link>.
                        </p>

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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Kiracı Tahliye Davası", desc: "Tüm tahliye sebepleri ve dava süreçleri", url: "/izmir-kira-avukati/kiraci-tahliye-davasi/" },
                                    { title: "Kira Tespit Davası", desc: "Kira bedelinin rayice göre tespiti", url: "/izmir-kira-avukati/kira-tespit-davasi/" },
                                    { title: "Kira Uyarlama Davası", desc: "Kira bedelinin uyarlanması davası", url: "/izmir-kira-avukati/kira-uyarlama-davasi/" },
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
