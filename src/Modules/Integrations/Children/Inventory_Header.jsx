export default function Inventory_Header() {
      return (
            <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-2">
                  <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                              <span>Dashboard</span>
                              <span>/</span>
                              <span className="text-emerald-600 font-semibold">Inventory</span>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
                              Inventory Management
                        </h1>
                        <p className="text-xs text-gray-500">
                              Monitor stock levels, track product details, and manage inventory performance.
                        </p>
                  </div>

                  {/* Optional Quick Actions */}
                  <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm shadow-emerald-200 transition-all cursor-pointer flex items-center gap-1.5">
                              <span>+</span> Add New Product
                        </button>
                  </div>
            </section>
      );
}