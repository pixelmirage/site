import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { articleProseClasses } from "@/lib/prose-classes";


export const metadata: Metadata = {
    title: {
        absolute: "İzmir İş Avukatı - Uzman Hukuki Danışmanlık",
    },
    description: "İzmir iş avukatı arıyorsanız avukat Mert Kağan Çetin ile iletişime geçebilirsiniz. İşe iade davası, kıdem tazminatı, iş kazası tazminatı, işçi alacakları gibi konularda size yardımcı olabiliriz.",
    keywords: ["İzmir iş avukatı", "iş avukatı İzmir", "işe iade davası avukatı İzmir", "kıdem tazminatı avukatı İzmir", "iş kazası avukatı İzmir", "işçi hakları avukatı İzmir", "mobbing avukatı İzmir", "İzmir en iyi iş avukatı", "iş mahkemesi avukatı İzmir", "iş avukatı İzmir yakınında"],
    openGraph: {
        title: "İzmir İş Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de iş hukuku, işe iade davaları ve tazminat davalarında uzman avukatlık hizmeti.",
        url: "https://mertkagancetin.com/izmir-is-avukati/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-04-17",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/izmir-is-avukati/",
    },
};

const faqs = [
    {
        question: "İş davası avukat ücreti ne kadar?",
        answer: "2026 yılında İzmir'de işe iade davalarında 35.000–55.000 TL, kıdem tazminatı davalarında 30.000–60.000 TL, iş kazası tazminatı davalarında 50.000–100.000 TL arasında ücret belirlenmektedir. Büromuzda ilk ön görüşme ücretsizdir."
    },
    {
        question: "İşe iade davası ne kadar sürer?",
        answer: "İşe iade davası ivedi yargılama usulüne tabidir. Arabuluculuk süreci dahil ortalama 3-6 ay sürer. Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurmak zorunludur."
    },
    {
        question: "Kıdem tazminatı nasıl hesaplanır?",
        answer: "Her tam çalışma yılı için brüt 30 günlük ücret üzerinden hesaplanır. Temel ücretin yanı sıra yemek, yol ve prim gibi düzenli ödemeler dahil edilir. 2026 yılı kıdem tazminatı tavanı 41.828,44 TL'dir."
    },
    {
        question: "İşten çıkarıldım, ne yapmalıyım?",
        answer: "Haksız olarak işten çıkarıldıysanız fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurmanız gerekir. Arabuluculuk anlaşmazlıkla sonuçlanırsa 2 hafta içinde işe iade davası açabilirsiniz. Bu süreleri kaçırmak hakkınızı tamamen kaybetmenize neden olur."
    },
    {
        question: "İş davalarında arabuluculuk zorunlu mu?",
        answer: "Evet, 2018'den itibaren işe iade ve işçi alacakları davalarında arabulucuya başvurmak zorunludur. Arabuluculuk süreci en fazla 3 hafta sürer. Anlaşma sağlanamazsa dava yoluna gidilir."
    },
    {
        question: "İş kazası tazminatı nasıl alınır?",
        answer: "İş kazası geçiren işçi, işverenden maddi ve manevi tazminat talep edebilir. Kazanın SGK'ya 3 iş günü içinde bildirilmesi, iş göremezlik raporu alınması ve kusur oranlarının tespiti gerekir. Zamanaşımı zararın öğrenilmesinden itibaren 2 yıldır."
    },
];

const tocItems = [
    { id: "iletisim-bilgileri", title: "İletişim" },
    { id: "is-avukatinin-onemi", title: "İş Avukatının Önemi" },
    { id: "is-davalari", title: "İş Davaları" },
    { id: "is-islerine-hangi-avukat-bakar", title: "Hangi Avukat Bakar?" },
    { id: "isci-haklari", title: "İşçi Hakları" },
    { id: "avukatlik-ucreti", title: "Avukatlık Ücreti" },
    { id: "sss", title: "SSS" },
];

