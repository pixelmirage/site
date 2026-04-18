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
    title: "Çekişmeli Boşanma İzmir | Boşanma Avukatı",
    description: "İzmir'de çekişmeli boşanma davası avukatı Av. Mert Kağan Çetin. Kusur tespiti, delil toplama, tazminat ve nafaka taleplerinde uzman hukuki destek.",
    keywords: ["çekişmeli boşanma İzmir", "çekişmeli boşanma avukatı İzmir", "çekişmeli boşanma davası", "boşanma kusur tespiti", "çekişmeli boşanma süreci"],
    openGraph: {
        title: "Çekişmeli Boşanma İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de çekişmeli boşanma davalarında kusur tespiti, delil toplama ve dava stratejisi konularında uzman avukat desteği.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/cekismeli-bosanma-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/cekismeli-bosanma-izmir/" },
};

const faqs = [
    {
        question: "Çekişmeli boşanma ne kadar sürer?",
        answer: "Çekişmeli boşanma davaları ortalama 1 ila 3 yıl arasında sürmektedir. Davanın süresi taraflar arasındaki uyuşmazlıkların kapsamına, delillerin toplanma sürecine, tanık sayısına ve mahkemenin iş yüküne göre değişir. Velayet, nafaka ve mal paylaşımı konularında yoğun çekişme yaşanan davalarda süre uzayabilir. İstinaf ve temyiz aşamalarıyla birlikte toplam süre 4-5 yıla kadar çıkabilir."
    },
    {
        question: "Çekişmeli boşanmada kusur nasıl belirlenir?",
        answer: "Çekişmeli boşanmada kusur, mahkeme tarafından tarafların evlilik birliğindeki yükümlülüklerini ihlal edip etmediğine bakılarak belirlenir. Hakim; tanık beyanları, mesaj ve e-posta içerikleri, sosyal medya paylaşımları, banka hesap hareketleri, sağlık raporları ve bilirkişi raporları gibi delilleri değerlendirerek hangi eşin daha ağır kusurlu olduğuna karar verir. Kusur tespiti nafaka, tazminat ve velayet kararlarını doğrudan etkiler."
    },
    {
        question: "Çekişmeli boşanmada mal paylaşımı nasıl yapılır?",
        answer: "Çekişmeli boşanmada mal paylaşımı, boşanma davasından ayrı bir dava olarak açılır. TMK m. 218-241 kapsamındaki edinilmiş mallara katılma rejimi uygulanır. Evlilik süresince edinilen mallar (maaş, kira geliri, yatırım kazancı vb.) eşit olarak paylaşılırken, kişisel mallar (miras, evlilik öncesi mallar) paylaşıma dahil edilmez. Mal paylaşımı davası boşanma kararının kesinleşmesinden itibaren 10 yıl içinde açılmalıdır."
    },
    {
        question: "Çekişmeli boşanma avukat ücreti ne kadar?",
        answer: "2026 yılında İzmir'de çekişmeli boşanma avukat ücreti 40.000 ila 80.000 TL arasında değişmektedir. Ücret, davanın karmaşıklığına, velayet ve mal paylaşımı taleplerine, duruşma sayısına ve davanın süresine göre belirlenir. Ayrıca mahkeme harcı, bilirkişi ücreti ve tebligat giderleri gibi dava masrafları avukatlık ücretinden ayrıdır. Kesin ücret bilgisi ilk görüşmede davanın detaylarına göre belirlenir."
    },
    {
        question: "Çekişmeli boşanma anlaşmalıya dönüşebilir mi?",
        answer: "Evet, çekişmeli boşanma davasının her aşamasında anlaşmalı boşanmaya dönüş mümkündür. Taraflar dava sürecinde nafaka, velayet, mal paylaşımı ve tazminat konularında anlaşmaya vardığında, mahkemeye anlaşmalı boşanma protokolü sunabilir. Hakim protokolü uygun bulduğunda dava anlaşmalı boşanma olarak sonuçlandırılır. Bu durum dava süresini ve maliyetini önemli ölçüde azaltır."
    }
];

