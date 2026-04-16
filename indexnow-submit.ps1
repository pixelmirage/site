$body = @{
    host = 'mertkagancetin.com'
    key = '8bb539d0a5f7442b92ff3b3b983189d3'
    keyLocation = 'https://mertkagancetin.com/8bb539d0a5f7442b92ff3b3b983189d3.txt'
    urlList = @(
        # Static pages (13)
        'https://mertkagancetin.com/',
        'https://mertkagancetin.com/izmir-kira-avukati/',
        'https://mertkagancetin.com/izmir-is-avukati/',
        'https://mertkagancetin.com/izmir-bosanma-avukati/',
        'https://mertkagancetin.com/izmir-tazminat-avukati/',
        'https://mertkagancetin.com/hakkimda/',
        'https://mertkagancetin.com/hizmetler/',
        'https://mertkagancetin.com/blog/',
        'https://mertkagancetin.com/iletisim/',
        'https://mertkagancetin.com/kira-artis-orani-hesaplama/',
        'https://mertkagancetin.com/tahliye-taahhutnamesi/',
        'https://mertkagancetin.com/kidem-tazminati-hesaplama/',
        'https://mertkagancetin.com/sozluk/',

        # District - Kira (11)
        'https://mertkagancetin.com/bayrakli-kira-avukati/',
        'https://mertkagancetin.com/karsiyaka-kira-avukati/',
        'https://mertkagancetin.com/bornova-kira-avukati/',
        'https://mertkagancetin.com/konak-kira-avukati/',
        'https://mertkagancetin.com/buca-kira-avukati/',
        'https://mertkagancetin.com/cigli-kira-avukati/',
        'https://mertkagancetin.com/gaziemir-kira-avukati/',
        'https://mertkagancetin.com/balcova-kira-avukati/',
        'https://mertkagancetin.com/narlidere-kira-avukati/',
        'https://mertkagancetin.com/karabaglar-kira-avukati/',
        'https://mertkagancetin.com/guzelbahce-kira-avukati/',

        # District - Is (11)
        'https://mertkagancetin.com/bayrakli-is-avukati/',
        'https://mertkagancetin.com/karsiyaka-is-avukati/',
        'https://mertkagancetin.com/bornova-is-avukati/',
        'https://mertkagancetin.com/konak-is-avukati/',
        'https://mertkagancetin.com/buca-is-avukati/',
        'https://mertkagancetin.com/cigli-is-avukati/',
        'https://mertkagancetin.com/gaziemir-is-avukati/',
        'https://mertkagancetin.com/balcova-is-avukati/',
        'https://mertkagancetin.com/narlidere-is-avukati/',
        'https://mertkagancetin.com/karabaglar-is-avukati/',
        'https://mertkagancetin.com/guzelbahce-is-avukati/',

        # District - Bosanma (11)
        'https://mertkagancetin.com/bayrakli-bosanma-avukati/',
        'https://mertkagancetin.com/karsiyaka-bosanma-avukati/',
        'https://mertkagancetin.com/bornova-bosanma-avukati/',
        'https://mertkagancetin.com/konak-bosanma-avukati/',
        'https://mertkagancetin.com/buca-bosanma-avukati/',
        'https://mertkagancetin.com/cigli-bosanma-avukati/',
        'https://mertkagancetin.com/gaziemir-bosanma-avukati/',
        'https://mertkagancetin.com/balcova-bosanma-avukati/',
        'https://mertkagancetin.com/narlidere-bosanma-avukati/',
        'https://mertkagancetin.com/karabaglar-bosanma-avukati/',
        'https://mertkagancetin.com/guzelbahce-bosanma-avukati/',

        # District - Tazminat (11)
        'https://mertkagancetin.com/bayrakli-tazminat-avukati/',
        'https://mertkagancetin.com/karsiyaka-tazminat-avukati/',
        'https://mertkagancetin.com/bornova-tazminat-avukati/',
        'https://mertkagancetin.com/konak-tazminat-avukati/',
        'https://mertkagancetin.com/buca-tazminat-avukati/',
        'https://mertkagancetin.com/cigli-tazminat-avukati/',
        'https://mertkagancetin.com/gaziemir-tazminat-avukati/',
        'https://mertkagancetin.com/balcova-tazminat-avukati/',
        'https://mertkagancetin.com/narlidere-tazminat-avukati/',
        'https://mertkagancetin.com/karabaglar-tazminat-avukati/',
        'https://mertkagancetin.com/guzelbahce-tazminat-avukati/',

        # Blog posts (19)
        'https://mertkagancetin.com/blog/anlasmali-bosanma-nasil-acilir/',
        'https://mertkagancetin.com/blog/cekismeli-bosanma-davasi-sureci-ve-kusur-tespiti/',
        'https://mertkagancetin.com/blog/destekten-yoksun-kalma-tazminati-hesaplama-ve-dava-sureci/',
        'https://mertkagancetin.com/blog/ev-sahibi-hangi-durumlarda-kiraciyi-hemen-cikarabilir/',
        'https://mertkagancetin.com/blog/hangi-durumlarda-kira-tespit-davasi-acilabilir/',
        'https://mertkagancetin.com/blog/ihtiyac-nedeniyle-tahliye-davasi-nasil-acilir/',
        'https://mertkagancetin.com/blog/ise-iade-davasi-sartlari-ve-arabuluculuk-sureci/',
        'https://mertkagancetin.com/blog/is-kazasi-tazminati-sureci-ve-haklariniz/',
        'https://mertkagancetin.com/blog/isten-cikarildiginda-ne-yapmali/',
        'https://mertkagancetin.com/blog/isyeri-kira-sozlesmelerinde-dikkat-edilmesi-gereken-hususlar/',
        'https://mertkagancetin.com/blog/izmir-gayrimenkul-piyasasinda-guncel-hukuki-gelismeler/',
        'https://mertkagancetin.com/blog/kidem-tazminati-nasil-hesaplanir/',
        'https://mertkagancetin.com/blog/kiracinin-tahliyesi-icin-iki-hakli-ihtar-nedir/',
        'https://mertkagancetin.com/blog/kira-hukukunda-zorunlu-arabuluculuk-sureci/',
        'https://mertkagancetin.com/blog/maddi-ve-manevi-tazminat-davasi-farklari/',
        'https://mertkagancetin.com/blog/malpraktis-davasi-doktor-hatasi-tazminati/',
        'https://mertkagancetin.com/blog/nafaka-hesaplama-yoksulluk-istirak-nafakasi/',
        'https://mertkagancetin.com/blog/trafik-kazasi-tazminati-alma-sureci/',
        'https://mertkagancetin.com/blog/velayet-davasi-sureci-ve-mahkeme-kriterleri/',
        'https://mertkagancetin.com/blog/ihbar-tazminati-hesaplama-ve-hak-kazanma-sartlari/',
        'https://mertkagancetin.com/blog/bosanmada-mal-paylasimi-edinilmis-mallara-katilma-rejimi/',
        'https://mertkagancetin.com/blog/sigorta-tahkim-komisyonu-basvurusu-trafik-kazasi-tazminati/',
        'https://mertkagancetin.com/blog/kira-sozlesmesi-fesih-sebepleri-ve-hukuki-surec/',
        'https://mertkagancetin.com/blog/fazla-mesai-ucreti-alacagi-ispat-ve-zamanasimi/',
        'https://mertkagancetin.com/blog/bosanmada-tazminat-davasi-maddi-ve-manevi-tazminat/',
        'https://mertkagancetin.com/blog/is-goremezlik-raporu-ve-maluliyet-tazminati-davasi/',
        'https://mertkagancetin.com/blog/depozito-iadesi-davasi-kiracinin-haklari-ve-surec/',

        # Glossary terms (32)
        'https://mertkagancetin.com/sozluk/tahliye-taahhutnamesi/',
        'https://mertkagancetin.com/sozluk/kira-tespit-davasi/',
        'https://mertkagancetin.com/sozluk/ihtiyac-nedeniyle-tahliye/',
        'https://mertkagancetin.com/sozluk/zorunlu-arabuluculuk/',
        'https://mertkagancetin.com/sozluk/iki-hakli-ihtar/',
        'https://mertkagancetin.com/sozluk/kira-sozlesmesi/',
        'https://mertkagancetin.com/sozluk/depozito/',
        'https://mertkagancetin.com/sozluk/kira-artis-orani/',
        'https://mertkagancetin.com/sozluk/kira-uyarlama-davasi/',
        'https://mertkagancetin.com/sozluk/fuzuli-isgal/',
        'https://mertkagancetin.com/sozluk/10-yillik-uzama-suresi/',
        'https://mertkagancetin.com/sozluk/kiraci-haklari/',
        'https://mertkagancetin.com/sozluk/kidem-tazminati/',
        'https://mertkagancetin.com/sozluk/ihbar-tazminati/',
        'https://mertkagancetin.com/sozluk/ise-iade-davasi/',
        'https://mertkagancetin.com/sozluk/mobbing/',
        'https://mertkagancetin.com/sozluk/hakli-fesih/',
        'https://mertkagancetin.com/sozluk/anlasmali-bosanma/',
        'https://mertkagancetin.com/sozluk/cekismeli-bosanma/',
        'https://mertkagancetin.com/sozluk/velayet/',
        'https://mertkagancetin.com/sozluk/nafaka/',
        'https://mertkagancetin.com/sozluk/mal-paylasimi/',
        'https://mertkagancetin.com/sozluk/maddi-tazminat/',
        'https://mertkagancetin.com/sozluk/manevi-tazminat/',
        'https://mertkagancetin.com/sozluk/malpraktis/',
        'https://mertkagancetin.com/sozluk/destekten-yoksun-kalma/',
        'https://mertkagancetin.com/sozluk/haksiz-fiil/',
        'https://mertkagancetin.com/sozluk/is-guvencesi/',
        'https://mertkagancetin.com/sozluk/evlilik-birliginin-temelden-sarsilmasi/',
        'https://mertkagancetin.com/sozluk/ecrimisil/',
        'https://mertkagancetin.com/sozluk/fazla-mesai/',
        'https://mertkagancetin.com/sozluk/is-goremezlik/'
    )
} | ConvertTo-Json -Depth 3

try {
    $response = Invoke-WebRequest -Uri 'https://api.indexnow.org/indexnow' -Method POST -ContentType 'application/json; charset=utf-8' -Body $body -UseBasicParsing
    Write-Host "IndexNow Status: $($response.StatusCode)"
    Write-Host "Submitted 117 URLs to Bing via IndexNow"
} catch {
    Write-Host "IndexNow Status: $($_.Exception.Response.StatusCode.value__)"
    Write-Host "Response: $($_.Exception.Message)"
}
