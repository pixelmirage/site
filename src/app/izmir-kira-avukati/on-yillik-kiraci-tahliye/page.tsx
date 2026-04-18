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
    title: "10 Yıllık Kiracı Tahliyesi İzmir - TBK m. 347",
    description: "İzmir'de 10 yıllık kiracı tahliyesi süreci. TBK m. 347 kapsamında uzama süresini dolduran kiracının tahliyesi, fesih bildirimi süreleri ve dava şartları.",
    keywords: ["10 yıllık kiracı tahliyesi İzmir", "TBK 347 tahliye", "uzama süresi tahliye", "10 yıllık kiracı hakları", "süre sonu tahliye avukatı İzmir"],
    openGraph: {
        title: "10 Yıllık Kiracı Tahliyesi İzmir - TBK m. 347 | Av. Mert Kağan Çetin",
        description: "İzmir'de TBK m. 347 kapsamında 10 yıllık uzama süresini dolduran kiracının tahliyesi süreçlerinde uzman avukat desteği.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/on-yillik-kiraci-tahliye/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/on-yillik-kiraci-tahliye/" },
};

const faqs = [
    {
        question: "10 yıllık kiracı tahliye edilebilir mi?",
        answer: "Evet, TBK m. 347 uyarınca 10 yıllık uzama süresini dolduran kiracı herhangi bir sebep gösterilmeksizin tahliye edilebilir. Kiraya verenin yapması gereken tek şey, uzama yılının bitiminden en az 3 ay önce yazılı fesih bildiriminde bulunmaktır. Bu bildirim noter aracılığıyla yapılmalıdır. Bildirim süresine uyulmazsa sözleşme bir yıl daha uzar ve tahliye hakkı bir sonraki yıla ertelenir."
    },
    {
        question: "10 yıllık süre hesabı nasıl yapılır?",
        answer: "Belirli süreli kira sözleşmelerinde 10 yıllık süre, sözleşmenin başlangıcından itibaren hesaplanır. Örneğin 1 yıllık sözleşme imzalandıysa, sözleşme süresi + 10 yıllık uzama süresi toplamda 11 yıl eder. Belirsiz süreli sözleşmelerde ise 10 yıllık süre kira ilişkisinin başladığı tarihten itibaren hesaplanır. Her iki durumda da süre hesabında sözleşmenin fiili başlangıç tarihi esas alınır."
    },
    {
        question: "Fesih bildirimi nasıl gönderilir?",
        answer: "Fesih bildirimi mutlaka yazılı olarak ve noter aracılığıyla kiracıya tebliğ edilmelidir. Bildirimde sözleşmenin TBK m. 347 uyarınca feshedileceği açıkça belirtilmelidir. Adi mektup, SMS veya sözlü bildirim hukuken geçersizdir. Bildirimin uzama yılının bitiminden en az 3 ay önce kiracıya ulaşması gerekir; bu nedenle tebligat süresi de hesaba katılmalıdır."
    },
    {
        question: "10 yıllık kiracı tahliye davası ne kadar sürer?",
        answer: "İzmir&apos;de 10 yıllık kiracının tahliye davası ortalama 6-12 ay arasında sürmektedir. Süre, Bayraklı Adliyesi&apos;ndeki iş yoğunluğuna, davanın çekişmeli olup olmamasına ve kiracının itirazlarına göre değişir. Dava öncesi zorunlu arabuluculuk süreci de eklendiğinde toplam süre uzayabilir. Tahliye kararı kesinleştikten sonra kiracı çıkmazsa icra yoluyla tahliye 1-2 ay daha sürebilir."
    },
    {
        question: "Kiracı 10 yılı doldurmadan tahliye edilebilir mi?",
        answer: "10 yıllık süre dolmadan sebepsiz tahliye mümkün değildir. Ancak ihtiyaç nedeniyle tahliye (TBK m. 350), tahliye taahhütnamesi (TBK m. 352/1), iki haklı ihtar (TBK m. 352/2), kira bedelinin ödenmemesi veya kiracının sözleşmeye aykırı davranışı gibi haklı sebeplerle 10 yıl dolmadan da tahliye davası açılabilir. Bu durumda her sebebin kendine özgü şartlarının yerine getirilmesi gerekir."
    }
];

