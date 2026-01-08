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

    // Eğer sunucu HTML döndürdüyse (ör. index.html), bu markdown değil demektir
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      throw new Error(`Makale dosyası yerine HTML döndü: ${slug}`);
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

      // SEO Meta Güncelleme
      if (metadata.title) {
        document.title = `${metadata.title} | Av. Mert Kağan Çetin`;
      }
      if (metadata.description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', metadata.description);
      }
      if (metadata.keywords) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute('content', metadata.keywords);
      }
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
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="bg-white p-4 md:p-12 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">{meta.title || 'Makale Başlığı'}</h1>
        
        <div className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6 prose-p:text-gray-800 prose-p:leading-relaxed prose-p:text-lg md:prose-p:text-xl prose-a:text-blue-600 prose-strong:text-gray-900 prose-img:rounded-xl prose-img:shadow-lg">
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
