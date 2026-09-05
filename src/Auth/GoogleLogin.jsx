
import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
      return (
            <section>
                  {/* Social Login */}
                  < button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium rounded-xl transition-all cursor-pointer text-xs sm:text-sm"
                  >
                        <FcGoogle className="w-5 h-5" />
                        Sign in with Google
                  </button >
            </section>
      )
}