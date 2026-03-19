# Bilgi Kartı Tasarım Standardı

> Tüm YouTube Shorts videolarındaki sahneler bu standarda göre üretilecektir.

## Genel Prompt Şablonu

Her sahne için aşağıdaki **temel prompt**'u kullanın, yalnızca `[BAŞLIK]`, `[İÇERİK]` ve `[İKON]` kısımlarını değiştirin:

```
A professional vertical info card (9:16 aspect ratio) for a YouTube Shorts legal education video. Dark navy blue gradient background (#0f172a to #1e293b). At the top center, a small gold scale of justice icon. Below it, the title "[BAŞLIK]" in bold white serif font (Playfair Display style), centered. In the middle area, the main content: [İÇERİK]. At the bottom, a thin gold horizontal line separator, then "Av. Mert Kağan Çetin | İzmir" in small elegant white sans-serif font. Clean, minimal, premium law firm aesthetic. No photos, only text and simple geometric icons. Sharp, high resolution.
```

## Sahne Tiplerine Göre Varyasyonlar

### 🔴 Sahne 1 – Hook Kartı
- Arka plan: Koyu lacivert gradient + hafif kırmızı/turuncu vurgu (dikkat çekici)
- Üst kısım: ⚠️ uyarı ikonu veya ❓ soru işareti ikonu (altın rengi)
- Orta: Büyük, kalın, beyaz başlık metni (kısa soru veya şok edici ifade)
- Alt: Boş (henüz branding yok, merak uyandırıcı)

**Prompt eki:** `Add a subtle red/orange glow effect at the top edge to create urgency. The title text should be extra large and bold. No branding at the bottom, leave it clean.`

### 🔵 Sahne 2 – Tanım Kartı
- Arka plan: Koyu lacivert gradient (standart)
- Üst: Altın terazi ikonu + Terim adı (büyük beyaz serif font)
- Orta: Kısa tanım metni (açık gri, sans-serif, okunabilir)
- Alt: Yasal dayanak etiketi (altın çerçeveli küçük badge: "TBK m. 352/1")

**Prompt eki:** `Below the title, show the definition text in light gray (#cbd5e1) sans-serif font. At the bottom right, add a small gold-bordered badge with the legal reference "[YASAL DAYANAK]".`

### 🟢 Sahne 3 – Bilgi/Liste Kartı
- Arka plan: Koyu lacivert gradient
- Üst: Küçük altın ikon + kısa başlık
- Orta: Madde işaretli liste veya numaralı adımlar (her madde altın bullet + beyaz metin)
- Alt: Branding satırı

**Prompt eki:** `In the middle, show a numbered/bulleted list with gold bullet points or gold numbers, each item in white text. Items should be well-spaced and easy to read.`

### 🟡 Sahne 4 – Uyarı / Önemli Bilgi Kartı
- Arka plan: Koyu lacivert + hafif altın/sarı kenar çizgisi (sol kenar accent)
- Üst: ⚠️ "DİKKAT" veya "ÖNEMLİ" etiketi (altın rengi)
- Orta: Kritik bilgi metni (beyaz, orta punto)
- Alt: Branding satırı

**Prompt eki:** `Add a vertical gold accent line on the left edge. Show a gold "⚠️ DİKKAT" or "ÖNEMLİ" label at the top. The content text is white, slightly larger than body text.`

### 🟣 Sahne 5 – CTA (Call-to-Action) Kartı
- Arka plan: Koyu lacivert gradient (premium)
- Üst: Büyük altın terazi ikonu
- Orta: "Av. Mert Kağan Çetin" (büyük, beyaz, serif)
- Alt: "Ücretsiz Ön Görüşme" butonu (altın arka plan, koyu metin, rounded corners)
- En alt: "İzmir | mertkagancetin.com" (küçük, gri)

**Prompt eki:** `Centered large gold scales of justice icon. Below it, "Av. Mert Kağan Çetin" in large white serif font. Below that, a gold rounded button with dark text reading "Ücretsiz Ön Görüşme". At the very bottom, "İzmir | mertkagancetin.com" in small gray text.`

---

## Renkler
| Eleman | Renk |
|---|---|
| Arka plan üst | `#0f172a` (slate-900) |
| Arka plan alt | `#1e293b` (slate-800) |
| Başlık metin | `#ffffff` (beyaz) |
| Gövde metin | `#cbd5e1` (slate-300) |
| Vurgu/accent | `#d4a853` (altın) |
| Uyarı | `#f59e0b` (amber) |
| Hook vurgu | `#ef4444` (kırmızı glow) |

## Font Stili
- Başlıklar: Playfair Display (serif, bold)
- Gövde: Inter veya Roboto (sans-serif, regular)
- Badge/etiket: Inter (sans-serif, semibold, uppercase)
