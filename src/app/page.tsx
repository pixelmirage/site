import { Hero } from "@/components/sections/Hero";
import { KiraFocus } from "@/components/sections/KiraFocus";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "İzmir Kira Avukatı | Kira Hukuku – Av. Mert Kağan Çetin" },
  description: "İzmir kira hukuku: ev sahibi ve kiracılara tahliye, kira tespit, kira uyarlama, kira borcu icra ve kira sözleşmesi konularında avukatlık. Av. Mert Kağan Çetin.",
  alternates: {
    canonical: "https://mertkagancetin.com/",
  },
  openGraph: {
        images: ["/og-image.jpg"],
    url: "https://mertkagancetin.com/",
    title: "İzmir Kira Avukatı | Kira Hukuku – Av. Mert Kağan Çetin",
    description: "İzmir kira hukuku: ev sahibi ve kiracılara tahliye, kira tespit, kira uyarlama, kira borcu icra ve kira sözleşmesi konularında avukatlık. Av. Mert Kağan Çetin.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Kira hukuku: subpages, tools, articles */}
      <KiraFocus />

      {/* Büro tanıtımı – kira hukuku öncelikli */}
      <section className="py-16 bg-slate-50 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-3xl text-slate-700 leading-relaxed space-y-4">
          <h2 className="text-3xl font-serif font-bold text-primary">İzmir Kira Hukuku Bürosu</h2>
          <p>
            Av. Mert Kağan Çetin Hukuk Bürosu, Bayraklı&apos;daki ofisinden İzmir genelinde ağırlıklı olarak kira hukuku alanında avukatlık ve hukuki danışmanlık hizmeti vermektedir. Ev sahipleri için tahliye, kira tespit ve kira alacağının icra yoluyla takibi; kiracılar için kira artışına itiraz, kira uyarlama ve depozito iadesi başlıca çalışma konularıdır.
          </p>
          <p>
            Kira uyuşmazlıklarında dava açılmadan önce zorunlu arabuluculuk aşaması bulunmaktadır. Süreçlere ilişkin ayrıntılı bilgiler <Link href="/izmir-kira-avukati/" className="text-secondary underline underline-offset-2">İzmir kira avukatı</Link> sayfamızda yer almaktadır. Ön görüşme için telefonla ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Diğer Çalışma Alanları */}
      <ServicesGrid />

      {/* About Section */}
      <AboutBrief />


      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Kira Uyuşmazlığınız İçin Telefonla Görüşün
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Tahliye, kira tespit, kira uyarlama veya kira borcuna ilişkin sorularınız için telefonla ön görüşme yapabilirsiniz. İş, aile ve tazminat hukuku soruları için de ulaşabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-10 h-14 text-lg" asChild>
              <Link href="/iletisim/">Randevu Alın</Link>
            </Button>
            <Link href="tel:+905445854645" className="flex items-center gap-3 text-white font-bold text-2xl hover:text-secondary group transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                <PhoneCall className="w-6 h-6" />
              </div>
              0544 585 46 45
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
