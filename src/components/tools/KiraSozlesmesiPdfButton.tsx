"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

export function KiraSozlesmesiPdfButton() {
    const [loading, setLoading] = useState(false);

    async function generatePdf() {
        setLoading(true);
        try {
            const [{ jsPDF }, { RobotoBase64 }] = await Promise.all([
                import("jspdf"),
                import("@/lib/roboto-font"),
            ]);

            const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

            doc.addFileToVFS("Roboto-Regular.ttf", RobotoBase64);
            doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
            doc.setFont("Roboto");

            const pw = doc.internal.pageSize.getWidth();
            const ph = doc.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pw - margin * 2;
            const dotLine = "......................................................................";

            let y = 0;

            function checkPage(needed: number) {
                if (y + needed > ph - 25) {
                    doc.addPage();
                    y = margin;
                }
            }

            function writeArticle(num: number, title: string, text: string) {
                doc.setFontSize(11);
                const heading = `MADDE ${num} - ${title}`;
                checkPage(20);
                doc.text(heading, margin, y);
                y += 6;
                doc.setFontSize(10);
                const lines = doc.splitTextToSize(text, contentWidth);
                checkPage(lines.length * 4.5 + 4);
                doc.text(lines, margin, y);
                y += lines.length * 4.5 + 6;
            }

            // ===== SAYFA 1 =====

            // Başlık
            doc.setFontSize(18);
            const title = "KİRA SÖZLEŞMESİ";
            const titleW = doc.getTextWidth(title);
            const titleX = (pw - titleW) / 2;
            doc.text(title, titleX, 30);
            doc.setLineWidth(0.5);
            doc.line(titleX - 2, 32, titleX + titleW + 2, 32);

            // Tarih
            doc.setFontSize(10);
            doc.text("Düzenleme Tarihi: ..... / ..... / 20.....", pw - margin - 70, 40);

            y = 52;

            // TARAFLAR
            doc.setFontSize(12);
            doc.text("TARAFLAR", margin, y);
            y += 8;
            doc.setFontSize(10);

            const partyFields = [
                "KİRAYA VEREN (Ev Sahibi)",
                "Ad Soyad: " + dotLine,
                "T.C. Kimlik No: " + dotLine,
                "Adres: " + dotLine,
                "",
                "KİRACI",
                "Ad Soyad: " + dotLine,
                "T.C. Kimlik No: " + dotLine,
                "Adres: " + dotLine,
            ];

            for (const line of partyFields) {
                if (line === "") { y += 4; continue; }
                if (line === "KİRAYA VEREN (Ev Sahibi)" || line === "KİRACI") {
                    doc.setFontSize(11);
                    doc.text(line, margin, y);
                    doc.setFontSize(10);
                    y += 6;
                } else {
                    doc.text(line, margin + 4, y);
                    y += 6;
                }
            }

            y += 6;

            // KİRALANAN
            doc.setFontSize(12);
            doc.text("KİRALANAN TAŞINMAZ", margin, y);
            y += 8;
            doc.setFontSize(10);

            const propertyFields = [
                "Adres: " + dotLine,
                dotLine,
                "Oda Sayısı: ............   Kat: ............   Daire No: ............",
                "Kullanım Amacı:  [ ] Konut    [ ] İşyeri",
            ];

            for (const line of propertyFields) {
                doc.text(line, margin + 4, y);
                y += 6;
            }

            y += 6;

            // KİRA SÜRESİ VE BEDELİ
            doc.setFontSize(12);
            doc.text("KİRA SÜRESİ VE BEDELİ", margin, y);
            y += 8;
            doc.setFontSize(10);

            const termFields = [
                "Kira Başlangıç Tarihi: ..... / ..... / 20.....",
                "Kira Bitiş Tarihi: ..... / ..... / 20.....",
                "Aylık Kira Bedeli: ................................. TL",
                "Ödeme Günü: Her ayın ..... 'inde / 'ünde",
                "Ödeme Şekli:  [ ] Banka Havalesi    [ ] Elden    [ ] Diğer: ...............",
                "Depozito (Güvence Bedeli): ................................. TL",
            ];

            for (const line of termFields) {
                doc.text(line, margin + 4, y);
                y += 6;
            }

            y += 8;

            // SÖZLEŞME MADDELERİ
            doc.setFontSize(14);
            doc.text("SÖZLEŞME HÜKÜMLERİ", margin, y);
            y += 10;

            writeArticle(1, "KİRA BEDELİNİN ÖDENMESİ",
                "Kiracı, kira bedelini her ayın belirtilen gününde peşin olarak kiraya verenin bildireceği banka hesabına ödeyecektir. Kira bedelinin zamanında ödenmemesi halinde kiracı temerrüde düşmüş sayılır. Kiraya veren, Türk Borçlar Kanunu'nun 315. maddesi uyarınca kiracıya yazılı ihtarda bulunarak 30 gün içinde ödeme yapılmasını isteyebilir.");

            writeArticle(2, "KİRA BEDELİNİN ARTIRILMASI",
                "Kira bedeli, her yıl kira başlangıç tarihinin yıl dönümünde, bir önceki kira yılının on iki aylık TÜFE (Tüketici Fiyat Endeksi) ortalamasındaki değişim oranını geçmemek koşuluyla artırılacaktır (TBK m. 344). Taraflar aksini kararlaştırmış olsa dahi yasal sınırı aşan artış oranı uygulanamaz.");

            writeArticle(3, "DEPOZİTO (GÜVence BEDELİ)",
                "Kiracı, sözleşme imzasında belirtilen depozito bedelini kiraya verene teslim edecektir. Depozito, kiralananın sözleşmeye uygun olarak tahliye edilmesi ve kiracının borçsuz olması halinde iade edilir. Kiraya veren, kiracının borçları veya hasarlar için depozitodan kesinti yapabilir (TBK m. 342).");

            writeArticle(4, "KİRALANANIN TESLİMİ VE KULLANIMI",
                "Kiralanan, sözleşmede belirtilen kullanım amacına uygun olarak kullanılacaktır. Kiracı, kiralananı özenle kullanmak ve komşulara saygı göstermekle yükümlüdür (TBK m. 316). Kiracı, kiraya verenin yazılı izni olmaksızın kiralananın tamamını veya bir kısmını başkasına devredemez ya da alt kiraya veremez.");

            writeArticle(5, "BAKIM VE ONARIM",
                "Kiralananın olağan kullanımından kaynaklanan küçük onarımlar (musluk contası, ampul, sigorta vb.) kiracıya aittir. Yapısal onarımlar, tesisat arızaları ve doğal yıpranmadan kaynaklanan tamirler kiraya verene aittir (TBK m. 317). Kiracı, acil onarım gerektiren durumlarda kiraya vereni derhal bilgilendirmekle yükümlüdür.");

            writeArticle(6, "KİRALANANIN İADESİ",
                "Kiracı, sözleşme süresinin sonunda kiralananı aldığı şekilde, olağan kullanımdan doğan yıpranmalar dışında, temiz ve hasarsız olarak kiraya verene teslim edecektir. Teslim sırasında taraflar birlikte durum tespiti yapacaktır.");

            writeArticle(7, "AİDAT VE YAN GİDERLER",
                "Kiralananın kullanımına bağlı giderler (elektrik, su, doğalgaz, internet, aidat gibi) kiracıya aittir. Kiracı, apartman/site aidatını düzenli olarak ödeyecektir. Çatı, dış cephe, asansör gibi ortak alan bakım ve onarım giderleri kiraya verene aittir.");

            writeArticle(8, "DEVİR VE ALT KİRA YASAĞI",
                "Kiracı, kiraya verenin yazılı izni olmaksızın kiralananı kısmen veya tamamen üçüncü bir kişiye devredemez, alt kiraya veremez veya kullanım hakkını başkasına bırakamaz (TBK m. 322).");

            writeArticle(9, "FESİH VE TAHLİYE",
                "Belirli süreli kira sözleşmesi, süre sonunda kendiliğinden sona ermez; kiracı, sözleşme süresinin bitiminden en az 15 gün önce yazılı bildirimde bulunarak sözleşmeyi feshedebilir (TBK m. 347). Kiraya veren, ancak kanunda sayılan haklı sebeplerin varlığında tahliye davası açabilir.");

            writeArticle(10, "TEBLİGAT ADRESİ",
                "Taraflar, bu sözleşmede belirtilen adreslerini tebligat adresi olarak kabul ederler. Adres değişikliği yazılı olarak karşı tarafa bildirilmediği sürece, sözleşmedeki adrese yapılan tebligatlar geçerli sayılır.");

            writeArticle(11, "UYUŞMAZLIKLARIN ÇÖZÜMÜ",
                "Bu sözleşmeden doğan uyuşmazlıklarda 7036 sayılı Kanun uyarınca dava açılmadan önce arabulucuya başvurulması zorunludur. Arabuluculuk sürecinde anlaşma sağlanamaması halinde kiralananın bulunduğu yer sulh hukuk mahkemesi yetkilidir.");

            writeArticle(12, "ÖZEL ŞARTLAR",
                "........................................................................................................................\n........................................................................................................................\n........................................................................................................................");

            // İMZA ALANI
            checkPage(50);
            y += 6;
            doc.setFontSize(10);
            doc.text("İşbu sözleşme 2 (iki) nüsha olarak düzenlenmiş olup, taraflar sözleşme hükümlerini", margin, y);
            y += 5;
            doc.text("okuduklarını, anladıklarını ve kabul ettiklerini beyan ederek imzalamışlardır.", margin, y);
            y += 16;

            // Sol: Kiraya Veren
            doc.setFontSize(11);
            doc.text("KİRAYA VEREN", margin, y);
            doc.text("KİRACI", pw - margin - 40, y);
            y += 6;
            doc.setFontSize(10);
            doc.text("Ad Soyad:", margin, y);
            doc.text("Ad Soyad:", pw - margin - 40, y);
            y += 14;
            doc.setFontSize(9);
            doc.setTextColor(150, 150, 150);
            doc.text("(İmza)", margin + 10, y);
            doc.text("(İmza)", pw - margin - 30, y);

            // Footer
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            const totalPages = doc.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.text(`mertkagancetin.com | Bu şablon bilgilendirme amaçlıdır. Sayfa ${i}/${totalPages}`, pw / 2, ph - 10, { align: "center" });
            }

            doc.save("kira-sozlesmesi-2026.pdf");
        } catch (error) {
            console.error("PDF oluşturulurken hata:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button
            onClick={generatePdf}
            disabled={loading}
            size="lg"
            className="bg-secondary text-white hover:bg-secondary/90 font-bold gap-2 text-lg px-8 shadow-xl"
        >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
            {loading ? "Hazırlanıyor..." : "PDF İndir"}
        </Button>
    );
}
