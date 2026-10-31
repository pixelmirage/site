import { MetadataRoute } from 'next';
import { getListedPosts, postHref } from '@/lib/blog/utils';
import { glossaryTerms } from '@/lib/glossary';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mertkagancetin.com';

    // Blog Posts — use actual post dates for lastModified
    // Yalnızca kira hukuku yazıları (noindex yazılar hariç)
    const posts = getListedPosts();
    const blogSitemap = posts.map((post) => ({
        url: `${baseUrl}${postHref(post)}`,
        lastModified: new Date(post.dateModified || post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Static Routes — individual last modified dates per page
    const staticRoutes: Record<string, { lastModified: string; priority: number }> = {
        '': { lastModified: '2026-10-29', priority: 1 },
        // Kira hizmet sayfaları
        ...Object.fromEntries(services.map((sv) => [`/${sv.slug}`, { lastModified: '2026-10-31', priority: 0.9 }])),
        '/hakkimda': { lastModified: '2026-10-31', priority: 0.6 },
        '/iletisim': { lastModified: '2026-10-31', priority: 0.7 },
        '/blog': { lastModified: '2026-10-31', priority: 0.7 },
        '/kira-artis-orani-hesaplama': { lastModified: '2026-10-31', priority: 0.7 },
        '/tahliye-taahhutnamesi': { lastModified: '2026-10-31', priority: 0.7 },
        '/kira-sozlesmesi-ornegi': { lastModified: '2026-10-31', priority: 0.7 },
        '/kvkk-aydinlatma-metni': { lastModified: '2026-10-31', priority: 0.3 },
        '/sozluk': { lastModified: '2026-10-29', priority: 0.6 },
        '/kira-hukuku-ictihatlari': { lastModified: posts.filter((p) => p.ictihat || p.tags?.includes('emsal karar')).map((p) => p.dateModified || p.date).sort().pop() || '2026-10-31', priority: 0.8 },
    };

    const routes = Object.entries(staticRoutes).map(([route, config]) => ({
        url: route ? `${baseUrl}${route}/` : `${baseUrl}/`,
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

    return [...routes, ...glossarySitemap, ...blogSitemap];
}
