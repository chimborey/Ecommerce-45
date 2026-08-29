import { overviewsData } from "../../../Data/Dashboard/OverviewData";

export default function Overviews_Cart() {
      return (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {
                        overviewsData.map((item, index) => {
                              const { name, price, upTrendIcon, icon, upTrendNumber, upTrendColor, desc, process, iconColor, iconBg } = item;

                              return (
                                    <div key={index + 1} className="w-full flex flex-col space-y-3 overflow-hidden py-3 px-3 rounded-lg bg-white border-green-100 hover:shadow-sm hover:backdrop-blur-md ease-in-out duration-300 shadow-md border-t-4 hover:border-green-500">

                                          <div className="flex justify-between">
                                                <div className="flex flex-col space-y-3">
                                                      <h3 className="uppercase text-md font-bold text-gray-500">{name}</h3>
                                                      <h5 className="text-2xl font-bold text-black">{price}</h5>

                                                      <div className="flex items-center gap-1">
                                                            <div className="flex items-center">
                                                                  <span className={`${upTrendColor} font-bold`}>{upTrendIcon}</span>
                                                                  <span className={`${upTrendColor} font-bold`}>{upTrendNumber}</span>
                                                            </div>

                                                            <p className="text-gray-500 capitalize text-xs">{desc}</p>
                                                      </div>
                                                </div>

                                                {/* កែពាក្យ fonb មកជា font-bold */}
                                                <button className={`${iconColor} ${iconBg} text-2xl w-12 h-12 flex items-center font-bold justify-center rounded-full`}>
                                                      {icon}
                                                </button>
                                          </div>

                                          {/* បង្ហាញ process ដោយផ្ទាល់ មិនបាច់ប្រើ Fragment កდაცបាន */}
                                          {process && <div>{process}</div>}

                                    </div>
                              );
                        })
                  }
            </section>
      );
}