
import Security_Header from "../Children/Security_header";
import Security_Settings from "../Children/Security_Settings";


export default function Security() {
      return (
            <section className=" w-full overflow-hidden space-y-7">
                  {/* ========================== Security_Header ========================== */}
                  <Security_Header />
                  {/* ========================== Security_Settings ========================== */}
                  <Security_Settings />
            </section>
      )
}