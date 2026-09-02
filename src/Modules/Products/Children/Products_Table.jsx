import { useEffect, useState } from "react";
import { productsData } from "../../../Data/Dashboard/ProductsData";
import Export_Report from "../../../Utils/Export_Report";

export default function Products_Table() {
      const [items, setItems] = useState(() => productsData.map((item) => ({ ...item, checked: false })));

      // States សម្រាប់ Search និង Filters
      const [searchTerm, setSearchTerm] = useState(() => {
            const saveSearch = localStorage.getItem("searchTerm")
            return saveSearch ? JSON.parse(saveSearch) : ""
      });

      const [stockFilter, setStockFilter] = useState(() => {
            const saveStock = localStorage.getItem("stockFilter")
            return saveStock ? JSON.parse(saveStock) : "All"
      });

      const [statusFilter, setStatusFilter] = useState(() => {
            const saveStatus = localStorage.getItem("statusFilter")
            return saveStatus ? JSON.parse(saveStatus) : "All"
      });

      useEffect(() => {
            localStorage.setItem("searchTerm", JSON.stringify(searchTerm))
            localStorage.setItem("stockFilter", JSON.stringify(stockFilter))
            localStorage.setItem("statusFilter", JSON.stringify(statusFilter))
      }, [searchTerm, stockFilter, statusFilter])

      const [currentPage, setCurrentPage] = useState(1);
      const itemsPage = 30;

      // ត្រងទិន្នន័យ (Filtering items based on search, stock, and status)
      const filteredItems = items.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.number.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = statusFilter === "All" || item.status === statusFilter;

            let matchesStock = true;
            if (stockFilter === "In Stock") {
                  matchesStock = item.stock > 0; // កែសម្រួលតាមលក្ខខណ្ឌស្តុករបស់អ្នក (ឧ. item.stock > 0)
            } else if (stockFilter === "Low Stock") {
                  matchesStock = item.stock > 0 && item.stock <= 5; // ឧទាហរណ៍ស្តុកតិចជាង ឬស្មើ 5
            } else if (stockFilter === "Out of Stock") {
                  matchesStock = item.stock === 0;
            }

            return matchesSearch && matchesStatus && matchesStock;
      });

      const totalPage = Math.ceil(filteredItems.length / itemsPage) || 1;

      // ធានាថា currentPage មិនហួស totalPage ពេលធ្វើការ filter
      if (currentPage > totalPage && totalPage > 0) {
            setCurrentPage(totalPage);
      }

      const indexOfLast = currentPage * itemsPage;
      const indexOfFirst = indexOfLast - itemsPage;
      const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);

      const isCheckedItem = currentItems.length > 0 && currentItems.some((item) => item.checked);

      const handleAllCheckedItems = (e) => {
            const isChecked = e.target.checked;
            const currentIds = currentItems.map(item => item.id);

            const updateItems = items.map((item) => {
                  if (currentIds.includes(item.id)) {
                        return { ...item, checked: isChecked };
                  }
                  return item;
            });
            setItems(updateItems);
      };

      const handleToggleItems = (id) => {
            const updateItems = items.map((item) => {
                  if (item.id === id) {
                        return { ...item, checked: !item.checked };
                  }
                  return item;
            });
            setItems(updateItems);
      };

      return (
            <section className="flex flex-col space-y-7 overflow-hidden w-full">

                  {/* ==================================== Category Filter ==================================== */}
                  <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        {/* ---------------------- Search ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3">
                              <div className="relative w-full sm:w-auto">
                                    <input
                                          type="text"
                                          value={searchTerm}
                                          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                          placeholder="Search product..."
                                          className="w-full sm:w-64 px-3.5 py-2 pl-9 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                                    />
                                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                              </div>
                        </div>

                        {/* ---------------------- Stock & Status Filters ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3">
                              {/* Stock Filter */}
                              <select
                                    value={stockFilter}
                                    onChange={(e) => { setStockFilter(e.target.value); setCurrentPage(1); }}
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              >
                                    <option value="All">All Stock</option>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Low Stock">Low Stock</option>
                                    <option value="Out of Stock">Out of Stock</option>
                              </select>

                              {/* Status Filter */}
                              <select
                                    value={statusFilter}
                                    onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              >
                                    <option value="All">All Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
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

                  {/* ==================================== Table Filter ==================================== */}
                  <div className="w-full bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden p-4">
                        <div className="w-full overflow-x-auto">
                              <table className="w-full text-left border-collapse min-w-[800px] flex flex-col">

                                    {/* Thead Table */}
                                    <thead className="block w-full sticky top-0 z-10 bg-gray-50">
                                          <tr className="flex items-center border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-wider rounded-xl">
                                                <th className="py-3 px-3 w-12 text-center flex items-center justify-center">
                                                      <input
                                                            type="checkbox"
                                                            onChange={handleAllCheckedItems}
                                                            checked={isCheckedItem}
                                                            className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                                                      />
                                                </th>
                                                <th className="py-3 px-3 flex-1">Customer ID</th>
                                                <th className="py-3 px-3 flex-[2]">Customer Name</th>
                                                <th className="py-3 px-3 flex-1">Price</th>
                                                <th className="py-3 px-3 flex-1">Stock</th>
                                                <th className="py-3 px-3 flex-1">Status</th>
                                                <th className="py-3 px-3 w-28 text-center">Actions</th>
                                          </tr>
                                    </thead>

                                    {/* TBody Table */}
                                    <tbody className="block w-full mt-2 max-h-[380px] overflow-y-auto no-scrollbar divide-y divide-gray-50 text-sm">
                                          {currentItems.length > 0 ? (
                                                currentItems.map((item) => (
                                                      <tr key={item.id} className="flex items-center hover:bg-gray-50/80 transition-colors py-1">
                                                            <td className="py-3 px-3 w-12 text-center flex items-center justify-center">
                                                                  <input
                                                                        checked={item.checked}
                                                                        onChange={() => handleToggleItems(item.id)}
                                                                        type="checkbox"
                                                                        className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                                                                  />
                                                            </td>
                                                            <td className="py-3 px-3 font-mono text-xs font-semibold text-emerald-600 flex-1">
                                                                  <span>{item.number}</span>
                                                            </td>
                                                            <td className="py-3 px-3 flex-[2]">
                                                                  <div className="flex items-center gap-3">
                                                                        <img src={item.image} alt={item.name} className="w-9 h-9 rounded-full object-cover border border-gray-100 shadow-sm shrink-0" />
                                                                        <div>
                                                                              <div className="font-semibold text-gray-800 text-xs sm:text-sm">
                                                                                    <h3>{item.name}</h3>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td className="py-3 px-3 text-gray-600 flex-1">
                                                                  <h5 className="font-bold text-xs sm:text-sm">${item.price}</h5>
                                                            </td>
                                                            <td className="py-3 px-3 text-gray-500 flex-1 truncate">
                                                                  <span className="text-xs">{item.stock}</span>
                                                            </td>
                                                            <td className="py-3 px-3 flex-1">
                                                                  <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold inline-block ${item.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                                                                        {item.status}
                                                                  </span>
                                                            </td>
                                                            <td className="py-3 px-3 w-28 text-center">
                                                                  <div className="flex items-center justify-center gap-2">
                                                                        <button className="p-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer" title="View Details">
                                                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                                        </button>
                                                                        <button className="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer" title="Delete Customer">
                                                                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                                        </button>
                                                                  </div>
                                                            </td>
                                                      </tr>
                                                ))
                                          ) : (
                                                <tr className="flex items-center justify-center w-full py-8">
                                                      <td className="text-center text-gray-400 text-xs sm:text-sm">No customers found.</td>
                                                </tr>
                                          )}
                                    </tbody>
                              </table>
                        </div>

                        {/* ---------------------- Pagination ---------------------- */}
                        {filteredItems.length > 0 && (
                              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-4 mt-4 px-2 text-xs sm:text-sm text-gray-500 gap-3">
                                    <div>
                                          Showing <span className="font-semibold text-gray-700">{indexOfFirst + 1}</span> to <span className="font-semibold text-gray-700">{Math.min(indexOfLast, filteredItems.length)}</span> of <span className="font-semibold text-gray-700">{filteredItems.length}</span> entries
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-gray-600"
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
                                                                  className={`w-8 h-8 rounded-xl font-medium transition-all flex items-center justify-center ${currentPage === pageNum
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
                                                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-gray-600"
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