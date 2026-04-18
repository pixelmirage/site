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
    title: "Aldatma Nedeniyle Boşanma İzmir | Zina Sebebiyle Boşanma",
    description: "İzmir'de aldatma (zina) nedeniyle boşanma davası. TMK m. 161 kapsamında zina sebebiyle boşanma şartları, delil toplama, tazminat hakları ve dava süreci.",
    keywords: ["aldatma nedeniyle boşanma İzmir", "zina sebebiyle boşanma", "aldatma boşanma davası", "zina tazminatı", "aldatma delilleri boşanma"],
    openGraph: {
        title: "Aldatma Nedeniyle Boşanma İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de aldatma (zina) nedeniyle boşanma davası. TMK m. 161 kapsamında zina sebebiyle boşanma şartları ve tazminat hakları.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/aldatma-bosanma-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/aldatma-bosanma-izmir/" },
};

const faqs = [
    {
        question: "Aldatma nasıl ispatlanır?",
        answer: "Aldatma, telefon mesajları, sosyal medya yazışmaları, otel kayıtları, fotoğraflar, tanık beyanları ve özel dedektif raporları gibi delillerle ispatlanabilir. Ancak hukuka aykırı yollarla elde edilen deliller (telefon dinleme, şifre kırma gibi) mahkemece kabul edilmez. Yargıtay kararlarına göre, eşin sadakat yükümlülüğünü ihlal ettiğini gösteren güçlü ve tutarlı deliller zinayı ispatlayabilir."
    },
    {
        question: "Aldatma nedeniyle boşanma davası ne kadar sürer?",
        answer: "Aldatma nedeniyle boşanma davası ortalama 1-2 yıl sürer. Süre, delillerin niteliğine, tanıkların sayısına ve karşı tarafın tutumuna göre değişir. Zina sebebiyle açılan davalarda delil toplama süreci özellikle önem taşır. İzmir Bayraklı Adliyesi&apos;nde bu tür davalar genellikle 12-18 ay içinde sonuçlanmaktadır."
    },
    {
        question: "Aldatılan eş ne kadar tazminat alır?",
        answer: "Aldatılan eş, hem maddi hem de manevi tazminat talep edebilir. Manevi tazminat miktarı tarafların ekonomik durumu, evlilik süresi ve olayın ağırlığına göre belirlenir. 2026 yılında İzmir aile mahkemelerinde zina nedeniyle hükmedilen manevi tazminat miktarları genellikle 50.000 TL ile 250.000 TL arasında değişmektedir. Maddi tazminat ise boşanma nedeniyle uğranılan somut zararın ispatına bağlıdır."
    },
    {
        question: "Aldatma affedilirse dava açılabilir mi?",
        answer: "TMK m. 161/3 uyarınca affeden tarafın dava hakkı düşer. Af, açık veya örtülü olabilir. Aldatmayı öğrendikten sonra eşiyle birlikte yaşamaya devam eden, birlikte tatile giden veya ilişkiyi sürdüren eşin zinayı affettiği kabul edilir. Ancak af sadece bilinen zina fiilini kapsar; yeni bir aldatma durumunda dava hakkı yeniden doğar."
    },
    {
        question: "Üçüncü kişiye tazminat davası açılabilir mi?",
        answer: "Evet, aldatılan eş, eşiyle birlikte olan üçüncü kişiye karşı da manevi tazminat davası açabilir. Yargıtay Hukuk Genel Kurulu kararlarına göre, evli olduğunu bilerek bir kişiyle ilişkiye giren üçüncü kişi, aldatılan eşin kişilik haklarına saldırıda bulunmuş sayılır ve manevi tazminat ödemekle yükümlüdür."
    }
];

