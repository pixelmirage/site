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
    title: "Kira Borcu İcra Takibi İzmir - Tahsilat Süreçleri",
    description: "İzmir'de kira borcu icra takibi ve tahsilat süreçleri. Ödenmeyen kira alacağı, icra takibi başlatma, haciz işlemleri ve temerrüt nedeniyle tahliye hakkında bilgi alın.",
    keywords: ["kira borcu icra takibi İzmir", "kira alacağı tahsilat", "kira borcu haciz", "ödenmeyen kira icra", "kira borcu avukatı İzmir"],
    openGraph: {
        title: "Kira Borcu İcra Takibi İzmir - Tahsilat Süreçleri | Av. Mert Kağan Çetin",
        description: "İzmir'de ödenmeyen kira alacaklarının icra yoluyla tahsili ve temerrüt nedeniyle tahliye hizmeti.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/kira-borcu-icra/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/kira-borcu-icra/" },
};

const faqs = [
    {
        question: "Kira borcunu ödemeyen kiracıya ne yapılır?",
        answer: "Kira borcunu ödemeyen kiracıya öncelikle noter aracılığıyla ihtarname gönderilir. TBK madde 315&apos;e göre kiracıya en az 30 günlük ödeme süresi tanınır. Bu süre içinde ödeme yapılmazsa icra takibi başlatılabilir ve temerrüt nedeniyle tahliye davası açılabilir. İcra takibi ile hem kira alacağının tahsili hem de kiracının tahliyesi aynı anda talep edilebilir."
    },
    {
        question: "İcra takibi ne kadar sürer?",
        answer: "Kira borcu icra takibi süresi borçlunun tutumuna göre değişir. Ödeme emrinin tebliğinden sonra borçluya 7 günlük itiraz süresi tanınır. İtiraz edilmezse haciz aşamasına geçilir. İtiraz halinde itirazın kaldırılması veya iptali davası açılır ki bu süreç 3-6 ay sürebilir. Toplam süreç ortalama 2-8 ay arasında tamamlanır."
    },
    {
        question: "Kiracının mallarına haciz konulabilir mi?",
        answer: "Evet, icra takibi kesinleştikten sonra kiracının maaşına, banka hesaplarına, araç ve taşınmazlarına haciz konulabilir. Ancak İcra ve İflas Kanunu&apos;nun 82. maddesinde sayılan haczedilemez mallar (zorunlu ev eşyaları, meslek aletleri vb.) haciz kapsamı dışındadır. Maaş haczi ise net maaşın dörtte birini geçemez."
    },
    {
        question: "İcra takibi ile tahliye aynı anda yapılabilir mi?",
        answer: "Evet, İcra ve İflas Kanunu madde 269 uyarınca kiraya veren, icra takibi yoluyla hem kira alacağının tahsilini hem de kiracının tahliyesini aynı anda talep edebilir. Ödeme emrinde kiracıya 30 günlük ödeme süresi verilir. Bu süre içinde ödeme yapılmazsa hem alacak takibi devam eder hem de tahliye kararı alınabilir."
    },
    {
        question: "Kira borcu zamanaşımı kaç yıl?",
        answer: "Kira borcu alacağında zamanaşımı süresi TBK madde 147/1 gereğince 5 yıldır. Bu süre, her bir kira bedelinin muaccel olduğu tarihten itibaren ayrı ayrı işlemeye başlar. 5 yıllık zamanaşımı süresinin dolmasından sonra kira alacağı talep edilemez hale gelir. Bu nedenle ödenmeyen kira bedellerinin takibinde gecikmemek önemlidir."
    }
];

