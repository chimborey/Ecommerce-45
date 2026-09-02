import { useState } from "react";
import { FaReceipt, FaFileInvoiceDollar } from "react-icons/fa";

export default function Receipt_Setting() {
      // ------------------------------- Receipt State -------------------------------
      const [receiptConfig, setReceiptConfig] = useState({
            storeName: "My Awesome Shop",
            phone: "+855 12 345 678",
            address: "Monivong Blvd, Phnom Penh",
            taxId: "VAT-10029384",
            receiptSize: "80mm",
            footerMessage: "Thank you for shopping with us! Please come again.",
            showLogo: true,
            showTaxId: true,
            showQR: true,
            selectedQrIndex: 0, // បន្ថែមសម្រាប់កំណត់ថាជ្រើសរើស QR មួយណា
      });

      const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            setReceiptConfig((prev) => ({
                  ...prev,
                  [name]: type === "checkbox" ? checked : value,
            }));
      };

      // បញ្ជីរូបភាព QR Payments របស់អ្នក
      const QRPayment = [
            {
                  id: 0,
                  name: "ABA Bank / KHQR",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaTU8DRjv1TobkIpcLL8_efH0_7pP8TbFV7rFYclmjg&s=10"
            },
            {
                  id: 1,
                  name: "ACLEDA Bank",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUR7DzYWx5qN7cwjscPZL3jVR9TVjhcHLqSYkilQQhNw&s=10"
            },
            {
                  id: 2,
                  name: "Wing Bank",
                  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeGLWGL6p_ssCQfXrUG4W0zWL21cLnc2Dl60X9ueRJw&s"
            }
      ];

      return (
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* =========================== Settings Form (2 Columns on Large Screen) =========================== */}
                  <div className="lg:col-span-2 w-full overflow-hidden py-4 px-4 rounded-xl border border-gray-100 shadow-sm bg-white backdrop-blur-sm">
                        <div className="flex flex-col space-y-5">
                              {/* Header */}
                              <div className="flex border-b border-gray-200 pb-3 justify-between items-center">
                                    <div className="flex items-center gap-2">
                                          <FaReceipt className="text-[#0F2945]" />
                                          <h3 className="font-semibold text-gray-700 capitalize">Receipt Customization</h3>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                          <FaFileInvoiceDollar className="text-sm text-[#0F2945]" />
                                          <span>POS Printer Setup</span>
                                    </div>
                              </div>

                              {/* Form Fields */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {/* Store Name */}
                                    <div className="flex flex-col space-y-1.5">
                                          <label className="text-xs text-gray-500 font-medium">Store Name</label>
                                          <input
                                                type="text"
                                                name="storeName"
                                                value={receiptConfig.storeName}
                                                onChange={handleChange}
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-700 outline-none border border-gray-200 focus:border-[#0F2945]"
                                          />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="flex flex-col space-y-1.5">
                                          <label className="text-xs text-gray-500 font-medium">Phone Number</label>
                                          <input
                                                type="text"
                                                name="phone"
                                                value={receiptConfig.phone}
                                                onChange={handleChange}
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-700 outline-none border border-gray-200 focus:border-[#0F2945]"
                                          />
                                    </div>

                                    {/* Address */}
                                    <div className="flex flex-col space-y-1.5">
                                          <label className="text-xs text-gray-500 font-medium">Store Address</label>
                                          <input
                                                type="text"
                                                name="address"
                                                value={receiptConfig.address}
                                                onChange={handleChange}
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-700 outline-none border border-gray-200 focus:border-[#0F2945]"
                                          />
                                    </div>

                                    {/* Tax ID / VAT */}
                                    <div className="flex flex-col space-y-1.5">
                                          <label className="text-xs text-gray-500 font-medium">Tax ID / VAT Number</label>
                                          <input
                                                type="text"
                                                name="taxId"
                                                value={receiptConfig.taxId}
                                                onChange={handleChange}
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-700 outline-none border border-gray-200 focus:border-[#0F2945]"
                                          />
                                    </div>

                                    {/* Receipt Size */}
                                    <div className="flex flex-col space-y-1.5">
                                          <label className="text-xs text-gray-500 font-medium">Thermal Paper Size</label>
                                          <select
                                                name="receiptSize"
                                                value={receiptConfig.receiptSize}
                                                onChange={handleChange}
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-700 outline-none border border-gray-200 focus:border-[#0F2945] bg-white cursor-pointer"
                                          >
                                                <option value="80mm">80mm (Standard POS)</option>
                                                <option value="58mm">58mm (Mini Mobile Printer)</option>
                                          </select>
                                    </div>

                                    {/* Select Payment QR Code */}
                                    <div className="flex flex-col space-y-1.5 md:col-span-2">
                                          <label className="text-xs text-gray-500 font-medium">Select Payment QR Code</label>
                                          <div className="grid grid-cols-3 gap-3">
                                                {QRPayment.map((item, index) => (
                                                      <div
                                                            key={item.id}
                                                            onClick={() => setReceiptConfig(prev => ({ ...prev, selectedQrIndex: index }))}
                                                            className={`cursor-pointer border rounded-lg p-2 flex flex-col items-center justify-center gap-2 transition-all ${receiptConfig.selectedQrIndex === index
                                                                  ? "border-[#0F2945] bg-blue-50/50 ring-1 ring-[#0F2945]"
                                                                  : "border-gray-200 hover:border-gray-300"
                                                                  }`}
                                                      >
                                                            <img
                                                                  src={item.img}
                                                                  alt={item.name}
                                                                  className="w-10 h-10 rounded-full object-cover shadow-sm"
                                                            />
                                                            <span className="text-[10px] text-gray-600 font-medium text-center">{item.name}</span>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Footer Message */}
                                    <div className="flex flex-col space-y-1.5 md:col-span-2">
                                          <label className="text-xs text-gray-500 font-medium">Footer Thank You Message</label>
                                          <textarea
                                                name="footerMessage"
                                                value={receiptConfig.footerMessage}
                                                onChange={handleChange}
                                                rows="2"
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-700 outline-none border border-gray-200 focus:border-[#0F2945]"
                                          ></textarea>
                                    </div>
                              </div>

                              {/* Toggles Settings */}
                              <div className="flex flex-wrap gap-6 pt-2 border-t border-gray-100">
                                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-600">
                                          <input
                                                type="checkbox"
                                                name="showLogo"
                                                checked={receiptConfig.showLogo}
                                                onChange={handleChange}
                                                className="rounded border-gray-300 text-[#0F2945] focus:ring-[#0F2945]"
                                          />
                                          Show Logo
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-600">
                                          <input
                                                type="checkbox"
                                                name="showTaxId"
                                                checked={receiptConfig.showTaxId}
                                                onChange={handleChange}
                                                className="rounded border-gray-300 text-[#0F2945] focus:ring-[#0F2945]"
                                          />
                                          Show Tax ID
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-600">
                                          <input
                                                type="checkbox"
                                                name="showQR"
                                                checked={receiptConfig.showQR}
                                                onChange={handleChange}
                                                className="rounded border-gray-300 text-[#0F2945] focus:ring-[#0F2945]"
                                          />
                                          Show Payment QR
                                    </label>
                              </div>

                              {/* Save Button */}
                              <div className="flex justify-end pt-2">
                                    <button
                                          type="button"
                                          className="py-2 px-5 rounded-lg bg-[#0F2945] text-white text-xs font-medium shadow-sm transition-all duration-300 hover:bg-opacity-90 active:scale-95 cursor-pointer"
                                    >
                                          Save Receipt Settings
                                    </button>
                              </div>
                        </div>
                  </div>

                  {/* =========================== Live Receipt Preview =========================== */}
                  <div className="w-full overflow-hidden py-4 px-4 rounded-xl border border-gray-100 shadow-sm bg-white backdrop-blur-sm flex flex-col">
                        <div className="flex border-b border-gray-200 pb-3 justify-between items-center mb-4">
                              <h3 className="font-semibold text-gray-700 capitalize">Live Preview</h3>
                              <span className="text-[10px] bg-gray-100 text-gray-500 py-1 px-2 rounded-md font-mono">{receiptConfig.receiptSize}</span>
                        </div>

                        {/* Receipt Paper Container */}
                        <div className="flex-1 bg-gray-50 border border-dashed border-gray-300 rounded-lg p-4 flex justify-center items-center">
                              <div className={`bg-white shadow-sm border border-gray-200 p-4 font-mono text-[11px] text-gray-700 flex flex-col space-y-3 transition-all duration-300 ${receiptConfig.receiptSize === "58mm" ? "w-[200px]" : "w-[260px]"}`}>

                                    {/* Store Info */}
                                    <div className="text-center flex flex-col items-center space-y-1">
                                          {receiptConfig.showLogo && (
                                                <img
                                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wcQ8p6idKBKtHuMDqkShx4Rn9g_d0ZdJPSxdK2ThMg&s=10"
                                                      alt="Business Logo"
                                                      className="w-12 h-12 rounded-full group-hover:rotate-6 duration-300 transition-all object-cover"
                                                />
                                          )}
                                          <h4 className="font-bold text-xs uppercase">{receiptConfig.storeName || "Store Name"}</h4>
                                          <p className="text-[10px] text-gray-500">{receiptConfig.address}</p>
                                          <p className="text-[10px] text-gray-500">Tel: {receiptConfig.phone}</p>
                                          {receiptConfig.showTaxId && receiptConfig.taxId && (
                                                <p className="text-[10px] text-gray-500 font-semibold">VAT ID: {receiptConfig.taxId}</p>
                                          )}
                                    </div>

                                    <div className="border-t border-dashed border-gray-300 my-1"></div>

                                    {/* Invoice Meta */}
                                    <div className="flex justify-between text-[10px] text-gray-500">
                                          <span>Date: 06/06/2026</span>
                                          <span>Time: 14:30</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500">Invoice: #INV-00123</div>

                                    <div className="border-t border-dashed border-gray-300 my-1"></div>

                                    {/* Items Table Mock */}
                                    <div className="flex flex-col space-y-1.5">
                                          <div className="flex justify-between font-bold">
                                                <span>Item</span>
                                                <span>Total</span>
                                          </div>
                                          <div className="flex justify-between text-[10px]">
                                                <span>1x Coffee Latte</span>
                                                <span>$3.50</span>
                                          </div>
                                          <div className="flex justify-between text-[10px]">
                                                <span>2x Croissant</span>
                                                <span>$5.00</span>
                                          </div>
                                    </div>

                                    <div className="border-t border-dashed border-gray-300 my-1"></div>

                                    {/* Totals */}
                                    <div className="flex flex-col space-y-1">
                                          <div className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>$8.50</span>
                                          </div>
                                          <div className="flex justify-between font-bold text-xs">
                                                <span>TOTAL</span>
                                                <span>$8.50</span>
                                          </div>
                                    </div>

                                    <div className="border-t border-dashed border-gray-300 my-1"></div>

                                    {/* QR Code Display on Preview */}
                                    {receiptConfig.showQR && (
                                          <div className="flex flex-col items-center justify-center py-1 space-y-1">
                                                <div className="w-20 h-20 bg-white p-1 flex items-center justify-center rounded border border-gray-300 shadow-sm">
                                                      <img
                                                            src={QRPayment[receiptConfig.selectedQrIndex].img}
                                                            alt="Payment QR"
                                                            className="w-full h-full object-contain"
                                                      />
                                                </div>
                                                <span className="text-[9px] text-gray-500 font-semibold">
                                                      {QRPayment[receiptConfig.selectedQrIndex].name}
                                                </span>
                                          </div>
                                    )}

                                    {/* Footer Message */}
                                    <div className="text-center text-[10px] text-gray-500 pt-2 italic">
                                          {receiptConfig.footerMessage}
                                    </div>

                              </div>
                        </div>
                  </div>
            </section>
      );
}