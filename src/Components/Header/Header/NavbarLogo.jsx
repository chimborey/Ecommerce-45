import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

export default function NavbarLogo() {
      return (
            <Link to="/" className="flex items-center gap-2.5 group">
                  {/* Icon Logo (ស្រេចចិត្ត បងអាចដូរចេញ បើមានរូប Logo រួចហើយ) */}
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <FaStore className="text-lg" />
                  </div>

                  {/* Text Logo */}
                  <div className="flex flex-col">
                        <h3 className="text-xl font-extrabold text-gray-800 tracking-wide font-sans group-hover:text-emerald-600 transition-colors duration-300">
                              E-45
                        </h3>
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 -mt-1">
                              Ecommerce
                        </span>
                  </div>
            </Link>
      );
}