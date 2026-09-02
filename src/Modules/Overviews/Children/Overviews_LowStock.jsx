
import { AlertTriangle, RefreshCw } from "lucide-react";
import { OverviewsLowStockData } from "../../../Data/Dashboard/OverviewData";

export default function Overviews_LowStock() {
      return (
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                              <h3 className="text-sm font-bold text-gray-800 md:text-base">
                                    Low Stock Alert
                              </h3>
                              <p className="mt-0.5 text-xs text-gray-400">
                                    Items that need immediate restock.
                              </p>
                        </div>
                        <button
                              type="button"
                              className="flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                        >
                              <span>Restock All</span>
                              <RefreshCw className="h-3.5 w-3.5" />
                        </button>
                  </div>

                  {/* LOW STOCK LIST */}
                  <div className="space-y-3​ max-h-[380px] overflow-x-auto overflow-y-auto no-scrollbar">
                        {OverviewsLowStockData.map((item) => (
                              <div
                                    key={item.id}
                                    className="flex items-center justify-between rounded-xl border space-y-3 mt-3 border-rose-100/60 bg-rose-50/30 p-3.5 transition-colors hover:bg-rose-50/50"
                              >
                                    <div className="flex items-center gap-3">
                                          <img
                                                src={item.imgUrl}
                                                alt={item.name}
                                                className="h-10 w-10 rounded-xl object-cover border border-rose-100 shrink-0"
                                          />
                                          <div>
                                                <h4 className="text-xs font-bold text-gray-800">
                                                      {item.name}
                                                </h4>
                                                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-rose-500 font-medium">
                                                      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                                                      <span>Stock running critically low</span>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="text-right">
                                          <span className="text-xs font-bold text-rose-600">
                                                {item.stock}
                                          </span>
                                          <div>
                                                <span className="inline-block rounded-full bg-rose-100 px-2 py-0.5 text-[9px] font-semibold text-rose-600">
                                                      {item.status}
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}