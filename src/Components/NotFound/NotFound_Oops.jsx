import { Link } from "react-router-dom"
import { IoHomeOutline, IoArrowBack } from "react-icons/io5"
import pagenotfound from "../../assets/image/pagenotfound.webp"

export default function NotFound_Oops() {
      return (
            <section className="w-full overflow-hidden py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white text-gray-900 flex items-center justify-center min-h-[80vh]">
                  <main className="container max-w-5xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

                              {/* Left: Image / Illustration */}
                              <div className="w-full lg:w-1/2 flex justify-center">
                                    <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 bg-white p-6 flex items-center justify-center">
                                          <img
                                                src={pagenotfound}
                                                alt="Page Not Found"
                                                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                          />
                                    </div>
                              </div>

                              {/* Right: Text Content & Actions */}
                              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

                                    <div className="space-y-3">
                                          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold tracking-wider uppercase">
                                                404 Error
                                          </span>
                                          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 uppercase">
                                                Oops! Page not found
                                          </h1>
                                          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light max-w-md">
                                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                                          </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
                                          <Link
                                                to="/"
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-gray-200"
                                          >
                                                <IoHomeOutline className="text-base" /> Back To Home
                                          </Link>

                                          <button
                                                onClick={() => window.history.back()}
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm hover:bg-gray-200 transition-colors border border-gray-200/80"
                                          >
                                                <IoArrowBack className="text-base" /> Go Back
                                          </button>
                                    </div>

                              </div>

                        </div>
                  </main>
            </section>
      )
}