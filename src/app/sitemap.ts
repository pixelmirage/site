import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog/utils';
import { districts, getSlugFromDistrict } from '@/lib/districts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mertkagancetin.com';

    // Blog Posts
    const posts = getAllPosts();
    const blogSitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // District Landing Pages (Programmatic SEO)
    const districtSitemap = districts.map((district) => ({
        url: `${baseUrl}/${getSlugFromDistrict(district)}-kira-avukati`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Static Routes
    const routes = ['', '/izmir-kira-avukati', '/hakkimda', '/hizmetler', '/blog', '/iletisim'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...districtSitemap, ...blogSitemap];
}
