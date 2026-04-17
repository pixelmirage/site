import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-white border-t border-border pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="md:col-span-1 space-y-8">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <Logo />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                            İzmir Bayraklı merkezli hukuk bürosu. Kira, iş, boşanma ve tazminat hukuku alanlarında avukatlık hizmeti.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">Uzmanlık Alanları</p>
                        <ul className="space-y-4">
                            <li><Link href="/izmir-kira-avukati/" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir Kira Avukatı</Link></li>
                            <li><Link href="/izmir-is-avukati/" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir İş Avukatı</Link></li>
                            <li><Link href="/izmir-bosanma-avukati/" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir Boşanma Avukatı</Link></li>
                            <li><Link href="/izmir-tazminat-avukati/" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir Tazminat Avukatı</Link></li>
                            <li><Link href="/hizmetler/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tüm Hizmetler</Link></li>
                            <li><Link href="/blog/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hukuki Makaleler</Link></li>
                            <li><Link href="/sozluk/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hukuk Sözlüğü</Link></li>
                            <li><Link href="/hakkimda/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hakkımızda</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">Hizmetler</p>
                        <ul className="space-y-4">
                            <li><Link href="/hizmetler#tahliye" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tahliye Davaları</Link></li>
                            <li><Link href="/hizmetler#kira" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kira Tespit</Link></li>
                            <li><Link href="/izmir-is-avukati/" className="text-sm text-muted-foreground hover:text-primary transition-colors">İşe İade & Tazminat</Link></li>
                            <li><Link href="/izmir-bosanma-avukati/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Boşanma & Velayet</Link></li>
                            <li><Link href="/kira-artis-orani-hesaplama/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kira Artış Hesaplama</Link></li>
                            <li><Link href="/kira-sozlesmesi-ornegi/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kira Sözleşmesi Örneği</Link></li>
                            <li><Link href="/tahliye-taahhutnamesi/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tahliye Taahhütnamesi</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">İletişim</p>
                        <div className="text-sm text-muted-foreground space-y-2 leading-relaxed font-light">
                            <p>Mansuroğlu Mah. 286/3 Sk.</p>
                            <p>Dedemhan Plaza D:17, Bayraklı/İzmir</p>
                            <p className="pt-4 font-bold text-primary tracking-widest">0544 585 46 45</p>
                            <p className="text-muted-foreground">mertkagancetin@gmail.com</p>
                            <a href="https://maps.app.goo.gl/J4yG2ppHjVpBEVgY7" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs font-medium text-secondary hover:text-primary transition-colors">
                                Google Maps'te Görüntüle &rarr;
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border/50">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        © {new Date().getFullYear()} Mert Kağan Çetin Hukuk Bürosu. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-8">
                        <a
                            href="https://www.instagram.com/avukatmertkagancetin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-pink-600 transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCUFW-qTe-nvUmkxkRisriYQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-red-600 transition-colors"
                            aria-label="YouTube Kanalımız"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                        <a href="https://www.izmirbarosu.org.tr" target="_blank" rel="noopener" className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">İzmir Barosu</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
