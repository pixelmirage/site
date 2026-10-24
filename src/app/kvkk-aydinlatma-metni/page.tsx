import { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "KVKK Aydınlatma Metni | Av. Mert Kağan Çetin" },
    description: "6698 sayılı Kişisel Verilerin Korunması Kanunu md. 10 kapsamında iletişim ve geri arama formlarına ilişkin aydınlatma metni.",
    alternates: { canonical: "https://mertkagancetin.com/kvkk-aydinlatma-metni/" },
    robots: { index: false, follow: true },
};

const H2 = "mt-10 mb-3 font-playfair text-2xl font-bold text-primary";

export default function KvkkPage() {
    return (
        <div className="bg-white">
            <article className="container mx-auto max-w-3xl px-4 py-12 md:py-16 text-slate-700 leading-7">
                <h1 className="mb-6 font-playfair text-3xl md:text-5xl font-bold text-primary">KVKK Aydınlatma Metni</h1>
                <p>
                    Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) md. 10 uyarınca,
                    mertkagancetin.com üzerindeki iletişim ve geri arama formları ile telefon ve WhatsApp yoluyla iletilen
                    kişisel verilerin işlenmesine ilişkin olarak hazırlanmıştır.
                </p>

                <h2 className={H2}>1. Veri Sorumlusu</h2>
                <ul className="list-disc space-y-1 pl-6">
                    <li>Av. Mert Kağan Çetin</li>
                    <li>Adres: Mansuroğlu Mah. 286/3 Sk. Dedemhan Plaza D:17 Bayraklı/İzmir</li>
                    <li>E-posta: <a href="mailto:mertkagancetin@gmail.com" className="text-primary underline">mertkagancetin@gmail.com</a></li>
                    <li>Telefon: <a href="tel:+905445854645" className="text-primary underline">+90 544 585 46 45</a></li>
                </ul>

                <h2 className={H2}>2. İşlenen Kişisel Veriler</h2>
                <p>Ad soyad, telefon numarası, e-posta adresi ve form ya da mesaj yoluyla iletilen not/açıklama.</p>

                <h2 className={H2}>3. İşleme Amaçları</h2>
                <ul className="list-disc space-y-1 pl-6">
                    <li>İletişim ve geri arama talebinize dönüş yapılması,</li>
                    <li>Hukuki danışmanlık amacıyla ön görüşmenin planlanması ve yapılması.</li>
                </ul>

                <h2 className={H2}>4. Hukuki Sebepler ve Toplama Yöntemi</h2>
                <p>
                    Kişisel verileriniz, internet sitesindeki formlar, telefon ve WhatsApp aracılığıyla elektronik ortamda toplanır ve
                    KVKK md. 5/2-c (bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması) ile md. 5/2-f (ilgili kişinin temel hak ve
                    özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati) hukuki sebeplerine dayanılarak işlenir.
                    Bu sebeplerin bulunmadığı hallerde ve yurt dışına aktarım bakımından gerektiğinde açık rızanıza başvurulur.
                    İletilen notlarda özel nitelikli kişisel veri paylaşmamanızı rica ederiz.
                </p>

                <h2 className={H2}>5. Kişisel Verilerin Aktarılması</h2>
                <p>
                    Form ile iletilen veriler, form altyapısı hizmet sağlayıcısı Formspree (yurt dışında yerleşik) sunucuları aracılığıyla
                    iletilir ve bu kapsamda KVKK md. 9 hükümlerine uygun olarak yurt dışına aktarılır. Kişisel verileriniz bunun dışında
                    üçüncü kişilere aktarılmaz; kanuni yükümlülük halinde yetkili kamu kurum ve kuruluşlarıyla paylaşılabilir.
                </p>

                <h2 className={H2}>6. Saklama Süresi</h2>
                <p>
                    Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır. Avukatlık ilişkisi kurulmaması halinde
                    talebinize dönüş ve ön görüşme tamamlandıktan sonra makul süre içinde silinir veya anonim hale getirilir; avukatlık
                    ilişkisi kurulması halinde ilgili mevzuatta öngörülen süreler boyunca saklanır.
                </p>

                <h2 className={H2}>7. KVKK md. 11 Kapsamındaki Haklarınız</h2>
                <p>KVKK md. 11 uyarınca veri sorumlusuna başvurarak;</p>
                <ul className="list-disc space-y-1 pl-6">
                    <li>kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                    <li>işlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                    <li>yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                    <li>eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                    <li>KVKK md. 7 çerçevesinde silinmesini veya yok edilmesini isteme,</li>
                    <li>düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                    <li>münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                    <li>kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                </ul>
                <p className="mt-3">haklarına sahipsiniz.</p>

                <h2 className={H2}>8. Başvuru Yöntemi</h2>
                <p>
                    Taleplerinizi, kimliğinizi tespit edici bilgilerle birlikte yazılı olarak yukarıdaki adrese veya
                    <a href="mailto:mertkagancetin@gmail.com" className="text-primary underline"> mertkagancetin@gmail.com</a> adresine
                    iletebilirsiniz. Başvurular, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca talebin niteliğine göre
                    en kısa sürede ve en geç otuz gün içinde sonuçlandırılır.
                </p>

                <p className="mt-10 text-sm text-slate-500">Son güncelleme: 24 Ekim 2026</p>
            </article>
        </div>
    );
}
