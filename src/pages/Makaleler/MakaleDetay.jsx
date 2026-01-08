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
  const [imageManifest, setImageManifest] = useState({});

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

    // Fetch image manifest (if any)
    fetch('/images/makaleler/manifest.json').then(r => r.ok ? r.json() : {}).then(man => {
      if (mounted) setImageManifest(man || {});
    }).catch(() => {});

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
      } catch { /* ignore */ }

      // OpenGraph & Twitter meta for featured image (prefer optimized manifest WebP)
      if (featured) {
        try {
          let imageUrl = featured || '';
          let w, h;
          try {
            const key = featured.split('/').pop();
            const m = imageManifest && imageManifest[key];
            if (m && m.largestWebp) {
              imageUrl = `https://mertkagancetin.com${m.largestWebp}`;
              w = m.width; h = m.height;
            } else if (featured && featured.startsWith('/')) {
              imageUrl = `https://mertkagancetin.com${featured}`;
            }
          } catch(e) { /* ignore */ }

          // og:image
          let ogImage = document.querySelector('meta[property="og:image"]');
          if (!ogImage) { ogImage = document.createElement('meta'); ogImage.setAttribute('property','og:image'); document.head.appendChild(ogImage); }
          ogImage.setAttribute('content', imageUrl);

          // og:image:width / og:image:height
          if (w) {
            let ogw = document.querySelector('meta[property="og:image:width"]');
            if (!ogw) { ogw = document.createElement('meta'); ogw.setAttribute('property','og:image:width'); document.head.appendChild(ogw); }
            ogw.setAttribute('content', String(w));
          }
          if (h) {
            let ogh = document.querySelector('meta[property="og:image:height"]');
            if (!ogh) { ogh = document.createElement('meta'); ogh.setAttribute('property','og:image:height'); document.head.appendChild(ogh); }
            ogh.setAttribute('content', String(h));
          }

          // Twitter card
          let twCard = document.querySelector('meta[name="twitter:card"]');
          if (!twCard) { twCard = document.createElement('meta'); twCard.setAttribute('name','twitter:card'); twCard.setAttribute('content','summary_large_image'); document.head.appendChild(twCard); }
          else twCard.setAttribute('content','summary_large_image');

          let twImage = document.querySelector('meta[name="twitter:image"]');
          if (!twImage) { twImage = document.createElement('meta'); twImage.setAttribute('name','twitter:image'); document.head.appendChild(twImage); }
          twImage.setAttribute('content', imageUrl);
        } catch(e) { /* ignore */ }
      }

      // Author meta
      if (metadata.author) {
        const metaAuthor = document.querySelector('meta[name="author"]');
        if (metaAuthor) metaAuthor.setAttribute('content', metadata.author);
      }

      // Ensure twitter card meta exists
      let tw = document.querySelector('meta[name="twitter:card"]');
      if (!tw) {
        tw = document.createElement('meta');
        tw.setAttribute('name', 'twitter:card');
        tw.setAttribute('content', 'summary_large_image');
        document.head.appendChild(tw);
      }

      // JSON-LD Article schema (injected later by the effect below where we have manifest)
      // keep this here for now; actual injection will happen in a dedicated effect
      try {
        const existing = document.querySelector('#article-ldjson');
        if (!existing) {
          const placeholder = document.createElement('script');
          placeholder.setAttribute('type', 'application/ld+json');
          placeholder.id = 'article-ldjson';
          placeholder.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "Article" });
          document.head.appendChild(placeholder);
        }
      } catch (e) { /* ignore */ }


    }).catch(() => {
      setLoading(false);
    });

    return () => { mounted = false; };
  }, [slug]);

  // Add a preload link for featured image when manifest becomes available
  useEffect(() => {
    if (!featuredImage || !imageManifest) return;
    try {
      const key = featuredImage.split('/').pop();
      const m = imageManifest && imageManifest[key];
      if (m && m.largestWebp) {
        const existing = document.querySelector(`link[rel=\"preload\"][href=\"${m.largestWebp}\"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.setAttribute('rel', 'preload');
          link.setAttribute('as', 'image');
          link.setAttribute('href', m.largestWebp);
          document.head.appendChild(link);
          return () => { try { document.head.removeChild(link) } catch(e){} };
        }
      }
    } catch(e) { /* ignore */ }
  }, [featuredImage, imageManifest]);

  // Inject full Article JSON-LD once we have metadata and (optionally) image manifest available
  useEffect(() => {
    if (!meta || !Object.keys(meta).length) return;

    let cancelled = false;

    (async () => {
      try {
        const canonicalHref = `https://mertkagancetin.com/makaleler/${slug}`;

        // Ensure we have the manifest: fall back to fetching it if state is empty
        let manifest = imageManifest;
        if (!manifest || Object.keys(manifest).length === 0) {
          try {
            const res = await fetch('/images/makaleler/manifest.json');
            if (res.ok) manifest = await res.json();
            if (!cancelled) setImageManifest(manifest || {});
          } catch (e) { /* ignore */ }
        }

        // Compute image URL preferring manifest webp
        let imageUrl = featuredImage || '';
        try {
          const key = (featuredImage || '').split('/').pop();
          const m = manifest && manifest[key];
          if (m && m.largestWebp) imageUrl = `https://mertkagancetin.com${m.largestWebp}`;
          else if (featuredImage && featuredImage.startsWith('/')) imageUrl = `https://mertkagancetin.com${featuredImage}`;
        } catch (e) { /* ignore */ }

        const ld = {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalHref
          },
          "headline": meta.title || '',
          "description": meta.description || '',
          "image": imageUrl || '',
          "author": meta.author ? {"@type": "Person", "name": meta.author} : {"@type": "Organization", "name": "Av. Mert Kağan Çetin"},
          "publisher": {
            "@type": "Organization",
            "name": "Av. Mert Kağan Çetin Hukuk Bürosu",
            "logo": { "@type": "ImageObject", "url": "https://mertkagancetin.com/logo.png" }
          },
          "datePublished": meta.date || '',
          "dateModified": meta.updated || meta.modified || undefined,
          "url": canonicalHref
        };
        if (meta.keywords) ld.keywords = meta.keywords;

        if (cancelled) return;
        let script = document.querySelector('#article-ldjson');
        if (!script) {
          script = document.createElement('script');
          script.setAttribute('type', 'application/ld+json');
          script.id = 'article-ldjson';
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(ld);
      } catch(e) { console.error('article ld injection error', e) }
    })();

    return () => { cancelled = true };
  }, [meta, featuredImage, imageManifest, slug]);

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
        {featuredImage && (() => {
          const key = featuredImage.split('/').pop();
          const m = imageManifest && imageManifest[key];
          return (
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg" style={{ backgroundImage: m ? `url(${m.placeholder})` : undefined, backgroundSize: 'cover' }}>
              {m ? (
                <picture>
                  <source type="image/webp" srcSet={m.srcsetWebp} sizes="(max-width: 768px) 100vw, 800px" />
                  <img src={m.largestWebp} alt={meta.title || 'featured'} className="w-full h-64 object-cover md:h-96" width={m.width || undefined} height={m.height || undefined} loading="eager" />
                </picture>
              ) : (
                <img src={featuredImage} alt={meta.title || 'featured'} className="w-full h-64 object-cover md:h-96" loading="eager" />
              )}
            </div>
          )
        })()}

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
            img: ({src, alt, ...props}) => {
              const key = (src || '').split('/').pop();
              const m = imageManifest && imageManifest[key];
              if (m) {
                return (
                  <picture className="mx-auto block">
                    <source type="image/webp" srcSet={m.srcsetWebp} sizes="(max-width: 768px) 100vw, 800px" />
                    <img src={m.largestWebp} alt={alt || meta.title || ''} className="mx-auto rounded-lg shadow-lg" loading="lazy" width={m.width || undefined} height={m.height || undefined} {...props} />
                  </picture>
                )
              }

              return <img src={src} alt={alt || meta.title || ''} className="mx-auto rounded-lg shadow-lg" loading="lazy" {...props} />
            },
            a: ({...props}) => <a {...props} className="text-blue-600 underline" />,
            p: ({...props}) => <p {...props} className="text-gray-800 leading-relaxed mb-6 text-lg md:text-xl" />,
            blockquote: ({...props}) => <blockquote {...props} className="border-l-4 pl-4 italic text-gray-700 mb-6" />,
            h2: ({...props}) => <h2 {...props} className="text-2xl font-semibold mt-10 mb-4" />,
            h3: ({...props}) => <h3 {...props} className="text-xl font-semibold mt-8 mb-3" />,
            ul: ({...props}) => <ul {...props} className="list-disc ml-6 mb-6" />,
            ol: ({...props}) => <ol {...props} className="list-decimal ml-6 mb-6" />,
            table: ({...props}) => <table {...props} className="w-full table-auto mb-6 border" />,
            thead: ({...props}) => <thead {...props} className="bg-gray-50" />,
            code: ({inline, children, ...props}) => (
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
