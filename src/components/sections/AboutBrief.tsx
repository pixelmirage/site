"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scale, Shield } from "lucide-react";

export function AboutBrief() {
    return (
        <section className="py-32 bg-white relative overflow-hidden border-b border-border/50">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-center">

                    {/* Institutional Branding / Visual */}
                    <div className="lg:w-5/12 w-full">
                        <div className="relative p-12 bg-primary/5 rounded-sm border border-border/30 aspect-[4/5] flex flex-col justify-center items-center text-center">
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-50" />
                            <Scale className="w-24 h-24 text-primary opacity-20 mb-12" />
                            <h3 className="text-3xl font-serif font-bold text-primary mb-6 italic">Hukukun Otoritesi</h3>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed font-light mt-4">
                                "Mesleki derinlik, her vakada hakikatin izini sürmeyi gerektirir."
                            </p>
                            <div className="mt-12 flex items-center gap-4 text-primary/40">
                                <span className="h-[1px] w-8 bg-current" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Est. Hukuk Bürosu</span>
                                <span className="h-[1px] w-8 bg-current" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-7/12 space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-secondary font-bold text-xs uppercase tracking-[0.3em]">
                                <Shield className="w-4 h-4" />
                                Kurumsal Kimlik
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">Av. Mert Kağan Çetin</h3>
                        </div>

                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-serif italic opacity-90">
                            <p>
                                Gayrimenkul ve kira hukuku, sadece mevzuat bilgisi değil, mülkiyetin kutsiyetine olan saygıyı ve teknik bir stratejiyi gerektirir. İzmir merkezli çalışmalarımızda, müvekkillerimizin haklarını bu disiplinle savunuyoruz.
                            </p>
                            <p className="not-italic font-sans text-base text-muted-foreground font-light">
                                Mert Kağan Çetin Hukuk Bürosu olarak, karmaşık kira uyuşmazlıklarında net çözümler üretiyor ve yargılama süreçlerini şeffaflıkla yönetiyoruz. İzmir genelinde taşınmaz hukukuna dair her türlü danışmanlık hizmetini, mesleki ilkelere bağlı kalarak sunmaktayız.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border pt-6 border-t border-border/50">
                            <div className="bg-white py-6 pr-6">
                                <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-2">Uzmanlık Alanı</h4>
                                <p className="text-sm text-muted-foreground">Taşınmaz ve Kira Hukuku, Tahliye Rejimi</p>
                            </div>
                            <div className="bg-white py-6">
                                <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-2">Merkez Ofis</h4>
                                <p className="text-sm text-muted-foreground">Dedemhan Plaza, Bayraklı/İzmir</p>
                            </div>
                        </div>

                        <Button variant="outline" size="lg" className="rounded-sm border-primary/20 text-primary hover:bg-primary hover:text-white px-12 h-16 font-serif tracking-wide transition-all" asChild>
                            <Link href="/hakkimda">Detaylı Bilgilendirme</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
