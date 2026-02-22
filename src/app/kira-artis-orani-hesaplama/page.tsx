import { Metadata } from "next";
import { RentCalculator } from "@/components/tools/RentCalculator";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Kira Artış Oranı Hesaplama 2026 | Yasal Zam Oranı",
    description: "2026 güncel TÜFE oranları ile işyeri ve konut kira artış oranını hesaplayın. Yasal zam sınırı, TEFE-TÜFE farkı ve ev sahibi hakları hakkında detaylı bilgi.",
    keywords: ["kira artış oranı hesaplama", "kira zammı hesaplama", "2026 kira artış oranı", "işyeri kira artış oranı", "tüfe kira artışı"],
    openGraph: {
        title: "Kira Artış Oranı Hesaplama Aracı | Av. Mert Kağan Çetin",
        description: "Yasal kira artış oranını saniyeler içinde hesaplayın. Güncel TÜFE verileriyle hatasız sonuç.",
        url: "https://mertkagancetin.com/kira-artis-orani-hesaplama/",
        type: "website",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/kira-artis-orani-hesaplama/",
    },
};

const faqs = [
    {
        question: "2026 yılında konut kira artış sınırı yüzde kaçtır?",
        answer: "2024 Temmuz ayı itibariyle %25'lik sabit artış sınırı sona ermiştir. Artık konut kiralarında da, tıpkı işyerlerinde olduğu gibi 'TÜFE 12 Aylık Ortalama' değişim oranı tavan olarak uygulanmaktadır."
    },
    {
        question: "Ev sahibi TÜFE oranından fazla zam yapabilir mi?",
        answer: "Hayır. Türk Borçlar Kanunu'na göre kira artış oranı, tarafların anlaşması olsa dahi bir önceki kira yılındaki TÜFE ortalamasını geçemez. Fazla yapılan artışlar hukuken geçersizdir."
    },
    {
        question: "5 yılı dolduran kiracıya ne kadar zam yapılır?",
        answer: "5 yılı dolduran kiracılar için mülk sahibi 'Kira Tespit Davası' açarak kiranın piyasa rayiçlerine yükseltilmesini talep edebilir. Bu durumda TÜFE sınırı uygulanmaz, bölgedeki emsal kiralar dikkate alınır."
    }
];

export default function RentCalculatorPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Kira Artış Hesaplama", url: "https://mertkagancetin.com/kira-artis-orani-hesaplama/" }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Kira Artış Oranı Hesaplama</h1>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                        2026 yılı güncel TÜFE verilerine göre yasal kira artış oranını ve yeni kira bedelinizi saniyeler içinde öğrenin.
                    </p>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-12 -mt-10 mb-12 relative z-20 container mx-auto px-4">
                <RentCalculator />
            </section>

            {/* SEO Content */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 prose prose-slate prose-lg">

                        <h2>Yasal Kira Artış Oranı Nedir?</h2>
                        <p>
                            Türk Borçlar Kanunu'nun 344. maddesi uyarınca, kira sözleşmelerinde yapılacak artış oranı, bir önceki kira yılındaki
                            <strong> Tüketici Fiyat Endeksi (TÜFE)</strong> on iki aylık ortalamalara göre değişim oranını geçemez.
                        </p>

                        <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                            <h4 className="flex items-center gap-2 font-bold text-amber-800 text-lg mb-2">
                                <AlertTriangle className="w-5 h-5" />
                                Önemli Bilgi: %25 Sınırı Sona Erdi
                            </h4>
                            <p className="text-amber-700 text-sm">
                                Konut kiraları için uygulanan %25'lik artış tavanı uygulaması 1 Temmuz 2024 tarihi itibariyle sona ermiştir.
                                Artık konut kiralarında da TÜFE ortalaması esas alınmaktadır.
                            </p>
                        </div>

                        <h3>İşyeri Kira Artış Oranı Nasıl Hesaplanır?</h3>
                        <p>
                            İşyeri kiralarında da üst sınır <strong>TÜFE 12 aylık ortalamasıdır</strong>. Taraflar sözleşmede bu oranın altında bir artış
                            kararlaştırabilir ancak üzerinde artış yapamazlar. Sözleşmede "Dolar kuru", "ÜFE" veya "TÜFE+ÜFE ortalaması" gibi ibareler yer alsa dahi,
                            yasal üst sınır olan TÜFE 12 aylık ortalamasının üzerindeki artışlar geçersizdir.
                        </p>

                        <h3>5 Yılı Dolduran Kiracılar İçin Durum Farklı mı?</h3>
                        <p>
                            Evet. 5 yıllık kira süresi dolduğunda, mülk sahibi "Kira Tespit Davası" açma hakkına sahip olur. Bu davada mahkeme,
                            sadece TÜFE oranına değil, taşınmazın durumu ve <strong>emsal kira bedellerine</strong> bakarak hakkaniyete uygun yeni bir kira belirler.
                        </p>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
                                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    Kiracı Hakları
                                </h4>
                                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                    <li>Yasal sınırın üzerinde zamma zorlanamaz.</li>
                                    <li>Sözleşme süresi bitince gerekçesiz çıkarılamaz.</li>
                                    <li>Depozito bedelini güncel değerle geri alabilir.</li>
                                </ul>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all">
                                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-blue-600" />
                                    Ev Sahibi Hakları
                                </h4>
                                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                    <li>10 yıl sonunda tahliye talep edebilir.</li>
                                    <li>5 yıl sonunda kira tespiti (güncelleme) isteyebilir.</li>
                                    <li>Kira ödenmezse icra takibi başlatabilir.</li>
                                </ul>
                            </div>
                        </div>

                        <h2>Hukuki Sorun mu Yaşıyorsunuz?</h2>
                        <p>
                            Kira artış oranında anlaşmazlık yaşıyorsanız veya ev sahibiniz yasal sınırın üzerinde zam talep ediyorsa,
                            haklarınızı korumak için profesyonel destek almanız önemlidir. <Link href="/izmir-kira-avukati" className="text-secondary hover:underline">İzmir kira avukatı</Link> olarak uyuşmazlıklarınızda yanınızdayız.
                        </p>

                        <div className="not-prose mt-8 text-center bg-slate-100 p-8 rounded-2xl">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Ücretsiz Ön Görüşme</h3>
                            <p className="mb-6 text-muted-foreground">Durumunuzu değerlendirelim, en doğru hukuki yolu birlikte belirleyelim.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button size="lg" className="bg-primary text-white" asChild>
                                    <Link href="/iletisim">Bize Ulaşın</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="tel:+905445854645">0544 585 46 45</Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
