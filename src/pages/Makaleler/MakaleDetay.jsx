import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './makale.css';

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
  const [featuredImage, setFeaturedImage] = useState('');

  useEffect(() => {
    setLoading(true);
    let mounted = true;

    const stripMarkdown = (md) => {
      return md
        .replace(/```[\s\S]*?```/g, '') // code blocks
        .replace(/`[^`]*`/g, '') // inline code
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
        .replace(/\[[^\]]*\]\([^)]*\)/g, '') // links
        .replace(/^#{1,6}\s*/gm, '') // headings
        .replace(/[*_>{}-]/g, '') // other markdown chars
        .replace(/\n{2,}/g, '\n')
        .trim();
    };

    fetchMarkdown(slug).then(text => {
      if (!mounted) return;

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

      // Eğer frontmatter içinde öne çıkan görsel yoksa, içerikteki ilk görseli al
      let featured = metadata.image || metadata.featured_image || '';
      if (!featured) {
        const imgMatch = contentBody.match(/!\[[^\]]*\]\(([^)]+)\)/);
        if (imgMatch) featured = imgMatch[1];
      }

      // Başlık (H1) çıkarma: frontmatter yoksa içerikteki ilk H1'i kullan
      let finalTitle = metadata.title || '';
      if (!finalTitle) {
        const h1match = contentBody.match(/^#\s+(.+)$/m);
        if (h1match) {
          finalTitle = h1match[1].trim();
          // İçerikteki H1'i gösterimden kaldırıyoruz (başlığı component'ta göstereceğiz)
          contentBody = contentBody.replace(/^#\s+(.+)\n?/, '').trim();
        }
      }

      // Açıklama (meta description) çıkarma: frontmatter yoksa ilk paragrafı al
      let finalDescription = metadata.description || '';
      if (!finalDescription) {
        const paragraphs = contentBody.split(/\n\s*\n/);
        if (paragraphs.length > 0) {
          finalDescription = stripMarkdown(paragraphs[0]).slice(0, 160);
        }
      }

      // Güncellenmiş metadata set et
      if (finalTitle) metadata.title = finalTitle;
      if (finalDescription) metadata.description = finalDescription;

      setMeta(metadata);
      setContent(contentBody);
      setFeaturedImage(featured);
      setLoading(false);

      // SEO Meta Güncelleme
      if (metadata.title) {
        document.title = `${metadata.title} | Av. Mert Kağan Çetin`;
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', metadata.title);
      }

      if (metadata.description) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', metadata.description);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', metadata.description);
      }

      // Keywords
      if (metadata.keywords) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.setAttribute('content', metadata.keywords);
      }

      // Canonical
      try {
        const canonicalHref = `https://mertkagancetin.com/makaleler/${slug}`;
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
          linkCanonical = document.createElement('link');
          linkCanonical.setAttribute('rel', 'canonical');
          document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', canonicalHref);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', canonicalHref);
      } catch (e) {}

      // OpenGraph image
      if (featured) {
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute('content', featured);
      }

    }).catch(() => {
      setLoading(false);
    });

    return () => { mounted = false; };
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
        {featuredImage && (
          <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
            <img src={featuredImage} alt={meta.title || 'featured'} className="w-full h-64 object-cover md:h-96" />
          </div>
        )}

        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">{meta.title}</h1>
            <div className="mt-2 text-sm text-gray-500">
              {meta.author && <span>{meta.author} • </span>}
              {meta.date && <span>Yayın Tarihi: {meta.date}</span>}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 border rounded-md text-sm bg-gray-100 hover:bg-gray-200">
              Yazdır
            </button>
          </div>
        </div>

        <article className="article-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
            img: ({node, ...props}) => <img {...props} className="mx-auto rounded-lg shadow-lg" />,
            a: ({node, ...props}) => <a {...props} className="text-blue-600 underline" />,
            p: ({node, ...props}) => <p {...props} className="text-gray-800 leading-relaxed mb-6 text-lg md:text-xl" />,
            blockquote: ({node, ...props}) => <blockquote {...props} className="border-l-4 pl-4 italic text-gray-700 mb-6" />,
            h2: ({node, ...props}) => <h2 {...props} className="text-2xl font-semibold mt-10 mb-4" />,
            h3: ({node, ...props}) => <h3 {...props} className="text-xl font-semibold mt-8 mb-3" />,
            ul: ({node, ...props}) => <ul {...props} className="list-disc ml-6 mb-6" />,
            ol: ({node, ...props}) => <ol {...props} className="list-decimal ml-6 mb-6" />,
            table: ({node, ...props}) => <table {...props} className="w-full table-auto mb-6 border" />,
            thead: ({node, ...props}) => <thead {...props} className="bg-gray-50" />,
            code: ({node, inline, className, children, ...props}) => (
              <code className={`bg-gray-100 px-1 rounded ${inline ? 'text-sm' : 'block p-4 rounded'}`} {...props}>{children}</code>
            ),
          }}>{content}</ReactMarkdown>
        </article>

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
