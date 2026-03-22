import { fetchGoogleReviews } from "@/lib/google-reviews";
import { Star } from "lucide-react";


function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}`}
                />
            ))}
        </div>
    );
}

export async function GoogleReviews() {
    const data = await fetchGoogleReviews();

    if (!data || data.reviews.length === 0) return null;

    return (
        <>
            {/* AggregateRating Schema — gerçek GBP verisinden */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Attorney",
                        name: "Av. Mert Kağan Çetin",
                        url: "https://mertkagancetin.com",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: data.rating.toFixed(1),
                            reviewCount: data.totalReviews,
                            bestRating: "5",
                            worstRating: "1",
                        },
                        review: data.reviews.map((r) => ({
                            "@type": "Review",
                            author: {
                                "@type": "Person",
                                name: r.authorName.split(" ")[0],
                            },
                            datePublished: r.publishTime.split("T")[0],
                            reviewRating: {
                                "@type": "Rating",
                                ratingValue: r.rating,
                                bestRating: "5",
                                worstRating: "1",
                            },
                            reviewBody: r.text,
                        })),
                    }),
                }}
            />

            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                            Danışan Yorumları
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <Stars count={Math.round(data.rating)} />
                            <span className="text-lg font-bold text-slate-800">
                                {data.rating.toFixed(1)}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500">
                            Google Business Profile'dan alınmıştır
                        </p>
                    </div>

                    {/* Review Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {data.reviews.map((review, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <Stars count={review.rating} />
                                    <span className="text-xs text-slate-400">
                                        {review.relativeTime}
                                    </span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-4">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                        {review.authorName.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="text-sm font-medium text-slate-800">
                                        {review.authorName.split(" ")[0]}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Google Attribution */}
                    <p className="text-center text-xs text-slate-400 mt-8">
                        Yorumlar Google Business Profile&apos;dan otomatik olarak alınmaktadır.
                    </p>
                </div>
            </section>
        </>
    );
}
