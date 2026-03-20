import { Star } from "lucide-react";

interface Review {
    name: string;
    initial: string;
    rating: number;
    text: string;
    date: string;
    service: string;
}

export function ClientReviews({ reviews, title = "Danışan Deneyimleri" }: { reviews: Review[]; title?: string }) {
    return (
        <div className="not-prose my-12">
            <h2 id="danisan-deneyimleri" className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-2 scroll-mt-24">{title}</h2>
            <p className="text-muted-foreground mb-8">Google üzerinden paylaşılan danışan değerlendirmeleri</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {review.initial}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-slate-800">{review.name}</p>
                                <p className="text-xs text-slate-500">{review.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-0.5 mb-3">
                            {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                    key={j}
                                    className={`w-4 h-4 ${j < review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
                        <p className="text-xs text-slate-400 mt-3">{review.service}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function AggregateRatingSchema({ ratingValue, reviewCount, serviceName }: { ratingValue: number; reviewCount: number; serviceName: string }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": serviceName,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "bestRating": 5,
            "worstRating": 1,
            "reviewCount": reviewCount
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
