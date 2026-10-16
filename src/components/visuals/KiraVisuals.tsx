import { FlowSteps } from "./FlowSteps";

export function TahliyeSureciAkis() {
    return (
        <FlowSteps
            id="tahliye-sureci-semasi"
            caption="Şema: Kiracı tahliye sürecinin genel akışı – tahliye sebebinin belirlenmesi, ihtar veya bildirim, zorunlu arabuluculuk, Sulh Hukuk Mahkemesinde dava ya da icra takibi ve tahliye. Somut dosyada izlenecek yol tahliye sebebine göre değişir."
            steps={[
                { title: "Tahliye sebebi", text: "Temerrüt, ihtiyaç, 10 yıllık uzama, tahliye taahhüdü veya iki haklı ihtar gibi kanuni sebep belirlenir.", law: "TBK m. 315, 347, 350, 352" },
                { title: "İhtar / bildirim", text: "Sebebe göre ödeme ihtarı veya fesih bildirimi yazılı olarak yapılır; süreler bu tarihten işlemeye başlar.", law: "TBK m. 315, 347" },
                { title: "Arabuluculuk", text: "Tahliye davasından önce arabulucuya başvurmak dava şartıdır. İcra yoluyla tahliye talepleri bu şartın dışındadır.", law: "HUAK m. 18/B" },
                { title: "Dava veya icra", text: "Anlaşma olmazsa Sulh Hukuk Mahkemesinde tahliye davası açılır ya da şartları varsa icra takibi başlatılır.", law: "İİK m. 269, 272" },
                { title: "Tahliye", text: "Tahliye kararı veya icra müdürlüğü kararı üzerine taşınmazın boşaltılması icra dairesince sağlanır.", law: "İİK m. 26" },
            ]}
        />
    );
}

export function KiraTespitAdimlari() {
    return (
        <FlowSteps
            id="kira-tespit-adimlari"
            caption="Şema: Kira tespit davasının adımları – şartların kontrolü, ihtar veya dava zamanlaması, zorunlu arabuluculuk, bilirkişi incelemesi ve karar. Yeni kira bedeli, şartları sağlandığında yeni kira döneminin başından itibaren uygulanır."
            steps={[
                { title: "Şartların kontrolü", text: "Kira yılı başlangıcı, sözleşmedeki artış şartı ve 5 yılın dolup dolmadığı incelenir.", law: "TBK m. 344" },
                { title: "Zamanlama", text: "Dava yeni dönem başlangıcından en az 30 gün önce açılır veya bu süre içinde yazılı bildirim yapılırsa yeni bedel o dönemden itibaren geçerli olur.", law: "TBK m. 345" },
                { title: "Arabuluculuk", text: "Dava açmadan önce arabulucuya başvurulur; anlaşma sağlanırsa tutanak bağlayıcıdır.", law: "HUAK m. 18/B" },
                { title: "Bilirkişi incelemesi", text: "Sulh Hukuk Mahkemesi emsal kiraları, taşınmazın durumunu ve TÜFE değişimini bilirkişi aracılığıyla değerlendirir.", law: "TBK m. 344/3" },
                { title: "Karar", text: "Mahkeme hakkaniyete uygun kira bedelini belirler; karar sonraki dönemlerde artışa esas alınır.", law: "TBK m. 344" },
            ]}
        />
    );
}

export function ArabuluculukKutusu() {
    return (
        <aside id="arabuluculuk-zorunlulugu" className="not-prose my-10 rounded-2xl border-l-4 border-secondary bg-secondary/5 p-5 md:p-6" aria-label="Kira uyuşmazlıklarında zorunlu arabuluculuk">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">HUAK m. 18/B</p>
            <p className="mt-1 font-serif text-xl font-bold text-primary">Kira uyuşmazlıklarında arabuluculuk zorunludur</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-6 text-slate-700">
                <li><strong>Kapsam:</strong> Kira ilişkisinden doğan uyuşmazlıklarda (tahliye, kira tespit, kira uyarlama, alacak) dava açmadan önce arabulucuya başvurmak dava şartıdır. Düzenleme 7445 sayılı Kanunla eklenmiş, 1 Eylül 2023 itibarıyla uygulanmaktadır.</li>
                <li><strong>İstisna:</strong> İcra ve İflas Kanunu uyarınca icra yoluyla tahliyeye ilişkin talepler (ör. temerrüt veya tahliye taahhüdüne dayalı icra takibi) arabuluculuk şartına tabi değildir.</li>
                <li><strong>Süre:</strong> Arabulucu başvuruyu kural olarak 3 hafta içinde sonuçlandırır; zorunlu hallerde bu süre en fazla 1 hafta uzatılabilir.</li>
                <li><strong>Sonuç:</strong> Anlaşma sağlanamazsa son tutanak ile Sulh Hukuk Mahkemesinde dava açılabilir; arabulucuya başvurmadan açılan dava usulden reddedilir.</li>
            </ul>
        </aside>
    );
}

