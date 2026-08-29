import Header_dashboard from "../../Page/Dashboard/Header_dashboard";
import { Outlet } from "react-router-dom";
import SlideBar_dashboard from "../../Page/Dashboard/SlideBar_dashboard";
import { useState } from "react";


export default function AdminLayout() {

      const [clickMenu, setClickMenu] = useState(false)
      const [isOpenMobile, setIsOpenMobile] = useState(false)
      const toggleClick = () => {
            setClickMenu(!clickMenu)
            setIsOpenMobile(!isOpenMobile)
      }
      return (
            <section className=" w-full h-screen overflow-hidden flex flex-col relative">
                  <main className=" w-full h-full flex relative">

                        {/* ============================= SlideBar_dashboard ============================= */}
                        <SlideBar_dashboard
                              clickMenu={clickMenu}
                              isOpenMobile={isOpenMobile}
                              setIsOpenMobile={setIsOpenMobile}
                        />

                        {/* ============================= Overlay ============================= */}
                        {
                              isOpenMobile && (
                                    <div
                                          className=" absolute inset-0 bg-black/50 md:hidden z-40"
                                          onClick={() => setIsOpenMobile(false)}
                                    />
                              )
                        }

                        {/* ============================= MainContain ============================= */}
                        <div className="flex flex-1 flex-col overflow-hidden">

                              {/* ------------------------- Header_Dashboard ------------------------- */}
                              <Header_dashboard
                                    toggleClick={toggleClick}
                              />

                              {/* ------------------------- Outlet ------------------------- */}
                              <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
                                    <Outlet />
                              </div>

                        </div>
                  </main>
            </section>
      )
}