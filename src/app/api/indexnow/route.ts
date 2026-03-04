import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '502b9f62adda878abd6914e0259598c9';
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

// GET: Submit all important pages at once (one-time manual trigger)
export async function GET(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const allUrls = [
        `https://${HOST}/`,
        `https://${HOST}/izmir-kira-avukati/`,
        `https://${HOST}/hizmetler/`,
        `https://${HOST}/hakkimda/`,
        `https://${HOST}/blog/`,
        `https://${HOST}/iletisim/`,
        `https://${HOST}/kira-artis-orani-hesaplama/`,
        `https://${HOST}/tahliye-taahhutnamesi/`,
        `https://${HOST}/bayrakli-kira-avukati/`,
        `https://${HOST}/karsiyaka-kira-avukati/`,
        `https://${HOST}/bornova-kira-avukati/`,
        `https://${HOST}/konak-kira-avukati/`,
        `https://${HOST}/buca-kira-avukati/`,
        `https://${HOST}/cigli-kira-avukati/`,
        `https://${HOST}/gaziemir-kira-avukati/`,
        `https://${HOST}/balcova-kira-avukati/`,
        `https://${HOST}/narlidere-kira-avukati/`,
        `https://${HOST}/karabaglar-kira-avukati/`,
        `https://${HOST}/guzelbahce-kira-avukati/`,
        `https://${HOST}/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/`,
        `https://${HOST}/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/`,
        `https://${HOST}/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/`,
        `https://${HOST}/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/`,
        `https://${HOST}/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/`,
        `https://${HOST}/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/`,
        `https://${HOST}/blog/isyeri-kira-sozlesmesi-rehberi/`,
        `https://${HOST}/blog/ihtiyac-nedeniyle-tahliye-davasi/`,
    ];

    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
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
