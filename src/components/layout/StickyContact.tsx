"use client";

import { useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { trackContact } from "@/components/analytics/track";

const WA_TEXT = "Merhaba, web sitenizden ulaşıyorum. Hukuki bir konuda ön görüşme yapmak istiyorum.";
export const WHATSAPP_URL = `https://wa.me/905445854645?text=${encodeURIComponent(WA_TEXT)}`;

export function StickyContact() {
    // Sitewide delegate: every tel:/wa.me link click (header, hero, footer, content) fires a GA4-ready event.
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const a = (e.target as HTMLElement | null)?.closest?.("a");
            const href = a?.getAttribute("href") || "";
            if (a?.dataset.tracked) return; // sticky buttons track themselves
            if (href.startsWith("tel:")) trackContact("phone_click", "inline");
            else if (/wa\.me|whatsapp\.com/.test(href)) trackContact("whatsapp_click", "inline");
        };
        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(15,23,42,0.08)] lg:hidden print:hidden pb-[env(safe-area-inset-bottom)]">
            <a
                href="tel:+905445854645"
                data-tracked="1"
                onClick={() => trackContact("phone_click", "sticky_mobile")}
                className="flex h-14 items-center justify-center gap-2 bg-primary text-sm font-bold text-white"
                aria-label="Telefonla arayın: 0544 585 46 45"
            >
                <Phone className="h-5 w-5" /> Telefonla Ara
            </a>
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-tracked="1"
                onClick={() => trackContact("whatsapp_click", "sticky_mobile")}
                className="flex h-14 items-center justify-center gap-2 bg-[#1f8f4e] text-sm font-bold text-white"
                aria-label="WhatsApp ile yazın"
            >
                <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
        </div>
    );
}
