import { Phone } from "lucide-react";

export function SectionCTA({ text = "Bu konuda hukuki desteğe mi ihtiyacınız var?" }: { text?: string }) {
    return (
        <div className="not-prose my-6 md:my-8 p-4 bg-slate-50 border-l-4 border-secondary rounded-r-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm text-slate-700 font-medium">{text}</p>
            <a
                href="tel:+905445854645"
                className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary/80 transition-colors whitespace-nowrap"
            >
                <Phone className="w-4 h-4" />
                0544 585 46 45
            </a>
        </div>
    );
}
