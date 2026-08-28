import freshbite_news_bg from "../../assets/image/freshbite-news-bg.webp"
import freshbite_footer_bg from "../../assets/image/freshbite-footer-bg.webp"
import { Link } from "react-router-dom"
import { FaStore, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer_Footer() {
      return (
            <section
                  className="w-full h-auto py-12 lg:h-[81vh] relative overflow-hidden bg-center bg-contain bg-no-repeat flex items-center justify-center"
                  style={{ backgroundImage: `url(${freshbite_footer_bg})` }}
            >
                  {/* Background Blur Overlay */}
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

                  <main className="container max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col space-y-12">

                              {/* Newsletter Banner */}
                              <div
                                    className="w-full h-72 md:h-64 mt-7 rounded-2xl flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat relative overflow-hidden shadow-lg px-4"
                                    style={{ backgroundImage: `url(${freshbite_news_bg})` }}
                              >
                                    <div className="relative z-10 flex flex-col items-center text-center space-y-4 max-w-lg w-full">
                                          <span className="py-1 px-3 rounded-full bg-black/60 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                                                Subscribe Our Newsletter
                                          </span>
                                          <h3 className="text-xl md:text-2xl text-white font-extrabold tracking-tight">
                                                Get 20% Off Discount Coupon
                                          </h3>
                                          <div className="flex items-center justify-between w-full p-1.5 bg-white rounded-xl shadow-lg border border-white/20">
                                                <input
                                                      type="email"
                                                      placeholder="Enter your email address..."
                                                      className="w-full px-4 py-2.5 text-xs md:text-sm text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400"
                                                />
                                                <button className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm shrink-0 cursor-pointer">
                                                      Subscribe
                                                </button>
                                          </div>
                                    </div>
                              </div>

                              {/* Footer Links & Info Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">

                                    {/* Column 1: Brand Info */}
                                    <div className="lg:col-span-1 flex flex-col space-y-4">
                                          <Link to="/" className="flex items-center gap-2.5 group">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                                                      <FaStore className="text-lg" />
                                                </div>
                                                <div className="flex flex-col">
                                                      <h3 className="text-xl font-extrabold text-white tracking-wide font-sans group-hover:text-emerald-400 transition-colors duration-300">
                                                            E-45
                                                      </h3>
                                                      <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-300 -mt-1">
                                                            Ecommerce
                                                      </span>
                                                </div>
                                          </Link>
                                          <p className="text-xs text-gray-200 leading-relaxed">
                                                Your ultimate destination for fresh products, fast delivery, and exceptional shopping experiences.
                                          </p>
                                    </div>

                                    {/* Column 2: My Account */}
                                    <div className="flex flex-col space-y-3">
                                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">My Account</h4>
                                          <ul className="space-y-2 text-xs text-gray-200">
                                                <li><Link to="/account" className="hover:text-emerald-400 transition-colors">My Account</Link></li>
                                                <li><Link to="/cart" className="hover:text-emerald-400 transition-colors">My Cart</Link></li>
                                                <li><Link to="/orders" className="hover:text-emerald-400 transition-colors">Order History</Link></li>
                                                <li><Link to="/returns" className="hover:text-emerald-400 transition-colors">Return Policy</Link></li>
                                          </ul>
                                    </div>

                                    {/* Column 3: Quick Links */}
                                    <div className="flex flex-col space-y-3">
                                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
                                          <ul className="space-y-2 text-xs text-gray-200">
                                                <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
                                                <li><Link to="/accessibility" className="hover:text-emerald-400 transition-colors">Accessibility</Link></li>
                                                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                                                <li><Link to="/track-order" className="hover:text-emerald-400 transition-colors">Track Order</Link></li>
                                                <li><Link to="/stores" className="hover:text-emerald-400 transition-colors">Store Location</Link></li>
                                          </ul>
                                    </div>

                                    {/* Column 4: Information */}
                                    <div className="flex flex-col space-y-3">
                                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Information</h4>
                                          <ul className="space-y-2 text-xs text-gray-200">
                                                <li><Link to="/story" className="hover:text-emerald-400 transition-colors">Our Story</Link></li>
                                                <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Keep in Touch</Link></li>
                                                <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                                                <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ's</Link></li>
                                          </ul>
                                    </div>

                                    {/* Column 5: Contact Details */}
                                    <div className="flex flex-col space-y-3">
                                          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
                                          <ul className="space-y-2.5 text-xs text-gray-200">
                                                <li className="flex items-center gap-2">
                                                      <FaPhoneAlt className="text-emerald-400 shrink-0" />
                                                      <span>+123 456 7890</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                      <FaEnvelope className="text-emerald-400 shrink-0" />
                                                      <span>e45@gmail.com</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                      <FaMapMarkerAlt className="text-emerald-400 shrink-0 mt-0.5" />
                                                      <span>401, Phnom Penh, Cambodia</span>
                                                </li>
                                          </ul>
                                    </div>

                              </div>

                              {/* Copyright Section */}
                              <div className="pt-6 border-t border-white/20 text-center text-xs text-gray-300">
                                    <p>© {new Date().getFullYear()} E-45 Ecommerce. All rights reserved.</p>
                              </div>

                        </div>
                  </main>
            </section>
      )
}