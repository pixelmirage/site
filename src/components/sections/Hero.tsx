"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Landmark, Home, Briefcase, Heart, ShieldCheck, Phone } from "lucide-react";

const practiceAreas = [
    { label: "Kira Hukuku", href: "/izmir-kira-avukati", icon: Home },
    { label: "İş Hukuku", href: "/izmir-is-avukati", icon: Briefcase },
    { label: "Boşanma Hukuku", href: "/izmir-bosanma-avukati", icon: Heart },
    { label: "Tazminat Hukuku", href: "/izmir-tazminat-avukati", icon: ShieldCheck },
];

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 legal-pattern opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

            <div className="container max-w-5xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center space-y-10">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-4 text-secondary mb-2"
                    >
                        <div className="h-[1px] w-12 bg-secondary/50" />
                        <Landmark className="w-6 h-6" />
                        <div className="h-[1px] w-12 bg-secondary/50" />
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-primary leading-[1.05] tracking-tight">
                            İzmir'de Uzman{" "}
                            <br className="hidden md:block" />
                            <span className="text-secondary italic">Avukatlık</span> Hizmeti
                        </h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="max-w-2xl mx-auto"
                        >
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                                Kira, iş, boşanma ve tazminat hukuku alanlarında yılların deneyimiyle
                                haklarınızı en üst düzeyde savunuyoruz.
                            </p>
                        </motion.div>
                    </div>

                    {/* Practice Area Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-3"
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
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6 pt-4"
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-white hover:bg-primary/95 px-12 h-16 text-lg font-serif tracking-wide transition-all shadow-xl hover:shadow-2xl"
                            asChild
                        >
                            <Link href="/iletisim">Ücretsiz Ön Görüşme</Link>
                        </Button>
                        <Link
                            href="tel:+905445854645"
                            className="group flex items-center gap-3 h-16 px-8 text-lg font-serif border border-primary/20 text-primary hover:bg-primary/5 transition-all rounded-md"
                        >
                            <Phone className="w-5 h-5 text-secondary" />
                            0544 585 46 45
                        </Link>
                    </motion.div>

                    {/* Trust Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70"
                    >
                        <span>İzmir Barosu</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/50" />
                        <span>4 Hizmet Alanı</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/50" />
                        <span>16 Uzman Makale</span>
                    </motion.div>

                </div>
            </div>

            {/* Subtle Side "Shadow" for Depth */}
            <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        </section>
    );
}
