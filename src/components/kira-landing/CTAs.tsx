import { Phone, MessageCircle } from "lucide-react";

export const PHONE = "tel:+905445854645";
export const waLink = (text = "Merhaba, kira konusunda görüşmek istiyorum.") => `https://wa.me/905445854645?text=${encodeURIComponent(text)}`;

const btnPrimary = "inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-6 text-lg font-bold text-primary shadow-lg hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const btnWa = "inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#1c8549] px-6 text-lg font-bold text-white hover:bg-[#1a7a43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function CTAs({ waText }: { waText?: string }) {
    return (
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={PHONE} className={btnPrimary}>
                <Phone className="h-5 w-5" aria-hidden="true" /> Ara: 0544 585 46 45
            </a>
            <a href={waLink(waText)} target="_blank" rel="noopener noreferrer" className={btnWa}>
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp ile Yazın
            </a>
        </div>
    );
}