const tocItems = [
    { id: "cekismeli-bosanma-nedir", title: "Çekişmeli Boşanma Nedir?" },
    { id: "cekismeli-bosanma-sebepleri", title: "Çekişmeli Boşanma Sebepleri" },
    { id: "cekismeli-bosanma-sureci", title: "Çekişmeli Boşanma Süreci" },
    { id: "kusur-tespiti-ve-deliller", title: "Kusur Tespiti ve Deliller" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function CekismeliBosanmaIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Çekişmeli Boşanma Davası" description="İzmir'de çekişmeli boşanma davalarında kusur tespiti, delil toplama ve dava takibi hizmeti." serviceType="Çekişmeli Boşanma Davası" />
            <PersonSchema knowsAbout={["Çekişmeli Boşanma", "Kusur Tespiti", "Boşanma Tazminatı", "Delil Toplama", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Çekişmeli Boşanma İzmir", url: "https://mertkagancetin.com/izmir-bosanma-avukati/cekismeli-bosanma-izmir/" }
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
                        <span className="text-secondary">Çekişmeli Boşanma İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Çekişmeli Boşanma İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de çekişmeli boşanma davalarında kusur tespiti, delil toplama ve dava stratejisi konularında uzman avukat desteği.
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
                            <strong>İzmir çekişmeli boşanma avukatı</strong> olarak eşlerin boşanma koşulları üzerinde anlaşamadığı davalarda kusur tespiti, delil toplama ve dava stratejisi konularında kapsamlı hukuki destek sunuyoruz. Çekişmeli boşanma sürecinde haklarınızı en iyi şekilde korumak için yanınızdayız.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Çekişmeli boşanma, eşlerin boşanmanın kendisi veya sonuçları (nafaka, velayet, mal paylaşımı, tazminat) üzerinde anlaşamadığı durumlarda açılan dava türüdür. Türk Medeni Kanunu&apos;nda düzenlenen genel ve özel boşanma sebeplerine dayanılarak açılan bu davalar, anlaşmalı boşanmaya kıyasla daha uzun ve kapsamlı bir yargılama süreci gerektirir.
                        </p>

                        <h2 id="cekismeli-bosanma-nedir" className="scroll-mt-24">Çekişmeli Boşanma Nedir?</h2>

                        <p>
                            Çekişmeli boşanma, TMK m. 161-166 arasında düzenlenen özel ve genel boşanma sebeplerine dayanılarak açılan boşanma davasıdır. Anlaşmalı boşanmadan temel farkı, tarafların boşanmanın koşulları üzerinde uzlaşamamasıdır. Bu nedenle hakim, tarafların iddia ve savunmalarını, sunulan delilleri ve tanık beyanlarını değerlendirerek karar verir.
                        </p>

                        <p>
                            Çekişmeli boşanma davalarında hakim, boşanma kararı verirken aynı zamanda nafaka, velayet, kişisel ilişki düzenlemesi ve tazminat gibi konularda da hüküm kurar. Bu nedenle davanın başından itibaren doğru bir strateji belirlemek ve güçlü delillerle mahkemeye başvurmak büyük önem taşır.
                        </p>

                        <p>
                            Anlaşmalı boşanmadan farklı olarak çekişmeli boşanmada evliliğin en az 1 yıl sürmüş olması koşulu aranmaz. Evliliğin ilk gününden itibaren özel boşanma sebeplerine dayanılarak çekişmeli boşanma davası açılabilir. <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> şartları sağlanamıyorsa veya eşlerden biri boşanmayı kabul etmiyorsa çekişmeli boşanma yoluna başvurulması gerekir.
                        </p>

                        <h2 id="cekismeli-bosanma-sebepleri" className="scroll-mt-24">Çekişmeli Boşanma Sebepleri</h2>

                        <p>
                            Türk Medeni Kanunu&apos;nda boşanma sebepleri özel ve genel sebepler olarak ikiye ayrılır. Özel boşanma sebeplerinden birinin varlığı halinde hakim, evlilik birliğinin temelinden sarsılıp sarsılmadığını ayrıca araştırmaz. Genel boşanma sebebi olan evlilik birliğinin temelinden sarsılması (TMK m. 166) ise uygulamada en sık başvurulan boşanma sebebidir.
                        </p>

                        <ul>
                            <li><strong>Zina (TMK m. 161):</strong> Eşlerden birinin sadakat yükümlülüğünü ihlal ederek üçüncü bir kişiyle cinsel ilişkiye girmesidir. Zinayı öğrenen eş, öğrenme tarihinden itibaren 6 ay ve her halde zina eyleminin üzerinden 5 yıl içinde dava açmalıdır.</li>
                            <li><strong>Hayata kast, pek kötü muamele ve onur kırıcı davranış (TMK m. 162):</strong> Eşlerden birinin diğerinin hayatına kastetmesi, fiziksel veya psikolojik şiddet uygulaması ya da onurunu zedeleyecek davranışlarda bulunmasıdır.</li>
                            <li><strong>Suç işleme ve haysiyetsiz hayat sürme (TMK m. 163):</strong> Eşlerden birinin küçük düşürücü bir suç işlemesi veya haysiyetsiz bir yaşam sürdürmesi halinde diğer eş boşanma davası açabilir.</li>
                            <li><strong>Terk (TMK m. 164):</strong> Eşlerden birinin ortak konutu en az 6 ay boyunca terk etmesi ve haklı bir sebebi bulunmaması halinde terk edilen eş, ihtar çektikten sonra boşanma davası açabilir.</li>
                            <li><strong>Akıl hastalığı (TMK m. 165):</strong> Eşlerden birinin iyileşemeyeceği resmi sağlık kurulu raporu ile belirlenen bir akıl hastalığına yakalanması durumunda diğer eş boşanma davası açabilir.</li>
                            <li><strong>Evlilik birliğinin temelinden sarsılması (TMK m. 166):</strong> En sık başvurulan genel boşanma sebebidir. Eşler arasındaki geçimsizliğin evlilik birliğini çekilmez hale getirmesi halinde uygulanır. Sürekli tartışma, ilgisizlik, ekonomik şiddet, aile içi baskı gibi pek çok durum bu kapsamda değerlendirilir.</li>
                        </ul>

                        <p>
                            Boşanma sebebinin doğru belirlenmesi dava stratejisi açısından kritik öneme sahiptir. Özel boşanma sebeplerine dayanan davalarda ispat yükü ve zamanaşımı süreleri farklılık gösterir. Bu nedenle dava açılmadan önce bir boşanma avukatından hukuki danışmanlık alınması tavsiye edilir.
                        </p>

                        <h2 id="cekismeli-bosanma-sureci" className="scroll-mt-24">Çekişmeli Boşanma Süreci</h2>

                        <p>
                            Çekişmeli boşanma davası, belirli aşamalardan oluşan kapsamlı bir yargılama sürecini içerir. Davanın başından sonuna kadar titiz bir takip ve profesyonel avukatlık desteği gerektirir. Çekişmeli boşanma dava süreci hakkında detaylı bilgi için <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">çekişmeli boşanma davası süreci ve kusur tespiti</Link> yazımızı inceleyebilirsiniz.
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Dava Dilekçesinin Hazırlanması ve Sunulması", desc: "Boşanma sebebine uygun dava dilekçesi hazırlanır, deliller ve tanık listesi belirlenir. Dilekçe aile mahkemesine sunularak dava açılır. Karşı tarafa tebligat gönderilir." },
                                { step: "2", title: "Tensip Zaptı ve Ön Hazırlık", desc: "Mahkeme tensip zaptı düzenleyerek taraflara süre verir. Davalı taraf cevap dilekçesini sunar. Taraflar karşılıklı dilekçelerini tamamlar (dilekçeler aşaması)." },
                                { step: "3", title: "Ön İnceleme Duruşması", desc: "Hakim tarafları bizzat dinler, sulh olup olmayacaklarını sorar. Tarafların anlaşamaması halinde uyuşmazlık konuları ve deliller tespit edilir. Tahkikat aşamasına geçilir." },
                                { step: "4", title: "Tahkikat Aşaması", desc: "Tanıklar dinlenir, belgeler incelenir, gerekli hallerde bilirkişi raporu alınır. Sosyal inceleme raporu (velayet davalarında), mali inceleme ve diğer deliller değerlendirilir." },
                                { step: "5", title: "Karar Aşaması", desc: "Hakim tüm delilleri değerlendirerek boşanma, nafaka, velayet, tazminat ve mal paylaşımı konularında kararını verir. Karara itiraz edilmesi halinde istinaf yoluna başvurulabilir." },
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
                            Her aşamada doğru stratejinin belirlenmesi davanın sonucunu doğrudan etkiler. Özellikle delillerin zamanında toplanması ve mahkemeye sunulması, tanık ifadelerinin tutarlılığı ve hukuki argümanların güçlü bir şekilde ortaya konması kritik önem taşır.
                        </p>

                        <SectionCTA text="Çekişmeli boşanma davanız için uzman avukat desteği almak ister misiniz?" />

                        <h2 id="kusur-tespiti-ve-deliller" className="scroll-mt-24">Kusur Tespiti ve Deliller</h2>

                        <p>
                            Çekişmeli boşanma davalarında kusur tespiti, davanın en kritik unsurlarından biridir. Hakim, tarafların evlilik birliğindeki yükümlülüklerini ne ölçüde yerine getirip getirmediğini değerlendirerek kusur oranını belirler. Kusur tespiti; nafaka miktarı, maddi ve manevi tazminat ile velayet kararlarını doğrudan etkiler.
                        </p>

                        <p>
                            Çekişmeli boşanma davalarında kullanılan başlıca delil türleri şunlardır:
                        </p>

                        <ul>
                            <li><strong>Tanık beyanları:</strong> Tarafların yakınları, komşuları veya iş arkadaşlarının mahkeme önündeki ifadeleri önemli delillerdendir. Tanıkların olaylara bizzat tanıklık etmiş olması gerekir.</li>
                            <li><strong>Mesajlar ve dijital yazışmalar:</strong> WhatsApp, SMS, e-posta ve sosyal medya mesajları mahkemeye delil olarak sunulabilir. Özellikle hakaret, tehdit veya sadakatsizlik içeren mesajlar kusur tespitinde belirleyici olabilir.</li>
                            <li><strong>Sosyal medya paylaşımları:</strong> Tarafların sosyal medya hesaplarındaki paylaşımlar, fotoğraflar ve konum bilgileri delil olarak değerlendirilebilir.</li>
                            <li><strong>Banka hesap hareketleri:</strong> Ekonomik şiddet iddialarında veya mal kaçırma şüphesinde banka hesap dökümleri mahkeme tarafından celp edilebilir.</li>
                            <li><strong>Sağlık raporları:</strong> Fiziksel şiddet iddialarında darp raporu ve hastane kayıtları önemli delillerdendir.</li>
                            <li><strong>Bilirkişi raporları:</strong> Sosyal inceleme raporu (velayet davalarında), mali bilirkişi raporu (mal paylaşımında) ve psikolojik değerlendirme raporları mahkeme tarafından alınabilir.</li>
                        </ul>

                        <p>
                            Ağır kusurlu bulunan eş, karşı tarafa maddi ve manevi tazminat ödemek zorunda kalabilir. TMK m. 174 uyarınca mevcut veya beklenen menfaatleri boşanma yüzünden zedelenen kusursuz veya daha az kusurlu eş, maddi tazminat isteyebilir. Boşanmaya sebep olan olaylar nedeniyle kişilik hakkı saldırıya uğrayan eş ise manevi tazminat talep edebilir. Ayrıca ağır kusurlu eş lehine yoksulluk nafakasına hükmedilemez. <Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka davası</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Çekişmeli Boşanma Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Çekişmeli Boşanma Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Çekişmeli boşanma davaları, kusur tespiti, delil toplama ve aile hukuku uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde boşanma davalarını takip ediyor.
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
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Tazminat Davası: Maddi ve Manevi Tazminat
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Çekişmeli Boşanma Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Çekişmeli boşanma sürecinde kusur tespiti, delil toplama ve dava stratejisi için hemen randevu alın.
                                    <strong className="text-white"> Çekişmeli boşanma avukatı</strong> olarak size yardımcı olmaya hazırız.
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
