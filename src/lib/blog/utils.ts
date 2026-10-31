import fs from "fs";
import path from "path";
import matter from "gray-matter";

// İki bölüm: blog (src/content/blog → /blog/<slug>/) ve içtihat karar notları (src/content/ictihat → /kira-hukuku-ictihatlari/<slug>/).
export type PostSection = "blog" | "ictihat";
const SECTION_DIRS: Record<PostSection, string> = {
    blog: path.join(process.cwd(), "src/content/blog"),
    ictihat: path.join(process.cwd(), "src/content/ictihat"),
};
const SECTION_BASE: Record<PostSection, string> = { blog: "/blog/", ictihat: "/kira-hukuku-ictihatlari/" };

export interface FAQItem {
    question: string;
    answer: string;
}

export interface PostData {
    slug: string;
    section: PostSection;
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
    /** Kira hukuku dışı olsa da indekslenmesi istenen yazılar için açık izin. */
    index?: boolean;
}

type FrontMatter = { title: string; date: string; dateModified?: string; excerpt: string; coverImage?: string; tags?: string[]; faqs?: FAQItem[]; youtubeVideoId?: string; videoDuration?: string; lang?: string; ictihat?: boolean; ictihatKonu?: string; noindex?: boolean; index?: boolean };

function readPost(section: PostSection, fileName: string): PostData {
    const slug = fileName.replace(/\.(mdx|md)$/, "");
    const fileContents = fs.readFileSync(path.join(SECTION_DIRS[section], fileName), "utf8");
    const { data, content } = matter(fileContents);
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    return { slug, section, content, readingTime, ...(data as FrontMatter) };
}

function readSection(section: PostSection): PostData[] {
    const dir = SECTION_DIRS[section];
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md")).map((f) => readPost(section, f));
}

/** Tüm yazılar (blog + içtihat karar notları), yeniden eskiye. `section` verilirse yalnızca o bölüm. */
export function getAllPosts(section?: PostSection): PostData[] {
    const posts = section ? readSection(section) : [...readSection("blog"), ...readSection("ictihat")];
    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string, section: PostSection = "blog"): PostData | null {
    if (!/^[a-z0-9-]+$/.test(slug)) return null;
    const file = path.join(SECTION_DIRS[section], `${slug}.mdx`);
    return fs.existsSync(file) ? readPost(section, `${slug}.mdx`) : null;
}

/** Yazının site içi yolu: /blog/<slug>/ veya /kira-hukuku-ictihatlari/<slug>/ */
export function postHref(p: Pick<PostData, "slug" | "section">): string {
    return `${SECTION_BASE[p.section]}${p.slug}/`;
}

/** Yalnızca slug bilinen yerler (services.ts, glossary.ts) için: önce içtihat, sonra blog bölümüne bakar. */
export function hrefForSlug(slug: string): string | null {
    const p = getPostBySlug(slug, "ictihat") || getPostBySlug(slug, "blog");
    return p ? postHref(p) : null;
}

// Site kira hukukuna ayrılmıştır. "kira hukuku" etiketi olmayan (boşanma, iş, tazminat vb.) yazılar
// URL'den erişilebilir kalır ama noindex,follow alır; sitemap, /blog/ listesi ve ilgili yazı alanlarında yer almaz.
// İstisna: frontmatter'da `index: true` olan yazı (ör. how-to-get-divorced-in-turkey) indekslenir.
export function isIndexablePost(p: Pick<PostData, "tags" | "noindex" | "index">): boolean {
    if (p.noindex) return false;
    if (p.index) return true;
    return (p.tags || []).some((t) => t.toLocaleLowerCase("tr") === "kira hukuku");
}

export function getListedPosts(section?: PostSection): PostData[] {
    return getAllPosts(section).filter(isIndexablePost);
}
