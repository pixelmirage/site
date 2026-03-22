import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";

export const metadata: Metadata = {
    title: "İzmir Mobbing Davası Avukatı",
    description: "İzmir mobbing davası avukatı Av. Mert Kağan Çetin. Psikolojik taciz, haklı fesih ve manevi tazminat davalarında uzman destek.",
    keywords: ["mobbing davası avukatı İzmir", "mobbing davası", "iş yerinde psikolojik taciz", "mobbing tazminatı"],
    openGraph: {
        title: "İzmir Mobbing Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de mobbing davalarında uzman avukatlık hizmeti. İş yerinde psikolojik tacize karşı hukuki koruma.",
        url: "https://mertkagancetin.com/izmir-is-avukati/mobbing-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-is-avukati/mobbing-davasi/" },
};

const faqs = [
    {
        question: "Mobbing nasıl ispatlanır?",
        answer: "Mobbing ispat edilmesi zor ancak imkansız olmayan bir konudur. Yargıtay kararlarına göre mobbing iddiasında kesin ispat aranmaz; yaklaşık ispat yeterlidir. Kullanılabilecek deliller: tanık ifadeleri (iş arkadaşları), e-posta ve mesaj yazışmaları, kamera kayıtları, doktor raporları ve psikolojik tedavi belgeleri, performans değerlendirme raporlarındaki tutarsızlıklar ve mobbinge maruz kalan diğer çalışanların tanıklıkları."
    },
    {
        question: "Hangi davranışlar mobbing sayılır?",
        answer: "Mobbing sayılan davranışlar sistematik ve sürekli olmalıdır. Tek seferlik bir olay mobbing oluşturmaz. Mobbing örnekleri: sürekli aşağılama ve küçümseme, iş yükünün aşırı artırılması veya tamamen kesilmesi, toplantılardan dışlanma, dedikodu yayılması, haksız disiplin cezaları, terfi engelleme, fiziksel çalışma ortamının kötüleştirilmesi, sürekli görev değişikliği ve anlamsız işler verilmesi."
    },
    {
        question: "Mobbing tazminatı ne kadar?",
        answer: "Mobbing tazminatı birkaç kalemden oluşur. Manevi tazminat olarak mahkemeler 50.000-300.000 TL arasında tazminata hükmedebilir. Buna ek olarak işçi haklı nedenle istifa ederse kıdem tazminatı ve ihbar tazminatı da alır. Maddi zarar ispat edilirse (tedavi masrafları, gelir kaybı) maddi tazminat da talep edilir. Toplam tazminat tutarı mobbing süresine, ağırlığına ve işçinin kıdemine göre değişir."
    },
    {
        question: "İstifa etmeden mobbing davası açılabilir mi?",
        answer: "Evet, işten ayrılmadan mobbing tazminatı davası açılabilir. İşçi çalışmaya devam ederken manevi tazminat ve koşulların iyileştirilmesi talebiyle dava açabilir. Ancak uygulamada işçi genellikle İK m. 24/II-b kapsamında haklı nedenle iş sözleşmesini fesheder ve hem kıdem tazminatı hem de manevi tazminat talep eder. Haklı fesih, fesih sebebini öğrendiği tarihten itibaren 6 iş günü içinde kullanılmalıdır."
    },
    {
        question: "İşverenin mobbing karşısında sorumluluğu nedir?",
        answer: "Türk Borçlar Kanunu m. 417 gereği işveren, işçinin kişiliğini korumak ve iş yerinde psikolojik tacizi önlemekle yükümlüdür. İşveren mobbingi bizzat uygulamasa bile önlem almadığı takdirde sorumlu tutulur. Yöneticilerin veya diğer çalışanların mobbing uygulaması halinde işveren kusursuz sorumluluk ilkesi gereği tazminat ödemek zorundadır."
    }
];

