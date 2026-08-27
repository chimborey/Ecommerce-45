import Home_Banner from "../../Components/Home/Home_Banner";
import Home_Cart from "../../Components/Home/Home_Cart";
import Home_Dairy from "../../Components/Home/Home_Dairy";
import Home_Featured from "../../Components/Home/Home_Featured";
import Home_Hero from "../../Components/Home/Home_Hero";
import Home_Order from "../../Components/Home/Home_Order";
import Home_Service from "../../Components/Home/Home_Service";
import Home_TopProducts from "../../Components/Home/Home_TopProducts";
import Home_TopSelling from "../../Components/Home/Home_TopSelling";
import Home_tst from "../../Components/Home/Home_tst";

export default function Home() {
      return (
            <>
                  {/* =================== Home_Hero ========= */}
                  <Home_Hero />
                  {/* =================== Home_Featured ========= */}
                  <Home_Featured />
                  {/* =================== Home_TopSelling ========= */}
                  <Home_TopSelling />
                  {/* =================== Home_Cart ========= */}
                  <Home_Cart />
                  {/* =================== Home_TopProducts ========= */}
                  <Home_TopProducts />
                  {/* =================== Home_Banner ========= */}
                  <Home_Banner />
                  {/* =================== Home_Dairy ========= */}
                  <Home_Dairy />
                  {/* =================== Home_Order ========= */}
                  <Home_Order />
                  {/* =================== Home_Service ========= */}
                  <Home_Service />
                  {/* =================== Home_Service ========= */}
                  <Home_tst />
            </>
      )
}