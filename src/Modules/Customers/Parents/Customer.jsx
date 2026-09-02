import Customer_Card from "../Children/Customer_Card";
import Customer_Header from "../Children/Customer_Header";
import Customer_Table from "../Children/Customer_Table";


export default function Customer() {
      return (
            <section className=" flex flex-col space-y-7">
                  {/* ============================== Customer_Header ================================ */}
                  <Customer_Header />
                  {/* ============================== Customer_Card ================================ */}
                  <Customer_Card />
                  {/* ============================== Customer_Table ================================ */}
                  <Customer_Table />
            </section>
      )
}