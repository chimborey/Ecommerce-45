import { Routes, Route } from "react-router-dom"
import MainLayout from "../Components/Layout/MainLayout"
import AdminLayout from "../Components/Layout/AdminLayout"
import Home from "../Page/Page/Home"

export default function AppRouter() {
      return (
            <Routes>
                  {/* ============================ MainLayout ======================================== */}
                  <Route path="/" element={<MainLayout />}>
                        {/* ------------------ Home ------------------------- */}
                        <Route index element={<Home />} />
                  </Route>
                  {/* ============================ AdminLayout ======================================== */}
                  <Route path="/:businessTypes" element={<AdminLayout />}></Route>
            </Routes>
      )
}