const tocItems = [
    { id: "nedir", title: "10 Yıllık Kiracı Tahliyesi Nedir?" },
    { id: "fesih-bildirimi", title: "Fesih Bildirimi Süreleri" },
    { id: "tahliye-sureci", title: "Tahliye Süreci" },
    { id: "sik-yapilan-hatalar", title: "Sık Yapılan Hatalar" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function OnYillikKiraciTahliyePage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="10 Yıllık Kiracı Tahliyesi" description="İzmir'de TBK m. 347 kapsamında 10 yıllık uzama süresini dolduran kiracının tahliye davası hizmeti." serviceType="10 Yıllık Kiracı Tahliyesi" />
            <PersonSchema knowsAbout={["10 Yıllık Kiracı Tahliyesi", "TBK Madde 347", "Uzama Süresi", "Fesih Bildirimi", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "10 Yıllık Kiracı Tahliyesi", url: "https://mertkagancetin.com/izmir-kira-avukati/on-yillik-kiraci-tahliye/" }
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
                        <span className="text-secondary">10 Yıllık Kiracı Tahliyesi</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            10 Yıllık Kiracı Tahliyesi İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            TBK m. 347 kapsamında 10 yıllık uzama süresini dolduran kiracının tahliyesi süreçlerinde
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile uzman avukat desteği.
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
                            <strong>10 yıllık kiracı tahliyesi</strong>, Türk Borçlar Kanunu&apos;nun 347. maddesi kapsamında kiraya verene tanınan en önemli haklardan biridir. İzmir&apos;de 10 yıllık uzama süresini dolduran kiracının tahliyesi sürecinde <strong>Av. Mert Kağan Çetin</strong> olarak fesih bildirimi hazırlanmasından dava takibine kadar tüm aşamalarda profesyonel hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kira sözleşmeleri, kiracıyı koruyan düzenlemeler nedeniyle kiraya verenin sözleşmeyi serbestçe feshetmesine imkan vermez. Ancak TBK m. 347 ile bu korumaya bir sınır getirilmiştir: 10 yıllık uzama süresinin dolmasıyla birlikte kiraya veren, herhangi bir sebep göstermeksizin sözleşmeyi feshedebilir. Bu hak, kira hukukunda &quot;sebepsiz fesih hakkı&quot; olarak adlandırılır ve kiraya verenin mülkiyet hakkıyla kiracının barınma hakkı arasındaki dengeyi sağlar.
                        </p>

                        <h2 id="nedir" className="scroll-mt-24">10 Yıllık Kiracı Tahliyesi Nedir?</h2>

                        <p>
                            TBK m. 347&apos;ye göre konut ve çatılı işyeri kiralarında, kiraya veren sözleşme süresinin bitiminden itibaren başlayan uzama süresinin 10 yılı aşması halinde, herhangi bir tahliye sebebi ileri sürmeksizin sözleşmeyi feshedebilir. Bu düzenleme 01.07.2012 tarihinde yürürlüğe giren 6098 sayılı Türk Borçlar Kanunu ile getirilmiştir ve kiracının süresiz olarak taşınmazda kalmasını engelleyen önemli bir mekanizmadır.
                        </p>

                        <p>
                            <strong>Belirli süreli kira sözleşmelerinde</strong> 10 yıllık uzama süresi, sözleşme süresinin bitiminden itibaren işlemeye başlar. Örneğin, 1 Ocak 2015 tarihinde başlayan ve 1 yıl süreli olan bir kira sözleşmesinde, sözleşme süresi 1 Ocak 2016&apos;da sona erer. Bu tarihten itibaren 10 yıllık uzama süresi başlar ve 1 Ocak 2026&apos;da dolar. Kiraya veren, 1 Ocak 2026 tarihinden en az 3 ay önce yani en geç 1 Ekim 2025&apos;e kadar fesih bildiriminde bulunmalıdır.
                        </p>

                        <p>
                            <strong>Belirsiz süreli kira sözleşmelerinde</strong> ise 10 yıllık süre, kira ilişkisinin fiilen başladığı tarihten itibaren hesaplanır. Sözleşmede süre belirtilmemişse veya sözleşme yazılı değilse, kiracının taşınmaza ne zaman yerleştiğinin ispatı önem kazanır. Kira ödemelerine ilişkin banka dekontları, faturalar ve belediye kayıtları bu ispatın yapılmasında kullanılabilir.
                        </p>

                        <h2 id="fesih-bildirimi" className="scroll-mt-24">Fesih Bildirimi Süreleri</h2>

                        <p>
                            10 yıllık uzama süresinin dolmasıyla kiraya verenin fesih hakkını kullanabilmesi için en önemli şart, yazılı fesih bildiriminin süresinde ve usulüne uygun olarak kiracıya tebliğ edilmesidir. TBK m. 347/1 uyarınca kiraya veren, uzama süresinin her yılının bitiminden en az <strong>3 ay önce</strong> yazılı fesih bildiriminde bulunmalıdır. Bu süre hak düşürücü süre niteliğindedir; kaçırılması halinde fesih hakkı bir sonraki uzama yılının sonuna kadar kullanılamaz.
                        </p>

                        <p>
                            Fesih bildirimi mutlaka <strong>noter aracılığıyla</strong> yapılmalıdır. Adi yazılı bildirim, e-posta, SMS veya sözlü bildirim hukuken geçersizdir. Noterden gönderilen ihtarnamede sözleşmenin TBK m. 347 uyarınca feshedileceği, kiracının belirtilen tarihte taşınmazı tahliye etmesi gerektiği açıkça yazılmalıdır. Tebligat süresinin de hesaba katılması gerektiğinden, ihtarnamenin son günde değil, yeterli süre öncesinde gönderilmesi tavsiye edilir.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Sözleşme Başlangıcı</th>
                                        <th className="px-6 py-4 text-left">Uzama Süresi Sonu</th>
                                        <th className="px-6 py-4 text-left">Son Bildirim Tarihi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-primary">01.01.2015 (1 yıllık)</td>
                                        <td className="px-6 py-4 text-slate-600">01.01.2026</td>
                                        <td className="px-6 py-4 text-slate-600">01.10.2025</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50">
                                        <td className="px-6 py-4 font-bold text-primary">01.06.2014 (2 yıllık)</td>
                                        <td className="px-6 py-4 text-slate-600">01.06.2026</td>
                                        <td className="px-6 py-4 text-slate-600">01.03.2026</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-primary">15.09.2015 (1 yıllık)</td>
                                        <td className="px-6 py-4 text-slate-600">15.09.2026</td>
                                        <td className="px-6 py-4 text-slate-600">15.06.2026</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors bg-slate-50">
                                        <td className="px-6 py-4 font-bold text-primary">01.03.2016 (1 yıllık)</td>
                                        <td className="px-6 py-4 text-slate-600">01.03.2027</td>
                                        <td className="px-6 py-4 text-slate-600">01.12.2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki tabloda belirli süreli sözleşmeler için örnek hesaplamalar verilmiştir. Dikkat edilmesi gereken husus, sözleşme süresinin bitiminden itibaren 10 yıl hesaplanması ve son bildirim tarihinin uzama yılının bitiminden 3 ay önce olmasıdır. Bu sürelerin doğru hesaplanması davanın kabulü için zorunludur.
                        </p>

                        <h2 id="tahliye-sureci" className="scroll-mt-24">10 Yıllık Kiracı Tahliye Süreci</h2>

                        <p>
                            10 yıllık uzama süresini dolduran kiracının tahliyesi belirli adımların eksiksiz ve sırasıyla takip edilmesini gerektirir. <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/">Kiracı tahliye davası</Link> sürecinde olduğu gibi her aşamada usul kurallarına uyulması zorunludur. Aşağıda bu süreci 5 adımda özetliyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Süre Hesabı ve Değerlendirme", desc: "Kira sözleşmesinin başlangıç tarihi, süresi ve uzama durumu incelenir. 10 yıllık uzama süresinin dolup dolmadığı kesin olarak hesaplanır. Belirsiz süreli sözleşmelerde kira ilişkisinin başlangıç tarihinin ispatı için deliller değerlendirilir." },
                                { step: "2", title: "Noter İhtarnamesi Hazırlama", desc: "TBK m. 347 uyarınca fesih bildirimini içeren noter ihtarnamesi hazırlanır. İhtarnamede sözleşme bilgileri, fesih iradesinin açık beyanı ve tahliye tarihi yer alır. İhtarname, uzama yılının bitiminden en az 3 ay önce kiracıya tebliğ ettirilir." },
                                { step: "3", title: "Kiracıya Tebligat", desc: "İhtarname noter kanalıyla kiracıya tebliğ edilir. Tebliğ şerhi ve tarihinin alınması kritik öneme sahiptir. Kiracının adreste bulunmaması halinde Tebligat Kanunu hükümlerine göre tebligat yapılır." },
                                { step: "4", title: "Tahliye Davası Açma", desc: "Kiracı fesih bildirimine rağmen taşınmazı tahliye etmezse, Sulh Hukuk Mahkemesi nezdinde tahliye davası açılır. Dava dilekçesinde süre hesabı, fesih bildirimi ve tebligat belgeleri eksiksiz sunulur." },
                                { step: "5", title: "Mahkeme Kararı ve İcra Takibi", desc: "Mahkeme tahliye kararı verdikten sonra, kiracı kararı gönüllü olarak yerine getirmezse icra müdürlüğüne başvurularak zorla tahliye işlemi başlatılır. Tahliye kararının icrası için yasal süre 10 gündür." },
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
                            Sürecin her aşamasında usul hatası yapılması davanın reddine veya uzamasına yol açabilir. Özellikle süre hesabı ve fesih bildiriminin usulüne uygunluğu mahkemece titizlikle incelenir. <strong>10 yıllık kiracı tahliyesi</strong> konusunda deneyimli bir avukattan destek almak sürecin hızlı ve sorunsuz tamamlanmasını sağlar.
                        </p>

                        <SectionCTA text="10 yıllık kiracı tahliyesi süreciniz için uzman avukat desteği almak ister misiniz?" />

                        <h2 id="sik-yapilan-hatalar" className="scroll-mt-24">Sık Yapılan Hatalar</h2>

                        <p>
                            10 yıllık kiracı tahliyesi davalarında kiraya verenlerin en sık yaptığı hatalar, süre hesabı ve bildirim usulüne ilişkindir. Bu hatalar davanın reddine yol açarak kiraya verenin tahliye hakkını en az bir yıl ertelemektedir. Aşağıda en yaygın hataları ve sonuçlarını sıralıyoruz:
                        </p>

                        <ul>
                            <li><strong>Yanlış süre hesabı:</strong> Sözleşme başlangıç tarihinin hatalı belirlenmesi veya uzama süresinin sözleşme tarihinden itibaren hesaplanması en sık yapılan hatadır. Uzama süresi, sözleşme süresinin bitiminden itibaren başlar. Bu ayrımın gözden kaçırılması davanın reddine neden olur.</li>
                            <li><strong>Fesih bildiriminin geç gönderilmesi:</strong> 3 aylık bildirim süresinin son günlerinde ihtarname gönderilmesi, tebligat gecikmesi nedeniyle sürenin kaçırılmasına yol açar. Tebligat süresinin de hesaba katılarak en az 4-5 ay öncesinden bildirim yapılması tavsiye edilir.</li>
                            <li><strong>Usulsüz tebligat:</strong> Fesih bildiriminin noter dışında yapılması (mektup, e-posta, SMS) veya yanlış adrese gönderilmesi bildirimi geçersiz kılar. Kiracının MERNİS adresine veya sözleşmedeki adresine noter kanalıyla tebligat yapılmalıdır.</li>
                            <li><strong>İhtarname içeriğinin eksik olması:</strong> Fesih bildiriminde TBK m. 347 referansı, sözleşme bilgileri ve tahliye tarihinin açıkça belirtilmemesi bildirimin geçerliliğini tartışmalı hale getirir.</li>
                            <li><strong>Dava süresinin kaçırılması:</strong> Fesih bildirimi yapıldıktan sonra uzama yılının bitiminde kiracı tahliye etmezse, makul süre içinde tahliye davası açılmalıdır. Uzun süre beklenmesi hak kaybına yol açabilir.</li>
                        </ul>

                        <p>
                            Bu hataların önlenebilmesi için sürecin başından itibaren <Link href="/izmir-kira-avukati/">kira hukuku alanında uzman bir avukattan</Link> destek alınması önerilir. Özellikle süre hesabı ve ihtarname hazırlığı aşamasında yapılacak profesyonel bir değerlendirme, ileride telafisi güç sorunların önüne geçer.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">10 Yıllık Kiracı Tahliyesi Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir 10 Yıllık Kiracı Tahliyesi Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. TBK m. 347 kapsamında 10 yıllık uzama süresini dolduran kiracıların tahliyesi davalarında kiraya verenlere profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
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
                                <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Sözleşmesi Fesih Sebepleri ve Hukuki Süreç
                                </Link>
                                <Link href="/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Ev Sahibi Hangi Durumlarda Kiracıyı Hemen Çıkarabilir?
                                </Link>
                                <Link href="/tahliye-taahhutnamesi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Tahliye Taahhütnamesi Örneği
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Tespit Davası Avukatı
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">10 Yıllık Kiracı Tahliyesi İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    10 yıllık uzama süresini dolduran kiracınızın tahliyesi için hemen randevu alın.
                                    <strong className="text-white"> 10 yıllık kiracı tahliyesi avukatı</strong> olarak size yardımcı olmaya hazırız.
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
