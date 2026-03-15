import { DistrictData } from "./districts";

export const bosanmaDistrictData: DistrictData[] = [
    {
        name: "Bayraklı",
        slug: "bayrakli",
        description: "İzmir'in yeni kent merkezi Bayraklı, genç profesyonel çiftlerin yoğun olarak tercih ettiği bir bölgedir. Yeni konut projelerindeki yüksek konut fiyatları ve kredi borçları, boşanma süreçlerinde mal paylaşımını karmaşık hale getirmektedir.",
        features: ["Genç Çiftler", "Mal Paylaşımı", "Kredi Borcu Uyuşmazlığı"],
        neighborhoods: ["Mansuroğlu", "Manavkuyu", "Osmangazi", "Adalet", "Tepekule", "Soğukkuyu", "Postacılar"],
        legalFocus: {
            title: "Mortgage ve Kredi Borçlu Konutlarda Mal Paylaşımı",
            detail: "Bayraklı'daki yeni konut projelerinde krediyle alınan taşınmazların boşanma sürecinde paylaşımı, TMK m. 202-281 kapsamındaki edinilmiş mallara katılma rejimi çerçevesinde karmaşık hesaplamalar gerektirmektedir. Kredi taksitlerine kimin ne kadar katkı sağladığı, katılma alacağı davasının en önemli unsuru olmaktadır."
        },
        neighborSlugs: ["karsiyaka", "bornova", "konak"],
        relatedBlogSlugs: [
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" }
        ]
    },
    {
        name: "Karşıyaka",
        slug: "karsiyaka",
        description: "Bostanlı ve Mavişehir gibi üst gelir grubunun tercih ettiği semtleriyle Karşıyaka, yüksek değerli taşınmazların ve önemli mal varlıklarının söz konusu olduğu boşanma davalarının yoğun görüldüğü bir ilçedir.",
        features: ["Yüksek Nafaka Talepleri", "Değerli Mal Varlığı", "Anlaşmalı Boşanma"],
        neighborhoods: ["Bostanlı", "Mavişehir", "Aksoy", "Bahçelievler", "Atakent", "Şemikler", "Yalı", "Donanmacı"],
        legalFocus: {
            title: "Yüksek Gelirli Eşler Arasında Nafaka ve Mal Paylaşımı",
            detail: "Karşıyaka'daki yüksek gelir grubuna ait boşanma davalarında, eşlerin yaşam standardının korunması ilkesi gereğince yoksulluk nafakası miktarları İzmir ortalamasının üzerinde belirlenmektedir. Ayrıca Mavişehir ve Bostanlı'daki değerli gayrimenkullerin paylaşımı ve şirket hisselerinin tasfiyesi karmaşık değerleme süreçleri gerektirmektedir."
        },
        neighborSlugs: ["bayrakli", "cigli", "bornova"],
        relatedBlogSlugs: [
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" }
        ]
    },
    {
        name: "Bornova",
        slug: "bornova",
        description: "Üniversite nüfusunun yoğun olduğu Bornova'da, genç yaşta yapılan evliliklerin erken dönemde boşanmayla sonuçlanması sıkça karşılaşılan bir durumdur. Öğrenci evlilikleri ve kısa süreli evliliklerdeki hukuki süreçler bölgenin ayırt edici özelliğidir.",
        features: ["Genç Aile Uyuşmazlıkları", "Kısa Süreli Evlilik", "Velayet Davaları"],
        neighborhoods: ["Küçükpark", "Özkanlar", "Evka 3", "Atatürk Mahallesi", "Kazımdirik", "Ergene", "Yeşilova"],
        legalFocus: {
            title: "Kısa Süreli Evliliklerde Boşanma ve Tazminat",
            detail: "Bornova'da üniversite yıllarında başlayan evliliklerin 1-3 yıl içinde boşanmayla sonuçlanması yaygındır. Kısa süreli evliliklerde TMK m. 174 kapsamında maddi ve manevi tazminat miktarının belirlenmesi, nafaka yükümlülüğünün süresi ve düğün takılarının iadesi en sık dava konusu olan meselelerdir."
        },
        neighborSlugs: ["karsiyaka", "bayrakli", "buca"],
        relatedBlogSlugs: [
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" }
        ]
    },
    {
        name: "Konak",
        slug: "konak",
        description: "İzmir'in tarihi merkezi Konak, geleneksel aile yapısının güçlü olduğu ve çok kuşaklı ailelerin bir arada yaşadığı bir bölgedir. Ailevi baskılar, müdahale ve çekişmeli boşanma davaları ilçenin öne çıkan aile hukuku sorunlarıdır.",
        features: ["Çekişmeli Boşanma", "Aile İçi Şiddet", "Geleneksel Aile Yapısı"],
        neighborhoods: ["Alsancak", "Güzelyalı", "Hatay", "Basmane", "Kemeraltı", "Gültepe", "Eşrefpaşa"],
        legalFocus: {
            title: "Aile İçi Şiddet ve Koruma Kararları",
            detail: "Konak bölgesinde aile içi şiddet vakaları nedeniyle 6284 sayılı Ailenin Korunması Kanunu kapsamında koruma kararları sıkça alınmaktadır. Şiddet mağduru eşin korunması, uzaklaştırma kararı ve ardından açılacak çekişmeli boşanma davasında kusur tespiti bölgenin en hassas hukuki süreçleridir."
        },
        neighborSlugs: ["bayrakli", "buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" }
        ]
    },
    {
        name: "Buca",
        slug: "buca",
        description: "İzmir'in en kalabalık ilçesi Buca, yoğun nüfusu ve çeşitli sosyoekonomik yapısıyla velayet davalarının en sık açıldığı bölgelerin başında gelmektedir. Çocuklu ailelerin yoğunluğu, velayet ve iştirak nafakası uyuşmazlıklarını artırmaktadır.",
        features: ["Velayet Davaları", "İştirak Nafakası", "Çocuklu Aile Yoğunluğu"],
        neighborhoods: ["Şirinyer", "Hasanağa", "Kozağaç", "Yıldız", "Adatepe", "Evka 1", "Tınaztepe"],
        legalFocus: {
            title: "Velayet ve Çocuğun Üstün Yararı İlkesi",
            detail: "Buca'da çocuklu ailelerin yoğunluğu nedeniyle velayet davaları ilçenin en sık karşılaşılan aile hukuku meselesidir. TMK m. 182 gereğince çocuğun üstün yararı ilkesi, velayetin belirlenmesinde mahkemenin temel kriteri olmakta; pedagog raporu, sosyal inceleme raporu ve çocuğun görüşü karar sürecinde belirleyici olmaktadır."
        },
        neighborSlugs: ["konak", "bornova", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" }
        ]
    },
    {
        name: "Çiğli",
        slug: "cigli",
        description: "TOKİ konutları ve toplu konut sitelerinin yoğun olduğu Çiğli'de, işçi ailelerin ekonomik nedenlerle boşanma süreçleri ve nafaka uyuşmazlıkları ilçenin belirleyici aile hukuku konusudur.",
        features: ["Ekonomik Nedenli Boşanma", "TOKİ Konut Paylaşımı", "İşçi Aileleri"],
        neighborhoods: ["Ataşehir", "Balatçık", "Egekent", "İzkent", "Evka 2", "Küçük Çiğli"],
        legalFocus: {
            title: "Ekonomik Güçlükler Nedeniyle Boşanma ve Nafaka",
            detail: "Çiğli'deki TOKİ konutlarında yaşayan ailelerde, ekonomik sıkıntıların aile içi huzursuzluğa yol açması ve boşanma davalarını tetiklemesi sıkça görülmektedir. Düşük gelirli eşler arasında nafaka miktarının belirlenmesi, TOKİ taksitli konutun paylaşımı ve çocukların bakım masraflarının karşılanması bölgeye özgü hukuki sorunlardır."
        },
        neighborSlugs: ["karsiyaka", "bornova"],
        relatedBlogSlugs: [
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" }
        ]
    },
    {
        name: "Gaziemir",
        slug: "gaziemir",
        description: "Havalimanı çalışanları ve serbest bölge personelinin tercih ettiği Gaziemir, çift gelirli modern ailelerin yoğun olduğu bir ilçedir. Anlaşmalı boşanma oranının yüksek olduğu bölgede, profesyonel çiftlerin mal paylaşımı davaları öne çıkmaktadır.",
        features: ["Anlaşmalı Boşanma", "Çift Gelirli Aileler", "Profesyonel Mal Paylaşımı"],
        neighborhoods: ["Sarnıç", "Binbaşı Reşatbey", "Irmak", "Atıfbey", "Yeşil Mahallesi", "Aktepe"],
        legalFocus: {
            title: "Çift Gelirli Ailelerde Anlaşmalı Boşanma Süreci",
            detail: "Gaziemir'de her iki eşin de çalıştığı modern aile yapısında, taraflar çoğunlukla anlaşmalı boşanma yolunu tercih etmektedir. TMK m. 166/3 gereğince anlaşmalı boşanma protokolünün hazırlanması, nafaka ve velayet düzenlemelerinin adil biçimde belirlenmesi bölgedeki avukatların en sık yürüttüğü süreçtir."
        },
        neighborSlugs: ["buca", "karabaglar", "balcova"],
        relatedBlogSlugs: [
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" }
        ]
    },
    {
        name: "Balçova",
        slug: "balcova",
        description: "Orta-üst gelir grubunun ve eğitimli ailelerin yoğun olduğu Balçova'da, boşanma süreçleri genellikle karşılıklı avukat desteğiyle profesyonel şekilde yürütülmektedir. Özellikle çocuk teslim ve kişisel ilişki kurulması davaları bölgede sıkça görülmektedir.",
        features: ["Eğitimli Aile Profili", "Kişisel İlişki Davası", "Profesyonel Süreç"],
        neighborhoods: ["İnciraltı", "Korutürk", "Onur", "Fevzi Çakmak", "Eğitim", "Çetin Emeç"],
        legalFocus: {
            title: "Çocukla Kişisel İlişki ve Teslim Uyuşmazlıkları",
            detail: "Balçova'da boşanma sonrası velayet kendisinde olmayan ebeveynin çocukla kişisel ilişki kurulması konusundaki uyuşmazlıklar sık yaşanmaktadır. TMK m. 323 kapsamında kişisel ilişkinin düzenlenmesi, çocuk teslim icra takibi ve yaz tatili/bayram ziyaret takviminin belirlenmesi bölgenin dikkat çeken aile hukuku meselesidir."
        },
        neighborSlugs: ["konak", "narlidere", "karabaglar", "gaziemir"],
        relatedBlogSlugs: [
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" }
        ]
    },
    {
        name: "Narlıdere",
        slug: "narlidere",
        description: "Lüks konut projeleri ve yüksek gelir grubunun yaşadığı Narlıdere'de, boşanma davaları genellikle yüksek değerli mal varlığı paylaşımı ve tazminat talepleri etrafında şekillenmektedir.",
        features: ["Yüksek Mal Varlığı", "Lüks Yaşam Standardı", "Tazminat Davaları"],
        neighborhoods: ["Sahilevleri", "Altıevler", "Huzur", "Ilıca", "Yenikale", "Narlı"],
        legalFocus: {
            title: "Yüksek Değerli Mal Varlığı ve Katılma Alacağı",
            detail: "Narlıdere Sahilevleri ve çevresindeki lüks villa ve dairelerin boşanma sürecinde değerlemesi, şirket ortaklıklarının ve yatırım hesaplarının tasfiyesi bölgenin en karmaşık hukuki meselesidir. TMK m. 236 kapsamında katılma alacağının hesaplanmasında bilirkişi raporları ve bağımsız değerleme uzmanları kritik rol üstlenmektedir."
        },
        neighborSlugs: ["balcova", "guzelbahce"],
        relatedBlogSlugs: [
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" }
        ]
    },
    {
        name: "Karabağlar",
        slug: "karabaglar",
        description: "İzmir'in en geniş ve en kalabalık ilçelerinden Karabağlar, farklı sosyoekonomik kesimlerin bir arada yaşadığı bir bölgedir. Kentsel dönüşüm sürecindeki konutların mal paylaşımını zorlaştırması ve ekonomik sıkıntıların aile içi sorunları tetiklemesi boşanma davalarını artırmaktadır.",
        features: ["Kentsel Dönüşüm", "Ekonomik Boşanma", "Nafaka Uyuşmazlıkları"],
        neighborhoods: ["Yeşilyurt", "Bozyaka", "Üçkuyular", "Poligon", "Basın Sitesi", "Limonter", "Bahçelievler"],
        legalFocus: {
            title: "Kentsel Dönüşüm Sürecindeki Konutlarda Boşanma",
            detail: "Karabağlar'da 6306 sayılı Kentsel Dönüşüm Kanunu kapsamında yıkılması planlanan veya yenilenen binalardaki dairelerin boşanma davasında nasıl paylaşılacağı karmaşık bir sorun oluşturmaktadır. Yıkım kararı alınmış binadaki dairenin mevcut değeri mi yoksa yeni yapılacak binadaki hakkı mı esas alınacağı sıklıkla dava konusu olmaktadır."
        },
        neighborSlugs: ["konak", "buca", "gaziemir", "balcova"],
        relatedBlogSlugs: [
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" },
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" }
        ]
    },
    {
        name: "Güzelbahçe",
        slug: "guzelbahce",
        description: "Müstakil yaşamın ve özel kolejlerin merkezi Güzelbahçe, üst gelir grubuna ait ailelerin tercih ettiği sakin bir yerleşim yeridir. Boşanma süreçlerinde müstakil konutların ve arsa paylarının değerlemesi bölgeye özgü bir hukuki mesele oluşturmaktadır.",
        features: ["Müstakil Konut Paylaşımı", "Üst Gelir Grubu", "Arsa Paylaşımı"],
        neighborhoods: ["Yalı", "Siteler", "Maltepe", "Yelki", "Kahramandere", "Çelebi"],
        legalFocus: {
            title: "Müstakil Konut ve Arsa Paylaşımında Değerleme",
            detail: "Güzelbahçe'deki müstakil ev ve arsaların boşanma sürecinde bölünmesi veya satılarak bedelinin paylaşılması sıkça gündeme gelmektedir. TMK m. 226 gereğince taşınmazların aynen taksimi mümkün olmadığında satış yoluyla tasfiye yapılmakta, ancak taraflar arasında taşınmazın güncel piyasa değeri konusunda ihtilaflar yaşanabilmektedir."
        },
        neighborSlugs: ["narlidere", "balcova"],
        relatedBlogSlugs: [
            { slug: "nafaka-hesaplama-yoksulluk-istirak-nafakasi", title: "Nafaka Hesaplama: Yoksulluk ve İştirak Nafakası" },
            { slug: "anlasmali-bosanma-nasil-acilir", title: "Anlaşmalı Boşanma Nasıl Açılır?" },
            { slug: "velayet-davasi-sureci-ve-mahkeme-kriterleri", title: "Velayet Davası Süreci ve Mahkeme Kriterleri" }
        ]
    }
];
