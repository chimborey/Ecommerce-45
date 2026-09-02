import { useEffect, useState } from "react";
import { customerData } from "../../../Data/Dashboard/CustomerData";
import Export_Report from "../../../Utils/Export_Report";
import CustomerDeleteModal from "../../../Service/Customer_Service/CustomerDeleteModal";
import CustomerDetailModal from "../../../Service/Customer_Service/CustomerDetailModal";

export default function Customer_Table() {

      const [items, setItems] = useState(() =>
            customerData.map((item) => ({ ...item, checked: false }))
      );

      const [searchFilter, setSearchFilter] = useState(() => {
            return localStorage.getItem("searchFilter") || "";
      });

      const [statusFilter, setStatusFilter] = useState(() => {
            return localStorage.getItem("statusFilter") || "All";
      });

      const [dateFilter, setDateFilter] = useState(() => {
            return localStorage.getItem("dateFilter") || "";
      });

      useEffect(() => {
            localStorage.setItem("searchFilter", searchFilter);
            localStorage.setItem("statusFilter", statusFilter);
            localStorage.setItem("dateFilter", dateFilter);

      }, [searchFilter, statusFilter, dateFilter]);
      const filteredItems = items.filter((item) => {
            const matchesSearch = (item.fullName || "").toLowerCase().includes(searchFilter.toLowerCase()) || (item.userName || "").toLowerCase().includes(searchFilter.toLowerCase());
            const matchesStatus = statusFilter === "All" || item.status === statusFilter;
            const matchesDate = !dateFilter || (item.createdAt && item.createdAt.includes(dateFilter));

            return matchesSearch && matchesStatus && matchesDate;
      });

      const [currentPage, setCurrenPage] = useState(1);
      const itemsPage = 30;
      const indexOfLast = currentPage * itemsPage;
      const indexOfFirst = indexOfLast - itemsPage;
      const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);
      const totalPage = Math.ceil(filteredItems.length / itemsPage);

      const handleNext = () => { if (currentPage < totalPage) setCurrenPage(currentPage + 1); };
      const handlePrev = () => { if (currentPage > 1) setCurrenPage(currentPage - 1); };

      const AllcheckItems = currentItems.length > 0 && currentItems.some((item) => item.checked);

      const handleAllItem = (e) => {
            const isChecked = e.target.checked;
            const updateItem = items.map((item) => {
                  const isCurrentPage = currentItems.some((ci) => ci.id === item.id);
                  if (isCurrentPage) return { ...item, checked: isChecked };
                  return item;
            });
            setItems(updateItem);
      };

      const hanldeCheckItem = (id) => {
            const updateItem = items.map((item) => {
                  if (item.id === id) return { ...item, checked: !item.checked };
                  return item;
            });
            setItems(updateItem);
      };

      // =========================== State សម្រាប់ Modal View ===========================
      const [selectedViewCustomer, setSelectedViewCustomer] = useState(null);
      const [isViewOpen, setIsViewOpen] = useState(false);

      const handleOpenView = (customer) => {
            setSelectedViewCustomer(customer);
            setIsViewOpen(true);
      };


      // =========================== State សម្រាប់ Modal Delete ===========================
      const [selectedDeleteCustomer, setSelectedDeleteCustomer] = useState(null);
      const [isDeleteOpen, setIsDeleteOpen] = useState(false);
      const handleOpenDelete = (customer) => {
            setSelectedDeleteCustomer(customer);
            setIsDeleteOpen(true);
      };

      // =========================== Function នេះគ្រាន់តែបិទ Modal សិន ពេលអ្នកต่อ API រួចអាចសរសេរបន្ថែមការ fetch ទិន្នន័យថ្មីនៅទីនេះ ===========================
      const handleConfirmDeleteDone = () => {
            setIsDeleteOpen(false);
            setSelectedDeleteCustomer(null);
            // ឧទាហរណ៍៖ fetchCustomers(); បន្ទាប់ពីលុបតាម API រួច
      };

      return (
            <section className="w-full overflow-hidden space-y-3 flex flex-col">

                  {/* ==================================== Category Filter  ====================================*/}
                  <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">

                        {/* ---------------------- Search ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3">
                              <div className="relative w-full sm:w-auto">
                                    <input
                                          type="text"
                                          placeholder="Search customers..."
                                          value={searchFilter}
                                          onChange={(e) => { setSearchFilter(e.target.value); setCurrenPage(1); }}
                                          className="w-full sm:w-64 px-3.5 py-2 pl-9 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                    />
                                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                              </div>
                        </div>

                        {/* ---------------------- Status ---------------------- */}
                        <div className="inline-flex items-center gap-1 bg-gray-50 p-1 border border-gray-200 rounded-xl w-fit">
                              {["All", "Active", "Inactive"].map((st) => (
                                    <button
                                          key={st}
                                          onClick={() => { setStatusFilter(st); setCurrenPage(1); }}
                                          className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${statusFilter === st ? "bg-white text-emerald-600 shadow-sm font-semibold" : "text-gray-500 hover:text-gray-700"}`}
                                    >
                                          {st}
                                    </button>
                              ))}
                        </div>

                        {/* ---------------------- DataFilter & Export ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3 justify-between lg:justify-end">
                              <input
                                    type="date"
                                    value={dateFilter}
                                    onChange={(e) => { setDateFilter(e.target.value); setCurrenPage(1); }}
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              />
                              <Export_Report />
                        </div>
                  </div>

                  {/* ==================================== Table Filter ==================================== */}
                  <div className="w-full bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden p-4">
                        {/* ---------------------- VIEW Modals for Pc ---------------------- */}
                        <div className="hidden md:block w-full">
                              <table className="w-full text-left border-collapse block">
                                    {/* Thead Table */}
                                    <thead className="block w-full">
                                          <tr className="flex border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-wider bg-gray-50">
                                                <th className="py-3 px-3 w-12 text-center flex items-center justify-center">
                                                      <input checked={AllcheckItems} onChange={handleAllItem} type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" />
                                                </th>
                                                <th className="py-3 px-3 flex-1">Customer ID</th>
                                                <th className="py-3 px-3 flex-[2]">Customer Name</th>
                                                <th className="py-3 px-3 flex-1">Phone</th>
                                                <th className="py-3 px-3 flex-[1.5]">Email</th>
                                                <th className="py-3 px-3 flex-[1.5]">Location</th>
                                                <th className="py-3 px-3 flex-1">Status</th>
                                                <th className="py-3 px-3 flex-1">Created At</th>
                                                <th className="py-3 px-3 w-28 text-center">Actions</th>
                                          </tr>
                                    </thead>

                                    {/* TBody Table*/}
                                    <tbody className="block w-full max-h-[400px] no-scrollbar overflow-y-auto divide-y divide-gray-50 text-sm">
                                          {currentItems.length > 0 ? (
                                                currentItems.map((item, index) => (
                                                      <tr key={item.id || index} className="flex items-center hover:bg-gray-50/80 transition-colors">
                                                            <td className="py-3 px-3 w-12 text-center flex items-center justify-center">
                                                                  <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" checked={item.checked} onChange={() => hanldeCheckItem(item.id)} />
                                                            </td>
                                                            <td className="py-3 px-3 font-mono text-xs font-semibold text-emerald-600 flex-1">{item.id}</td>
                                                            <td className="py-3 px-3 flex-[2]">
                                                                  <div className="flex items-center gap-3">
                                                                        <img src={item.avatar} alt={item.fullName} className="w-9 h-9 rounded-full object-cover border border-gray-100 shadow-sm" />
                                                                        <div>
                                                                              <div className="font-semibold text-gray-800">{item.fullName}</div>
                                                                              <div className="text-xs text-gray-400">@{item.userName}</div>
                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td className="py-3 px-3 text-gray-600 flex-1">{item.phone}</td>
                                                            <td className="py-3 px-3 text-gray-500 flex-[1.5] truncate">{item.email}</td>
                                                            <td className="py-3 px-3 text-gray-600 flex-[1.5] truncate">{item.province}, {item.district}</td>
                                                            <td className="py-3 px-3 flex-1">
                                                                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-block ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                                                                        {item.status}
                                                                  </span>
                                                            </td>
                                                            <td className="py-3 px-3 text-gray-400 text-xs flex-1">{item.createdAt}</td>
                                                            <td className="py-3 px-3 w-28 text-center">
                                                                  <div className="flex items-center justify-center gap-2">
                                                                        <button onClick={() => handleOpenView(item)} className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="View Details">
                                                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                                        </button>
                                                                        <button onClick={() => handleOpenDelete(item)} className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors" title="Delete Customer">
                                                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                                        </button>
                                                                  </div>
                                                            </td>
                                                      </tr>
                                                ))
                                          ) : (
                                                <tr><td colSpan="9" className="text-center py-8 text-gray-400 text-sm block w-full">No customers found.</td></tr>
                                          )}
                                    </tbody>
                              </table>
                        </div>

                        {/* ---------------------- VIEW Modals for Mobile ---------------------- */}
                        <div className="block md:hidden space-y-3 max-h-[400px] no-scrollbar overflow-y-auto">
                              {currentItems.length > 0 ? (
                                    currentItems.map((item, index) => (
                                          <div key={item.id || index} className={`p-4 rounded-xl border transition-all ${item.checked ? 'bg-emerald-50/30 border-emerald-200' : 'bg-gray-50/50 border-gray-100'}`}>
                                                <div className="flex items-center justify-between mb-3">
                                                      <div className="flex items-center gap-2">
                                                            <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer" checked={item.checked} onChange={() => hanldeCheckItem(item.id)} />
                                                            <span className="font-mono text-xs font-semibold text-emerald-600">{item.id}</span>
                                                      </div>
                                                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>{item.status}</span>
                                                </div>
                                                <div className="flex items-center gap-3 mb-3">
                                                      <img src={item.avatar} alt={item.fullName} className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm" />
                                                      <div>
                                                            <h4 className="font-semibold text-gray-800 text-sm">{item.fullName}</h4>
                                                            <p className="text-xs text-gray-400">@{item.userName}</p>
                                                      </div>
                                                </div>
                                                <div className="text-xs text-gray-600 space-y-1 border-t border-gray-200/60 pt-2 mb-3">
                                                      <div className="flex justify-between"><span className="text-gray-400">Phone:</span><span className="font-medium">{item.phone}</span></div>
                                                      <div className="flex justify-between"><span className="text-gray-400">Email:</span><span className="font-medium">{item.email}</span></div>
                                                      <div className="flex justify-between"><span className="text-gray-400">Location:</span><span className="font-medium">{item.province}, {item.district}</span></div>
                                                </div>
                                                <div className="flex items-center justify-end gap-2 border-t border-gray-200/60 pt-3">
                                                      <button onClick={() => handleOpenView(item)} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-xs font-medium transition-colors">View</button>
                                                      <button onClick={() => handleOpenDelete(item)} className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-medium transition-colors">Delete</button>
                                                </div>
                                          </div>
                                    ))
                              ) : (
                                    <div className="text-center py-8 text-gray-400 text-sm">No customers found.</div>
                              )}
                        </div>

                        {/* ---------------------- Pagination ---------------------- */}
                        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-4 mt-4 px-2 text-xs sm:text-sm text-gray-500 gap-3">
                              <div>Showing <span className="font-semibold text-gray-700">{filteredItems.length > 0 ? indexOfFirst + 1 : 0}</span> to <span className="font-semibold text-gray-700">{Math.min(indexOfLast, filteredItems.length)}</span> of <span className="font-semibold text-gray-700">{filteredItems.length}</span> entries</div>
                              <div className="flex items-center gap-2">
                                    <button onClick={handlePrev} disabled={currentPage === 1} className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${currentPage === 1 ? "bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>Previous</button>
                                    <div className="px-3 py-1.5 font-semibold bg-gray-50 border border-gray-200 rounded-lg text-gray-700">{currentPage} / {totalPage || 1}</div>
                                    <button onClick={handleNext} disabled={currentPage === totalPage || totalPage === 0} className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${currentPage === totalPage || totalPage === 0 ? "bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}>Next</button>
                              </div>
                        </div>
                  </div>

                  {/*----------------------  Modals ----------------------*/}
                  <CustomerDetailModal
                        customer={selectedViewCustomer}
                        isOpen={isViewOpen}
                        onClose={() => setIsViewOpen(false)}
                  />

                  <CustomerDeleteModal
                        isOpen={isDeleteOpen}
                        customer={selectedDeleteCustomer}
                        onClose={() => setIsDeleteOpen(false)}
                        onConfirm={handleConfirmDeleteDone}
                  />

            </section>
      );
}