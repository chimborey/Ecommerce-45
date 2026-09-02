import Setting_General from "../Children/Setting_General";
import Setting_Header from "../Children/Setting_Header";

export default function Setting() {
      return (
            <section className=" flex flex-col space-y-3">
                  {/* ======================= Setting_Header ================================= */}
                  <Setting_Header />
                  {/* ======================= Setting_General ================================= */}
                  <Setting_General />
            </section>
      )
}