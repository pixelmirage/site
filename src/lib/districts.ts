export interface DistrictData {
    name: string;
    slug: string;
    description: string;
    features: string[];
}

export const districtData: DistrictData[] = [
    {
        name: "Bayraklı",
        slug: "bayrakli",
        description: "İzmir'in yeni kent merkezi olan Bayraklı, gökdelenler bölgesi ve İzmir Adliyesi'ne ev sahipliği yapmasıyla hukuki ve ticari trafiğin en yoğun olduğu ilçedir.",
        features: ["İzmir Adliyesi'ne Yakın", "Yeni Kent Merkezi", "Ticari Uyuşmazlıklar"]
    },
    {
        name: "Karşıyaka",
        slug: "karsiyaka",
        description: "Bostanlı ve Mavişehir gibi seçkin semtleri barındıran Karşıyaka, yüksek değerli konut projeleri ve kurumsal kiracılı işyerleri ile kira hukuku davalarının yoğun görüldüğü bir bölgedir.",
        features: ["Lüks Konut Tahliyeleri", "Kurumsal Kiracı Sorunları", "Sahil Bölgesi Emlak"]
    },
    {
        name: "Bornova",
        slug: "bornova",
        description: "Ege Üniversitesi ve Yaşar Üniversitesi'nin etkisiyle öğrenci nüfusunun yoğun olduğu Bornova'da, öğrenci evleri ve apart dairelerden kaynaklı kira uyuşmazlıkları sıkça yaşanmaktadır.",
        features: ["Öğrenci Evi Tahliyeleri", "Apart Yönetimi", "Üniversite Çevresi"]
    },
    {
        name: "Konak",
        slug: "konak",
        description: "İzmir'in tarihi ve idari merkezi Konak, özellikle Kemeraltı, Alsancak ve Güzelyalı hattında hem eski yapı stoğu hem de yoğun ticari işletmeleriyle hukuksal desteğe ihtiyaç duyar.",
        features: ["Tarihi Yapı Kiraları", "İşyeri Tahliye Davaları", "Merkezi Lokasyon"]
    },
    {
        name: "Buca",
        slug: "buca",
        description: "İzmir'in en kalabalık ilçesi ve Dokuz Eylül Üniversitesi'nin merkezi olan Buca, yoğun kiralık konut piyasasıyla en çok tahliye davası açılan bölgelerin başında gelir.",
        features: ["Yoğun Konut Dokusu", "Öğrenci Kiralama", "Memur/Çalışan Kesim"]
    },
    {
        name: "Çiğli",
        slug: "cigli",
        description: "Atatürk Organize Sanayi Bölgesi ve Katip Çelebi Üniversitesi ile gelişen Çiğli, hem sanayi sitesi işyeri kiraları hem de yeni konut projeleriyle dinamik bir hukuksal yapıya sahiptir.",
        features: ["Sanayi Sitesi Kiraları", "Yeni Konut Projeleri", "Depo ve Antrepo"]
    },
    {
        name: "Gaziemir",
        slug: "gaziemir",
        description: "Adnan Menderes Havalimanı ve Ege Serbest Bölge'ye (ESBAŞ) ev sahipliği yapan Gaziemir, beyaz yakalı çalışanların tercih ettiği, kira bedellerinin yüksek olduğu bir ilçedir.",
        features: ["Serbest Bölge Çalışanları", "Havalimanı Çevresi", "Site İçi Konutlar"]
    },
    {
        name: "Balçova",
        slug: "balcova",
        description: "AVM'leri, İzmir Ekonomi Üniversitesi ve termal tesisleri ile Balçova, ticari potansiyeli yüksek ve kira bedellerinin İzmir ortalamasının üzerinde olduğu bir bölgedir.",
        features: ["AVM ve Mağaza Kiraları", "Termal Tesis Bölgesi", "Üniversite Çevresi"]
    },
    {
        name: "Narlıdere",
        slug: "narlidere",
        description: "Lüks konut projeleri, Sahilevleri ve sakin yapısıyla bilinen Narlıdere, yüksek kira getirili mülklerin ve villa tipi yapılaşmanın yoğun olduğu, nitelikli hukuki süreç gerektiren bir ilçedir.",
        features: ["Lüks Site Yönetimi", "Villa Kiralamaları", "Yüksek Gelir Grubu"]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar",
        description: "İzmir'in en büyük yüzölçümüne sahip ilçelerinden Karabağlar, mobilya sanayisi ve yoğun konut dokusuyla karmaşık mülkiyet ve kira sorunlarının yaşandığı bir bölgedir.",
        features: ["Mobilya Sanayi", "Kentsel Dönüşüm", "Yoğun Nüfus"]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce",
        description: "Özel kolejler ve müstakil yaşamın merkezi Güzelbahçe, yaz-kış tercih edilen sayfiye havasıyla kira sözleşmelerinin özel hükümler içermesi gereken butik bir bölgedir.",
        features: ["Kolejler Bölgesi", "Müstakil Yaşam", "Sezonluk/Yıllık Kira"]
    }
];

// Helper to maintain backward compatibility where simple list is needed
export const districts = districtData.map(d => d.name);

export function getSlugFromDistrict(districtName: string) {
    const data = districtData.find(d => d.name === districtName);
    if (data) return data.slug;

    // Fallback for names not in data object
    return districtName
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
    const cleanSlug = slug.replace("-kira-avukati", "");
    const data = districtData.find(d => d.slug === cleanSlug);
    // Return full object if found, otherwise undefined (or we could restructure to return name only if we want pure minimal change capabilities, but full object is better for page)
    return data ? data.name : undefined;
}

export function getDistrictData(slug: string) {
    const cleanSlug = slug.replace("-kira-avukati", "");
    return districtData.find(d => d.slug === cleanSlug);
}
