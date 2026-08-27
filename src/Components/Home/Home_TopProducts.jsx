import freshbite_title_icon2 from "../../assets/image/freshbite-title-icon2.webp"
import freshbite_cat_bg from "../../assets/image/freshbite-cat-bg.webp"

import freshbite_ctg_01 from "../../assets/image/freshbite-ctg-01.webp"
import freshbite_ctg_02 from "../../assets/image/freshbite-ctg-02.webp"
import freshbite_ctg_03 from "../../assets/image/freshbite-ctg-03.webp"
import freshbite_ctg_04 from "../../assets/image/freshbite-ctg-04.webp"
import freshbite_ctg_05 from "../../assets/image/freshbite-ctg-05.webp"
import freshbite_ctg_06 from "../../assets/image/freshbite-ctg-06.webp"


export default function Home_TopProducts() {


      const topProductsData = [
            {
                  name: "Dals and pulses",
                  imgUrl: freshbite_ctg_01,
                  desc: "Get over 205 in saving",
                  dis: "min 20% off",
            },
            {
                  name: "Fresh Vegetables",
                  imgUrl: freshbite_ctg_02,
                  desc: "Healty & Fresh picks",
                  dis: "min 15% off",
            },
            {
                  name: "Dals and pulses",
                  imgUrl: freshbite_ctg_03,
                  desc: "Freshly baked",
                  dis: "min 20% off",
            },
            {
                  name: "Bakery Items",
                  imgUrl: freshbite_ctg_04,
                  desc: "Get over 205 in saving",
                  dis: "min 15% off",
            },
            {
                  name: "Dairy Products",
                  imgUrl: freshbite_ctg_05,
                  desc: "Pure & Fresh dairy",
                  dis: "min 20% off",
            },
            {
                  name: "Snacks & Chips",
                  imgUrl: freshbite_ctg_06,
                  desc: "Cruchy snacks",
                  dis: "min 30% off",
            },
      ]
      return (
            <section className="w-full overflow-hidden p-0 md:p-7 rounded-xl h-screen md:h-96 relative bg-cover bg-center bg-no-repeat group"
                  style={{ backgroundImage: `url(${freshbite_cat_bg})` }}>
                  <div className=" absolute inset-0 bg-black/5" />
                  <main className=" container mb-0 md:mb-4 md:max-w-7xl mx-auto">
                        <div className=" flex flex-col">
                              {/* ============== Header ============= */}
                              <div className="flex items-center justify-between mb-0 md:mb-4 mt-0 md:mt-7">
                                    <div className="flex items-center gap-2">
                                          <h3 className="text-2xl capitalize font-bold text-gray-800">Top Selling Products</h3>
                                          <img src={freshbite_title_icon2} alt="" className="w-5 h-5 rounded-full mb-1 object-cover" />
                                    </div>
                              </div>

                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                    {
                                          topProductsData.map((item, index) => {
                                                const { name, desc, dis, imgUrl } = item
                                                return (
                                                      <div key={index + 1} className=" w-full overflow-hidden flex flex-col space-y-3 justify-center items-center py-3 px-3 rounded-lg hover:shadow-md hover:backdrop-blur-sm hover:shadow-gray-500 shadow-sm backdrop-blur-sm transition-all duration-300">
                                                            <img src={imgUrl} alt="" className=" w-24 h-24 rounded-full object-center object-cover hover:scale-110 duration-300 transition-all" />
                                                            <div className=" flex flex-col space-y-2">
                                                                  <button className=" py-0.5 px-5 rounded-lg bg-red-500 text-sm capitalize text-white">{dis}</button>
                                                                  <h3 className=" text-md capitalize text-black">{name}</h3>
                                                                  <p className=" text-sm capitalize text-gray-500">{desc}</p>
                                                            </div>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                  </main>
            </section>
      )
}