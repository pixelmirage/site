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
    title: "İzmir Kıdem Tazminatı Davası Avukatı | Hesaplama & Dava | Hemen Arayın",
    description: "İzmir kıdem tazminatı davası avukatı Av. Mert Kağan Çetin. Ödenmeyen kıdem tazminatı, ihbar tazminatı, zamanaşımı ve faiz talepli alacak davalarında uzman hukuki destek.",
    keywords: ["kıdem tazminatı davası avukatı İzmir", "kıdem tazminatı davası", "kıdem tazminatı avukatı", "ödenmeyen kıdem tazminatı"],
    openGraph: {
        title: "İzmir Kıdem Tazminatı Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de ödenmeyen kıdem tazminatı davalarında uzman avukatlık hizmeti. Tazminat alacağınızı dava yoluyla tahsil ediyoruz.",
        url: "https://mertkagancetin.com/izmir-is-avukati/kidem-tazminati-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-is-avukati/kidem-tazminati-davasi/" },
};

const faqs = [
    {
        question: "İşveren kıdem tazminatımı ödemezse ne olur?",
        answer: "İşveren kıdem tazminatını ödemezse iş mahkemesinde alacak davası açılır. Dava açmadan önce zorunlu arabuluculuk başvurusu yapılması gerekir. Mahkeme kıdem tazminatını hüküm altına aldığında fesih tarihinden itibaren en yüksek banka mevduat faizi uygulanır. Kesinleşen karar ile icra takibi başlatılarak tazminat tahsil edilir."
    },
    {
        question: "Kıdem tazminatında zamanaşımı süresi ne kadardır?",
        answer: "Kıdem tazminatında zamanaşımı süresi 5 yıldır. Bu süre iş sözleşmesinin sona erdiği tarihten itibaren başlar. 5 yıl içinde dava açılmazsa kıdem tazminatı hakkı zamanaşımına uğrar ve talep edilemez. Bu nedenle işten ayrıldıktan sonra vakit kaybetmeden hukuki süreç başlatılmalıdır."
    },
    {
        question: "İstifa edince kıdem tazminatı alınır mı?",
        answer: "Normal istifa halinde kıdem tazminatı hakkı doğmaz. Ancak belirli durumlarda istifa eden işçi de kıdem tazminatına hak kazanır: askerlik, evlilik (kadın işçi, 1 yıl içinde), emeklilik, sağlık nedenleri ve işverenin ahlak ve iyi niyet kurallarına aykırı davranması. Ayrıca 15 yıl sigortalılık ve 3600 prim gününü dolduran işçi istifa ederek kıdem tazminatı alabilir."
    },
    {
        question: "Kıdem tazminatı brüt mü net mi ödenir?",
        answer: "Kıdem tazminatı brüt ücret üzerinden hesaplanır ancak gelir vergisinden muaftır. Sadece damga vergisi kesilir (binde 7,59). Hesaplamada çıplak ücretin yanı sıra düzenli olarak ödenen yol, yemek, ikramiye, prim gibi yan haklar da brüt ücrete eklenir. Her tam çalışma yılı için 1 brüt maaş tutarında tazminat ödenir."
    },
    {
        question: "Kıdem tazminatına faiz işler mi?",
        answer: "Evet, kıdem tazminatına fesih tarihinden itibaren en yüksek banka mevduat faizi uygulanır. Bu faiz oranı normal yasal faizden çok daha yüksektir. İşveren tazminatı geç ödediğinde faiz işlemeye devam eder. Dava açılmasıyla birlikte faiz talebi de dilekçeye eklenir ve mahkeme faize hükmeder."
    }
];

