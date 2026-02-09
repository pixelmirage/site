"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 legal-pattern opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

            <div className="container max-w-5xl mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-4 text-secondary mb-4"
                    >
                        <div className="h-[1px] w-12 bg-secondary/50" />
                        <Landmark className="w-6 h-6" />
                        <div className="h-[1px] w-12 bg-secondary/50" />
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl font-serif font-bold text-primary leading-[1.05] tracking-tight"
                        >
                            Adalet ve <span className="text-secondary italic">Güven</span> <br className="hidden md:block" />
                            Üzerine Kurulu Deneyim
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="text-xl md:text-2xl font-serif text-primary/80 mb-6 italic">
                                <Link href="/izmir-kira-avukati" className="hover:text-secondary transition-colors">İzmir Kira Avukatı</Link> &amp; Gayrimenkul Danışmanı
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                                Gayrimenkul uyuşmazlıkları ve kira hukuku alanında, yılların getirdiği tecrübe ve kararlılıkla, mülkiyet haklarınızı en üst düzeyde savunuyoruz.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6 pt-6"
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-white hover:bg-primary/95 px-12 h-16 text-lg font-serif tracking-wide transition-all shadow-xl hover:shadow-2xl"
                            asChild
                        >
                            <Link href="/iletisim">İletişim</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="group h-16 text-lg font-serif px-10 border-primary/20 text-primary hover:bg-primary/5 transition-all"
                            asChild
                        >
                            <Link href="/hizmetler" className="flex items-center gap-3">
                                Hizmet Alanlarımız
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </div>

            {/* Subtle Side "Shadow" for Depth */}
            <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        </section>
    );
}
