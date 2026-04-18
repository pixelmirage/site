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
    title: "Kira Sözleşmesi Rehberi - Hazırlama ve Hukuki Detaylar",
    description: "Kira sözleşmesi hazırlama rehberi. Kira kontratında bulunması gereken maddeler, sözleşme türleri, fesih koşulları ve hukuki dikkat edilmesi gerekenler.",
    keywords: ["kira sözleşmesi rehberi", "kira kontratı hazırlama", "kira sözleşmesi maddeleri", "kira sözleşmesi avukatı İzmir", "kira kontratı İzmir"],
    openGraph: {
        title: "Kira Sözleşmesi Rehberi - Hazırlama ve Hukuki Detaylar | Av. Mert Kağan Çetin",
        description: "Kira sözleşmesi hazırlama rehberi. Kira kontratında bulunması gereken maddeler, sözleşme türleri ve fesih koşulları.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/kira-sozlesmesi-rehberi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/kira-sozlesmesi-rehberi/" },
};

const faqs = [
    {
        question: "Kira sözleşmesi yazılı olmak zorunda mı?",
        answer: "Hayır, Türk Borçlar Kanunu&apos;na göre kira sözleşmesi herhangi bir şekil şartına tabi değildir. Sözlü olarak yapılan kira sözleşmeleri de geçerlidir. Ancak yazılı sözleşme, uyuşmazlık halinde ispat kolaylığı sağladığından mutlaka yazılı yapılması tavsiye edilir. Özellikle kira bedeli, depozito miktarı ve artış oranı gibi konularda yazılı belge bulunması tarafları korur."
    },
    {
        question: "Kira sözleşmesinde depozito ne kadar olmalı?",
        answer: "Türk Borçlar Kanunu madde 342&apos;ye göre konut ve çatılı işyeri kiralarında depozito (güvence bedeli) en fazla üç aylık kira bedeli tutarında olabilir. Depozito para olarak verilecekse kiracının onayı ile vadeli bir tasarruf hesabına yatırılmalıdır. Üç aylık kira bedelini aşan depozito talepleri kiracı aleyhine olduğundan geçersizdir."
    },
    {
        question: "Belirli süreli kira sözleşmesi otomatik uzar mı?",
        answer: "Evet, TBK madde 347&apos;ye göre belirli süreli konut ve çatılı işyeri kira sözleşmelerinde kiracı, süre bitiminden en az 15 gün önce bildirimde bulunmazsa sözleşme aynı koşullarla 1 yıl uzamış sayılır. Kiraya veren ise süre sonunda sözleşmeyi sona erdiremez; ancak 10 yıllık uzama süresinin sonunda 3 ay önceden bildirimde bulunarak sözleşmeyi sona erdirebilir."
    },
    {
        question: "Kira sözleşmesi noter onayı gerektirir mi?",
        answer: "Hayır, kira sözleşmesinin geçerliliği için noter onayı zorunlu değildir. Tarafların kendi aralarında imzaladıkları adi yazılı sözleşme hukuken geçerlidir. Ancak noter onaylı sözleşme, imza inkarı durumunda daha güçlü bir ispat aracı olur. Ayrıca tahliye taahhütnamesinin icra yoluyla kullanılabilmesi için noter onayı veya elden imzalanmış olması yeterlidir."
    },
    {
        question: "Kira sözleşmesi tek taraflı feshedilebilir mi?",
        answer: "Belirli süreli kira sözleşmelerinde kiracı, süre bitiminden en az 15 gün önce bildirimde bulunarak sözleşmeyi feshedebilir. Belirsiz süreli sözleşmelerde ise her iki taraf da yasal fesih bildirim sürelerine uyarak sözleşmeyi sona erdirebilir. Kiraya veren açısından ise tek taraflı fesih ancak TBK&apos;da sayılan tahliye sebeplerinden birinin varlığında mümkündür. Haklı sebep olmadan tek taraflı fesih hukuka aykırıdır."
    }
];

