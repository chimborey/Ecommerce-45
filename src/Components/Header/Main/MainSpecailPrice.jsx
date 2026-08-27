import { FaTags } from "react-icons/fa";

export default function MainSpecailPrice() {
      return (
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 border border-emerald-200/60 text-emerald-700 font-bold text-xs transition-all duration-300 shadow-sm hover:shadow group cursor-pointer">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <FaTags className="text-xs" />
                  </div>
                  <span className="tracking-tight">Special Price</span>
            </button>
      )
}