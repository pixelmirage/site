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
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Uzmanlık Alanları</h4>
                        <ul className="space-y-4">
                            <li><Link href="/izmir-kira-avukati" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir Kira Avukatı</Link></li>
                            <li><Link href="/izmir-is-avukati" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir İş Avukatı</Link></li>
                            <li><Link href="/izmir-bosanma-avukati" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir Boşanma Avukatı</Link></li>
                            <li><Link href="/izmir-tazminat-avukati" className="text-sm text-muted-foreground hover:text-primary transition-colors">İzmir Tazminat Avukatı</Link></li>
                            <li><Link href="/hizmetler" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tüm Hizmetler</Link></li>
                            <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hukuki Makaleler</Link></li>
                            <li><Link href="/sozluk" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hukuk Sözlüğü</Link></li>
                            <li><Link href="/hakkimda" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hakkımızda</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Hizmetler</h4>
                        <ul className="space-y-4">
                            <li><Link href="/hizmetler#tahliye" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tahliye Davaları</Link></li>
                            <li><Link href="/hizmetler#kira" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kira Tespit</Link></li>
                            <li><Link href="/izmir-is-avukati" className="text-sm text-muted-foreground hover:text-primary transition-colors">İşe İade & Tazminat</Link></li>
                            <li><Link href="/izmir-bosanma-avukati" className="text-sm text-muted-foreground hover:text-primary transition-colors">Boşanma & Velayet</Link></li>
                            <li><Link href="/kira-artis-orani-hesaplama" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kira Artış Hesaplama</Link></li>
                            <li><Link href="/tahliye-taahhutnamesi" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tahliye Taahhütnamesi</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">İletişim</h4>
                        <div className="text-sm text-muted-foreground space-y-2 leading-relaxed font-light">
                            <p>Mansuroğlu Mah. 286/3 Sk.</p>
                            <p>Dedemhan Plaza D:17, Bayraklı/İzmir</p>
                            <p className="pt-4 font-bold text-primary tracking-widest">0544 585 46 45</p>
                            <p className="text-muted-foreground">info@mertkagancetin.com</p>
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
                    <div className="flex gap-8">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">İzmir Barosu</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
