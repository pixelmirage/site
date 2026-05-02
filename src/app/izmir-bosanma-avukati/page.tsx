import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { articleProseClasses } from "@/lib/prose-classes";


export const metadata: Metadata = {
    title: {
        absolute: "İzmir Boşanma Avukatı - Uzman Hukuki Danışmanlık",
    },
    description: "İzmir boşanma avukatı arıyorsanız avukat Mert Kağan Çetin ile iletişime geçebilirsiniz. Anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal paylaşımı gibi konularda size yardımcı olabiliriz.",
    keywords: ["İzmir boşanma avukatı", "boşanma avukatı İzmir", "anlaşmalı boşanma avukatı İzmir", "çekişmeli boşanma avukatı İzmir", "velayet davası avukatı İzmir", "nafaka davası avukatı İzmir", "boşanma davası ücreti", "İzmir en iyi boşanma avukatı", "İzmir aile hukuku avukatı", "boşanma avukatı İzmir yakınında"],
    openGraph: {
        title: "İzmir Boşanma Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanma davaları, velayet ve nafaka davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-04-17",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/",
    },
};

const faqs = [
    {
        question: "Boşanma avukatı kaç TL alır?",
        answer: "2026 yılında İzmir'de anlaşmalı boşanma davalarında 25.000–40.000 TL, çekişmeli boşanma davalarında 40.000–80.000 TL arasında ücret belirlenmektedir. Velayet, nafaka veya mal paylaşımı davası ayrıca açılacaksa her biri için ek ücret talep edilir. Büromuzda ilk ön görüşme ücretsizdir."
    },
    {
        question: "Anlaşmalı boşanma ne kadar sürer?",
        answer: "Anlaşmalı boşanma Türkiye'deki en hızlı boşanma yoludur. Protokol hazırlandıktan sonra genellikle tek celsede sonuçlanır. Mahkeme yoğunluğuna göre toplam süreç 1-3 ay arasında tamamlanır."
    },
    {
        question: "Velayet kime verilir?",
        answer: "Mahkeme velayet kararında çocuğun üstün yararını esas alır. Çocuğun yaşı, ebeveynlerin bakım kapasitesi, ekonomik durum ve uzman raporları değerlendirilir. 0-3 yaş arası çocuklar kural olarak anneye bırakılır."
    },
    {
        question: "Çekişmeli boşanma sebepleri nelerdir?",
        answer: "TMK'da düzenlenen boşanma sebepleri: Zina (m. 161), hayata kast ve kötü muamele (m. 162), suç işleme ve haysiyetsiz yaşam (m. 163), terk (m. 164), akıl hastalığı (m. 165) ve evlilik birliğinin temelinden sarsılması (m. 166). En sık başvurulan sebep m. 166'dır."
    },
    {
        question: "Boşanmada mal paylaşımı nasıl yapılır?",
        answer: "2002 sonrası evliliklerde edinilmiş mallara katılma rejimi geçerlidir. Evlilik süresince edinilen mallar eşit paylaşılır. Evlilik öncesi mallar, miras ve bağışlar kişisel mal sayılır ve paylaşıma dahil edilmez."
    },
    {
        question: "Erkek hangi durumda nafaka ödemez?",
        answer: "Kadının tam kusurlu olması, yoksulluğa düşmeyecek geliri olması, yeniden evlenmesi veya evlilik dışı birlikte yaşaması halinde yoksulluk nafakası ödenmez. İştirak nafakası ise çocuğun 18 yaşını doldurmasıyla sona erer."
    },
];

const tocItems = [
    { id: "izmir-bosanma-avukati-mert-kagan-cetin", title: "Av. Mert Kağan Çetin" },
    { id: "izmirde-bosanma-avukati", title: "İzmir'de Boşanma Avukatı" },
    { id: "bosanma-davasi-avukati-izmir", title: "Boşanma Davası Avukatı" },
    { id: "bosanma-sebepleri", title: "Boşanma Sebepleri" },
    { id: "bosanma-avukati-ucreti", title: "Avukatlık Ücreti" },
    { id: "en-iyi-bosanma-avukati", title: "En İyi Boşanma Avukatı" },
    { id: "bosanma-avukati-zorunlu-mu", title: "Avukat Zorunlu Mu?" },
    { id: "avukata-soru-sormak", title: "Danışma Ücreti" },
    { id: "bosanma-davasi-suresi", title: "Dava Süresi" },
    { id: "bosanma-kadinin-haklari", title: "Kadının Hakları" },
    { id: "sss", title: "SSS" },
];

