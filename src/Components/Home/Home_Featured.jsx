
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import freshbite_cat1 from "../../assets/image/freshbite-cat1.png"
import freshbite_cat2 from "../../assets/image/freshbite-cat2.png"
import freshbite_cat3 from "../../assets/image/freshbite-cat3.png"
import freshbite_cat4 from "../../assets/image/freshbite-cat4.png"
import freshbite_cat5 from "../../assets/image/freshbite-cat5.png"
import freshbite_cat6 from "../../assets/image/freshbite-cat6.png"
import freshbite_cat7 from "../../assets/image/freshbite-cat7.png"
import freshbite_cat8 from "../../assets/image/freshbite-cat8.png"

import freshbite_cat_bg from "../../assets/image/freshbite-cat-bg.webp"
export default function Home_Featured() {
      const featuredData = [
            {
                  img: freshbite_cat1,
                  name: "Vegitable and Fruits",
            },
            {
                  img: freshbite_cat2,
                  name: "Milk an Doiry products",
            },
            {
                  img: freshbite_cat3,
                  name: "Breakfast and Cereals",
            },
            {
                  img: freshbite_cat4,
                  name: "Animal biscvits and products",
            },
            {
                  img: freshbite_cat5,
                  name: "Bread, Toast and Biscuits",
            },
            {
                  img: freshbite_cat6,
                  name: "Chicken meat an dfish",
            },
            {
                  img: freshbite_cat7,
                  name: "Vegitable and Fruits",
            },
            {
                  img: freshbite_cat8,
                  name: "Vitamins and minerals",
            },
      ]
      return (
            <section className=" w-full overflow-hidden">
                  <main className=" container md:max-w-7xl mx-auto">
                        <Swiper
                              slidesPerView={8}
                              spaceBetween={20}
                              loop={true}
                              modules={[Autoplay]}
                              autoplay={{ delay: 1500 }}
                              speed={1500}
                              breakpoints={{
                                    320: { slidesPerView: 2, spaceBetween: 10 },
                                    640: { slidesPerView: 3, spaceBetween: 15 },
                                    1024: { slidesPerView: 4, spaceBetween: 20 },
                                    1280: { slidesPerView: 7, spaceBetween: 20 },
                              }}
                        >
                              {
                                    featuredData.map((item) => {
                                          const { name, img } = item
                                          return (
                                                <SwiperSlide key={name}>
                                                      <div
                                                            className="w-full overflow-hidden rounded-xl p-4 flex flex-col items-center justify-center space-y-3 bg-gray-400/20 border border-gray-200/50 shadow-sm backdrop-blur-md relative bg-cover bg-center bg-no-repeat group transition-all duration-300 hover:shadow-md"
                                                            style={{ backgroundImage: `url(${freshbite_cat_bg})` }}
                                                      >
                                                            {/* Optional: Overlay ស្រអាប់បន្តិចដើម្បីឱ្យអត្ថបទនិងរូប Logo មើលងាយយល់ច្បាស់ជាងមុន */}
                                                            <div className='absolute inset-0 bg-white/30 backdrop-blur-[2px] rounded-xl -z-10' />

                                                            {/* ផ្នែករូបភាព Logo ខាងក្នុង */}
                                                            <div className='bg-white flex justify-center shadow-md items-center border border-gray-100 group-hover:scale-110 duration-300 transition-all rounded-full w-16 h-16 p-2 mx-auto'>
                                                                  <img src={img} alt={name} className='w-full h-full rounded-full object-center object-cover group-hover:scale-95 duration-300 transition-all' />
                                                            </div>

                                                            {/* ផ្នែកឈ្មោះ */}
                                                            <h3 className='text-md text-gray-800 font-semibold text-center group-hover:text-red-600 duration-300 transition-all'>
                                                                  {name}
                                                            </h3>
                                                      </div>
                                                </SwiperSlide>
                                          )
                                    })
                              }
                        </Swiper>

                  </main>
            </section>
      )
}