import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, BookOpen, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PHOTO } from "@/lib/photo";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { PersonSchema } from "@/components/seo/PersonSchema";

export const metadata: Metadata = {
    title: "Hakkımda | İzmir Kira Avukatı",
    description: "İzmir kira avukatı Av. Mert Kağan Çetin: İzmir Barosu Sicil No 15556. Ev sahibi ve kiracı uyuşmazlıklarında tahliye, kira tespit ve icra takibi.",
    alternates: {
        canonical: "https://mertkagancetin.com/hakkimda/",
    },
    openGraph: {
        images: ["/og-image.jpg"],
        title: "Hakkımda | İzmir Kira Avukatı Av. Mert Kağan Çetin",
        description: "İzmir kira avukatı Av. Mert Kağan Çetin: İzmir Barosu Sicil No 15556. Ev sahibi ve kiracı uyuşmazlıklarında tahliye, kira tespit ve icra takibi.",
        url: "https://mertkagancetin.com/hakkimda/",
    },
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            <BreadcrumbSchema
                items={[
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/" },
                    { name: "Hakkımda", url: "https://mertkagancetin.com/hakkimda/" },
                ]}
            />
            <PersonSchema knowsAbout={["Kira Hukuku", "Kiracı Tahliye Davası", "Kira Tespit Davası", "Kira Uyarlama Davası", "Kira Alacağı İcra Takibi", "Tahliye Taahhütnamesi", "Kira Sözleşmesi", "Kira Arabuluculuğu"]} />
            {/* Page Header */}
            <section className="bg-slate-50 py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Hakkımda</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        İzmir'de ev sahibi ve kiracı uyuşmazlıklarına odaklanan Av. Mert Kağan Çetin hakkında bilgi.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Bio Section */}
                        <div className="lg:w-2/3 space-y-8">
                            <h2 className="text-3xl font-playfair font-bold text-primary">Av. Mert Kağan Çetin</h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Av. Mert Kağan Çetin, İzmir Barosu&apos;na kayıtlı (Sicil No: 15556) ve Bayraklı&apos;da ofisi bulunan avukattır. Çalışmalarını <Link href="/" className="text-secondary hover:underline">İzmir&apos;deki kira uyuşmazlıklarına</Link> odaklamıştır: <Link href="/izmir-kiraci-tahliye-davasi-avukati/" className="text-secondary hover:underline">kiracı tahliye davası</Link>, <Link href="/izmir-kira-tespit-davasi-avukati/" className="text-secondary hover:underline">kira tespit davası</Link>, <Link href="/izmir-kira-uyarlama-davasi-avukati/" className="text-secondary hover:underline">kira uyarlama davası</Link>, <Link href="/izmir-kira-alacagi-icra-takibi-avukati/" className="text-secondary hover:underline">kira alacağı icra takibi</Link>, <Link href="/izmir-tahliye-taahhudu-icra-avukati/" className="text-secondary hover:underline">tahliye taahhüdüne dayalı icra</Link>, <Link href="/izmir-kira-sozlesmesi-avukati/" className="text-secondary hover:underline">kira sözleşmesi</Link> ve <Link href="/izmir-kira-arabuluculuk-avukati/" className="text-secondary hover:underline">kira arabuluculuğu</Link>.
                                </p>
                                <p>
                                    Ev sahibi ve kiracı tarafında; dava öncesi ihtar ve sözleşme incelemesinden zorunlu arabuluculuğa, sulh hukuk mahkemesindeki yargılamadan icra takibine kadar süreç takip edilir. Ön görüşme telefonla yapılabilir.
                                </p>
                                <blockquote className="border-l-4 border-secondary pl-6 py-2 italic text-primary font-medium bg-secondary/5 rounded-r-lg">
                                    "Hukuk teknik bir alan olabilir; ancak müvekkilin kendi davasını anlaması bir lütuf değil, hakkıdır."
                                </blockquote>
                                <p>
                                    İzmir&apos;deki kira yargılamaları, Türk Borçlar Kanunu&apos;nun kira hükümleri ve güncel Yargıtay kararları yakından takip edilmektedir.
                                </p>
                                <p>
                                    Hukuki süreçleri herkesin anlayabileceği şekilde açıkladığı <a href="https://www.youtube.com/channel/UCUFW-qTe-nvUmkxkRisriYQ" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">YouTube kanalını</a> takip ederek kira hukuku konularında kısa bilgilendirme videolarına ulaşabilirsiniz.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-secondary/20 rounded-lg">
                                            <Award className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-primary">Eğitim & Yetkinlik</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• İzmir Ekonomi Üniversitesi Hukuk Fakültesi</li>
                                        <li>• İzmir Barosu Sicil No: 15556</li>
                                        <li>• TBB Sicil No: 162439</li>
                                        <li>• Arabuluculuk Süreç Yönetimi Eğitimi</li>
                                        <li>• Hukuk Mevzuatı Güncelleme Seminerleri</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-secondary/20 rounded-lg">
                                            <BookOpen className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-bold text-primary">Vizyonumuz</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Ev sahibi ve kiracılara her aşamada açık bilgi vererek kira uyuşmazlıklarındaki hukuki süreci anlaşılır kılmak.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Stats Card */}
                        <div className="lg:w-1/3 w-full sticky top-[100px]">
                            <Card className="border-2 border-primary/5 shadow-2xl overflow-hidden bg-white">
                                <Image
                                    src={PHOTO.src}
                                    alt="Av. Mert Kağan Çetin, İzmir'deki hukuk bürosunda – İzmir kira avukatı"
                                    width={PHOTO.width}
                                    height={PHOTO.height}
                                    sizes="(min-width: 1024px) 400px, 100vw"
                                    className="h-auto w-full object-cover"
                                />
                                <div className="bg-primary p-8 text-center text-white">
                                    <h3 className="text-xl font-playfair font-bold mb-1">Mert Kağan Çetin</h3>
                                    <p className="text-sm text-secondary font-medium uppercase tracking-widest">Kurucu Avukat</p>
                                </div>
                                <CardContent className="p-8 space-y-8">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center border-b pb-4">
                                            <span className="text-muted-foreground">Çalışma Alanı</span>
                                            <span className="font-bold text-primary text-right">Kira Hukuku</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-primary text-sm uppercase tracking-widest">Çalışma Şekli</h4>
                                        {[
                                            "Telefonla ön görüşme",
                                            "Dosyanın avukat tarafından takibi",
                                            "Süreç hakkında düzenli bilgilendirme",
                                            "Bayraklı ofis, İzmir geneli"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="w-full bg-primary text-white hover:bg-primary/90" asChild>
                                        <a href="tel:+905445854645">Ara: 0544 585 46 45</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Mesleki İlkelerimiz</h2>
                        <p className="text-muted-foreground">Kira uyuşmazlıklarında avukatlık meslek kurallarına bağlı çalışılır.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Dürüstlük & Şeffaflık",
                                desc: "Davanın seyrine dair olası sonuçlar açıkça anlatılır; sonuç vaadinde bulunulmaz.",
                                icon: Scale
                            },
                            {
                                title: "Gizlilik",
                                desc: "Müvekkil bilgileri ve belgeler avukatlık sır saklama yükümlülüğü kapsamında korunur.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Odaklı Çalışma",
                                desc: "Yalnızca kira hukukuna odaklanılarak her dosya yakından takip edilir.",
                                icon: Award
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function ShieldCheck(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
