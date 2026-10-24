import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ChevronRight, Home, MessageCircle, Clock, FileText, ShieldCheck, Scale, BookOpen, UserCheck } from "lucide-react";
import { SituationPicker } from "@/components/kira-landing/SituationPicker";
import { CallbackForm } from "@/components/kira-landing/CallbackForm";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

const pageTitle = "İzmir Kira Avukatı | Tahliye ve Kira Davaları";
const pageDescription = "İzmir kira avukatı Av. Mert Kağan Çetin: tahliye, kira tespit, kira uyarlama, kira alacağı ve icra takibi. İzmir genelinde. Tel: 0544 585 46 45";
const PHONE = "tel:+905445854645";
const WHATSAPP = `https://wa.me/905445854645?text=${encodeURIComponent("Merhaba, kira konusunda görüşmek istiyorum.")}`;

export const metadata: Metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://mertkagancetin.com/izmir-kira-avukati/",
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
    alternates: { canonical: "https://mertkagancetin.com/izmir-kira-avukati/" },
};

const services = [
    { name: "Tahliye davası", desc: "İhtiyaç, temerrüt, iki haklı ihtar veya 10 yıllık uzama süresinin dolması gibi sebeplerden dosyanıza uygun yasal yol belirlenir; ihtarnameden karara kadar süreç takip edilir.", url: "/izmir-kira-avukati/kiraci-tahliye-davasi/" },
    { name: "Kira tespit davası", desc: "Güncel emsal kiralar ve TÜFE sınırı esas alınarak kira bedelinin ne olması gerektiği değerlendirilir; dava süreleri kaçırılmadan açılır ve bilirkişi aşaması dahil takip edilir.", url: "/izmir-kira-avukati/kira-tespit-davasi/" },
    { name: "Kira uyarlama davası", desc: "Beklenmedik ekonomik değişiklikler karşısında kira bedelinin sözleşmeye uyarlanması talep edilebilir; şartların oluşup oluşmadığı incelenir ve dava yürütülür.", url: "/izmir-kira-avukati/kira-uyarlama-davasi/" },
    { name: "Kira alacağı ve icra takibi", desc: "Ödenmeyen kira bedelleri için icra takibi başlatılır, gerekirse tahliye talebi de eklenir; itiraz halinde itirazın kaldırılması veya iptali süreci takip edilir.", url: "/izmir-kira-avukati/kira-borcu-icra/" },
    { name: "Tahliye taahhüdü ile icra", desc: "Geçerli bir tahliye taahhüdü varsa dava açmadan doğrudan icra yoluyla tahliye istenebilir; taahhüdün geçerliliği ve süreler kontrol edilerek takip başlatılır.", url: "/tahliye-taahhutnamesi/" },
    { name: "Kira sözleşmesi hazırlama ve inceleme", desc: "Uyuşmazlık çıkmasını önleyecek şekilde sözleşme hazırlanır veya mevcut sözleşme incelenir; artış, depozito, teminat ve tahliye maddeleri tek tek değerlendirilir.", url: "/izmir-kira-avukati/kira-sozlesmesi-rehberi/" },
    { name: "Arabuluculuk", desc: "Kira uyuşmazlıklarında dava öncesi arabuluculuk zorunludur; bu süreçte haklarınız korunarak, mümkünse dava açmadan anlaşma sağlanması hedeflenir.", url: "/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" },
];

const steps = [
    { title: "Telefonla ön görüşme", desc: "Durumu telefonda dinliyor, izlenebilecek yolları konuşuyoruz." },
    { title: "Belge inceleme", desc: "Sözleşme, ihtarname ve ödeme kayıtlarını birlikte inceliyoruz." },
    { title: "Süreç takibi", desc: "Arabuluculuk, dava veya icra aşamalarını takip ediyor, sizi bilgilendiriyoruz." },
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
    { question: "Size nasıl ulaşabilirim?", answer: "Telefonla (0544 585 46 45) veya WhatsApp üzerinden ulaşabilirsiniz. Sayfadaki formu doldurursanız sizi geri ararız. Ön görüşme telefonla yapılır." },
    { question: "Hangi bölgelerde hizmet veriyorsunuz?", answer: "İzmir’in tüm bölgelerindeki kira uyuşmazlıklarında hizmet veriyorum. Ofisim Bayraklı’dadır; ön görüşme telefonla yapılabilir." },
    { question: "Görüşmeye hangi belgelerle gelmeliyim?", answer: "Kira sözleşmesi, ödeme dekontları, ihtarnameler ve varsa tahliye taahhütnamesi yeterlidir. Elinizde olmayan belge ön görüşmeye engel değildir." },
    { question: "Ofise gelmem gerekiyor mu?", answer: "Ön görüşme telefonla yapılır. Belgeler WhatsApp veya e-posta ile iletilebilir; yüz yüze görüşme Bayraklı'daki ofiste randevuyla yapılır." },
    { question: "İzmir kira avukatı ücreti ne kadar?", answer: "Avukatlık ücreti; davanın veya takibin türüne, dosyanın kapsamına ve yapılacak işlemlere göre belirlenir ve Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Dosyanızla ilgili ücret ve masraf bilgisini telefonla ön görüşmede, belgelerinizi inceledikten sonra açıkça paylaşırım." },
];

