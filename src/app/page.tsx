import { Hero } from "@/components/sections/Hero";
import { KiraFocus } from "@/components/sections/KiraFocus";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "İzmir Kira Avukatı | Av. Mert Kağan Çetin" },
  description: "İzmir kira avukatı Av. Mert Kağan Çetin: kira hukuku alanında tahliye, kira tespit, kira uyarlama ve kira borcu icra davaları. İzmir, Manisa ve Aydın.",
  alternates: {
    canonical: "https://mertkagancetin.com/",
  },
  openGraph: {
        images: ["/og-image.jpg"],
    url: "https://mertkagancetin.com/",
    title: "İzmir Kira Avukatı | Av. Mert Kağan Çetin",
    description: "İzmir kira avukatı Av. Mert Kağan Çetin: kira hukuku alanında tahliye, kira tespit, kira uyarlama ve kira borcu icra davaları. İzmir, Manisa ve Aydın.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
    title: "İzmir Kira Avukatı | Av. Mert Kağan Çetin",
    description: "İzmir kira avukatı Av. Mert Kağan Çetin: kira hukuku alanında tahliye, kira tespit, kira uyarlama ve kira borcu icra davaları. İzmir, Manisa ve Aydın.",
  },
};

const homeFaqs = [
  {
    question: "Av. Mert Kağan Çetin hangi alanlarda avukatlık hizmeti veriyor?",
    answer: "Büro ağırlıklı olarak kira hukuku alanında çalışır: kiracı tahliye davası, kira tespit ve kira uyarlama davaları, kira borcu nedeniyle icra takibi ve kira sözleşmesi hazırlanması. Bunun yanında iş hukuku, aile hukuku (boşanma, velayet, nafaka) ve tazminat hukuku alanlarında da hizmet verilir.",
  },
  {
    question: "Kira davası açmadan önce arabulucuya gitmek zorunlu mu?",
    answer: "Evet. Kira ilişkisinden doğan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak dava şartıdır (HUAK m. 18/B). Arabuluculukta anlaşma sağlanamazsa Sulh Hukuk Mahkemesinde dava açılabilir. İcra yoluyla tahliye talepleri bu şartın dışındadır.",
  },
  {
    question: "Ön görüşme nasıl yapılıyor?",
    answer: "Ön görüşmeler telefonla yapılır. Görüşmede kira sözleşmesi, ihtarname, ödeme kayıtları gibi belgeler hakkında bilgi alınır ve izlenebilecek hukuki yollar değerlendirilir. Gerekirse Bayraklı'daki ofiste yüz yüze görüşme planlanır.",
  },
  {
    question: "İzmir'in hangi ilçelerindeki dosyalarla ilgileniyorsunuz?",
    answer: "Ofis Bayraklı'dadır. Bayraklı, Bornova, Karşıyaka, Buca, Konak, Çiğli, Gaziemir, Balçova, Narlıdere, Güzelbahçe ve Karabağlar başta olmak üzere İzmir genelindeki dosyalarda hizmet verilir.",
  },
  {
    question: "Avukatlık ücreti nasıl belirlenir?",
    answer: "Ücret; işin türü, dava değeri ve gerektirdiği emek dikkate alınarak yazılı ücret sözleşmesiyle kararlaştırılır ve Türkiye Barolar Birliği Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Somut dosyaya ilişkin bilgi, belgeler incelendikten sonra verilir.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <FAQSchema faqs={homeFaqs} />
      <BreadcrumbSchema items={[{ name: "Ana Sayfa", url: "https://mertkagancetin.com/" }]} />
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


      {/* İzmir avukat – çalışma şekli ve alanlar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-slate-700 text-[1.0625rem] leading-relaxed space-y-5">
          <h2 className="text-3xl font-serif font-bold text-primary">İzmir&apos;de Avukatlık Hizmeti: Kira Hukuku Öncelikli</h2>
          <p>
            Kira uyuşmazlıkları çoğu zaman bir ihtarname, ödenmeyen birkaç aylık kira ya da yeni dönem kira artışı üzerindeki anlaşmazlıkla başlar. Türk Borçlar Kanunu bu süreçleri sıkı şekil şartlarına ve hak düşürücü sürelere bağladığı için ilk adımın doğru atılması önemlidir. Ev sahipleri için <Link href="/izmir-kira-avukati/kiraci-tahliye-davasi/" className="text-secondary font-semibold underline underline-offset-2">kiracı tahliye davası</Link>, <Link href="/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/" className="text-secondary font-semibold underline underline-offset-2">ihtiyaç nedeniyle tahliye</Link> ve <Link href="/izmir-kira-avukati/on-yillik-kiraci-tahliye/" className="text-secondary font-semibold underline underline-offset-2">10 yıllık uzama süresi sonunda tahliye</Link>; kiracılar için <Link href="/izmir-kira-avukati/kira-uyarlama-davasi/" className="text-secondary font-semibold underline underline-offset-2">kira uyarlama davası</Link>, kira artışına itiraz ve depozito iadesi başlıca konulardır.
          </p>
          <p>
            Kira bedelinin piyasa koşullarına göre belirlenmesi için <Link href="/izmir-kira-avukati/kira-tespit-davasi/" className="text-secondary font-semibold underline underline-offset-2">kira tespit davası</Link>, ödenmeyen kira alacağı için ise <Link href="/izmir-kira-avukati/kira-borcu-icra/" className="text-secondary font-semibold underline underline-offset-2">kira borcu icra takibi</Link> yolları bulunur. Kira artışının yasal sınırını <Link href="/kira-artis-orani-hesaplama/" className="text-secondary font-semibold underline underline-offset-2">kira artış oranı hesaplama</Link> aracıyla, sözleşmede bulunması gereken maddeleri ise <Link href="/kira-sozlesmesi-ornegi/" className="text-secondary font-semibold underline underline-offset-2">kira sözleşmesi örneği</Link> sayfasında inceleyebilirsiniz.
          </p>
          <h3 className="text-xl font-serif font-bold text-primary pt-2">Süreç nasıl işler?</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Telefonla ön görüşme:</strong> Uyuşmazlığın konusu, sözleşme ve yazışmalar hakkında bilgi alınır.</li>
            <li><strong>Belgelerin incelenmesi:</strong> Kira sözleşmesi, ihtarname, ödeme kayıtları ve varsa tahliye taahhütnamesi değerlendirilir.</li>
            <li><strong>Arabuluculuk veya ihtar:</strong> Dava şartı olan arabuluculuk başvurusu ya da gerekli ihtarlar yapılır.</li>
            <li><strong>Dava veya icra takibi:</strong> Anlaşma sağlanamazsa Sulh Hukuk Mahkemesinde dava açılır ya da İzmir icra dairelerinde takip başlatılır.</li>
          </ol>
          <h3 className="text-xl font-serif font-bold text-primary pt-2">Diğer çalışma alanları</h3>
          <p>
            Kira hukukunun yanı sıra işçi ve işveren uyuşmazlıklarında (işe iade, kıdem ve ihbar tazminatı, fazla mesai alacağı) <Link href="/izmir-is-avukati/" className="text-secondary font-semibold underline underline-offset-2">İzmir iş avukatı</Link>; anlaşmalı ve çekişmeli boşanma, velayet ve nafaka konularında <Link href="/izmir-bosanma-avukati/" className="text-secondary font-semibold underline underline-offset-2">İzmir boşanma avukatı</Link>; trafik kazası, iş kazası ve malpraktis kaynaklı taleplerde <Link href="/izmir-tazminat-avukati/" className="text-secondary font-semibold underline underline-offset-2">İzmir tazminat avukatı</Link> sayfalarında ayrıntılı bilgi yer almaktadır.
          </p>
          <p>
            Ofis Bayraklı&apos;dadır; Bornova, Karşıyaka, Buca, Konak, Çiğli, Gaziemir, Balçova, Narlıdere, Güzelbahçe ve Karabağlar başta olmak üzere İzmir genelindeki dosyalarda hizmet verilir. Hukuki terimlerin açıklamaları için <Link href="/sozluk/" className="text-secondary font-semibold underline underline-offset-2">hukuk sözlüğü</Link>, güncel konular için <Link href="/blog/" className="text-secondary font-semibold underline underline-offset-2">makaleler</Link> bölümüne göz atabilirsiniz.
          </p>
        </div>
      </section>

      {/* SSS – görünür içerik, FAQPage schema ile senkron */}
      <section className="py-20 bg-slate-50 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {homeFaqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-slate-200 bg-white px-5 py-4 md:px-6 md:py-5 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-primary">{f.question}</h3>
                <p className="mt-3 border-t border-slate-100 pt-3 text-slate-700 leading-7">{f.answer}</p>
              </div>
            ))}
          </div>
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
