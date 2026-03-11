import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Phone, Scale, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="bg-white min-h-[70vh] flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <Scale className="w-10 h-10 text-slate-400" />
                    </div>

                    <h1 className="text-6xl font-playfair font-bold text-primary mb-4">404</h1>
                    <h2 className="text-2xl font-playfair font-bold text-primary mb-4">Sayfa Bulunamadı</h2>
                    <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                        Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button className="bg-primary text-white hover:bg-primary/90 gap-2" asChild>
                            <Link href="/">
                                <Home className="w-4 h-4" />
                                Ana Sayfaya Dön
                            </Link>
                        </Button>
                        <Button variant="outline" className="gap-2" asChild>
                            <Link href="/iletisim">
                                <Phone className="w-4 h-4" />
                                İletişime Geçin
                            </Link>
                        </Button>
                    </div>

                    <div className="border-t border-slate-100 pt-10">
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Popüler Sayfalar</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                            {[
                                { label: "Kira Hukuku", href: "/izmir-kira-avukati" },
                                { label: "İş Hukuku", href: "/izmir-is-avukati" },
                                { label: "Boşanma Hukuku", href: "/izmir-bosanma-avukati" },
                                { label: "Tazminat Hukuku", href: "/izmir-tazminat-avukati" },
                                { label: "Hukuki Makaleler", href: "/blog" },
                                { label: "Hukuk Sözlüğü", href: "/sozluk" },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-secondary/50 hover:shadow-sm transition-all text-sm font-medium text-primary group"
                                >
                                    {item.label}
                                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-secondary transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
