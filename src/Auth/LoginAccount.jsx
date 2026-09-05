import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import GoogleLogin from "./GoogleLogin";

export default function LoginAccount({ setActive }) {
      const [showPassword, setShowPassword] = useState(false);

      return (
            <div className="">
                  <div className="space-y-6">

                        {/* Header Title */}
                        <div className="text-center space-y-1">
                              <h2 className="text-2xl font-bold text-gray-800">Welcome Back! 👋</h2>
                              <p className="text-xs text-gray-400">Please enter your details to sign in.</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

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

                              {/* Remember & Forgot Password */}
                              <div className="flex items-center justify-between text-xs pt-1">
                                    <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                                          <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                          Remember me
                                    </label>

                                    {/* 🛠️ កែត្រង់នេះ៖ ប្តូរពី a tag មកជា button ដែលមាន onClick ដើម្បីប្ដូរ Tab */}
                                    <button
                                          type="button"
                                          onClick={() => setActive("forget")}
                                          className="font-medium text-emerald-600 hover:underline cursor-pointer bg-transparent border-none p-0"
                                    >
                                          Forgot password?
                                    </button>
                              </div>

                              {/* Submit Button */}
                              <button
                                    type="submit"
                                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 transition-all cursor-pointer text-sm"
                              >
                                    Sign In
                              </button>

                              {/* Divider */}
                              <div className="relative flex py-2 items-center">
                                    <div className="flex-grow border-t border-gray-100"></div>
                                    <span className="flex-shrink mx-4 text-gray-400 text-[10px] uppercase tracking-wider">Or continue with</span>
                                    <div className="flex-grow border-t border-gray-100"></div>
                              </div>

                              <GoogleLogin />
                        </form>

                  </div>
            </div>
      );
}