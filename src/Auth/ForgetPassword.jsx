import { useState } from "react";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom"; // ប្ដូរជា <a> ប្រសិនបើមិនទាន់ប្រើ React Router

export default function ForgetPassword() {
      const [isSubmitted, setIsSubmitted] = useState(false);

      const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmitted(true);
      };

      return (
            <div className="space-y-6">
                  {/* Header Title */}
                  <div className="text-center space-y-1">
                        <h2 className="text-2xl font-bold text-gray-800">Forgot Password? 🔑</h2>
                        <p className="text-xs text-gray-400">
                              Enter your email address and we'll send you instructions to reset your password.
                        </p>
                  </div>

                  {!isSubmitted ? (
                        /* Reset Form */
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div className="flex flex-col space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600">User Email</label>
                                    <div className="relative">
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                                                <FiMail className="w-4 h-4" />
                                          </span>
                                          <input
                                                type="email"
                                                required
                                                placeholder="name@example.com"
                                                className="w-full px-3.5 py-2.5 pl-10 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                          />
                                    </div>
                              </div>

                              <button
                                    type="submit"
                                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 transition-all cursor-pointer text-sm mt-2"
                              >
                                    Send Reset Instructions
                              </button>
                        </form>
                  ) : (
                        /* Success Message State */
                        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-center space-y-2">
                              <p className="text-xs sm:text-sm font-medium text-emerald-800">
                                    📩 Check your inbox! We have sent password reset instructions to your email.
                              </p>
                        </div>
                  )}

                  {/* Back to Login link */}
                  <div className="text-center">
                        <Link
                              to="/login"
                              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-emerald-700 transition-colors"
                        >
                              <FiArrowLeft className="w-3.5 h-3.5" />
                              Back to Sign In
                        </Link>
                  </div>
            </div>
      );
}