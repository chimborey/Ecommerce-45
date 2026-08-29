import OverviewsLineChart from "../../../ReChart/Overviews/OverviewsLineChart";
import SalesByCategoryChart from "../../../ReChart/Overviews/SalesByCategoryChart";
import Overviews_Cart from "../Children/Overviews_Cart";
import Overviews_Header from "./Overviews_Header";


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
            </section>
      )
}