

import { TrendingUp } from "lucide-react";
import { OverviewsTopSellingData } from "../../../Data/Dashboard/OverviewData";

export default function Overviews_TopSelling() {
      return (
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                              <h3 className="text-sm font-bold text-gray-800 md:text-base">
                                    Top Selling Items
                              </h3>
                              <p className="mt-0.5 text-xs text-gray-400">
                                    Best performing products this week.
                              </p>
                        </div>
                        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-2 text-emerald-600">
                              <TrendingUp className="h-4 w-4" />
                        </div>
                  </div>

                  {/* LIST */}
                  <div className="space-y-3.5 max-h-[380px] no-scrollbar overflow-x-auto overflow-y-auto">
                        {OverviewsTopSellingData.map((item, index) => (
                              <div
                                    key={item.id}
                                    className="flex items-center justify-between rounded-xl border border-gray-50 bg-gray-50/40 p-3 transition-colors hover:bg-gray-50"
                              >
                                    <div className="flex items-center gap-3">
                                          <span className="text-xs font-bold text-gray-400 w-4">
                                                #{index + 1}
                                          </span>
                                          <img
                                                src={item.imgUrl}
                                                alt={item.name}
                                                className="h-10 w-10 rounded-xl object-cover border border-gray-100 shrink-0"
                                          />
                                          <div>
                                                <h4 className="text-xs font-bold text-gray-800">
                                                      {item.name}
                                                </h4>
                                                <p className="mt-0.5 text-[11px] text-gray-400">
                                                      {item.sold}
                                                </p>
                                          </div>
                                    </div>

                                    <div className="text-right">
                                          <span className="text-xs font-bold text-[#0F2945]">
                                                {item.revenue}
                                          </span>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}