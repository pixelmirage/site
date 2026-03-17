import { Home, Briefcase, Heart, ShieldCheck, MoveRight } from "lucide-react";
import Link from "next/link";

const areas = [
    {
        title: "Kira Hukuku",
        href: "/izmir-kira-avukati",
        icon: Home,
        services: [
            "Kira Tespit Davası",
            "Tahliye Davaları",
            "Tahliye Taahhütnamesi",
            "Zorunlu Arabuluculuk",
        ],
    },
    {
        title: "İş Hukuku",
        href: "/izmir-is-avukati",
        icon: Briefcase,
        services: [
            "İşe İade Davası",
            "Kıdem Tazminatı",
            "İş Kazası Tazminatı",
            "Fazla Mesai Alacağı",
        ],
    },
    {
        title: "Boşanma Hukuku",
        href: "/izmir-bosanma-avukati",
        icon: Heart,
        services: [
            "Anlaşmalı Boşanma",
            "Çekişmeli Boşanma",
            "Velayet Davası",
            "Nafaka Davası",
        ],
    },
    {
        title: "Tazminat Hukuku",
        href: "/izmir-tazminat-avukati",
        icon: ShieldCheck,
        services: [
            "Trafik Kazası Tazminatı",
            "Maddi Tazminat Davası",
            "Manevi Tazminat Davası",
            "Malpraktis Davası",
        ],
    },
];

export function ServicesGrid() {
    return (
        <section className="py-32 bg-slate-50 relative">
            <div className="absolute inset-0 legal-pattern opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <div className="inline-block text-secondary font-bold text-xs uppercase tracking-[0.4em] pb-2 border-b-2 border-secondary/30">
                        Faaliyet Alanları
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Profesyonel Hukuki Hizmetler</h2>
                    <p className="text-muted-foreground font-light text-lg">
                        İzmir'de kira, iş, boşanma ve tazminat hukuku alanlarında kurumsal disiplinle sonuç alıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {areas.map((area, index) => (
                        <div
                            key={area.title}
                            className="group bg-white border border-border/50 hover:border-primary/20 p-10 md:p-12 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.05)] animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                                    <area.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1 space-y-5">
                                    <h3 className="text-2xl font-serif font-bold text-primary">{area.title}</h3>
                                    <ul className="space-y-2.5">
                                        {area.services.map((service) => (
                                            <li key={service} className="flex items-center gap-2 text-muted-foreground text-sm font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 flex-shrink-0" />
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={area.href}
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pt-2"
                                    >
                                        Detaylı Bilgi <MoveRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
