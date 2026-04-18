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
    title: "İzmir Kira Hukuku Rehberi",
    description: "İzmir'de kira hukuku hakkında kapsamlı rehber. TBK kira hükümleri, kiracı ve ev sahibi hakları, kira sözleşmesi, tahliye sebepleri ve dava süreçleri hakkında bilgi alın.",
    keywords: ["İzmir kira hukuku", "kira hukuku rehberi", "kira hukuku avukatı İzmir", "TBK kira hükümleri", "kira hukuku danışmanlık İzmir"],
    openGraph: {
        title: "İzmir Kira Hukuku Rehberi | Av. Mert Kağan Çetin",
        description: "İzmir'de kira hukuku hakkında kapsamlı rehber. TBK kira hükümleri, kiracı ve ev sahibi hakları, kira sözleşmesi ve dava süreçleri.",
        url: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-hukuku/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-hukuku/" },
};

const faqs = [
    {
        question: "Kira hukuku nedir?",
        answer: "Kira hukuku, kiracı ile kiraya veren arasındaki ilişkiyi düzenleyen hukuk dalıdır. 6098 sayılı Türk Borçlar Kanunu'nun 299-378. maddeleri arasında düzenlenmiştir. Kira sözleşmesinin kurulması, kira bedelinin belirlenmesi, tarafların hak ve yükümlülükleri, sözleşmenin sona erdirilmesi ve tahliye süreçleri kira hukukunun kapsamına girer."
    },
    {
        question: "Kira sözleşmesi zorunlu mu?",
        answer: "Kira sözleşmesi yazılı olarak düzenlenmek zorunda değildir; sözlü kira sözleşmeleri de geçerlidir. Ancak ispat kolaylığı açısından yazılı sözleşme yapılması şiddetle tavsiye edilir. Yazılı sözleşme olmadığında kira bedeli, kira süresi ve diğer şartların ispatı tanık beyanları veya banka dekontları gibi delillere bağlı kalır. Bu durum uyuşmazlık halinde ciddi ispat güçlükleri doğurabilir."
    },
    {
        question: "Kira artışı nasıl belirlenir?",
        answer: "Konut kiralarında kira artış oranı, bir önceki kira yılının on iki aylık TÜFE ortalamasını geçemez (TBK m. 344). Beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira sözleşmelerinde hakim, TÜFE oranı, kiralananın durumu ve emsal kira bedelleri gibi faktörleri göz önüne alarak yeni kira bedelini belirleyebilir. Taraflar anlaşsa bile TÜFE sınırının üzerinde artış yapılamaz."
    },
    {
        question: "Kira davalarına hangi mahkeme bakar?",
        answer: "Kira davalarında görevli mahkeme Sulh Hukuk Mahkemesi'dir (HMK m. 4). Yetkili mahkeme ise kiralanan taşınmazın bulunduğu yer mahkemesidir. İzmir'de kira davaları Bayraklı Adliyesi'ndeki Sulh Hukuk Mahkemeleri tarafından görülür. Kira alacağına ilişkin icra takipleri ise İzmir İcra Müdürlükleri nezdinde yürütülür."
    },
    {
        question: "Kiracı hakları nelerdir?",
        answer: "Kiracının başlıca hakları şunlardır: Kiralanan taşınmazı sözleşme süresince kullanma hakkı, kira artışının yasal sınırlar dahilinde yapılmasını isteme hakkı, kiralananın kullanıma elverişli halde teslim edilmesini ve bakım-onarım yükümlülüklerinin yerine getirilmesini talep etme hakkı, haklı sebep olmaksızın tahliye edilmeme güvencesi ve sözleşme sona erdiğinde depozitonun iadesini isteme hakkı."
    }
];

