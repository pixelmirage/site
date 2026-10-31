import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog/utils";
import { PostArticle, postMetadata } from "@/components/blog/PostArticle";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "blog");
    return post ? postMetadata(post) : {};
}

export async function generateStaticParams() {
    return getAllPosts("blog").map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, "blog");
    if (!post) notFound();
    return <PostArticle post={post} />;
}
