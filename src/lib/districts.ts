export const districts = [
    "Bayraklı",
    "Karşıyaka",
    "Bornova",
    "Konak",
    "Buca",
    "Çiğli",
    "Gaziemir",
    "Balçova",
    "Narlıdere",
    "Karabağlar",
    "Güzelbahçe"
];

export function getSlugFromDistrict(district: string) {
    return district
        .toLowerCase()
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/ /g, "-");
}

export function getDistrictFromSlug(slug: string) {
    const districtPart = slug.replace("-kira-avukati", "");
    return districts.find(d => getSlugFromDistrict(d) === districtPart);
}
