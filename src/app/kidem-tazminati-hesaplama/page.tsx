import { Metadata } from "next";
import { SeveranceCalculator } from "@/components/tools/SeveranceCalculator";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { CheckCircle, XCircle, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Kıdem Tazminatı Hesaplama 2026 | Güncel Tavan ve Net Tutar",
    description: "2026 güncel tavan (64.948,77 TL) ile kıdem tazminatınızı hesaplayın. Giydirilmiş brüt ücret, damga vergisi ve net tazminat tutarını anında öğrenin.",
    keywords: ["kıdem tazminatı hesaplama", "kıdem tazminatı hesaplama 2026", "kıdem tazminatı tavanı 2026", "net kıdem tazminatı", "giydirilmiş brüt ücret hesaplama", "kıdem tazminatı hesaplama aracı"],
    openGraph: {
        title: "Kıdem Tazminatı Hesaplama Aracı 2026 | Av. Mert Kağan Çetin",
        description: "Giydirilmiş brüt ücretiniz ve çalışma sürenize göre net kıdem tazminatınızı saniyeler içinde hesaplayın.",
        url: "https://mertkagancetin.com/kidem-tazminati-hesaplama/",
        type: "website",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/kidem-tazminati-hesaplama/",
    },
};

const faqs = [
    {
        question: "Kıdem tazminatı nasıl hesaplanır?",
        answer: "Kıdem tazminatı, çalışma süresi (yıl) ile giydirilmiş brüt ücretin çarpılmasıyla hesaplanır. Giydirilmiş brüt ücret; temel maaş, yemek yardımı, yol yardımı, düzenli prim ve ikramiye gibi sürekli ödemelerin toplamıdır. Hesaplanan tutar, kıdem tazminatı tavanını aşamaz."
    },
    {
        question: "2026 kıdem tazminatı tavanı ne kadardır?",
        answer: "2026 yılı Ocak-Haziran dönemi için kıdem tazminatı tavanı 64.948,77 TL'dir. Giydirilmiş brüt ücretiniz bu tutarın üzerinde olsa bile her yıl için en fazla tavan tutarı üzerinden hesaplama yapılır."
    },
    {
        question: "Kıdem tazminatından hangi kesintiler yapılır?",
        answer: "Kıdem tazminatı gelir vergisinden muaftır. Yalnızca binde 7,59 oranında damga vergisi kesilir. SGK primi de kesilmez. Bu nedenle brüt tutar ile net tutar arasında çok az fark bulunur."
    },
    {
        question: "Giydirilmiş brüt ücrete hangi ödemeler dahildir?",
        answer: "Giydirilmiş brüt ücrete temel maaşın yanı sıra düzenli olarak ödenen yemek yardımı, yol yardımı, prim, ikramiye, gıda yardımı, yakacak yardımı ve çocuk zammı gibi sosyal yardımlar dahil edilir. Fazla mesai, harcırah ve yıllık izin ücreti dahil edilmez."
    },
    {
        question: "İstifa eden işçi kıdem tazminatı alabilir mi?",
        answer: "Kural olarak istifa eden işçi kıdem tazminatı alamaz. Ancak ücretin ödenmemesi, mobbing, sağlık sorunları gibi haklı nedenlerle fesih yapılırsa kıdem tazminatı hakkı doğar. Ayrıca askerlik, evlilik, emeklilik ve 15 yıl 3600 gün prim şartını sağlama halleri de tazminat hakkı verir."
    }
];

