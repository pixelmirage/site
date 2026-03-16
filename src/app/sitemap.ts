import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog/utils';
import { districts, getSlugFromDistrict, getAllServiceSlugs } from '@/lib/districts';
import { glossaryTerms } from '@/lib/glossary';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mertkagancetin.com';

    // Blog Posts — use actual post dates for lastModified
    const posts = getAllPosts();
    const blogSitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}/`,
        lastModified: new Date(post.dateModified || post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // District Landing Pages (all services) — fixed date reflecting last content update
    const districtLastModified = new Date('2026-03-16');
    const districtSitemap = getAllServiceSlugs().map((slug) => ({
        url: `${baseUrl}/${slug}/`,
        lastModified: districtLastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Static Routes — individual last modified dates per page
    const staticRoutes: Record<string, { lastModified: string; priority: number }> = {
        '': { lastModified: '2026-03-12', priority: 1 },
        '/izmir-kira-avukati': { lastModified: '2026-03-15', priority: 1 },
        '/izmir-is-avukati': { lastModified: '2026-03-15', priority: 1 },
        '/izmir-bosanma-avukati': { lastModified: '2026-03-15', priority: 1 },
        '/izmir-tazminat-avukati': { lastModified: '2026-03-15', priority: 1 },
        '/hakkimda': { lastModified: '2026-03-13', priority: 0.8 },
        '/hizmetler': { lastModified: '2026-03-04', priority: 0.8 },
        '/blog': { lastModified: '2026-03-12', priority: 0.8 },
        '/iletisim': { lastModified: '2026-02-10', priority: 0.8 },
        '/kira-artis-orani-hesaplama': { lastModified: '2026-03-15', priority: 0.8 },
        '/tahliye-taahhutnamesi': { lastModified: '2026-03-15', priority: 0.8 },
        '/kidem-tazminati-hesaplama': { lastModified: '2026-03-16', priority: 0.8 },
        '/sozluk': { lastModified: '2026-03-15', priority: 0.8 },
    };

    const routes = Object.entries(staticRoutes).map(([route, config]) => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(config.lastModified),
        changeFrequency: 'weekly' as const,
        priority: config.priority,
    }));

    // Glossary Term Pages
    const glossarySitemap = glossaryTerms.map((term) => ({
        url: `${baseUrl}/sozluk/${term.slug}/`,
        lastModified: new Date(term.lastUpdated),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...districtSitemap, ...glossarySitemap, ...blogSitemap];
}
