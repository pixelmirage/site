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
    title: "İhtiyaç Nedeniyle Tahliye Davası İzmir",
    description: "İzmir'de ihtiyaç nedeniyle kiracı tahliye davası. TBK m. 350 kapsamında ev sahibinin konut veya işyeri ihtiyacı nedeniyle tahliye süreçleri ve dava şartları.",
    keywords: ["ihtiyaç nedeniyle tahliye İzmir", "ihtiyaç nedeniyle tahliye davası", "TBK 350 tahliye", "ev sahibi ihtiyaç tahliye", "ihtiyaç tahliye avukatı İzmir"],
    openGraph: {
        title: "İhtiyaç Nedeniyle Tahliye Davası İzmir | Av. Mert Kağan Çetin",
        description: "TBK m. 350 kapsamında ev sahibinin konut veya işyeri ihtiyacı nedeniyle kiracı tahliye davası hizmeti.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" },
};

const faqs = [
    {
        question: "İhtiyaç nedeniyle tahliye davası ne kadar sürer?",
        answer: "İzmir'de ihtiyaç nedeniyle tahliye davası ortalama 6-12 ay sürmektedir. Süre, mahkemenin iş yüküne, delil durumuna ve kiracının savunmasına göre değişir. Bayraklı Adliyesi Sulh Hukuk Mahkemeleri'ndeki yoğunluk da süreyi etkileyen faktörlerdendir. Tahliye kararı kesinleştikten sonra kiracı tahliye etmezse icra yoluyla zorla tahliye 1-2 ay daha sürebilir."
    },
    {
        question: "İhtiyacın ispatı nasıl yapılır?",
        answer: "İhtiyaç nedeniyle tahliye davasında ihtiyacın gerçek, samimi ve zorunlu olduğunun ispatı gerekir. Kiraya verenin başka bir konutunun olmadığı tapu kayıtlarıyla, ihtiyaç sahibinin mevcut yaşam koşulları tanık beyanlarıyla, sağlık durumu raporlarla ispat edilebilir. Mahkeme ihtiyacın gerçekliğini somut delillerle değerlendirir. Soyut ve genel ifadeler yeterli görülmez."
    },
    {
        question: "Yeni malik kiracıyı ne zaman çıkarabilir?",
        answer: "TBK madde 351'e göre taşınmazı satın alan yeni malik, edinme tarihinden itibaren 1 ay içinde kiracıya yazılı ihtarname göndermek zorundadır. Bu ihtarnameden sonra 6 ay geçtikten sonra veya kira süresinin sonunda (hangisi daha sonra ise) tahliye davası açabilir. 1 aylık ihtarname süresi kaçırılırsa yeni malik bu haktan yararlanamaz."
    },
    {
        question: "İhtiyaç nedeniyle tahliyede 3 yıl yasağı nedir?",
        answer: "TBK madde 355'e göre ihtiyaç nedeniyle tahliye edilen taşınmaz, haklı sebep olmaksızın 3 yıl süreyle eski kiracıdan başkasına kiralanamaz. Bu yasağa aykırı davranılması halinde kiraya veren, eski kiracıya son kira yılında ödenen bir yıllık kira bedelinden az olmamak üzere tazminat ödemekle yükümlüdür. Bu kural, ihtiyaç iddiasının kötüye kullanılmasını önlemeyi amaçlar."
    },
    {
        question: "İhtiyaç nedeniyle tahliye davası ücreti ne kadar?",
        answer: "2026 yılında İzmir'de ihtiyaç nedeniyle tahliye davası avukatlık ücreti 35.000-60.000 TL arasında değişmektedir. Buna ek olarak mahkeme harçları, tebligat masrafları ve bilirkişi ücreti gibi yargılama giderleri de söz konusudur. Kesin ücret davanın karmaşıklığına ve taşınmazın değerine göre ilk görüşmede belirlenir."
    }
];

