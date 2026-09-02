import { motion, AnimatePresence } from "framer-motion";

export default function CustomerDeleteModal({ isOpen, onClose, onConfirm, customer }) {
      const handleDeleteAPI = () => {
            console.log("Calling API to delete customer with ID:", customer?.id);
            onConfirm();
      };

      return (
            <AnimatePresence>
                  {isOpen && customer && (
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
                                    className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-gray-100 z-10"
                              >
                                    <div className="p-6 text-center space-y-4">
                                          {/* យក Image របស់ Customer មកដាក់ទីនេះ */}
                                          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto border-2 border-rose-100 shadow-sm overflow-hidden bg-rose-50">
                                                <img
                                                      src={customer.avatar}
                                                      alt={customer.fullName}
                                                      className="w-full h-full object-cover"
                                                />
                                          </div>

                                          <div>
                                                <h3 className="font-bold text-gray-800 text-lg">{customer.fullName}</h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                      Are you sure you want to delete <span className="font-semibold text-gray-700">{customer.fullName}</span>? (ID: {customer.id})
                                                </p>
                                          </div>
                                    </div>

                                    <div className="flex items-center justify-end gap-3 px-6 py-3 border-t border-gray-100 bg-gray-50">
                                          <button
                                                onClick={onClose}
                                                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl text-sm font-medium transition-colors"
                                          >
                                                Cancel
                                          </button>
                                          <button
                                                onClick={handleDeleteAPI}
                                                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
                                          >
                                                Confirm Delete
                                          </button>
                                    </div>
                              </motion.div>
                        </div>
                  )}
            </AnimatePresence>
      );
}