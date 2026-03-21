import { DistrictData } from "./districts";

export const isDistrictData: DistrictData[] = [
    {
        name: "Bayraklı",
        slug: "bayrakli",
        description: "Bayraklı'da Folkart Towers ve plaza bölgelerindeki kurumsal şirketlerde işçi-işveren uyuşmazlıkları ve iş hukuku davaları yoğun şekilde görülmektedir.",
        features: ["Plaza Çalışanları", "Kurumsal İhtilaflar", "Beyaz Yaka Hakları"],
        neighborhoods: ["Mansuroğlu", "Manavkuyu", "Osmangazi", "Adalet", "Tepekule", "Soğukkuyu", "Postacılar"],
        legalFocus: {
            title: "Kurumsal Şirketlerde İşten Çıkarma ve İşe İade",
            detail: "Bayraklı'daki plaza bölgesinde faaliyet gösteren holdinglerin İzmir ofislerinde performans gerekçeli fesih ve yeniden yapılanma nedeniyle toplu işten çıkarmalar sıkça yaşanmaktadır. 4857 sayılı İş Kanunu m. 18-21 kapsamında işe iade davaları bu bölgenin en yoğun iş hukuku uyuşmazlığıdır."
        },
        neighborSlugs: ["karsiyaka", "bornova", "konak"],
        relatedBlogSlugs: [
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Karşıyaka",
        slug: "karsiyaka",
        description: "Karşıyaka'da AVM, perakende ve sahil restoranlarındaki hizmet sektörü çalışanlarının fazla mesai ve sigortasız çalıştırılma gibi iş hukuku sorunları öne çıkar.",
        features: ["Perakende Sektörü", "AVM Çalışanları", "Hizmet Sektörü"],
        neighborhoods: ["Bostanlı", "Mavişehir", "Aksoy", "Bahçelievler", "Atakent", "Şemikler", "Yalı", "Donanmacı"],
        legalFocus: {
            title: "Perakende ve Hizmet Sektöründe İşçi Hakları",
            detail: "Karşıyaka'daki AVM mağazaları ve sahil şeridindeki restoranlarda çalışanlar, fazla mesai ücretlerinin ödenmemesi, ulusal bayram tatilinde çalıştırılma ve yıllık izin kullandırılmaması gibi sorunlarla sıkça karşılaşmaktadır. Bu işletmelerde kayıt dışı çalıştırma oranı da yüksektir."
        },
        neighborSlugs: ["bayrakli", "cigli", "bornova"],
        relatedBlogSlugs: [
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Bornova",
        slug: "bornova",
        description: "Bornova'da Ege ve Yaşar Üniversitesi çevresindeki işletmelerde part-time öğrenci işçilerin hakları ve iş hukuku uyuşmazlıkları sıkça yaşanmaktadır.",
        features: ["Part-Time Öğrenci İşçiler", "Üniversite Personeli", "Kampüs İşletmeleri"],
        neighborhoods: ["Küçükpark", "Özkanlar", "Evka 3", "Atatürk Mahallesi", "Kazımdirik", "Ergene", "Yeşilova"],
        legalFocus: {
            title: "Part-Time Çalışan Öğrenci Hakları ve Sigortasız İstihdam",
            detail: "Bornova'da üniversite çevresindeki işletmelerde çalışan öğrenciler, çoğunlukla iş sözleşmesi yapılmadan ve SGK bildirimi olmadan istihdam edilmektedir. Bu durum, iş kazası halinde ciddi hukuki sorunlara yol açmakta ve hizmet tespit davaları bölgenin en sık karşılaşılan iş hukuku meselesi olmaktadır."
        },
        neighborSlugs: ["karsiyaka", "bayrakli", "buca"],
        relatedBlogSlugs: [
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" }
        ]
    },
    {
        name: "Konak",
        slug: "konak",
        description: "İzmir'in ticari merkezi Konak'ta Kemeraltı esnafı, Alsancak otel ve restoranlarında iş hukuku davaları ve mevsimlik işçi hakları sorunları yoğundur.",
        features: ["Esnaf ve Sanatkarlar", "Turizm Sektörü", "Otel Çalışanları"],
        neighborhoods: ["Alsancak", "Güzelyalı", "Hatay", "Basmane", "Kemeraltı", "Gültepe", "Eşrefpaşa"],
        legalFocus: {
            title: "Esnaf Yanında Çalışanların Hakları ve Kayıt Dışı İstihdam",
            detail: "Kemeraltı ve çevresindeki esnaf işletmelerinde çalışanlar, SGK primlerinin eksik yatırılması, fazla mesai ücretlerinin ödenmemesi ve kıdem tazminatından kaçınma gibi sorunlarla karşılaşmaktadır. Alsancak'taki otel ve restoranlarda ise mevsimlik çalışanların belirli süreli sözleşme kötüye kullanımı sık görülen bir davadır."
        },
        neighborSlugs: ["bayrakli", "buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Buca",
        slug: "buca",
        description: "İzmir'in en kalabalık ilçesi Buca'da sanayi siteleri ve inşaat şantiyelerinde iş kazaları, tazminat davaları ve iş hukuku uyuşmazlıkları sıkça yaşanır.",
        features: ["İnşaat Sektörü", "Sanayi Sitesi İşçileri", "İş Kazaları"],
        neighborhoods: ["Şirinyer", "Hasanağa", "Kozağaç", "Yıldız", "Adatepe", "Evka 1", "Tınaztepe"],
        legalFocus: {
            title: "İnşaat ve Sanayi Sektöründe İş Kazaları",
            detail: "Buca'daki inşaat şantiyelerinde ve sanayi sitelerinde iş güvenliği önlemlerinin yetersiz olması nedeniyle iş kazaları yaşanmaktadır. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında işverenin sorumluluğu ve iş kazası tazminatı davaları bölgenin en kritik iş hukuku konusudur."
        },
        neighborSlugs: ["konak", "bornova", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" }
        ]
    },
    {
        name: "Çiğli",
        slug: "cigli",
        description: "AOSB'ye ev sahipliği yapan Çiğli'de fabrika işçilerinin iş güvenliği, fazla mesai ve sendika hakları önemli iş hukuku sorun alanlarıdır.",
        features: ["AOSB Fabrika İşçileri", "Vardiyalı Çalışma", "Sendika Hakları"],
        neighborhoods: ["Ataşehir", "Balatçık", "Egekent", "İzkent", "Evka 2", "Küçük Çiğli"],
        legalFocus: {
            title: "Organize Sanayi Bölgesinde İşçi Hakları ve Sendika",
            detail: "Çiğli AOSB'deki fabrikalarda vardiyalı çalışma düzenine uyulmaması, fazla mesai ücretlerinin ödenmemesi ve sendikalaşma nedeniyle fesih en sık görülen uyuşmazlıklardır. 6356 sayılı Sendikalar Kanunu kapsamında sendikal tazminat davaları bu bölgede önemli yer tutmaktadır."
        },
        neighborSlugs: ["karsiyaka", "bornova"],
        relatedBlogSlugs: [
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" }
        ]
    },
    {
        name: "Gaziemir",
        slug: "gaziemir",
        description: "Gaziemir'de havalimanı personeli, ESBAŞ serbest bölge çalışanları ve lojistik sektörü işçilerinin iş hukuku uyuşmazlıkları yoğun olarak görülmektedir.",
        features: ["Havalimanı Personeli", "Serbest Bölge", "Lojistik Sektörü"],
        neighborhoods: ["Sarnıç", "Binbaşı Reşatbey", "Irmak", "Atıfbey", "Yeşil Mahallesi", "Aktepe"],
        legalFocus: {
            title: "Serbest Bölge ve Havalimanı Çalışanlarının Özel Durumu",
            detail: "ESBAŞ bünyesindeki şirketlerde çalışanlar, serbest bölgelere özgü çalışma mevzuatı nedeniyle farklı haklara sahiptir. Havalimanı yer hizmetleri ve taşeron firmalar üzerinden istihdam edilen personelin kıdem tazminatı ve asıl işveren-alt işveren ilişkisi davaları bölgenin ayırt edici hukuki meselesidir."
        },
        neighborSlugs: ["buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Balçova",
        slug: "balcova",
        description: "Balçova'da AVM'lerdeki perakende sektörü çalışanları ve İzmir Ekonomi Üniversitesi gibi eğitim kurumu personelinin iş hukuku sorunları öne çıkmaktadır.",
        features: ["AVM Personeli", "Eğitim Sektörü", "Perakende Çalışanları"],
        neighborhoods: ["İnciraltı", "Korutürk", "Onur", "Fevzi Çakmak", "Eğitim", "Çetin Emeç"],
        legalFocus: {
            title: "AVM ve Eğitim Sektöründe Çalışan Hakları",
            detail: "Balçova'daki AVM mağazalarında çalışanların hafta sonu ve resmi tatillerde çalıştırılması, prim sistemlerinin ücrete dahil edilip edilmeyeceği ve mağaza kapanışı nedeniyle toplu fesih süreçleri sıkça dava konusu olmaktadır. Özel eğitim kurumlarında ise belirli süreli sözleşmelerin kötüye kullanımı yaygındır."
        },
        neighborSlugs: ["konak", "narlidere", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Narlıdere",
        slug: "narlidere",
        description: "Narlıdere'de üst düzey yöneticilerin rekabet yasağı, ikale sözleşmeleri ve yönetici hakları konusunda iş hukuku uyuşmazlıkları yaşanmaktadır.",
        features: ["Üst Düzey Yöneticiler", "Rekabet Yasağı", "İkale Sözleşmeleri"],
        neighborhoods: ["Sahilevleri", "Altıevler", "Huzur", "Ilıca", "Yenikale", "Narlı"],
        legalFocus: {
            title: "Üst Düzey Yönetici ve Rekabet Yasağı Davaları",
            detail: "Narlıdere'de ikamet eden üst düzey yöneticilerin iş sözleşmelerinde yer alan rekabet yasağı ve gizlilik hükümleri, işten ayrılma sonrasında önemli ihtilaflar doğurmaktadır. TBK m. 444-447 kapsamındaki rekabet yasağının geçerliliği ve ihlali halinde cezai şart davaları bölgenin kendine özgü iş hukuku meselesidir."
        },
        neighborSlugs: ["balcova", "guzelbahce"],
        relatedBlogSlugs: [
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar",
        description: "Karabağlar'da mobilya sanayi sitesi ve imalat atölyelerinde kayıt dışı istihdam, iş güvenliği eksiklikleri ve işçi hakları ihlalleri yoğun yaşanmaktadır.",
        features: ["Mobilya Sanayi", "Küçük İşletmeler", "Kayıt Dışı İstihdam"],
        neighborhoods: ["Yeşilyurt", "Bozyaka", "Üçkuyular", "Poligon", "Basın Sitesi", "Limonter", "Bahçelievler"],
        legalFocus: {
            title: "Küçük İşletmelerde Kayıt Dışı Çalıştırma ve Hizmet Tespiti",
            detail: "Karabağlar mobilyacılar sitesi ve çevresindeki imalat atölyelerinde SGK bildiriminin yapılmadan çalıştırılma oranı yüksektir. İşçilerin hizmet tespit davası ile çalışma sürelerini kanıtlamaları ve geriye dönük prim alacaklarını talep etmeleri bölgenin en yaygın iş hukuku uyuşmazlığıdır."
        },
        neighborSlugs: ["konak", "buca", "gaziemir", "balcova"],
        relatedBlogSlugs: [
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" },
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" }
        ]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce",
        description: "Güzelbahçe'de özel kolejlerdeki eğitim sektörü çalışanları ve butik otellerdeki mevsimlik turizm işçilerinin iş hukuku sorunları öne çıkmaktadır.",
        features: ["Özel Kolejler", "Mevsimlik Çalışanlar", "Eğitim Personeli"],
        neighborhoods: ["Yalı", "Siteler", "Maltepe", "Yelki", "Kahramandere", "Çelebi"],
        legalFocus: {
            title: "Özel Eğitim Kurumlarında Belirli Süreli Sözleşme Sorunları",
            detail: "Güzelbahçe'deki özel kolejlerde öğretmen ve personel, her yıl yenilenen belirli süreli iş sözleşmeleriyle istihdam edilmektedir. Yargıtay kararlarına göre zincirleme yapılan belirli süreli sözleşmeler belirsiz süreli sayılmakta ve fesih halinde kıdem tazminatı hakkı doğmaktadır."
        },
        neighborSlugs: ["narlidere", "balcova"],
        relatedBlogSlugs: [
            { slug: "kidem-tazminati-nasil-hesaplanir", title: "Kıdem Tazminatı Nasıl Hesaplanır?" },
            { slug: "isten-cikarildiginda-ne-yapmali", title: "İşten Çıkarıldığında Ne Yapmalı? 2026 Rehberi" },
            { slug: "is-kazasi-tazminati-sureci-ve-haklariniz", title: "İş Kazası Tazminatı Süreci ve Haklarınız" }
        ]
    }
];
