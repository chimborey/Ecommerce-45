import OverviewsLineChart from "../../../ReChart/Overviews/OverviewsLineChart";
import SalesByCategoryChart from "../../../ReChart/Overviews/SalesByCategoryChart";
import Overviews_AIInsight from "../Children/Overviews_AIInsight";
import Overviews_Cart from "../Children/Overviews_Cart";
import Overviews_Country from "../Children/Overviews_Country";
import Overviews_Header from "../Children/Overviews_Header";
import Overviews_Inverntory from "../Children/Overviews_Inverntory";
import Overviews_LowStock from "../Children/Overviews_LowStock";
import Overviews_RecentOrder from "../Children/Overviews_RecentOrder";
import Overviews_System from "../Children/Overviews_System";
import Overviews_TopSelling from "../Children/Overviews_TopSelling";


export default function Overviews() {
      return (
            <section className=" flex flex-col space-y-7 overflow-hidden">

                  {/* ============================= Overviews_Header ================== */}
                  <Overviews_Header />

                  {/* ============================= Overviews_Cart ================== */}
                  <Overviews_Cart />

                  {/* ============================= Revenue ================== */}
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                        <OverviewsLineChart />
                        <SalesByCategoryChart />
                  </div>

                  {/* ============================= Overviews_RecentOrder ================== */}
                  <Overviews_RecentOrder />

                  {/* ============================= Overviews_TopSelling & Overviews_Inverntory ================== */}
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <Overviews_TopSelling />
                        <Overviews_Inverntory />
                  </div>

                  {/* ============================= Overviews_LowStock & Overviews_AIInsight ================== */}
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <Overviews_LowStock />
                        <Overviews_AIInsight />
                  </div>

                  {/* ============================= Overviews_System ================== */}
                  <Overviews_System />

                  {/* ============================= Overviews_Country ================== */}
                  <Overviews_Country />
            </section>
      )
}