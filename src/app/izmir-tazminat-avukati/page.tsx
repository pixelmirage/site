import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { articleProseClasses } from "@/lib/prose-classes";


export const metadata: Metadata = {
    title: {
        absolute: "İzmir Tazminat Avukatı - Uzman Hukuki Danışmanlık",
    },
    description: "İzmir tazminat avukatı arıyorsanız Av. Mert Kağan Çetin ile iletişime geçin. Maddi-manevi tazminat, iş kazası, trafik kazası ve malpraktis davalarında uzman destek.",
    keywords: ["İzmir tazminat avukatı", "tazminat avukatı İzmir", "maddi tazminat avukatı İzmir", "manevi tazminat avukatı İzmir", "iş kazası avukatı İzmir", "trafik kazası avukatı İzmir", "malpraktis avukatı İzmir", "İzmir en iyi tazminat avukatı", "destekten yoksun kalma avukatı İzmir"],
    openGraph: {
        title: "İzmir Tazminat Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de maddi ve manevi tazminat, iş kazası ve trafik kazası tazminatı davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-tazminat-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-04-17",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-tazminat-avukati/",
    },
};

const faqs = [
    {
        question: "Tazminat davası avukat ücreti ne kadar?",
        answer: "2026 yılında İzmir'de trafik kazası tazminatı davalarında 40.000–80.000 TL, iş kazası tazminatı davalarında 50.000–100.000 TL, malpraktis davalarında 60.000–120.000 TL arasında ücret belirlenmektedir. Bazı davalarda nispi ücret (tazminat miktarının %10-25'i) de uygulanabilir."
    },
    {
        question: "Maddi tazminat nasıl hesaplanır?",
        answer: "Maddi tazminat, zarar görenin uğradığı gerçek mali kayıp üzerinden hesaplanır. Tedavi giderleri, iş gücü kaybı, kazanç kaybı ve gelecekte doğacak zararlar dahil edilir. Bilirkişi raporu ile kesin miktar belirlenir."
    },
    {
        question: "Manevi tazminat miktarı nasıl belirlenir?",
        answer: "Manevi tazminat miktarı hakimin takdirine bağlıdır. Olayın ağırlığı, kusurun derecesi, tarafların sosyal ve ekonomik durumları değerlendirilir. Zenginleşmeye yol açmayacak ancak caydırıcı bir miktar belirlenir."
    },
    {
        question: "Trafik kazasında tazminat nasıl alınır?",
        answer: "Trafik kazasında yaralanan veya yakınını kaybeden kişiler, kusurlu sürücüden ve sigorta şirketinden tazminat talep edebilir. Önce sigorta şirketine başvuru, ardından Sigorta Tahkim Komisyonu veya dava yoluna gidilir."
    },
    {
        question: "Tazminat davası ne kadar sürer?",
        answer: "Tazminat davasının süresi türüne göre değişir. Basit maddi tazminat davaları 6 ay - 1 yıl, iş kazası tazminatı 1-2 yıl, trafik kazası davaları 1-3 yıl sürebilmektedir. Sigorta tahkim komisyonu başvuruları genellikle 4-6 ayda sonuçlanır."
    },
    {
        question: "Malpraktis (doktor hatası) tazminatı alınabilir mi?",
        answer: "Evet, tıbbi müdahale sırasında yapılan hata sonucu zarara uğrayan hastalar, hekim ve/veya hastaneden maddi ve manevi tazminat talep edebilir. Bilirkişi raporu ile tıbbi hatanın varlığı ve nedensellik bağı tespit edilmelidir."
    },
];

const tocItems = [
    { id: "iletisim-bilgileri", title: "İletişim" },
    { id: "tazminat-avukatinin-onemi", title: "Tazminat Avukatının Önemi" },
    { id: "tazminat-davalari", title: "Tazminat Davaları" },
    { id: "tazminat-islerine-hangi-avukat-bakar", title: "Hangi Avukat Bakar?" },
    { id: "tazminat-turleri", title: "Tazminat Türleri" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "sss", title: "SSS" },
];

