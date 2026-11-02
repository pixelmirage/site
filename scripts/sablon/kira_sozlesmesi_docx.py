"""Kira sözleşmesi şablonunu (src/content/sablon/kira-sozlesmesi.json) Word ve PDF olarak üretir.

Kullanım: python3 scripts/sablon/kira_sozlesmesi_docx.py
Çıktı: public/indir/kira-sozlesmesi-ornegi-2026.{docx,pdf} ve kira-sozlesmesi-doldurulmus-ornek-2026.{docx,pdf}
PDF dönüşümü için LibreOffice (soffice) gerekir.
"""
import json, subprocess, sys
from pathlib import Path
from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_TAB_ALIGNMENT, WD_TAB_LEADER
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor

ROOT = Path(__file__).resolve().parents[2]
D = json.loads((ROOT / "src/content/sablon/kira-sozlesmesi.json").read_text(encoding="utf-8"))
OUT = ROOT / "public/indir"
FONT = "Times New Roman"
GREY = RGBColor(0x4B, 0x55, 0x63)
PAGE_W = Cm(21.0 - 2.2 - 2.2)


def up(s):
    return s.replace("i", "İ").replace("ı", "I").upper()


def set_font(run, size=None, bold=None, italic=None, color=None):
    run.font.name = FONT
    run._element.get_or_add_rPr().get_or_add_rFonts().set(qn("w:eastAsia"), FONT)
    if size: run.font.size = Pt(size)
    if bold is not None: run.bold = bold
    if italic is not None: run.italic = italic
    if color is not None: run.font.color.rgb = color
    return run


def para(doc_or_cell, text="", size=11, bold=False, italic=False, align=None, before=0, after=4, color=None, keep_next=False):
    p = doc_or_cell.add_paragraph()
    pf = p.paragraph_format
    pf.space_before, pf.space_after, pf.line_spacing = Pt(before), Pt(after), 1.15
    if align is not None: p.alignment = align
    if keep_next: pf.keep_with_next = True
    if text: set_font(p.add_run(text), size, bold, italic, color)
    return p


def border(p, side="bottom", sz=6, color="111827", space=2):
    pPr = p._p.get_or_add_pPr()
    bdr = pPr.find(qn("w:pBdr"))
    if bdr is None:
        bdr = OxmlElement("w:pBdr"); pPr.append(bdr)
    el = OxmlElement(f"w:{side}")
    for k, v in (("val", "single"), ("sz", str(sz)), ("space", str(space)), ("color", color)):
        el.set(qn(f"w:{k}"), v)
    bdr.append(el)


def heading(doc, text):
    p = para(doc, up(text), size=10.5, bold=True, before=12, after=6, keep_next=True)
    p.runs[0].font.spacing = Pt(0.6) if hasattr(p.runs[0].font, "spacing") else None
    border(p)
    return p


def line_field(container, label, value=None, width=None, suffix=None, prefix=None, size=11):
    """Etiket + noktalı doldurma çizgisi (sekme lideri) veya doldurulmuş değer."""
    width = width or PAGE_W
    p = para(container, size=size, after=3, before=3)
    if label: set_font(p.add_run(f"{label}: "), size, bold=True)
    if prefix: set_font(p.add_run(prefix + " "), size)
    if value:
        set_font(p.add_run(value), size, italic=True)
        if suffix: set_font(p.add_run(" " + suffix), size)
        return p
    stop = width - (Cm(0.25 * len(suffix) + 0.3) if suffix else 0)
    p.paragraph_format.tab_stops.add_tab_stop(stop, WD_TAB_ALIGNMENT.RIGHT, WD_TAB_LEADER.DOTS)
    set_font(p.add_run("\t\u200b"), size)
    if suffix: set_font(p.add_run(" " + suffix), size)
    return p


def date_field(container, label, value=None, size=11):
    p = para(container, size=size, after=3, before=3)
    set_font(p.add_run(f"{label}: "), size, bold=True)
    set_font(p.add_run(value if value else "...... / ...... / 20......"), size, italic=bool(value))
    return p


