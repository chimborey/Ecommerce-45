import { Globe, ArrowUpRight } from "lucide-react";
import { OverviewsCountryData } from "../../../Data/Dashboard/OverviewData";

export default function Overviews_Country() {
      return (
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                        <div className="flex items-center gap-2">
                              <div className="rounded-xl bg-[#0F2945]/5 p-2 text-[#0F2945] border border-[#0F2945]/10">
                                    <Globe className="h-4 w-4" />
                              </div>
                              <h3 className="text-sm font-bold tracking-wide text-gray-800 md:text-base">
                                    Top Locations
                              </h3>
                        </div>
                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
                              By Orders
                        </span>
                  </div>

                  {/* LOCATION LIST */}
                  <div className="space-y-3.5">
                        {OverviewsCountryData.map((item) => (
                              <div
                                    key={item.id}
                                    className="rounded-xl border border-gray-50 bg-gray-50/40 p-3 transition-colors hover:bg-gray-50"
                              >
                                    <div className="flex items-center justify-between mb-2">
                                          <div className="flex items-center gap-3">
                                                {/* LOCATION THUMBNAIL IMAGE */}
                                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                                                      <img
                                                            src={item.imgUrl}
                                                            alt={item.location}
                                                            className="h-full w-full object-cover"
                                                      />
                                                      {/* FLAG BADGE OVERLAY */}
                                                      <span className="absolute -bottom-1 -right-1 text-xs">
                                                            {item.flag}
                                                      </span>
                                                </div>

                                                <div>
                                                      <h4 className="text-xs font-bold text-gray-800">
                                                            {item.location}
                                                      </h4>
                                                      <span className="text-[10px] text-gray-400">
                                                            {item.orders}
                                                      </span>
                                                </div>
                                          </div>

                                          {/* PERCENTAGE WITH ARROW */}
                                          <div className="flex items-center gap-1">
                                                <span className="text-xs font-bold text-[#0F2945]">
                                                      {item.percentage}%
                                                </span>
                                                <span className="rounded-full bg-emerald-50 p-1 text-emerald-600">
                                                      <ArrowUpRight className="h-3 w-3" />
                                                </span>
                                          </div>
                                    </div>

                                    {/* PROGRESS BAR */}
                                    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                                          <div
                                                className="h-full rounded-full bg-[#0F2945] transition-all duration-500"
                                                style={{ width: `${item.percentage}%` }}
                                          ></div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}