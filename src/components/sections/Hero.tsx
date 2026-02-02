"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white px-4 border-b border-border">
            <div className="container max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground border border-border">
                        İzmir Hukuk & Danışmanlık
                    </div>

                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary leading-[1.1] tracking-tight">
                        İzmir <span className="italic">Kira Avukatı</span> <br />
                        & Gayrimenkul Danışmanı
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Gayrimenkul uyuşmazlıkları ve kira hukuku alanında, stratejik ve sonuç odaklı profesyonel danışmanlık hizmetleri.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Button
                            size="lg"
                            className="bg-primary text-white hover:bg-primary/90 px-10 h-14 text-base font-medium transition-all"
                            asChild
                        >
                            <Link href="/iletisim">İletişime Geçin</Link>
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="group h-14 text-base font-medium px-8 hover:bg-slate-50 border border-transparent hover:border-border transition-all"
                            asChild
                        >
                            <Link href="/hizmetler" className="flex items-center gap-2">
                                Hizmet Alanlarımız
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Subtle background detail */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </section>
    );
}
