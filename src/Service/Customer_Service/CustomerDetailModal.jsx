import { motion, AnimatePresence } from "framer-motion";

export default function CustomerDetailModal({ customer, isOpen, onClose }) {
      if (!customer) return null;

      return (
            <AnimatePresence>
                  {isOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                              {/* Background Overlay Animation */}
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={onClose}
                                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                              />

                              {/* Modal Content Animation */}
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden border border-gray-100 z-10"
                              >
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                                          <h3 className="font-semibold text-gray-800 text-lg">Customer Details</h3>
                                          <button
                                                onClick={onClose}
                                                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                                          >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                          </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                          <div className="flex items-center gap-4">
                                                <img src={customer.avatar} alt={customer.fullName} className="w-16 h-16 rounded-full object-cover border border-gray-200 shadow-sm" />
                                                <div>
                                                      <h4 className="font-bold text-gray-800 text-base">{customer.fullName}</h4>
                                                      <p className="text-xs text-gray-400">@{customer.userName}</p>
                                                      <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${customer.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                                                            {customer.status}
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <div>
                                                      <span className="text-gray-400 block text-xs">Customer ID</span>
                                                      <span className="font-mono font-semibold text-emerald-600">{customer.id}</span>
                                                </div>
                                                <div>
                                                      <span className="text-gray-400 block text-xs">Phone Number</span>
                                                      <span className="font-medium text-gray-700">{customer.phone}</span>
                                                </div>
                                                <div>
                                                      <span className="text-gray-400 block text-xs">Email Address</span>
                                                      <span className="font-medium text-gray-700">{customer.email}</span>
                                                </div>
                                                <div>
                                                      <span className="text-gray-400 block text-xs">Location</span>
                                                      <span className="font-medium text-gray-700">{customer.province}, {customer.district}</span>
                                                </div>
                                                <div className="col-span-2">
                                                      <span className="text-gray-400 block text-xs">Created At</span>
                                                      <span className="font-medium text-gray-700">{customer.createdAt}</span>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-end px-6 py-3 border-t border-gray-100 bg-gray-50">
                                          <button
                                                onClick={onClose}
                                                className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-xl text-sm font-medium transition-colors"
                                          >
                                                Close
                                          </button>
                                    </div>
                              </motion.div>
                        </div>
                  )}
            </AnimatePresence>
      );
}