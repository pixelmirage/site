const reviews = [
    {
        name: "Alican Zade",
        rating: 5,
        text: "Mert Kağan bey gerçekten çok kritik bir noktada sürece dahil oldu.. Hızlı müdahalesi ile maddi manevi bizi resmen eşikten döndürdü diyebilirim. İşini bu kadar sahiplenen ve çözüm odaklı bir avukat bulmak bu devirde zor gerçekten. Hem profesyonelliği hem de verdiği o güven duygusu için kendisine çok teşekkür ederim. Kesinlikle tavsiye ediyorum.",
        date: "2026-03-23",
    },
    {
        name: "gözde",
        rating: 5,
        text: "İşçilik alacağım için başvurdum süreci çok sorunsuz bir şekilde yönetti çok memnun kaldım kendisinden.",
        date: "2026-03-21",
    },
    {
        name: "hüsnü",
        rating: 5,
        text: "İzmir'de kira davam için bir çok avukatla görüştüm ancak hiçbiri Mert bey kadar işine hakim değildi. Yargıtay kararları bir yana en güncel Bam kararları dahi ezberinde. Çok ama çok memnun kaldım bir kez daha kendisine teşekkür ederim",
        date: "2026-03-20",
    },
    {
        name: "Can",
        rating: 5,
        text: "5 kiracımın hepsini de sorunsuz bir şekilde tahliye etti çok memnun kaldım",
        date: "2026-03-19",
    },
    {
        name: "bilge",
        rating: 5,
        text: "Öneri üzerine tahliye davası için başvurdum kendisine. Alanında oldukça bilgili, süreç hakkında bize açık bir şekilde bilgilendirdi ve işimizi çok kolaylaştırd, kısa sürede sonuç almamızı sağladı. Kaan Beye çok teşekkür ediyorum.",
        date: "2023-06-29",
    },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} yıldız üzerinden 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span
                    key={i}
                    className={`text-base leading-none ${i < count ? "text-yellow-400" : "text-slate-200"}`}
                    aria-hidden="true"
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
}

export function GoogleReviews() {
    return (
        <section className="py-16 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                        Danışan Yorumları
                    </h2>
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <Stars count={5} />
                        <span className="text-lg font-bold text-slate-800">5.0</span>
                    </div>
                    <p className="text-sm text-slate-500">
                        Google Business Profile&apos;dan alınmıştır
                    </p>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col"
                        >
                            <div className="flex items-center mb-3">
                                <Stars count={review.rating} />
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-4">
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                    {review.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-sm font-medium text-slate-800">
                                    {review.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Attribution */}
                <p className="text-center text-xs text-slate-500 mt-8">
                    Yorumlar Google Business Profile&apos;dan alınmıştır.
                </p>
            </div>
        </section>
    );
}
