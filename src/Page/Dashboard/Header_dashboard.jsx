import { CiMenuFries } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi"; // បន្ថែម Icon Search
import { Link } from "react-router-dom";

export default function Header_dashboard({ toggleClick }) {
      return (
            <header className="w-full h-16 px-6 flex justify-between items-center border-b bg-white shadow-sm transition-all duration-300 gap-4">

                  {/* 1. Menu Button & Left Section */}
                  <div className="flex items-center gap-3">
                        <button
                              onClick={toggleClick}
                              className="p-2 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none"
                              aria-label="Toggle Menu"
                        >
                              <CiMenuFries className="text-2xl cursor-pointer" />
                        </button>
                  </div>

                  {/* 2. Center Section: Search Bar (ដាក់កន្លែងទំនេរឱ្យមានប្រយោជន៍) */}
                  <div className="hidden sm:flex items-center flex-1 max-w-md mx-4">
                        <div className="relative w-full">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-500">
                                    <FiSearch className="text-lg" />
                              </span>
                              <input
                                    type="text"
                                    placeholder="Search anything..."
                                    className="w-full pl-10 pr-4 py-2 bg-emerald-50/50 border border-emerald-100 rounded-xl text-sm text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                              />
                        </div>
                  </div>

                  {/* 3. Right Side Content */}
                  <div className="flex items-center gap-3">

                        {/* Notification Bell */}
                        <Link to={'notification'}>
                              <button
                                    className="relative p-2 rounded-full text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none"
                                    aria-label="Notifications"
                              >
                                    <IoMdNotificationsOutline className="text-2xl" />
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                              </button>
                        </Link>

                        {/* Divider */}
                        <div className="h-6 w-[1px] bg-emerald-100"></div>

                        {/* User Profile Info */}
                        <div className="flex items-center gap-3 cursor-pointer p-1.5 rounded-xl hover:bg-emerald-50/80 transition-all">
                              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold overflow-hidden border border-emerald-300">
                                    <FaUserCircle className="text-3xl text-emerald-600" />
                              </div>
                              <div className="hidden md:flex flex-col text-left">
                                    <span className="text-xs font-semibold text-emerald-900">John Doe</span>
                                    <span className="text-[10px] font-medium text-emerald-600">Admin</span>
                              </div>
                        </div>

                  </div>
            </header>
      );
}