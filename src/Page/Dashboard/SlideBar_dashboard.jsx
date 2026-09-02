import { NavLink, useNavigate, useParams } from "react-router-dom"
import { navByRegistry } from "../../Config/Registry"
import { IconRegistry } from "../../Config/IconRegistry"
import { FiLogOut } from "react-icons/fi"

export default function SlideBar_dashboard({ clickMenu, isOpenMobile, setIsOpenMobile }) {
      const { businessTypes } = useParams()
      const navigate = useNavigate()

      const menuList = navByRegistry(businessTypes) || []

      const handleLogout = () => {
            navigate("/login")
      }

      return (
            <section className="flex-shrink-0 h-full relative">
                  <main className={`
                        fixed inset-y-0 left-0 h-screen top-0 z-50 transition-all duration-300 shadow-sm backdrop-blur-sm border-r bg-white
                        md:translate-x-0 md:relative flex flex-col
                        ${clickMenu ? "md:w-20" : "md:w-64"}
                        ${isOpenMobile ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
                  `}>

                        {/* ================================= Logo ================================= */}
                        <div className="h-16 flex items-center px-4 font-bold text-lg text-emerald-800 border-b flex-shrink-0">
                              <span className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${clickMenu ? "md:w-0 md:opacity-0" : "w-auto opacity-100"}`}>
                                    Dashboard
                              </span>
                              {clickMenu && <span className="text-xl mx-auto hidden md:block">DB</span>}
                        </div>

                        {/* ================================= MenuList ================================= */}
                        <div className="flex-1 flex flex-col space-y-2 p-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                              {
                                    menuList.map((item, index) => {
                                          const { name, path } = item
                                          const IconComponent = IconRegistry[item.icon]

                                          return (
                                                <div key={index}>
                                                      <NavLink
                                                            to={`/${businessTypes}/${path}`}
                                                            onClick={() => setIsOpenMobile(false)}
                                                            className={({ isActive }) => `
                            flex items-center gap-3 p-3 rounded-xl transition-all duration-200 font-medium
                            border-l-4 
                            ${clickMenu ? "md:justify-center" : "justify-start"}
                            ${isActive
                                                                        ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200 border-emerald-900 rounded-xl"
                                                                        : "text-emerald-700 hover:bg-emerald-50/80 hover:backdrop-blur-sm border-transparent hover:border-emerald-400"
                                                                  }
                        `}
                                                      >
                                                            {IconComponent && <IconComponent className="text-xl flex-shrink-0" />}

                                                            {/* ប្រើប្រាស់ Transition លាក់/បង្ហាញ Text */}
                                                            <span className={`
                            text-sm truncate transition-all duration-300 overflow-hidden whitespace-nowrap
                            ${clickMenu ? "md:w-0 md:opacity-0 md:pointer-events-none" : "w-auto opacity-100"}
                        `}>
                                                                  {name}
                                                            </span>
                                                      </NavLink>
                                                </div>
                                          )
                                    })
                              }
                        </div>

                        {/* ================================= Logout / Login ================================= */}
                        <div className="p-3 border-t flex-shrink-0">
                              <button
                                    onClick={handleLogout}
                                    className={`
                                          w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 font-medium
                                          text-red-600 hover:bg-red-50 hover:backdrop-blur-sm border-l-4 border-transparent hover:border-red-400
                                          ${clickMenu ? "md:justify-center" : "justify-start"}
                                    `}
                              >
                                    <FiLogOut className="text-xl flex-shrink-0" />
                                    <span className={`
                                          text-sm truncate transition-all duration-300 overflow-hidden whitespace-nowrap
                                          ${clickMenu ? "md:w-0 md:opacity-0 md:pointer-events-none" : "w-auto opacity-100"}
                                    `}>
                                          Logout
                                    </span>
                              </button>
                        </div>
                  </main>
            </section>
      )
}