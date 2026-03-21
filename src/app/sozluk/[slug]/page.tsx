import { notFound } from "next/navigation";
import { glossaryTerms, getGlossaryTerm, getRelatedTerms, categoryLabels } from "@/lib/glossary";
import { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, ArrowRight, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { DefinedTermSchema } from "@/components/seo/DefinedTermSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import { YouTubeShorts } from "@/components/ui/YouTubeShorts";

export async function generateStaticParams() {
    return glossaryTerms.map((term) => ({
        slug: term.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const term = getGlossaryTerm(slug);

    if (!term) return {};

    const url = `https://mertkagancetin.com/sozluk/${slug}/`;

    return {
        title: `${term.term} Nedir?`,
        description: term.shortDescription,
        keywords: term.keywords,
        openGraph: {
            title: `${term.term} Nedir?`,
            description: term.shortDescription,
            url: url,
            type: "article",
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const term = getGlossaryTerm(slug);

    if (!term) {
        notFound();
    }

    const relatedTerms = getRelatedTerms(slug);
    const termUrl = `https://mertkagancetin.com/sozluk/${slug}/`;

    const paragraphs = term.detailedExplanation.split("\n\n").filter(Boolean);

    return (
        <main className="bg-white">
            <DefinedTermSchema
                term={term.term}
                description={term.definition}
                url={termUrl}
                inDefinedTermSet="Hukuk Sözlüğü"
                lastUpdated={term.lastUpdated}
            />
            <FAQSchema faqs={term.faqs} />
            {term.youtubeVideoId && (
                <VideoSchema
                    name={`${term.term} Nedir? | Kısa Video`}
                    description={term.shortDescription}
                    thumbnailUrl={`https://img.youtube.com/vi/${term.youtubeVideoId}/maxresdefault.jpg`}
                    uploadDate={term.lastUpdated}
                    contentUrl={`https://www.youtube.com/shorts/${term.youtubeVideoId}`}
                    embedUrl={`https://www.youtube.com/embed/${term.youtubeVideoId}`}
                    duration={term.videoDuration}
                />
            )}
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Hukuk Sözlüğü", url: "https://mertkagancetin.com/sozluk/" },
                    { name: term.term, url: termUrl },
                ]}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/sozluk/" className="hover:text-white transition-colors">
                            Hukuk Sözlüğü
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">{term.term}</span>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-slate-300 mb-6">
                            <Scale className="w-3.5 h-3.5 text-secondary" />
                            {term.legalBasis}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                            {term.term} Nedir?
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            {categoryLabels[term.category]}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 prose prose-slate prose-lg">
                            {/* Featured Snippet Definition */}
                            <div className="not-prose bg-slate-50 border-l-4 border-secondary p-6 rounded-r-xl mb-8">
                                <p className="text-xl leading-relaxed font-medium text-slate-800">
                                    <strong>{term.term}</strong>, {term.definition.split(". ").slice(1).join(". ")}
                                </p>
                            </div>

                            {/* Detailed Explanation */}
                            {paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            {/* YouTube Shorts Video */}
                            {term.youtubeVideoId && (
                                <YouTubeShorts
                                    videoId={term.youtubeVideoId}
                                    title={`${term.term} - Kısa Video ile Açıklama`}
                                />
                            )}

                            {/* Legal Basis Callout */}
                            <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                                <h4 className="font-bold text-blue-900 text-lg mb-2">Yasal Dayanak: {term.legalBasis}</h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    Bu terim {term.legalBasis} kapsamında düzenlenmiştir. Detaylı hukuki değerlendirme için bir avukattan danışmanlık almanız tavsiye edilir.
                                </p>
                            </div>

                            {/* Related Glossary Terms */}
                            {relatedTerms.length > 0 && (
                                <div className="not-prose bg-white border border-slate-200 rounded-xl p-6 my-8">
                                    <h3 className="flex items-center gap-2 font-bold text-primary text-lg mb-4">
                                        <Scale className="w-5 h-5 text-secondary" />
                                        İlgili Hukuki Terimler
                                    </h3>
                                    <div className="space-y-3">
                                        {relatedTerms.map((rt) => (
                                            <Link
                                                key={rt.slug}
                                                href={`/sozluk/${rt.slug}`}
                                                className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium"
                                            >
                                                → {rt.term}: {rt.shortDescription}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/sozluk/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                        Tüm Terimler <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            )}

                            {/* Related Blog Posts */}
                            {term.relatedBlogSlugs.length > 0 && (
                                <div className="not-prose bg-white border border-slate-200 rounded-xl p-6 my-8">
                                    <h3 className="flex items-center gap-2 font-bold text-primary text-lg mb-4">
                                        <BookOpen className="w-5 h-5 text-secondary" />
                                        İlgili Makaleler
                                    </h3>
                                    <div className="space-y-3">
                                        {term.relatedBlogSlugs.map((blogSlug) => (
                                            <Link
                                                key={blogSlug}
                                                href={`/blog/${blogSlug}`}
                                                className="block text-sm text-slate-700 hover:text-primary transition-colors font-medium"
                                            >
                                                → {blogSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link href="/blog/" className="inline-flex items-center gap-1 text-xs font-bold text-secondary mt-4 hover:gap-2 transition-all">
                                        Tüm Makaleler <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            )}

                            <p className="text-xs text-slate-400 italic not-prose">
                                Son güncelleme: {new Date(term.lastUpdated).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-primary text-white p-8 rounded-2xl sticky top-24">
                                <h3 className="text-2xl font-playfair font-bold mb-4">Hukuki Destek Alın</h3>
                                <p className="text-slate-300 mb-6">
                                    {term.term} konusunda profesyonel hukuki danışmanlık için bizimle iletişime geçin.
                                </p>
                                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold" asChild>
                                    <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        WhatsApp ile Yazın
                                    </a>
                                </Button>
                                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                    <p className="text-xs text-slate-400 mb-2">veya telefonla arayın</p>
                                    <a href="tel:+905445854645" className="text-secondary hover:text-white transition-colors font-medium text-sm">
                                        0544 585 46 45
                                    </a>
                                </div>
                            </div>

                            <div className="border border-slate-200 rounded-2xl p-8">
                                <h3 className="font-bold text-lg mb-4">Sıkça Sorulan Sorular</h3>
                                <div className="space-y-4">
                                    {term.faqs.map((faq, i) => (
                                        <div key={i}>
                                            <h4 className="font-bold text-sm text-primary mb-1">{faq.question}</h4>
                                            <p className="text-xs text-muted-foreground">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Hub CTA */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
                        <h3 className="text-xl font-playfair font-bold mb-3">İzmir&apos;de Hukuki Desteğe mi İhtiyacınız Var?</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-5">
                            Kira, iş, boşanma ve tazminat hukuku alanlarında uzman avukatlık hizmeti alın. Hemen bize ulaşın.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/iletisim/" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                Hemen Arayın <ArrowRight className="w-4 h-4" />
                            </Link>
                            {term.relatedServiceAnchor && (
                                <Link href={`/hizmetler${term.relatedServiceAnchor}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                    İlgili Hizmet
                                </Link>
                            )}
                            <Link href="/hizmetler/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                Tüm Hizmetler
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
