import { notFound } from "next/navigation";
import { districtData as allKiraDistricts, getAllServiceSlugs, getServiceDistrictData, serviceConfig, type ServiceType, type DistrictData } from "@/lib/districts";
import { isDistrictData } from "@/lib/districts-is";
import { bosanmaDistrictData } from "@/lib/districts-bosanma";
import { tazminatDistrictData } from "@/lib/districts-tazminat";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Home, ChevronRight, Building2, Map, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const allDistrictsByService: Record<ServiceType, DistrictData[]> = {
    kira: allKiraDistricts,
    is: isDistrictData,
    bosanma: bosanmaDistrictData,
    tazminat: tazminatDistrictData,
};

const serviceSuffix: Record<ServiceType, string> = {
    kira: "-kira-avukati",
    is: "-is-avukati",
    bosanma: "-bosanma-avukati",
    tazminat: "-tazminat-avukati",
};

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const result = getServiceDistrictData(slug);

    if (!result) return {};

    const { data, serviceType } = result;
    const config = serviceConfig[serviceType];

    return {
        title: {
            absolute: `${data.name} ${config.label} | Av. Mert Kağan Çetin`,
        },
        description: data.description || `${data.name} bölgesinde ${config.label.toLowerCase()} hizmetleri için profesyonel avukatlık desteği alın.`,
        openGraph: {
            title: `${data.name} ${config.label} | Av. Mert Kağan Çetin`,
            description: data.description,
            url: `https://mertkagancetin.com/${slug}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://mertkagancetin.com/${slug}/`,
        },
    };
}

