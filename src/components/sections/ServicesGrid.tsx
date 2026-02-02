"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Home,
    Key,
    Gavel,
    FileText,
    Users2,
    Scale
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Kira Tespit Davası",
        description: "Kira bedelinin güncel piyasa koşullarına göre yeniden belirlenmesi süreçlerinde teknik ve hukuki destek.",
        icon: Scale,
        href: "/hizmetler/kira-tespit-davasi"
    },
    {
        title: "Tahliye Davaları",
        description: "İhtiyaç, temerrüt veya iki haklı ihtar nedeniyle tahliye süreçlerinin yönetimi ve takibi.",
        icon: Key,
        href: "/hizmetler/tahliye-davasi"
    },
    {
        title: "Tahliye Taahhütnamesi",
        description: "Geçerli tahliye taahhütnamesi hazırlanması ve uygulama süreçlerinde hak kaybının önlenmesi.",
        icon: FileText,
        href: "/hizmetler/tahliye-taahhudu"
    },
    {
        title: "Gayrimenkul Hukuku",
        description: "Tapu iptal tescil, el atmanın önlenmesi ve ortaklığın giderilmesi davalarında uzman temsil.",
        icon: Home,
        href: "/hizmetler/gayrimenkul-hukuku"
    },
    {
        title: "Kira Sözleşmesi",
        description: "İleride doğabilecek uyuşmazlıkları minimize eden, dinamik ve kapsamlı kira sözleşmeleri.",
        icon: Gavel,
        href: "/hizmetler/kira-sozlesmesi"
    },
    {
        title: "Hukuki Danışmanlık",
        description: "Mülk yönetimi ve kira hukuku alanında önleyici hukuk hizmetleri ve stratejik çözüm önerileri.",
        icon: Users2,
        href: "/hizmetler/danismanlik"
    }
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-secondary-foreground mb-4">
                        Uzmanlık Alanlarımız
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-playfair font-bold text-primary mb-6">
                        Kira ve Gayrimenkul Hukukunda Profesyonel Çözümler
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        İzmir'de kira uyuşmazlıkları ve gayrimenkul hukuku alanında uzman kadromuzla, her müvekkile özel stratejiler geliştiriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={service.href}>
                                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-white">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                            <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <CardTitle className="font-playfair text-xl text-primary group-hover:text-primary/80 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
