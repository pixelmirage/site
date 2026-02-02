"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Scale } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0 hidden lg:block" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-secondary px-4 py-2 rounded-full mb-6">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                İzmir'de Uzman Hukuki Destek
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary leading-tight mb-6">
                            İzmir <span className="text-secondary-foreground">Kira Avukatı</span> & Gayrimenkul Danışmanı
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                            Tahliye davaları, kira tespit süreçleri ve kira sözleşmesi uyuşmazlıklarında İzmir'in her bölgesinde profesyonel avukatlık hizmeti. Hakkınızı modern ve çözüm odaklı stratejilerle savunuyoruz.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-md px-8 h-12 text-base font-semibold" asChild>
                                <Link href="/iletisim">
                                    Hemen Danışın
                                    <ChevronRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-md px-8 h-12 text-base font-semibold" asChild>
                                <Link href="/hizmetler">
                                    Hizmetlerimizi İnceleyin
                                </Link>
                            </Button>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                            <Scale className="w-4 h-4 text-primary/40" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <span className="font-bold text-primary block">500+ Başarılı Dava</span>
                                %98 Müvekkil Memnuniyeti
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            {/* Using a placeholder-like styling for since I can't generate specific lawyer photos easily, but I'll use a nice abstract legal image if needed later. For now, a sophisticated card. */}
                            <div className="bg-primary p-12 aspect-[4/5] flex flex-col justify-end text-white">
                                <Scale className="w-20 h-20 text-secondary mb-8 opacity-50" />
                                <h2 className="text-3xl font-playfair font-bold mb-4 italic">
                                    "Gerçek adalet, her bir bireyin hakkının teslim edilmesidir."
                                </h2>
                                <p className="text-secondary/80 font-medium">Av. Mert Kağan Çetin</p>
                            </div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100">
                            <span className="block text-4xl font-bold text-primary">10+</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Yıllık Tecrübe</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
