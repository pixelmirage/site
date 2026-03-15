import { notFound } from "next/navigation";
import { districts, districtData as allDistricts, getSlugFromDistrict, getDistrictData } from "@/lib/districts";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Home, ChevronRight, Scale, FileText, Users, Building2, Map, BookOpen } from "lucide-react";
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
    const districtData = getDistrictData(slug);

    if (!districtData) return {};

    return {
        title: {
            absolute: `${districtData.name} Kira Avukatı | Av. Mert Kağan Çetin`,
        },
        description: districtData.description || `${districtData.name} bölgesinde kira hukuku ve tahliye davalarında profesyonel avukatlık desteği alın.`,
        keywords: [`${districtData.name} kira avukatı`, `${districtData.name} tahliye avukatı`, `${districtData.name} kira davası`, "kira tespit davası", "tahliye davası"],
        openGraph: {
            title: `${districtData.name} Kira Avukatı | Av. Mert Kağan Çetin`,
            description: districtData.description,
            url: `https://mertkagancetin.com/${slug}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://mertkagancetin.com/${slug}/`,
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

    const introTitle = `${district} Kira Avukatı`;
    const callToActionText = "Ücretsiz Ön Görüşme";

    const faqs = [
        {
            question: `${district} bölgesinde kira davaları ne kadar sürer?`,
            answer: `${district} Adliyesi'nin bağlı olduğu İzmir mahkemelerinin iş yüküne göre değişmekle birlikte, tahliye davaları ortalama 6 ay ile 1.5 yıl arasında sürebilmektedir. Tahliye taahhütnamesi varlığı süreci hızlandırır.`
        },
        {
            question: `${district} kira avukatı ücretleri ne kadar?`,
            answer: "2026 yılı avukatlık asgari ücret tarifesi ve davanın niteliğine göre belirlenmektedir. Tahliye davaları için ortalama ücretler 35.000 TL - 60.000 TL aralığında değişmektedir."
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
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: `${district} Kira Avukatı`, url: `https://mertkagancetin.com/${slug}/` }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400 mb-8">
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

                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                            {introTitle}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                            {description} <br className="hidden md:block" />
                            <strong>{district}</strong> bölgesindeki mülkleriniz için kira hukuku alanında uzman desteği.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                                    {district} Hizmet Bölgelerimiz
                                </h4>
                                <p className="text-sm text-slate-600 mb-4">
                                    {district} genelinde, özellikle şu mahallelerde yoğun faaliyet göstermekteyiz:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {districtData?.neighborhoods?.map((nb, i) => (
                                        <span key={i} className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600">
                                            {nb}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3>{district} Kiracı Tahliye Davaları</h3>
                            <p>
                                {district} sınırları içerisindeki konut ve işyerleri için tahliye süreçleri, Türk Borçlar Kanunu'nun emredici hükümlerine tabidir.
                                Özellikle {features[0]} ve çevresindeki uyuşmazlıklarda, yerel emsal kararlar ve bölgesel rayiçler davanın seyrini etkileyebilmektedir.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                                <h4 className="font-bold text-blue-900 text-lg mb-2">{districtData?.legalFocus?.title}</h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    {districtData?.legalFocus?.detail}
                                </p>
                            </div>

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

                            {/* Related Blog Posts - Internal Linking */}
                            <div className="not-prose bg-white border border-slate-200 rounded-xl p-6 my-8">
                                <h4 className="flex items-center gap-2 font-bold text-primary text-lg mb-4">
                                    <BookOpen className="w-5 h-5 text-secondary" />
                                    {district} İçin Faydalı Makaleler
                                </h4>
                                <div className="space-y-3">
                                    {districtData.relatedBlogSlugs.map((blog) => (
                                        <Link key={blog.slug} href={`/blog/${blog.slug}`} className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                            → {blog.title}
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/blog" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                    Tüm Makaleler <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* Neighbor District Cross-Links */}
                            {districtData.neighborSlugs.length > 0 && (
                                <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-6 my-8">
                                    <h4 className="flex items-center gap-2 font-bold text-primary text-lg mb-4">
                                        <Building2 className="w-5 h-5 text-secondary" />
                                        Komşu İlçelerde Kira Avukatı
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {districtData.neighborSlugs.map((nSlug) => {
                                            const neighbor = allDistricts.find(d => d.slug === nSlug);
                                            if (!neighbor) return null;
                                            return (
                                                <Link
                                                    key={nSlug}
                                                    href={`/${nSlug}-kira-avukati`}
                                                    className="inline-flex items-center gap-1 text-sm bg-white px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-secondary hover:text-primary transition-all font-medium"
                                                >
                                                    {neighbor.name} Kira Avukatı
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <p className="text-xs text-slate-400 italic not-prose">
                                Son güncelleme: Mart 2026
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
                                    <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        WhatsApp ile Yazın
                                    </a>
                                </Button>
                                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                    <p className="text-xs text-slate-400 mb-2">veya telefonla arayın</p>
                                    <a href="tel:+905445854645" className="text-secondary hover:text-white transition-colors font-medium text-sm">
                                        0544 585 46 45
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
