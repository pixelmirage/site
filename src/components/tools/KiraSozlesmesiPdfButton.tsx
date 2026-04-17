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
            doc.setTextColor(0, 0, 0);

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

            function sectionTitle(text: string) {
                checkPage(14);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(13);
                doc.text(text, margin, y);
                doc.setLineWidth(0.3);
                doc.line(margin, y + 1.5, margin + doc.getTextWidth(text), y + 1.5);
                y += 8;
            }

            function writeArticle(num: number, title: string, text: string) {
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(11.5);
                const heading = `MADDE ${num} - ${title}`;
                checkPage(22);
                doc.text(heading, margin, y);
                y += 6;
                doc.setFontSize(10.5);
                const lines = doc.splitTextToSize(text, contentWidth);
                checkPage(lines.length * 5 + 4);
                doc.text(lines, margin, y);
                y += lines.length * 5 + 7;
            }

            function fieldLine(text: string, indent = true) {
                doc.setTextColor(0, 0, 0);
                doc.text(text, indent ? margin + 4 : margin, y);
                y += 7;
            }

            // ===== BAŞLIK =====
            doc.setFontSize(20);
            doc.setTextColor(0, 0, 0);
            const title = "KİRA SÖZLEŞMESİ";
            const titleW = doc.getTextWidth(title);
            const titleX = (pw - titleW) / 2;
            doc.text(title, titleX, 30);
            doc.setLineWidth(0.6);
            doc.line(titleX - 2, 33, titleX + titleW + 2, 33);

            // Tarih
            doc.setFontSize(10.5);
            doc.text("Düzenleme Tarihi: ..... / ..... / 20.....", pw - margin - 72, 42);

            y = 54;

            // ===== TARAFLAR =====
            sectionTitle("TARAFLAR");

            doc.setFontSize(11);
            doc.text("KİRAYA VEREN (Ev Sahibi)", margin, y);
            y += 7;
            doc.setFontSize(10.5);
            fieldLine("Ad Soyad: " + dotLine);
            fieldLine("T.C. Kimlik No: " + dotLine);
            fieldLine("Adres: " + dotLine);

            y += 4;
            doc.setFontSize(11);
            doc.text("KİRACI", margin, y);
            y += 7;
            doc.setFontSize(10.5);
            fieldLine("Ad Soyad: " + dotLine);
            fieldLine("T.C. Kimlik No: " + dotLine);
            fieldLine("Adres: " + dotLine);

            y += 5;

            // ===== KİRALANAN =====
            sectionTitle("KİRALANAN TAŞINMAZ");
            doc.setFontSize(10.5);
            fieldLine("Adres: " + dotLine);
            fieldLine(dotLine);
            fieldLine("Oda Sayısı: ............   Kat: ............   Daire No: ............");
            fieldLine("Kullanım Amacı:  [ ] Konut    [ ] İşyeri");

            y += 5;

            // ===== KİRA SÜRESİ VE BEDELİ =====
            sectionTitle("KİRA SÜRESİ VE BEDELİ");
            doc.setFontSize(10.5);
            fieldLine("Kira Başlangıç Tarihi: ..... / ..... / 20.....");
            fieldLine("Kira Bitiş Tarihi: ..... / ..... / 20.....");
            fieldLine("Aylık Kira Bedeli: ................................. TL");
            fieldLine("Ödeme Günü: Her ayın ..... 'inde / 'ünde");
            fieldLine("Ödeme Şekli:  [ ] Banka Havalesi    [ ] Elden    [ ] Diğer: ...............");
            fieldLine("Depozito (Güvence Bedeli): ................................. TL");

            y += 8;

            // ===== SÖZLEŞME HÜKÜMLERİ =====
            doc.setFontSize(15);
            doc.setTextColor(0, 0, 0);
            checkPage(16);
            doc.text("SÖZLEŞME HÜKÜMLERİ", margin, y);
            doc.setLineWidth(0.4);
            doc.line(margin, y + 2, margin + doc.getTextWidth("SÖZLEŞME HÜKÜMLERİ"), y + 2);
            y += 12;

            writeArticle(1, "KİRA BEDELİNİN ÖDENMESİ",
                "Kiracı, kira bedelini her ayın belirtilen gününde peşin olarak kiraya verenin bildireceği banka hesabına ödeyecektir. Kira bedelinin zamanında ödenmemesi halinde kiracı temerrüde düşmüş sayılır. Kiraya veren, Türk Borçlar Kanunu'nun 315. maddesi uyarınca kiracıya yazılı ihtarda bulunarak 30 gün içinde ödeme yapılmasını isteyebilir.");

            writeArticle(2, "KİRA BEDELİNİN ARTIRILMASI",
                "Kira bedeli, her yıl kira başlangıç tarihinin yıl dönümünde, bir önceki kira yılının on iki aylık TÜFE (Tüketici Fiyat Endeksi) ortalamasındaki değişim oranını geçmemek koşuluyla artırılacaktır (TBK m. 344). Taraflar aksini kararlaştırmış olsa dahi yasal sınırı aşan artış oranı uygulanamaz.");

            writeArticle(3, "DEPOZİTO (GÜVENCE BEDELİ)",
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

            // ===== İMZA ALANI =====
            checkPage(55);
            y += 6;
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(10.5);
            const closingLines = doc.splitTextToSize(
                "İşbu sözleşme 2 (iki) nüsha olarak düzenlenmiş olup, taraflar sözleşme hükümlerini okuduklarını, anladıklarını ve kabul ettiklerini beyan ederek imzalamışlardır.",
                contentWidth
            );
            doc.text(closingLines, margin, y);
            y += closingLines.length * 5 + 16;

            doc.setFontSize(11.5);
            doc.setTextColor(0, 0, 0);
            doc.text("KİRAYA VEREN", margin, y);
            doc.text("KİRACI", pw - margin - 40, y);
            y += 7;
            doc.setFontSize(10.5);
            doc.text("Ad Soyad:", margin, y);
            doc.text("Ad Soyad:", pw - margin - 40, y);
            y += 16;
            doc.setFontSize(9);
            doc.setTextColor(130, 130, 130);
            doc.text("(İmza)", margin + 10, y);
            doc.text("(İmza)", pw - margin - 30, y);

            // ===== FOOTER =====
            doc.setFontSize(8);
            doc.setTextColor(130, 130, 130);
            const totalPages = doc.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.text(`mertkagancetin.com | Bu sablon bilgilendirme amaclidir. Sayfa ${i}/${totalPages}`, pw / 2, ph - 10, { align: "center" });
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
