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
    title: "Mal Paylaşımı Davaları İzmir | Boşanma Avukatı",
    description: "İzmir'de boşanmada mal paylaşımı davası avukatı Av. Mert Kağan Çetin. Edinilmiş mallara katılma rejimi, katkı payı ve değer artış payı davalarında uzman destek.",
    keywords: ["mal paylaşımı İzmir", "boşanmada mal paylaşımı avukatı İzmir", "edinilmiş mallara katılma rejimi", "katkı payı davası", "değer artış payı davası"],
    openGraph: {
        title: "Mal Paylaşımı Davaları İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanmada mal paylaşımı, edinilmiş mallara katılma rejimi ve katkı payı davalarında uzman avukat desteği.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/mal-paylasimi-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/mal-paylasimi-izmir/" },
};

const faqs = [
    {
        question: "Boşanmada mal paylaşımı nasıl yapılır?",
        answer: "Boşanmada mal paylaşımı, edinilmiş mallara katılma rejimi (TMK m. 218-241) çerçevesinde yapılır. Evlilik süresince edinilen mallar (maaş, kira geliri, yatırım kazancı vb.) eşler arasında eşit olarak paylaşılır. Her eşin kişisel malları (miras, evlilik öncesi mallar, kişisel kullanım eşyaları) paylaşım dışında kalır. Mal paylaşımı davası boşanma davasından ayrı olarak açılır ve boşanma kararının kesinleşmesinden sonra sonuçlandırılır."
    },
    {
        question: "Evlilik öncesi mallar paylaşılır mı?",
        answer: "Hayır, evlilik öncesi edinilen mallar kişisel mal niteliğinde olup paylaşıma dahil edilmez. TMK m. 220 uyarınca eşlerden birinin evlenmeden önce sahip olduğu mallar, miras yoluyla edinilen mallar ve karşılıksız kazanma yoluyla (bağış gibi) elde edilen mallar kişisel mal sayılır. Ancak kişisel bir malın geliri (örneğin evlilik öncesi alınan evin kira geliri) edinilmiş mal olarak paylaşıma dahil olabilir."
    },
    {
        question: "Mal paylaşımı davası ne kadar sürer?",
        answer: "Mal paylaşımı davası ortalama 1 ila 3 yıl arasında sürmektedir. Süre; mal varlığının kapsamına, bilirkişi incelemesinin gerekliliğine, taşınmaz değer tespitine ve taraflar arasındaki uyuşmazlığın boyutuna göre değişir. Yüksek değerli ve karmaşık mal varlıkları bulunan davalarda süre uzayabilir. Tarafların anlaşması halinde dava daha kısa sürede sonuçlanabilir."
    },
    {
        question: "Ev kimin üzerineyse ona mı kalır?",
        answer: "Hayır, boşanmada evin tapuda kimin üzerine kayıtlı olduğu tek başına belirleyici değildir. Evlilik süresinde edinilen bir taşınmaz, tapuda tek bir eşin üzerine kayıtlı olsa dahi edinilmiş mal kabul edilir ve değerinin yarısı diğer eşe ödenir. Ancak ev, eşlerden birinin kişisel malıyla (miras, evlilik öncesi birikim) alınmışsa ve bu durum ispatlanabilirse paylaşım dışında kalabilir."
    },
    {
        question: "Mal paylaşımında zamanaşımı var mı?",
        answer: "Evet, mal paylaşımı davasında zamanaşımı süresi boşanma kararının kesinleşmesinden itibaren 10 yıldır (TMK m. 178). Bu süre içinde mal paylaşımı davası açılmazsa talep hakkı zamanaşımına uğrar. Zamanaşımı süresinin dolmasından sonra açılan davalar, karşı tarafın zamanaşımı itirazında bulunması halinde reddedilir. Bu nedenle boşanma kararı kesinleştikten sonra mal paylaşımı davasının mümkün olan en kısa sürede açılması tavsiye edilir."
    }
];

