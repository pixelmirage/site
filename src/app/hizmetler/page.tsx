import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Key, Home, FileText, Gavel, Users2, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description: "Av. Mert Kağan Çetin tarafından sunulan kira hukuku, tahliye davaları ve gayrimenkul danışmanlığı hizmetleri.",
};

const services = [
    {
        title: "Kira Tespit Davası",
        description: "Kira bedelinin emsal rayiçlere ve ekonomik koşullara göre hakkaniyetli bir şekilde yeniden belirlenmesi.",
        icon: Scale,
        details: ["Emsal araştırması", "Bilirkişi süreci yönetimi", "Hakkaniyet indirimi analizi", "Geçmişe dönük kira farkları"]
    },
    {
        title: "Tahliye Davaları",
        description: "İhtiyaç, temerrüt, esaslı onarım veya haklı ihtar nedenleriyle kiracının tahliyesi süreçleri.",
        icon: Key,
        details: ["İhtiyaç nedeniyle tahliye", "İki haklı ihtar ile tahliye", "Temerrüt nedeniyle tahliye", "Tahliye emri takibi"]
    },
    {
        title: "Tahliye Taahhütnamesi",
        description: "Hukuken geçerli tahliye taahhütnamesi hazırlanması ve bu taahhüde dayalı icra/dava süreçleri.",
        icon: FileText,
        details: ["Tarihlerin geçerlilik kontrolü", "İmzaya itiraz süreçleri", "İcra yoluyla tahliye", "Taahhüt iptali davaları"]
    },
    {
        title: "Gayrimenkul Hukuku",
        description: "Taşınmaz malların mülkiyeti, kullanımı ve devrine ilişkin tüm uyuşmazlıklarda uzman temsil.",
        icon: Home,
        details: ["Tapu iptal ve tescil", "İzale-i şuyu davaları", "Kamulaştırma davaları", "Ecrimisil talepleri"]
    },
    {
        title: "Kira Sözleşmesi Yönetimi",
        description: "İşyeri ve konutlar için riskleri minimize eden, tarafları koruyan profesyonel sözleşme hazırlığı.",
        icon: Gavel,
        details: ["Özel şartların belirlenmesi", "Depozito yönetimi", "Kefalet şartları", "Devir ve alt kira izinleri"]
    },
    {
        title: "Arabuluculuk & Danışmanlık",
        description: "Dava yoluna gitmeden önce zorunlu arabuluculuk süreçlerinde etkin temsil ve stratejik danışmanlık.",
        icon: Users2,
        details: ["Arabuluculuk hazırlığı", "Müzakere yönetimi", "Anlaşma tutanakları", "Uzlaşma stratejileri"]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-slate-50 py-24 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Hizmet Alanlarımız</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        İzmir'de gayrimenkul ve kira hukuku alanında uzmanlaşmış kadromuzla yanınızdayız.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-16 bg-primary/5 flex items-center justify-center p-6 md:p-0 group-hover:bg-primary transition-colors duration-300">
                                        <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
                                    </div>
                                    <div className="flex-1 p-8">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-2xl font-playfair font-bold text-primary">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                                {service.description}
                                            </p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {service.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-primary/80 font-medium">
                                                        <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button variant="ghost" className="p-0 text-primary hover:text-secondary group/btn font-bold" asChild>
                                                <Link href="/iletisim" className="flex items-center gap-2 italic">
                                                    Detaylı Bilgi Alın
                                                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-playfair font-bold mb-8">Neden Uzman Bir Kira Avukatı İle Çalışmalısınız?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary">01</div>
                            <h4 className="text-xl font-bold">Teknik Süreler</h4>
                            <p className="text-primary-foreground/70 text-sm">Kira hukukunda ihtarname ve dava süreleri hak düşürücüdür. Bir günlük gecikme davanın kaybına neden olabilir.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary">02</div>
                            <h4 className="text-xl font-bold">Yargıtay Kararları</h4>
                            <p className="text-primary-foreground/70 text-sm">Mevzuatın yanı sıra güncel Yargıtay içtihatlarını bilmek, davanın sonucunu belirleyen asıl unsurdur.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary">03</div>
                            <h4 className="text-xl font-bold">Stratejik Planlama</h4>
                            <p className="text-primary-foreground/70 text-sm">Sadece dava açmak değil, uyuşmazlığı en kısa ve az maliyetli yoldan çözmek profesyonel bir bakış açısı gerektirir.</p>
                        </div>
                    </div>
                    <Button size="lg" className="mt-16 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-12" asChild>
                        <Link href="/iletisim">Ücretsiz Ön Görüşme İçin Arayın</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
