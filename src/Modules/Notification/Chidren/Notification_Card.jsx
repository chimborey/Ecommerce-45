import { useState } from "react";
import { notification_CardData } from "../../../Data/Dashboard/NotificationData";

export default function Notification_Card() {
      // រក្សាទុក State សម្រាប់ Toggle Switches នីមួយៗ
      const [settings, setSettings] = useState(() => {
            const initialState = {};
            notification_CardData.forEach((card) => {
                  card.items.forEach((item, idx) => {
                        initialState[`${card.id}-${idx}`] = item.defaultState;
                  });
            });
            return initialState;
      });

      const handleToggle = (cardId, index) => {
            const key = `${cardId}-${index}`;
            setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
      };

      return (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {notification_CardData.map((card) => {
                        const { id, name, span, items } = card;
                        return (
                              <div
                                    key={id}
                                    className="w-full bg-white overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200 group flex flex-col justify-between"
                              >
                                    {/* --------------------------------------- Header (Name + Span) --------------------------------------- */}
                                    <div className="flex flex-col border-b border-gray-100 py-4 px-4 bg-gray-50/50">
                                          <h3 className="text-sm font-bold text-gray-800 capitalize tracking-wide">{name}</h3>
                                          <span className="text-xs text-gray-400 mt-0.5">{span}</span>
                                    </div>

                                    {/* --------------------------------------- Items List --------------------------------------- */}
                                    <div className="flex flex-col divide-y divide-gray-50 p-2">
                                          {items.map((subItem, index) => {
                                                const isChecked = settings[`${id}-${index}`];
                                                return (
                                                      <div
                                                            key={index}
                                                            className="flex items-center justify-between py-2.5 px-2 hover:bg-gray-50/80 rounded-lg transition-colors duration-200"
                                                      >
                                                            {/* Icon & Label */}
                                                            <div className="flex items-center gap-3">
                                                                  <span className="text-base text-gray-500 bg-gray-100 p-2 rounded-lg group-hover:text-[#0F2945] transition-colors">
                                                                        {subItem.icon}
                                                                  </span>
                                                                  <span className="text-xs font-semibold text-gray-700 capitalize">
                                                                        {subItem.label}
                                                                  </span>
                                                            </div>

                                                            {/* Modern Toggle Switch Button */}
                                                            <button
                                                                  type="button"
                                                                  onClick={() => handleToggle(id, index)}
                                                                  className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
                                                                        isChecked ? "bg-[#0F2945]" : "bg-gray-300"
                                                                  }`}
                                                            >
                                                                  <div
                                                                        className={`bg-white w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ${
                                                                              isChecked ? "translate-x-5" : "translate-x-0"
                                                                        }`}
                                                                  />
                                                            </button>
                                                      </div>
                                                );
                                          })}
                                    </div>
                              </div>
                        );
                  })}
            </section>
      );
}