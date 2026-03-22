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
    title: "İzmir Anlaşmalı Boşanma Avukatı",
    description: "İzmir anlaşmalı boşanma avukatı Av. Mert Kağan Çetin. Protokol hazırlama, tek celsede boşanma ve nafaka düzenlemesinde uzman destek.",
    keywords: ["anlaşmalı boşanma avukatı İzmir", "anlaşmalı boşanma", "tek celsede boşanma", "boşanma protokolü"],
    openGraph: {
        title: "İzmir Anlaşmalı Boşanma Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de anlaşmalı boşanma davalarında uzman avukatlık hizmeti. Protokol hazırlama ve tek celsede boşanma desteği.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/anlasmali-bosanma/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/anlasmali-bosanma/" },
};

const faqs = [
    {
        question: "Anlaşmalı boşanma protokolünde neler bulunmalıdır?",
        answer: "Anlaşmalı boşanma protokolünde nafaka miktarı ve süresi, çocukların velayeti, kişisel ilişki düzenlemesi, mal paylaşımı ve tazminat konuları yer almalıdır. Protokolde belirsiz veya eksik madde bulunması halinde hakim protokolü onaylamayabilir. Bu nedenle protokolün bir avukat tarafından hazırlanması ileride çıkabilecek uyuşmazlıkları önler."
    },
    {
        question: "Anlaşmalı boşanma davası tek celsede biter mi?",
        answer: "Evet, anlaşmalı boşanma davası koşulları sağlandığında tek celsede sonuçlanır. Bunun için evliliğin en az 1 yıl sürmüş olması, her iki tarafın da boşanmayı kabul etmesi ve hakimin protokolü uygun bulması gerekir. Tarafların duruşmaya bizzat katılarak iradelerini beyan etmeleri zorunludur. Bayraklı Adliyesi'nde anlaşmalı boşanma davaları genellikle 1-3 ay içinde kesinleşir."
    },
    {
        question: "Çocuk varsa anlaşmalı boşanma olabilir mi?",
        answer: "Evet, çocuk varsa da anlaşmalı boşanma mümkündür. Ancak protokolde çocuğun velayetinin kime verileceği, iştirak nafakası miktarı ve diğer ebeveynle kişisel ilişki düzenlemesi açıkça belirtilmelidir. Hakim çocuğun üstün yararını gözetir ve protokoldeki düzenlemeyi yeterli bulmadığında değişiklik isteyebilir veya protokolü reddedebilir."
    },
    {
        question: "Anlaşmalı boşanma avukat ücreti ne kadardır?",
        answer: "2026 yılında İzmir'de anlaşmalı boşanma avukat ücreti 25.000-40.000 TL arasında değişmektedir. Bu ücrete protokol hazırlama, dava açma, duruşma takibi ve kararın kesinleştirilmesi dahildir. Çekişmeli boşanmaya kıyasla hem süre hem maliyet açısından çok daha avantajlıdır. Kesin ücret ilk görüşmede davanın detaylarına göre belirlenir."
    },
    {
        question: "Eşim anlaşmalı boşanmayı kabul etmezse ne olur?",
        answer: "Eşiniz anlaşmalı boşanmayı kabul etmezse çekişmeli boşanma davası açılması gerekir. Çekişmeli boşanmada TMK m. 166 kapsamında evlilik birliğinin temelinden sarsılması veya özel boşanma sebeplerine dayanılarak dava açılır. Çekişmeli boşanma davaları 1-3 yıl sürebilir. Dava sürecinde eşiniz fikrini değiştirirse her aşamada anlaşmalı boşanmaya dönülebilir."
    }
];

