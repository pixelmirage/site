import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Landmark, Home, Briefcase, Heart, ShieldCheck, Phone } from "lucide-react";

const practiceAreas = [
    { label: "Kira Hukuku", href: "/izmir-kira-avukati/", icon: Home },
    { label: "İş Hukuku", href: "/izmir-is-avukati/", icon: Briefcase },
    { label: "Boşanma Hukuku", href: "/izmir-bosanma-avukati/", icon: Heart },
    { label: "Tazminat Hukuku", href: "/izmir-tazminat-avukati/", icon: ShieldCheck },
];

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 legal-pattern opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

            <div className="container max-w-5xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center space-y-10">

                    <div
                        className="flex items-center gap-4 text-secondary mb-2 animate-scale-in"
                    >
                        <div className="h-[1px] w-12 bg-secondary/50" />
                        <Landmark className="w-6 h-6" />
                        <div className="h-[1px] w-12 bg-secondary/50" />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-primary leading-[1.05] tracking-tight">
                            İzmir'de Uzman{" "}
                            <br className="hidden md:block" />
                            <span className="text-secondary italic">Avukatlık</span> Hizmeti
                        </h1>

                        <div
                            className="max-w-2xl mx-auto animate-fade-in"
                            style={{ animationDelay: '0.3s' }}
                        >
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                Kira, iş, boşanma ve tazminat hukuku alanlarında yılların deneyimiyle
                                haklarınızı en üst düzeyde savunuyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Practice Area Badges */}
                    <div
                        className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up"
                        style={{ animationDelay: '0.4s' }}
                    >
                        {practiceAreas.map((area) => (
                            <Link
                                key={area.href}
                                href={area.href}
                                className="group flex items-center gap-2 px-5 py-2.5 border border-primary/15 bg-white/60 backdrop-blur-sm hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300 rounded-sm"
                            >
                                <area.icon className="w-4 h-4 text-secondary group-hover:text-secondary/80 transition-colors" />
                                <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
                                    {area.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-fade-in-up"
                        style={{ animationDelay: '0.6s' }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-white hover:bg-primary/95 px-12 h-16 text-lg font-serif tracking-wide transition-all shadow-xl hover:shadow-2xl"
                            asChild
                        >
                            <Link href="/iletisim/">Hemen Arayın</Link>
                        </Button>
                        <Link
                            href="tel:+905445854645"
                            className="group flex items-center gap-3 h-16 px-8 text-lg font-serif border border-primary/20 text-primary hover:bg-primary/5 transition-all rounded-md"
                        >
                            <Phone className="w-5 h-5 text-secondary" />
                            0544 585 46 45
                        </Link>
                    </div>

                    {/* Trust Bar */}
                    <div
                        className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in"
                        style={{ animationDelay: '0.9s' }}
                    >
                        <span>İzmir Barosu</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/50" />
                        <span>4 Hizmet Alanı</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/50" />
                        <span>500+ Dava Deneyimi</span>
                    </div>

                </div>
            </div>

            {/* Subtle Side "Shadow" for Depth */}
            <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        </section>
    );
}