const tocItems = [
    { id: "ihtiyac-tahliye-nedir", title: "İhtiyaç Nedeniyle Tahliye Nedir?" },
    { id: "tahliye-sartlari", title: "Tahliye Şartları" },
    { id: "tahliye-sureci", title: "Tahliye Süreci" },
    { id: "yeni-malik", title: "Yeni Malik İhtiyacı" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function IhtiyacNedeniyleTahliyePage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="İhtiyaç Nedeniyle Tahliye Davası" description="İzmir'de ev sahibinin konut veya işyeri ihtiyacı nedeniyle kiracı tahliye davası hizmeti." serviceType="İhtiyaç Nedeniyle Tahliye Davası" />
            <PersonSchema knowsAbout={["İhtiyaç Nedeniyle Tahliye", "TBK Madde 350", "Kiracı Tahliyesi", "Konut İhtiyacı", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "İhtiyaç Nedeniyle Tahliye", url: "https://mertkagancetin.com/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" }
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
                        <span className="text-secondary">İhtiyaç Nedeniyle Tahliye</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İhtiyaç Nedeniyle Tahliye Davası İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            TBK m. 350 kapsamında ev sahibinin konut veya işyeri ihtiyacı nedeniyle kiracı tahliye davası süreçlerinde uzman avukat desteği.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim/"><Phone className="w-5 h-5" />Hemen Arayın</Link>
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
                            <strong>İhtiyaç nedeniyle tahliye davası</strong>, kiraya verenin kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu kişilerin konut veya işyeri ihtiyacı sebebiyle kiracının tahliyesini talep ettiği dava türüdür. TBK madde 350 kapsamında düzenlenen bu dava, İzmir&apos;de en sık açılan tahliye davası türlerinden biridir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            İhtiyaç nedeniyle tahliye, kiracıyı koruyan TBK hükümleri kapsamında kiraya verene tanınan sınırlı tahliye sebeplerinden biridir. Ancak bu hakkın kullanılabilmesi için ihtiyacın gerçek, samimi ve zorunlu olması gerekir. Mahkemeler, soyut ihtiyaç iddialarını kabul etmez ve somut delil arar. <strong>İhtiyaç nedeniyle tahliye avukatı</strong> olarak İzmir&apos;de müvekkillerimizin ihtiyaçlarını doğru şekilde belgeleyerek en etkili hukuki stratejiyi oluşturuyoruz.
                        </p>

                        <h2 id="ihtiyac-tahliye-nedir" className="scroll-mt-24">İhtiyaç Nedeniyle Tahliye Nedir?</h2>

                        <p>
                            İhtiyaç nedeniyle tahliye, Türk Borçlar Kanunu madde 350&apos;de düzenlenen bir tahliye sebebidir. Bu maddeye göre kiraya veren; kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut ya da işyeri gereksinimi sebebiyle kiralananın tahliyesini talep edebilir. Bu hak yalnızca sayılan kişilerin ihtiyacı için kullanılabilir; kardeş, yeğen veya arkadaş gibi kişilerin ihtiyacı bu madde kapsamında değildir.
                        </p>

                        <p>
                            İhtiyaç nedeniyle tahliye davası açılabilmesi için ihtiyacın dava tarihinde mevcut ve devam ediyor olması gerekir. Gelecekte oluşması muhtemel ihtiyaçlar veya geçmişte var olup ortadan kalkmış ihtiyaçlar dava sebebi oluşturmaz. Yargıtay kararlarına göre ihtiyacın gerçek, samimi ve zorunlu olması şarttır. Kiraya verenin aynı bölgede boş başka bir konutunun bulunması, ihtiyacın samimiyetini zayıflatan bir etken olarak değerlendirilir.
                        </p>

                        <p>
                            TBK madde 350 ayrıca taşınmazın yeniden inşası veya imarı amacıyla da tahliye imkanı tanımaktadır. Taşınmazın esaslı onarımı, genişletilmesi veya değiştirilmesi için tahliye gerekiyorsa ve bu işler sırasında taşınmaz kullanılamayacak durumdaysa, kiraya veren bu sebeple de tahliye davası açabilir. Ancak bu durumda da ihtiyacın somut delillerle ispatı zorunludur.
                        </p>

                        <h2 id="tahliye-sartlari" className="scroll-mt-24">İhtiyaç Nedeniyle Tahliye Şartları</h2>

                        <p>
                            İhtiyaç nedeniyle tahliye davasının kabul edilmesi için belirli şartların bir arada bulunması gerekir. Bu şartlardan herhangi birinin eksikliği davanın reddine yol açar. Mahkemeler bu şartları titizlikle incelemektedir.
                        </p>

                        <ul>
                            <li><strong>Gerçek ve samimi ihtiyaç:</strong> İhtiyacın soyut bir iddia değil, somut delillerle desteklenen gerçek bir gereksinim olması gerekir. Kiraya verenin aynı bölgede boş taşınmazının bulunmaması ihtiyacın samimiyetini güçlendirir</li>
                            <li><strong>Zorunlu ihtiyaç:</strong> İhtiyacın zorunluluk düzeyinde olması aranır. Lüks veya konfor amaçlı talepler kabul edilmez. Örneğin, kiraya verenin mevcut konutunun yetersiz kalması, sağlık sorunları nedeniyle farklı bir konuta ihtiyaç duyması zorunlu ihtiyaç olarak değerlendirilir</li>
                            <li><strong>İhtiyaç sahibinin TBK&apos;da sayılan kişilerden olması:</strong> Kendisi, eşi, altsoyu (çocuk, torun), üstsoyu (anne, baba, büyükanne/büyükbaba) veya kanun gereği bakmakla yükümlü olduğu kişiler</li>
                            <li><strong>Dava açma süresine uyulması:</strong> Belirli süreli sözleşmelerde süre bitiminden itibaren 1 ay içinde dava açılmalıdır. Belirsiz süreli sözleşmelerde ise fesih dönemi ve fesih bildirim süresine uyularak dava açılır</li>
                            <li><strong>İhtarname gönderilmesi:</strong> Dava açmadan önce kiracıya ihtarname gönderilmesi zorunlu değildir ancak uygulamada ispat kolaylığı açısından önemlidir</li>
                        </ul>

                        <p>
                            TBK madde 355 uyarınca ihtiyaç nedeniyle tahliye edilen taşınmaz, haklı sebep olmaksızın 3 yıl süreyle eski kiracıdan başkasına kiralanamaz. Bu yasağa aykırı davranılması halinde kiraya veren, eski kiracıya son kira yılında ödenen bir yıllık kira bedelinden az olmamak üzere tazminat ödemekle yükümlüdür. Bu düzenleme, ihtiyaç iddiasının kötüye kullanılmasını engellemek amacıyla getirilmiştir.
                        </p>

                        <h2 id="tahliye-sureci" className="scroll-mt-24">İhtiyaç Nedeniyle Tahliye Süreci</h2>

                        <p>
                            İhtiyaç nedeniyle tahliye davası belirli aşamalardan oluşan bir süreçtir. Her aşamada yasal sürelere uyulması ve doğru strateji izlenmesi davanın sonucunu doğrudan etkiler. Detaylı bilgi için <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/">ihtiyaç nedeniyle tahliye davası nasıl açılır</Link> rehberimizi inceleyebilirsiniz.
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "İhtiyacın Değerlendirilmesi ve Belgelenmesi", desc: "İhtiyacın gerçek, samimi ve zorunlu olup olmadığı değerlendirilir. Tapu kayıtları, ikametgah belgeleri, sağlık raporları ve tanık listesi gibi deliller hazırlanır. Kiraya verenin başka boş taşınmazı olup olmadığı araştırılır." },
                                { step: "2", title: "İhtarname Hazırlama ve Gönderme", desc: "Kiracıya noter aracılığıyla ihtarname gönderilir. İhtarnamede ihtiyaç sebebi, tahliye talebi ve dava açılacağı bildirilir. İhtarname zorunlu olmamakla birlikte ispat ve iyi niyet açısından büyük önem taşır." },
                                { step: "3", title: "Tahliye Davası Açma", desc: "Belirli süreli sözleşmelerde süre bitiminden itibaren 1 ay içinde Sulh Hukuk Mahkemesi'nde dava açılır. Dava dilekçesinde ihtiyaç sebebi detaylı şekilde açıklanır ve tüm deliller sunulur." },
                                { step: "4", title: "Duruşma ve Delil İncelemesi", desc: "Mahkeme tarafların beyanlarını dinler, tanıkları dinletir ve gerektiğinde keşif yapılmasına karar verir. İhtiyacın gerçek ve samimi olup olmadığı tüm deliller birlikte değerlendirilerek karara bağlanır." },
                                { step: "5", title: "Karar ve İcra Takibi", desc: "Mahkeme ihtiyacı haklı bulursa tahliye kararı verir. Kiracıya tahliye için süre tanınır. Bu süre içinde tahliye edilmezse icra müdürlüğü aracılığıyla zorla tahliye işlemi başlatılır." },
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

                        <SectionCTA text="İhtiyaç nedeniyle tahliye davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="yeni-malik" className="scroll-mt-24">Yeni Malik İhtiyacı Nedeniyle Tahliye</h2>

                        <p>
                            TBK madde 351, taşınmazı sonradan edinen yeni malikin ihtiyaç nedeniyle tahliye hakkını düzenler. Taşınmazı satın alan, miras yoluyla edinen veya bağış yoluyla devralan yeni malik, edinme tarihinden itibaren 1 ay içinde kiracıya yazılı ihtarname göndermek zorundadır. Bu ihtarnamede yeni malik olduğunu, taşınmaza ihtiyacı bulunduğunu ve belirtilen süre sonunda tahliye davası açacağını bildirir.
                        </p>

                        <p>
                            Yeni malik, ihtarnamenin tebliğinden itibaren 6 ay sonra veya kira sözleşmesinin süresinin bitiminde (hangisi daha sonra ise) tahliye davası açabilir. 1 aylık ihtarname gönderme süresi hak düşürücü süre olup bu süre içinde ihtarname gönderilmezse yeni malik bu tahliye sebebinden yararlanamaz. Ancak TBK&apos;daki diğer tahliye sebeplerine dayanma hakkı saklıdır.
                        </p>

                        <p>
                            Yeni malikin ihtiyacı nedeniyle tahliye konusu hakkında daha detaylı bilgi için <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">kiracı tahliye davası</Link> sayfamızı inceleyebilirsiniz. Yeni malik tahliyesi, özellikle taşınmaz alım-satım işlemlerinde sıkça karşılaşılan bir durumdur ve sürelere dikkat edilmemesi hak kaybına yol açar.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İhtiyaç Nedeniyle Tahliye Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir İhtiyaç Nedeniyle Tahliye Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. İhtiyaç nedeniyle tahliye davaları, yeni malik tahliyesi ve konut ihtiyacı nedeniyle kiracı tahliye davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi&apos;ndeki Sulh Hukuk Mahkemeleri&apos;nde tahliye davalarını etkin şekilde takip ediyor.
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
                                    ← İzmir Kira Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?
                                </Link>
                                <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kiracı Tahliye Davası Avukatı
                                </Link>
                                <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?
                                </Link>
                                <Link href="/sozluk/ihtiyac-nedeniyle-tahliye/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İhtiyaç Nedeniyle Tahliye Nedir? (Sözlük)
                                </Link>
                                <Link href="/tahliye-taahhutnamesi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Tahliye Taahhütnamesi Örneği
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">İhtiyaç Nedeniyle Tahliye Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    İhtiyaç nedeniyle tahliye süreciniz için hemen randevu alın.
                                    <strong className="text-white"> İhtiyaç nedeniyle tahliye avukatı</strong> olarak size yardımcı olmaya hazırız.
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
        </main>
    );
}
