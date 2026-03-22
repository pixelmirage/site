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
    title: "İzmir Kira Tespit Davası Avukatı | Adil Kira Bedeli | Hemen Arayın",
    description: "İzmir kira tespit davası avukatı Av. Mert Kağan Çetin. Kira bedeli tespiti, emsal kira araştırması, TÜFE kira artışı sınırı ve kira uyarlama davalarında uzman hukuki destek.",
    keywords: ["kira tespit davası avukatı İzmir", "kira tespit davası", "kira bedeli tespiti", "emsal kira araştırması", "TÜFE kira artışı"],
    openGraph: {
        title: "İzmir Kira Tespit Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira tespit davalarında uzman avukatlık hizmeti. Adil kira bedeli tespiti için hukuki destek.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/kira-tespit-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/kira-tespit-davasi/" },
};

const faqs = [
    {
        question: "Kira tespit davası ne kadar sürer?",
        answer: "İzmir'de kira tespit davası ortalama 6-12 ay sürer. Süreyi etkileyen başlıca faktörler bilirkişi incelemesi, keşif aşaması ve Bayraklı Adliyesi'ndeki iş yüküdür. Bilirkişi raporu mahkemenin kararını doğrudan etkilediğinden bu aşama genellikle 2-3 ay sürer. Dava sonuçlanana kadar kiracı mevcut kira bedelini ödemeye devam eder."
    },
    {
        question: "Kira tespit davası açmak ne kadara mal olur?",
        answer: "2026 yılında İzmir'de kira tespit davası avukatlık ücreti 30.000-50.000 TL arasında değişir. Buna ek olarak mahkeme harcı, bilirkişi ücreti, keşif masrafı ve tebligat giderleri de söz konusudur. Mahkeme harcı dava konusu kira farkı üzerinden nispi olarak hesaplanır. Kesin ücret ilk görüşmede davanın kapsamına göre belirlenir."
    },
    {
        question: "Kira tespit davası ne zaman açılmalıdır?",
        answer: "Kira tespit davası yeni kira döneminin başlangıcından en az 30 gün önce açılmalı veya bu sürede ihtarname gönderilmelidir. 30 gün öncesinden açılan dava geriye dönük olarak yeni dönemin başından itibaren geçerli olur. Süreyi kaçırmak bir sonraki döneme kadar beklemeyi gerektirir."
    },
    {
        question: "TÜFE sınırı kira tespit davasını nasıl etkiler?",
        answer: "5 yıldan kısa süreli kira ilişkilerinde hakim, TÜFE oranını aşan bir kira artışına karar veremez (TBK m. 344/1). Ancak 5 yılı aşan kira ilişkilerinde hakim, TÜFE sınırıyla bağlı değildir ve emsal kira bedelleri, taşınmazın durumu gibi faktörleri değerlendirerek hakkaniyet çerçevesinde yeni kira bedelini belirler (TBK m. 344/3)."
    },
    {
        question: "Kira tespit davası kimler tarafından açılabilir?",
        answer: "Kira tespit davası hem kiraya veren (ev sahibi) hem de kiracı tarafından açılabilir. Ev sahibi kira bedelinin emsal değerlerin altında kaldığını düşündüğünde artış talep eder. Kiracı ise ödediği kira bedelinin emsal değerlerin üzerinde olduğunu düşündüğünde indirim talep edebilir. Her iki durumda da mahkeme bilirkişi raporu ve emsal araştırmasına göre karar verir."
    }
];

