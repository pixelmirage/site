import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, FileText, ShieldCheck, Scale, BookOpen, UserCheck, ArrowRight } from "lucide-react";
import { SituationPicker } from "@/components/kira-landing/SituationPicker";
import { CallbackForm } from "@/components/kira-landing/CallbackForm";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CTAs, PHONE } from "@/components/kira-landing/CTAs";
import { services as serviceData, serviceHref } from "@/lib/services";
import { GBP_URL, GBP_DIRECTIONS_URL, GBP_EMBED_URL } from "@/lib/gbp";

const pageTitle = "İzmir Kira Avukatı | Av. Mert Kağan Çetin";
const pageDescription = "İzmir kira avukatı Av. Mert Kağan Çetin: tahliye, kira tespit, kira uyarlama, kira alacağı ve icra takibi. İzmir genelinde. Tel: 0544 585 46 45";

export const metadata: Metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://mertkagancetin.com/",
        type: "website",
        locale: "tr_TR",
        images: [{ url: "/og-image.jpg", alt: "Av. Mert Kağan Çetin - İzmir Kira Avukatı" }],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/og-image.jpg"],
    },
    alternates: { canonical: "https://mertkagancetin.com/" },
};

const services = serviceData.map((x) => ({ name: x.name, desc: x.cardDesc, url: serviceHref(x), h1: x.h1 }));

const steps = [
    { title: "Telefonla ön görüşme", desc: "Durum telefonda dinlenir, izlenebilecek hukuki yollar konuşulur." },
    { title: "Belge inceleme", desc: "Sözleşme, ihtarname ve ödeme kayıtları incelenir; süreler ve riskler belirlenir." },
    { title: "Süreç takibi", desc: "Arabuluculuk, dava veya icra aşamaları takip edilir, her adımda bilgi verilir." },
];

const documents = [
    "Kira sözleşmesi (yazılı değilse, kira ilişkisini gösteren yazışmalar)",
    "Kira ödeme dekontları",
    "Gönderilen veya alınan ihtarnameler, bildirimler",
    "Varsa tahliye taahhütnamesi",
    "Tapu bilgisi (ev sahibiyseniz) veya satış bilgisi (ev satıldıysa)",
    "Depozito ödemesini gösteren belge",
];

const faqs = [
    { question: "Size nasıl ulaşabilirim?", answer: "Telefonla (0544 585 46 45) veya WhatsApp üzerinden ulaşabilirsiniz. Sayfadaki form doldurulursa telefonla geri dönüş yapılır. Ön görüşme telefonla yapılır." },
    { question: "Hangi bölgelerde hizmet veriyorsunuz?", answer: "İzmir’in tüm bölgelerindeki kira uyuşmazlıklarında hizmet veriyorum. Ofisim Bayraklı’dadır; ön görüşme telefonla yapılabilir." },
    { question: "Görüşmeye hangi belgelerle gelmeliyim?", answer: "Kira sözleşmesi, ödeme dekontları, ihtarnameler ve varsa tahliye taahhütnamesi yeterlidir. Elinizde olmayan belge ön görüşmeye engel değildir." },
    { question: "Ofise gelmem gerekiyor mu?", answer: "Ön görüşme telefonla yapılır. Belgeler WhatsApp veya e-posta ile iletilebilir; yüz yüze görüşme Bayraklı'daki ofiste randevuyla yapılır." },
    { question: "Kira davası açmadan önce arabulucuya gitmek zorunlu mu?", answer: "Evet. Kira ilişkisinden doğan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak dava şartıdır (HUAK m. 18/B). Arabuluculukta anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılabilir. İcra yoluyla tahliye talepleri bu şartın dışındadır." },
    { question: "İzmir kira avukatı ücreti ne kadar?", answer: "Avukatlık ücreti; davanın veya takibin türüne, dosyanın kapsamına ve yapılacak işlemlere göre belirlenir ve Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Dosyanızla ilgili ücret ve masraf bilgisini telefonla ön görüşmede, belgelerinizi inceledikten sonra açıkça paylaşırım." },
];

const H2 = "text-2xl md:text-4xl font-playfair font-bold text-primary";