const tocItems = [
    { id: "bosanmada-mal-paylasimi-nedir", title: "Boşanmada Mal Paylaşımı Nedir?" },
    { id: "edinilmis-mallar-ve-kisisel-mallar", title: "Edinilmiş Mallar ve Kişisel Mallar" },
    { id: "katki-payi-ve-deger-artis-payi", title: "Katkı Payı ve Değer Artış Payı" },
    { id: "mal-paylasimi-davasi-sureci", title: "Mal Paylaşımı Davası Süreci" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function MalPaylasimiIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Mal Paylaşımı Davası" description="İzmir'de boşanmada mal paylaşımı, edinilmiş mallara katılma rejimi ve katkı payı davası hizmeti." serviceType="Mal Paylaşımı Davası" />
            <PersonSchema knowsAbout={["Mal Paylaşımı", "Edinilmiş Mallara Katılma Rejimi", "Katkı Payı Davası", "Değer Artış Payı", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Mal Paylaşımı İzmir", url: "https://mertkagancetin.com/izmir-bosanma-avukati/mal-paylasimi-izmir/" }
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
                        <span className="text-secondary">Mal Paylaşımı İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Mal Paylaşımı Davaları İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de boşanmada mal paylaşımı, edinilmiş mallara katılma rejimi ve katkı payı davalarında uzman avukat desteği.
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
                            <strong>İzmir mal paylaşımı avukatı</strong> olarak boşanma sürecinde edinilmiş mallara katılma rejimi, katkı payı alacağı ve değer artış payı davalarında kapsamlı hukuki destek sunuyoruz. <Link href="/sozluk/mal-paylasimi/">Mal paylaşımı</Link> hukuki süreci hakkında uzman rehberlik sağlıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Boşanma sürecinde en çok uyuşmazlık yaşanan konuların başında mal paylaşımı gelmektedir. Türk Medeni Kanunu&apos;nun 2002 yılında yürürlüğe giren düzenlemesiyle yasal mal rejimi olarak edinilmiş mallara katılma rejimi kabul edilmiştir. Bu rejim, evlilik süresince edinilen malların boşanma halinde eşler arasında eşit olarak paylaşılmasını öngörür.
                        </p>

                        <h2 id="bosanmada-mal-paylasimi-nedir" className="scroll-mt-24">Boşanmada Mal Paylaşımı Nedir?</h2>

                        <p>
                            Boşanmada mal paylaşımı, TMK m. 218-241 arasında düzenlenen edinilmiş mallara katılma rejimi çerçevesinde gerçekleştirilir. Bu rejime göre her eşin evlilik süresince elde ettiği mallar edinilmiş mal olarak kabul edilir ve boşanma halinde bu malların toplam değerinin yarısı üzerinde diğer eşin alacak hakkı doğar. Mal paylaşımı davası, boşanma davasından bağımsız olarak ayrı bir dava şeklinde açılır.
                        </p>

                        <p>
                            01.01.2002 tarihinden önce evlenen çiftler için farklı kurallar uygulanır. Eski Medeni Kanun döneminde yasal mal rejimi mal ayrılığı idi; yani her eş kendi kazandığı malın sahibiydi. 2002 sonrasında yapılan yasal değişiklikle birlikte, bu tarihten itibaren edinilen mallar için edinilmiş mallara katılma rejimi uygulanmaya başlamıştır. Dolayısıyla 2002 öncesi evlenmiş çiftlerin 01.01.2002 tarihinden önce edindikleri mallar mal ayrılığı rejimine, bu tarihten sonra edindikleri mallar ise edinilmiş mallara katılma rejimine tabidir.
                        </p>

                        <p>
                            Mal paylaşımı davasında amaç, eşlerin evlilik süresince birlikte oluşturdukları ekonomik değerin adil bir şekilde paylaşılmasını sağlamaktır. Hakimin mal paylaşımı kararı verirken kusur durumunu dikkate almaması önemli bir husustur; mal paylaşımı kusurdan bağımsız olarak yapılır.
                        </p>

                        <h2 id="edinilmis-mallar-ve-kisisel-mallar" className="scroll-mt-24">Edinilmiş Mallar ve Kişisel Mallar</h2>

                        <p>
                            Mal paylaşımında en kritik ayrım, edinilmiş mallar ile kişisel mallar arasındaki farkın doğru belirlenmesidir. TMK m. 219 edinilmiş malları, TMK m. 220 ise kişisel malları tanımlamaktadır. Hangi malların paylaşıma dahil olup hangilerinin kişisel mal olarak korunduğunu bilmek, dava stratejisi açısından büyük önem taşır.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Edinilmiş Mallar (Paylaşıma Dahil)</th>
                                        <th className="px-6 py-4 text-left">Kişisel Mallar (Paylaşım Dışı)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { edinilmis: "Çalışma karşılığı elde edilen gelirler (maaş, prim, ikramiye)", kisisel: "Evlilik öncesi edinilen mallar" },
                                        { edinilmis: "Sosyal güvenlik ve yardım kurumlarının yaptığı ödemeler", kisisel: "Miras yoluyla edinilen mallar" },
                                        { edinilmis: "Çalışma gücünün kaybı nedeniyle ödenen tazminatlar", kisisel: "Karşılıksız kazanma yoluyla (bağış) elde edilen mallar" },
                                        { edinilmis: "Kişisel malların gelirleri (kira, faiz, temettü)", kisisel: "Manevi tazminat alacakları" },
                                        { edinilmis: "Edinilmiş malların yerine geçen değerler", kisisel: "Kişisel kullanıma yönelik eşyalar (giysi, aksesuar)" },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-slate-600">{item.edinilmis}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.kisisel}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Uygulamada en sık karşılaşılan sorun, bir malın edinilmiş mal mı yoksa kişisel mal mı olduğunun ispatıdır. TMK m. 222 uyarınca bir eşin bir malı kişisel mal olarak ileri sürmesi halinde bunu ispat yükü o eşe aittir. İspat edilemeyen mallar edinilmiş mal olarak kabul edilir. Bu nedenle evlilik öncesi alınan malların belgelenmesi (banka dekontları, tapu kayıtları, miras belgeleri) büyük önem taşır.
                        </p>

                        <SectionCTA text="Mal paylaşımı hakkında hukuki danışmanlık almak ister misiniz?" />

                        <h2 id="katki-payi-ve-deger-artis-payi" className="scroll-mt-24">Katkı Payı ve Değer Artış Payı</h2>

                        <p>
                            Mal paylaşımı hukukunda katkı payı alacağı ve değer artış payı alacağı farklı kavramlardır. TMK m. 227 değer artış payını, TMK m. 228 ise katkı payı alacağını düzenler. Her iki alacak türü de eşlerin evlilik süresince birbirlerinin mal varlığına yaptıkları katkıların karşılığının alınmasını sağlar.
                        </p>

                        <p>
                            <strong>Değer artış payı (TMK m. 227):</strong> Eşlerden birinin diğer eşin bir malının edinilmesine, iyileştirilmesine veya korunmasına hiç ya da uygun bir karşılık almaksızın katkıda bulunması halinde, tasfiye sırasında bu malda meydana gelen değer artışı oranında alacak hakkına sahiptir. Örneğin eşlerden birinin kişisel birikimini kullanarak diğer eşin üzerine kayıtlı bir evin tadilat masraflarını karşılaması halinde, evin değerindeki artış oranında alacak hakkı doğar. Daha detaylı bilgi için <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/">boşanmada mal paylaşımı rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <p>
                            <strong>Katkı payı alacağı:</strong> 01.01.2002 tarihinden önce edinilen mallar için geçerli olan bu alacak türü, eski Medeni Kanun döneminde mal ayrılığı rejiminde eşin diğer eşin malına yaptığı katkının karşılığını talep etmesini sağlar. Katkı payı alacağında katkının ispatı büyük önem taşır. Banka hesap hareketleri, ödeme dekontları ve tanık beyanları ispat araçları olarak kullanılabilir.
                        </p>

                        <p>
                            Her iki alacak türünde de dava açma süresi boşanma kararının kesinleşmesinden itibaren 10 yıldır. Ancak hak kaybını önlemek adına mal paylaşımı davasının boşanma kararının kesinleşmesinden hemen sonra açılması tavsiye edilir.
                        </p>

                        <h2 id="mal-paylasimi-davasi-sureci" className="scroll-mt-24">Mal Paylaşımı Davası Süreci</h2>

                        <p>
                            Mal paylaşımı davası, boşanma davasından ayrı olarak aile mahkemesinde açılır. Dava, boşanma kararının kesinleşmesinden sonra açılabileceği gibi, boşanma davasıyla birlikte de açılabilir. Birlikte açılan mal paylaşımı davası, boşanma kararı kesinleşene kadar bekletici mesele yapılır.
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Mal Varlığı Tespiti", desc: "Eşlerin evlilik süresince edindiği tüm mal varlıkları (taşınmazlar, araçlar, banka hesapları, şirket hisseleri, yatırım araçları) tespit edilir. Tapu, trafik ve banka kayıtları celp edilir." },
                                { step: "2", title: "Edinilmiş Mal - Kişisel Mal Ayrımı", desc: "Tespit edilen malların edinilmiş mal mi yoksa kişisel mal mı olduğu belirlenir. Kişisel mal iddiasında bulunan taraf bu durumu ispat etmekle yükümlüdür." },
                                { step: "3", title: "Bilirkişi İncelemesi", desc: "Taşınmazların güncel değer tespiti, şirket hisselerinin değerlemesi ve mali hesaplamalar için bilirkişi raporu alınır. Bilirkişi raporu, mahkemenin karar vermesinde önemli bir dayanak oluşturur." },
                                { step: "4", title: "Katılma Alacağının Hesaplanması", desc: "Her eşin edinilmiş mallarının toplam değerinden borçları düşülerek artık değer hesaplanır. Diğer eşin artık değerin yarısı üzerinde alacak hakkı bulunur (TMK m. 231)." },
                                { step: "5", title: "Mahkeme Kararı", desc: "Hakim, bilirkişi raporu ve toplanan delilleri değerlendirerek katılma alacağına hükmeder. Karara itiraz halinde istinaf yoluna başvurulabilir." },
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
                            Mal paylaşımı davası zamanaşımı süresi TMK m. 178 uyarınca boşanma kararının kesinleşmesinden itibaren 10 yıldır. Ancak mal kaçırma riskine karşı boşanma davası sırasında ihtiyati tedbir kararı alınması büyük önem taşır. Mahkemeden, dava sonuçlanana kadar mal varlığı üzerinde tasarruf yasağı konulması talep edilebilir.
                        </p>

                        <p>
                            Mal paylaşımı davasında doğru hesaplama yapılabilmesi için tüm mal varlığının eksiksiz tespit edilmesi gerekir. Gizlenen mal varlıkları, üçüncü kişilere devredilen mallar ve muvazaalı satışlar da mahkeme tarafından araştırılır. <Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka davası</Link> ile birlikte yürütülen mal paylaşımı süreçlerinde de kapsamlı hukuki destek sunuyoruz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Mal Paylaşımı Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Mal Paylaşımı Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Boşanmada mal paylaşımı, edinilmiş mallara katılma rejimi, katkı payı ve değer artış payı davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde mal paylaşımı davalarını takip ediyor.
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
                                <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi
                                </Link>
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Tazminat Davası: Maddi ve Manevi Tazminat
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/sozluk/mal-paylasimi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Sözlük: Mal Paylaşımı Nedir?
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Mal Paylaşımı Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Edinilmiş mallara katılma rejimi, katkı payı ve değer artış payı davalarında uzman hukuki destek için hemen randevu alın.
                                    <strong className="text-white"> Mal paylaşımı avukatı</strong> olarak size yardımcı olmaya hazırız.
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
