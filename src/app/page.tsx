import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mertkagancetin.com/",
  },
  openGraph: {
    url: "https://mertkagancetin.com/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesGrid />

      {/* About Section */}
      <AboutBrief />

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Hukuki Sorunlarınız İçin Profesyonel Destek
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            İzmir'de kira, tahliye veya gayrimenkul hukukuna ilişkin her türlü sorunuz için bizimle iletişime geçebilirsiniz. Hak kaybı yaşamadan profesyonel destek alın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-10 h-14 text-lg" asChild>
              <Link href="/iletisim">Randevu Alın</Link>
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