const tocItems = [
    { id: "kira-hukuku-nedir", title: "Kira Hukuku Nedir?" },
    { id: "kira-hukuku-kapsami", title: "İzmir'de Kira Hukuku Kapsamı" },
    { id: "cozum-yollari", title: "Kira Uyuşmazlıklarında Çözüm Yolları" },
    { id: "sik-hatalar", title: "Sık Yapılan Hatalar" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function IzmirKiraHukukuPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="İzmir Kira Hukuku Danışmanlığı" description="İzmir'de kira hukuku alanında kapsamlı hukuki danışmanlık hizmeti." serviceType="Kira Hukuku Danışmanlığı" />
            <PersonSchema knowsAbout={["Kira Hukuku", "Türk Borçlar Kanunu", "Kira Sözleşmesi", "Kiracı Hakları", "Ev Sahibi Hakları"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
                    { name: "İzmir Kira Hukuku Rehberi", url: "https://mertkagancetin.com/izmir-kira-avukati/izmir-kira-hukuku/" }
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
                        <span className="text-secondary">İzmir Kira Hukuku Rehberi</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Kira Hukuku Rehberi
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de kira hukukuyla ilgili tüm temel bilgiler, yasal haklarınız ve dava süreçleri hakkında kapsamlı rehber.
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
                            <strong>İzmir kira hukuku</strong> alanında sunduğumuz danışmanlık hizmetiyle kiracı ve ev sahiplerinin yasal haklarını koruyoruz. Türk Borçlar Kanunu&apos;nun kira hükümlerinden kira sözleşmesinin hazırlanmasına, tahliye süreçlerinden kira tespit davalarına kadar geniş bir yelpazede hukuki destek sağlıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Kira ilişkileri günlük hayatın en yaygın hukuki ilişkilerinden biridir ve İzmir&apos;de yüz binlerce konut ve işyeri kiracısı ile ev sahibi bu hukuki çerçeve içinde hareket etmektedir. Kira hukukundaki hak ve yükümlülüklerin bilinmesi, olası uyuşmazlıkların önlenmesinde ve çözümünde büyük önem taşır.
                        </p>

                        <h2 id="kira-hukuku-nedir" className="scroll-mt-24">Kira Hukuku Nedir?</h2>

                        <p>
                            Kira hukuku, kiracı ile kiraya veren arasındaki ilişkiyi düzenleyen hukuk dalıdır. 6098 sayılı Türk Borçlar Kanunu&apos;nun (TBK) 299-378. maddeleri arasında kapsamlı şekilde düzenlenmiştir. TBK&apos;nın bu bölümü, kira sözleşmesinin tanımından tarafların borçlarına, kira bedelinin belirlenmesinden sözleşmenin sona ermesine kadar tüm konuları ele alır.
                        </p>

                        <p>
                            TBK madde 299&apos;a göre kira sözleşmesi, kiraya verenin bir şeyin kullanılmasını veya kullanılmasıyla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da bunun karşılığında kararlaştırılan kira bedelini ödemeyi üstlendiği sözleşmedir. Kira hukuku, konut ve çatılı işyeri kiralarında kiracıyı koruyucu hükümler içermektedir. Bu koruyucu hükümler emredici nitelikte olup tarafların anlaşmasıyla dahi kiracı aleyhine değiştirilemez.
                        </p>

                        <p>
                            Kira hukukunun temel ilkelerinden biri, kiracının korunması ilkesidir. TBK&apos;nın konut ve çatılı işyeri kiralarına ilişkin özel hükümleri (m. 339-356), kiracıya güçlü bir hukuki güvence sağlar. Kira artışının sınırlandırılması, tahliye sebeplerinin kanunla belirlenmesi ve kiracının sözleşmeyi serbestçe feshedebilme hakkı bu korumanın somut yansımalarıdır.
                        </p>

                        <h2 id="kira-hukuku-kapsami" className="scroll-mt-24">İzmir&apos;de Kira Hukuku Kapsamı</h2>

                        <p>
                            İzmir&apos;de kira hukuku, konut kiraları ve işyeri kiraları olmak üzere iki temel alanı kapsar. Konut kiralarında kiracının oturma hakkı güçlü bir şekilde korunurken, çatılı işyeri kiralarında da benzer koruma mekanizmaları uygulanır. TBK&apos;nın 339. maddesi uyarınca konut ve çatılı işyeri kiralarına ilişkin özel hükümler, kiracı aleyhine değiştirilemez.
                        </p>

                        <p>
                            Kira sözleşmeleri belirli süreli ve belirsiz süreli olarak ikiye ayrılır. Belirli süreli kira sözleşmelerinde, süre sonunda kiracı sözleşmeyi yenilemek istemezse en az on beş gün önceden bildirimde bulunmalıdır (TBK m. 347). Kiraya veren ise belirli sürenin bitiminde sözleşmeyi sona erdiremez; sözleşme aynı koşullarla bir yıl uzamış sayılır. Ancak on yıllık uzama süresinin ardından kiraya veren, üç ay önceden bildirimde bulunarak sözleşmeyi sona erdirebilir.
                        </p>

                        <p>
                            Tarafların hak ve yükümlülükleri de kira hukukunun önemli bir bölümünü oluşturur. Kiraya verenin başlıca yükümlülükleri kiralananı sözleşmeye uygun şekilde teslim etmek, kullanıma elverişli halde bulundurmak ve gerekli bakım-onarımı yapmaktır (TBK m. 301-303). Kiracının yükümlülükleri ise kira bedelini zamanında ödemek, kiralananı özenle kullanmak ve komşulara saygı göstermektir (TBK m. 313-316).
                        </p>

                        <h2 id="cozum-yollari" className="scroll-mt-24">Kira Uyuşmazlıklarında Çözüm Yolları</h2>

                        <p>
                            Kira uyuşmazlıklarında tarafların başvurabileceği çeşitli hukuki yollar mevcuttur. 2024 yılından itibaren kira uyuşmazlıklarında dava açmadan önce zorunlu arabuluculuk şartı getirilmiştir. Bu düzenlemeyle taraflar, mahkemeye başvurmadan önce arabuluculuk sürecini tamamlamak zorundadır. Arabuluculuk süreci hakkında detaylı bilgi için <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/">kira hukukunda zorunlu arabuluculuk sürecimizi</Link> inceleyebilirsiniz.
                        </p>

                        <p>
                            Arabuluculuk sürecinde anlaşma sağlanamazsa kira davaları Sulh Hukuk Mahkemesi&apos;nde görülür. İzmir&apos;de kira davaları Bayraklı Adliyesi&apos;ndeki Sulh Hukuk Mahkemeleri tarafından karara bağlanır. Kira tespit davası, tahliye davası, kira uyarlama davası ve kiralananın ayıplarının giderilmesi davası en sık açılan kira davası türleridir.
                        </p>

                        <p>
                            Kira alacaklarının tahsilinde ise icra takibi yolu tercih edilebilir. Ödenmeyen kira bedellerinin tahsili için ilamsız icra takibi başlatılabilir. Kiracıya ödeme emri tebliğ edildikten sonra otuz gün içinde ödeme yapılmazsa haciz işlemleri başlatılabilir. Ayrıca kira bedelini ödemeyen kiracıya karşı tahliye talepli icra takibi de mümkündür; bu durumda ödeme emrinde otuz günlük ödeme ve yedi günlük itiraz süresi yer alır.
                        </p>

                        <SectionCTA text="Kira hukuku konusunda profesyonel danışmanlık almak ister misiniz?" />

                        <h2 id="sik-hatalar" className="scroll-mt-24">Kira Hukukunda Sık Yapılan Hatalar</h2>

                        <p>
                            Kira ilişkilerinde hem kiracılar hem de ev sahipleri çeşitli hatalar yaparak hak kayıplarına uğrayabilmektedir. Bu hataların bilinmesi, uyuşmazlıkların önlenmesi açısından büyük önem taşır. İzmir&apos;de kira davalarında en sık karşılaştığımız hatalar şunlardır:
                        </p>

                        <ul>
                            <li><strong>Yazılı sözleşme yapılmaması:</strong> Sözlü kira sözleşmeleri geçerli olmakla birlikte, ispat güçlüğü yaratır. Kira bedeli, artış oranı ve özel şartların yazılı belirlenmemesi ciddi uyuşmazlıklara yol açar</li>
                            <li><strong>Kira artış oranının yanlış hesaplanması:</strong> Konut kiralarında TÜFE sınırını aşan artış yapılması veya artış oranının yanlış döneme göre hesaplanması sık karşılaşılan bir hatadır</li>
                            <li><strong>Tahliye taahhütnamesinin usulsüz düzenlenmesi:</strong> Kira sözleşmesiyle aynı tarihte alınan veya baskı altında imzalatılan tahliye taahhütnameleri geçersiz sayılabilir</li>
                            <li><strong>İhtarname sürelerinin kaçırılması:</strong> Tahliye davası açmadan önce çekilmesi gereken ihtarnamelerin süresinde gönderilmemesi, dava hakkının kaybedilmesine yol açar</li>
                            <li><strong>Depozitonun belgesiz alınması:</strong> Depozito bedelinin banka hesabı veya makbuz olmaksızın elden alınması, iade aşamasında ispat sorunlarına neden olur</li>
                            <li><strong>Kira bedelinin elden ödenmesi:</strong> Banka havalesi yerine elden yapılan kira ödemeleri, ödeme yapıldığının ispatını zorlaştırır ve iki haklı ihtar sürecinde sorun yaratır</li>
                            <li><strong>Dava açma sürelerinin bilinmemesi:</strong> Her tahliye sebebinin kendine özgü dava açma süreleri vardır ve bu süreler hak düşürücüdür; süresinde açılmayan dava reddedilir</li>
                        </ul>

                        <p>
                            Bu hataların önlenmesi için kira sözleşmesinin hazırlanması aşamasından itibaren hukuki danışmanlık alınması tavsiye edilir. <Link href="/izmir-kira-avukati/">İzmir kira avukatı</Link> olarak kira ilişkisinin her aşamasında müvekkillerimize rehberlik ediyoruz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Kira Hukuku Danışmanı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Kira Hukuku Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Kira hukuku, kira tespit davaları, tahliye davaları ve kira uyuşmazlıklarında kapsamlı hukuki danışmanlık sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde kira davalarını takip ediyor.
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
                                <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kiracı Tahliye Davası Avukatı
                                </Link>
                                <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → İzmir Kira Tespit Davası Avukatı
                                </Link>
                                <Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Sözleşmesi Fesih Sebepleri ve Hukuki Süreç
                                </Link>
                                <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Hukukunda Zorunlu Arabuluculuk Süreci
                                </Link>
                                <Link href="/kira-artis-orani-hesaplama/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    → Kira Artış Oranı Hesaplama
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Kira Hukuku Danışmanlığı İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Kira hukuku konusunda hemen randevu alın.
                                    <strong className="text-white"> Kira hukuku avukatı</strong> olarak size yardımcı olmaya hazırız.
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
