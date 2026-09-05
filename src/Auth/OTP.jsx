import { useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function OTP() {
      const length = 9;
      const [otp, setOtp] = useState(new Array(length).fill(""));
      const [showOtp, setShowOtp] = useState(true); // true = មើលឃើញ, false = លាក់
      const inputRefs = useRef([]);

      const handleChange = (element, index) => {
            const value = element.value;
            // អនុញ្ញាតឱ្យវាយបញ្ចូលទាំងអក្សរ និងលេខ (A-Z, a-z, 0-9)
            if (/[^a-zA-Z0-9]/.test(value)) return;

            const newOtp = [...otp];
            // យកតែតួអក្សរចុងក្រោយគេបង្អស់ ប្រសិនបើមានការ Paste ឬវាយបញ្ចូលជាន់គ្នា
            newOtp[index] = value.substring(value.length - 1);
            setOtp(newOtp);

            // ឆ្ពោះទៅប្រអប់បន្ទាប់ស្វ័យប្រវត្តិកាលណាមានតម្លៃ
            if (value && index < length - 1) {
                  inputRefs.current[index + 1].focus();
            }
      };

      const handleKeyDown = (e, index) => {
            // ថយក្រោយទៅប្រអប់មុនពេលចុច Backspace
            if (e.key === "Backspace") {
                  if (!otp[index] && index > 0) {
                        inputRefs.current[index - 1].focus();
                  } else {
                        const newOtp = [...otp];
                        newOtp[index] = "";
                        setOtp(newOtp);
                  }
            }
      };

      const handlePaste = (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData("text").trim().slice(0, length);
            if (!/^[a-zA-Z0-9]+$/.test(pasteData)) return;

            const newOtp = [...otp];
            pasteData.split("").forEach((char, i) => {
                  if (i < length) newOtp[i] = char;
            });
            setOtp(newOtp);

            // ផ្ដោតទៅប្រអប់បន្ទាប់ចុងក្រោយ
            const nextIndex = Math.min(pasteData.length, length - 1);
            inputRefs.current[nextIndex].focus();
      };

      return (
            <div className="w-full max-w-xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between">
                        <div className="space-y-1">
                              <h2 className="text-xl font-bold text-gray-800">Security Verification</h2>
                              <p className="text-xs text-gray-400">Please enter the 9-character code sent to your device.</p>
                        </div>

                        {/* ប៊ូតុង មើល/លាក់ អក្សរ */}
                        <button
                              type="button"
                              onClick={() => setShowOtp(!showOtp)}
                              className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                        >
                              {showOtp ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                              <span>{showOtp ? "Hide" : "Show"}</span>
                        </button>
                  </div>

                  {/* ប្រអប់ OTP ទាំង 9 */}
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                        {otp.map((data, index) => (
                              <input
                                    key={index}
                                    type={showOtp ? "text" : "password"}
                                    maxLength={1}
                                    value={data}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={handlePaste}
                                    className="w-8 h-10 sm:w-10 sm:h-12 text-center text-sm sm:text-base font-bold bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                              />
                        ))}
                  </div>

                  {/* ប៊ូតុងបញ្ជាក់ */}
                  <button
                        type="button"
                        onClick={() => alert(`Entered Code: ${otp.join("")}`)}
                        className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-200 transition-all cursor-pointer text-sm"
                  >
                        Verify Code
                  </button>
            </div>
      );
}