import data from "@/content/sablon/kira-sozlesmesi.json";

export type Field = {
    key: string;
    label: string;
    kind?: string;
    lines?: number;
    options?: string[];
    prefix?: string;
    suffix?: string;
    note?: string;
};

export const KIRA_SOZLESMESI = data as typeof data & {
    header: Field[];
    blocks: { title: string; fields: Field[] }[];
    annex: typeof data.annex & { fields: Field[] };
};

export type Values = Record<string, string>;
export const EXAMPLE_VALUES: Values = data.example;

export const DOWNLOADS = {
    docx: "/indir/kira-sozlesmesi-ornegi-2026.docx",
    pdf: "/indir/kira-sozlesmesi-ornegi-2026.pdf",
    filledDocx: "/indir/kira-sozlesmesi-doldurulmus-ornek-2026.docx",
    filledPdf: "/indir/kira-sozlesmesi-doldurulmus-ornek-2026.pdf",
};

const BLANK = "....................................";
const DATE_BLANK = "..... / ..... / 20.....";

function fieldText(f: Field, v?: string): string {
    if (f.options) {
        return f.options.map((o) => `[${v === o ? "X" : " "}] ${o}`).join("   ");
    }
    const val = v || (f.kind === "date" ? DATE_BLANK : BLANK);
    return [f.prefix, val, f.suffix].filter(Boolean).join(" ");
}

/** Sözleşmenin düz metin hâli (Metni Kopyala düğmesi için). */
export function contractPlainText(values: Values = {}): string {
    const d = KIRA_SOZLESMESI;
    const out: string[] = [d.title, d.subtitle, ""];
    for (const f of d.header) out.push(`${f.label}: ${fieldText(f, values[f.key])}`);
    out.push("", d.parties.title);
    for (const c of d.parties.columns) {
        out.push("", c.label);
        for (const r of d.parties.rows) out.push(`${r.label}: ${values[`${c.key}.${r.key}`] || BLANK}`);
    }
    for (const b of d.blocks) {
        out.push("", b.title);
        for (const f of b.fields) out.push(`${f.label}: ${fieldText(f, values[f.key])}${f.note ? ` (${f.note})` : ""}`);
    }
    out.push("", d.articlesTitle);
    d.articles.forEach((a, i) => {
        out.push("", `MADDE ${i + 1} – ${a.title.toLocaleUpperCase("tr-TR")}`);
        for (const p of a.text) out.push(p);
    });
    out.push("", d.special.title, values[d.special.key] || Array(d.special.lines).fill(BLANK + BLANK).join("\n"));
    out.push("", d.closing, "", d.signatures.title);
    for (const c of d.signatures.columns) {
        out.push("", c.label);
        for (const r of d.signatures.rows) out.push(`${r}: ${r === "Ad Soyad" ? values[`${c.key}.ad`] || BLANK : BLANK}`);
    }
    out.push("", d.annex.title, d.annex.intro);
    for (const f of d.annex.fields) out.push(`${f.label}: ${fieldText(f, values[f.key])}`);
    out.push("", `${d.annex.tableTitle}: ${d.annex.tableHead.join(" | ")}`);
    for (let i = 0; i < d.annex.tableRows; i++) out.push(`${i + 1}. ${BLANK}`);
    out.push("", d.annex.signNote, "Kiraya veren (imza): " + BLANK + "   Kiracı (imza): " + BLANK, "", d.footer);
    return out.join("\n");
}
