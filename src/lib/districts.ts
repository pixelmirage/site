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
    /** Kira ilçe sayfaları için: kira davalarına bakan adliye / mahkeme */
    courthouse?: string;
    /** Kira ilçe sayfaları için: ilçeye özgü hukuki notlar (paragraflar) */
    localNotes?: string[];
}

export const districtData: DistrictData[] = [
    {
        name: "Bayraklı",
        slug: "bayrakli",
        description: "Bayraklı, gökdelenler bölgesi ve İzmir Adliyesi'ne yakınlığıyla kira davalarında hukuki ve ticari trafiğin yoğun olduğu yeni kent merkezidir.",
        features: ["İzmir Adliyesi'ne Yakın", "Yeni Kent Merkezi", "Ticari Uyuşmazlıklar"],
        neighborhoods: ["Mansuroğlu", "Manavkuyu", "Osmangazi", "Adalet", "Tepekule", "Soğukkuyu", "Postacılar"],
        legalFocus: {
            title: "Ofis ve Plaza Tahliyeleri",
            detail: "Bayraklı'daki Mistral, Folkart, Ege Perla gibi plaza bölgelerindeki kira sözleşmeleri, Borçlar Kanunu'nun yanı sıra ticari teamülleri de içeren kompleks yapıdadır. Özellikle 'çatılı işyeri' hükümlerine göre uyarlama davaları sıkça görülür."
        },
        neighborSlugs: ["karsiyaka", "bornova", "konak"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Bayraklı'daki ofis ve plaza kiraları çoğunlukla çatılı işyeri kirası niteliğindedir; bu nedenle TBK m. 339 vd. koruyucu hükümler, TÜFE artış sınırı (TBK m. 344) ve tahliye sebepleri (TBK m. 347-352) bu sözleşmelerde de uygulanır.", "İşyeri kira sözleşmelerinde kiracıya kira bedeli ve yan giderler dışında ödeme yükümlülüğü getirilemez; kiranın zamanında ödenmemesi halinde ceza koşulu veya sonraki kiraların muaccel olacağı kararlaştırılamaz (TBK m. 346). Sözleşmedeki bu tür kayıtlar uyuşmazlıkta ayrıca değerlendirilir."],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" }
        ]
    },
    {
        name: "Karşıyaka",
        slug: "karsiyaka",
        description: "Karşıyaka, Bostanlı ve Mavişehir gibi semtleriyle yüksek değerli konut ve kurumsal işyeri kiralarında hukuki uyuşmazlıkların yoğun yaşandığı bir ilçedir.",
        features: ["Lüks Konut Tahliyeleri", "Kurumsal Kiracı Sorunları", "Sahil Bölgesi Emlak"],
        neighborhoods: ["Bostanlı", "Mavişehir", "Aksoy", "Bahçelievler", "Atakent", "Şemikler", "Yalı", "Donanmacı"],
        legalFocus: {
            title: "Yüksek Kira Bedelli Konut Tahliyeleri",
            detail: "Karşıyaka'nın sahil şeridindeki (Yalı, Bostanlı) taşınmazlarda, 10 yıllık uzama süresi dolan eski kiracıların tahliyesi ve 'ihtiyaç nedeniyle tahliye' davaları bölgenin en sık karşılaşılan hukuki problemleridir."
        },
        neighborSlugs: ["bayrakli", "cigli", "bornova"],
        courthouse: "Karşıyaka Adliyesi bünyesindeki Karşıyaka Sulh Hukuk Mahkemeleri",
        localNotes: ["Karşıyaka'da uzun süreli kira ilişkilerinde sık gündeme gelen yollar, 10 yıllık uzama süresinin dolması (TBK m. 347) ve ihtiyaç nedeniyle tahliyedir (TBK m. 350). 10 yıllık uzama süresi sonunda kiraya veren, izleyen her uzama yılının bitiminden en az üç ay önce bildirimde bulunarak sözleşmeyi sona erdirebilir.", "İhtiyaç nedeniyle tahliyede dava, belirli süreli sözleşmelerde sürenin sonundan itibaren bir ay içinde açılmalıdır; ihtiyacın gerçek, samimi ve sürekli olması gerekir. Tahliyeden sonra kiralananın haklı sebep olmaksızın üç yıl boyunca eski kiracı dışında birine kiralanması yasaktır (TBK m. 355)."],
        relatedBlogSlugs: [
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" }
        ]
    },
    {
        name: "Bornova",
        slug: "bornova",
        description: "Bornova, Ege ve Yaşar üniversitelerinin etkisiyle öğrenci evleri ve apart dairelerden kaynaklı kira uyuşmazlıklarının sıkça yaşandığı bir ilçedir.",
        features: ["Öğrenci Evi Tahliyeleri", "Apart Yönetimi", "Üniversite Çevresi"],
        neighborhoods: ["Küçükpark", "Özkanlar", "Evka 3", "Atatürk Mahallesi", "Kazımdirik", "Ergene", "Yeşilova"],
        legalFocus: {
            title: "Öğrenci ve Apart Kira Uyuşmazlıkları",
            detail: "Bornova'da sirkülasyonun hızlı olduğu öğrenci evlerinde; 'depozito iadesi', 'erken tahliye' ve 'eşyalı konut hasar bedelleri' konularında yoğun ihtilaflar yaşanmakta ve Sulh Hukuk Mahkemeleri bu davalarla meşgul olmaktadır."
        },
        neighborSlugs: ["karsiyaka", "bayrakli", "buca"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Bornova'daki öğrenci evlerinde iki konu öne çıkar: güvence bedeli (depozito) ve süresinden önce tahliye. Güvence bedeli üç aylık kirayı aşamaz ve para olarak verilmişse bir bankada vadeli tasarruf hesabına yatırılmalıdır (TBK m. 342).", "Belirli süreli sözleşmede kiracı kiralananı süresinden önce geri verirse, kira borcundan kural olarak kiralananın benzer koşullarla kiraya verilebileceği makul süre boyunca sorumlu olmaya devam eder (TBK m. 325). Eşyalı kiralamalarda teslim ve iade sırasında demirbaş listesi ve fotoğraf tutanağı düzenlenmesi ispat kolaylığı sağlar."],
        relatedBlogSlugs: [
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", title: "İki Haklı İhtar ile Kiracı Tahliyesi" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" }
        ]
    },
    {
        name: "Konak",
        slug: "konak",
        description: "Konak, Kemeraltı, Alsancak ve Güzelyalı'daki eski yapı stoğu ve yoğun ticari işletmeleriyle işyeri ve konut kira uyuşmazlıklarının sık görüldüğü bir ilçedir.",
        features: ["Tarihi Yapı Kiraları", "İşyeri Tahliye Davaları", "Merkezi Lokasyon"],
        neighborhoods: ["Alsancak", "Güzelyalı", "Hatay", "Basmane", "Kemeraltı", "Gültepe", "Eşrefpaşa"],
        legalFocus: {
            title: "Tarihi ve Ticari Mülklerin Hukuki Durumu",
            detail: "Alsancak ve Kemeraltı gibi bölgelerde, eski eser statüsündeki binaların restorasyon süreçleri ve 'eski kiracı' statüsündeki işletmelerin kira tespit davaları, Konak'ta sık karşılaşılan konulardır."
        },
        neighborSlugs: ["bayrakli", "buca", "karabaglar", "balcova"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Konak'taki eski yapı stoğunda, kiralananın yeniden inşası veya esaslı onarımı gerektiğinde ve bu işler sırasında kullanımı imkânsız olduğunda kiraya veren tahliye davası açabilir (TBK m. 350/2). Tescilli yapılarda koruma mevzuatı ayrıca dikkate alınır.", "Alsancak ve Kemeraltı'ndaki uzun süreli işyeri kiralarında kira bedeli çoğu zaman rayicin gerisinde kalır; beş yılı aşan kira ilişkilerinde kira tespit davası ile bedel emsal kiralar dikkate alınarak hakkaniyete göre yeniden belirlenebilir (TBK m. 344/3)."],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Buca",
        slug: "buca",
        description: "Buca, İzmir'in en kalabalık ilçelerinden biri olarak yoğun kiralık konut piyasası ve üniversite çevresiyle tahliye uyuşmazlıklarının sık görüldüğü bir ilçedir.",
        features: ["Yoğun Konut Dokusu", "Öğrenci Kiralama", "Memur/Çalışan Kesim"],
        neighborhoods: ["Şirinyer", "Hasanağa", "Kozağaç", "Yıldız", "Adatepe", "Evka 1", "Tınaztepe"],
        legalFocus: {
            title: "Kalabalık Konut Dokusunda Tahliye",
            detail: "Buca'da kiracı sirkülasyonunun çok hızlı olması sebebiyle, 'tahliye taahhütnamesine dayalı icra takipleri' sık başvurulan bir yoldur. Şirinyer ve Hasanağa bölgelerinde kira tespit davaları da yoğunlaşmıştır."
        },
        neighborSlugs: ["konak", "bornova", "karabaglar", "gaziemir"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Buca'daki yoğun konut kiralarında tahliye taahhüdü sık kullanılır. Taahhüdün geçerli olması için kiralananın tesliminden sonra yazılı olarak verilmiş olması gerekir (TBK m. 352/1); sözleşme ile aynı anda alınan taahhütler uygulamada geçersizlik tartışmasına yol açar.", "Geçerli bir taahhüt varsa kiraya veren, taahhüt edilen tarihten itibaren bir ay içinde icra takibi başlatabilir veya dava açabilir (İİK m. 272, TBK m. 352/1). İcra yoluyla tahliye zorunlu arabuluculuk şartına tabi değildir."],
        relatedBlogSlugs: [
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", title: "İki Haklı İhtar ile Kiracı Tahliyesi" },
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" }
        ]
    },
    {
        name: "Çiğli",
        slug: "cigli",
        description: "Çiğli, Atatürk OSB ve Katip Çelebi Üniversitesi ile gelişen, sanayi işyeri kiraları ve yeni konut projelerinde kira davalarının arttığı bir ilçedir.",
        features: ["Sanayi Sitesi Kiraları", "Yeni Konut Projeleri", "Depo ve Antrepo"],
        neighborhoods: ["Ataşehir", "Balatçık", "Egekent", "İzkent", "Evka 2", "Küçük Çiğli"],
        legalFocus: {
            title: "Sanayi ve Depo Kira Sözleşmeleri",
            detail: "Çiğli AOSB bölgesindeki fabrika ve depo kiralamalarında, üretim kaybı tazminatları ve ağır tahliye şartları sözleşmelere eklenmektedir. Bu tip ticari sözleşmelerin hazırlanmasında TBK'nın emredici hükümleri dikkate alınmalıdır."
        },
        neighborSlugs: ["karsiyaka", "bornova"],
        courthouse: "Karşıyaka Adliyesi bünyesindeki Karşıyaka Sulh Hukuk Mahkemeleri",
        localNotes: ["Çiğli'deki depo, atölye ve fabrika kiraları da çatılı işyeri kirası niteliğinde olduğundan TBK'nın koruyucu hükümlerine tabidir. Kiracıya kira bedeli ve yan giderler dışında ödeme yükümlülüğü getiren, ceza koşulu veya muacceliyet öngören kayıtlar TBK m. 346 karşısında değerlendirilmelidir.", "Sanayi tipi kiralamalarda kiralananın teslim anındaki durumu, kiracının yaptığı tesisat ve eklentiler ile sözleşme sonunda bunların akıbeti (TBK m. 321 ve 334) yazılı olarak düzenlenmelidir."],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Gaziemir",
        slug: "gaziemir",
        description: "Gaziemir, havalimanı ve ESBAŞ çevresinde beyaz yakalı çalışanların tercih ettiği, kira bedellerinin yüksek olduğu bir ilçedir.",
        features: ["Serbest Bölge Çalışanları", "Havalimanı Çevresi", "Site İçi Konutlar"],
        neighborhoods: ["Sarnıç", "Binbaşı Reşatbey", "Irmak", "Atıfbey", "Yeşil Mahallesi", "Aktepe"],
        legalFocus: {
            title: "Beyaz Yakalı Kiracı Profili ve Site Yönetimi",
            detail: "Gaziemir'deki site içi konutlarda aidat borçları ve yönetim planına aykırılık, kira alacağı uyuşmazlıklarının yanında sık karşılaşılan konulardır."
        },
        neighborSlugs: ["buca", "karabaglar", "balcova"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Gaziemir'deki site içi konutlarda aidat (ortak gider) borçları sık uyuşmazlık konusudur. Kira sözleşmesinde yan giderlerin kiracıya ait olduğu kararlaştırılmışsa kiracı bu giderlere katlanır (TBK m. 341); site yönetimi ile ilişkide ise Kat Mülkiyeti Kanunu hükümleri ayrıca uygulanır.", "Kira bedeli ödenmediğinde kiraya veren, en az 30 günlük süre vererek yazılı ihtarda bulunabilir ve süre içinde ödeme yapılmazsa sözleşmeyi feshedebilir (TBK m. 315); bu yol ile ilamsız icra yoluyla tahliye takibi (İİK m. 269 vd.) birbirinden farklıdır."],
        relatedBlogSlugs: [
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" },
            { slug: "kira-hukukunda-zorunlu-arabuluculuk-sureci", title: "Zorunlu Arabuluculuk Süreci" }
        ]
    },
    {
        name: "Balçova",
        slug: "balcova",
        description: "Balçova, AVM'leri ve üniversitesiyle ticari potansiyeli yüksek, işyeri kiralarının yoğun olduğu bir ilçedir.",
        features: ["AVM ve Mağaza Kiraları", "Termal Tesis Bölgesi", "Üniversite Çevresi"],
        neighborhoods: ["İnciraltı", "Korutürk", "Onur", "Fevzi Çakmak", "Eğitim", "Çetin Emeç"],
        legalFocus: {
            title: "Ticari Potansiyeli Yüksek Mülkler",
            detail: "Balçova'da AVM ve cadde mağazacılığının yoğun olması, 'uyarlama davaları' ve 'ciro endeksli kira' sözleşmelerini gündeme getirmektedir. Konutlarda ise Ekonomi Üniversitesi öğrencileri piyasayı belirler."
        },
        neighborSlugs: ["konak", "narlidere", "karabaglar", "gaziemir"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Balçova'daki AVM ve cadde mağazalarında ciroya bağlı veya döviz cinsinden kira bedelleri görülebilir. Sözleşme kurulduktan sonra öngörülemeyen olağanüstü bir değişiklik ifayı aşırı ölçüde güçleştirirse kira bedelinin uyarlanması istenebilir (TBK m. 138).", "Uyarlama ile kira tespiti farklı davalardır: tespit davası beş yıllık süre ve hakkaniyet kriterine bağlıyken (TBK m. 344/3), uyarlama olağanüstü durumun ve aşırı ifa güçlüğünün ispatını gerektirir."],
        relatedBlogSlugs: [
            { slug: "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", title: "İşyeri Kira Sözleşmesinde Dikkat Edilecek Hususlar" },
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Narlıdere",
        slug: "narlidere",
        description: "Narlıdere, lüks konut projeleri ve villa tipi yapılaşmasıyla yüksek kira getirili mülklerde nitelikli hukuki süreç gerektiren bir ilçedir.",
        features: ["Lüks Site Yönetimi", "Villa Kiralamaları", "Yüksek Gelir Grubu"],
        neighborhoods: ["Sahilevleri", "Altıevler", "Huzur", "Ilıca", "Yenikale", "Narlı"],
        legalFocus: {
            title: "Lüks Konut ve Villa Kiralama Hukuku",
            detail: "Narlıdere Sahilevleri bölgesindeki villa kiralamalarında, demirbaş eşyaların (havuz, jeneratör vb.) bakımı ve hasar durumları, tahliye davalarından daha çok 'tazminat' davalarına konu olmaktadır."
        },
        neighborSlugs: ["balcova", "guzelbahce"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Narlıdere'deki villa ve eşyalı konut kiralarında sözleşme sonunda kiracı, kiralananı teslim aldığı durumda geri vermekle yükümlüdür; olağan kullanım sonucu oluşan yıpranmalardan sorumlu değildir (TBK m. 334).", "Kiraya veren, geri verme sırasında kiralananı gözden geçirmeli ve kiracının sorumlu olduğu eksiklikleri derhal yazılı olarak bildirmelidir; aksi halde kiracı, olağan bir incelemeyle anlaşılamayacak ayıplar dışında sorumluluktan kurtulur (TBK m. 335)."],
        relatedBlogSlugs: [
            { slug: "hangi-durumlarda-kira-tespit-davasi-acilabilir", title: "Kira Tespit Davası Hangi Durumlarda Açılabilir?" },
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" },
            { slug: "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", title: "Ev Sahibi Kiracıyı Hangi Durumlarda Çıkarabilir?" }
        ]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar",
        description: "Karabağlar, mobilya sanayisi, kentsel dönüşüm ve yoğun konut dokusuyla karmaşık mülkiyet ve kira sorunlarının yaşandığı büyük bir ilçedir.",
        features: ["Mobilya Sanayi", "Kentsel Dönüşüm", "Yoğun Nüfus"],
        neighborhoods: ["Yeşilyurt", "Bozyaka", "Üçkuyular", "Poligon", "Basın Sitesi", "Limonter", "Bahçelievler"],
        legalFocus: {
            title: "Kentsel Dönüşüm ve Tahliye",
            detail: "Karabağlar'da kentsel dönüşüm kapsamına giren binalarda kiracı tahliyesi ('6306 sayılı kanun') en sık karşılaşılan süreçtir. Mobilyacılar sitesindeki esnaf tahliyeleri de ticari davaların çoğunluğunu oluşturur."
        },
        neighborSlugs: ["konak", "buca", "gaziemir", "balcova"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Karabağlar'da riskli yapı tespiti yapılan binalarda süreç 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun'a göre yürür; riskli yapıların yıktırılması için verilen süre içinde kiracıların tahliyesi gerekir. Kiracılar, şartları varsa kira yardımı için başvurabilir.", "Kentsel dönüşüm dışında, binanın yeniden inşası veya esaslı onarımı nedeniyle tahliye (TBK m. 350/2) ayrı bir yoldur ve dava yoluyla ileri sürülür."],
        relatedBlogSlugs: [
            { slug: "kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", title: "İki Haklı İhtar ile Kiracı Tahliyesi" },
            { slug: "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", title: "İhtiyaç Nedeniyle Tahliye Davası Nasıl Açılır?" },
            { slug: "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler", title: "İzmir Gayrimenkul Piyasasında Güncel Gelişmeler" }
        ]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce",
        description: "Güzelbahçe, müstakil yaşam ve sayfiye havasıyla sezonluk ile yıllık kira sözleşmelerinin özel hükümler gerektirdiği butik bir ilçedir.",
        features: ["Kolejler Bölgesi", "Müstakil Yaşam", "Sezonluk/Yıllık Kira"],
        neighborhoods: ["Yalı", "Siteler", "Maltepe", "Yelki", "Kahramandere", "Çelebi"],
        legalFocus: {
            title: "Sezonluk ve Müstakil Konut Kiraları",
            detail: "Güzelbahçe'de 'sezonluk kiralama' ile 'yıllık kiralama' ayrımının sözleşmelerde net yapılmaması hukuki sorun doğurur. Ayrıca Yelki bölgesindeki yeni villa projelerinde aidat ve yönetim sorunları sıkça dava konusu olur."
        },
        neighborSlugs: ["narlidere", "balcova"],
        courthouse: "İzmir Adliyesi (Bayraklı) bünyesindeki İzmir Sulh Hukuk Mahkemeleri",
        localNotes: ["Güzelbahçe'deki sezonluk kiralamalarda önemli bir ayrım vardır: niteliği gereği geçici kullanılmak üzere süresi üç ay veya daha kısa olan kiralara konut ve çatılı işyeri kiralarına ilişkin koruyucu hükümler uygulanmaz (TBK m. 339/2).", "Bu nedenle yazlık olarak kiralanan bir müstakil evin fiilen yıllık konut olarak kullanılması halinde, uyuşmazlıkta TÜFE sınırı, tahliye sebepleri ve güvence bedeli kuralları uygulanabilir; sözleşmenin süresi ve amacı açıkça yazılmalıdır."],
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
        ctaDesc: "Kira uyuşmazlığınız için randevu oluşturabilirsiniz.",
    },
    is: {
        label: "İş Avukatı",
        parentTitle: "İzmir İş Avukatı",
        parentUrl: "/izmir-is-avukati",
        sectionTitle: "İşe İade ve Tazminat Davaları",
        ctaTitle: "İş Avukatı ile Görüşün",
        ctaDesc: "İş hukuku uyuşmazlığınız için randevu oluşturabilirsiniz.",
    },
    bosanma: {
        label: "Boşanma Avukatı",
        parentTitle: "İzmir Boşanma Avukatı",
        parentUrl: "/izmir-bosanma-avukati",
        sectionTitle: "Boşanma ve Velayet Davaları",
        ctaTitle: "Boşanma Avukatı ile Görüşün",
        ctaDesc: "Boşanma süreciniz için randevu oluşturabilirsiniz.",
    },
    tazminat: {
        label: "Tazminat Avukatı",
        parentTitle: "İzmir Tazminat Avukatı",
        parentUrl: "/izmir-tazminat-avukati",
        sectionTitle: "Tazminat Davası Süreci",
        ctaTitle: "Tazminat Avukatı ile Görüşün",
        ctaDesc: "Tazminat talebiniz için randevu oluşturabilirsiniz.",
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
            // eslint-disable-next-line @typescript-eslint/no-require-imports -- lazy load to avoid circular import
            const { isDistrictData } = require("./districts-is");
            dataArray = isDistrictData;
        } else if (serviceType === "bosanma") {
            // eslint-disable-next-line @typescript-eslint/no-require-imports -- lazy load to avoid circular import
            const { bosanmaDistrictData } = require("./districts-bosanma");
            dataArray = bosanmaDistrictData;
        } else {
            // eslint-disable-next-line @typescript-eslint/no-require-imports -- lazy load to avoid circular import
            const { tazminatDistrictData } = require("./districts-tazminat");
            dataArray = tazminatDistrictData;
        }
    }

    const data = dataArray.find(d => d.slug === districtSlug);
    if (!data) return null;

    return { data, serviceType };
}

export function getAllServiceSlugs(): string[] {
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- lazy load to avoid circular import
    const { isDistrictData } = require("./districts-is");
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- lazy load to avoid circular import
    const { bosanmaDistrictData } = require("./districts-bosanma");
    // eslint-disable-next-line @typescript-eslint/no-require-imports -- lazy load to avoid circular import
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
