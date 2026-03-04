import { Metadata } from "next";
import Link from "next/link";
import { getAllGlossaryTerms, getGlossaryTermsByCategory, categoryLabels, GlossaryCategory } from "@/lib/glossary";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Scale, ArrowRight, BookOpen, Home, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Hukuk Sözlüğü | Kira Hukuku Terimleri",
    description: "Kira hukuku terimlerinin anlaşılır açıklamaları. Tahliye taahhütnamesi, kira tespit davası, depozito ve diğer önemli kavramlar hakkında bilgi edinin.",
    alternates: {
        canonical: "https://mertkagancetin.com/sozluk/",
    },
    openGraph: {
        title: "Hukuk Sözlüğü | Kira Hukuku Terimleri",
        description: "Kira hukuku terimlerinin anlaşılır açıklamaları. Tahliye, kira tespit, depozito ve diğer kavramlar.",
        url: "https://mertkagancetin.com/sozluk/",
        type: "website",
    },
};

const categoryOrder: GlossaryCategory[] = ["tahliye", "kira-bedeli", "sozlesme", "haklar"];

export default function GlossaryPage() {
    const allTerms = getAllGlossaryTerms();

    return (
        <main className="bg-white">
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Hukuk Sözlüğü", url: "https://mertkagancetin.com/sozluk/" },
                ]}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            Ana Sayfa
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Hukuk Sözlüğü</span>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-slate-300 mb-6">
                            <Scale className="w-3.5 h-3.5 text-secondary" />
                            {allTerms.length} Terim
                        </div>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                            Kira Hukuku Sözlüğü
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                            Kira hukuku alanındaki önemli terimlerin anlaşılır açıklamaları. Haklarınızı bilmek, hukuki süreçlerde doğru adımlar atmanızın ilk koşuludur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms by Category */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {categoryOrder.map((category) => {
                        const terms = getGlossaryTermsByCategory(category);
                        if (terms.length === 0) return null;

                        return (
                            <div key={category} className="mb-16 last:mb-0">
                                <h2 className="text-2xl font-playfair font-bold text-primary mb-8 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-secondary rounded-full" />
                                    {categoryLabels[category]}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {terms.map((term) => (
                                        <Link
                                            key={term.slug}
                                            href={`/sozluk/${term.slug}`}
                                            className="group border border-slate-200 rounded-xl p-6 hover:border-secondary/50 hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-3">
                                                <h3 className="font-bold text-primary group-hover:text-secondary transition-colors">
                                                    {term.term}
                                                </h3>
                                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-secondary transition-colors flex-shrink-0 mt-1" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                                {term.shortDescription}
                                            </p>
                                            <span className="inline-block text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                                                {term.legalBasis}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Hub CTA */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white">
                        <h3 className="text-xl font-playfair font-bold mb-3">İzmir&apos;de Kira Hukuku Desteğine mi İhtiyacınız Var?</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-5">
                            Kira hukuku terimlerini anlamak önemlidir ancak hukuki süreçlerde uzman desteği almak hak kaybını önler. Ücretsiz ön görüşme için bize ulaşın.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/izmir-kira-avukati" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
                                İzmir Kira Avukatı <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/hizmetler" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                Tüm Hizmetler
                            </Link>
                            <Link href="/blog" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                <BookOpen className="w-4 h-4" />
                                Hukuki Makaleler
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
