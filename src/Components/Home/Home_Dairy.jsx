import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Navigation, Autoplay, Grid, FreeMode } from 'swiper/modules';

import freshbite_title_icon1 from "../../assets/image/freshbite-title-icon1.png"
import { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { topProductsData } from "../../Data/Main/TopProductsData"
import SleketonCart from "../../Sleketon/SleketonCart";
import { FaStar, FaShoppingBag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Home_Dairy() {

      // =========================== ShopContext =======================
      const { addToCart } = useContext(ShopContext)

      // =========================== Loading =======================
      const [loading, setLoading] = useState(true)
      useEffect(() => {
            const Timer = setTimeout(() => setLoading(false), 2000)
            return () => clearTimeout(Timer)
      }, [])
      const sleketonCount = 3

      // =========================== Slice Products (កាត់យកតែពី topProductsData មកបែងចែកជា ៣ ប្រអប់) =======================
      const leftProducts = topProductsData.slice(0, 19);
      const centerProducts = topProductsData.slice(2, 19);
      const rightProducts = topProductsData.slice(4, 19);

      // Refs សម្រាប់គ្រប់គ្រងប៊ូតុង Next/Prev របស់ Swiper នីមួយៗ
      const leftPrevRef = useRef(null);
      const leftNextRef = useRef(null);
      const centerPrevRef = useRef(null);
      const centerNextRef = useRef(null);
      const rightPrevRef = useRef(null);
      const rightNextRef = useRef(null);
      const [swiperReady, setSwiperReady] = useState(false);

      useEffect(() => {
            setSwiperReady(true);
      }, []);

      // Render Product Card
      const renderHorizontalProductCard = (item) => {
            const { name, id, imgUrl1, imgUrl3, imgUrl2, price, rating } = item;

            return (
                  <div key={id} className='w-full bg-white border border-gray-100 rounded-xl p-3.5 flex flex-col justify-between group hover:shadow-md transition-shadow'>
                        <div className='flex items-center gap-3'>
                              {/* Image */}
                              <div className='w-16 h-16 relative rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100 group'>
                                    {/* រូបទី១ (បង្ហាញពេលធម្មតា) */}
                                    <img
                                          src={imgUrl1}
                                          alt={name}
                                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    />

                                    {/* រូបទី២ ឬ ទី៣ (លាក់ទុក ហើយនឹងបង្ហាញពេល Hover លើប្រអប់ group) */}
                                    <img
                                          src={imgUrl2 || imgUrl3}
                                          alt={name}
                                          className='w-full h-full object-cover group-hover:scale-105 duration-300 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'
                                    />
                              </div>

                              {/* Details */}
                              <div className='flex-1 min-w-0'>
                                    <h4 className='text-sm font-bold text-gray-800 truncate capitalize'>{name}</h4>

                                    {/* Rating */}
                                    <div className='flex items-center gap-1 text-amber-400 text-xs my-1'>
                                          {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < Math.floor(rating || 5) ? "text-amber-400" : "text-gray-200"} />
                                          ))}
                                    </div>

                                    {/* Price */}
                                    <div className='text-sm font-extrabold text-gray-900'>{price}</div>
                              </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                              onClick={() => addToCart(item)}
                              className='mt-3 w-full bg-gray-50 hover:bg-emerald-600 text-gray-700 hover:text-white border border-gray-200 hover:border-emerald-600 text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer'
                        >
                              <FaShoppingBag className='text-xs' />
                              <span>ADD TO CART</span>
                        </button>
                  </div>
            );
      };

      // Component សម្រាប់បង្កើតប្រអប់នីមួយៗ (Column Box)
      const renderProductColumn = (title, products, prevRef, nextRef) => (
            <div className='bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex-1'>
                  {/* Header ក្នុងប្រអប់ */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                              {title === "Top selling" && (
                                    <img src={freshbite_title_icon1} alt="" className="w-4 h-4 rounded-full object-cover" />
                              )}
                        </div>
                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-1.5">
                              <button ref={prevRef} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
                                    <FaArrowLeft className="text-xs" />
                              </button>
                              <button ref={nextRef} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors">
                                    <FaArrowRight className="text-xs" />
                              </button>
                        </div>
                  </div>

                  {/* Body Content / Swiper */}
                  {loading ? (
                        <div className="space-y-4 py-2">
                              {[...Array(sleketonCount)].map((_, index) => (
                                    <SleketonCart key={index} />
                              ))}
                        </div>
                  ) : swiperReady && (
                        <Swiper
                              modules={[Navigation, Autoplay, Grid, FreeMode]}
                              slidesPerView={1}
                              grid={{
                                    rows: 3,
                                    fill: 'row',
                              }}
                              spaceBetween={12}
                              loop={true}
                              freeMode={{
                                    enabled: true,
                                    sticky: false,
                                    momentumBounce: false
                              }}
                              autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                    stopOnLastSlide: false,
                              }}
                              speed={3000}
                              navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                              }}
                              onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                              }}
                              className="w-full h-[430px]"
                        >
                              {products.map((item, index) => (
                                    <SwiperSlide key={`${item.id}-${index}`} className="w-full h-auto">
                                          {renderHorizontalProductCard(item)}
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  )}
            </div>
      );

      return (
            <section className="w-full overflow-hidden bg-gray-50/50 py-8">
                  <main className="container mx-auto md:max-w-7xl px-4">
                        {/* បង្ហាញប្រអប់ទាំង ៣ បែប Flex Row នៅលើអេក្រង់ធំ */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                              {renderProductColumn("Top selling", leftProducts, leftPrevRef, leftNextRef)}
                              {renderProductColumn("Trending products", centerProducts, centerPrevRef, centerNextRef)}
                              {renderProductColumn("Recently added", rightProducts, rightPrevRef, rightNextRef)}
                        </div>
                  </main>
            </section>
      );
}