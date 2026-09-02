import Integrations_Header from "../Children/Integrations_Header";
import Integrations_Settings from "../Children/Integrations_Settings";


export default  function Integrations(){
      return(
            <section className=" w-full overflow-hidden flex flex-col space-y-7">
                  {/* =================================== Integrations_Header ============================= */}
                  <Integrations_Header />
                  {/* =================================== Integrations ============================= */}
                  <Integrations_Settings />
            </section>
      )
}