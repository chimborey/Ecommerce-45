import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import { FaStore, FaTrash, FaArrowLeft, FaCreditCard } from "react-icons/fa";
import CartItem from "../../Components/Cart/CartItem";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Cart() {
      const { cart, clearFromCart, quantity, subTotal, total, } = useContext(ShopContext)

      return (
            <section className="w-full overflow-hidden py-14">
                  <main className="mt-12 container mx-auto max-w-7xl px-4">

                        {/* ====================== Header ========================== */}
                        <div className="flex items-center justify-between py-4 px-6 rounded-2xl bg-white shadow-sm border border-gray-100 mb-6 transition-all">
                              <div className="flex items-center gap-2.5">
                                    <h5 className="text-xl font-extrabold text-gray-800 capitalize tracking-tight font-sans">
                                          Shopping Cart
                                    </h5>
                                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                                          {quantity} items
                                    </span>
                              </div>

                              <button
                                    onClick={clearFromCart}
                                    className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white rounded-xl transition-all duration-300 shadow-sm group"
                                    title="Clear all items"
                              >
                                    <FaTrash className="text-sm transition-transform duration-300 group-hover:scale-110" />
                                    <span>Clear Cart</span>
                              </button>
                        </div>

                        {/* កែប្រែត្រង់នេះ៖ បន្ថែម w-full និង min-w-0 ដើម្បីការពារកុំឱ្យ Swiper ឬ Flex Item ស៊ីទំហំគ្នា */}
                        <div className="flex flex-col lg:flex-row gap-6 items-start w-full">

                              {/* ================= Left: Products List ================= */}
                              <div className="flex-[2] flex flex-col space-y-3 w-full min-w-0">
                                    <div className="hidden md:grid grid-cols-5 gap-4 py-3 px-6 bg-gray-50 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">
                                          <div>Products Name</div>
                                          <div className="text-center">Quantity</div>
                                          <div className="text-center">Price</div>
                                          <div className="text-center">SubTotal</div>
                                          <div className="text-right">Action</div>
                                    </div>

                                    <div className="max-h-[520px] overflow-y-auto no-scrollbar flex flex-col gap-3 pr-1">
                                          {
                                                cart && cart.length > 0 ? (
                                                      cart.map((item) => (
                                                            <CartItem key={item.id} item={item} />
                                                      ))
                                                ) : (
                                                      <div className="flex flex-col items-center justify-center py-16 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
                                                            <p className="text-gray-400 text-sm font-medium">Your cart is empty</p>
                                                            <Link to="/" className="inline-block">
                                                                  <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all duration-300 shadow-sm">
                                                                        Back to Order
                                                                  </button>
                                                            </Link>
                                                      </div>
                                                )
                                          }
                                    </div>
                              </div>

                              {/* ================= Right: Cart Summary & Swiper ================= */}
                              <div className="flex-1 flex flex-col space-y-4 w-full lg:w-auto min-w-0 sticky top-28">

                                    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
                                          {/* Brand Logo & Title */}
                                          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                                                <h3 className="text-lg font-bold text-gray-800">Cart Summary</h3>
                                                <Link to="/" className="flex items-center gap-2 group">
                                                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
                                                            <FaStore className="text-sm" />
                                                      </div>
                                                      <div className="flex flex-col">
                                                            <span className="text-sm font-extrabold text-gray-800 group-hover:text-emerald-600 transition-colors leading-tight">
                                                                  E-45
                                                            </span>
                                                            <span className="text-[9px] font-semibold uppercase text-gray-400 tracking-wider">
                                                                  Ecommerce
                                                            </span>
                                                      </div>
                                                </Link>
                                          </div>

                                          {/* Calculation Details */}
                                          <div className="space-y-3.5 text-sm">
                                                <div className="flex items-center justify-between text-gray-600">
                                                      <span className="font-medium">Subtotal</span>
                                                      <span className="font-bold text-gray-800">${subTotal.toFixed(2)}</span>
                                                </div>

                                                <div className="flex items-center justify-between text-gray-600">
                                                      <span className="font-medium">Order Items</span>
                                                      <span className="font-bold text-gray-800">{quantity} Items</span>
                                                </div>

                                                <div className="flex items-center justify-between text-gray-600">
                                                      <span className="font-medium">Delivery Fee</span>
                                                      <span className="font-bold text-gray-800">${cart.length > 0 ? "2.00" : "0.00"}</span>
                                                </div>

                                                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-base">
                                                      <span className="font-bold text-gray-800">Total Amount</span>
                                                      <span className="font-extrabold text-emerald-600 text-lg">
                                                            ${total.toFixed(2)}
                                                      </span>
                                                </div>
                                          </div>

                                          {/* Action Buttons */}
                                          <div className="flex flex-col space-y-3 pt-2">
                                                <button className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]">
                                                      <FaCreditCard className="text-sm shrink-0" />
                                                      <span>Proceed to Payment</span>
                                                </button>

                                                <Link to="/" className="w-full">
                                                      <button className="w-full py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300">
                                                            <FaArrowLeft className="text-xs shrink-0" />
                                                            <span>Back to Shopping</span>
                                                      </button>
                                                </Link>
                                          </div>
                                    </div>

                                    {/* Swiper Slider Box */}
                                    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 overflow-hidden">
                                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">You May Like</h4>
                                          <Swiper
                                                slidesPerView={3}
                                                spaceBetween={10}
                                                loop={true}
                                                modules={[Autoplay]}
                                                autoplay={{ delay: 1500, disableOnInteraction: false }}
                                                speed={1500}
                                                breakpoints={{
                                                      320: { slidesPerView: 2, spaceBetween: 10 },
                                                      640: { slidesPerView: 3, spaceBetween: 10 },
                                                      1024: { slidesPerView: 3, spaceBetween: 10 },
                                                }}
                                          >
                                                {
                                                      cart && cart.map((item) => {
                                                            const { imgUrl1, imgUrl2, id } = item
                                                            return (
                                                                  <SwiperSlide key={id}>
                                                                        <div className="bg-gray-50 p-2 rounded-xl border border-gray-100 flex items-center justify-center transition-all duration-300 hover:border-emerald-500">
                                                                              {/* កំណត់ទំហំ Width/Height ឱ្យប្រាកដ ដើម្បីកុំឱ្យ Swiper រូបភាពរីកបំប៉ោងពេញ */}
                                                                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 group flex items-center justify-center mx-auto">
                                                                                    <img src={imgUrl1} alt="" className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-110 cursor-pointer" />
                                                                                    {imgUrl2 && (
                                                                                          <img src={imgUrl2} alt="" className="w-full h-full group-hover:opacity-100 opacity-0 absolute inset-0 group-hover:scale-110 object-cover rounded-lg transition-all duration-300 cursor-pointer" />
                                                                                    )}
                                                                              </div>
                                                                        </div>
                                                                  </SwiperSlide>
                                                            )
                                                      })
                                                }
                                          </Swiper>
                                    </div>

                              </div>

                        </div>
                  </main>
            </section>
      )
}