import { productsKPIKey } from "../../../Data/Dashboard/ProductsData";


export default function Products_Card() {
      return (
            <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {
                        productsKPIKey.map((item) => {
                              const { price, name, upTrendIcon, upTrendNumber, upTrendColor, desc, icon, iconColor, iconBg, prograss } = item
                              return (
                                    <div className=" w-full overflow-hidden flex flex-col space-y-3 py-3 px-3 hover:shadow-md hover:backdrop-blur-md border-t-4 border-t-green-500 rounded-lg bg-white border-gray-100 border transition-all duration-300">

                                          <div className=" flex justify-between">

                                                <div className=" flex flex-col space-y-3">

                                                      <h3 className=" text-sm text-gray-500 uppercase">{name}</h3>

                                                      <h5 className=" text-2xl font-bold text-black">{price}</h5>

                                                      <div className=" flex items-center gap-2">

                                                            <div className={`${upTrendColor} flex items-center gap-1 font-bold`}>
                                                                  <button >{upTrendIcon}</button>
                                                                  <span className=" text-xs">{upTrendNumber}</span>
                                                            </div>

                                                            <p className=" text-xs text-gray-500">{desc}</p>
                                                      </div>
                                                </div>

                                                <div>
                                                      <button className={`${iconColor} ${iconBg} w-12 h-12 rounded-full p-2 text-2xl flex items-center justify-center`}>{icon}</button>
                                                </div>
                                          </div>

                                          <>
                                                {prograss}
                                          </>
                                    </div>
                              )
                        })
                  }
            </section>
      )
}