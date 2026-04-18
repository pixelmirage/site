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
    title: "Boşanma Avukatı Ücretleri İzmir 2026",
    description: "İzmir'de boşanma avukatı ücretleri 2026 güncel fiyat listesi. Anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal paylaşımı dava ücretleri.",
    keywords: ["boşanma avukatı ücretleri İzmir", "boşanma avukatı ücreti", "anlaşmalı boşanma ücreti İzmir", "çekişmeli boşanma ücreti", "İzmir boşanma avukatı fiyat"],
    openGraph: {
        title: "Boşanma Avukatı Ücretleri İzmir 2026 | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanma avukatı ücretleri 2026 güncel fiyat listesi. Anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal paylaşımı dava ücretleri.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/" },
};

const faqs = [
    {
        question: "Boşanma avukatı ne kadar ücret alır?",
        answer: "2026 yılında İzmir'de boşanma avukatı ücretleri dava türüne göre değişmektedir. Anlaşmalı boşanma için 25.000-40.000 TL, çekişmeli boşanma için 40.000-80.000 TL arasında ücret uygulanmaktadır. Ücret; davanın karmaşıklığına, süresine ve kapsamına göre ilk görüşmede belirlenir. İzmir Barosu tarafından belirlenen asgari ücret tarifesinin altında ücret talep edilmesi yasaktır."
    },
    {
        question: "Anlaşmalı boşanma ücreti ne kadar?",
        answer: "İzmir'de anlaşmalı boşanma avukat ücreti 2026 yılında ortalama 25.000-40.000 TL arasındadır. Bu ücrete boşanma protokolü hazırlama, dava dilekçesi yazımı, duruşma takibi ve kararın kesinleştirilmesi dahildir. Anlaşmalı boşanma, çekişmeli boşanmaya kıyasla hem süre hem maliyet açısından daha avantajlıdır. Tek celsede sonuçlandığı için avukatın iş yükü de daha azdır."
    },
    {
        question: "Avukata danışma ücreti var mı?",
        answer: "Büromuz ilk görüşmeyi ücretsiz olarak gerçekleştirmektedir. İlk görüşmede davanızın kapsamı, hukuki süreç ve tahmini ücret hakkında bilgi alabilirsiniz. İlk görüşme sonrasında devam eden danışmanlık hizmetleri için 3.000-6.000 TL arasında danışmanlık ücreti uygulanmaktadır. Danışmanlık ücreti, dava açılması halinde avukatlık ücretinden mahsup edilir."
    },
    {
        question: "Boşanma dava masraflarını kim öder?",
        answer: "Boşanma dava masrafları (mahkeme harcı, tebligat gideri, bilirkişi ücreti) davayı açan tarafça peşin olarak ödenir. Dava sonunda mahkeme, masrafları kusurlu tarafa yükleyebilir. Anlaşmalı boşanmada masraflar genellikle taraflar arasında paylaşılır. 2026 yılında bir boşanma davasının toplam masrafı (avukat ücreti hariç) yaklaşık 5.000-15.000 TL arasında değişmektedir."
    },
    {
        question: "Avukatlık ücreti taksitle ödenebilir mi?",
        answer: "Evet, büromuz avukatlık ücretinin taksitlendirilmesi konusunda müvekkillerine esneklik sağlamaktadır. Dava başlangıcında belirli bir ön ödeme alınarak kalan ücret aylık taksitler halinde ödenebilir. Taksit planı ve ödeme koşulları ilk görüşmede davanın detaylarına göre birlikte belirlenir. Ödeme planı avukatlık sözleşmesinde açıkça düzenlenir."
    }
];

