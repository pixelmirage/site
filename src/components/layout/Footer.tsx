import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-white border-t border-border pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="md:col-span-1 space-y-8">
                        <Logo />
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                            İzmir Bayraklı merkezli, gayrimenkul ve kira hukuku alanında uzmanlaşmış butik hukuk pratiği.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Navigasyon</h4>
                        <ul className="space-y-4">
                            <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hukuki Makaleler</Link></li>
                            <li><Link href="/hizmetler" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="/hakkimda" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/iletisim" className="text-sm text-muted-foreground hover:text-primary transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Hizmetler</h4>
                        <ul className="space-y-4">
                            <li><Link href="/hizmetler#tahliye" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tahliye Davaları</Link></li>
                            <li><Link href="/hizmetler#kira" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kira Tespit</Link></li>
                            <li><Link href="/hizmetler#gayrimenkul" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gayrimenkul Hukuku</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">İletişim</h4>
                        <div className="text-sm text-muted-foreground space-y-2 leading-relaxed font-light">
                            <p>Mansuroğlu Mah. 286/3 Sk.</p>
                            <p>Dedemhan Plaza D:17, Bayraklı/İzmir</p>
                            <p className="pt-4 font-bold text-primary tracking-widest">0544 585 46 45</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border/50">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        © {new Date().getFullYear()} Mert Kağan Çetin Hukuk Bürosu. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/yasal-uyari" className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">Yasal Uyarı</Link>
                        <Link href="/kvkk" className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors">KVKK</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
