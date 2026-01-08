import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Makale verilerini okumak için basit bir fonksiyon
// Bu, gerçek makale verilerinin geleceği yerdir. Şimdilik sadece ilk makaleyi listeliyoruz.
const makaleListesi = [
  {
    slug: 'izmir-kira-avukati-tahliye-rehberi',
    title: 'İzmir Kira Avukatı: Kiracı Tahliyesi ve Sıkça Sorulan Sorular',
    summary: 'İzmir bölgesinde kira hukuku uyuşmazlıkları, tahliye süreçleri ve güncel yasal düzenlemeler hakkında bilmeniz gerekenler.',
    date: '2025-11-14',
  },
  {
    slug: 'izmir-kira-bedelinin-tespiti-davasi',
    title: 'İzmir Kira Bedelinin Tespiti Davası: Süreç, Şartlar ve 5 Yıl Kuralı',
    summary: 'Kira bedelinin tespiti davası açma şartları, süreçleri ve Türk Borçlar Kanunu\'nun 344. maddesindeki 5 yıl kuralının detayları.',
    date: '2025-11-14',
  },
  {
    slug: 'kiracinin-haklari-nelerdir',
    title: 'Yasal Bilgiler: Kiracı Hakları Nelerdir ve Ev Sahibine Karşı Nasıl Korunulur?',
    summary: 'kiracinin haklari nelerdir: kapsamlı rehber kira artışı, depozito iadesi ve tahliye süreçlerinde yasal korunma yollarını anlatır; haklarınızı hemen öğrenin.',
    date: '2026-01-08',
  },
];

const Makaleler = () => {
  const [makaleler, setMakaleler] = useState(makaleListesi);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 border-b pb-2">Hukuki Makaleler</h1>
      <div className="space-y-8">
        {makaleler.map((makale) => (
          <div key={makale.slug} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              <Link to={`/makaleler/${makale.slug}`} className="hover:underline">
                {makale.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">Yayın Tarihi: {makale.date}</p>
            <p className="text-gray-700 mb-4">{makale.summary}</p>
            <Link to={`/makaleler/${makale.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
              Devamını Oku &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Makaleler;
