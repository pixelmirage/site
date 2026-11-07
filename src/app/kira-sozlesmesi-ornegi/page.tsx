import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, ShieldCheck, FileText, Percent, CalendarClock, KeyRound, Receipt, Users, Ban, ClipboardList, Scale } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { HowToSchema } from "@/components/seo/HowToSchema";
import { ContractDocument } from "@/components/sablon/ContractDocument";
import { DocActions } from "@/components/sablon/DocActions";
import { CTAs } from "@/components/kira-landing/CTAs";
import { DOWNLOADS } from "@/lib/kira-sozlesmesi";
import { SITE_NAME } from "@/lib/site";

const URL = "https://mertkagancetin.com/kira-sozlesmesi-ornegi/";
const MODIFIED = "2026-11-02";

export const metadata: Metadata = {
    title: "Kira Sözleşmesi Örneği 2026 - Word ve PDF İndir",
    description: "2026 kira sözleşmesi örneği: TBK'ya göre hazırlanmış konut ve çatılı işyeri kira kontratı şablonu. Word (DOCX) ve PDF olarak indirin veya yazdırın; depozito, kira artışı, fesih ve teslim tutanağı dahil.",
    openGraph: { siteName: SITE_NAME,
        images: ["/images/izmir-kira-avukati-og.jpg"],
        title: "Kira Sözleşmesi Örneği 2026 | Word ve PDF İndir",
        description: "TBK'ya göre hazırlanmış kira sözleşmesi şablonu: Word ve PDF indir, yazdır.",
        url: URL,
        type: "article",
    },
    other: { "article:modified_time": MODIFIED },
    alternates: { canonical: URL },
};

const filledExample: [string, string][] = [
    ["Düzenleme yeri ve tarihi", "İzmir, 01.11.2026"],
    ["Kiraya veren", "Ayşe Yılmaz – Örnek Mah. 100 Sk. No:1, Bayraklı/İzmir"],
    ["Kiracı", "Mehmet Demir – Deneme Mah. 200 Sk. No:2, Bornova/İzmir"],
    ["Kiralanan", "Örnek Mah. 300 Sk. No:3 D:5, Bayraklı/İzmir – 3+1, 2. kat, konut"],
    ["Kira süresi", "01.11.2026 – 31.10.2027 (1 yıl, belirli süreli)"],
    ["Aylık kira / ödeme günü", "[tarafların belirlediği tutar] TL – her ayın 5'i, banka havalesi"],
    ["Güvence bedeli", "[tutar] TL – en fazla üç aylık kira (TBK m. 342)"],
    ["Kira artışı", "Yenilenen kira yılında, önceki kira yılının 12 aylık TÜFE ortalamasına göre değişim oranında (TBK m. 344)"],
    ["Özel şart", "Evcil hayvan beslenmesi kiraya verenin yazılı iznine bağlıdır."],
    ["Ek-1", "Teslim tutanağı: anahtar sayısı, sayaç endeksleri, eşya listesi"],
];

const howToSteps = [
    { name: "Tarafları yazın", text: "Kiraya veren ve kiracının ad soyadı, T.C. kimlik numarası, tebligat adresi ve iletişim bilgileri eksiksiz yazılır." },
    { name: "Kiralananı tanımlayın", text: "Açık adres, tapu bilgisi, oda sayısı, kat ve daire numarası ile konut veya çatılı işyeri niteliği belirtilir." },
    { name: "Süre, bedel ve güvenceyi belirleyin", text: "Başlangıç ve bitiş tarihi, aylık kira bedeli (rakam ve yazıyla), ödeme günü, IBAN ve güvence bedeli yazılır. Güvence üç aylık kirayı aşamaz (TBK m. 342)." },
    { name: "Özel şartları ekleyin", text: "Evcil hayvan, otopark veya eşyalı kiralama gibi konular özel şartlara yazılır; kanunun emredici hükümlerine aykırı şartlar geçersizdir." },
    { name: "İmzalayın ve teslim tutanağını doldurun", text: "Sözleşme iki nüsha imzalanır; Ek-1 teslim tutanağına sayaç endeksleri, anahtar sayısı ve mevcut durum yazılarak fotoğraflarla desteklenir." },
];

