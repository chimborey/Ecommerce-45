
import { Package, ArrowUpRight } from "lucide-react";
import { OverviewsInventoryData } from "../../../Data/Dashboard/OverviewData";



export default function Overviews_Inverntory() {
      return (
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                              <h3 className="text-sm font-bold text-gray-800 md:text-base">
                                    Inventory Status
                              </h3>
                              <p className="mt-0.5 text-xs text-gray-400">
                                    Monitor stock levels and items running low.
                              </p>
                        </div>
                        <button
                              type="button"
                              className="flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                        >
                              <span>Manage</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                  </div>

                  {/* INVENTORY LIST */}
                  <div className="space-y-3.5 max-h-[380px] no-scrollbar overflow-x-auto overflow-y-auto">
                        {OverviewsInventoryData.map((item) => (
                              <div
                                    key={item.id}
                                    className="rounded-xl border border-gray-50 bg-gray-50/40 p-3.5 transition-colors hover:bg-gray-50"
                              >
                                    <div className="flex items-center justify-between mb-2">
                                          <div className="flex items-center gap-2.5">
                                                <div className="rounded-lg bg-[#0F2945]/5 p-2 text-[#0F2945]">
                                                      <Package className="h-4 w-4" />
                                                </div>
                                                <div>
                                                      <h4 className="text-xs font-bold text-gray-800">
                                                            {item.itemName}
                                                      </h4>
                                                      <span className="text-[10px] font-medium text-gray-400">
                                                            {item.category}
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="text-right">
                                                <span className="text-xs font-bold text-gray-800">
                                                      {item.stockLeft}
                                                </span>
                                                <div>
                                                      {item.status === "In Stock" && (
                                                            <span className="text-[10px] font-semibold text-emerald-600">
                                                                  In Stock
                                                            </span>
                                                      )}
                                                      {item.status === "Low Stock" && (
                                                            <span className="text-[10px] font-semibold text-amber-600">
                                                                  Low Stock
                                                            </span>
                                                      )}
                                                      {item.status === "Critical" && (
                                                            <span className="text-[10px] font-semibold text-rose-500">
                                                                  Critical
                                                            </span>
                                                      )}
                                                </div>
                                          </div>
                                    </div>

                                    {/* PROGRESS BAR */}
                                    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                                          <div
                                                className={`h-full rounded-full transition-all duration-500 ${item.percentage > 50
                                                            ? "bg-emerald-500"
                                                            : item.percentage > 20
                                                                  ? "bg-amber-500"
                                                                  : "bg-rose-500"
                                                      }`}
                                                style={{ width: `${item.percentage}%` }}
                                          ></div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}