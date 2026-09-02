import { customerCard } from "../../../Data/Dashboard/CustomerData";

export default function Customer_Card() {
      return (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {
                        customerCard.map((item) => {
                              const { id, title, count, growth, isIncrease, icon, iconBg, process } = item;
                              return (
                                    <div
                                          key={id}
                                          className="w-full overflow-hidden p-4 rounded-xl border border-gray-100 border-l-4 border-l-emerald-500 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4"
                                    >
                                          {/* ផ្នែកខាងលើ៖ Title, Count, Growth និង Icon */}
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
                                                      <h3 className="text-2xl font-bold text-gray-800 mt-1">{count}</h3>
                                                      <div className="flex items-center gap-1.5 mt-2">
                                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isIncrease ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                                                  {growth}
                                                            </span>
                                                            <span className="text-xs text-gray-400">vs last month</span>
                                                      </div>
                                                </div>
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBg}`}>
                                                      {icon}
                                                </div>
                                          </div>
                                          <div className="w-full pt-2 border-t border-gray-50">
                                                {process}
                                          </div>
                                    </div>
                              );
                        })
                  }
            </section>
      );
}