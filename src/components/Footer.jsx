import { Instagram } from "lucide-react";

export default function Footer() {
  const insta = "https://instagram.com/chenarae.gul";
  return (
    <footer className="mt-16 pt-10 pb-14 bg-[#f7f6f9] border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <div className="text-2xl font-['Montserrat'] font-bold tracking-wide text-[#222222]">Chenarae</div>
            <p className="text-[#4b4b4b] mt-2 max-w-sm">Handmade pipe-cleaner bouquets in soft pastels — airy, lightweight, and lasting.</p>
          </div>
          <a href={insta} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow hover:shadow-md">
            <Instagram className="w-5 h-5" /> Follow @chenarae.gul
          </a>
        </div>
        <p className="text-center text-sm text-[#4b4b4b] mt-8">© {new Date().getFullYear()} Chenarae. All rights reserved.</p>
      </div>
    </footer>
  );
}
