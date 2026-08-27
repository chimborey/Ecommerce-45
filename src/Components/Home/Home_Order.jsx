import order_image01 from "../../assets/image/order-image01.webp"
import order_image02 from "../../assets/image/order-image02.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import freshbite_br_1 from "../../assets/image/freshbite-br-1.webp"
import freshbite_br_2 from "../../assets/image/freshbite-br-2.webp"
import freshbite_br_3 from "../../assets/image/freshbite-br-3.webp"
import freshbite_br_4 from "../../assets/image/freshbite-br-4.webp"
import freshbite_br_5 from "../../assets/image/freshbite-br-5.webp"
import freshbite_br_6 from "../../assets/image/freshbite-br-6.webp"

export default function Home_Order() {

      const homeOrderData = [
            {
                  imgUrl: order_image01,
            },
            {
                  imgUrl: order_image02,
            },
      ]
      const homeOrderSlideData = [
            {
                  imgUrl: freshbite_br_1,
            },
            {
                  imgUrl: freshbite_br_2,
            },
            {
                  imgUrl: freshbite_br_3,
            },
            {
                  imgUrl: freshbite_br_4,
            },
            {
                  imgUrl: freshbite_br_5,
            },
            {
                  imgUrl: freshbite_br_6,
            },
            {
                  imgUrl: freshbite_br_6,
            },
            {
                  imgUrl: freshbite_br_1,
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-14">
                  <main className="container max-w-7xl space-y-7 mx-auto mb-4">

                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                              {
                                    homeOrderData.map((item) => {
                                          const { imgUrl } = item
                                          return (
                                                <div className="">
                                                      <img src={imgUrl} alt="" className=" w-full h-72 object-center object-cover rounded-lg" />
                                                </div>
                                          )
                                    })
                              }
                        </div>

                        <Swiper
                              slidesPerView={9}
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
                                    homeOrderSlideData.map((item, index) => {
                                          const { imgUrl } = item
                                          return (
                                                <SwiperSlide key={index + 1}>
                                                      <div className="">
                                                            <img src={imgUrl} alt="" className=" w-full h-7 object-center object-cover rounded-lg" />
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