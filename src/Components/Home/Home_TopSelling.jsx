import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { Link } from "react-router-dom"
import freshbite_title_icon1 from "../../assets/image/freshbite-title-icon1.png"
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import SleketonCart from "../../Sleketon/SleketonCart";
import { FaStar, FaHeart, FaShoppingBag, FaEye } from 'react-icons/fa';

export default function Home_TopSelling() {

      // =========================== ShopContext =======================
      const { cart, addToCart, inCreaseQuantity, deCreaseQuantity, toggleLike, likeCart = [], filterProducts } = useContext(ShopContext)

      // =========================== Loading =======================
      const [loading, setLoading] = useState(true)
      useEffect(() => {
            const Timer = setTimeout(() => setLoading(false), 2000)
            return () => clearTimeout(Timer)
      }, [])
      const sleketonCount = 5

      // =========================== Slice Products =======================
      const leftProducts = filterProducts.slice(0, 7)
      const rightProducts = filterProducts.slice(7, 14)

      // Render Product Card Function
      const renderProductCard = (item) => {
            const { name, discount, id, imgUrl1, imgUrl2, kg, rating, price } = item;

            // ពិនិត្យមើលថាតើទំនិញនេះស្ថិតក្នុង likeCart ហើយឬยัง
            const isList = likeCart.some((listItem) => listItem.id === id);

            // 🌟 ស្វែងរកទំនិញនេះនៅក្នុង cart ដើម្បីយក amount មកបង្ហាញឱ្យត្រូវពេល Increase/Decrease
            const cartItem = cart.find((cartProd) => cartProd.id === id);
            const currentAmount = cartItem ? cartItem.amount : 1;

            return (
                  <div className='w-full bg-white overflow-hidden relative space-y-3 p-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl group transition-all duration-300'>

                        {/* img */}
                        <div className='w-full h-48 rounded-xl overflow-hidden relative bg-gray-50'>
                              <img src={imgUrl1} alt="" className='w-full h-full object-center object-cover cursor-pointer group-hover:opacity-0 opacity-100 duration-500 transition-opacity' />
                              <img src={imgUrl2} alt="" className='w-full h-full object-center object-cover cursor-pointer group-hover:opacity-100 opacity-0 duration-500 transition-opacity absolute inset-0' />

                              {/* discount */}
                              <div className='absolute top-3 left-3 z-10'>
                                    <span className='text-xs font-bold text-white capitalize bg-rose-600 py-1 px-2.5 rounded-full shadow-sm'>
                                          -{discount}
                                    </span>
                              </div>
                              {/* wishlist and eye buttons with translate-x */}
                              <div className='absolute top-3 right-3 z-10 flex flex-col gap-2 overflow-hidden p-1'>
                                    {/* wishlist button */}
                                    <button
                                          onClick={() => toggleLike(item)}
                                          className={`w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform ${isList ? 'bg-rose-500 text-white scale-105' : 'bg-white/90 text-gray-400 hover:bg-white hover:text-rose-500 hover:scale-110'
                                                } ${isList && ! 'group:hover'
                                                } opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100`}
                                    >
                                          <FaHeart className={`text-sm ${isList ? 'text-white' : 'text-gray-400'}`} />
                                    </button>

                                    {/* eye button (Quick View) */}
                                    <button
                                          // onClick={() => handleQuickView(item)}
                                          className='w-9 h-9 rounded-full bg-white/90 text-gray-400 hover:bg-white hover:text-emerald-600 hover:scale-110 flex items-center justify-center shadow-md transition-all duration-300 transform opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 delay-75'
                                    >
                                          <FaEye className='text-sm' />
                                    </button>
                              </div>
                        </div>

                        {/* name */}
                        <div>
                              <h3 className='text-base font-bold text-gray-800 truncate capitalize font-sans'>{name}</h3>
                        </div>

                        {/* kg + inCreaseQuantity and DeCreasaeQuantity */}
                        <div className='flex items-center justify-between'>
                              <span className='text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md'>{kg}</span>
                              <div className='flex items-center gap-2 bg-gray-50 border border-gray-200 py-1 px-2 rounded-lg'>
                                    <button
                                          className='text-sm font-bold text-gray-600 hover:text-emerald-600 px-1'
                                          onClick={() => deCreaseQuantity(id)}
                                    >-</button>
                                    {/* 🌟 ផ្លាស់ប្តូរពី item.amount មកជា currentAmount */}
                                    <span className='text-sm font-semibold text-gray-800 min-w-[16px] text-center'>{currentAmount}</span>
                                    <button
                                          className='text-sm font-bold text-gray-600 hover:text-emerald-600 px-1'
                                          onClick={() => inCreaseQuantity(id)}
                                    >+</button>
                              </div>
                        </div>

                        {/* price + rating */}
                        <div className='flex items-center justify-between pt-1'>
                              <h5 className='text-lg font-bold text-emerald-600'>{price}</h5>
                              <div className='flex items-center gap-1 text-amber-500 text-xs font-semibold'>
                                    <FaStar />
                                    <span>{rating}</span>
                              </div>
                        </div>

                        {/* addToCart */}
                        <button
                              onClick={() => addToCart(item)}
                              className='w-full mt-2 bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white py-2 rounded-xl text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2'
                        >
                              <FaShoppingBag className='text-xs' />
                              <span>Add to cart</span>
                        </button>
                  </div>
            );
      };

      return (
            <section className="w-full overflow-hidden bg-gray-50/50 py-8">
                  <main className="container mt-6 mx-auto md:max-w-7xl px-4">

                        {/* ============== Header ============= */}
                        <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                    <h3 className="text-2xl capitalize font-bold text-gray-800">Top Selling Products</h3>
                                    <img src={freshbite_title_icon1} alt="" className="w-5 h-5 rounded-full mb-1 object-cover" />
                              </div>
                              <Link to="/shop" className="text-sm font-semibold text-emerald-600 hover:underline">
                                    View All
                              </Link>
                        </div>

                        {/* ============== Filter Products for swipper-left ============= */}
                        {loading ? (
                              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4">
                                    {[...Array(sleketonCount)].map((_, index) => (
                                          <SleketonCart key={index} />
                                    ))}
                              </div>
                        ) : (
                              <Swiper
                                    slidesPerView={5}
                                    spaceBetween={20}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                                    speed={1200}
                                    breakpoints={{
                                          320: { slidesPerView: 1, spaceBetween: 10 },
                                          640: { slidesPerView: 2, spaceBetween: 15 },
                                          1024: { slidesPerView: 4, spaceBetween: 20 },
                                          1280: { slidesPerView: 5, spaceBetween: 20 },
                                    }}
                                    className='py-4'
                              >
                                    {leftProducts.map((item) => (
                                          <SwiperSlide key={item.id}>
                                                {renderProductCard(item)}
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        )}


                        {/* ============== Filter Products for swipper-right ============= */}
                        {!loading && rightProducts.length > 0 && (
                              <Swiper
                                    slidesPerView={5}
                                    spaceBetween={20}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
                                    speed={1200}
                                    breakpoints={{
                                          320: { slidesPerView: 1, spaceBetween: 10 },
                                          640: { slidesPerView: 2, spaceBetween: 15 },
                                          1024: { slidesPerView: 4, spaceBetween: 20 },
                                          1280: { slidesPerView: 5, spaceBetween: 20 },
                                    }}
                                    className='py-4 mt-2'
                              >
                                    {rightProducts.map((item) => (
                                          <SwiperSlide key={item.id}>
                                                {renderProductCard(item)}
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        )}

                  </main>
            </section>
      )
}