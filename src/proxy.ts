import { NextResponse, type NextRequest } from 'next/server';
import { OLD_HOST_RE, oldDomainMap } from './lib/oldDomainMap';

const NEW = 'https://mertkagancetin.com';
const norm = (p: string) => {
  let d = p;
  try { d = decodeURIComponent(p); } catch {}
  d = d.normalize('NFC');
  return d.length > 1 ? d.replace(/\/+$/, '') : d;
};
const MAP = new Map(oldDomainMap.map(([s, d]) => [norm(s), d]));

// One-hop 301 for every request on the old domain (runs before Vercel's trailing-slash redirect).
export function proxy(req: NextRequest) {
  const host = (req.headers.get('host') || '').split(':')[0];
  if (!OLD_HOST_RE.test(host)) return NextResponse.next();
  const p = norm(req.nextUrl.pathname);
  const dst = MAP.get(p) ?? (/^\/(post|blog)(\/|$)/.test(p) ? '/blog/' : '/');
  return NextResponse.redirect(`${NEW}${dst}`, 301);
}
