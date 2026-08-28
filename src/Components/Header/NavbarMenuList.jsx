import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavbarMenuList({ onClose }) {

      const menuList = [
            {
                  name: "home",
                  path: "/",
            },
            {
                  name: "shop",
                  path: "/shop",
            },
            {
                  name: "blog",
                  path: "/blog",
            },
            {
                  name: "page",
                  subItem: [
                        {
                              name: "about us",
                              path: "/about",
                        },
                        {
                              name: "FAQ",
                              path: "/faq",
                        },
                        {
                              name: "contact us",
                              path: "/contact",
                        },
                        {
                              name: "page not found",
                              path: "/page-not-found",
                        },
                  ]
            }
      ];

      const [dropdownOpen, setDropdownOpen] = useState(false);
      const dropdownRef = useRef(null);

      // បិទ Dropdown វិញ ពេលចុចក្រៅពីផ្ទាំង Menu នេះ (សម្រាប់ Desktop)
      useEffect(() => {
            const handleClickOutside = (event) => {
                  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setDropdownOpen(false);
                  }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                  document.removeEventListener("mousedown", handleClickOutside);
            };
      }, []);

      // មុខងារពេលចុចលើ Link នីមួយៗ
      const handleLinkClick = () => {
            setDropdownOpen(false);
            if (onClose) onClose(); // បិទ Mobile Menu ស្វ័យប្រវត្តិពេលចុចលើ Link
      };

      return (
            <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-2 w-full">
                  {menuList.map((menu, index) => (
                        <div
                              key={index}
                              className="relative w-full lg:w-auto"
                              ref={menu.subItem ? dropdownRef : null}
                        >
                              {menu.subItem ? (
                                    /* Dropdown Menu (មាន Timeline, Circle និង Framer Motion) */
                                    <div className="flex flex-col lg:flex-row">
                                          <button
                                                type="button"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                className={`flex items-center justify-between lg:justify-start gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 w-full select-none ${dropdownOpen
                                                      ? "text-emerald-600 bg-emerald-50/60"
                                                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                                                      }`}
                                          >
                                                <span className="capitalize">{menu.name}</span>
                                                <FaChevronDown className={`text-[10px] transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-emerald-600' : 'text-gray-400'}`} />
                                          </button>

                                          {/* Dropdown Box with Framer Motion Animation */}
                                          <AnimatePresence>
                                                {dropdownOpen && (
                                                      <motion.div
                                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                                            className="lg:absolute top-full left-0 mt-2 w-full lg:w-56 bg-white lg:border lg:border-gray-100 lg:shadow-xl shadow-gray-200/50 rounded-2xl p-2 flex flex-col origin-top z-50"
                                                      >
                                                            {/* Timeline Container សម្រាប់ SubMenu */}
                                                            <div className="relative pl-5 flex flex-col gap-1.5">
                                                                  {/* បន្ទាត់ឈរខាងឆ្វេង (Vertical Line) */}
                                                                  <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-emerald-100" />

                                                                  {menu.subItem.map((sub, subIdx) => (
                                                                        <div key={subIdx} className="relative flex items-center">
                                                                              {/* រង្វង់ (Circle) តូចនៅពីមុខ SubMenu នីមួយៗ */}
                                                                              <div className="absolute -left-4 w-2 h-2 rounded-full border-2 border-emerald-500 bg-white transition-all duration-150" />

                                                                              <NavLink
                                                                                    to={sub.path}
                                                                                    onClick={handleLinkClick}
                                                                                    className={({ isActive }) =>
                                                                                          `w-full px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 capitalize ${isActive
                                                                                                ? "text-emerald-600 bg-emerald-50 font-semibold shadow-sm"
                                                                                                : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                                                                                          }`
                                                                                    }
                                                                              >
                                                                                    {sub.name}
                                                                              </NavLink>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      </motion.div>
                                                )}
                                          </AnimatePresence>
                                    </div>
                              ) : (
                                    /* Single Links (Home, Shop, Blog) */
                                    <NavLink
                                          to={menu.path}
                                          onClick={handleLinkClick}
                                          className={({ isActive }) =>
                                                `px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm block capitalize ${isActive
                                                      ? "text-emerald-600 bg-emerald-50/60 font-semibold"
                                                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                                                }`
                                          }
                                    >
                                          {menu.name}
                                    </NavLink>
                              )}
                        </div>
                  ))}
            </nav>
      );
}