export default function IzmirIsAvukatiPage() {
    return (
        <main className="bg-white">
            {/* Schema Markup */}
            <ServiceSchema
                name="İş Hukuku Danışmanlığı"
                description="İzmir'de işe iade davası, kıdem tazminatı, iş kazası tazminatı ve işçi alacakları davası hizmetleri."
                serviceType="İş Hukuku"
            />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir İş Avukatı", url: "https://mertkagancetin.com/izmir-is-avukati/" }
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
                        <span className="text-secondary">İzmir İş Avukatı</span>
                    </nav>

                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            İzmir İş Avukatı
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            <strong className="text-white">İzmir iş avukatı</strong> olarak işe iade, kıdem tazminatı, iş kazası tazminatı ve işçi alacakları davalarında hukuki hizmet sunmaktayız.
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
                            <strong>İzmir iş avukatı</strong> olarak işe iade davaları, kıdem ve ihbar tazminatı, iş kazası tazminatı ve tüm işçi alacakları davalarında İzmir genelinde hizmet vermekteyiz. İş hukuku, teknik süreleri ve ispat yükü nedeniyle uzmanlık gerektiren bir alandır.
                        </p>

                        <p>
                            Bu sebeple iş hukuku konusunda deneyimli bir <strong>İzmir iş avukatı</strong> ile çalışmak, haklarınızı zamanında ve eksiksiz talep etmeniz açısından büyük önem taşımaktadır.
                        </p>

                        {/* İletişim */}
                        <h2 id="iletisim-bilgileri" className="scroll-mt-24">İzmir İş Avukatı İletişim</h2>

                        <p>
                            İzmir&apos;de iş hukuku konusunda uzmanlaşmış avukatımız, <Link href="/blog/isten-cikarildiginda-ne-yapmali/">işten çıkarma süreçleri</Link>, <Link href="/izmir-is-avukati/ise-iade-davasi/">işe iade davaları</Link>, <Link href="/izmir-is-avukati/kidem-tazminati-davasi/">kıdem tazminatı</Link> ve iş kazası davalarında profesyonel destek sunmaktadır.
                        </p>

                        <ul>
                            <li><strong>İş Avukatı:</strong> Av. Mert Kağan Çetin</li>
                            <li><strong>Telefon:</strong> <a href="tel:+905445854645">0544 585 46 45</a></li>
                            <li><strong>Adres:</strong> Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                            <li><strong>E-posta:</strong> <a href="mailto:mertkagancetin@gmail.com">mertkagancetin@gmail.com</a></li>
                        </ul>

                        {/* İş Avukatının Önemi */}
                        <h2 id="is-avukatinin-onemi" className="scroll-mt-24">İzmir İş Avukatının Önemi</h2>

                        <p>
                            İş hukuku uyuşmazlıklarında hak düşürücü süreler çok kısadır. İşe iade davası için fesihten itibaren 1 ay içinde <Link href="/sozluk/zorunlu-arabuluculuk/">arabulucuya başvurulmalıdır</Link>. Kıdem tazminatı 5 yıllık zamanaşımına tabidir. Bu süreleri kaçırmak haklarınızı tamamen kaybetmenize neden olur.
                        </p>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak arabuluculuk sürecinden dava takibine kadar tüm aşamalarda müvekkillerimizi temsil ediyoruz. <Link href="/blog/kidem-tazminati-nasil-hesaplanir/">Kıdem tazminatı hesaplama</Link>, <Link href="/blog/ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari/">ihbar tazminatı</Link> ve <Link href="/blog/fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi/">fazla mesai alacağı</Link> gibi konularda doğru hesaplama ve etkin takip büyük önem taşır.
                        </p>

                        {/* İş Davaları */}
                        <h2 id="is-davalari" className="scroll-mt-24">İş Davaları</h2>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak iş hukukuyla ilgili aşağıdaki davalarda hizmet vermekteyiz:
                        </p>

                        <ol>
                            <li><Link href="/izmir-is-avukati/ise-iade-davasi/">İşe İade Davaları</Link></li>
                            <li><Link href="/izmir-is-avukati/kidem-tazminati-davasi/">Kıdem Tazminatı Davaları</Link></li>
                            <li><Link href="/blog/ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari/">İhbar Tazminatı Davaları</Link></li>
                            <li><Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/">İş Kazası Tazminatı Davaları</Link></li>
                            <li><Link href="/blog/fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi/">Fazla Mesai ve İşçi Alacakları Davaları</Link></li>
                            <li><Link href="/izmir-is-avukati/mobbing-davasi/">Mobbing (İşyerinde Psikolojik Taciz) Davaları</Link></li>
                        </ol>

                        {/* Hangi Avukat Bakar */}
                        <h2 id="is-islerine-hangi-avukat-bakar" className="scroll-mt-24">İş Davalarına Hangi Avukat Bakar?</h2>

                        <p>
                            İş davalarına <strong>iş hukuku avukatı</strong> bakar. 4857 sayılı İş Kanunu, Borçlar Kanunu ve Sosyal Sigortalar mevzuatı kapsamındaki uyuşmazlıklar bu avukatların uzmanlık alanına girer. <Link href="/sozluk/ise-iade-davasi/">İşe iade davaları</Link>, <Link href="/sozluk/kidem-tazminati/">kıdem tazminatı</Link> hesaplama, <Link href="/sozluk/mobbing/">mobbing</Link> tespiti ve iş kazası tazminatı talepleri iş avukatının faaliyet alanıdır.
                        </p>

                        <p>
                            İş davaları iş mahkemelerinde görülür. İş mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi iş mahkemesi sıfatıyla davaya bakar. Tüm iş davalarında dava öncesi <Link href="/sozluk/zorunlu-arabuluculuk/">zorunlu arabuluculuk</Link> şartı bulunmaktadır. <strong>İzmir iş avukatı</strong> ile çalışmak, arabuluculuk aşamasından itibaren profesyonel temsil sağlar.
                        </p>

                        {/* İşçi Hakları */}
                        <h2 id="isci-haklari" className="scroll-mt-24">İşçi Hakları ve İş Güvencesi</h2>

                        <p>
                            4857 sayılı İş Kanunu, işçileri koruyan kapsamlı düzenlemeler içerir. İşçi hakları kapsamında bilinmesi gereken temel hususlar:
                        </p>

                        <h3>İşe İade ve Kıdem Tazminatı</h3>

                        <ul>
                            <li><strong>İşe iade hakkı:</strong> <Link href="/sozluk/is-guvencesi/">İş güvencesi</Link> kapsamındaki işçiler (30+ işçili işyeri, 6 ay kıdem) haksız fesih halinde işe iade davası açabilir.</li>
                            <li><strong>Kıdem tazminatı:</strong> En az 1 yıl çalışmış işçi, haklı nedenle fesih veya işveren kaynaklı fesih halinde her yıl için 30 günlük brüt ücret alır. <Link href="/kidem-tazminati-hesaplama/">Kıdem tazminatı hesaplama</Link> aracımızla tutarınızı öğrenebilirsiniz.</li>
                            <li><strong><Link href="/sozluk/ihbar-tazminati/">İhbar tazminatı</Link>:</strong> Bildirim süresine uyulmadan yapılan fesihte karşı tarafa ödenir (2-8 haftalık ücret).</li>
                        </ul>

                        <h3>Diğer İşçi Hakları</h3>

                        <ul>
                            <li><strong>Fazla mesai:</strong> Haftalık 45 saati aşan çalışmalar için %50 zamlı ücret ödenmesi zorunludur.</li>
                            <li><strong>Yıllık izin:</strong> 1-5 yıl arası 14 gün, 5-15 yıl arası 20 gün, 15+ yıl 26 gün ücretli izin hakkı vardır.</li>
                            <li><strong><Link href="/sozluk/hakli-fesih/">Haklı fesih</Link>:</strong> SGK primlerinin eksik yatırılması, ücretin geç ödenmesi, <Link href="/sozluk/mobbing/">mobbing</Link> gibi durumlarda işçi sözleşmeyi haklı nedenle feshederek kıdem tazminatı alabilir.</li>
                            <li><strong>İş kazası:</strong> İş kazası geçiren işçi, işverenden maddi ve manevi tazminat talep edebilir. Detaylı bilgi için <Link href="/izmir-tazminat-avukati/">tazminat avukatı</Link> sayfamızı inceleyin.</li>
                        </ul>

                        {/* Avukatlık Ücreti */}
                        <h2 id="avukatlik-ucreti" className="scroll-mt-24">İş Davalarında Avukatlık Ücreti</h2>

                        <p>
                            <strong>İzmir iş avukatı</strong> olarak şeffaf fiyatlandırma politikası uyguluyoruz. 2026 yılı güncel ücret aralıklarımız:
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
                                    <td><Link href="/izmir-is-avukati/ise-iade-davasi/">İşe İade Davası</Link></td>
                                    <td>3-6 ay</td>
                                    <td>35.000 - 55.000 TL</td>
                                </tr>
                                <tr>
                                    <td><Link href="/izmir-is-avukati/kidem-tazminati-davasi/">Kıdem Tazminatı Davası</Link></td>
                                    <td>6 ay - 1.5 yıl</td>
                                    <td>30.000 - 60.000 TL</td>
                                </tr>
                                <tr>
                                    <td>İş Kazası Tazminatı</td>
                                    <td>1 - 2 yıl</td>
                                    <td>50.000 - 100.000 TL</td>
                                </tr>
                                <tr>
                                    <td>Fazla Mesai ve İşçi Alacakları</td>
                                    <td>6 ay - 1 yıl</td>
                                    <td>25.000 - 50.000 TL</td>
                                </tr>
                                <tr>
                                    <td>İş Sözleşmesi Hazırlama</td>
                                    <td>1-3 gün</td>
                                    <td>5.000 - 15.000 TL</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            Lütfen kesin fiyat bilgisi almak için <strong>iş avukatı</strong> ile <Link href="/iletisim/">iletişime geçiniz</Link>.
                        </p>

                        <hr />

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-10 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-6 py-3">
                                <p className="text-white font-bold">Yazar Hakkında</p>
                            </div>
                            <div className="p-6 flex flex-col sm:flex-row gap-5">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir İş Avukatı" title="Av. Mert Kağan Çetin - İzmir İş Avukatı" width={96} height={96} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-bold text-primary mb-1">Av. Mert Kağan Çetin</p>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        İzmir Barosu&apos;na kayıtlı avukat. 2019 yılından bu yana iş, kira, boşanma ve tazminat hukuku alanlarında hizmet vermektedir.
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
                        <h2>İş Hukuku Makaleleri</h2>

                        <ul>
                            <li><Link href="/blog/isten-cikarildiginda-ne-yapmali/">İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi</Link></li>
                            <li><Link href="/blog/kidem-tazminati-nasil-hesaplanir/">Kıdem Tazminatı Nasıl Hesaplanır?</Link></li>
                            <li><Link href="/blog/is-kazasi-tazminati-sureci-ve-haklariniz/">İş Kazası Tazminatı Süreci ve Haklarınız</Link></li>
                            <li><Link href="/blog/ise-iade-davasi-sartlari-ve-arabuluculuk-sureci/">İşe İade Davası Şartları ve Arabuluculuk Süreci</Link></li>
                            <li><Link href="/blog/ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari/">İhbar Tazminatı Hesaplama ve Hak Kazanma Şartları</Link></li>
                            <li><Link href="/blog/fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi/">Fazla Mesai Ücreti Alacağı: İspat ve Zamanaşımı</Link></li>
                        </ul>

                        <p>
                            İş hukukunu ilgilendiren her türlü sorununuza ilişkin hukuki danışmanlık almak için <strong>İzmir iş avukatı</strong> ile <Link href="/iletisim/">iletişime geçebilirsiniz</Link>.
                        </p>

                        {/* İletişim CTA */}
                        <div className="not-prose scroll-mt-24 my-12">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-2xl p-8 md:p-10">
                                <p className="text-2xl font-playfair font-bold mb-3">İzmir İş Avukatı ile Görüşün</p>
                                <p className="text-slate-300 mb-6">
                                    İş davalarınız için hemen randevu alın.
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
                            <p className="text-xl font-playfair font-bold text-primary mb-6">İş Hukuku Uzmanlık Alanlarımız</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { title: "İşe İade Davası", desc: "Haksız fesih halinde işe iade ve arabuluculuk süreci", url: "/izmir-is-avukati/ise-iade-davasi/" },
                                    { title: "Kıdem Tazminatı Davası", desc: "Kıdem tazminatı hesaplama ve dava süreci", url: "/izmir-is-avukati/kidem-tazminati-davasi/" },
                                    { title: "Mobbing Davası", desc: "İşyerinde psikolojik taciz ve tazminat davaları", url: "/izmir-is-avukati/mobbing-davasi/" },
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