const tocItems = [
    { id: "kidem-hakki", title: "Kıdem Tazminatı Hakkı" },
    { id: "dava-sureci", title: "Kıdem Tazminatı Dava Süreci" },
    { id: "hesaplama", title: "Hesaplama ve Tavan Tutar" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KidemTazminatiDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Kıdem Tazminatı Davası", "İhbar Tazminatı", "İşçi Alacakları", "İş Hukuku Zamanaşımı", "Tazminat Hesaplama"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir İş Avukatı", url: "https://mertkagancetin.com/izmir-is-avukati/" },
                    { name: "Kıdem Tazminatı Davası", url: "https://mertkagancetin.com/izmir-is-avukati/kidem-tazminati-davasi/" }
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
                        <span className="text-secondary">Kıdem Tazminatı Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kıdem Tazminatı Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Ödenmeyen kıdem tazminatınızı dava yoluyla tahsil ediyoruz.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile hakkınızı alın.
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
                            <strong>İzmir kıdem tazminatı davası avukatı</strong> olarak işverenin ödemediği <Link href="/sozluk/kidem-tazminati/">kıdem tazminatını</Link> dava yoluyla tahsil ediyoruz. Bu sayfa kıdem tazminatı hesaplama yöntemi değil, ödenmediğinde açılacak davayı ve hukuki süreci anlatmaktadır. Hesaplama aracımız için <Link href="/kidem-tazminati-hesaplama/">kıdem tazminatı hesaplama sayfamızı</Link> ziyaret edin.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kıdem tazminatı, 1475 sayılı İş Kanunu&apos;nun 14. maddesi kapsamında düzenlenen ve işçinin en temel haklarından biridir. İşveren kıdem tazminatını ödemediğinde veya eksik ödediğinde işçi iş mahkemesinde alacak davası açabilir. <strong>Kıdem tazminatı davası avukatı</strong> olarak bu süreci başından sonuna yönetiyoruz.
                        </p>

                        <h2 id="kidem-hakki" className="scroll-mt-24">Kıdem Tazminatı Hakkı Hangi Durumlarda Doğar?</h2>

                        <p>
                            Kıdem tazminatı hakkının doğması için iş sözleşmesinin belirli koşullar altında sona ermesi gerekir. <strong>Kıdem tazminatı davası avukatı</strong> olarak müvekkillerimizin hak sahibi olup olmadığını ilk görüşmede değerlendiriyoruz.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Fesih Sebebi</th>
                                        <th className="px-6 py-4 text-left">Kıdem Tazminatı Hakkı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "İşveren Tarafından Fesih", desc: "İşveren haklı fesih (İK m. 25/II - ahlak ve iyi niyet kurallarına aykırılık) dışındaki tüm fesihlerde kıdem tazminatı ödenmek zorundadır." },
                                        { title: "İşçinin Haklı Feshi", desc: "İşçi İK m. 24 kapsamında haklı nedenle istifa ederse (maaş gecikmesi, SGK eksikliği, mobbing vb.) kıdem tazminatına hak kazanır." },
                                        { title: "Askerlik ve Evlilik", desc: "Erkek işçinin askere gitmesi veya kadın işçinin evlendikten sonra 1 yıl içinde istifası halinde kıdem tazminatı ödenir." },
                                        { title: "Emeklilik", desc: "Emeklilik şartlarını sağlayan veya 15 yıl sigortalılık + 3600 prim gününü dolduran işçi istifa ederek kıdem tazminatı alabilir." },
                                        { title: "Ölüm", desc: "İşçinin ölümü halinde kıdem tazminatı yasal mirasçılara ödenir." },
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
                            Kıdem tazminatı hesaplama yöntemi ve güncel tavan tutar hakkında detaylı bilgi için <Link href="/blog/kidem-tazminati-nasil-hesaplanir/">kıdem tazminatı nasıl hesaplanır rehberimizi</Link> okuyun.
                        </p>

                        <h2 id="dava-sureci" className="scroll-mt-24">Kıdem Tazminatı Dava Sürecimiz</h2>

                        <p>
                            <strong>Kıdem tazminatı davası avukatı</strong> olarak tazminat alacağınızı 5 aşamada tahsil ediyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Alacak Hesaplama ve Dosya İnceleme", desc: "İş sözleşmenizi, maaş bordrolarını, SGK kayıtlarını ve fesih bildirimini inceliyoruz. Brüt ücret üzerinden kıdem tazminatınızı hesaplıyor, tavan tutarı kontrol ediyoruz." },
                                { step: "2", title: "Zorunlu Arabuluculuk Başvurusu", desc: "İş mahkemesinde dava açmadan önce zorunlu arabuluculuk sürecini başlatıyoruz. Arabuluculuk görüşmesinde müvekkilimizi temsil ediyor, anlaşma şartlarını değerlendiriyoruz." },
                                { step: "3", title: "Dava Açma ve Faiz Talebi", desc: "Arabuluculukta anlaşma sağlanamazsa iş mahkemesinde kıdem tazminatı alacak davası açıyoruz. Fesih tarihinden itibaren en yüksek banka mevduat faizi talep ediyoruz." },
                                { step: "4", title: "Bilirkişi ve Duruşma Süreci", desc: "Mahkemenin atadığı bilirkişi raporu ile tazminat tutarını doğrulatıyoruz. Rapora itiraz varsa ek rapor talep ediyoruz. Tüm duruşmalara katılıyoruz." },
                                { step: "5", title: "Karar ve İcra Takibi", desc: "Mahkeme kararını aldıktan sonra işveren ödeme yapmazsa icra takibi başlatıyoruz. Gerekirse işverenin mal varlığına haciz koyduruyoruz." },
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

                        <SectionCTA text="Kıdem tazminatınız ödenmedi mi? Hakkınızı almak için hemen arayın." />

                        <h2 id="hesaplama" className="scroll-mt-24">Kıdem Tazminatı Hesaplama ve Tavan Tutar</h2>

                        <p>
                            Kıdem tazminatı, işçinin her tam çalışma yılı için bir brüt maaş tutarında ödenir. Hesaplamada çıplak ücretin yanı sıra düzenli olarak ödenen tüm yan haklar (yol, yemek, ikramiye, prim) brüt ücrete eklenir.
                        </p>

                        <h3>Hesaplama Formülü</h3>

                        <p>
                            <strong>Kıdem Tazminatı = Giydirilmiş Brüt Ücret x Çalışma Yılı.</strong> 1 yıldan artan süreler de orantılı olarak hesaplanır. Örneğin 3 yıl 6 ay çalışan işçi 3,5 brüt maaş tutarında kıdem tazminatı alır.
                        </p>

                        <h3>Tavan Tutar Uygulaması</h3>

                        <p>
                            Kıdem tazminatında yılda iki kez güncellenen tavan tutar uygulanır. İşçinin brüt maaşı tavandan yüksek olsa bile her yıl için tavan tutarı aşan kısım ödenmez. 2026 yılı güncel tavan tutarını <Link href="/kidem-tazminati-hesaplama/">kıdem tazminatı hesaplama aracımızda</Link> görebilirsiniz.
                        </p>

                        <h3>Zamanaşımı ve Faiz</h3>

                        <p>
                            Kıdem tazminatında zamanaşımı süresi İş Kanunu m. 32 gereği <strong>5 yıldır</strong>. Bu süre fesih tarihinden başlar. Faiz ise fesih tarihinden itibaren en yüksek banka mevduat faizi olarak işler. <Link href="/sozluk/ihbar-tazminati/">İhbar tazminatı</Link> da aynı zamanaşımı süresine tabidir.
                        </p>

                        <blockquote>
                            <strong>Dikkat:</strong> Bu sayfa kıdem tazminatınızın ödenmemesi halinde açılacak davayı anlatmaktadır. Tazminatınızı hesaplamak için <Link href="/kidem-tazminati-hesaplama/">hesaplama aracımızı</Link> kullanın. Hesaplama yöntemini öğrenmek için <Link href="/blog/kidem-tazminati-nasil-hesaplanir/">rehber yazımızı</Link> okuyun.
                        </blockquote>

                        <h2 id="ucretler" className="scroll-mt-24">2026 Kıdem Tazminatı Davası Ücretleri</h2>

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
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Kıdem Tazminatı Davası</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">30.000 - 50.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">İhbar Tazminatı Davası</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">25.000 - 40.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve tazminat tutarına göre ilk görüşmede belirlenir. <Link href="/izmir-is-avukati/">İş hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alın.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kıdem Tazminatı Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kıdem Tazminatı Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kıdem tazminatı, ihbar tazminatı ve işçi alacakları davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde iş davalarını takip ediyor.
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
                                <Link href="/blog/kidem-tazminati-nasil-hesaplanir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kıdem Tazminatı Nasıl Hesaplanır?
                                </Link>
                                <Link href="/kidem-tazminati-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kıdem Tazminatı Hesaplama Aracı
                                </Link>
                                <Link href="/sozluk/kidem-tazminati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Sözlük: Kıdem Tazminatı
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kıdem Tazminatı Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kıdem tazminatınız ödenmedi mi? Hemen randevu alın.
                                    <strong className="text-white"> Kıdem tazminatı davası avukatı</strong> olarak hakkınızı almanıza yardımcı oluyoruz.
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
