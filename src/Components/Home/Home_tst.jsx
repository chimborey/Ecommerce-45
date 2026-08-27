import tst_img_01 from "../../assets/image/tst-img-01.webp"
import tst_img_02 from "../../assets/image/tst-img-02.webp"
import tst_img_03 from "../../assets/image/tst-img-03.webp"
import tst_img_04 from "../../assets/image/tst-img-04.webp"
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import freshbite_title_icon3 from "../../assets/image/freshbite-title-icon3.webp"
export default function Home_tst() {
      const homeTestData = [
            {
                  name: "John Doe",
                  skill: "Regular Customer",
                  desc: "The quality of products is exceptionally fresh and the delivery is super fast. Highly recommended for everyone!",
                  AvatarImg: tst_img_01,
                  rating: 5,
            },
            {
                  name: "Sarah Smith",
                  skill: "Food Blogger",
                  desc: "I love ordering seafood and vegetables from here. The packaging is neat and everything arrives in perfect condition.",
                  AvatarImg: tst_img_02,
                  rating: 5,
            },
            {
                  name: "David Johnson",
                  skill: "Chef & Owner",
                  desc: "Outstanding service! Easy to order and the customer support team is always helpful whenever I need assistance.",
                  AvatarImg: tst_img_03,
                  rating: 4,
            },
            {
                  name: "David Johnson",
                  skill: "Chef & Owner",
                  desc: "Outstanding service! Easy to order and the customer support team is always helpful whenever I need assistance.",
                  AvatarImg: tst_img_04,
                  rating: 4,
            },
      ]

      return (
            <section className="w-full overflow-hidden py-14 bg-gray-50/50">
                  <main className="container mb-4 md:max-w-7xl mx-auto">

                        {/* ============== Header ============= */}
                        <div className="flex items-center justify-between mb-0 md:mb-4 mt-0 md:mt-7">
                              <div className="flex items-center gap-2">
                                    <h3 className="text-2xl capitalize font-bold text-gray-800">Top Selling Products</h3>
                                    <img src={freshbite_title_icon3} alt="" className="w-5 h-5 rounded-full mb-1 object-cover" />
                              </div>
                        </div>

                        {/* Swiper Slider Container (ដកថ្នាក់ grid ចេញ) */}
                        <div className="w-full">
                              <Swiper
                                    slidesPerView={3}
                                    spaceBetween={20}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    speed={1000}
                                    breakpoints={{
                                          320: { slidesPerView: 1, spaceBetween: 15 },
                                          640: { slidesPerView: 2, spaceBetween: 20 },
                                          1024: { slidesPerView: 3, spaceBetween: 20 },
                                    }}
                              >
                                    {
                                          homeTestData.map((item, index) => {
                                                const { name, skill, desc, AvatarImg, rating } = item;
                                                return (
                                                      <SwiperSlide key={index}>
                                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group h-full">
                                                                  {/* Quote Icon Background */}
                                                                  <div className="absolute top-6 right-6 text-gray-100 group-hover:text-emerald-50 transition-colors">
                                                                        <FaQuoteRight className="text-3xl" />
                                                                  </div>

                                                                  {/* Top Content: Rating & Desc */}
                                                                  <div className="space-y-4 relative z-10">
                                                                        {/* Rating Stars */}
                                                                        <div className="flex items-center gap-1">
                                                                              {
                                                                                    [...Array(5)].map((_, i) => (
                                                                                          <FaStar
                                                                                                key={i}
                                                                                                className={`text-xs ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
                                                                                          />
                                                                                    ))
                                                                              }
                                                                        </div>

                                                                        <p className="text-xs text-gray-600 leading-relaxed">
                                                                              "{desc}"
                                                                        </p>
                                                                  </div>

                                                                  {/* Bottom Content: User Info */}
                                                                  <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-100 relative z-10">
                                                                        <img
                                                                              src={AvatarImg}
                                                                              alt={name}
                                                                              className="w-12 h-12 rounded-full object-cover object-center ring-2 ring-emerald-500/20"
                                                                        />
                                                                        <div className="flex flex-col">
                                                                              <h4 className="text-sm font-bold text-gray-800 tracking-tight">{name}</h4>
                                                                              <span className="text-[11px] font-medium text-gray-400">{skill}</span>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </SwiperSlide>
                                                );
                                          })
                                    }
                              </Swiper>
                        </div>
                  </main>
            </section>
      );
}