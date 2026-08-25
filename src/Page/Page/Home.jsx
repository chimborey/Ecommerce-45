import Home_Featured from "../../Components/Home/Home_Featured";
import Home_Hero from "../../Components/Home/Home_Hero";
import Home_TopSelling from "../../Components/Home/Home_TopSelling";

export default function Home() {
      return (
            <>
                  {/* =================== Home_Hero ========= */}
                  <Home_Hero />
                  {/* =================== Home_Featured ========= */}
                  <Home_Featured />
                  {/* =================== Home_TopSelling ========= */}
                  <Home_TopSelling />
            </>
      )
}