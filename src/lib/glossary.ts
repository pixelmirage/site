export type GlossaryCategory = "tahliye" | "kira-bedeli" | "sozlesme" | "haklar";

export const categoryLabels: Record<GlossaryCategory, string> = {
    tahliye: "Tahliye ve Çıkış Süreçleri",
    "kira-bedeli": "Kira Bedeli ve Artış",
    sozlesme: "Kira Sözleşmesi",
    haklar: "Haklar ve Yükümlülükler",
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
    faqs: { question: string; answer: string }[];
    keywords: string[];
    lastUpdated: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "Tahliye Taahhütnamesi",
        slug: "tahliye-taahhutnamesi",
        shortDescription: "Kiracının belirli bir tarihte taşınmazı boşaltacağını yazılı olarak taahhüt ettiği hukuki belge.",
        definition: "Tahliye taahhütnamesi, kiracının kiralanmış taşınmazı belirli bir tarihte boşaltacağını yazılı olarak taahhüt ettiği hukuki belgedir. Türk Borçlar Kanunu m. 352/1 uyarınca, kiralananın tesliminden sonra alınan bu taahhütname ile kiraya veren, taahhüt edilen tarihte tahliye davası açabilir.",
        detailedExplanation: `Tahliye taahhütnamesi, kira hukukunda ev sahibinin en güçlü tahliye araçlarından biridir. TBK m. 352/1'e göre, kiracı kiralananın teslim edilmesinden sonra yazılı olarak belirli bir tarihte taşınmazı boşaltacağını taahhüt etmişse, bu tarih geldiğinde kiraya veren icra takibi başlatabilir veya tahliye davası açabilir.

Taahhütnamenin geçerli olabilmesi için bazı şartların sağlanması gerekir: Taahhüt yazılı olmalıdır, kiralananın tesliminden sonra düzenlenmiş olmalıdır ve belirli bir tahliye tarihi içermelidir. Kira sözleşmesinin imzalandığı tarihte alınan taahhütnameler geçersiz sayılır.

Uygulamada en sık karşılaşılan sorun, taahhütnamenin kira sözleşmesiyle aynı anda imzalanmasıdır. Bu durumda kiracı, baskı altında imzaladığını ileri sürerek taahhütnamenin geçersizliğini iddia edebilir. Noter onaylı taahhütnameler ispat açısından daha güçlüdür.

Taahhüt edilen tarihten itibaren bir ay içinde icra takibi başlatılmalı veya tahliye davası açılmalıdır; aksi halde taahhütname hükmünü yitirir.`,
        legalBasis: "TBK m. 352/1",
        category: "tahliye",
        relatedTermSlugs: ["kira-sozlesmesi", "ihtiyac-nedeniyle-tahliye", "iki-hakli-ihtar"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir"],
        relatedServiceAnchor: "#tahliye",
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
        relatedBlogSlugs: [],
        relatedServiceAnchor: "#kira",
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
        relatedBlogSlugs: ["ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir", "ihtiyac-nedeniyle-tahliye-davasi"],
        relatedServiceAnchor: "#tahliye",
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
        shortDescription: "Kira uyuşmazlıklarında dava açmadan önce başvurulması zorunlu olan alternatif çözüm yöntemi.",
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
        shortDescription: "Kiracının bir kira yılı içinde iki kez kira bedelini geç ödemesi sebebiyle açılan tahliye davası.",
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
        relatedBlogSlugs: ["isyeri-kira-sozlesmesi-rehberi", "isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar"],
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
        shortDescription: "Kiracının kira sözleşmesi başlangıcında güvence olarak ödediği teminat bedeli.",
        definition: "Depozito (güvence bedeli), kiracının kira sözleşmesinin başlangıcında kiraya verene olası zararları karşılamak amacıyla verdiği teminat bedelidir. TBK m. 342'ye göre, konut ve çatılı işyeri kiralarında güvence bedeli üç aylık kira bedelini aşamaz ve kiracının bankada açılacak vadeli bir hesaba yatırılması gerekir.",
        detailedExplanation: `Depozito, kira ilişkisinin başlangıcında kiracı tarafından ödenen ve kira sözleşmesinin sona ermesinde iade edilen güvence bedelidir.

TBK m. 342 uyarınca, konut ve çatılı işyeri kiralarında güvence bedeli üç aylık kira bedelini geçemez. Para olarak verilen güvence, kiraya verenin onayı olmaksızın kiracı tarafından çekilemeyecek şekilde vadeli bir tasarruf hesabına yatırılmalıdır.

Kira sözleşmesi sona erdiğinde, kiraya veren güvence bedeli üzerinde hak iddia ediyorsa (hasar, ödenmeyen kira vb.) kiracının rızasını almalı veya icra takibi başlatmalıdır. Kiraya veren hak iddia etmezse, kiracı bankadan güvence bedelini geri alabilir.

Uygulamada depozito genellikle elden verilmekte, bu durum iade aşamasında ispat sorunlarına yol açmaktadır. Banka aracılığıyla yapılması hem kiracıyı hem kiraya vereni korur.`,
        legalBasis: "TBK m. 342",
        category: "sozlesme",
        relatedTermSlugs: ["kira-sozlesmesi", "kiraci-haklari", "kira-artis-orani"],
        relatedBlogSlugs: [],
        relatedServiceAnchor: "#gayrimenkul",
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
        shortDescription: "Kira bedelinin yıllık yenilenmesinde uygulanabilecek azami artış oranını belirleyen yasal sınır.",
        definition: "Kira artış oranı, konut kiralarında yıllık kira yenilemesinde uygulanabilecek azami artış oranıdır. TBK m. 344'e göre, taraflar arasında kira artışına ilişkin anlaşma yapılmışsa bile bu artış bir önceki kira yılında tüketici fiyat endeksindeki (TÜFE) on iki aylık ortalamalardaki değişim oranını geçemez.",
        detailedExplanation: `Kira artış oranı, kiracıları aşırı kira artışlarından koruyan önemli bir yasal düzenlemedir. TBK m. 344 uyarınca, konut kiralarında yıllık artış oranı TÜFE on iki aylık ortalamasını geçemez.

Bu sınırlama ilk beş yıl için mutlak olarak uygulanır. Beş yıldan sonra ise kira tespit davası yoluyla hâkim tarafından hakkaniyete uygun bir kira bedeli belirlenebilir. Bu durumda TÜFE sınırı uygulanmaz.

İşyeri kiralarında ise kira artış oranı tarafların anlaşmasına bağlıdır; TÜFE sınırlaması yalnızca konut kiraları için geçerlidir.

2024 yılında sona eren %25 kira artış tavanı sonrasında, 2025 ve 2026 yıllarında yeniden TÜFE oranı üst sınır olarak uygulanmaktadır. Güncel TÜFE oranları TÜİK tarafından aylık olarak açıklanmaktadır.`,
        legalBasis: "TBK m. 344",
        category: "kira-bedeli",
        relatedTermSlugs: ["kira-tespit-davasi", "kira-uyarlama-davasi", "kira-sozlesmesi"],
        relatedBlogSlugs: [],
        relatedServiceAnchor: "#kira",
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
                answer: "Hayır, TÜFE artış sınırı yalnızca konut kiraları için geçerlidir. İşyeri kiralarında artış oranı tarafların serbest iradesine bırakılmıştır."
            }
        ],
        keywords: ["kira artış oranı nedir", "kira artış oranı hesaplama", "TÜFE kira artış oranı", "kira zam oranı 2026"],
        lastUpdated: "2026-03-04",
    },
    {
        term: "Kira Uyarlama Davası",
        slug: "kira-uyarlama-davasi",
        shortDescription: "Olağanüstü koşullar nedeniyle kira bedelinin değişen şartlara uyarlanmasını talep eden dava.",
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
        shortDescription: "Hukuki bir hakka dayanmaksızın bir taşınmazı kullanma veya işgal etme durumu.",
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
        shortDescription: "Türk Borçlar Kanunu tarafından konut ve çatılı işyeri kiracılarına tanınan yasal koruma ve haklar.",
        definition: "Kiracı hakları, Türk Borçlar Kanunu'nun konut ve çatılı işyeri kiralarına ilişkin emredici hükümleri kapsamında kiracıya tanınan yasal koruma ve haklardır. Bu haklar arasında kira bedelinde TÜFE sınırı, sözleşme süresinin bitiminde otomatik uzama, tahliye sebeplerinin sınırlı sayıda olması ve depozito güvencesi yer almaktadır.",
        detailedExplanation: `Türk hukuk sisteminde kiracı, konut ve çatılı işyeri kiralarında güçlü bir şekilde korunmaktadır. Bu koruma, TBK'nın emredici hükümlerinden kaynaklanır ve taraflar anlaşsa bile kiracı aleyhine değiştirilemez.

Kiracının temel hakları şunlardır: Kira sözleşmesinin süre bitiminde kendiliğinden sona ermemesi (TBK m. 347), kira artışında TÜFE sınırı (TBK m. 344), tahliye sebeplerinin kanunda sınırlı sayıda belirlenmiş olması, depozitonun üç aylık kira ile sınırlandırılması (TBK m. 342) ve kiralananın ayıplarının giderilmesini talep hakkı.

Kiracı, kira sözleşmesinde kendi aleyhine düzenlenen hükümleri geçersiz sayabilir. Örneğin, cezai şart, erken tahliye tazminatı gibi kiracı aleyhine hükümler kural olarak geçersizdir.

Kiracının yükümlülükleri ise kira bedelini zamanında ödeme, kiralananı özenle kullanma, komşulara saygı gösterme ve sözleşme koşullarına uyma olarak özetlenebilir. Bu yükümlülüklere aykırılık, tahliye sebebi oluşturabilir.`,
        legalBasis: "TBK m. 339-356",
        category: "haklar",
        relatedTermSlugs: ["kira-sozlesmesi", "depozito", "kira-artis-orani", "10-yillik-uzama-suresi"],
        relatedBlogSlugs: ["ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir"],
        relatedServiceAnchor: "#kira",
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
