import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { articleProseClasses } from "@/lib/prose-classes";

export const metadata: Metadata = {
    title: "İzmir Nafaka Davası Avukatı",
    description: "İzmir nafaka davası avukatı Av. Mert Kağan Çetin. Yoksulluk nafakası, iştirak nafakası ve nafaka artırım davalarında uzman destek.",
    keywords: ["nafaka davası avukatı İzmir", "nafaka davası", "yoksulluk nafakası", "iştirak nafakası", "nafaka artırım davası"],
    openGraph: {
        title: "İzmir Nafaka Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de nafaka davalarında uzman avukatlık hizmeti. Adil nafaka miktarı için mücadele ediyoruz.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/nafaka-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/nafaka-davasi/" },
};

const faqs = [
    {
        question: "Nafaka ödenmezse ne olur?",
        answer: "Nafaka borcunu ödemeyen kişi hakkında icra takibi başlatılır. İcra takibine rağmen ödeme yapılmazsa İcra ve İflas Kanunu m. 344 uyarınca üç aya kadar tazyik hapsi uygulanabilir. Tazyik hapsi kararı nafaka borcunu ortadan kaldırmaz; borç faizi ile birlikte devam eder. Ayrıca nafaka borçlusunun maaşından ve banka hesaplarından haciz yapılabilir."
    },
    {
        question: "Nafaka artırım davası ne zaman açılır?",
        answer: "Nafaka artırım davası, ekonomik koşulların değişmesi halinde her zaman açılabilir. Enflasyon nedeniyle nafaka miktarının yetersiz kalması, çocuğun eğitim masraflarının artması, nafaka alacaklısının sağlık giderlerinin artması veya nafaka borçlusunun gelirinin artması artırım davası açmak için yeterli sebeplerdir. Genellikle yılda bir kez artırım davası açılması uygundur."
    },
    {
        question: "Nafaka ne zaman kalkar?",
        answer: "Yoksulluk nafakası, nafaka alacaklısının evlenmesi, taraflardan birinin ölümü veya nafaka alacaklısının yoksulluğunun ortadan kalkması halinde kendiliğinden veya dava ile kalkar. Nafaka alacaklısının evlilik dışı birliktelik yaşaması da nafakanın kaldırılması sebebidir. İştirak nafakası ise çocuğun ergin olmasıyla (18 yaş) sona erer; ancak eğitim devam ediyorsa eğitim sonuna kadar sürebilir."
    },
    {
        question: "İştirak nafakası kaç yaşına kadar ödenir?",
        answer: "İştirak nafakası kural olarak çocuğun 18 yaşını doldurmasına kadar ödenir. Ancak çocuk eğitimine devam ediyorsa TMK m. 328/2 uyarınca eğitim sona erene kadar nafaka devam eder. Üniversite okuyan çocuk için eğitim süresince iştirak nafakası ödenmeye devam edilir. Çocuk 18 yaşından önce evlenirse veya mahkeme kararıyla ergin kılınırsa nafaka sona erer."
    },
    {
        question: "Erkek nafaka alabilir mi?",
        answer: "Evet, erkek de nafaka alabilir. TMK m. 175 uyarınca yoksulluk nafakası cinsiyet ayrımı gözetmeksizin boşanma yüzünden yoksulluğa düşecek tarafa verilir. Boşanmada kusuru daha ağır olan taraftan nafaka talep edilemez. Erkek eş çalışamıyor, geliri yetersiz veya boşanma nedeniyle yoksulluğa düşecekse kadın eşten yoksulluk nafakası talep edebilir."
    }
];

