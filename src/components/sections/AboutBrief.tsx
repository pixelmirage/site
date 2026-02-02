"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutBrief() {
    return (
        <section className="py-32 bg-white overflow-hidden border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-24 items-start">
                    {/* Bio Section */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-12 font-medium tracking-widest uppercase text-muted-foreground">Profil</h2>
                            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-primary">Av. Mert Kağan Çetin</h3>
                        </div>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                            <p>
                                Mert Kağan Çetin Hukuk Bürosu, İzmir merkezli olarak gayrimenkul ve kira hukuku alanında uzmanlaşmış bir hukuk pratiğidir. Müvekkillerimize, hukuki uyuşmazlıklarda teknik derinlik ve stratejik öngörü ile hizmet sunuyoruz.
                            </p>
                            <p>
                                Özellikle kira tespiti, tahliye süreçleri ve taşınmaz mülkiyeti ile ilgili davalarda, güncel yargı içtihatlarını temel alan, şeffaf ve sonuç odaklı bir yaklaşım benimsiyoruz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                            <div className="space-y-2">
                                <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Uzmanlık</h4>
                                <p className="text-sm text-muted-foreground">Kira Hukuku, Gayrimenkul, Tahliye Süreçleri</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Lokasyon</h4>
                                <p className="text-sm text-muted-foreground">Bayraklı & Karşıyaka, İzmir</p>
                            </div>
                        </div>

                        <Button variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-10 h-14 transition-all" asChild>
                            <Link href="/hakkimda">Detaylı Özgeçmiş</Link>
                        </Button>
                    </div>

                    {/* Visual Divider / Branding */}
                    <div className="lg:w-1/2 w-full aspect-square bg-slate-50 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
                        </div>
                        <div className="relative text-center p-12 space-y-4">
                            <div className="w-16 h-[1px] bg-primary mx-auto mb-8" />
                            <p className="text-2xl font-playfair italic text-primary/80 max-w-sm">
                                "Hukuk, karmaşıklığı sadeleştirme ve hak olanı teslim etme sanatıdır."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
