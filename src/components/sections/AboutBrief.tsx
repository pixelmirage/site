"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scale, Shield } from "lucide-react";

export function AboutBrief() {
    return (
        <section className="py-32 bg-white relative overflow-hidden border-b border-border/50">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Text Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Av. Mert Kağan Çetin</h2>
                        </div>

                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-serif italic opacity-90">
                            <p>
                                Hukuk, sadece mevzuat bilgisi değil; haklara duyulan saygı ve teknik bir stratejiyi gerektirir. İzmir merkezli çalışmalarımızda, kira, iş, boşanma ve tazminat davalarında müvekkillerimizin haklarını bu disiplinle savunuyoruz.
                            </p>
                            <p className="not-italic font-sans text-base text-muted-foreground font-light">
                                Mert Kağan Çetin Hukuk Bürosu olarak, karmaşık hukuki uyuşmazlıklarda net çözümler üretiyor ve yargılama süreçlerini şeffaflıkla yönetiyoruz. İzmir genelinde kira hukuku, iş hukuku, aile hukuku ve tazminat davalarına dair her türlü danışmanlık hizmetini, mesleki ilkelere bağlı kalarak sunmaktayız.
                            </p>
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
