import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import LoginAccount from "../../Auth/LoginAccount"
import CreateAccount from "../../Auth/CreateAccount"
import ForgetPassword from "../../Auth/ForgetPassword"

export default function LoginForm() {
      const [isActive, setIsActive] = useState("login")

      return (
            <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-gray-50 py-10 px-4">
                  <main className="w-full max-w-md mx-auto space-y-4">

                        {/* Back to Home Button */}
                        <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                        >
                              <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-emerald-700 bg-white border border-gray-200 hover:border-emerald-200 px-4 py-2 rounded-xl shadow-sm transition-all cursor-pointer"
                              >
                                    <FiArrowLeft className="w-4 h-4" />
                                    Back to Home
                              </Link>
                        </motion.div>

                        {/* Main Container Card */}
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                              className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden"
                        >

                              {/* Tab Switcher (លាក់ Tab នេះចោលបើមិនចង់ឱ្យវាបង្ហាញជាប៊ូតុងខាងលើ ប៉ុន្តែលៃលកទុកកន្លែងឱ្យ tab ដំណើរការ) */}
                              {isActive !== "forget" && (
                                    <div className="flex p-1.5 bg-gray-100 rounded-2xl border border-gray-200 shadow-inner relative">
                                          <button
                                                onClick={() => setIsActive("login")}
                                                className={`flex-1 py-2.5 text-[11px] sm:text-xs font-semibold rounded-xl transition-colors relative z-10 cursor-pointer text-center ${isActive === "login" ? "text-emerald-700" : "text-gray-500 hover:text-gray-800"}`}
                                          >
                                                Sign In
                                          </button>
                                          <button
                                                onClick={() => setIsActive("register")}
                                                className={`flex-1 py-2.5 text-[11px] sm:text-xs font-semibold rounded-xl transition-colors relative z-10 cursor-pointer text-center ${isActive === "register" ? "text-emerald-700" : "text-gray-500 hover:text-gray-800"}`}
                                          >
                                                Register
                                          </button>

                                          <motion.div
                                                className="absolute top-1.5 bottom-1.5 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm z-0"
                                                animate={{
                                                      left: isActive === "login" ? "4px" : "calc(50% + 2px)"
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          />
                                    </div>
                              )}

                              {/* Form Content with Smooth Transition */}
                              <div className="relative min-h-[350px]">
                                    <AnimatePresence mode="wait">
                                          {isActive === "login" && (
                                                <motion.div
                                                      key="login"
                                                      initial={{ opacity: 0, x: -20 }}
                                                      animate={{ opacity: 1, x: 0 }}
                                                      exit={{ opacity: 0, x: 20 }}
                                                      transition={{ duration: 0.3 }}
                                                >
                                                      {/* បញ្ជូន setActive ទៅ LoginAccount */}
                                                      <LoginAccount setActive={setIsActive} />
                                                </motion.div>
                                          )}

                                          {isActive === "register" && (
                                                <motion.div
                                                      key="register"
                                                      initial={{ opacity: 0, x: 20 }}
                                                      animate={{ opacity: 1, x: 0 }}
                                                      exit={{ opacity: 0, x: -20 }}
                                                      transition={{ duration: 0.3 }}
                                                >
                                                      <CreateAccount />
                                                </motion.div>
                                          )}

                                          {isActive === "forget" && (
                                                <motion.div
                                                      key="forget"
                                                      initial={{ opacity: 0, x: 20 }}
                                                      animate={{ opacity: 1, x: 0 }}
                                                      exit={{ opacity: 0, x: -20 }}
                                                      transition={{ duration: 0.3 }}
                                                >
                                                      <ForgetPassword />
                                                </motion.div>
                                          )}
                                    </AnimatePresence>
                              </div>

                        </motion.div>

                  </main>
            </section>
      )
}