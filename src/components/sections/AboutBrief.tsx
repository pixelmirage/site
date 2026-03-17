import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                                İzmir Bayraklı'da kira, iş, boşanma ve tazminat davalarında müvekkillerimizin yanındayız. Her dosyada önce dinler, sonra en doğru stratejiyi birlikte belirleriz.
                            </p>
                            <p className="not-italic font-sans text-base text-muted-foreground font-light">
                                Mert Kağan Çetin Hukuk Bürosu olarak süreçleri şeffaf yönetiyor, müvekkillerimizi her aşamada bilgilendiriyoruz. İzmir genelinde kira hukuku, iş hukuku, aile hukuku ve tazminat davalarında danışmanlık hizmeti veriyoruz.
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
