import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import { YouTubeShorts } from "@/components/ui/YouTubeShorts";
import { AlertCircle, ChevronRight, Home, ArrowRight } from "lucide-react";
import { PrintButton } from "@/components/tools/PrintButton";
import { PdfDownloadButton } from "@/components/tools/PdfDownloadButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Tahliye Taahhütnamesi Örneği 2026 (PDF & Word)",
    description: "2026 güncel tahliye taahhütnamesi örneğini ücretsiz indirin. Yargıtay uyumlu boş tahliye taahhütnamesi nasıl doldurulur? TBK m. 352 şartları ve geçerlilik rehberi.",
    keywords: ["tahliye taahhütnamesi örneği", "tahliye taahhütnamesi pdf", "boş tahliye taahhütnamesi", "kiracı tahliye taahhütnamesi"],
    openGraph: {
        title: "Tahliye Taahhütnamesi Örneği | Ücretsiz İndir",
        description: "Geçerli ve garantili tahliye taahhütnamesi şablonu. Hemen yazdırın veya PDF olarak kaydedin.",
        url: "https://mertkagancetin.com/tahliye-taahhutnamesi/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-03-15",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/tahliye-taahhutnamesi/",
    },
};

export default function EvictionTemplatePage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Tahliye Taahhütnamesi", url: "https://mertkagancetin.com/tahliye-taahhutnamesi/" }
                ]}
            />

            <VideoSchema
                name="Tahliye Taahhütnamesi Nedir? | Kısa Video"
                description="Tahliye taahhütnamesi nedir, nasıl doldurulur ve ne zaman geçerlidir? Kısa videoda öğrenin."
                thumbnailUrl="https://img.youtube.com/vi/0I5No4QamYA/maxresdefault.jpg"
                uploadDate="2026-03-13"
                contentUrl="https://www.youtube.com/shorts/0I5No4QamYA"
                embedUrl="https://www.youtube.com/embed/0I5No4QamYA"
            />

            <FAQSchema
                faqs={[
                    {
                        question: "Tahliye taahhütnamesi ne zaman imzalanmalı?",
                        answer: "Tahliye taahhütnamesi, kira sözleşmesi imzalandıktan ve kiralanan taşınmaz teslim edildikten SONRA imzalanmalıdır. Kira sözleşmesiyle aynı tarihte (veya öncesinde) imzalanan taahhütnameler Yargıtay tarafından geçersiz kabul edilmektedir."
                    },
                    {
                        question: "Tahliye taahhütnamesi noterden olmak zorunda mı?",
                        answer: "Hayır, adi yazılı şekilde (kendi aranızda) düzenlenmesi de geçerlidir. Ancak noterde düzenlenmesi, imza inkarı gibi itirazları önlediği için ispat açısından çok daha güçlüdür."
                    },
                    {
                        question: "Boş tarihli taahhütname geçerli midir?",
                        answer: "Kiracı tarafından boş olarak imzalanıp sonradan ev sahibi tarafından doldurulan taahhütnameler, Yargıtay'ın yerleşik içtihatlarına göre geçerli kabul edilmektedir. Kiracı attığı imzanın sonuçlarına katlanmak zorundadır."
                    },
                    {
                        question: "Tahliye taahhütnamesine dayanarak icra takibi nasıl başlatılır?",
                        answer: "Taahhüt edilen tahliye tarihinden itibaren 1 ay içinde icra dairesine başvurarak 'İlamsız Tahliye Takibi' başlatılır (İİK m. 272). Kiracıya ödeme emri tebliğ edildikten sonra 15 gün içinde itiraz etmezse, tahliye kesinleşir."
                    },
                    {
                        question: "Kiracı tahliye taahhütnamesine itiraz edebilir mi?",
                        answer: "Evet. Kiracı icra takibine itiraz ederse, ev sahibinin İcra Mahkemesi'nde 'İtirazın Kaldırılması ve Tahliye Davası' açması gerekir. Bu davada taahhütnamenin geçerliliği incelenir."
                    },
                    {
                        question: "Aile konutu olan taşınmaz için tahliye taahhütnamesi geçerli midir?",
                        answer: "Aile konutu şerhi bulunan taşınmazlarda, kiracının eşinin rızası olmadan verilen taahhütname tartışmalıdır. Uygulamada her iki eşin de taahhütnameyi imzalaması önerilir."
                    },
                    {
                        question: "Tahliye taahhütnamesi ile tahliye süreci ne kadar sürer?",
                        answer: "Kiracı itiraz etmezse icra yoluyla tahliye 1-2 ay içinde sonuçlanabilir. İtiraz halinde dava süreci 3-6 ay sürebilir. Noterden düzenlenen taahhütnamelerde süreç genellikle daha kısa sürer."
                    }
                ]}
            />

            {/* Hero / Header - Hidden in Print */}
            <section className="bg-primary text-white py-16 print:hidden">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Tahliye Taahhütnamesi Örneği</h1>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        Yargıtay kararlarına uygun, geçerli ve güncel tahliye taahhütnamesi şablonunu ücretsiz olarak PDF formatında indirin veya yazdırın.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PrintButton />
                        <PdfDownloadButton />
                    </div>
                </div>
            </section>

            {/* Template Preview Section */}
            <section className="py-12 container mx-auto px-4">
                <div className="max-w-[210mm] mx-auto bg-white shadow-xl p-[20mm] min-h-[297mm] text-black print:shadow-none print:p-0 print:w-full print:max-w-none">

                    <div className="print-content font-serif leading-relaxed">
                        <h2 className="text-center font-bold text-2xl mb-12 uppercase border-b-2 border-black pb-2 inline-block relative left-1/2 -translate-x-1/2">Tahliye Taahhütnamesi</h2>

                        <div className="space-y-6 text-lg">
                            <p>
                                <strong>TAAHHÜT EDEN (KİRACI):</strong> ....................................................................................
                            </p>
                            <p>
                                <strong>T.C. KİMLİK NO:</strong> ....................................................................................
                            </p>
                            <p>
                                <strong>ALACAKLI (KİRAYA VEREN):</strong> ....................................................................................
                            </p>
                            <p>
                                <strong>TAHLİYE EDİLECEK MECURUN ADRESİ:</strong> ....................................................................................<br />
                                ................................................................................................................................................................
                            </p>
                            <p>
                                <strong>TAHLİYE TARİHİ:</strong> ..... / ..... / 20.....
                            </p>

                            <div className="my-12 text-justify">
                                <p className="mb-4">
                                    Halen kiracı olarak kullanmakta olduğum yukarıda adresi yazılı taşınmazı, hiçbir ihtar ve ihbara gerek kalmaksızın,
                                    kayıtsız ve şartsız olarak, 6098 sayılı Türk Borçlar Kanunu'nun 352/1 maddesi gereğince, yukarıda belirtilen tarihte
                                    tahliye edeceğimi;
                                </p>
                                <p className="mb-4">
                                    Belirtilen tarihte taşınmazı boş ve eksiksiz olarak mal sahibine teslim edeceğimi;
                                </p>
                                <p>
                                    Tahliye etmediğim takdirde, mal sahibinin icra dairesi aracılığıyla tahliye işlemini gerçekleştirebileceğini,
                                    bu nedenle oluşacak tüm mahkeme masrafları, icra harçları, avukatlık ücretleri ve diğer tüm giderleri
                                    peşinen ödemeyi kabul, beyan ve taahhüt ederim.
                                </p>
                            </div>

                            <div className="flex justify-between mt-24 px-8">
                                <div className="text-center">
                                    <p className="font-bold mb-16">DÜZENLEME TARİHİ</p>
                                    <p>..... / ..... / 20.....</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold mb-8">TAAHHÜT EDEN (KİRACI)</p>
                                    <p className="text-sm text-slate-400 mb-8">(İmza)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Warning Box - Hidden in Print */}
                <div className="max-w-[210mm] mx-auto mt-8 print:hidden">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-800 mb-2">Dikkat Edilmesi Gerekenler</h4>
                            <p className="text-sm text-amber-700 leading-relaxed">
                                Bu belge, kira sözleşmesi ile <strong>aynı tarihte imzalanmamalıdır</strong>. Yargıtay, kira sözleşmesi ile aynı gün imzalanan taahhütnameleri "baskı altında alınmış" kabul ederek geçersiz sayabilmektedir. Taahhütnamenin düzenlenme tarihi, kira sözleşmesinden en az 15-30 gün sonra olmalıdır.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SEO Content - Hidden in Print */}
                <div className="max-w-[210mm] mx-auto mt-12 prose prose-slate prose-lg print:hidden">
                    <h2>Tahliye Taahhütnamesi Nedir?</h2>
                    <YouTubeShorts
                        videoId="0I5No4QamYA"
                        title="Tahliye Taahhütnamesi Nedir? - Kısa Video ile Açıklama"
                    />
                    <p>
                        Tahliye taahhütnamesi, kiracının kiraladığı taşınmazı belirli bir tarihte boşaltacağını yazılı olarak beyan ettiği hukuki bir belgedir.
                        Türk Borçlar Kanunu madde 352/1 uyarınca verilen bu taahhüt, mülk sahibi için en hızlı <Link href="/sozluk/tahliye" className="text-secondary hover:underline">tahliye</Link> imkanı sağlayan belgelerden biridir.
                    </p>
                    <p>
                        <Link href="/izmir-kira-avukati" className="text-secondary hover:underline">Kira hukuku</Link> uygulamasında tahliye taahhütnamesi, ev sahibinin kiracıyı tahliye edebilmek için kullanabileceği en etkili hukuki araçlardan biridir. Ancak taahhütnamenin geçerli olması için belirli şartların sağlanması gerekir.
                    </p>

                    <h2>Tahliye Taahhütnamesi Nasıl Doldurulur?</h2>
                    <p>
                        Tahliye taahhütnamesinin hukuki geçerliliğe sahip olabilmesi için aşağıdaki bilgilerin eksiksiz yazılması gerekir:
                    </p>
                    <ol>
                        <li><strong>Kiracının kimlik bilgileri:</strong> Ad, soyad ve T.C. kimlik numarası açıkça yazılmalıdır.</li>
                        <li><strong>Kiraya verenin bilgileri:</strong> Mülk sahibinin ad ve soyadı belirtilmelidir.</li>
                        <li><strong>Taşınmazın adresi:</strong> Tahliye edilecek taşınmazın tam adresi (il, ilçe, mahalle, sokak, kapı numarası) eksiksiz yazılmalıdır.</li>
                        <li><strong>Tahliye tarihi:</strong> Kiracının taşınmazı boşaltacağı kesin tarih (gün/ay/yıl) açıkça belirtilmelidir.</li>
                        <li><strong>Düzenleme tarihi:</strong> Taahhütnamenin imzalandığı tarih, <Link href="/sozluk/kira-sozlesmesi" className="text-secondary hover:underline">kira sözleşmesi</Link> tarihinden sonra olmalıdır.</li>
                        <li><strong>Kiracının imzası:</strong> Taahhütname kiracı tarafından bizzat imzalanmalıdır.</li>
                    </ol>

                    <h2>Tahliye Taahhütnamesi Geçerlilik Şartları</h2>
                    <p>
                        Yargıtay içtihatlarına göre tahliye taahhütnamesinin geçerli olması için şu şartların bir arada bulunması gerekir:
                    </p>
                    <h3>1. Yazılı Olma Şartı</h3>
                    <p>
                        Taahhütname mutlaka yazılı olmalıdır. Sözlü taahhütler hukuken geçerli değildir. Noterden düzenlenmesi zorunlu olmasa da ispat kolaylığı açısından önerilir.
                    </p>
                    <h3>2. Tarih Şartı</h3>
                    <p>
                        Düzenleme tarihi, kira sözleşmesinin imzalanmasından ve taşınmazın teslim edilmesinden <strong>sonra</strong> olmalıdır. Aynı gün veya önceki bir tarihte imzalanan taahhütnameler Yargıtay tarafından geçersiz kabul edilmektedir.
                    </p>
                    <h3>3. İrade Serbestisi</h3>
                    <p>
                        Kiracı, taahhütnameyi kendi özgür iradesiyle imzalamış olmalıdır. Baskı, tehdit veya hile ile alınan taahhütnameler iptal edilebilir, ancak ispat yükü kiracıdadır.
                    </p>

                    <h3>Hangi Durumlarda Geçersiz Olur?</h3>
                    <ul>
                        <li>Kira sözleşmesiyle aynı tarihte imzalanmışsa,</li>
                        <li>Kiracının özgür iradesi dışında (tehdit/hile) alınmışsa (ispat gerekir),</li>
                        <li>Eşin rızası alınmamışsa (Aile konutu şerhi varsa tartışmalıdır, ancak alınması önerilir).</li>
                    </ul>

                    <h2>Tahliye Taahhütnamesi ile İcra Takibi Süreci</h2>
                    <p>
                        Kiracı taahhüt ettiği tarihte taşınmazı boşaltmazsa, ev sahibi icra dairesi aracılığıyla tahliye sürecini başlatabilir. İcra ve İflas Kanunu (İİK) madde 272 uyarınca süreç şu şekilde işler:
                    </p>
                    <ol>
                        <li><strong>Başvuru süresi:</strong> Taahhüt edilen tahliye tarihinden itibaren <strong>1 ay</strong> içinde icra dairesine başvurulmalıdır.</li>
                        <li><strong>Ödeme emri tebliği:</strong> İcra dairesi kiracıya tahliye emri gönderir. Kiracının 15 gün içinde itiraz hakkı vardır.</li>
                        <li><strong>İtiraz edilmezse:</strong> Süre sonunda icra memuru tarafından tahliye işlemi gerçekleştirilir.</li>
                        <li><strong>İtiraz edilirse:</strong> Ev sahibi İcra Mahkemesi&apos;nde &quot;İtirazın Kaldırılması ve Tahliye&quot; davası açar.</li>
                    </ol>
                    <p>
                        Dava süresince kiracının tahliyesi gecikmese de, noterden düzenlenmiş taahhütnamelerde süreç önemli ölçüde hızlanır. İcra takibi ve <Link href="/sozluk/tahliye-taahhutnamesi" className="text-secondary hover:underline">tahliye taahhütnamesi</Link> hakkında detaylı bilgi için sözlüğümüzü inceleyebilirsiniz.
                    </p>

                    <h2>Noterden mi Adi Yazılı mı?</h2>
                    <div className="not-prose overflow-x-auto my-8">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="text-left p-3 border border-slate-200 font-bold">Kriter</th>
                                    <th className="text-left p-3 border border-slate-200 font-bold">Adi Yazılı</th>
                                    <th className="text-left p-3 border border-slate-200 font-bold">Noterden</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border border-slate-200">Hukuki geçerlilik</td>
                                    <td className="p-3 border border-slate-200">Geçerli</td>
                                    <td className="p-3 border border-slate-200">Geçerli</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-3 border border-slate-200">İmza inkarı riski</td>
                                    <td className="p-3 border border-slate-200">Yüksek</td>
                                    <td className="p-3 border border-slate-200">Yok</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-slate-200">İspat gücü</td>
                                    <td className="p-3 border border-slate-200">Zayıf</td>
                                    <td className="p-3 border border-slate-200">Güçlü</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-3 border border-slate-200">Maliyet</td>
                                    <td className="p-3 border border-slate-200">Ücretsiz</td>
                                    <td className="p-3 border border-slate-200">~500-1000 TL</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-slate-200">İcra sürecinde hız</td>
                                    <td className="p-3 border border-slate-200">Normal</td>
                                    <td className="p-3 border border-slate-200">Hızlı</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Hukuki Destek Alın</h2>
                    <p>
                        Tahliye taahhütnamesi hazırlanması, icra takibi başlatılması veya kiracının itirazı durumunda profesyonel hukuki desteğe ihtiyaç duyarsanız, <Link href="/izmir-kira-avukati" className="text-secondary hover:underline">İzmir kira avukatı</Link> olarak yanınızdayız. <Link href="/hizmetler" className="text-secondary hover:underline">Tüm hizmetlerimizi</Link> inceleyebilir veya ücretsiz ön görüşme için bizimle iletişime geçebilirsiniz.
                    </p>

                    <div className="not-prose mt-8 text-center bg-slate-100 p-8 rounded-2xl">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Tahliye Sürecinde Uzman Desteği</h3>
                        <p className="mb-6 text-muted-foreground">Taahhütname hazırlama, icra takibi veya itiraz süreçlerinde hukuki danışmanlık alın.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-primary text-white" asChild>
                                <Link href="/iletisim">Ücretsiz Ön Görüşme</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">WhatsApp ile Yazın</a>
                            </Button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
