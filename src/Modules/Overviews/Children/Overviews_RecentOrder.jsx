import { CheckCircle2, Clock3, XCircle, ArrowUpRight } from "lucide-react";
import { OverviewsRecentOrderData } from "../../../Data/Dashboard/OverviewData";

// ============= OverviewsRecentOrderData ====================

export default function Overviews_RecentOrder() {
      return (
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                              <h3 className="text-sm font-bold text-gray-800 md:text-base">
                                    Recent Orders
                              </h3>
                              <p className="mt-0.5 text-xs text-gray-400">
                                    Latest transactions from your cafe POS terminal.
                              </p>
                        </div>
                        <button
                              type="button"
                              className="flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
                        >
                              <span>View All</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                  </div>

                  {/* TABLE CONTAINER WITH X & Y SCROLL */}
                  <div className="max-h-[320px] no-scrollbar w-full overflow-x-auto overflow-y-auto rounded-xl border border-gray-50">
                        <table className="w-full min-w-[700px] text-left border-collapse">
                              <thead className="sticky top-0 z-10 bg-white shadow-xs">
                                    <tr className="border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                          <th className="bg-white pb-3 pl-3 pt-3">Order ID</th>
                                          <th className="bg-white pb-3 pt-3">Customer</th>
                                          <th className="bg-white pb-3 pt-3">Items</th>
                                          <th className="bg-white pb-3 pt-3">Payment</th>
                                          <th className="bg-white pb-3 pt-3">Amount</th>
                                          <th className="bg-white pb-3 pt-3">Status</th>
                                    </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-50 text-xs">
                                    {OverviewsRecentOrderData.map((order) => (
                                          <tr key={order.id} className="transition-colors hover:bg-gray-50/60">
                                                <td className="py-3.5 pl-3 font-bold text-[#0F2945]">
                                                      {order.idOrder}
                                                </td>
                                                <td className="py-3.5 pr-2">
                                                      <div className="flex items-center gap-2">
                                                            <img
                                                                  src={order.avatar}
                                                                  alt={order.customerName}
                                                                  className="h-6 w-6 rounded-full object-cover border border-gray-100 shrink-0"
                                                            />
                                                            <span className="font-semibold text-gray-700 whitespace-nowrap">
                                                                  {order.customerName}
                                                            </span>
                                                      </div>
                                                </td>
                                                <td className="py-3.5 text-gray-500 pr-4">
                                                      {order.items}
                                                </td>
                                                <td className="py-3.5 font-medium text-gray-600 whitespace-nowrap">
                                                      {order.Payment}
                                                </td>
                                                <td className="py-3.5 font-bold text-gray-800 whitespace-nowrap">
                                                      {order.Amount}
                                                </td>
                                                <td className="py-3.5 pr-3 whitespace-nowrap">
                                                      {order.Status === "Completed" && (
                                                            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                                                                  <CheckCircle2 className="h-3 w-3 shrink-0" />
                                                                  Completed
                                                            </span>
                                                      )}
                                                      {order.Status === "Pending" && (
                                                            <span className="inline-flex items-center gap-1 rounded-full border border-amber-100 bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-600">
                                                                  <Clock3 className="h-3 w-3 shrink-0" />
                                                                  Pending
                                                            </span>
                                                      )}
                                                      {order.Status === "Cancelled" && (
                                                            <span className="inline-flex items-center gap-1 rounded-full border border-rose-100 bg-rose-50 px-2 py-0.5 text-[9px] font-semibold text-rose-500">
                                                                  <XCircle className="h-3 w-3 shrink-0" />
                                                                  Cancelled
                                                            </span>
                                                      )}
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
}