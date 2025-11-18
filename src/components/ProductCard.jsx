import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition will-change-transform hover:-translate-y-1">
      <div className="aspect-[4/5] w-full overflow-hidden bg-[#f7f6f9]">
        {product.image_url ? (
          <img src={product.image_url} alt={product.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-[#222222] font-['Montserrat']">{product.title}</h3>
            <p className="text-sm text-[#4b4b4b] line-clamp-2">{product.description}</p>
          </div>
          <span className="font-semibold text-[#222222]">${product.price.toFixed(2)}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded bg-[#ffecf0] text-[#222222]">{product.category}</span>
          <button onClick={() => onAdd(product)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-[#b28cff] to-[#89f7f2] hover:opacity-90 transition active:scale-95">
            <ShoppingBag className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
