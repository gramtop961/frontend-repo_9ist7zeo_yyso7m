import { motion } from "framer-motion";

export function HowItsMade() {
  return (
    <section className="mt-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[#222222] mb-4">How It’s Made</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { t: 'Designed', d: 'Sketching forms and palettes.' },
          { t: 'Handbuilt', d: 'Twisting premium chenille & floral wire.' },
          { t: 'Wrapped', d: 'Ribbon and matte paper.' },
          { t: 'Shipped', d: 'Gift-ready and protected.' },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl bg-white shadow-sm border border-slate-200 p-4"
          >
            <div className="font-medium text-[#222222]">{s.t}</div>
            <div className="text-sm text-[#4b4b4b]">{s.d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="mt-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[#222222] mb-3">About Chenarae</h2>
      <p className="text-[#4b4b4b] max-w-3xl">
        Hi — I’m the maker behind Chenarae. I craft delicate bouquets from pipe-cleaners, inspired by wildflowers and small moments. Each bouquet is handmade in small batches, lightweight, and built to last — perfect for gifts, décor, and celebrations. I love custom color combos, so if you don’t see exactly what you want, request a custom order. Follow my process on Instagram @chenarae.gul.
      </p>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="mt-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[#222222] mb-3">Reviews</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          'Absolutely dreamy and so lightweight — perfect gift!','The colors are gorgeous, looks amazing on my desk.','Custom order turned out exactly as I imagined!'
        ].map((r, i) => (
          <div key={i} className="rounded-xl bg-white shadow-sm border border-slate-200 p-4 text-[#4b4b4b]">{r}</div>
        ))}
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: 'How long do bouquets last?', a: 'Forever with gentle care.' },
    { q: 'Do you make custom colors?', a: 'Yes, select the custom option.' },
    { q: 'Shipping time?', a: '2–7 business days depending on customization.' },
  ];
  return (
    <section className="mt-12">
      <h2 className="text-xl md:text-2xl font-semibold text-[#222222] mb-3">FAQ</h2>
      <div className="divide-y rounded-xl bg-white shadow-sm border border-slate-200">
        {faqs.map((f, i) => (
          <details key={i} className="p-4 group">
            <summary className="cursor-pointer font-medium text-[#222222] list-none flex items-center justify-between">
              {f.q}
              <span className="ml-3 text-[#4b4b4b] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-2 text-[#4b4b4b]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
