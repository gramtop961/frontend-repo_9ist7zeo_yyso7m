export default function StructuredData({ products = [] }) {
  if (!Array.isArray(products) || products.length === 0) return null;
  const items = products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    image: p.image_url || undefined,
    description: p.description || undefined,
    sku: p.sku || undefined,
    brand: {
      "@type": "Brand",
      name: "Chenarae"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: typeof p.price === 'number' ? p.price.toFixed(2) : p.price,
      availability: p.in_stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  }));

  const json = items.length === 1 ? items[0] : { "@context": "https://schema.org", "@type": "ItemList", itemListElement: items };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
