// Birincil mevzuat kaynakları (mevzuat.gov.tr). Hizmet sayfaları ve yazılardaki "Kaynaklar" bölümü buradan beslenir.
export const LAWS = {
    TBK: { name: "6098 sayılı Türk Borçlar Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6098&MevzuatTur=1&MevzuatTertip=5" },
    IIK: { name: "2004 sayılı İcra ve İflas Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=2004&MevzuatTur=1&MevzuatTertip=3" },
    HMK: { name: "6100 sayılı Hukuk Muhakemeleri Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6100&MevzuatTur=1&MevzuatTertip=5" },
    HUAK: { name: "6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6325&MevzuatTur=1&MevzuatTertip=5" },
    TMK: { name: "4721 sayılı Türk Medeni Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=4721&MevzuatTur=1&MevzuatTertip=5" },
    AVK: { name: "1136 sayılı Avukatlık Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=1136&MevzuatTur=1&MevzuatTertip=5" },
    GVK: { name: "193 sayılı Gelir Vergisi Kanunu", url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=193&MevzuatTur=1&MevzuatTertip=4" },
} as const;
export type LawKey = keyof typeof LAWS;

/** Metindeki kısaltma -> LAWS anahtarı. */
const ABBR: Record<string, LawKey> = {
    "TBK": "TBK", "İİK": "IIK", "HMK": "HMK", "HUAK": "HUAK", "TMK": "TMK",
    "Avukatlık Kanunu": "AVK", "Av. K.": "AVK", "GVK": "GVK",
};

// "TBK m. 350", "TBK m. 344, 345", "TBK m. 350 ve 351", "TBK m. 299-356", "HUAK m. 18/A-11", "İİK m. 269/a"
const ART = String.raw`\d+(?:\/[0-9A-Za-zçğıöşüÇĞİÖŞÜ]+(?:-[0-9A-Za-zçğıöşü]+)?)*(?:-[0-9A-Za-zçğıöşü]+)?`;
const CITE_RE = new RegExp(String.raw`(TBK|İİK|HMK|HUAK|TMK|Avukatlık Kanunu|Av\. K\.|GVK) m\. (${ART}(?:\s*(?:,|ve)\s*${ART})*)`, "g");

const baseNum = (a: string) => parseInt(a, 10) || 0;

/**
 * Yazı metninde atıf yapılan kanun maddelerini kanun bazında toplar.
 * Yeni hukuki iddia üretmez; yalnızca metinde geçen atıfları listeler.
 */
export function extractLawCitations(markdown: string): { law: LawKey; articles: string }[] {
    const found = new Map<LawKey, Set<string>>();
    for (const m of markdown.matchAll(CITE_RE)) {
        const key = ABBR[m[1]];
        if (!key) continue;
        const set = found.get(key) ?? new Set<string>();
        for (const part of m[2].split(/\s*(?:,|ve)\s*/)) {
            const a = part.trim().replace(/[.,;)]+$/, "");
            if (a) set.add(a);
        }
        found.set(key, set);
    }
    const order: LawKey[] = ["TBK", "IIK", "HMK", "HUAK", "TMK", "AVK", "GVK"];
    return order
        .filter((k) => found.has(k))
        .map((k) => {
            const arts = [...found.get(k)!].sort((x, y) => baseNum(x) - baseNum(y) || x.localeCompare(y, "tr"));
            return { law: k, articles: "m. " + arts.join(", ") };
        });
}

/** "## Kısa Cevap" bölümünün ilk paragrafı, düz metin olarak (schema abstract). */
export function extractShortAnswer(markdown: string): string | undefined {
    const m = markdown.match(/##\s*Kısa Cevap\s*\n+([\s\S]*?)(?:\n\s*\n|$)/);
    if (!m) return undefined;
    return m[1]
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\*\*|__|`/g, "")
        .replace(/\s+/g, " ")
        .trim() || undefined;
}
