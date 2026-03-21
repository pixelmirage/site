import { DistrictData } from "./districts";

export const tazminatDistrictData: DistrictData[] = [
    {
        name: "Bayraklı",
        slug: "bayrakli",
        description: "Bayraklı'da Altınyol kavşağı ve çevre yollarında trafik kazaları sık yaşanır. Plaza bölgesindeki iş kazaları ve trafik kazası tazminat davaları öne çıkar.",
        features: ["Trafik Kazası Tazminatı", "Altınyol Kavşağı", "İş Kazası Davaları"],
        neighborhoods: ["Mansuroğlu", "Manavkuyu", "Osmangazi", "Adalet", "Tepekule", "Soğukkuyu", "Postacılar"],
        legalFocus: {
            title: "Altınyol ve Çevre Yolu Trafik Kazası Tazminatları",
            detail: "Bayraklı'da Altınyol kavşağı ve otoyol bağlantı yollarında meydana gelen trafik kazaları nedeniyle maddi ve manevi tazminat davaları yoğun görülmektedir. 2918 sayılı Karayolları Trafik Kanunu m. 85-90 kapsamında araç işleteni, sürücü ve sigorta şirketine karşı açılan davalar bölgenin en sık karşılaşılan tazminat hukuku meselesidir."
        },
        neighborSlugs: ["karsiyaka", "bornova", "konak"],
        relatedBlogSlugs: [
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Karşıyaka",
        slug: "karsiyaka",
        description: "Karşıyaka sahil yolunda yaya ve bisiklet kazaları ile altyapı eksikliklerinden kaynaklanan düşme ve kayma tazminat davaları öne çıkmaktadır.",
        features: ["Yaya Kazaları", "Altyapı Tazminatı", "Sahil Yolu Kazaları"],
        neighborhoods: ["Bostanlı", "Mavişehir", "Aksoy", "Bahçelievler", "Atakent", "Şemikler", "Yalı", "Donanmacı"],
        legalFocus: {
            title: "Yaya ve Bisiklet Kazalarında Tazminat",
            detail: "Karşıyaka sahil şeridinde yaya-bisiklet çarpışmaları ve kaldırım/yol bozuklukları nedeniyle düşme kazaları sıkça meydana gelmektedir. TBK m. 49-76 kapsamında haksız fiil tazminatı ve belediyenin hizmet kusuru nedeniyle idari yargıda açılacak tam yargı davaları bölgenin kendine özgü tazminat hukuku konusudur."
        },
        neighborSlugs: ["bayrakli", "cigli", "bornova"],
        relatedBlogSlugs: [
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" },
            { slug: "malpraktis-davasi-doktor-hatasi-tazminati", title: "Malpraktis Davası: Doktor Hatası Tazminatı" }
        ]
    },
    {
        name: "Bornova",
        slug: "bornova",
        description: "Ege Üniversitesi Hastanesi'nin bulunduğu Bornova'da tıbbi malpraktis davaları yoğun görülür. Kampüs çevresindeki trafik ve yaya kazaları da öne çıkar.",
        features: ["Tıbbi Malpraktis", "Hastane Hataları", "Kampüs Trafik Kazaları"],
        neighborhoods: ["Küçükpark", "Özkanlar", "Evka 3", "Atatürk Mahallesi", "Kazımdirik", "Ergene", "Yeşilova"],
        legalFocus: {
            title: "Tıbbi Malpraktis ve Hastane Hataları",
            detail: "Ege Üniversitesi Tıp Fakültesi Hastanesi ve çevresindeki özel sağlık kuruluşlarında yaşanan tıbbi hata vakaları nedeniyle malpraktis davaları Bornova'nın en dikkat çeken tazminat hukuku konusudur. Yanlış teşhis, ameliyat komplikasyonları ve tedavi gecikmeleri nedeniyle TBK m. 49 ve devamı kapsamında açılan tazminat davaları uzman bilirkişi raporları gerektirmektedir."
        },
        neighborSlugs: ["karsiyaka", "bayrakli", "buca"],
        relatedBlogSlugs: [
            { slug: "malpraktis-davasi-doktor-hatasi-tazminati", title: "Malpraktis Davası: Doktor Hatası Tazminatı" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" }
        ]
    },
    {
        name: "Konak",
        slug: "konak",
        description: "Konak'ta Alsancak-Basmane hattındaki trafik kazaları, tarihi bina restorasyonlarındaki iş kazaları ve esnaf zararlarına dayalı tazminat davaları öne çıkar.",
        features: ["Merkezi Trafik Kazaları", "Esnaf Zarar Tazminatı", "Tarihi Yapı Kazaları"],
        neighborhoods: ["Alsancak", "Güzelyalı", "Hatay", "Basmane", "Kemeraltı", "Gültepe", "Eşrefpaşa"],
        legalFocus: {
            title: "Kentsel Alandaki Trafik Kazaları ve Üçüncü Kişi Zararları",
            detail: "Konak'ın yoğun trafikli caddelerinde (Şair Eşref Bulvarı, Mürselpaşa Bulvarı) meydana gelen trafik kazalarında sürücü, yaya ve yol kenarındaki esnafın zarar görmesi çoklu tazminat davalarına yol açmaktadır. Sigorta tahkim komisyonuna başvuru ve destekten yoksun kalma tazminatı davaları bölgede sıkça yürütülen hukuki süreçlerdir."
        },
        neighborSlugs: ["bayrakli", "buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Buca",
        slug: "buca",
        description: "İnşaat ve sanayi sitelerinin yoğun olduğu Buca, iş kazası tazminatı davalarının İzmir'de en sık açıldığı ilçelerdendir. Şantiye kazaları öne çıkar.",
        features: ["İnşaat İş Kazaları", "Yüksekten Düşme", "Sanayi Kazaları"],
        neighborhoods: ["Şirinyer", "Hasanağa", "Kozağaç", "Yıldız", "Adatepe", "Evka 1", "Tınaztepe"],
        legalFocus: {
            title: "İnşaat Şantiyelerinde İş Kazası Tazminatı",
            detail: "Buca'daki konut inşaat projelerinde iş güvenliği önlemlerinin yetersizliği nedeniyle yüksekten düşme, iskele çökmesi ve elektrik çarpması gibi ağır iş kazaları meydana gelmektedir. 5510 sayılı SGK Kanunu m. 13 ve 6331 sayılı İSG Kanunu kapsamında işverenin kusur oranına göre maddi ve manevi tazminat davaları açılmaktadır."
        },
        neighborSlugs: ["konak", "bornova", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" }
        ]
    },
    {
        name: "Çiğli",
        slug: "cigli",
        description: "Atatürk OSB'nin bulunduğu Çiğli'de fabrika iş kazaları ve meslek hastalıkları nedeniyle tazminat davaları yoğun görülür. Kimyasal maruziyet öne çıkar.",
        features: ["Fabrika İş Kazaları", "Meslek Hastalıkları", "Kimyasal Maruziyet"],
        neighborhoods: ["Ataşehir", "Balatçık", "Egekent", "İzkent", "Evka 2", "Küçük Çiğli"],
        legalFocus: {
            title: "Meslek Hastalıkları ve Uzun Vadeli Sağlık Zararları",
            detail: "Çiğli AOSB'deki fabrikalarda çalışanların kimyasal maddelere, gürültüye ve toz partiküllerine uzun süreli maruziyeti sonucu gelişen meslek hastalıkları tazminat davalarına konu olmaktadır. 5510 sayılı SGK Kanunu m. 14 kapsamında meslek hastalığı tespiti, maluliyet oranının belirlenmesi ve sürekli iş göremezlik tazminatı bölgenin en karmaşık hukuki sürecidir."
        },
        neighborSlugs: ["karsiyaka", "bornova"],
        relatedBlogSlugs: [
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "malpraktis-davasi-doktor-hatasi-tazminati", title: "Malpraktis Davası: Doktor Hatası Tazminatı" }
        ]
    },
    {
        name: "Gaziemir",
        slug: "gaziemir",
        description: "Havalimanı yolu ve otoban kavşağıyla yoğun trafiğe sahip Gaziemir'de trafik kazası tazminat davaları sık açılır. Serbest bölge iş kazaları da öne çıkar.",
        features: ["Otoban Kazaları", "Havalimanı Yolu", "Serbest Bölge Kazaları"],
        neighborhoods: ["Sarnıç", "Binbaşı Reşatbey", "Irmak", "Atıfbey", "Yeşil Mahallesi", "Aktepe"],
        legalFocus: {
            title: "Otoban ve Havalimanı Yolu Trafik Kazası Tazminatları",
            detail: "Gaziemir'de İzmir-Aydın otoyolu ve havalimanı bağlantı yollarında meydana gelen yüksek hızlı trafik kazaları ağır yaralanma ve ölümlü kazalara neden olmaktadır. Destekten yoksun kalma tazminatı (TBK m. 53) ve sürekli iş göremezlik tazminatı davaları bölgenin en yüksek miktarlı tazminat davalarını oluşturmaktadır."
        },
        neighborSlugs: ["buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Balçova",
        slug: "balcova",
        description: "DEÜ Hastanesi ve özel sağlık kuruluşlarıyla Balçova'da malpraktis ve doktor hatası tazminat davaları yoğun görülür. Termal tesis yaralanmaları öne çıkar.",
        features: ["Doktor Hatası Tazminatı", "Malpraktis Davaları", "Sağlık Kuruluşları"],
        neighborhoods: ["İnciraltı", "Korutürk", "Onur", "Fevzi Çakmak", "Eğitim", "Çetin Emeç"],
        legalFocus: {
            title: "Sağlık Kuruluşlarında Malpraktis Tazminatı",
            detail: "Balçova İnciraltı bölgesindeki DEÜ Hastanesi ve özel hastanelerde yaşanan tıbbi hatalar nedeniyle malpraktis davaları sıkça açılmaktadır. Ameliyat komplikasyonları, yanlış ilaç uygulaması ve acil müdahale gecikmeleri nedeniyle açılan davalarda Adli Tıp Kurumu raporu ve bilirkişi incelemesi zorunlu süreçler arasındadır."
        },
        neighborSlugs: ["konak", "narlidere", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "malpraktis-davasi-doktor-hatasi-tazminati", title: "Malpraktis Davası: Doktor Hatası Tazminatı" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" }
        ]
    },
    {
        name: "Narlıdere",
        slug: "narlidere",
        description: "Narlıdere'de lüks araç trafik kazaları ve yüksek gelir kaybına dayalı tazminat davaları bölgenin kendine özgü hukuki konusunu oluşturur.",
        features: ["Lüks Araç Kazaları", "Yüksek Gelir Kaybı", "Özel Sektör Tazminatı"],
        neighborhoods: ["Sahilevleri", "Altıevler", "Huzur", "Ilıca", "Yenikale", "Narlı"],
        legalFocus: {
            title: "Yüksek Gelir Kaybına Dayalı Tazminat Hesaplaması",
            detail: "Narlıdere'de ikamet eden yüksek gelirli profesyonellerin trafik veya iş kazası sonucu iş göremezlik halinde, gelir kaybı tazminatının hesaplanması standart uygulamalardan farklılaşmaktadır. Yüksek maaş, prim ve şirket kâr payının tazminat hesabına dahil edilmesi konusundaki Yargıtay içtihatları bölgenin dikkat çeken hukuki meselesidir."
        },
        neighborSlugs: ["balcova", "guzelbahce"],
        relatedBlogSlugs: [
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "malpraktis-davasi-doktor-hatasi-tazminati", title: "Malpraktis Davası: Doktor Hatası Tazminatı" }
        ]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar",
        description: "Karabağlar'da mobilya sanayi sitesi ve kentsel dönüşüm bölgelerinde iş kazaları ile yapı zararlarına dayalı tazminat davaları sıkça görülmektedir.",
        features: ["Kentsel Dönüşüm Zararları", "İşçi Kazaları", "Yapı Kusuru Tazminatı"],
        neighborhoods: ["Yeşilyurt", "Bozyaka", "Üçkuyular", "Poligon", "Basın Sitesi", "Limonter", "Bahçelievler"],
        legalFocus: {
            title: "Kentsel Dönüşüm Sürecinde Yapı Kusuru ve Zarar Tazminatı",
            detail: "Karabağlar'da kentsel dönüşüm kapsamında yıkılan binaların yerine yapılan yeni inşaatlarda yapı kusurları (çatlak, su sızıntısı, malzeme kalitesizliği) nedeniyle müteahhitlere karşı tazminat davaları açılmaktadır. Ayrıca yıkım sürecinde komşu binalara verilen zararlar ve toz/gürültü kirliliğinden kaynaklanan sağlık sorunları da tazminat taleplerine konu olmaktadır."
        },
        neighborSlugs: ["konak", "buca", "gaziemir", "balcova"],
        relatedBlogSlugs: [
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" }
        ]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce",
        description: "Sahil yolu ve dar kıyı yollarıyla bilinen Güzelbahçe'de hafta sonu trafiğinin yoğunlaştığı dönemlerde trafik kazası tazminat davaları artmaktadır.",
        features: ["Kıyı Yolu Kazaları", "Tatil Trafiği", "Motosiklet Kazaları"],
        neighborhoods: ["Yalı", "Siteler", "Maltepe", "Yelki", "Kahramandere", "Çelebi"],
        legalFocus: {
            title: "Kıyı Yolundaki Trafik Kazaları ve Kusur Tespiti",
            detail: "Güzelbahçe sahil yolundaki virajlı ve dar kesimlerde meydana gelen trafik kazalarında, yol yapım kusuru, yetersiz aydınlatma veya eksik levha gibi belediye hizmet kusurları da gündeme gelmektedir. Kusur paylaşımının birden fazla tarafı ilgilendirmesi, tazminat davalarında rücu hakları ve sigorta tahkim süreci bölgenin dikkat çeken hukuki meselesidir."
        },
        neighborSlugs: ["narlidere", "balcova"],
        relatedBlogSlugs: [
            { slug: "trafik-kazasi-tazminati-alma-sureci", title: "Trafik Kazası Tazminatı Alma Süreci" },
            { slug: "maddi-ve-manevi-tazminat-davasi-farklari", title: "Maddi ve Manevi Tazminat Davası Farkları" },
            { slug: "malpraktis-davasi-doktor-hatasi-tazminati", title: "Malpraktis Davası: Doktor Hatası Tazminatı" }
        ]
    }
];
