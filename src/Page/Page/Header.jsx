import { useEffect, useState } from "react"
import NavbarShoppingCart from "../../Components/Header/Header/NavbarShoppingCart"
import NavbarWishlist from "../../Components/Header/Header/NavbarWishlist"
import NavbarSearch from "../../Components/Header/Header/NavbarSearch"
import NavbarLogin from "../../Components/Header/Header/NavbarLogin"
import NavbarLogo from "../../Components/Header/Header/NavbarLogo"
import MainCategory from "../../Components/Header/Main/MainCategory"
import MainMenuList from "../../Components/Header/Main/MainMenuList"
import MainDealsToday from "../../Components/Header/Main/MainDealsToday"
import MainSpecailPrice from "../../Components/Header/Main/MainSpecailPrice"
import MainClickMenu from "../../Components/Header/Main/MainClickMenu"

export default function Header() {

      // =================== scrolled ================
      const [scrolled, setScrolled] = useState(false)

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
            <section className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 py-3 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-2.5"
                        : "bg-white border-b border-transparent"
                  }`}>
                  <nav className="flex flex-col container mx-auto max-w-7xl space-y-3 px-4">
                        {/* ========== header =========== */}
                        <article className="flex items-center justify-between">

                              {/* -------- Logo -------- */}
                              <NavbarLogo />

                              {/* -------- Search -------- */}
                              <NavbarSearch />

                              {/* -------- Buttons (Wishlist, Cart, Login) -------- */}
                              <div className="flex items-center gap-3">
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
                        </article>

                        {/* ========== Main (Categories & Menus) =========== */}
                        <div className="hidden md:flex items-center justify-between pt-1">
                              {/* --------------------- Category ------------ */}
                              <div>
                                    <MainCategory />
                              </div>

                              {/* --------------------- MenuList ------------ */}
                              <div>
                                    <MainMenuList />
                              </div>

                              {/* --------------------- Extra Menus ------------ */}
                              <div className="flex items-center gap-3">
                                    <MainDealsToday />
                                    <MainSpecailPrice />
                                    <MainClickMenu />
                              </div>
                        </div>
                  </nav>
            </section>
      )
}