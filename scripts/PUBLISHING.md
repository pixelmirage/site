# Publishing a blog post

Post dates come only from the MDX frontmatter (`date`, `dateModified`). Nothing is
computed at build time, so a date written when the PR was drafted goes live unchanged.
Queued PRs may carry any placeholder date; the publish step must set the real one:

1. `gh pr checkout <N>`
2. `node scripts/set-post-date.mjs <slug>` (defaults to today, Europe/Istanbul)
3. `git commit -am "Set publish date" && git push`
4. Wait for the Vercel check, then `gh pr merge <N> --squash`

## Karar notları (Yargıtay / BAM) → Kira Hukuku İçtihatları hub'ı

`/kira-hukuku-ictihatlari/` sayfası yazı verisinden otomatik üretilir (`src/lib/blog/ictihat.ts`).
Bir Yargıtay veya BAM kararını inceleyen her yeni yazının frontmatter'ına, `tags` satırının hemen altına şunlar eklenir:

```yaml
ictihat: true
ictihatKonu: "tahliye"   # tahliye | kira-tespit | kira-uyarlama | kira-alacagi-icra | tahliye-taahhudu | kira-sozlesmesi | arabuluculuk
```

- `tags` içinde `"emsal karar"` da bulunmalı (yedek kural: bu etiketi taşıyan yazı da hub'a girer; `ictihatKonu` yoksa konu etiketlerden tahmin edilir).
- Hub'daki mahkeme / daire, E., K. ve karar tarihi yazıdaki künye satırından okunur; biçim korunmalı:
  `> - **Mahkeme:** İzmir BAM 27. Hukuk Dairesi, E. 2025/1547, K. 2026/1504, karar tarihi 09.06.2026`
- Hub'daki kısa özet `excerpt` alanıdır. Yazı yayımlandığında hub, ilgili hizmet sayfasının "İlgili Yargıtay ve BAM kararları" bölümü ve sitemap kendiliğinden güncellenir.
- Yayın sonrası IndexNow'a yazının URL'si ile birlikte `https://mertkagancetin.com/kira-hukuku-ictihatlari/` ve ilgili hizmet sayfası da gönderilir.

## Kira hukuku dışındaki yazılar

Site kira hukukuna ayrılmıştır. `tags` içinde `"kira hukuku"` olmayan yazılar (veya `noindex: true` olanlar)
URL'den açılır ama `noindex, follow` alır; sitemap, `/blog/` listesi ve "İlgili Makaleler" alanında görünmez.
Yeni kira yazılarında `"kira hukuku"` etiketi unutulmamalıdır.
