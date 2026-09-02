import { Server, Activity, HardDrive, Wifi, CheckCircle2 } from "lucide-react";

export default function Overviews_System() {
      return (
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                        <div className="flex items-center gap-2">
                              <div className="rounded-xl bg-[#0F2945]/5 p-2 text-[#0F2945] border border-[#0F2945]/10">
                                    <Server className="h-4 w-4" />
                              </div>
                              <h3 className="text-sm font-bold tracking-wide text-gray-800 md:text-base">
                                    System Status
                              </h3>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 border border-emerald-100">
                              <CheckCircle2 className="h-3 w-3" />
                              All Systems Operational
                        </span>
                  </div>

                  {/* SYSTEM METRICS LIST */}
                  <div className="space-y-3">
                        {/* SERVER UPTIME */}
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 border border-gray-100">
                              <div className="flex items-center gap-2.5">
                                    <div className="text-gray-500">
                                          <Activity className="h-4 w-4" />
                                    </div>
                                    <div>
                                          <h4 className="text-xs font-bold text-gray-800">Server Uptime</h4>
                                          <p className="text-[10px] text-gray-400">Cloud API Node #01</p>
                                    </div>
                              </div>
                              <span className="text-xs font-bold text-emerald-600">99.9%</span>
                        </div>

                        {/* DATABASE STORAGE */}
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 border border-gray-100">
                              <div className="flex items-center gap-2.5">
                                    <div className="text-gray-500">
                                          <HardDrive className="h-4 w-4" />
                                    </div>
                                    <div>
                                          <h4 className="text-xs font-bold text-gray-800">Database Storage</h4>
                                          <p className="text-[10px] text-gray-400">PostgreSQL (45 GB used)</p>
                                    </div>
                              </div>
                              <span className="text-xs font-bold text-[#0F2945]">45%</span>
                        </div>

                        {/* POS TERMINAL CONNECTION */}
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 border border-gray-100">
                              <div className="flex items-center gap-2.5">
                                    <div className="text-gray-500">
                                          <Wifi className="h-4 w-4" />
                                    </div>
                                    <div>
                                          <h4 className="text-xs font-bold text-gray-800">POS Terminals</h4>
                                          <p className="text-[10px] text-gray-400">Active connections</p>
                                    </div>
                              </div>
                              <span className="text-xs font-bold text-[#C49A45]">6 / 6 Connected</span>
                        </div>
                  </div>
            </div>
      );
}