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
    title: "Kira Avukatı Ücreti Nasıl Belirlenir? (İzmir)",
    description: "İzmir'de kira davalarında avukatlık ücretinin nasıl belirlendiği: Avukatlık Kanunu m. 163-164, Avukatlık Asgari Ücret Tarifesi, karşı vekalet ücreti ve yargılama giderleri.",
    keywords: ["kira avukatı ücreti İzmir", "tahliye davası ücreti", "kira tespit davası ücreti", "kira avukatı danışmanlık ücreti", "avukatlık asgari ücret tarifesi kira"],
    openGraph: {
        title: "Kira Avukatı Ücreti Nasıl Belirlenir? | Av. Mert Kağan Çetin",
        description: "İzmir'de kira davalarında avukatlık ücretleri, danışmanlık ücretleri ve dava masrafları hakkında güncel bilgi.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-avukati-ucret/",
        type: "article",
    },
    other: { "article:modified_time": "2026-10-13" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-avukati-ucret/" },
};

const faqs = [
    {
        question: "Kira avukatı ne kadar ücret alır?",
        answer: "Avukatlık ücreti; davanın türü, dava değeri, işin güçlüğü ve gerektirdiği emek dikkate alınarak avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır (Avukatlık Kanunu m. 163). Kararlaştırılan ücret, Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi'nin altında olamaz; dava değerine göre yüzde olarak belirlenen ücret ise dava değerinin yüzde yirmi beşini aşamaz (m. 164). Somut dosyaya ilişkin ücret, belgeler incelendikten sonra bildirilir."
    },
    {
        question: "Avukata danışma ücreti ne kadar?",
        answer: "Sözlü ve yazılı danışma (hukuki görüş) için ücret, Avukatlık Asgari Ücret Tarifesi'nin büroda ve çağrı üzerine danışma kalemlerinin altında olamaz. Danışma görüşmesinde kira uyuşmazlığınız değerlendirilir, hukuki seçenekleriniz açıklanır ve izlenecek yol belirlenir."
    },
    {
        question: "Tahliye davası masrafını kim öder?",
        answer: "Tahliye davası masrafları (mahkeme harcı, tebligat, bilirkişi ücreti) davayı açan tarafça peşin olarak ödenir. Ancak dava kazanılırsa yargılama giderleri karşı tarafa yüklenir. Avukatlık ücreti ise her tarafın kendi avukatına ödediği ücret olup, bunun yanı sıra mahkeme karşı tarafa avukatlık ücreti (vekalet ücreti) ödenmesine de hükmedebilir."
    },
    {
        question: "Avukatlık ücreti taksitle ödenebilir mi?",
        answer: "Ücretin ödeme zamanı ve şekli, avukat ile müvekkil arasında yazılı ücret sözleşmesinde serbestçe kararlaştırılabilir. Sözleşmede ödeme planı açıkça belirtilmelidir."
    },
    {
        question: "Avukat ücreti dava sonucuna göre değişir mi?",
        answer: "Avukatlık Kanunu m. 164 uyarınca ücret, dava değeri veya müvekkilin elde edeceği yarar üzerinden yüzde olarak da kararlaştırılabilir; ancak bu oran dava değerinin yüzde yirmi beşini aşamaz."
    }
];

