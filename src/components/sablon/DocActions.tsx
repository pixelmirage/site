"use client";

import { useState } from "react";
import { Printer, FileText, FileDown, Copy, Check } from "lucide-react";
import { contractPlainText, DOWNLOADS } from "@/lib/kira-sozlesmesi";

const base = "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function DocActions({ variant = "dark" }: { variant?: "dark" | "light" }) {
    const [copied, setCopied] = useState(false);
    const dark = variant === "dark";
    const primary = `${base} bg-secondary text-primary hover:bg-secondary/90 focus-visible:ring-secondary`;
    const ghost = dark
        ? `${base} border border-white/60 text-white hover:bg-white hover:text-primary focus-visible:ring-white focus-visible:ring-offset-primary`
        : `${base} border border-slate-300 bg-white text-primary hover:bg-slate-100 focus-visible:ring-primary`;

    async function copy() {
        try {
            await navigator.clipboard.writeText(contractPlainText());
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-3 print:hidden">
            <a href={DOWNLOADS.docx} download className={primary}>
                <FileText className="h-4 w-4" aria-hidden="true" /> Word (DOCX) İndir
            </a>
            <a href={DOWNLOADS.pdf} download className={dark ? `${base} bg-white text-primary hover:bg-slate-100 focus-visible:ring-white focus-visible:ring-offset-primary` : primary}>
                <FileDown className="h-4 w-4" aria-hidden="true" /> PDF İndir
            </a>
            <button type="button" onClick={() => window.print()} className={ghost}>
                <Printer className="h-4 w-4" aria-hidden="true" /> Yazdır
            </button>
            <button type="button" onClick={copy} className={ghost}>
                {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                {copied ? "Kopyalandı" : "Metni Kopyala"}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? "Sözleşme metni panoya kopyalandı." : ""}</span>
        </div>
    );
}
