import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/lib/services';
import { getAllPosts } from '@/lib/blog/utils';
import { glossaryTerms } from '@/lib/glossary';

const INDEXNOW_KEY = '8bb539d0a5f7442b92ff3b3b983189d3';
const HOST = 'mertkagancetin.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export async function POST(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const urls: string[] = body.urls;

    if (!urls || urls.length === 0) {
        return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    return NextResponse.json({
        status: response.status,
        submitted: urls.length,
    });
}

// GET: Submit all pages dynamically (mirrors sitemap.ts sources)
export async function GET(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const base = `https://${HOST}`;

    // Static pages
    const staticUrls = [
        `${base}/`,
        ...services.map((s) => `${base}/${s.slug}/`),
        `${base}/hakkimda/`,
        `${base}/blog/`,
        `${base}/iletisim/`,
        `${base}/kira-artis-orani-hesaplama/`,
        `${base}/tahliye-taahhutnamesi/`,
        `${base}/kira-sozlesmesi-ornegi/`,
        `${base}/sozluk/`,
    ];

    // Blog posts
    const posts = getAllPosts();
    const blogUrls = posts.map((post) => `${base}/blog/${post.slug}/`);

    // Glossary terms
    const glossaryUrls = glossaryTerms.map((term) => `${base}/sozluk/${term.slug}/`);

    const allUrls = [...staticUrls, ...blogUrls, ...glossaryUrls];

    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${base}/${INDEXNOW_KEY}.txt`,
        urlList: allUrls,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    return NextResponse.json({
        status: response.status,
        submitted: allUrls.length,
        urls: allUrls,
    });
}
