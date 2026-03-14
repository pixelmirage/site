import { glossaryTerms } from '@/lib/glossary';
import { getAllPosts } from '@/lib/blog/utils';

interface VideoEntry {
    pageUrl: string;
    videoId: string;
    title: string;
    description: string;
    date: string;
    duration?: string;
}

export async function GET() {
    const baseUrl = 'https://mertkagancetin.com';
    const entries: VideoEntry[] = [];

    // Glossary terms with videos
    for (const term of glossaryTerms) {
        if (term.youtubeVideoId) {
            entries.push({
                pageUrl: `${baseUrl}/sozluk/${term.slug}/`,
                videoId: term.youtubeVideoId,
                title: `${term.term} Nedir? | Kısa Video`,
                description: term.shortDescription,
                date: term.lastUpdated,
                duration: term.videoDuration,
            });
        }
    }

    // Blog posts with videos
    const posts = getAllPosts();
    for (const post of posts) {
        if (post.youtubeVideoId) {
            entries.push({
                pageUrl: `${baseUrl}/blog/${post.slug}/`,
                videoId: post.youtubeVideoId,
                title: `${post.title} | Kısa Video`,
                description: post.excerpt,
                date: post.dateModified || post.date,
                duration: post.videoDuration,
            });
        }
    }

    // Standalone pages with videos
    entries.push({
        pageUrl: `${baseUrl}/tahliye-taahhutnamesi/`,
        videoId: '0I5No4QamYA',
        title: 'Tahliye Taahhütnamesi Nedir? | Kısa Video',
        description: 'Tahliye taahhütnamesi nedir, nasıl doldurulur ve ne zaman geçerlidir? Kısa videoda öğrenin.',
        date: '2026-03-13',
    });

    entries.push({
        pageUrl: `${baseUrl}/izmir-kira-avukati/`,
        videoId: 'JeM-o0sl9j8',
        title: 'İzmir\'de Kira Avukatıyla Çalışmanın Önemi | Kısa Video',
        description: 'Kira davası sürecinde en sık yapılan hatalar ve uzman kira avukatının farkı.',
        date: '2026-03-13',
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.map((entry) => `  <url>
    <loc>${entry.pageUrl}</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/${entry.videoId}/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>${escapeXml(entry.title)}</video:title>
      <video:description>${escapeXml(entry.description)}</video:description>
      <video:content_loc>https://www.youtube.com/shorts/${entry.videoId}</video:content_loc>
      <video:player_loc>https://www.youtube.com/embed/${entry.videoId}</video:player_loc>
      <video:publication_date>${entry.date.includes('T') ? entry.date : `${entry.date}T00:00:00+03:00`}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>${entry.duration ? `\n      <video:duration>${isoToSeconds(entry.duration)}</video:duration>` : ''}
    </video:video>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}

function isoToSeconds(iso: string): number {
    const match = iso.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;
    return (parseInt(match[1] || '0') * 60) + parseInt(match[2] || '0');
}

function escapeXml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
