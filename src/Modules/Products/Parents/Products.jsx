import Products_Card from "../Children/Products_Card";
import Products_Header from "../Children/Products_Header";
import Products_Table from "../Children/Products_Table";


export default function Products() {
      return (
            <section className=" flex flex-col space-y-7">

                  {/* ================================ Products_Header =================================== */}
                  <Products_Header />
                  {/* ================================ Products_Card =================================== */}
                  <Products_Card />
                  {/* ================================ Products_Table =================================== */}
                  <Products_Table />
            </section>
      )
}