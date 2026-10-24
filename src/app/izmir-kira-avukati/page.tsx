import { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ChevronRight, Home, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";

const pageTitle = "İzmir Kira Avukatı | Tahliye ve Kira Davaları";
const pageDescription = "İzmir kira avukatı Av. Mert Kağan Çetin: tahliye, kira tespit, kira uyarlama, kira alacağı ve icra takibi. İzmir, Manisa, Aydın. Tel: 0544 585 46 45";
const PHONE = "tel:+905445854645";
const WHATSAPP = "https://wa.me/905445854645";

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
    { name: "Tahliye davası", desc: "İhtiyaç, temerrüt, iki haklı ihtar, 10 yıllık uzama ve yeni malik sebepleriyle tahliye.", url: "/izmir-kira-avukati/kiraci-tahliye-davasi/" },
    { name: "Kira tespit davası", desc: "Kira bedelinin emsallere göre belirlenmesi.", url: "/izmir-kira-avukati/kira-tespit-davasi/" },
    { name: "Kira uyarlama davası", desc: "Değişen koşullara göre kira bedelinin uyarlanması.", url: "/izmir-kira-avukati/kira-uyarlama-davasi/" },
    { name: "Kira alacağı ve icra takibi", desc: "Ödenmeyen kira ve aidat için icra takibi ve itiraz süreci.", url: "/izmir-kira-avukati/kira-borcu-icra/" },
    { name: "Tahliye taahhüdü ile icra", desc: "Yazılı tahliye taahhüdüne dayalı icra yoluyla tahliye.", url: "/tahliye-taahhutnamesi/" },
    { name: "Kira sözleşmesi hazırlama ve inceleme", desc: "Konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi.", url: "/izmir-kira-avukati/kira-sozlesmesi-rehberi/" },
    { name: "Arabuluculuk", desc: "Dava öncesi zorunlu arabuluculuk görüşmelerinde temsil.", url: "/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" },
];

const steps = [
    { title: "Telefonla ön görüşme", desc: "Durumunuzu telefonda dinliyor, hangi yolların açık olduğunu konuşuyoruz." },
    { title: "Belge inceleme", desc: "Kira sözleşmesi, ihtarname, taahhütname ve ödeme kayıtlarını birlikte inceliyoruz." },
    { title: "Süreç takibi", desc: "Arabuluculuk, dava veya icra aşamalarını takip ediyor, her adımda sizi bilgilendiriyoruz." },
];

const faqs = [
    { question: "Size nasıl ulaşabilirim?", answer: "Ön görüşmeler telefonla yapılır: 0544 585 46 45. WhatsApp üzerinden de yazabilirsiniz. Ofis Bayraklı/İzmir'dedir; yüz yüze görüşme randevuyla yapılır." },
    { question: "Hangi şehirlerde kira davalarını takip ediyorsunuz?", answer: "İzmir'in tüm ilçeleri ile Manisa ve Aydın'daki kira davaları ve icra takipleri takip edilir." },
    { question: "Görüşmeye hangi belgeleri getirmeliyim?", answer: "Kira sözleşmesi, varsa tahliye taahhütnamesi, gönderilen veya alınan ihtarnameler, kira ödeme dekontları ve tapu bilgisi. Elinizde olmayan belge görüşmeye engel değildir." },
    { question: "Kiraya veren ve kiracı olarak başvurabilir miyim?", answer: "Evet. Hem kiraya verenler hem kiracılar için tahliye, kira bedeli, depozito ve sözleşme uyuşmazlıklarında hizmet verilir." },
];

function CallButtons({ light = false }: { light?: boolean }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2 text-lg" asChild>
                <a href={PHONE}><Phone className="w-5 h-5" />0544 585 46 45</a>
            </Button>
            <Button size="lg" variant="outline" className={light ? "border-primary text-primary hover:bg-primary hover:text-white gap-2" : "!bg-transparent border-white text-white hover:bg-white hover:text-slate-900 gap-2"} asChild>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp ile Yazın</a>
            </Button>
        </div>
    );
}

