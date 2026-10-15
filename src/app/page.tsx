import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "İzmir Avukat | Av. Mert Kağan Çetin Hukuk Bürosu" },
  description: "İzmir avukat Av. Mert Kağan Çetin Hukuk Bürosu: iş, boşanma, tazminat ve kira hukuku alanlarında avukatlık ve hukuki danışmanlık. Bayraklı, İzmir.",
  alternates: {
    canonical: "https://mertkagancetin.com/",
  },
  openGraph: {
        images: ["/og-image.jpg"],
    url: "https://mertkagancetin.com/",
    title: "İzmir Avukat | Av. Mert Kağan Çetin Hukuk Bürosu",
    description: "İzmir avukat Av. Mert Kağan Çetin Hukuk Bürosu: iş, boşanma, tazminat ve kira hukuku alanlarında avukatlık ve hukuki danışmanlık. Bayraklı, İzmir.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesGrid />

      {/* Çalışma Alanları – her alan kendi sayfasına yönlendirir */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-slate-700 leading-relaxed space-y-4">
          <h2 className="text-3xl font-serif font-bold text-primary">İzmir&apos;de Hukuk Büromuz</h2>
          <p>
            Av. Mert Kağan Çetin Hukuk Bürosu, Bayraklı&apos;daki ofisinden İzmir genelinde iş hukuku, aile hukuku, tazminat hukuku ve kira hukuku alanlarında avukatlık ve hukuki danışmanlık hizmeti vermektedir.
          </p>
          <p>
            İşçi ve işveren uyuşmazlıkları için <Link href="/izmir-is-avukati/" className="text-secondary underline underline-offset-2">İzmir iş avukatı</Link>, boşanma, velayet ve nafaka için <Link href="/izmir-bosanma-avukati/" className="text-secondary underline underline-offset-2">İzmir boşanma avukatı</Link>, trafik ve iş kazası kaynaklı talepler için <Link href="/izmir-tazminat-avukati/" className="text-secondary underline underline-offset-2">İzmir tazminat avukatı</Link> sayfalarımızı inceleyebilirsiniz.
          </p>
          <p>
            Ev sahibi ve kiracı uyuşmazlıklarında tahliye, kira tespiti ve depozito konularındaki bilgiler <Link href="/izmir-kira-avukati/" className="text-secondary underline underline-offset-2">İzmir kira avukatı</Link> sayfamızda yer almaktadır.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutBrief />


      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Hukuki Sorunlarınız İçin Bize Ulaşın
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            İzmir'de iş hukuku, boşanma, tazminat veya kira hukukuna ilişkin sorularınız için bizimle iletişime geçebilirsiniz.
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
