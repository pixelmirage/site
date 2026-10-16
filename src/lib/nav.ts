// Shared navigation data — kira hukuku is the primary practice area.
export type NavLink = { name: string; href: string; desc?: string };

export const kiraHub: NavLink = { name: "İzmir Kira Avukatı", href: "/izmir-kira-avukati/", desc: "Kira hukuku hizmetlerinin tamamı" };

export const kiraLinks: NavLink[] = [
    { name: "Kiracı Tahliye Davası", href: "/izmir-kira-avukati/kiraci-tahliye-davasi/", desc: "Tahliye sebepleri ve dava süreci" },
    { name: "Kira Tespit Davası", href: "/izmir-kira-avukati/kira-tespit-davasi/", desc: "Kira bedelinin belirlenmesi (TBK m. 344)" },
    { name: "Kira Uyarlama Davası", href: "/izmir-kira-avukati/kira-uyarlama-davasi/", desc: "Olağanüstü değişiklikte uyarlama (TBK m. 138)" },
    { name: "Kira Borcu İcra Takibi", href: "/izmir-kira-avukati/kira-borcu-icra/", desc: "Ödenmeyen kira ve icra yoluyla tahliye" },
    { name: "İhtiyaç Nedeniyle Tahliye", href: "/izmir-kira-avukati/ihtiyac-nedeniyle-tahliye/", desc: "Konut veya işyeri gereksinimi (TBK m. 350)" },
    { name: "10 Yıllık Kiracı Tahliyesi", href: "/izmir-kira-avukati/on-yillik-kiraci-tahliye/", desc: "Uzama süresi sonunda fesih (TBK m. 347)" },
    { name: "Ev Sahibi Hakları", href: "/izmir-kira-avukati/ev-sahibi-haklari-izmir/", desc: "Kiraya verenin hak ve yükümlülükleri" },
    { name: "Kiracı Hakları", href: "/izmir-kira-avukati/kiraci-haklari-izmir/", desc: "Kiracının korunması ve depozito" },
    { name: "Kira Sözleşmesi Rehberi", href: "/izmir-kira-avukati/kira-sozlesmesi-rehberi/", desc: "Sözleşmede dikkat edilecek hususlar" },
    { name: "Kira Avukatı Ücreti", href: "/izmir-kira-avukati/izmir-kira-avukati-ucret/", desc: "Ücretin belirlenme esasları" },
];

export const kiraTools: NavLink[] = [
    { name: "Kira Artış Hesaplama", href: "/kira-artis-orani-hesaplama/", desc: "TÜFE bazlı kira artış oranı" },
    { name: "Kira Sözleşmesi Örneği", href: "/kira-sozlesmesi-ornegi/", desc: "Yazdırılabilir sözleşme şablonu" },
    { name: "Tahliye Taahhütnamesi", href: "/tahliye-taahhutnamesi/", desc: "Örnek metin ve geçerlilik şartları" },
];

export const otherAreas: NavLink[] = [
    { name: "İzmir İş Avukatı", href: "/izmir-is-avukati/", desc: "İşe iade, kıdem ve ihbar tazminatı" },
    { name: "İzmir Boşanma Avukatı", href: "/izmir-bosanma-avukati/", desc: "Anlaşmalı ve çekişmeli boşanma, velayet" },
    { name: "İzmir Tazminat Avukatı", href: "/izmir-tazminat-avukati/", desc: "Trafik kazası, malpraktis, destekten yoksun kalma" },
    { name: "Kıdem Tazminatı Hesaplama", href: "/kidem-tazminati-hesaplama/", desc: "Kıdem tazminatı hesaplayıcı" },
    { name: "Tüm Hizmetler", href: "/hizmetler/", desc: "Çalışma alanlarının tamamı" },
];