const tocItems = [
    { id: "2026-bosanma-avukati-ucretleri", title: "2026 Boşanma Avukatı Ücretleri" },
    { id: "ucreti-etkileyen-faktorler", title: "Ücreti Etkileyen Faktörler" },
    { id: "dava-masraflari", title: "Dava Masrafları" },
    { id: "ucretsiz-on-gorusme", title: "Ücretsiz Ön Görüşme" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function BosanmaAvukatiUcretleriIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Boşanma Hukuku Danışmanlığı" description="İzmir'de boşanma hukuku alanında avukatlık ve danışmanlık hizmeti." serviceType="Boşanma Hukuku Danışmanlığı" />
            <PersonSchema knowsAbout={["Boşanma Avukatı Ücretleri", "Avukatlık Ücret Tarifesi", "Boşanma Davası Masrafları", "İzmir Barosu Ücret Tarifesi", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Boşanma Avukatı Ücretleri İzmir", url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/" }
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
                        <span className="text-secondary">Boşanma Avukatı Ücretleri İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Boşanma Avukatı Ücretleri İzmir 2026
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de boşanma davalarında avukatlık ücretleri, danışmanlık ücretleri ve dava masrafları hakkında güncel bilgi.
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
                            <strong>İzmir boşanma avukatı ücretleri</strong> dava türüne, kapsamına ve süresine göre değişmektedir. 2026 yılı güncel avukatlık ücret tarifesi, dava masrafları ve ödeme koşulları hakkında detaylı bilgiyi bu sayfada bulabilirsiniz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Boşanma davası açmayı düşünen kişilerin en çok merak ettiği konuların başında avukatlık ücretleri gelmektedir. Avukatlık ücreti, Avukatlık Kanunu m. 164 uyarınca avukat ile müvekkil arasında serbestçe belirlenir; ancak İzmir Barosu tarafından her yıl yayımlanan asgari ücret tarifesinin altında bir ücret kararlaştırılması mümkün değildir. Bu sayfada 2026 yılına ait güncel boşanma avukatı ücretlerini ve dava masraflarını şeffaf bir şekilde paylaşıyoruz.
                        </p>

                        <h2 id="2026-bosanma-avukati-ucretleri" className="scroll-mt-24">2026 Boşanma Avukatı Ücretleri</h2>

                        <p>
                            Aşağıdaki tabloda İzmir&apos;de 2026 yılında uygulanan ortalama boşanma avukatı ücretlerini dava türüne göre inceleyebilirsiniz. Bu ücretler piyasa ortalamasını yansıtmakta olup kesin ücret davanın detaylarına göre ilk görüşmede belirlenir.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Dava Türü</th>
                                        <th className="px-6 py-4 text-left">Ortalama Süre</th>
                                        <th className="px-6 py-4 text-left">Ücret Aralığı (2026)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { type: "Anlaşmalı Boşanma", duration: "1-3 ay", price: "25.000 - 40.000 TL" },
                                        { type: "Çekişmeli Boşanma", duration: "1-3 yıl", price: "40.000 - 80.000 TL" },
                                        { type: "Velayet Davası", duration: "6 ay - 2 yıl", price: "30.000 - 60.000 TL" },
                                        { type: "Nafaka Davası", duration: "3 ay - 1 yıl", price: "20.000 - 40.000 TL" },
                                        { type: "Mal Paylaşımı Davası", duration: "1-3 yıl", price: "40.000 - 80.000 TL" },
                                        { type: "Hukuki Danışmanlık", duration: "Tek seans", price: "3.000 - 6.000 TL" },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.type}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.duration}</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki ücretler ortalama değerlerdir ve davanın özel koşullarına göre farklılık gösterebilir. Birden fazla dava (boşanma + velayet + nafaka) birlikte yürütüldüğünde paket ücretlendirme uygulanabilir. <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> ücretleri, çekişmeli boşanmaya kıyasla önemli ölçüde düşüktür.
                        </p>

                        <p>
                            Avukatlık Kanunu m. 164/4 uyarınca avukatlık ücreti, dava veya hükmolunacak şeyin değerinin yüzde yirmi beşini geçemez. Ayrıca avukat ile müvekkil arasında yapılan avukatlık sözleşmesinin yazılı olması zorunludur.
                        </p>

                        <h2 id="ucreti-etkileyen-faktorler" className="scroll-mt-24">Ücreti Etkileyen Faktörler</h2>

                        <p>
                            Boşanma avukatı ücretleri sabit bir rakam olmayıp çeşitli faktörlere göre değişir. Ücretin belirlenmesinde rol oynayan başlıca faktörler şunlardır:
                        </p>

                        <ul>
                            <li><strong>Dava türü:</strong> Anlaşmalı boşanma tek celsede sonuçlandığı için çekişmeli boşanmaya göre daha düşük ücretlidir. Çekişmeli boşanma, uzun süren yargılama süreci nedeniyle daha yüksek avukatlık ücreti gerektirir.</li>
                            <li><strong>Davanın karmaşıklığı:</strong> Yüksek değerli mal varlığı bulunan, yurt dışı bağlantılı veya çok sayıda uyuşmazlık konusu içeren davalarda ücret artabilir.</li>
                            <li><strong>Dava süresi:</strong> Çekişmeli boşanma davalarında duruşma sayısı arttıkça avukatın iş yükü de artar. Uzun süren davalarda ücret buna göre belirlenir.</li>
                            <li><strong>Dava değeri:</strong> Tazminat ve mal paylaşımı taleplerinin miktarı ücretin belirlenmesinde etkili olabilir.</li>
                            <li><strong>Ek davalar:</strong> Boşanma davasıyla birlikte velayet, nafaka, tazminat veya mal paylaşımı davaları açılması halinde toplam ücret farklılık gösterir.</li>
                        </ul>

                        <p>
                            Ücret belirlenirken avukatın deneyimi, uzmanlık alanı ve barodaki kıdemi de dikkate alınır. Ancak en düşük ücret her durumda İzmir Barosu asgari ücret tarifesinin altına düşemez. Düşük ücret teklif eden avukatlara karşı dikkatli olunmalıdır; hukuki süreçte alınacak yetersiz hizmet, telafisi güç hak kayıplarına yol açabilir.
                        </p>

                        <SectionCTA text="Davanıza özel ücret bilgisi almak için ücretsiz ön görüşme randevusu alın." />

                        <h2 id="dava-masraflari" className="scroll-mt-24">Dava Masrafları</h2>

                        <p>
                            Boşanma davasında avukatlık ücreti dışında çeşitli dava masrafları da bulunmaktadır. Bu masraflar avukatlık ücretinden bağımsız olup davayı açan tarafça peşin olarak ödenir. Dava sonunda mahkeme, masrafları kusurlu tarafa yükleyebilir.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Masraf Kalemi</th>
                                        <th className="px-6 py-4 text-left">Açıklama</th>
                                        <th className="px-6 py-4 text-left">Tahmini Tutar (2026)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { item: "Mahkeme Harcı", desc: "Başvuru harcı ve karar harcı olarak ikiye ayrılır", price: "2.000 - 5.000 TL" },
                                        { item: "Tebligat Gideri", desc: "Dava dilekçesinin karşı tarafa ve tanıklara tebliğ masrafı", price: "500 - 1.500 TL" },
                                        { item: "Bilirkişi Ücreti", desc: "Mal paylaşımı, gelir tespiti gibi konularda bilirkişi incelemesi", price: "3.000 - 8.000 TL" },
                                        { item: "Keşif Gideri", desc: "Taşınmaz değer tespiti için yapılan keşif masrafı", price: "2.000 - 5.000 TL" },
                                        { item: "Tanık Gideri", desc: "Tanıkların duruşmaya getirilmesi için tebligat ve yol masrafı", price: "500 - 2.000 TL" },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.item}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Toplam dava masrafı, davanın türüne ve kapsamına göre 5.000 ila 15.000 TL arasında değişmektedir. Çekişmeli boşanma davalarında bilirkişi ve keşif giderleri nedeniyle masraflar daha yüksek olabilir. Anlaşmalı boşanmalarda ise genellikle sadece mahkeme harcı ve tebligat gideri söz konusudur.
                        </p>

                        <p>
                            Ekonomik durumu yetersiz olan kişiler adli yardım kurumuna başvurarak mahkeme masraflarından muafiyet talep edebilir. Adli yardım, geliri asgari ücretin altında olan kişilere sağlanan bir haktır.
                        </p>

                        <h2 id="ucretsiz-on-gorusme" className="scroll-mt-24">Ücretsiz Ön Görüşme</h2>

                        <p>
                            Büromuz, boşanma davası düşünen müvekkillerine ücretsiz ilk görüşme imkanı sunmaktadır. Bu görüşmede davanızın kapsamı, başarı şansı, tahmini süre ve ücret hakkında detaylı bilgi alabilirsiniz. Ücretsiz ön görüşme, herhangi bir taahhüt içermez ve tamamen bilgilendirme amaçlıdır.
                        </p>

                        <p>
                            Ön görüşme sırasında şu konular ele alınır: mevcut durumun değerlendirilmesi, hukuki seçeneklerin açıklanması, dava stratejisinin belirlenmesi, tahmini süre ve maliyet bilgisi ile ödeme koşullarının görüşülmesi. Görüşme yüz yüze veya online olarak gerçekleştirilebilir.
                        </p>

                        <p>
                            Ücretsiz ön görüşme randevusu almak için <Link href="/iletisim/">iletişim sayfamızı</Link> ziyaret edebilir veya doğrudan 0544 585 46 45 numaralı telefonu arayabilirsiniz. Bayraklı Adliyesi yakınındaki ofisimizde veya online olarak görüşme yapılabilir.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Boşanma Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Boşanma Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Boşanma davaları, nafaka, velayet ve mal paylaşımı uyuşmazlıklarında profesyonel hukuki destek sunuyor. Şeffaf ücretlendirme politikası ve ücretsiz ilk görüşme imkanı ile müvekkillerine güven veriyor.
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
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi
                                </Link>
                                <Link href="/iletisim/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İletişim ve Randevu
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Boşanma Davanız İçin Ücretsiz Ön Görüşme Alın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Davanıza özel ücret bilgisi ve hukuki danışmanlık için ücretsiz ön görüşme randevusu alın.
                                    <strong className="text-white"> Boşanma avukatı</strong> olarak size yardımcı olmaya hazırız.
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