const keyClauses = [
    { icon: Receipt, title: "Güvence bedeli (depozito)", text: <>Güvence üç aylık kira bedelini aşamaz; para olarak verilirse kiracı adına vadeli tasarruf hesabına yatırılır (TBK m. 342). Ayrıntı: <Link href="/sozluk/depozito/">depozito</Link>.</> },
    { icon: Percent, title: "Kira artış oranı", text: <>Yenilenen kira yılında artış, önceki kira yılının 12 aylık TÜFE ortalamasına göre değişim oranını aşamaz (TBK m. 344). Hesap için <Link href="/kira-artis-orani-hesaplama/">kira artış oranı hesaplama</Link> aracı kullanılabilir.</> },
    { icon: CalendarClock, title: "Süre, uzama ve fesih", text: <>Kiracı süre bitiminden 15 gün önce bildirimde bulunmazsa sözleşme bir yıl uzar; kiraya veren sebep göstermeksizin ancak <Link href="/sozluk/10-yillik-uzama-suresi/">10 yıllık uzama süresi</Link> sonunda fesih bildirebilir (TBK m. 347).</> },
    { icon: KeyRound, title: "Tahliye taahhüdü", text: <>Tahliye taahhüdü, kiralananın tesliminden sonra yazılı olarak verilmelidir; sözleşmeyle aynı anda alınan taahhüt geçersizlik tartışmasına yol açar. Örnek: <Link href="/tahliye-taahhutnamesi/">tahliye taahhütnamesi</Link>.</> },
    { icon: Users, title: "Kefil", text: <>Kefalet yazılı yapılır; kefil, sorumlu olacağı azami miktarı, kefalet tarihini ve müteselsil kefil ise bunu kendi el yazısıyla belirtir (TBK m. 583). Evli kefilde eşin yazılı rızası aranır (TBK m. 584).</> },
    { icon: Ban, title: "Geçersiz şartlar", text: <>Kira geç ödenirse ceza koşulu veya sonraki kiraların muaccel olacağı gibi şartlar geçersizdir (TBK m. 346). Kiracı aleyhine değiştirilemeyen hükümler için TBK m. 354 uygulanır.</> },
    { icon: ClipboardList, title: "Teslim tutanağı", text: <>Teslim anındaki durumun sayaç endeksleri, anahtar sayısı ve fotoğraflarla kayda geçirilmesi, iade sırasında güvence bedeli tartışmalarını azaltır (TBK m. 334).</> },
    { icon: Scale, title: "Uyuşmazlıkta arabuluculuk", text: <>1 Eylül 2023&apos;ten bu yana kira uyuşmazlıklarında dava açmadan önce arabulucuya başvurmak zorunludur (6325 sayılı Kanun m. 18/B). Bkz. <Link href="/sozluk/zorunlu-arabuluculuk/">zorunlu arabuluculuk</Link>.</> },
];