export default function SeveranceCalculatorPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <FAQSchema faqs={faqs} />
            <HowToSchema
                name="Kıdem Tazminatı Nasıl Hesaplanır?"
                description="Giydirilmiş brüt ücret ve çalışma süresine göre kıdem tazminatını adım adım hesaplama rehberi."
                steps={[
                    { name: "Çalışma sürenizi belirleyin", text: "Aynı işverende çalıştığınız toplam süreyi yıl, ay ve gün olarak hesaplayın. İşe giriş ve çıkış tarihleri arasındaki takvim süresi esas alınır." },
                    { name: "Giydirilmiş brüt ücretinizi hesaplayın", text: "Brüt maaşınıza düzenli olarak aldığınız yemek yardımı, yol yardımı, prim ve ikramiye gibi yan hakları ekleyin." },
                    { name: "Tavan kontrolü yapın", text: "Giydirilmiş brüt ücretiniz 2026 Ocak-Haziran tavanı olan 64.948,77 TL'yi aşıyorsa, hesaplama tavan üzerinden yapılır." },
                    { name: "Kıdem tazminatınızı hesaplayın", text: "Çalışma süresi (yıl) x giydirilmiş brüt ücret (veya tavan) formülü ile brüt tazminatınızı bulun." },
                    { name: "Damga vergisini düşün", text: "Brüt tutardan binde 7,59 oranında damga vergisi düşülerek net kıdem tazminatınız hesaplanır. Gelir vergisi kesilmez." }
                ]}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Kıdem Tazminatı Hesaplama", url: "https://mertkagancetin.com/kidem-tazminati-hesaplama/" }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Kıdem Tazminatı Hesaplama</h1>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                        2026 güncel tavan tutarı (64.948,77 TL) dahilinde giydirilmiş brüt ücretinize göre net kıdem tazminatınızı saniyeler içinde hesaplayın.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-12 -mt-10 mb-12 relative z-20 container mx-auto px-4">
                <SeveranceCalculator />
            </section>

            {/* SEO Content */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 prose prose-slate prose-lg">

                        <h2>Giydirilmiş Brüt Ücret Nedir?</h2>
                        <p>
                            <Link href="/sozluk/kidem-tazminati/" className="text-secondary hover:underline">Kıdem tazminatı</Link> hesaplanırken çıplak maaş değil, <strong>giydirilmiş brüt ücret</strong> esas alınır. Bu ücret; temel brüt maaş, yemek yardımı, yol yardımı, düzenli prim, ikramiye ve diğer sürekli ödemelerin toplamıdır.
                        </p>
                        <p>
                            Uygulamada işçilerin büyük çoğunluğu yalnızca çıplak maaş üzerinden hesaplama yaptığı için ciddi hak kayıpları yaşanmaktadır. Örneğin, 40.000 TL brüt maaş alan ancak yemek, yol ve ikramiye ile birlikte giydirilmiş brüt ücreti 62.833 TL olan bir işçi, 10 yıllık kıdemde <strong>228.330 TL</strong> farkla karşılaşır.
                        </p>

                        <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                            <h4 className="flex items-center gap-2 font-bold text-blue-800 text-lg mb-2">
                                <Info className="w-5 h-5" />
                                2026 Ocak-Haziran Kıdem Tazminatı Tavanı
                            </h4>
                            <p className="text-blue-700 text-sm">
                                Hazine ve Maliye Bakanlığı genelgesine göre 2026 yılı ilk yarısı için kıdem tazminatı tavanı <strong>64.948,77 TL</strong>&apos;dir. Giydirilmiş brüt ücreti bu tutarın üzerinde olan çalışanlar, her yıl için tavan tutar üzerinden tazminat alır.
                            </p>
                        </div>

                        <h2>Kıdem Tazminatına Kim Hak Kazanır?</h2>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
                                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    Hak Kazanılan Durumlar
                                </h4>
                                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                                    <li>İşveren tarafından fesih (İK m. 25/II hariç)</li>
                                    <li>İşçinin <Link href="/sozluk/hakli-fesih/" className="text-secondary hover:underline">haklı nedenle</Link> feshi (İK m. 24)</li>
                                    <li>Askerlik veya kadın işçinin evlenmesi</li>
                                    <li>Emeklilik veya 15 yıl 3600 gün prim</li>
                                    <li>İşçinin ölümü</li>
                                </ul>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
                                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                    <XCircle className="w-5 h-5 text-red-500" />
                                    Hak Kazanılmayan Durumlar
                                </h4>
                                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                                    <li>Haklı nedensiz istifa</li>
                                    <li>İK m. 25/II kapsamında ahlaka aykırılık</li>
                                    <li>1 yıldan az çalışma süresi</li>
                                    <li>Deneme süresinde fesih</li>
                                    <li>Belirli süreli sözleşmenin sona ermesi</li>
                                </ul>
                            </div>
                        </div>

                        <h2><Link href="/sozluk/ihbar-tazminati/" className="text-secondary hover:underline">İhbar Tazminatı</Link> ile Farkı</h2>
                        <p>
                            Kıdem tazminatı gelir vergisinden muafken, <Link href="/sozluk/ihbar-tazminati/" className="text-secondary hover:underline">ihbar tazminatı</Link> hem gelir vergisine hem de damga vergisine tabidir. Kıdem tazminatı çalışma süresine göre hesaplanırken, ihbar tazminatı ihbar süresine göre (2-8 hafta) belirlenir. İşten çıkarılma durumunda genellikle her iki tazminat birlikte talep edilir.
                        </p>

                        <h2>Hukuki Sorun mu Yaşıyorsunuz?</h2>
                        <p>
                            Kıdem tazminatınız eksik hesaplanmışsa veya işvereniniz ödeme yapmıyorsa, arabuluculuk başvurusu ve ardından iş mahkemesinde dava açma hakkınız bulunmaktadır. <Link href="/izmir-is-avukati/" className="text-secondary hover:underline">İzmir iş avukatı</Link> olarak kıdem tazminatı hesaplama, alacak davaları ve arabuluculuk süreçlerinde yanınızdayız.
                        </p>

                        <div className="not-prose mt-8 text-center bg-slate-100 p-8 rounded-2xl">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Hemen Arayın</h3>
                            <p className="mb-6 text-muted-foreground">Tazminat hesaplamanızı birlikte kontrol edelim, haklarınızı koruyalım.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="bg-primary text-white" asChild>
                                    <Link href="/iletisim">Bize Ulaşın</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="tel:+905445854645">0544 585 46 45</Link>
                                </Button>
                            </div>
                        </div>

                        <h2>İlgili Hukuki Makaleler</h2>
                        <p>İş hukuku konusundaki güncel makalelerimizi okuyarak haklarınız hakkında detaylı bilgi edinin:</p>
                        <ul>
                            <li><Link href="/blog/kidem-tazminati-nasil-hesaplanir/" className="text-secondary hover:underline">Kıdem Tazminatı Nasıl Hesaplanır? 2026 Güncel Rehber</Link></li>
                            <li><Link href="/blog/isten-cikarildiginda-ne-yapmali/" className="text-secondary hover:underline">İşten Çıkarıldığında Ne Yapmalı?</Link></li>
                            <li><Link href="/blog/ise-iade-davasi-sartlari-ve-arabuluculuk-sureci/" className="text-secondary hover:underline">İşe İade Davası Şartları ve Arabuluculuk Süreci</Link></li>
                            <li><Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/" className="text-secondary hover:underline">İş Kazası Tazminatı Süreci ve Haklarınız</Link></li>
                        </ul>

                    </div>
                </div>
            </section>
        </main>
    );
}
