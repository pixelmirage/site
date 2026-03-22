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
    title: "İzmir İşe İade Davası Avukatı | İş Güvencesi | Hemen Arayın",
    description: "İzmir işe iade davası avukatı Av. Mert Kağan Çetin. İş Kanunu m. 18-21 kapsamında haksız fesih, zorunlu arabuluculuk, boşta geçen süre ücreti ve iş güvencesi tazminatı davalarında uzman destek.",
    keywords: ["işe iade davası avukatı İzmir", "işe iade davası", "haksız işten çıkarma", "iş güvencesi avukatı"],
    openGraph: {
        title: "İzmir İşe İade Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de işe iade davalarında uzman avukatlık hizmeti. Haksız fesih ve iş güvencesi davalarında hukuki destek.",
        url: "https://mertkagancetin.com/izmir-is-avukati/ise-iade-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-is-avukati/ise-iade-davasi/" },
};

const faqs = [
    {
        question: "İşe iade davası ne kadar sürer?",
        answer: "İşe iade davası İş Kanunu m. 20 gereği ivedi yargılama usulüne tabidir. Mahkeme davayı 2 ay içinde sonuçlandırmalı, Bölge Adliye Mahkemesi de istinaf incelemesini 1 ay içinde tamamlamalıdır. Ancak uygulamada İzmir'de toplam süre 6-12 ay arasında değişmektedir. Zorunlu arabuluculuk süreci de dahil edildiğinde toplam süre 8-14 aya uzayabilir."
    },
    {
        question: "İşe iade davasında arabuluculuk zorunlu mu?",
        answer: "Evet, işe iade davası açmadan önce zorunlu arabuluculuk başvurusu yapılması şarttır. 7036 sayılı İş Mahkemeleri Kanunu m. 3 gereği arabulucuya başvurmadan açılan dava usulden reddedilir. Arabuluculuk süreci en fazla 3 hafta sürer. Anlaşma sağlanamazsa son tutanağın düzenlenmesinden itibaren 2 hafta içinde dava açılmalıdır."
    },
    {
        question: "İşe iade davası açmak için kaç işçi şartı var?",
        answer: "İş güvencesinden yararlanmak için işyerinde en az 30 işçi çalışıyor olmalıdır. İşverenin aynı iş kolundaki tüm işyerlerindeki toplam işçi sayısı dikkate alınır. Ayrıca işçinin en az 6 aylık kıdemi bulunmalı ve belirsiz süreli iş sözleşmesi ile çalışıyor olmalıdır. İşveren vekili konumundaki işçiler iş güvencesi kapsamı dışındadır."
    },
    {
        question: "İşe iade davasında boşta geçen süre ücreti nedir?",
        answer: "Mahkeme işe iade kararı verdiğinde işçiye en çok 4 aya kadar boşta geçen süre ücreti ödenir. Bu süre, fesih tarihinden kararın kesinleşmesine kadar geçen süreyi kapsar ancak 4 ayı aşamaz. Boşta geçen süre ücretine işçinin son brüt maaşı ve ekleri (yol, yemek, ikramiye gibi) dahil edilir. SGK primleri de bu süre için yatırılır."
    },
    {
        question: "İşveren işe başlatmazsa ne olur?",
        answer: "İşçi kesinleşen mahkeme kararını işverene tebliğ ettirdikten sonra 10 iş günü içinde işe başlamak için başvurmalıdır. İşveren 1 ay içinde işçiyi işe başlatmazsa işe başlatmama tazminatı ödemek zorundadır. Bu tazminat işçinin en az 4, en çok 8 aylık brüt ücreti tutarındadır. Boşta geçen süre ücreti de ayrıca ödenir."
    }
];

