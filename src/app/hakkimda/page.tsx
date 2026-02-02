import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, BookOpen, Scale } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımda | Av. Mert Kağan Çetin",
    description: "İzmir kira avukatı Mert Kağan Çetin'in mesleki tecrübesi, uzmanlık alanları ve hukuk bürosu vizyonu hakkında detaylı bilgi.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-slate-50 py-20 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Hakkımda</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        İzmir'de adaletin tesisi için uzmanlık ve dürüstlükle hizmet veren Mert Kağan Çetin Hukuk Bürosu'nu yakından tanıyın.
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
                                    İzmir merkezli faaliyet gösteren hukuk büromuzun kurucusu olan Avukat Mert Kağan Çetin, meslek hayatı boyunca özellikle gayrimenkul hukuku, kira hukuku ve tazminat hukuku alanlarında derinlemesine uzmanlaşmıştır.
                                </p>
                                <p>
                                    Kira uyuşmazlıklarının toplumsal ve ekonomik boyutlarını yakından takip ederek, müvekkillerine yalnızca mahkeme süreçlerinde değil, aynı zamanda uyuşmazlık öncesi danışmanlık aşamasında da stratejik yönlendirmeler sunmaktadır.
                                </p>
                                <blockquote className="border-l-4 border-secondary pl-6 py-2 italic text-primary font-medium bg-secondary/5 rounded-r-lg">
                                    "Hukuk, sadece kurallardan ibaret değildir; o kuralların insan hayatına nasıl dokunduğu ve adaleti nasıl sağladığı asıl meseledir."
                                </blockquote>
                                <p>
                                    Bugüne kadar İzmir ve çevre illerde yüzlerce başarılı tahliye davası ve kira tespit davası yürütmüş olan Çetin, yerel mahkemelerin işleyişine ve güncel Yargıtay uygulamalarına hakimiyetiyle tanınmaktadır.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-secondary/20 rounded-lg">
                                            <Award className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-primary">Eğitim & Yetkinlik</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• İzmir Barosu Üyeliği</li>
                                        <li>• Arabuluculuk Süreç Yönetimi Eğitimi</li>
                                        <li>• Gayrimenkul Mevzuatı Güncelleme Panelleri</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-secondary/20 rounded-lg">
                                            <BookOpen className="w-5 h-5 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-primary">Vizyonumuz</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Modern hukuk teknolojilerini kullanarak, müvekkillerimize en hızlı ve en etkili çözümleri sunmak; İzmir'de kira hukuku dendiğinde akla gelen ilk ve en güvenilir isim olmaya devam etmek.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Stats Card */}
                        <div className="lg:w-1/3 w-full sticky top-[100px]">
                            <Card className="border-2 border-primary/5 shadow-2xl overflow-hidden bg-white">
                                <div className="bg-primary p-8 text-center text-white">
                                    <h4 className="text-xl font-playfair font-bold mb-1">Mert Kağan Çetin</h4>
                                    <p className="text-sm text-secondary font-medium uppercase tracking-widest">Kurucu Avukat</p>
                                </div>
                                <CardContent className="p-8 space-y-8">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center border-b pb-4">
                                            <span className="text-muted-foreground">Tecrübe</span>
                                            <span className="font-bold text-primary">7+ Yıl</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-4">
                                            <span className="text-muted-foreground">Dava Sayısı</span>
                                            <span className="font-bold text-primary">500+</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-4">
                                            <span className="text-muted-foreground">Uzmanlık</span>
                                            <span className="font-bold text-primary text-right">Kira & Tahliye</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h5 className="font-bold text-primary text-sm uppercase tracking-widest">Neden Bizi Seçmelisiniz?</h5>
                                        {[
                                            "Birebir İletişim",
                                            "Sonuç Odaklılık",
                                            "Şeffaf Ücret Politikası",
                                            "Hızlı Geri Dönüş"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="w-full bg-primary text-white hover:bg-primary/90" asChild>
                                        <Link href="/iletisim text-white">İletişime Geçin</Link>
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
                        <h3 className="text-3xl font-playfair font-bold text-primary mb-4">Mesleki İlkelerimiz</h3>
                        <p className="text-muted-foreground">Güveniniz, bizim en büyük sorumluluğumuzdur.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Dürüstlük & Şeffaflık",
                                desc: "Müvekkilimize davanın seyrine dair her türlü ihtimali dürüstçe açıklar, gerçekleşmeyecek vaatlerde bulunmayız.",
                                icon: Scale
                            },
                            {
                                title: "Gizlilik",
                                desc: "Müvekkil bilgilerini ve ticari sırlarını en üst düzeyde korur, profesyonel etik standartlarına sıkı sıkıya bağlı kalırız.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Uzmanlık",
                                desc: "Sadece uzman olduğumuz alanlarda hizmet vererek, müvekkilllerimize en yüksek kalitede hukuki destek sağlarız.",
                                icon: Award
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
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
