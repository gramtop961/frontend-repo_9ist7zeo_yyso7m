import { motion } from "framer-motion";

const collections = [
  {
    title: "Bestsellers",
    desc: "Most-loved bouquets",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mini Bouquets",
    desc: "Dainty, gift-ready",
    img: "https://images.unsplash.com/photo-1485231183945-fff3e2e19057?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Wedding & Events",
    desc: "Posies and sets",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Custom Colors",
    desc: "Design your own",
    img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Collections({ onSelect }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl md:text-2xl font-semibold text-[#222222] mb-4">Featured Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collections.map((c, i) => (
          <motion.button
            key={i}
            onClick={() => onSelect?.(c.title)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
            className="group text-left overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md border border-slate-200"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3">
              <div className="font-medium text-[#222222]">{c.title}</div>
              <div className="text-sm text-[#4b4b4b]">{c.desc}</div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