def blank_line(container, width=None):
    p = para(container, after=3, before=6)
    p.paragraph_format.tab_stops.add_tab_stop(width or PAGE_W, WD_TAB_ALIGNMENT.RIGHT, WD_TAB_LEADER.DOTS)
    set_font(p.add_run("\t\u200b"), 11)
    return p


def field(container, f, V, width=None):
    v = V.get(f["key"])
    if f.get("options"):
        p = para(container, after=3, before=3)
        set_font(p.add_run(f["label"] + ": "), 11, bold=True)
        for o in f["options"]:
            set_font(p.add_run(("☒ " if v == o else "☐ ") + o + "      "), 11)
    elif f.get("kind") == "date":
        date_field(container, f["label"], v)
    else:
        line_field(container, f["label"], v, width=width, suffix=f.get("suffix"), prefix=f.get("prefix"))
        if not v and f.get("lines", 1) > 1:
            for _ in range(f["lines"] - 1):
                blank_line(container, width)
    if f.get("note"):
        para(container, f["note"], size=9, italic=True, color=GREY, after=2)


def cell_margins(table, top=80, bottom=80, left=120, right=120):
    tblPr = table._tbl.tblPr
    mar = OxmlElement("w:tblCellMar")
    for side, val in (("top", top), ("left", left), ("bottom", bottom), ("right", right)):
        el = OxmlElement(f"w:{side}"); el.set(qn("w:w"), str(val)); el.set(qn("w:type"), "dxa"); mar.append(el)
    tblPr.append(mar)


def no_borders(table):
    tblPr = table._tbl.tblPr
    b = OxmlElement("w:tblBorders")
    for side in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f"w:{side}"); el.set(qn("w:val"), "nil"); b.append(el)
    tblPr.append(b)


def first_par(cell):
    p = cell.paragraphs[0]
    p._element.getparent().remove(p._element)


