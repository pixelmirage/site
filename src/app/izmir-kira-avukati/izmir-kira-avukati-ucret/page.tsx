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
    title: "İzmir Kira Avukatı Ücretleri 2026 - Danışmanlık ve Dava Ücretleri",
    description: "İzmir'de kira avukatı ücretleri 2026 güncel fiyat listesi. Tahliye davası, kira tespit davası, sözleşme hazırlama ve danışmanlık ücretleri hakkında detaylı bilgi.",
    keywords: ["kira avukatı ücreti İzmir", "tahliye davası ücreti", "kira tespit davası ücreti", "kira avukatı danışmanlık ücreti", "İzmir avukat ücretleri 2026"],
    openGraph: {
        title: "İzmir Kira Avukatı Ücretleri 2026 | Av. Mert Kağan Çetin",
        description: "İzmir'de kira davalarında avukatlık ücretleri, danışmanlık ücretleri ve dava masrafları hakkında güncel bilgi.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-avukati-ucret/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-avukati-ucret/" },
};

const faqs = [
    {
        question: "Kira avukatı ne kadar ücret alır?",
        answer: "İzmir'de kira avukatı ücreti dava türüne göre değişir. 2026 yılında tahliye davası ücreti 25.000-60.000 TL, kira tespit davası 30.000-50.000 TL, kira uyarlama davası 30.000-50.000 TL arasındadır. Ücret, davanın karmaşıklığına, süresine ve dava değerine göre ilk görüşmede belirlenir. İzmir Barosu Asgari Ücret Tarifesi altında ücret belirlenemez."
    },
    {
        question: "Avukata danışma ücreti ne kadar?",
        answer: "İzmir'de kira hukuku alanında avukat danışma ücreti 2026 yılında 3.000-6.000 TL arasında değişmektedir. Danışma görüşmesinde kira uyuşmazlığınız değerlendirilir, hukuki seçenekleriniz açıklanır ve izlenecek yol haritası belirlenir. Büromuzda ilk ön görüşme ücretsizdir; bu görüşmede davanızın genel değerlendirmesi yapılır."
    },
    {
        question: "Tahliye davası masrafını kim öder?",
        answer: "Tahliye davası masrafları (mahkeme harcı, tebligat, bilirkişi ücreti) davayı açan tarafça peşin olarak ödenir. Ancak dava kazanılırsa yargılama giderleri karşı tarafa yüklenir. Avukatlık ücreti ise her tarafın kendi avukatına ödediği ücret olup, bunun yanı sıra mahkeme karşı tarafa avukatlık ücreti (vekalet ücreti) ödenmesine de hükmedebilir."
    },
    {
        question: "Avukatlık ücreti taksitle ödenebilir mi?",
        answer: "Evet, büromuzda avukatlık ücreti taksitle ödenebilir. İlk görüşmede davanın niteliği değerlendirildikten sonra ücret belirlenir ve müvekkille birlikte uygun bir ödeme planı oluşturulur. Genellikle başlangıçta bir peşinat alınır, kalan tutar dava sürecine yayılarak taksitlendirilir. Ödeme koşulları avukatlık sözleşmesinde açıkça belirtilir."
    },
    {
        question: "Avukat ücreti dava sonucuna göre değişir mi?",
        answer: "Avukatlık Kanunu'na göre avukatlık ücreti tamamen dava sonucuna bağlı olarak belirlenemez (salt hasılat payı yasağı). Ancak sabit bir ücrete ek olarak dava sonucuna göre başarı primi kararlaştırılabilir. Kira tespit ve kira uyarlama davalarında dava değeri üzerinden yüzdelik bir başarı primi belirlenmesi yaygın bir uygulamadır."
    }
];

