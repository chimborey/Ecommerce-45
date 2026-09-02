import { useEffect, useState } from "react";
import { inventoryTableData } from "../../../Data/Dashboard/InventoryData";
import Export_Report from "../../../Utils/Export_Report";

export default function Inventory_Table() {
      // ទុកទិន្នន័យក្នុង items state រួមជាមួយ checked property
      const [items, setItems] = useState(() =>
            inventoryTableData.map((item) => ({ ...item, checked: false }))
      );

      const [currentPage, setCurrentPage] = useState(1);
      const totalItem = 30;

      // State សម្រាប់ Status Filter (រក្សាទុកក្នុង localStorage)
      const [isStatus, setIsStatus] = useState(() => {
            const saveStatus = localStorage.getItem("isStatus");
            return saveStatus ? JSON.parse(saveStatus) : "All";
      });

      // State សម្រាប់ Search (រក្សាទុកក្នុង localStorage)
      const [searchTerm, setSearchTerm] = useState(() => {
            const saveSearch = localStorage.getItem("searchTerm");
            return saveSearch ? JSON.parse(saveSearch) : "";
      });

      useEffect(() => {
            localStorage.setItem("isStatus", JSON.stringify(isStatus));
            localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
      }, [isStatus, searchTerm]);

      // ពេល Search ឬ Filter ដូរ ឱ្យរត់មកទំព័រទី 1 វិញស្វ័យប្រវត្តិ
      useEffect(() => {
            setCurrentPage(1);
      }, [searchTerm, isStatus]);

      // គណនាទិន្នន័យសរុបសម្រាប់ Button នីមួយៗ
      const totalProductsCount = items.length;
      const lowStockCount = items.filter((i) => i.status === "Low Stock").length;
      const outOfStockCount = items.filter((i) => i.status === "Out of Stock").length;
      const inStockCount = items.filter((i) => i.status === "In Stock").length;

      // មុខងារ Filter ទិន្នន័យតាម Search និង Status
      const filteredProducts = items.filter((item) => {
            const matchesSearch =
                  item.nameProducts.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.sku.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = isStatus === "All" || item.status === isStatus;
            return matchesSearch && matchesStatus;
      });

      // ការគណនា Pagination
      const indexOfLast = currentPage * totalItem;
      const indexOfFirst = indexOfLast - totalItem;
      const currentItem = filteredProducts.slice(indexOfFirst, indexOfLast);
      const totalPage = Math.ceil(filteredProducts.length / totalItem) || 1;

      // មុខងារ Checkbox លើសរុប (Select All សម្រាប់ទំព័របច្ចុប្បន្ន) - កែត្រង់នេះប្រើ some()
      const isAllCheckedItem =
            currentItem.length > 0 && currentItem.some((item) => item.checked);

      const handleAllCheckItem = (e) => {
            const isCheck = e.target.checked;
            const currentIds = currentItem.map((item) => item.id);

            setItems((prevItems) =>
                  prevItems.map((item) =>
                        currentIds.includes(item.id) ? { ...item, checked: isCheck } : item
                  )
            );
      };

      // មុខងារ Checkbox ផលិតផលនីមួយៗ
      const handleSingleCheck = (id) => {
            setItems((prevItems) =>
                  prevItems.map((item) =>
                        item.id === id ? { ...item, checked: !item.checked } : item
                  )
            );
      };

      return (
            <section className="w-full overflow-hidden space-y-4 flex flex-col">

                  {/* ================================ Top Summary Filter Buttons ================================ */}
                  <div className="flex flex-wrap items-center gap-2">
                        {/* 1. All Button */}
                        <button
                              onClick={() => setIsStatus("All")}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${isStatus === "All"
                                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-200"
                                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                    }`}
                        >
                              <span>All Products</span>
                              <span
                                    className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${isStatus === "All"
                                          ? "bg-white/20 text-white"
                                          : "bg-gray-100 text-gray-600"
                                          }`}
                              >
                                    {totalProductsCount}
                              </span>
                        </button>

                        {/* 2. In Stock Button */}
                        <button
                              onClick={() => setIsStatus("In Stock")}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${isStatus === "In Stock"
                                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-200"
                                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                    }`}
                        >
                              <span>In Stock</span>
                              <span
                                    className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${isStatus === "In Stock"
                                          ? "bg-white/20 text-white"
                                          : "bg-emerald-50 text-emerald-600"
                                          }`}
                              >
                                    {inStockCount}
                              </span>
                        </button>

                        {/* 3. Low Stock Button */}
                        <button
                              onClick={() => setIsStatus("Low Stock")}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${isStatus === "Low Stock"
                                    ? "bg-amber-500 text-white border-amber-500 shadow-sm shadow-amber-200"
                                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                    }`}
                        >
                              <span>Low Stock</span>
                              <span
                                    className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${isStatus === "Low Stock"
                                          ? "bg-white/20 text-white"
                                          : "bg-amber-50 text-amber-600"
                                          }`}
                              >
                                    {lowStockCount}
                              </span>
                        </button>

                        {/* 4. Out of Stock Button */}
                        <button
                              onClick={() => setIsStatus("Out of Stock")}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border cursor-pointer ${isStatus === "Out of Stock"
                                    ? "bg-rose-500 text-white border-rose-500 shadow-sm shadow-rose-200"
                                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                                    }`}
                        >
                              <span>Out Of Stock</span>
                              <span
                                    className={`px-1.5 py-0.5 text-[10px] rounded-full font-bold ${isStatus === "Out of Stock"
                                          ? "bg-white/20 text-white"
                                          : "bg-rose-50 text-rose-600"
                                          }`}
                              >
                                    {outOfStockCount}
                              </span>
                        </button>
                  </div>

                  {/* ================================ Category Filter & Search ================================ */}
                  <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        {/* ---------------------- Search ---------------------- */}
                        <div className="flex flex-wrap items-center gap-3">
                              <div className="relative w-full sm:w-auto">
                                    <input
                                          type="text"
                                          placeholder="Search product or SKU..."
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
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
                        </div>

                        {/* ---------------------- Status Select (Optional dropdown) ---------------------- */}
                        <div className="flex items-center gap-2">
                              <select
                                    value={isStatus}
                                    onChange={(e) => setIsStatus(e.target.value)}
                                    className="px-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all cursor-pointer"
                              >
                                    <option value="All">All Status</option>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Low Stock">Low Stock</option>
                                    <option value="Out of Stock">Out of Stock</option>
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
                              <table className="w-full text-left border-collapse min-w-[900px] flex flex-col">
                                    {/* -------------------------- Thead -------------------------- */}
                                    <thead className="w-full block">
                                          <tr className="flex items-center border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-wider bg-gray-50 rounded-xl">
                                                <th className="py-3 px-3 w-12 text-center flex items-center justify-center">
                                                      <input
                                                            type="checkbox"
                                                            checked={isAllCheckedItem}
                                                            onChange={handleAllCheckItem}
                                                            className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                                                      />
                                                </th>
                                                <th className="py-3 px-3 flex-[2]">Products</th>
                                                <th className="py-3 px-3 flex-1">SKU</th>
                                                <th className="py-3 px-3 flex-1">Brand</th>
                                                <th className="py-3 px-3 flex-[1.2]">Price</th>
                                                <th className="py-3 px-3 flex-[1.5]">Current Stock</th>
                                                <th className="py-3 px-3 flex-[1.5]">Min Stock</th>
                                                <th className="py-3 px-3 flex-[1.5]">Status</th>
                                                <th className="py-3 px-3 flex-[1.5]">Last Update</th>
                                                <th className="py-3 px-3 w-28 text-center">Actions</th>
                                          </tr>
                                    </thead>

                                    {/* -------------------------- Tbody (Scrollable) -------------------------- */}
                                    <tbody className="w-full mt-3 space-y-3 max-h-[400px] block no-scrollbar overflow-y-auto divide-y divide-gray-50 text-sm">
                                          {currentItem.length > 0 ? (
                                                currentItem.map((item) => {
                                                      const { id, imgurl, nameProducts, sku, brand, price, currentStock, minStock, status, lastUpdate, checked } = item;
                                                      const shortName = nameProducts.length > 22 ? nameProducts.slice(0, 22) + "..." : nameProducts;

                                                      return (
                                                            <tr key={id} className="flex items-center hover:bg-gray-50/80 transition-colors py-1">
                                                                  <td className="py-3 px-3 w-12 text-center flex items-center justify-center">
                                                                        <input
                                                                              type="checkbox"
                                                                              checked={checked}
                                                                              onChange={() => handleSingleCheck(id)}
                                                                              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                                                                        />
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[2] flex items-center gap-2.5 overflow-hidden">
                                                                        <img src={imgurl} alt={nameProducts} className="w-10 h-10 rounded-full object-center object-cover hover:rotate-6 transition-all duration-300 cursor-pointer shadow-sm border border-gray-100 shrink-0" />
                                                                        <h3 className="text-xs font-semibold text-gray-700 capitalize truncate max-w-[180px]" title={nameProducts}>
                                                                              {shortName}
                                                                        </h3>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-1">
                                                                        <span className="text-xs text-gray-500 font-medium">{sku}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-1">
                                                                        <span className="text-xs text-gray-600 font-medium">{brand || "N/A"}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.2]">
                                                                        <span className="text-xs font-bold text-gray-800">{price}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5]">
                                                                        <span className="text-xs font-medium text-gray-700">{currentStock}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5]">
                                                                        <span className="text-xs text-gray-500">{minStock}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5]">
                                                                        <span className={`inline-flex px-2.5 py-1 text-[10px] font-bold rounded-full ${status === "In Stock"
                                                                              ? "bg-emerald-50 text-emerald-600"
                                                                              : status === "Low Stock"
                                                                                    ? "bg-amber-50 text-amber-600"
                                                                                    : "bg-rose-50 text-rose-600"
                                                                              }`}>
                                                                              {status}
                                                                        </span>
                                                                  </td>

                                                                  <td className="py-3 px-3 flex-[1.5]">
                                                                        <span className="text-xs text-gray-400">{lastUpdate}</span>
                                                                  </td>

                                                                  <td className="py-3 px-3 w-28 text-center flex items-center justify-center gap-1.5">
                                                                        <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors" title="Edit">
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
                                                <tr className="flex items-center justify-center w-full">
                                                      <td colSpan="10" className="text-center py-6 text-gray-400 text-xs w-full">
                                                            No products found
                                                      </td>
                                                </tr>
                                          )}
                                    </tbody>
                              </table>
                        </div>

                        {/* ================================ Pagination Controls ================================ */}
                        {filteredProducts.length > 0 && (
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                                    <div>
                                          Showing <span className="font-semibold text-gray-700">{indexOfFirst + 1}</span> to <span className="font-semibold text-gray-700">{Math.min(indexOfLast, filteredProducts.length)}</span> of <span className="font-semibold text-gray-700">{filteredProducts.length}</span> entries
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                          {/* Previous Button */}
                                          <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-gray-600"
                                          >
                                                Previous
                                          </button>

                                          {/* Page Numbers */}
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

                                          {/* Next Button */}
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