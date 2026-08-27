import banneroffers_01 from "../../assets/image/banneroffers-01.webp"
import banneroffers_02 from "../../assets/image/banneroffers-02.webp"
import banneroffers_03 from "../../assets/image/banneroffers-03.webp"
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home_Banner() {

      const homeBannerData = [
            {
                  name: "seafood\ncalamari",
                  dis: "GEt 29% OFF",
                  BgimgUrl: banneroffers_01,
            },
            {
                  name: "Freshly\nbaked",
                  dis: "GEt 49% OFF",
                  BgimgUrl: banneroffers_02,
            },
            {
                  name: "Fruits and\nvegetables",
                  dis: "GEt 49% OFF",
                  BgimgUrl: banneroffers_03,
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-14">
                  <main className=" container md:max-w-7xl mx-auto">
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
                              {
                                    homeBannerData.map((item) => {
                                          const { name, dis, BgimgUrl } = item
                                          return (
                                                <div key={name} className=" w-full overflow-hidden h-56 object-center object-cover py-3 px-3 bg-center bg-no-repeat bg-cover flex flex-col space-y-3 rounded-lg" style={{backgroundImage: `url(${BgimgUrl})`}}>

                                                      <div className=" flex flex-col space-y-3 items-start mt-7">
                                                            <button className=" uppercase text-sm text-white font-bold underline">{dis}</button>
                                                            <h3 className=" text-2xl font-bold capitalize text-white​ whitespace-pre-line leading-tight">{name}</h3>
                                                            <div >
                                                                  <button className=" py-2 px-3 rounded-lg bg-yellow-500 flex items-center gap-3">
                                                                        <h5 className=" text-sm font-bold text-black/50">shop now</h5>
                                                                        <IoIosArrowRoundForward />
                                                                  </button>
                                                            </div>
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