const tocItems = [
    { id: "ucretler", title: "2026 Kira Avukatı Ücretleri" },
    { id: "faktorler", title: "Ücreti Etkileyen Faktörler" },
    { id: "dava-masraflari", title: "Dava Masrafları" },
    { id: "ucretsiz-gorusme", title: "Ücretsiz Ön Görüşme" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function IzmirKiraAvukatiUcretPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Kira Hukuku Danışmanlığı" description="İzmir'de kira hukuku alanında avukatlık ve danışmanlık hizmeti." serviceType="Kira Hukuku Danışmanlığı" />
            <PersonSchema knowsAbout={["Kira Avukatı Ücretleri", "Avukatlık Ücret Tarifesi", "Kira Davası Masrafları", "İzmir Barosu Ücret Tarifesi", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "İzmir Kira Avukatı Ücretleri", url: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-avukati-ucret/" }
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
                        <span className="text-secondary">İzmir Kira Avukatı Ücretleri</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kira Avukatı Ücretleri 2026
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de kira davalarında avukatlık ücretleri, danışmanlık ücretleri ve dava masrafları hakkında güncel bilgi.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile ücretsiz ön görüşme yapın.
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
                            <strong>İzmir kira avukatı ücretleri</strong>, dava türüne, davanın karmaşıklığına ve süresine göre değişiklik gösterir. Bu sayfada 2026 yılı güncel avukatlık ücretleri, dava masrafları ve danışmanlık ücretleri hakkında detaylı bilgi bulabilirsiniz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kira uyuşmazlıklarında avukatlık ücreti, Avukatlık Kanunu ve İzmir Barosu Asgari Ücret Tarifesi çerçevesinde belirlenir. Avukatlık ücreti, baro tarifesinin altında kararlaştırılamaz. Aşağıda yer alan ücretler 2026 yılı İzmir piyasa koşullarına göre ortalama değerler olup, kesin ücret davanın niteliğine göre ilk görüşmede belirlenmektedir. Dava masrafları (mahkeme harcı, tebligat, bilirkişi ücreti) avukatlık ücretine dahil değildir.
                        </p>

                        <h2 id="ucretler" className="scroll-mt-24">2026 Kira Avukatı Ücretleri</h2>

                        <p>
                            Aşağıdaki tabloda İzmir&apos;de kira hukuku alanındaki başlıca hizmetler ve 2026 yılı güncel ücret aralıkları yer almaktadır. Bu ücretler, davanın karmaşıklığına, süresine ve dava değerine bağlı olarak değişebilir. Ücretler İzmir Barosu Asgari Ücret Tarifesi&apos;nin üzerindedir ve KDV dahildir.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Hizmet Türü</th>
                                        <th className="px-6 py-4 text-left">Ücret Aralığı (2026)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Tahliye Taahhütnamesi ile Tahliye", price: "25.000 - 40.000 TL" },
                                        { title: "İhtiyaç Nedeniyle Tahliye Davası", price: "35.000 - 60.000 TL" },
                                        { title: "İki Haklı İhtar ile Tahliye Davası", price: "35.000 - 55.000 TL" },
                                        { title: "Kira Tespit Davası", price: "30.000 - 50.000 TL" },
                                        { title: "Kira Uyarlama Davası", price: "30.000 - 50.000 TL" },
                                        { title: "Kira Sözleşmesi Hazırlama", price: "5.000 - 15.000 TL" },
                                        { title: "Hukuki Danışmanlık (Seans)", price: "3.000 - 6.000 TL" },
                                    ].map((item, i) => (
                                        <tr key={i} className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? "bg-slate-50" : ""}`}>
                                            <td className="px-6 py-4 font-bold text-primary">{item.title}</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki ücretler ortalama değerlerdir ve her dava için kesin ücret ilk görüşmede belirlenir. Kira tespit ve kira uyarlama davalarında dava değeri yüksekse, ücretin bir kısmı başarı primi olarak dava sonucuna bağlanabilir. Tüm ücretler avukatlık sözleşmesiyle yazılı olarak kararlaştırılır.
                        </p>

                        <p>
                            Tahliye davalarının detaylı bilgisi için <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">kiracı tahliye davası</Link> sayfamızı, kira tespit davaları için <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link> sayfamızı inceleyebilirsiniz.
                        </p>

                        <h2 id="faktorler" className="scroll-mt-24">Avukatlık Ücretini Etkileyen Faktörler</h2>

                        <p>
                            Kira davalarında avukatlık ücreti sabit bir rakam olmayıp, birçok faktöre bağlı olarak değişir. Avukatlık Kanunu&apos;nun 164. maddesi uyarınca ücret, baro asgari ücret tarifesinin altında belirlenemez ve dava değerinin yüzde yirmi beşini aşamaz. Bu sınırlar dahilinde ücret, aşağıdaki faktörlere göre şekillenir:
                        </p>

                        <ul>
                            <li><strong>Dava türü:</strong> Tahliye taahhütnamesi ile icra takibi nispeten basit ve kısa sürdüğünden ücreti düşüktür. İhtiyaç nedeniyle tahliye veya iki haklı ihtar davaları daha uzun sürdüğünden ve daha fazla emek gerektirdiğinden ücreti yüksektir.</li>
                            <li><strong>Dava değeri:</strong> Kira tespit ve kira uyarlama davalarında dava değeri (yıllık kira farkı) doğrudan avukatlık ücretini etkiler. Dava değeri arttıkça avukatlık ücreti de artar.</li>
                            <li><strong>Davanın karmaşıklığı:</strong> Birden fazla tahliye sebebinin bir arada ileri sürülmesi, karşı tarafın aktif savunma yapması veya istinaf aşamasına geçilmesi ücreti artıran faktörlerdir.</li>
                            <li><strong>Dava süresi:</strong> Duruşma sayısı, bilirkişi incelemesi ve istinaf başvurusu gibi süreyi uzatan unsurlar avukatlık ücretine yansıyabilir.</li>
                            <li><strong>Zorunlu arabuluculuk:</strong> 2024 yılından itibaren kira davalarında zorunlu arabuluculuk uygulanmaktadır. Arabuluculuk aşamasında anlaşma sağlanırsa dava açılmadığından toplam maliyet düşer.</li>
                        </ul>

                        <p>
                            Bu faktörlerin tamamı ilk görüşmede değerlendirilir ve müvekkile şeffaf bir şekilde açıklanır. Büromuz, ücret konusunda sürpriz yaşanmaması için tüm olası maliyetleri önceden bildirmektedir.
                        </p>

                        <SectionCTA text="Kira davanızın ücretini öğrenmek için ücretsiz ön görüşme randevusu alın." />

                        <h2 id="dava-masraflari" className="scroll-mt-24">Dava Masrafları ve Yargılama Giderleri</h2>

                        <p>
                            Avukatlık ücreti dışında kira davalarında çeşitli yargılama giderleri de söz konusudur. Bu masraflar avukatlık ücretine dahil olmayıp, dava sürecinde ayrıca ödenir. Davayı kazanan taraf, yargılama giderlerini karşı taraftan talep edebilir.
                        </p>

                        <p>
                            Kira davalarında karşılaşılan başlıca masraf kalemleri şunlardır:
                        </p>

                        <ul>
                            <li><strong>Mahkeme harcı:</strong> Dava açılırken ve karar aşamasında ödenir. Tahliye davalarında maktu harç alınırken, kira tespit ve uyarlama davalarında dava değeri üzerinden nispi harç hesaplanır. 2026 yılında maktu harç tutarları birkaç yüz TL düzeyindedir.</li>
                            <li><strong>Tebligat masrafları:</strong> Dava dilekçesinin, duruşma davetiyelerinin ve mahkeme kararlarının taraflara tebliğ edilmesi için ödenen ücrettir. Her tebligat için ortalama 150-300 TL masraf oluşur.</li>
                            <li><strong>Bilirkişi ücreti:</strong> Kira tespit ve kira uyarlama davalarında mahkeme bilirkişi ataması yapar. Bilirkişi ücreti genellikle 5.000-15.000 TL arasında değişir ve rapor isteyen tarafça peşin olarak depo edilir.</li>
                            <li><strong>Keşif masrafı:</strong> Kira tespit davalarında mahkemenin taşınmazda keşif yapması gerekebilir. Keşif masrafları (ulaşım, bilirkişi gündeliği) ayrıca ödenir.</li>
                            <li><strong>Arabuluculuk ücreti:</strong> Zorunlu arabuluculuk görüşmeleri ilk iki saat ücretsizdir. Görüşmelerin uzaması halinde arabuluculuk ücreti saatlik olarak hesaplanır. Anlaşma sağlanamazsa arabuluculuk ücreti Hazine tarafından karşılanır.</li>
                        </ul>

                        <p>
                            Dava masraflarının toplam tutarı, davanın türüne ve süresine göre 2.000-20.000 TL arasında değişebilir. İlk görüşmede tahmini dava masrafları konusunda da bilgilendirme yapılmaktadır. <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">Kira uyarlama davası</Link> ve <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link> gibi bilirkişi gerektiren davalarda masraflar nispeten daha yüksektir.
                        </p>

                        <h2 id="ucretsiz-gorusme" className="scroll-mt-24">Ücretsiz Ön Görüşme</h2>

                        <p>
                            Büromuz, kira uyuşmazlıklarında <strong>ücretsiz ilk ön görüşme</strong> sunmaktadır. Bu görüşmede kira sorununuz genel hatlarıyla değerlendirilir, hukuki seçenekleriniz açıklanır ve izlenecek yol haritası belirlenir. Ön görüşme herhangi bir ücret veya taahhüt gerektirmez.
                        </p>

                        <p>
                            Ücretsiz ön görüşmede neler beklemelisiniz:
                        </p>

                        <ul>
                            <li><strong>Dosya ön değerlendirmesi:</strong> Kira sözleşmeniz, ihtarnameler, ödeme belgeleri ve diğer evraklar incelenerek uyuşmazlığınızın hukuki niteliği belirlenir.</li>
                            <li><strong>Hukuki seçeneklerin açıklanması:</strong> Durumunuza uygun tahliye sebebi, dava türü veya arabuluculuk gibi alternatif çözüm yolları değerlendirilir.</li>
                            <li><strong>Süre ve maliyet tahmini:</strong> Davanızın tahmini süresi, avukatlık ücreti ve dava masrafları hakkında bilgi verilir.</li>
                            <li><strong>Başarı olasılığının değerlendirilmesi:</strong> Mevcut delil durumuna göre davanın güçlü ve zayıf yönleri şeffaf bir şekilde paylaşılır.</li>
                        </ul>

                        <p>
                            Ön görüşme sonrasında avukatlık hizmeti almaya karar verirseniz, avukatlık sözleşmesi imzalanarak süreç başlatılır. Randevu almak için <Link href="/iletisim/">iletişim sayfamızı</Link> ziyaret edebilir veya doğrudan bizi arayabilirsiniz. Görüşme ofisimizde yüz yüze yapılabileceği gibi telefon veya video konferans yoluyla da gerçekleştirilebilir.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İzmir Kira Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira hukuku alanında tahliye davaları, kira tespit davaları, kira uyarlama davaları ve sözleşme hazırlama hizmetleri sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira uyuşmazlıklarını takip ediyor.
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
                                <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kiracı Tahliye Davası Avukatı
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Tespit Davası Avukatı
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Uyarlama Davası Avukatı
                                </Link>
                                <Link href="/kira-sozlesmesi-ornegi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Sözleşmesi Örneği
                                </Link>
                                <Link href="/iletisim/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İletişim ve Randevu
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Davanız İçin Ücretsiz Ön Görüşme Alın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira uyuşmazlığınız için hemen ücretsiz ön görüşme randevusu alın.
                                    <strong className="text-white"> Kira avukatı</strong> olarak size en uygun çözümü sunmaya hazırız.
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