const faqs = [
    { question: "Kira sözleşmesi yazılı olmak zorunda mı?", answer: "Hayır. Kira sözleşmesi herhangi bir şekle bağlı değildir ve sözlü olarak da kurulabilir. Ancak kira bedeli, süre ve güvence gibi konuların ispatı için yazılı sözleşme yapılması faydalıdır." },
    { question: "Kırtasiyeden alınan kira kontratı geçerli mi?", answer: "Evet, taraflarca imzalanan matbu kira sözleşmesi geçerlidir. Ancak matbu metinlerde yer alan ve kanunun emredici hükümlerine aykırı şartlar, örneğin üç aylık kirayı aşan güvence veya geç ödemede ceza koşulu, geçersizdir (TBK m. 342, 346)." },
    { question: "Kira sözleşmesi noter onayı gerektirir mi?", answer: "Hayır. Tarafların kendi aralarında imzaladığı adi yazılı sözleşme geçerlidir. Noterde düzenleme veya onaylatma, imza inkârı riskini azaltan bir ispat kolaylığı sağlar." },
    { question: "1 yıllık kira sözleşmesi kaç yıl geçerli?", answer: "Bir yıllık belirli süreli sözleşme, kiracı süre bitiminden en az 15 gün önce bildirimde bulunmazsa aynı koşullarla birer yıl uzar. Kiraya veren, sözleşme süresinin bitmesini tek başına tahliye sebebi olarak kullanamaz; sebep göstermeksizin fesih ancak 10 yıllık uzama süresinin sonunda mümkündür (TBK m. 347)." },
    { question: "1 yıllık kira sözleşmesi bitmeden kiracı evden çıkabilir mi?", answer: "Kiracı süreye uymadan kiralananı geri verirse, kiralananın benzer koşullarla kiraya verilebileceği makul süre boyunca kira bedelini ödemekle yükümlü olabilir. Kiracının önerdiği, ödeme gücü olan ve kiraya veren için kabul edilebilir yeni bir kiracı bulunursa bu yükümlülük sona erer (TBK m. 325)." },
    { question: "Kira sözleşmesinde depozito ne kadar olabilir?", answer: "Konut ve çatılı işyeri kiralarında güvence bedeli en fazla üç aylık kira bedeli kadar olabilir. Para olarak verilen güvence, kiraya verenin onayı olmadan çekilmemek üzere vadeli tasarruf hesabına yatırılır (TBK m. 342)." },
    { question: "Kira artış oranı nasıl belirlenir?", answer: "Yenilenen kira yıllarında artış, bir önceki kira yılında TÜFE'nin on iki aylık ortalamalara göre değişim oranını geçemez (TBK m. 344). Daha yüksek oran kararlaştırılmış olsa bile yasal üst sınır uygulanır." },
    { question: "Kiracı kira sözleşmesini nasıl fesheder?", answer: "Belirli süreli sözleşmede kiracı, süre bitiminden en az 15 gün önce yazılı bildirimde bulunarak sözleşmeyi sona erdirebilir. Belirsiz süreli sözleşmede yerel âdetteki kira dönemi, yoksa altı aylık dönem sonu için üç ay önceden yazılı fesih bildirimi yapılır (TBK m. 329, 347, 348)." },
];

const glossary = [
    { href: "/sozluk/kira-sozlesmesi/", label: "Kira sözleşmesi" },
    { href: "/sozluk/depozito/", label: "Depozito" },
    { href: "/sozluk/kira-artis-orani/", label: "Kira artış oranı" },
    { href: "/sozluk/10-yillik-uzama-suresi/", label: "10 yıllık uzama süresi" },
    { href: "/sozluk/tahliye-taahhutnamesi/", label: "Tahliye taahhütnamesi" },
    { href: "/sozluk/kiraci-haklari/", label: "Kiracı hakları" },
    { href: "/sozluk/zorunlu-arabuluculuk/", label: "Zorunlu arabuluculuk" },
];

const linkCls = "text-secondary-ink font-semibold underline underline-offset-2 hover:text-primary";

