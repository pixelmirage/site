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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
