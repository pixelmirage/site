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
    title: "Kiracı Hakları İzmir - Yasal Haklar ve Korunma Yolları",
    description: "İzmir'de kiracı hakları hakkında kapsamlı bilgi. Kira artışı sınırları, tahliye koruması, depozito iadesi ve kiracının yasal hakları konusunda uzman avukat desteği.",
    keywords: ["kiracı hakları İzmir", "kiracı hakları nelerdir", "kiracı yasal hakları", "kira artışı sınırı", "kiracı tahliye koruması İzmir"],
    openGraph: {
        title: "Kiracı Hakları İzmir - Yasal Haklar ve Korunma Yolları | Av. Mert Kağan Çetin",
        description: "İzmir'de kiracı hakları hakkında kapsamlı bilgi. Kira artışı sınırları, tahliye koruması ve depozito iadesi konusunda uzman avukat desteği.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/kiraci-haklari-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/kiraci-haklari-izmir/" },
};

const faqs = [
    {
        question: "Kiracı hakları nelerdir?",
        answer: "Kiracının başlıca hakları şunlardır: Kiralanan taşınmazı sözleşme süresince kullanma hakkı, kira artışının TÜFE sınırında yapılmasını isteme hakkı, kiralananın kullanıma elverişli halde tutulmasını talep etme hakkı, haklı sebep olmaksızın tahliye edilmeme güvencesi, sözleşme süresi dolmadan kiracının rızası olmadan kira şartlarının değiştirilememesi ve depozito iadesini isteme hakkı."
    },
    {
        question: "Ev sahibi kiracıyı istediği zaman çıkarabilir mi?",
        answer: "Hayır, ev sahibi kiracıyı istediği zaman çıkaramaz. Türk Borçlar Kanunu'na göre tahliye ancak kanunda belirtilen sebeplerle ve mahkeme kararıyla mümkündür. İhtiyaç nedeniyle tahliye, iki haklı ihtar, tahliye taahhütnamesi ve 10 yıllık uzama süresinin dolması gibi sebeplerle dava açılabilir. Ev sahibinin kendi başına kiracıyı zorla çıkarması suç teşkil eder."
    },
    {
        question: "Kiracı kira artışını kabul etmek zorunda mı?",
        answer: "Kiracı yalnızca yasal sınırlar dahilindeki kira artışını kabul etmek zorundadır. Konut kiralarında kira artışı bir önceki kira yılının on iki aylık TÜFE ortalamasını geçemez (TBK m. 344). Ev sahibinin bu sınırın üzerinde artış talep etmesi halinde kiracı bunu reddetme hakkına sahiptir. Anlaşmazlık halinde ev sahibi kira tespit davası açabilir."
    },
    {
        question: "Depozito ne zaman iade edilir?",
        answer: "Depozito, kira sözleşmesinin sona ermesi ve kiralananın teslim edilmesinden sonra iade edilir. Kiraya veren, kiralananın teslimi sırasında herhangi bir hasar tespit ederse depozito bedelinden bu hasarın bedelini mahsup edebilir. Ancak olağan kullanımdan kaynaklanan yıpranmalar depozito kesintisi sebebi olamaz. Depozito iade edilmezse kiracı dava açarak iadesini talep edebilir."
    },
    {
        question: "Kiracı evde tadilat yapabilir mi?",
        answer: "Kiracı, kiraya verenin yazılı onayı olmadan kiralananın yapısında değişiklik yapamaz (TBK m. 334). Ancak kiralananın kullanımı için zorunlu olan küçük onarımlar kiracının sorumluluğundadır. Kiraya verenin onayıyla yapılan tadilatlar konusunda, sözleşme sona erdiğinde tadilatların kaldırılıp kaldırılmayacağı ve masrafların kime ait olacağı önceden yazılı olarak kararlaştırılmalıdır."
    }
];

