/**
 * SEO Helper utility to dynamically update document title, meta tags, and JSON-LD schema
 */
export function updateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  schema = null,
}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // 1. Document Title
  if (title) {
    document.title = title.includes('Zyricx') ? title : `${title} | Zyricx`;
  }

  // 2. Helper to set/update meta tag
  const setMeta = (nameOrProperty, value, isProperty = false) => {
    if (!value) return;
    const attr = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, nameOrProperty);
      document.head.appendChild(element);
    }
    element.setAttribute('content', value);
  };

  // Standard Meta
  if (description) setMeta('description', description);
  if (keywords) setMeta('keywords', keywords);

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  const canonicalUrl = url || window.location.href;
  const fullTitle = document.title;
  const fullDesc = description || 'Shop premium essentials, fast delivery, and unbeatable deals on Zyricx.';
  const defaultImage = `${window.location.origin}/logo.svg`;
  const ogImage = image ? (image.startsWith('http') ? image : `${window.location.origin}${image}`) : defaultImage;

  setMeta('og:title', fullTitle, true);
  setMeta('og:description', fullDesc, true);
  setMeta('og:url', canonicalUrl, true);
  setMeta('og:type', type, true);
  setMeta('og:image', ogImage, true);
  setMeta('og:site_name', 'Zyricx', true);

  // Twitter Cards
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', fullTitle);
  setMeta('twitter:description', fullDesc);
  setMeta('twitter:image', ogImage);

  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 3. Structured Data (JSON-LD)
  const schemaId = 'dynamic-jsonld-seo';
  let scriptTag = document.getElementById(schemaId);
  if (schema) {
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  } else if (scriptTag) {
    scriptTag.remove();
  }
}