const tocItems = [
    { id: "icra-takibi-nedir", title: "Kira Borcu İcra Takibi Nedir?" },
    { id: "icra-sureci", title: "İcra Takibi Süreci" },
    { id: "temerut-tahliye", title: "Temerrüt Nedeniyle Tahliye" },
    { id: "ucretler", title: "İcra Takibi Ücretleri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KiraBorcuIcraPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Kira Borcu İcra Takibi" description="İzmir'de ödenmeyen kira alacaklarının icra yoluyla tahsili hizmeti." serviceType="Kira Borcu İcra Takibi" />
            <PersonSchema knowsAbout={["Kira Borcu İcra Takibi", "Kira Alacağı Tahsilatı", "İcra ve İflas Hukuku", "Temerrüt Tahliyesi", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Kira Borcu İcra Takibi", url: "https://mertkagancetin.com/izmir-kira-avukati/kira-borcu-icra/" }
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
                        <span className="text-secondary">Kira Borcu İcra Takibi</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Kira Borcu İcra Takibi İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de ödenmeyen kira alacaklarınızın tahsili için icra takibi ve hukuki süreç desteği.
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
                            <strong>Kira borcu icra takibi</strong>, ödenmeyen kira alacaklarının yasal yollarla tahsil edilmesi sürecidir. Kiracının kira bedelini ödememesi durumunda kiraya veren, icra takibi başlatarak hem alacağını tahsil edebilir hem de kiracının tahliyesini sağlayabilir. İzmir&apos;de kira borcu icra takibi süreçlerinde profesyonel hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kira borcu tahsilatı, Türk Borçlar Kanunu&apos;nun 315. maddesi ve İcra ve İflas Kanunu&apos;nun 269-276. maddeleri çerçevesinde yürütülür. Kiracının temerrüde düşmesi halinde kiraya verenin hem alacak takibi hem de tahliye hakkı bulunmaktadır. <strong>Kira borcu avukatı</strong> olarak İzmir&apos;de kira alacağı tahsilatı ve temerrüt nedeniyle tahliye davalarında müvekkillerimizi temsil ediyoruz.
                        </p>

                        <h2 id="icra-takibi-nedir" className="scroll-mt-24">Kira Borcu İcra Takibi Nedir?</h2>

                        <p>
                            Kira borcu icra takibi, kiracının ödemediği kira bedellerinin icra müdürlüğü aracılığıyla zorla tahsil edilmesi işlemidir. Kiraya veren, kira sözleşmesine dayanarak icra takibi başlatabilir ve kiracının mal varlığına haciz koydurabilir. İcra takibi, alacağın tahsili için en etkili yasal yollardan biridir.
                        </p>

                        <p>
                            Türk Borçlar Kanunu madde 315&apos;e göre kiracı, kira bedelini veya yan giderleri ödeme borcunu ifa etmezse temerrüde düşmüş sayılır. Kiraya veren, konut ve çatılı işyeri kiralarında kiracıya yazılı olarak en az 30 günlük süre vererek bu sürede borcun ödenmemesi halinde sözleşmeyi feshedeceğini bildirir. Bu bildirim hem alacak takibinin hem de tahliye sürecinin temelini oluşturur.
                        </p>

                        <p>
                            İcra takibi yoluyla kira alacağının tahsilinde, kiraya verenin elinde yazılı kira sözleşmesi bulunması süreci kolaylaştırır. Ancak yazılı sözleşme olmasa bile banka havale kayıtları, tanık beyanları ve diğer delillerle kira ilişkisinin ve alacağın ispatı mümkündür. İcra takibinde kiracıya gönderilen ödeme emri ile hem borcun ödenmesi hem de tahliye talep edilebilir.
                        </p>

                        <h2 id="icra-sureci" className="scroll-mt-24">İcra Takibi Süreci</h2>

                        <p>
                            Kira borcu icra takibi belirli aşamalardan oluşan sistematik bir süreçtir. Her aşamada yasal sürelere uyulması ve usul kurallarının doğru uygulanması büyük önem taşır. İcra takibi sürecini aşağıdaki adımlarla yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "İhtarname Gönderimi", desc: "Kiracıya noter aracılığıyla ihtarname gönderilir. TBK m. 315 gereğince en az 30 günlük ödeme süresi tanınır. İhtarnamede borç miktarı, ödeme süresi ve ödenmemesi halinde icra takibi başlatılacağı ve tahliye talep edileceği bildirilir." },
                                { step: "2", title: "İcra Takibi Başlatma ve Ödeme Emri", desc: "İhtarname süresinin dolmasından sonra icra müdürlüğüne başvurularak takip talebi hazırlanır. İcra müdürlüğü kiracıya ödeme emri gönderir. Kiracıya borcunu ödemesi için 7 gün, itiraz etmesi için de 7 gün süre tanınır." },
                                { step: "3", title: "İtiraz Değerlendirmesi", desc: "Kiracı ödeme emrine itiraz ederse takip durur. Bu durumda kiraya veren, itirazın kaldırılması (İİK m. 68) veya itirazın iptali (İİK m. 67) davası açarak takibin devamını sağlar. Yazılı kira sözleşmesi varsa itirazın kaldırılması yolu daha hızlı sonuç verir." },
                                { step: "4", title: "Haciz İşlemleri", desc: "Ödeme emri kesinleştikten sonra kiracının maaşına, banka hesaplarına ve taşınır-taşınmaz mallarına haciz konulur. Maaş haczi net maaşın dörtte birini geçemez. Haczedilen mallar satışa çıkarılarak alacak tahsil edilir." },
                                { step: "5", title: "Tahsilat ve Tahliye", desc: "Haciz yoluyla elde edilen gelirden kira alacağı, faiz ve icra masrafları karşılanır. Tahliye talepli icra takibinde ise kiracının tahliyesi de bu süreçte sağlanır. Kiracı tahliye etmezse icra müdürlüğü aracılığıyla zorla tahliye yapılır." },
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

                        <p>
                            İcra takibi sürecinde yapılacak usul hataları hem alacağın tahsilini geciktirir hem de hak kaybına neden olabilir. Özellikle ihtarname sürelerinin doğru hesaplanması ve ödeme emrinin usulüne uygun tebliğ edilmesi kritik öneme sahiptir.
                        </p>

                        <h2 id="temerut-tahliye" className="scroll-mt-24">Temerrüt Nedeniyle Tahliye</h2>

                        <p>
                            Kiracının kira bedelini ödememesi, aynı zamanda tahliye sebebi oluşturur. TBK madde 315 gereğince kiraya veren, kiracıya en az 30 günlük süre tanıyan yazılı bir ihtarname gönderdikten sonra bu süre içinde ödeme yapılmazsa sözleşmeyi feshederek tahliye davası açabilir. Temerrüt nedeniyle tahliye, kira borcu tahsilatı ile birlikte yürütülebilen etkili bir hukuki yoldur.
                        </p>

                        <p>
                            Temerrüt nedeniyle tahliye sürecinde 30 günlük ihtar süresi konut ve çatılı işyeri kiraları için geçerlidir. Bu süre, ihtarnamenin kiracıya tebliğ edildiği tarihten itibaren başlar. İhtarname noter aracılığıyla gönderilmelidir. Süre içinde kiracı borcunu öderse tahliye hakkı ortadan kalkar. Ancak kiracı borcunu ödemezse kiraya veren Sulh Hukuk Mahkemesi&apos;nde tahliye davası açar.
                        </p>

                        <p>
                            Tahliye davası hakkında detaylı bilgi için <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">kiracı tahliye davası</Link> sayfamızı inceleyebilirsiniz. Ayrıca iki haklı ihtar yoluyla tahliye konusunda <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/">iki haklı ihtar rehberimizi</Link> okuyabilirsiniz.
                        </p>

                        <SectionCTA text="Kira alacağınızın tahsili için icra takibi başlatmak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">Kira Borcu İcra Takibi Ücretleri</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">İşlem Türü</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                        <th className="px-4 py-3 text-left">Ücret Aralığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">İhtarname Hazırlama</td><td className="px-4 py-3">1-3 gün</td><td className="px-4 py-3">3.000 - 5.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">İcra Takibi Başlatma</td><td className="px-4 py-3">2-8 ay</td><td className="px-4 py-3">15.000 - 30.000 TL</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">İtirazın Kaldırılması Davası</td><td className="px-4 py-3">3-6 ay</td><td className="px-4 py-3">20.000 - 35.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Temerrüt Nedeniyle Tahliye Davası</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">35.000 - 55.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret alacak miktarına ve davanın karmaşıklığına göre ilk görüşmede belirlenir. İcra takibi masrafları (harç, tebligat, haciz masrafları) ayrıca borçludan tahsil edilir.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kira Borcu İcra Takibi Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Borcu İcra Takibi Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira borcu icra takibi, kira alacağı tahsilatı ve temerrüt nedeniyle tahliye davalarında profesyonel hukuki destek sunuyor. İzmir icra müdürlüklerinde kira alacağı takiplerini etkin şekilde yürütüyor.
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
                                <Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İki Haklı İhtar ile Kiracı Tahliyesi Rehberi
                                </Link>
                                <Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kiracının Aidat Borcu ve Ev Sahibinin Sorumlulukları
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Alacağınızın Tahsili İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Ödenmeyen kira alacağınız için icra takibi başlatmak üzere hemen randevu alın.
                                    <strong className="text-white"> Kira borcu avukatı</strong> olarak size yardımcı olmaya hazırız.
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
