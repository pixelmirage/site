"use client";

import { motion } from "framer-motion";
import { Scale, Key, Home, FileText, Gavel, Users2, MoveRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Kira Tespit Davası",
        description: "Kira bedelinin güncel ekonomik ve hukuki emsaller ışığında yeniden yapılandırılması.",
        icon: Scale
    },
    {
        title: "Tahliye Davaları",
        description: "İhtiyaç, temerrüt ve sözleşme ihlallerine dayalı tahliye süreçlerinin hukuki yönetimi.",
        icon: Key
    },
    {
        title: "Tahliye Taahhütnamesi",
        description: "Geçerlilik şartlarını taşıyan taahhütnamelerin tanzimi ve icra yoluyla tahliye takibi.",
        icon: FileText
    },
    {
        title: "Gayrimenkul Devirleri",
        description: "Tapu iptal, tescil ve taşınmaz mülkiyetinin korunmasına yönelik davalar.",
        icon: Home
    },
    {
        title: "Sözleşme Tasarımı",
        description: "Kurumsal ve bireysel kira sözleşmelerinin hak kaybını önleyecek şekilde hazırlanması.",
        icon: Gavel
    },
    {
        title: "Arabuluculuk",
        description: "Zorunlu arabuluculuk süreçlerinde profesyonel temsil ve müzakere yönetimi.",
        icon: Users2
    }
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
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">Profesyonel Hukuki Hizmetler</h3>
                    <p className="text-muted-foreground font-light text-lg">
                        İzmir'deki kira uyuşmazlıkları ve gayrimenkul davalarında kurumsal disiplinle sonuç alıyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white border border-border/50 hover:border-primary/20 p-12 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
                        >
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed font-light mb-8">
                                {service.description}
                            </p>
                            <Link href="/hizmetler" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                                Hizmet Detayı <MoveRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
