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
    title: "Aile Hukuku Avukatı İzmir | Av. Mert Kağan Çetin",
    description: "İzmir'de aile hukuku avukatı Av. Mert Kağan Çetin. Boşanma, velayet, nafaka, mal paylaşımı, evlat edinme ve aile içi şiddet konularında uzman hukuki destek.",
    keywords: ["aile hukuku avukatı İzmir", "İzmir aile avukatı", "aile hukuku danışmanlık", "aile mahkemesi avukatı İzmir", "aile hukuku davaları"],
    openGraph: {
        title: "Aile Hukuku Avukatı İzmir | Av. Mert Kağan Çetin",
        description: "İzmir'de aile hukuku avukatı. Boşanma, velayet, nafaka, mal paylaşımı ve aile içi şiddet konularında uzman hukuki destek.",
        url: "https://mertkagancetin.com/izmir-bosanma-avukati/aile-hukuku-avukati-izmir/",
        type: "article",
    },
    other: { "article:modified_time": "2026-04-18" },
    alternates: { canonical: "https://mertkagancetin.com/izmir-bosanma-avukati/aile-hukuku-avukati-izmir/" },
};

const faqs = [
    {
        question: "Aile hukuku avukatı ne iş yapar?",
        answer: "Aile hukuku avukatı, boşanma davaları, velayet davaları, nafaka davaları, mal paylaşımı davaları, evlat edinme başvuruları, babalık davaları, aile konutu şerhi, aile içi şiddet ve koruma kararı başvuruları gibi aile hukukundan doğan tüm uyuşmazlıklarda hukuki danışmanlık ve dava takibi hizmeti sunar."
    },
    {
        question: "Aile mahkemesi hangi davalara bakar?",
        answer: "Aile mahkemesi; boşanma davaları, ayrılık davaları, velayet davaları, nafaka davaları (yoksulluk, iştirak, tedbir nafakası), mal rejimi tasfiyesi davaları, babalık davaları, evlat edinme başvuruları, soybağının tespiti ve reddi davaları, aile konutu şerhi, iddet müddetinin kaldırılması ve 6284 sayılı Kanun kapsamında koruma kararı başvurularına bakar."
    },
    {
        question: "Aile içi şiddette ne yapılmalı?",
        answer: "Aile içi şiddet durumunda öncelikle 155 (polis) veya 156 (jandarma) numaralı telefonlardan yardım isteyebilirsiniz. 6284 sayılı Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanun kapsamında aile mahkemesine başvurarak uzaklaştırma kararı ve koruma tedbirleri talep edebilirsiniz. Savcılığa şikayet başvurusu yaparak ceza soruşturması başlatılmasını sağlayabilirsiniz. ALO 183 hattını arayarak da destek alabilirsiniz."
    },
    {
        question: "Aile hukuku davalarında arabuluculuk zorunlu mu?",
        answer: "2024 yılından itibaren boşanma davalarının mali sonuçlarına ilişkin uyuşmazlıklarda (nafaka, tazminat, mal paylaşımı) dava açılmadan önce arabulucuya başvuru zorunlu hale getirilmiştir. Ancak boşanmanın kendisi, velayet ve kişisel ilişki düzenlemesi gibi konularda arabuluculuk zorunlu değildir. Koruma kararı başvurularında da arabuluculuk şartı aranmaz."
    },
    {
        question: "Aile hukuku avukatı ücreti ne kadar?",
        answer: "2026 yılında İzmir&apos;de aile hukuku davalarında avukat ücretleri davanın türüne ve karmaşıklığına göre değişir. Anlaşmalı boşanma 25.000-40.000 TL, çekişmeli boşanma 40.000-80.000 TL, velayet davası 25.000-50.000 TL, nafaka davası 15.000-30.000 TL arasında değişmektedir. Kesin ücret ilk görüşmede davanın detaylarına göre belirlenir."
    }
];

const tocItems = [
    { id: "aile-hukuku-nedir", title: "Aile Hukuku Nedir?" },
    { id: "aile-hukuku-dava-turleri", title: "Dava Türleri" },
    { id: "aile-ici-siddet", title: "Aile İçi Şiddet ve Koruma" },
    { id: "aile-hukuku-avukati-neden-onemli", title: "Avukat Neden Önemli?" },
    { id: "sss", title: "Sıkça Sorulan Sorular" },
];