const tocItems = [
    { id: "kira-tespit-nedir", title: "Kira Tespit Davası Nedir?" },
    { id: "surecimiz", title: "İzmir'de Kira Tespit Davası Sürecimiz" },
    { id: "neden-avukat", title: "Neden Avukat Gerekli?" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KiraTespitDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Kira Tespit Davası", "Kira Bedeli Tespiti", "TÜFE Kira Artışı", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Kira Tespit Davası", url: "https://mertkagancetin.com/izmir-kira-avukati/kira-tespit-davasi/" }
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
                        <span className="text-secondary">Kira Tespit Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kira Tespit Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Kira bedeli tespiti, emsal kira araştırması ve TÜFE kira artışı davalarında
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile profesyonel hukuki destek alın.
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
                            <strong>İzmir kira tespit davası avukatı</strong> olarak kira bedelinin adil seviyede belirlenmesi için müvekkillerimizi temsil ediyoruz. Emsal kira araştırması, bilirkişi süreci ve <Link href="/sozluk/kira-tespit-davasi/">kira tespit davası</Link> sürecinin her aşamasında profesyonel hukuki destek sunuyoruz. Kira bedelinizin piyasa koşullarını yansıtmasını sağlamak için TBK m. 344 kapsamında haklarınızı koruyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <h2 id="kira-tespit-nedir" className="scroll-mt-24">Kira Tespit Davası Nedir?</h2>

                        <p>
                            Kira tespit davası, kira bedelinin güncel piyasa koşullarına uygun olarak mahkeme tarafından yeniden belirlenmesi için açılan davadır. Türk Borçlar Kanunu&apos;nun 344. maddesi kapsamında düzenlenen bu dava türü, özellikle uzun süreli kira ilişkilerinde kira bedelinin gerçek değerinden uzaklaşması durumunda başvurulan en etkili hukuki yoldur.
                        </p>

                        <p>
                            Beş yıldan kısa süreli kira sözleşmelerinde hakim, bir önceki <Link href="/sozluk/kira-artis-orani/">kira artış oranının</Link> TÜFE oranını aşıp aşmadığını denetler ve TÜFE&apos;yi aşan bir artışa hükmedemez. Ancak <strong>beş yılı aşan kira ilişkilerinde</strong> (TBK m. 344/3) hakim, TÜFE sınırıyla bağlı olmaksızın emsal kira bedelleri, taşınmazın durumu ve hakkaniyet ilkesini gözeterek yeni kira bedelini belirler. Bu nedenle uzun süredir devam eden kira ilişkilerinde kira tespit davası ev sahipleri için en önemli hukuki araçtır.
                        </p>

                        <p>
                            Kira tespit davasının hangi durumlarda açılabileceği, dava şartları ve süreçler hakkında kapsamlı rehberimizi inceleyebilirsiniz: <Link href="/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/">Hangi durumlarda kira tespit davası açılabilir?</Link>
                        </p>

                        <h2 id="surecimiz" className="scroll-mt-24">İzmir&apos;de Kira Tespit Davası Sürecimiz</h2>

                        <p>
                            <strong>Kira tespit davası avukatı</strong> olarak dava sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Sözleşme ve Kira Analizi", desc: "Mevcut kira sözleşmesini, kira artış geçmişini ve sözleşme süresini inceliyoruz. TBK m. 344 kapsamında hangi hükmün uygulanacağını belirliyoruz." },
                                { step: "2", title: "Emsal Kira Araştırması", desc: "Taşınmazın bulunduğu bölgedeki emsal kiraları araştırıyor, rayiç kira bedelini tespit ediyoruz. Karşılaştırma yapılacak taşınmazları büyüklük, konum ve nitelik açısından değerlendiriyoruz." },
                                { step: "3", title: "Dava Dilekçesi Hazırlama", desc: "Emsal araştırma sonuçları ve kira sözleşmesi analiziyle desteklenen güçlü bir dava dilekçesi hazırlıyoruz. Yeni kira döneminden 30 gün önce dava açarak geriye dönük uygulanmasını sağlıyoruz." },
                                { step: "4", title: "Bilirkişi ve Keşif Süreci", desc: "Mahkemece atanan bilirkişi heyetinin keşif işlemlerini takip ediyor, bilirkişi raporuna gerektiğinde itiraz ediyoruz. Emsal taşınmazların doğru seçilmesini ve adil bir rapor hazırlanmasını sağlıyoruz." },
                                { step: "5", title: "Karar ve Uygulama", desc: "Mahkeme kararıyla belirlenen yeni kira bedelinin uygulanmasını takip ediyoruz. Gerekirse icra takibi yoluyla fark kira bedelinin tahsilini gerçekleştiriyoruz." },
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

                        <h2 id="neden-avukat" className="scroll-mt-24">Kira Tespit Davasında Neden Avukat Gerekli?</h2>

                        <p>
                            Kira tespit davaları teknik bilgi ve deneyim gerektiren uzmanlık davalarıdır. Avukatsız açılan kira tespit davalarında sık karşılaşılan sorunlar:
                        </p>

                        <ul>
                            <li><strong>Emsal kira tespitinde hatalar:</strong> Yanlış emsal taşınmaz seçimi bilirkişi raporunu olumsuz etkiler ve beklenen kira artışının çok altında bir bedele hükmedilmesine yol açar</li>
                            <li><strong>Süre hesaplama hataları:</strong> Davanın yeni kira döneminden 30 gün önce açılmaması halinde belirlenen kira bedeli bir sonraki dönemden itibaren uygulanır, bir yıllık kayıp oluşur</li>
                            <li><strong>TBK m. 344 hükümlerinin yanlış uygulanması:</strong> 5 yıldan kısa ve 5 yıldan uzun süreli kira ilişkilerinde farklı kurallar geçerlidir; yanlış hüküm uygulanması davanın sonucunu doğrudan etkiler</li>
                            <li><strong>Bilirkişi raporuna itiraz edilmemesi:</strong> Hatalı veya eksik bilirkişi raporuna süresinde itiraz edilmemesi hakkaniyete aykırı sonuçlara neden olur</li>
                            <li><strong>Kira uyarlama ile karıştırılması:</strong> Kira tespit davası ile kira uyarlama davası farklı hukuki kurumlardır; yanlış dava türü seçilmesi zaman ve hak kaybına yol açar</li>
                        </ul>

                        <p>
                            <strong>Kira tespit davası avukatı</strong> olarak bu riskleri ortadan kaldırıyor ve müvekkillerimiz için en adil kira bedelinin belirlenmesini sağlıyoruz. <Link href="/izmir-kira-avukati/">Kira hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alın.
                        </p>

                        <SectionCTA text="Kira tespit davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Kira Tespit Davası Ücretleri</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">Dava Türü</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                        <th className="px-4 py-3 text-left">Ücret Aralığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Kira Tespit Davası</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">30.000 - 50.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Kira Uyarlama Davası</td><td className="px-4 py-3">6-18 ay</td><td className="px-4 py-3">35.000 - 55.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve dava konusu kira bedeline göre ilk görüşmede belirlenir. Mahkeme harcı, bilirkişi ücreti ve keşif masrafları bu ücretlere dahil değildir.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kira Tespit Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Tespit Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira tespit davaları, kira uyarlama davaları ve kira uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
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
                                <Link href="/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Hangi Durumlarda Kira Tespit Davası Açılabilir?
                                </Link>
                                <Link href="/kira-artis-orani-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Artış Oranı Hesaplama Aracı
                                </Link>
                                <Link href="/sozluk/kira-artis-orani/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Artış Oranı Nedir? (Sözlük)
                                </Link>
                                <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kiracı Tahliye Davası Avukatı
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Tespit Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira bedelinizin adil seviyede belirlenmesi için hemen randevu alın.
                                    <strong className="text-white"> Kira tespit davası avukatı</strong> olarak size yardımcı olmaya hazırız.
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
