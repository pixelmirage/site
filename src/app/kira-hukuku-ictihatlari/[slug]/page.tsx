import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog/utils";
import { PostArticle, postMetadata } from "@/components/blog/PostArticle";

// Yargıtay / BAM karar notları: src/content/ictihat/<slug>.mdx → /kira-hukuku-ictihatlari/<slug>/
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "ictihat");
    return post ? postMetadata(post) : {};
}

export async function generateStaticParams() {
    return getAllPosts("ictihat").map((post) => ({ slug: post.slug }));
}

export default async function IctihatPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "ictihat");
    if (!post) notFound();
    return <PostArticle post={post} />;
}
