import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Gavel, ArrowRight, Scale } from "lucide-react";
import { getIctihatByTopic, ICTIHAT_PATH, type IctihatPost } from "@/lib/blog/ictihat";
import { services, serviceHref, SITE } from "@/lib/services";
import { postHref } from "@/lib/blog/utils";

const URL = `${SITE}${ICTIHAT_PATH}`;
const TITLE = "Kira Hukuku İçtihatları | İzmir Kira Avukatı Av. Mert Kağan Çetin";
const DESC = "Kira hukukuna ilişkin Yargıtay ve BAM kararları konu başlıklarına göre: tahliye, kira tespit, uyarlama, kira alacağı, tahliye taahhüdü, sözleşme ve aidat.";

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESC,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESC, url: URL, type: "website", locale: "tr_TR", images: [{ url: "/og-image.jpg", alt: "Kira Hukuku İçtihatları" }] },
    twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og-image.jpg"] },
};

const trDate = (iso: string) => {
    const [y, m, d] = iso.split("-");
    return d && m && y ? `${d}.${m}.${y}` : iso;
};

function DecisionCard({ p }: { p: IctihatPost }) {
    const d = p.decision;
    return (
        <li>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md md:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
                    {d.courtType && (
                        <span className={d.courtType === "Yargıtay" ? "rounded-full bg-primary px-2.5 py-1 text-white" : "rounded-full bg-secondary/15 px-2.5 py-1 text-primary"}>{d.courtType}</span>
                    )}
                    {d.court && <span className="text-slate-600">{d.court}</span>}
                </div>
                <h3 className="mb-2 font-playfair text-lg font-bold leading-snug text-primary md:text-xl">
                    <Link href={postHref(p)} className="hover:text-secondary">{p.title}</Link>
                </h3>
                <p className="mb-3 text-sm text-slate-500">
                    {d.esas && <>E. {d.esas}{d.karar && <> · K. {d.karar}</>}</>}
                    {d.tarih && <> · Karar tarihi {d.tarih}</>}
                    {d.esas && " · "}Yayın <time dateTime={p.date}>{trDate(p.date)}</time>
                </p>
                <p className="mb-4 leading-7 text-slate-700">{p.excerpt}</p>
                <Link href={postHref(p)} className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 hover:text-secondary" aria-label={`Karar notunu oku: ${p.title}`}>
                    Karar notunu oku <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </article>
        </li>
    );
}

export default function IctihatHubPage() {
    const topics = getIctihatByTopic().filter((t) => t.posts.length > 0);
    const all = topics.flatMap((t) => t.posts);

    const collection = {
        "@context": "https://schema.org",
        "@graph": [{
        "@type": "CollectionPage",
        "@id": `${URL}#webpage`,
        "breadcrumb": { "@id": `${URL}#breadcrumb` },
        "url": URL,
        "name": "Kira Hukuku İçtihatları",
        "description": DESC,
        "inLanguage": "tr-TR",
        "isPartOf": { "@id": `${SITE}/#website` },
        "author": { "@id": `${SITE}/#person` },
        "about": { "@type": "Thing", "name": "Kira hukuku" },
        "mainEntity": {
            "@type": "ItemList",
            "name": "Kira hukukuna ilişkin Yargıtay ve BAM karar notları",
            "numberOfItems": all.length,
            "itemListElement": all.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `${SITE}${postHref(p)}`,
                "name": p.title,
            })),
        },
        }, {
            "@type": "BreadcrumbList",
            "@id": `${URL}#breadcrumb`,
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "İzmir Kira Avukatı", "item": `${SITE}/` },
                { "@type": "ListItem", "position": 2, "name": "Kira Hukuku İçtihatları", "item": URL },
            ],
        }],
    };

    return (
        <div className="bg-white pb-16 lg:pb-0">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />

            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 pt-6 pb-12 md:pt-8 md:pb-16">
                    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-4 w-4" aria-hidden="true" />İzmir Kira Avukatı</Link>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        <span className="text-secondary" aria-current="page">Kira Hukuku İçtihatları</span>
                    </nav>
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-slate-200">
                            <Gavel className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />Yargıtay ve BAM kararları
                        </div>
                        <h1 className="mb-5 font-playfair text-3xl font-bold leading-tight md:text-5xl">Kira Hukuku İçtihatları</h1>
                        <p className="text-base leading-relaxed text-slate-200 md:text-lg">
                            Kira uyuşmazlıklarına ilişkin Yargıtay ve bölge adliye mahkemesi (BAM) kararları üzerine hazırlanan yazılar, konu başlıklarına göre bu sayfada toplanır. Her yazıda kararın künyesi, uyuşmazlığın özeti, mahkemenin gerekçesi ve uygulamaya yansıması yer alır; yeni karar notları yayımlandıkça listeye eklenir.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-4 py-10 md:py-14">
                <nav aria-label="Konu başlıkları" className="mb-12">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Konu başlıkları</p>
                    <ul className="flex flex-wrap gap-2">
                        {topics.map((t) => (
                            <li key={t.key}>
                                <a href={`#${t.key}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-primary hover:border-secondary hover:bg-secondary/10">
                                    {t.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="space-y-16">
                    {topics.map((t) => (
                        <section key={t.key} id={t.key} aria-labelledby={`${t.key}-h`} className="scroll-mt-28">
                            <h2 id={`${t.key}-h`} className="mb-3 flex items-center gap-3 font-playfair text-2xl font-bold text-primary md:text-3xl">
                                <span className="h-8 w-1 rounded-full bg-secondary" aria-hidden="true" />{t.title}
                            </h2>
                            <p className="mb-2 leading-7 text-slate-700">{t.desc}</p>
                            <p className="mb-6 text-sm text-slate-600">
                                Süreç ve belgeler için: <Link href={`/${t.serviceSlug}/`} className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">{t.serviceName} sayfası</Link>
                            </p>
                            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                {t.posts.map((p) => <DecisionCard key={p.slug} p={p} />)}
                            </ul>
                        </section>
                    ))}
                </div>

                <section aria-labelledby="hizmetler" className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                    <h2 id="hizmetler" className="mb-4 font-playfair text-xl font-bold text-primary md:text-2xl">Kira hukuku hizmetleri</h2>
                    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {services.map((s) => (
                            <li key={s.slug}><Link href={serviceHref(s)} className="inline-flex items-center gap-2 text-slate-700 hover:text-secondary"><Scale className="h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />{s.h1}</Link></li>
                        ))}
                    </ul>
                    <p className="mt-6 text-sm text-slate-600">Ön görüşme telefonla yapılabilir: <a href="tel:+905445854645" className="font-semibold text-primary">0544 585 46 45</a>. Tüm yazılar için <Link href="/blog/" className="font-semibold text-primary underline underline-offset-2">kira hukuku makaleleri</Link>.</p>
                </section>

                <p className="mt-10 text-xs leading-6 text-slate-500">Karar notları genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Her dosyanın sonucu kendi belgelerine ve somut olgularına göre değişir.</p>
            </div>
        </div>
    );
}