const tocItems = [
    { id: "temel-haklar", title: "Kiracının Temel Hakları" },
    { id: "kira-artisi", title: "Kira Artışında Kiracı Hakları" },
    { id: "tahliye-korumasi", title: "Tahliyeye Karşı Kiracı Koruması" },
    { id: "depozito-aidat", title: "Depozito ve Aidat Hakları" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KiraciHaklariIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Kiracı Hakları Danışmanlığı" description="İzmir'de kiracıların yasal haklarının korunması ve hukuki danışmanlık hizmeti." serviceType="Kiracı Hakları Danışmanlığı" />
            <PersonSchema knowsAbout={["Kiracı Hakları", "Kira Artış Sınırı", "Tahliye Koruması", "Depozito İadesi", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Kiracı Hakları İzmir", url: "https://mertkagancetin.com/izmir-kira-avukati/kiraci-haklari-izmir/" }
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
                        <span className="text-secondary">Kiracı Hakları İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Kiracı Hakları İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de kiracı olarak yasal haklarınızı öğrenin. Kira artışı sınırları, tahliye koruması ve depozito iadesi konularında uzman avukat desteği.
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
                            <strong>İzmir&apos;de kiracı hakları</strong>, Türk Borçlar Kanunu tarafından güçlü bir şekilde korunmaktadır. Kira artışı sınırları, tahliye koruması, depozito iadesi ve bakım-onarım talepleri gibi konularda kiracıların sahip olduğu yasal haklar, çoğu zaman yeterince bilinmemektedir. Bu sayfada kiracı olarak haklarınızı detaylı şekilde açıklıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kiracı hakları, konut ve çatılı işyeri kiralarında TBK&apos;nın emredici hükümleri ile korunur. Bu hükümler kiracı aleyhine değiştirilemez niteliktedir; yani kira sözleşmesine kiracı aleyhine konulan maddeler geçersiz sayılır. İzmir&apos;de yaşayan kiracılar olarak haklarınızı bilmeniz, olası hak kayıplarının önüne geçmenizde kritik önem taşır.
                        </p>

                        <h2 id="temel-haklar" className="scroll-mt-24">Kiracının Temel Hakları</h2>

                        <p>
                            Türk Borçlar Kanunu, kiracıya pek çok temel hak tanımaktadır. Bu haklar emredici nitelikte olup sözleşme ile kiracı aleyhine değiştirilemez. Kiracının başlıca hakları şunlardır:
                        </p>

                        <ul>
                            <li><strong>Kiralananı kullanma hakkı:</strong> Kiracı, kira sözleşmesi süresince kiralananı sözleşmeye uygun şekilde kullanma hakkına sahiptir (TBK m. 301)</li>
                            <li><strong>Tahliye güvencesi:</strong> Kiracı, kanunda sayılan tahliye sebepleri dışında tahliye edilemez. Ev sahibi tek taraflı olarak sözleşmeyi sona erdiremez</li>
                            <li><strong>Kira artışı sınırı:</strong> Konut kiralarında artış oranı TÜFE ortalamasını geçemez (TBK m. 344)</li>
                            <li><strong>Bakım-onarım talep etme hakkı:</strong> Kiralananın kullanıma elverişli halde tutulması kiraya verenin yükümlülüğüdür (TBK m. 301). Çatı tamiri, tesisat arızaları gibi yapısal sorunlar ev sahibi tarafından giderilmelidir</li>
                            <li><strong>Depozito iadesi hakkı:</strong> Sözleşme sona erdiğinde, kiralananın hasarsız teslimi halinde depozito eksiksiz iade edilmelidir</li>
                            <li><strong>Alt kiraya verme hakkı:</strong> Kiraya verenin yazılı onayı ile kiracı, kiralananı alt kiraya verebilir (TBK m. 322)</li>
                            <li><strong>Kira bedelinden indirim hakkı:</strong> Kiralananın ayıplı olması durumunda kiracı, ayıbın giderilmesini, kira bedelinin indirilmesini veya zararının tazminini isteyebilir (TBK m. 305)</li>
                        </ul>

                        <p>
                            Bu haklar yalnızca konut kiraları için değil, çatılı işyeri kiraları için de geçerlidir. Kiracının haklarını bilmesi, ev sahibi ile yaşanabilecek uyuşmazlıklarda güçlü bir konumda olmasını sağlar.
                        </p>

                        <h2 id="kira-artisi" className="scroll-mt-24">Kira Artışında Kiracı Hakları</h2>

                        <p>
                            Kira artışı konusu, kiracılar açısından en önemli haklardan birini oluşturur. TBK madde 344 uyarınca konut kiralarında yenilenen kira dönemlerinde uygulanacak artış oranı, bir önceki kira yılının on iki aylık tüketici fiyat endeksi (TÜFE) ortalamasını geçemez. Bu düzenleme emredici niteliktedir ve taraflar anlaşsa bile bu sınırın üzerinde artış yapılamaz. Kira artış oranınızı <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama aracımızla</Link> kolayca hesaplayabilirsiniz.
                        </p>

                        <p>
                            Beş yıldan kısa süreli kira ilişkilerinde kira artışı yalnızca TÜFE ortalamasına göre yapılabilir. Ancak beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira sözleşmelerinde durum farklıdır. Bu durumda kiraya veren kira tespit davası açarak hakimden yeni kira bedelinin belirlenmesini isteyebilir. Hakim, TÜFE oranının yanı sıra kiralananın durumu, emsal kira bedelleri ve hakkaniyet ilkesini de göz önünde bulundurarak kira bedelini tespit eder.
                        </p>

                        <p>
                            Ev sahibi yasal sınırın üzerinde kira artışı talep ederse kiracı bunu reddetme hakkına sahiptir. Kiracının fazla ödediği kira bedelleri varsa, bunları beş yıllık zamanaşımı süresi içinde geri isteme hakkı da bulunmaktadır. Kira artışı konusunda anlaşmazlık yaşanması halinde ev sahibinin başvurabileceği tek yol kira tespit davası açmaktır.
                        </p>

                        <SectionCTA text="Kira artışı konusunda haklarınızı öğrenmek ister misiniz?" />

                        <h2 id="tahliye-korumasi" className="scroll-mt-24">Tahliyeye Karşı Kiracı Koruması</h2>

                        <p>
                            Kiracının tahliye koruması, kira hukukunun en önemli güvencelerinden biridir. TBK uyarınca kiracı, yalnızca kanunda sayılan sınırlı sebeplerle tahliye edilebilir. Ev sahibinin &quot;evimi satacağım&quot;, &quot;kirası az&quot; veya &quot;başka kiracı buldum&quot; gibi gerekçelerle kiracıyı tahliye etmesi hukuken mümkün değildir. <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Kiracı tahliye davası süreçleri</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <p>
                            Kiracının tahliye edilemeyeceği durumlar şunlardır: Kira sözleşmesinin süresinin dolması tek başına tahliye sebebi değildir; sözleşme otomatik olarak bir yıl uzar. Ev sahibinin taşınmazı satması halinde yeni malik, ancak edinme tarihinden itibaren bir ay içinde ihtarname çekerse ve altı ay sonra ihtiyaç nedeniyle dava açarsa tahliye mümkün olabilir. Kira bedelinin düşük olması da tahliye sebebi değildir; ancak ev sahibi kira tespit davası açabilir.
                        </p>

                        <p>
                            Kiracının tahliye davasında savunma hakları da oldukça geniştir. İhtiyaç nedeniyle açılan tahliye davasında kiracı, ihtiyacın samimi ve zorunlu olmadığını ileri sürebilir. İki haklı ihtar ile tahliye davasında ihtarnamelerin usulüne uygun çekilmediğini veya ödemenin süresinde yapıldığını ispatlayabilir. Tahliye taahhütnamesine dayalı davada ise taahhütnamenin baskı altında imzalatıldığını savunabilir.
                        </p>

                        <h2 id="depozito-aidat" className="scroll-mt-24">Depozito ve Aidat Hakları</h2>

                        <p>
                            Depozito (güvence bedeli) konusu kiracılar açısından sık sorun yaşanan alanlardan biridir. TBK madde 342 uyarınca konut kiralarında depozito bedeli üç aylık kira bedelini geçemez. Depozito para olarak verilecekse vadeli bir tasarruf hesabına yatırılmalıdır. Kira sözleşmesi sona erdiğinde ve kiralanan hasarsız teslim edildiğinde depozito kiracıya eksiksiz iade edilmelidir. <Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/">Depozito iadesi davası hakkında</Link> detaylı rehberimizi inceleyebilirsiniz.
                        </p>

                        <p>
                            Ev sahibi depozitoyu iade etmezse veya haksız kesinti yaparsa kiracı dava açarak iadesini talep edebilir. Olağan kullanımdan kaynaklanan yıpranmalar (boya eskimesi, halıda normal aşınma gibi) depozito kesintisi yapılmasını haklı kılmaz. Yalnızca kiracının kusurlu davranışından kaynaklanan hasarlar depozito bedelinden mahsup edilebilir.
                        </p>

                        <p>
                            Aidat (ortak gider) sorumluluğu konusunda ise genel kural şudur: Kat mülkiyeti kapsamındaki ortak giderlere katılma borcu kat malikine (ev sahibine) aittir. Ancak kira sözleşmesiyle aidat ödemesi kiracıya yüklenebilir. Kapıcı maaşı, asansör bakımı, genel temizlik gibi rutin işletme giderleri kiracıya ait olabilirken, bina güçlendirme, çatı yenileme gibi sermaye harcamaları ev sahibinin sorumluluğundadır. <Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/">Kiracının aidat borcu ve sorumlulukları</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kiracı Hakları Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kiracı Hakları Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kiracı hakları, kira artışı uyuşmazlıkları, depozito iadesi ve tahliye davalarında kiracılara profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
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
                                <Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Depozito İadesi Davası: Kiracının Hakları ve Süreç
                                </Link>
                                <Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kiracının Aidat Borcu ve Ev Sahibinin Sorumlulukları
                                </Link>
                                <Link href="/kira-artis-orani-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Artış Oranı Hesaplama
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Tespit Davası Avukatı
                                </Link>
                                <Link href="/sozluk/tahliye-taahhutnamesi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Tahliye Taahhütnamesi Nedir?
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kiracı Haklarınız İçin Hukuki Destek Alın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kiracı haklarınız konusunda hemen randevu alın.
                                    <strong className="text-white"> Kiracı hakları avukatı</strong> olarak size yardımcı olmaya hazırız.
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
