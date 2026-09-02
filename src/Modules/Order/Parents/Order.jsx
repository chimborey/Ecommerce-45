import Order_KPICard from "../Children/Oder_KPICard";
import Order_Header from "../Children/Order_Header";
import Order_Table from "../Children/Order_Table";



export default function Order() {
      return (
            <section className=" w-full overflow-hidden flex flex-col space-y-7">
                  {/* ============================== Order_Header ====================== */}
                  <Order_Header />
                  {/* ============================== Order_KPICard ====================== */}
                  <Order_KPICard />
                  {/* ============================== Order_Table ====================== */}
                  <Order_Table />
            </section>
      )
}