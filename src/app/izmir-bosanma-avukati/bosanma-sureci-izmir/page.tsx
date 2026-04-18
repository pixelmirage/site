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
    title: "Boşanma Süreci Rehberi İzmir | Adım Adım Rehber",
    description: "İzmir'de boşanma sürecinin başından sonuna adım adım rehber. Dava açma, dilekçe hazırlama, duruşma süreci ve karar aşamalarında bilmeniz gerekenler.",
    keywords: ["boşanma süreci İzmir", "boşanma süreci rehberi", "boşanma davası nasıl ilerler", "boşanma aşamaları", "İzmir boşanma süreci"],
    openGraph: {
        title: "Boşanma Süreci Rehberi İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanma sürecinin başından sonuna adım adım rehber. Dava açma, dilekçe hazırlama ve duruşma süreci hakkında bilmeniz gerekenler.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-sureci-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-sureci-izmir/" },
};

const faqs = [
    {
        question: "Boşanma davası ne kadar sürer?",
        answer: "Anlaşmalı boşanma davaları genellikle 1-3 ay içinde sonuçlanırken, çekişmeli boşanma davaları 1-3 yıl arasında sürebilir. Süre mahkemenin iş yükü, delillerin toplanması, tanıkların dinlenmesi ve bilirkişi raporlarının beklenmesi gibi faktörlere bağlıdır. İzmir Bayraklı Adliyesi&apos;nde ortalama çekişmeli boşanma davası 12-18 ay arasında sonuçlanmaktadır."
    },
    {
        question: "Boşanma davası için hangi belgeler gerekli?",
        answer: "Boşanma davası açmak için nüfus cüzdanı fotokopisi, evlilik cüzdanı fotokopisi, varsa deliller (mesajlar, fotoğraflar, raporlar), nüfus kayıt örneği ve yerleşim yeri belgesi gereklidir. Anlaşmalı boşanmada bunlara ek olarak taraflarca imzalanmış boşanma protokolü de gerekir. Avukatınız gerekli belgelerin tam listesini davanızın özelliklerine göre belirleyecektir."
    },
    {
        question: "Boşanma davasında avukat zorunlu mu?",
        answer: "Hayır, boşanma davasında avukat tutmak yasal olarak zorunlu değildir. Ancak boşanma davası nafaka, velayet, mal paylaşımı ve tazminat gibi pek çok karmaşık konuyu içerdiğinden avukat desteği almanız şiddetle tavsiye edilir. Avukatsız açılan davalarda hak kayıpları yaşanabilir ve süreç çok daha uzun sürebilir."
    },
    {
        question: "Boşanma davası hangi mahkemede açılır?",
        answer: "Boşanma davası aile mahkemesinde açılır. Yetkili mahkeme, eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer mahkemesidir. İzmir&apos;de boşanma davaları Bayraklı Adliyesi&apos;ndeki aile mahkemelerinde görülmektedir."
    },
    {
        question: "Boşanma kararı ne zaman kesinleşir?",
        answer: "Boşanma kararı, taraflara tebliğinden itibaren iki hafta içinde istinaf yoluna başvurulmazsa kesinleşir. İstinaf yoluna başvurulması halinde İzmir Bölge Adliye Mahkemesi&apos;nin kararı beklenir. Kesinleşen karar nüfus müdürlüğüne bildirilir ve nüfus kaydı güncellenir. Anlaşmalı boşanmada taraflar genellikle istinafa başvurmadığı için karar 2-3 hafta içinde kesinleşir."
    }
];

