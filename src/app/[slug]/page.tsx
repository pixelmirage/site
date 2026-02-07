import { notFound } from "next/navigation";
import { districts, getSlugFromDistrict, getDistrictData } from "@/lib/districts";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Home, ChevronRight, Scale, FileText, Users, Building2, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

// Content Spinner Helper to reduce footprint of duplicate content
const spinText = (options: string[], seed: string) => {
    // Simple hash function to deterministically choose an option based on seed (slug)
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    const index = Math.abs(hash) % options.length;
    return options[index];
};

export async function generateStaticParams() {
    return districts.map((district) => ({
        slug: `${getSlugFromDistrict(district)}-kira-avukati`,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const districtData = getDistrictData(slug);

    if (!districtData) return {};

    return {
        title: {
            absolute: `${districtData.name} Kira Avukatı | Tahliye & Kira Tespit | Av. Mert Kağan Çetin`,
        },
        description: districtData.description || `${districtData.name} bölgesinde uzman kira avukatı mı arıyorsunuz? Av. Mert Kağan Çetin ile ${districtData.name} dahil tüm İzmir'de tahliye davalarında profesyonel destek alın.`,
        keywords: [`${districtData.name} kira avukatı`, `${districtData.name} tahliye avukatı`, "izmir kira avukatı", "kira tespit davası", "tahliye davası"],
        openGraph: {
            title: `${districtData.name} Kira Avukatı | Av. Mert Kağan Çetin`,
            description: districtData.description,
            url: `https://mertkagancetin.com/${slug}`,
            type: "website",
        },
        alternates: {
            canonical: `https://mertkagancetin.com/${slug}`,
        },
    };
}

export default async function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const districtData = getDistrictData(slug);

    if (!districtData) {
        notFound();
    }

    const { name: district, description, features } = districtData;

    // Spinning Content Variations
    const introTitle = spinText([
        `${district} Kira Avukatı`,
        `${district} Bölgesi Kira Hukuku`,
        `Av. Mert Kağan Çetin - ${district} Kira Avukatı`
    ], slug);

    const callToActionText = spinText([
        "Hukuki Destek Alın",
        "Ücretsiz Ön Görüşme",
        "Hemen Bize Ulaşın",
        "Randevu Oluşturun"
    ], slug);

    const faqs = [
        {
            question: `${district} bölgesinde kira davaları ne kadar sürer?`,
            answer: `${district} Adliyesi'nin bağlı olduğu İzmir mahkemelerinin iş yüküne göre değişmekle birlikte, tahliye davaları ortalama 6 ay ile 1.5 yıl arasında sürebilmektedir. Tahliye taahhütnamesi varlığı süreci hızlandırır.`
        },
        {
            question: `${district} kira avukatı ücretleri ne kadar?`,
            answer: "2025 yılı avukatlık asgari ücret tarifesi ve davanın niteliğine göre belirlenmektedir. Tahliye davaları için ortalama ücretler 35.000 TL - 60.000 TL aralığında değişmektedir."
        },
        {
            question: `${district} için hizmet veriyor musunuz?`,
            answer: `Evet, ofisimiz Bayraklı'da bulunmakla birlikte ${district} dahil İzmir'in tüm merkez ilçelerinde kira hukuku ve tahliye davalarında müvekkillerimizi temsil etmekteyiz.`
        }
    ];

    return (
        <main className="bg-white">
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati" },
                    { name: `${district} Kira Avukatı`, url: `https://mertkagancetin.com/${slug}` }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-kira-avukati" className="hover:text-white transition-colors">
                            İzmir Kira Avukatı
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">{district}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                            {introTitle}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            {description} <br className="hidden md:block" />
                            <strong>{district}</strong> bölgesindeki mülkleriniz için kira hukuku alanında uzman desteği.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim">
                                    <Phone className="w-5 h-5" />
                                    {callToActionText}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Context Content */}
            <article className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 prose prose-slate prose-lg">
                            <p>
                                İzmir'in önemli yerleşim merkezlerinden <strong>{district}</strong>, gayrimenkul hareketliliğinin yüksek olduğu bir bölgedir.
                                {description} Bu durum, zaman zaman ev sahipleri ve kiracılar arasında hukuki uyuşmazlıkları da beraberinde getirmektedir.
                            </p>

                            <p>
                                Av. Mert Kağan Çetin Hukuk Bürosu olarak, <strong>{district} kira avukatı</strong> ihtiyaçlarınızda, bölgenin dinamiklerine hakim bir yaklaşımla çözüm üretiyoruz.
                            </p>

                            <div className="not-prose bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
                                <h4 className="flex items-center gap-2 font-bold text-primary text-xl mb-4">
                                    <Map className="w-6 h-6 text-secondary" />
                                    {district} Bölgesel Özellikleri
                                </h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h3>{district} Kiracı Tahliye Davaları</h3>
                            <p>
                                {district} sınırları içerisindeki konut ve işyerleri için tahliye süreçleri, Türk Borçlar Kanunu'nun emredici hükümlerine tabidir.
                                Özellikle {features[0]} ve çevresindeki uyuşmazlıklarda, yerel emsal kararlar ve bölgesel rayiçler davanın seyrini etkileyebilmektedir.
                            </p>

                            <p>
                                Kiracınız kira ödemiyorsa, 10 yıllık uzama süresi dolduysa veya kendiniz/yakınınız için konut ihtiyacı doğduysa
                                <strong> {district} tahliye avukatı</strong> desteği ile süreci en hızlı şekilde yönetebilirsiniz.
                            </p>

                            <h3>Uzman Hukuki Destek</h3>
                            <p>
                                Kira hukuku teknik detayların davanın kaderini belirlediği bir alandır. Özellikle <strong>{district}</strong> gibi değer artışının yüksek olduğu bölgelerde
                                hak kaybı yaşamamak maddi açıdan büyük önem taşır. Ofisimiz Bayraklı Adliyesi'nde bulunmakla birlikte, {district} bölgesindeki taşınmazlarla ilgili
                                tüm davalarda aktif rol almaktadır.
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-primary text-white p-8 rounded-2xl sticky top-24">
                                <h3 className="text-2xl font-playfair font-bold mb-4">Ücretsiz Ön Görüşme</h3>
                                <p className="text-slate-300 mb-6">
                                    {district} bölgesindeki gayrimenkulünüzle ilgili hukuki sorununuzu dinleyelim, çözüm yolunu birlikte belirleyelim.
                                </p>
                                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold" asChild>
                                    <a href="tel:+905551234567" className="flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        Hemen Arayın
                                    </a>
                                </Button>
                                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                    <p className="text-xs text-slate-400 mb-2">veya WhatsApp'tan yazın</p>
                                    <a href="https://wa.me/905551234567" className="text-secondary hover:text-white transition-colors font-medium text-sm">
                                        0555 123 45 67
                                    </a>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-8">
                                <h3 className="font-bold text-lg mb-4">{district} Sıkça Sorulan Sorular</h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, i) => (
                                        <div key={i}>
                                            <h4 className="font-bold text-sm text-primary mb-1">{faq.question}</h4>
                                            <p className="text-xs text-muted-foreground">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
