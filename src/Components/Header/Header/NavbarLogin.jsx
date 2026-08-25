import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function NavbarLogin() {
      return (
            <Link to={'/login'}>
                  <button className="relative p-2.5 rounded-full bg-gray-100 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center group shadow-sm">
                        {/* User/Login Icon */}
                        <FaUser className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  </button>
            </Link>
      );
}