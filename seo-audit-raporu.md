# Podcast Transkripti vs. mertkagancetin.com SEO Audit Raporu

**Tarih:** 2026-03-21
**Kaynak:** Legal SEO podcast (Nick - Matador Solutions, 175+ hukuk firması SEO ajansı)

---

## MEVCUT DURUM (Yapılanlar)

| Konu | Durum | Detay |
|------|-------|-------|
| Pillar sayfa yapısı | ✅ | 4 pillar + 48 ilçe alt sayfası |
| Title tag'lerde CTA | ✅ | "Hemen Arayın" 4 pillar'da var |
| Topical authority (blog cluster) | ✅ | 19 blog + 31 sözlük terimi = 111 sayfa |
| Internal linking | ✅ | Blog → pillar (3x), sibling (3-4x), sözlük (4-5x) |
| FAQ Schema | ✅ | 12-13 FAQ per pillar, blog'larda 4-5 |
| Mid-content CTA | ✅ | SectionCTA bileşeni pillar sayfalarda (2-3x) |
| E-E-A-T (yazar bilgisi) | ✅ | Avukat fotosu, baro bilgisi, PersonSchema |
| Schema markup | ✅ | LegalService, Person, FAQ, Breadcrumb, Video |
| Telefon + WhatsApp | ✅ | Header, footer, sidebar'da mevcut |
| Kanun maddeleri | ✅ | Tüm içerik kanun referansı içeriyor |

---

## KRİTİK EKSİKLER

### 1. Video Testimonial Eksikliği ❌❌❌

**Nick:** *"Video testimonials are SO massive in this space that I'll offer to edit clients' testimonials for free. We put that on every single page."*

**Durum:** Sadece kira pillar sayfasında 1 YouTube Shorts var. Diğer 3 pillar, blog sayfaları ve homepage'de video yok. `ClientReviews` bileşeni kodda var ama HİÇBİR SAYFADA KULLANILMIYOR.

**Aksiyon:**
- 3 pillar sayfaya (iş, boşanma, tazminat) video embed ekle
- Video testimonial çek (iPhone yeterli) ve her pillar sayfaya koy
- YouTube'a keyword'lu başlıkla yükle (örnek: "İzmir Boşanma Avukatı Danışan Deneyimi")

---

### 2. Google Yorumları Sayfada Gösterilmiyor ❌❌

**Nick:** *"Showing your Google reviews, extremely important."*

**Durum:** `ClientReviews` bileşeni var ama SAYFADA KULLANILMIYOR. Pillar sayfalarda "memnuniyet görülür" yazıyor ama gerçek yorum gösteren bir section yok.

**Aksiyon:**
- Homepage'e ve 4 pillar sayfaya gerçek Google yorumlarını gösteren section ekle
- Google Maps review link'i ile "tüm yorumları gör" butonu

---

### 3. Görsel/İnfografik Eksikliği ❌❌

**Nick:** *"3,000 to 4,000 words with 15 images and infographic, link to local resources, citing statutes."*

**Durum:** Pillar sayfalarda sadece 1 avukat fotosu var. Hiçbir infografik, süreç diyagramı, istatistik görseli yok.

**Aksiyon:**
- Her pillar sayfaya en az 3-5 görsel ekle
- Süreç akış diyagramları (örnek: "Tahliye Davası Süreci" flowchart)
- İstatistik infografikleri (örnek: "İzmir Kira Davaları 2025 Verileri")

---

### ~~4. Yerel İstatistikler Yok~~ ✅ TAMAMLANDI

**Nick:** *"We'll research and find statistics for car accident in Carlsbad... specific local resources"*

**Durum:** ~~Hiçbir pillar sayfada İzmir'e özel istatistik yok.~~ 4 pillar sayfaya TÜİK, SGK, Adalet Bakanlığı, Sigorta Tahkim Komisyonu ve Sağlık Bakanlığı verilerinden doğrulanmış yerel istatistikler eklendi (sayfa başına 6 istatistik kartı).

~~**Aksiyon:**~~
- ~~TÜİK, Adalet Bakanlığı verilerinden İzmir dava istatistikleri ekle~~
- ~~Örnek: "2024 yılında İzmir'de 12.500 kira uyuşmazlığı davası açıldı"~~
- ~~Örnek: "İzmir İş Mahkemeleri'nde 2024'te 8.200 iş davası görüldü"~~

---

### ~~5. Yerel Kaynak Linkleri Yok~~ ✅ TAMAMLANDI

**Nick:** *"Citing California statutes, linking to local resources..."*

**Durum:** ~~İzmir Barosu, Bayraklı Adliyesi, SGK, UYAP metinde geçiyor ama HİÇBİRİNE DIŞ LİNK VERİLMİYOR.~~ 4 pillar sayfada İzmir Barosu, Bayraklı Adliyesi, SGK vb. kurumlara inline dış linkler eklendi. Her sayfaya 6 kaynaklı "Faydalı Yerel Kaynaklar" bölümü eklendi.

~~**Aksiyon:**~~
- ~~İzmir Barosu, Bayraklı Adliyesi, UYAP, SGK web sitelerine dış link ver~~
- ~~"Yerel Kaynaklar" section'ı ekle (adliye adresi, baro tel, arabuluculuk bürosu)~~