const tocItems = [
    { id: "bosanma-sureci-nasil-baslar", title: "Boşanma Süreci Nasıl Başlar?" },
    { id: "bosanma-davasi-asamalari", title: "Boşanma Davası Aşamaları" },
    { id: "dikkat-edilmesi-gerekenler", title: "Dikkat Edilmesi Gerekenler" },
    { id: "bosanma-sonrasi-islemler", title: "Boşanma Sonrası İşlemler" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function BosanmaSureciIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Boşanma Davası Takibi" description="İzmir'de boşanma davası sürecinin başından sonuna profesyonel hukuki destek." serviceType="Boşanma Davası Takibi" />
            <PersonSchema knowsAbout={["Boşanma Süreci", "Boşanma Davası Aşamaları", "Dava Dilekçesi", "Duruşma Süreci", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Boşanma Süreci Rehberi", url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-sureci-izmir/" }
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
                        <span className="text-secondary">Boşanma Süreci Rehberi</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Boşanma Süreci Rehberi İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de boşanma sürecinin başından sonuna kadar bilmeniz gereken tüm aşamalar ve hukuki detaylar.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile sürecinizi güvenle yönetin.
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
                            <strong>İzmir boşanma süreci</strong>, dava açılmasından kararın kesinleşmesine kadar pek çok aşamadan oluşur. Boşanma kararı almak hayatınızın en zor dönemlerinden biri olabilir. Bu rehberde, İzmir&apos;de boşanma sürecinin her aşamasını adım adım açıklıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Boşanma süreci, eşlerin evlilik birliğini sona erdirmek için hukuki yollara başvurmasıyla başlar. Türk Medeni Kanunu&apos;nun 161-166. maddeleri arasında düzenlenen boşanma sebepleri, özel ve genel boşanma sebepleri olarak ikiye ayrılır. Her boşanma davası kendine özgü koşullar içerir ve sürecin doğru yönetilmesi hakların korunması açısından büyük önem taşır.
                        </p>

                        <h2 id="bosanma-sureci-nasil-baslar" className="scroll-mt-24">Boşanma Süreci Nasıl Başlar?</h2>

                        <p>
                            Boşanma süreci, eşlerden birinin veya her ikisinin evliliği sona erdirme kararı almasıyla başlar. Bu aşamada en önemli karar, boşanmanın anlaşmalı mı yoksa çekişmeli mi olacağının belirlenmesidir. Eşlerin boşanma ve boşanmanın sonuçları (nafaka, velayet, mal paylaşımı) konusunda tamamen anlaşması halinde <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">anlaşmalı boşanma</Link> yolu tercih edilebilir. Anlaşma sağlanamayan durumlarda ise çekişmeli boşanma davası açılır.
                        </p>

                        <p>
                            Boşanma kararı aldıktan sonra yapılması gereken ilk iş, aile hukuku alanında deneyimli bir avukatla görüşmektir. Avukat, davanızın güçlü ve zayıf yönlerini değerlendirerek size en uygun stratejiyi belirleyecektir. Delil toplama, tanık belirleme ve dava dilekçesinin hazırlanması gibi önemli adımlar avukat desteğiyle çok daha sağlıklı yürütülür.
                        </p>

                        <p>
                            İzmir&apos;de boşanma davaları Bayraklı Adliyesi&apos;ndeki aile mahkemelerinde görülmektedir. Yetkili mahkeme, eşlerden birinin yerleşim yeri veya davadan önce son altı ay birlikte oturdukları yer mahkemesidir. Görevli mahkeme ise aile mahkemesidir; aile mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi aile mahkemesi sıfatıyla davaya bakar.
                        </p>

                        <h2 id="bosanma-davasi-asamalari" className="scroll-mt-24">Boşanma Davası Aşamaları</h2>

                        <p>
                            Çekişmeli boşanma davası, belirli aşamalardan oluşan uzun bir süreçtir. Her aşamanın doğru yönetilmesi davanın sonucunu doğrudan etkiler. Aşağıda boşanma davasının temel aşamalarını adım adım açıklıyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Avukat Görüşmesi ve Strateji Belirleme", desc: "Deneyimli bir aile hukuku avukatıyla görüşerek davanızın detaylarını paylaşın. Avukatınız boşanma sebebinizi, delillerinizi ve taleplerinizi değerlendirerek dava stratejisini belirleyecektir." },
                                { step: "2", title: "Dava Dilekçesinin Hazırlanması ve Dava Açılması", desc: "Boşanma sebeplerini, delilleri ve talepleri (nafaka, velayet, tazminat, mal paylaşımı) içeren dava dilekçesi hazırlanır. Dilekçe, gerekli harçlarla birlikte aile mahkemesine sunularak dava açılır." },
                                { step: "3", title: "Tensip Zaptı ve Tebligat", desc: "Mahkeme, dava dilekçesini inceleyerek tensip zaptı düzenler. Bu zaptla birlikte dava dilekçesi karşı tarafa tebliğ edilir. Davalı eş, tebliğden itibaren iki hafta içinde cevap dilekçesini sunar." },
                                { step: "4", title: "Ön İnceleme Duruşması", desc: "Hakimin tarafları ve varsa vekillerini dinlediği ilk duruşmadır. Bu aşamada uyuşmazlık konuları belirlenir, sulh imkanı araştırılır ve deliller değerlendirilir. Taraflar anlaşırsa dava anlaşmalı boşanmaya dönüştürülebilir." },
                                { step: "5", title: "Tahkikat Aşaması (Delil İncelemesi)", desc: "Tanıklar dinlenir, bilirkişi raporları alınır, tarafların sundukları deliller incelenir. Bu aşama davanın en uzun süren bölümüdür. Ekonomik ve sosyal durum araştırması, velayet için pedagog raporu gibi incelemeler bu aşamada yapılır." },
                                { step: "6", title: "Karar Aşaması", desc: "Tüm deliller toplandıktan ve tarafların son beyanları alındıktan sonra mahkeme boşanma kararını verir. Kararda nafaka, velayet, tazminat ve mal paylaşımı konularında da hüküm kurulur. Karar, taraflara tebliğ edildikten sonra istinaf süresi geçince kesinleşir." },
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
                            Yukarıdaki aşamalar çekişmeli boşanma davası için geçerlidir. Anlaşmalı boşanmada ise süreç çok daha kısadır: protokol hazırlanır, dava açılır ve tek celsede karar verilir. Çekişmeli boşanma sürecinin detayları için <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">çekişmeli boşanma davası rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="dikkat-edilmesi-gerekenler" className="scroll-mt-24">Boşanma Davasında Dikkat Edilmesi Gerekenler</h2>

                        <p>
                            Boşanma davası sürecinde yapacağınız hatalar hem davanızın sonucunu olumsuz etkileyebilir hem de ileride telafisi güç sorunlara yol açabilir. Özellikle delil toplama, sosyal medya kullanımı ve çocuklarla ilgili konularda dikkatli olmanız gerekmektedir.
                        </p>

                        <p>
                            <strong>Delil saklama ve toplama:</strong> Boşanma davasında sunacağınız delilleri önceden güvenli bir şekilde muhafaza edin. Mesaj kayıtları, fotoğraflar, banka hesap hareketleri ve tanık bilgileri en önemli delil türleridir. Ancak hukuka aykırı yollarla elde edilen deliller (telefon dinleme, gizli kamera, başkasının hesabına izinsiz erişim gibi) mahkemece kabul edilmez ve ceza soruşturmasına yol açabilir.
                        </p>

                        <p>
                            <strong>Sosyal medya kullanımı:</strong> Boşanma davası sürecinde sosyal medya paylaşımlarınız aleyhinize delil olarak kullanılabilir. Lüks harcamalar, yeni ilişkiler veya eşinize yönelik olumsuz paylaşımlar davanızı olumsuz etkileyebilir. Bu süreçte sosyal medya kullanımınızı minimumda tutmanız veya avukatınızın tavsiyelerine uymanız önemlidir.
                        </p>

                        <p>
                            <strong>Çocuğun korunması:</strong> Boşanma sürecinde çocukların psikolojik sağlığı en önemli önceliktir. Çocukları eşinize karşı kullanmak, eşiniz hakkında çocukların yanında olumsuz konuşmak veya çocukları dava sürecine dahil etmek hem çocuğun yararına aykırıdır hem de velayet kararını olumsuz etkiler. Mahkeme, çocuğun üstün yararını her zaman gözetir.
                        </p>

                        <p>
                            <strong>Ortak malların korunması:</strong> Dava sürecinde ortak malları kaçırma, gizleme veya üçüncü kişilere devretme girişimlerinde bulunmayın. Bu tür hareketler tespit edildiğinde mahkemece olumsuz değerlendirilir. Gerekirse dava açılmadan önce ihtiyati tedbir kararı alınarak malların korunması sağlanabilir.
                        </p>

                        <SectionCTA text="Boşanma sürecinizde profesyonel hukuki destek almak ister misiniz?" />

                        <h2 id="bosanma-sonrasi-islemler" className="scroll-mt-24">Boşanma Sonrası İşlemler</h2>

                        <p>
                            Boşanma kararının kesinleşmesiyle birlikte yapılması gereken önemli işlemler vardır. Bu işlemlerin zamanında ve doğru şekilde yerine getirilmesi, boşanma sonrası hayatınızın düzene girmesi açısından büyük önem taşır.
                        </p>

                        <p>
                            <strong>Nüfus kaydının güncellenmesi:</strong> Kesinleşen boşanma kararı mahkeme tarafından otomatik olarak nüfus müdürlüğüne bildirilir. Ancak bu süreçte gecikme yaşanabilir. Boşanma kararının kesinleşme şerhli bir suretini alarak nüfus müdürlüğüne bizzat başvurmanız süreci hızlandırır. Kadın eşin soyadı boşanma ile birlikte kızlık soyadına döner.
                        </p>

                        <p>
                            <strong>Mal tasfiyesi:</strong> Boşanma kararında mal paylaşımına ilişkin hüküm kurulmamışsa veya anlaşmalı boşanma protokolünde mal paylaşımı düzenlenmemişse ayrı bir mal rejimi tasfiyesi davası açılması gerekir. Edinilmiş mallara katılma rejimi kapsamında boşanma tarihine kadar edinilen malların tasfiyesi yapılır.
                        </p>

                        <p>
                            <strong>Nafaka icrası:</strong> Mahkeme kararında hükmedilen nafakanın ödenmemesi durumunda icra takibi başlatılabilir. Nafaka alacağı imtiyazlı bir alacak olup, nafaka yükümlüsünün maaşından doğrudan kesinti yapılabilir. Ayrıca nafaka borcunu ödemeyen kişi hakkında İcra İflas Kanunu&apos;nun 344. maddesi uyarınca tazyik hapsi kararı verilebilir. <Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka davası</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <p>
                            <strong>Velayet uygulaması:</strong> Velayet kendisine verilmeyen ebeveynin çocukla kişisel ilişki kurma hakkı mahkeme kararında düzenlenir. Kişisel ilişki düzenlemesine uyulmaması halinde çocuk teslimi yoluyla icra takibi yapılabilir. Velayet koşullarında değişiklik olması halinde velayet değişikliği davası açılabilir. <Link href="/izmir-bosanma-avukati/velayet-davasi/">Velayet davası</Link> konusunda detaylı bilgi edinebilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Boşanma Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Boşanma Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Boşanma davaları, velayet, nafaka ve mal paylaşımı konularında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde boşanma davalarını takip ediyor.
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
                                <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Çekişmeli Boşanma Davası Süreci ve Kusur Tespiti
                                </Link>
                                <Link href="/blog/anlasmali-bosanma-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Anlaşmalı Boşanma Nasıl Açılır?
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Boşanma Süreciniz İçin Hukuki Destek Alın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Boşanma sürecinizin her aşamasında profesyonel hukuki destek için hemen randevu alın.
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