const tocItems = [
    { id: "kira-sozlesmesi-nedir", title: "Kira Sözleşmesi Nedir?" },
    { id: "zorunlu-maddeler", title: "Bulunması Gereken Maddeler" },
    { id: "sozlesme-turleri", title: "Kira Sözleşmesi Türleri" },
    { id: "sozlesme-feshi", title: "Kira Sözleşmesinin Feshi" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KiraSozlesmesiRehberiPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Kira Sözleşmesi Hazırlama" description="İzmir'de kira sözleşmesi hazırlama, inceleme ve revize hizmeti." serviceType="Kira Sözleşmesi Hazırlama" />
            <PersonSchema knowsAbout={["Kira Sözleşmesi", "Kira Kontratı", "Sözleşme Hukuku", "TBK Kira Hükümleri", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Kira Sözleşmesi Rehberi", url: "https://mertkagancetin.com/izmir-kira-avukati/kira-sozlesmesi-rehberi/" }
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
                        <span className="text-secondary">Kira Sözleşmesi Rehberi</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Kira Sözleşmesi Rehberi
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Kira sözleşmesi hazırlamadan önce bilmeniz gereken tüm hukuki detaylar. Sözleşme maddeleri, fesih koşulları ve dikkat edilmesi gerekenler.
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
                            <strong>Kira sözleşmesi</strong>, kiracı ile kiraya veren arasındaki ilişkiyi düzenleyen en temel hukuki belgedir. Doğru hazırlanmış bir kira sözleşmesi, ileride çıkabilecek uyuşmazlıkların önüne geçer ve her iki tarafın haklarını güvence altına alır. Bu rehberde kira sözleşmesinin hukuki çerçevesini, bulunması gereken maddeleri ve dikkat edilmesi gereken noktaları ele alıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kira sözleşmeleri, Türk Borçlar Kanunu&apos;nun 299-378. maddeleri arasında detaylı olarak düzenlenmiştir. Eksik veya hatalı hazırlanmış bir sözleşme, kira bedelinin tespiti, tahliye ve depozito iadesi gibi konularda ciddi sorunlara yol açabilir. <strong>Kira sözleşmesi avukatı</strong> olarak İzmir&apos;de hem konut hem de işyeri kira sözleşmelerinin hazırlanması ve incelenmesi konusunda hukuki destek sunuyoruz.
                        </p>

                        <h2 id="kira-sozlesmesi-nedir" className="scroll-mt-24">Kira Sözleşmesi Nedir?</h2>

                        <p>
                            Kira sözleşmesi, Türk Borçlar Kanunu madde 299&apos;a göre kiraya verenin bir şeyin kullanılmasını veya kullanılmasıyla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kararlaştırılan kira bedelini ödemeyi üstlendiği sözleşmedir. Kira sözleşmesi, taraflar arasında karşılıklı borç doğuran bir sözleşme olup hem kiraya verene hem de kiracıya belirli hak ve yükümlülükler yükler.
                        </p>

                        <p>
                            TBK&apos;nın 299-378. maddeleri arasında kira sözleşmesinin tüm yönleri düzenlenmiştir. Bu hükümler genel hükümler (m. 299-338), konut ve çatılı işyeri kirası (m. 339-356) ve ürün kirası (m. 357-378) olmak üzere üç bölümde ele alınmıştır. Konut ve çatılı işyeri kiraları, kiracıyı koruyan emredici hükümler içerdiğinden özellikle önem taşır.
                        </p>

                        <p>
                            Kira sözleşmesi herhangi bir şekil şartına tabi değildir. Sözlü olarak yapılan kira sözleşmeleri de hukuken geçerlidir. Ancak ispat kolaylığı açısından sözleşmenin yazılı yapılması büyük önem taşır. Yazılı sözleşme olmadan kira bedelinin miktarı, artış oranı ve depozito tutarı gibi konularda uyuşmazlık çıkması halinde ispat güçlüğü yaşanır. Bu nedenle kira ilişkisinin her zaman yazılı bir sözleşmeye dayandırılması tavsiye edilir.
                        </p>

                        <h2 id="zorunlu-maddeler" className="scroll-mt-24">Kira Sözleşmesinde Bulunması Gereken Maddeler</h2>

                        <p>
                            Hukuki açıdan geçerli ve tarafları koruyan bir kira sözleşmesinde aşağıdaki maddelerin eksiksiz yer alması gerekir. Bu maddeler hem kiracının hem de kiraya verenin haklarını güvence altına alır ve olası uyuşmazlıklarda referans noktası oluşturur.
                        </p>

                        <ul>
                            <li><strong>Tarafların kimlik bilgileri:</strong> Kiraya veren ve kiracının T.C. kimlik numarası, adı soyadı, adresi ve iletişim bilgileri eksiksiz yazılmalıdır</li>
                            <li><strong>Kiralanan taşınmazın bilgileri:</strong> Taşınmazın adresi, ada-parsel numarası, bağımsız bölüm numarası ve kullanım amacı (konut veya işyeri) belirtilmelidir</li>
                            <li><strong>Kira bedeli ve ödeme şekli:</strong> Aylık kira bedeli, ödeme tarihi, ödeme yöntemi (banka havalesi, elden vb.) açıkça belirlenmelidir</li>
                            <li><strong>Kira artış oranı:</strong> Yıllık kira artış oranı TBK madde 344&apos;e uygun olarak belirlenmelidir. Konut kiralarında artış oranı bir önceki yılın TÜFE oranını geçemez</li>
                            <li><strong>Kira süresi:</strong> Sözleşmenin başlangıç ve bitiş tarihleri ile belirli veya belirsiz süreli olduğu açıkça ifade edilmelidir</li>
                            <li><strong>Depozito (güvence bedeli):</strong> Depozito miktarı en fazla üç aylık kira bedeli olabilir (TBK m. 342). Depozitonun nereye yatırılacağı ve iade koşulları belirtilmelidir</li>
                            <li><strong>Kullanım amacı:</strong> Taşınmazın konut mu yoksa işyeri olarak mı kullanılacağı net bir şekilde yazılmalıdır</li>
                            <li><strong>Bakım ve onarım sorumlulukları:</strong> Küçük onarımların kiracıya, büyük onarımların kiraya verene ait olduğu belirtilmelidir</li>
                            <li><strong>Fesih koşulları:</strong> Sözleşmenin hangi hallerde ve hangi sürelerle feshedilebileceği açıklanmalıdır</li>
                            <li><strong>Aidat ve yan giderler:</strong> Ortak giderlerin (aidat, yakıt, su vb.) kimin tarafından karşılanacağı belirlenmelidir</li>
                        </ul>

                        <p>
                            Bu maddelerin her biri, kira ilişkisinin sağlıklı yürümesi ve olası uyuşmazlıkların çözümü açısından kritik öneme sahiptir. Eksik veya belirsiz maddeler ileride ciddi hukuki sorunlara yol açabilir. <strong>Kira sözleşmesi avukatı</strong> olarak sözleşmenizin tüm maddelerin eksiksiz ve hukuka uygun şekilde hazırlanmasını sağlıyoruz.
                        </p>

                        <h2 id="sozlesme-turleri" className="scroll-mt-24">Kira Sözleşmesi Türleri</h2>

                        <p>
                            Kira sözleşmeleri süresine ve kiralanan taşınmazın niteliğine göre farklı türlere ayrılır. Her türün kendine özgü hukuki sonuçları ve kuralları vardır. Doğru sözleşme türünü belirlemek, tarafların hak ve yükümlülüklerini netleştirir.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Sözleşme Türü</th>
                                        <th className="px-6 py-4 text-left">Özellikleri ve Hukuki Sonuçları</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Belirli Süreli Kira Sözleşmesi", desc: "Başlangıç ve bitiş tarihi belirlenmiş sözleşmedir. Süre sonunda kiracı 15 gün önceden bildirimde bulunmazsa sözleşme 1 yıl uzar (TBK m. 347). Kiraya veren süre sonunda sözleşmeyi sona erdiremez." },
                                        { title: "Belirsiz Süreli Kira Sözleşmesi", desc: "Bitiş tarihi belirlenmemiş sözleşmedir. Konut ve çatılı işyeri kiralarında her iki taraf da yasal fesih bildirim sürelerine uyarak sözleşmeyi sona erdirebilir. 6 aylık kira dönemleri için 3 ay önceden bildirim gerekir." },
                                        { title: "Konut Kirası Sözleşmesi", desc: "TBK m. 339-356 arasındaki kiracıyı koruyan emredici hükümler uygulanır. Kira artışı TÜFE ile sınırlıdır. Kiracı aleyhine düzenleme yapılamaz. Depozito en fazla 3 aylık kira bedelidir." },
                                        { title: "İşyeri Kirası Sözleşmesi", desc: "Çatılı işyeri kiralarında da konut kirası hükümleri kıyasen uygulanır. Ancak taraflar arasında sözleşme serbestisi daha geniştir. Kira bedelinin belirlenmesi ve artış oranında farklı kurallar geçerli olabilir." },
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
                            İşyeri kira sözleşmelerinde dikkat edilmesi gereken özel hususlar bulunmaktadır. Detaylı bilgi için <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/">işyeri kira sözleşmelerinde dikkat edilmesi gereken hususlar</Link> yazımızı inceleyebilirsiniz. Her sözleşme türünde tarafların hak ve yükümlülükleri farklılık gösterdiğinden, sözleşme hazırlanırken uzman hukuki destek alınması büyük önem taşır.
                        </p>

                        <SectionCTA text="Kira sözleşmenizin hukuki incelemesi için avukat desteği almak ister misiniz?" />

                        <h2 id="sozlesme-feshi" className="scroll-mt-24">Kira Sözleşmesinin Feshi</h2>

                        <p>
                            Kira sözleşmesinin feshi, sözleşme türüne ve fesih sebebine göre farklı kurallara tabidir. Kiracı ve kiraya verenin fesih hakları birbirinden farklıdır ve TBK&apos;da her iki taraf için ayrı düzenlemeler getirilmiştir. Usulüne uygun olmayan fesih bildirimleri geçersiz sayılacağından, fesih sürecinin doğru yönetilmesi kritik öneme sahiptir.
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Kiracının Fesih Hakkı", desc: "Belirli süreli sözleşmelerde kiracı, süre bitiminden en az 15 gün önce yazılı bildirimde bulunarak sözleşmeyi feshedebilir. Bildirimde bulunmazsa sözleşme 1 yıl uzar. Belirsiz süreli sözleşmelerde ise fesih bildirim süreleri TBK m. 329'a göre belirlenir." },
                                { step: "2", title: "Kiraya Verenin Fesih Hakkı", desc: "Kiraya veren, yalnızca TBK'da sayılan tahliye sebeplerinden birinin varlığında sözleşmeyi sona erdirebilir: ihtiyaç (m. 350), yeniden inşa (m. 350), yeni malikin ihtiyacı (m. 351), tahliye taahhütnamesi (m. 352/1), iki haklı ihtar (m. 352/2) veya 10 yıllık uzama süresi (m. 347)." },
                                { step: "3", title: "Haklı Nedenle Fesih", desc: "Her iki taraf da kira ilişkisinin devamını çekilmez kılan haklı bir sebebin varlığında, yasal fesih bildirim süresine uyarak sözleşmeyi her zaman feshedebilir (TBK m. 331). Haklı sebebin varlığı mahkeme tarafından değerlendirilir." },
                                { step: "4", title: "Kiracının Temerrüdü ile Fesih", desc: "Kiracı kira bedelini ödeme borcunda temerrüde düşerse, kiraya veren en az 30 günlük süre vererek ihtarname gönderir. Bu süre içinde ödeme yapılmazsa sözleşme feshedilebilir ve tahliye davası açılabilir (TBK m. 315)." },
                                { step: "5", title: "Fesih Bildiriminin Şekli", desc: "Fesih bildirimi yazılı olarak yapılmalıdır. Konut ve çatılı işyeri kiralarında bildirim noter aracılığıyla yapılması ispat açısından önemlidir. Sözlü fesih bildirimi geçerli değildir ve hukuki sonuç doğurmaz." },
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
                            Kira sözleşmesinin feshi konusunda detaylı bilgi için <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/">kira sözleşmesi fesih sebepleri ve hukuki süreç</Link> yazımızı inceleyebilirsiniz. Fesih sürecinde yapılacak usul hataları hak kaybına yol açabileceğinden, profesyonel hukuki destek almanız önerilir.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kira Sözleşmesi Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Sözleşmesi Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira sözleşmesi hazırlama, inceleme ve revize işlemlerinde profesyonel hukuki destek sunuyor. Konut ve işyeri kira sözleşmelerinde tarafların haklarını koruyan kapsamlı sözleşmeler hazırlıyor.
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
                                <Link href="/kira-sozlesmesi-ornegi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Sözleşmesi Örneği
                                </Link>
                                <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Sözleşmesi Fesih Sebepleri ve Hukuki Süreç
                                </Link>
                                <Link href="/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşyeri Kira Sözleşmelerinde Dikkat Edilmesi Gereken Hususlar
                                </Link>
                                <Link href="/kira-artis-orani-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Artış Oranı Hesaplama
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Sözleşmenizi Hukuki Güvenceye Alın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira sözleşmenizin hazırlanması veya incelenmesi için hemen randevu alın.
                                    <strong className="text-white"> Kira sözleşmesi avukatı</strong> olarak size yardımcı olmaya hazırız.
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
