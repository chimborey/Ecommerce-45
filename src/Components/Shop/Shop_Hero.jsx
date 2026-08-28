import { Link } from "react-router-dom"
import { IoChevronForward } from "react-icons/io5"
import section_banner from "../../assets/image/section-banner.png"

export default function Shop_hero() {
      return (
            <section
                  className="w-full h-[70vh] lg:h-[40vh] mt-12 rounded-2xl overflow-hidden bg-cover lg:bg-contain bg-center bg-no-repeat flex items-center justify-center"
                  style={{ backgroundImage: `url(${section_banner})` }}
            >

                  {/* Content Container */}
                  <div className="flex flex-col items-center text-center text-black max-w-2xl space-y-4 px-4">

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
                              Shop Us
                        </h1>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                              Have a question or need assistance? We are always here to help you. Reach out to our team anytime.
                        </p>

                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-xs md:text-sm font-medium pt-2">
                              <Link
                                    to={'/'}
                                    className="text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                              >
                                    Home
                              </Link>
                              <IoChevronForward className="text-xs text-gray-400" />
                              <span className="text-white uppercase tracking-wider font-semibold">
                                    Shop
                              </span>
                        </div>

                  </div>
            </section>
      )
}