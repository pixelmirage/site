import { cn } from "@/lib/utils";

// Neutral author badge used instead of a portrait photo.
export function InitialsBadge({ className }: { className?: string }) {
    return (
        <div
            role="img"
            aria-label="Av. Mert Kağan Çetin"
            className={cn(
                "flex flex-shrink-0 select-none items-center justify-center rounded-full bg-primary font-playfair font-bold tracking-wider text-secondary ring-2 ring-secondary/40 [container-type:inline-size]",
                className
            )}
        >
            <span className="text-[32cqi] leading-none">MKÇ</span>
        </div>
    );
}
