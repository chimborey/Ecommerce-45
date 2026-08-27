import { Routes, Route } from "react-router-dom"
import MainLayout from "../Components/Layout/MainLayout"
import AdminLayout from "../Components/Layout/AdminLayout"
import Home from "../Page/Page/Home"
import Cart from "../Page/Page/Cart"
import ProductsDetais from "../Components/Products/ProductsDetais"
import WishList from "../Page/Page/WishList"

export default function AppRouter() {
      return (
            <Routes>
                  {/* ============================ MainLayout ======================================== */}
                  <Route path="/" element={<MainLayout />}>
                        {/* ------------------ Home ------------------------- */}
                        <Route index element={<Home />} />
                        {/* ------------------ Cart ------------------------- */}
                        <Route path="/products/:id" element={<ProductsDetais />} />
                        {/* ------------------ Cart ------------------------- */}
                        <Route path="/cart" element={<Cart />} />
                        {/* ------------------ WishList ------------------------- */}
                        <Route path="/wishlist" element={<WishList />} />
                  </Route>
                  {/* ============================ AdminLayout ======================================== */}
                  <Route path="/:businessTypes" element={<AdminLayout />}></Route>
            </Routes>
      )
}