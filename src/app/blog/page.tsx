import { getAllPosts } from "@/lib/blog/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ChevronRight, Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Yasal Makaleler & Blog | İzmir Kira Avukatı",
    description: "Kira hukuku, tahliye davaları ve güncel yargı kararları hakkında uzman görüşleri ve bilgilendirici makaleler.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-white py-20 border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">Hukuki Makaleler</h1>
                        <p className="text-xl text-muted-foreground">
                            Kira hukuku ve gayrimenkul dünyasındaki güncel gelişmeleri, değişen mevzuatı ve emsal Yargıtay kararlarını takip edin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog List */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                    <Card className="h-full border-none shadow-sm group-hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                                        <div className="aspect-video bg-slate-100 relative flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors" />
                                            <span className="text-primary/10 font-playfair font-bold text-6xl">Law</span>
                                        </div>
                                        <CardHeader className="p-6 pb-2">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-bold uppercase tracking-wider">
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3 h-3" />
                                                    5 dk okuma
                                                </span>
                                            </div>
                                            <CardTitle className="text-xl font-playfair font-bold text-primary group-hover:text-secondary-foreground transition-colors leading-tight">
                                                {post.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-6 pt-2">
                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                                Haberin Devamı
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-slate-300" />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-primary mb-2">Henüz Makale Bulunmuyor</h3>
                            <p className="text-muted-foreground">Makalelerimiz çok yakında burada paylaşılacaktır.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