const tocItems = [
    { id: "is-guvencesi", title: "İş Güvencesi Nedir?" },
    { id: "dava-sureci", title: "İşe İade Davası Süreci" },
    { id: "tazminatlar", title: "Tazminat ve Haklar" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function IseIadeDavasiPage() {
    return (
        <main className="bg-white">
            <PersonSchema knowsAbout={["İşe İade Davası", "İş Güvencesi", "Haksız Fesih", "Zorunlu Arabuluculuk", "Boşta Geçen Süre Ücreti"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir İş Avukatı", url: "https://mertkagancetin.com/izmir-is-avukati/" },
                    { name: "İşe İade Davası", url: "https://mertkagancetin.com/izmir-is-avukati/ise-iade-davasi/" }
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
                        <span className="text-secondary">İşe İade Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir İşe İade Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Haksız işten çıkarılma, iş güvencesi ve zorunlu arabuluculuk süreçlerinde
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile işe iade davanızı açıyoruz.
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
                            <strong>İzmir işe iade davası avukatı</strong> olarak haksız şekilde işten çıkarılan işçilerin <Link href="/sozluk/ise-iade-davasi/">işe iade davalarını</Link> açıyor ve sürecin tamamını yönetiyoruz. İş Kanunu m. 18-21 kapsamında iş güvencesinden yararlanan her işçi, geçerli bir sebep gösterilmeden yapılan feshe karşı dava açma hakkına sahiptir.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            İşe iade davası, iş sözleşmesi geçerli bir neden olmaksızın feshedilen işçinin işine geri dönmesini sağlayan bir davadır. Biz bu davayı açarken zorunlu arabuluculuk başvurusundan mahkeme kararının icrasına kadar her aşamayı titizlikle yürütüyoruz. <Link href="/sozluk/is-guvencesi/">İş güvencesi</Link> kapsamında olan işçiler için 1 aylık dava açma süresi kritik önem taşır; bu süreyi kaçırmak hak kaybına yol açar.
                        </p>

                        <h2 id="is-guvencesi" className="scroll-mt-24">İş Güvencesi Nedir ve Kimler Yararlanır?</h2>

                        <p>
                            İş güvencesi, İş Kanunu m. 18 ile düzenlenen ve işçiyi haksız feshe karşı koruyan bir sistemdir. <strong>İşe iade davası avukatı</strong> olarak müvekkillerimizin iş güvencesi kapsamında olup olmadığını ilk görüşmede değerlendiriyoruz.
                        </p>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left w-1/3">Şart</th>
                                        <th className="px-6 py-4 text-left">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { title: "30 İşçi Şartı", desc: "İşverenin aynı iş kolundaki tüm işyerlerinde toplam en az 30 işçi çalışmalıdır. Alt işveren (taşeron) işçileri de dahil edilir." },
                                        { title: "6 Ay Kıdem Şartı", desc: "İşçinin o işyerinde en az 6 aylık kıdemi bulunmalıdır. Kıdem hesabında deneme süresi de sayılır." },
                                        { title: "Belirsiz Süreli Sözleşme", desc: "İşçi belirsiz süreli iş sözleşmesi ile çalışıyor olmalıdır. Belirli süreli sözleşme ile çalışanlar kapsam dışıdır." },
                                        { title: "İşveren Vekili Olmama", desc: "İşletmenin bütününü yöneten veya işveren vekilinin vekili konumundaki işçiler iş güvencesinden yararlanamaz." },
                                        { title: "Geçerli Sebep Yokluğu", desc: "İşverenin fesih için geçerli bir sebep göstermemiş olması veya gösterilen sebebin gerçeği yansıtmaması gerekir." },
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
                            Detaylı bilgi için <Link href="/blog/ise-iade-davasi-sartlari-ve-arabuluculuk-sureci/">işe iade davası şartları ve arabuluculuk süreci rehberimizi</Link> inceleyebilirsiniz.
                        </p>

                        <h2 id="dava-sureci" className="scroll-mt-24">İşe İade Davası Sürecimiz</h2>

                        <p>
                            <strong>İşe iade davası avukatı</strong> olarak biz işe iade davanızı 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Hak Değerlendirmesi ve Dosya İnceleme", desc: "İş sözleşmenizi, fesih bildirimini ve işyeri kayıtlarını inceliyoruz. İş güvencesi kapsamında olup olmadığınızı belirliyoruz. 1 aylık süreyi kaçırmamak için hızlı hareket ediyoruz." },
                                { step: "2", title: "Zorunlu Arabuluculuk Başvurusu", desc: "7036 sayılı Kanun gereği arabulucuya başvuruyoruz. Arabuluculuk görüşmelerinde müvekkilimizi temsil ediyoruz. Anlaşma olmazsa son tutanak tarihinden itibaren 2 hafta içinde dava açıyoruz." },
                                { step: "3", title: "Dava Dilekçesi ve Delil Hazırlığı", desc: "İş mahkemesine işe iade davası dilekçesini hazırlıyoruz. Feshin geçersizliğine ilişkin tüm delilleri topluyoruz: performans değerlendirmeleri, savunma tutanakları, tanık listeleri." },
                                { step: "4", title: "Duruşma ve İspat Süreci", desc: "İvedi yargılama usulüne göre duruşmaları takip ediyoruz. İşverenin fesih sebebini ispatlama yükümlülüğü olduğunu mahkemeye hatırlatıyoruz. Tanık dinletme ve belge incelemesini yürütüyoruz." },
                                { step: "5", title: "Karar ve İcra Aşaması", desc: "İşe iade kararını aldıktan sonra 10 iş günü içinde işverene başvuru yapılmasını sağlıyoruz. İşveren işe başlatmazsa boşta geçen süre ücreti ve işe başlatmama tazminatının tahsili için icra takibi başlatıyoruz." },
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
                            İşten çıkarıldığınızda atmanız gereken adımları öğrenmek için <Link href="/blog/isten-cikarildiginda-ne-yapmali/">işten çıkarıldığında ne yapmalı rehberimizi</Link> okuyun.
                        </p>

                        <SectionCTA text="Haksız şekilde işten mi çıkarıldınız? İşe iade davanız için hemen arayın." />

                        <h2 id="tazminatlar" className="scroll-mt-24">İşe İade Davasında Tazminat ve Haklar</h2>

                        <p>
                            Mahkeme işe iade kararı verdiğinde işçi önemli mali haklara kavuşur. <strong>İşe iade davası avukatı</strong> olarak bu hakların eksiksiz tahsilini sağlıyoruz:
                        </p>

                        <h3>Boşta Geçen Süre Ücreti (En Çok 4 Ay)</h3>

                        <p>
                            Fesih tarihinden işe iade kararının kesinleşmesine kadar geçen süre için en çok 4 aylık brüt ücret ödenir. Bu ücrete yol, yemek ve ikramiye gibi yan haklar da dahildir. İşveren ayrıca bu süre için SGK primlerini yatırmak zorundadır.
                        </p>

                        <h3>İş Güvencesi Tazminatı (4-8 Ay)</h3>

                        <p>
                            İşveren mahkeme kararına rağmen işçiyi işe başlatmazsa en az 4, en çok 8 aylık brüt ücret tutarında <Link href="/sozluk/is-guvencesi/">iş güvencesi</Link> tazminatı öder. Tazminat miktarı işçinin kıdemi, yaşı ve feshin ağırlığına göre mahkeme tarafından belirlenir.
                        </p>

                        <h3>Kıdem ve İhbar Tazminatı Hakları</h3>

                        <p>
                            İşveren işçiyi işe başlatmadığında iş sözleşmesi işe başlatmama tarihinde sona ermiş sayılır. Bu durumda işçi <Link href="/izmir-is-avukati/kidem-tazminati-davasi/">kıdem tazminatı</Link> ve ihbar tazminatı haklarını da ayrıca talep edebilir. Daha önce kıdem tazminatı ödenmişse mahsup edilir.
                        </p>

                        <blockquote>
                            <strong>Dikkat:</strong> İşe iade davasında <Link href="/sozluk/hakli-fesih/">haklı fesih</Link> iddiası işveren tarafından ileri sürülürse ispat yükü işverene aittir. İşveren feshin geçerli bir sebebe dayandığını kanıtlamak zorundadır.
                        </blockquote>

                        <h2 id="ucretler" className="scroll-mt-24">2026 İşe İade Davası Ücretleri</h2>

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
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">İşe İade Davası</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">35.000 - 60.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına göre ilk görüşmede belirlenir. <Link href="/izmir-is-avukati/">İş hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alın.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">İşe İade Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir İşe İade Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. İşe iade davaları, iş güvencesi tazminatı ve haksız fesih davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde iş davalarını takip ediyor.
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
                                <Link href="/izmir-is-avukati/kidem-tazminati-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kıdem Tazminatı Davası Avukatı
                                </Link>
                                <Link href="/blog/ise-iade-davasi-sartlari-ve-arabuluculuk-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşe İade Davası Şartları ve Arabuluculuk Süreci
                                </Link>
                                <Link href="/blog/isten-cikarildiginda-ne-yapmali/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İşten Çıkarıldığında Ne Yapmalı?
                                </Link>
                                <Link href="/sozluk/ise-iade-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Sözlük: İşe İade Davası
                                </Link>
                                <Link href="/izmir-is-avukati/mobbing-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Mobbing Davası Avukatı
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
                                <h2 className="text-3xl font-playfair font-bold mb-4">İşe İade Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Haksız şekilde işten çıkarıldıysanız hemen randevu alın.
                                    <strong className="text-white"> İşe iade davası avukatı</strong> olarak haklarınızı korumaya hazırız.
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
