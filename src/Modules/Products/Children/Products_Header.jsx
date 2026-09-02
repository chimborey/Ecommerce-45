export default function Products_Header({ onAddToCart }) {
      return (
            <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 py-3 px-3">
                  <div className="flex flex-col space-y-1">
                        <h3 className="text-md text-black font-bold capitalize">Products Management</h3>
                        <p className="text-xs text-gray-500">Manage your store's inventory, stock, and pricing.</p>
                  </div>

                  {/* ប៊ូតុង Add to Cart / Add Product */}
                  <button
                        onClick={onAddToCart}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Add Product</span>
                  </button>
            </section>
      );
}