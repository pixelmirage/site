# Publishing a blog post or a karar notu

Post dates come only from the MDX frontmatter (`date`, `dateModified`). Nothing is
computed at build time, so a date written when the PR was drafted goes live unchanged.
Queued PRs may carry any placeholder date; the publish step must set the real one:

1. `gh pr checkout <N>`
2. `node scripts/set-post-date.mjs <slug>` (defaults to today, Europe/Istanbul)
3. `git commit -am "Set publish date" && git push`
4. Wait for the Vercel check, then `gh pr merge <N> --squash`

## Karar notları (Yargıtay / BAM) → Kira Hukuku İçtihatları hub'ı

Karar notları blogda değil, içtihat bölümünde yayımlanır:

- Dosya: `src/content/ictihat/<slug>.mdx` → adres: `https://mertkagancetin.com/kira-hukuku-ictihatlari/<slug>/`
  (breadcrumb: Ana Sayfa > Kira Hukuku İçtihatları > yazı; canonical bu adres; BlogPosting şeması).
- Slug kuralı: 3-6 kelime, Türkçe anahtar kelime başta, arama niyetine uygun, ASCII, küçük harf;
  mahkeme/daire adı, yıl ve "ve, mi, ile, için" gibi dolgu kelimeleri yok.
  Örnek: `kira-tespit-davasi-emsal-bilirkisi`, `yeni-malik-ihtiyac-tahliye-yurt-disi`.
- Site içi linklerde karar notlarına `/kira-hukuku-ictihatlari/<slug>/` ile link verilir (`/blog/` değil).
- `/blog/` yalnızca blog yazılarını (şu an `how-to-get-divorced-in-turkey`) listeler.

`/kira-hukuku-ictihatlari/` sayfası yazı verisinden otomatik üretilir (`src/lib/blog/ictihat.ts`).
Her karar notunun frontmatter'ına, `tags` satırının hemen altına şunlar eklenir:

```yaml
ictihat: true
ictihatKonu: "tahliye"   # tahliye | kira-tespit | kira-uyarlama | kira-alacagi-icra | tahliye-taahhudu | kira-sozlesmesi | arabuluculuk
```

- `tags` içinde `"emsal karar"` da bulunmalı (yedek kural: bu etiketi taşıyan yazı da hub'a girer; `ictihatKonu` yoksa konu etiketlerden tahmin edilir).
- Hub'daki mahkeme / daire, E., K. ve karar tarihi yazıdaki künye satırından okunur; biçim korunmalı:
  `> - **Mahkeme:** İzmir BAM 27. Hukuk Dairesi, E. 2025/1547, K. 2026/1504, karar tarihi 09.06.2026`
- Hub'daki kısa özet `excerpt` alanıdır. Yazı yayımlandığında hub, ilgili hizmet sayfasının "İlgili Yargıtay ve BAM kararları" bölümü ve sitemap kendiliğinden güncellenir.
- Yayın sonrası IndexNow'a yazının URL'si ile birlikte `https://mertkagancetin.com/kira-hukuku-ictihatlari/` ve ilgili hizmet sayfası da gönderilir.

## Kaldırılan / taşınan yazılar

Kaldırılan veya taşınan her URL için `src/lib/removedPages.ts` listesine `['/blog/<eski-slug>', '<hedef>/']` eklenir
(tek adımlı 301; eğik çizgisiz varyant da tek adımda yönlenir). Hedefin kendisi yönlendirme olmamalı (zincir yok).

## Kira hukuku dışındaki yazılar

Site kira hukukuna ayrılmıştır. `tags` içinde `"kira hukuku"` olmayan yazılar (veya `noindex: true` olanlar)
URL'den açılır ama `noindex, follow` alır; sitemap, `/blog/` listesi ve "İlgili Makaleler" alanında görünmez.
İstisna: frontmatter'da `index: true` olan yazı etiketten bağımsız indekslenir (ör. `how-to-get-divorced-in-turkey`).
Hub sayfasında yazı sayısı gösterilmez (liste sürekli güncellenir).
Yeni kira yazılarında `"kira hukuku"` etiketi unutulmamalıdır.