const tocItems = [
    { id: "aldatma-nedeniyle-bosanma-nedir", title: "Aldatma Nedeniyle Boşanma Nedir?" },
    { id: "aldatma-nasil-ispatlanir", title: "Aldatma Nasıl İspatlanır?" },
    { id: "aldatmada-tazminat-haklari", title: "Tazminat Hakları" },
    { id: "aldatma-bosanma-sureci", title: "Dava Süreci" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function AldatmaBosanmaIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Aldatma Nedeniyle Boşanma Davası" description="İzmir'de zina (aldatma) sebebiyle boşanma davası ve tazminat talebi hizmeti." serviceType="Aldatma Nedeniyle Boşanma Davası" />
            <PersonSchema knowsAbout={["Aldatma Boşanma", "Zina Sebebiyle Boşanma", "TMK Madde 161", "Sadakat Yükümlülüğü", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Aldatma Nedeniyle Boşanma", url: "https://mertkagancetin.com/izmir-bosanma-avukati/aldatma-bosanma-izmir/" }
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
                        <span className="text-secondary">Aldatma Nedeniyle Boşanma</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Aldatma Nedeniyle Boşanma İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            TMK m. 161 kapsamında aldatma (zina) sebebiyle boşanma davası süreçlerinde uzman avukat desteği.
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
                            <strong>İzmir&apos;de aldatma nedeniyle boşanma davası</strong>, eşlerden birinin sadakat yükümlülüğünü ihlal etmesi halinde TMK m. 161 kapsamında açılabilen özel bir boşanma davasıdır. Zina, Türk Medeni Kanunu&apos;nda düzenlenen mutlak boşanma sebeplerindendir ve ispatlanması halinde hakimin boşanma kararı vermesi zorunludur.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Aldatma, evlilik birliğinde en ağır güven ihlallerinden biridir. TMK m. 185 uyarınca eşler birbirlerine sadakat yükümlülüğü altındadır. Bu yükümlülüğün ihlali, aldatılan eşe hem boşanma davası açma hem de maddi ve manevi tazminat talep etme hakkı verir. İzmir&apos;de aldatma nedeniyle boşanma davalarında uzman avukat desteği, haklarınızın eksiksiz korunması için büyük önem taşır.
                        </p>

                        <h2 id="aldatma-nedeniyle-bosanma-nedir" className="scroll-mt-24">Aldatma (Zina) Nedeniyle Boşanma Nedir?</h2>

                        <p>
                            Zina, Türk Medeni Kanunu&apos;nun 161. maddesinde düzenlenen özel ve mutlak bir boşanma sebebidir. Eşlerden biri zina ederse, diğer eş boşanma davası açabilir. Zina, mutlak boşanma sebebi olduğundan ispatlanması halinde hakimin boşanma kararı vermesi zorunludur; hakim takdir yetkisi kullanamaz.
                        </p>

                        <p>
                            TMK m. 161&apos;e göre zina nedeniyle boşanma davasında önemli süreler bulunmaktadır. Davaya hakkı olan eş, boşanma sebebini öğrenmesinden başlayarak <strong>altı ay</strong> ve her halde zina eyleminin üzerinden <strong>beş yıl</strong> geçmekle dava hakkını kaybeder. Bu süreler hak düşürücü süre niteliğindedir ve mahkeme tarafından resen dikkate alınır.
                        </p>

                        <p>
                            Zinayı affeden eşin dava hakkı düşer. Af, açık (sözlü veya yazılı beyan) veya örtülü (aldatmayı öğrendikten sonra evlilik birliğini sürdürme) şeklinde olabilir. Ancak af, yalnızca bilinen zina fiilini kapsar. Eşin daha sonra yeni bir aldatma eylemi gerçekleştirmesi halinde dava hakkı yeniden doğar. Ayrıca zina sebebiyle dava hakkını kaybeden eş, TMK m. 166 kapsamında evlilik birliğinin temelinden sarsılması genel sebebine dayanarak da boşanma davası açabilir.
                        </p>

                        <h2 id="aldatma-nasil-ispatlanir" className="scroll-mt-24">Aldatma Nasıl İspatlanır?</h2>

                        <p>
                            Aldatma nedeniyle boşanma davasında en kritik aşama ispat aşamasıdır. Zina fiilinin doğrudan ispatı her zaman mümkün olmayabilir; bu nedenle Yargıtay, zinaya işaret eden güçlü ve tutarlı delilleri de yeterli kabul etmektedir. Ancak delillerin hukuka uygun yollarla elde edilmiş olması şarttır.
                        </p>

                        <p>
                            <strong>Hukuka uygun deliller:</strong> Telefon mesajları ve arama kayıtları (ortak telefonda veya açık bırakılan cihazda görülen), sosyal medya yazışmaları, otel konaklama kayıtları, fotoğraf ve video kayıtları, kredi kartı harcama dökümleri, tanık beyanları ve özel dedektif raporları zina davasında kullanılabilecek başlıca delillerdir.
                        </p>

                        <p>
                            <strong>Hukuka aykırı delil sorunu:</strong> Eşin telefonunu gizlice dinleme, şifresini kırarak mesajlarını okuma, casus yazılım yükleme veya özel hayatın gizliliğini ihlal eden yöntemlerle elde edilen deliller mahkemece kabul edilmez. Ayrıca bu tür eylemler TCK kapsamında suç oluşturabilir. Delil toplama sürecinde mutlaka avukat rehberliğinde hareket edilmelidir.
                        </p>

                        <p>
                            Yargıtay içtihatlarına göre, eşin bir başkasıyla otel odasında kalması, düzenli olarak aynı kişiyle buluşması veya sosyal medyada romantik ilişkiyi gösteren paylaşımlar yapması gibi durumlar güçlü zina karinesi olarak kabul edilmektedir.
                        </p>

                        <h2 id="aldatmada-tazminat-haklari" className="scroll-mt-24">Aldatmada Tazminat Hakları</h2>

                        <p>
                            Aldatma nedeniyle boşanma davasında aldatılan eş, TMK m. 174 uyarınca hem maddi hem de manevi tazminat talep edebilir. Zina nedeniyle boşanmada kusur tamamen aldatan eşte olduğundan, tazminat talepleri güçlü bir hukuki temele dayanır. <Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/">Boşanmada tazminat davası</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <p>
                            <strong>Maddi tazminat:</strong> TMK m. 174/1 uyarınca, mevcut veya beklenen menfaatleri boşanma yüzünden zedelenen kusursuz veya daha az kusurlu taraf, kusurlu taraftan maddi tazminat isteyebilir. Maddi tazminat miktarı belirlenirken tarafların ekonomik durumu, evlilik süresi ve boşanma nedeniyle uğranılan ekonomik kayıp dikkate alınır.
                        </p>

                        <p>
                            <strong>Manevi tazminat:</strong> TMK m. 174/2 uyarınca, boşanmaya sebep olan olaylar yüzünden kişilik hakkı saldırıya uğrayan taraf, kusurlu olan diğer taraftan manevi tazminat olarak uygun miktarda para ödenmesini isteyebilir. Aldatma, kişilik haklarına ağır bir saldırı niteliğinde olduğundan manevi tazminat miktarı genellikle yüksek belirlenir.
                        </p>

                        <p>
                            <strong>Üçüncü kişiye tazminat davası:</strong> Aldatılan eş, eşinin birlikte olduğu üçüncü kişiye karşı da manevi tazminat davası açabilir. Yargıtay Hukuk Genel Kurulu kararlarına göre, evli olduğunu bilerek bir kişiyle ilişkiye giren üçüncü kişi, aldatılan eşin kişilik haklarına saldırıda bulunmuş sayılır. Bu dava aile mahkemesinde değil, asliye hukuk mahkemesinde açılır.
                        </p>

                        <SectionCTA text="Aldatma nedeniyle tazminat haklarınız için hukuki destek almak ister misiniz?" />

                        <h2 id="aldatma-bosanma-sureci" className="scroll-mt-24">Aldatma Nedeniyle Boşanma Süreci</h2>

                        <p>
                            Aldatma nedeniyle boşanma davası, belirli aşamalardan oluşan bir süreçtir. Sürecin doğru yönetilmesi hem boşanma kararının alınması hem de tazminat haklarının korunması açısından büyük önem taşır. <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">Çekişmeli boşanma davası süreci</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Avukat Görüşmesi ve Delil Değerlendirme", desc: "Aldatma olayının detayları paylaşılır, mevcut deliller değerlendirilir ve dava stratejisi belirlenir. Hak düşürücü sürelerin geçip geçmediği kontrol edilir." },
                                { step: "2", title: "Delil Toplama ve Güvence Altına Alma", desc: "Hukuka uygun deliller toplanır ve güvence altına alınır. Gerekirse noter aracılığıyla tespit yapılır. Tanıklar belirlenir." },
                                { step: "3", title: "Dava Dilekçesi ve Dava Açılması", desc: "Zina sebebiyle boşanma, tazminat, nafaka ve velayet taleplerini içeren dava dilekçesi hazırlanarak aile mahkemesine sunulur." },
                                { step: "4", title: "Delil Sunumu ve Tanık Dinleme", desc: "Duruşmalarda deliller sunulur, tanıklar dinlenir ve gerekirse bilirkişi incelemesi yapılır. Bu aşama davanın sonucunu belirleyen en kritik süreçtir." },
                                { step: "5", title: "Karar ve Kesinleşme", desc: "Mahkeme tüm delilleri değerlendirerek boşanma, tazminat, nafaka ve velayet konularında karar verir. Karar kesinleştikten sonra nüfus kaydı güncellenir." },
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
                            Aldatma nedeniyle boşanma davasında zamanaşımı süreleri çok önemlidir. Zinayı öğrendiğiniz tarihten itibaren 6 ay içinde dava açmanız gerekmektedir. Bu süre geçtikten sonra zina sebebine dayanarak dava açamazsınız; ancak TMK m. 166 kapsamında genel boşanma sebebine dayanabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Aldatma Boşanma Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Aldatma Boşanma Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Aldatma nedeniyle boşanma davaları, zina tazminatı ve aile hukuku uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde boşanma davalarını takip ediyor.
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
                                <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Çekişmeli Boşanma Davası Süreci ve Kusur Tespiti
                                </Link>
                                <Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Tazminat Davası: Maddi ve Manevi Tazminat
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                                <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Aldatma Nedeniyle Boşanma Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Aldatma nedeniyle boşanma ve tazminat davası sürecinde profesyonel hukuki destek için hemen randevu alın.
                                    <strong className="text-white"> Boşanma avukatı</strong> olarak haklarınızı korumaya hazırız.
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
