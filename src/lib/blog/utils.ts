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
    youtubeVideoId?: string;
    videoDuration?: string;
    readingTime: number;
    lang?: string;
    ictihat?: boolean; // Yargıtay/BAM karar notu → /kira-hukuku-ictihatlari/ hub'ında listelenir
    ictihatKonu?: string; // hub bölümü: tahliye | kira-tespit | kira-uyarlama | kira-alacagi-icra | tahliye-taahhudu | kira-sozlesmesi | arabuluculuk
    noindex?: boolean;
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
                ...(data as { title: string; date: string; dateModified?: string; excerpt: string; coverImage?: string; tags?: string[]; faqs?: FAQItem[]; youtubeVideoId?: string; videoDuration?: string; lang?: string; ictihat?: boolean; ictihatKonu?: string; noindex?: boolean }),
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
            ...(data as { title: string; date: string; dateModified?: string; excerpt: string; coverImage?: string; tags?: string[]; faqs?: FAQItem[]; youtubeVideoId?: string; videoDuration?: string; lang?: string; ictihat?: boolean; ictihatKonu?: string; noindex?: boolean }),
        };
    } catch (e) {
        return null;
    }
}

// Site kira hukukuna ayrılmıştır. "kira hukuku" etiketi olmayan (boşanma, iş, tazminat vb.) yazılar
// URL'den erişilebilir kalır ama noindex,follow alır; sitemap, /blog/ listesi ve ilgili yazı alanlarında yer almaz.
export function isIndexablePost(p: Pick<PostData, "tags" | "noindex">): boolean {
    return !p.noindex && (p.tags || []).some((t) => t.toLocaleLowerCase("tr") === "kira hukuku");
}

export function getListedPosts(): PostData[] {
    return getAllPosts().filter(isIndexablePost);
}
