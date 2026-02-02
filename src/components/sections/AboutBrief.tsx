"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const strengths = [
    "Kira Hukukunda Güncel Yargıtay Uygulamaları",
    "Hızlı ve Sonuç Odaklı Uyuşmazlık Yönetimi",
    "Şeffaf ve Düzenli Bilgilendirme Süreci",
    "İzmir Yerel Adliye Dinamiklerine Hakimiyet"
];

export function AboutBrief() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative animate-float">
                            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] rotate-3 -z-10" />
                            <div className="bg-slate-100 rounded-[2rem] p-8 aspect-square flex items-center justify-center overflow-hidden border border-slate-200">
                                <span className="text-primary/10 font-bold text-[10rem] font-playfair select-none lowercase">
                                    mert
                                </span>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                    <h4 className="text-2xl font-playfair font-bold text-primary mb-2">Av. Mert Kağan Çetin</h4>
                                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Hukuk & Danışmanlık</p>
                                </div>
                            </div>
                        </div>

                        {/* Overlay Experience Card */}
                        <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-2xl shadow-2xl hidden md:block border-4 border-white">
                            <p className="text-secondary text-5xl font-bold mb-1">98%</p>
                            <p className="text-white text-xs font-bold uppercase tracking-tighter">Hukuki Başarı Oranı</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-secondary-foreground mb-4">
                            Kurucu Hakkında
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-8">
                            Adalet Yolunda Uzman ve Kararlı Bir Rehber
                        </h3>

                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Mert Kağan Çetin Hukuk Bürosu olarak İzmir merkezli faaliyetlerimizde, müvekkillerimizin hukuki sorunlarını kendi meselemiz gibi sahipleniyoruz. Özellikle kira ve gayrimenkul hukukunun karmaşık yapısında, net ve uygulanabilir çözümler sunarak hak kayıplarının önüne geçiyoruz.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Yıllara dayanan tecrübemiz ve yerel mahkeme pratiklerine olan hakimiyetimizle, tahliye süreçlerinden kira tespit davalarına kadar her aşamada güvenilir bir partneriz.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {strengths.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    <span className="text-primary font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                            <Link href="/hakkimda">Hakkımda Daha Fazla Bilgi</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
