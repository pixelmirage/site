export interface GoogleReview {
    authorName: string;
    rating: number;
    text: string;
    relativeTime: string;
    publishTime: string;
    profileUrl: string;
}

export interface GoogleReviewsData {
    rating: number;
    totalReviews: number;
    reviews: GoogleReview[];
}

export async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        console.warn("Google Places API key or Place ID not configured");
        return null;
    }

    try {
        const res = await fetch(
            `https://places.googleapis.com/v1/places/${placeId}?languageCode=tr`,
            {
                headers: {
                    "X-Goog-Api-Key": apiKey,
                    "X-Goog-FieldMask": "rating,userRatingCount,reviews",
                    "Accept-Language": "tr",
                },
                next: { revalidate: 864000 }, // 10 gün cache
            }
        );

        if (!res.ok) {
            console.error("Google Places API error:", res.status);
            return null;
        }

        const data = await res.json();

        const reviews: GoogleReview[] = (data.reviews || []).map(
            (r: Record<string, unknown>) => ({
                authorName: (r.authorAttribution as Record<string, unknown>)?.displayName || "Anonim",
                rating: r.rating as number,
                text: ((r.text as Record<string, unknown>)?.text as string) || "",
                relativeTime: (r.relativePublishTimeDescription as string) || "",
                publishTime: (r.publishTime as string) || "",
                profileUrl: (r.authorAttribution as Record<string, unknown>)?.uri || "",
            })
        );

        return {
            rating: data.rating || 5,
            totalReviews: data.userRatingCount || reviews.length,
            reviews,
        };
    } catch (error) {
        console.error("Failed to fetch Google reviews:", error);
        return null;
    }
}