export default function AileHukukuAvukatiIzmirPage() {
    return (
        <main className="bg-white">
            <ServiceSchema name="Aile Hukuku Danışmanlığı" description="İzmir'de aile hukuku alanında kapsamlı avukatlık ve danışmanlık hizmeti." serviceType="Aile Hukuku Danışmanlığı" />
            <PersonSchema knowsAbout={["Aile Hukuku", "Boşanma Hukuku", "Velayet Hukuku", "Nafaka Hukuku", "Mal Rejimi Hukuku"]} />
            <FAQSchema faqs={faqs} />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Boşanma Avukatı", url: "https://mertkagancetin.com/izmir-bosanma-avukati/" },
                    { name: "Aile Hukuku Avukatı İzmir", url: "https://mertkagancetin.com/izmir-bosanma-avukati/aile-hukuku-avukati-izmir/" }
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
                        <span className="text-secondary">Aile Hukuku Avukatı İzmir</span>
                    </nav>
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                            Aile Hukuku Avukatı İzmir
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            İzmir&apos;de aile hukukunun tüm alanlarında boşanma, velayet, nafaka ve mal paylaşımı davalarında profesyonel avukat desteği.
                            <strong className="text-white"> Av. Mert Kağan Çetin</strong> ile haklarınızı güvence altına alın.
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
                            <strong>İzmir aile hukuku avukatı</strong> olarak boşanma, velayet, nafaka, mal paylaşımı, evlat edinme ve aile içi şiddet konularında kapsamlı hukuki destek sunuyoruz. Aile hukuku, kişilerin en hassas ve duygusal süreçlerini kapsadığından, bu alanda uzman avukat desteği büyük önem taşır.
                        </p>

                        <p className="text-sm text-slate-500 italic">
                            Son güncelleme: 18 Nisan 2026 | Yazar: Av. Mert Kağan Çetin, İzmir Barosu
                        </p>

                        <p>
                            Aile hukuku, Türk Medeni Kanunu&apos;nun ikinci kitabında düzenlenen ve evlenme, boşanma, velayet, nafaka, mal rejimi, soybağı ve vesayet gibi konuları kapsayan geniş bir hukuk dalıdır. İzmir&apos;de aile hukuku davaları Bayraklı Adliyesi&apos;ndeki aile mahkemelerinde görülmektedir. Aile mahkemeleri, 4787 sayılı Aile Mahkemelerinin Kuruluş, Görev ve Yargılama Usullerine Dair Kanun ile kurulmuş özel mahkemelerdir.
                        </p>

                        <h2 id="aile-hukuku-nedir" className="scroll-mt-24">Aile Hukuku Nedir?</h2>

                        <p>
                            Aile hukuku, kişiler arasındaki aile ilişkilerinden doğan hakları ve yükümlülükleri düzenleyen hukuk dalıdır. Türk Medeni Kanunu&apos;nun 118-494. maddeleri arasında düzenlenen aile hukuku; evlenme, boşanma, velayet, nafaka, mal rejimi, soybağı, evlat edinme ve vesayet konularını kapsar.
                        </p>

                        <p>
                            Aile mahkemeleri, aile hukukundan doğan uyuşmazlıkların çözümü için özel olarak kurulmuş mahkemelerdir. Bu mahkemelerde hakimler, psikolog ve pedagog gibi uzmanlardan yardım alarak kararlarını verir. Özellikle çocukların söz konusu olduğu davalarda çocuğun üstün yararı ilkesi esas alınır.
                        </p>

                        <p>
                            Aile hukuku davaları, kişilerin en özel ve hassas konularını içerdiğinden, bu alanda uzmanlaşmış bir avukatla çalışmak büyük önem taşır. Duyguların yoğun olduğu bu süreçlerde, haklarınızı koruyacak ve süreci profesyonelce yönetecek bir avukat desteği vazgeçilmezdir.
                        </p>

                        <h2 id="aile-hukuku-dava-turleri" className="scroll-mt-24">Aile Hukuku Dava Türleri</h2>

                        <p>
                            Aile hukuku geniş bir yelpazede farklı dava türlerini kapsar. Her dava türü kendine özgü usul kuralları, süreleri ve koşulları barındırır. Aşağıda aile hukukunun kapsadığı başlıca dava türlerini bulabilirsiniz:
                        </p>

                        <ul>
                            <li><strong>Boşanma davaları:</strong> <Link href="/izmir-bosanma-avukati/anlasmali-bosanma/">Anlaşmalı boşanma</Link> ve çekişmeli boşanma davaları. TMK m. 161-166 kapsamında zina, hayata kast, pek kötü muamele, terk, akıl hastalığı ve evlilik birliğinin temelinden sarsılması sebepleriyle açılır.</li>
                            <li><strong>Velayet davaları:</strong> <Link href="/izmir-bosanma-avukati/velayet-davasi/">Velayet</Link> düzenlemesi, velayet değişikliği ve kişisel ilişki düzenlemesi davaları. Çocuğun üstün yararı ilkesi esas alınarak karar verilir.</li>
                            <li><strong>Nafaka davaları:</strong> <Link href="/izmir-bosanma-avukati/nafaka-davasi/">Nafaka</Link> türleri arasında yoksulluk nafakası, iştirak nafakası, tedbir nafakası ve yardım nafakası yer alır. Nafaka artırım ve azaltım davaları da bu kapsamdadır.</li>
                            <li><strong>Mal paylaşımı davaları:</strong> Edinilmiş mallara katılma rejimi kapsamında mal rejimi tasfiyesi, katılma alacağı ve değer artış payı davaları.</li>
                            <li><strong>Evlat edinme başvuruları:</strong> Küçüklerin ve büyüklerin evlat edinilmesi başvuruları aile mahkemesinde yapılır. TMK m. 305-320 kapsamında düzenlenir.</li>
                            <li><strong>Babalık davaları:</strong> Soybağının tespiti ve reddi davaları. Çocuğun babasının kim olduğunun mahkeme kararıyla belirlenmesi veya mevcut soybağının reddedilmesi.</li>
                            <li><strong>Aile konutu şerhi:</strong> TMK m. 194 kapsamında aile konutu olarak kullanılan taşınmazın tapusuna şerh konulması. Eşin rızası olmadan konutun satılması veya üzerinde tasarruf yapılması engellenir.</li>
                        </ul>

                        <p>
                            Her dava türünün kendine özgü süreleri, delil gereksinimleri ve usul kuralları vardır. Bu nedenle aile hukuku alanında deneyimli bir avukatla çalışmanız, haklarınızın tam olarak korunması açısından büyük önem taşır.
                        </p>

                        <h2 id="aile-ici-siddet" className="scroll-mt-24">Aile İçi Şiddet ve Koruma Kararı</h2>

                        <p>
                            Aile içi şiddet, Türkiye&apos;de 6284 sayılı Ailenin Korunması ve Kadına Karşı Şiddetin Önlenmesine Dair Kanun ile düzenlenmiştir. Bu kanun, şiddet mağdurlarına hızlı ve etkili koruma sağlamak amacıyla çıkarılmıştır. Şiddet mağduru, doğrudan aile mahkemesine, savcılığa veya kolluk kuvvetlerine başvurarak koruma kararı talep edebilir.
                        </p>

                        <p>
                            <strong>Uzaklaştırma kararı:</strong> 6284 sayılı Kanun&apos;un 5. maddesi uyarınca hakim, şiddet uygulayan kişiye yönelik uzaklaştırma kararı verebilir. Bu karar kapsamında şiddet uygulayan; ortak konuttan uzaklaştırılabilir, mağdura ve çocuklara yaklaşması yasaklanabilir, mağdurun işyerine ve çocukların okuluna yaklaşması engellenebilir. Uzaklaştırma kararı genellikle 1-6 ay süreyle verilir ve gerektiğinde uzatılabilir.
                        </p>

                        <p>
                            <strong>Koruma tedbirleri:</strong> Mahkeme, mağdurun korunması için çeşitli tedbirler alabilir. Bunlar arasında geçici nafaka bağlanması, mağdura barınma yeri sağlanması, kimlik ve iletişim bilgilerinin gizlenmesi, şiddet uygulayana silah teslim etme yükümlülüğü getirilmesi yer alır. Koruma kararına aykırı davranan kişi hakkında zorlama hapsi uygulanır.
                        </p>

                        <p>
                            Aile içi şiddet durumunda zaman kaybetmeden hukuki destek almanız hayati önem taşır. ALO 183 hattı, KADES uygulaması ve en yakın polis merkezi üzerinden acil yardım alabilirsiniz. Hukuki süreçte avukat desteği, koruma tedbirlerinin hızla alınmasını ve şiddet uygulayan hakkında gerekli cezai işlemlerin başlatılmasını sağlar.
                        </p>

                        <SectionCTA text="Aile hukuku konusunda profesyonel danışmanlık almak ister misiniz?" />

                        <h2 id="aile-hukuku-avukati-neden-onemli" className="scroll-mt-24">Aile Hukuku Avukatı Neden Önemli?</h2>

                        <p>
                            Aile hukuku davaları, kişilerin en hassas dönemlerinde açılır. Boşanma, velayet, nafaka gibi konular duygusal yükü ağır süreçlerdir. Bu süreçlerde duygusal kararlar vermek, telafisi güç hak kayıplarına yol açabilir. Aile hukuku avukatı, müvekkilinin duygusal durumunu anlayarak rasyonel ve hukuki bir çerçevede en iyi sonucu elde etmeye çalışır.
                        </p>

                        <p>
                            <strong>Çocuğun üstün yararı:</strong> Velayet, nafaka ve kişisel ilişki düzenlemesi gibi çocukları ilgilendiren konularda mahkeme, çocuğun üstün yararını esas alır. Aile hukuku avukatı, çocuğun yararını gözeterek velayet talebini destekleyecek delilleri sunar, pedagog ve psikolog raporlarını değerlendirir ve çocuğun korunması için gerekli hukuki adımları atar.
                        </p>

                        <p>
                            <strong>Hakların korunması:</strong> Boşanma sürecinde nafaka, tazminat ve mal paylaşımı konularında hak kayıpları yaşanmaması için uzman avukat desteği şarttır. Avukatsız yürütülen davalarda protokollerde gözden kaçan maddeler, eksik talepler veya hatalı beyanlar ileride büyük sorunlara yol açabilir. Aile hukuku avukatı, tüm haklarınızı eksiksiz şekilde talep eder ve korur.
                        </p>

                        <p>
                            <strong>Uzlaşma ve müzakere:</strong> Aile hukuku davalarında taraflar arasında uzlaşma sağlanması hem zaman hem maliyet açısından avantajlıdır. Deneyimli bir aile hukuku avukatı, müzakere sürecini profesyonelce yöneterek her iki tarafın da kabul edebileceği çözümler üretir. Bu yaklaşım özellikle çocukların olduğu davalarda, taraflar arasındaki ilişkinin korunması açısından büyük önem taşır.
                        </p>

                        {/* E-E-A-T Author Box */}
                        <div className="not-prose my-12 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-primary px-8 py-4">
                                <p className="text-white font-bold text-lg">Aile Hukuku Avukatı</p>
                            </div>
                            <div className="p-8 flex flex-col sm:flex-row gap-6">
                                <Image src="/attorney-photo.jpg" alt="Av. Mert Kağan Çetin - İzmir Aile Hukuku Avukatı" width={120} height={120} className="w-28 h-28 rounded-xl object-cover flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Av. Mert Kağan Çetin</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                        İzmir Barosu&apos;na kayıtlı avukat. Aile hukuku alanında boşanma, velayet, nafaka, mal paylaşımı ve aile içi şiddet davalarında profesyonel hukuki destek sunuyor. Bayraklı Adliyesi yakınındaki ofisinden İzmir genelinde aile hukuku davalarını takip ediyor.
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
                                <Link href="/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/" className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium">
                                    &rarr; Çekişmeli Boşanma Davası Süreci ve Kusur Tespiti
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
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 id="sss" className="scroll-mt-24">Sıkça Sorulan Sorular</h2>

                        <FAQAccordion faqs={faqs} />

                        {/* İletişim CTA */}
                        <div id="iletisim" className="not-prose scroll-mt-24">
                            <div className="bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl p-8 md:p-12 my-12">
                                <h2 className="text-3xl font-playfair font-bold mb-4">Aile Hukuku Danışmanlığı İçin Bize Ulaşın</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Aile hukukunun tüm alanlarında profesyonel hukuki destek için hemen randevu alın.
                                    <strong className="text-white"> Aile hukuku avukatı</strong> olarak size yardımcı olmaya hazırız.
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
