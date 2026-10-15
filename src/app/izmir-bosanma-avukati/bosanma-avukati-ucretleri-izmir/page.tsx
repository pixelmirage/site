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
    title: "Boşanma Avukatı Ücreti Nasıl Belirlenir? İzmir",
    description: "İzmir'de boşanma davalarında avukatlık ücretinin nasıl belirlendiği: yazılı ücret sözleşmesi, Avukatlık Asgari Ücret Tarifesi, karşı vekalet ücreti ve yargılama giderleri.",
    openGraph: {
        images: ["/og-image.jpg"],
        title: "Boşanma Avukatı Ücreti Nasıl Belirlenir? | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanma davalarında avukatlık ücretinin nasıl belirlendiği: yazılı ücret sözleşmesi, Avukatlık Asgari Ücret Tarifesi, karşı vekalet ücreti ve yargılama giderleri.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-10-15" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/" },
};

const faqs = [
    {
        question: "Boşanma avukatı ücreti nasıl belirlenir?",
        answer: "Avukatlık ücreti; davanın türü, kapsamı, işin gerektirdiği emek ve süre dikkate alınarak avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır (Avukatlık Kanunu m. 163-164). Kararlaştırılan ücret, Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Somut dosyaya ilişkin ücret bilgisi, belgeler incelendikten sonra ön görüşmede verilir."
    },
    {
        question: "Anlaşmalı boşanmada ücret neye göre değişir?",
        answer: "Anlaşmalı boşanmada ücret; protokolün kapsamına (velayet, nafaka, mal paylaşımı düzenlemeleri), dava dilekçesi ve duruşma takibi gibi yapılacak işlere göre yazılı ücret sözleşmesiyle belirlenir. Ücret, Avukatlık Asgari Ücret Tarifesi'nin altında olamaz."
    },
    {
        question: "Ön görüşme nasıl yapılır?",
        answer: "Ön görüşmeler telefonla yapılır. Görüşmede dosyanın kapsamı, izlenecek hukuki yol ve ücretin hangi esaslara göre belirleneceği açıklanır."
    },
    {
        question: "Boşanma dava masraflarını kim öder?",
        answer: "Harç, tebligat, bilirkişi ve keşif giderleri gibi yargılama giderleri davayı açan tarafça peşin olarak yatırılır. Dava sonunda mahkeme, yargılama giderlerini ve tarifeye göre belirlenen karşı vekalet ücretini kural olarak aleyhine hüküm verilen tarafa yükler (HMK m. 326). Harç tutarları Harçlar Kanunu tarifesine göre her yıl yeniden belirlenir."
    },
    {
        question: "Avukatlık ücretinin ödeme koşulları nasıl belirlenir?",
        answer: "Ücretin tutarı ve ödeme koşulları, avukat ile müvekkil arasında yapılan yazılı ücret sözleşmesinde açıkça düzenlenir."
    }
];