const tocItems = [
    { id: "ucretler", title: "Ücret Nasıl Belirlenir?" },
    { id: "faktorler", title: "Ücreti Etkileyen Faktörler" },
    { id: "dava-masraflari", title: "Dava Masrafları" },
    { id: "on-gorusme", title: "Ön Görüşme" },
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
                            Kira Avukatı Ücreti Nasıl Belirlenir?
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de kira davalarında avukatlık ücretinin hangi kurallara göre belirlendiği, karşı vekalet ücreti ve yargılama giderleri hakkında bilgi.
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
                            <strong>Kira avukatı ücreti</strong>, dava türüne, dava değerine ve işin gerektirdiği emeğe göre değişir. Bu sayfada ücretin hangi yasal kurallara göre belirlendiğini, karşı vekalet ücretini ve yargılama giderlerini açıklıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 13 Ekim 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kira uyuşmazlıklarında avukatlık ücreti, Avukatlık Kanunu ve Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi (AAÜT) çerçevesinde belirlenir. Avukatlık meslek kuralları, ücret üzerinden tanıtım yapılmasını ve fiyat listesi yayımlanmasını sınırladığından bu sayfada rakam verilmemektedir. Dava masrafları (mahkeme harcı, tebligat, bilirkişi ücreti) avukatlık ücretine dahil değildir.
                        </p>

                        <h2 id="ucretler" className="scroll-mt-24">Avukatlık Ücreti Nasıl Belirlenir?</h2>

                        <ul>
                            <li><strong>Yazılı ücret sözleşmesi (Av. K. m. 163):</strong> Ücretin miktarı, ödeme zamanı ve kapsamı avukat ile müvekkil arasında yazılı olarak kararlaştırılır. Sözleşmenin kapsamı (arabuluculuk, ilk derece, istinaf, icra) açıkça belirtilmelidir.</li>
                            <li><strong>Asgari ücret tarifesi (Av. K. m. 164):</strong> Kararlaştırılan ücret, TBB Avukatlık Asgari Ücret Tarifesi&apos;nde ilgili iş için öngörülen tutarın altında olamaz. Tarife her yıl yeniden belirlenir; İzmir Barosu da tavsiye niteliğinde ücret tarifesi yayımlar.</li>
                            <li><strong>Yüzde yirmi beş sınırı (Av. K. m. 164/2):</strong> Ücret dava değeri üzerinden yüzde olarak kararlaştırılırsa, oran dava değerinin yüzde yirmi beşini aşamaz.</li>
                            <li><strong>Sözleşme yoksa (Av. K. m. 164/4):</strong> Ücret, değeri belli davalarda tarifenin altında ve dava değerinin yüzde on ile yirmi beşi arasında olmak üzere belirlenir.</li>
                            <li><strong>Karşı vekalet ücreti:</strong> Mahkemenin dava sonunda haksız çıkan taraf aleyhine hükmettiği vekalet ücreti tarifeye göre belirlenir ve avukata aittir (Av. K. m. 164/5); müvekkil ile kararlaştırılan ücretten ayrıdır.</li>
                        </ul>

                        <p>
                            Tahliye davalarının detaylı bilgisi için <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">kiracı tahliye davası</Link> sayfamızı, kira tespit davaları için <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link> sayfamızı inceleyebilirsiniz.
                        </p>

                        <h2 id="faktorler" className="scroll-mt-24">Avukatlık Ücretini Etkileyen Faktörler</h2>

                        <p>
                            Kira davalarında avukatlık ücreti sabit bir rakam olmayıp, yukarıdaki yasal sınırlar içinde birçok faktöre bağlı olarak değişir. Bu sınırlar dahilinde ücret, aşağıdaki faktörlere göre şekillenir:
                        </p>

                        <ul>
                            <li><strong>Dava türü:</strong> Tahliye taahhütnamesi ile icra takibi nispeten basit ve kısa sürdüğünden ücreti düşüktür. İhtiyaç nedeniyle tahliye veya iki haklı ihtar davaları daha uzun sürdüğünden ve daha fazla emek gerektirdiğinden ücreti yüksektir.</li>
                            <li><strong>Dava değeri:</strong> Kira tespit ve kira uyarlama davalarında dava değeri (yıllık kira farkı) doğrudan avukatlık ücretini etkiler. Dava değeri arttıkça avukatlık ücreti de artar.</li>
                            <li><strong>Davanın karmaşıklığı:</strong> Birden fazla tahliye sebebinin bir arada ileri sürülmesi, karşı tarafın aktif savunma yapması veya istinaf aşamasına geçilmesi ücreti artıran faktörlerdir.</li>
                            <li><strong>Dava süresi:</strong> Duruşma sayısı, bilirkişi incelemesi ve istinaf başvurusu gibi süreyi uzatan unsurlar avukatlık ücretine yansıyabilir.</li>
                            <li><strong>Zorunlu arabuluculuk:</strong> 1 Eylül 2023 tarihinden itibaren kira uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak dava şartıdır (HUAK m. 18/B). Arabuluculuk aşamasında anlaşma sağlanırsa dava açılmadığından toplam maliyet düşer.</li>
                        </ul>

                        <p>
                            Bu faktörlerin tamamı ilk görüşmede değerlendirilir ve müvekkile şeffaf bir şekilde açıklanır. Olası yargılama giderleri de önceden açıklanır.
                        </p>

                        <SectionCTA text="Kira uyuşmazlığınızı değerlendirmek için görüşme randevusu oluşturabilirsiniz." />

                        <h2 id="dava-masraflari" className="scroll-mt-24">Dava Masrafları ve Yargılama Giderleri</h2>

                        <p>
                            Avukatlık ücreti dışında kira davalarında çeşitli yargılama giderleri de söz konusudur. Bu masraflar avukatlık ücretine dahil olmayıp, dava sürecinde ayrıca ödenir. Davayı kazanan taraf, yargılama giderlerini karşı taraftan talep edebilir.
                        </p>

                        <p>
                            Kira davalarında karşılaşılan başlıca masraf kalemleri şunlardır:
                        </p>

                        <ul>
                            <li><strong>Mahkeme harcı:</strong> Dava açılırken ve karar aşamasında ödenir. Tahliye davalarında maktu harç alınırken, kira tespit ve uyarlama davalarında dava değeri üzerinden nispi harç hesaplanır. Harç tutarları her yıl Harçlar Kanunu tarifeleriyle güncellenir.</li>
                            <li><strong>Tebligat masrafları:</strong> Dava dilekçesinin, duruşma davetiyelerinin ve mahkeme kararlarının taraflara tebliğ edilmesi için ödenen ücrettir. Tebligat ücretleri PTT tarifesine göre belirlenir.</li>
                            <li><strong>Bilirkişi ücreti:</strong> Kira tespit ve kira uyarlama davalarında mahkeme bilirkişi ataması yapar. Bilirkişi ücreti, Bilirkişilik Asgari Ücret Tarifesi esas alınarak mahkemece belirlenir ve rapor isteyen tarafça peşin olarak depo edilir.</li>
                            <li><strong>Keşif masrafı:</strong> Kira tespit davalarında mahkemenin taşınmazda keşif yapması gerekebilir. Keşif masrafları (ulaşım, bilirkişi gündeliği) ayrıca ödenir.</li>
                            <li><strong>Arabuluculuk ücreti:</strong> Arabuluculuk ücreti Arabuluculuk Asgari Ücret Tarifesi&apos;ne göre belirlenir. Anlaşma sağlanırsa ücret kural olarak taraflarca eşit ödenir; anlaşma sağlanamazsa iki saatlik ücret Adalet Bakanlığı bütçesinden karşılanır ve daha sonra yargılama giderlerine dahil edilir.</li>
                        </ul>

                        <p>
                            Dava masraflarının toplam tutarı davanın türüne, bilirkişi ve keşif ihtiyacına göre değişir. İlk görüşmede tahmini dava masrafları konusunda da bilgilendirme yapılmaktadır. <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/">Kira uyarlama davası</Link> ve <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davası</Link> gibi bilirkişi gerektiren davalarda masraflar nispeten daha yüksektir.
                        </p>

                        <h2 id="on-gorusme" className="scroll-mt-24">Ön Görüşme</h2>

                        <p>
                            Kira uyuşmazlığınız ön görüşmede genel hatlarıyla değerlendirilir, hukuki seçenekleriniz açıklanır ve izlenecek yol belirlenir.
                        </p>

                        <p>
                            Ön görüşmede neler konuşulur:
                        </p>

                        <ul>
                            <li><strong>Dosya ön değerlendirmesi:</strong> Kira sözleşmeniz, ihtarnameler, ödeme belgeleri ve diğer evraklar incelenerek uyuşmazlığınızın hukuki niteliği belirlenir.</li>
                            <li><strong>Hukuki seçeneklerin açıklanması:</strong> Durumunuza uygun tahliye sebebi, dava türü veya arabuluculuk gibi alternatif çözüm yolları değerlendirilir.</li>
                            <li><strong>Süre ve maliyet tahmini:</strong> Davanızın tahmini süresi, avukatlık ücreti ve dava masrafları hakkında bilgi verilir.</li>
                            <li><strong>Dosyanın güçlü ve zayıf yönleri:</strong> Mevcut delil durumuna göre davanın riskleri açıkça paylaşılır; dava sonucu garanti edilemez.</li>
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
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira hukuku alanında tahliye davaları, kira tespit davaları, kira uyarlama davaları ve sözleşme hazırlama hizmetleri sunuyor. İzmir Adliyesi (Bayraklı) yakınındaki ofisinden İzmir genelinde kira uyuşmazlıklarını takip ediyor.
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Uyuşmazlığınız İçin Görüşme</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Randevu için iletişim bilgilerimizi kullanabilirsiniz. Genel bilgi için <Link href="/izmir-kira-avukati/">İzmir kira avukatı</Link> sayfamıza da göz atabilirsiniz.
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
