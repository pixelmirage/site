"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Phone, MessageCircle } from "lucide-react";

const wa = (msg: string) => `https://wa.me/905445854645?text=${encodeURIComponent(msg)}`;

const paths = {
    evsahibi: {
        label: "Ev sahibiyim",
        items: [
            { t: "Kiracı çıkmıyor", d: "Süre doldu, ihtiyaç var ya da sözleşme bitti; kiracı taşınmıyor." },
            { t: "Kira ödenmiyor", d: "Kira veya aidat ödenmiyor; alacak ve tahliye yolu konuşulur." },
            { t: "Kira artışı / kira tespit", d: "Kira bedeli emsallerin altında kaldı." },
            { t: "Tahliye taahhüdü var", d: "Kiracı imzaladığı tarihte çıkmadı." },
        ],
    },
    kiraci: {
        label: "Kiracıyım",
        items: [
            { t: "Tahliye ihtarı aldım", d: "Ev sahibinden ihtarname veya çıkma bildirimi geldi." },
            { t: "Fahiş artış isteniyor", d: "Talep edilen artış sözleşmeye veya kanuna uymuyor olabilir." },
            { t: "Depozito iade edilmiyor", d: "Taşındınız, güvence bedeli geri verilmiyor." },
            { t: "Ev satıldı, yeni malik çık diyor", d: "Yeni ev sahibi ihtiyaç nedeniyle tahliye istiyor." },
        ],
    },
} as const;

type Key = keyof typeof paths;

export function SituationPicker() {
    const [side, setSide] = useState<Key>("evsahibi");
    const [open, setOpen] = useState<string | null>(null);
    const uid = useId();
    const keys = Object.keys(paths) as Key[];
    const tabRefs = useRef<Partial<Record<Key, HTMLButtonElement | null>>>({});
    const tabId = (k: Key) => `${uid}-tab-${k}`;
    const panelId = `${uid}-panel`;
    const select = (k: Key) => { setSide(k); setOpen(null); };
    const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
        const i = keys.indexOf(side);
        let next: Key | null = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = keys[(i + 1) % keys.length];
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = keys[(i - 1 + keys.length) % keys.length];
        else if (e.key === "Home") next = keys[0];
        else if (e.key === "End") next = keys[keys.length - 1];
        if (!next) return;
        e.preventDefault();
        select(next);
        tabRefs.current[next]?.focus();
    };
    return (
        <div>
            <div role="tablist" aria-label="Durumunuzu seçin" className="mx-auto grid max-w-md grid-cols-2 rounded-xl bg-slate-100 p-1">
                {keys.map((k) => (
                    <button
                        key={k}
                        ref={(el) => { tabRefs.current[k] = el; }}
                        type="button"
                        role="tab"
                        id={tabId(k)}
                        aria-selected={side === k}
                        aria-controls={panelId}
                        tabIndex={side === k ? 0 : -1}
                        onKeyDown={onTabKey}
                        onClick={() => select(k)}
                        className={`h-12 rounded-lg text-base font-bold transition-colors ${side === k ? "bg-primary text-white shadow" : "text-primary hover:bg-white"}`}
                    >
                        {paths[k].label}
                    </button>
                ))}
            </div>
            <div role="tabpanel" id={panelId} aria-labelledby={tabId(side)} tabIndex={0} className="mt-6">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {paths[side].items.map((it) => {
                    const isOpen = open === it.t;
                    const msg = `Merhaba, ${paths[side].label.toLowerCase()} ve kira konusunda görüşmek istiyorum. Durum: ${it.t}.`;
                    return (
                        <li key={it.t} className={`rounded-xl border bg-white transition-colors ${isOpen ? "border-secondary shadow-md" : "border-slate-200"}`}>
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => setOpen(isOpen ? null : it.t)}
                                className="flex w-full items-start justify-between gap-3 p-4 text-left"
                            >
                                <span>
                                    <span className="block font-bold text-primary">{it.t}</span>
                                    <span className="mt-1 block text-sm text-slate-600">{it.d}</span>
                                </span>
                                <span aria-hidden="true" className="mt-1 text-xl leading-none text-secondary">{isOpen ? "−" : "+"}</span>
                            </button>
                            {isOpen && (
                                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 p-3">
                                    <a href="tel:+905445854645" className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-bold text-white">
                                        <Phone className="h-4 w-4" /> Ara
                                    </a>
                                    <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1c8549] text-sm font-bold text-white">
                                        <MessageCircle className="h-4 w-4" /> WhatsApp
                                    </a>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
            </div>
        </div>
    );
}
