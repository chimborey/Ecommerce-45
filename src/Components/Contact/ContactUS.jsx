import contact_01 from "../../assets/image/contact-01.webp"
import { IoCallSharp, IoMailSharp, IoLocationSharp, IoTimeSharp, IoSend } from "react-icons/io5"

export default function ContactUS() {
      return (
            <section className="w-full overflow-hidden py-14 bg-gradient-to-b from-gray-50/50 to-white text-gray-900">
                  <main className="container mx-auto md:max-w-7xl">

                        {/* Header Title */}
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold tracking-wider uppercase">
                                    Get In Touch
                              </span>
                              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                                    We'd Love To Hear From You
                              </h2>
                              <p className="text-sm text-gray-500">
                                    Have a question about our products, orders, or policies? Reach out to our team and we'll get back to you shortly.
                              </p>
                        </div>

                        {/* Main Grid Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                              {/* Left Column: Contact Info & Image Card (5 Cols) */}
                              <div className="lg:col-span-5 flex flex-col space-y-6">

                                    {/* Contact Details Card */}
                                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-6">
                                          <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 border-l-3 border-black pl-3">
                                                Contact Information
                                          </h3>

                                          <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                      <div className="p-2.5 rounded-xl bg-gray-50 text-black shadow-sm mt-0.5">
                                                            <IoLocationSharp className="text-lg" />
                                                      </div>
                                                      <div>
                                                            <p className="text-xs font-medium text-gray-400">Our Location</p>
                                                            <p className="text-sm font-semibold text-gray-800">123 Street Name, City, Country</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="p-2.5 rounded-xl bg-gray-50 text-black shadow-sm mt-0.5">
                                                            <IoCallSharp className="text-lg" />
                                                      </div>
                                                      <div>
                                                            <p className="text-xs font-medium text-gray-400">Phone Number</p>
                                                            <p className="text-sm font-semibold text-gray-800">+123 456 7890</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="p-2.5 rounded-xl bg-gray-50 text-black shadow-sm mt-0.5">
                                                            <IoMailSharp className="text-lg" />
                                                      </div>
                                                      <div>
                                                            <p className="text-xs font-medium text-gray-400">Email Address</p>
                                                            <p className="text-sm font-semibold text-gray-800">e-45@gmail.com</p>
                                                      </div>
                                                </div>

                                                <div className="flex items-start gap-4">
                                                      <div className="p-2.5 rounded-xl bg-gray-50 text-black shadow-sm mt-0.5">
                                                            <IoTimeSharp className="text-lg" />
                                                      </div>
                                                      <div>
                                                            <p className="text-xs font-medium text-gray-400">Working Hours</p>
                                                            <p className="text-sm font-semibold text-gray-800">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Image Card using contact_01 */}
                                    <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-sm border border-gray-200/80">
                                          <img
                                                src={contact_01}
                                                alt="Contact Us"
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                                                <p className="text-white text-xs font-medium tracking-wide">
                                                      ✨ Always here to help you find your best style.
                                                </p>
                                          </div>
                                    </div>

                              </div>

                              {/* Right Column: Contact Form (7 Cols) */}
                              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-200/80 shadow-sm">
                                    <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900 border-l-3 border-black pl-3 mb-6">
                                          Send Us A Message
                                    </h3>

                                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                      <label className="text-xs font-bold uppercase text-gray-600">Your Name</label>
                                                      <input
                                                            type="text"
                                                            placeholder="John Doe"
                                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none text-sm transition-colors bg-gray-50/50"
                                                      />
                                                </div>
                                                <div className="space-y-1.5">
                                                      <label className="text-xs font-bold uppercase text-gray-600">Your Email</label>
                                                      <input
                                                            type="email"
                                                            placeholder="johndoe@example.com"
                                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none text-sm transition-colors bg-gray-50/50"
                                                      />
                                                </div>
                                          </div>

                                          <div className="space-y-1.5">
                                                <label className="text-xs font-bold uppercase text-gray-600">Subject</label>
                                                <input
                                                      type="text"
                                                      placeholder="How can we help you?"
                                                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none text-sm transition-colors bg-gray-50/50"
                                                />
                                          </div>

                                          <div className="space-y-1.5">
                                                <label className="text-xs font-bold uppercase text-gray-600">Message</label>
                                                <textarea
                                                      rows="5"
                                                      placeholder="Write your message here..."
                                                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:outline-none text-sm transition-colors bg-gray-50/50 resize-none"
                                                ></textarea>
                                          </div>

                                          <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-gray-200"
                                          >
                                                <IoSend className="text-base" /> Send Message
                                          </button>
                                    </form>
                              </div>

                        </div>

                  </main>
            </section>
      )
}