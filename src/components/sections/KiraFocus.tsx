import Link from "next/link";
import { MoveRight, Calculator, FileText, FileSignature, BookOpen } from "lucide-react";
import { kiraLinks, kiraTools } from "@/lib/nav";

const toolIcons = [Calculator, FileText, FileSignature];

const kiraPosts = [
    { title: "İki Haklı İhtar ile Kiracı Tahliyesi", href: "/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/" },
    { title: "Kira Tespit Davası Ne Zaman Açılır?", href: "/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/" },
    { title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?", href: "/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/" },
    { title: "10 Yıllık Uzama Süresi Dolan Kiracının Tahliyesi", href: "/blog/10-yillik-uzama-suresi-dolan-kiracinin-tahliyesi/" },
    { title: "Depozito İadesi Davası ve Kiracının Hakları", href: "/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/" },
    { title: "Kira Hukukunda Zorunlu Arabuluculuk Süreci", href: "/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" },
];

// Main kira services shown as cards (remaining subpages are linked below).
const featured = kiraLinks.slice(0, 6);
const secondary = kiraLinks.slice(6);

export function KiraFocus() {
    return (
        <>
            <section className="py-24 bg-slate-50 relative">
                <div className="absolute inset-0 legal-pattern opacity-10 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-14 space-y-5">
                        <div className="inline-block text-secondary font-bold text-xs uppercase tracking-[0.4em] pb-2 border-b-2 border-secondary/30">
                            Kira Hukuku
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">İzmir&apos;de Kira Uyuşmazlıkları</h2>
                        <p className="text-muted-foreground font-light text-lg">
                            Ev sahibi ve kiracı arasındaki uyuşmazlıklarda arabuluculuk, ihtar, icra takibi ve dava aşamalarında hukuki destek.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featured.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group bg-white border border-border/60 hover:border-secondary/40 p-7 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)] flex flex-col"
                            >
                                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">{item.name}</h3>
                                <p className="mt-2 text-sm text-muted-foreground font-light flex-1">{item.desc}</p>
                                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                                    Detaylı Bilgi <MoveRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {secondary.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 text-sm border border-primary/15 bg-white hover:border-secondary/40 hover:text-primary text-primary/80 rounded-sm transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/izmir-kira-avukati/"
                            className="px-4 py-2 text-sm font-semibold bg-primary text-white hover:bg-primary/90 rounded-sm transition-colors"
                        >
                            İzmir Kira Avukatı Sayfası
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-3">Kira Hesaplama ve Belge Araçları</h2>
                        <p className="text-muted-foreground font-light mb-8">Kira artışı hesaplama, kira sözleşmesi örneği ve tahliye taahhütnamesi metinleri.</p>
                        <div className="space-y-4">
                            {kiraTools.map((tool, i) => {
                                const Icon = toolIcons[i] ?? FileText;
                                return (
                                    <Link
                                        key={tool.href}
                                        href={tool.href}
                                        className="group flex items-start gap-4 border border-border/60 hover:border-secondary/40 p-5 transition-colors"
                                    >
                                        <div className="w-11 h-11 bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-serif font-bold text-primary">{tool.name}</p>
                                            <p className="text-sm text-muted-foreground font-light">{tool.desc}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-3">Kira Hukuku Makaleleri</h2>
                        <p className="text-muted-foreground font-light mb-8">Ev sahibi ve kiracıların sık karşılaştığı konulara ilişkin bilgilendirici yazılar.</p>
                        <ul className="divide-y divide-border/60 border-y border-border/60">
                            {kiraPosts.map((post) => (
                                <li key={post.href}>
                                    <Link href={post.href} className="group flex items-center gap-3 py-4 text-primary/90 hover:text-secondary transition-colors">
                                        <BookOpen className="w-4 h-4 text-secondary flex-shrink-0" />
                                        <span className="font-medium">{post.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href="/blog/" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                            Tüm Makaleler <MoveRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
