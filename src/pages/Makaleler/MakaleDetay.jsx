import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Markdown dosyasını okumak için basit bir fonksiyon
const fetchMarkdown = async (slug) => {
  try {
    // Makale dosyasının yolu: /makaleler/slug.md (public klasöründen)
    const response = await fetch(`/makaleler/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Makale bulunamadı: ${slug}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Makale yükleme hatası:', error);
    return `# Hata: Makale Yüklenemedi\n\nMakale bulunamadı veya yüklenirken bir hata oluştu.`;
  }
};

// Makale detay bileşeni
const MakaleDetay = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMarkdown(slug).then(text => {
      // Frontmatter (meta veriler) ve içeriği ayırma
      const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---/);
      let contentBody = text;
      let metadata = {};

      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        contentBody = text.replace(frontmatterMatch[0], '').trim();
        
        // Basit frontmatter ayrıştırma
        frontmatter.split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length > 0) {
            metadata[key.trim()] = valueParts.join(':').trim();
          }
        });
      }
      
      setMeta(metadata);
      setContent(contentBody);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Yükleniyor...</div>;
  }

  if (!content || content.includes('Hata: Makale Yüklenemedi')) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-600">Makale Yüklenemedi</h1>
        <p className="text-gray-600 mt-4">Lütfen daha sonra tekrar deneyiniz.</p>
        <Link to="/makaleler" className="text-blue-600 hover:text-blue-800 font-medium mt-6 inline-block">
          &larr; Tüm Makalelere Geri Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{meta.title || 'Makale Başlığı'}</h1>
        <div className="text-sm text-gray-500 mb-6 border-b pb-4">
          <span>Yazar: {meta.author || 'Bilinmiyor'}</span>
          <span className="mx-3">|</span>
          <span>Tarih: {meta.date || 'Bilinmiyor'}</span>
        </div>
        
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-p:text-justify">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="mt-10 pt-6 border-t">
          <Link to="/makaleler" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            &larr; Tüm Makalelere Geri Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MakaleDetay;
