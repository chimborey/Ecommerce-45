import { useEffect, useRef, useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import NavbarShoppingCart from "../../Components/Header/NavbarShoppingCart"
import NavbarWishlist from "../../Components/Header/NavbarWishlist"
import NavbarSearch from "../../Components/Header/NavbarSearch"
import NavbarLogin from "../../Components/Header/NavbarLogin"
import NavbarLogo from "../../Components/Header/NavbarLogo"
import NavbarMenuList from "../../Components/Header/NavbarMenuList"

export default function Header() {
      // =================== scrolled ================
      const [scrolled, setScrolled] = useState(false)
      // =================== mobile menu state ================
      const [isOpen, setIsOpen] = useState(false)

      // បង្កើត ref សម្រាប់ចាប់ផ្ទាំង Mobile Menu និងប៊ូតុង Hamburger
      const menuRef = useRef(null)
      const buttonRef = useRef(null)

      useEffect(() => {
            const handleRef = (e) => {
                  // បិទបើចុចក្រៅ Menu និងក្រៅប៊ូតុង Hamburger
                  if (
                        isOpen &&
                        menuRef.current &&
                        !menuRef.current.contains(e.target) &&
                        buttonRef.current &&
                        !buttonRef.current.contains(e.target)
                  ) {
                        setIsOpen(false)
                  }
            }
            document.addEventListener("mousedown", handleRef);
            return () => {
                  document.removeEventListener("mousedown", handleRef);
            };
      }, [isOpen])

      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 50) {
                        setScrolled(true)
                  } else {
                        setScrolled(false)
                  }
            }
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
      }, [])

      return (
            <section ref={menuRef} className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
                  ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2.5"
                  : "bg-white border-b border-gray-100 py-3.5"
                  }`}>
                  <nav ref={menuRef} className="flex items-center justify-between h-14 mx-auto md:max-w-7xl container px-4 sm:px-6">

                        {/* -------- 1. Logo -------- */}
                        <div className="flex-shrink-0">
                              <NavbarLogo />
                        </div>

                        {/* -------- 2. MenuList (Desktop) -------- */}
                        <div className="hidden lg:flex items-center">
                              <NavbarMenuList />
                        </div>

                        {/* -------- 3. Search & Actions (Desktop & Tablet) -------- */}
                        <div className="flex items-center gap-3">
                              {/* Search Component (Desktop/Tablet) */}
                              <div className="hidden lg:block">
                                    <NavbarSearch />
                              </div>

                              {/* Action Buttons (Wishlist, Cart, Login) */}
                              <div className="flex items-center gap-2">
                                    <div className="hidden md:block">
                                          <NavbarWishlist />
                                    </div>
                                    <div className="hidden md:block">
                                          <NavbarShoppingCart />
                                    </div>
                                    <div className="hidden md:block">
                                          <NavbarLogin />
                                    </div>
                              </div>

                              {/* -------- Mobile Menu Main Button (Right Side Only) -------- */}
                              <div className="flex items-center lg:hidden">
                                    <button
                                          ref={buttonRef}
                                          onClick={() => setIsOpen(!isOpen)}
                                          className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2 rounded-lg bg-gray-50 border border-gray-200"
                                    >
                                          {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
                                    </button>
                              </div>
                        </div>
                  </nav>

                  {/* =================== Mobile Menu Dropdown / Drawer =================== */}
                  <div
                        ref={menuRef}
                        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 h-screen overflow-y-auto ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
                              }`}
                  >
                        <div className="flex flex-col space-y-3 py-7 px-3">

                              {/* 🔍 Search Component សម្រាប់ Mobile */}
                              <div className="w-full">
                                    <NavbarSearch />
                              </div>

                              {/* Menu List items */}
                              <div className="flex flex-col space-y-2 py-2 border-t border-gray-100">
                                    <NavbarMenuList onClose={() => setIsOpen(false)} />
                              </div>

                              {/* Additional Action Buttons for Mobile (Wishlist, Cart, Login) */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                          <NavbarWishlist />
                                          <span className="text-xs text-gray-500 font-medium">Wishlist</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                          <div className="flex items-center gap-2">
                                                <NavbarShoppingCart />
                                                <span className="text-xs text-gray-500 font-medium">Cart</span>
                                          </div>
                                          <NavbarLogin />
                                    </div>
                              </div>

                              {/* 🗺️ Google Map Component សម្រាប់ Mobile */}
                              <div className="w-full pt-3 border-t border-gray-100">
                                    <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                          <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237774.13808243434!2d104.89018675!3d11.57936425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e1!3m2!1sen!2skh!4v1787933263881!5m2!1sen!2skh"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                          ></iframe>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      )
}