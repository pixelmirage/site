import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        host: 'https://mertkagancetin.com',
        sitemap: [
            'https://mertkagancetin.com/sitemap.xml',
            'https://mertkagancetin.com/video-sitemap.xml',
        ],
    };
}