export default function KiraSozlesmesiPage() {
    return (
        <div className="bg-slate-50 min-h-screen print:bg-white">
            <BreadcrumbSchema
                items={[
                    { name: "İzmir Kira Avukatı", url: "https://mertkagancetin.com/" },
                    { name: "Kira Sözleşmesi Örneği", url: URL },
                ]}
            />
            <FAQSchema faqs={faqs} />
            <HowToSchema name="Kira sözleşmesi nasıl doldurulur?" description="Kira sözleşmesi şablonunun adım adım doldurulması." steps={howToSteps} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-primary text-white print:hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_55%)]" aria-hidden="true" />
                <div className="container relative mx-auto px-4 pt-6 pb-14 md:pb-16">
                    <nav aria-label="Sayfa konumu" className="mb-8 text-sm text-slate-200">
                        <ol className="flex flex-wrap items-center gap-1.5">
                            <li><Link href="/" className="inline-flex items-center gap-1 hover:text-white"><Home className="h-3.5 w-3.5" aria-hidden="true" />Ana Sayfa</Link></li>
                            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                            <li aria-current="page" className="text-white">Kira Sözleşmesi Örneği</li>
                        </ol>
                    </nav>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                            <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Word · PDF · Yazdırılabilir
                        </p>
                        <h1 className="mb-5 font-playfair text-4xl font-bold leading-tight md:text-6xl">Kira Sözleşmesi Örneği 2026</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200 md:text-lg">
                            Türk Borçlar Kanunu&apos;nun kira hükümlerine (TBK m. 299 vd.) göre hazırlanmış konut ve çatılı işyeri kira sözleşmesi şablonu. Word veya PDF olarak indirilebilir, doğrudan yazdırılabilir; teslim tutanağı ektedir.
                        </p>
                        <DocActions variant="dark" />
                        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-300">
                            <ShieldCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
                            Hazırlayan: Av. Mert Kağan Çetin, İzmir Barosu · Son güncelleme: 2 Kasım 2026
                        </p>
                    </div>
                    <dl className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
                        {[
                            ["Güvence bedeli", "En fazla 3 aylık kira", "TBK m. 342"],
                            ["Yıllık kira artışı", "12 aylık TÜFE ortalaması", "TBK m. 344"],
                            ["Sözleşme süresi", "Kendiliğinden 1 yıl uzar", "TBK m. 347"],
                        ].map(([k, v, s]) => (
                            <div key={k} className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-left">
                                <dt className="text-xs font-semibold uppercase tracking-wider text-secondary">{k}</dt>
                                <dd className="mt-1 font-semibold text-white">{v} <span className="font-normal text-slate-300">· {s}</span></dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Nasıl doldurulur */}
            <section className="container mx-auto px-4 py-12 print:hidden" aria-labelledby="nasil">
                <h2 id="nasil" className="mb-6 text-center font-playfair text-2xl font-bold text-primary md:text-3xl">Kira Sözleşmesi Nasıl Doldurulur?</h2>
                <ol className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {howToSteps.map((st, i) => (
                        <li key={st.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
                            <h3 className="mb-1.5 text-base font-bold text-primary">{st.name}</h3>
                            <p className="text-sm leading-relaxed text-slate-600">{st.text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Şablon */}
            <section className="pb-12 print:p-0" aria-labelledby="sablon">
                <div className="container mx-auto px-4 print:max-w-none print:p-0">
                    <div className="mx-auto mb-5 flex max-w-[210mm] flex-col items-center gap-4 print:hidden">
                        <h2 id="sablon" className="text-center font-playfair text-2xl font-bold text-primary md:text-3xl">Kira Sözleşmesi Şablonu</h2>
                        <DocActions variant="light" />
                    </div>
                    <div className="mx-auto max-w-[210mm] rounded-sm border border-slate-200 bg-white px-5 py-8 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.25)] sm:px-[14mm] sm:py-[16mm] md:px-[20mm] md:py-[20mm] print:max-w-none print:border-0 print:p-0 print:shadow-none">
                        <ContractDocument />
                    </div>
                    <p className="mx-auto mt-4 max-w-[210mm] text-center text-sm text-slate-600 print:hidden">
                        Şablon genel bilgilendirme amaçlıdır; işyeri kiraları, eşyalı veya döviz cinsinden kiralar gibi durumlarda somut ilişkiye göre uyarlanması gerekebilir.
                    </p>
                </div>
            </section>

            <div className="print:hidden">
                {/* Doldurulmuş örnek */}
                <section className="bg-white py-14" aria-labelledby="doldurulmus-ornek">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h2 id="doldurulmus-ornek" className="mb-3 scroll-mt-24 font-playfair text-2xl font-bold text-primary md:text-3xl">Doldurulmuş Kira Sözleşmesi Örneği</h2>
                        <p className="mb-6 text-slate-600">
                            Aşağıdaki tablo, şablonun nasıl doldurulacağını gösteren hayali bir örnektir; kişi, adres ve bedeller gerçek değildir. Doldurulmuş örneğin tamamı <a href={DOWNLOADS.filledDocx} download className={linkCls}>Word (DOCX)</a> veya <a href={DOWNLOADS.filledPdf} download className={linkCls}>PDF</a> olarak indirilebilir.
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                            <table className="w-full text-left text-[15px]">
                                <caption className="sr-only">Doldurulmuş kira sözleşmesi örneği</caption>
                                <tbody className="divide-y divide-slate-200">
                                    {filledExample.map(([k, v]) => (
                                        <tr key={k}>
                                            <th scope="row" className="w-2/5 bg-slate-50 px-4 py-3 align-top font-semibold text-slate-800">{k}</th>
                                            <td className="px-4 py-3 text-slate-700">{v}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Dikkat edilmesi gereken maddeler */}
                <section className="py-14" aria-labelledby="dikkat">
                    <div className="container mx-auto max-w-6xl px-4">
                        <h2 id="dikkat" className="mb-3 text-center font-playfair text-2xl font-bold text-primary md:text-3xl">Kira Sözleşmesinde Dikkat Edilmesi Gereken Maddeler</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-center text-slate-600">Konut ve çatılı işyeri kiralarında aşağıdaki konular kanunla sınırlandırılmıştır; sözleşmeye aykırı şart yazılsa bile kanun hükmü uygulanır.</p>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {keyClauses.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm [&_a]:font-semibold [&_a]:text-secondary-ink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary">
                                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                                    <h3 className="mb-1.5 text-base font-bold text-primary">{title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bilgi */}
                <section className="bg-white py-14">
                    <div className="mx-auto doc-prose px-4">
                        <h2>Kira Sözleşmesi Nedir?</h2>
                        <p>
                            <Link href="/sozluk/kira-sozlesmesi/" className={linkCls}>Kira sözleşmesi</Link>, kiraya verenin bir şeyin kullanılmasını veya kullanmayla birlikte ondan yararlanılmasını kiracıya bırakmayı, kiracının da buna karşılık kira bedeli ödemeyi üstlendiği sözleşmedir (TBK m. 299). Konut ve çatılı işyeri kiralarına ilişkin özel hükümler TBK m. 339-356 arasında yer alır ve bu hükümler kiracı aleyhine değiştirilemez (TBK m. 354).
                        </p>
                        <p>
                            Sözleşme yazılı olmak zorunda değildir; ancak kira bedeli, süre, güvence ve teslim durumu gibi konuların ispatı için yazılı sözleşme ve teslim tutanağı düzenlenmesi faydalıdır. Sözleşmenin hazırlanması veya incelenmesi hakkında bilgi <Link href="/izmir-kira-sozlesmesi-avukati/" className={linkCls}>İzmir kira sözleşmesi avukatı</Link> sayfasında yer alır.
                        </p>

                        <h2>Kira Sözleşmesinde Bulunması Gereken Bilgiler</h2>
                        <ul>
                            <li><strong>Taraf bilgileri:</strong> Ad soyad veya unvan, T.C. kimlik veya vergi numarası, tebligat adresi ve iletişim bilgileri</li>
                            <li><strong>Kiralanan:</strong> Açık adres, tapu bilgisi, oda sayısı, kat ve daire numarası, konut veya işyeri niteliği</li>
                            <li><strong>Süre:</strong> Başlangıç ve bitiş tarihi</li>
                            <li><strong>Kira bedeli:</strong> Aylık tutar (rakam ve yazıyla), ödeme günü, ödeme şekli ve IBAN</li>
                            <li><strong>Güvence bedeli:</strong> En fazla üç aylık kira (TBK m. 342)</li>
                            <li><strong>Artış şartı:</strong> 12 aylık TÜFE ortalamasıyla sınırlı artış (TBK m. 344)</li>
                            <li><strong>Yan giderler:</strong> Aidat, abonelikler ve olağanüstü giderlerin kime ait olduğu (TBK m. 341)</li>
                            <li><strong>Ek:</strong> Teslim tutanağı ve demirbaş listesi</li>
                        </ul>

                        <h2>Kiracı ve Ev Sahibi Açısından Kontrol Listesi</h2>
                        <h3>Kiracı açısından</h3>
                        <ul>
                            <li>Güvence bedelinin üç aylık kirayı aşmadığı ve vadeli hesaba yatırılacağı kontrol edilebilir.</li>
                            <li>Teslim anındaki eksik ve hasarlar tutanağa yazılıp fotoğraflanabilir.</li>
                            <li>Aidat ve yan giderlerin paylaşımı sözleşmede açıkça yazılabilir.</li>
                            <li>Sözleşme süresi ve <Link href="/izmir-kiraci-tahliye-davasi-avukati/" className={linkCls}>tahliye sebepleri</Link> hakkında bilgi edinilebilir.</li>
                        </ul>
                        <h3>Ev sahibi açısından</h3>
                        <ul>
                            <li>Kiracının kimlik bilgileri ve tebligat adresi doğrulanabilir.</li>
                            <li>Kira ödemelerinin banka yoluyla ve açıklamalı yapılması ispat kolaylığı sağlar.</li>
                            <li>Yıllık artış <Link href="/kira-artis-orani-hesaplama/" className={linkCls}>kira artış oranı</Link> sınırına göre hesaplanabilir.</li>
                            <li><Link href="/tahliye-taahhutnamesi/" className={linkCls}>Tahliye taahhütnamesi</Link>, kiralananın tesliminden sonra ayrı bir belge olarak alınabilir.</li>
                        </ul>

                        <h2>Kira Sözleşmesiyle İlgili Uyuşmazlıklar</h2>
                        <p>
                            Kira bedeli, tahliye, güvence iadesi ve aidat gibi kira sözleşmesinden doğan uyuşmazlıklarda 1 Eylül 2023&apos;ten bu yana dava açmadan önce <Link href="/izmir-kira-arabuluculuk-avukati/" className={linkCls}>kira arabuluculuğu</Link> zorunludur. Arabuluculukta anlaşma sağlanamazsa sulh hukuk mahkemesinde dava açılabilir; ilamsız icra yoluyla tahliye takipleri bu şartın dışındadır.
                        </p>

                        <h2>Sıkça Sorulan Sorular</h2>
                        <div className="not-prose space-y-3">
                            {faqs.map((faq, i) => (
                                <details key={faq.question} className="group overflow-hidden rounded-xl border border-slate-200 bg-white" {...(i === 0 ? { open: true } : {})}>
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-bold text-primary transition-colors hover:bg-slate-50 md:text-lg [&::-webkit-details-marker]:hidden">
                                        <h3 className="font-[inherit] text-[inherit] tracking-[inherit]">{faq.question}</h3>
                                        <ChevronRight className="h-5 w-5 flex-shrink-0 rotate-90 text-slate-500 transition-transform duration-200 group-open:-rotate-90" aria-hidden="true" />
                                    </summary>
                                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-[0.95rem] leading-relaxed text-slate-600">{faq.answer}</div>
                                </details>
                            ))}
                        </div>

                        <h2>İlgili Terimler</h2>
                        <ul className="not-prose flex flex-wrap gap-2" aria-label="Kira hukuku sözlüğü">
                            {glossary.map((g) => (
                                <li key={g.href}>
                                    <Link href={g.href} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-primary hover:border-secondary hover:bg-white">{g.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary py-14 text-white" aria-labelledby="destek">
                    <div className="container mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
                        <h2 id="destek" className="mb-3 font-playfair text-2xl font-bold md:text-3xl">Kira Sözleşmesinin Hazırlanması veya İncelenmesi</h2>
                        <p className="mb-7 max-w-2xl text-slate-200">
                            Mevcut bir kira sözleşmesi WhatsApp üzerinden iletilebilir; ön görüşme telefonla yapılabilir. Hizmet kapsamı <Link href="/izmir-kira-sozlesmesi-avukati/" className="font-semibold text-secondary underline underline-offset-2 hover:text-white">kira sözleşmesi hazırlama ve inceleme</Link> sayfasında açıklanmıştır.
                        </p>
                        <CTAs waText="Merhaba, kira sözleşmesi hakkında görüşmek istiyorum." />
                    </div>
                </section>
            </div>
        </div>
    );
}