export default function Home() {
    return (
        <div className="bg-white pb-16 lg:pb-0">
            <BreadcrumbSchema
                items={[
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/" },
                ]}
            />
            <FAQSchema faqs={faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LegalService",
                            "@id": "https://mertkagancetin.com/#kira-service",
                            "name": "İzmir Kira Avukatı – Av. Mert Kağan Çetin",
                            "serviceType": "Kira hukuku avukatlığı",
                            "url": "https://mertkagancetin.com/",
                            "telephone": "+905445854645",
                            "provider": { "@id": "https://mertkagancetin.com/#attorney" },
                            "hasMap": GBP_URL,
                            "address": { "@type": "PostalAddress", "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17", "addressLocality": "Bayraklı", "addressRegion": "İzmir", "addressCountry": "TR" },
                            "areaServed": [
                                { "@type": "City", "name": "İzmir" },
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Kira hukuku hizmetleri",
                                "itemListElement": services.map((s) => ({ "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.name, "url": `https://mertkagancetin.com${s.url}` } })),
                            },
                        },
                    ],
                }) }}
            />


            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 pt-10 pb-12 md:pt-14 md:pb-20">
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <h1 className="mb-3 font-playfair text-4xl font-bold leading-tight md:text-6xl">İzmir Kira Avukatı</h1>
                        <p className="mb-6 font-playfair text-xl font-semibold tracking-wide text-secondary md:text-3xl">Av. Mert Kağan Çetin</p>
                        <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-2xl">
                            Ev sahibi ve kiracılar için tahliye, kira bedeli ve kira alacağı uyuşmazlıklarında dava ve icra takibi.
                        </p>
                        <CTAs />
                        <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-secondary" aria-hidden="true" />İzmir Barosu · Sicil 15556</li>
                            <li className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />Bayraklı ofis</li>
                            <li>İzmir genelinde</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Durumunuzu seçin */}
            <section className="py-12 md:py-20" aria-labelledby="durum">
                <div className="container mx-auto max-w-4xl px-4">
                    <h2 id="durum" className={`${H2} mb-2 text-center`}>Durumunuzu seçin</h2>
                    <p className="mb-8 text-center text-slate-600">Size uyan durumu seçin, telefonla veya WhatsApp üzerinden ulaşın.</p>
                    <SituationPicker />
                </div>
            </section>

            {/* Hizmetler */}
            <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-16" aria-labelledby="hizmetler">
                <div className="container mx-auto max-w-4xl px-4">
                    <h2 id="hizmetler" className={`${H2} mb-6 text-center`}>Takip edilen işler</h2>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {services.map((s) => (
                            <li key={s.name}>
                                <Link href={s.url} className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-secondary hover:shadow-md">
                                    <h3 className="mb-1 text-lg font-bold text-primary">{s.name}</h3>
                                    <p className="flex-1 text-slate-700">{s.desc}</p>
                                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4">{s.h1}<ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            {/* Kira hukuku çerçevesi */}
            <section className="py-12 md:py-16" aria-labelledby="cerceve">
                <div className="container mx-auto max-w-3xl space-y-4 px-4 text-[1.0625rem] leading-8 text-slate-700">
                    <h2 id="cerceve" className={`${H2} mb-2`}>İzmir&apos;de kira uyuşmazlıklarında hukuki süreç</h2>
                    <p>Konut ve çatılı işyeri kiraları Türk Borçlar Kanunu&apos;nun (TBK m. 339-356) kiracıyı koruyan emredici hükümlerine tabidir. Kiraya veren, sözleşme süresi bitti diye kiracıyı çıkaramaz; tahliye ancak <Link href="/izmir-kiraci-tahliye-davasi-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">kiracı tahliye davası</Link> için kanunda sayılan sebeplerle, çoğu zaman bir aylık dava süresi içinde istenebilir. Kira bedeline ilişkin uyuşmazlıklar <Link href="/izmir-kira-tespit-davasi-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">kira tespit davası</Link> veya olağanüstü değişikliklerde <Link href="/izmir-kira-uyarlama-davasi-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">kira uyarlama davası</Link> ile çözülür.</p>
                    <p>Ödenmeyen kira için <Link href="/izmir-kira-alacagi-icra-takibi-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">kira alacağı icra takibi</Link>, geçerli bir yazılı taahhüt varsa <Link href="/izmir-tahliye-taahhudu-icra-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">tahliye taahhüdüne dayalı icra</Link> yoluna dava açmadan başvurulabilir. Dava yoluyla ileri sürülecek kira uyuşmazlıklarında ise önce <Link href="/izmir-kira-arabuluculuk-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">zorunlu arabuluculuk</Link> aşaması tamamlanır. Uyuşmazlık çıkmadan önce <Link href="/izmir-kira-sozlesmesi-avukati/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">kira sözleşmesinin</Link> kanuna uygun hazırlanması pek çok sorunu önler.</p>
                    <p>Kira davalarına İzmir&apos;deki sulh hukuk mahkemelerinde, icra yoluyla tahliye ve alacak taleplerine icra daireleri ve icra mahkemelerinde bakılır. Ofis Bayraklı&apos;dadır; İzmir genelindeki dosyalarda ön görüşme telefonla yapılabilir.</p>
                </div>
            </section>

            {/* Neden */}
            <section className="py-12 md:py-20" aria-labelledby="neden">
                <div className="container mx-auto max-w-5xl px-4">
                    <h2 id="neden" className={`${H2} mb-8 text-center`}>Neden Av. Mert Kağan Çetin ile çalışmalısınız?</h2>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <li className="flex gap-4 rounded-xl border border-slate-200 p-5">
                            <Scale className="h-7 w-7 flex-shrink-0 text-secondary" aria-hidden="true" />
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Kira uyuşmazlıklarına odaklı çalışma</h3><p className="text-slate-700">Çalışmalarımın ağırlıklı kısmını kira hukuku oluşturur. Tahliye, kira tespit, kira uyarlama ve kira alacağı dosyalarında sürecin her aşamasını ve dikkat edilmesi gereken usul kurallarını yakından takip ederim.</p></div>
                        </li>
                        <li className="flex gap-4 rounded-xl border border-slate-200 p-5">
                            <FileText className="h-7 w-7 flex-shrink-0 text-secondary" aria-hidden="true" />
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Dosyanıza özel strateji</h3><p className="text-slate-700">Her dosyada önce sözleşmeyi, ihtarları ve süreleri incelerim. Hak kaybına yol açabilecek süre ve usul hatalarını baştan tespit eder, dosyanız için net bir yol haritası çıkarırım.</p></div>
                        </li>
                        <li className="flex gap-4 rounded-xl border border-slate-200 p-5">
                            <BookOpen className="h-7 w-7 flex-shrink-0 text-secondary" aria-hidden="true" />
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Güncel içtihada dayalı değerlendirme</h3><p className="text-slate-700">Hukuki değerlendirmelerimi Yargıtay ve Bölge Adliye Mahkemelerinin güncel kira kararlarına dayandırırım; böylece dosyanız mahkemelerin bugün uyguladığı ölçütlere göre hazırlanır.</p></div>
                        </li>
                        <li className="flex gap-4 rounded-xl border border-slate-200 p-5">
                            <UserCheck className="h-7 w-7 flex-shrink-0 text-secondary" aria-hidden="true" />
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Bizzat takip, açık iletişim</h3><p className="text-slate-700">Dosyanızla doğrudan ben ilgilenirim. Her aşamada ne yapıldığını, sıradaki adımı ve olası sonuçları size açıkça bildiririm.</p></div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Seçerken */}
            <section id="secerken" className="border-y border-slate-200 bg-slate-50 py-12 md:py-20" aria-labelledby="secerken-baslik">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 id="secerken-baslik" className={`${H2} mb-8 text-center`}>İzmir kira avukatı seçerken nelere dikkat etmelisiniz?</h2>
                    <ol className="space-y-3">
                        <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                            <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white" aria-hidden="true">1</span>
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Kira hukukunda ne kadar yoğun çalıştığına bakın</h3><p className="text-slate-700">Kira davalarında ihtar süreleri, dava açma süreleri ve zorunlu arabuluculuk gibi usul kuralları sonucu doğrudan belirler. Bu alanda düzenli dosya takip eden bir avukat, süre ve usul hatalarını baştan önler.</p></div>
                        </li>
                        <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                            <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white" aria-hidden="true">2</span>
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Dosyanızı kimin takip edeceğini sorun</h3><p className="text-slate-700">Görüşme yaptığınız avukatın dosyanızla bizzat ilgilenip ilgilenmeyeceğini ve kime ulaşacağınızı en başta netleştirin.</p></div>
                        </li>
                        <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                            <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white" aria-hidden="true">3</span>
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Ücret ve masrafları baştan netleştirin</h3><p className="text-slate-700">Avukatlık ücreti, yargılama masrafları ve ödeme şekli işe başlamadan önce açıkça konuşulmalı; süreçte hangi kalemlerin çıkabileceğini önceden bilmelisiniz.</p></div>
                        </li>
                        <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                            <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white" aria-hidden="true">4</span>
                            <div><h3 className="mb-1 text-lg font-bold text-primary">Size gerçekçi bir değerlendirme sunulmasını bekleyin</h3><p className="text-slate-700">Hiçbir avukat dava sonucunu garanti edemez. Dosyanızın güçlü ve zayıf yönlerini açıkça anlatan, riskleri saklamayan bir değerlendirme isteyin.</p></div>
                        </li>
                    </ol>
                    <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-slate-800 p-6 text-center text-white">
                        <p className="text-lg font-semibold">Dosyanızı telefonla ön görüşmede birlikte değerlendirelim.</p>
                        <CTAs />
                    </div>
                </div>
            </section>

            {/* Süreç */}
            <section className="py-12 md:py-20" aria-labelledby="surec">
                <div className="container mx-auto max-w-5xl px-4">
                    <h2 id="surec" className={`${H2} mb-8 text-center`}>Nasıl çalışıyoruz?</h2>
                    <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {steps.map((s, i) => (
                            <li key={s.title} className="flex gap-4 rounded-xl border border-slate-200 p-5 md:flex-col">
                                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white" aria-hidden="true">{i + 1}</span>
                                <div>
                                    <h3 className="mb-1 text-lg font-bold text-primary">{s.title}</h3>
                                    <p className="text-slate-700">{s.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Belgeler + Form */}
            <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
                    <div aria-labelledby="belgeler">
                        <h2 id="belgeler" className={`${H2} mb-5`}>Görüşmeye gelirken hazırlayın</h2>
                        <ul className="space-y-3">
                            {documents.map((d) => (
                                <li key={d} className="flex gap-3 text-slate-700"><FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />{d}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-slate-600">Hepsi elinizde olmasa da ön görüşme yapılabilir.</p>
                    </div>
                    <div id="geri-arama" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7" aria-labelledby="form-baslik">
                        <h2 id="form-baslik" className="mb-1 font-playfair text-2xl font-bold text-primary">Sizi arayalım</h2>
                        <p className="mb-5 text-slate-600">Bilgilerinizi bırakın, telefonla dönüş yapılır.</p>
                        <CallbackForm source="/" />
                    </div>
                </div>
            </section>

            {/* Ofis */}
            <section className="py-12 md:py-20" aria-labelledby="ofis">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
                    <div>
                        <h2 id="ofis" className={`${H2} mb-5`}>Ofis</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                            <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" /><a href={PHONE} className="font-bold text-primary hover:text-secondary">0544 585 46 45</a></li>
                            <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />Av. Mert Kağan Çetin · İzmir Barosu Sicil No: 15556</li>
                        </ul>
                        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                            <a href={GBP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary">Yol tarifi al</a>
                            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary">Google profilini görüntüle</a>
                        </p>
                        <p className="mt-4 text-slate-700">Hizmet bölgesi: İzmir&apos;in tüm ilçeleri (Bayraklı, Bornova, Karşıyaka, Buca, Konak ve diğerleri).</p>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <iframe
                            title="İzmir Kira Avukatı Mert Kağan Çetin – Google Haritalar"
                            src={GBP_EMBED_URL}
                            className="block h-64 w-full border-0 md:h-full md:min-h-72"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* SSS */}
            <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-20" aria-labelledby="sss">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 id="sss" className={`${H2} mb-6 text-center`}>Sık sorulan sorular</h2>
                    <div className="space-y-3">
                        {faqs.map((f) => (
                            <details key={f.question} className="group rounded-xl border border-slate-200 bg-white px-5 py-4">
                                <summary className="cursor-pointer list-none font-bold text-primary marker:hidden">{f.question}</summary>
                                <p className="mt-2 leading-7 text-slate-600">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Son CTA */}
            <section className="bg-gradient-to-br from-primary to-slate-800 py-12 text-white md:py-16">
                <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
                    <h2 className="mb-3 font-playfair text-2xl font-bold md:text-4xl">Kira uyuşmazlığınızı telefonla görüşelim</h2>
                    <p className="mb-8 text-slate-300">Ön görüşme telefonla yapılır; belgeler sonrasında birlikte incelenir.</p>
                    <CTAs />
                </div>
            </section>

            {/* Kaynaklar */}
            <nav aria-label="Kira hukuku kaynakları" className="container mx-auto max-w-4xl px-4 py-8 text-sm">
                <span className="mr-2 font-bold text-primary">Kaynaklar:</span>
                {[
                    ["Kira artış oranı hesaplama", "/kira-artis-orani-hesaplama/"],
                    ["Kira sözleşmesi örneği", "/kira-sozlesmesi-ornegi/"],
                    ["Tahliye taahhütnamesi örneği", "/tahliye-taahhutnamesi/"],
                    ["Kira hukuku sözlüğü", "/sozluk/"],
                    ["Makaleler", "/blog/"],
                ].map(([t, u], i) => (
                    <span key={u}>{i > 0 && <span className="mx-1 text-slate-400" aria-hidden="true">·</span>}<Link href={u} className="text-slate-700 underline-offset-2 hover:text-secondary hover:underline">{t}</Link></span>
                ))}
            </nav>
        </div>
    );
}
