// Kira Hukuku İçtihatları hub — karar notları (Yargıtay / BAM) yazı verisinden otomatik üretilir.
// Karar notları src/content/ictihat/<slug>.mdx dosyalarıdır ve /kira-hukuku-ictihatlari/<slug>/ adresinde yayımlanır.
// Hub'da listelenmek için: frontmatter `ictihat: true` VEYA tags içinde "emsal karar".
// Konu: frontmatter `ictihatKonu` (aşağıdaki anahtarlardan biri); yoksa etiketlerden tahmin edilir.
// Mahkeme / E. / K. / karar tarihi: yazıdaki "> - **Mahkeme:** ..." künye satırından okunur.
import { getListedPosts, type PostData } from "@/lib/blog/utils";

export const ICTIHAT_PATH = "/kira-hukuku-ictihatlari/";

export type IctihatKonu =
    | "tahliye"
    | "kira-tespit"
    | "kira-uyarlama"
    | "kira-alacagi-icra"
    | "tahliye-taahhudu"
    | "kira-sozlesmesi"
    | "arabuluculuk";

export const ictihatTopics: { key: IctihatKonu; title: string; desc: string; serviceSlug: string; serviceName: string }[] = [
    { key: "tahliye", title: "Tahliye davası kararları", desc: "Kiraya verenin veya yeni malikin ihtiyacı, iki haklı ihtar, kiracının aynı ilçedeki konutu ve 10 yıllık uzama süresine dayalı tahliye davalarına ilişkin kararlar.", serviceSlug: "izmir-kiraci-tahliye-davasi-avukati", serviceName: "İzmir kiracı tahliye davası" },
    { key: "kira-tespit", title: "Kira tespit davası kararları", desc: "Emsal kira, bilirkişi raporu, hakkaniyet indirimi, 5 yıllık süre ve yargılama giderlerine ilişkin kararlar.", serviceSlug: "izmir-kira-tespit-davasi-avukati", serviceName: "İzmir kira tespit davası" },
    { key: "kira-uyarlama", title: "Kira uyarlama davası kararları", desc: "Olağanüstü değişiklikler nedeniyle kira bedelinin uyarlanmasına ilişkin kararlar.", serviceSlug: "izmir-kira-uyarlama-davasi-avukati", serviceName: "İzmir kira uyarlama davası" },
    { key: "kira-alacagi-icra", title: "Kira alacağı ve icra takibi kararları", desc: "Kira bedeli ve yan giderler için icra takibi, ödeme emrine itiraz ve temerrüt nedeniyle tahliyeye ilişkin kararlar.", serviceSlug: "izmir-kira-alacagi-icra-takibi-avukati", serviceName: "İzmir kira alacağı ve icra takibi" },
    { key: "tahliye-taahhudu", title: "Tahliye taahhüdü kararları", desc: "Yazılı tahliye taahhüdünün geçerliliği, ispatı ve taahhüde dayalı icra takibine ilişkin kararlar.", serviceSlug: "izmir-tahliye-taahhudu-icra-avukati", serviceName: "İzmir tahliye taahhüdü ve icra" },
    { key: "kira-sozlesmesi", title: "Kira sözleşmesi, depozito ve aidat kararları", desc: "Kira sözleşmesinin yorumu, tadil, KDV ve stopaj, depozito ve aidat gibi yan giderlere ilişkin kararlar.", serviceSlug: "izmir-kira-sozlesmesi-avukati", serviceName: "İzmir kira sözleşmesi" },
    { key: "arabuluculuk", title: "Kira arabuluculuğu kararları", desc: "Kira uyuşmazlıklarında zorunlu arabuluculuk, başvuru zamanı ve dava şartına ilişkin kararlar.", serviceSlug: "izmir-kira-arabuluculuk-avukati", serviceName: "İzmir kira arabuluculuğu" },
];

export type Decision = {
    court?: string; // "İstanbul BAM 49. Hukuk Dairesi" / "Yargıtay 3. Hukuk Dairesi"
    courtType?: "Yargıtay" | "BAM";
    esas?: string;
    karar?: string;
    tarih?: string; // dd.mm.yyyy
};

export type IctihatPost = PostData & { konu: IctihatKonu; decision: Decision };

export function isIctihatPost(p: PostData): boolean {
    return p.ictihat === true || (p.tags || []).some((t) => t.toLocaleLowerCase("tr") === "emsal karar");
}

function guessKonu(p: PostData): IctihatKonu {
    if (p.ictihatKonu && ictihatTopics.some((t) => t.key === p.ictihatKonu)) return p.ictihatKonu as IctihatKonu;
    const tags = (p.tags || []).map((t) => t.toLocaleLowerCase("tr")).join("|");
    if (/tahliye taahh/.test(tags)) return "tahliye-taahhudu";
    if (/kira tespit/.test(tags)) return "kira-tespit";
    if (/uyarlama/.test(tags)) return "kira-uyarlama";
    if (/arabulucu/.test(tags)) return "arabuluculuk";
    if (/örnek 13|kira alacağı|icra takibi|temerrüt/.test(tags)) return "kira-alacagi-icra";
    if (/tahliye|ihtiyaç|iki haklı ihtar|10 yıllık/.test(tags)) return "tahliye";
    return "kira-sozlesmesi";
}

export function parseDecision(p: PostData): Decision {
    const m = p.content.match(/\*\*Mahkeme:\*\*\s*([^,\n]+?),\s*E\.\s*([0-9]+\/[0-9]+),\s*K\.\s*([0-9]+\/[0-9]+)(?:,\s*karar tarihi\s*([0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}))?/);
    let d: Decision = {};
    if (m) d = { court: m[1].trim(), esas: m[2], karar: m[3], tarih: m[4] };
    else {
        const x = p.excerpt?.match(/((?:Yargıtay|[A-ZÇİÖŞÜ][a-zçğıöşü]+ BAM) \d+\. HD) (\d{4}\/\d+) E\.(?: (\d{4}\/\d+) K\.)?/);
        if (x) d = { court: x[1].replace(/ HD$/, " Hukuk Dairesi"), esas: x[2], karar: x[3] };
    }
    if (d.court) d.courtType = /yargıtay/i.test(d.court) ? "Yargıtay" : "BAM";
    return d;
}

export function getIctihatPosts(): IctihatPost[] {
    return getListedPosts("ictihat")
        .filter(isIctihatPost)
        .map((p) => ({ ...p, konu: guessKonu(p), decision: parseDecision(p) }));
}

export function getIctihatByTopic() {
    const all = getIctihatPosts();
    return ictihatTopics.map((t) => ({ ...t, posts: all.filter((p) => p.konu === t.key) }));
}

export function ictihatTopicForService(serviceSlug: string) {
    return getIctihatByTopic().find((t) => t.serviceSlug === serviceSlug);
}
