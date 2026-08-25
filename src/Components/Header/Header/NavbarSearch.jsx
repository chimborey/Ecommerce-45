import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../Context/ShopContext";
import { FaSearch } from "react-icons/fa";

export default function NavbarSearch() {
      const { searchCategory, setSearchCategory } = useContext(ShopContext);
      const navigate = useNavigate(); 

      // មុខងារដោះស្រាយពេលចុច Enter
      const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                  navigate("/shop");
            }
      };

      return (
            <div className="relative flex items-center w-full max-w-xs">
                  {/* Search Input */}
                  <input
                        type="text"
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search products..."
                        className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-emerald-500 text-gray-700 transition-all duration-300 shadow-sm"
                  />

                  {/* Search Icon */}
                  <span className="absolute left-3.5 text-gray-400 pointer-events-none flex items-center justify-center">
                        <FaSearch className="text-sm" />
                  </span>
            </div>
      );
}