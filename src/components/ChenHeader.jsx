import { ShoppingCart, Search, Instagram } from "lucide-react";

export default function ChenHeader({ cartCount, query, setQuery, onOpenCart }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
        <div className="flex-1 flex items-center gap-2 justify-start">
          <a href="#" className="text-xl font-['Montserrat'] font-bold tracking-wide text-[#222222]">Chenarae</a>
        </div>

        <div className="hidden md:block flex-1">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search bouquets, colors, occasions…"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#b28cff]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://instagram.com/chenarae.gul" target="_blank" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border hover:shadow">
            <Instagram className="w-4 h-4" />
            <span className="text-sm">Instagram</span>
          </a>
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#b28cff] to-[#89f7f2] hover:opacity-90 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ff9aa2] text-white text-xs rounded-full px-2 py-0.5 shadow">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bouquets, colors, occasions…"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#b28cff]"
          />
        </div>
      </div>
    </header>
  );
}