---

### 6. Rolling Content Stratejisi Yok ❌

**Nick:** *"Month 1: general content. Month 2: most dangerous intersections. Month 3: local resources. Month 4: statistics. Month 5: images + infographic. Constantly updating."*

**Durum:** İçerikler bir kere yazılıp bırakılıyor. Pillar sayfalar güncellenmiyor.

**Aksiyon:**
- Her ay 1 pillar sayfayı güncelle (yeni istatistik, yeni karar, yeni görsel)
- `dateModified` alanını güncelle ve Google'a ping at

---

### 7. Pillar Altı Konu Bazlı Alt Sayfalar Yetersiz ❌

**Nick:** *"Off car accident lawyer, we build hit-and-run, rear-end, left-turn, t-bone pages. Massive topical authority off that specific page."*

**Durum:** Her pillar'ın altında 11 ilçe sayfası var (lokasyon bazlı). Ama konu bazlı alt sayfalar yok.

**Aksiyon (Örnek Kira Pillar):**
- `/izmir-kira-avukati/kiraci-tahliye-davasi/`
- `/izmir-kira-avukati/kira-tespit-davasi/`
- `/izmir-kira-avukati/kira-uyarlama-davasi/`
- `/izmir-kira-avukati/tahliye-taahhutnamesi-icra/`

Bu yaklaşım topical authority'yi pillar sayfa bazında derinleştirir.

---

### 8. Tazminat Pillar Sayfası Zayıf ❌

**Durum:** ~4,200 kelime (diğer pillar'lar ~5,200-5,300). 1 eksik CTA. Daha az blog linki.

**Aksiyon:** Tazminat sayfasına ~1,000 kelime içerik + 1 SectionCTA + daha fazla blog linki ekle.

---

### 9. Brand Signals Zayıf ❌

**Nick:** *"Client B was doing everything - ads, active social media, LinkedIn. Client B ranks much faster... branded searches are huge."*

**Durum:** Site sadece organic SEO'ya dayanıyor. Sosyal medya aktivitesi, LinkedIn paylaşımları, press/earned media görülmüyor.

**Aksiyon:**
- LinkedIn'de düzenli hukuki içerik paylaşımları
- Google Ads ile marka bilinirliğini artır (branded search volume)
- Yerel haber sitelerinde earned media/quote almaya çalış

---

## ÖNCELİK SIRASI

| # | Aksiyon | Etki | Zorluk | Öncelik |
|---|---------|------|--------|---------|
| 1 | Google yorumlarını pillar sayfalara göster | Yüksek | Düşük | **HEMEN** |
| 2 | 3 pillar sayfaya video embed ekle | Yüksek | Düşük | **HEMEN** |
| 3 | Pillar sayfalara görsel/infografik ekle | Yüksek | Orta | **Bu ay** |
| ~~4~~ | ~~Yerel istatistikler ekle~~ | ~~Yüksek~~ | ~~Orta~~ | ✅ **TAMAMLANDI** |
| ~~5~~ | ~~Yerel kaynak dış linkleri ekle~~ | ~~Orta~~ | ~~Düşük~~ | ✅ **TAMAMLANDI** |
| 6 | Tazminat pillar sayfasını güçlendir | Orta | Orta | **Bu ay** |
| 7 | Pillar altı konu bazlı alt sayfalar oluştur | Çok Yüksek | Yüksek | **Gelecek ay** |
| 8 | Rolling content stratejisi başlat | Yüksek | Düşük | **Sürekli** |
| 9 | Brand signals (LinkedIn, earned media) | Yüksek | Yüksek | **Sürekli** |

---

## PODCAST'TEN DİĞER ÖNEMLİ NOTLAR

### Backlink Stratejisi
- Yerel linkler > yüksek DR ama alakasız linkler
- Yerel ticaret odası, sponsorluklar, yerel okul linkleri değerli
- Earned media (HARO tarzı) linkleri en güçlü
- Baro dizinleri, avukat rehberleri (FindLaw, SuperLawyers benzeri TR siteleri)

### Google Business Profile
- Review velocity > review quantity (düzenli ve tutarlı yorum alma)
- GBP ürünleri oluştur ve doğru sayfalara linkle
- GBP güncellemeleri düzenli at
- Firma adına keyword ekleme (DBA ile): ör. "Mert Kağan Çetin İzmir Kira Avukatı"

### İçerik Yaklaşımı
- Purchase intent keyword'leri informational içerikle rank'leniyor
- Her section sonunda CTA: "Yardıma ihtiyacınız varsa hemen arayın"
- Blog ROI üretmez ama pillar sayfaları destekler
- Compact keywords: Düşük volume ama yüksek intent sayfalar (415 kelime bile yeterli)

### Title Tag Testi
- Firma adı yerine CTA/benefit: "7/24 Ücretsiz Danışma" gibi
- Sitemizde zaten "Hemen Arayın" var ✅
- İlçe sayfalarına da CTA eklenebilir

### Dönüşüm Optimizasyonu
- Büyük telefon numarası ✅
- İletişim formu ✅
- Avukat fotosu ✅
- Video testimonial ❌ (en kritik eksik)
- Google yorumları gösterme ❌
