import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../Context/ShopContext";
import { FaHeart } from "react-icons/fa";

export default function NavbarWishlist() {
      const { likeQuantity } = useContext(ShopContext);

      return (
            <Link to={'/wishlist'}>
                  <button className="relative p-2.5 rounded-full bg-gray-100 hover:bg-rose-50 text-gray-700 hover:text-rose-500 transition-all duration-300 flex items-center justify-center group shadow-sm">
                        {/* Wishlist Icon */}
                        <FaHeart className="text-lg transition-transform duration-300 group-hover:scale-110" />

                        {/* Badge Quantity (បង្ហាញតែពេលមានទំនិញក្នុង Wishlist) */}
                        {likeQuantity > 0 && (
                              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                                    {likeQuantity}
                              </span>
                        )}
                  </button>
            </Link>
      );
}