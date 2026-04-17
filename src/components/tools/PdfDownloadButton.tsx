"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

export function PdfDownloadButton() {
    const [loading, setLoading] = useState(false);

    async function generatePdf() {
        setLoading(true);
        try {
            const [{ jsPDF }, { RobotoBase64 }] = await Promise.all([
                import("jspdf"),
                import("@/lib/roboto-font"),
            ]);

            const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

            // Register Roboto font for Turkish character support
            doc.addFileToVFS("Roboto-Regular.ttf", RobotoBase64);
            doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
            doc.setFont("Roboto");
            doc.setTextColor(0, 0, 0);

            const pw = doc.internal.pageSize.getWidth();
            const margin = 25;
            const contentWidth = pw - margin * 2;

            // Title
            doc.setFontSize(20);
            doc.setTextColor(0, 0, 0);
            const title = "TAHLİYE TAAHHÜTNAMESİ";
            const titleWidth = doc.getTextWidth(title);
            const titleX = (pw - titleWidth) / 2;
            doc.text(title, titleX, 35);
            doc.setLineWidth(0.6);
            doc.line(titleX - 2, 38, titleX + titleWidth + 2, 38);

            // Form fields
            doc.setFontSize(13);
            doc.setTextColor(0, 0, 0);
            let y = 56;
            const lineGap = 15;
            const dotLine = ".....................................................................................";

            const fields = [
                { label: "TAAHHÜT EDEN (KİRACI):", dots: dotLine },
                { label: "T.C. KİMLİK NO:", dots: dotLine },
                { label: "ALACAKLI (KİRAYA VEREN):", dots: dotLine },
            ];

            for (const field of fields) {
                doc.setFont("Roboto", "normal");
                doc.setFontSize(13);
                doc.setTextColor(0, 0, 0);
                doc.text(field.label, margin, y);
                const labelWidth = doc.getTextWidth(field.label + " ");
                doc.text(field.dots.substring(0, Math.floor((contentWidth - labelWidth) / 1.8)), margin + labelWidth, y);
                y += lineGap;
            }

            // Address (2 lines)
            doc.setTextColor(0, 0, 0);
            doc.text("TAHLİYE EDİLECEK MECURUN ADRESİ:", margin, y);
            y += 8;
            doc.text(dotLine, margin, y);
            y += 8;
            doc.text(dotLine, margin, y);
            y += lineGap;

            // Date
            doc.text("TAHLİYE TARİHİ:  ..... / ..... / 20.....", margin, y);
            y += 22;

            // Commitment text
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            const paragraphs = [
                "Halen kiracı olarak kullanmakta olduğum yukarıda adresi yazılı taşınmazı, hiçbir ihtar ve ihbara gerek kalmaksızın, kayıtsız ve şartsız olarak, 6098 sayılı Türk Borçlar Kanunu'nun 352/1 maddesi gereğince, yukarıda belirtilen tarihte tahliye edeceğimi;",
                "Belirtilen tarihte taşınmazı boş ve eksiksiz olarak mal sahibine teslim edeceğimi;",
                "Tahliye etmediğim takdirde, mal sahibinin icra dairesi aracılığıyla tahliye işlemini gerçekleştirebileceğini, bu nedenle oluşacak tüm mahkeme masrafları, icra harçları, avukatlık ücretleri ve diğer tüm giderleri peşinen ödemeyi kabul, beyan ve taahhüt ederim.",
            ];

            for (const para of paragraphs) {
                const lines = doc.splitTextToSize(para, contentWidth);
                doc.text(lines, margin, y, { align: "justify" });
                y += lines.length * 6 + 5;
            }

            // Signature area
            y = Math.max(y + 25, 230);

            // Left: Date
            doc.setFontSize(13);
            doc.setTextColor(0, 0, 0);
            doc.text("DÜZENLEME TARİHİ", margin, y);
            doc.text("..... / ..... / 20.....", margin, y + 22);

            // Right: Signature
            const rightX = pw - margin - 55;
            doc.text("TAAHHÜT EDEN (KİRACI)", rightX, y);
            doc.setFontSize(9);
            doc.setTextColor(130, 130, 130);
            doc.text("(İmza)", rightX + 22, y + 14);

            // Footer
            doc.setFontSize(8);
            doc.setTextColor(130, 130, 130);
            doc.text("mertkagancetin.com | Bu sablon bilgilendirme amaclidir.", pw / 2, 285, { align: "center" });

            doc.save("tahliye-taahhutnamesi-2026.pdf");
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
