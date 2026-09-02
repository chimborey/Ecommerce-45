import Receipt_Header from "../Children/Receipt_Header";
import Receipt_Setting from "../Children/Receipt_Setting";


export default function Receipt() {
      return (
            <section className=" flex flex-col space-y-7">
                   {/* ========================== Receipt_Header =========================== */}
                  <Receipt_Header />
                  {/* ========================== Receipt_Setting =========================== */}
                  <Receipt_Setting />
            </section>
      )
}