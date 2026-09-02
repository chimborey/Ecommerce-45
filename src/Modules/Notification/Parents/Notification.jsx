import Notification_Card from "../Chidren/Notification_Card";
import Notification_Header from "../Chidren/Notification_Header";


export default function Notification() {
      return (
            <section className=" flex flex-col space-y-7">

                  {/* ===================================== Notification_Header ===================================== */}
                  <Notification_Header />
                  {/* ===================================== Notification_Card ===================================== */}
                  <Notification_Card />
            </section>
      )
}