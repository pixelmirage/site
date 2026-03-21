import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Key, Home, FileText, Gavel, Users2, ShieldCheck, ChevronRight, Briefcase, Heart } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | İzmir Hukuk Bürosu",
    description: "İzmir'de kira hukuku, iş hukuku, boşanma ve tazminat davaları alanında avukatlık hizmetleri. Av. Mert Kağan Çetin ile profesyonel hukuki destek alın.",
    alternates: {
        canonical: "https://mertkagancetin.com/hizmetler/",
    },
    openGraph: {
        title: "Hizmetlerimiz | İzmir Hukuk Bürosu | Av. Mert Kağan Çetin",
        description: "İzmir'de kira hukuku, iş hukuku, boşanma ve tazminat davaları alanında avukatlık hizmetleri. Av. Mert Kağan Çetin ile profesyonel hukuki destek alın.",
        url: "https://mertkagancetin.com/hizmetler/",
    },
};

const services = [
    {
        title: "Kira Tespit Davası",
        description: "Kira bedelinin emsal rayiçlere ve ekonomik koşullara göre hakkaniyetli bir şekilde yeniden belirlenmesi.",
        icon: Scale,
        details: ["Emsal araştırması", "Bilirkişi süreci yönetimi", "Hakkaniyet indirimi analizi", "Geçmişe dönük kira farkları"],
        href: "/izmir-kira-avukati/"
    },
    {
        title: "Tahliye Davaları",
        description: "İhtiyaç, temerrüt, esaslı onarım veya haklı ihtar nedenleriyle kiracının tahliyesi süreçleri.",
        icon: Key,
        details: ["İhtiyaç nedeniyle tahliye", "İki haklı ihtar ile tahliye", "Temerrüt nedeniyle tahliye", "Tahliye emri takibi"],
        href: "/izmir-kira-avukati/"
    },
    {
        title: "Tahliye Taahhütnamesi",
        description: "Hukuken geçerli tahliye taahhütnamesi hazırlanması ve bu taahhüde dayalı icra/dava süreçleri.",
        icon: FileText,
        details: ["Tarihlerin geçerlilik kontrolü", "İmzaya itiraz süreçleri", "İcra yoluyla tahliye", "Taahhüt iptali davaları"],
        href: "/tahliye-taahhutnamesi/"
    },
    {
        title: "Gayrimenkul Hukuku",
        description: "Taşınmaz malların mülkiyeti, kullanımı ve devrine ilişkin tüm uyuşmazlıklarda uzman temsil.",
        icon: Home,
        details: ["Tapu iptal ve tescil", "İzale-i şuyu davaları", "Kamulaştırma davaları", "Ecrimisil talepleri"],
        href: "/izmir-kira-avukati/"
    },
    {
        title: "Kira Sözleşmesi Yönetimi",
        description: "İşyeri ve konutlar için riskleri minimize eden, tarafları koruyan profesyonel sözleşme hazırlığı.",
        icon: Gavel,
        details: ["Özel şartların belirlenmesi", "Depozito yönetimi", "Kefalet şartları", "Devir ve alt kira izinleri"],
        href: "/izmir-kira-avukati/"
    },
    {
        title: "Arabuluculuk & Danışmanlık",
        description: "Dava yoluna gitmeden önce zorunlu arabuluculuk süreçlerinde etkin temsil ve stratejik danışmanlık.",
        icon: Users2,
        details: ["Arabuluculuk hazırlığı", "Müzakere yönetimi", "Anlaşma tutanakları", "Uzlaşma stratejileri"],
        href: "/iletisim/"
    },
    {
        title: "İşe İade Davası",
        description: "Haksız fesih halinde işe iade, kıdem tazminatı, ihbar tazminatı ve işçi alacakları davaları.",
        icon: Briefcase,
        details: ["İşe iade davası", "Kıdem tazminatı", "İhbar tazminatı", "Fazla mesai alacağı"],
        href: "/izmir-is-avukati/"
    },
    {
        title: "İş Kazası Tazminatı",
        description: "İş kazası ve meslek hastalığı nedeniyle maddi ve manevi tazminat davalarında uzman temsil.",
        icon: ShieldCheck,
        details: ["Maddi tazminat", "Manevi tazminat", "SGK bildirimi", "Kusur tespiti"],
        href: "/izmir-tazminat-avukati/"
    },
    {
        title: "Anlaşmalı Boşanma",
        description: "Eşlerin tüm konularda uzlaşarak tek celsede boşanma sürecini tamamlaması için protokol hazırlığı.",
        icon: FileText,
        details: ["Boşanma protokolü", "Nafaka düzenlemesi", "Velayet anlaşması", "Mal paylaşımı"],
        href: "/izmir-bosanma-avukati/"
    },
    {
        title: "Çekişmeli Boşanma",
        description: "Tarafların anlaşamadığı durumlarda çekişmeli boşanma davası, velayet ve nafaka süreçleri.",
        icon: Gavel,
        details: ["Boşanma sebepleri", "Velayet davası", "Nafaka davası", "Tazminat talepleri"],
        href: "/izmir-bosanma-avukati/"
    },
    {
        title: "Velayet & Nafaka",
        description: "Boşanma sonrası çocuk velayeti, iştirak nafakası ve yoksulluk nafakası davalarında profesyonel destek.",
        icon: Heart,
        details: ["Velayet değişikliği", "İştirak nafakası", "Yoksulluk nafakası", "Kişisel ilişki düzeni"],
        href: "/izmir-bosanma-avukati/"
    },
    {
        title: "Mal Paylaşımı",
        description: "Edinilmiş mallara katılma alacağı ve mal rejimi tasfiyesi davalarında haklarınızın korunması.",
        icon: Scale,
        details: ["Katılma alacağı", "Değer artış payı", "İhtiyati tedbir", "Mal kaçırma önlemi"],
        href: "/izmir-bosanma-avukati/"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <BreadcrumbSchema items={[
                { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                { name: "Hizmetler", url: "https://mertkagancetin.com/hizmetler/" }
            ]} />
            {/* Page Header */}
            <section className="bg-slate-50 py-24 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Hukuki Hizmetlerimiz</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        <Link href="/izmir-kira-avukati/" className="text-secondary hover:underline">Kira hukuku</Link>,{" "}
                        <Link href="/izmir-is-avukati/" className="text-secondary hover:underline">iş hukuku</Link> ve{" "}
                        <Link href="/izmir-bosanma-avukati/" className="text-secondary hover:underline">boşanma davaları</Link> alanlarında uzmanlaşmış kadromuzla yanınızdayız.
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
                                                <Link href={service.href} className="flex items-center gap-2 italic">
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
                    <h2 className="text-3xl font-playfair font-bold mb-8">Neden Uzman Bir Avukat İle Çalışmalısınız?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary">01</div>
                            <h3 className="text-xl font-bold">Teknik Süreler</h3>
                            <p className="text-primary-foreground/70 text-sm">Kira hukukunda ihtarname ve dava süreleri hak düşürücüdür. Bir günlük gecikme davanın kaybına neden olabilir.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary">02</div>
                            <h3 className="text-xl font-bold">Yargıtay Kararları</h3>
                            <p className="text-primary-foreground/70 text-sm">Mevzuatın yanı sıra güncel Yargıtay içtihatlarını bilmek, davanın sonucunu belirleyen asıl unsurdur.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-secondary">03</div>
                            <h3 className="text-xl font-bold">Stratejik Planlama</h3>
                            <p className="text-primary-foreground/70 text-sm">Sadece dava açmak değil, uyuşmazlığı en kısa ve az maliyetli yoldan çözmek profesyonel bir bakış açısı gerektirir.</p>
                        </div>
                    </div>
                    <Button size="lg" className="mt-16 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-12" asChild>
                        <Link href="/iletisim/">Hemen Arayın</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
