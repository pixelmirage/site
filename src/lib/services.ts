// Kira hukuku hizmet sayfaları — tek kaynak (ana sayfa kartları, menü, footer, sitemap, alt sayfalar).
// Hukuki atıflar 6098 sayılı TBK, 2004 sayılı İİK, 6100 sayılı HMK ve 6325 sayılı HUAK güncel metinlerinden kontrol edilmiştir.

export type ServiceSection = { title: string; paragraphs?: string[]; list?: string[] };
export type Service = {
    slug: string;
    name: string; // kısa ad (menü / kart)
    h1: string;
    title: string; // <title> (absolute)
    description: string; // meta description (≤155)
    cardDesc: string; // ana sayfa kartı (kullanıcı onaylı metin)
    navDesc: string;
    lead: string;
    kw: string; // tam anahtar ifade (cümle içinde kullanılır)
    intro: string; // içerik ilk paragrafı (kw ile başlar)
    sections: ServiceSection[];
    steps: { title: string; desc: string }[];
    documents: string[];
    court: string[];
    mediation: string;
    faqs: { question: string; answer: string }[];
    blogs: { title: string; slug: string }[];
    extraLinks?: { title: string; href: string }[];
    waText: string;
};

export const SITE = "https://mertkagancetin.com";

export const services: Service[] = [
    {
        slug: "izmir-kiraci-tahliye-davasi-avukati",
        name: "Kiracı tahliye davası",
        h1: "İzmir Kiracı Tahliye Davası Avukatı",
        title: "İzmir Kiracı Tahliye Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kiracı tahliye davası: ihtiyaç, yeni malik, iki haklı ihtar, 10 yıllık uzama sebepleri, dava süreleri, arabuluculuk ve süreç. Tel: 0544 585 46 45",
        cardDesc: "İhtiyaç, temerrüt, iki haklı ihtar veya 10 yıllık uzama süresinin dolması gibi sebeplerden dosyanıza uygun yasal yol belirlenir; ihtarnameden karara kadar süreç takip edilir.",
        navDesc: "İhtiyaç, yeni malik, iki haklı ihtar, 10 yıllık uzama",
        lead: "Konut ve çatılı işyeri kiralarında kiraya veren, sözleşme süresi bitti diye kiracıyı çıkaramaz; tahliye ancak kanunda sayılan sebeplerden biriyle ve çoğu zaman bir aylık dava süresi içinde istenebilir. Bu sayfada tahliye sebepleri, süreler, arabuluculuk aşaması ve dava sürecinin işleyişi özetlenmiştir.",
        kw: "İzmir kiracı tahliye davası avukatı",
        intro: "İzmir kiracı tahliye davası avukatı Av. Mert Kağan Çetin tarafından, kiraya verenin tahliye talebinde ve kiracının bu talebe karşı savunmasında ihtarnameden karara kadar süreç takip edilir.",
        sections: [
            {
                title: "Tahliye sebepleri kanunda sınırlı olarak sayılmıştır",
                paragraphs: [
                    "Türk Borçlar Kanunu'na (TBK) göre konut ve çatılı işyeri kiralarında kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez (TBK m. 347). Dava yoluyla sona erdirmeye ilişkin hükümler kiracı aleyhine değiştirilemez (TBK m. 354); sözleşmeye eklenen farklı tahliye sebepleri bu nedenle geçerli değildir. Başlıca tahliye sebepleri şunlardır:",
                ],
                list: [
                    "Kiraya verenin gereksinimi (TBK m. 350/1): Kiralananın kiraya verenin kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu kişiler için konut ya da işyeri olarak kullanılması zorunluluğu. Gereksinimin gerçek, samimi ve sürekli olması aranır.",
                    "Yeniden inşa ve imar (TBK m. 350/2): Esaslı onarım, genişletme veya değişiklik gerekli ve bu işler sırasında kiralananın kullanımı imkânsızsa.",
                    "Yeni malikin gereksinimi (TBK m. 351): Taşınmazı sonradan edinen kişi, edinmeden itibaren bir ay içinde kiracıya yazılı bildirimde bulunursa altı ay sonra dava açabilir; dilerse sözleşme süresinin bitiminden itibaren bir ay içinde de dava açabilir.",
                    "[İki haklı ihtar](/sozluk/iki-hakli-ihtar/) (TBK m. 352/2): Bir kira yılı içinde kira bedelinin ödenmemesi nedeniyle kiracıya yazılı olarak iki haklı ihtarda bulunulmasına sebep olunmuşsa, ihtarların yapıldığı kira yılının bitiminden itibaren bir ay içinde dava açılabilir.",
                    "Kiracının veya eşinin aynı ilçede konutu bulunması (TBK m. 352/3): Kiracının veya birlikte yaşadığı eşinin aynı ilçe veya belde belediye sınırları içinde oturmaya elverişli bir konutu varsa ve kiraya veren bunu sözleşme kurulurken bilmiyorsa, sözleşmenin bitiminden itibaren bir ay içinde dava açılabilir.",
                    "On yıllık uzama süresinin dolması (TBK m. 347): Belirli süreli sözleşmelerde [on yıllık uzama süresi](/sozluk/10-yillik-uzama-suresi/) sonunda kiraya veren, izleyen her uzama yılının bitiminden en az üç ay önce yazılı bildirimde bulunarak sebep göstermeksizin sözleşmeyi sona erdirebilir. Belirsiz süreli sözleşmelerde kiranın başlangıcından on yıl geçtikten sonra genel hükümlere göre fesih bildirimi yapılabilir.",
                    "Yazılı tahliye taahhüdü (TBK m. 352/1) ve kira bedelinin ödenmemesi (TBK m. 315): Bu iki yolda dava yerine icra takibi de mümkündür; ayrıntılar ilgili hizmet sayfalarında anlatılmıştır.",
                ],
            },
            {
                title: "Süreler ve bildirimler",
                paragraphs: [
                    "Tahliye davalarında süreler hak düşürücü niteliktedir; kaçırılması halinde tahliye o kira dönemi için istenemez. Gereksinim ve imar sebebiyle açılacak dava, belirli süreli sözleşmelerde sürenin sonundan; belirsiz süreli sözleşmelerde fesih dönemine ve bildirim sürelerine uyularak belirlenecek tarihten itibaren bir ay içinde açılmalıdır (TBK m. 350).",
                    "Konut ve çatılı işyeri kiralarında fesih bildirimi yazılı olmalıdır (TBK m. 348). Kiraya veren, dava açma süresi içinde dava açacağını kiracıya yazılı olarak bildirirse dava açma süresi bir kira yılı uzamış sayılır (TBK m. 353).",
                    "Gereksinim amacıyla boşaltılan taşınmaz, haklı sebep olmaksızın üç yıl geçmedikçe eski kiracıdan başkasına kiralanamaz; aksi halde eski kiracıya son kira yılında ödenen bir yıllık kira bedelinden az olmamak üzere tazminat ödenir (TBK m. 355).",
                ],
            },
        ],
        steps: [
            { title: "Ön görüşme ve belge inceleme", desc: "Kira sözleşmesi, tapu kaydı, ihtar ve bildirimler incelenir; dosyaya uygun tahliye sebebi ve süre hesabı belirlenir." },
            { title: "Gerekli bildirimlerin yapılması", desc: "Yeni malik bildirimi, on yıllık uzama sonrası fesih bildirimi veya TBK m. 353 bildirimi gibi yazılı bildirimler noter aracılığıyla yapılabilir." },
            { title: "Zorunlu arabuluculuk", desc: "Dava açılmadan önce arabuluculuk bürosuna başvurulur. Anlaşma sağlanırsa tahliye tarihi anlaşma belgesine yazılır." },
            { title: "Dava açılması", desc: "Anlaşma sağlanamazsa son tutanak dava dilekçesine eklenerek sulh hukuk mahkemesinde tahliye davası açılır." },
            { title: "Yargılama", desc: "Basit yargılama usulüne göre dilekçeler, ön inceleme ve tahkikat aşamaları yürütülür; gereksinim davalarında tanık dinlenebilir, keşif yapılabilir." },
            { title: "Karar ve icra", desc: "Tahliye kararı ilamlı icra yoluyla yerine getirilir. Kanun yoluna başvuran kiracı, teminat göstererek icranın geri bırakılmasını isteyebilir (İİK m. 36)." },
        ],
        documents: [
            "Kira sözleşmesi ve varsa ek protokoller",
            "Tapu kaydı (yeni malik ise edinme tarihini gösteren belge)",
            "Gönderilen ihtarname ve bildirimler ile tebliğ şerhleri",
            "Gereksinimi gösteren belgeler (mevcut kira sözleşmesi, tayin/atama yazısı, evlilik veya sağlık belgesi gibi)",
            "Nüfus kayıt örneği (gereksinim yakını için ise)",
            "Kira ödeme kayıtları (iki haklı ihtar sebebinde)",
        ],
        court: [
            "Görevli mahkeme, dava değerine bakılmaksızın sulh hukuk mahkemesidir (HMK m. 4/1-a). Sulh hukuk mahkemesinde görülen davalar basit yargılama usulüne tabidir (HMK m. 316/1-a).",
            "Yetkili mahkeme genel kurala göre davalının yerleşim yeri mahkemesidir (HMK m. 6); sözleşmeden doğan davalar sözleşmenin ifa edileceği yerde de açılabilir (HMK m. 10). İzmir'deki taşınmazlara ilişkin davalar uygulamada çoğunlukla taşınmazın bulunduğu yerdeki sulh hukuk mahkemesinde açılır.",
        ],
        mediation: "Kira ilişkisinden doğan uyuşmazlıklarda dava açılmadan önce [arabulucuya başvurulması dava şartıdır](/sozluk/zorunlu-arabuluculuk/) (HUAK m. 18/B). Arabulucuya başvurulmadan açılan dava usulden reddedilir. Başvuru tarihinden son tutanağın düzenlendiği tarihe kadar hak düşürücü süreler işlemez (HUAK m. 18/A-15). Başvurunun zamanlaması da önemlidir: dava açma koşulları oluşmadan yapılan başvuru, sonradan açılacak davayı etkileyebilir.",
        faqs: [
            { question: "Kira sözleşmesinin süresi bitince ev veya dükkân sahibi kiracıyı çıkarabilir mi?", answer: "Hayır. Konut ve çatılı işyeri kiralarında kiracı süre bitiminden en az on beş gün önce bildirimde bulunmazsa sözleşme aynı koşullarla bir yıl uzar ve kiraya veren süre bitimine dayanarak sözleşmeyi sona erdiremez (TBK m. 347). Tahliye için kanunda sayılan sebeplerden birinin bulunması veya on yıllık uzama süresinin dolması gerekir." },
            { question: "İhtiyaç nedeniyle tahliye davası ne zaman açılmalıdır?", answer: "Belirli süreli sözleşmelerde kira süresinin bitiminden itibaren bir ay içinde açılmalıdır (TBK m. 350). Bu süre içinde kiracıya dava açılacağı yazılı olarak bildirilirse süre bir kira yılı uzar (TBK m. 353). Yeni malik ise edinmeden itibaren bir ay içinde yazılı bildirim yaparak altı ay sonra dava açabilir (TBK m. 351)." },
            { question: "Tahliye davasından önce arabulucuya gitmek zorunlu mu?", answer: "Evet. Dava yoluyla tahliye istemlerinde arabulucuya başvuru dava şartıdır (HUAK m. 18/B). Yalnızca İcra ve İflas Kanunu'na göre ilamsız icra yoluyla tahliye talepleri bu şartın dışındadır." },
            { question: "Tahliye davası ne kadar sürer?", answer: "Süre; tahliye sebebine, tebligatlara, tanık ve keşif ihtiyacına ve mahkemenin iş yüküne göre değişir. Dosyanıza ilişkin değerlendirme belgeler incelendikten sonra yapılabilir." },
            { question: "Kiracı hangi hallerde tahliye edilir?", answer: "Kiracı ancak kanunda sayılan sebeplerle tahliye edilebilir: kiraya verenin veya yakınlarının konut ya da işyeri gereksinimi, yeniden inşa ve imar, yeni malikin gereksinimi (TBK m. 350-351), yazılı tahliye taahhüdü, bir kira yılında iki haklı ihtar, kiracının aynı ilçede konutu bulunması (TBK m. 352), kira borcunun ödenmemesi (TBK m. 315) ve on yıllık uzama süresinin dolması (TBK m. 347). Sözleşmeye eklenen başka tahliye sebepleri kiracı aleyhine olduğundan geçersizdir (TBK m. 354)." },
            { question: "Kaç yıl oturan kiracı çıkarılabilir?", answer: "Belirli süreli sözleşmelerde on yıllık uzama süresi dolduktan sonra kiraya veren, izleyen her uzama yılının bitiminden en az üç ay önce yazılı bildirimde bulunarak sebep göstermeden sözleşmeyi sona erdirebilir (TBK m. 347). Yargıtay uygulamasında on yıllık süre, ilk sözleşme süresinin bitiminden itibaren hesaplanır; bir yıllık sözleşmede bu yolla tahliye, en erken on ikinci kira yılının sonu için istenebilir. Belirsiz süreli sözleşmelerde kiranın başlangıcından on yıl geçtikten sonra genel hükümlere göre fesih bildirimi yapılabilir." },
            { question: "Kiracıyı tahliye etmenin en kısa yolu hangisidir?", answer: "Hangi yolun izleneceği tahliye sebebine bağlıdır. Geçerli bir yazılı tahliye taahhüdü veya ödenmeyen kira varsa, dava açmadan ve arabulucuya gitmeden icra yoluyla tahliye istenebilir (İİK m. 269-275). Gereksinim, iki haklı ihtar veya on yıllık uzama gibi sebeplerde ise önce zorunlu arabuluculuk, anlaşma sağlanamazsa sulh hukuk mahkemesinde dava yoluna gidilir." },
            { question: "Tahliye davası açma süresi ne kadardır?", answer: "Gereksinim, imar, iki haklı ihtar ve kiracının aynı ilçede konutu bulunması sebeplerinde dava, kanunda belirtilen tarihten itibaren bir ay içinde açılmalıdır (TBK m. 350, 352). Yeni malik, edinmeden itibaren bir ay içinde yazılı bildirim yaparak altı ay sonra dava açabilir (TBK m. 351). Bu süreler içinde kiracıya dava açılacağının yazılı olarak bildirilmesi halinde süre bir kira yılı uzar (TBK m. 353)." },
        ],
        blogs: [
            { title: "Yeni malikin ihtiyaç nedeniyle tahliye talebi", slug: "yeni-malik-ihtiyac-tahliye-yurt-disi" },
            { title: "Arabulucuya erken başvuru ve usulden ret", slug: "tahliye-davasi-arabuluculuk-erken-basvuru" },
            { title: "Kiracının kendi evi varsa tahliye", slug: "kiracinin-kendi-evi-tahliye-davasi" },
            { title: "Kendiliğinden tahliye eden kiracı ve TBK 355 tazminatı", slug: "kiraci-tahliye-tazminati-tbk-355" },
        ],
        waText: "Merhaba, kiracı tahliyesi konusunda görüşmek istiyorum.",
    },
    {
        slug: "izmir-kira-tespit-davasi-avukati",
        name: "Kira tespit davası",
        h1: "İzmir Kira Tespit Davası Avukatı",
        title: "İzmir Kira Tespit Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira tespit davası: TBK 344 ve 345, TÜFE sınırı, 5 yıllık dönem, emsal kira ve bilirkişi, dava açma süresi ve arabuluculuk. Tel: 0544 585 46 45",
        cardDesc: "Güncel emsal kiralar ve TÜFE sınırı esas alınarak kira bedelinin ne olması gerektiği değerlendirilir; dava süreleri kaçırılmadan açılır ve bilirkişi aşaması dahil takip edilir.",
        navDesc: "Kira bedelinin belirlenmesi (TBK m. 344-345)",
        lead: "Kira tespit davası, yenilenen kira döneminde uygulanacak kira bedelinin mahkemece belirlenmesi için açılır. Davanın sonucu; sözleşmenin süresine, beş yıllık dönemin dolup dolmadığına ve davanın açıldığı tarihe göre önemli ölçüde değişir.",
        kw: "İzmir kira tespit davası avukatı",
        intro: "İzmir kira tespit davası avukatı Av. Mert Kağan Çetin tarafından, yeni dönem kira bedelinin belirlenmesi talebinde kiraya veren veya kiracı adına arabuluculuk ve dava süreci takip edilir.",
        sections: [
            {
                title: "Kira bedeli nasıl belirlenir? (TBK m. 344)",
                list: [
                    "İlk beş yıl içinde: Tarafların yenilenen kira dönemine ilişkin artış anlaşmaları, bir önceki kira yılında tüketici fiyat endeksindeki (TÜFE) [on iki aylık ortalamalara göre değişim oranını](/sozluk/kira-artis-orani/) geçmemek koşuluyla geçerlidir. Anlaşma yoksa hâkim, bu oranı geçmemek üzere kiralananın durumunu dikkate alarak hakkaniyete göre karar verir.",
                    "Beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde ve her beş yılın sonunda: Yeni kira yılındaki bedel; TÜFE değişim oranı, kiralananın durumu ve emsal kira bedelleri göz önünde tutularak hakkaniyete uygun biçimde belirlenir. Bu şekilde belirlenen bedel, izleyen yıllarda yine TÜFE sınırına göre değiştirilebilir.",
                    "Yabancı para cinsinden kira: Beş yıl geçmedikçe kira bedelinde değişiklik yapılamaz; ancak aşırı ifa güçlüğü hükmü (TBK m. 138) saklıdır. Beş yıl sonra yabancı paranın değerindeki değişiklikler de dikkate alınır.",
                ],
            },
            {
                title: "Dava açma süresi ve kararın etkisi (TBK m. 345)",
                paragraphs: [
                    "[Kira tespit davası](/sozluk/kira-tespit-davasi/) her zaman açılabilir. Ancak mahkemenin belirleyeceği bedelin hangi dönemden itibaren geçerli olacağı, davanın açılma zamanına bağlıdır:",
                ],
                list: [
                    "Dava yeni kira döneminin başlangıcından en geç otuz gün önce açılırsa veya kiraya veren bu süre içinde kiracıya kira bedelinin artırılacağını yazılı olarak bildirmiş ve dava izleyen yeni kira dönemi sonuna kadar açılmışsa, belirlenen bedel yeni dönemin başından itibaren geçerlidir.",
                    "Sözleşmede yeni dönemde kiranın artırılacağına ilişkin bir hüküm varsa, yeni kira döneminin sonuna kadar açılan davada belirlenen bedel o dönemin başından itibaren geçerli olur.",
                    "Bu koşullar yoksa belirlenen bedel ancak davayı izleyen kira döneminden itibaren uygulanır.",
                ],
            },
            {
                title: "Emsal, bilirkişi ve hakkaniyet indirimi",
                paragraphs: [
                    "Beş yıllık dönemin sonunda yapılan tespitte mahkeme, genellikle mahallinde keşif yaparak bilirkişi incelemesi yaptırır. Bilirkişi; kiralananın konumu, büyüklüğü, yaşı ve niteliği bakımından benzer taşınmazların kira bedellerini (emsal) karşılaştırır. Yargıtay uygulamasında, mevcut kiracı yönünden emsal bedel üzerinden belirli oranda hakkaniyet indirimi yapılması yerleşik bir ölçüttür.",
                    "Davanın kiraya veren tarafından açılması yaygın olsa da kiracı da kira bedelinin belirlenmesini isteyebilir. Kiracının dava süresince kira bedelini sözleşmeye göre ödemeye devam etmesi, temerrüt riskini önlemek için önemlidir.",
                ],
            },
        ],
        steps: [
            { title: "Ön görüşme ve süre hesabı", desc: "Sözleşme başlangıcı, kira dönemleri ve beş yıllık dönemin dolup dolmadığı belirlenir; TBK m. 345 bakımından dava zamanlaması planlanır." },
            { title: "Yazılı bildirim", desc: "Gerekli durumlarda yeni dönemden en az otuz gün önce kiracıya artış bildirimi yapılır." },
            { title: "Emsal araştırması", desc: "Bölgedeki benzer taşınmazların kira bedelleri, ilanlar ve varsa kira sözleşmeleri derlenir." },
            { title: "Zorunlu arabuluculuk", desc: "Dava öncesi arabulucuya başvurulur; anlaşma halinde yeni kira bedeli anlaşma belgesine yazılır." },
            { title: "Dava ve bilirkişi incelemesi", desc: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılır; keşif ve bilirkişi raporuna karşı itirazlar süresinde sunulur." },
            { title: "Karar ve uygulama", desc: "Belirlenen kira bedeli, TBK m. 345'e göre ilgili kira döneminden itibaren uygulanır; fark alacağı için ayrıca takip yapılabilir." },
        ],
        documents: [
            "Kira sözleşmesi ve önceki dönemlere ait artış yazışmaları",
            "Son kira dönemlerine ait ödeme dekontları",
            "Kiracıya gönderilen artış bildirimi (varsa)",
            "Bölgedeki emsal kira ilanları veya sözleşmeleri",
            "Tapu kaydı ve kiralananın niteliğini gösteren belgeler, fotoğraflar",
        ],
        court: [
            "Görevli mahkeme sulh hukuk mahkemesidir (HMK m. 4/1-a); dava basit yargılama usulüne göre görülür (HMK m. 316/1-a).",
            "Kira tespit davalarında nispi harç uygulanır; harç hesabında yıllık kira farkı esas alınır. Yargılama giderleri ve vekâlet ücretinin kime yükleneceği, davanın sonucuna göre belirlenir.",
        ],
        mediation: "Kira bedelinin belirlenmesine ilişkin uyuşmazlıklarda da dava açılmadan önce arabulucuya başvurulması dava şartıdır (HUAK m. 18/B). Arabuluculukta tarafların yeni kira bedeli üzerinde anlaşması mümkündür; anlaşma belgesinin icra edilebilirlik şerhi taşınmazın bulunduğu yer sulh hukuk mahkemesinden alınır.",
        faqs: [
            { question: "Kira tespit davası ne zaman açılmalıdır?", answer: "Belirlenecek bedelin yeni kira döneminin başından itibaren geçerli olması için dava yeni dönemin başlangıcından en geç otuz gün önce açılmalı ya da bu süre içinde kiracıya yazılı artış bildirimi yapılıp dava yeni dönem sonuna kadar açılmalıdır (TBK m. 345). Sözleşmede artış hükmü varsa yeni dönem sonuna kadar açılan dava da aynı sonucu doğurur." },
            { question: "Beş yıl dolmadan kira tespit davası açılabilir mi?", answer: "Açılabilir; ancak ilk beş yıl içinde hâkim, kira bedelini bir önceki kira yılındaki TÜFE on iki aylık ortalama değişim oranını geçmeyecek şekilde belirler. Emsal kira bedellerine göre belirleme, beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde yapılır (TBK m. 344)." },
            { question: "Kiracı kira tespit davası açabilir mi?", answer: "Evet. Kira bedelinin belirlenmesi istemi kiracı tarafından da ileri sürülebilir. Özellikle kiraya verenin TÜFE sınırını aşan artış talep ettiği durumlarda kiracının hukuki yolları değerlendirilebilir." },
            { question: "Kira tespit davasından önce arabuluculuk zorunlu mu?", answer: "Evet. Kira ilişkisinden kaynaklanan uyuşmazlıklarda arabulucuya başvuru dava şartıdır (HUAK m. 18/B). Son tutanak dava dilekçesine eklenir." },
            { question: "Emsal kira bedeli nasıl tespit edilir ve kimlere uygulanmaz?", answer: "Emsal kira; kiralananın bulunduğu bölgedeki konum, büyüklük, yaş ve nitelik bakımından benzer taşınmazların güncel kira bedelleri karşılaştırılarak, çoğunlukla keşif ve bilirkişi incelemesiyle belirlenir. Emsal kriteri yalnızca beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde ve her beş yılın sonunda uygulanır (TBK m. 344/3). İlk beş yıl içindeki tespitlerde emsale bakılmaz; artış, bir önceki kira yılının TÜFE on iki aylık ortalama değişim oranıyla sınırlıdır (TBK m. 344/1)." },
            { question: "Kira tespit davasında hâkim neye göre karar verir?", answer: "Beş yıllık dönem dolmamışsa hâkim, TÜFE on iki aylık ortalama değişim oranını aşmayacak şekilde ve kiralananın durumunu göz önünde tutarak hakkaniyete göre karar verir. Beş yıllık dönem dolmuşsa TÜFE değişim oranı, kiralananın durumu ve emsal kira bedelleri birlikte değerlendirilir (TBK m. 344). Yargıtay uygulamasında, yeni kiracıya verilecek emsal bedelin aynen benimsenmesi yerine eski kiracı lehine hakkaniyet indirimi yapılması kabul edilmektedir." },
            { question: "Kira tespit davası açmadan önce ihtarname şart mı?", answer: "İhtarname dava şartı değildir; ancak sonucu doğrudan etkiler. Dava yeni kira döneminin başlangıcından en geç otuz gün önce açılırsa ya da kiraya veren bu süre içinde kira bedelinin artırılacağını kiracıya yazılı olarak bildirirse, belirlenen bedel yeni dönemin başından itibaren uygulanır; aksi halde bedel ancak sonraki dönem için geçerli olur (TBK m. 345/2). Dava açmadan önce zorunlu arabuluculuk aşamasının tamamlanması gerekir (HUAK m. 18/B)." },
            { question: "Kira tespit davası harcı aylık mı yıllık mı hesaplanır?", answer: "Kira tespit davalarında nispi harç alınır ve harç, uygulamada mevcut kira bedeli ile istenen kira bedeli arasındaki farkın bir yıllık tutarı üzerinden hesaplanır. Dava açılırken peşin harç yatırılır, kalan harç karar sonrasında tamamlanır." },
            { question: "Kira tespit davasında mahkeme masraflarını ve vekâlet ücretini kim öder?", answer: "Yargılama giderleri ve karşı taraf vekâlet ücreti, mahkeme tarafından davayı kaybeden tarafa yükletilir; dava kısmen kabul edilirse giderler tarafların haklılık oranına göre paylaştırılır (HMK m. 326). Vekâlet ücreti, Avukatlık Asgari Ücret Tarifesi'ne göre tespit edilen kira farkının bir yıllık tutarı esas alınarak hesaplanır." },
            { question: "Hakkaniyet indirimi vekâlet ücretini nasıl etkiler?", answer: "Hakkaniyet indirimi hâkimin takdirine bağlı olduğundan, Yargıtay uygulamasında indirim nedeniyle istenenden düşük belirlenen kısım davacının aleyhine sonuç doğurmaz; bu kısım için davacı aleyhine vekâlet ücreti ve yargılama gideri yükletilmemesi gerektiği kabul edilmektedir. Talep edilen bedelin emsallere göre makul belirlenmesi bu nedenle önem taşır." },
            { question: "Kira tespit davası avukatlık ücreti ne kadar tutar?", answer: "Avukatlık ücreti; dosyanın kapsamına, kira farkının tutarına ve yapılacak işlemlere göre belirlenir ve Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Harç, bilirkişi ve tebligat gibi yargılama giderleri ayrıca doğar. Dosyaya ilişkin ücret ve masraf bilgisi, İzmir kira tespit davası avukatı Av. Mert Kağan Çetin ile telefonla yapılan ön görüşmede verilir." },
            { question: "Kira tespit davası ne kadar sürer?", answer: "Süre; arabuluculuk aşamasına, tebligatlara, keşif ve bilirkişi incelemesine ve mahkemenin iş yüküne göre değişir. Dava basit yargılama usulüne tabi olduğundan dilekçe aşaması kısadır (HMK m. 316); dosyaya ilişkin değerlendirme belgeler incelendikten sonra yapılabilir." },
        ],
        blogs: [
            { title: "Kira tespitinde emsal, bilirkişi raporu ve harç", slug: "kira-tespit-davasi-emsal-bilirkisi" },
            { title: "Kira tespitinde hakkaniyet indirimi ve masraflar", slug: "kira-tespit-davasi-hakkaniyet-indirimi" },
            { title: "Kira bedeli, KDV ve stopaj", slug: "kira-bedeli-kdv-stopaj-net-brut" },
        ],
        extraLinks: [{ title: "Kira artış oranı hesaplama", href: "/kira-artis-orani-hesaplama/" }],
        waText: "Merhaba, kira tespit davası konusunda görüşmek istiyorum.",
    },
    {
        slug: "izmir-kira-uyarlama-davasi-avukati",
        name: "Kira uyarlama davası",
        h1: "İzmir Kira Uyarlama Davası Avukatı",
        title: "İzmir Kira Uyarlama Davası Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira uyarlama davası: TBK 138 aşırı ifa güçlüğü şartları, yabancı para kiralar, ihtirazi kayıt, arabuluculuk ve dava süreci. Tel: 0544 585 46 45",
        cardDesc: "Beklenmedik ekonomik değişiklikler karşısında kira bedelinin sözleşmeye uyarlanması talep edilebilir; şartların oluşup oluşmadığı incelenir ve dava yürütülür.",
        navDesc: "Aşırı ifa güçlüğünde uyarlama (TBK m. 138)",
        lead: "Kira uyarlama davası, sözleşme kurulduktan sonra ortaya çıkan olağanüstü bir değişiklik nedeniyle kira bedelinin yeni koşullara uyarlanması için açılır. Kira tespit davasından farklı olarak dayanağı TBK m. 138'deki aşırı ifa güçlüğü hükmüdür ve şartları sıkı yorumlanır.",
        kw: "İzmir kira uyarlama davası avukatı",
        intro: "İzmir kira uyarlama davası avukatı Av. Mert Kağan Çetin tarafından, sözleşme kurulurken öngörülemeyen olağanüstü değişiklikler nedeniyle kira bedelinin yeniden belirlenmesi talepleri değerlendirilir ve süreç takip edilir.",
        sections: [
            {
                title: "Uyarlamanın şartları (TBK m. 138)",
                list: [
                    "Sözleşmenin yapıldığı sırada taraflarca öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durumun ortaya çıkması",
                    "Bu durumun uyarlama isteyen taraftan kaynaklanmaması",
                    "Sözleşme kurulurken mevcut olguların, ifanın istenmesini dürüstlük kurallarına aykırı düşürecek derecede değişmesi",
                    "Uyarlama isteyen tarafın borcunu henüz ifa etmemiş olması veya aşırı ifa güçlüğünden doğan haklarını saklı tutarak (ihtirazi kayıtla) ifa etmiş olması",
                ],
                paragraphs: [
                    "Bu şartlar oluşmuşsa hâkimden [sözleşmenin yeni koşullara uyarlanması](/sozluk/kira-uyarlama-davasi/) istenebilir; uyarlama mümkün değilse sürekli edimli sözleşmelerde kural olarak fesih hakkı kullanılır. Hüküm yabancı para borçlarında da uygulanır.",
                ],
            },
            {
                title: "Yabancı para cinsinden kiralar ve beş yıllık süre",
                paragraphs: [
                    "Kira bedeli yabancı para olarak kararlaştırılmışsa, 1567 sayılı Kanun hükümleri saklı kalmak üzere beş yıl geçmedikçe kira bedelinde değişiklik yapılamaz; ancak aşırı ifa güçlüğü hükmü saklıdır (TBK m. 344/4). Kur artışlarının olağanüstü boyuta ulaştığı dönemlerde uyarlama talepleri bu kapsamda değerlendirilir.",
                    "Türk lirası kiralarda beş yıllık dönem dolmadan, TÜFE sınırının kira bedelini olağanüstü ölçüde düşük bıraktığı iddiasıyla uyarlama talep edilmesi de mümkündür; ancak mahkemeler olağanüstü değişiklik şartını somut verilerle aradığından dosyanın dikkatle hazırlanması gerekir.",
                ],
            },
            {
                title: "Uyarlama ve kira tespiti arasındaki fark",
                paragraphs: [
                    "[Kira tespit davası](/izmir-kira-tespit-davasi-avukati/), kanunun öngördüğü dönemlerde (özellikle beş yıllık dönem sonunda) kira bedelinin TBK m. 344'e göre belirlenmesini amaçlar. Uyarlama davası ise süre koşuluna bağlı olmaksızın, ancak olağanüstü bir değişiklik ispatlandığında sözleşme dengesinin yeniden kurulmasını sağlar. Hangi yolun izleneceği, sözleşmenin süresine ve değişikliğin niteliğine göre belirlenir.",
                ],
            },
        ],
        steps: [
            { title: "Ön görüşme ve şart incelemesi", desc: "Sözleşme tarihi, kira bedelinin para birimi ve sonradan ortaya çıkan değişiklik TBK m. 138 şartları yönünden değerlendirilir." },
            { title: "Haklarının saklı tutulması", desc: "Uyarlama istenecekse ödemelerin ihtirazi kayıtla yapılması ve bunun yazılı olarak bildirilmesi önerilir." },
            { title: "Zorunlu arabuluculuk", desc: "Dava öncesi arabulucuya başvurulur; tarafların yeni bedel üzerinde anlaşması mümkündür." },
            { title: "Dava açılması", desc: "Anlaşma sağlanamazsa sulh hukuk mahkemesinde uyarlama davası açılır; ekonomik veriler ve emsaller dosyaya sunulur." },
            { title: "Bilirkişi incelemesi", desc: "Mahkeme genellikle bilirkişi aracılığıyla sözleşmedeki dengenin ne ölçüde bozulduğunu ve uygun bedeli araştırır." },
            { title: "Karar", desc: "Mahkeme kira bedelini yeni koşullara uyarlar veya şartlar oluşmamışsa talebi reddeder." },
        ],
        documents: [
            "Kira sözleşmesi (para birimi ve artış maddeleri)",
            "Ödeme dekontları ve ihtirazi kayıt yazışmaları",
            "Olağanüstü değişikliği gösteren veriler (kur, endeks, piyasa değişimi)",
            "Emsal kira bedellerine ilişkin ilan ve belgeler",
        ],
        court: [
            "Görevli mahkeme sulh hukuk mahkemesidir (HMK m. 4/1-a); dava basit yargılama usulüne tabidir (HMK m. 316/1-a).",
            "Dava süresince kira bedelinin sözleşmeye göre ödenmeye devam edilmesi, temerrüt ve tahliye riskine karşı önemlidir.",
        ],
        mediation: "Kira uyarlama davası da kira ilişkisinden kaynaklanan bir uyuşmazlık olduğundan, dava açılmadan önce arabulucuya başvurulması dava şartıdır (HUAK m. 18/B).",
        faqs: [
            { question: "Kira uyarlama davası ile kira tespit davası arasındaki fark nedir?", answer: "Kira tespit davası TBK m. 344-345'e göre kanunun öngördüğü dönemlerde kira bedelinin belirlenmesine yöneliktir. Uyarlama davası ise TBK m. 138'e dayanır ve sözleşme kurulduktan sonra ortaya çıkan, öngörülemeyen olağanüstü bir değişikliğin ispatını gerektirir." },
            { question: "Döviz cinsinden kirada beş yıl dolmadan bedel değiştirilebilir mi?", answer: "Kural olarak beş yıl geçmedikçe değişiklik yapılamaz; ancak TBK m. 344/4 aşırı ifa güçlüğü hükmünü saklı tuttuğundan, olağanüstü kur değişikliği gibi durumlarda uyarlama talep edilebilir." },
            { question: "Uyarlama davası sürerken kira ödemeye devam edilmeli mi?", answer: "Evet. Sözleşmedeki bedelin ödenmemesi temerrüde ve tahliye riskine yol açabilir. Ödemelerin uyarlama hakkı saklı tutularak yapılması önerilir." },
            { question: "Kira uyarlama davasında arabuluculuk zorunlu mu?", answer: "Evet. Kira ilişkisinden kaynaklanan uyuşmazlıklarda dava öncesi arabuluculuk dava şartıdır (HUAK m. 18/B)." },
            { question: "Hangi durumlarda kira uyarlama davası açılabilir?", answer: "Uyarlama için sözleşme kurulurken taraflarca öngörülemeyen ve onlardan kaynaklanmayan olağanüstü bir durumun ortaya çıkması, bu durumun sözleşmenin kurulduğu andaki koşulları kiracı veya kiraya veren aleyhine aşırı ölçüde değiştirmesi ve borçlunun borcunu henüz ifa etmemiş ya da ihtirazi kayıtla ifa etmiş olması gerekir (TBK m. 138). Olağan enflasyon artışı tek başına yeterli sayılmaz." },
            { question: "Kiracı da kira uyarlama davası açabilir mi?", answer: "Evet. Uyarlama davası, koşulları oluşması halinde hem kiraya veren hem kiracı tarafından açılabilir. Örneğin olağanüstü ekonomik gelişmeler nedeniyle kira bedelinin kiracı aleyhine aşırı ölçüde ağırlaşması halinde kiracı da bedelin indirilmesini isteyebilir." },
        ],
        blogs: [
            { title: "Yenilenen kira sözleşmesi 5 yıllık süreyi sıfırlar mı?", slug: "kira-tespit-5-yil-yenilenen-sozlesme" },
            { title: "Kira tespitinde hakkaniyet indirimi ve masraflar", slug: "kira-tespit-davasi-hakkaniyet-indirimi" },
        ],
        waText: "Merhaba, kira uyarlama davası konusunda görüşmek istiyorum.",
    },
    {
        slug: "izmir-kira-alacagi-icra-takibi-avukati",
        name: "Kira alacağı ve icra takibi",
        h1: "İzmir Kira Alacağı ve İcra Takibi Avukatı",
        title: "İzmir Kira Alacağı İcra Takibi Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de ödenmeyen kira için icra takibi: İİK 269 tahliye talepli takip, 30 günlük süre, itiraz, itirazın kaldırılması ve tahliye. Tel: 0544 585 46 45",
        cardDesc: "Ödenmeyen kira bedelleri için icra takibi başlatılır, gerekirse tahliye talebi de eklenir; itiraz halinde itirazın kaldırılması veya iptali süreci takip edilir.",
        navDesc: "Ödenmeyen kira, tahliye talepli takip (İİK m. 269)",
        lead: "Kira bedeli veya yan giderler ödenmediğinde kiraya veren, alacağını icra yoluyla isteyebilir ve şartları varsa aynı takipte kiracının tahliyesini de talep edebilir. Hangi takip yolunun seçileceği; alacağın türüne, kira sözleşmesinin niteliğine ve tahliye istenip istenmediğine göre belirlenir.",
        kw: "İzmir kira alacağı icra takibi avukatı",
        intro: "İzmir kira alacağı icra takibi avukatı Av. Mert Kağan Çetin tarafından, ödenmeyen kira bedelleri için başlatılan icra takibinde ödeme emrinden itirazın kaldırılmasına ve gerektiğinde tahliyeye kadar süreç takip edilir.",
        sections: [
            {
                title: "Kira alacağı için başvurulabilecek yollar",
                list: [
                    "Tahliye talepli ilamsız takip (İİK m. 269 vd.): Kiracıya gönderilen ödeme emri, birikmiş kiranın konut ve çatılı işyeri kiralarında otuz gün içinde ödenmesi gerektiğini, ödenmezse icra mahkemesinden tahliye istenebileceğini bildirir (TBK m. 315).",
                    "Genel haciz yoluyla ilamsız takip: Yalnızca alacağın tahsili amaçlanıyor ve tahliye istenmiyorsa bu yol kullanılabilir.",
                    "Temerrüt nedeniyle fesih ve tahliye davası (TBK m. 315): Yazılı olarak en az otuz günlük süre verilip bu sürede ödeme yapılmazsa sözleşme feshedilerek sulh hukuk mahkemesinde tahliye davası açılabilir.",
                    "İki haklı ihtar (TBK m. 352/2): Aynı kira yılı içinde iki haklı ihtara sebep olunması, kira yılının bitiminden itibaren bir ay içinde açılacak davayla tahliye sebebidir.",
                ],
            },
            {
                title: "İtiraz süreci",
                paragraphs: [
                    "Ödeme emrinin tebliğinden itibaren kiracı yedi gün içinde itiraz edebilir; itiraz takibi durdurur (İİK m. 269). Kiracı itirazında kira sözleşmesini ve imzasını açık ve kesin olarak reddetmezse sözleşmeyi kabul etmiş sayılır.",
                    "İtiraz edilmez ve ihtar süresi içinde kira ödenmezse, ihtar süresinin bitiminden itibaren altı ay içinde icra mahkemesinden tahliye istenebilir (İİK m. 269/a). İtiraz edilmişse kiraya veren, itirazın tebliğinden itibaren altı ay içinde icra mahkemesinden itirazın kaldırılmasını ve tahliyeyi isteyebilir. Ödeme iddiası gibi itirazların kanunda sayılan nitelikte belgelerle ispatı gerekir (İİK m. 269/c).",
                    "İtirazın kaldırılması yolu uygun değilse, itirazın tebliğinden itibaren bir yıl içinde genel mahkemede itirazın iptali davası açılabilir (İİK m. 67). Haksız itiraz halinde alacağın yüzde yirmisinden az olmamak üzere icra inkâr tazminatına hükmedilebilir.",
                    "İcra mahkemesinin tahliye kararının infazı için kesinleşmesi beklenmez; ancak kararın kiracıya tefhim veya tebliğinden itibaren on gün geçmesi gerekir (İİK m. 269/c).",
                ],
            },
            {
                title: "Zamanaşımı ve sözleşmedeki ek yükümlülükler",
                paragraphs: [
                    "Kira bedelleri beş yıllık zamanaşımına tabidir (TBK m. 147/1). Kiracıya kira bedeli ve yan giderler dışında başka bir ödeme yükümlülüğü getirilemez; kiranın geç ödenmesi halinde ceza koşulu veya sonraki kiraların muaccel olacağına ilişkin anlaşmalar geçersizdir (TBK m. 346).",
                ],
            },
        ],
        steps: [
            { title: "Alacağın ve sözleşmenin incelenmesi", desc: "Ödenmeyen dönemler, yan giderler, sözleşmenin yazılı olup olmadığı ve imza durumu incelenir; uygun takip yolu belirlenir." },
            { title: "Takip talebi", desc: "İzmir'deki yetkili icra dairesinde tahliye talepli veya genel haciz yoluyla takip başlatılır." },
            { title: "Ödeme emri ve süreler", desc: "Kiracıya ödeme emri tebliğ edilir; yedi günlük itiraz ve otuz günlük ödeme süreleri takip edilir." },
            { title: "İtiraz halinde", desc: "İcra mahkemesinde itirazın kaldırılması ve tahliye istenir ya da genel mahkemede itirazın iptali davası açılır." },
            { title: "Tahliye ve haciz", desc: "Tahliye kararı alınırsa tahliye işlemleri yürütülür; alacağın tahsili için haciz aşamasına geçilebilir." },
        ],
        documents: [
            "Kira sözleşmesi (noter onaylı ise belirtilmesi)",
            "Ödenmeyen dönemleri gösteren hesap dökümü ve dekontlar",
            "Aidat ve yan gider belgeleri",
            "Daha önce gönderilen ihtarnameler",
            "Kiracının kimlik ve adres bilgileri",
        ],
        court: [
            "İcra takibi icra dairesinde başlatılır; itirazın kaldırılması ve tahliye talepleri icra mahkemesinde incelenir.",
            "İtirazın iptali, alacak ve dava yoluyla tahliye istemlerinde görevli mahkeme sulh hukuk mahkemesidir (HMK m. 4/1-a).",
        ],
        mediation: "İcra ve İflas Kanunu'na göre ilamsız icra yoluyla tahliye talepleri zorunlu arabuluculuk şartının dışındadır (HUAK m. 18/B-1-a). Buna karşılık sulh hukuk mahkemesinde açılacak itirazın iptali, alacak veya tahliye davalarından önce arabulucuya başvurulması dava şartıdır.",
        faqs: [
            { question: "Kaç ay kira ödenmezse tahliye istenebilir?", answer: "Muaccel olmuş tek bir kira bedelinin ödenmemesi halinde de konut ve çatılı işyeri kiralarında en az otuz günlük yazılı süre verilerek veya tahliye talepli icra takibi başlatılarak tahliye istenebilir (TBK m. 315, İİK m. 269). İki haklı ihtar yolu ise aynı kira yılında iki kez ihtara sebep olunmasını gerektirir." },
            { question: "Kiracı icra takibine itiraz ederse ne olur?", answer: "İtiraz takibi durdurur. Kiraya veren altı ay içinde icra mahkemesinden itirazın kaldırılmasını ve tahliyeyi isteyebilir veya bir yıl içinde genel mahkemede itirazın iptali davası açabilir." },
            { question: "Ödenmeyen kira alacağı ne zaman zamanaşımına uğrar?", answer: "Kira bedelleri için beş yıllık zamanaşımı süresi uygulanır (TBK m. 147/1)." },
            { question: "Kira alacağı için icra takibinden önce arabulucuya gitmek gerekir mi?", answer: "İcra takibi için gerekmez; ilamsız icra yoluyla tahliye talepleri arabuluculuk şartının dışındadır. Ancak itirazın iptali veya alacak davası açılacaksa önce arabulucuya başvurulması gerekir." },
            { question: "Kirayı ödemeyen kiracıya icra takibi nasıl yapılır?", answer: "İcra dairesine başvurularak kiracıya ödeme emri gönderilir; konut ve çatılı işyeri kiralarında ödeme süresi otuz gündür ve ödeme emrinde, bu süre içinde ödeme yapılmazsa tahliye istenebileceği ihtar edilir (İİK m. 269). Kiracı yedi gün içinde itiraz edebilir; itiraz edilmez ve borç süresinde ödenmezse kiraya veren icra mahkemesinden tahliye isteyebilir (İİK m. 269 vd.). Bu yol için arabuluculuğa başvurmak gerekmez." },
            { question: "Tahliye kararı kesinleşmeden icraya konulabilir mi?", answer: "Evet. Taşınmazın tahliyesine ilişkin mahkeme kararları, kesinleşmesi beklenmeden icraya konulabilir. Ancak kanun yoluna başvuran kiracı, mahkemenin belirleyeceği teminatı göstererek icranın geri bırakılmasını isteyebilir (İİK m. 36)." },
            { question: "İcra yoluyla tahliye masrafı ne kadar?", answer: "Masraflar; takip tutarına göre değişen harçlar, tebligat giderleri ve tahliye aşamasındaki giderlerden oluşur, avukatlık ücreti ise Avukatlık Asgari Ücret Tarifesi'nin altında olamaz. Takip giderleri ve icra vekâlet ücreti borçlu kiracıdan istenebilir. Dosyaya ilişkin masraf bilgisi, İzmir kira alacağı icra takibi avukatı ile telefonla yapılan ön görüşmede verilir." },
        ],
        blogs: [
            { title: "Kirayı fazla ödemek, eksik ödeme ihtarı ve iki haklı ihtar", slug: "iki-hakli-ihtar-fazla-kira-odemesi" },
            { title: "Tahliye taahhüdüne dayalı takipte itirazın iptali", slug: "tahliye-taahhudu-icra-itirazin-iptali" },
            { title: "Kiracının kendi evi varsa tahliye ve aidat borcu", slug: "kiracinin-kendi-evi-tahliye-davasi" },
        ],
        waText: "Merhaba, ödenmeyen kira ve icra takibi konusunda görüşmek istiyorum.",
    },
    {
        slug: "izmir-tahliye-taahhudu-icra-avukati",
        name: "Tahliye taahhüdü ile icra",
        h1: "İzmir Tahliye Taahhüdü İcra Avukatı",
        title: "İzmir Tahliye Taahhüdü İcra Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de tahliye taahhüdüne dayalı icra: TBK 352/1 geçerlilik şartları, bir aylık süre, İİK 272-275 tahliye emri, itiraz ve süreç. Tel: 0544 585 46 45",
        cardDesc: "Geçerli bir tahliye taahhüdü varsa dava açmadan doğrudan icra yoluyla tahliye istenebilir; taahhüdün geçerliliği ve süreler kontrol edilerek takip başlatılır.",
        navDesc: "Yazılı taahhütle icra yoluyla tahliye (TBK m. 352/1)",
        lead: "Kiracı, kiralananı belli bir tarihte boşaltacağını yazılı olarak taahhüt etmiş ve bu tarihte boşaltmamışsa, kiraya veren dava açmadan icra dairesi aracılığıyla tahliye isteyebilir. Bu yolun sonuç vermesi, taahhüdün geçerliliğine ve bir aylık sürenin kaçırılmamasına bağlıdır.",
        kw: "İzmir tahliye taahhüdü icra avukatı",
        intro: "İzmir tahliye taahhüdü icra avukatı Av. Mert Kağan Çetin tarafından, yazılı tahliye taahhüdüne dayanan icra takibinde taahhüdün geçerliliği incelenir; takip, itiraz ve tahliye aşamaları takip edilir.",
        sections: [
            {
                title: "Tahliye taahhüdünün geçerlilik şartları",
                list: [
                    "Yazılı olmalı ve kiracı tarafından imzalanmalıdır (TBK m. 352/1).",
                    "Kiralananın kiracıya tesliminden sonra verilmiş olmalıdır. Kira sözleşmesiyle aynı tarihli veya teslimden önce alınan taahhütlerde, kiracının baskı altında imza verdiği itirazıyla sıkça karşılaşılır ve geçerlilik ayrıca incelenir.",
                    "Boşaltma tarihi belirli veya belirlenebilir olmalıdır.",
                    "Taahhüt kiracının serbest iradesiyle verilmiş olmalıdır; boş kâğıda atılan imzanın sonradan doldurulduğu iddiaları ispat kurallarına göre değerlendirilir.",
                ],
            },
            {
                title: "Süre: taahhüt tarihinden itibaren bir ay",
                paragraphs: [
                    "Kiraya veren, taahhüt edilen tarihten başlayarak bir ay içinde icraya başvurmalı veya dava açmalıdır (TBK m. 352/1). Bu süre hak düşürücüdür; kaçırılırsa taahhüde dayanılarak o dönem için tahliye istenemez. Kiraya veren süresi içinde dava açacağını yazılı olarak bildirirse süre bir kira yılı uzar (TBK m. 353).",
                ],
            },
            {
                title: "İcra yoluyla tahliye nasıl işler? (İİK m. 272-275)",
                paragraphs: [
                    "İcra dairesine [taahhütname](/sozluk/tahliye-taahhutnamesi/) ile başvurulduğunda kiracıya tahliye emri gönderilir. Tahliye emri, taşınmazın on beş gün içinde tahliye ve teslimini ister; kiracı yedi gün içinde itiraz edebilir ve itiraz takibi durdurur (İİK m. 272, 274).",
                    "İtiraz edilmez ve süre içinde tahliye edilmezse taşınmaz zorla tahliye edilerek kiraya verene teslim edilir (İİK m. 273). İtiraz halinde kiraya veren icra mahkemesinden itirazın kaldırılmasını isteyebilir (İİK m. 275). Belgenin niteliğine ve itirazın içeriğine göre icra mahkemesinde sonuç alınamazsa, genel hükümlere göre sulh hukuk mahkemesinde dava açma hakkı saklıdır.",
                ],
            },
        ],
        steps: [
            { title: "Taahhütnamenin incelenmesi", desc: "İmza, düzenleme tarihi, teslim tarihi ve boşaltma tarihi geçerlilik şartları yönünden incelenir." },
            { title: "Süre hesabı", desc: "Taahhüt edilen tarihten itibaren bir aylık süre hesaplanır ve takip bu süre içinde başlatılır." },
            { title: "Tahliye emri", desc: "İzmir'deki icra dairesinde takip açılır ve kiracıya tahliye emri tebliğ edilir." },
            { title: "İtiraz halinde icra mahkemesi", desc: "Kiracı itiraz ederse icra mahkemesinde itirazın kaldırılması istenir." },
            { title: "Tahliye ve teslim", desc: "Süreler dolduğunda tahliye işlemi icra dairesi aracılığıyla yapılır ve taşınmaz teslim alınır." },
        ],
        documents: [
            "Tahliye taahhütnamesinin aslı",
            "Kira sözleşmesi ve kiralananın teslim tarihini gösteren belgeler",
            "Noter onayı varsa onaylı örnek",
            "Kiracının kimlik ve adres bilgileri",
            "Tapu kaydı",
        ],
        court: [
            "Takip icra dairesinde başlatılır; itirazın kaldırılması icra mahkemesinde incelenir.",
            "Taahhüde dayalı tahliye dava yoluyla istenirse görevli mahkeme sulh hukuk mahkemesidir (HMK m. 4/1-a).",
        ],
        mediation: "Tahliye taahhüdüne dayalı ilamsız icra yoluyla tahliye talepleri zorunlu arabuluculuk kapsamı dışındadır (HUAK m. 18/B-1-a). Aynı talep sulh hukuk mahkemesinde dava yoluyla ileri sürülecekse önce arabulucuya başvurulması gerekir.",
        faqs: [
            { question: "Kira sözleşmesiyle aynı gün imzalanan tahliye taahhüdü geçerli mi?", answer: "TBK m. 352/1, taahhüdün kiralananın tesliminden sonra verilmesini arar. Sözleşmeyle aynı gün veya teslimden önce alınan taahhütlerde geçerlilik, somut olayın özelliklerine göre ayrıca değerlendirilir ve kiracının itirazına konu olabilir." },
            { question: "Taahhüt tarihinden sonra icraya başvurmak için ne kadar süre var?", answer: "Taahhüt edilen boşaltma tarihinden itibaren bir ay içinde icraya başvurulması veya dava açılması gerekir (TBK m. 352/1)." },
            { question: "Kiracı tahliye emrine itiraz ederse ne olur?", answer: "İtiraz takibi durdurur. Kiraya veren icra mahkemesinden itirazın kaldırılmasını isteyebilir (İİK m. 275); sonuç alınamazsa genel hükümlere göre dava açılabilir." },
            { question: "Tahliye taahhüdüyle icra takibinden önce arabuluculuk gerekir mi?", answer: "Hayır. İlamsız icra yoluyla tahliye talepleri zorunlu arabuluculuk kapsamı dışındadır. Dava yolu tercih edilirse arabuluculuk dava şartıdır." },
            { question: "Tahliye taahhütnamesinin noterde yapılması zorunlu mu?", answer: "Hayır. Kanun yalnızca taahhüdün yazılı olmasını arar (TBK m. 352/1); adi yazılı taahhüt de geçerlidir. Ancak adi yazılı taahhütte kiracı imzaya veya tarihe itiraz edebileceğinden, noter onaylı taahhüt ispat bakımından daha güçlüdür." },
            { question: "Kira sözleşmesi olmadan tahliye taahhütnamesi alınabilir mi?", answer: "Taahhüdün geçerliliği için yazılı bir kira sözleşmesi şart değildir; kira ilişkisinin varlığı yeterlidir. Önemli olan taahhüdün kiralananın kiracıya tesliminden sonra, kiracının serbest iradesiyle verilmesi ve tahliye tarihinin belirli olmasıdır." },
            { question: "Tahliye taahhütnamesi ile icra takibi nasıl yapılır?", answer: "Taahhüt edilen tahliye tarihinden itibaren bir ay içinde icra dairesine başvurulur ve kiracıya tahliye emri gönderilir (İİK m. 272). Kiracı yedi gün içinde itiraz edebilir; itiraz halinde kiraya veren icra mahkemesinden itirazın kaldırılmasını ve tahliyeyi ister (İİK m. 272 vd.). Bu yolda arabuluculuk şartı aranmaz." },
            { question: "Tahliye taahhütnamesinde eşin imzası gerekli mi?", answer: "Kiralanan aile konutu olarak kullanılıyorsa, Yargıtay uygulamasında diğer eşin açık rızası olmadan verilen tahliye taahhüdünün aile konutuna ilişkin koruma (TMK m. 194) karşısında geçersiz sayılabileceği kabul edilmektedir. Bu nedenle aile konutlarında taahhüdün her iki eş tarafından imzalanması önerilir." },
            { question: "Tahliye taahhütnamesi hangi hallerde geçersiz olur ve kiracı kendiliğinden çıkar mı?", answer: "Kiralananın tesliminden önce veya sözleşmeyle birlikte kiracı üzerinde baskı oluşturacak şekilde alınan, tahliye tarihi belirli olmayan, irade sakatlığıyla verilen ya da aile konutunda eş rızası bulunmayan taahhütler geçersiz sayılabilir. Geçerli bir taahhüt bulunsa bile kiracı çıkmazsa tahliye kendiliğinden gerçekleşmez; icra takibi veya dava yoluyla tahliye istenmesi gerekir." },
        ],
        blogs: [
            { title: "Tahliye taahhüdüne dayalı takipte itirazın iptali", slug: "tahliye-taahhudu-icra-itirazin-iptali" },
            { title: "Boş imzalı tahliye taahhütnamesine itiraz", slug: "bos-tahliye-taahhutnamesi-yemin-delili" },
        ],
        extraLinks: [{ title: "Tahliye taahhütnamesi örneği", href: "/tahliye-taahhutnamesi/" }],
        waText: "Merhaba, tahliye taahhüdü ile icra konusunda görüşmek istiyorum.",
    },
    {
        slug: "izmir-kira-sozlesmesi-avukati",
        name: "Kira sözleşmesi hazırlama ve inceleme",
        h1: "İzmir Kira Sözleşmesi Avukatı",
        title: "İzmir Kira Sözleşmesi Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira sözleşmesi hazırlama ve inceleme: süre, kira artışı, depozito, yan giderler, alt kira ve tahliye maddeleri TBK'ya göre. Tel: 0544 585 46 45",
        cardDesc: "Uyuşmazlık çıkmasını önleyecek şekilde sözleşme hazırlanır veya mevcut sözleşme incelenir; artış, depozito, teminat ve tahliye maddeleri tek tek değerlendirilir.",
        navDesc: "Konut ve işyeri kira sözleşmesi hazırlama, inceleme",
        lead: "Kira uyuşmazlıklarının önemli bir kısmı, sözleşmedeki eksik veya kanuna aykırı maddelerden doğar. Konut ve çatılı işyeri kiralarında pek çok TBK hükmü kiracı aleyhine değiştirilemediğinden, sözleşmenin bu emredici kurallara uygun hazırlanması gerekir.",
        kw: "İzmir kira sözleşmesi avukatı",
        intro: "İzmir kira sözleşmesi avukatı Av. Mert Kağan Çetin tarafından, konut ve işyeri kira sözleşmelerinin hazırlanması ve incelenmesi ile sözleşmeden doğan uyuşmazlıklarda hukuki destek sağlanır.",
        sections: [
            {
                title: "Sözleşmede dikkat edilmesi gereken başlıca maddeler",
                list: [
                    "Şekil ve ispat: [Kira sözleşmesi](/sozluk/kira-sozlesmesi/) kanunen yazılı şekle bağlı değildir; ancak ispat kolaylığı için yazılı yapılması ve teslim tutanağıyla desteklenmesi önerilir.",
                    "Süre: Belirli veya belirsiz süreli olabilir (TBK m. 300). Konut ve çatılı işyerinde kiracı bildirimde bulunmazsa sözleşme bir yıl uzar; kiraya veren süre bitimine dayanarak sözleşmeyi sona erdiremez (TBK m. 347).",
                    "Kira artışı: Yenilenen dönemlerde artış, bir önceki kira yılındaki TÜFE on iki aylık ortalama değişim oranını geçemez (TBK m. 344).",
                    "[Güvence (depozito)](/sozluk/depozito/): Üç aylık kira bedelini aşamaz; para olarak verilmişse kiraya verenin onayı olmadan çekilmemek üzere vadeli tasarruf hesabına yatırılır (TBK m. 342).",
                    "Ek ödeme yasağı: Kiracıya kira bedeli ve yan giderler dışında ödeme yükümlülüğü getirilemez; geç ödemede ceza koşulu veya sonraki kiraların muaccel olacağı anlaşmaları geçersizdir (TBK m. 346).",
                    "Kiracı aleyhine değişiklik yasağı: Kira bedelinin belirlenmesi dışında kiracı aleyhine değişiklik yapılamaz (TBK m. 343).",
                    "Alt kira ve devir: Konut ve çatılı işyeri kiralarında kiracı, kiraya verenin yazılı rızası olmadan alt kiraya veremez veya kullanım hakkını devredemez (TBK m. 322-323).",
                    "Teslim ve geri verme: Kiralanan kullanıma elverişli durumda teslim edilir (TBK m. 301); kiracı olağan kullanımdan doğan eskimelerden sorumlu değildir (TBK m. 334).",
                    "Aile konutu: Aile konutu olarak kiralanan taşınmazlarda kiracı, eşinin açık rızası olmadıkça sözleşmeyi feshedemez (TBK m. 349).",
                ],
            },
            {
                title: "İşyeri kiralarında ek konular",
                paragraphs: [
                    "İşyeri kiralarında kira bedelinin brüt veya net olarak belirlenmesi, stopaj ve KDV yükümlülükleri, tadilat ve demirbaşlar, kullanım amacı ve kira ilişkisinin devri (TBK m. 323) ayrıca düzenlenmelidir. Bu maddelerin belirsiz bırakılması, sonradan kira bedeli ve tahliye uyuşmazlıklarına yol açabilir.",
                ],
            },
        ],
        steps: [
            { title: "İhtiyacın belirlenmesi", desc: "Konut veya işyeri kirası, taraflar, süre ve özel koşullar ön görüşmede belirlenir." },
            { title: "Taslak veya inceleme", desc: "Yeni sözleşme taslağı hazırlanır ya da mevcut sözleşme TBK'nın emredici hükümleri yönünden incelenir." },
            { title: "Maddelerin değerlendirilmesi", desc: "Artış, depozito, yan giderler, alt kira, tadilat ve tahliye maddeleri tek tek gözden geçirilir; riskler yazılı olarak bildirilir." },
            { title: "İmza ve teslim", desc: "Sözleşmenin imzası, teslim tutanağı ve gerekli durumlarda noter işlemleri planlanır." },
        ],
        documents: [
            "Varsa mevcut kira sözleşmesi veya taslak",
            "Tapu kaydı ve tarafların kimlik bilgileri",
            "Kiralananın durumuna ilişkin fotoğraflar ve demirbaş listesi",
            "İşyeri kiralarında vergi ve faaliyet bilgileri",
        ],
        court: [
            "Kira sözleşmesinden doğan uyuşmazlıklarda görevli mahkeme sulh hukuk mahkemesidir (HMK m. 4/1-a).",
            "Depozito iadesi, kira bedeli ve tahliye gibi uyuşmazlıklarda dava öncesi arabuluculuk aşaması uygulanır.",
        ],
        mediation: "Kira sözleşmesinden doğan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması dava şartıdır (HUAK m. 18/B). İyi hazırlanmış bir sözleşme, arabuluculuk ve dava aşamalarında tarafların haklarını ispatlamayı kolaylaştırır.",
        faqs: [
            { question: "Kira sözleşmesinin yazılı yapılması zorunlu mu?", answer: "Hayır, kira sözleşmesi sözlü olarak da kurulabilir. Ancak süre, kira bedeli ve diğer koşulların ispatı için yazılı yapılması önerilir." },
            { question: "Depozito en fazla ne kadar olabilir?", answer: "Konut ve çatılı işyeri kiralarında güvence, üç aylık kira bedelini aşamaz (TBK m. 342)." },
            { question: "Kira sözleşmesine geç ödeme cezası konulabilir mi?", answer: "Hayır. Kiracıya kira bedeli ve yan giderler dışında ödeme yükümlülüğü getirilemez; geç ödemede ceza koşulu öngören anlaşmalar geçersizdir (TBK m. 346)." },
            { question: "Kira artış oranı sözleşmede serbestçe belirlenebilir mi?", answer: "Yenilenen kira dönemlerinde artış, bir önceki kira yılındaki TÜFE on iki aylık ortalama değişim oranını geçemez (TBK m. 344). Bu sınırı aşan artış maddeleri sınırı aşan kısım yönünden uygulanmaz." },
            { question: "Kira sözleşmesi nasıl olmalı?", answer: "Sözleşmede tarafların kimlik ve adres bilgileri, kiralananın adresi ve demirbaşları, kira süresi, kira bedeli ve ödeme şekli, artış esası, depozito, kullanım amacı ve yan giderlerin kime ait olduğu açıkça yazılmalıdır. Konut ve çatılı işyeri kiralarında kanunun kiracıyı koruyan hükümlerine aykırı şartlar geçersiz olacağından (TBK m. 346, 354), maddelerin bu hükümlere uygun hazırlanması gerekir. İzmir kira sözleşmesi avukatı ile sözleşme imzalanmadan önce incelenebilir." },
            { question: "Kırtasiyeden alınan kira kontratı geçerli mi?", answer: "Geçerlidir; kira sözleşmesi için kanunda özel bir şekil öngörülmemiştir. Ancak matbu sözleşmelerde kiracıya kira ve yan giderler dışında ödeme yükümlülüğü getiren ceza koşulları veya muacceliyet şartları gibi kanuna aykırı maddeler bulunabilir; bu maddeler geçersizdir (TBK m. 346). Özel şartlar bölümünün tarafların anlaşmasına göre dikkatle doldurulması önerilir." },
            { question: "1 yıllık kira sözleşmesi kaç yıl geçerli olur?", answer: "Konut ve çatılı işyeri kiralarında kiracı, süre bitiminden en az on beş gün önce bildirimde bulunmazsa sözleşme aynı koşullarla birer yıl uzar (TBK m. 347). Kiraya veren on yıllık uzama süresi dolmadan süre bitimine dayanarak sözleşmeyi sona erdiremez; bu süre içinde ancak kanundaki tahliye sebepleriyle tahliye istenebilir." },
            { question: "Kiracı sözleşme bitmeden evden çıkabilir mi?", answer: "Çıkabilir; ancak kiralananı süresinden önce boşaltan kiracının kira borcu, kiralananın benzer koşullarla yeniden kiraya verilebileceği makul süre boyunca devam eder (TBK m. 325). Kiracı, kiralananı devralmaya hazır ve ödeme gücüne sahip yeni bir kiracı önerirse bu sorumluluktan kurtulabilir. Makul süre her dosyada ayrıca değerlendirilir." },
        ],
        blogs: [
            { title: "Yeni kira sözleşmesi 10 yıllık süreyi sıfırlar mı?", slug: "10-yillik-uzama-suresi-tadil-sozlesmesi" },
            { title: "Kira bedeli, KDV ve stopaj", slug: "kira-bedeli-kdv-stopaj-net-brut" },
        ],
        extraLinks: [
            { title: "Kira sözleşmesi örneği", href: "/kira-sozlesmesi-ornegi/" },
            { title: "Kira artış oranı hesaplama", href: "/kira-artis-orani-hesaplama/" },
        ],
        waText: "Merhaba, kira sözleşmesi konusunda görüşmek istiyorum.",
    },
    {
        slug: "izmir-kira-arabuluculuk-avukati",
        name: "Arabuluculuk",
        h1: "İzmir Kira Arabuluculuk Avukatı",
        title: "İzmir Kira Arabuluculuk Avukatı | Av. Mert Kağan Çetin",
        description: "İzmir'de kira uyuşmazlıklarında zorunlu arabuluculuk: HUAK 18/B, başvuru, süreler, toplantıya katılmama sonucu ve anlaşma belgesi. Tel: 0544 585 46 45",
        cardDesc: "Kira uyuşmazlıklarında dava öncesi arabuluculuk zorunludur; bu süreçte haklarınız korunarak, mümkünse dava açmadan anlaşma sağlanması hedeflenir.",
        navDesc: "Dava öncesi zorunlu arabuluculuk (HUAK m. 18/B)",
        lead: "Kira ilişkisinden doğan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması dava şartıdır. Arabuluculuk aşaması; tahliye tarihi, kira bedeli veya alacak konusunda dava açılmadan anlaşma sağlanabilecek bir süreçtir ve burada atılan adımlar olası davayı doğrudan etkiler.",
        kw: "İzmir kira arabuluculuk avukatı",
        intro: "İzmir kira arabuluculuk avukatı Av. Mert Kağan Çetin tarafından, kira uyuşmazlıklarında dava öncesi zorunlu arabuluculuk başvurusu, görüşmeler ve anlaşma belgesinin hazırlanması aşamalarında taraf vekilliği yapılır.",
        sections: [
            {
                title: "Hangi uyuşmazlıklarda arabuluculuk zorunlu?",
                paragraphs: [
                    "6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu'nun (HUAK) 18/B maddesine göre, kiralanan taşınmazların İcra ve İflas Kanunu'na göre ilamsız icra yoluyla tahliyesine ilişkin hükümler hariç olmak üzere, kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açılmadan önce [arabulucuya başvurulması dava şartıdır](/sozluk/zorunlu-arabuluculuk/).",
                ],
                list: [
                    "Tahliye davaları (gereksinim, yeni malik, iki haklı ihtar, on yıllık uzama)",
                    "Kira tespit ve kira uyarlama davaları",
                    "Kira alacağı, itirazın iptali ve depozito iadesi davaları",
                    "Kira sözleşmesinden doğan diğer tazminat ve alacak talepleri",
                ],
            },
            {
                title: "Süreç nasıl işler?",
                paragraphs: [
                    "Başvuru, uyuşmazlığın konusuna göre yetkili mahkemenin bulunduğu yerdeki arabuluculuk bürosuna yapılır (HUAK m. 18/A-4). Arabulucu, görevlendirildiği tarihten itibaren üç hafta içinde süreci sonuçlandırır; bu süre zorunlu hallerde en fazla bir hafta uzatılabilir (HUAK m. 18/A-9).",
                    "Taraflardan biri geçerli bir mazeret göstermeden ilk toplantıya katılmazsa bu durum son tutanağa yazılır; bu taraf davada haklı çıksa bile karşı tarafın ödemekle yükümlü olduğu yargılama giderlerinin yarısından sorumlu tutulur ve lehine vekâlet ücretinin yarısına hükmedilir (HUAK m. 18/A-11).",
                    "Arabuluculuk bürosuna başvurudan son tutanağın düzenlendiği tarihe kadar zamanaşımı durur ve hak düşürücü süreler işlemez (HUAK m. 18/A-15).",
                ],
            },
            {
                title: "Anlaşma ve anlaşamama halinde",
                paragraphs: [
                    "Taraflar anlaşırsa anlaşma belgesi düzenlenir. Kira uyuşmazlıklarında anlaşma belgesine icra edilebilirlik şerhi alınması zorunludur; taşınmazla ilgili anlaşmalarda şerh, taşınmazın bulunduğu yer sulh hukuk mahkemesinden alınır (HUAK m. 18/B-3). Şerhli anlaşma belgesi ilam niteliğinde belge sayılır; örneğin kararlaştırılan tarihte tahliye edilmezse icra yoluyla tahliye istenebilir.",
                    "Anlaşma sağlanamazsa düzenlenen son tutanağın aslı veya arabulucu onaylı örneği dava dilekçesine eklenir. Arabulucuya başvurulmadan açılan dava, dava şartı yokluğu nedeniyle usulden reddedilir (HUAK m. 18/A-2).",
                ],
            },
        ],
        steps: [
            { title: "Uyuşmazlığın değerlendirilmesi", desc: "Talep, süreler ve yetkili arabuluculuk bürosu belirlenir; dava açma koşullarının oluşup oluşmadığı kontrol edilir." },
            { title: "Başvuru", desc: "İzmir'deki yetkili arabuluculuk bürosuna başvuru yapılır; karşı tarafın iletişim bilgileri büroya iletilir." },
            { title: "Toplantıya hazırlık", desc: "Belgeler, hesaplamalar ve kabul edilebilir anlaşma sınırları önceden belirlenir." },
            { title: "Toplantıda temsil", desc: "Arabuluculuk toplantılarına vekil olarak katılınır, öneriler hukuki sonuçlarıyla değerlendirilir." },
            { title: "Anlaşma veya dava", desc: "Anlaşmada belge metni kontrol edilir ve icra edilebilirlik şerhi alınır; anlaşma olmazsa son tutanakla dava açılır." },
        ],
        documents: [
            "Kira sözleşmesi",
            "İhtarname, bildirim ve yazışmalar",
            "Ödeme kayıtları ve alacak hesabı",
            "Tapu kaydı",
            "Karşı tarafın iletişim bilgileri",
        ],
        court: [
            "Arabuluculuk başvurusu, yetkili mahkemenin bulunduğu yerdeki adliye arabuluculuk bürosuna yapılır.",
            "Anlaşma belgesine icra edilebilirlik şerhi taşınmazın bulunduğu yer sulh hukuk mahkemesinden alınır; anlaşma olmazsa dava sulh hukuk mahkemesinde açılır.",
        ],
        mediation: "İlamsız icra yoluyla tahliye talepleri (ödenmeyen kira nedeniyle tahliye talepli takip ve tahliye taahhüdüne dayalı takip) zorunlu arabuluculuk kapsamı dışındadır. Bu yollar için doğrudan icra dairesine başvurulabilir.",
        faqs: [
            { question: "Kira uyuşmazlıklarında arabuluculuk zorunlu mu?", answer: "Evet. İlamsız icra yoluyla tahliye talepleri hariç, kira ilişkisinden kaynaklanan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması dava şartıdır (HUAK m. 18/B)." },
            { question: "Arabuluculuk süreci ne kadar sürer?", answer: "Arabulucu görevlendirildiği tarihten itibaren üç hafta içinde süreci sonuçlandırır; zorunlu hallerde bu süre en fazla bir hafta uzatılabilir (HUAK m. 18/A-9)." },
            { question: "Karşı taraf arabuluculuk toplantısına gelmezse ne olur?", answer: "Geçerli mazereti olmadan ilk toplantıya katılmayan taraf son tutanakta belirtilir; davada haklı çıksa bile karşı tarafın ödemekle yükümlü olduğu yargılama giderlerinin yarısından sorumlu tutulur (HUAK m. 18/A-11)." },
            { question: "Arabuluculukta anlaşılan tahliye tarihine uyulmazsa ne yapılır?", answer: "İcra edilebilirlik şerhi alınmış anlaşma belgesi ilam niteliğindedir; kararlaştırılan tarihte tahliye edilmezse belgeye dayanılarak icra yoluyla tahliye istenebilir." },
            { question: "Kira uyuşmazlıklarında arabuluculuk ne zaman zorunlu hale geldi?", answer: "7445 sayılı Kanun ile Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu'na eklenen 18/B maddesiyle, kira ilişkisinden doğan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması 1 Eylül 2023 tarihinden itibaren dava şartı haline gelmiştir. Bu tarihten sonra açılan kira davalarında arabuluculuk aşaması tamamlanmadan dava açılamaz." },
            { question: "Kira alacağı için menfi tespit davasında arabuluculuk zorunlu mu?", answer: "Kira borcu bulunmadığının tespitine ilişkin menfi tespit davası da kira ilişkisinden kaynaklandığından, kural olarak dava açılmadan önce arabulucuya başvurulması dava şartıdır (HUAK m. 18/B). İlamsız icra yoluyla tahliye talepleri ise bu şartın dışında tutulmuştur." },
            { question: "Arabuluculuğa başvurmak için ne gerekir?", answer: "Başvuru, uyuşmazlık konusu dava için yetkili mahkemenin bulunduğu yerdeki adliye arabuluculuk bürosuna yapılır (HUAK m. 18/A). Başvuruda tarafların kimlik ve iletişim bilgileri, kiralananın adresi ve talebin konusu bildirilir; kira sözleşmesi, ödeme kayıtları ve ihtarnameler gibi belgelerin hazır bulundurulması görüşmeleri kolaylaştırır." },
            { question: "Kira tespitinde arabuluculuk ücretini kim öder?", answer: "Taraflar anlaşırsa arabuluculuk ücreti, aksi kararlaştırılmadıkça Arabuluculuk Asgari Ücret Tarifesi'ne göre taraflarca eşit olarak ödenir. Anlaşma sağlanamazsa iki saatlik ücret Adalet Bakanlığı bütçesinden karşılanır ve daha sonra açılan davada yargılama giderinden sayılır (HUAK m. 18/A). İzmir kira arabuluculuk avukatı ile ön görüşme telefonla yapılabilir." },
        ],
        blogs: [
            { title: "Arabulucuya erken başvuru ve usulden ret", slug: "tahliye-davasi-arabuluculuk-erken-basvuru" },
        ],
        waText: "Merhaba, kira arabuluculuğu konusunda görüşmek istiyorum.",
    },
];

export const serviceHref = (s: Service) => `/${s.slug}/`;
export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