function getFaqs(district: string, serviceType: ServiceType) {
    switch (serviceType) {
        case "kira":
            return [
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
        case "is":
            return [
                {
                    question: `${district} bölgesinde iş davaları ne kadar sürer?`,
                    answer: `İş mahkemelerinde basit yargılama usulü uygulandığından, ${district} bölgesindeki iş davaları ortalama 6 ay ile 1 yıl arasında sonuçlanmaktadır. Zorunlu arabuluculuk süreci dava öncesi 3-4 hafta sürmektedir.`
                },
                {
                    question: `${district} iş avukatı ücretleri ne kadar?`,
                    answer: "2026 yılı avukatlık asgari ücret tarifesine göre iş davaları için ücretler 30.000 TL - 60.000 TL aralığında değişmektedir. İşe iade davalarında nispi vekalet ücreti de uygulanabilmektedir."
                },
                {
                    question: `${district} bölgesinde iş davası için hizmet veriyor musunuz?`,
                    answer: `Evet, ofisimiz Bayraklı'da bulunmakla birlikte ${district} dahil İzmir'in tüm merkez ilçelerinde işe iade, kıdem tazminatı ve iş kazası davalarında müvekkillerimizi temsil etmekteyiz.`
                }
            ];
        case "bosanma":
            return [
                {
                    question: `${district} bölgesinde boşanma davaları ne kadar sürer?`,
                    answer: `Anlaşmalı boşanma davaları tek celsede sonuçlanabilirken, ${district} bölgesindeki çekişmeli boşanma davaları ortalama 1-2 yıl sürmektedir. Velayet ve mal paylaşımı uyuşmazlıkları süreci uzatabilmektedir.`
                },
                {
                    question: `${district} boşanma avukatı ücretleri ne kadar?`,
                    answer: "2026 yılı avukatlık asgari ücret tarifesine göre anlaşmalı boşanma için 25.000 - 40.000 TL, çekişmeli boşanma için 40.000 - 80.000 TL aralığında ücretler belirlenmektedir."
                },
                {
                    question: `${district} bölgesinde boşanma davası için hizmet veriyor musunuz?`,
                    answer: `Evet, ofisimiz Bayraklı'da bulunmakla birlikte ${district} dahil İzmir'in tüm merkez ilçelerinde boşanma, velayet ve nafaka davalarında müvekkillerimizi temsil etmekteyiz.`
                }
            ];
        case "tazminat":
            return [
                {
                    question: `${district} bölgesinde tazminat davaları ne kadar sürer?`,
                    answer: `${district} bölgesindeki tazminat davaları, bilirkişi raporları ve delil toplama sürecine bağlı olarak ortalama 1-2 yıl sürmektedir. Sigorta tahkim komisyonuna başvuru alternatif bir çözüm yolu olabilmektedir.`
                },
                {
                    question: `${district} tazminat avukatı ücretleri ne kadar?`,
                    answer: "2026 yılı avukatlık asgari ücret tarifesine göre tazminat davaları için 30.000 - 60.000 TL başlangıç ücreti ve kazanılan tazminattan nispi vekalet ücreti uygulanmaktadır."
                },
                {
                    question: `${district} bölgesinde tazminat davası için hizmet veriyor musunuz?`,
                    answer: `Evet, ofisimiz Bayraklı'da bulunmakla birlikte ${district} dahil İzmir'in tüm merkez ilçelerinde trafik kazası, iş kazası ve malpraktis tazminat davalarında müvekkillerimizi temsil etmekteyiz.`
                }
            ];
    }
}

function getIntroText(district: string, serviceType: ServiceType, description: string) {
    switch (serviceType) {
        case "kira":
            return {
                intro: `İzmir'in önemli yerleşim merkezlerinden ${district}, gayrimenkul hareketliliğinin yüksek olduğu bir bölgedir. ${description} Bu durum, zaman zaman ev sahipleri ve kiracılar arasında hukuki uyuşmazlıkları da beraberinde getirmektedir.`,
                expertise: `Av. Mert Kağan Çetin Hukuk Bürosu olarak, ${district} kira avukatı ihtiyaçlarınızda, bölgenin dinamiklerine hakim bir yaklaşımla çözüm üretiyoruz.`,
                action: `Kiracınız kira ödemiyorsa, 10 yıllık uzama süresi dolduysa veya kendiniz/yakınınız için konut ihtiyacı doğduysa ${district} tahliye avukatı desteği ile süreci en hızlı şekilde yönetebilirsiniz.`,
            };
        case "is":
            return {
                intro: `İzmir'in dinamik ilçelerinden ${district}, çeşitli sektörlerde istihdam sağlayan önemli bir bölgedir. ${description} Bu yapı, işçi-işveren uyuşmazlıklarının çeşitli biçimlerde ortaya çıkmasına neden olmaktadır.`,
                expertise: `Av. Mert Kağan Çetin Hukuk Bürosu olarak, ${district} iş avukatı ihtiyaçlarınızda, bölgenin iş piyasası dinamiklerini bilen bir yaklaşımla çözüm üretiyoruz.`,
                action: `Haksız yere işten çıkarıldıysanız, kıdem tazminatınız ödenmiyorsa veya iş kazası geçirdiyseniz ${district} iş avukatı desteği ile haklarınızı en etkili şekilde koruyabilirsiniz.`,
            };
        case "bosanma":
            return {
                intro: `İzmir'in köklü ilçelerinden ${district}, farklı sosyoekonomik yapılarıyla çeşitli aile hukuku uyuşmazlıklarının yaşandığı bir bölgedir. ${description}`,
                expertise: `Av. Mert Kağan Çetin Hukuk Bürosu olarak, ${district} boşanma avukatı ihtiyaçlarınızda, aile hukuku alanındaki uzmanlığımızla çözüm üretiyoruz.`,
                action: `Boşanma kararı aldıysanız, velayet veya nafaka konusunda haklarınızı korumak istiyorsanız ${district} boşanma avukatı desteği ile süreci güvenle yönetebilirsiniz.`,
            };
        case "tazminat":
            return {
                intro: `İzmir'in önemli ilçelerinden ${district}, çeşitli risk faktörleriyle tazminat davalarının sıkça görüldüğü bir bölgedir. ${description}`,
                expertise: `Av. Mert Kağan Çetin Hukuk Bürosu olarak, ${district} tazminat avukatı ihtiyaçlarınızda, bölgedeki risk profilini bilen bir yaklaşımla çözüm üretiyoruz.`,
                action: `Trafik kazası, iş kazası veya tıbbi hata nedeniyle zarar gördüyseniz ${district} tazminat avukatı desteği ile hak ettiğiniz tazminatı alabilirsiniz.`,
            };
    }
}

export default async function DistrictPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const result = getServiceDistrictData(slug);

    if (!result) {
        notFound();
    }

    const { data: districtData, serviceType } = result;
    const { name: district, description, features } = districtData;
    const config = serviceConfig[serviceType];

    const introTitle = `${district} ${config.label}`;
    const faqs = getFaqs(district, serviceType);
    const texts = getIntroText(district, serviceType, description);

    const neighborDistricts = allDistrictsByService[serviceType];
    const suffix = serviceSuffix[serviceType];

    return (
        <main className="bg-white">
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: config.parentTitle, url: `https://mertkagancetin.com${config.parentUrl}/` },
                    { name: `${district} ${config.label}`, url: `https://mertkagancetin.com/${slug}/` }
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
                        <Link href={config.parentUrl} className="hover:text-white transition-colors">
                            {config.parentTitle}
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
                            <strong>{district}</strong> bölgesinde {config.label.toLowerCase()} hizmeti.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim">
                                    <Phone className="w-5 h-5" />
                                    Hemen Arayın
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
                                {texts.intro}
                            </p>

                            <p>
                                <strong>{texts.expertise}</strong>
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
                                    {districtData.neighborhoods.map((nb, i) => (
                                        <span key={i} className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-600">
                                            {nb}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3>{district} {config.sectionTitle}</h3>
                            <p>
                                {district} sınırları içerisinde {features[0].toLowerCase()} alanında çeşitli hukuki süreçler yaşanmaktadır.
                                Özellikle {features[1] || features[0]} konusundaki uyuşmazlıklarda, yerel emsal kararlar davanın seyrini etkileyebilmektedir.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                                <h4 className="font-bold text-blue-900 text-lg mb-2">{districtData.legalFocus.title}</h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    {districtData.legalFocus.detail}
                                </p>
                            </div>

                            <p>
                                {texts.action}
                            </p>

                            <h3>Uzman Hukuki Destek</h3>
                            <p>
                                Hukuki süreçlerde teknik detaylar davanın kaderini belirleyebilir. Özellikle <strong>{district}</strong> gibi dinamik bölgelerde
                                hak kaybı yaşamamak büyük önem taşır. Ofisimiz Bayraklı Adliyesi yakınında bulunmakla birlikte, {district} bölgesindeki
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
                                            &rarr; {blog.title}
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
                                        Komşu İlçelerde {config.label}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {districtData.neighborSlugs.map((nSlug) => {
                                            const neighbor = neighborDistricts.find(d => d.slug === nSlug);
                                            if (!neighbor) return null;
                                            return (
                                                <Link
                                                    key={nSlug}
                                                    href={`/${nSlug}${suffix}`}
                                                    className="inline-flex items-center gap-1 text-sm bg-white px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-secondary hover:text-primary transition-all font-medium"
                                                >
                                                    {neighbor.name} {config.label}
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
                                <h3 className="text-2xl font-playfair font-bold mb-4">Hemen Arayın</h3>
                                <p className="text-slate-300 mb-6">
                                    {district} bölgesindeki hukuki sorununuzu dinleyelim, çözüm yolunu birlikte belirleyelim.
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
