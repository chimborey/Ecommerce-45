import freshbite_slidebanner1 from "../../assets/image/freshbite_slidebanner1.png"
import freshbite_slidebanner2 from "../../assets/image/freshbite_slidebanner2.png"
import freshbite_slidebanner3 from "../../assets/image/freshbite_slidebanner3.png"
import freshbite_banner1 from "../../assets/image/freshbite-banner1.png"
import freshbite_banner2 from "../../assets/image/freshbite-banner2.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Home_Hero() {
      const imageSlide = [
            {
                  id: 1,
                  imageUrl: freshbite_slidebanner1,
            },
            {
                  id: 2,
                  imageUrl: freshbite_slidebanner2,
            },
            {
                  id: 3,
                  imageUrl: freshbite_slidebanner3,
            },
      ]

      return (
            <section className="w-full overflow-hidden py-14">
                  <main className="mt-12 container md:max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-3 items-center">

                              {/* Banner 1 */}
                              <div className="w-full lg:w-[890px] h-96 rounded-lg">
                                    <img src={freshbite_banner1} alt="" className="w-full h-full object-center object-cover rounded-lg" />
                              </div>

                              {/* Swiper Slider with Pagination */}
                              <Swiper
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    loop={true}
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                                    speed={1500}
                                    pagination={{
                                          clickable: true,
                                    }}
                                    breakpoints={{
                                          640: { slidesPerView: 1, spaceBetween: 15 },
                                          1024: { slidesPerView: 1, spaceBetween: 20 },
                                    }}
                                    className="w-full h-96 rounded-lg"
                              >
                                    {
                                          imageSlide.map((item) => {
                                                const { imageUrl, id } = item
                                                return (
                                                      <SwiperSlide key={id}>
                                                            <div className="w-full h-full overflow-hidden rounded-lg">
                                                                  <img src={imageUrl} alt="" className="w-full h-full object-center object-cover rounded-lg" />
                                                            </div>
                                                      </SwiperSlide>
                                                )
                                          })
                                    }
                              </Swiper>

                              {/* Banner 2 */}
                              <div className="w-full lg:w-[890px] h-96 rounded-lg">
                                    <img src={freshbite_banner2} alt="" className="w-full h-full object-center object-cover rounded-lg" />
                              </div>

                        </div>
                  </main>
            </section>
      )
}