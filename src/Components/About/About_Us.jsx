import about_img_01 from "../../assets/image/about-img-01.webp"
import radio_icon from "./../../assets/image/radio-icon.png"
import support_icon from "./../../assets/image/support-icon.png"
import vision_icon from "./../../assets/image/vision-icon.png"
import team_01 from "../../assets/image/team-01.webp"
import team_02 from "../../assets/image/team-02.webp"
import team_03 from "../../assets/image/team-03.webp"
import team_04 from "../../assets/image/team-04.webp"
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi";
import { MdOutlineAttachMoney, MdPayment } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5"
import { RiSecurePaymentFill } from "react-icons/ri";
export default function About_Us() {

      // aboutUsData
      const aboutUsData = [
            {
                  name: "OUR MISSION",
                  desc: "To deliver exceptional quality products and reliable services that enrich our customers' everyday lives.",
                  imgUrl: radio_icon,
            },
            {
                  name: "OUR VISION",
                  desc: "To become a globally trusted brand known for innovation, integrity, and outstanding customer satisfaction.",
                  imgUrl: vision_icon,
            },
            {
                  name: "YOUR SUPPORT",
                  desc: "We stand by our community with 24/7 dedicated assistance to ensure a seamless shopping experience.",
                  imgUrl: support_icon,
            },
      ]

      // aboutUsItemData
      const aboutUsItemData = [
            {
                  name: "Johnathan Smith",
                  skill: "Chief Executive Officer",
                  imgUrl: team_01,
            },
            {
                  name: "Sarah Jenkins",
                  skill: "Creative Director",
                  imgUrl: team_02,
            },
            {
                  name: "Michael Chang",
                  skill: "Lead Product Designer",
                  imgUrl: team_03,
            },
            {
                  name: "Emily Rodriguez",
                  skill: "Head of Customer Success",
                  imgUrl: team_04,
            },
      ]

      // aboutUsDeveliveryData
      const aboutUsDeveliveryData = [
            {
                  name: "order tracking",
                  desc: "Easily monitor your package status in real-time from dispatch to your doorstep.",
                  icon: <FiMapPin />,
            },
            {
                  name: "90 days return",
                  desc: "Enjoy a hassle-free return policy within 90 days for complete peace of mind.",
                  icon: <IoReturnUpBack />,
            },
            {
                  name: "money guarantee",
                  desc: "100% money-back guarantee if you are not entirely satisfied with your purchase.",
                  icon: <MdOutlineAttachMoney />,
            },
            {
                  name: "flexible payment",
                  desc: "Choose from a wide variety of safe and convenient payment options available.",
                  icon: <MdPayment />,
            },
            {
                  name: "secure checkout",
                  desc: "Advanced encryption technology protects your personal and financial data.",
                  icon: <RiSecurePaymentFill />,
            },
      ]
      return (
            <section className="w-full overflow-hidden py-16 bg-gradient-to-b from-gray-50/50 to-white text-gray-900">
                  <main className="max-w-7xl mx-auto container px-4 space-y-12">

                        {/* Top Section Header */}
                        <div className="flex flex-col space-y-3 text-center max-w-2xl mx-auto">
                              <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold tracking-wider uppercase mx-auto">
                                    Since 1982 Our History
                              </span>
                              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 uppercase">
                                    Pioneering Quality & Trust
                              </h2>
                              <p className="text-sm text-gray-500 font-light">
                                    Discover our journey of dedication, excellence, and the core values that drive us forward every single day.
                              </p>
                        </div>

                        {/* History Grid Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white p-6 md:p-10 rounded-2xl border border-gray-200/80 shadow-sm">

                              {/* Image Box */}
                              <div className="w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                    <img
                                          src={about_img_01}
                                          alt="About Us History"
                                          className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-500"
                                    />
                              </div>

                              {/* Text Info */}
                              <div className="flex flex-col space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900 border-l-4 border-black pl-3">
                                          History About Us
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                                          Founded in 1982, our company has grown from a small local initiative into a trusted name in the industry. For over four decades, we have remained committed to craftsmanship, authenticity, and building long-lasting relationships with our valued customers worldwide.
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                                          Every milestone we have achieved is a testament to our dedicated team and the unwavering trust you have placed in us. We continue to adapt, innovate, and look forward to shaping a brighter future together.
                                    </p>
                                    <div className="pt-2">
                                          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                — Founder & Executive Team
                                          </h5>
                                    </div>
                              </div>
                        </div>

                        {/* Features / Mission / Vision Footer Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                              {
                                    aboutUsData.map((item, index) => {
                                          const { name, imgUrl, desc } = item
                                          return (
                                                <div
                                                      key={index}
                                                      className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-black transition-all duration-300 flex flex-col space-y-4 group"
                                                >
                                                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2.5 border border-gray-100 group-hover:scale-110 transition-transform">
                                                            <img src={imgUrl} alt={name} className="w-full h-full object-contain" />
                                                      </div>
                                                      <div className="space-y-1.5">
                                                            <h4 className="text-base font-bold text-gray-900 tracking-wide uppercase">
                                                                  {name}
                                                            </h4>
                                                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                                                  {desc}
                                                            </p>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>

                        {/* Meet items */}
                        <div className=" flex flex-col space-y-3">
                              <span></span>
                              <h5></h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {
                                          aboutUsItemData.map((member, index) => {
                                                const { name, skill, imgUrl } = member
                                                return (
                                                      <div
                                                            key={index}
                                                            className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 flex flex-col group"
                                                      >
                                                            {/* Image Wrapper with Social Overlay */}
                                                            <div className="relative w-full h-[320px] overflow-hidden bg-gray-100">
                                                                  <img
                                                                        src={imgUrl}
                                                                        alt={name}
                                                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                                  />

                                                                  {/* Social Icons Overlay on Hover */}
                                                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                                                        <a href="" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                                                              <FaLinkedinIn className="text-sm" />
                                                                        </a>
                                                                        <a href="" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                                                              <FaTwitter className="text-sm" />
                                                                        </a>
                                                                        <a href="" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                                                              <FaInstagram className="text-sm" />
                                                                        </a>
                                                                  </div>
                                                            </div>

                                                            {/* Member Details */}
                                                            <div className="p-5 text-center space-y-1">
                                                                  <h3 className="text-base font-bold text-gray-900 tracking-wide">
                                                                        {name}
                                                                  </h3>
                                                                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                                        {skill}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>

                        {/* Delivery Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
                              {
                                    aboutUsDeveliveryData.map((item, index) => {
                                          const { name, desc, icon } = item
                                          return (
                                                <div
                                                      key={index}
                                                      className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
                                                >
                                                      {/* Icon Wrapper */}
                                                      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl text-black border border-gray-100 group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                            {icon}
                                                      </div>

                                                      {/* Text Info */}
                                                      <div className="space-y-1.5">
                                                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                                                                  {name}
                                                            </h3>
                                                            <p className="text-xs text-gray-500 leading-relaxed font-light">
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