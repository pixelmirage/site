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
    title: "Ev Sahibi Hakları İzmir - Kiraya Verenin Yasal Hakları",
    description: "İzmir'de ev sahibi hakları hakkında kapsamlı rehber. Kiracı tahliyesi, kira artışı, sözleşme feshi ve ev sahibinin yasal hakları konusunda uzman avukat desteği.",
    keywords: ["ev sahibi hakları İzmir", "kiraya veren hakları", "ev sahibi kiracı hakları", "ev sahibi tahliye hakkı", "kira artışı ev sahibi hakları"],
    openGraph: {
        title: "Ev Sahibi Hakları İzmir - Kiraya Verenin Yasal Hakları | Av. Mert Kağan Çetin",
        description: "İzmir'de ev sahibi hakları hakkında kapsamlı rehber. Kiracı tahliyesi, kira artışı ve sözleşme yönetimi konusunda uzman avukat desteği.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/ev-sahibi-haklari-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/ev-sahibi-haklari-izmir/" },
};

const faqs = [
    {
        question: "Ev sahibi kiracıyı ne zaman çıkarabilir?",
        answer: "Ev sahibi kiracıyı ancak kanunda sayılan sebeplerle ve mahkeme kararıyla tahliye edebilir. Bu sebepler şunlardır: İhtiyaç nedeniyle tahliye (TBK m. 350), tahliye taahhütnamesi (TBK m. 352/1), iki haklı ihtar (TBK m. 352/2), 10 yıllık uzama süresinin dolması (TBK m. 347), yeni malikin ihtiyacı (TBK m. 351), kiracının sözleşmeye aykırı davranışı ve kira bedelini ödememesi. Her sebebin kendine özgü şartları ve dava açma süreleri vardır."
    },
    {
        question: "Kira artışı ne kadar yapılabilir?",
        answer: "Konut kiralarında kira artışı bir önceki kira yılının on iki aylık TÜFE ortalamasını geçemez (TBK m. 344). Bu sınır emredici niteliktedir ve taraflar anlaşsa bile aşılamaz. Ancak beş yıldan uzun süreli kira ilişkilerinde ev sahibi kira tespit davası açarak hakimden yeni kira bedelinin belirlenmesini isteyebilir. Hakim, TÜFE oranı, emsal kira bedelleri ve kiralananın durumunu göz önünde bulundurur."
    },
    {
        question: "Ev sahibi taşınmazı satarsa kiracı ne olur?",
        answer: "Taşınmazın satılması tek başına kiracının tahliyesini gerektirmez. Yeni malik, kiracıyla mevcut kira sözleşmesinin tarafı haline gelir (TBK m. 310). Ancak yeni malik, kendisi veya yakınlarının ihtiyacı varsa edinme tarihinden itibaren bir ay içinde kiracıya ihtarname göndererek altı ay sonra ihtiyaç nedeniyle tahliye davası açabilir (TBK m. 351). İhtarname süresi kaçırılırsa yeni malik genel tahliye sebeplerine başvurmak zorunda kalır."
    },
    {
        question: "Ev sahibi depozito iade etmezse ne yapılır?",
        answer: "Kiracı, depozitonun iadesini dava yoluyla talep edebilir. Görevli mahkeme Sulh Hukuk Mahkemesi'dir. Kiracının kiralananı hasarsız teslim ettiğini ispat etmesi durumunda mahkeme depozito iadesine karar verir. Olağan kullanımdan kaynaklanan yıpranmalar depozito kesintisi sebebi olamaz. Kiracı ayrıca geç iade için faiz de talep edebilir."
    },
    {
        question: "Ev sahibi kiracıya ihtar çekebilir mi?",
        answer: "Evet, ev sahibi kiracıya çeşitli durumlarda noter aracılığıyla ihtar çekebilir. Kira bedelini ödemeyen kiracıya ödeme ihtarı, sözleşmeye aykırı davranan kiracıya uyarı ihtarı, ihtiyaç nedeniyle tahliye öncesi tahliye ihtarı ve 10 yıllık uzama süresinin dolmasından önce bildirim ihtarı gönderilebilir. İhtarnamelerin usulüne uygun düzenlenmesi ve süresinde tebliğ edilmesi büyük önem taşır."
    }
];

