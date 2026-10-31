// Shared navigation data — the site is dedicated to kira hukuku (İzmir).
import { services, serviceHref } from "@/lib/services";

export type NavLink = { name: string; href: string; desc?: string };

export const kiraHub: NavLink = { name: "İzmir Kira Avukatı", href: "/", desc: "Kira hukuku hizmetlerinin tamamı" };

export const kiraLinks: NavLink[] = services.map((s) => ({ name: s.name, href: serviceHref(s), desc: s.navDesc }));

export const ictihatLink: NavLink = { name: "Kira Hukuku İçtihatları", href: "/kira-hukuku-ictihatlari/", desc: "Yargıtay ve BAM karar notları" };

export const kiraTools: NavLink[] = [
    { name: "Kira Artış Hesaplama", href: "/kira-artis-orani-hesaplama/", desc: "TÜFE bazlı kira artış oranı" },
    { name: "Kira Sözleşmesi Örneği", href: "/kira-sozlesmesi-ornegi/", desc: "Yazdırılabilir sözleşme şablonu" },
    { name: "Tahliye Taahhütnamesi", href: "/tahliye-taahhutnamesi/", desc: "Örnek metin ve geçerlilik şartları" },
    { name: "Kira Hukuku Sözlüğü", href: "/sozluk/", desc: "Kira terimlerinin açıklamaları" },
];
