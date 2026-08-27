import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function CartItem({ item }) {
      const { inCreaseQuantity, deCreaseQuantity, removeFromCart, subTotal } = useContext(ShopContext)

      return (
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-4 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">

                  {/* 1. Products Name & Images */}
                  <div className="flex items-center gap-3 md:col-span-1">
                        <div className="relative cursor-pointer group duration-300 transition-all flex-shrink-0">
                              <img src={item?.imgUrl1} alt={item?.name} className="w-16 h-16 rounded-xl object-center object-cover border border-gray-100" />
                              {item?.imgUrl2 && (
                                    <img src={item?.imgUrl2} alt={item?.name} className="w-16 h-16 rounded-xl object-center object-cover absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 transition-all border border-gray-100" />
                              )}
                        </div>
                        <div className="flex flex-col space-y-1">
                              <h3 className="text-xs font-bold text-gray-800 line-clamp-2">{item?.name}</h3>
                              <span className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md w-fit">
                                    {item?.kg || "1 unit"}
                              </span>
                        </div>
                  </div>

                  {/* 2. Quantity Controls */}
                  <div className="flex items-center justify-start md:justify-center gap-3">
                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                              <button
                                    onClick={() => deCreaseQuantity(item.id)}
                                    className="p-2 hover:bg-gray-200 text-gray-600 transition-colors"
                                    title="Decrease"
                              >
                                    <FaMinus className="text-[10px]" />
                              </button>

                              <span className="px-3 text-xs font-bold text-gray-800">
                                    {item.amount}
                              </span>

                              <button
                                    onClick={() => inCreaseQuantity(item.id)}
                                    className="p-2 hover:bg-gray-200 text-gray-600 transition-colors"
                                    title="Increase"
                              >
                                    <FaPlus className="text-[10px]" />
                              </button>
                        </div>
                  </div>

                  {/* 3. Price */}
                  <div className="text-left md:text-center">
                        <span className="text-xs font-semibold text-gray-500 md:hidden">Price: </span>
                        <h5 className="text-sm font-bold text-gray-800">{item.price}</h5>
                  </div>

                  {/* 4. SubTotal (Price * Quantity) */}
                  <div className="text-left md:text-center">
                        <span className="text-xs font-semibold text-gray-500 md:hidden">SubTotal: </span>
                        <h5 className="text-sm font-extrabold text-emerald-600">
                              ${subTotal.toFixed(2)}
                        </h5>
                  </div>

                  {/* 5. Action (Delete Button) */}
                  <div className="flex items-center justify-end">
                        <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2.5 rounded-xl text-rose-500 bg-rose-50 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-sm"
                              title="Remove item"
                        >
                              <FaTrash className="text-xs" />
                        </button>
                  </div>

            </div>
      )
}