import { useState } from "react";
import { rolesData } from "../../../Data/Dashboard/SettingData";

export default function Setting_General() {
      // ------------------------------- Role -------------------------------
      const [isActiveRole, setIsActiveRole] = useState("All");

      // ------------------------------- Timezone -------------------------------
      const [selectedTimezone, setSelectedTimezone] = useState("Asia/Phnom_Penh");

      // ------------------------------- Business Hours -------------------------------
      const [businessHours, setBusinessHours] = useState([
            { day: "Monday", open: "08:00", close: "17:00", closed: false },
            { day: "Tuesday", open: "08:00", close: "17:00", closed: false },
            { day: "Wednesday", open: "08:00", close: "17:00", closed: false },
            { day: "Thursday", open: "08:00", close: "17:00", closed: false },
            { day: "Friday", open: "08:00", close: "17:00", closed: false },
            { day: "Saturday", open: "08:00", close: "17:00", closed: false },
            { day: "Sunday", open: "08:00", close: "17:00", closed: true },
      ]);

      const handleHourChange = (index, field, value) => {
            const updatedHours = [...businessHours];
            updatedHours[index][field] = value;
            setBusinessHours(updatedHours);
      };

      // Filter roles based on the active tab/button with proper condition for Admin
      const filteredRoles = rolesData.filter((item) => {
            if (isActiveRole === "All") return true;
            if (isActiveRole === "Admin") {
                  return item.active.toLowerCase().includes("admin");
            }
            return item.active.toLowerCase() === isActiveRole.toLowerCase();
      });

      return (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* =========================== Business Information =========================== */}
                  <div className="w-full overflow-hidden py-3 px-3 rounded-xl border-gray-100 border shadow-sm backdrop-blur-sm duration-300 transition-all hover:shadow-md hover:backdrop-blur-md group">
                        <div className="flex flex-col space-y-5">

                              {/* Header */}
                              <div className="flex border-b border-gray-200 py-3 px-3 justify-between items-center">
                                    <h3 className="font-semibold text-gray-700">Business Information</h3>
                                    <p className="text-sm text-gray-400 cursor-pointer">Edit</p>
                              </div>

                              <div className="flex flex-col space-y-3">
                                    {/* Image */}
                                    <div className="flex items-center flex-col justify-center gap-3">
                                          <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wcQ8p6idKBKtHuMDqkShx4Rn9g_d0ZdJPSxdK2ThMg&s=10"
                                                alt="Business Logo"
                                                className="w-12 h-12 rounded-full group-hover:rotate-6 duration-300 transition-all object-cover"
                                          />
                                    </div>

                                    {/* ------------------------------- Form ------------------------------- */}
                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                          {/* Business Name */}
                                          <div className="flex flex-col space-y-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Business Name</label>
                                                <input
                                                      type="text"
                                                      placeholder="Business Name"
                                                      className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945]"
                                                />
                                          </div>

                                          {/* Business Type */}
                                          <div className="flex flex-col space-y-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Business Type</label>
                                                <input
                                                      type="text"
                                                      placeholder="Business Type"
                                                      className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945]"
                                                />
                                          </div>

                                          {/* Business Phone */}
                                          <div className="flex flex-col space-y-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Business Phone</label>
                                                <input
                                                      type="text"
                                                      placeholder="Business Phone"
                                                      className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945]"
                                                />
                                          </div>

                                          {/* Business Address */}
                                          <div className="flex flex-col space-y-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Business Address</label>
                                                <input
                                                      type="text"
                                                      placeholder="Business Address"
                                                      className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945]"
                                                />
                                          </div>

                                          {/* Business Country */}
                                          <div className="flex flex-col space-y-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Business Country</label>
                                                <input
                                                      type="text"
                                                      placeholder="Business Country"
                                                      className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945]"
                                                />
                                          </div>

                                          {/* Business QR Selection (កែសម្រួលថ្មីឱ្យទំនង និងងាយស្រួលចុចជ្រើសរើស) */}
                                          <div className="flex flex-col space-y-2 md:col-span-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Accepted Payment QR Codes</label>
                                                <div className="grid grid-cols-3 gap-3">
                                                      {/* ABA Bank QR Option */}
                                                      <div className="flex items-center gap-2.5 p-2 rounded-lg border border-gray-200 hover:border-[#0F2945] cursor-pointer transition-all bg-white shadow-xs">
                                                            <img
                                                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaTU8DRjv1TobkIpcLL8_efH0_7pP8TbFV7rFYclmjg&s=10"
                                                                  alt="ABA QR"
                                                                  className="w-9 h-9 rounded-full object-cover"
                                                            />
                                                            <div className="flex flex-col">
                                                                  <span className="text-[11px] font-medium text-gray-700">ABA Bank</span>
                                                                  <span className="text-[9px] text-gray-400">KHQR Enabled</span>
                                                            </div>
                                                      </div>

                                                      {/* ACLEDA Bank QR Option */}
                                                      <div className="flex items-center gap-2.5 p-2 rounded-lg border border-gray-200 hover:border-[#0F2945] cursor-pointer transition-all bg-white shadow-xs">
                                                            <img
                                                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUR7DzYWx5qN7cwjscPZL3jVR9TVjhcHLqSYkilQQhNw&s=10"
                                                                  alt="ACLEDA QR"
                                                                  className="w-9 h-9 rounded-full object-cover"
                                                            />
                                                            <div className="flex flex-col">
                                                                  <span className="text-[11px] font-medium text-gray-700">ACLEDA</span>
                                                                  <span className="text-[9px] text-gray-400">KHQR Enabled</span>
                                                            </div>
                                                      </div>

                                                      {/* Wing Bank QR Option */}
                                                      <div className="flex items-center gap-2.5 p-2 rounded-lg border border-gray-200 hover:border-[#0F2945] cursor-pointer transition-all bg-white shadow-xs">
                                                            <img
                                                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeGLWGL6p_ssCQfXrUG4W0zWL21cLnc2Dl60X9ueRJw&s"
                                                                  alt="Wing QR"
                                                                  className="w-9 h-9 rounded-full object-cover"
                                                            />
                                                            <div className="flex flex-col">
                                                                  <span className="text-[11px] font-medium text-gray-700">Wing Bank</span>
                                                                  <span className="text-[9px] text-gray-400">KHQR Enabled</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Business Description */}
                                          <div className="flex flex-col space-y-2 md:col-span-2">
                                                <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Business Description</label>
                                                <textarea
                                                      placeholder="Type your comment here..."
                                                      className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945]"
                                                      rows="3"
                                                ></textarea>
                                          </div>
                                    </form>
                              </div>

                              {/* ------------------------------- Button Edit/Save ------------------------------- */}
                              <div className="flex justify-end pt-2">
                                    <button
                                          type="button"
                                          className="py-2 px-5 rounded-lg bg-[#0F2945] text-white text-xs font-medium shadow-sm transition-all duration-300 hover:bg-opacity-90 active:scale-95 cursor-pointer"
                                    >
                                          Edit Information
                                    </button>
                              </div>

                        </div>
                  </div>

                  {/* =========================== Roles =========================== */}
                  <div className="w-full overflow-hidden py-3 px-3 rounded-xl border-gray-100 border shadow-sm backdrop-blur-sm duration-300 transition-all hover:shadow-md hover:backdrop-blur-md group">
                        <div className="flex flex-col space-y-5">
                              {/* Role Header */}
                              <div className="flex border-b border-gray-200 py-3 px-3 justify-between items-center">
                                    <h3 className="font-semibold text-gray-700 capitalize">Roles</h3>
                                    <p className="text-sm text-gray-400 cursor-pointer">Manage</p>
                              </div>

                              {/* Active Filter Buttons */}
                              <div className="flex w-full justify-between gap-3 items-center">
                                    {["All", "Admin", "Staff"].map((role) => (
                                          <button
                                                key={role}
                                                onClick={() => setIsActiveRole(role)}
                                                className={`w-full py-2 px-2 rounded-lg border border-gray-300 transition-all duration-300 text-xs font-medium ${isActiveRole === role
                                                      ? "bg-[#0F2945] text-white border-[#0F2945]"
                                                      : "hover:bg-gray-100 text-gray-600"
                                                      }`}
                                          >
                                                {role}
                                          </button>
                                    ))}
                              </div>

                              {/* Roles Data List */}
                              <div className="flex flex-col space-y-3 max-h-[400px] no-scrollbar overflow-y-auto pr-1">
                                    {filteredRoles.length > 0 ? (
                                          filteredRoles.map((item) => {
                                                const { id, active, imgUrl, phone, email } = item;
                                                return (
                                                      <div key={id} className="w-full py-3 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 shadow-sm duration-300 transition-all group/item">
                                                            <div className="flex items-center justify-between gap-4">
                                                                  {/* រូបភាព និង ឈ្មោះ/Email */}
                                                                  <div className="flex items-center gap-3.5 min-w-0">
                                                                        <img src={imgUrl} alt={active} className="w-12 h-12 rounded-xl group-hover/item:rotate-6 duration-300 transition-all object-cover shadow-sm shrink-0" />
                                                                        <div className="min-w-0">
                                                                              <h4 className="text-sm font-semibold text-gray-800 capitalize truncate">{active}</h4>
                                                                              <p className="text-xs text-gray-400 truncate">{email}</p>
                                                                        </div>
                                                                  </div>
                                                                  {/* លេខទូរស័ព្ទ */}
                                                                  <div className="text-right shrink-0">
                                                                        <span className="text-xs font-semibold text-gray-600 bg-gray-100 py-1.5 px-2.5 rounded-lg border border-gray-200">
                                                                              +855 {phone}
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                );
                                          })
                                    ) : (
                                          <p className="text-xs text-center text-gray-400 py-6">No records found for {isActiveRole}</p>
                                    )}
                              </div>
                        </div>
                  </div>

                  {/* =========================== Business Working Hours (Mon - Sun) =========================== */}
                  <div className="w-full overflow-hidden py-3 px-3 rounded-xl border-gray-100 border shadow-sm backdrop-blur-sm duration-300 transition-all hover:shadow-md hover:backdrop-blur-md group md:col-span-2">
                        <div className="flex flex-col space-y-5">
                              {/* Header */}
                              <div className="flex border-b border-gray-200 py-3 px-3 justify-between items-center">
                                    <h3 className="font-semibold text-gray-700 capitalize">Business Working Hours (Mon - Sun)</h3>
                                    <p className="text-sm text-gray-400 cursor-pointer">Schedule</p>
                              </div>

                              {/* Working Hours List */}
                              <div className="flex flex-col space-y-2.5 px-1">
                                    {businessHours.map((item, index) => (
                                          <div key={item.day} className="flex flex-col sm:flex-row items-center justify-between py-2 px-3 bg-white rounded-lg border border-gray-200 gap-3">
                                                <div className="w-full sm:w-32 flex items-center justify-between sm:justify-start gap-3">
                                                      <span className="text-xs font-semibold text-gray-700">{item.day}</span>
                                                      <label className="flex items-center gap-1.5 cursor-pointer text-xs text-gray-400">
                                                            <input
                                                                  type="checkbox"
                                                                  checked={item.closed}
                                                                  onChange={(e) => handleHourChange(index, "closed", e.target.checked)}
                                                                  className="rounded border-gray-300 text-[#0F2945] focus:ring-[#0F2945]"
                                                            />
                                                            Closed
                                                      </label>
                                                </div>

                                                {!item.closed ? (
                                                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                                                            <input
                                                                  type="time"
                                                                  value={item.open}
                                                                  onChange={(e) => handleHourChange(index, "open", e.target.value)}
                                                                  className="py-1.5 px-2.5 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-600 outline-none border border-gray-200 focus:border-[#0F2945] bg-white"
                                                            />
                                                            <span className="text-xs text-gray-400">to</span>
                                                            <input
                                                                  type="time"
                                                                  value={item.close}
                                                                  onChange={(e) => handleHourChange(index, "close", e.target.value)}
                                                                  className="py-1.5 px-2.5 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-600 outline-none border border-gray-200 focus:border-[#0F2945] bg-white"
                                                            />
                                                      </div>
                                                ) : (
                                                      <span className="text-xs text-red-400 font-medium italic w-full sm:w-auto text-right">Closed All Day</span>
                                                )}
                                          </div>
                                    ))}
                              </div>

                              {/* Save Button for Working Hours */}
                              <div className="flex justify-end pt-2">
                                    <button
                                          type="button"
                                          className="py-2 px-5 rounded-lg bg-[#0F2945] text-white text-xs font-medium shadow-sm transition-all duration-300 hover:bg-opacity-90 active:scale-95"
                                    >
                                          Save Hours
                                    </button>
                              </div>
                        </div>
                  </div>

                  {/* =========================== Timezone Formating =========================== */}
                  <div className="w-full overflow-hidden py-3 px-3 rounded-xl border-gray-100 border shadow-sm backdrop-blur-sm duration-300 transition-all hover:shadow-md hover:backdrop-blur-md group md:col-span-2">
                        <div className="flex flex-col space-y-5">
                              {/* Header */}
                              <div className="flex border-b border-gray-200 py-3 px-3 justify-between items-center">
                                    <h3 className="font-semibold text-gray-700 capitalize">Timezone & Formatting</h3>
                                    <p className="text-sm text-gray-400 cursor-pointer">Configure</p>
                              </div>

                              {/* Timezone Settings Form */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-1">
                                    {/* Select Timezone */}
                                    <div className="flex flex-col space-y-2">
                                          <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">System Timezone</label>
                                          <select
                                                value={selectedTimezone}
                                                onChange={(e) => setSelectedTimezone(e.target.value)}
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945] bg-white cursor-pointer"
                                          >
                                                <option value="Asia/Phnom_Penh">(GMT+07:00) Phnom Penh</option>
                                                <option value="Asia/Singapore">(GMT+08:00) Singapore</option>
                                                <option value="UTC">(GMT+00:00) Coordinated Universal Time</option>
                                          </select>
                                    </div>

                                    {/* Date Format */}
                                    <div className="flex flex-col space-y-2">
                                          <label className="text-xs capitalize group-hover:text-[#0F2945] text-gray-500">Date Format</label>
                                          <select
                                                className="py-2 px-3 rounded-lg shadow-sm text-xs transition-all duration-300 text-gray-500 outline-none border border-gray-200 focus:border-[#0F2945] bg-white cursor-pointer"
                                          >
                                                <option value="DD/MM/YYYY">DD / MM / YYYY</option>
                                                <option value="MM/DD/YYYY">MM / DD / YYYY</option>
                                                <option value="YYYY-MM-DD">YYYY - MM - DD</option>
                                          </select>
                                    </div>
                              </div>

                              {/* Save Button for Timezone */}
                              <div className="flex justify-end pt-2">
                                    <button
                                          type="button"
                                          className="py-2 px-5 rounded-lg bg-[#0F2945] text-white text-xs font-medium shadow-sm transition-all duration-300 hover:bg-opacity-90 active:scale-95"
                                    >
                                          Save Timezone
                                    </button>
                              </div>
                        </div>
                  </div>
            </section>
      );
}