export default function IzmirBosanmaAvukatiPage() {
    return (
        <main className="bg-white">
            {/* Schema Markup */}
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">İzmir Boşanma Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Boşanma Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong className="text-white">İzmir boşanma avukatı</strong> olarak anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal paylaşımı davalarında hukuki hizmet sunmaktayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <a href="tel:+905445854645">
                                    <Phone className="w-5 h-5" />
                                    Hemen Arayın
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                    WhatsApp ile Yazın
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 bg-slate-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">İçindekiler</p>
                        <nav className="flex flex-wrap gap-3">
                            {tocItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-sm text-primary hover:text-secondary font-medium transition-colors"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-3xl mx-auto ${articleProseClasses}`}>

                        {/* Giriş */}
                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak anlaşmalı ve çekişmeli boşanma davalarında, velayet, nafaka ve mal paylaşımı uyuşmazlıklarında İzmir genelinde hizmet vermekteyiz. Boşanma süreci hem duygusal hem de hukuki açıdan hassas bir dönemdir.
                        </p>

                        <p>
                            Bu sebeple aile hukuku konusunda deneyimli bir <strong>İzmir boşanma avukatı</strong> ile çalışmak, haklarınızı korumak ve süreci en az hasarla tamamlamak açısından büyük önem taşımaktadır.
                        </p>

                        {/* İletişim */}
                        <h2 id="izmir-bosanma-avukati-mert-kagan-cetin" className="scroll-mt-24">İzmir Boşanma Avukatı Mert Kağan Çetin</h2>

                        <p>
                            İzmir&apos;de aile hukuku konusunda uzmanlaşmış avukatımız, boşanma sürecinin her aşamasında profesyonel destek sunmaktadır. <Link href="/blog/anlasmali-bosanma-nasil-acilir/">Anlaşmalı boşanma</Link> protokolü hazırlama, <Link href="/izmir-bosanma-avukati/velayet-davasi/">velayet davaları</Link>, <Link href="/izmir-bosanma-avukati/nafaka-davasi/">nafaka talepleri</Link> ve mal paylaşımı konularında danışmanlık almak için iletişime geçebilirsiniz.
                        </p>

                        <ul>
                            <li><strong>Boşanma Avukatı:</strong> Av. Mert Kağan Çetin</li>
                            <li><strong>Telefon:</strong> <a href="tel:+905445854645">0544 585 46 45</a></li>
                            <li><strong>Adres:</strong> Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                            <li><strong>E-posta:</strong> <a href="mailto:mertkagancetin@gmail.com">mertkagancetin@gmail.com</a></li>
                        </ul>

                        {/* Boşanma Avukatının Önemi */}
                        <h2 id="izmirde-bosanma-avukati" className="scroll-mt-24">İzmir'de Boşanma Avukatı</h2>

                        <p>
                            Boşanma davaları Türk Medeni Kanunu&apos;nun 161-184. maddeleri kapsamında düzenlenen, sıkı usul kurallarına tabi davalardır. <strong>Boşanma avukatı</strong>nın desteğiyle zamanaşımı sürelerini kaçırmazsınız. <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">Çekişmeli boşanma</Link> davalarında kusur tespiti, delil toplama ve strateji belirleme aşamalarında profesyonel destek alırsınız.
                        </p>

                        <p>
                            Özellikle <Link href="/sozluk/velayet/">velayet</Link>, <Link href="/sozluk/nafaka/">nafaka</Link> ve <Link href="/sozluk/mal-paylasimi/">mal paylaşımı</Link> konularında hak kaybı yaşamamak için deneyimli bir avukatla çalışmanız kritik önem taşır. <strong>İzmir boşanma avukatı</strong> olarak müvekkillerimizin haklarını titizlikle koruyoruz.
                        </p>

                        {/* Boşanma Davaları */}
                        <h2 id="bosanma-davasi-avukati-izmir" className="scroll-mt-24">Boşanma Davası Avukatı İzmir</h2>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak aile hukukuyla ilgili aşağıdaki davalarda hizmet vermekteyiz:
                        </p>

                        <ol>
                            <li><Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı Boşanma Davaları</Link></li>
                            <li><Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">Çekişmeli Boşanma Davaları</Link></li>
                            <li><Link href="/izmir-bosanma-avukati/velayet-davasi/">Velayet Davaları</Link></li>
                            <li><Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka Davaları</Link></li>
                            <li><Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/">Mal Paylaşımı Davaları</Link></li>
                            <li><Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/">Boşanmada Tazminat Davaları</Link></li>
                        </ol>

                        {/* Boşanma Sebepleri */}
                        <h2 id="bosanma-sebepleri" className="scroll-mt-24">Boşanma Sebepleri</h2>

                        <p>
                            Türk Medeni Kanunu&apos;nda boşanma sebepleri özel ve genel sebepler olarak düzenlenmiştir:
                        </p>

                        <h3>1. Özel Boşanma Sebepleri</h3>

                        <ul>
                            <li><strong>Zina (TMK m. 161):</strong> Sadakat yükümlülüğünün ihlali. Öğrenmeden itibaren 6 ay içinde dava açılmalıdır.</li>
                            <li><strong>Hayata kast ve kötü muamele (TMK m. 162):</strong> Fiziksel şiddet, psikolojik baskı ve onur kırıcı davranışlar.</li>
                            <li><strong>Suç işleme ve haysiyetsiz yaşam (TMK m. 163):</strong> Küçük düşürücü suç veya haysiyetsiz yaşam sürme.</li>
                            <li><strong>Terk (TMK m. 164):</strong> Eşin en az 6 ay boyunca ortak konutu terk etmesi.</li>
                            <li><strong>Akıl hastalığı (TMK m. 165):</strong> İyileşme olanağı bulunmayan akıl hastalığı.</li>
                        </ul>

                        <h3>2. Genel Boşanma Sebebi</h3>

                        <p>
                            <Link href="/sozluk/evlilik-birliginin-temelden-sarsilmasi/">Evlilik birliğinin temelinden sarsılması</Link> (TMK m. 166) en sık başvurulan boşanma sebebidir. Eşlerin ortak hayatı sürdürmesi kendilerinden beklenemeyecek derecede sarsılmışsa bu maddeye dayanılır. <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> da bu madde kapsamında düzenlenir: Evliliğin en az 1 yıl sürmüş olması ve tarafların tüm sonuçlarda anlaşması gerekir.
                        </p>

                        <h3>3. Velayet ve Nafaka</h3>

                        <p>
                            <Link href="/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/">Velayet davası</Link>nda çocuğun üstün yararı esastır. <Link href="/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/">Nafaka</Link> ise tedbir nafakası, yoksulluk nafakası ve iştirak nafakası olmak üzere üç türdür. <Link href="/blog/velayet-degisikligi-davasi-sartlari-ve-mahkeme-kriterleri/">Velayet değişikliği</Link> koşulların değişmesi halinde her zaman talep edilebilir.
                        </p>

                        {/* Avukatlık Ücreti */}
                        <h2 id="bosanma-avukati-ucreti" className="scroll-mt-24">İzmir Boşanma Avukatı Ücreti</h2>

                        <p>
                            <strong>İzmir boşanma avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz. 2026 yılı güncel ücret aralıklarımız:
                        </p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Dava Türü</th>
                                    <th>Süre (Ortalama)</th>
                                    <th>Ücret Aralığı</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı Boşanma</Link></td>
                                    <td>1-3 ay</td>
                                    <td>25.000 - 40.000 TL</td>
                                </tr>
                                <tr>
                                    <td>Çekişmeli Boşanma</td>
                                    <td>1 - 3 yıl</td>
                                    <td>40.000 - 80.000 TL</td>
                                </tr>
                                <tr>
                                    <td><Link href="/izmir-bosanma-avukati/velayet-davasi/">Velayet Davası</Link></td>
                                    <td>6 ay - 1.5 yıl</td>
                                    <td>30.000 - 60.000 TL</td>
                                </tr>
                                <tr>
                                    <td><Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka Davası</Link></td>
                                    <td>3 - 6 ay</td>
                                    <td>20.000 - 40.000 TL</td>
                                </tr>
                                <tr>
                                    <td>Mal Paylaşımı Davası</td>
                                    <td>1 - 2 yıl</td>
                                    <td>40.000 - 80.000 TL</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            Lütfen kesin fiyat bilgisi almak için <strong>boşanma avukatı</strong> ile <Link href="/iletisim/">iletişime geçiniz</Link>.
                        </p>

                        {/* En İyi İzmir Boşanma Avukatı Nasıl Bulunur? */}
                        <h2 id="en-iyi-bosanma-avukati" className="scroll-mt-24">En İyi İzmir Boşanma Avukatı Nasıl Bulunur?</h2>

                        <p>
                            En iyi <strong>İzmir boşanma avukatı</strong>nı bulmak için avukatın aile hukuku alanındaki deneyimine, dava geçmişine ve müvekkil memnuniyetine bakmanız gerekir. İzmir Barosu&apos;na kayıtlı avukatlar arasından boşanma hukuku konusunda uzmanlaşmış isimleri araştırabilirsiniz.
                        </p>

                        <p>
                            Avukatın <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">anlaşmalı</Link> ve <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">çekişmeli boşanma</Link> davalarındaki tecrübesi, <Link href="/izmir-bosanma-avukati/velayet-davasi/">velayet</Link> ve <Link href="/izmir-bosanma-avukati/nafaka-davasi/">nafaka</Link> konularındaki bilgisi önemli kriterlerdir. Ücretsiz ön görüşme imkanı sunan <strong>İzmir boşanma avukatları</strong>yla tanışarak davanızın ilk değerlendirmesini yaptırmanız tavsiye edilir.
                        </p>

                        <h3>İzmir&apos;de En İyi Boşanma Avukatı Hangisi?</h3>

                        <p>
                            En iyi <strong>boşanma avukatı</strong>; müvekkilin haklarını en etkili şekilde savunan, aile hukuku mevzuatını ve Yargıtay içtihatlarını yakından takip eden, dava süreçlerini zamanında ve eksiksiz yürüten avukattır. &quot;En iyi&quot; kavramı kişiden kişiye değişebilir; ancak avukatın alanında uzmanlaşmış olması, deneyim yılı ve müvekkil memnuniyeti en önemli göstergelerdir. İzmir&apos;de <strong>boşanma avukatı</strong> ararken mutlaka yüz yüze veya telefonla ön görüşme yapmanız ve davanızın değerlendirilmesini istemeniz tavsiye edilir.
                        </p>

                        {/* Boşanma Avukatı Tutmak Zorunlu Mu? */}
                        <h2 id="bosanma-avukati-zorunlu-mu" className="scroll-mt-24">Boşanma Avukatı Tutmak Zorunlu Mu?</h2>

                        <p>
                            Türk hukukunda boşanma davaları için avukat tutma zorunluluğu bulunmamaktadır. Taraflar davayı bizzat kendileri de takip edebilir. Ancak boşanma davaları velayet, nafaka, <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/">mal paylaşımı</Link> ve <Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/">tazminat</Link> gibi birçok konuyu kapsadığından, uzman avukat desteği olmadan açılan davalarda ciddi hak kayıpları yaşanabilir.
                        </p>

                        <p>
                            Özellikle <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">çekişmeli boşanma</Link> davalarında delil toplama, kusur tespiti ve strateji belirleme aşamalarında <strong>İzmir boşanma avukatı</strong> ile çalışmanız büyük önem taşır.
                        </p>

                        {/* Avukata Soru Sormak Ücretli midir? */}
                        <h2 id="avukata-soru-sormak" className="scroll-mt-24">Avukata Soru Sormak Ücretli midir?</h2>

                        <p>
                            Avukata soru sormak (hukuki danışmanlık) kural olarak ücretlidir. 2026 yılı itibarıyla İzmir Barosu asgari ücret tarifesine göre sözlü danışma ücreti en az 3.000 TL, yazılı danışma ücreti ise en az 6.000 TL&apos;dir. Ancak birçok <strong>İzmir boşanma avukatı</strong> ilk ön görüşmeyi ücretsiz olarak sunmaktadır.
                        </p>

                        <p>
                            Büromuzda boşanma hukuku alanında ilk ön görüşme ücretsizdir. Bu görüşmede davanızın genel değerlendirmesi yapılır, hukuki haklarınız anlatılır ve izlenecek yol hakkında bilgilendirme sağlanır.
                        </p>

                        {/* Boşanma Davaları Ne Kadar Sürer? */}
                        <h2 id="bosanma-davasi-suresi" className="scroll-mt-24">Boşanma Davaları Ne Kadar Sürer?</h2>

                        <p>
                            Boşanma davalarının süresi davanın türüne göre değişmektedir. <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> davaları genellikle 1-3 ay içinde tek celsede sonuçlanır. <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">Çekişmeli boşanma</Link> davaları ise mahkeme yoğunluğuna, delil durumuna ve taraf tutumlarına göre 1-3 yıl arasında sürebilir.
                        </p>

                        <p>
                            <Link href="/izmir-bosanma-avukati/velayet-davasi/">Velayet</Link> veya <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/">mal paylaşımı</Link> davası da açılmışsa süreç daha da uzayabilir. <strong>İzmir boşanma avukatı</strong> ile çalışmak, dilekçelerin zamanında sunulması ve duruşmaların etkin takibi sayesinde dava sürecini hızlandırmanıza yardımcı olur.
                        </p>

                        {/* Boşanma Davasında Kadının Hakları */}
                        <h2 id="bosanma-kadinin-haklari" className="scroll-mt-24">Boşanma Davasında Kadının Hakları</h2>

                        <p>
                            Boşanma davasında kadının birçok hukuki hakkı bulunmaktadır. Kadın; <Link href="/izmir-bosanma-avukati/nafaka-davasi/">nafaka talep etme</Link> (tedbir, yoksulluk ve iştirak nafakası), <Link href="/izmir-bosanma-avukati/velayet-davasi/">velayet talep etme</Link>, <Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/">maddi ve manevi tazminat isteme</Link>, <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/">mal paylaşımı talep etme</Link> ve aile konutu şerhi koyma haklarına sahiptir.
                        </p>

                        <p>
                            Özellikle şiddet mağduru kadınlar 6284 sayılı Kanun kapsamında koruma kararı talep edebilir. <strong>İzmir boşanma avukatı</strong> olarak kadın müvekkillerimizin tüm yasal haklarını titizlikle koruyoruz.
                        </p>

                        {/* İzmir'de Boşanma Avukatı */}
                        <h2 id="izmirde-bosanma-avukati-sonuc" className="scroll-mt-24">İzmir&apos;de Boşanma Avukatı</h2>

                        <p>
                            İzmir&apos;de <strong>boşanma avukatı</strong> arıyorsanız aile hukuku alanında uzmanlaşmış bir avukatla çalışmanız, sürecin her aşamasında haklarınızın korunması açısından kritik önem taşır. <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı</Link> veya çekişmeli boşanma, velayet, nafaka ve mal paylaşımı konularında profesyonel hukuki destek almak için <strong>İzmir boşanma avukatı</strong> Av. Mert Kağan Çetin ile <Link href="/iletisim/">iletişime geçebilirsiniz</Link>.
                        </p>

                        <hr />

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-10 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-6 py-3">
                                <p className="text-white font-bold">Yazar Hakkında</p>
                            </div>
                            <div className="p-6 flex flex-col sm:flex-row gap-5">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Boşanma Avukatı" title="Av. Mert Kağan Çetin - İzmir Boşanma Avukatı" width={96} height={96} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-bold text-primary mb-1">Av. Mert Kağan Çetin</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        İzmir Barosu&apos;na kayıtlı avukat. 2019 yılından bu yana boşanma, kira, iş ve tazminat hukuku alanlarında hizmet vermektedir.
                                    </p>
                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
                                        <span>İzmir Barosu Sicil: 15556</span>
                                        <span>TBB Sicil: 162439</span>
                                    </div>
                                    <Link href="/hakkimda/" className="inline-block mt-3 text-secondary font-bold text-sm hover:text-primary transition-colors">
                                        Detaylı Özgeçmiş →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Google Reviews */}
                        <div className="not-prose">
                            <GoogleReviews />
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İlgili Makaleler */}
                        <h2>Aile Hukuku Makaleleri</h2>

                        <ul>
                            <li><Link href="/blog/anlasmali-bosanma-nasil-acilir/">Anlaşmalı Boşanma Nasıl Açılır? Adım Adım Rehber</Link></li>
                            <li><Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/">Çekişmeli Boşanma Davası Süreci ve Kusur Tespiti</Link></li>
                            <li><Link href="/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/">Velayet Davası Süreci ve Mahkeme Kriterleri</Link></li>
                            <li><Link href="/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/">Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası</Link></li>
                            <li><Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/">Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi</Link></li>
                            <li><Link href="/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/">Boşanmada Tazminat Davası: Maddi ve Manevi Tazminat</Link></li>
                            <li><Link href="/blog/velayet-degisikligi-davasi-sartlari-ve-mahkeme-kriterleri/">Velayet Değişikliği Davası: Şartlar ve Mahkeme Kriterleri</Link></li>
                            <li><Link href="/blog/aile-ici-siddet-koruma-karari-6284-sayili-kanun/">Aile İçi Şiddet ve Koruma Kararı: 6284 Sayılı Kanun Rehberi</Link></li>
                        </ul>

                        <p>
                            Aile hukukunu ilgilendiren her türlü sorununuza ilişkin hukuki danışmanlık almak için <strong>İzmir boşanma avukatı</strong> ile <Link href="/iletisim/">iletişime geçebilirsiniz</Link>.
                        </p>

                        {/* İletişim CTA */}
                        <div className="not-prose scroll-mt-24 my-12">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-2xl p-8 md:p-10">
                                <p className="text-2xl font-playfair font-bold mb-3">İzmir Boşanma Avukatı ile Görüşün</p>
                                <p className="text-slate-300 mb-6">
                                    Boşanma davalarınız için hemen randevu alın.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 mb-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-secondary" />
                                        <a href="tel:+905445854645" className="font-bold hover:text-secondary transition-colors">0544 585 46 45</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-secondary" />
                                        <a href="mailto:mertkagancetin@gmail.com" className="font-bold hover:text-secondary transition-colors">mertkagancetin@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-secondary" />
                                        <span className="font-bold">Bayraklı, İzmir</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                        <Link href="/iletisim/">
                                            Randevu Alın <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-primary gap-2" asChild>
                                        <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                            WhatsApp ile Yazın
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Uzmanlık Alanları Alt Sayfalar */}
                        <div className="not-prose my-12">
                            <p className="text-xl font-playfair font-bold text-primary mb-6">Aile Hukuku Uzmanlık Alanlarımız</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Anlaşmalı Boşanma", desc: "Tek celsede anlaşmalı boşanma ve protokol hazırlama", url: "/izmir-bosanma-avukati/anlasmali-bosanma/" },
                                    { title: "Velayet Davası", desc: "Çocuk velayeti ve velayet değişikliği davaları", url: "/izmir-bosanma-avukati/velayet-davasi/" },
                                    { title: "Nafaka Davası", desc: "İştirak, yoksulluk ve tedbir nafakası davaları", url: "/izmir-bosanma-avukati/nafaka-davasi/" },
                                    { title: "Çekişmeli Boşanma", desc: "Kusur tespiti, delil toplama ve çekişmeli boşanma davaları", url: "/izmir-bosanma-avukati/cekismeli-bosanma-izmir/" },
                                    { title: "Boşanma Süreci Rehberi", desc: "Boşanma davası aşamaları ve süreç yönetimi", url: "/izmir-bosanma-avukati/bosanma-sureci-izmir/" },
                                    { title: "Boşanma Avukatı Ücretleri", desc: "2026 boşanma avukat ücretleri ve dava masrafları", url: "/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/" },
                                    { title: "Mal Paylaşımı Davası", desc: "Edinilmiş mallara katılma ve mal paylaşımı davaları", url: "/izmir-bosanma-avukati/mal-paylasimi-izmir/" },
                                    { title: "Aldatma ve Boşanma", desc: "Zina sebebiyle boşanma davası ve tazminat hakları", url: "/izmir-bosanma-avukati/aldatma-bosanma-izmir/" },
                                    { title: "Aile Hukuku Avukatı", desc: "Aile hukukunun tüm alanlarında uzman avukatlık hizmeti", url: "/izmir-bosanma-avukati/aile-hukuku-avukati-izmir/" },
                                    { title: "Boşanma Davası Nasıl Açılır?", desc: "Dava açma şartları, gerekli belgeler ve süreç rehberi", url: "/izmir-bosanma-avukati/bosanma-davasi-nasil-acilir-izmir/" },
                                ].map((item, i) => (
                                    <Link key={i} href={item.url} className="group block p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-secondary transition-all">
                                        <p className="font-bold text-primary group-hover:text-secondary transition-colors mb-1">{item.title}</p>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </main>
    );
}
