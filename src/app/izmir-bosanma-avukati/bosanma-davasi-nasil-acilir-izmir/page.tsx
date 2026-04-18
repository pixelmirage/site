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
    title: "Boşanma Davası Nasıl Açılır? İzmir | Boşanma Avukatı",
    description: "İzmir'de boşanma davası nasıl açılır? Dava açma şartları, gerekli belgeler, yetkili mahkeme, süreç ve masraflar hakkında kapsamlı rehber. Av. Mert Kağan Çetin.",
    keywords: ["boşanma davası nasıl açılır", "boşanma davası açma şartları", "boşanma davası İzmir", "boşanma dilekçesi", "boşanma davası gerekli belgeler"],
    openGraph: {
        title: "Boşanma Davası Nasıl Açılır? İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de boşanma davası açma rehberi: şartlar, gerekli belgeler, yetkili mahkeme, dava süreci ve masraflar hakkında detaylı bilgi.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-davasi-nasil-acilir-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-davasi-nasil-acilir-izmir/" },
};

const faqs = [
    {
        question: "Boşanma davası açmak için ne kadar süre evli olmak gerekir?",
        answer: "Çekişmeli boşanma davası için herhangi bir süre şartı yoktur; evliliğin ilk gününden itibaren özel boşanma sebeplerine dayanılarak dava açılabilir. Ancak anlaşmalı boşanma için TMK m. 166/3 uyarınca evliliğin en az 1 yıl sürmüş olması şarttır. 1 yıllık süre nikah tarihinden itibaren hesaplanır."
    },
    {
        question: "Boşanma davası hangi mahkemede açılır?",
        answer: "Boşanma davası aile mahkemesinde açılır. Yetkili mahkeme, eşlerden birinin yerleşim yeri veya davadan önce son 6 ay birlikte oturdukları yer mahkemesidir (TMK m. 168). İzmir'de Bayraklı, Karşıyaka, Bornova, Konak ve Çiğli adliyelerinde aile mahkemeleri bulunmaktadır."
    },
    {
        question: "Boşanma davası için hangi belgeler gerekir?",
        answer: "Boşanma davası için gerekli belgeler: nüfus cüzdanı fotokopisi, evlilik cüzdanı fotokopisi veya nüfus kayıt örneği, varsa deliller (mesajlar, fotoğraflar, raporlar), tanık listesi ve dava dilekçesidir. Anlaşmalı boşanmada ayrıca tarafların imzaladığı anlaşmalı boşanma protokolü gerekir."
    },
    {
        question: "Boşanma davası açmak ne kadar tutar?",
        answer: "2026 yılında boşanma davası açma masrafları; mahkeme harcı, başvurma harcı, vekalet pulu ve tebligat giderleri olarak toplam yaklaşık 3.000-5.000 TL arasında değişmektedir. Bunun dışında avukatlık ücreti, bilirkişi ücreti ve ek tebligat giderleri ayrıca hesaplanır. Anlaşmalı boşanmada masraflar daha düşük, çekişmeli boşanmada ise duruşma sayısına göre artabilir."
    },
    {
        question: "Eşim boşanmayı kabul etmezse ne olur?",
        answer: "Eşiniz boşanmayı kabul etmese dahi çekişmeli boşanma davası açabilirsiniz. TMK m. 161-166 arasındaki özel veya genel boşanma sebeplerine dayanarak dava açmanız yeterlidir. Mahkeme, sunulan delilleri ve tanık ifadelerini değerlendirerek boşanma kararı verebilir. Karşı tarafın rızası şart değildir; hakim evlilik birliğinin temelinden sarsıldığına kanaat getirirse boşanmaya hükmedecektir."
    }
];