export default function IzmirTazminatAvukatiPage() {
    return (
        <main className="bg-white">
            {/* Schema Markup */}
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Tazminat Avukatı", url: "https://mertkagancetin.com/izmir-tazminat-avukati/" }
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">İzmir Tazminat Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir Tazminat Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong className="text-white">İzmir tazminat avukatı</strong> olarak maddi-manevi tazminat, iş kazası, trafik kazası ve malpraktis davalarında hukuki hizmet sunmaktayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <a href="tel:+905445854645">
                                    <Phone className="w-5 h-5" />
                                    Hemen Arayın
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                    WhatsApp ile Yazın
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 bg-slate-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">İçindekiler</p>
                        <nav className="flex flex-wrap gap-3">
                            {tocItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-sm text-primary hover:text-secondary font-medium transition-colors"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className={`max-w-3xl mx-auto ${articleProseClasses}`}>

                        {/* Giriş */}
                        <p>
                            <strong>İzmir tazminat avukatı</strong> olarak maddi ve manevi tazminat davalarında, iş kazası, trafik kazası, malpraktis ve destekten yoksun kalma davalarında İzmir genelinde hizmet vermekteyiz. Tazminat davaları, doğru hesaplama ve etkin takip gerektiren teknik davalardır.
                        </p>

                        <p>
                            Bu sebeple tazminat hukuku konusunda deneyimli bir <strong>İzmir tazminat avukatı</strong> ile çalışmak, hak ettiğiniz tazminatı tam ve zamanında almanız açısından büyük önem taşımaktadır.
                        </p>

                        {/* İletişim */}
                        <h2 id="iletisim-bilgileri" className="scroll-mt-24">İzmir Tazminat Avukatı İletişim</h2>

                        <p>
                            İzmir&apos;de tazminat hukuku konusunda uzmanlaşmış avukatımız, <Link href="/blog/trafik-kazasi-tazminati-alma-sureci/">trafik kazası tazminatı</Link>, <Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/">iş kazası tazminatı</Link>, <Link href="/izmir-tazminat-avukati/malpraktis-davasi/">malpraktis davaları</Link> ve <Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/">destekten yoksun kalma</Link> davalarında profesyonel destek sunmaktadır.
                        </p>

                        <ul>
                            <li><strong>Tazminat Avukatı:</strong> Av. Mert Kağan Çetin</li>
                            <li><strong>Telefon:</strong> <a href="tel:+905445854645">0544 585 46 45</a></li>
                            <li><strong>Adres:</strong> Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                            <li><strong>E-posta:</strong> <a href="mailto:mertkagancetin@gmail.com">mertkagancetin@gmail.com</a></li>
                        </ul>

                        {/* Tazminat Avukatının Önemi */}
                        <h2 id="tazminat-avukatinin-onemi" className="scroll-mt-24">İzmir Tazminat Avukatının Önemi</h2>

                        <p>
                            Tazminat davaları, zarar hesaplama, kusur oranı tespiti ve bilirkişi raporları gibi teknik konuları içerir. <strong>Tazminat avukatı</strong>nın desteğiyle doğru tazminat miktarını hesaplarsınız. Sigorta şirketleriyle müzakerelerde profesyonel temsil alırsınız ve zamanaşımı sürelerini kaçırmazsınız.
                        </p>

                        <p>
                            <strong>İzmir tazminat avukatı</strong> olarak müvekkillerimizin hak ettikleri tazminatı tam olarak almaları için titizlikle çalışıyoruz. <Link href="/blog/maddi-ve-manevi-tazminat-davasi-farklari/">Maddi ve manevi tazminat</Link> hesaplaması, <Link href="/blog/sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati/">sigorta tahkim komisyonu</Link> başvuruları ve dava takibi konularında kapsamlı hizmet sunuyoruz.
                        </p>

                        {/* Tazminat Davaları */}
                        <h2 id="tazminat-davalari" className="scroll-mt-24">Tazminat Davaları</h2>

                        <p>
                            <strong>İzmir tazminat avukatı</strong> olarak aşağıdaki tazminat davalarında hizmet vermekteyiz:
                        </p>

                        <ol>
                            <li><Link href="/blog/maddi-ve-manevi-tazminat-davasi-farklari/">Maddi ve Manevi Tazminat Davaları</Link></li>
                            <li><Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/">Trafik Kazası Tazminatı Davaları</Link></li>
                            <li><Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/">İş Kazası Tazminatı Davaları</Link></li>
                            <li><Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/">Destekten Yoksun Kalma Tazminatı Davaları</Link></li>
                            <li><Link href="/izmir-tazminat-avukati/malpraktis-davasi/">Malpraktis (Doktor Hatası) Tazminatı Davaları</Link></li>
                            <li><Link href="/blog/is-goremezlik-raporu-ve-maluliyet-tazminati-davasi/">İş Göremezlik ve Maluliyet Tazminatı Davaları</Link></li>
                        </ol>

                        {/* Hangi Avukat Bakar */}
                        <h2 id="tazminat-islerine-hangi-avukat-bakar" className="scroll-mt-24">Tazminat Davalarına Hangi Avukat Bakar?</h2>

                        <p>
                            Tazminat davalarına <strong>borçlar hukuku ve haksız fiil alanında uzmanlaşmış avukatlar</strong> bakar. Trafik kazası tazminatında sigorta hukuku bilgisi, iş kazası tazminatında iş hukuku bilgisi, malpraktis davalarında sağlık hukuku bilgisi gerekir.
                        </p>

                        <p>
                            Tazminat davaları asliye hukuk mahkemelerinde görülür. Trafik kazası davalarında ayrıca <Link href="/blog/sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati/">Sigorta Tahkim Komisyonu</Link>&apos;na başvuru da mümkündür. İş kazası tazminatı davaları ise iş mahkemelerinde görülür. <strong>İzmir tazminat avukatı</strong> olarak davanın türüne göre en uygun hukuki yolu belirleyerek müvekkillerimizi temsil ediyoruz.
                        </p>

                        {/* Tazminat Türleri */}
                        <h2 id="tazminat-turleri" className="scroll-mt-24">Tazminat Türleri</h2>

                        <h3>1. Maddi Tazminat</h3>

                        <p>
                            Zarar görenin uğradığı gerçek mali kayıp üzerinden hesaplanan tazminattır. Tedavi giderleri, iş gücü kaybı, kazanç kaybı ve gelecekte doğacak zararlar dahil edilir.
                        </p>

                        <h3>2. Manevi Tazminat</h3>

                        <p>
                            Haksız fiil sonucu yaşanan acı, elem ve ıstırap için talep edilen tazminattır. Miktar hakimin takdirine bağlıdır. Olayın ağırlığı, kusur derecesi ve tarafların durumu değerlendirilir.
                        </p>

                        <h3>3. Trafik Kazası Tazminatı</h3>

                        <p>
                            Trafik kazasında yaralanan veya yakınını kaybeden kişiler, kusurlu sürücüden ve sigorta şirketinden tazminat talep edebilir. Zorunlu trafik sigortası (ZMSS) ve ihtiyari mali mesuliyet sigortası kapsamında başvuru yapılabilir. Detaylı bilgi için <Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/">trafik kazası tazminatı</Link> sayfamızı inceleyin.
                        </p>

                        <h3>4. İş Kazası Tazminatı</h3>

                        <p>
                            İş kazası geçiren işçi, işverenden maddi ve manevi tazminat talep edebilir. Kazanın SGK&apos;ya bildirilmesi, iş göremezlik raporu alınması ve kusur oranlarının tespiti gerekir. Zamanaşımı süresi zararın öğrenilmesinden itibaren 2 yıl, kazadan itibaren 10 yıldır.
                        </p>

                        <h3>5. Destekten Yoksun Kalma Tazminatı</h3>

                        <p>
                            Bir kişinin ölümü nedeniyle onun desteğinden yoksun kalan yakınlarının talep ettiği tazminattır. Eş, çocuklar ve bakmakla yükümlü olunan kişiler bu tazminatı talep edebilir. Detaylı bilgi için <Link href="/blog/destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci/">destekten yoksun kalma tazminatı</Link> yazımızı inceleyin.
                        </p>

                        <h3>6. Zamanaşımı Süreleri</h3>

                        <ul>
                            <li><strong>Haksız fiil:</strong> Zararın öğrenilmesinden itibaren 2 yıl, her halükarda 10 yıl</li>
                            <li><strong>İş kazası:</strong> Zararın öğrenilmesinden itibaren 2 yıl, kazadan itibaren 10 yıl</li>
                            <li><strong>Trafik kazası:</strong> Zararın öğrenilmesinden itibaren 2 yıl, fiilden itibaren 10 yıl</li>
                            <li><strong>Malpraktis:</strong> Zararın öğrenilmesinden itibaren 5 yıl (sözleşmesel sorumluluk)</li>
                        </ul>

                        {/* Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">Tazminat Davalarında Avukatlık Ücreti</h2>

                        <p>
                            <strong>İzmir tazminat avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz. 2026 yılı güncel ücret aralıklarımız:
                        </p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Dava Türü</th>
                                    <th>Süre (Ortalama)</th>
                                    <th>Ücret Aralığı</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link href="/izmir-tazminat-avukati/trafik-kazasi-tazminati/">Trafik Kazası Tazminatı</Link></td>
                                    <td>1 - 3 yıl</td>
                                    <td>40.000 - 80.000 TL</td>
                                </tr>
                                <tr>
                                    <td>İş Kazası Tazminatı</td>
                                    <td>1 - 2 yıl</td>
                                    <td>50.000 - 100.000 TL</td>
                                </tr>
                                <tr>
                                    <td><Link href="/izmir-tazminat-avukati/malpraktis-davasi/">Malpraktis Davası</Link></td>
                                    <td>1 - 3 yıl</td>
                                    <td>60.000 - 120.000 TL</td>
                                </tr>
                                <tr>
                                    <td><Link href="/izmir-tazminat-avukati/destekten-yoksun-kalma/">Destekten Yoksun Kalma</Link></td>
                                    <td>1 - 2 yıl</td>
                                    <td>50.000 - 100.000 TL</td>
                                </tr>
                                <tr>
                                    <td>Maddi-Manevi Tazminat</td>
                                    <td>6 ay - 2 yıl</td>
                                    <td>30.000 - 80.000 TL</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            Lütfen kesin fiyat bilgisi almak için <strong>tazminat avukatı</strong> ile <Link href="/iletisim/">iletişime geçiniz</Link>.
                        </p>

                        <hr />

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-10 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-6 py-3">
                                <p className="text-white font-bold">Yazar Hakkında</p>
                            </div>
                            <div className="p-6 flex flex-col sm:flex-row gap-5">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Tazminat Avukatı" title="Av. Mert Kağan Çetin - İzmir Tazminat Avukatı" width={96} height={96} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-bold text-primary mb-1">Av. Mert Kağan Çetin</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        İzmir Barosu&apos;na kayıtlı avukat. 2019 yılından bu yana tazminat, kira, iş ve boşanma hukuku alanlarında hizmet vermektedir.
                                    </p>
                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
                                        <span>İzmir Barosu Sicil: 15556</span>
                                        <span>TBB Sicil: 162439</span>
                                    </div>
                                    <Link href="/hakkimda/" className="inline-block mt-3 text-secondary font-bold text-sm hover:text-primary transition-colors">
                                        Detaylı Özgeçmiş →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Google Reviews */}
                        <div className="not-prose">
                            <GoogleReviews />
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İlgili Makaleler */}
                        <h2>Tazminat Hukuku Makaleleri</h2>

                        <ul>
                            <li><Link href="/blog/maddi-ve-manevi-tazminat-davasi-farklari/">Maddi ve Manevi Tazminat Davası Farkları</Link></li>
                            <li><Link href="/blog/trafik-kazasi-tazminati-alma-sureci/">Trafik Kazası Tazminatı Alma Süreci</Link></li>
                            <li><Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/">İş Kazası Tazminatı Süreci ve Haklarınız</Link></li>
                            <li><Link href="/blog/malpraktis-davasi-doktor-hatasi-tazminati/">Malpraktis Davası: Doktor Hatası Tazminatı</Link></li>
                            <li><Link href="/blog/destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci/">Destekten Yoksun Kalma Tazminatı Hesaplama</Link></li>
                            <li><Link href="/blog/sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati/">Sigorta Tahkim Komisyonu Başvurusu</Link></li>
                            <li><Link href="/blog/is-goremezlik-raporu-ve-maluliyet-tazminati-davasi/">İş Göremezlik Raporu ve Maluliyet Tazminatı</Link></li>
                        </ul>

                        <p>
                            Tazminat hukukunu ilgilendiren her türlü sorununuza ilişkin hukuki danışmanlık almak için <strong>İzmir tazminat avukatı</strong> ile <Link href="/iletisim/">iletişime geçebilirsiniz</Link>.
                        </p>

                        {/* İletişim CTA */}
                        <div className="not-prose scroll-mt-24 my-12">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-2xl p-8 md:p-10">
                                <p className="text-2xl font-playfair font-bold mb-3">İzmir Tazminat Avukatı ile Görüşün</p>
                                <p className="text-slate-300 mb-6">
                                    Tazminat davalarınız için hemen randevu alın.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 mb-6 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-secondary" />
                                        <a href="tel:+905445854645" className="font-bold hover:text-secondary transition-colors">0544 585 46 45</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-secondary" />
                                        <a href="mailto:mertkagancetin@gmail.com" className="font-bold hover:text-secondary transition-colors">mertkagancetin@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-secondary" />
                                        <span className="font-bold">Bayraklı, İzmir</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                        <Link href="/iletisim/">
                                            Randevu Alın <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="!bg-transparent border-white text-white hover:bg-white hover:text-primary gap-2" asChild>
                                        <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">
                                            WhatsApp ile Yazın
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Uzmanlık Alanları Alt Sayfalar */}
                        <div className="not-prose my-12">
                            <p className="text-xl font-playfair font-bold text-primary mb-6">Tazminat Hukuku Uzmanlık Alanlarımız</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "Trafik Kazası Tazminatı", desc: "Trafik kazası sonrası maddi ve manevi tazminat davaları", url: "/izmir-tazminat-avukati/trafik-kazasi-tazminati/" },
                                    { title: "Malpraktis Davası", desc: "Doktor hatası ve tıbbi uygulama hataları tazminatı", url: "/izmir-tazminat-avukati/malpraktis-davasi/" },
                                    { title: "Destekten Yoksun Kalma", desc: "Ölüm nedeniyle destekten yoksun kalma tazminatı", url: "/izmir-tazminat-avukati/destekten-yoksun-kalma/" },
                                ].map((item, i) => (
                                    <Link key={i} href={item.url} className="group block p-5 bg-slate-50 border border-slate-200 rounded-xl hover:border-secondary transition-all">
                                        <p className="font-bold text-primary group-hover:text-secondary transition-colors mb-1">{item.title}</p>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </main>
    );
}
