
import { FaArrowRightLong } from "react-icons/fa6";
import { blogHeroData } from "../../Data/Main/BlogData";
import { Link } from "react-router-dom";

export default function Blog_Cart() {

      return (
            <section className="w-full overflow-hidden py-14 bg-gray-50/50">
                  <main className="container max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                              {
                                    blogHeroData.map((item, index) => {
                                          // 📌 កែពី `-=` មកជា `=` វិញ
                                          const { name, iconComment, comment, iconDate, date, imgUrl } = item;
                                          return (
                                                <div
                                                      key={index + 1}
                                                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                                                >
                                                      <Link to={`/blogDetails/${item.id}`}>
                                                            {/* Image Wrapper with Hover Effect */}
                                                            <div className="relative overflow-hidden aspect-[4/3]">
                                                                  <img
                                                                        src={imgUrl}
                                                                        alt={name}
                                                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                                  />
                                                            </div>

                                                            {/* Content Content */}
                                                            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                                                                  <div className="space-y-3">
                                                                        {/* Date & Comment Info */}
                                                                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                                                                              <div className="flex items-center gap-1.5">
                                                                                    <span className="text-emerald-600 text-sm">{iconDate}</span>
                                                                                    <span>{date}</span>
                                                                              </div>
                                                                              <div className="flex items-center gap-1.5">
                                                                                    <span className="text-emerald-600 text-sm">{iconComment}</span>
                                                                                    <span>{comment}</span>
                                                                              </div>
                                                                        </div>

                                                                        {/* Title */}
                                                                        <h5 className="font-bold text-gray-800 text-base line-clamp-2 group-hover:text-emerald-600 transition-colors">
                                                                              {name}
                                                                        </h5>
                                                                  </div>

                                                                  {/* Explore More Button */}
                                                                  <div className="pt-2 border-t cursor-pointer border-gray-100 flex items-center justify-between">
                                                                        <button className="text-xs font-bold uppercase tracking-wider text-gray-800 group-hover:text-emerald-600 transition-colors flex items-center gap-2 cursor-pointer">
                                                                              Explore More
                                                                              <FaArrowRightLong className="transform group-hover:translate-x-1 transition-transform" />
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </Link>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </main>
            </section>
      )
}