const tocItems = [
    { id: "bosanma-davasi-sartlari", title: "Boşanma Davası Şartları" },
    { id: "gerekli-belgeler", title: "Gerekli Belgeler" },
    { id: "yetkili-mahkeme", title: "Yetkili Mahkeme" },
    { id: "dava-sureci", title: "Dava Açma Süreci" },
    { id: "dava-masraflari", title: "Dava Masrafları" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function BosanmaDavasiNasilAcilirIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Boşanma Davası Açma Danışmanlığı" description="İzmir'de boşanma davası açma sürecinde dilekçe hazırlama, belge toplama ve dava takibi hizmeti." serviceType="Boşanma Davası Danışmanlığı" />
            <PersonSchema knowsAbout={["Boşanma Davası", "Dava Dilekçesi", "Boşanma Süreci", "Aile Mahkemesi", "Aile Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Boşanma Davası Nasıl Açılır?", url: "https://mertkagancetin.com/izmir-bosanma-avukati/bosanma-davasi-nasil-acilir-izmir/" }
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
                        <span className="text-secondary">Boşanma Davası Nasıl Açılır?</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Boşanma Davası Nasıl Açılır?
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de boşanma davası açma şartları, gerekli belgeler, yetkili mahkeme ve dava süreci hakkında kapsamlı rehber.
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
                            <strong>İzmir boşanma avukatı</strong> olarak boşanma davası açma sürecinde dava dilekçesi hazırlama, belge toplama, yetkili mahkeme belirleme ve dava takibi konularında kapsamlı hukuki destek sunuyoruz. Bu rehberde boşanma davası açmak için bilmeniz gereken her şeyi adım adım açıklıyoruz.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Boşanma davası, evlilik birliğini sona erdirmek isteyen eşlerden birinin veya her ikisinin birlikte aile mahkemesine başvurmasıyla başlayan hukuki süreçtir. Türk Medeni Kanunu&apos;nun 161-184. maddeleri arasında düzenlenen boşanma hükümlerine göre dava, anlaşmalı veya çekişmeli olarak açılabilir. Her iki dava türünün kendine özgü şartları, süreci ve sonuçları bulunmaktadır.
                        </p>

                        <h2 id="bosanma-davasi-sartlari" className="scroll-mt-24">Boşanma Davası Açma Şartları</h2>

                        <p>
                            Boşanma davası açabilmek için TMK&apos;da belirtilen boşanma sebeplerinden en az birinin mevcut olması gerekir. Boşanma sebepleri genel ve özel sebepler olmak üzere ikiye ayrılır:
                        </p>

                        <div className="not-prose overflow-x-auto my-8">
                            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="text-left p-4 font-semibold">Dava Türü</th>
                                        <th className="text-left p-4 font-semibold">Şartlar</th>
                                        <th className="text-left p-4 font-semibold">Süre</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr className="bg-white"><td className="p-4 font-medium">Anlaşmalı Boşanma</td><td className="p-4">En az 1 yıl evli olma, tarafların birlikte başvurusu veya birinin açtığı davanın diğerince kabulü, protokol</td><td className="p-4">1-3 ay</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Çekişmeli Boşanma (Genel)</td><td className="p-4">Evlilik birliğinin temelinden sarsılması (TMK m. 166)</td><td className="p-4">1-3 yıl</td></tr>
                                    <tr className="bg-white"><td className="p-4 font-medium">Çekişmeli Boşanma (Özel)</td><td className="p-4">Zina, hayata kast, terk, suç işleme, akıl hastalığı (TMK m. 161-165)</td><td className="p-4">1-2 yıl</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> için evliliğin en az 1 yıl sürmüş olması ve tarafların boşanmanın tüm sonuçları üzerinde anlaşmış olması gerekir. <Link href="/izmir-bosanma-avukati/cekismeli-bosanma-izmir/">Çekişmeli boşanma</Link> için ise süre şartı aranmaz; özel boşanma sebeplerine dayanılarak evliliğin ilk gününden itibaren dava açılabilir.
                        </p>

                        <h2 id="gerekli-belgeler" className="scroll-mt-24">Boşanma Davası İçin Gerekli Belgeler</h2>

                        <p>
                            Boşanma davası açmak için mahkemeye sunulması gereken belgeler dava türüne göre farklılık gösterir. Aşağıda her iki dava türü için gerekli belgeleri bulabilirsiniz:
                        </p>

                        <ul>
                            <li><strong>Nüfus cüzdanı fotokopisi:</strong> Davacının kimlik belgesi fotokopisi dava dosyasına eklenir.</li>
                            <li><strong>Nüfus kayıt örneği:</strong> E-Devlet üzerinden alınabilir. Evlilik bilgilerini ve varsa müşterek çocukları gösterir.</li>
                            <li><strong>Evlilik cüzdanı fotokopisi:</strong> Evlilik cüzdanı yoksa nüfus kayıt örneği yeterlidir.</li>
                            <li><strong>Dava dilekçesi:</strong> Boşanma sebebi, talep edilen nafaka, velayet, tazminat ve mal paylaşımı taleplerini içeren dilekçe avukat tarafından hazırlanır.</li>
                            <li><strong>Tanık listesi:</strong> Tanık dinletmek istiyorsanız tanıkların ad-soyad ve adres bilgilerini içeren liste sunulmalıdır.</li>
                            <li><strong>Deliller:</strong> Boşanma sebebini ispatlayan mesajlar, fotoğraflar, darp raporu, banka dökümleri gibi belgeler.</li>
                            <li><strong>Anlaşmalı boşanma protokolü:</strong> Anlaşmalı boşanmada tarafların nafaka, velayet, mal paylaşımı ve tazminat konularında anlaştığını gösteren imzalı protokol.</li>
                        </ul>

                        <p>
                            Belgelerin eksiksiz ve doğru hazırlanması dava sürecinin sağlıklı ilerlemesi açısından büyük önem taşır. Eksik veya hatalı belgeler davanın uzamasına neden olabilir. Bu nedenle bir <Link href="/izmir-bosanma-avukati/">boşanma avukatı</Link> ile çalışmanızı tavsiye ediyoruz.
                        </p>

                        <SectionCTA text="Boşanma davanız için profesyonel dilekçe hazırlama ve dava takibi hizmeti almak ister misiniz?" />

                        <h2 id="yetkili-mahkeme" className="scroll-mt-24">Yetkili ve Görevli Mahkeme</h2>

                        <p>
                            Boşanma davalarında görevli mahkeme <strong>aile mahkemesidir</strong>. Aile mahkemesi bulunmayan yerlerde asliye hukuk mahkemesi aile mahkemesi sıfatıyla davayı görür. Yetkili mahkeme ise TMK m. 168 uyarınca şu şekilde belirlenir:
                        </p>

                        <ul>
                            <li><strong>Eşlerden birinin yerleşim yeri mahkemesi:</strong> Davacı veya davalının ikametgah adresindeki aile mahkemesi yetkilidir.</li>
                            <li><strong>Son 6 ay birlikte oturulan yer mahkemesi:</strong> Eşlerin davadan önce son altı ay birlikte oturdukları yer mahkemesi de yetkilidir.</li>
                        </ul>

                        <p>
                            İzmir&apos;de boşanma davalarını görmekte olan aile mahkemeleri bulunmaktadır. İkametgah adresinize göre Bayraklı, Karşıyaka, Bornova, Konak veya Çiğli adliyelerindeki aile mahkemesine başvurabilirsiniz.
                        </p>

                        <h2 id="dava-sureci" className="scroll-mt-24">Boşanma Davası Açma Süreci</h2>

                        <p>
                            Boşanma davası açma süreci aşağıdaki adımlardan oluşmaktadır:
                        </p>

                        <div className="not-prose my-8 space-y-4">
                            {[
                                { step: "1", title: "Avukat ile Ön Görüşme", desc: "Boşanma sebebiniz, talepleriniz ve mevcut durumunuz değerlendirilir. Anlaşmalı mı yoksa çekişmeli mi dava açılacağı belirlenir. Dava stratejisi oluşturulur." },
                                { step: "2", title: "Belgelerin Toplanması", desc: "Nüfus kayıt örneği, evlilik cüzdanı, deliller ve tanık listesi hazırlanır. Anlaşmalı boşanmada protokol taslağı düzenlenir ve taraflarca imzalanır." },
                                { step: "3", title: "Dava Dilekçesinin Hazırlanması", desc: "Boşanma sebebine uygun, nafaka, velayet, tazminat ve mal paylaşımı taleplerini içeren dava dilekçesi avukat tarafından hazırlanır." },
                                { step: "4", title: "Mahkemeye Başvuru", desc: "Dava dilekçesi ve ekleri yetkili aile mahkemesine sunulur. Mahkeme harçları ve gider avansı yatırılır. UYAP sistemi üzerinden de elektronik başvuru yapılabilir." },
                                { step: "5", title: "Tensip ve Tebligat", desc: "Mahkeme tensip zaptı düzenler ve karşı tarafa dava dilekçesini tebliğ eder. Davalı, tebligattan itibaren 2 hafta içinde cevap dilekçesi sunmalıdır." },
                                { step: "6", title: "Duruşma Süreci", desc: "Anlaşmalı boşanmada genellikle tek duruşmada karar verilir. Çekişmeli boşanmada ön inceleme, tahkikat ve karar duruşmaları yapılır. Detaylı bilgi için boşanma süreci rehberimizi inceleyebilirsiniz." },
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

                        <p>
                            <Link href="/izmir-bosanma-avukati/bosanma-sureci-izmir/">Boşanma süreci</Link> hakkında daha detaylı bilgi almak için ilgili sayfamızı ziyaret edebilirsiniz.
                        </p>

                        <h2 id="dava-masraflari" className="scroll-mt-24">Boşanma Davası Masrafları</h2>

                        <p>
                            Boşanma davası açarken ödenmesi gereken masraflar mahkeme harçları, gider avansı ve avukatlık ücretinden oluşur. 2026 yılı itibarıyla İzmir&apos;de boşanma davası masrafları aşağıdaki gibidir:
                        </p>

                        <div className="not-prose overflow-x-auto my-8">
                            <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="text-left p-4 font-semibold">Masraf Kalemi</th>
                                        <th className="text-left p-4 font-semibold">Yaklaşık Tutar (2026)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr className="bg-white"><td className="p-4 font-medium">Başvurma harcı</td><td className="p-4">400-600 TL</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Peşin harç</td><td className="p-4">400-600 TL</td></tr>
                                    <tr className="bg-white"><td className="p-4 font-medium">Gider avansı</td><td className="p-4">1.500-2.500 TL</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Vekalet pulu</td><td className="p-4">100-200 TL</td></tr>
                                    <tr className="bg-white"><td className="p-4 font-medium">Tebligat giderleri</td><td className="p-4">200-500 TL</td></tr>
                                    <tr className="bg-slate-50 font-bold"><td className="p-4">Toplam (avukatlık ücreti hariç)</td><td className="p-4">2.600-4.400 TL</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Bu masraflar avukatlık ücretinden ayrıdır. Avukatlık ücreti dava türüne, karmaşıklığına ve süresine göre değişmektedir. <Link href="/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/">İzmir boşanma avukatı ücretleri</Link> hakkında detaylı bilgi alabilirsiniz.
                        </p>

                        <p>
                            Ekonomik durumu yetersiz olan kişiler adli yardım talebinde bulunarak mahkeme harçlarından ve avukatlık ücretinden muaf tutulabilir. Adli yardım talebi dava dilekçesiyle birlikte mahkemeye sunulur.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Boşanma Davası Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Boşanma Davası Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Boşanma davası açma sürecinde dilekçe hazırlama, belge toplama, dava takibi ve sulh müzakereleri konularında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde boşanma davalarını takip ediyor.
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
                                    &larr; İzmir Boşanma Avukatı (Ana Sayfa)
                                </Link>
                                <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Anlaşmalı Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/cekismeli-bosanma-izmir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Çekişmeli Boşanma Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/bosanma-sureci-izmir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Boşanma Süreci Rehberi
                                </Link>
                                <Link href="/izmir-bosanma-avukati/nafaka-davasi/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Nafaka Davası Avukatı
                                </Link>
                                <Link href="/izmir-bosanma-avukati/bosanma-avukati-ucretleri-izmir/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; İzmir Boşanma Avukatı Ücretleri
                                </Link>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Boşanma Davası Açmak İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Boşanma davası açma sürecinde dilekçe hazırlama, belge toplama ve dava takibi için hemen randevu alın.
                                    <strong className="text-white"> Boşanma avukatı</strong> olarak size yardımcı olmaya hazırız.
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
