import { useState } from "react";
import { orderTableData } from "../../../Data/Dashboard/OrderData";
import Export_Report from "../../../Utils/Export_Report";

export default function Order_Table() {
      // រក្សាទុកទិន្នន័យក្នុង state ព្រមទាំងបន្ថែម checked property សម្រាប់គ្រប់គ្រង checkbox
      const [items, setItems] = useState(() =>
            orderTableData.map((item) => ({ ...item, checked: false }))
      );

      // State សម្រាប់ Filter និង Search
      const [searchTerm, setSearchTerm] = useState("");
      const [selectedStatus, setSelectedStatus] = useState("All");
      const [selectedPayment, setSelectedPayment] = useState("All"); // State សម្រាប់ Payment Method Filter

      const [currentPage, setCurrentPage] = useState(1);
      const totalItem = 10; // កំណត់ចំនួនទិន្នន័យបង្ហាញក្នុងមួយទំព័រ

      // មុខងារត្រងទិន្នន័យ (Filtering) តាម Search Term, Status និង Payment Method
      const filteredItems = items.filter((item) => {
            const matchesSearch =
                  item.number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.nameCustomer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.items?.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = selectedStatus === "All" || item.status === selectedStatus;
            const matchesPayment = selectedPayment === "All" || item.paymentMethod === selectedPayment;

            return matchesSearch && matchesStatus && matchesPayment;
      });

      // ការគណនា Pagination ផ្អែកលើទិន្នន័យដែលបាន Filter រួច
      const indexOfLast = currentPage * totalItem;
      const indexOfFirst = indexOfLast - totalItem;
      const currentItem = filteredItems.slice(indexOfFirst, indexOfLast);
      const totalPage = Math.ceil(filteredItems.length / totalItem) || 1;

      // មុខងារ Checkbox សម្រាប់ Select All (ទំព័របច្ចុប្បន្ន)
      const isAllCheckedItem =
            currentItem.length > 0 && currentItem.every((item) => item.checked);

      const handleAllCheckItem = (e) => {
            const isCheck = e.target.checked;
            const currentIds = currentItem.map((item) => item.id);

            setItems((prevItems) =>
                  prevItems.map((item) =>
                        currentIds.includes(item.id) ? { ...item, checked: isCheck } : item
                  )
            );
      };

      // មុខងារ Checkbox សម្រាប់ជួរដេកនីមួយៗ
      const handleSingleCheck = (id) => {
            setItems((prevItems) =>
                  prevItems.map((item) =>
                        item.id === id ? { ...item, checked: !item.checked } : item
                  )
            );
      };

      return (
            <section className="w-full overflow-hidden space-y-4 flex flex-col">
                  {/* ================================ Category Filter & Search ================================ */}
                  <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        {/* ---------------------- Search & Status/Payment Filter ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3">
                              {/* Search Input */}
                              <div className="relative w-full sm:w-auto">
                                    <input
                                          type="text"
                                          placeholder="Search product, customer, SKU..."
                                          value={searchTerm}
                                          onChange={(e) => {
                                                setSearchTerm(e.target.value);
                                                setCurrentPage(1); // Reset ទៅទំព័រទី១ ពេលស្វែងរក
                                          }}
                                          className="w-full sm:w-64 px-3.5 py-2 pl-9 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                    />
                                    <svg
                                          className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                    >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                              </div>

                              {/* Status Filter Dropdown */}
                              <select
                                    value={selectedStatus}
                                    onChange={(e) => {
                                          setSelectedStatus(e.target.value);
                                          setCurrentPage(1); // Reset ទៅទំព័រទី១ ពេលប្តូរ Filter
                                    }}
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              >
                                    <option value="All">All Status</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Cancelled">Cancelled</option>
                              </select>

                              {/* Payment Method Filter Dropdown */}
                              <select
                                    value={selectedPayment}
                                    onChange={(e) => {
                                          setSelectedPayment(e.target.value);
                                          setCurrentPage(1); // Reset ទៅទំព័រទី១ ពេលប្តូរ Filter
                                    }}
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              >
                                    <option value="All">All Payments</option>
                                    <option value="Cash">Cash</option>
                                    <option value="ABA Bank">ABA Bank</option>
                                    <option value="Visa">Visa</option>
                                    <option value="MasterCard">MasterCard</option>
                                    {/* {ឈ្មោះ Payment ផ្សេងៗទៀតរបស់អ្នក} */}
                              </select>
                        </div>

                        {/* ---------------------- DataFilter & Export ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3 justify-between lg:justify-end">
                              <input
                                    type="date"
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              />
                              <Export_Report />
                        </div>
                  </div>

                  {/* ================================ Table Filter ================================ */}
                  <div className="w-full bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden p-4 space-y-4">
                        <div className="w-full overflow-x-auto">
                              <table className="w-full text-left border-collapse min-w-[1020px] flex flex-col">
                                    {/* -------------------------- Thead -------------------------- */}
                                    <thead className="w-full block">
                                          <tr className="flex items-center border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-wider bg-gray-50 rounded-xl">
                                                <th className="py-3 px-3 w-12 text-center flex items-center justify-center shrink-0">
                                                      <input
                                                            type="checkbox"
                                                            checked={isAllCheckedItem}
                                                            onChange={handleAllCheckItem}
                                                            className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                                                      />
                                                </th>
                                                <th className="py-3 px-3 flex-[1.5]">Order ID</th>
                                                <th className="py-3 px-3 flex-[1.5]">Customer</th>
                                                <th className="py-3 px-3 flex-[2]">Items</th>
                                                <th className="py-3 px-3 w-16 text-center shrink-0">Qty</th>
                                                <th className="py-3 px-3 flex-1">Total</th>
                                                <th className="py-3 px-3 flex-[1.5]">Payment Method</th>
                                                <th className="py-3 px-3 flex-1">Status</th>
                                                <th className="py-3 px-3 flex-1">Time</th>
                                                <th className="py-3 px-3 w-28 text-center shrink-0">Action</th>
                                          </tr>
                                    </thead>

                                    {/* -------------------------- Tbody (Scrollable) -------------------------- */}
                                    <tbody className="w-full mt-3 space-y-3 max-h-[400px] block no-scrollbar overflow-y-auto divide-y divide-gray-50 text-sm">
                                          {currentItem.length > 0 ? (
                                                currentItem.modelMap?.((item) => item) || currentItem.map((item) => {
                                                      const { id, number, avatar, nameCustomer, items, qty, totalPrice, paymentMethod, status, time, checked } = item;

                                                      return (
                                                            <tr key={id} className="flex items-center hover:bg-gray-50/80 transition-colors py-1">
                                                                  <td className="py-3 px-3 w-12 text-center flex items-center justify-center shrink-0">
                                                                        <input
                                                                              type="checkbox"
                                                                              checked={checked}
                                                                              onChange={() => handleSingleCheck(id)}
                                                                              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                                                                        />
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5]">
                                                                        <span className="font-mono text-xs font-semibold text-emerald-600">{number}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5] flex items-center gap-2 overflow-hidden">
                                                                        <img src={avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"} alt={nameCustomer} className="w-8 h-8 rounded-full object-cover border border-gray-100 shrink-0" />
                                                                        <span className="text-xs font-semibold text-gray-700 truncate">{nameCustomer}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[2]">
                                                                        <span className="text-xs text-gray-500 truncate block" title={items}>{items}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 w-16 text-center shrink-0">
                                                                        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold bg-gray-100 text-gray-700 rounded-md">
                                                                              {qty || 1}
                                                                        </span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-1">
                                                                        <span className="text-xs font-semibold text-gray-700">{totalPrice}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5]">
                                                                        <span className="text-xs text-gray-600 font-medium px-2 py-1 bg-gray-100 rounded-md inline-block">{paymentMethod}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-1">
                                                                        <span className={`inline-flex px-2.5 py-1 text-[10px] font-bold rounded-full ${status === "Completed" ? "bg-emerald-50 text-emerald-600" :
                                                                              status === "Processing" ? "bg-blue-50 text-blue-600" :
                                                                                    status === "Pending" ? "bg-amber-50 text-amber-600" :
                                                                                          "bg-rose-50 text-rose-600"
                                                                              }`}>
                                                                              {status}
                                                                        </span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-1">
                                                                        <span className="text-xs text-gray-400">{time}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 w-28 text-center shrink-0 flex items-center justify-center gap-1.5">
                                                                        <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors cursor-pointer" title="Edit">
                                                                              ✏️
                                                                        </button>
                                                                        <button className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors cursor-pointer" title="Delete">
                                                                              🗑️
                                                                        </button>
                                                                  </td>
                                                            </tr>
                                                      );
                                                })
                                          ) : (
                                                <tr className="flex items-center justify-center w-full py-6">
                                                      <td className="text-center text-gray-400 text-xs w-full">
                                                            No orders found
                                                      </td>
                                                </tr>
                                          )}
                                    </tbody>
                              </table>
                        </div>

                        {/* ================================ Pagination Controls ================================ */}
                        {filteredItems.length > 0 && (
                              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-4 mt-4 px-2 text-xs sm:text-sm text-gray-500 gap-3">
                                    <div>
                                          Showing <span className="font-semibold text-gray-700">{indexOfFirst + 1}</span> to <span className="font-semibold text-gray-700">{Math.min(indexOfLast, filteredItems.length)}</span> of <span className="font-semibold text-gray-700">{filteredItems.length}</span> entries
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-gray-600 cursor-pointer"
                                          >
                                                Previous
                                          </button>

                                          <div className="flex items-center gap-1">
                                                {Array.from({ length: totalPage }, (_, index) => {
                                                      const pageNum = index + 1;
                                                      return (
                                                            <button
                                                                  key={pageNum}
                                                                  onClick={() => setCurrentPage(pageNum)}
                                                                  className={`w-8 h-8 rounded-xl font-medium transition-all flex items-center justify-center cursor-pointer ${currentPage === pageNum
                                                                        ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                                                                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                                                                        }`}
                                                            >
                                                                  {pageNum}
                                                            </button>
                                                      );
                                                })}
                                          </div>

                                          <button
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
                                                disabled={currentPage === totalPage}
                                                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-gray-600 cursor-pointer"
                                          >
                                                Next
                                          </button>
                                    </div>
                              </div>
                        )}
                  </div>
            </section>
      );
}