const sebepler: { sebep: string; madde: string; kosul: string; sure: string; yol: string }[] = [
    { sebep: "Kira borcunda temerrüt", madde: "TBK m. 315", kosul: "Muaccel kira bedeli ödenmez; konut ve çatılı işyerinde en az 30 gün süre verilerek yazılı ihtar yapılır.", sure: "Verilen süre içinde ödeme yapılmazsa sözleşme feshedilebilir.", yol: "Dava (arabuluculuk sonrası) veya icra yoluyla tahliye (İİK m. 269)" },
    { sebep: "İki haklı ihtar", madde: "TBK m. 352/2", kosul: "Bir kira yılı içinde kira bedelinin ödenmemesi nedeniyle iki haklı ihtar yapılmış olması.", sure: "İhtarların yapıldığı kira yılının bitiminden itibaren 1 ay içinde dava.", yol: "Dava (arabuluculuk sonrası)" },
    { sebep: "Yazılı tahliye taahhüdü", madde: "TBK m. 352/1", kosul: "Kiracının, kiralananın tesliminden sonra verdiği geçerli yazılı taahhütte belirtilen tarihte boşaltmaması.", sure: "Taahhüt edilen tarihten itibaren 1 ay içinde dava veya icra takibi.", yol: "Dava (arabuluculuk sonrası) veya icra yoluyla tahliye (İİK m. 272)" },
    { sebep: "İhtiyaç nedeniyle", madde: "TBK m. 350", kosul: "Kiraya verenin, eşinin, altsoy, üstsoy veya bakmakla yükümlü olduğu kişilerin konut ya da işyeri ihtiyacının gerçek, samimi ve zorunlu olması.", sure: "Belirli süreli sözleşmede süre sonundan, belirsiz sürelide fesih dönemi ve bildirim süresinden itibaren 1 ay içinde dava.", yol: "Dava (arabuluculuk sonrası)" },
    { sebep: "10 yıllık uzama süresi", madde: "TBK m. 347", kosul: "Konut ve çatılı işyerinde 10 yıllık uzama süresinin dolması; sebep gösterilmesi gerekmez.", sure: "Her uzama yılının bitiminden en az 3 ay önce yazılı fesih bildirimi.", yol: "Dava (arabuluculuk sonrası)" },
];

export function TahliyeSebepleriTablosu() {
    return (
        <figure id="tahliye-sebepleri-tablosu" className="not-prose my-10">
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full md:min-w-[720px] border-collapse text-left text-[15px] leading-6">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th scope="col" className="px-4 py-3 font-semibold">Tahliye sebebi</th>
                            <th scope="col" className="px-4 py-3 font-semibold">Kanun maddesi</th>
                            <th scope="col" className="px-4 py-3 font-semibold">Temel koşul</th>
                            <th scope="col" className="px-4 py-3 font-semibold">Süre</th>
                            <th scope="col" className="px-4 py-3 font-semibold">Hukuki yol</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        {sebepler.map((r) => (
                            <tr key={r.sebep} className="align-top even:bg-slate-50">
                                <td className="px-4 py-3 font-semibold text-primary">{r.sebep}</td>
                                <td data-label="Kanun maddesi" className="md:whitespace-nowrap px-4 py-3 font-semibold text-secondary">{r.madde}</td>
                                <td data-label="Temel koşul" className="px-4 py-3">{r.kosul}</td>
                                <td data-label="Süre" className="px-4 py-3">{r.sure}</td>
                                <td data-label="Hukuki yol" className="px-4 py-3">{r.yol}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-slate-600">Tablo: Kiracı tahliye sebeplerinin karşılaştırması (TBK m. 315, 347, 350, 352). Süreler hak düşürücü nitelikte olabilir; somut sözleşme tarihleri ayrıca değerlendirilmelidir.</figcaption>
        </figure>
    );
}

export function KiraArtisOrnekTablosu() {
    const ornekOran = 35; // hayali örnek oran
    const rows = [100, 200, 300].map((k) => ({ k, artis: (k * ornekOran) / 100, yeni: k + (k * ornekOran) / 100 }));
    return (
        <figure id="kira-artis-ornek-tablosu" className="not-prose my-10">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <p className="font-serif text-lg font-bold text-primary">Formül</p>
                <p className="mt-2 text-[15px] leading-7 text-slate-700">
                    <strong>Azami yeni kira = Mevcut kira × (1 + önceki 12 aylık TÜFE ortalamasındaki değişim oranı)</strong>. Oran, kira döneminin başladığı aydan önceki ay için TÜİK tarafından açıklanan 12 aylık ortalama değişimdir (TBK m. 344).
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                    <table className="w-full md:min-w-[480px] border-collapse text-left text-[15px]">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th scope="col" className="px-4 py-3 font-semibold">Mevcut kira (birim)</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Örnek oran</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Azami artış</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Azami yeni kira</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                            {rows.map((r) => (
                                <tr key={r.k} className="even:bg-slate-50">
                                    <td className="px-4 py-3">Mevcut kira: {r.k} birim</td>
                                    <td data-label="Örnek oran" className="px-4 py-3">%{ornekOran}</td>
                                    <td data-label="Azami artış" className="px-4 py-3">{r.artis}</td>
                                    <td data-label="Azami yeni kira" className="px-4 py-3 font-semibold text-primary">{r.yeni}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-slate-600">Tablo: TÜFE 12 aylık ortalamasına göre kira artışı hesaplama örneği. %{ornekOran} yalnızca anlatım için seçilmiş hayali bir orandır; güncel oran için yukarıdaki hesaplama aracını kullanın. Beş yıldan uzun süreli kira ilişkilerinde yeni bedel kira tespit davasıyla hakkaniyete göre belirlenebilir.</figcaption>
        </figure>
    );
}