export default function IzmirKiraAvukatiPage() {
    return (
        <div className="bg-white">
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
                                { "@type": "City", "name": "Manisa" },
                                { "@type": "City", "name": "Aydın" },
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
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center gap-2 text-sm text-slate-300 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">İzmir Kira Avukatı</span>
                    </nav>
                    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-5 leading-tight">İzmir Kira Avukatı</h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                            Kiraya verenler ve kiracılar için tahliye, kira bedeli ve kira alacağı uyuşmazlıklarında dava ve icra takibi. Ön görüşme telefonla yapılır.
                        </p>
                        <CallButtons />
                        <p className="mt-6 text-sm text-slate-400 flex flex-wrap justify-center gap-x-3 gap-y-1">
                            <span>Av. Mert Kağan Çetin</span>
                            <span aria-hidden="true">·</span>
                            <span>İzmir Barosu Sicil No: 15556</span>
                            <span aria-hidden="true">·</span>
                            <span>Bayraklı/İzmir</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Hizmetler */}
            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary text-center mb-3">Kira Hukuku Hizmetleri</h2>
                    <p className="text-center text-slate-600 mb-10">Kiraya veren ve kiracı tarafında takip edilen işler</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((s) => (
                            <div key={s.name} className="flex gap-3 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-primary">{s.name}</h3>
                                    <p className="text-slate-700">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nasıl çalışıyoruz */}
            <section className="py-14 md:py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary text-center mb-10">Nasıl Çalışıyoruz?</h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((s, i) => (
                            <li key={s.title} className="bg-white rounded-xl border border-slate-200 p-6">
                                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">{i + 1}</span>
                                <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
                                <p className="text-slate-700">{s.desc}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="mt-10"><CallButtons light /></div>
                </div>
            </section>

            {/* Hizmet bölgesi ve ofis */}
            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">Hizmet Bölgesi</h2>
                        <p className="text-slate-700 text-lg">İzmir (tüm ilçeler), Manisa ve Aydın&apos;daki kira davaları ve icra takipleri.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">Ofis</h2>
                        <ul className="space-y-2 text-slate-700 text-lg">
                            <li className="flex gap-2"><MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                            <li className="flex gap-2"><Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" /><a href={PHONE} className="font-bold text-primary hover:text-secondary">0544 585 46 45</a></li>
                            <li>Av. Mert Kağan Çetin · İzmir Barosu Sicil No: 15556</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SSS */}
            <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary text-center mb-8">Sık Sorulan Sorular</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <div key={f.question} className="rounded-xl border border-slate-200 bg-white px-5 py-4 md:px-6 md:py-5 shadow-sm">
                                <h3 className="font-serif text-base md:text-lg font-bold leading-snug text-primary">{f.question}</h3>
                                <p className="mt-2 text-[0.95rem] md:text-base leading-7 text-slate-600">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Son CTA */}
            <section className="bg-gradient-to-br from-primary to-slate-800 text-white py-14 md:py-16">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Kira uyuşmazlığınızı telefonla görüşelim</h2>
                    <p className="text-slate-300 mb-8">Ön görüşme telefonla yapılır; belgeler sonrasında birlikte incelenir.</p>
                    <CallButtons />
                </div>
            </section>

            {/* İlgili yazılar */}
            <section className="py-10">
                <div className="container mx-auto px-4 max-w-3xl">
                    <p className="text-lg font-playfair font-bold text-primary mb-3">İlgili yazılar</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-700">
                        <li><Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="hover:text-secondary underline-offset-2 hover:underline">Kiracı tahliye davası</Link></li>
                        <li><Link href="/tahliye-taahhutnamesi/" className="hover:text-secondary underline-offset-2 hover:underline">Tahliye taahhütnamesi</Link></li>
                        <li><Link href="/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" className="hover:text-secondary underline-offset-2 hover:underline">İhtiyaç nedeniyle tahliye</Link></li>
                        <li><Link href="/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" className="hover:text-secondary underline-offset-2 hover:underline">İki haklı ihtar ile tahliye</Link></li>
                        <li><Link href="/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/" className="hover:text-secondary underline-offset-2 hover:underline">Kira tespit davası ne zaman açılır?</Link></li>
                        <li><Link href="/blog/" className="hover:text-secondary underline-offset-2 hover:underline">Tüm kira hukuku yazıları</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
