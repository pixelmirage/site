import { NextResponse, type NextRequest } from 'next/server';
import { OLD_HOST_RE, oldDomainMap } from './lib/oldDomainMap';

const NEW = 'https://mertkagancetin.com';
const norm = (p: string) => {
  let d = p;
  try { d = decodeURIComponent(p); } catch {}
  d = d.normalize('NFC');
  return d.length > 1 ? d.replace(/\/+$/, '') : d;
};
const DISTRICT_RE = /^\/(?:balcova|bayrakli|bornova|buca|cigli|gaziemir|guzelbahce|karabaglar|karsiyaka|konak|narlidere)-(kira|is|bosanma|tazminat)-avukati\/?$/;
const MAP = new Map(oldDomainMap.map(([s, d]) => [norm(s), d]));

// One-hop 301 for every request on the old domain (runs before Vercel's trailing-slash redirect).
export function proxy(req: NextRequest) {
  const host = (req.headers.get('host') || '').split(':')[0];
  if (!OLD_HOST_RE.test(host)) {
    // Removed district pages: 301 in one hop, also for slashless URLs (runs before the trailing-slash redirect).
    const m = DISTRICT_RE.exec(req.nextUrl.pathname);
    if (m) return NextResponse.redirect(`${NEW}/`, 301);
    return NextResponse.next();
  }
  const p = norm(req.nextUrl.pathname);
  const dst = MAP.get(p) ?? (/^\/(post|blog)(\/|$)/.test(p) ? '/blog/' : '/');
  return NextResponse.redirect(`${NEW}${dst}`, 301);
}
