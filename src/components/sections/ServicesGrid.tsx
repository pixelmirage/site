"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Key, Home, FileText, Gavel, Users2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Kira Tespit Davası",
        description: "Kira bedelinin güncel piyasa ve emsal değerlerine göre yeniden belirlenmesi.",
        icon: Scale,
        href: "/hizmetler#kira-tespit"
    },
    {
        title: "Tahliye Süreçleri",
        description: "İhtiyaç, temerrüt veya ihlal nedeniyle tahliye davalarının yönetimi.",
        icon: Key,
        href: "/hizmetler#tahliye"
    },
    {
        title: "Tahliye Taahhütnamesi",
        description: "Geçerli taahhütname hazırlığı ve icra takiplerinin profesyonel yönetimi.",
        icon: FileText,
        href: "/hizmetler#taahhut"
    },
    {
        title: "Tapu & Mülkiyet",
        description: "Tapu iptal, tescil ve taşınmaz mülkiyetine dair tüm uyuşmazlıklar.",
        icon: Home,
        href: "/hizmetler#gayrimenkul"
    },
    {
        title: "Sözleşme Hazırlığı",
        description: "İşyeri ve konut kira sözleşmelerinin risk yönetimi odaklı hazırlanması.",
        icon: Gavel,
        href: "/hizmetler#sozlesme"
    },
    {
        title: "Arabuluculuk",
        description: "Kira uyuşmazlıklarında zorunlu arabuluculuk süreçlerinde profesyonel temsil.",
        icon: Users2,
        href: "/hizmetler#arabuluculuk"
    }
];

export function ServicesGrid() {
    return (
        <section className="py-32 bg-slate-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-12 font-medium tracking-widest uppercase text-muted-foreground">Uzmanlık Alanları</h2>
                        <h3 className="text-4xl font-playfair font-bold text-primary">Profesyonel Hukuki Hizmetler</h3>
                    </div>
                    <Link href="/hizmetler" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-muted-foreground transition-colors pb-1 flex items-center gap-2 border-b border-primary">
                        Tüm Hizmetler
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={service.href} className="group block h-full bg-white hover:bg-slate-50 transition-colors p-10">
                                <service.icon className="w-8 h-8 text-primary/40 mb-8 group-hover:text-primary transition-colors" />
                                <h4 className="text-xl font-playfair font-bold text-primary mb-4">{service.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    İncele <ArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
