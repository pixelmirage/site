import { fetchGoogleReviews } from "@/lib/google-reviews";
import { Star } from "lucide-react";
import Link from "next/link";

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

    const googleMapsUrl =
        "https://search.google.com/local/reviews?placeid=ChIJQQOrNC1juRQRJ8DjpHzNpzc";

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
                    <div className="text-center mt-8">
                        <Link
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google'da tüm yorumları görüntüle
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
