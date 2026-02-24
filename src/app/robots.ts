import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/', '/api/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
        ],
        host: 'https://mertkagancetin.com',
        sitemap: 'https://mertkagancetin.com/sitemap.xml',
    };
}
