import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { AlertCircle } from "lucide-react";
import { PrintButton } from "@/components/tools/PrintButton";
import { KiraSozlesmesiPdfButton } from "@/components/tools/KiraSozlesmesiPdfButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Kira Sözleşmesi Örneği 2026 - Ücretsiz PDF İndir",
    description: "2026 güncel kira sözleşmesi örneğini ücretsiz PDF olarak indirin. TBK'ya uygun, konut ve işyeri kira kontratı şablonu. Kira bedeli, depozito, fesih şartları ve tüm maddeler.",
    keywords: ["kira sözleşmesi örneği", "kira sözleşmesi pdf", "kira kontratı örneği 2026", "boş kira sözleşmesi", "konut kira sözleşmesi", "kira sözleşmesi indir", "kira kontratı pdf"],
    openGraph: {
        title: "Kira Sözleşmesi Örneği 2026 | Ücretsiz PDF İndir",
        description: "TBK'ya uygun güncel kira sözleşmesi şablonunu ücretsiz olarak PDF formatında indirin.",
        url: "https://mertkagancetin.com/kira-sozlesmesi-ornegi/",
        type: "article",
    },
    other: {
        "article:modified_time": "2026-04-17",
    },
    alternates: {
        canonical: "https://mertkagancetin.com/kira-sozlesmesi-ornegi/",
    },
};

const faqs = [
    {
        question: "Kira sözleşmesi yazılı olmak zorunda mı?",
        answer: "Hayır, kira sözleşmesi yazılı olmak zorunda değildir. Sözlü olarak da geçerlidir. Ancak ispat kolaylığı açısından yazılı sözleşme yapılması kesinlikle tavsiye edilir. Yazılı sözleşme, ileride çıkabilecek uyuşmazlıklarda tarafların haklarını korur."
    },
    {
        question: "Kira sözleşmesi noter onayı gerektirir mi?",
        answer: "Kira sözleşmesinin noter onayına tabi tutulması zorunlu değildir. Tarafların kendi aralarında imzaladıkları adi yazılı sözleşme hukuken geçerlidir. Ancak noter onaylı sözleşme, imza inkarını önlediği için daha güçlü bir ispat aracıdır."
    },
    {
        question: "Kira sözleşmesi en fazla kaç yıllık yapılabilir?",
        answer: "Kira sözleşmesi herhangi bir süre sınırı olmaksızın yapılabilir. 1 yıllık, 3 yıllık, 5 yıllık veya daha uzun süreli sözleşmeler geçerlidir. Belirli süreli sözleşmeler süre sonunda kendiliğinden sona ermez; kiracı, süre bitiminden en az 15 gün önce yazılı bildirimde bulunmazsa sözleşme aynı koşullarla 1 yıl uzar (TBK m. 347)."
    },
    {
        question: "Kira sözleşmesinde depozito ne kadar olabilir?",
        answer: "Türk Borçlar Kanunu'nun 342. maddesine göre konut ve çatılı işyeri kiralarında depozito (güvence bedeli) en fazla üç aylık kira bedelini geçemez. Depozito para olarak veriliyorsa vadeli bir tasarruf hesabına yatırılması gerekir."
    },
    {
        question: "Kira artış oranı nasıl belirlenir?",
        answer: "Konut kiralarında yıllık artış oranı, bir önceki kira yılının on iki aylık TÜFE ortalamasını geçemez (TBK m. 344). Taraflar sözleşmede daha yüksek bir oran belirlemiş olsalar bile yasal üst sınır uygulanır. Güncel kira artış oranını hesaplamak için kira artış hesaplama aracımızı kullanabilirsiniz."
    },
    {
        question: "Kiracı kira sözleşmesini nasıl fesheder?",
        answer: "Belirli süreli kira sözleşmelerinde kiracı, süre bitiminden en az 15 gün önce yazılı bildirimde bulunarak sözleşmeyi feshedebilir. Belirsiz süreli sözleşmelerde ise her 6 aylık kira döneminin sonu için, en az 3 ay önceden yazılı bildirimde bulunmalıdır (TBK m. 347)."
    },
];

