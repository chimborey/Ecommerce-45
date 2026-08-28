import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import { IoCallSharp, IoMailSharp, IoHelpCircleOutline } from "react-icons/io5"

export default function FAQ_Question() {
      // faqData (Shopping / General)
      const faqData = [
            {
                  question: "HOW CAN I CONTACT YOU?",
                  answer: "You can reach out to us via phone or email listed on the left. Our support team is available Monday through Friday.",
            },
            {
                  question: "DO YOU HAVE RESTOCK NOTIFICATIONS?",
                  answer: "Yes! You can sign up on any sold-out product page to receive an email alert the moment it's back in stock.",
            },
            {
                  question: "HOW DO I KNOW WHAT SIZE I AM?",
                  answer: "We provide a detailed size guide link on every product page to help you measure and find your perfect fit.",
            },
            {
                  question: "HOW OFTEN DO YOU RESTOCK ITEMS?",
                  answer: "Popular items are typically restocked every 2 to 4 weeks. Sign up for notifications to stay updated.",
            },
            {
                  question: "WHERE ARE YOUR PRODUCTS MADE?",
                  answer: "All our products are ethically manufactured in certified partner facilities globally, ensuring top quality.",
            },
      ]

      // returnData
      const returnData = [
            {
                  question: "CAN I RETURN OR EXCHANGE SOMETHING IN STORE?",
                  answer: "Yes, you can return or exchange any online purchase at our physical retail stores within 30 days with a receipt.",
            },
            {
                  question: "HOW DO I GET A SHIPPING LABEL?",
                  answer: "You can generate a prepaid return label by logging into your account and heading to your order history.",
            },
            {
                  question: "WHAT DO I DO IF I RECEIVE A DEFECTIVE ITEM?",
                  answer: "Please contact our support team immediately with photos of the defect, and we will send a replacement right away.",
            },
      ]

      // paymentData
      const paymentData = [
            {
                  question: "PELLENTESQUE HABITANT MORBI TRISTIQUE SENECTUS ET NETUS?",
                  answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
            },
            {
                  question: "HOW MUCH IS SHIPPING AND HOW LONG WILL IT TAKE?",
                  answer: "Standard shipping is free on orders over $50 and typically takes 3-5 business days to arrive.",
            },
            {
                  question: "HOW LONG WILL IT TAKE TO GET MY PACKAGE?",
                  answer: "Packages generally process within 24-48 hours before being shipped out via our courier services.",
            },
            {
                  question: "BRANDING IS SIMPLY A MORE EFFICIENT WAY TO SELL THINGS?",
                  answer: "Effective branding builds trust and helps customers easily recognize the value you deliver.",
            },
      ]

      const [openKey, setOpenKey] = useState(null)

      const toggleItem = (category, index) => {
            const key = `${category}-${index}`
            setOpenKey(openKey === key ? null : key)
      }

      // Modern Accordion Renderer (Font size adjusted to text-xs / text-sm)
      const renderAccordionList = (data, categoryName) => (
            <div className="space-y-2.5 w-full">
                  {data.map((item, index) => {
                        const { question, answer } = item
                        const currentKey = `${categoryName}-${index}`
                        const isOpen = openKey === currentKey

                        return (
                              <div
                                    key={index}
                                    className={`w-full overflow-hidden rounded-xl border transition-all duration-300 ${isOpen
                                                ? "border-black bg-white shadow-sm"
                                                : "border-gray-200/80 bg-white hover:border-gray-300 hover:bg-gray-50/50"
                                          }`}
                              >
                                    <button
                                          onClick={() => toggleItem(categoryName, index)}
                                          className="w-full flex items-center justify-between p-4 text-left font-medium text-xs md:text-sm text-gray-900 transition-colors"
                                    >
                                          <span className="flex items-center gap-2.5">
                                                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isOpen ? "bg-black" : "bg-gray-300"}`} />
                                                {question}
                                          </span>
                                          <motion.span
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className={`text-base p-1 rounded-full transition-colors ${isOpen ? "bg-black text-white" : "bg-gray-100 text-gray-600"}`}
                                          >
                                                <IoIosArrowDown />
                                          </motion.span>
                                    </button>

                                    <AnimatePresence>
                                          {isOpen && (
                                                <motion.div
                                                      initial={{ opacity: 0, height: 0 }}
                                                      animate={{ opacity: 1, height: "auto" }}
                                                      exit={{ opacity: 0, height: 0 }}
                                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                      <div className="px-5 pb-4 pt-1 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100/80">
                                                            <p>{answer || "Detailed information coming soon."}</p>
                                                      </div>
                                                </motion.div>
                                          )}
                                    </AnimatePresence>
                              </div>
                        )
                  })}
            </div>
      )

      return (
            <section className="w-full overflow-hidden py-16 bg-gradient-to-b from-gray-50/50 to-white text-gray-900">
                  <main className="container mx-auto md:max-w-7xl">
                        <div className="flex flex-col lg:flex-row gap-10 items-start">

                              {/* Left Column: Sticky Info & Contact Box */}
                              <div className="w-full lg:w-[330px] lg:sticky lg:top-10 flex flex-col space-y-6 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                                    <div>
                                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 text-[11px] font-semibold tracking-wider uppercase mb-2.5">
                                                <IoHelpCircleOutline className="text-sm" /> Support Center
                                          </div>
                                          <h3 className="text-xl font-bold tracking-tight text-gray-900">Most popular questions</h3>
                                          <p className="text-xs text-gray-500 mt-1.5">Find quick answers regarding shipping, returns, and payments.</p>
                                    </div>

                                    <div className="space-y-3 pt-3 border-t border-gray-100">
                                          <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">Need direct help?</span>

                                          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100/85 transition-colors cursor-pointer group">
                                                <div className="p-2 rounded-lg bg-white shadow-sm text-black group-hover:scale-105 transition-transform">
                                                      <IoCallSharp className="text-base" />
                                                </div>
                                                <div>
                                                      <p className="text-[11px] text-gray-400 font-medium">Call Us Anytime</p>
                                                      <p className="text-xs font-semibold text-gray-900">+123 456 7890</p>
                                                </div>
                                          </div>

                                          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100/85 transition-colors cursor-pointer group">
                                                <div className="p-2 rounded-lg bg-white shadow-sm text-black group-hover:scale-105 transition-transform">
                                                      <IoMailSharp className="text-base" />
                                                </div>
                                                <div>
                                                      <p className="text-[11px] text-gray-400 font-medium">Email Support</p>
                                                      <p className="text-xs font-semibold text-gray-900">e-45@gmail.com</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100 text-[11px] font-bold text-gray-500">
                                          <span className="uppercase text-gray-400 tracking-wider">Quick Links</span>
                                          <a href="#account" className="hover:text-black transition-colors">MY ACCOUNT</a>
                                          <a href="#policies" className="hover:text-black transition-colors">COMPANY POLICIES</a>
                                          <a href="#payments" className="hover:text-black transition-colors">PAYMENT OPTIONS</a>
                                          <a href="#terms" className="hover:text-black transition-colors">TERMS AND CONDITIONS</a>
                                    </div>
                              </div>

                              {/* Right Column: FAQ Sections */}
                              <div className="flex-1 flex flex-col space-y-10 w-full">

                                    {/* Section 1: Shopping Information */}
                                    <div className="space-y-4">
                                          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-l-3 border-black pl-2.5">
                                                Shopping informations
                                          </h4>
                                          {renderAccordionList(faqData, "faq")}
                                    </div>

                                    {/* Section 2: Return Information */}
                                    <div className="space-y-4">
                                          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-l-3 border-black pl-2.5">
                                                Returns & Exchanges
                                          </h4>
                                          {renderAccordionList(returnData, "return")}
                                    </div>

                                    {/* Section 3: Payment Information */}
                                    <div className="space-y-4">
                                          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-l-3 border-black pl-2.5">
                                                Payment informations
                                          </h4>
                                          {renderAccordionList(paymentData, "payment")}
                                    </div>

                              </div>

                        </div>
                  </main>
            </section>
      )
}