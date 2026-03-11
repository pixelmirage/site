import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface FAQItem {
    question: string;
    answer: string;
}

export interface PostData {
    slug: string;
    title: string;
    date: string;
    dateModified?: string;
    excerpt: string;
    coverImage?: string;
    content: string;
    tags?: string[];
    faqs?: FAQItem[];
    readingTime: number;
}

export function getAllPosts(): PostData[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.(mdx|md)$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            const wordCount = content.trim().split(/\s+/).length;
            const readingTime = Math.max(1, Math.ceil(wordCount / 200));

            return {
                slug,
                content,
                readingTime,
                ...(data as { title: string; date: string; dateModified?: string; excerpt: string; coverImage?: string; tags?: string[]; faqs?: FAQItem[] }),
            };
        });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostData | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const wordCount = content.trim().split(/\s+/).length;
        const readingTime = Math.max(1, Math.ceil(wordCount / 200));

        return {
            slug,
            content,
            readingTime,
            ...(data as { title: string; date: string; dateModified?: string; excerpt: string; coverImage?: string; tags?: string[]; faqs?: FAQItem[] }),
        };
    } catch (e) {
        return null;
    }
}
