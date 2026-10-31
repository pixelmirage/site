import { isIndexablePost, postHref, type PostData } from "@/lib/blog/utils";
import { isIctihatPost, ICTIHAT_PATH } from "@/lib/blog/ictihat";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Calendar, Clock, ChevronLeft, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PHOTO } from "@/lib/photo";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { VideoSchema } from "@/components/seo/VideoSchema";
import dynamic from "next/dynamic";
const YouTubeShorts = dynamic(() => import("@/components/ui/YouTubeShorts").then(m => ({ default: m.YouTubeShorts })));
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { articleProseClasses } from "@/lib/prose-classes";

export const SITE_URL = "https://mertkagancetin.com";

export function postMetadata(post: PostData) {
    const url = `${SITE_URL}${postHref(post)}`;

    return {
        title: post.title,
        description: post.excerpt,
        authors: [{ name: "Av. Mert Kağan Çetin" }],
        openGraph: {
            type: 'article',
            locale: post.lang === 'en' ? 'en_US' : 'tr_TR',
            url: url,
            title: post.title,
            description: post.excerpt,
            siteName: 'Av. Mert Kağan Çetin - İzmir Kira Avukatı',
            publishedTime: post.date,
            modifiedTime: post.dateModified || post.date,
            authors: ['Av. Mert Kağan Çetin'],
            images: [
                {
                    url: post.coverImage || '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage || '/og-image.jpg'],
        },
        alternates: {
            canonical: url,
        },
        // Kira hukuku dışındaki eski yazılar: erişilebilir, ancak dizine eklenmez
        ...(isIndexablePost(post) ? {} : { robots: { index: false, follow: true } }),
    };
}

export function PostArticle({ post }: { post: PostData }) {
    const slug = post.slug;
    const isIctihat = post.section === "ictihat";
    const section = isIctihat
        ? { name: "Kira Hukuku İçtihatları", href: ICTIHAT_PATH, allLabel: "Tüm Kararlar" }
        : { name: "Blog", href: "/blog/", allLabel: "Tüm Makaleler" };
    const extraFaqs = (post.faqs || []).filter((f) => !post.content.includes(f.question.slice(0, 25)));
    const isKira = isIctihat || /kira|tahliye|depozito|kiraci/.test(post.slug);
    const kiraNotes = [
        { before: "Kira ve tahliye süreçlerine ilişkin hizmet bilgileri için ", anchor: "İzmir kira avukatı", after: " sayfamızı inceleyebilirsiniz." },
        { before: "Ev sahibi ve kiracı uyuşmazlıklarında dava ve icra süreçleri hakkında ayrıntılı bilgi ", anchor: "İzmir kira avukatı Av. Mert Kağan Çetin", after: " sayfasında yer almaktadır." },
        { before: "Somut dosyanızın değerlendirilmesi için ", anchor: "İzmir'de kira davaları", after: " sayfasındaki iletişim bilgilerinden telefonla ön görüşme yapabilirsiniz." },
    ];
    const kiraNote = kiraNotes[post.slug.length % kiraNotes.length];

    const articleUrl = `${SITE_URL}${postHref(post)}`;

    return (
        <article lang={post.lang || "tr"} className="bg-white min-h-screen pb-24">
            {/* SEO Schemas */}
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                datePublished={post.date}
                dateModified={post.dateModified}
                image={post.coverImage}
                url={articleUrl}
            />
            {post.faqs && post.faqs.length > 0 && (
                <FAQSchema faqs={post.faqs} />
            )}
            {post.youtubeVideoId && (
                <VideoSchema
                    name={`${post.title} | Kısa Video`}
                    description={post.excerpt}
                    thumbnailUrl={`https://img.youtube.com/vi/${post.youtubeVideoId}/maxresdefault.jpg`}
                    uploadDate={post.dateModified || post.date}
                    contentUrl={`https://www.youtube.com/shorts/${post.youtubeVideoId}`}
                    embedUrl={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                    duration={post.videoDuration}
                />
            )}
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: section.name, url: `${SITE_URL}${section.href}` },
                    { name: post.title, url: articleUrl }
                ]}
            />

            {/* Background Decor */}
            <div className="h-[400px] w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
                    <div className="grid grid-cols-6 gap-4 p-4">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="aspect-square border border-slate-400 rotate-12" />
                        ))}
                    </div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary mb-6 shadow-sm">
                        <Calendar className="w-3 h-3 text-secondary-foreground" />
                        {post.date}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary max-w-4xl mx-auto leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} Dakika Okuma
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>Yazar: Av. Mert Kağan Çetin</span>
                        {post.dateModified && post.dateModified !== post.date && (
                            <>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <span>Güncelleme: {post.dateModified}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb Navigation */}
                    <BreadcrumbNav
                        items={[
                            { label: section.name, href: section.href },
                            { label: post.title }
                        ]}
                    />

                    {/* YouTube Shorts Video */}
                    {post.youtubeVideoId && (
                        <YouTubeShorts
                            videoId={post.youtubeVideoId}
                            title={`${post.title} - Kısa Video`}
                        />
                    )}

                    {/* MDX Content Rendering */}
                    <div className={articleProseClasses}>
                        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                    </div>

                    {/* Visible FAQ: frontmatter FAQs not already in the body (keeps FAQPage schema == visible content) */}
                    {extraFaqs.length > 0 && (
                        <section className="mt-12">
                            <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-primary mb-6">Sık Sorulan Sorular</h2>
                            <div className="space-y-4">
                                {extraFaqs.map((f) => (
                                    <div key={f.question} className="rounded-xl border border-slate-200 bg-white px-5 py-4 md:px-6 md:py-5 shadow-sm">
                                        <h3 className="font-serif text-lg font-bold text-primary">{f.question}</h3>
                                        <p className="mt-3 border-t border-slate-100 pt-3 text-slate-700 leading-7">{f.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {isKira && (
                        <div className="mt-12 rounded-xl border border-secondary/30 bg-secondary/5 p-5 text-slate-700 leading-7">
                            {kiraNote.before}<Link href="/" className="font-semibold text-secondary underline underline-offset-2 hover:text-primary">{kiraNote.anchor}</Link>{kiraNote.after}
                        </div>
                    )}

                    <div className="mt-16 pt-16 border-t border-slate-100 italic text-slate-400 text-sm">
                        Uyarı: Bu makale bilgilendirme amaçlıdır. Hukuki işlemlerinizde hak kaybı yaşamamak için mutlaka bir avukat ile iletişime geçiniz.
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-slate-50 rounded-3xl">
                        <div className="flex items-center gap-4">
                            <Image src={PHOTO.avatar} alt="Av. Mert Kağan Çetin" width={56} height={56} sizes="56px" className="h-14 w-14 flex-shrink-0 rounded-full object-cover ring-2 ring-secondary/40" />
                            <div>
                                <p className="font-serif tracking-tight font-bold text-primary">Av. Mert Kağan Çetin</p>
                            </div>
                        </div>
                        <Button className="bg-primary text-white hover:bg-primary/90 gap-2 px-8" asChild>
                            <Link href="/iletisim/">
                                Danışmanlık Alın
                            </Link>
                        </Button>
                    </div>

                    {isIctihatPost(post) && (
                        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-secondary/30 bg-secondary/5 p-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm leading-relaxed text-slate-700">Bu karar notu, kira hukukuna ilişkin diğer Yargıtay ve BAM kararlarıyla birlikte konu başlıklarına göre listelenir.</p>
                            <Link href={ICTIHAT_PATH} className="inline-flex flex-shrink-0 items-center gap-1 text-sm font-bold text-primary hover:text-secondary">
                                Kira Hukuku İçtihatları <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    )}

                    {/* Related Posts - Internal Linking */}
                    <RelatedPosts
                        currentSlug={slug}
                        currentTags={post.tags || []}
                        section={post.section}
                    />

                    {/* Hub Link - İzmir Kira Avukatı */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
                        <p className="font-serif tracking-tight text-xl font-playfair font-bold mb-3">İzmir&apos;de kira uyuşmazlığınız mı var?</p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-5">
                            Tahliye, kira tespit, kira uyarlama, kira alacağı ve icra takibi konularında ön görüşme telefonla yapılabilir: 0544 585 46 45.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="tel:+905445854645" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                Ara: 0544 585 46 45 <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                İzmir Kira Avukatı
                            </Link>
                            <Link href={section.href} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                {section.allLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
