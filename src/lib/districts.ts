export interface DistrictData {
    name: string;
    slug: string;
    description: string;
    features: string[];
    neighborhoods: string[];
    legalFocus: {
        title: string;
        detail: string;
    };
    neighborSlugs: string[];
    relatedBlogSlugs: { slug: string; title: string }[];
}

export const districtData: DistrictData[] = [
    {
        name: "Bayraklı",
        slug: "bayrakli",
        description: "İzmir'in yeni kent merkezi olan Bayraklı, gökdelenler bölgesi ve İzmir Adliyesi'ne ev sahipliği yapmasıyla hukuki ve ticari trafiğin en yoğun olduğu ilçedir.",
        features: ["İzmir Adliyesi'ne Yakın", "Yeni Kent Merkezi", "Ticari Uyuşmazlıklar"],
        neighborhoods: ["Mansuroğlu", "Manavkuyu", "Osmangazi", "Adalet", "Tepekule", "Soğukkuyu", "Postacılar"],
        legalFocus: {
            title: "Ofis ve Plaza Tahliyeleri",
            detail: "Bayraklı'daki Mistral, Folkart, Ege Perla gibi plaza bölgelerindeki kira sözleşmeleri, Borçlar Kanunu'nun yanı sıra ticari teamülleri de içeren kompleks yapıdadır. Özellikle 'çatılı işyeri' hükümlerine göre uyarlama davaları sıkça görülür."
        },
        neighborSlugs: ["karsiyaka", "bornova", "konak"],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" }
        ]
    },
    {
        name: "Karşıyaka",
        slug: "karsiyaka",
        description: "Bostanlı ve Mavişehir gibi seçkin semtleri barındıran Karşıyaka, yüksek değerli konut projeleri ve kurumsal kiracılı işyerleri ile kira hukuku davalarının yoğun görüldüğü bir bölgedir.",
        features: ["Lüks Konut Tahliyeleri", "Kurumsal Kiracı Sorunları", "Sahil Bölgesi Emlak"],
        neighborhoods: ["Bostanlı", "Mavişehir", "Aksoy", "Bahçelievler", "Atakent", "Şemikler", "Yalı", "Donanmacı"],
        legalFocus: {
            title: "Yüksek Kira Bedelli Konut Tahliyeleri",
            detail: "Karşıyaka'nın sahil şeridindeki (Yalı, Bostanlı) taşınmazlarda, 10 yıllık uzama süresi dolan eski kiracıların tahliyesi ve 'ihtiyaç nedeniyle tahliye' davaları bölgenin en sık karşılaşılan hukuki problemleridir."
        },
        neighborSlugs: ["bayrakli", "cigli", "bornova"],
        relatedBlogSlugs: [
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" }
        ]
    },
    {
        name: "Bornova",
        slug: "bornova",
        description: "Ege Üniversitesi ve Yaşar Üniversitesi'nin etkisiyle öğrenci nüfusunun yoğun olduğu Bornova'da, öğrenci evleri ve apart dairelerden kaynaklı kira uyuşmazlıkları sıkça yaşanmaktadır.",
        features: ["Öğrenci Evi Tahliyeleri", "Apart Yönetimi", "Üniversite Çevresi"],
        neighborhoods: ["Küçükpark", "Özkanlar", "Evka 3", "Atatürk Mahallesi", "Kazımdirik", "Ergene", "Yeşilova"],
        legalFocus: {
            title: "Öğrenci ve Apart Kira Uyuşmazlıkları",
            detail: "Bornova'da sirkülasyonun hızlı olduğu öğrenci evlerinde; 'depozito iadesi', 'erken tahliye' ve 'eşyalı konut hasar bedelleri' konularında yoğun ihtilaflar yaşanmakta ve Sulh Hukuk Mahkemeleri bu davalarla meşgul olmaktadır."
        },
        neighborSlugs: ["karsiyaka", "bayrakli", "buca"],
        relatedBlogSlugs: [
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", title: "İki Haklı İhtar ile Kiracı Tahliyesi" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" }
        ]
    },
    {
        name: "Konak",
        slug: "konak",
        description: "İzmir'in tarihi ve idari merkezi Konak, özellikle Kemeraltı, Alsancak ve Güzelyalı hattında hem eski yapı stoğu hem de yoğun ticari işletmeleriyle hukuksal desteğe ihtiyaç duyar.",
        features: ["Tarihi Yapı Kiraları", "İşyeri Tahliye Davaları", "Merkezi Lokasyon"],
        neighborhoods: ["Alsancak", "Güzelyalı", "Hatay", "Basmane", "Kemeraltı", "Gültepe", "Eşrefpaşa"],
        legalFocus: {
            title: "Tarihi ve Ticari Mülklerin Hukuki Durumu",
            detail: "Alsancak ve Kemeraltı gibi bölgelerde, eski eser statüsündeki binaların restorasyon süreçleri ve 'eski kiracı' statüsündeki işletmelerin kira tespit davaları, Konak bölgesinin spesifik uzmanlık gerektiren alanlarıdır."
        },
        neighborSlugs: ["bayrakli", "buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Buca",
        slug: "buca",
        description: "İzmir'in en kalabalık ilçesi ve Dokuz Eylül Üniversitesi'nin merkezi olan Buca, yoğun kiralık konut piyasasıyla en çok tahliye davası açılan bölgelerin başında gelir.",
        features: ["Yoğun Konut Dokusu", "Öğrenci Kiralama", "Memur/Çalışan Kesim"],
        neighborhoods: ["Şirinyer", "Hasanağa", "Kozağaç", "Yıldız", "Adatepe", "Evka 1", "Tınaztepe"],
        legalFocus: {
            title: "Kalabalık Konut Dokusunda Tahliye",
            detail: "Buca'da kiracı sirkülasyonunun çok hızlı olması sebebiyle, 'tahliye taahhütnamesine dayalı icra takipleri' en verimli sonuç alınan yöntemdir. Şirinyer ve Hasanağa bölgelerinde kira tespit davaları da yoğunlaşmıştır."
        },
        neighborSlugs: ["konak", "bornova", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", title: "İki Haklı İhtar ile Kiracı Tahliyesi" },
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" }
        ]
    },
    {
        name: "Çiğli",
        slug: "cigli",
        description: "Atatürk Organize Sanayi Bölgesi ve Katip Çelebi Üniversitesi ile gelişen Çiğli, hem sanayi sitesi işyeri kiraları hem de yeni konut projeleriyle dinamik bir hukuksal yapıya sahiptir.",
        features: ["Sanayi Sitesi Kiraları", "Yeni Konut Projeleri", "Depo ve Antrepo"],
        neighborhoods: ["Ataşehir", "Balatçık", "Egekent", "İzkent", "Evka 2", "Küçük Çiğli"],
        legalFocus: {
            title: "Sanayi ve Depo Kira Sözleşmeleri",
            detail: "Çiğli AOSB bölgesindeki fabrika ve depo kiralamalarında, üretim kaybı tazminatları ve ağır tahliye şartları sözleşmelere eklenmektedir. Bu tip ticari sözleşmelerin hazırlanması özel uzmanlık gerektirir."
        },
        neighborSlugs: ["karsiyaka", "bornova"],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Gaziemir",
        slug: "gaziemir",
        description: "Adnan Menderes Havalimanı ve Ege Serbest Bölge'ye (ESBAŞ) ev sahipliği yapan Gaziemir, beyaz yakalı çalışanların tercih ettiği, kira bedellerinin yüksek olduğu bir ilçedir.",
        features: ["Serbest Bölge Çalışanları", "Havalimanı Çevresi", "Site İçi Konutlar"],
        neighborhoods: ["Sarnıç", "Binbaşı Reşatbey", "Irmak", "Atıfbey", "Yeşil Mahallesi", "Aktepe"],
        legalFocus: {
            title: "Beyaz Yakalı Kiracı Profili ve Site Yönetimi",
            detail: "Gaziemir'deki lüks sitelerde (Optimum çevresi vb.), aidat borçları ve yönetim planına aykırılık nedeniyle tahliye davaları, kira alacağı davaları kadar sık görülmektedir."
        },
        neighborSlugs: ["buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" }
        ]
    },
    {
        name: "Balçova",
        slug: "balcova",
        description: "AVM'leri, İzmir Ekonomi Üniversitesi ve termal tesisleri ile Balçova, ticari potansiyeli yüksek ve kira bedellerinin İzmir ortalamasının üzerinde olduğu bir bölgedir.",
        features: ["AVM ve Mağaza Kiraları", "Termal Tesis Bölgesi", "Üniversite Çevresi"],
        neighborhoods: ["İnciraltı", "Korutürk", "Onur", "Fevzi Çakmak", "Eğitim", "Çetin Emeç"],
        legalFocus: {
            title: "Ticari Potansiyeli Yüksek Mülkler",
            detail: "Balçova'da AVM ve cadde mağazacılığının yoğun olması, 'uyarlama davaları' ve 'ciro endeksli kira' sözleşmelerini gündeme getirmektedir. Konutlarda ise Ekonomi Üniversitesi öğrencileri piyasayı belirler."
        },
        neighborSlugs: ["konak", "narlidere", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Narlıdere",
        slug: "narlidere",
        description: "Lüks konut projeleri, Sahilevleri ve sakin yapısıyla bilinen Narlıdere, yüksek kira getirili mülklerin ve villa tipi yapılaşmanın yoğun olduğu, nitelikli hukuki süreç gerektiren bir ilçedir.",
        features: ["Lüks Site Yönetimi", "Villa Kiralamaları", "Yüksek Gelir Grubu"],
        neighborhoods: ["Sahilevleri", "Altıevler", "Huzur", "Ilıca", "Yenikale", "Narlı"],
        legalFocus: {
            title: "Lüks Konut ve Villa Kiralama Hukuku",
            detail: "Narlıdere Sahilevleri bölgesindeki villa kiralamalarında, demirbaş eşyaların (havuz, jeneratör vb.) bakımı ve hasar durumları, tahliye davalarından daha çok 'tazminat' davalarına konu olmaktadır."
        },
        neighborSlugs: ["balcova", "guzelbahce"],
        relatedBlogSlugs: [
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" },
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" }
        ]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar",
        description: "İzmir'in en büyük yüzölçümüne sahip ilçelerinden Karabağlar, mobilya sanayisi ve yoğun konut dokusuyla karmaşık mülkiyet ve kira sorunlarının yaşandığı bir bölgedir.",
        features: ["Mobilya Sanayi", "Kentsel Dönüşüm", "Yoğun Nüfus"],
        neighborhoods: ["Yeşilyurt", "Bozyaka", "Üçkuyular", "Poligon", "Basın Sitesi", "Limonter", "Bahçelievler"],
        legalFocus: {
            title: "Kentsel Dönüşüm ve Tahliye",
            detail: "Karabağlar'da kentsel dönüşüm kapsamına giren binalarda kiracı tahliyesi ('6306 sayılı kanun') en sık karşılaşılan süreçtir. Mobilyacılar sitesindeki esnaf tahliyeleri de ticari davaların çoğunluğunu oluşturur."
        },
        neighborSlugs: ["konak", "buca", "gaziemir", "balcova"],
        relatedBlogSlugs: [
            { slug: "kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", title: "İki Haklı İhtar ile Kiracı Tahliyesi" },
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce",
        description: "Özel kolejler ve müstakil yaşamın merkezi Güzelbahçe, yaz-kış tercih edilen sayfiye havasıyla kira sözleşmelerinin özel hükümler içermesi gereken butik bir bölgedir.",
        features: ["Kolejler Bölgesi", "Müstakil Yaşam", "Sezonluk/Yıllık Kira"],
        neighborhoods: ["Yalı", "Siteler", "Maltepe", "Yelki", "Kahramandere", "Çelebi"],
        legalFocus: {
            title: "Sezonluk ve Müstakil Konut Kiraları",
            detail: "Güzelbahçe'de 'sezonluk kiralama' ile 'yıllık kiralama' ayrımının sözleşmelerde net yapılmaması hukuki sorun doğurur. Ayrıca Yelki bölgesindeki yeni villa projelerinde aidat ve yönetim sorunları sıkça dava konusu olur."
        },
        neighborSlugs: ["narlidere", "balcova"],
        relatedBlogSlugs: [
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" }
        ]
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

// --- Multi-Service Support ---

export type ServiceType = "kira" | "is" | "bosanma" | "tazminat";

const serviceSuffixes: Record<ServiceType, string> = {
    kira: "-kira-avukati",
    is: "-is-avukati",
    bosanma: "-bosanma-avukati",
    tazminat: "-tazminat-avukati",
};

export const serviceConfig: Record<ServiceType, {
    label: string;
    parentTitle: string;
    parentUrl: string;
    sectionTitle: string;
    ctaTitle: string;
    ctaDesc: string;
}> = {
    kira: {
        label: "Kira Avukatı",
        parentTitle: "İzmir Kira Avukatı",
        parentUrl: "/izmir-kira-avukati",
        sectionTitle: "Kiracı Tahliye Davaları",
        ctaTitle: "Kira Avukatı ile Görüşün",
        ctaDesc: "Kira hukuku davalarınız için ücretsiz ön görüşme randevusu alın.",
    },
    is: {
        label: "İş Avukatı",
        parentTitle: "İzmir İş Avukatı",
        parentUrl: "/izmir-is-avukati",
        sectionTitle: "İşe İade ve Tazminat Davaları",
        ctaTitle: "İş Avukatı ile Görüşün",
        ctaDesc: "İş hukuku davalarınız için ücretsiz ön görüşme randevusu alın.",
    },
    bosanma: {
        label: "Boşanma Avukatı",
        parentTitle: "İzmir Boşanma Avukatı",
        parentUrl: "/izmir-bosanma-avukati",
        sectionTitle: "Boşanma ve Velayet Davaları",
        ctaTitle: "Boşanma Avukatı ile Görüşün",
        ctaDesc: "Boşanma davalarınız için ücretsiz ön görüşme randevusu alın.",
    },
    tazminat: {
        label: "Tazminat Avukatı",
        parentTitle: "İzmir Tazminat Avukatı",
        parentUrl: "/izmir-tazminat-avukati",
        sectionTitle: "Tazminat Davası Süreci",
        ctaTitle: "Tazminat Avukatı ile Görüşün",
        ctaDesc: "Tazminat davalarınız için ücretsiz ön görüşme randevusu alın.",
    },
};

export function parseServiceSlug(slug: string): { districtSlug: string; serviceType: ServiceType } | null {
    for (const [service, suffix] of Object.entries(serviceSuffixes) as [ServiceType, string][]) {
        if (slug.endsWith(suffix)) {
            const districtSlug = slug.replace(suffix, "");
            if (districtSlug) {
                return { districtSlug, serviceType: service };
            }
        }
    }
    return null;
}

export function getServiceDistrictData(slug: string): { data: DistrictData; serviceType: ServiceType } | null {
    const parsed = parseServiceSlug(slug);
    if (!parsed) return null;

    const { districtSlug, serviceType } = parsed;

    let dataArray: DistrictData[];
    if (serviceType === "kira") {
        dataArray = districtData;
    } else {
        // Lazy import to avoid circular deps — data loaded at build time
        if (serviceType === "is") {
            const { isDistrictData } = require("./districts-is");
            dataArray = isDistrictData;
        } else if (serviceType === "bosanma") {
            const { bosanmaDistrictData } = require("./districts-bosanma");
            dataArray = bosanmaDistrictData;
        } else {
            const { tazminatDistrictData } = require("./districts-tazminat");
            dataArray = tazminatDistrictData;
        }
    }

    const data = dataArray.find(d => d.slug === districtSlug);
    if (!data) return null;

    return { data, serviceType };
}

export function getAllServiceSlugs(): string[] {
    const { isDistrictData } = require("./districts-is");
    const { bosanmaDistrictData } = require("./districts-bosanma");
    const { tazminatDistrictData } = require("./districts-tazminat");

    const slugs: string[] = [];

    for (const d of districtData) {
        slugs.push(`${d.slug}-kira-avukati`);
    }
    for (const d of isDistrictData as DistrictData[]) {
        slugs.push(`${d.slug}-is-avukati`);
    }
    for (const d of bosanmaDistrictData as DistrictData[]) {
        slugs.push(`${d.slug}-bosanma-avukati`);
    }
    for (const d of tazminatDistrictData as DistrictData[]) {
        slugs.push(`${d.slug}-tazminat-avukati`);
    }

    return slugs;
}
