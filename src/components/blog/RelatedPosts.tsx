import Link from "next/link";
import { getListedPosts, postHref, type PostSection } from "@/lib/blog/utils";
import { ArrowRight } from "lucide-react";

interface RelatedPostsProps {
    currentSlug: string;
    currentTags?: string[];
    limit?: number;
    section?: PostSection;
}

export function RelatedPosts({ currentSlug, currentTags = [], limit = 3, section = "blog" }: RelatedPostsProps) {
    const allPosts = getListedPosts(section);

    // Filter out current post and find related ones based on tags
    const relatedPosts = allPosts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => {
            // Calculate relevance score based on matching tags
            const matchingTags = post.tags?.filter((tag: string) =>
                currentTags.includes(tag)
            ).length || 0;
            return { ...post, relevanceScore: matchingTags };
        })
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, limit);

    if (relatedPosts.length === 0) return null;

    return (
        <section className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-playfair font-bold text-primary mb-8">
                {section === "ictihat" ? "İlgili Kararlar" : "İlgili Makaleler"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={postHref(post)}
                        className="group block bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors"
                    >
                        <div className="text-xs text-muted-foreground mb-2 font-medium">
                            {post.date}
                        </div>
                        <h3 className="font-bold text-primary group-hover:text-secondary-foreground transition-colors line-clamp-2 mb-3">
                            {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-secondary-foreground group-hover:gap-2 transition-all">
                            Oku <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
