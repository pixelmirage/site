import { getPostBySlug, getAllPosts } from "@/lib/blog/utils";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    const url = `https://mertkagancetin.com/blog/${slug}`;

    return {
        title: post.title,
        description: post.excerpt,
        authors: [{ name: "Av. Mert Kağan Çetin" }],
        openGraph: {
            type: 'article',
            locale: 'tr_TR',
            url: url,
            title: post.title,
            description: post.excerpt,
            siteName: 'Av. Mert Kağan Çetin - İzmir Kira Avukatı',
            publishedTime: post.date,
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
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleUrl = `https://mertkagancetin.com/blog/${slug}`;

    return (
        <article className="bg-white min-h-screen pb-24">
            {/* SEO Schemas */}
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                datePublished={post.date}
                image={post.coverImage}
                url={articleUrl}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Blog", url: "https://mertkagancetin.com/blog" },
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
                            5 Dakika Okuma
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>Yazar: Av. Mert Kağan Çetin</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb Navigation */}
                    <BreadcrumbNav
                        items={[
                            { label: "Blog", href: "/blog" },
                            { label: post.title }
                        ]}
                    />

                    {/* MDX Content Rendering */}
                    <div className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-playfair prose-headings:font-black prose-headings:text-slate-900
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-16 prose-h1:leading-tight prose-h1:bg-gradient-to-r prose-h1:from-primary/10 prose-h1:to-transparent prose-h1:py-4 prose-h1:px-6 prose-h1:-mx-6 prose-h1:rounded-lg prose-h1:border-l-4 prose-h1:border-primary
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-16 prose-h2:bg-slate-100 prose-h2:py-4 prose-h2:px-6 prose-h2:-mx-6 prose-h2:rounded-lg prose-h2:border-l-4 prose-h2:border-secondary
            prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-primary prose-h3:font-bold prose-h3:border-b prose-h3:border-slate-200 prose-h3:pb-2
            prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:text-base prose-p:mb-6
            prose-strong:text-primary prose-strong:font-bold
            prose-a:text-secondary prose-a:font-semibold prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            prose-li:text-slate-700 prose-li:mb-2 prose-li:text-base prose-li:leading-relaxed
            prose-ul:my-6 prose-ul:pl-6
            prose-ol:my-6 prose-ol:pl-6
            prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-secondary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:text-slate-800 prose-blockquote:font-medium
            prose-hr:my-12 prose-hr:border-slate-200 prose-hr:border-t-2
            prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-sm
            prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-3 prose-td:text-sm
            prose-tr:even:bg-slate-50
            ">
                        <MDXRemote source={post.content} />
                    </div>

                    <div className="mt-16 pt-16 border-t border-slate-100 italic text-slate-400 text-sm">
                        Uyarı: Bu makale bilgilendirme amaçlıdır. Hukuki işlemlerinizde hak kaybı yaşamamak için mutlaka bir avukat ile iletişime geçiniz.
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-slate-50 rounded-3xl">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-playfair font-bold text-xl">M</div>
                            <div>
                                <h4 className="font-bold text-primary">Av. Mert Kağan Çetin</h4>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">İzmir Barosu - 12345</p>
                            </div>
                        </div>
                        <Button className="bg-primary text-white hover:bg-primary/90 gap-2 px-8" asChild>
                            <Link href="/iletisim">
                                Danışmanlık Alın
                            </Link>
                        </Button>
                    </div>

                    {/* Related Posts - Internal Linking */}
                    <RelatedPosts
                        currentSlug={slug}
                        currentTags={post.tags || []}
                    />
                </div>
            </div>
        </article>
    );
}
