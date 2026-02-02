import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <Scale className="w-6 h-6 text-secondary" />
                            </div>
                            <span className="font-playfair font-bold text-xl">Av. Mert Kağan Çetin</span>
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed text-sm">
                            İzmir Bayraklı'da kira hukuku, gayrimenkul davaları ve tahliye süreçlerinde uzman avukatlık ve danışmanlık hizmeti sunuyoruz.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-playfair font-semibold text-lg mb-4 text-secondary">Hızlı Menü</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-secondary transition-colors">Anasayfa</Link></li>
                            <li><Link href="/hakkimda" className="hover:text-secondary transition-colors">Hakkımda</Link></li>
                            <li><Link href="/hizmetler" className="hover:text-secondary transition-colors">Hizmetlerimiz</Link></li>
                            <li><Link href="/blog" className="hover:text-secondary transition-colors">Yasal Makaleler</Link></li>
                            <li><Link href="/iletisim" className="hover:text-secondary transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-playfair font-semibold text-lg mb-4 text-secondary">Çalışma Alanları</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/hizmetler/kira-tespit-davasi" className="hover:text-secondary transition-colors">Kira Tespit Davası</Link></li>
                            <li><Link href="/hizmetler/tahliye-davasi" className="hover:text-secondary transition-colors">Tahliye Davaları</Link></li>
                            <li><Link href="/hizmetler/tahliye-taahhudu" className="hover:text-secondary transition-colors">Tahliye Taahhütnamesi</Link></li>
                            <li><Link href="/hizmetler/kira-sozlesmesi" className="hover:text-secondary transition-colors">Kira Sözleşmesi Hazırlama</Link></li>
                            <li><Link href="/hizmetler/arabuluculuk" className="hover:text-secondary transition-colors">Kira Hukukunda Arabuluculuk</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-playfair font-semibold text-lg mb-4 text-secondary">İletişim</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="text-primary-foreground/90">
                                    Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <a href="tel:+905445854645" className="hover:text-secondary transition-colors">0544 585 46 45</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:mertkagancetin@gmail.com" className="hover:text-secondary transition-colors">mertkagancetin@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-primary-foreground/20 mb-8" />

                <div className="text-center text-xs text-primary-foreground/60 space-y-2">
                    <p>© {new Date().getFullYear()} Av. Mert Kağan Çetin - Tüm Hakları Saklıdır.</p>
                    <p className="max-w-3xl mx-auto">
                        Yasal Uyarı: Bu web sitesinde yer alan bilgiler yalnızca bilgilendirme amaçlıdır ve Türkiye Barolar Birliği'nin ilgili mevzuatına uygun olarak hazırlanmıştır. Hukuki tavsiye niteliği taşımaz.
                    </p>
                </div>
            </div>
        </footer>
    );
}
