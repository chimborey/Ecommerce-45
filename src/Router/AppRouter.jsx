import { Routes, Route } from "react-router-dom"
import MainLayout from "../Components/Layout/MainLayout"
import AdminLayout from "../Components/Layout/AdminLayout"
import Home from "../Page/Page/Home"
import Cart from "../Page/Page/Cart"
import ProductsDetais from "../Components/Details/ProductsDetais"
import WishList from "../Page/Page/WishList"
import FAQ from "../Page/Page/FAQ"
import Contact from "../Page/Page/Contact"
import NotFound from "../Page/Page/NotFound"
import About from "../Page/Page/About"
import Blog from "../Page/Page/Blog"
import Blog_Details from "../Page/Page/Blog_Details"
import Shop from "../Page/Page/Shop"
import LoginForm from "../Page/Page/LoginForm"
import ShopDetails from "../Components/Details/ShopDetails"

export default function AppRouter() {
      return (
            <Routes>

                  {/* ============================ MainLayout ======================================== */}
                  <Route path="/" element={<MainLayout />}>
                        {/* ------------------ Home ------------------------- */}
                        <Route index element={<Home />} />
                        {/* ------------------ Shop ------------------------- */}
                        <Route path="/shop" element={<Shop />} />
                        {/* ------------------ ShopDetails ------------------------- */}
                        <Route path="/shop/:id" element={<ShopDetails />} />
                        {/* ------------------ Blog ------------------------- */}
                        <Route path="/blog" element={<Blog />} />
                        {/* ------------------ Blog_Details ------------------------- */}
                        <Route path="/blogDetails/:id" element={<Blog_Details />} />
                        {/* ------------------ Contact ------------------------- */}
                        <Route path="/contact" element={<Contact />} />
                        {/* ------------------ Contact ------------------------- */}
                        <Route path="/about" element={<About />} />
                        {/* ------------------ FAQ ------------------------- */}
                        <Route path="/faq" element={<FAQ />} />
                        {/* ------------------ FAQ ------------------------- */}
                        <Route path="/page-not-found" element={<NotFound />} />
                        {/* ------------------ Cart ------------------------- */}
                        <Route path="/products/:id" element={<ProductsDetais />} />
                        {/* ------------------ Cart ------------------------- */}
                        <Route path="/cart" element={<Cart />} />
                        {/* ------------------ WishList ------------------------- */}
                        <Route path="/wishlist" element={<WishList />} />
                  </Route>

                  {/* ============================ AdminLayout ======================================== */}
                  <Route path="/:businessTypes" element={<AdminLayout />}></Route>

                  {/* ============================ Login ======================================== */}
                  <Route path="/login" element={<LoginForm />}></Route>
            </Routes>
      )
}