export default function KiraSozlesmesiPage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "Ana Sayfa", url: "https://mertkagancetin.com" },
                    { name: "Kira Sözleşmesi Örneği", url: "https://mertkagancetin.com/kira-sozlesmesi-ornegi/" }
                ]}
            />

            <FAQSchema faqs={faqs} />

            {/* Hero - Hidden in Print */}
            <section className="bg-primary text-white py-16 print:hidden">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Kira Sözleşmesi Örneği 2026</h1>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        Türk Borçlar Kanunu&apos;na uygun, güncel kira sözleşmesi şablonunu ücretsiz olarak PDF formatında indirin veya yazdırın.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <PrintButton />
                        <KiraSozlesmesiPdfButton />
                    </div>
                </div>
            </section>

            {/* Template Preview */}
            <section className="py-12 container mx-auto px-4">
                <div className="max-w-[210mm] mx-auto bg-white shadow-xl p-[15mm] md:p-[20mm] min-h-[297mm] text-black print:shadow-none print:p-0 print:w-full print:max-w-none">
                    <div className="print-content font-serif leading-relaxed">

                        {/* Başlık */}
                        <h2 className="text-center font-bold text-2xl mb-10 uppercase border-b-2 border-black pb-2 inline-block relative left-1/2 -translate-x-1/2">
                            Kira Sözleşmesi
                        </h2>

                        <p className="text-right text-sm mb-8">Düzenleme Tarihi: ..... / ..... / 20.....</p>

                        {/* Taraflar */}
                        <h3 className="font-bold text-lg mb-4 uppercase">Taraflar</h3>

                        <div className="mb-6">
                            <p className="font-bold mb-2">KİRAYA VEREN (Ev Sahibi)</p>
                            <div className="space-y-2 pl-4 text-[15px]">
                                <p>Ad Soyad: ..................................................................</p>
                                <p>T.C. Kimlik No: ..................................................................</p>
                                <p>Adres: ..................................................................</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="font-bold mb-2">KİRACI</p>
                            <div className="space-y-2 pl-4 text-[15px]">
                                <p>Ad Soyad: ..................................................................</p>
                                <p>T.C. Kimlik No: ..................................................................</p>
                                <p>Adres: ..................................................................</p>
                            </div>
                        </div>

                        {/* Kiralanan */}
                        <h3 className="font-bold text-lg mb-4 uppercase">Kiralanan Taşınmaz</h3>
                        <div className="space-y-2 pl-4 text-[15px] mb-8">
                            <p>Adres: ..................................................................</p>
                            <p>..................................................................</p>
                            <p>Oda Sayısı: ............&emsp;Kat: ............&emsp;Daire No: ............</p>
                            <p>Kullanım Amacı: &ensp;[ ] Konut&emsp;[ ] İşyeri</p>
                        </div>

                        {/* Kira Süresi ve Bedeli */}
                        <h3 className="font-bold text-lg mb-4 uppercase">Kira Süresi ve Bedeli</h3>
                        <div className="space-y-2 pl-4 text-[15px] mb-8">
                            <p>Kira Başlangıç Tarihi: ..... / ..... / 20.....</p>
                            <p>Kira Bitiş Tarihi: ..... / ..... / 20.....</p>
                            <p>Aylık Kira Bedeli: ................................. TL</p>
                            <p>Ödeme Günü: Her ayın ..... &apos;inde / &apos;ünde</p>
                            <p>Ödeme Şekli: &ensp;[ ] Banka Havalesi&emsp;[ ] Elden&emsp;[ ] Diğer: ...............</p>
                            <p>Depozito (Güvence Bedeli): ................................. TL</p>
                        </div>

                        {/* Sözleşme Hükümleri */}
                        <h3 className="font-bold text-lg mb-6 uppercase border-t border-black pt-4">Sözleşme Hükümleri</h3>

                        <div className="space-y-5 text-[14px] leading-relaxed">
                            <div>
                                <p className="font-bold mb-1">MADDE 1 - KİRA BEDELİNİN ÖDENMESİ</p>
                                <p className="text-justify">Kiracı, kira bedelini her ayın belirtilen gününde peşin olarak kiraya verenin bildireceği banka hesabına ödeyecektir. Kira bedelinin zamanında ödenmemesi halinde kiracı temerrüde düşmüş sayılır. Kiraya veren, Türk Borçlar Kanunu&apos;nun 315. maddesi uyarınca kiracıya yazılı ihtarda bulunarak 30 gün içinde ödeme yapılmasını isteyebilir.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 2 - KİRA BEDELİNİN ARTIRILMASI</p>
                                <p className="text-justify">Kira bedeli, her yıl kira başlangıç tarihinin yıl dönümünde, bir önceki kira yılının on iki aylık TÜFE (Tüketici Fiyat Endeksi) ortalamasındaki değişim oranını geçmemek koşuluyla artırılacaktır (TBK m. 344). Taraflar aksini kararlaştırmış olsa dahi yasal sınırı aşan artış oranı uygulanamaz.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 3 - DEPOZİTO (GÜVENCE BEDELİ)</p>
                                <p className="text-justify">Kiracı, sözleşme imzasında belirtilen depozito bedelini kiraya verene teslim edecektir. Depozito, kiralananın sözleşmeye uygun olarak tahliye edilmesi ve kiracının borçsuz olması halinde iade edilir. Kiraya veren, kiracının borçları veya hasarlar için depozitodan kesinti yapabilir (TBK m. 342).</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 4 - KİRALANANIN TESLİMİ VE KULLANIMI</p>
                                <p className="text-justify">Kiralanan, sözleşmede belirtilen kullanım amacına uygun olarak kullanılacaktır. Kiracı, kiralananı özenle kullanmak ve komşulara saygı göstermekle yükümlüdür (TBK m. 316). Kiracı, kiraya verenin yazılı izni olmaksızın kiralananın tamamını veya bir kısmını başkasına devredemez ya da alt kiraya veremez.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 5 - BAKIM VE ONARIM</p>
                                <p className="text-justify">Kiralananın olağan kullanımından kaynaklanan küçük onarımlar (musluk contası, ampul, sigorta vb.) kiracıya aittir. Yapısal onarımlar, tesisat arızaları ve doğal yıpranmadan kaynaklanan tamirler kiraya verene aittir (TBK m. 317). Kiracı, acil onarım gerektiren durumlarda kiraya vereni derhal bilgilendirmekle yükümlüdür.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 6 - KİRALANANIN İADESİ</p>
                                <p className="text-justify">Kiracı, sözleşme süresinin sonunda kiralananı aldığı şekilde, olağan kullanımdan doğan yıpranmalar dışında, temiz ve hasarsız olarak kiraya verene teslim edecektir. Teslim sırasında taraflar birlikte durum tespiti yapacaktır.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 7 - AİDAT VE YAN GİDERLER</p>
                                <p className="text-justify">Kiralananın kullanımına bağlı giderler (elektrik, su, doğalgaz, internet, aidat gibi) kiracıya aittir. Kiracı, apartman/site aidatını düzenli olarak ödeyecektir. Çatı, dış cephe, asansör gibi ortak alan bakım ve onarım giderleri kiraya verene aittir.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 8 - DEVİR VE ALT KİRA YASAĞI</p>
                                <p className="text-justify">Kiracı, kiraya verenin yazılı izni olmaksızın kiralananı kısmen veya tamamen üçüncü bir kişiye devredemez, alt kiraya veremez veya kullanım hakkını başkasına bırakamaz (TBK m. 322).</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 9 - FESİH VE TAHLİYE</p>
                                <p className="text-justify">Belirli süreli kira sözleşmesi, süre sonunda kendiliğinden sona ermez; kiracı, sözleşme süresinin bitiminden en az 15 gün önce yazılı bildirimde bulunarak sözleşmeyi feshedebilir (TBK m. 347). Kiraya veren, ancak kanunda sayılan haklı sebeplerin varlığında tahliye davası açabilir.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 10 - TEBLİGAT ADRESİ</p>
                                <p className="text-justify">Taraflar, bu sözleşmede belirtilen adreslerini tebligat adresi olarak kabul ederler. Adres değişikliği yazılı olarak karşı tarafa bildirilmediği sürece, sözleşmedeki adrese yapılan tebligatlar geçerli sayılır.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 11 - UYUŞMAZLIKLARIN ÇÖZÜMÜ</p>
                                <p className="text-justify">Bu sözleşmeden doğan uyuşmazlıklarda 7036 sayılı Kanun uyarınca dava açılmadan önce arabulucuya başvurulması zorunludur. Arabuluculuk sürecinde anlaşma sağlanamaması halinde kiralananın bulunduğu yer sulh hukuk mahkemesi yetkilidir.</p>
                            </div>

                            <div>
                                <p className="font-bold mb-1">MADDE 12 - ÖZEL ŞARTLAR</p>
                                <p>............................................................................................................................</p>
                                <p>............................................................................................................................</p>
                                <p>............................................................................................................................</p>
                            </div>
                        </div>

                        {/* İmza Beyanı */}
                        <div className="mt-10 text-[14px]">
                            <p className="text-justify mb-2">
                                İşbu sözleşme 2 (iki) nüsha olarak düzenlenmiş olup, taraflar sözleşme hükümlerini okuduklarını, anladıklarını ve kabul ettiklerini beyan ederek imzalamışlardır.
                            </p>
                        </div>

                        {/* İmza Alanları */}
                        <div className="flex justify-between mt-16 px-4">
                            <div className="text-center">
                                <p className="font-bold mb-2">KİRAYA VEREN</p>
                                <p className="text-sm mb-12">Ad Soyad:</p>
                                <p className="text-sm text-slate-400">(İmza)</p>
                            </div>
                            <div className="text-center">
                                <p className="font-bold mb-2">KİRACI</p>
                                <p className="text-sm mb-12">Ad Soyad:</p>
                                <p className="text-sm text-slate-400">(İmza)</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Warning Box - Hidden in Print */}
                <div className="max-w-[210mm] mx-auto mt-8 print:hidden">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex gap-4">
                        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-800 mb-2">Dikkat Edilmesi Gerekenler</h4>
                            <p className="text-sm text-amber-700 leading-relaxed">
                                Bu şablon genel bilgilendirme amaçlıdır ve tüm kira ilişkilerine birebir uygun olmayabilir. Özellikle <strong>işyeri kiraları</strong>, <strong>yüksek bedelli kira sözleşmeleri</strong> veya <strong>özel durumlar</strong> için uzman bir avukattan hukuki danışmanlık almanız tavsiye edilir.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SEO Content - Hidden in Print */}
                <div className="max-w-[210mm] mx-auto mt-12 prose prose-slate prose-lg print:hidden">
                    <h2>Kira Sözleşmesi Nedir?</h2>
                    <p>
                        Kira sözleşmesi, kiraya verenin bir taşınmazın kullanımını kiracıya bırakmayı, kiracının ise bunun karşılığında kira bedeli ödemeyi taahhüt ettiği bir sözleşmedir. Türk Borçlar Kanunu&apos;nun 299-378. maddeleri arasında düzenlenmiştir. <Link href="/sozluk/kira-sozlesmesi/" className="text-secondary hover:underline">Kira sözleşmesi</Link> konut veya işyeri kirası için yapılabilir.
                    </p>
                    <p>
                        Kira sözleşmesinin yazılı yapılması zorunlu değildir, sözlü olarak da geçerlidir. Ancak ileride yaşanabilecek uyuşmazlıklarda ispat kolaylığı sağlaması açısından yazılı sözleşme yapılması kesinlikle önerilir. <Link href="/izmir-kira-avukati/" className="text-secondary hover:underline">Kira hukuku</Link> alanında profesyonel destek almak, tarafların haklarının korunması açısından büyük önem taşır.
                    </p>

                    <h2>Kira Sözleşmesinde Bulunması Gereken Bilgiler</h2>
                    <p>
                        Hukuki açıdan geçerli ve tarafların haklarını koruyan bir kira sözleşmesinde aşağıdaki unsurlar mutlaka yer almalıdır:
                    </p>
                    <ul>
                        <li><strong>Taraf bilgileri:</strong> Kiraya verenin ve kiracının ad-soyad, T.C. kimlik numarası ve iletişim bilgileri</li>
                        <li><strong>Taşınmaz bilgileri:</strong> Kiralanan taşınmazın tam adresi, oda sayısı ve kullanım amacı</li>
                        <li><strong>Kira süresi:</strong> Sözleşmenin başlangıç ve bitiş tarihi</li>
                        <li><strong>Kira bedeli:</strong> Aylık kira tutarı, ödeme günü ve ödeme şekli</li>
                        <li><strong>Depozito:</strong> Güvence bedeli tutarı (en fazla 3 aylık kira - TBK m. 342)</li>
                        <li><strong>Artış şartı:</strong> Yıllık kira artış oranının belirlenmesi (TÜFE sınırı - TBK m. 344)</li>
                        <li><strong>Özel şartlar:</strong> Tarafların üzerinde anlaştığı ek koşullar</li>
                    </ul>

                    <h2>Kira Sözleşmesinde Dikkat Edilmesi Gerekenler</h2>

                    <h3>Kiracı Açısından</h3>
                    <ul>
                        <li>Sözleşmeyi imzalamadan önce tüm maddeleri dikkatli okuyun</li>
                        <li>Depozito tutarının 3 aylık kiradan fazla olmamasına dikkat edin</li>
                        <li>Taşınmazın mevcut durumunu (hasarlar, eksikler) sözleşmeye ek olarak tutanakla kaydedin</li>
                        <li><Link href="/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/" className="text-secondary hover:underline">Fesih koşullarını</Link> net bir şekilde anlayın</li>
                        <li>Aidat ve yan giderlerin kime ait olduğunu sözleşmede netleştirin</li>
                    </ul>

                    <h3>Ev Sahibi Açısından</h3>
                    <ul>
                        <li>Kiracının kimlik bilgilerini mutlaka doğrulayın</li>
                        <li>Kira bedelinin banka hesabına yatırılmasını tercih edin (ispat kolaylığı)</li>
                        <li><Link href="/kira-artis-orani-hesaplama/" className="text-secondary hover:underline">Kira artış oranını</Link> yasal sınırlar dahilinde belirleyin</li>
                        <li>Taşınmazın teslim durumunu fotoğrafla belgeleyin</li>
                        <li><Link href="/tahliye-taahhutnamesi/" className="text-secondary hover:underline">Tahliye taahhütnamesi</Link> almayı düşünün (kira sözleşmesinden sonra)</li>
                    </ul>

                    <h2>Kira Sözleşmesinin Süresi ve Yenilenmesi</h2>
                    <p>
                        Belirli süreli kira sözleşmeleri, süre sonunda kendiliğinden sona ermez. Kiracı, süre bitiminden en az 15 gün önce yazılı bildirimde bulunmadıkça sözleşme aynı koşullarla 1 yıl uzamış sayılır (TBK m. 347). Kiraya veren, sözleşme süresinin bitmesi sebebiyle tek taraflı olarak sözleşmeyi feshedemez; ancak 10 yıllık uzama süresinin sonunda fesih hakkı doğar.
                    </p>

                    <h2>Kira Sözleşmesiyle İlgili Uyuşmazlıklar</h2>
                    <p>
                        Kira sözleşmesinden kaynaklanan uyuşmazlıklarda (kira bedeli, tahliye, <Link href="/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/" className="text-secondary hover:underline">depozito iadesi</Link>, <Link href="/blog/kiracinin-aidat-borcu-ve-ev-sahibinin-sorumluluklari/" className="text-secondary hover:underline">aidat borcu</Link> vb.) 2024 yılından itibaren <Link href="/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/" className="text-secondary hover:underline">zorunlu arabuluculuk</Link> uygulanmaktadır. Dava açılmadan önce arabulucuya başvurulması şarttır. Arabuluculuk sürecinde anlaşma sağlanamaması halinde sulh hukuk mahkemesinde dava açılabilir.
                    </p>

                    <h2>Sıkça Sorulan Sorular</h2>
                    <div className="not-prose space-y-3 my-8">
                        {faqs.map((faq, i) => (
                            <details
                                key={i}
                                className="group border border-slate-200 rounded-xl overflow-hidden"
                                {...(i === 0 ? { open: true } : {})}
                            >
                                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-bold text-primary text-base md:text-lg bg-white hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                                    <span>{faq.question}</span>
                                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-[0.95rem] border-t border-slate-100 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    <h2>Hukuki Destek Alın</h2>
                    <p>
                        Kira sözleşmesi hazırlanması, mevcut sözleşmenin incelenmesi veya kira uyuşmazlıklarında profesyonel hukuki desteğe ihtiyaç duyarsanız, <Link href="/izmir-kira-avukati/" className="text-secondary hover:underline">İzmir kira avukatı</Link> olarak yanınızdayız. <Link href="/hizmetler/" className="text-secondary hover:underline">Tüm hizmetlerimizi</Link> inceleyebilir veya ön görüşme için bizimle iletişime geçebilirsiniz.
                    </p>

                    <div className="not-prose mt-8 text-center bg-slate-100 p-8 rounded-2xl">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Kira Sözleşmenizi İnceletelim</h3>
                        <p className="mb-6 text-muted-foreground">Kira sözleşmesi hazırlama veya mevcut sözleşmenizin hukuki incelemesi için bizimle iletişime geçin.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-primary text-white" asChild>
                                <Link href="/iletisim/">Hemen Arayın</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://wa.me/905445854645" target="_blank" rel="noopener noreferrer">WhatsApp ile Yazın</a>
                            </Button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
