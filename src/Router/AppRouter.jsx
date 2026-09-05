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
import Overviews from "../Modules/Overviews/Parents/Overviews"
import Order from "../Modules/Order/Parents/Order"
import Products from "../Modules/Products/Parents/Products"
import Inventory from "../Modules/Inventorys/Parents/Inventory"
import Customer from "../Modules/Customers/Parents/Customer"
import Support from "../Modules/Support/Parents/Support"
import Setting from "../Modules/Settinged/Parents/Setting"
import Notification from "../Modules/Notification/Parents/Notification"
import Receipt from "../Modules/Receipt/Parent/Receipt"
import Security from "../Modules/Security/Parents/Security"
import Integrations from "../Modules/Integrations/Parents/Integrations"


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
                  <Route path="/:businessTypes" element={<AdminLayout />}>
                        {/* ------------------ Overviews ------------------------- */}
                        <Route index element={<Overviews />} />
                        {/* ------------------ Overviews ------------------------- */}
                        <Route path="overviews" element={<Overviews />} />
                        {/* ------------------ Order ------------------------- */}
                        <Route path="order" element={<Order />} />
                        {/* ------------------ Products ------------------------- */}
                        <Route path="products" element={<Products />} />
                        {/* ------------------ Inventory ------------------------- */}
                        <Route path="inventory" element={<Inventory />} />
                        {/* ------------------ Customer ------------------------- */}
                        <Route path="customer" element={<Customer />} />
                        {/* ------------------ Support ------------------------- */}
                        <Route path="support" element={<Support />} />
                        {/* ------------------ Setting ------------------------- */}
                        <Route path="setting" element={<Setting />} />
                        {/* ------------------ Notification ------------------------- */}
                        <Route path="notification" element={<Notification />} />
                        {/* ------------------ Receipt ------------------------- */}
                        <Route path="receipt" element={<Receipt />} />
                        {/* ------------------ Security ------------------------- */}
                        <Route path="integrations" element={<Integrations />} />
                        {/* ------------------ Security ------------------------- */}
                        <Route path="security" element={<Security />} />
                  </Route>

                  {/* ============================ Login ======================================== */}
                  <Route path="/login" element={<LoginForm />}></Route>
            </Routes>
      )
}