const tocItems = [
    { id: "nafaka-turleri", title: "Nafaka Türleri" },
    { id: "dava-sureci", title: "Nafaka Davası Sürecimiz" },
    { id: "nafaka-artirim-azaltim", title: "Artırım ve Azaltım Davaları" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function NafakaDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Nafaka Davası", "Yoksulluk Nafakası", "İştirak Nafakası", "Nafaka Artırım Davası", "Nafaka Kaldırma Davası"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Nafaka Davası", url: "https://mertkagancetin.com/izmir-bosanma-avukati/nafaka-davasi/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-bosanma-avukati/" className="hover:text-white transition-colors">İzmir Boşanma Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Nafaka Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Nafaka Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Adil nafaka miktarı için mücadele ediyoruz.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile haklarınızı koruyun.
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
                            <strong>İzmir nafaka davası avukatı</strong> olarak boşanma sürecinde ve sonrasında <Link href="/sozluk/nafaka/">nafaka</Link> haklarınızı koruyoruz. Yoksulluk nafakası, iştirak nafakası, tedbir nafakası ile nafaka artırım, azaltım ve kaldırma davalarında kapsamlı hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Nafaka davaları, Türk Medeni Kanunu&apos;nun 169, 175 ve 182. maddeleri kapsamında düzenlenir. Her nafaka türünün kendine özgü koşulları ve hesaplama yöntemi vardır. <strong>Nafaka davası avukatı</strong> olarak Bayraklı Adliyesi Aile Mahkemesi&apos;ndeki nafaka davalarını yakından takip ediyoruz.
                        </p>

                        <h2 id="nafaka-turleri" className="scroll-mt-24">Nafaka Türleri</h2>

                        <p>
                            Türk hukukunda üç temel nafaka türü bulunur. Her birinin yasal dayanağı, koşulları ve süresi farklıdır:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Nafaka Türü</th>
                                        <th className="px-6 py-4 text-left">Yasal Dayanak ve Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Tedbir Nafakası", desc: "TMK m. 169: Boşanma davası süresince eşe ve çocuklara ödenen geçici nafakadır. Dava açılmasıyla birlikte talep edilir ve dava sonuna kadar devam eder. Kusur aranmaz." },
                                        { title: "Yoksulluk Nafakası", desc: "TMK m. 175: Boşanma yüzünden yoksulluğa düşecek eşe ödenir. Kusuru daha ağır olan taraf yoksulluk nafakası talep edemez. Süresiz olarak hükmedilir ancak koşulların değişmesiyle kaldırılabilir." },
                                        { title: "İştirak Nafakası", desc: "TMK m. 182: Velayeti almayan ebeveynin çocuğun bakım ve eğitim giderlerine katılma yükümlülüğüdür. Çocuğun ergin olmasına (18 yaş) kadar devam eder; eğitim devam ediyorsa eğitim sonuna kadar uzar." },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.title}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Nafaka hesaplama ve türleri hakkında detaylı bilgi için <Link href="/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/">nafaka hesaplama rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <figure className="not-prose my-10">
                            <Image
                                src="/images/infographics/nafaka-turleri.webp"
                                alt="Nafaka türleri ve farkları infografiği: tedbir nafakası TMK m. 169, yoksulluk nafakası TMK m. 175 ve iştirak nafakası TMK m. 328 karşılaştırması"
                                width={1200}
                                height={800}
                                className="w-full max-w-lg mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Nafaka türleri ve aralarındaki farklar</figcaption>
                        </figure>

                        <h2 id="dava-sureci" className="scroll-mt-24">İzmir&apos;de Nafaka Davası Sürecimiz</h2>

                        <p>
                            <strong>Nafaka davası avukatı</strong> olarak adil nafaka miktarı belirlenebilmesi için kapsamlı bir süreç yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Gelir ve Gider Analizi", desc: "Her iki tarafın gelirlerini, mal varlıklarını, yaşam standartlarını ve giderlerini detaylı olarak analiz ediyoruz. Maaş bordroları, banka hesapları ve vergi beyannamelerini inceliyoruz." },
                                { step: "2", title: "Nafaka Miktarı Hesaplama", desc: "Yargıtay içtihatları ve güncel ekonomik koşullar doğrultusunda adil bir nafaka miktarı belirliyoruz. Çocuk varsa bakım ve eğitim giderlerini ayrıca hesaplıyoruz." },
                                { step: "3", title: "Dava Dilekçesi ve Deliller", desc: "Nafaka talebini destekleyen tüm delilleri (gelir belgeleri, gider kalemleri, yaşam standardı belgeleri) eksiksiz sunarak dava dilekçesini hazırlıyoruz." },
                                { step: "4", title: "Duruşma ve Bilirkişi", desc: "Duruşmalara katılıyor, gerektiğinde bilirkişi incelemesi talep ediyor ve karşı tarafın gelir gizleme girişimlerini ortaya koyuyoruz." },
                                { step: "5", title: "Karar ve Tahsilat", desc: "Nafaka kararının kesinleşmesini sağlıyor, ödeme yapılmazsa icra takibi başlatıyoruz. Gerektiğinde tazyik hapsi talebinde bulunuyoruz." },
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

                        <h2 id="nafaka-artirim-azaltim" className="scroll-mt-24">Nafaka Artırım, Azaltım ve Kaldırma Davaları</h2>

                        <p>
                            Nafaka kararı kesinleştikten sonra koşulların değişmesi halinde nafaka miktarı değiştirilebilir veya nafaka tamamen kaldırılabilir. <strong>Nafaka davası avukatı</strong> olarak şu dava türlerinde hizmet veriyoruz:
                        </p>

                        <h3>Nafaka Artırım Davası</h3>

                        <p>
                            Nafaka miktarının yetersiz kalması halinde TMK m. 176/4 uyarınca nafaka artırım davası açılabilir. Artırım talebini haklı kılan sebepler:
                        </p>

                        <ul>
                            <li><strong>Enflasyon ve hayat pahalılığı:</strong> Nafaka miktarı zaman içinde alım gücünü yitirdiğinde artırım talep edilir</li>
                            <li><strong>Çocuğun artan ihtiyaçları:</strong> Eğitim kademesi değişikliği, sağlık giderleri veya özel ders ihtiyacı</li>
                            <li><strong>Nafaka borçlusunun gelir artışı:</strong> Borçlunun terfi etmesi, ek gelir elde etmesi veya yeni mal edinmesi</li>
                        </ul>

                        <h3>Nafaka Azaltım Davası</h3>

                        <p>
                            Nafaka borçlusunun ekonomik durumunun kötüleşmesi halinde nafaka azaltım davası açılabilir. İşten çıkarılma, hastalık, emeklilik veya yeni evlilikte bakım yükümlülüğünün artması azaltım sebepleri arasındadır.
                        </p>

                        <h3>Nafaka Kaldırma Davası</h3>

                        <p>
                            Yoksulluk nafakası alacaklısının evlenmesi, evli gibi birlikte yaşaması veya yoksulluğunun ortadan kalkması halinde nafaka kaldırma davası açılır. Nafaka alacaklısının düzenli bir işe girmesi veya miras yoluyla mal edinmesi de kaldırma sebebi olabilir.
                        </p>

                        <p>
                            <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> sürecinde de nafaka düzenlemesi yapılır ve protokolde net olarak belirtilir.
                        </p>

                        <SectionCTA text="Nafaka davanız için uzman avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Nafaka Davası Ücretleri</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">Dava Türü</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                        <th className="px-4 py-3 text-left">Ücret Aralığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Nafaka Davası</td><td className="px-4 py-3">3-6 ay</td><td className="px-4 py-3">20.000 - 40.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Nafaka Artırım / Azaltım</td><td className="px-4 py-3">3-6 ay</td><td className="px-4 py-3">20.000 - 35.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına göre ilk görüşmede belirlenir. <Link href="/izmir-bosanma-avukati/">Boşanma hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Nafaka Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Nafaka Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Nafaka davaları, nafaka artırım ve azaltım davaları ile nafaka icra takiplerinde profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde aile hukuku davalarını takip ediyor.
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
                                <Link href="/izmir-bosanma-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &larr; İzmir Boşanma Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası
                                </Link>
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                                <Link href="/sozluk/nafaka/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Sözlük: Nafaka Nedir?
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Nafaka Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Nafaka haklarınız için hemen randevu alın.
                                    <strong className="text-white"> Nafaka davası avukatı</strong> olarak size yardımcı olmaya hazırız.
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
