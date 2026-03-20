import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall, Star } from "lucide-react";

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

      {/* Danışan Deneyimleri */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-3">Danışan Deneyimleri</h2>
            <p className="text-muted-foreground">Google üzerinden paylaşılan değerlendirmeler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Ahmet Y.", initial: "A", text: "Kiracı tahliye sürecimde başından sonuna kadar yanımızda oldu. Süreç boyunca her aşamada bilgilendirildik.", service: "Kira Hukuku" },
              { name: "Elif D.", initial: "E", text: "Kıdem tazminatı hesaplamam konusunda detaylı bilgi aldım. Haklarımın tamamını aldım.", service: "İş Hukuku" },
              { name: "Zeynep A.", initial: "Z", text: "Anlaşmalı boşanma protokolümüz titizlikle hazırlandı. Tek celsede boşanma kararımız kesinleşti.", service: "Boşanma Hukuku" },
              { name: "Ali R.", initial: "A", text: "Trafik kazası sonrası tazminat davamda çok profesyonel destek aldım. Hak ettiğim tazminatı aldım.", service: "Tazminat Hukuku" },
            ].map((review, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">{review.initial}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{review.name}</p>
                    <p className="text-xs text-slate-500">{review.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
            Hukuki Sorunlarınız İçin Profesyonel Destek
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            İzmir'de kira, iş hukuku, boşanma veya tazminat hukukuna ilişkin her türlü sorunuz için bizimle iletişime geçebilirsiniz. Hak kaybı yaşamadan profesyonel destek alın.
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
