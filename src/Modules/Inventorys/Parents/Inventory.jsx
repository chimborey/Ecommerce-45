import Inventory_Header from "../../Integrations/Children/Inventory_Header";
import Inventory_Table from "../Children/Inventory_Table";
import InventoryKPICard from "../Children/InventoryKPICard";

export default function Inventory() {
      return (
            <section className=" flex flex-col space-y-7 w-full overflow-hidden">
                  {/* ================================= Inventory_Header ================================= */}
                  <Inventory_Header />
                  {/* ================================= Inventory_Card ================================= */}
                  <InventoryKPICard />
                  {/* ================================= Inventory_Card ================================= */}
                  <Inventory_Table />
            </section>
      )
}