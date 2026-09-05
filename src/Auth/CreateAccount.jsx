import { useState } from "react";
import { FiUser, FiMail, FiLock, FiPhone, FiMapPin, FiGlobe, FiEye, FiEyeOff } from "react-icons/fi";

import GoogleLogin from "./GoogleLogin";

export default function CreateAccount() {
      const [showPassword, setShowPassword] = useState(false);

      return (
            <div className="space-y-6">
                  {/* Header Title */}
                  <div className="text-center space-y-1">
                        <h2 className="text-2xl font-bold text-gray-800">Create Account 🚀</h2>
                        <p className="text-xs text-gray-400">Please fill in the details to get started.</p>
                  </div>

                  {/* Register Form */}
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

                        {/* Row 1: Full Name & User Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Full Name */}
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Full Name</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiUser className="w-4 h-4" />
                                          </span>
                                          <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-3.5 py-2.5 pl-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                    </div>
                              </div>

                              {/* User Email */}
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">User Email</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiMail className="w-4 h-4" />
                                          </span>
                                          <input
                                                type="email"
                                                placeholder="name@example.com"
                                                className="w-full px-3.5 py-2.5 pl-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                    </div>
                              </div>
                        </div>

                        {/* Row 2: User Password & Phone Number */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* User Password */}
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">User Password</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiLock className="w-4 h-4" />
                                          </span>
                                          <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••"
                                                className="w-full px-3.5 py-2.5 pl-10 pr-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                          <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 hover:text-gray-600 cursor-pointer"
                                          >
                                                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                                          </button>
                                    </div>
                              </div>

                              {/* Phone Number */}
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Phone Number</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiPhone className="w-4 h-4" />
                                          </span>
                                          <input
                                                type="tel"
                                                placeholder="+855 12 345 678"
                                                className="w-full px-3.5 py-2.5 pl-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                    </div>
                              </div>
                        </div>

                        {/* Row 3: Address & Country */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Address */}
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Address</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiMapPin className="w-4 h-4" />
                                          </span>
                                          <input
                                                type="text"
                                                placeholder="Phnom Penh"
                                                className="w-full px-3.5 py-2.5 pl-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                    </div>
                              </div>

                              {/* Country */}
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">Country</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiGlobe className="w-4 h-4" />
                                          </span>
                                          <input
                                                type="text"
                                                placeholder="Cambodia"
                                                className="w-full px-3.5 py-2.5 pl-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                    </div>
                              </div>
                        </div>

                        {/* Submit Button */}
                        <button
                              type="submit"
                              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 transition-all cursor-pointer text-sm mt-2"
                        >
                              Create Account
                        </button>

                        {/* Divider */}
                        <div className="relative flex py-2 items-center">
                              <div className="flex-grow border-t border-gray-100"></div>
                              <span className="flex-shrink mx-4 text-gray-400 text-[10px] uppercase tracking-wider">Or continue with</span>
                              <div className="flex-grow border-t border-gray-100"></div>
                        </div>

                        {/* Social Signup */}
                        <>
                              <GoogleLogin />
                        </>
                  </form>
            </div>
      );
}