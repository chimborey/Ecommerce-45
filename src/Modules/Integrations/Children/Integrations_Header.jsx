
import { Plug } from "lucide-react";

export default function Integrations_Header() {
      return (
            <section className="flex flex-col space-y-1.5 border-b border-gray-100 pb-4 px-1">
                  <div className="flex items-center gap-2.5">
                        <div className="rounded-lg bg-[#0F2945]/5 p-2 text-[#0F2945]">
                              <Plug className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-bold capitalize text-gray-800">
                              Integrations Setting
                        </h3>
                  </div>
                  <p className="text-xs text-gray-400 pl-7">
                        Manage your external connections and third-party app settings.
                  </p>
            </section>
      );
}