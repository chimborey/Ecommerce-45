import freshbite_service1 from "../../assets/image/freshbite-service1.webp"
import freshbite_service2 from "../../assets/image/freshbite-service2.webp"
import freshbite_service3 from "../../assets/image/freshbite-service3.webp"

export default function Home_Service() {
      const homeServiceData = [
            {
                  imgUrl: freshbite_service1,
                  number: "01",
                  name: "Best quality",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
            },
            {
                  imgUrl: freshbite_service2,
                  number: "02",
                  name: "Easy to order",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
            },
            {
                  imgUrl: freshbite_service3,
                  number: "03",
                  name: "Fastest delivery",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam.",
            },
      ]

      return (
            <section className="w-full overflow-hidden py-14">
                  <main className="container max-w-7xl mx-auto mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white py-6 px-6 rounded-2xl shadow-sm border border-gray-100">
                              {
                                    homeServiceData.map((item) => {
                                          const { name, number, imgUrl, desc } = item
                                          return (
                                                <div
                                                      key={number}
                                                      className="w-full overflow-hidden p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 border border-gray-100 transition-all duration-300 flex items-start gap-4 group"
                                                >
                                                      <img
                                                            src={imgUrl}
                                                            alt={name}
                                                            className="w-20 h-20 rounded-xl object-center object-cover shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300"
                                                      />

                                                      {/* កែពី fl-col មកជា flex-col និងកែការតម្រៀបអក្សរ */}
                                                      <div className="flex flex-col space-y-1.5">
                                                            <span className="w-6 h-6 rounded-full font-bold bg-emerald-100 text-emerald-700 text-[10px] flex items-center justify-center">
                                                                  {number}
                                                            </span>
                                                            <h3 className="text-base capitalize text-gray-800 font-extrabold tracking-tight">
                                                                  {name}
                                                            </h3>
                                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                                  {desc}
                                                            </p>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </main>
            </section>
      )
}