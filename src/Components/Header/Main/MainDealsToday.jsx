import { FaFire } from "react-icons/fa";

export default function MainDealsToday() {
      return (
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-200/60 text-amber-700 font-bold text-xs transition-all duration-300 shadow-sm hover:shadow group cursor-pointer">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <FaFire className="text-xs animate-pulse" />
                  </div>
                  <span className="tracking-tight">Deals Today</span>
            </button>
      )
}