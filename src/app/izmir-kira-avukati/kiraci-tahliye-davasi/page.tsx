import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { articleProseClasses } from "@/lib/prose-classes";

export const metadata: Metadata = {
    title: "Tahliye Davaları İzmir | Kiracı Tahliye Avukatı",
    description: "İzmir'de tahliye davaları avukatı Av. Mert Kağan Çetin. İhtiyaç, taahhütname, iki haklı ihtar, 10 yıllık süre ve temerrüt nedeniyle tahliye davalarında avukatlık desteği.",
    openGraph: {
        images: ["/og-image.jpg"],
        title: "Tahliye Davaları İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de tüm tahliye davası türlerinde avukatlık hizmeti. İhtiyaç, taahhütname, iki haklı ihtar ve süre sonu tahliye.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/kiraci-tahliye-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-10-13" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/kiraci-tahliye-davasi/" },
};

const faqs = [
    {
        question: "Kiracı tahliye davası ne kadar sürer?",
        answer: "İzmir'de kiracı tahliye davası süresi tahliye sebebine göre değişir. Tahliye taahhütnamesi ile icra yoluyla tahliye 1-3 ay içinde sonuçlanabilir. İhtiyaç nedeniyle tahliye davası 6-12 ay, iki haklı ihtar ile tahliye 6-18 ay sürebilir. 10 yıllık uzama süresi dolan kiracının tahliyesi de benzer sürelerde tamamlanır. İzmir Adliyesi (Bayraklı)'ndeki iş yükü süreyi doğrudan etkiler."
    },
    {
        question: "Kiracıyı avukatsız tahliye edebilir miyim?",
        answer: "Hukuken avukat tutma zorunluluğu yoktur. Ancak tahliye davalarında usul hataları davanın reddine yol açar. Yanlış tahliye sebebi seçmek, ihtar süresini kaçırmak veya eksik delil sunmak sık yapılan hatalardır. Özellikle çekişmeli tahliye davalarında avukat desteği sonucu doğrudan etkiler. Reddedilen bir dava yeniden açılamayacağından ilk seferde doğru hareket etmek kritiktir."
    },
    {
        question: "Tahliye davası masrafı ne kadar?",
        answer: "Avukatlık ücreti; davanın türü, dava değeri ve işin gerektirdiği emek dikkate alınarak avukat ile müvekkil arasında yazılı olarak kararlaştırılır ve Türkiye Barolar Birliği Avukatlık Asgari Ücret Tarifesi'nin altında olamaz (Avukatlık Kanunu m. 163-164). Buna ek olarak mahkeme harcı, tebligat, bilirkişi ve keşif giderleri gibi yargılama giderleri söz konusudur; davada haklı çıkan taraf bu giderleri ve tarifeye göre belirlenen karşı vekalet ücretini karşı taraftan talep edebilir."
    },
    {
        question: "Kiracı evden çıkmıyorsa ne yapmalıyım?",
        answer: "Kiracı tahliye kararına rağmen evden çıkmıyorsa icra müdürlüğüne başvurarak zorla tahliye işlemi başlatılır. Kendi başınıza kiracıyı çıkarmaya çalışmak suç teşkil eder. Mahkeme kararı olmadan kiracının eşyalarını dışarı çıkarmak, kilitleri değiştirmek veya su-elektriği kesmek hukuka aykırıdır ve tazminat sorumluluğu doğurur."
    },
    {
        question: "Hangi sebeplerle kiracı tahliye edilebilir?",
        answer: "Türk Borçlar Kanunu'na göre kiracı şu sebeplerle tahliye edilebilir: İhtiyaç nedeniyle tahliye (TBK m. 350), tahliye taahhütnamesi (TBK m. 352/1), iki haklı ihtar (TBK m. 352/2), 10 yıllık uzama süresinin dolması (TBK m. 347), yeni malikin ihtiyacı (TBK m. 351), kiracının sözleşmeye aykırı davranışı ve kira bedelini ödememe. Her sebebin kendine özgü şartları ve süreleri vardır."
    }
];

const tocItems = [
    { id: "tahliye-turleri", title: "Tahliye Davası Türleri" },
    { id: "surecimiz", title: "İzmir'de Tahliye Davası Sürecimiz" },
    { id: "neden-avukat", title: "Neden Avukat Gerekli?" },
    { id: "ucretler", title: "Süreler ve Ücret" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KiraciTahliyeDavasiPage() {
    return (
        <div className="bg-white">
            <ServiceSchema name="Kiracı Tahliye Davası" description="İzmir'de ihtiyaç, taahhütname ve iki haklı ihtar ile kiracı tahliye davası hizmeti." serviceType="Kiracı Tahliye Davası" />
            <PersonSchema knowsAbout={["Kiracı Tahliye Davası", "Tahliye Taahhütnamesi", "İhtiyaç Nedeniyle Tahliye", "İki Haklı İhtar", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Kiracı Tahliye Davası", url: "https://mertkagancetin.com/izmir-kira-avukati/kiraci-tahliye-davasi/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-kira-avukati/" className="hover:text-white transition-colors">İzmir Kira Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Kiracı Tahliye Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kiracı Tahliye Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İhtiyaç nedeniyle tahliye, taahhütname ile tahliye, iki haklı ihtar ve 10 yıllık kiracı tahliyesi davalarında
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile görüşebilirsiniz.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim/"><Phone className="w-5 h-5" />İletişime Geçin</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2" asChild>
                                <a href="tel:+905445854645">0544 585 46 45</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOC */}
            <section className="py-8 bg-slate-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">İçindekiler</p>
                        <nav className="flex flex-wrap gap-3">
                            {tocItems.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="text-sm text-primary hover:text-secondary font-medium transition-colors">{item.title}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* Article */}
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-4xl mx-auto ${articleProseClasses}`}>

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir kiracı tahliye davası avukatı</strong> olarak kiracının tahliyesini gerektiren tüm hukuki sebeplerde müvekkillerimizi temsil ediyoruz. İhtiyaç nedeniyle tahliye, <Link href="/sozluk/tahliye-taahhutnamesi/">tahliye taahhütnamesi</Link> ile tahliye, iki haklı ihtar ve 10 yıllık uzama süresinin dolması gibi her tahliye türünde hukuki destek vermektediruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kiracı tahliye davaları, Türk Borçlar Kanunu&apos;nun 350-356. maddeleri kapsamında düzenlenir ve her tahliye sebebinin kendine özgü usul kuralları vardır. Yanlış tahliye sebebi seçmek, süreleri kaçırmak veya eksik delil sunmak davanın reddine neden olur. <strong>Kiracı tahliye davası avukatı</strong> olarak İzmir Adliyesi (Bayraklı)&apos;ndeki tüm kira davalarını yakından takip ediyoruz.
                        </p>

                        <h2 id="tahliye-turleri" className="scroll-mt-24">Kiracı Tahliye Davası Türleri</h2>

                        <p>
                            İzmir&apos;de en sık karşılaştığımız tahliye davası türlerini ve her birinde sunduğumuz hizmeti aşağıda özetliyoruz:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Tahliye Sebebi</th>
                                        <th className="px-6 py-4 text-left">Yasal Dayanak ve Hizmetimiz</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "İhtiyaç Nedeniyle Tahliye", desc: "TBK m. 350-351: Ev sahibinin veya yakınının gerçek ihtiyacı ispat edilir. İhtarname hazırlanması, ihtiyacın belgelenmesi ve dava sürecini yönetiyoruz." },
                                        { title: "Tahliye Taahhütnamesi", desc: "TBK m. 352/1: Kiracının imzaladığı tahliye taahhütnamesine dayanarak icra takibi veya dava yoluyla tahliye sağlıyoruz." },
                                        { title: "İki Haklı İhtar", desc: "TBK m. 352/2: Bir kira yılı içinde iki kez kira bedelini ödemeyen kiracıya ihtarname çekerek tahliye davası açıyoruz." },
                                        { title: "10 Yıllık Uzama Süresi", desc: "TBK m. 347: 10 yıllık uzama süresi dolan kiracının tahliyesi için sürelere uygun bildirim ve dava sürecini yürütüyoruz." },
                                        { title: "Yeni Malik Tahliyesi", desc: "TBK m. 351: Taşınmazı satın alan yeni malik, edinme tarihinden itibaren 1 ay içinde ihtarname çekerek 6 ay sonra tahliye davası açabilir." },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.title}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <figure className="not-prose my-10">
                            <Image
                                src="/images/infographics/tahliye-sebepleri-ve-dayanaklari.webp"
                                alt="Kiracı tahliye sebepleri ve hukuki dayanakları infografiği: kiraya verenin gereksinimi TBK m. 350, kiracının kusuru TBK m. 352 ve süre sonu TBK m. 347"
                                width={768}
                                height={1024}
                                className="w-full max-w-md mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Kiracı tahliye sebepleri ve hukuki dayanakları</figcaption>
                        </figure>

                        <p>
                            Her tahliye sebebi hakkında detaylı bilgi için rehberlerimizi inceleyin: <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/">İhtiyaç nedeniyle tahliye rehberi</Link>, <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">İki haklı ihtar rehberi</Link> ve <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/">Ev sahibi hakları rehberi</Link>.
                        </p>

                        <h2 id="surecimiz" className="scroll-mt-24">İzmir&apos;de Tahliye Davası Sürecimiz</h2>

                        <p>
                            <strong>Kiracı tahliye davası avukatı</strong> olarak dava sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Dosya İnceleme ve Strateji Belirleme", desc: "Kira sözleşmesi, tahliye taahhütnamesi, ihtarnameler ve ödeme kayıtlarını inceliyoruz. En uygun tahliye sebebini ve stratejiyi belirliyoruz." },
                                { step: "2", title: "İhtarname Hazırlama ve Tebliğ", desc: "Tahliye sebebine uygun noter ihtarnamesini hazırlıyor ve usulüne uygun tebliğ ettiriyoruz. Sürelerin doğru hesaplanması kritiktir." },
                                { step: "3", title: "Dava Dilekçesi ve Delil Sunumu", desc: "İzmir Adliyesi (Bayraklı) nezdinde tahliye davası açıyor, tüm delilleri eksiksiz sunuyoruz. Gerektiğinde ihtiyati tedbir talep ediyoruz." },
                                { step: "4", title: "Duruşma Takibi ve Savunma", desc: "Tüm duruşmalara katılıyor, tanık dinletme ve bilirkişi raporlarını takip ediyoruz. Karşı tarafın itirazlarına etkin yanıt veriyoruz." },
                                { step: "5", title: "Karar ve İcra Takibi", desc: "Tahliye kararını aldıktan sonra kiracı tahliye etmezse icra müdürlüğü aracılığıyla zorla tahliye işlemini başlatıyoruz." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-xl border-l-4 border-secondary">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-secondary font-bold">{item.step}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary mb-1">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <figure className="not-prose my-10">
                            <Image
                                src="/images/infographics/tahliye-davasi-sureci.webp"
                                alt="Kiracı tahliye davası süreci akış şeması: ihtarname gönderimi, zorunlu arabuluculuk, Sulh Hukuk Mahkemesi davası, duruşma ve mahkeme kararı aşamaları"
                                width={768}
                                height={1024}
                                className="w-full max-w-md mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Kiracı tahliye davası süreci akış şeması</figcaption>
                        </figure>

                        <h2 id="neden-avukat" className="scroll-mt-24">Tahliye Davasında Neden Avukat Gerekli?</h2>

                        <p>
                            Tahliye davaları usul açısından en riskli kira davalarıdır. Avukatsız açılan tahliye davalarında sık karşılaşılan sorunlar:
                        </p>

                        <ul>
                            <li><strong>Yanlış tahliye sebebi seçimi:</strong> Her sebebin farklı şartları ve süreleri vardır. Yanlış sebep dava reddine yol açar</li>
                            <li><strong>İhtarname hataları:</strong> Eksik veya usulsüz ihtarname tüm süreyi baştan başlatır</li>
                            <li><strong>Süre hesaplama hataları:</strong> Her tahliye sebebinde dava açma süreleri farklıdır ve hak düşürücüdür</li>
                            <li><strong>Delil yetersizliği:</strong> İhtiyaç iddiasını destekleyecek belgelerin sunulmaması davanın kaybedilmesine neden olur</li>
                            <li><strong>İcra takibinde hatalar:</strong> Tahliye kararı alınsa bile icra sürecindeki hatalar tahliyeyi geciktirir</li>
                        </ul>

                        <p>
                            <strong>Kiracı tahliye davası avukatı</strong> olarak bu riskleri azaltmak için süreleri ve şekil şartlarını baştan planlıyoruz. <Link href="/izmir-kira-avukati/">Kira hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alın.
                        </p>

                        <SectionCTA text="Kiracı tahliye davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">Ortalama Süreler ve Avukatlık Ücreti</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">Tahliye Türü</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Taahhütname ile İcra Takibi</td><td className="px-4 py-3">1-3 ay</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">İhtiyaç Nedeniyle Tahliye</td><td className="px-4 py-3">6-12 ay</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">İki Haklı İhtar ile Tahliye</td><td className="px-4 py-3">6-18 ay</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">10 Yıllık Süre Dolması</td><td className="px-4 py-3">6-12 ay</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Süreler ortalama değerler olup mahkemenin iş yüküne ve dosyanın özelliklerine göre değişebilir. Avukatlık ücreti; işin niteliği, dava değeri ve gerektirdiği emek dikkate alınarak yazılı ücret sözleşmesiyle kararlaştırılır ve Avukatlık Asgari Ücret Tarifesi&apos;nin altında olamaz (Av. K. m. 163-164). Ayrıntılar için <Link href="/izmir-kira-avukati/izmir-kira-avukati-ucret/">kira avukatı ücreti nasıl belirlenir</Link> sayfamıza bakabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kiracı Tahliye Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kiracı Tahliye Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kiracı tahliye davaları, kira tespit davaları ve kira uyuşmazlıklarında hukuki destek vermektedir. İzmir Adliyesi (Bayraklı) yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
                                    </p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                                        <span><strong className="text-slate-700">İzmir Barosu Sicil:</strong> 15556</span>
                                        <span><strong className="text-slate-700">TBB Sicil:</strong> 162439</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* İlgili İçerikler */}
                        <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                            <p className="font-bold text-primary text-xl mb-4">İlgili İçerikler</p>
                            <div className="space-y-3">
                                <Link href="/izmir-kira-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    ← Kira davaları rehberi
                                </Link>
                                <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?
                                </Link>
                                <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İki Haklı İhtar ile Kiracı Tahliyesi Rehberi
                                </Link>
                                <Link href="/tahliye-taahhutnamesi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Tahliye Taahhütnamesi Örneği
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Tespit Davası Avukatı
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Uyarlama Davası Avukatı
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kiracı Tahliye Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Tahliye süreciniz için randevu oluşturabilirsiniz.
                                    <strong className="text-white"> Kiracı tahliye davası avukatı</strong> olarak size yardımcı olmaya hazırız.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="flex items-center gap-3"><Phone className="w-6 h-6 text-secondary" /><div><p className="text-sm text-slate-400">Telefon</p><a href="tel:+905445854645" className="font-bold hover:text-secondary transition-colors">0544 585 46 45</a></div></div>
                                    <div className="flex items-center gap-3"><Mail className="w-6 h-6 text-secondary" /><div><p className="text-sm text-slate-400">E-posta</p><a href="mailto:mertkagancetin@gmail.com" className="font-bold hover:text-secondary transition-colors">mertkagancetin@gmail.com</a></div></div>
                                    <div className="flex items-center gap-3"><MapPin className="w-6 h-6 text-secondary" /><div><p className="text-sm text-slate-400">Adres</p><span className="font-bold">Bayraklı, İzmir</span></div></div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                        <Link href="/iletisim/">Randevu Alın <ArrowRight className="w-5 h-5" /></Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-primary gap-2" asChild>
                                        <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">WhatsApp ile Yazın</a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
}
