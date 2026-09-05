import { NavLink, useNavigate, useParams } from "react-router-dom"
import { navByRegistry } from "../../Config/Registry"
import { IconRegistry } from "../../Config/IconRegistry"
import { FiLogOut } from "react-icons/fi"
import { FaUserCircle } from "react-icons/fa"

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

                        {/* ================================= Logo & User Profile ================================= */}
                        <div className="h-16 flex items-center px-4 font-bold text-lg text-emerald-800 border-b flex-shrink-0 gap-3 overflow-hidden">
                              {/* Icon Profile */}
                              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold overflow-hidden border border-emerald-300 flex-shrink-0">
                                    <FaUserCircle className="text-4xl text-emerald-600" />
                              </div>

                              {/* Text Info (លាក់ដោយស្វ័យប្រវត្តពេល clickMenu បង្រួម Sidebar) */}
                              <div className={`flex flex-col text-left transition-all duration-300 overflow-hidden whitespace-nowrap ${clickMenu ? "md:w-0 md:opacity-0 md:pointer-events-none" : "w-auto opacity-100"}`}>
                                    <span className="text-sm font-bold text-gray-800 truncate">John Doe</span>
                                    <span className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider">Admin Penal</span>
                              </div>
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