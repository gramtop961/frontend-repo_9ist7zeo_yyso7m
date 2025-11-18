import { useEffect } from "react";

export default function Toast({ open, onClose, item }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose?.(), 1800);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 flex items-end justify-center sm:justify-end p-4 ${open ? '' : 'hidden'}`}>
      <div className="pointer-events-auto flex items-center gap-3 rounded-xl bg-white shadow-lg border border-slate-200 px-3 py-2 animate-in" style={{animationDuration:'320ms'}}>
        {item?.image_url ? (
          <img src={item.image_url} alt="Added to cart" className="w-10 h-10 rounded-lg object-cover" />
        ) : null}
        <div>
          <div className="text-sm font-medium text-[#222222]">Added to cart</div>
          <div className="text-sm text-[#4b4b4b] line-clamp-1">{item?.title}</div>
        </div>
      </div>
    </div>
  );
}
