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
                    <div className="prose prose-slate prose-xl max-w-none 
            prose-headings:font-playfair prose-headings:font-black prose-headings:text-slate-900
            prose-h1:text-5xl prose-h1:mb-10 prose-h1:mt-14 prose-h1:leading-tight
            prose-h2:text-4xl prose-h2:mb-8 prose-h2:mt-14 prose-h2:border-b-2 prose-h2:border-slate-300 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-10
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
            prose-strong:text-primary prose-strong:font-bold
            prose-a:text-secondary-foreground prose-a:font-bold hover:prose-a:underline
            prose-img:rounded-3xl prose-img:shadow-xl
            prose-li:text-slate-700 prose-li:mb-3 prose-li:text-lg
            prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-hr:my-16 prose-hr:border-slate-300
            prose-table:border-collapse prose-table:w-full prose-table:my-8
            prose-th:bg-primary prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold
            prose-td:border prose-td:border-slate-200 prose-td:px-4 prose-td:py-3
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
