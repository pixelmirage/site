import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight, Home, ShieldCheck, MapPin, FileText, Scale, Users, ArrowRight, BookOpen } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { CallbackForm } from "@/components/kira-landing/CallbackForm";
import { CTAs } from "@/components/kira-landing/CTAs";
import { services, serviceHref, SITE, type Service } from "@/lib/services";
import { GBP_URL } from "@/lib/gbp";
import { ictihatTopicForService, ICTIHAT_PATH } from "@/lib/blog/ictihat";
import { postHref, hrefForSlug } from "@/lib/blog/utils";

export function serviceMetadata(s: Service): Metadata {
    const url = `${SITE}${serviceHref(s)}`;
    return {
        title: { absolute: s.title },
        description: s.description,
        alternates: { canonical: url },
        openGraph: { title: s.title, description: s.description, url, type: "website", locale: "tr_TR", images: [{ url: "/og-image.jpg", alt: s.h1 }] },
        twitter: { card: "summary_large_image", title: s.title, description: s.description, images: ["/og-image.jpg"] },
    };
}

const H2 = "font-playfair text-2xl font-bold text-primary md:text-3xl";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
/** Renders `[anchor](/path/)` inside service copy as internal links. */
function rich(text: string): ReactNode {
    const out: ReactNode[] = [];
    let last = 0;
    for (const m of text.matchAll(LINK_RE)) {
        if (m.index! > last) out.push(text.slice(last, m.index));
        out.push(<Link key={m.index} href={m[2]} className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">{m[1]}</Link>);
        last = m.index! + m[0].length;
    }
    if (last === 0) return text;
    if (last < text.length) out.push(text.slice(last));
    return out;
}

export function ServicePage({ service: s }: { service: Service }) {
    const url = `${SITE}${serviceHref(s)}`;
    const siblings = services.filter((x) => x.slug !== s.slug);
    const ictihat = ictihatTopicForService(s.slug);
    const ictihatHref = ictihat && ictihat.posts.length > 0 ? `${ICTIHAT_PATH}#${ictihat.key}` : ICTIHAT_PATH;
    return (
        <div className="bg-white pb-16 lg:pb-0">
            <BreadcrumbSchema items={[{ name: "İzmir Kira Avukatı", url: `${SITE}/` }, { name: s.h1, url }]} />
            <FAQSchema faqs={s.faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LegalService",
                    "@id": `${url}#service`,
                    "name": s.h1,
                    "serviceType": s.name,
                    "description": s.description,
                    "url": url,
                    "telephone": "+905445854645",
                    "image": `${SITE}/og-image.jpg`,
                    "provider": { "@id": `${SITE}/#attorney` },
                    "hasMap": GBP_URL,
                    "address": { "@type": "PostalAddress", "streetAddress": "Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17", "addressLocality": "Bayraklı", "addressRegion": "İzmir", "postalCode": "35000", "addressCountry": "TR" },
                    "areaServed": { "@type": "City", "name": "İzmir" },
                    "isPartOf": { "@id": `${SITE}/#kira-service` },
                }) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4 pt-6 pb-12 md:pt-8 md:pb-16">
                    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-4 w-4" aria-hidden="true" />İzmir Kira Avukatı</Link>
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        <span className="text-secondary" aria-current="page">{s.name}</span>
                    </nav>
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <h1 className="mb-4 font-playfair text-3xl font-bold leading-tight md:text-5xl">{s.h1}</h1>
                        <p className="mb-8 text-base leading-relaxed text-slate-200 md:text-xl">{s.lead}</p>
                        <CTAs waText={s.waText} />
                        <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-300">
                            <li className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-secondary" aria-hidden="true" />İzmir Barosu · Sicil 15556</li>
                            <li className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />Bayraklı ofis</li>
                            <li>Ön görüşme telefonla</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* İçerik */}
            <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
                <div className="space-y-12 text-[1.0625rem] leading-8 text-slate-700">
                    <p>{s.intro} Kira hukukundaki diğer işler için <Link href="/" className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">İzmir kira avukatı</Link> sayfasına bakılabilir.</p>
                    {s.sections.map((sec) => (
                        <section key={sec.title} aria-label={sec.title}>
                            <h2 className={`${H2} mb-4`}>{sec.title}</h2>
                            {sec.paragraphs && sec.list && <p className="mb-4">{rich(sec.paragraphs[0])}</p>}
                            {sec.list && (
                                <ul className="space-y-3">
                                    {sec.list.map((li) => {
                                        const i = li.indexOf(": ");
                                        return (
                                            <li key={li} className="flex gap-3">
                                                <Scale className="mt-1.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                                                <span>{i > 0 && i < 90 ? (<><strong className="text-primary">{rich(li.slice(0, i))}:</strong>{rich(li.slice(i + 1))}</>) : rich(li)}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                            {(sec.list ? sec.paragraphs?.slice(1) : sec.paragraphs)?.map((p) => <p key={p} className="mt-4">{rich(p)}</p>)}
                        </section>
                    ))}

                    {/* Süreç */}
                    <section aria-labelledby="surec">
                        <h2 id="surec" className={`${H2} mb-6`}>{s.kw} ile süreç nasıl işler?</h2>
                        <ol className="space-y-3">
                            {s.steps.map((st, i) => (
                                <li key={st.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white" aria-hidden="true">{i + 1}</span>
                                    <div><h3 className="mb-1 text-lg font-bold text-primary">{st.title}</h3><p className="leading-7">{st.desc}</p></div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Arabuluculuk */}
                    <section aria-labelledby="arabuluculuk" className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6">
                        <h2 id="arabuluculuk" className="mb-3 flex items-center gap-2 font-playfair text-xl font-bold text-primary md:text-2xl"><Users className="h-6 w-6 text-secondary" aria-hidden="true" />Arabuluculuk şartı</h2>
                        <p>{rich(s.mediation)}</p>
                    </section>

                    {/* Mahkeme */}
                    <section aria-labelledby="mahkeme">
                        <h2 id="mahkeme" className={`${H2} mb-4`}>Görevli ve yetkili merci</h2>
                        {s.court.map((c) => <p key={c} className="mb-3">{c}</p>)}
                    </section>

                    {/* Belgeler */}
                    <section aria-labelledby="belgeler">
                        <h2 id="belgeler" className={`${H2} mb-4`}>Gerekli belgeler</h2>
                        <ul className="space-y-2">
                            {s.documents.map((d) => (
                                <li key={d} className="flex gap-3"><FileText className="mt-1.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />{d}</li>
                            ))}
                        </ul>
                        <p className="mt-3 text-sm text-slate-500">Belgelerin tamamı elinizde olmasa da {s.kw} ile ön görüşme yapılabilir.</p>
                    </section>
                </div>
            </div>

            {/* CTA + Form */}
            <section className="border-y border-slate-200 bg-slate-50 py-12 md:py-16">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-slate-800 p-6 text-white md:p-8">
                        <h2 className="font-playfair text-2xl font-bold md:text-3xl">{s.kw} ile telefonla görüşün</h2>
                        <p className="text-slate-200">Ön görüşme telefonla yapılır; belgeler WhatsApp veya e-posta ile iletilebilir. Av. Mert Kağan Çetin · İzmir Barosu Sicil No: 15556.</p>
                        <CTAs waText={s.waText} />
                    </div>
                    <div id="geri-arama" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
                        <h2 className="mb-1 font-playfair text-2xl font-bold text-primary">Sizi arayalım</h2>
                        <p className="mb-5 text-slate-600">Bilgilerinizi bırakın, telefonla dönüş yapılır.</p>
                        <CallbackForm source={serviceHref(s)} />
                    </div>
                </div>
            </section>

            {/* SSS */}
            <section className="py-12 md:py-16" aria-labelledby="sss">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 id="sss" className={`${H2} mb-6 text-center`}>Sık sorulan sorular</h2>
                    <div className="space-y-3">
                        {s.faqs.map((f) => (
                            <details key={f.question} className="group rounded-xl border border-slate-200 bg-white px-5 py-4 open:shadow-sm">
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-bold text-primary marker:hidden">
                                    {f.question}<ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 transition-transform group-open:rotate-90" aria-hidden="true" />
                                </summary>
                                <p className="mt-3 leading-7 text-slate-700">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* İlgili Yargıtay ve BAM kararları */}
            <section className="py-12 md:py-14" aria-labelledby="ictihatlar">
                <div className="container mx-auto max-w-3xl px-4">
                    <h2 id="ictihatlar" className={`${H2} mb-4`}>İlgili Yargıtay ve BAM kararları</h2>
                    {ictihat && ictihat.posts.length > 0 ? (
                        <>
                            <p className="mb-5 leading-7 text-slate-700">{ictihat.desc}</p>
                            <ul className="mb-6 space-y-3">
                                {ictihat.posts.slice(0, 4).map((p) => (
                                    <li key={p.slug} className="rounded-xl border border-slate-200 bg-white p-4">
                                        <Link href={postHref(p)} className="font-semibold text-primary hover:text-secondary">{p.title}</Link>
                                        {p.decision.court && <p className="mt-1 text-sm text-slate-500">{p.decision.court}{p.decision.esas && `, E. ${p.decision.esas}`}{p.decision.karar && ` K. ${p.decision.karar}`}</p>}
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p className="mb-5 leading-7 text-slate-700">Kira hukukuna ilişkin Yargıtay ve BAM karar notları konu başlıklarına göre içtihat sayfasında toplanır; bu başlıktaki yeni kararlar yayımlandıkça eklenir.</p>
                    )}
                    <Link href={ictihatHref} className="inline-flex items-center gap-2 font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary">
                        <Scale className="h-4 w-4 text-secondary" aria-hidden="true" />
                        {ictihat && ictihat.posts.length > 0 ? `Kira Hukuku İçtihatları: ${ictihat.title}` : "Kira Hukuku İçtihatları"}
                    </Link>
                </div>
            </section>

            {/* İlgili içerikler */}
            <section className="border-t border-slate-200 bg-slate-50 py-12" aria-labelledby="ilgili">
                <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
                    <div>
                        <h2 id="ilgili" className="mb-4 flex items-center gap-2 font-playfair text-xl font-bold text-primary"><BookOpen className="h-5 w-5 text-secondary" aria-hidden="true" />İlgili makaleler</h2>
                        <ul className="space-y-2">
                            {s.blogs.map((b) => ({ ...b, href: hrefForSlug(b.slug) })).filter((b) => b.href).map((b) => (
                                <li key={b.slug}><Link href={b.href!} className="text-slate-700 underline-offset-2 hover:text-secondary hover:underline">{b.title}</Link></li>
                            ))}
                            {s.extraLinks?.map((l) => (
                                <li key={l.href}><Link href={l.href} className="font-semibold text-slate-700 underline-offset-2 hover:text-secondary hover:underline">{l.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 font-playfair text-xl font-bold text-primary">Diğer kira hukuku hizmetleri</h2>
                        <ul className="space-y-2">
                            {siblings.map((x) => (
                                <li key={x.slug}><Link href={serviceHref(x)} className="inline-flex items-center gap-1 text-slate-700 hover:text-secondary"><ArrowRight className="h-4 w-4 text-secondary" aria-hidden="true" />{x.name}</Link></li>
                            ))}
                            <li><Link href="/" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-secondary"><ArrowRight className="h-4 w-4 text-secondary" aria-hidden="true" />İzmir kira avukatı – tüm hizmetler</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="container mx-auto mt-10 max-w-3xl px-4 text-xs leading-6 text-slate-500">Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Somut dosyanın değerlendirilmesi belgeler incelendikten sonra yapılabilir.</p>
            </section>
        </div>
    );
}
