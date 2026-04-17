import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { SectionCTA } from "@/components/ui/SectionCTA";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { articleProseClasses } from "@/lib/prose-classes";

export const metadata: Metadata = {
    title: "İzmir Kira Uyarlama Davası Avukatı",
    description: "İzmir kira uyarlama davası avukatı Av. Mert Kağan Çetin. TBK m. 138 kapsamında kira bedeli uyarlama davalarında uzman destek.",
    keywords: ["kira uyarlama davası avukatı İzmir", "kira uyarlama davası", "TBK 138", "aşırı ifa güçlüğü", "kira bedeli uyarlama"],
    openGraph: {
        title: "İzmir Kira Uyarlama Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira uyarlama davalarında uzman avukatlık hizmeti. TBK m. 138 kapsamında kira bedeli uyarlama davalarında hukuki destek.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/kira-uyarlama-davasi/",
        type: "article",
    },
    other: { "article:modified_time": "2026-03-22" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/kira-uyarlama-davasi/" },
};

const faqs = [
    {
        question: "Kira uyarlama davasını kiracı mı ev sahibi mi açabilir?",
        answer: "Kira uyarlama davasını hem kiracı hem ev sahibi (kiraya veren) açabilir. Kiracı, ekonomik koşulların olağanüstü değişmesi nedeniyle kira bedelinin düşürülmesini talep edebilir. Ev sahibi ise enflasyon ve piyasa koşulları nedeniyle mevcut kira bedelinin emsal rayiç bedellerin çok altında kaldığını ileri sürerek kira artışı talep edebilir. Her iki taraf da TBK m. 138 kapsamında aşırı ifa güçlüğüne dayanarak dava açma hakkına sahiptir."
    },
    {
        question: "Kira uyarlama davası ile kira tespit davası arasındaki fark nedir?",
        answer: "Kira tespit davası TBK m. 344 kapsamında her kira döneminde açılabilen ve kira bedelinin rayiç değere göre belirlenmesini amaçlayan bir davadır. Kira uyarlama davası ise TBK m. 138 kapsamında olağanüstü koşulların ortaya çıkması halinde sözleşme şartlarının değiştirilmesini talep eden bir davadır. Uyarlama davası için enflasyon, devalüasyon veya ekonomik kriz gibi öngörülemeyen bir değişikliğin gerçekleşmiş olması şarttır."
    },
    {
        question: "Kira uyarlama davası ne kadar sürer?",
        answer: "İzmir'de kira uyarlama davası ortalama 6-18 ay arasında sürmektedir. Süre, davanın karmaşıklığına, bilirkişi raporu süresine ve Bayraklı Adliyesi'ndeki iş yüküne göre değişir. Bilirkişi incelemesi ve keşif aşaması süreyi doğrudan etkiler. Tarafların uzlaşması halinde dava daha kısa sürede sonuçlanabilir."
    },
    {
        question: "Kira uyarlama davası açmak için hangi şartlar gereklidir?",
        answer: "Kira uyarlama davası açmak için dört temel şartın bir arada bulunması gerekir: Birincisi, sözleşmenin kurulmasından sonra olağanüstü bir değişiklik meydana gelmiş olmalıdır (yüksek enflasyon, devalüasyon, ekonomik kriz). İkincisi, bu değişiklik öngörülemez nitelikte olmalıdır. Üçüncüsü, değişiklik nedeniyle taraflardan birinin ifası aşırı güçleşmiş olmalıdır. Dördüncüsü, bu durumdan zarar gören tarafın kusuru bulunmamalıdır."
    },
    {
        question: "Kira uyarlama davası geriye dönük uygulanır mı?",
        answer: "Kira uyarlama davasında mahkeme kararı kural olarak dava tarihinden itibaren geçerli olur. Geriye dönük olarak kira bedelinin uyarlanması talep edilemez. Bu nedenle ekonomik koşulların değiştiğini fark ettiğinizde vakit kaybetmeden dava açmak büyük önem taşır. Dava açılmadan önceki dönem için herhangi bir uyarlama yapılmaz."
    }
];

const tocItems = [
    { id: "nedir", title: "Kira Uyarlama Davası Nedir?" },
    { id: "sartlari", title: "Dava Şartları" },
    { id: "surecimiz", title: "İzmir'de Dava Sürecimiz" },
    { id: "neden-avukat", title: "Neden Avukat Gerekli?" },
    { id: "ucretler", title: "2026 Ücret Bilgileri" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function KiraUyarlamaDavasiPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Kira Uyarlama Davası" description="İzmir'de TBK m. 138 kapsamında kira bedeli uyarlama davası hizmeti." serviceType="Kira Uyarlama Davası" />
            <PersonSchema knowsAbout={["Kira Uyarlama Davası", "Aşırı İfa Güçlüğü", "TBK m. 138", "Kira Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "Kira Uyarlama Davası", url: "https://mertkagancetin.com/izmir-kira-avukati/kira-uyarlama-davasi/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-kira-avukati/" className="hover:text-white transition-colors">İzmir Kira Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Kira Uyarlama Davası</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kira Uyarlama Davası Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            TBK m. 138 kapsamında enflasyon, ekonomik kriz ve olağanüstü koşullar nedeniyle kira bedeli uyarlama davalarında
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile profesyonel hukuki destek alın.
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
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-4xl mx-auto ${articleProseClasses}`}>

                        <p className="text-xl leading-relaxed font-medium">
                            <strong>İzmir kira uyarlama davası avukatı</strong> olarak ekonomik koşulların olağanüstü değiştiği durumlarda kiracı ve kiraya veren adına <Link href="/sozluk/kira-uyarlama-davasi/">kira uyarlama davası</Link> açıyor ve yürütüyoruz. TBK m. 138 kapsamında aşırı ifa güçlüğü nedeniyle kira bedelinin hakkaniyete uygun şekilde yeniden belirlenmesi için profesyonel hukuki destek sunuyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 22 Mart 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Yüksek enflasyon, devalüasyon ve ekonomik kriz gibi olağanüstü koşullar kira sözleşmelerindeki dengeyi bozabilir. Bu durumda hem kiracı hem kiraya veren, mahkemeden kira bedelinin güncel koşullara göre uyarlanmasını talep edebilir. <strong>Kira uyarlama davası avukatı</strong> olarak Bayraklı Adliyesi&apos;ndeki tüm kira uyarlama davalarını yakından takip ediyor, müvekkillerimize en hızlı ve etkili sonucu sağlıyoruz.
                        </p>

                        <h2 id="nedir" className="scroll-mt-24">Kira Uyarlama Davası Nedir?</h2>

                        <p>
                            <strong>Kira uyarlama davası</strong>, Türk Borçlar Kanunu&apos;nun 138. maddesi (aşırı ifa güçlüğü) kapsamında sözleşme kurulduktan sonra ortaya çıkan olağanüstü ekonomik değişiklikler nedeniyle kira bedelinin mahkeme tarafından yeniden belirlenmesini amaçlayan bir davadır. Enflasyonun beklenmedik ölçüde yükselmesi, döviz kurlarındaki ani dalgalanmalar veya genel bir ekonomik kriz gibi durumlar bu davanın temel gerekçelerini oluşturur.
                        </p>

                        <p>
                            Kira uyarlama davası, <Link href="/izmir-kira-avukati/kira-tespit-davasi/">kira tespit davasından</Link> farklı bir hukuki müessesedir. Kira tespit davası TBK m. 344 kapsamında her kira yenileme döneminde açılabilen ve kira bedelinin emsal rayiç bedele göre tespit edilmesini amaçlayan bir davadır. Kira uyarlama davası ise yalnızca olağanüstü koşulların varlığında, sözleşmenin temel dengesinin bozulduğu hallerde gündeme gelir. <Link href="/sozluk/kira-uyarlama-davasi/">Kira uyarlama davası</Link> kavramının detaylı tanımını sözlüğümüzden inceleyebilirsiniz.
                        </p>

                        <blockquote>
                            <strong>TBK m. 138 - Aşırı İfa Güçlüğü:</strong> Sözleşmenin yapıldığı sırada taraflarca öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durum, borçludan kaynaklanmayan bir sebeple ortaya çıkar ve sözleşmenin yapıldığı sırada mevcut olguları, kendisinden ifanın istenmesini dürüstlük kurallarına aykırı düşecek derecede borçlu aleyhine değiştirirse, borçlu hakimden sözleşmenin yeni koşullara uyarlanmasını isteyebilir.
                        </blockquote>

                        <figure className="not-prose my-10">
                            <Image
                                src="/images/infographics/kira-tespit-vs-uyarlama.webp"
                                alt="Kira tespit davası ve kira uyarlama davası karşılaştırması: TBK m. 344 ile TBK m. 138 arasındaki farklar, şartlar ve dava süreleri"
                                width={1200}
                                height={800}
                                className="w-full max-w-lg mx-auto rounded-xl"
                            />
                            <figcaption className="text-center text-sm text-slate-500 mt-3">Kira tespit davası ile kira uyarlama davası karşılaştırması</figcaption>
                        </figure>

                        <h2 id="sartlari" className="scroll-mt-24">Kira Uyarlama Davası Şartları</h2>

                        <p>
                            TBK m. 138 kapsamında kira uyarlama davası açabilmek için aşağıdaki dört şartın birlikte gerçekleşmiş olması gerekir:
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
                                        { title: "Olağanüstü Değişiklik", desc: "Sözleşme kurulduktan sonra enflasyon, devalüasyon, ekonomik kriz veya doğal afet gibi olağanüstü bir durum ortaya çıkmış olmalıdır. Bu değişiklik sözleşmenin temel dengesini bozacak nitelikte olmalıdır." },
                                        { title: "Öngörülemezlik", desc: "Ortaya çıkan değişiklik, sözleşmenin kurulduğu tarihte taraflarca öngörülemeyen ve öngörülmesi de beklenmeyen nitelikte olmalıdır. Olağan ekonomik dalgalanmalar bu kapsamda değerlendirilmez." },
                                        { title: "Aşırı İfa Güçlüğü", desc: "Değişiklik nedeniyle borçlunun edimini yerine getirmesi aşırı derecede güçleşmiş olmalıdır. Kira bedelinin ödenmesi veya mevcut bedelle kiralamaya devam edilmesi dürüstlük kurallarına aykırı hale gelmelidir." },
                                        { title: "Tarafın Kusursuzluğu", desc: "Aşırı ifa güçlüğünden yararlanan tarafın bu durumun oluşmasında herhangi bir kusuru bulunmamalıdır. Kendi ihmalinden kaynaklanan mali güçlükler dava gerekçesi olamaz." },
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
                            Bu dört şartın tamamının ispat edilmesi gerekir. Mahkeme, şartlardan birinin eksik olduğuna kanaat getirirse davayı reddeder. Bu nedenle dava öncesinde kapsamlı bir hukuki değerlendirme yapılması büyük önem taşır.
                        </p>

                        <h2 id="surecimiz" className="scroll-mt-24">İzmir&apos;de Kira Uyarlama Davası Sürecimiz</h2>

                        <p>
                            <strong>Kira uyarlama davası avukatı</strong> olarak dava sürecini 5 aşamada yönetiyoruz:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Kira Sözleşmesi ve Ekonomik Analiz", desc: "Kira sözleşmesini, kira bedelinin geçmiş dönemlerdeki seyrini ve güncel ekonomik koşulları inceliyoruz. Sözleşme tarihinden bu yana meydana gelen olağanüstü değişiklikleri belgeliyoruz." },
                                { step: "2", title: "Emsal ve Rayiç Bedel Araştırması", desc: "Taşınmazın bulunduğu bölgedeki emsal kira bedellerini araştırıyor, rayiç bedel analizini hazırlıyoruz. Bölgedeki benzer taşınmazların kira bedellerini karşılaştırmalı olarak ortaya koyuyoruz." },
                                { step: "3", title: "Dava Dilekçesi ve Delil Sunumu", desc: "Bayraklı Adliyesi nezdinde kira uyarlama davasını açıyor, ekonomik verileri, emsal kiraları ve sözleşme şartlarını delil olarak sunuyoruz. Gerektiğinde ihtiyati tedbir talebinde bulunuyoruz." },
                                { step: "4", title: "Bilirkişi Raporu ve Keşif", desc: "Mahkemece atanan bilirkişi heyetinin taşınmaz keşfini ve rayiç bedel incelemesini takip ediyoruz. Bilirkişi raporuna gerektiğinde itiraz ediyor, ek rapor talep ediyoruz." },
                                { step: "5", title: "Karar ve Yeni Kira Bedeli Uygulaması", desc: "Mahkeme kararıyla belirlenen yeni kira bedelinin uygulanmasını sağlıyoruz. Karşı tarafın itiraz etmesi halinde istinaf sürecini de yönetiyoruz." },
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

                        <h2 id="neden-avukat" className="scroll-mt-24">Kira Uyarlama Davasında Neden Avukat Gerekli?</h2>

                        <p>
                            Kira uyarlama davası, olağan kira davalarına kıyasla daha karmaşık bir hukuki süreçtir. Avukatsız açılan kira uyarlama davalarında sık karşılaşılan sorunlar:
                        </p>

                        <ul>
                            <li><strong>TBK m. 138 şartlarının ispat edilememesi:</strong> Olağanüstü değişiklik, öngörülemezlik ve aşırı ifa güçlüğünün hukuki olarak doğru şekilde ortaya konması uzmanlık gerektirir</li>
                            <li><strong>Kira tespit davası ile karıştırılması:</strong> Yanlış dava türü seçmek zaman ve masraf kaybına yol açar</li>
                            <li><strong>Ekonomik verilerin yetersiz sunulması:</strong> Enflasyon oranları, döviz kuru değişimleri ve emsal kira bedellerinin sistematik olarak sunulmaması davanın reddine neden olabilir</li>
                            <li><strong>Bilirkişi raporuna etkili itiraz yapılamaması:</strong> Hatalı bilirkişi raporlarına zamanında ve gerekçeli itiraz edilmemesi olumsuz sonuç doğurur</li>
                            <li><strong>Dava açma zamanlamasında hata:</strong> Uyarlama kararı dava tarihinden itibaren geçerli olduğundan geç kalınması hak kaybına neden olur</li>
                        </ul>

                        <p>
                            <strong>Kira uyarlama davası avukatı</strong> olarak bu riskleri ortadan kaldırıyor ve müvekkillerimize en adil sonucu sağlıyoruz. <Link href="/izmir-kira-avukati/">Kira hukuku hizmetlerimizin</Link> tamamı hakkında bilgi alın.
                        </p>

                        <SectionCTA text="Kira uyarlama davanız için avukat desteği almak ister misiniz?" />

                        <h2 id="ucretler" className="scroll-mt-24">2026 Kira Uyarlama Davası Ücretleri</h2>

                        <div className="not-prose my-8 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-4 py-3 text-left">Dava Türü</th>
                                        <th className="px-4 py-3 text-left">Süre (Ortalama)</th>
                                        <th className="px-4 py-3 text-left">Ücret Aralığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Kira Uyarlama Davası</td><td className="px-4 py-3">6-18 ay</td><td className="px-4 py-3">35.000 - 55.000 TL</td></tr>
                                    <tr className="border-b bg-slate-50"><td className="px-4 py-3 font-medium">Kira Tespit Davası</td><td className="px-4 py-3">6-12 ay</td><td className="px-4 py-3">30.000 - 50.000 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Ücretler ortalama değerlerdir. Kesin ücret davanın karmaşıklığına ve taşınmazın değerine göre ilk görüşmede belirlenir. <Link href="/sozluk/kira-uyarlama-davasi/">Kira uyarlama davası</Link> kavramının detaylı açıklamasını sözlüğümüzden inceleyebilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kira Uyarlama Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Uyarlama Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira uyarlama davaları, kira tespit davaları ve kira uyuşmazlıklarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
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
                                <Link href="/izmir-kira-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    ← İzmir Kira Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Tespit Davası Avukatı
                                </Link>
                                <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kiracı Tahliye Davası Avukatı
                                </Link>
                                <Link href="/sozluk/kira-uyarlama-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Uyarlama Davası (Sözlük)
                                </Link>
                                <Link href="/kira-artis-orani-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Artış Oranı Hesaplama Aracı
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Uyarlama Davanız İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira uyarlama süreciniz için hemen randevu alın.
                                    <strong className="text-white"> Kira uyarlama davası avukatı</strong> olarak size yardımcı olmaya hazırız.
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
