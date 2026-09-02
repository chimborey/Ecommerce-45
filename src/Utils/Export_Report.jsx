import { useState } from 'react';

export default function Export_Report() {
      const [isOpen, setIsOpen] = useState(false);

      const handleExport = (type) => {
            // កន្លែងសម្រាប់សរសេរកូដទាញយកឯកសារ (Export logic) តាមប្រភេទនីមួយៗ
            console.log(`Exporting as ${type}...`);
            setIsOpen(false);
      };

      return (
            <div className="relative inline-block text-left">

                  {/* ===================== ប៊ូតុងមេសម្រាប់ចុចបើក Menu ===================== */}
                  <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                        {/* Download Icon */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        <span>Export Report</span>

                        {/* Arrow Down Icon */}
                        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                  </button>

                  {/* ===================== Dropdown Menu ពេលចុចលើប៊ូតុង ===================== */}
                  {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-30 animate-fadeIn">

                              <button
                                    onClick={() => handleExport('PDF')}
                                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                              >
                                    <span className="text-red-500 font-bold">📄</span> Download PDF
                              </button>

                              <button
                                    onClick={() => handleExport('Excel')}
                                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                              >
                                    <span className="text-green-600 font-bold">📊</span> Download Excel
                              </button>

                              <button
                                    onClick={() => handleExport('CSV')}
                                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                              >
                                    <span className="text-blue-500 font-bold">📑</span> Download CSV
                              </button>

                        </div>
                  )}

            </div>
      );
}