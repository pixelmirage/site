// Uses the site's existing Formspree endpoint (same as /iletisim/). No new service.
const field = "h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function CallbackForm() {
    return (
        <form action="https://formspree.io/f/mlglyrzp" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="Kira sayfası: geri arama talebi" />
            <input type="hidden" name="kaynak" value="/izmir-kira-avukati/" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="cb-ad" className="mb-1 block text-sm font-bold text-primary">Ad Soyad</label>
                    <input id="cb-ad" name="ad-soyad" required autoComplete="name" className={field} />
                </div>
                <div>
                    <label htmlFor="cb-tel" className="mb-1 block text-sm font-bold text-primary">Telefon</label>
                    <input id="cb-tel" name="telefon" type="tel" inputMode="tel" required autoComplete="tel" placeholder="05XX XXX XX XX" className={field} />
                </div>
            </div>
            <div>
                <label htmlFor="cb-durum" className="mb-1 block text-sm font-bold text-primary">Durumunuz</label>
                <select id="cb-durum" name="durum" required defaultValue="" className={field}>
                    <option value="" disabled>Seçin</option>
                    <optgroup label="Ev sahibiyim">
                        <option>Kiracı çıkmıyor</option>
                        <option>Kira ödenmiyor</option>
                        <option>Kira artışı / kira tespit</option>
                        <option>Tahliye taahhüdü var</option>
                    </optgroup>
                    <optgroup label="Kiracıyım">
                        <option>Tahliye ihtarı aldım</option>
                        <option>Fahiş artış isteniyor</option>
                        <option>Depozito iade edilmiyor</option>
                        <option>Ev satıldı, yeni malik çık diyor</option>
                    </optgroup>
                    <option>Diğer</option>
                </select>
            </div>
            <div>
                <label htmlFor="cb-not" className="mb-1 block text-sm font-bold text-primary">Kısa not <span className="font-normal text-slate-500">(isteğe bağlı)</span></label>
                <textarea id="cb-not" name="not" rows={3} maxLength={500} className="w-full rounded-lg border border-slate-300 bg-white p-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <label className="flex items-start gap-3 text-sm text-slate-700">
                <input type="checkbox" name="kvkk-onay" value="evet" required className="mt-1 h-5 w-5 flex-shrink-0 accent-primary" />
                <span><a href="/kvkk-aydinlatma-metni/" target="_blank" className="underline hover:text-secondary">KVKK Aydınlatma Metni</a>&apos;ni okudum; kişisel verilerimin (ad, telefon, not) geri arama amacıyla işlenmesini kabul ediyorum.</span>
            </label>
            <button type="submit" className="h-12 w-full rounded-lg bg-primary text-base font-bold text-white hover:bg-primary/90">Geri Arama İste</button>
        </form>
    );
}