const btnPrimary = "inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 text-lg font-bold text-primary shadow-lg hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const btnWa = "inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#1f8f4e] px-6 text-lg font-bold text-white hover:bg-[#1a7a43]";

function CTAs() {
    return (
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={PHONE} className={btnPrimary} aria-label="Telefonla görüşme: 0544 585 46 45">
                <Phone className="h-5 w-5" aria-hidden="true" /> Telefonla Görüşme
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={btnWa}>
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp ile Yazın
            </a>
        </div>
    );
}

const H2 = "text-2xl md:text-4xl font-playfair font-bold text-primary";

export default function IzmirKiraAvukatiPage() {
    return (
        <div className="bg-white pb-16 lg:pb-0">
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/izmir-kira-avukati/" },
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
                            "@id": "https://mertkagancetin.com/izmir-kira-avukati/#service",
                            "name": "İzmir Kira Avukatı – Av. Mert Kağan Çetin",
                            "serviceType": "Kira hukuku avukatlığı",
                            "url": "https://mertkagancetin.com/izmir-kira-avukati/",
                            "telephone": "+905445854645",
                            "provider": { "@id": "https://mertkagancetin.com/#attorney" },
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
                        {
                            "@type": "WebPage",
                            "@id": "https://mertkagancetin.com/izmir-kira-avukati/#webpage",
                            "url": "https://mertkagancetin.com/izmir-kira-avukati/",
                            "name": "İzmir Kira Avukatı",
                            "isPartOf": { "@id": "https://mertkagancetin.com/#website" },
                            "about": { "@id": "https://mertkagancetin.com/izmir-kira-avukati/#service" },
                            "dateModified": "2026-10-24",
                            "inLanguage": "tr-TR",
                        },
                    ],
                }) }}
            />


            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 pt-6 pb-12 md:pt-8 md:pb-20">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-4 w-4" aria-hidden="true" />Ana Sayfa</Link>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        <span className="text-secondary" aria-current="page">İzmir Kira Avukatı</span>
                    </nav>
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <h1 className="mb-4 font-playfair text-4xl font-bold leading-tight md:text-6xl">İzmir Kira Avukatı</h1>
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
                            <li key={s.name} className="rounded-xl border border-slate-200 bg-white p-5">
                                <h3 className="mb-1 text-lg font-bold text-primary">{s.name}</h3>
                                <p className="text-slate-700">{s.desc}</p>
                            </li>
                        ))}
                    </ul>
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
                        <p className="mb-5 text-slate-600">Bilgilerinizi bırakın, çalışma saatleri içinde dönüş yapılır.</p>
                        <CallbackForm />
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
                            <li className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />Pazartesi - Cuma: 09:00 - 18:00</li>
                            <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />Av. Mert Kağan Çetin · İzmir Barosu Sicil No: 15556</li>
                        </ul>
                        <p className="mt-4 text-slate-700">Hizmet bölgesi: İzmir&apos;in tüm ilçeleri (Bayraklı, Bornova, Karşıyaka, Buca, Konak ve diğerleri).</p>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                        <iframe
                            title="Ofis konumu – Dedemhan Plaza, Bayraklı/İzmir"
                            src="https://www.google.com/maps?q=Dedemhan+Plaza,+Mansuro%C4%9Flu+Mah.+286%2F3+Sk.,+Bayrakl%C4%B1,+%C4%B0zmir&output=embed"
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

            {/* İlgili yazılar */}
            <nav aria-label="İlgili yazılar" className="container mx-auto max-w-4xl px-4 py-8 text-sm">
                <span className="mr-2 font-bold text-primary">İlgili yazılar:</span>
                {[
                    ["Kiracı tahliye davası", "/izmir-kira-avukati/kiraci-tahliye-davasi/"],
                    ["Tahliye taahhütnamesi", "/tahliye-taahhutnamesi/"],
                    ["İhtiyaç nedeniyle tahliye", "/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/"],
                    ["Kira tespit davası", "/izmir-kira-avukati/kira-tespit-davasi/"],
                    ["Kira borcu icra", "/izmir-kira-avukati/kira-borcu-icra/"],
                    ["Blog", "/blog/"],
                ].map(([t, u], i) => (
                    <span key={u}>{i > 0 && <span className="mx-1 text-slate-400" aria-hidden="true">·</span>}<Link href={u} className="text-slate-700 underline-offset-2 hover:text-secondary hover:underline">{t}</Link></span>
                ))}
            </nav>
        </div>
    );
}