const tocItems = [
    { id: "temel-haklar", title: "Ev Sahibinin Temel Hakları" },
    { id: "tahliye-haklari", title: "Kiracıyı Tahliye Etme Hakları" },
    { id: "kira-artisi-tespit", title: "Kira Artışı ve Tespit Hakkı" },
    { id: "yukumlulukler", title: "Ev Sahibinin Yükümlülükleri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function EvSahibiHaklariIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Ev Sahibi Hakları Danışmanlığı" description="İzmir'de ev sahiplerinin yasal haklarının korunması ve kiracı tahliyesi süreçlerinde hukuki danışmanlık." serviceType="Ev Sahibi Hakları Danışmanlığı" />
            <PersonSchema knowsAbout={["Ev Sahibi Hakları", "Kiracı Tahliyesi", "Kira Artışı", "Kira Sözleşmesi Feshi", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Ev Sahibi Hakları İzmir", url: "https://mertkagancetin.com/izmir-kira-avukati/ev-sahibi-haklari-izmir/" }
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
                        <span className="text-secondary">Ev Sahibi Hakları İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Ev Sahibi Hakları İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de ev sahibi olarak yasal haklarınızı öğrenin. Kiracı tahliyesi, kira artışı ve sözleşme yönetimi konularında uzman avukat desteği.
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
                            <strong>İzmir&apos;de ev sahibi hakları</strong>, Türk Borçlar Kanunu kapsamında düzenlenmiştir. Kira hukuku kiracıyı koruyan hükümler içermekle birlikte, ev sahiplerinin de kira bedelini tahsil etme, kiracıyı tahliye etme ve taşınmazını geri alma gibi önemli hakları bulunmaktadır. Bu sayfada ev sahibi olarak yasal haklarınızı ve yükümlülüklerinizi detaylı şekilde açıklıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Ev sahibi-kiracı ilişkisinde her iki tarafın da hakları ve yükümlülükleri vardır. TBK&apos;nın kira hükümlerinin büyük bölümü kiracıyı korumaya yönelik olsa da ev sahiplerinin de bilmesi gereken önemli haklar mevcuttur. Bu hakların doğru kullanılması, hukuki süreçlerin sorunsuz ilerlemesi açısından kritik öneme sahiptir.
                        </p>

                        <h2 id="temel-haklar" className="scroll-mt-24">Ev Sahibinin Temel Hakları</h2>

                        <p>
                            Ev sahibinin (kiraya verenin) Türk Borçlar Kanunu kapsamında sahip olduğu temel haklar, kira ilişkisinin sağlıklı yürümesini ve taşınmazın korunmasını amaçlar. Bu hakların başında kira bedelini tam ve zamanında tahsil etme hakkı gelir. TBK madde 313 uyarınca kiracı, kira bedelini ve yan giderleri ödeme tarihinde ödemekle yükümlüdür. Ödeme yapılmaması halinde ev sahibi yasal takip başlatabilir.
                        </p>

                        <p>
                            Ev sahibinin diğer temel hakları şunlardır: Kiralananın sözleşmeye uygun şekilde kullanılmasını talep etme hakkı (TBK m. 316), kiracının komşulara saygı göstermesini isteme hakkı, kiralananı geri alma hakkı (kanunda belirtilen tahliye sebepleriyle), kira bedelinin güncel piyasa koşullarına uyarlanmasını talep etme hakkı (kira tespit davası yoluyla) ve kiralananı inceleme hakkı (önceden haber vermek koşuluyla).
                        </p>

                        <p>
                            Ev sahibi, kiracının sözleşmeye aykırı davranışlarına karşı da çeşitli haklara sahiptir. Kiracı, kiralananı özenle kullanmaz veya komşulara rahatsızlık verirse ev sahibi en az otuz günlük süre vererek aykırılığın giderilmesini isteyebilir. Bu süre içinde aykırılık giderilmezse ev sahibi sözleşmeyi feshedebilir (TBK m. 316). Ağır durumlarda (kiracının kiralananı kasıtlı olarak tahrip etmesi gibi) süre verilmeksizin derhal fesih de mümkündür.
                        </p>

                        <h2 id="tahliye-haklari" className="scroll-mt-24">Kiracıyı Tahliye Etme Hakları</h2>

                        <p>
                            Ev sahibinin kiracıyı tahliye edebilmesi için TBK&apos;da sayılan sebeplerden birinin mevcut olması gerekir. Kendi başına kiracıyı zorla çıkarmak, eşyalarını dışarı koymak, kilitleri değiştirmek veya su ve elektriği kesmek suç teşkil eder ve tazminat sorumluluğu doğurur. Tahliye ancak mahkeme kararı veya icra takibiyle gerçekleştirilebilir. <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Kiracı tahliye davası süreçleri</Link> ve <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/">ev sahibinin kiracıyı çıkarma hakları</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <p>
                            TBK&apos;daki tahliye sebeplerini kısaca özetleyelim: <strong>İhtiyaç nedeniyle tahliye</strong> (TBK m. 350) - Ev sahibi veya yakınlarının konut veya işyeri ihtiyacı varsa kira süresinin bitiminden itibaren bir ay içinde dava açabilir. <strong>Tahliye taahhütnamesi</strong> (TBK m. 352/1) - Kiracının yazılı olarak belirli bir tarihte tahliye edeceğini taahhüt etmesi durumunda, bu tarihten itibaren bir ay içinde icra takibi veya dava yoluyla tahliye istenebilir. <strong>İki haklı ihtar</strong> (TBK m. 352/2) - Bir kira yılı içinde iki kez kira bedelini ödemeyen kiracıya usulüne uygun ihtarname çekilmişse kira yılının sonundan itibaren bir ay içinde dava açılabilir.
                        </p>

                        <p>
                            Bunlara ek olarak <strong>10 yıllık uzama süresinin dolması</strong> (TBK m. 347) halinde ev sahibi, üç ay önceden bildirimde bulunarak sözleşmeyi sona erdirebilir. <strong>Yeni malikin ihtiyacı</strong> (TBK m. 351) durumunda ise taşınmazı satın alan yeni malik, edinme tarihinden itibaren bir ay içinde ihtarname çekerek altı ay sonra tahliye davası açabilir. Her tahliye sebebinin kendine özgü süreleri ve usul kuralları vardır; bu sürelerin kaçırılması hak kaybına yol açar.
                        </p>

                        <SectionCTA text="Kiracı tahliyesi konusunda hukuki destek almak ister misiniz?" />

                        <h2 id="kira-artisi-tespit" className="scroll-mt-24">Kira Artışı ve Tespit Hakkı</h2>

                        <p>
                            Ev sahibi, kira bedelinin güncel piyasa koşullarını yansıtmasını isteme hakkına sahiptir. Ancak konut kiralarında kira artışı TÜFE sınırıyla kısıtlanmıştır (TBK m. 344). Bu sınır, kira bedelinin piyasa değerinin çok altında kalmasına neden olabilir. Böyle durumlarda ev sahibi <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link> açarak hakimden yeni kira bedelinin belirlenmesini isteyebilir. Kira artış oranınızı <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama aracımızla</Link> kontrol edebilirsiniz.
                        </p>

                        <p>
                            Kira tespit davası, beş yıldan uzun süreli kira ilişkilerinde veya beş yıldan sonra yenilenen sözleşmelerde açılabilir. Hakim, yeni kira bedelini belirlerken TÜFE oranının yanı sıra kiralananın bulunduğu semt, m2 büyüklüğü, yaşı, kat durumu gibi özellikleri ve emsal kira bedellerini de dikkate alır. Bilirkişi raporu bu davada önemli bir delildir. Dava yeni kira döneminin başlangıcından en az otuz gün önce açılırsa veya bu sürede ihtarname gönderilmişse mahkemenin belirleyeceği yeni kira bedeli o dönem başından itibaren geçerli olur.
                        </p>

                        <p>
                            İşyeri kiralarında ise kira artışında TÜFE sınırı uygulanmamaktadır. Taraflar kira artış oranını serbestçe belirleyebilir. Ancak anlaşmazlık halinde yine kira tespit davasına başvurulabilir. İşyeri kiralarında emsal kira bedellerinin tespiti ve piyasa araştırması daha kapsamlı yapılmalıdır.
                        </p>

                        <h2 id="yukumlulukler" className="scroll-mt-24">Ev Sahibinin Yükümlülükleri</h2>

                        <p>
                            Ev sahibinin hakları kadar yükümlülükleri de önemlidir. Bu yükümlülüklerin ihlali, kiracıya çeşitli haklar tanır ve ev sahibinin hukuki sorumluluk altına girmesine yol açar. Başlıca yükümlülükler şunlardır:
                        </p>

                        <ul>
                            <li><strong>Kiralananı teslim yükümlülüğü:</strong> Kiraya veren, kiralananı sözleşmede belirlenen tarihte ve kullanıma elverişli durumda teslim etmekle yükümlüdür (TBK m. 301)</li>
                            <li><strong>Bakım ve onarım yükümlülüğü:</strong> Kiralananın kullanımını etkileyen yapısal sorunlar (çatı tamiri, tesisat arızası, dış cephe boyası gibi) ev sahibi tarafından giderilmelidir. Kiracının bildirdiği arızaların makul sürede onarılmaması halinde kiracı, onarımı kendisi yaptırarak bedelini kira bedelinden düşebilir (TBK m. 306)</li>
                            <li><strong>Depozito iadesi yükümlülüğü:</strong> Kira sözleşmesi sona erdiğinde ve kiralanan hasarsız teslim edildiğinde depozito eksiksiz iade edilmelidir. Haksız depozito kesintisi yapılması halinde kiracı dava açabilir</li>
                            <li><strong>Vergi yükümlülüğü:</strong> Ev sahibi, kira gelirini yıllık gelir vergisi beyannamesiyle beyan etmek zorundadır. Konut kira gelirlerinde belirli bir istisna tutarı uygulanmakta olup bu tutarın üzerindeki kira geliri vergiye tabidir. Kira gelirinin beyan edilmemesi vergi cezasına yol açar</li>
                            <li><strong>Kiracının huzurunu bozmama yükümlülüğü:</strong> Ev sahibi, kiracıyı rahatsız edecek davranışlardan kaçınmalıdır. Kiralananı habersiz ziyaret etmek, kiracıya baskı yapmak veya kira ilişkisini zorlaştırmaya yönelik eylemler hukuka aykırıdır</li>
                        </ul>

                        <p>
                            Bu yükümlülüklerin bilinmesi ve yerine getirilmesi, ev sahibi ile kiracı arasındaki ilişkinin sağlıklı sürmesi açısından büyük önem taşır. <Link href="/izmir-kira-avukati/">İzmir kira avukatı</Link> olarak ev sahiplerine hem haklarının korunması hem de yükümlülüklerinin doğru yerine getirilmesi konusunda danışmanlık sunuyoruz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Ev Sahibi Hakları Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Ev Sahibi Hakları Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Ev sahibi hakları, kiracı tahliyesi, kira artışı ve kira sözleşmesi uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
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
                                <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?
                                </Link>
                                <Link href="/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?
                                </Link>
                                <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kiracı Tahliye Davası Avukatı
                                </Link>
                                <Link href="/tahliye-taahhutnamesi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Tahliye Taahhütnamesi Örneği
                                </Link>
                                <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İki Haklı İhtar ile Kiracı Tahliyesi Rehberi
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Ev Sahibi Haklarınız İçin Hukuki Destek Alın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Ev sahibi haklarınız konusunda hemen randevu alın.
                                    <strong className="text-white"> Ev sahibi hakları avukatı</strong> olarak size yardımcı olmaya hazırız.
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