const tocItems = [
    { id: "anlasmali-bosanma-nedir", title: "Anlaşmalı Boşanma Nedir?" },
    { id: "protokol-hazirlama", title: "Protokol Hazırlama Süreci" },
    { id: "tek-celsede-bosanma", title: "Tek Celsede Boşanma" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function AnlasmaliBosanmaPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["Anlaşmalı Boşanma", "Boşanma Protokolü", "Tek Celsede Boşanma", "Nafaka Düzenlemesi", "Velayet Düzenlemesi"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Anlaşmalı Boşanma", url: "https://mertkagancetin.com/izmir-bosanma-avukati/anlasmali-bosanma/" }
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
                        <span className="text-secondary">Anlaşmalı Boşanma</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Anlaşmalı Boşanma Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Protokol hazırlıyoruz ve tek celsede boşanma sağlıyoruz.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile hızlı ve sorunsuz boşanma süreci.
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
                            <strong>İzmir anlaşmalı boşanma avukatı</strong> olarak eşlerin karşılıklı anlaşmasıyla en hızlı ve en az yıpratıcı şekilde boşanma sürecini yönetiyoruz. <Link href="/sozluk/anlasmali-bosanma/">Anlaşmalı boşanma</Link> protokolü hazırlama, nafaka, velayet ve mal paylaşımı konularında kapsamlı hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Anlaşmalı boşanma, Türk Medeni Kanunu&apos;nun 166/3. maddesi kapsamında düzenlenen ve eşlerin boşanmanın tüm sonuçları üzerinde anlaşarak tek celsede boşanmasını sağlayan bir yoldur. <strong>Anlaşmalı boşanma avukatı</strong> olarak Bayraklı Adliyesi&apos;nde açılan anlaşmalı boşanma davalarını yakından takip ediyoruz.
                        </p>

                        <h2 id="anlasmali-bosanma-nedir" className="scroll-mt-24">Anlaşmalı Boşanma Nedir?</h2>

                        <p>
                            Anlaşmalı boşanma, TMK m. 166/3 uyarınca evliliğin en az bir yıl sürmüş olması koşuluyla eşlerin birlikte veya bir eşin diğerinin davasını kabul etmesiyle gerçekleşen boşanma türüdür. Çekişmeli boşanmaya göre çok daha hızlı, ekonomik ve psikolojik olarak daha az yıpratıcıdır.
                        </p>

                        <p>
                            Anlaşmalı boşanma için aranan yasal koşullar şunlardır:
                        </p>

                        <ul>
                            <li><strong>En az 1 yıl evli olmak:</strong> TMK m. 166/3 gereği evliliğin en az bir yıl sürmüş olması zorunludur</li>
                            <li><strong>Her iki eşin boşanmayı kabul etmesi:</strong> Taraflardan biri boşanmayı istemezse anlaşmalı boşanma mümkün değildir</li>
                            <li><strong>Hakimin tarafları bizzat dinlemesi:</strong> Eşlerin duruşmaya bizzat katılarak boşanma iradelerini beyan etmesi gerekir</li>
                            <li><strong>Protokolün hakim tarafından onaylanması:</strong> Nafaka, velayet ve mal paylaşımı konularını düzenleyen protokol hakimin uygun bulmasına bağlıdır</li>
                        </ul>

                        <p>
                            Anlaşmalı boşanma davası hakkında detaylı bilgi için <Link href="/blog/anlasmali-bosanma-nasil-acilir/">anlaşmalı boşanma rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="protokol-hazirlama" className="scroll-mt-24">Boşanma Protokolü Hazırlama Sürecimiz</h2>

                        <p>
                            <strong>Anlaşmalı boşanma avukatı</strong> olarak protokol hazırlama sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Ön Görüşme ve İhtiyaç Analizi", desc: "Eşlerin boşanma konusundaki taleplerini, nafaka beklentilerini, çocuk varsa velayet tercihlerini ve mal paylaşımı konusundaki görüşlerini ayrı ayrı dinliyoruz." },
                                { step: "2", title: "Protokol Taslağı Hazırlama", desc: "Nafaka miktarı ve süresi, velayet düzenlemesi, kişisel ilişki takvimi, mal paylaşımı ve tazminat konularını içeren protokol taslağını hazırlıyoruz." },
                                { step: "3", title: "Müzakere ve Revizyon", desc: "Taraflar arasında anlaşmazlık olan konularda müzakere yürütüyor ve protokolü her iki tarafın da kabul edeceği hale getiriyoruz." },
                                { step: "4", title: "Dava Dilekçesi ve Başvuru", desc: "Protokolü ve boşanma dava dilekçesini hazırlayarak Bayraklı Adliyesi Aile Mahkemesi&apos;ne başvuruyoruz." },
                                { step: "5", title: "Duruşma ve Kararın Kesinleşmesi", desc: "Tek celsede duruşmaya katılarak hakimin tarafları dinlemesini sağlıyoruz. Kararın kesinleşmesi ve nüfus kaydının güncellenmesini takip ediyoruz." },
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

                        <h2 id="tek-celsede-bosanma" className="scroll-mt-24">Tek Celsede Boşanma Nasıl Sağlanır?</h2>

                        <p>
                            Tek celsede boşanma, anlaşmalı boşanmanın en büyük avantajıdır. Ancak bunun için protokolün eksiksiz ve hukuka uygun hazırlanması şarttır. Eksik veya muğlak maddeler hakimin protokolü reddetmesine ve davanın ertelenmesine yol açar.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Protokol Konusu</th>
                                        <th className="px-6 py-4 text-left">Düzenlenmesi Gereken Hususlar</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "Nafaka Düzenlemesi", desc: "Yoksulluk nafakası miktarı, süresi ve artış oranı. Çocuk varsa iştirak nafakası miktarı ve artış koşulları açıkça belirlenmelidir." },
                                        { title: "Velayet ve Kişisel İlişki", desc: "Çocuğun velayetinin hangi ebeveyne verileceği, diğer ebeveynle kişisel ilişki düzenlemesi (hafta sonları, bayramlar, yaz tatili) detaylı şekilde düzenlenmelidir." },
                                        { title: "Mal Paylaşımı", desc: "Taşınmaz, araç, banka hesapları ve diğer malların paylaşımı protokolde net olarak belirtilmelidir. İleride çıkacak uyuşmazlıkları önler." },
                                        { title: "Maddi ve Manevi Tazminat", desc: "Taraflardan birinin diğerinden tazminat talep edip etmediği, talep ediyorsa miktarı ve ödeme şekli protokolde yer almalıdır." },
                                        { title: "Ortak Konut", desc: "Aile konutunun kime bırakılacağı veya tahliye edilecekse süreleri protokolde düzenlenmelidir." },
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
                            <strong>Anlaşmalı boşanma avukatı</strong> olarak protokolün her maddesini titizlikle hazırlıyor, hakimin onaylayacağı nitelikte bir belge sunuyoruz. <Link href="/izmir-bosanma-avukati/velayet-davasi/">Velayet davası</Link> konusunda da detaylı bilgi alabilirsiniz.
                        </p>

                        <SectionCTA text="Anlaşmalı boşanma protokolü hazırlatmak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Anlaşmalı Boşanma Ücretleri</h2>

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
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Anlaşmalı Boşanma</td><td className="px-4 py-3">1-3 ay</td><td className="px-4 py-3">25.000 - 40.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın detaylarına göre ilk görüşmede belirlenir. <Link href="/izmir-bosanma-avukati/">Boşanma hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Anlaşmalı Boşanma Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Anlaşmalı Boşanma Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Anlaşmalı boşanma davaları, boşanma protokolü hazırlama ve aile hukuku uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde boşanma davalarını takip ediyor.
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
                                <Link href="/blog/anlasmali-bosanma-nasil-acilir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Anlaşmalı Boşanma Nasıl Açılır?
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/sozluk/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Sözlük: Anlaşmalı Boşanma Nedir?
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">Anlaşmalı Boşanma Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Boşanma protokolü hazırlanması ve dava süreci için hemen randevu alın.
                                    <strong className="text-white"> Anlaşmalı boşanma avukatı</strong> olarak size yardımcı olmaya hazırız.
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
