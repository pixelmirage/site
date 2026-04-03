export type GlossaryCategory = "tahliye" | "kira-bedeli" | "sozlesme" | "haklar" | "is-hukuku" | "bosanma" | "tazminat";

export const categoryLabels: Record<GlossaryCategory, string> = {
    tahliye: "Tahliye ve Çıkış Süreçleri",
    "kira-bedeli": "Kira Bedeli ve Artış",
    sozlesme: "Kira Sözleşmesi",
    haklar: "Haklar ve Yükümlülükler",
    "is-hukuku": "İş Hukuku",
    bosanma: "Boşanma ve Aile Hukuku",
    tazminat: "Tazminat Hukuku",
};

export interface GlossaryTerm {
    term: string;
    slug: string;
    shortDescription: string;
    definition: string;
    detailedExplanation: string;
    legalBasis: string;
    category: GlossaryCategory;
    relatedTermSlugs: string[];
    relatedBlogSlugs: string[];
    relatedServiceAnchor?: string;
    youtubeVideoId?: string;
    videoDuration?: string;
    faqs: { question: string; answer: string }[];
    keywords: string[];
    lastUpdated: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Tahliye Taahhütnamesi",
        slug: "tahliye-taahhutnamesi",
        shortDescription: "Kiracının belirli bir tarihte taşınmazı boşaltacağını yazılı olarak taahhüt ettiği hukuki belge. TBK m. 352/1 kapsamında düzenlenir.",
        definition: "Tahliye taahhütnamesi, kiracının kiralanmış taşınmazı belirli bir tarihte boşaltacağını yazılı olarak taahhüt ettiği hukuki belgedir. Türk Borçlar Kanunu m. 352/1 uyarınca, kiralananın tesliminden sonra alınan bu taahhütname ile kiraya veren, taahhüt edilen tarihte tahliye davası açabilir.",
        detailedExplanation: `Tahliye taahhütnamesi, kira hukukunda ev sahibinin en güçlü tahliye araçlarından biridir. TBK m. 352/1'e göre, kiracı kiralananın teslim edilmesinden sonra yazılı olarak belirli bir tarihte taşınmazı boşaltacağını taahhüt etmişse, bu tarih geldiğinde kiraya veren icra takibi başlatabilir veya tahliye davası açabilir.

Taahhütnamenin geçerli olabilmesi için bazı şartların sağlanması gerekir: Taahhüt yazılı olmalıdır, kiralananın tesliminden sonra düzenlenmiş olmalıdır ve belirli bir tahliye tarihi içermelidir. Kira sözleşmesinin imzalandığı tarihte alınan taahhütnameler geçersiz sayılır.

Uygulamada en sık karşılaşılan sorun, taahhütnamenin kira sözleşmesiyle aynı anda imzalanmasıdır. Bu durumda kiracı, baskı altında imzaladığını ileri sürerek taahhütnamenin geçersizliğini iddia edebilir. Noter onaylı taahhütnameler ispat açısından daha güçlüdür.

Taahhüt edilen tarihten itibaren bir ay içinde icra takibi başlatılmalı veya tahliye davası açılmalıdır; aksi halde taahhütname hükmünü yitirir.`,
        legalBasis: "TBK m. 352/1",
        category: "tahliye",
        relatedTermSlugs: ["kira-sozlesmesi", "ihtiyac-nedeniyle-tahliye", "iki-hakli-ihtar"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar"],
        relatedServiceAnchor: "#tahliye",
        youtubeVideoId: "0I5No4QamYA",
        faqs: [
            {
                question: "Tahliye taahhütnamesi ne zaman geçerlidir?",
                answer: "Tahliye taahhütnamesi, kiralananın kiracıya tesliminden sonra düzenlenmiş olmalıdır. Kira sözleşmesiyle aynı anda imzalanan taahhütnameler geçersiz sayılabilir."
            },
            {
                question: "Tahliye taahhütnamesi noter şart mı?",
                answer: "Hayır, noter onayı zorunlu değildir ancak ispat kolaylığı sağlar. Adi yazılı şekilde düzenlenen taahhütname de geçerlidir, ancak kiracı imzayı inkâr ederse ispat güçleşir."
            },
            {
                question: "Taahhütname tarihinde kiracı çıkmazsa ne olur?",
                answer: "Kiraya veren, taahhüt tarihinden itibaren bir ay içinde icra takibi başlatabilir veya sulh hukuk mahkemesinde tahliye davası açabilir."
            }
        ],
        keywords: ["tahliye taahhütnamesi nedir", "tahliye taahhütnamesi örneği", "tahliye taahhütnamesi geçerlilik şartları", "tahliye taahhütnamesi noter"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Kira Tespit Davası",
        slug: "kira-tespit-davasi",
        shortDescription: "Kira bedelinin güncel rayiçlere uygun olarak mahkeme tarafından yeniden belirlenmesini amaçlayan dava türü.",
        definition: "Kira tespit davası, kira bedelinin güncel piyasa koşullarına uygun olarak mahkeme tarafından yeniden belirlenmesini sağlayan hukuki süreçtir. TBK m. 344 uyarınca, beş yıldan uzun süreli kira ilişkilerinde taraflardan biri hakkaniyete uygun kira bedeli tespiti için dava açabilir.",
        detailedExplanation: `Kira tespit davası, özellikle uzun süreli kira ilişkilerinde kira bedelinin piyasa değerinin çok altında veya üstünde kalması durumunda başvurulan önemli bir hukuki yoldur.

TBK m. 344'e göre, kira süresi beş yılı aşmışsa veya beş yıldan sonra yenilenen kira dönemlerinde, mahkeme tüketici fiyat endeksindeki artış oranı, kiralananın durumu ve emsal kira bedelleri gibi faktörleri göz önünde bulundurarak hakkaniyete uygun bir kira bedeli belirler.

Dava, yeni kira döneminin başlangıcından en az otuz gün önce açılmalı veya bu süre içinde yazılı bildirimde bulunulmalıdır. Aksi halde belirlenen kira bedeli bir sonraki kira yılı için geçerli olur.

İzmir'de kira tespit davaları, özellikle Karşıyaka, Bornova ve Bayraklı gibi kira artışının yüksek olduğu bölgelerde sıkça açılmaktadır. Mahkeme, bilirkişi raporu ve emsal araştırması yaptırarak karar verir.`,
        legalBasis: "TBK m. 344",
        category: "kira-bedeli",
        relatedTermSlugs: ["kira-artis-orani", "kira-uyarlama-davasi", "kira-sozlesmesi"],
        relatedBlogSlugs: ["hangi-durumlarda-kira-tespit-davasi-acilabilir"],
        relatedServiceAnchor: "#kira",
        youtubeVideoId: "7mChnFfudwY",
        faqs: [
            {
                question: "Kira tespit davası ne zaman açılabilir?",
                answer: "Beş yıldan uzun süreli kira ilişkilerinde, yeni kira döneminin başlangıcından en az 30 gün önce açılabilir. İlk beş yıl için TÜFE sınırı uygulanır."
            },
            {
                question: "Kira tespit davasını kimler açabilir?",
                answer: "Hem kiraya veren (ev sahibi) hem de kiracı kira tespit davası açabilir. Ancak pratikte genellikle kira bedelini artırmak isteyen ev sahipleri tarafından açılmaktadır."
            },
            {
                question: "Kira tespit davası ne kadar sürer?",
                answer: "Ortalama 6 ay ile 1 yıl arasında sürmektedir. Bilirkişi incelemesi ve emsal araştırması süreyi etkileyebilir."
            }
        ],
        keywords: ["kira tespit davası nedir", "kira tespit davası nasıl açılır", "kira tespit davası süresi", "kira bedeli tespiti"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "İhtiyaç Nedeniyle Tahliye",
        slug: "ihtiyac-nedeniyle-tahliye",
        shortDescription: "Kiraya verenin kendisi veya yakınlarının konut/işyeri ihtiyacı nedeniyle kiracının tahliyesini talep etmesi.",
        definition: "İhtiyaç nedeniyle tahliye, kiraya verenin kendisinin, eşinin, altsoyunun, üstsoyunun veya kanun gereği bakmakla yükümlü olduğu kişilerin konut ya da işyeri gereksinimi sebebiyle kiracının tahliyesini talep ettiği dava türüdür. TBK m. 350 uyarınca, ihtiyacın gerçek, samimi ve zorunlu olması gerekir.",
        detailedExplanation: `İhtiyaç nedeniyle tahliye davası, ev sahiplerinin en sık başvurduğu tahliye yollarından biridir. TBK m. 350'ye göre kiraya veren, kendisinin, eşinin, altsoyunun, üstsoyunun veya kanun gereği bakmakla yükümlü olduğu diğer kişilerin konut ya da işyeri gereksinimi sebebiyle tahliye davası açabilir.

Mahkemenin tahliye kararı verebilmesi için ihtiyacın gerçek, samimi ve zorunlu olması gerekir. Soyut veya gelecekte doğması muhtemel ihtiyaçlar kabul edilmez. Ayrıca kiraya verenin aynı bölgede boş bir taşınmazının bulunmaması önemli bir kriterdir.

Belirli süreli kira sözleşmelerinde süre sonunda, belirsiz süreli sözleşmelerde ise fesih dönemine ve fesih bildirimi süresine uyularak dava açılabilir. Dava süresinde kiracı taşınmazı kullanmaya devam eder.

Tahliye gerçekleştikten sonra, kiraya veren üç yıl süreyle taşınmazı eski kiracısından başka birine kiralayamaz. Bu kurala uyulmaması halinde eski kiracıya tazminat ödenmesi gerekir.`,
        legalBasis: "TBK m. 350",
        category: "tahliye",
        relatedTermSlugs: ["tahliye-taahhutnamesi", "10-yillik-uzama-suresi", "kiraci-haklari"],
        relatedBlogSlugs: ["ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir"],
        relatedServiceAnchor: "#tahliye",
        youtubeVideoId: "KrgeQm3tm_Q",
        faqs: [
            {
                question: "İhtiyaç nedeniyle tahliye davası şartları nelerdir?",
                answer: "İhtiyacın gerçek, samimi ve zorunlu olması, kiraya verenin aynı bölgede boş taşınmazının bulunmaması ve yasal sürelere uyularak dava açılması gerekir."
            },
            {
                question: "Tahliye sonrası taşınmazı başkasına kiralayabilir miyim?",
                answer: "Hayır, tahliye tarihinden itibaren üç yıl süreyle eski kiracıdan başka birine kiralayamazsınız. Aksi halde bir yıllık kira bedeli tutarında tazminat ödemeniz gerekebilir."
            },
            {
                question: "İhtiyaç nedeniyle tahliye davası ne kadar sürer?",
                answer: "Ortalama 6 ay ile 1,5 yıl arasında sürebilir. Mahkeme ihtiyacın gerçekliğini araştırır ve delilleri değerlendirir."
            }
        ],
        keywords: ["ihtiyaç nedeniyle tahliye nedir", "ihtiyaç nedeniyle tahliye davası şartları", "ihtiyaç nedeniyle tahliye süresi"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Zorunlu Arabuluculuk",
        slug: "zorunlu-arabuluculuk",
        shortDescription: "Kira uyuşmazlıklarında dava açmadan önce başvurulması zorunlu olan alternatif çözüm yöntemi. 7445 sayılı Kanun ile 2023'ten itibaren uygulanır.",
        definition: "Zorunlu arabuluculuk, 7445 sayılı Kanun ile 1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açmadan önce başvurulması zorunlu tutulan alternatif uyuşmazlık çözüm yöntemidir. Arabuluculuğa başvurulmadan açılan davalar usulden reddedilir.",
        detailedExplanation: `7445 sayılı Kanun ile getirilen düzenleme uyarınca, 1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan uyuşmazlıklarda (tahliye davaları dahil) dava açmadan önce arabulucuya başvurulması zorunlu hale gelmiştir.

Arabuluculuk süreci, tarafların bir arabulucu huzurunda müzakere ederek anlaşmaya varmalarını amaçlar. Süreç ortalama 2-4 hafta içinde tamamlanır. Anlaşma sağlanırsa düzenlenen tutanak ilam niteliğindedir ve mahkeme kararı gibi icra edilebilir.

Arabuluculukta anlaşma sağlanamazsa, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde dava açılmalıdır. Arabuluculuk son tutanağı dava dilekçesine eklenmek zorundadır.

İzmir'de arabuluculuk başvuruları İzmir Adliyesi Arabuluculuk Bürosu üzerinden yapılmaktadır. Başvuru, uyuşmazlığın konusuna göre yetkili adliyeye veya karşı tarafın yerleşim yerindeki adliyeye yapılabilir.`,
        legalBasis: "7445 sayılı Kanun",
        category: "haklar",
        relatedTermSlugs: ["kira-tespit-davasi", "ihtiyac-nedeniyle-tahliye", "iki-hakli-ihtar"],
        relatedBlogSlugs: ["kira-hukukunda-zorunlu-arabuluculuk-sureci"],
        relatedServiceAnchor: "#tahliye",
        faqs: [
            {
                question: "Kira davası öncesi arabuluculuk zorunlu mu?",
                answer: "Evet, 1 Eylül 2023 tarihinden itibaren kira ilişkisinden kaynaklanan tüm uyuşmazlıklarda (tahliye, kira tespiti, kira alacağı vb.) dava açmadan önce arabulucuya başvurulması zorunludur."
            },
            {
                question: "Arabuluculuk süreci ne kadar sürer?",
                answer: "Arabuluculuk görüşmeleri genellikle 2-4 hafta içinde sonuçlanır. Tarafların anlaşamaması halinde son tutanak düzenlenir ve dava açma hakkı doğar."
            },
            {
                question: "Arabuluculukta anlaşma sağlanırsa ne olur?",
                answer: "Anlaşma belgesi ilam niteliğinde sayılır ve mahkeme kararı gibi icra edilebilir. Ayrıca dava açmaya gerek kalmaz."
            }
        ],
        keywords: ["zorunlu arabuluculuk nedir", "kira arabuluculuk", "arabuluculuk süreci", "kira davası arabuluculuk"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "İki Haklı İhtar",
        slug: "iki-hakli-ihtar",
        shortDescription: "Kiracının bir kira yılı içinde iki kez kira bedelini geç ödemesi sebebiyle açılan tahliye davası. TBK m. 352/2 hükmüne dayanır.",
        definition: "İki haklı ihtar, kiracının bir kira yılı veya bir kira yılını aşan süre içinde kira bedelini ödememesi nedeniyle kendisine yazılı olarak iki haklı ihtarda bulunulmasına dayanılarak açılan tahliye davası türüdür. TBK m. 352/2 uyarınca, kira süresinin veya yenileme döneminin sonunda bir ay içinde dava açılabilir.",
        detailedExplanation: `İki haklı ihtar yoluyla tahliye, kiracının kira ödeme yükümlülüğünü düzenli olarak yerine getirmemesi halinde başvurulan bir tahliye yoludur.

TBK m. 352/2'ye göre, kiracı bir yıldan kısa süreli kira sözleşmelerinde kira süresi içinde, bir yıl ve daha uzun süreli kira sözleşmelerinde ise bir kira yılı veya bir kira yılını aşan süre içinde kira bedelini ödemediği için kendisine yazılı olarak iki haklı ihtarda bulunulmasına sebep olmuşsa, kira süresinin veya bir yıldan uzun süreli kira sözleşmelerinde ihtarların yapıldığı kira yılının bitiminden başlayarak bir ay içinde tahliye davası açılabilir.

İhtarların haklı olması için kiracının ödeme gününde veya makul süre içinde ödeme yapmamış olması ve ihtarın noterden veya yazılı olarak yapılmış olması gerekir. İhtarlar farklı aylara ait kira bedelleri için yapılmalıdır.

İki haklı ihtar biriktiğinde, kiraya veren kira yılının sonunda tahliye davası açma hakkına sahip olur. İhtarların aynı kira yılı içinde gerçekleşmesi önemlidir.`,
        legalBasis: "TBK m. 352/2",
        category: "tahliye",
        relatedTermSlugs: ["tahliye-taahhutnamesi", "kira-sozlesmesi", "kiraci-haklari"],
        relatedBlogSlugs: ["kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir", "ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir"],
        relatedServiceAnchor: "#tahliye",
        youtubeVideoId: "r-MYOrgjhYI",
        faqs: [
            {
                question: "İki haklı ihtar ile tahliye nasıl yapılır?",
                answer: "Bir kira yılı içinde kiracıya iki ayrı ay için yazılı ihtar gönderilmesi ve kira yılının bitiminden itibaren bir ay içinde tahliye davası açılması gerekir."
            },
            {
                question: "İhtarların noter aracılığıyla yapılması zorunlu mu?",
                answer: "Zorunlu değildir ancak ispat açısından noter aracılığıyla yapılması kesinlikle tavsiye edilir. Adi yazılı ihtar da geçerlidir ancak tebliğ ispatı güçleşir."
            },
            {
                question: "Aynı aya ait iki ihtar geçerli mi?",
                answer: "Hayır, iki ihtarın farklı aylara ait kira bedellerinin ödenmemesi sebebiyle yapılmış olması gerekir."
            }
        ],
        keywords: ["iki haklı ihtar nedir", "iki haklı ihtar ile tahliye", "iki haklı ihtar şartları", "kiracı iki haklı ihtar"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Kira Sözleşmesi",
        slug: "kira-sozlesmesi",
        shortDescription: "Kiraya verenin taşınmazı kullanıma bırakmasını, kiracının da kira bedeli ödemesini düzenleyen sözleşme.",
        definition: "Kira sözleşmesi, kiraya verenin bir şeyin kullanılmasını veya kullanılmasıyla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kararlaştırılan kira bedelini ödemeyi üstlendiği sözleşmedir. TBK m. 299 ve devamı maddelerinde düzenlenmiştir.",
        detailedExplanation: `Kira sözleşmesi, Türk Borçlar Kanunu'nun 299. maddesi ve devamında düzenlenen, tarafların karşılıklı hak ve yükümlülüklerini belirleyen iki tarafa borç yükleyen bir sözleşmedir.

Konut ve çatılı işyeri kiralarında kiracıyı koruyan emredici hükümler uygulanır. Bu hükümlere göre kiracı aleyhine düzenleme yapılamaz. Kira süresi, kira bedeli, depozito, aidat ve yan giderler, tahliye koşulları gibi hususlar sözleşmede açıkça belirtilmelidir.

Kira sözleşmesi yazılı şekil şartına tabi değildir; sözlü olarak da kurulabilir. Ancak ispat güçlüğü yaşanmaması için yazılı yapılması önemle tavsiye edilir.

Belirli süreli kira sözleşmeleri süre sonunda kiracı tarafından kendiliğinden sona ermez. Kiracı bildirimde bulunmadıkça sözleşme aynı koşullarla bir yıl daha uzar. Bu durum kiracı lehine emredici bir hüküm olup aksine sözleşme yapılamaz.`,
        legalBasis: "TBK m. 299-378",
        category: "sozlesme",
        relatedTermSlugs: ["depozito", "kira-artis-orani", "tahliye-taahhutnamesi"],
        relatedBlogSlugs: ["isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", "ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", "kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec"],
        relatedServiceAnchor: "#gayrimenkul",
        faqs: [
            {
                question: "Kira sözleşmesi yazılı olmak zorunda mı?",
                answer: "Hayır, kira sözleşmesi sözlü olarak da geçerlidir. Ancak uyuşmazlık durumunda ispat güçlüğü yaşanmaması için yazılı yapılması kesinlikle tavsiye edilir."
            },
            {
                question: "Kira sözleşmesi süresi bitince kiracı çıkmak zorunda mı?",
                answer: "Hayır, konut ve çatılı işyeri kiralarında süre bitimi tek başına tahliye sebebi değildir. Kiracı bildirimde bulunmadıkça sözleşme aynı koşullarla bir yıl uzar."
            },
            {
                question: "Kira sözleşmesinde hangi hükümler geçersizdir?",
                answer: "Kiracı aleyhine düzenleme getiren, kiracının haklarını sınırlayan ve kanunun emredici hükümlerine aykırı olan maddeler geçersizdir."
            }
        ],
        keywords: ["kira sözleşmesi nedir", "kira sözleşmesi örneği", "kira sözleşmesi nasıl yapılır", "kira kontratı"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Depozito",
        slug: "depozito",
        shortDescription: "Kiracının kira sözleşmesi başlangıcında güvence olarak ödediği teminat bedeli. TBK m. 342'ye göre en fazla üç aylık kira tutarı olabilir.",
        definition: "Depozito (güvence bedeli), kiracının kira sözleşmesinin başlangıcında kiraya verene olası zararları karşılamak amacıyla verdiği teminat bedelidir. TBK m. 342'ye göre, konut ve çatılı işyeri kiralarında güvence bedeli üç aylık kira bedelini aşamaz ve kiracının bankada açılacak vadeli bir hesaba yatırılması gerekir.",
        detailedExplanation: `Depozito, kira ilişkisinin başlangıcında kiracı tarafından ödenen ve kira sözleşmesinin sona ermesinde iade edilen güvence bedelidir.

TBK m. 342 uyarınca, konut ve çatılı işyeri kiralarında güvence bedeli üç aylık kira bedelini geçemez. Para olarak verilen güvence, kiraya verenin onayı olmaksızın kiracı tarafından çekilemeyecek şekilde vadeli bir tasarruf hesabına yatırılmalıdır.

Kira sözleşmesi sona erdiğinde, kiraya veren güvence bedeli üzerinde hak iddia ediyorsa (hasar, ödenmeyen kira vb.) kiracının rızasını almalı veya icra takibi başlatmalıdır. Kiraya veren hak iddia etmezse, kiracı bankadan güvence bedelini geri alabilir.

Uygulamada depozito genellikle elden verilmekte, bu durum iade aşamasında ispat sorunlarına yol açmaktadır. Banka aracılığıyla yapılması hem kiracıyı hem kiraya vereni korur.`,
        legalBasis: "TBK m. 342",
        category: "sozlesme",
        relatedTermSlugs: ["kira-sozlesmesi", "kiraci-haklari", "kira-artis-orani"],
        relatedBlogSlugs: ["isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", "depozito-iadesi-davasi-kiracinin-haklari-ve-surec"],
        relatedServiceAnchor: "#gayrimenkul",
        youtubeVideoId: "oY99NMJ2oo0",
        faqs: [
            {
                question: "Depozito en fazla kaç aylık kira bedeli olabilir?",
                answer: "Konut ve çatılı işyeri kiralarında depozito (güvence bedeli) en fazla üç aylık kira bedeli tutarında olabilir. Bunu aşan kısım geçersizdir."
            },
            {
                question: "Depozito nasıl iade edilir?",
                answer: "Kira sözleşmesi sona erdiğinde, taşınmaz hasarsız teslim edilmişse ve kira borcu yoksa depozito kiracıya iade edilmelidir. Anlaşmazlık halinde mahkeme yoluyla tahsil edilebilir."
            },
            {
                question: "Depozito bankaya yatırılmak zorunda mı?",
                answer: "Evet, TBK'ya göre para olarak verilen depozito vadeli bir tasarruf hesabına yatırılmalıdır. Ancak uygulamada bu kurala çoğunlukla uyulmamaktadır."
            }
        ],
        keywords: ["depozito nedir", "kira depozito iade", "depozito kaç aylık kira", "güvence bedeli"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Kira Artış Oranı",
        slug: "kira-artis-orani",
        shortDescription: "Kira bedelinin yıllık yenilenmesinde uygulanabilecek azami artış oranını belirleyen yasal sınır. TBK m. 344 uyarınca TÜFE oranıyla sınırlıdır.",
        definition: "Kira artış oranı, konut kiralarında yıllık kira yenilemesinde uygulanabilecek azami artış oranıdır. TBK m. 344'e göre, taraflar arasında kira artışına ilişkin anlaşma yapılmışsa bile bu artış bir önceki kira yılında tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalardaki değişim oranını geçemez.",
        detailedExplanation: `Kira artış oranı, kiracıları aşırı kira artışlarından koruyan önemli bir yasal düzenlemedir. TBK m. 344 uyarınca, konut kiralarında yıllık artış oranı TÜFE on iki aylık ortalamasını geçemez.

Bu sınırlama ilk beş yıl için mutlak olarak uygulanır. Beş yıldan sonra ise kira tespit davası yoluyla hâkim tarafından hakkaniyete uygun bir kira bedeli belirlenebilir. Bu durumda TÜFE sınırı uygulanmaz.

TBK m. 344 kapsamındaki TÜFE sınırlaması hem konut hem de çatılı işyeri kiraları için geçerlidir. İşyeri kiralarında da kira artışı bir önceki kira yılındaki TÜFE oranını geçemez.

2024 yılında sona eren %25 kira artış tavanı sonrasında, 2025 ve 2026 yıllarında yeniden TÜFE oranı üst sınır olarak uygulanmaktadır. Güncel TÜFE oranları TÜİK tarafından aylık olarak açıklanmaktadır.`,
        legalBasis: "TBK m. 344",
        category: "kira-bedeli",
        relatedTermSlugs: ["kira-tespit-davasi", "kira-uyarlama-davasi", "kira-sozlesmesi"],
        relatedBlogSlugs: ["isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar", "hangi-durumlarda-kira-tespit-davasi-acilabilir"],
        relatedServiceAnchor: "#kira",
        youtubeVideoId: "1ylsHk_vUH4",
        faqs: [
            {
                question: "Kira artış oranı nasıl hesaplanır?",
                answer: "Konut kiralarında artış oranı, TÜİK tarafından açıklanan TÜFE on iki aylık ortalamalardaki değişim oranına göre belirlenir. Kira artış hesaplama aracımızı kullanarak güncel oranı öğrenebilirsiniz."
            },
            {
                question: "Ev sahibi TÜFE'den fazla kira artışı yapabilir mi?",
                answer: "İlk beş yıl için hayır, yasal üst sınır TÜFE on iki aylık ortalamasıdır. Beş yıldan sonra kira tespit davası yoluyla mahkeme farklı bir oran belirleyebilir."
            },
            {
                question: "İşyeri kiralarında da TÜFE sınırı var mı?",
                answer: "Evet, TBK m. 344 kapsamında TÜFE artış sınırı hem konut hem de çatılı işyeri kiraları için geçerlidir. Her iki kira türünde de artış oranı bir önceki kira yılındaki TÜFE oranını geçemez."
            }
        ],
        keywords: ["kira artış oranı nedir", "kira artış oranı hesaplama", "TÜFE kira artış oranı", "kira zam oranı 2026"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Kira Uyarlama Davası",
        slug: "kira-uyarlama-davasi",
        shortDescription: "Olağanüstü koşullar nedeniyle kira bedelinin değişen şartlara uyarlanmasını talep eden dava. TBK m. 138 aşırı ifa güçlüğü hükmüne dayanır.",
        definition: "Kira uyarlama davası, sözleşmenin kurulmasından sonra ortaya çıkan olağanüstü durumlar (ekonomik kriz, aşırı enflasyon, pandemi vb.) nedeniyle kira bedelinin veya sözleşme koşullarının değişen şartlara uyarlanmasını talep eden dava türüdür. TBK m. 138 (aşırı ifa güçlüğü) hükmüne dayanır.",
        detailedExplanation: `Kira uyarlama davası, olağanüstü koşullar sebebiyle kira ilişkisinin taraflarından biri için sözleşmeye devam etmenin çekilmez hale geldiği durumlarda başvurulan hukuki yoldur.

TBK m. 138'e göre, sözleşmenin yapıldığı sırada taraflarca öngörülmeyen ve öngörülmesi beklenmeyen olağanüstü bir durumun ortaya çıkması halinde, borçlu hâkimden sözleşmenin yeni koşullara uyarlanmasını isteyebilir.

Kira uyarlama davası ile kira tespit davasının farkı önemlidir: Kira tespit davası beş yıldan uzun kira ilişkilerinde rutin bedel belirlemeye yöneliktir. Uyarlama davası ise olağanüstü koşullar gerektirir ve süre şartı yoktur.

Türkiye'de yaşanan yüksek enflasyon dönemlerinde, özellikle uzun süreli işyeri kira sözleşmelerinde uyarlama davaları büyük önem kazanmıştır. Kiracılar aşırı artan kira bedellerinin indirilmesini, ev sahipleri ise piyasanın çok altında kalan kira bedellerinin artırılmasını talep edebilmektedir.`,
        legalBasis: "TBK m. 138",
        category: "kira-bedeli",
        relatedTermSlugs: ["kira-tespit-davasi", "kira-artis-orani", "kira-sozlesmesi"],
        relatedBlogSlugs: [],
        relatedServiceAnchor: "#kira",
        faqs: [
            {
                question: "Kira uyarlama davası ile kira tespit davası arasındaki fark nedir?",
                answer: "Kira tespit davası 5 yıldan uzun kira ilişkilerinde bedel tespiti için açılır. Uyarlama davası ise süre şartı olmaksızın olağanüstü koşullar (aşırı enflasyon, ekonomik kriz) nedeniyle açılabilir."
            },
            {
                question: "Kiracı kira uyarlama davası açabilir mi?",
                answer: "Evet, hem kiracı hem de kiraya veren kira uyarlama davası açabilir. Kiracı kira bedelinin indirilmesini, kiraya veren ise artırılmasını talep edebilir."
            },
            {
                question: "Kira uyarlama davası geriye dönük uygulanır mı?",
                answer: "Kural olarak uyarlama kararı dava tarihinden itibaren geçerlidir, geriye dönük uygulanmaz."
            }
        ],
        keywords: ["kira uyarlama davası nedir", "kira uyarlama davası şartları", "aşırı ifa güçlüğü kira"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Fuzuli İşgal",
        slug: "fuzuli-isgal",
        shortDescription: "Hukuki bir hakka dayanmaksızın bir taşınmazı kullanma veya işgal etme durumu. Fuzuli işgalci ecrimisil tazminatı ödemekle yükümlüdür.",
        definition: "Fuzuli işgal, bir kişinin herhangi bir hukuki hakka (kira sözleşmesi, mülkiyet, intifa hakkı vb.) dayanmaksızın bir taşınmazı kullanması veya işgal etmesidir. Kira sözleşmesi sona erdikten sonra taşınmazı boşaltmayan kiracı da fuzuli işgalci konumuna düşer ve ecrimisil (haksız işgal tazminatı) ödemekle yükümlü olabilir.",
        detailedExplanation: `Fuzuli işgal, mülkiyet hakkının korunması açısından önemli bir hukuki kavramdır. Bir taşınmazı herhangi bir hukuki dayanağı olmadan kullanan kişi fuzuli işgalci (fuzuli şagil) olarak nitelendirilir.

Kira hukukunda fuzuli işgal durumu en sık şu hallerde ortaya çıkar: Kira sözleşmesinin sona ermesine rağmen taşınmazı boşaltmayan kiracılar, sözleşme yapılmadan taşınmazı kullanan kişiler ve kira sözleşmesi feshedildikten sonra taşınmazda kalmaya devam eden kiracılar.

Fuzuli işgal halinde mülk sahibi, işgalciden ecrimisil (haksız işgal tazminatı) talep edebilir. Ecrimisil, taşınmazın emsal kira bedelinin üzerinde bir bedel olarak belirlenebilir. Ayrıca elatmanın önlenmesi (müdahalenin men'i) davası açılarak taşınmazın tahliyesi sağlanabilir.

Fuzuli işgalci, iyiniyetli veya kötüniyetli olmasına göre farklı hukuki sonuçlarla karşılaşır. Kötüniyetli işgalciden daha yüksek tazminat talep edilebilir.`,
        legalBasis: "TMK m. 683, TBK m. 77",
        category: "tahliye",
        relatedTermSlugs: ["ihtiyac-nedeniyle-tahliye", "kira-sozlesmesi", "kiraci-haklari"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir"],
        relatedServiceAnchor: "#tahliye",
        youtubeVideoId: "zXHqOaEiklI",
        faqs: [
            {
                question: "Fuzuli işgal nedir?",
                answer: "Hukuki bir hakka dayanmadan bir taşınmazı kullanma durumudur. Kira sözleşmesi biten kiracı da taşınmazı boşaltmazsa fuzuli işgalci sayılır."
            },
            {
                question: "Ecrimisil nedir ve nasıl hesaplanır?",
                answer: "Ecrimisil, fuzuli işgal nedeniyle ödenen haksız işgal tazminatıdır. Taşınmazın emsal kira bedeli esas alınarak bilirkişi tarafından hesaplanır."
            },
            {
                question: "Fuzuli işgalciyi nasıl çıkarabilirim?",
                answer: "Elatmanın önlenmesi (müdahalenin men'i) davası açarak ve gerekirse ecrimisil talep ederek taşınmazın tahliyesini sağlayabilirsiniz."
            }
        ],
        keywords: ["fuzuli işgal nedir", "ecrimisil nedir", "haksız işgal tazminatı", "fuzuli şagil"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "10 Yıllık Uzama Süresi",
        slug: "10-yillik-uzama-suresi",
        shortDescription: "Kira sözleşmesinin on yıllık uzama süresini doldurmasının ardından kiraya verene tanınan fesih hakkı.",
        definition: "10 yıllık uzama süresi, TBK m. 347 uyarınca konut ve çatılı işyeri kiralarında, kiraya verenin herhangi bir gerekçe göstermeksizin kira sözleşmesini feshedebileceği süreyi ifade eder. On yıllık uzama süresinin sonunda kiraya veren, üç ay önceden yazılı bildirimde bulunarak sözleşmeyi sona erdirebilir.",
        detailedExplanation: `TBK m. 347'ye göre, konut ve çatılı işyeri kiralarında kiracı, belirli süreli sözleşmenin süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça sözleşme aynı koşullarla bir yıl uzar. Kiraya veren ise süre bitimi nedeniyle sözleşmeyi sona erdiremez.

Ancak on yıllık uzama süresinin sonunda kiraya veren, herhangi bir sebep göstermeksizin üç ay önceden yazılı fesih bildiriminde bulunarak sözleşmeyi sona erdirebilir. Bu, kiraya verenin en önemli tahliye haklarından biridir.

Süre hesaplamasında, sözleşmede belirtilen sürenin bitiminden itibaren on yıl hesaplanır. Örneğin, 1 yıllık kira sözleşmesi 2015 yılında başlamışsa, 2016'da ilk yıl dolmuş ve 2026'da on yıllık uzama süresi dolmuş olur.

İzmir'de özellikle Alsancak, Karşıyaka ve Konak gibi eski yerleşim bölgelerinde on yıllık süreyi dolduran çok sayıda kira ilişkisi bulunmaktadır. Bu nedenle on yıl nedeniyle tahliye davaları giderek artmaktadır.`,
        legalBasis: "TBK m. 347",
        category: "tahliye",
        relatedTermSlugs: ["ihtiyac-nedeniyle-tahliye", "kira-sozlesmesi", "kira-tespit-davasi"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir"],
        relatedServiceAnchor: "#tahliye",
        youtubeVideoId: "CNK9e52vzlo",
        faqs: [
            {
                question: "10 yıllık uzama süresi nasıl hesaplanır?",
                answer: "Sözleşmede belirtilen sürenin bitiminden itibaren on yıl hesaplanır. Örneğin 1 yıllık sözleşme 2015'te başladıysa, süre 2016'da dolmuş, on yıllık uzama 2026'da dolmuş olur."
            },
            {
                question: "10 yıl dolunca kiracı otomatik olarak çıkarılır mı?",
                answer: "Hayır, kiraya verenin uzama süresinin bitiminden en az üç ay önce yazılı fesih bildiriminde bulunması gerekir. Bildirim yapılmazsa sözleşme uzamaya devam eder."
            },
            {
                question: "10 yıllık süre dolmadan tahliye mümkün mü?",
                answer: "Evet, ihtiyaç nedeniyle tahliye, tahliye taahhütnamesi, iki haklı ihtar gibi diğer yasal tahliye sebepleri 10 yıldan önce de kullanılabilir."
            }
        ],
        keywords: ["10 yıllık uzama süresi nedir", "kira 10 yıl tahliye", "10 yıllık kiracı hakları", "TBK 347"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Kiracı Hakları",
        slug: "kiraci-haklari",
        shortDescription: "Türk Borçlar Kanunu tarafından konut ve çatılı işyeri kiracılarına tanınan yasal koruma ve haklar. Kira artış sınırı ve tahliye güvencesi içerir.",
        definition: "Kiracı hakları, Türk Borçlar Kanunu'nun konut ve çatılı işyeri kiralarına ilişkin emredici hükümleri kapsamında kiracıya tanınan yasal koruma ve haklardır. Bu haklar arasında kira bedelinde TÜFE sınırı, sözleşme süresinin bitiminde otomatik uzama, tahliye sebeplerinin sınırlı sayıda olması ve depozito güvencesi yer almaktadır.",
        detailedExplanation: `Türk hukuk sisteminde kiracı, konut ve çatılı işyeri kiralarında güçlü bir şekilde korunmaktadır. Bu koruma, TBK'nın emredici hükümlerinden kaynaklanır ve taraflar anlaşsa bile kiracı aleyhine değiştirilemez.

Kiracının temel hakları şunlardır: Kira sözleşmesinin süre bitiminde kendiliğinden sona ermemesi (TBK m. 347), kira artışında TÜFE sınırı (TBK m. 344), tahliye sebeplerinin kanunda sınırlı sayıda belirlenmiş olması, depozitonun üç aylık kira ile sınırlandırılması (TBK m. 342) ve kiralananın ayıplarının giderilmesini talep hakkı.

Kiracı, kira sözleşmesinde kendi aleyhine düzenlenen hükümleri geçersiz sayabilir. Örneğin, cezai şart, erken tahliye tazminatı gibi kiracı aleyhine hükümler kural olarak geçersizdir.

Kiracının yükümlülükleri ise kira bedelini zamanında ödeme, kiralananı özenle kullanma, komşulara saygı gösterme ve sözleşme koşullarına uyma olarak özetlenebilir. Bu yükümlülüklere aykırılık, tahliye sebebi oluşturabilir.`,
        legalBasis: "TBK m. 339-356",
        category: "haklar",
        relatedTermSlugs: ["kira-sozlesmesi", "depozito", "kira-artis-orani", "10-yillik-uzama-suresi"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", "hangi-durumlarda-kira-tespit-davasi-acilabilir", "kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec", "depozito-iadesi-davasi-kiracinin-haklari-ve-surec"],
        relatedServiceAnchor: "#kira",
        youtubeVideoId: "UJ35T2zOXH0",
        faqs: [
            {
                question: "Kiracı hangi durumlarda tahliye edilemez?",
                answer: "Kanunda belirtilen tahliye sebepleri (ihtiyaç, taahhütname, iki haklı ihtar, yeniden inşa vb.) dışında kiracı tahliye edilemez. Süre bitimi tek başına tahliye sebebi değildir."
            },
            {
                question: "Ev sahibi kiracıyı keyfi olarak çıkarabilir mi?",
                answer: "Hayır, kiraya veren ancak kanunda belirtilen sebeplerle ve yasal prosedürlere uyarak tahliye talep edebilir. Zorla tahliye girişimi suç teşkil eder."
            },
            {
                question: "Kiracının hakları nelerdir?",
                answer: "Kira artışında TÜFE sınırı, süre bitiminde otomatik uzama, depozito güvencesi, ayıp giderme talep hakkı ve tahliye sebeplerinin sınırlı sayıda olması temel haklardır."
            }
        ],
        keywords: ["kiracı hakları nedir", "kiracı hakları 2026", "kiracı tahliye edilemez mi", "kiracı korunması"],
        lastUpdated: "2026-03-04",
    },

    // ═══════════════════════════════════════
    // İŞ HUKUKU TERİMLERİ
    // ═══════════════════════════════════════
    {
        term: "Kıdem Tazminatı",
        slug: "kidem-tazminati",
        shortDescription: "En az 1 yıl çalışan işçiye her tam yıl için 30 günlük giydirilmiş brüt ücret üzerinden ödenen tazminat.",
        definition: "Kıdem tazminatı, aynı işverene en az 1 yıl çalışmış olan işçiye, iş sözleşmesinin belirli koşullar altında sona ermesi halinde her tam çalışma yılı için 30 günlük giydirilmiş brüt ücret üzerinden ödenen tazminattır. 1475 sayılı (eski) İş Kanunu m. 14 kapsamında düzenlenmiştir.",
        detailedExplanation: `Kıdem tazminatı, Türk iş hukukunun işçiyi koruyan en önemli kurumlarından biridir. İşçinin çalıştığı süreye oranla hesaplanan bu tazminat, iş sözleşmesinin belirli koşullar altında sona ermesi halinde ödenir.

Kıdem tazminatına hak kazanmak için işçinin aynı işverene en az 1 yıl çalışmış olması ve iş sözleşmesinin işveren tarafından feshedilmesi, işçinin haklı nedenle feshi, emeklilik, askerlik veya kadın işçinin evlenmesi gibi nedenlerle sona ermesi gerekir.

Hesaplamada giydirilmiş brüt ücret esas alınır. Yemek, yol, düzenli prim gibi sürekli ödemeler giydirilmiş ücrete dahil edilir. Her yıl için hesaplanan tutar, kıdem tazminatı tavanını aşamaz.

İstifa eden işçi kural olarak kıdem tazminatı alamaz. Ancak haklı nedenle fesih (ücret ödenmemesi, mobbing, SGK primlerinin eksik yatırılması vb.) halinde istifa eden işçi de kıdem tazminatına hak kazanır.`,
        legalBasis: "1475 sayılı İK m. 14",
        category: "is-hukuku",
        relatedTermSlugs: ["ihbar-tazminati", "hakli-fesih", "ise-iade-davasi"],
        relatedBlogSlugs: ["kidem-tazminati-nasil-hesaplanir", "isten-cikarildiginda-ne-yapmali", "ise-iade-davasi-sartlari-ve-arabuluculuk-sureci", "is-kazasi-tazminati-sureci-ve-haklariniz", "ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari", "fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "Kıdem tazminatı nasıl hesaplanır?",
                answer: "Her tam çalışma yılı için 30 günlük giydirilmiş brüt ücret ödenir. Kısmi yıllar orantılı hesaplanır. Giydirilmiş ücrete yemek, yol, düzenli prim gibi kalemler dahildir."
            },
            {
                question: "İstifa eden işçi kıdem tazminatı alabilir mi?",
                answer: "Kural olarak hayır. Ancak haklı nedenle fesih (ücret ödenmemesi, mobbing, SGK eksikliği) halinde, askerlik, evlilik veya emeklilik nedeniyle ayrılanlar kıdem tazminatı alabilir."
            },
            {
                question: "Kıdem tazminatı tavanı nedir?",
                answer: "Her yıl için ödenecek tutar, devlet memuru maaş katsayısıyla belirlenen bir tavan tutarı aşamaz. İşçinin ücreti tavanın üzerinde olsa bile tavan üzerinden hesaplanır."
            }
        ],
        keywords: ["kıdem tazminatı nedir", "kıdem tazminatı hesaplama", "kıdem tazminatı şartları", "kıdem tazminatı tavanı"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "İhbar Tazminatı",
        slug: "ihbar-tazminati",
        shortDescription: "İş sözleşmesini bildirim süresine uymadan fesheden tarafın ödemekle yükümlü olduğu tazminat. İK m. 17'ye göre kıdeme göre 2-8 haftalık ücret tutarındadır.",
        definition: "İhbar tazminatı, belirsiz süreli iş sözleşmesini İş Kanunu m. 17'de belirtilen bildirim sürelerine uymadan fesheden tarafın, karşı tarafa ödemek zorunda olduğu tazminattır. Bildirim süreleri işçinin kıdemine göre 2 ile 8 hafta arasında değişir.",
        detailedExplanation: `İhbar tazminatı, iş sözleşmesinin feshinde bildirim sürelerine uyulmaması halinde gündeme gelir. İK m. 17'ye göre belirsiz süreli iş sözleşmelerinde fesih öncesi bildirim yapılması zorunludur.

Bildirim süreleri kıdeme göre belirlenir: 6 aya kadar çalışma için 2 hafta, 6 ay-1,5 yıl arası 4 hafta, 1,5-3 yıl arası 6 hafta, 3 yıldan fazla çalışma için 8 hafta.

Bu sürelere uymayan taraf, karşı tarafa bildirim süresine ait ücret tutarında ihbar tazminatı öder. İhbar tazminatı hem işveren hem işçi tarafından ödenmesi gereken bir yükümlülüktür.

Kıdem tazminatından farklı olarak ihbar tazminatı gelir vergisine tabidir. Ayrıca haklı nedenle fesih halinde (İK m. 24-25) ihbar tazminatı ödenmez.`,
        legalBasis: "İK m. 17",
        category: "is-hukuku",
        relatedTermSlugs: ["kidem-tazminati", "hakli-fesih", "ise-iade-davasi"],
        relatedBlogSlugs: ["isten-cikarildiginda-ne-yapmali", "ise-iade-davasi-sartlari-ve-arabuluculuk-sureci", "kidem-tazminati-nasil-hesaplanir", "ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari", "fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "İhbar süreleri ne kadardır?",
                answer: "6 aya kadar kıdem: 2 hafta, 6 ay-1,5 yıl: 4 hafta, 1,5-3 yıl: 6 hafta, 3 yıldan fazla: 8 hafta."
            },
            {
                question: "İhbar tazminatından vergi kesilir mi?",
                answer: "Evet, kıdem tazminatından farklı olarak ihbar tazminatından gelir vergisi ve damga vergisi kesilir."
            },
            {
                question: "İşçi de ihbar tazminatı ödemek zorunda kalabilir mi?",
                answer: "Evet, bildirim süresine uymadan istifa eden işçi, işverene ihbar tazminatı ödemekle yükümlüdür."
            }
        ],
        keywords: ["ihbar tazminatı nedir", "ihbar tazminatı hesaplama", "ihbar süresi", "ihbar tazminatı ne kadar"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "İşe İade Davası",
        slug: "ise-iade-davasi",
        shortDescription: "Geçerli sebep olmaksızın işten çıkarılan işçinin işe geri dönmek için açtığı dava. İK m. 18-21 kapsamında iş güvencesi olan işçilere tanınan haktır.",
        definition: "İşe iade davası, iş güvencesi kapsamındaki işçinin (en az 6 ay kıdem, 30+ çalışanlı işyeri) geçersiz nedenle fesih yapıldığını ileri sürerek işe iadesini talep ettiği dava türüdür. İK m. 18-21 kapsamında düzenlenmiştir.",
        detailedExplanation: `İşe iade davası, iş güvencesi sisteminin en önemli unsurudur. İK m. 18'e göre, belirsiz süreli iş sözleşmesi ile çalışan ve en az 6 aylık kıdemi olan işçi, en az 30 işçi çalıştıran işyerlerinde geçerli bir neden olmaksızın işten çıkarılamaz.

İşe iade davası açabilmek için fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurulması zorunludur. Arabuluculukta anlaşma sağlanamazsa, son tutanaktan itibaren 2 hafta içinde iş mahkemesinde dava açılmalıdır.

Mahkeme feshin geçersizliğine karar verirse işçinin 10 iş günü içinde işe başvurması gerekir. İşveren işçiyi işe başlatmazsa 4-8 aylık ücret tutarında tazminat ve 4 aya kadar boşta geçen süre ücreti ödemek zorundadır.

İşe iade davasında ispat yükü işverendedir; işveren feshin geçerli veya haklı nedene dayandığını ispatlamak zorundadır.`,
        legalBasis: "İK m. 18-21",
        category: "is-hukuku",
        relatedTermSlugs: ["kidem-tazminati", "ihbar-tazminati", "hakli-fesih", "mobbing"],
        relatedBlogSlugs: ["isten-cikarildiginda-ne-yapmali", "ise-iade-davasi-sartlari-ve-arabuluculuk-sureci"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "İşe iade davası kimler açabilir?",
                answer: "En az 6 aylık kıdemi olan, 30 veya daha fazla işçi çalıştıran işyerinde belirsiz süreli iş sözleşmesiyle çalışan işçiler açabilir."
            },
            {
                question: "İşe iade davası süresi ne kadardır?",
                answer: "Fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurulmalı, anlaşma sağlanamazsa 2 hafta içinde dava açılmalıdır."
            },
            {
                question: "İşveren işe başlatmazsa ne olur?",
                answer: "İşçiye 4-8 aylık ücret tutarında işe başlatmama tazminatı ve 4 aya kadar boşta geçen süre ücreti ödenir."
            }
        ],
        keywords: ["işe iade davası nedir", "işe iade davası şartları", "işe iade davası süresi", "iş güvencesi"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Mobbing",
        slug: "mobbing",
        shortDescription: "İşyerinde sistematik olarak uygulanan psikolojik taciz, yıldırma ve bezdirme davranışları. İşçiye haklı fesih ve tazminat hakkı doğurabilir.",
        definition: "Mobbing (psikolojik taciz), işyerinde bir veya birden fazla kişi tarafından sistematik biçimde uygulanan, işçiyi yıldırmaya, işten ayrılmaya zorlamaya veya dışlamaya yönelik psikolojik baskı ve taciz davranışlarıdır. TBK m. 417 ve İK m. 24/II-b kapsamında değerlendirilir.",
        detailedExplanation: `Mobbing, işyerinde çalışanın onurunu, kişiliğini ve mesleki yeterliliğini hedef alan, sistematik ve sürekli biçimde tekrarlanan olumsuz davranışlar bütünüdür.

Mobbing sayılan davranışlar arasında sürekli eleştiri ve aşağılama, yetki ve sorumluluklarının alınması, iş vermeme veya kapasitesinin altında iş verme, toplantılara davet etmeme, dedikodu yayma, fiziksel izolasyon, bağırma ve hakaret yer alır.

İşçi, mobbing nedeniyle iş sözleşmesini haklı nedenle feshederek kıdem tazminatı ve ihbar tazminatı talep edebilir. Ayrıca maddi ve manevi tazminat davası da açılabilir.

Mobbingin ispatında e-posta yazışmaları, mesajlar, tanık beyanları, psikolojik destek raporları ve iş yeri kayıtları delil olarak kullanılabilir. Yargıtay, mobbingin ispatında kesin delil yerine güçlü emareleri yeterli görmektedir.`,
        legalBasis: "TBK m. 417, İK m. 24/II-b",
        category: "is-hukuku",
        relatedTermSlugs: ["hakli-fesih", "kidem-tazminati", "ise-iade-davasi"],
        relatedBlogSlugs: ["isten-cikarildiginda-ne-yapmali", "ise-iade-davasi-sartlari-ve-arabuluculuk-sureci", "kidem-tazminati-nasil-hesaplanir"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "Mobbing nasıl ispatlanır?",
                answer: "E-posta, mesaj, tanık beyanları, psikolojik destek raporları delil olarak kullanılır. Yargıtay, güçlü emareleri yeterli görmektedir."
            },
            {
                question: "Mobbing nedeniyle istifa edersem tazminat alabilir miyim?",
                answer: "Evet, mobbing haklı fesih nedenidir. Kıdem tazminatı, ihbar tazminatı ve ayrıca manevi tazminat talep edebilirsiniz."
            },
            {
                question: "Mobbing için nereye şikayet edebilirim?",
                answer: "ALO 170 (Çalışma ve Sosyal Güvenlik İletişim Merkezi), CİMER, İl Çalışma Müdürlüğü ve Türkiye İnsan Hakları ve Eşitlik Kurumu'na başvurabilirsiniz."
            }
        ],
        keywords: ["mobbing nedir", "işyerinde mobbing", "mobbing tazminatı", "psikolojik taciz iş yerinde"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Haklı Fesih",
        slug: "hakli-fesih",
        shortDescription: "İş sözleşmesinin, kanunda belirtilen haklı nedenlerle derhal sona erdirilmesi. İK m. 24 (işçi) ve m. 25 (işveren) kapsamında düzenlenmiştir.",
        definition: "Haklı fesih, iş sözleşmesinin taraflarından birinin İş Kanunu m. 24 (işçi) veya m. 25 (işveren) kapsamında sayılan haklı nedenlerle, bildirim süresine uymaksızın iş sözleşmesini derhal sona erdirmesidir.",
        detailedExplanation: `Haklı fesih, iş ilişkisinin devamını çekilmez kılan nedenlerin varlığında taraflardan birine tanınan derhal fesih hakkıdır. Bildirim süresine uyma zorunluluğu yoktur.

İşçinin haklı fesih nedenleri (İK m. 24): Sağlık sebepleri (işin sağlığa zararlı olması), ahlak ve iyiniyet kurallarına aykırılık (ücret ödenmemesi, hakaret, cinsel taciz, mobbing), zorlayıcı sebepler (işyerinde 1 haftadan fazla süren çalışma durması).

İşverenin haklı fesih nedenleri (İK m. 25): Sağlık sebepleri, ahlak ve iyiniyet kurallarına aykırılık (hırsızlık, güveni kötüye kullanma, 7+ gün devamsızlık), zorlayıcı sebepler.

İşçinin haklı nedenle feshi halinde kıdem tazminatı ödenir. İşverenin İK m. 25/II (ahlak ve iyiniyet) kapsamında haklı feshi halinde ise kıdem tazminatı ödenmez.`,
        legalBasis: "İK m. 24-25",
        category: "is-hukuku",
        relatedTermSlugs: ["kidem-tazminati", "ihbar-tazminati", "mobbing", "ise-iade-davasi"],
        relatedBlogSlugs: ["isten-cikarildiginda-ne-yapmali", "kidem-tazminati-nasil-hesaplanir", "ise-iade-davasi-sartlari-ve-arabuluculuk-sureci", "is-kazasi-tazminati-sureci-ve-haklariniz", "ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari", "fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "İşçi hangi durumlarda haklı nedenle fesih yapabilir?",
                answer: "Ücretin ödenmemesi, mobbing, SGK primlerinin eksik yatırılması, sağlığa zararlı çalışma koşulları ve işverenin ahlaka aykırı davranışları haklı fesih nedenleridir."
            },
            {
                question: "Haklı fesihte ihbar süresi gerekir mi?",
                answer: "Hayır, haklı fesih derhal yapılır ve bildirim süresine uyma zorunluluğu yoktur."
            },
            {
                question: "Haklı fesih hakkı ne zaman düşer?",
                answer: "Haklı fesih nedeni öğrenildiği tarihten itibaren 6 iş günü ve her halde olayın gerçekleşmesinden itibaren 1 yıl içinde kullanılmalıdır."
            }
        ],
        keywords: ["haklı fesih nedir", "haklı fesih nedenleri", "haklı nedenle istifa", "İK m. 24"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Fazla Mesai",
        slug: "fazla-mesai",
        shortDescription: "Haftalık 45 saati aşan çalışmalar için işçiye ödenmesi gereken yüzde 50 zamlı ücret. İş Kanunu m. 41 kapsamında düzenlenmiştir.",
        definition: "Fazla mesai (fazla çalışma), 4857 sayılı İş Kanunu m. 41 uyarınca haftalık 45 saati aşan çalışmalardır. Her bir saat fazla çalışma için normal çalışma ücretinin saat başına düşen miktarının yüzde 50 yükseltilmesiyle ödeme yapılır.",
        detailedExplanation: `Fazla mesai, işçinin haftalık 45 saatlik yasal çalışma süresini aşan çalışmalar için hak kazandığı ek ücrettir. İK m. 41'e göre her bir saat fazla çalışma için normal ücretin 1,5 katı ödenir.

Fazla çalışma yapılabilmesi için işçinin yazılı onayı gereklidir. Yıllık fazla çalışma süresi toplamı 270 saati geçemez. Bu sınır işçinin sağlığını koruma amacı taşır.

Fazla mesai alacağının ispatında yazılı deliller (giriş-çıkış kayıtları, puantaj cetvelleri) en güçlü delillerdir. Tanık beyanıyla ispat halinde Yargıtay, yüzde 25-30 oranında hakkaniyet indirimi uygulanmasını öngörmektedir.

Zamanaşımı süresi İK Ek m. 3 uyarınca 5 yıldır. Her ay için ayrı ayrı işler ve iş sözleşmesi devam ederken de zamanaşımı süresi durdurulamaz.`,
        legalBasis: "İK m. 41, 63",
        category: "is-hukuku",
        relatedTermSlugs: ["kidem-tazminati", "ihbar-tazminati", "hakli-fesih"],
        relatedBlogSlugs: ["fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi", "isten-cikarildiginda-ne-yapmali", "kidem-tazminati-nasil-hesaplanir"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "Fazla mesai ücreti nasıl hesaplanır?",
                answer: "Aylık brüt ücret 225'e bölünerek saatlik ücret bulunur, ardından yüzde 50 zam eklenir. Her saat fazla çalışma için normal ücretin 1,5 katı ödenir."
            },
            {
                question: "Fazla mesai zamanaşımı süresi ne kadardır?",
                answer: "5 yıldır. Her ayın ücret ödeme gününden itibaren ayrı ayrı işlemeye başlar. Dava tarihinden geriye dönük 5 yılı aşan alacaklar zamanaşımına uğrar."
            },
            {
                question: "Fazla mesai tanıkla ispatlanabilir mi?",
                answer: "Evet, ancak tanık beyanıyla ispatlanan fazla mesai alacağından mahkeme yüzde 25-30 oranında hakkaniyet indirimi uygular."
            }
        ],
        keywords: ["fazla mesai nedir", "fazla mesai ücreti hesaplama", "fazla çalışma ücreti", "fazla mesai zamanaşımı"],
        lastUpdated: "2026-04-03",
    },
    {
        term: "İş Göremezlik",
        slug: "is-goremezlik",
        shortDescription: "İş kazası veya meslek hastalığı sonucu çalışanın geçici veya kalıcı olarak çalışma gücünü kaybetmesi. 5510 sayılı Kanun kapsamında düzenlenmiştir.",
        definition: "İş göremezlik, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu kapsamında, iş kazası veya meslek hastalığı sonucunda sigortalının meslekte kazanma gücünü geçici veya sürekli olarak kaybetmesi halidir. Geçici iş göremezlikte ödenek, sürekli iş göremezlikte gelir bağlanır.",
        detailedExplanation: `İş göremezlik, iş kazası veya meslek hastalığı sonucu çalışanın çalışma gücünü kaybetmesi durumudur. Geçici ve sürekli olmak üzere iki türü vardır.

Geçici iş göremezlik, tedavi süresince çalışma gücünün geçici olarak kaybolmasıdır. 5510 s.K. m. 18'e göre sigortalıya günlük kazancının üçte ikisi oranında ödenek ödenir.

Sürekli iş göremezlik, tedavi sonrası meslekte kazanma gücünün kalıcı olarak azalmasıdır. 5510 s.K. m. 19'a göre maluliyet oranı yüzde 10 ve üzerinde ise sürekli iş göremezlik geliri bağlanır. Tam iş göremezlikte aylık kazancın yüzde 70'i oranında gelir verilir.

SGK'dan iş göremezlik geliri almak, işverene karşı tazminat davası açma hakkını ortadan kaldırmaz. SGK ödemelerinin peşin sermaye değeri tazminattan mahsup edilir.`,
        legalBasis: "5510 s.K. m. 18-19",
        category: "tazminat",
        relatedTermSlugs: ["maddi-tazminat", "haksiz-fiil", "destekten-yoksun-kalma"],
        relatedBlogSlugs: ["is-goremezlik-raporu-ve-maluliyet-tazminati-davasi", "is-kazasi-tazminati-sureci-ve-haklariniz", "maddi-ve-manevi-tazminat-davasi-farklari"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Geçici iş göremezlik ödeneği ne kadar?",
                answer: "Günlük kazancın üçte ikisi oranında ödenir. Ayakta tedavide bu miktarın üçte ikisi, yatarak tedavide yarısı ödenir."
            },
            {
                question: "Sürekli iş göremezlik geliri nasıl bağlanır?",
                answer: "SGK Sağlık Kurulu tarafından maluliyet oranı yüzde 10 ve üzerinde tespit edilirse sürekli iş göremezlik geliri bağlanır."
            },
            {
                question: "İş göremezlik raporu nereden alınır?",
                answer: "SGK tarafından yetkilendirilmiş sağlık kuruluşlarınca düzenlenir. İş kazası bildirimi sonrası sigortalı sevk edilerek rapor hazırlanır."
            }
        ],
        keywords: ["iş göremezlik nedir", "geçici iş göremezlik", "sürekli iş göremezlik", "iş göremezlik raporu", "maluliyet oranı"],
        lastUpdated: "2026-04-03",
    },

    // ═══════════════════════════════════════
    // BOŞANMA VE AİLE HUKUKU TERİMLERİ
    // ═══════════════════════════════════════
    {
        term: "Anlaşmalı Boşanma",
        slug: "anlasmali-bosanma",
        shortDescription: "Eşlerin nafaka, velayet ve mal paylaşımı konusunda anlaşarak birlikte açtığı boşanma davası. TMK m. 166/3 uyarınca en az 1 yıllık evlilik şartı aranır.",
        definition: "Anlaşmalı boşanma, TMK m. 166/3 uyarınca en az 1 yıllık evliliği olan eşlerin nafaka, velayet, mal paylaşımı ve tazminat konularında mutabık kalarak birlikte veya bir eşin diğerinin davasını kabul ederek açtığı, genellikle tek celsede sonuçlanan boşanma davası türüdür.",
        detailedExplanation: `Anlaşmalı boşanma, Türk hukukundaki en hızlı ve en az yıpratıcı boşanma yoludur. Eşler, boşanmanın tüm mali ve kişisel sonuçları üzerinde anlaşarak mahkemeye birlikte başvurur.

Anlaşmalı boşanma şartları: Evliliğin en az 1 yıl sürmüş olması, eşlerin birlikte başvurması veya bir eşin davasını diğerinin kabul etmesi, nafaka, velayet, mal paylaşımı ve tazminat konularında anlaşma sağlanması.

Boşanma protokolü, anlaşmalı boşanmanın en kritik belgesidir. Protokolde yoksulluk nafakası, iştirak nafakası, velayet düzenlemesi, kişisel ilişki tesisi, mal paylaşımı ve maddi/manevi tazminat konuları açıkça belirlenmelidir.

Mahkeme, protokolü hakkaniyete uygun bulursa ve tarafların özgür iradeleriyle karar verdiklerine kanaat getirirse boşanmaya karar verir. Çocukların korunması açısından hakim, protokolde değişiklik önerebilir.`,
        legalBasis: "TMK m. 166/3",
        category: "bosanma",
        relatedTermSlugs: ["cekismeli-bosanma", "velayet", "nafaka", "mal-paylasimi"],
        relatedBlogSlugs: ["anlasmali-bosanma-nasil-acilir", "nafaka-hesaplama-yoksulluk-istirak-nafakasi"],
        relatedServiceAnchor: "#aile-hukuku",
        faqs: [
            {
                question: "Anlaşmalı boşanma ne kadar sürer?",
                answer: "Genellikle tek celsede sonuçlanır. Mahkeme yoğunluğuna göre 1-3 ay içinde kesinleşir."
            },
            {
                question: "Anlaşmalı boşanma protokolü sonradan değiştirilebilir mi?",
                answer: "Nafaka miktarı koşullar değiştiğinde artırılabilir veya azaltılabilir. Velayet düzenlemesi de çocuğun üstün yararı gerektirdiğinde değiştirilebilir."
            },
            {
                question: "Anlaşmalı boşanmada avukat zorunlu mu?",
                answer: "Zorunlu değildir ancak protokolün hukuka uygun hazırlanması ve hak kaybı yaşanmaması için avukat desteği kesinlikle tavsiye edilir."
            }
        ],
        keywords: ["anlaşmalı boşanma nedir", "anlaşmalı boşanma şartları", "anlaşmalı boşanma protokolü", "anlaşmalı boşanma süresi"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Çekişmeli Boşanma",
        slug: "cekismeli-bosanma",
        shortDescription: "Eşlerin boşanma veya boşanmanın sonuçları üzerinde anlaşamadığı, kusur araştırması yapılan dava türü.",
        definition: "Çekişmeli boşanma, eşlerin boşanma konusunda veya boşanmanın mali sonuçları (nafaka, velayet, mal paylaşımı) üzerinde anlaşamadığı, TMK m. 161-166 kapsamında belirli boşanma nedenlerine dayalı olarak açılan ve kusur araştırması yapılan dava türüdür.",
        detailedExplanation: `Çekişmeli boşanma, taraflar arasında uzlaşma sağlanamadığında başvurulan boşanma yoludur. Davacı, kanunda belirtilen boşanma nedenlerinden birine dayanarak dava açar.

Özel boşanma nedenleri: Zina (TMK m. 161), hayata kast/pek kötü muamele/onur kırıcı davranış (TMK m. 162), suç işleme ve haysiyetsiz yaşam sürme (TMK m. 163), terk (TMK m. 164), akıl hastalığı (TMK m. 165).

Genel boşanma nedeni: Evlilik birliğinin temelinden sarsılması (TMK m. 166/1-2). En sık başvurulan genel nedendir. Ortak hayatın sürdürülmesinin taraflardan biri için beklenemez hale gelmesi yeterlidir.

Çekişmeli boşanma davaları genellikle 1-3 yıl sürer. Kusur tespiti, nafaka miktarı, velayet düzenlemesi ve mal paylaşımı ayrı ayrı değerlendirilir. Daha ağır kusurlu eş, diğer eşe maddi ve manevi tazminat ödemekle yükümlü olabilir.`,
        legalBasis: "TMK m. 161-166",
        category: "bosanma",
        relatedTermSlugs: ["anlasmali-bosanma", "velayet", "nafaka", "mal-paylasimi"],
        relatedBlogSlugs: ["velayet-davasi-sureci-ve-mahkeme-kriterleri", "cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti"],
        relatedServiceAnchor: "#aile-hukuku",
        faqs: [
            {
                question: "Çekişmeli boşanma ne kadar sürer?",
                answer: "Ortalama 1-3 yıl sürer. Delil toplama, tanık dinleme, sosyal inceleme raporu ve bilirkişi süreçleri davanın süresini uzatabilir."
            },
            {
                question: "Çekişmeli boşanmada kusur nasıl belirlenir?",
                answer: "Mahkeme, tarafların evlilik birliğine karşı yükümlülüklerini ihlal edip etmediğini değerlendirir. Aldatma, şiddet, hakaret, ilgisizlik gibi davranışlar kusur olarak kabul edilir."
            },
            {
                question: "Daha kusurlu taraf ne gibi yaptırımlarla karşılaşır?",
                answer: "Ağır kusurlu eş yoksulluk nafakası talep edemez. Ayrıca karşı tarafa maddi ve manevi tazminat ödemek zorunda kalabilir."
            }
        ],
        keywords: ["çekişmeli boşanma nedir", "çekişmeli boşanma süresi", "çekişmeli boşanma nedenleri", "boşanma davası"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Velayet",
        slug: "velayet",
        shortDescription: "Çocuğun bakımı, eğitimi ve korunmasına ilişkin anne-babaya tanınan hak ve yükümlülükler. Boşanmada çocuğun üstün yararı gözetilerek düzenlenir.",
        definition: "Velayet, TMK m. 335-351 kapsamında anne ve babaya tanınan, çocuğun bakımı, eğitimi, korunması ve temsili konularındaki hak ve yükümlülükler bütünüdür. Boşanmada velayet, çocuğun üstün yararı gözetilerek eşlerden birine verilir.",
        detailedExplanation: `Velayet, çocuğun 18 yaşına kadar anne ve/veya baba tarafından bakılması, eğitilmesi, korunması ve temsil edilmesini kapsayan hak ve yükümlülükler bütünüdür.

Evlilik devam ederken velayet anne ve baba tarafından birlikte kullanılır. Boşanmada ise hakim, çocuğun üstün yararını gözeterek velayeti eşlerden birine verir.

Velayet kararında mahkeme şu kriterleri değerlendirir: Çocuğun yaşı, anne-baba ile bağlılık düzeyi, ebeveynlerin ekonomik ve sosyal durumu, çocuğun görüşü (idrak yaşına ulaşmışsa), sosyal inceleme raporu (pedagog/psikolog değerlendirmesi).

Velayeti almayan ebeveynin kişisel ilişki kurma hakkı vardır. Bu hak, çocukla belirli gün ve saatlerde görüşme şeklinde düzenlenir. Ayrıca velayeti almayan ebeveyn, çocuğun bakım giderlerine mali gücü oranında katılır (iştirak nafakası).`,
        legalBasis: "TMK m. 335-351",
        category: "bosanma",
        relatedTermSlugs: ["anlasmali-bosanma", "cekismeli-bosanma", "nafaka"],
        relatedBlogSlugs: ["velayet-davasi-sureci-ve-mahkeme-kriterleri", "cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti", "anlasmali-bosanma-nasil-acilir", "nafaka-hesaplama-yoksulluk-istirak-nafakasi"],
        relatedServiceAnchor: "#aile-hukuku",
        faqs: [
            {
                question: "Velayet kararı değiştirilebilir mi?",
                answer: "Evet, koşullar değiştiğinde velayet değişikliği davası açılabilir. Çocuğun üstün yararı gerektiriyorsa mahkeme velayeti diğer ebeveyne verebilir."
            },
            {
                question: "Ortak velayet Türk hukukunda mümkün mü?",
                answer: "Türk hukuku şu an için ortak velayeti açıkça düzenlememektedir. Ancak Yargıtay, anlaşmalı boşanmalarda ortak velayet kararını bazı koşullarda kabul etmektedir."
            },
            {
                question: "Çocuğun görüşü velayet kararında dikkate alınır mı?",
                answer: "Evet, idrak yaşına ulaşmış çocukların görüşü alınır. Genellikle 8 yaş ve üzeri çocukların beyanları değerlendirilir ancak karar çocuğun üstün yararına göre verilir."
            }
        ],
        keywords: ["velayet nedir", "velayet davası", "velayet hakkı", "velayet değişikliği"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Nafaka",
        slug: "nafaka",
        shortDescription: "Boşanma sonrası yoksulluğa düşecek eşe veya müşterek çocuğa ödenen düzenli mali destek. Yoksulluk ve iştirak nafakası olmak üzere iki temel türü vardır.",
        definition: "Nafaka, boşanma sonrası yoksulluğa düşecek eşe ödenen yoksulluk nafakası (TMK m. 175) ve müşterek çocuğun bakım giderlerine katkı olarak ödenen iştirak nafakası (TMK m. 182/2) olmak üzere iki temel türü bulunan düzenli mali destek yükümlülüğüdür.",
        detailedExplanation: `Nafaka, boşanma sonrasında ekonomik açıdan güçsüz kalan tarafı ve çocukları korumayı amaçlayan hukuki kurumdur.

Yoksulluk nafakası: Boşanma yüzünden yoksulluğa düşecek ve kusuru diğer eşinkinden ağır olmayan eşe süresiz olarak ödenir. Nafaka borçlusunun mali gücü, alacaklının ihtiyaçları ve evlilik süresindeki yaşam standardı dikkate alınır.

İştirak nafakası: Velayeti almayan ebeveynin çocuğun bakım ve eğitim giderlerine mali gücü oranında katılmasıdır. Çocuğun 18 yaşını doldurmasıyla sona erer ancak eğitim devam ediyorsa uzatılabilir.

Tedbir nafakası: Boşanma davası süresince eş ve çocuklar için geçici olarak hükmolunur. Kusur aranmaz.

Nafaka ödenmezse icra takibi yapılabilir ve 3 aya kadar tazyik hapsi kararı verilebilir.`,
        legalBasis: "TMK m. 169, 175, 182",
        category: "bosanma",
        relatedTermSlugs: ["anlasmali-bosanma", "cekismeli-bosanma", "velayet", "mal-paylasimi"],
        relatedBlogSlugs: ["nafaka-hesaplama-yoksulluk-istirak-nafakasi", "cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti", "anlasmali-bosanma-nasil-acilir", "velayet-davasi-sureci-ve-mahkeme-kriterleri"],
        relatedServiceAnchor: "#aile-hukuku",
        faqs: [
            {
                question: "Nafaka ne zaman sona erer?",
                answer: "Yoksulluk nafakası alacaklının evlenmesi, ölüm veya yoksulluğun kalkmasıyla; iştirak nafakası çocuğun 18 yaşını doldurmasıyla sona erer."
            },
            {
                question: "Erkek de nafaka alabilir mi?",
                answer: "Evet, yoksulluk nafakası cinsiyete bağlı değildir. Yoksulluğa düşecek eş, kadın veya erkek fark etmeksizin nafaka talep edebilir."
            },
            {
                question: "Nafaka ödenmezse hapis cezası verilir mi?",
                answer: "Evet, nafaka borcunu ödemeyen kişi hakkında İİK m. 344 gereğince 3 aya kadar tazyik hapsi kararı verilebilir."
            }
        ],
        keywords: ["nafaka nedir", "nafaka hesaplama", "yoksulluk nafakası", "iştirak nafakası", "nafaka ne kadar"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Edinilmiş Mallara Katılma",
        slug: "mal-paylasimi",
        shortDescription: "Evlilik süresince edinilen malların boşanmada eşit olarak paylaşılmasını öngören yasal mal rejimi. TMK m. 218-241 kapsamında düzenlenmiştir.",
        definition: "Edinilmiş mallara katılma rejimi, TMK m. 218-241 kapsamında düzenlenen, Türk hukukundaki yasal mal rejimidir. Bu rejimde evlilik süresince edinilen mallar boşanmada eşit olarak paylaşılırken, evlilik öncesi kişisel mallar paylaşım dışında kalır.",
        detailedExplanation: `Edinilmiş mallara katılma rejimi, 1 Ocak 2002 tarihinden itibaren Türk hukukunda yasal mal rejimi olarak uygulanmaktadır. Eşler farklı bir mal rejimi seçmedikçe bu rejim otomatik olarak geçerlidir.

Edinilmiş mallar (paylaşıma tabi): Çalışma karşılığı elde edilen gelirler, SGK ödemeleri, kişisel malların gelirleri ve edinilmiş mallar yerine geçen değerler.

Kişisel mallar (paylaşım dışı): Evlilik öncesi sahip olunan mallar, miras yoluyla edinilen mallar, karşılıksız kazandırma (bağış) yoluyla edinilen mallar ve manevi tazminat alacakları.

Boşanmada her eş, diğer eşin edinilmiş mallarının toplam değerinin yarısı üzerinde hak sahibidir. Bu, fiili olarak malın yarısının devredilmesi değil, katılma alacağı olarak para şeklinde talep edilmesidir. Katılma alacağı davası, boşanma davasıyla birlikte veya ayrı açılabilir.`,
        legalBasis: "TMK m. 218-241",
        category: "bosanma",
        relatedTermSlugs: ["anlasmali-bosanma", "cekismeli-bosanma", "nafaka"],
        relatedBlogSlugs: ["anlasmali-bosanma-nasil-acilir", "cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti", "bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi"],
        relatedServiceAnchor: "#aile-hukuku",
        faqs: [
            {
                question: "Evlilik öncesi mallarım paylaşılır mı?",
                answer: "Hayır, evlilik öncesi sahip olunan mallar kişisel mal sayılır ve paylaşıma tabi değildir. Ancak evlilik süresince bu malların geliri edinilmiş mal sayılır."
            },
            {
                question: "Miras yoluyla edinilen mal paylaşılır mı?",
                answer: "Hayır, miras yoluyla edinilen mallar kişisel mal sayılır. Ancak miras malının evlilik süresince elde edilen geliri (kira, faiz) edinilmiş mal olarak değerlendirilebilir."
            },
            {
                question: "Mal paylaşımı davası ne zaman açılır?",
                answer: "Boşanma kararının kesinleşmesinden itibaren 10 yıl içinde açılmalıdır. Boşanma davasıyla birlikte de açılabilir."
            }
        ],
        keywords: ["mal paylaşımı nedir", "edinilmiş mallara katılma", "boşanmada mal paylaşımı", "katılma alacağı"],
        lastUpdated: "2026-03-11",
    },

    // ═══════════════════════════════════════
    // TAZMİNAT HUKUKU TERİMLERİ
    // ═══════════════════════════════════════
    {
        term: "Maddi Tazminat",
        slug: "maddi-tazminat",
        shortDescription: "Haksız fiil veya sözleşmeye aykırılık sonucu kişinin malvarlığında meydana gelen somut kaybın karşılanması.",
        definition: "Maddi tazminat, TBK m. 49-52 kapsamında, kusurlu ve hukuka aykırı bir fiille başkasına zarar veren kişinin bu zararı gidermekle yükümlü olduğu, malvarlığındaki somut azalmayı karşılamaya yönelik tazminat türüdür.",
        detailedExplanation: `Maddi tazminat, zarar görenin malvarlığında meydana gelen somut kaybın karşılanmasını amaçlar. Tam tazmin ilkesi gereği, zarar gören kişi zarara uğramadan önceki mali durumuna kavuşturulmalıdır.

Maddi tazminat kalemleri: Fiili zarar (tedavi giderleri, onarım bedeli), yoksun kalınan kazanç (iş gücü kaybı, çalışamama zararı), destekten yoksun kalma (ölüm halinde yakınların kaybı).

Hesaplama yöntemi: Bedensel zararlarda aktüerya bilirkişisi, eşya zararlarında eksper raporu ile hesaplanır. Maluliyet oranı, gelir düzeyi, yaş, kusur oranı ve SGK ödemeleri dikkate alınır.

Maddi tazminat talebi için hukuka aykırı fiil, kusur (veya kusursuz sorumluluk), zarar ve nedensellik bağının birlikte bulunması gerekir.`,
        legalBasis: "TBK m. 49-52",
        category: "tazminat",
        relatedTermSlugs: ["manevi-tazminat", "haksiz-fiil", "destekten-yoksun-kalma"],
        relatedBlogSlugs: ["maddi-ve-manevi-tazminat-davasi-farklari", "trafik-kazasi-tazminati-alma-sureci", "destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci", "malpraktis-davasi-doktor-hatasi-tazminati", "sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati", "is-goremezlik-raporu-ve-maluliyet-tazminati-davasi", "bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Maddi tazminat nasıl hesaplanır?",
                answer: "Bedensel zararlarda aktüerya hesabıyla (maluliyet oranı x gelir x çalışma süresi), eşya zararlarında eksper raporu ile hesaplanır."
            },
            {
                question: "Maddi tazminat zamanaşımı ne kadardır?",
                answer: "Haksız fiilde zararın öğrenilmesinden itibaren 2 yıl, fiil tarihinden itibaren 10 yıl. Sözleşmeye aykırılıkta 10 yıl."
            },
            {
                question: "Maddi tazminata faiz işler mi?",
                answer: "Evet, haksız fiil tarihinden itibaren yasal faiz uygulanır."
            }
        ],
        keywords: ["maddi tazminat nedir", "maddi tazminat hesaplama", "maddi tazminat davası", "tazminat hesaplama"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Manevi Tazminat",
        slug: "manevi-tazminat",
        shortDescription: "Kişinin bedensel veya ruhsal bütünlüğüne verilen zararın hakimin takdiriyle belirlenen parasal karşılığı.",
        definition: "Manevi tazminat, TBK m. 56-58 kapsamında, bedensel bütünlüğün zedelenmesi veya kişilik haklarına saldırı halinde zarar görene hakimin takdiriyle belirlenen uygun bir miktar paranın ödenmesine karar verilen tazminat türüdür.",
        detailedExplanation: `Manevi tazminat, zarar görenin yaşadığı acı, elem ve ıstırabın parasal karşılığıdır. Maddi tazminattan farklı olarak matematiksel bir hesaplama yöntemi yoktur; miktar hakimin takdirine bırakılmıştır.

Manevi tazminat gerektiren durumlar: Bedensel yaralanma ve sakatlık, ölüm (yakınlarına), kişilik haklarına saldırı (hakaret, iftira), doktor hatası, trafik kazası, iş kazası, haksız tutuklama.

Miktarı belirleyen faktörler: Olayın ağırlığı, kusur derecesi, tarafların ekonomik durumu, mağdurun yaşı ve sosyal konumu, psikolojik etkiler.

Manevi tazminat zenginleşme aracı olmamalı ancak caydırıcı nitelikte olmalıdır. Ağır bedensel zarar veya ölüm halinde yakınlar da ayrı ayrı manevi tazminat talep edebilir.`,
        legalBasis: "TBK m. 56-58",
        category: "tazminat",
        relatedTermSlugs: ["maddi-tazminat", "haksiz-fiil", "malpraktis"],
        relatedBlogSlugs: ["maddi-ve-manevi-tazminat-davasi-farklari", "trafik-kazasi-tazminati-alma-sureci", "malpraktis-davasi-doktor-hatasi-tazminati", "bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat", "is-goremezlik-raporu-ve-maluliyet-tazminati-davasi"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Manevi tazminat miktarını kim belirler?",
                answer: "Hakim takdir eder. Olayın ağırlığı, kusur derecesi, tarafların mali durumu ve hakkaniyete göre karar verilir."
            },
            {
                question: "Manevi tazminat mirasçılara geçer mi?",
                answer: "Kural olarak geçmez. Ancak dava açılmışsa veya taraflar arasında anlaşma yapılmışsa mirasçılara geçebilir."
            },
            {
                question: "Yakınlar da manevi tazminat talep edebilir mi?",
                answer: "Evet, ağır bedensel zarar veya ölüm halinde eş, çocuklar, anne ve baba ayrı ayrı manevi tazminat talep edebilir."
            }
        ],
        keywords: ["manevi tazminat nedir", "manevi tazminat miktarı", "manevi tazminat davası", "manevi tazminat hesaplama"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Malpraktis",
        slug: "malpraktis",
        shortDescription: "Hekimin tıp biliminin gerektirdiği standart özeni göstermemesi sonucu hastaya zarar vermesi. Hasta, maddi ve manevi tazminat davası açabilir.",
        definition: "Malpraktis (tıbbi hata), hekimin veya sağlık personelinin tıp biliminin o andaki standartlarına uygun davranmaması sonucu hastaya zarar vermesidir. Hasta, TBK m. 49 ve m. 116 kapsamında hem hekimden hem hastaneden maddi ve manevi tazminat talep edebilir.",
        detailedExplanation: `Tıbbi malpraktis, hekimin tedavi sürecinde standart tıbbi uygulamadan sapması sonucu hastanın zarar görmesidir. Teşhis hatası, tedavi hatası, takip hatası ve aydınlatma hatası olmak üzere dört ana kategoride incelenir.

Malpraktis ile komplikasyon ayrımı kritik önem taşır. Her olumsuz sonuç malpraktis değildir; komplikasyonlar tıbbi müdahalelerin bilinen riskleridir. Ancak hekim komplikasyonu önlemek için gerekli özeni göstermemişse veya hastayı bilgilendirmemişse sorumluluk doğar.

Malpraktis davası: Özel hastanelerde hekime ve hastaneye karşı hukuk mahkemesinde, kamu hastanelerinde idareye karşı idare mahkemesinde açılır. Bilirkişi raporu (Adli Tıp Kurumu veya Yüksek Sağlık Şurası) davanın kaderini belirler.

Zamanaşımı: Özel hastanelerde 5/10 yıl, kamu hastanelerinde 1/5 yıl. Kamu hastaneleri için süre çok kısadır, derhal hukuki danışmanlık alınmalıdır.`,
        legalBasis: "TBK m. 49, 116",
        category: "tazminat",
        relatedTermSlugs: ["maddi-tazminat", "manevi-tazminat", "haksiz-fiil"],
        relatedBlogSlugs: ["malpraktis-davasi-doktor-hatasi-tazminati", "maddi-ve-manevi-tazminat-davasi-farklari"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Komplikasyon ile malpraktis arasındaki fark nedir?",
                answer: "Komplikasyon tıbbi müdahalenin bilinen riskidir. Malpraktis ise hekimin standart özeni göstermemesidir. Komplikasyona zamanında müdahale edilmemesi malpraktise dönüşür."
            },
            {
                question: "Malpraktis davasını kime karşı açabilirim?",
                answer: "Özel hastanede hekime ve hastaneye birlikte, kamu hastanesinde idareye karşı (Sağlık Bakanlığı/Üniversite) açılır."
            },
            {
                question: "Malpraktis davası zamanaşımı ne kadardır?",
                answer: "Özel hastane: zararın öğrenilmesinden 5 yıl, tedaviden 10 yıl. Kamu hastanesi: zararın öğrenilmesinden 1 yıl, eylemden 5 yıl."
            }
        ],
        keywords: ["malpraktis nedir", "doktor hatası tazminat", "tıbbi malpraktis", "doktor hatası dava"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Destekten Yoksun Kalma",
        slug: "destekten-yoksun-kalma",
        shortDescription: "Ölen kişinin desteğinden yararlanan kişilerin uğradığı gelir kaybının tazmin edilmesi. TBK m. 53/3 kapsamında eş, çocuk ve anne-baba talep edebilir.",
        definition: "Destekten yoksun kalma tazminatı, TBK m. 53/3 kapsamında, haksız fiil sonucu ölen kişinin yaşamında geçimini sağladığı veya gelecekte geçimini sağlayacağı kişilerin (eş, çocuk, anne, baba) uğradığı gelir kaybını karşılamaya yönelik tazminat türüdür.",
        detailedExplanation: `Destekten yoksun kalma tazminatı, ölenin hayatta iken fiilen destek olduğu kişilerin gelir kaybını karşılar. Tazminat miktarı aktüerya hesabıyla belirlenir.

Hak sahipleri: Eş, çocuklar, anne-baba ve fiilen destek alan diğer kişiler. Nikahsız birlikte yaşayan kişi de fiili destek ispatlanırsa hak sahibi olabilir.

Destek payları: Eş (çocuksuz %50, çocuklu %30-40), her çocuk (%10-20), anne (%10), baba (%10). Çocuklar destek payını belirli bir yaşa (kız 22, erkek 18-25) kadar alır.

Hesaplama: Ölenin son geliri, yaşı, muhtemel yaşam süresi, destek payları, kusur oranı ve SGK ödemeleri dikkate alınarak aktüerya bilirkişisi tarafından hesaplanır.

Trafik kazası, iş kazası ve tıbbi malpraktis sonucu ölüm hallerinde en sık talep edilen tazminat kalemlerindendir.`,
        legalBasis: "TBK m. 53/3",
        category: "tazminat",
        relatedTermSlugs: ["maddi-tazminat", "manevi-tazminat", "haksiz-fiil"],
        relatedBlogSlugs: ["trafik-kazasi-tazminati-alma-sureci", "is-kazasi-tazminati-sureci-ve-haklariniz", "destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci", "maddi-ve-manevi-tazminat-davasi-farklari", "malpraktis-davasi-doktor-hatasi-tazminati", "sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Destekten yoksun kalma tazminatını kimler talep edebilir?",
                answer: "Ölenin eşi, çocukları, anne-babası ve fiilen destek aldığı diğer kişiler talep edebilir."
            },
            {
                question: "Destek payları nasıl belirlenir?",
                answer: "Yargıtay içtihatlarına göre: eş (çocuksuz %50, çocuklu %30-40), her çocuk (%10-20), anne ve baba ayrı ayrı %10."
            },
            {
                question: "Nikahsız eş destekten yoksun kalma tazminatı alabilir mi?",
                answer: "Evet, fiili destek ilişkisi ispatlanırsa nikahsız birlikte yaşayan kişi de tazminat talep edebilir."
            }
        ],
        keywords: ["destekten yoksun kalma nedir", "destekten yoksun kalma tazminatı hesaplama", "destek payları"],
        lastUpdated: "2026-03-11",
    },
    {
        term: "Haksız Fiil",
        slug: "haksiz-fiil",
        shortDescription: "Kusurlu ve hukuka aykırı bir fiille başkasına zarar veren kişinin tazminat yükümlülüğü. TBK m. 49 kapsamında maddi ve manevi tazminat talep edilebilir.",
        definition: "Haksız fiil, TBK m. 49 kapsamında, kusurlu ve hukuka aykırı bir fiille başkasına zarar veren kişinin bu zararı gidermekle yükümlü olduğu hukuki sorumluluk türüdür. Trafik kazası, iş kazası, doktor hatası ve kişilik haklarına saldırı en yaygın haksız fiil örnekleridir.",
        detailedExplanation: `Haksız fiil sorumluluğu, Türk tazminat hukukunun temelini oluşturur. Bir kişinin hukuka aykırı ve kusurlu eylemi sonucu başkasına zarar vermesi halinde tazminat yükümlülüğü doğar.

Haksız fiilin unsurları: Hukuka aykırı fiil, kusur (kasıt veya ihmal), zarar (maddi veya manevi) ve nedensellik bağı (fiil ile zarar arasında sebep-sonuç ilişkisi).

Kusursuz sorumluluk halleri: Bazı durumlarda kusur aranmaz — motorlu araç işleteni (KTK m. 85), hayvan sahibi (TBK m. 67), yapı sahibi (TBK m. 69), tehlikeli işletme (TBK m. 71), adam çalıştıran (TBK m. 66).

Zamanaşımı: Zararın ve failin öğrenildiği tarihten itibaren 2 yıl, her halükarda fiil tarihinden itibaren 10 yıl. Fiil aynı zamanda suç oluşturuyorsa ve ceza zamanaşımı daha uzunsa, ceza zamanaşımı uygulanır.`,
        legalBasis: "TBK m. 49-76",
        category: "tazminat",
        relatedTermSlugs: ["maddi-tazminat", "manevi-tazminat", "destekten-yoksun-kalma", "malpraktis"],
        relatedBlogSlugs: ["maddi-ve-manevi-tazminat-davasi-farklari", "trafik-kazasi-tazminati-alma-sureci", "destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci", "malpraktis-davasi-doktor-hatasi-tazminati", "is-goremezlik-raporu-ve-maluliyet-tazminati-davasi"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Haksız fiilin dört unsuru nedir?",
                answer: "Hukuka aykırı fiil, kusur, zarar ve nedensellik bağı. Bu dört unsurun birlikte bulunması gerekir."
            },
            {
                question: "Kusursuz sorumluluk ne demektir?",
                answer: "Bazı durumlarda (araç işleteni, yapı sahibi, tehlikeli işletme) kusur olmasa bile tazminat sorumluluğu doğar. Yalnızca mücbir sebep veya zarar görenin ağır kusuru sorumluluktan kurtarır."
            },
            {
                question: "Haksız fiil zamanaşımı ne kadardır?",
                answer: "Zararın ve failin öğrenilmesinden itibaren 2 yıl, fiil tarihinden itibaren 10 yıl. Suç oluşturuyorsa ceza zamanaşımı uygulanabilir."
            }
        ],
        keywords: ["haksız fiil nedir", "haksız fiil tazminatı", "haksız fiil unsurları", "haksız fiil zamanaşımı"],
        lastUpdated: "2026-03-11",
    },

    // ═══════════════════════════════════════
    // EK TERİMLER (Mart 2026)
    // ═══════════════════════════════════════
    {
        term: "İş Güvencesi",
        slug: "is-guvencesi",
        shortDescription: "Belirsiz süreli iş sözleşmesiyle çalışan işçinin geçerli sebep olmadan işten çıkarılmasını engelleyen yasal koruma.",
        definition: "İş güvencesi, 4857 sayılı İş Kanunu m. 18-21 kapsamında düzenlenen, en az 30 işçi çalıştıran işyerlerinde belirsiz süreli iş sözleşmesiyle ve en az 6 aylık kıdemle çalışan işçilerin geçerli bir sebep olmaksızın işten çıkarılmasını engelleyen yasal koruma mekanizmasıdır.",
        detailedExplanation: `İş güvencesi, Türk iş hukukunun temel koruma mekanizmalarından biridir. Bu sistem, işverenin keyfi fesihlerine karşı işçiyi koruyarak iş ilişkisinde istikrar ve güvenlik sağlamayı amaçlar.

İş güvencesinden yararlanmanın dört temel şartı vardır: İşyerinde en az 30 işçi çalışması, işçinin en az 6 aylık kıdeminin bulunması, belirsiz süreli iş sözleşmesiyle çalışılması ve işçinin işletmenin bütününü yöneten işveren vekili olmaması.

İş güvencesi kapsamındaki işçinin iş sözleşmesi feshedildiğinde, işveren feshin geçerli bir nedene dayandığını ispat etmek zorundadır. Geçerli neden işçinin yeterliliğinden, davranışlarından veya işletmenin gereklerinden kaynaklanabilir. İşveren, feshin son çare olduğunu (ultima ratio ilkesi) da kanıtlamalıdır.

İş güvencesi kapsamında feshin geçersiz bulunması halinde, işçi işe iade davası yoluyla işine geri dönebilir veya işe başlatmama tazminatı ve boşta geçen süre ücreti talep edebilir.`,
        legalBasis: "İK m. 18-21",
        category: "is-hukuku",
        relatedTermSlugs: ["ise-iade-davasi", "hakli-fesih", "kidem-tazminati", "ihbar-tazminati"],
        relatedBlogSlugs: ["ise-iade-davasi-sartlari-ve-arabuluculuk-sureci", "isten-cikarildiginda-ne-yapmali"],
        relatedServiceAnchor: "#is-hukuku",
        faqs: [
            {
                question: "İş güvencesinden kimler yararlanır?",
                answer: "30 ve üzeri işçi çalıştıran işyerlerinde, belirsiz süreli iş sözleşmesiyle en az 6 aydır çalışan ve işletmenin bütününü yönetmeyen işçiler iş güvencesinden yararlanır."
            },
            {
                question: "30 işçi şartı nasıl hesaplanır?",
                answer: "İşverenin aynı iş kolundaki tüm işyerlerindeki toplam işçi sayısı dikkate alınır. Alt işveren (taşeron) işçileri de bu sayıya dahildir."
            },
            {
                question: "İş güvencesi kapsamında olmayan işçi dava açabilir mi?",
                answer: "İşe iade davası açamaz ancak genel hükümlere göre haksız fesih tazminatı ve kıdem-ihbar tazminatı talep edebilir."
            }
        ],
        keywords: ["iş güvencesi nedir", "iş güvencesi şartları", "iş güvencesi 30 işçi", "iş güvencesi kapsamı"],
        lastUpdated: "2026-03-16",
    },
    {
        term: "Evlilik Birliğinin Temelden Sarsılması",
        slug: "evlilik-birliginin-temelden-sarsilmasi",
        shortDescription: "Çekişmeli boşanma davalarında en sık başvurulan genel boşanma sebebi. TMK m. 166/1 uyarınca ortak hayatın çekilmez hale gelmesi halinde başvurulur.",
        definition: "Evlilik birliğinin temelden sarsılması, TMK m. 166/1-2 uyarınca ortak hayatın sürdürülmesinin eşlerden biri veya her ikisi için çekilmez hale gelmesi durumunda başvurulan genel boşanma sebebidir. Davacı, evlilik birliğinin kendisi için çekilmez hale geldiğini ispat etmelidir.",
        detailedExplanation: `Evlilik birliğinin temelden sarsılması, Türk boşanma hukukunda en yaygın başvurulan boşanma sebebidir. TMK m. 166/1'e göre, evlilik birliği ortak hayatı sürdürmeleri kendilerinden beklenmeyecek derecede temelinden sarsılmış ise eşlerden her biri boşanma davası açabilir.

Bu genel boşanma sebebinde hakim, tarafların evlilik içindeki tüm davranışlarını değerlendirir. Sadakatsizlik, sürekli tartışma ve kavga, fiziksel veya ekonomik şiddet, hakaret ve aşağılama, ilgisizlik, ailevi müdahaleler, uyumsuzluk gibi durumlar evlilik birliğinin sarsılmasına neden olabilir.

Önemli bir husus: TMK m. 166/2'ye göre, davacının kusuru daha ağır ise, davalının açılan davaya itiraz hakkı vardır. Ancak bu itiraz hakkın kötüye kullanılması niteliğinde ise ve evlilik birliğinin devamında davalı ve çocuklar bakımından korunmaya değer bir yarar kalmamışsa, boşanmaya karar verilebilir.

Yargıtay 2. Hukuk Dairesi, her somut olaydaki kusur dağılımını ayrıntılı biçimde incelemekte ve tarafların evlilik birliğine karşı yükümlülüklerini hangi ölçüde yerine getirdiğini değerlendirmektedir.`,
        legalBasis: "TMK m. 166/1-2",
        category: "bosanma",
        relatedTermSlugs: ["cekismeli-bosanma", "anlasmali-bosanma", "nafaka", "velayet"],
        relatedBlogSlugs: ["cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti", "anlasmali-bosanma-nasil-acilir", "bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat"],
        relatedServiceAnchor: "#aile-hukuku",
        faqs: [
            {
                question: "Evlilik birliğinin temelden sarsılması ne demektir?",
                answer: "Eşler arasındaki ilişkinin, ortak hayatı sürdürmeleri beklenmeyecek derecede bozulmasıdır. Sadakatsizlik, şiddet, hakaret, ilgisizlik gibi durumlar bu kapsamda değerlendirilir."
            },
            {
                question: "Bu sebeple açılan davada kusur aranır mı?",
                answer: "Evet, hakim her iki tarafın da kusurlu davranışlarını karşılaştırmalı olarak değerlendirir. Davacının kusuru daha ağırsa, davalının itiraz hakkı vardır."
            },
            {
                question: "Sadece geçimsizlik boşanma sebebi olur mu?",
                answer: "Evet, sürekli ve şiddetli geçimsizlik evlilik birliğinin sarsılması kapsamında değerlendirilir. Ancak geçici tartışmalar tek başına yeterli değildir; ortak hayatın çekilmez hale geldiği ispatlanmalıdır."
            }
        ],
        keywords: ["evlilik birliğinin temelden sarsılması nedir", "TMK 166 boşanma", "genel boşanma sebebi", "şiddetli geçimsizlik boşanma"],
        lastUpdated: "2026-03-16",
    },
    {
        term: "Ecrimisil",
        slug: "ecrimisil",
        shortDescription: "Bir taşınmazın haksız olarak işgal edilmesi nedeniyle ödenmesi gereken haksız işgal tazminatı. Emsal kira bedeli esas alınarak hesaplanır.",
        definition: "Ecrimisil, bir taşınmazı hukuki bir hakka dayanmadan kullanan kişinin (fuzuli şagil), taşınmaz sahibine ödemekle yükümlü olduğu haksız işgal tazminatıdır. Kötüniyetli haksız zilyedin ödemesi gereken bir tazminat türü olup TMK m. 995 ve TBK m. 77 kapsamında değerlendirilir.",
        detailedExplanation: `Ecrimisil, mülkiyet hakkının korunmasında önemli bir tazminat aracıdır. Bir taşınmazı herhangi bir hukuki dayanağı olmadan kullanan kişi (fuzuli şagil), taşınmaz sahibine ecrimisil ödemekle yükümlüdür.

Ecrimisil hesaplanırken taşınmazın emsal kira bedeli esas alınır. Ancak ecrimisil, normal kira bedelinden daha yüksek belirlenebilir; çünkü haksız işgal karşılığı ödenen bir tazminattır. Bilirkişi raporu ile taşınmazın bulunduğu bölgedeki emsal kira değerleri araştırılarak hesaplanır.

Kira sözleşmesi sona erdikten sonra taşınmazı boşaltmayan kiracı da fuzuli şagil konumuna düşer ve ecrimisil ödemekle yükümlü olabilir. Bu durum özellikle tahliye davası sürecinde gündeme gelir.

Ecrimisil talebi geriye dönük olarak 5 yıla kadar yapılabilir. Hazine taşınmazlarında ecrimisil idari yoldan tahsil edilirken, özel mülkiyetteki taşınmazlarda dava yoluyla talep edilir.`,
        legalBasis: "TMK m. 995, TBK m. 77",
        category: "tazminat",
        relatedTermSlugs: ["fuzuli-isgal", "maddi-tazminat", "haksiz-fiil"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir", "izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler"],
        relatedServiceAnchor: "#tazminat",
        faqs: [
            {
                question: "Ecrimisil ile kira bedeli arasındaki fark nedir?",
                answer: "Kira bedeli sözleşmeye dayalı bir ödeme iken, ecrimisil haksız işgal nedeniyle ödenen bir tazminattır. Ecrimisil miktarı normal kira bedelinden daha yüksek olabilir."
            },
            {
                question: "Ecrimisil geriye dönük kaç yıl talep edilebilir?",
                answer: "Özel hukukta ecrimisil talebi geriye dönük 5 yıla kadar yapılabilir. Bu süre, haksız işgalin sona erdiği tarihten itibaren hesaplanır."
            },
            {
                question: "Ecrimisil nasıl hesaplanır?",
                answer: "Taşınmazın bulunduğu bölgedeki emsal kira bedelleri araştırılarak bilirkişi raporu ile hesaplanır. Taşınmazın niteliği, konumu ve kullanım amacı dikkate alınır."
            }
        ],
        keywords: ["ecrimisil nedir", "ecrimisil hesaplama", "haksız işgal tazminatı", "ecrimisil davası"],
        lastUpdated: "2026-03-16",
    },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
    return glossaryTerms.find((t) => t.slug === slug);
}

export function getAllGlossaryTerms(): GlossaryTerm[] {
    return glossaryTerms;
}

export function getGlossaryTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
    return glossaryTerms.filter((t) => t.category === category);
}

export function getRelatedTerms(slug: string): GlossaryTerm[] {
    const term = getGlossaryTerm(slug);
    if (!term) return [];
    return term.relatedTermSlugs
        .map((s) => getGlossaryTerm(s))
        .filter((t): t is GlossaryTerm => t !== undefined);
}
