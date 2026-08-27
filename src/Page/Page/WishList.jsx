import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import WishListItems from "../../Components/WishList/WishListItems";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash, FaArrowLeft } from "react-icons/fa";

export default function WishList() {
      const { likeCart, likeQuantity, clearLikeCart } = useContext(ShopContext);

      return (
            <section className="w-full h-screen overflow-hidden bg-gray-50/50 py-6 flex flex-col">
                  <div className="container mx-auto md:max-w-7xl px-4 flex flex-col h-full">

                        {/* Header Section */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 flex-shrink-0">
                              <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
                                          <FaHeart className="text-rose-500" />
                                          <span>My Wishlist</span>
                                          <span className="text-sm font-semibold bg-rose-100 text-rose-600 px-2.5 py-0.5 rounded-full">
                                                {likeQuantity || likeCart.length} items
                                          </span>
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                          Review your saved favorite products and add them to your cart anytime.
                                    </p>
                              </div>

                              {/* Clear All Button */}
                              {likeCart.length > 0 && (
                                    <button
                                          onClick={() => clearLikeCart && clearLikeCart()}
                                          className="text-sm font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-xl transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                                    >
                                          <FaTrash className="text-xs" />
                                          <span>Clear All</span>
                                    </button>
                              )}
                        </div>

                        {/* Content Section with no-scrollbar applied */}
                        <div className="flex-1 overflow-y-auto no-scrollbar h-[380px] pb-10">
                              {likeCart.length === 0 ? (
                                    /* Empty State */
                                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                                          <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 mb-4 shadow-inner">
                                                <FaHeart className="text-3xl" />
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-800 mb-1">Your Wishlist is Empty</h3>
                                          <p className="text-gray-500 text-sm max-w-sm mb-6">
                                                You haven't added any products to your wishlist yet. Explore our products and save your favorites!
                                          </p>
                                          <Link
                                                to="/shop"
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors duration-300 flex items-center gap-2 shadow-sm"
                                          >
                                                <FaArrowLeft className="text-xs" />
                                                <span>Continue Shopping</span>
                                          </Link>
                                    </div>
                              ) : (
                                    /* Render Wishlist Items Component */
                                    <WishListItems />
                              )}
                        </div>

                  </div>
            </section>
      );
}