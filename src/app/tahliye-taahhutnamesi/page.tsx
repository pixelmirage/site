import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { AlertCircle } from "lucide-react";
import { PrintButton } from "@/components/tools/PrintButton";

export const metadata: Metadata = {
    title: "Tahliye Taahhütnamesi Örneği 2026 (PDF & Word) | Av. Mert Kağan Çetin",
    description: "Yargıtay uyumlu, geçerli tahliye taahhütnamesi örneğini ücretsiz indirin. Boş tahliye taahhütnamesi nasıl doldurulur? PDF şablon.",
    keywords: ["tahliye taahhütnamesi örneği", "tahliye taahhütnamesi pdf", "boş tahliye taahhütnamesi", "kiracı tahliye taahhütnamesi"],
    openGraph: {
        title: "Tahliye Taahhütnamesi Örneği | Ücretsiz İndir",
        description: "Geçerli ve garantili tahliye taahhütnamesi şablonu. Hemen yazdırın veya PDF olarak kaydedin.",
        url: "https://mertkagancetin.com/tahliye-taahhutnamesi",
        type: "website",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/tahliye-taahhutnamesi",
    },
};

export default function EvictionTemplatePage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Araçlar", url: "https://mertkagancetin.com/araclar" },
                    { name: "Tahliye Taahhütnamesi", url: "https://mertkagancetin.com/tahliye-taahhutnamesi" }
                ]}
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
                    <PrintButton />
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
                    <h3>Tahliye Taahhütnamesi Nedir?</h3>
                    <p>
                        Tahliye taahhütnamesi, kiracının kiraladığı taşınmazı belirli bir tarihte boşaltacağını yazılı olarak beyan ettiği hukuki bir belgedir.
                        Türk Borçlar Kanunu madde 352/1 uyarınca verilen bu taahhüt, mülk sahibi için en hızlı tahliye imkanı sağlayan belgelerden biridir.
                    </p>
                    <h3>Hangi Durumlarda Geçersiz Olur?</h3>
                    <ul>
                        <li>Kira sözleşmesiyle aynı tarihte imzalanmışsa,</li>
                        <li>Kiracının özgür iradesi dışında (tehdit/hile) alınmışsa (ispat gerekir),</li>
                        <li>Eşin rızası alınmamışsa (Aile konutu şerhi varsa tartışmalıdır, ancak alınması önerilir).</li>
                    </ul>
                </div>

            </section>
        </main>
    );
}
