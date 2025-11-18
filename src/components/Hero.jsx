import { motion } from "framer-motion";

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff9aa2] via-[#ffc3b6] to-[#ffd3b6] text-[#222222] shadow-lg">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#b28cff]/30 blur-3xl"
        />
      </div>

      <div className="relative px-6 md:px-12 py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-5xl font-bold tracking-wide font-['Montserrat']"
        >
          Handmade Forever-Fresh Bouquets
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="mt-3 text-[#4b4b4b] max-w-2xl"
        >
          One-of-a-kind pipe-cleaner bouquets — handmade, lightweight, and lasting.
        </motion.p>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrimary}
            className="px-5 py-2.5 rounded-xl text-white font-semibold tracking-wide uppercase text-sm shadow-md bg-gradient-to-r from-[#b28cff] to-[#89f7f2] hover:from-[#a18bff] hover:to-[#7deee9]"
          >
            Shop Bestsellers
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSecondary}
            className="px-5 py-2.5 rounded-xl font-medium text-[#222222] bg-white/70 hover:bg-white shadow"
          >
            Custom Orders
          </motion.button>
        </div>
      </div>
    </section>
  );
}
