import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import { FaTrash, FaShoppingBag } from "react-icons/fa"

export default function WishListItems() {
      // ទាញយក likeCart, removeFromLike (ឬ ClearFromLike ទៅតាមការកំណត់ក្នុង Context របស់អ្នក) និង addToCart
      const { likeCart, removeFromLike, addToCart } = useContext(ShopContext)

      if (likeCart.length === 0) {
            return null;
      }

      return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {likeCart.map((item) => {
                        const { id, name, price, imgUrl1,imgUrl2, discount, kg } = item;
                        return (
                              <div
                                    key={id}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                              >
                                    {/* Image & Discount Badge */}
                                    <div className="relative w-full bg-gray-50 overflow-hidden">
                                         <div className=" relative group">
                                           <img
                                                src={imgUrl1}
                                                alt={name}
                                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                          />
                                           <img
                                                src={imgUrl2}
                                                alt={name}
                                                className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500 absolute inset-0 opacity-0 group-hover:opacity-100"
                                          />
                                         </div>

                                          {discount && (
                                                <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                                      -{discount}
                                                </span>
                                          )}

                                          {/* Remove Button */}
                                          <button
                                                onClick={() => removeFromLike(id)}
                                                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-400 hover:text-rose-600 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
                                                title="Remove from wishlist"
                                          >
                                                <FaTrash className="text-xs" />
                                          </button>
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
                                          <div>
                                                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                                                      {kg}
                                                </span>
                                                <h3 className="text-base font-bold text-gray-800 truncate capitalize mt-1.5">
                                                      {name}
                                                </h3>
                                                <div className="text-lg font-bold text-emerald-600 mt-1">
                                                      {price}
                                                </div>
                                          </div>

                                          {/* Add To Cart Button */}
                                          <button
                                                onClick={() => addToCart(item)}
                                                className="w-full bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                                          >
                                                <FaShoppingBag className="text-xs" />
                                                <span>Add to Cart</span>
                                          </button>
                                    </div>
                              </div>
                        );
                  })}
            </div>
      )
}