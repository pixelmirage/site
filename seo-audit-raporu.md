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

### ~~2. Google Yorumları Sayfada Gösterilmiyor~~ ✅ TAMAMLANDI

**Nick:** *"Showing your Google reviews, extremely important."*

**Durum:** ~~`ClientReviews` bileşeni var ama SAYFADA KULLANILMIYOR.~~ Homepage'e gerçek Google Business Profile yorumları eklendi. Places API ile çekilen 5 yorum sabit olarak gösteriliyor. AggregateRating + Review schema markup mevcut.

~~**Aksiyon:**~~
- ~~Homepage'e ve 4 pillar sayfaya gerçek Google yorumlarını gösteren section ekle~~
- ~~Google Maps review link'i ile "tüm yorumları gör" butonu~~

---

### ~~3. Görsel/İnfografik Eksikliği~~ ✅ TAMAMLANDI

**Nick:** *"3,000 to 4,000 words with 15 images and infographic, link to local resources, citing statutes."*

**Durum:** ~~Pillar sayfalarda sadece 1 avukat fotosu var.~~ 8 infografik görseli oluşturuldu ve 10 sayfaya SEO alt text ile eklendi. Tahliye sebepleri, kira tespit vs uyarlama, boşanma karşılaştırma, velayet kriterleri, nafaka türleri, mobbing ispat, kıdem tazminatı infografikleri mevcut.

~~**Aksiyon:**~~
- ~~Her pillar sayfaya en az 3-5 görsel ekle~~
- ~~Süreç akış diyagramları~~
- ~~İstatistik infografikleri~~

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

### ~~7. Pillar Altı Konu Bazlı Alt Sayfalar Yetersiz~~ ✅ TAMAMLANDI

**Nick:** *"Off car accident lawyer, we build hit-and-run, rear-end, left-turn, t-bone pages. Massive topical authority off that specific page."*

**Durum:** ~~Konu bazlı alt sayfalar yok.~~ 12 konu bazlı alt sayfa oluşturuldu (pillar başına 3):
- Kira: kiraci-tahliye-davasi, kira-tespit-davasi, kira-uyarlama-davasi
- İş: ise-iade-davasi, kidem-tazminati-davasi, mobbing-davasi
- Boşanma: anlasmali-bosanma, velayet-davasi, nafaka-davasi
- Tazminat: trafik-kazasi-tazminati, malpraktis-davasi, destekten-yoksun-kalma

~~**Aksiyon:**~~
- ~~Konu bazlı alt sayfalar oluştur~~

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
| ~~1~~ | ~~Google yorumlarını sayfada göster~~ | ~~Yüksek~~ | ~~Düşük~~ | ✅ **TAMAMLANDI** |
| 2 | 3 pillar sayfaya video embed ekle | Yüksek | Düşük | **HEMEN** |
| ~~3~~ | ~~Pillar sayfalara görsel/infografik ekle~~ | ~~Yüksek~~ | ~~Orta~~ | ✅ **TAMAMLANDI** |
| ~~4~~ | ~~Yerel istatistikler ekle~~ | ~~Yüksek~~ | ~~Orta~~ | ✅ **TAMAMLANDI** |
| ~~5~~ | ~~Yerel kaynak dış linkleri ekle~~ | ~~Orta~~ | ~~Düşük~~ | ✅ **TAMAMLANDI** |
| 6 | Tazminat pillar sayfasını güçlendir | Orta | Orta | **Bu ay** |
| ~~7~~ | ~~Pillar altı konu bazlı alt sayfalar oluştur~~ | ~~Çok Yüksek~~ | ~~Yüksek~~ | ✅ **TAMAMLANDI** |
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
- Video testimonial ❌ (kira pillar'da 1 video var, diğer 3 pillar'da yok)
- ~~Google yorumları gösterme~~ ✅ (homepage'de GBP yorumları gösteriliyor)