const tocItems = [
    { id: "mobbing-nedir", title: "Mobbing Nedir?" },
    { id: "dava-sureci", title: "Mobbing Davası Süreci" },
    { id: "ispat-ve-delil", title: "İspat ve Delil Yöntemleri" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function MobbingDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Mobbing Davası", "İş Yerinde Psikolojik Taciz", "Manevi Tazminat", "Haklı Fesih", "İşverenin Koruma Yükümlülüğü"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir İş Avukatı", url: "https://mertkagancetin.com/izmir-is-avukati/" },
                    { name: "Mobbing Davası", url: "https://mertkagancetin.com/izmir-is-avukati/mobbing-davasi/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-is-avukati/" className="hover:text-white transition-colors">İzmir İş Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Mobbing Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Mobbing Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İş yerinde psikolojik tacize karşı mobbing mağdurlarını temsil ediyoruz.
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
            <article className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-slate max-w-none
                        prose-headings:font-playfair prose-headings:font-black prose-headings:text-slate-900
                        [&>h2]:text-[1.75rem] [&>h2]:mb-6 [&>h2]:mt-14 [&>h2]:bg-slate-100 [&>h2]:py-4 [&>h2]:px-6 [&>h2]:-mx-6 [&>h2]:rounded-lg [&>h2]:border-l-4 [&>h2]:border-secondary
                        [&>h3]:text-[1.375rem] [&>h3]:mb-4 [&>h3]:mt-10 [&>h3]:text-primary [&>h3]:font-bold [&>h3]:border-b [&>h3]:border-slate-200 [&>h3]:pb-2
                        [&>p]:text-[1rem] [&>p]:text-slate-700 [&>p]:leading-[1.85] [&>p]:mb-5
                        prose-strong:text-primary prose-strong:font-bold
                        prose-a:text-secondary prose-a:font-semibold prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary
                        [&>ul>li]:text-[1rem] [&>ul>li]:text-slate-700 [&>ul>li]:mb-2 [&>ul>li]:leading-relaxed
                        [&>ol>li]:text-[1rem] [&>ol>li]:text-slate-700 [&>ol>li]:mb-2 [&>ol>li]:leading-relaxed
                        prose-ul:my-6 prose-ul:pl-6 prose-ol:my-6 prose-ol:pl-6
                        prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-slate-800 prose-blockquote:font-medium">

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir mobbing davası avukatı</strong> olarak iş yerinde sistematik psikolojik tacize maruz kalan çalışanları temsil ediyoruz. <Link href="/sozluk/mobbing/">Mobbing</Link>, çalışanın iş yerinde sistematik olarak baskı, aşağılama ve dışlanmaya maruz kalmasıdır. Biz bu süreçte haklı fesih, kıdem tazminatı ve manevi tazminat taleplerini birlikte yürütüyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Mobbing, Türk Borçlar Kanunu m. 417 ve İş Kanunu m. 24/II-b kapsamında hukuki koruma altındadır. İşverenin işçinin kişiliğini koruma yükümlülüğü vardır ve bu yükümlülüğün ihlali tazminat sorumluluğu doğurur. <strong>Mobbing davası avukatı</strong> olarak bu davaları üçlü talep stratejisiyle yürütüyoruz: <Link href="/sozluk/hakli-fesih/">haklı fesih</Link> ile kıdem tazminatı, ihbar tazminatı ve manevi tazminat.
                        </p>

                        <h2 id="mobbing-nedir" className="scroll-mt-24">Mobbing Nedir ve Nasıl Tanınır?</h2>

                        <p>
                            <strong>Mobbing</strong> (iş yerinde psikolojik taciz), bir çalışanın iş yerinde sistematik ve sürekli olarak psikolojik baskıya maruz kalmasıdır. Tek seferlik bir tartışma veya geçici bir anlaşmazlık mobbing oluşturmaz. Yargıtay kararlarına göre mobbing için şu unsurların bir arada bulunması gerekir:
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Mobbing Unsuru</th>
                                        <th className="px-6 py-4 text-left">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Sistematiklik", desc: "Davranışlar rastgele değil, belirli bir amaca yönelik ve planlı olmalıdır. İşçiyi yıldırma, istifaya zorlama veya itibarını zedeleme amacı taşır." },
                                        { title: "Süreklilik", desc: "Davranışlar tek seferlik değil, belirli bir süre boyunca (genellikle en az 6 ay) tekrarlanmalıdır. Ancak yoğun ve ağır davranışlarda daha kısa süre de yeterli görülebilir." },
                                        { title: "Güç Dengesizliği", desc: "Mobbing genellikle üst konumdaki kişiden alta (dikey mobbing) uygulanır. Ancak aynı düzeydeki çalışanlar arasında (yatay mobbing) veya asttan üste doğru da gerçekleşebilir." },
                                        { title: "Zarar Verme Amacı", desc: "Davranışların işçinin psikolojik sağlığını, motivasyonunu veya kariyer gelişimini olumsuz etkilemesi amaçlanır." },
                                        { title: "İşçiye Etkisi", desc: "Mobbing sonucunda işçide stres, depresyon, uyku bozuklukları, özgüven kaybı gibi psikolojik veya fiziksel belirtiler ortaya çıkar." },
                                    ].map((item, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-primary">{item.title}</td>
                                            <td className="px-6 py-4 text-slate-600">{item.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3>Sık Karşılaşılan Mobbing Davranışları</h3>

                        <ul>
                            <li><strong>Mesleki yetkinliğin sorgulanması:</strong> Sürekli eleştiri, küçümseme ve hata arama</li>
                            <li><strong>Sosyal izolasyon:</strong> Toplantılardan dışlama, bilgi paylaşmama, yalnız bırakma</li>
                            <li><strong>İş yükü manipülasyonu:</strong> Aşırı iş yükleme veya hiç iş vermeme, anlamsız görevler verme</li>
                            <li><strong>Kariyer engelleme:</strong> Haksız disiplin cezaları, terfi engeli, eğitim fırsatlarından mahrum bırakma</li>
                            <li><strong>Kişisel saldırılar:</strong> Aşağılama, dedikodu yayma, özel hayata müdahale</li>
                        </ul>

                        <h2 id="dava-sureci" className="scroll-mt-24">Mobbing Davası Sürecimiz</h2>

                        <p>
                            <strong>Mobbing davası avukatı</strong> olarak mobbing mağdurlarının davalarını 5 aşamada yürütüyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Durum Değerlendirmesi ve Delil Analizi", desc: "Mobbing iddiasını detaylı şekilde dinliyoruz. Mevcut delilleri (e-postalar, mesajlar, tanıklar, doktor raporları) değerlendiriyor ve delil güçlendirme stratejisi belirliyoruz." },
                                { step: "2", title: "Haklı Fesih ve Tazminat Stratejisi", desc: "Üçlü talep stratejimizi oluşturuyoruz: İK m. 24/II-b kapsamında haklı fesih, kıdem ve ihbar tazminatı ile TBK m. 417 kapsamında manevi tazminat. İşçi çalışmaya devam etmek istiyorsa korunma tedbirleri de değerlendiriyoruz." },
                                { step: "3", title: "Zorunlu Arabuluculuk ve Dava Açma", desc: "Zorunlu arabuluculuk başvurusunu yapıyor, görüşmeleri yönetiyoruz. Anlaşma sağlanamazsa iş mahkemesinde hem tazminat alacak davası hem de manevi tazminat davası açıyoruz." },
                                { step: "4", title: "İspat Süreci ve Duruşmalar", desc: "Tanık dinletme, yazışma kayıtları, kamera görüntüleri ve uzman raporlarını mahkemeye sunuyoruz. Psikolojik bilirkişi raporu talep ediyoruz. Yaklaşık ispat standardını karşılamaya odaklanıyoruz." },
                                { step: "5", title: "Karar ve Tazminat Tahsili", desc: "Mahkeme kararını aldıktan sonra kıdem tazminatı, ihbar tazminatı ve manevi tazminatın tahsilini sağlıyoruz. İşveren ödeme yapmazsa icra takibi başlatıyoruz." },
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

                        <SectionCTA text="İş yerinde mobbinge mi maruz kalıyorsunuz? Hukuki haklarınız için hemen arayın." />

                        <h2 id="ispat-ve-delil" className="scroll-mt-24">Mobbing Davalarında İspat ve Delil Yöntemleri</h2>

                        <p>
                            Mobbing davalarının en kritik aşaması ispat sürecidir. Yargıtay, mobbing davalarında kesin ispat yerine <strong>yaklaşık ispat</strong> standardını kabul etmektedir. Bu, işçinin mobbing iddiasını kesin olarak kanıtlaması gerekmediği, ancak iddiayı güçlü delillerle desteklemesi gerektiği anlamına gelir.
                        </p>

                        <h3>Kullanılabilecek Deliller</h3>

                        <ul>
                            <li><strong>Tanık ifadeleri:</strong> İş arkadaşları, eski çalışanlar ve mobbing davranışlarını gözlemleyen kişilerin tanıklıkları en güçlü delillerdendir</li>
                            <li><strong>Yazışma kayıtları:</strong> E-postalar, WhatsApp mesajları, SMS&apos;ler ve diğer yazılı iletişim kayıtları</li>
                            <li><strong>Kamera görüntüleri:</strong> İş yerindeki güvenlik kamerası kayıtları</li>
                            <li><strong>Sağlık raporları:</strong> Psikolog/psikiyatrist raporları, ilaç reçeteleri, hastane kayıtları</li>
                            <li><strong>Performans değerlendirmeleri:</strong> Mobbing öncesi ve sonrası performans notlarındaki tutarsızlıklar</li>
                            <li><strong>Disiplin kayıtları:</strong> Haksız ve orantısız disiplin cezalarına ilişkin belgeler</li>
                        </ul>

                        <h3>İşverenin Koruma Yükümlülüğü</h3>

                        <p>
                            TBK m. 417 gereği işveren, iş yerinde psikolojik tacizi önlemek ve işçinin kişiliğini korumakla yükümlüdür. İşveren mobbingi bizzat uygulamasa bile iş yerinde mobbingi engellemek için gerekli önlemleri almadığı takdirde sorumlu tutulur. Bu sorumluluk, üst yöneticilerin veya diğer çalışanların uyguladığı mobbing için de geçerlidir.
                        </p>

                        <blockquote>
                            <strong>Dikkat:</strong> Mobbing mağduru olarak delil toplarken dikkatli olmanız gerekir. Gizli ses kaydı gibi bazı deliller hukuka aykırı kabul edilebilir. Delil toplama stratejinizi avukatınızla birlikte belirleyin. <Link href="/izmir-is-avukati/ise-iade-davasi/">İşe iade davası</Link> ile mobbing davasının birlikte yürütülmesi de bazı durumlarda mümkündür.
                        </blockquote>

                        <h2 id="ucretler" className="scroll-mt-24">2026 Mobbing Davası Ücretleri</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">Hizmet</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                        <th className="px-4 py-3 text-left">Ücret Aralığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Mobbing Davası</td><td className="px-4 py-3">6-18 ay</td><td className="px-4 py-3">35.000 - 60.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Manevi Tazminat (ek dava)</td><td className="px-4 py-3">6-18 ay</td><td className="px-4 py-3">25.000 - 40.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Mobbing davalarının karmaşıklığı ve delil durumu ücretlendirmeyi doğrudan etkiler. Kesin ücret ilk görüşmede belirlenir. <Link href="/izmir-is-avukati/">İş hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alın.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Mobbing Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Mobbing Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Mobbing davaları, iş yerinde psikolojik taciz ve manevi tazminat davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde iş davalarını takip ediyor.
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
                                <Link href="/izmir-is-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    ← İzmir İş Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/izmir-is-avukati/ise-iade-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir İşe İade Davası Avukatı
                                </Link>
                                <Link href="/sozluk/mobbing/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Sözlük: Mobbing
                                </Link>
                                <Link href="/sozluk/hakli-fesih/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Sözlük: Haklı Fesih
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <div className="not-prose space-y-6 my-8">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border-b border-slate-200 pb-6">
                                    <p className="font-bold text-primary text-lg mb-2">{faq.question}</p>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Mobbing Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    İş yerinde psikolojik tacize maruz kalıyorsanız hemen randevu alın.
                                    <strong className="text-white"> Mobbing davası avukatı</strong> olarak haklarınızı korumaya hazırız.
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
