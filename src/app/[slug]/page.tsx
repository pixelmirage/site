import { notFound } from "next/navigation";
import { districts, getSlugFromDistrict, getDistrictFromSlug } from "@/lib/districts";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Home, ChevronRight, Scale, FileText, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export async function generateStaticParams() {
    return districts.map((district) => ({
        slug: `${getSlugFromDistrict(district)}-kira-avukati`,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const district = getDistrictFromSlug(slug);

    if (!district) return {};

    return {
        title: {
            absolute: `${district} Kira Avukatı | Tahliye & Kira Tespit | Av. Mert Kağan Çetin`,
        },
        description: `${district} bölgesinde uzman kira avukatı mı arıyorsunuz? Av. Mert Kağan Çetin ile ${district} dahil tüm İzmir'de tahliye ve kira davalarınızda profesyonel destek alın.`,
        keywords: [`${district} kira avukatı`, `${district} tahliye avukatı`, "izmir kira avukatı", "kira tespit davası", "tahliye davası"],
        openGraph: {
            title: `${district} Kira Avukatı | Av. Mert Kağan Çetin`,
            description: `${district} bölgesinde kira hukuku ve tahliye davalarında uzman avukatlık hizmeti.`,
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
    const district = getDistrictFromSlug(slug);

    if (!district) {
        notFound();
    }

    const faqs = [
        {
            question: `${district} bölgesinde kira davaları ne kadar sürer?`,
            answer: `${district} ve İzmir genelindeki mahkemelerin yoğunluğuna göre değişmekle birlikte, tahliye davaları ortalama 6 ay ile 1.5 yıl arasında sürebilmektedir. Tahliye taahhütnamesi varsa bu süre 3-4 aya kadar inebilir.`
        },
        {
            question: `${district} kira avukatı ücretleri ne kadar?`,
            answer: "2025 yılı avukatlık asgari ücret tarifesi ve davanın niteliğine göre belirlenmektedir. Tahliye davaları için ortalama ücretler 35.000 TL - 60.000 TL aralığında değişmektedir."
        },
        {
            question: `${district} için hizmet veriyor musunuz?`,
            answer: `Evet, ofisimiz Bayraklı'da bulunmakla birlikte ${district} dahil İzmir'in tüm ilçelerinde kira hukuku ve tahliye davalarında aktif olarak hizmet vermekteyiz.`
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
                        <span className="text-secondary">{district} Kira Avukatı</span>
                    </nav>

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                            {district} Kira Avukatı
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong>{district}</strong> bölgesindeki mülkleriniz ve kira uyuşmazlıklarınız için uzman hukuki destek.
                            Kiracı tahliyesi ve kira tespit davalarında yanınızdayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim">
                                    <Phone className="w-5 h-5" />
                                    Bize Ulaşın
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
                                İzmir'in önemli ilçelerinden biri olan <strong>{district}</strong>, konut ve işyeri kiralama trafiğinin yoğun olduğu bölgelerdendir.
                                Artan kira bedelleri ve değişen ekonomik koşullar, {district} bölgesinde de ev sahibi-kiracı uyuşmazlıklarını artırmıştır.
                                Av. Mert Kağan Çetin Hukuk Bürosu olarak, <strong>{district} kira avukatı</strong> arayışınızda profesyonel çözümler sunuyoruz.
                            </p>

                            <h3>{district} Kiracı Tahliye Davaları</h3>
                            <p>
                                {district} sınırları içerisindeki taşınmazlarınızla ilgili tahliye süreçlerinde, Türk Borçlar Kanunu'nun ilgili maddeleri kapsamında
                                en hızlı sonucu almanızı sağlıyoruz. İhtiyaç nedeniyle tahliye, tahliye taahhütnamesi ile tahliye veya kira ödenmemesi nedeniyle
                                tahliye süreçlerini titizlikle yürütüyoruz.
                            </p>

                            <div className="not-prose bg-slate-50 p-6 rounded-xl border border-slate-100 my-8">
                                <h4 className="flex items-center gap-2 font-bold text-primary text-xl mb-4">
                                    <Building2 className="w-6 h-6 text-secondary" />
                                    {district} Bölgesi Hizmetlerimiz
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Konut ve İşyeri Tahliye Davaları",
                                        "Kira Bedeli Tespit Davaları",
                                        "Kira Sözleşmesi Hazırlama",
                                        "İcra Takibi ve Tahliye",
                                        "Arabuluculuk Temsili",
                                        "Danışmanlık Hizmeti"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h3>Neden Bir Uzmanla Çalışmalısınız?</h3>
                            <p>
                                Kira hukuku teknik detayların ve sürelerin çok önemli olduğu bir alandır. Özellikle {district} gibi emlak piyasasının hareketli olduğu
                                bölgelerde, hak kaybı yaşamamak ve süreci hızlı sonuçlandırmak için uzman bir <strong>{district} kira avukatı</strong> ile çalışmak kritiktir.
                                Ofisimiz Bayraklı Adliyesi'ne yakın konumuyla, {district} kaynaklı davalara da hızlıca müdahil olabilmektedir.
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-primary text-white p-8 rounded-2xl">
                                <h3 className="text-2xl font-playfair font-bold mb-4">Hemen Fiyat Alın</h3>
                                <p className="text-slate-300 mb-6">
                                    {district} bölgesindeki davanız için ücretsiz ön değerlendirme yapalım.
                                </p>
                                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold" asChild>
                                    <a href="tel:+905551234567" className="flex items-center justify-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        Hemen Arayın
                                    </a>
                                </Button>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-8">
                                <h3 className="font-bold text-lg mb-4">Sıkça Sorulan Sorular</h3>
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
