import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../Context/ShopContext";
import { FaOpencart } from "react-icons/fa";

export default function NavbarShoppingCart() {
      const { quantity } = useContext(ShopContext);

      return (
            <Link to={'/cart'}>
                  <button className="relative p-2.5 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center group shadow-sm">
                        {/* Cart Icon */}
                        <FaOpencart className="text-xl transition-transform duration-300 group-hover:scale-110" />

                        {/* Badge Quantity (បង្ហាញតែពេលមានទំនិញក្នុងកន្ត្រក) */}
                        {quantity > 0 && (
                              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                                    {quantity}
                              </span>
                        )}
                  </button>
            </Link>
      );
}