def two_col(doc, columns, fill, bordered=True):
    t = doc.add_table(rows=1, cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    if bordered: t.style = "Table Grid"
    else: no_borders(t)
    cell_margins(t)
    col_w = Cm(8.1)
    for i, c in enumerate(columns):
        cell = t.rows[0].cells[i]
        cell.width = col_w
        first_par(cell)
        p = para(cell, up(c["label"]), size=10, bold=True, after=4, align=WD_ALIGN_PARAGRAPH.CENTER if not bordered else None)
        border(p, sz=4, color="D1D5DB")
        fill(cell, c, Cm(7.3))
    return t


def footer(section):
    fp = section.footer.paragraphs[0]
    fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_font(fp.add_run(D["footer"]), 8, color=GREY)
    p2 = section.footer.add_paragraph(); p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_font(p2.add_run("Sayfa "), 8, color=GREY)
    for instr in ("PAGE",):
        r = set_font(p2.add_run(), 8, color=GREY)
        for tag, attr in (("w:fldChar", "begin"), ("w:instrText", None), ("w:fldChar", "separate"), ("w:t", "1"), ("w:fldChar", "end")):
            el = OxmlElement(tag)
            if tag == "w:fldChar": el.set(qn("w:fldCharType"), attr)
            elif tag == "w:t": el.text = attr
            else: el.set(qn("xml:space"), "preserve"); el.text = instr
            r._r.append(el)


def build(V, path, filled):
    doc = Document()
    st = doc.styles["Normal"]; st.font.name = FONT; st.font.size = Pt(11)
    st.element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
    cp = doc.core_properties
    cp.title = "Kira Sözleşmesi" + (" – Doldurulmuş Örnek" if filled else " Örneği 2026")
    cp.author = "Av. Mert Kağan Çetin"; cp.language = "tr-TR"
    cp.comments = "mertkagancetin.com/kira-sozlesmesi-ornegi/"
    s = doc.sections[0]
    s.page_width, s.page_height = Cm(21), Cm(29.7)
    s.left_margin = s.right_margin = Cm(2.2); s.top_margin = Cm(1.8); s.bottom_margin = Cm(1.8)
    footer(s)

    para(doc, up(D["title"]), size=17, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, after=0)
    p = para(doc, up(D["subtitle"]), size=9.5, color=GREY, align=WD_ALIGN_PARAGRAPH.CENTER, after=10)
    border(p, sz=8, space=6)
    if filled:
        para(doc, "DOLDURULMUŞ ÖRNEK – Kişi, adres ve bedeller hayalidir.", size=9, italic=True, color=GREY, align=WD_ALIGN_PARAGRAPH.CENTER, after=6)
    for f in D["header"]:
        field(doc, f, V)

    heading(doc, D["parties"]["title"])
    def fill_party(cell, c, w):
        for r in D["parties"]["rows"]:
            field(cell, {**r, "key": f'{c["key"]}.{r["key"]}'}, V, width=w)
    two_col(doc, D["parties"]["columns"], fill_party)

    for b in D["blocks"]:
        heading(doc, b["title"])
        for f in b["fields"]:
            field(doc, f, V)

    doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
    heading(doc, D["articlesTitle"])
    for i, a in enumerate(D["articles"], 1):
        p = para(doc, before=6, after=2, keep_next=True)
        set_font(p.add_run(f"Madde {i} – {a['title']}"), 11, bold=True)
        for j, t in enumerate(a["text"]):
            q = para(doc, t, align=WD_ALIGN_PARAGRAPH.JUSTIFY, after=3)
            q.paragraph_format.keep_together = True
            if j < len(a["text"]) - 1: q.paragraph_format.keep_with_next = True

    doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
    sp = D["special"]
    heading(doc, sp["title"])
    para(doc, sp["note"], size=9, italic=True, color=GREY, after=4)
    if V.get(sp["key"]):
        para(doc, V[sp["key"]], italic=True, after=4)
    else:
        for _ in range(sp["lines"] + 2):
            blank_line(doc)
    para(doc, D["closing"], before=14, after=6, align=WD_ALIGN_PARAGRAPH.JUSTIFY)
    heading(doc, D["signatures"]["title"])
    def fill_sign(cell, c, w):
        for r in D["signatures"]["rows"]:
            if r == "İmza":
                para(cell, after=0, before=0); para(cell, after=0, before=0)
            line_field(cell, r, V.get(f'{c["key"]}.ad') if r == "Ad Soyad" else None, width=w)
    two_col(doc, D["signatures"]["columns"], fill_sign, bordered=False)

    # Ek-1
    doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
    an = D["annex"]
    heading(doc, an["title"])
    para(doc, an["intro"], after=4)
    for f in an["fields"]:
        field(doc, f, V)
    para(doc, an["tableTitle"], bold=True, before=8, after=4, keep_next=True)
    t = doc.add_table(rows=1 + an["tableRows"], cols=3); t.style = "Table Grid"; t.autofit = False
    cell_margins(t, 60, 60, 100, 100)
    widths = (Cm(6.2), Cm(2.0), Cm(8.4))
    for ri, row in enumerate(t.rows):
        row.height = Cm(0.75)
        for ci, cell in enumerate(row.cells):
            cell.width = widths[ci]
            p = cell.paragraphs[0]
            if ri == 0:
                set_font(p.add_run(an["tableHead"][ci]), 10, bold=True)
                shd = OxmlElement("w:shd"); shd.set(qn("w:val"), "clear"); shd.set(qn("w:fill"), "F3F4F6")
                cell._tc.get_or_add_tcPr().append(shd)
    para(doc, an["signNote"], size=9, italic=True, color=GREY, before=4, after=10)
    def fill_sign2(cell, c, w):
        para(cell, after=0); line_field(cell, "İmza", None, width=w)
    two_col(doc, D["signatures"]["columns"], fill_sign2, bordered=False)
    doc.save(path)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = [(dict(), "kira-sozlesmesi-ornegi-2026", False), (D["example"], "kira-sozlesmesi-doldurulmus-ornek-2026", True)]
    for V, name, filled in jobs:
        dx = OUT / f"{name}.docx"
        build(V, dx, filled)
        subprocess.run(["soffice", "--headless", "--convert-to", "pdf", "--outdir", str(OUT), str(dx)], check=True, capture_output=True)
        print("ok", dx.name, f"{name}.pdf")


if __name__ == "__main__":
    sys.exit(main())
