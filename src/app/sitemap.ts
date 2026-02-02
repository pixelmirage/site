import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog/utils';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mertkagancetin.com';

    const posts = getAllPosts();
    const blogSitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const routes = ['', '/hakkimda', '/hizmetler', '/blog', '/iletisim'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...blogSitemap];
}