const tocItems = [
    { id: "ucret-nasil-belirlenir", title: "Ücret Nasıl Belirlenir?" },
    { id: "ucreti-etkileyen-faktorler", title: "Ücreti Etkileyen Faktörler" },
    { id: "dava-masraflari", title: "Dava Masrafları" },
    { id: "on-gorusme", title: "Ön Görüşme" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function BosanmaAvukatiUcretleriIzmirPage() {
    return (
        <div className="bg-white">
            <ServiceSchema name="Boşanma Hukuku Danışmanlığı" description="İzmir'de boşanma hukuku alanında avukatlık ve danışmanlık hizmeti." serviceType="Boşanma Hukuku Danışmanlığı" />
            <PersonSchema knowsAbout={["Boşanma Avukatı Ücretleri", "Avukatlık Ücret Tarifesi", "Boşanma Davası Masrafları", "İzmir Barosu Ücret Tarifesi", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Boşanma Avukatı Ücretleri İzmir", url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/" }
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home className="w-4 h-4" />Ana Sayfa</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/izmir-bosanma-avukati/" className="hover:text-white transition-colors">İzmir Boşanma Avukatı</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Boşanma Avukatı Ücretleri İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Boşanma Avukatı Ücreti Nasıl Belirlenir?
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de boşanma davalarında avukatlık ücretinin belirlenme esasları ve yargılama giderleri hakkında genel bilgi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" asChild>
                                <Link href="/iletisim/"><Phone className="w-5 h-5" />İletişime Geçin</Link>
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
                            <strong>İzmir boşanma avukatı ücreti</strong>, davanın türüne, kapsamına ve gerektirdiği emeğe göre yazılı ücret sözleşmesiyle belirlenir. Bu sayfada ücretin hangi esaslara göre belirlendiğini ve yargılama giderlerini genel hatlarıyla açıklıyoruz; ücret tutarı paylaşılmamaktadır.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 15 Ekim 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <h2 id="ucret-nasil-belirlenir" className="scroll-mt-24">Boşanma Avukatı Ücreti Nasıl Belirlenir?</h2>

                        <p>
                            Avukatlık ücreti, Avukatlık Kanunu m. 163-164 uyarınca avukat ile müvekkil arasında yazılı ücret sözleşmesiyle kararlaştırılır. Kararlaştırılan ücret, Türkiye Barolar Birliği tarafından her yıl yayımlanan <strong>Avukatlık Asgari Ücret Tarifesi</strong>&apos;nin altında olamaz. Avukatlık Kanunu m. 164 uyarınca avukatlık ücreti, dava veya hükmolunacak şeyin değerinin yüzde yirmi beşini geçemez.
                        </p>

                        <p>
                            Somut dosyaya ilişkin ücret bilgisi, belgeler incelendikten sonra ön görüşmede verilir. Birden fazla talebin (boşanma, <Link href="/izmir-bosanma-avukati/velayet-davasi/">velayet</Link>, <Link href="/izmir-bosanma-avukati/nafaka-davasi/">nafaka</Link>, mal paylaşımı) birlikte yürütülüp yürütülmeyeceği de ücret sözleşmesinde belirtilir.
                        </p>

                        <h2 id="ucreti-etkileyen-faktorler" className="scroll-mt-24">Ücreti Etkileyen Faktörler</h2>

                        <p>
                            Ücretin belirlenmesinde rol oynayan başlıca unsurlar şunlardır:
                        </p>

                        <ul>
                            <li><strong>Dava türü:</strong> <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> ile çekişmeli boşanma arasında yapılacak iş ve duruşma sayısı farklıdır.</li>
                            <li><strong>Davanın kapsamı:</strong> Mal varlığının niteliği, yurt dışı bağlantısı veya uyuşmazlık konularının sayısı yapılacak işi etkiler.</li>
                            <li><strong>Yargılamanın seyri:</strong> Delil toplama, tanık ve bilirkişi incelemesi gerektiren dosyalarda iş yükü artar.</li>
                            <li><strong>Dava değeri:</strong> Tazminat ve mal paylaşımı taleplerinin miktarı ücretin belirlenmesinde dikkate alınabilir.</li>
                            <li><strong>Ek talepler:</strong> Velayet, nafaka, tazminat veya mal paylaşımı talepleri ücret sözleşmesinin kapsamını değiştirir.</li>
                        </ul>

                        <SectionCTA text="Ücretin belirlenme esasları ön görüşmede açıklanır. Ön görüşmeler telefonla yapılır." />

                        <h2 id="dava-masraflari" className="scroll-mt-24">Dava Masrafları</h2>

                        <p>
                            Boşanma davasında avukatlık ücreti dışında harç, tebligat, bilirkişi, keşif ve tanık giderleri gibi yargılama giderleri bulunur. Bu giderler davayı açan tarafça peşin olarak yatırılır; dava sonunda mahkeme yargılama giderlerini kural olarak aleyhine hüküm verilen tarafa yükler (HMK m. 326). Harç tutarları Harçlar Kanunu tarifesine göre her yıl yeniden belirlenir.
                        </p>

                        <ul>
                            <li><strong>Harçlar:</strong> Başvurma ve karar harcı gibi kalemler.</li>
                            <li><strong>Tebligat giderleri:</strong> Dava dilekçesinin ve duruşma davetiyelerinin tebliği.</li>
                            <li><strong>Bilirkişi ve keşif giderleri:</strong> Mal paylaşımı veya gelir tespiti gibi incelemeler.</li>
                            <li><strong>Tanık giderleri:</strong> Tanıkların duruşmaya çağrılmasına ilişkin giderler.</li>
                        </ul>

                        <p>
                            Yargılama giderlerini karşılama gücü bulunmayan kişiler, koşulları varsa adli yardım talep edebilir (HMK m. 334 vd.).
                        </p>

                        <h2 id="on-gorusme" className="scroll-mt-24">Ön Görüşme</h2>

                        <p>
                            Ön görüşmeler telefonla yapılır. Görüşmede mevcut durum ve hukuki seçenekler değerlendirilir; izlenecek yol ve ücretin hangi esaslara göre belirleneceği açıklanır. Dava sonucu hakkında herhangi bir taahhütte bulunulmaz.
                        </p>

                        <p>
                            İletişim için <Link href="/iletisim/">iletişim sayfamızı</Link> ziyaret edebilir veya 0544 585 46 45 numaralı telefonu arayabilirsiniz.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Boşanma Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Boşanma Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Boşanma davaları, nafaka, velayet ve mal paylaşımı uyuşmazlıklarında avukatlık hizmeti vermektedir.
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
                                <Link href="/izmir-bosanma-avukati/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &larr; İzmir Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/velayet-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Velayet Davası Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Boşanmada Mal Paylaşımı: Edinilmiş Mallara Katılma Rejimi
                                </Link>
                                <Link href="/iletisim/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İletişim ve Randevu
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Boşanma Davanız İçin İletişim</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Ön görüşmeler telefonla yapılır.
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
        </div>
    );
}
