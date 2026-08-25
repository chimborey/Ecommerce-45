import { Routes, Route } from "react-router-dom"
import MainLayout from "../Components/Layout/MainLayout"
import AdminLayout from "../Components/Layout/AdminLayout"

export default function AppRouter() {
      return (
            <Routes>
                  {/* ============================ MainLayout ======================================== */}
                  <Route path="/" element={<MainLayout />}></Route>
                  {/* ============================ AdminLayout ======================================== */}
                  <Route path="/:businessTypes" element={<AdminLayout />}></Route>
            </Routes>
      )
}