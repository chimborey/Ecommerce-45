import { Routes, Route } from "react-router-dom"
import MainLayout from "../Components/Layout/MainLayout"
import AdminLayout from "../Components/Layout/AdminLayout"
import Home from "../Page/Page/Home"
import Cart from "../Page/Page/Cart"

export default function AppRouter() {
      return (
            <Routes>
                  {/* ============================ MainLayout ======================================== */}
                  <Route path="/" element={<MainLayout />}>
                        {/* ------------------ Home ------------------------- */}
                        <Route index element={<Home />} />
                        {/* ------------------ Cart ------------------------- */}
                        <Route path="/cart" element={<Cart />} />
                  </Route>
                  {/* ============================ AdminLayout ======================================== */}
                  <Route path="/:businessTypes" element={<AdminLayout />}></Route>
            </Routes>
      )
}