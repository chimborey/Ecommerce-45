import {
      ResponsiveContainer,
      AreaChart,
      Area,
      XAxis,
      YAxis,
      Tooltip,
      CartesianGrid,
      Legend
} from 'recharts';

export default function RevenueOverviewChart() {

      // ============================= បង្កើត Data សម្រាប់បន្ទាត់ទាំង ៣ =============================
      const data = [
            { month: 'Jan', revenueA: 500, revenueB: 400, revenueC: 300 },
            { month: 'Feb', revenueA: 300, revenueB: 350, revenueC: 450 },
            { month: 'Mar', revenueA: 600, revenueB: 500, revenueC: 400 },
            { month: 'Apr', revenueA: 400, revenueB: 450, revenueC: 550 },
            { month: 'May', revenueA: 700, revenueB: 600, revenueC: 500 },
            { month: 'Jun', revenueA: 500, revenueB: 600, revenueC: 700 },
            { month: 'Jul', revenueA: 800, revenueB: 700, revenueC: 600 },
            { month: 'Aug', revenueA: 600, revenueB: 700, revenueC: 800 },
            { month: 'Sep', revenueA: 900, revenueB: 800, revenueC: 700 },
            { month: 'Oct', revenueA: 700, revenueB: 900, revenueC: 800 },
            { month: 'Nov', revenueA: 1100, revenueB: 950, revenueC: 850 },
            { month: 'Dec', revenueA: 800, revenueB: 900, revenueC: 1100 },
      ];

      return (
            <div className="w-full h-96 bg-white p-6 rounded-2xl shadow-sm border">

                  {/* --------------------- ចំណងជើង Chart --------------------- */}
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Revenue Overview</h2>

                  <ResponsiveContainer width="100%" height="85%">
                        {/* ប្ដូរពី LineChart មកជា AreaChart ដើម្បីឱ្យស្គាល់ការដាក់ Background Fill */}
                        <AreaChart data={data}>

                              {/* --------------------- កំណត់ពណ៌ Gradient សម្រាប់ស្រមោលនីមួយៗ --------------------- */}
                              <defs>
                                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="5%" stopColor="#d97706" stopOpacity={0.3} />
                                          <stop offset="95%" stopColor="#d97706" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorDark" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="5%" stopColor="#111827" stopOpacity={0.3} />
                                          <stop offset="95%" stopColor="#111827" stopOpacity={0} />
                                    </linearGradient>
                              </defs>

                              <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#f3f4f6"
                              />

                              <XAxis
                                    dataKey="month"
                                    stroke="#9ca3af"
                                    fontSize={12}
                                    tickLine={false}
                              />
                              <YAxis
                                    stroke="#9ca3af"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                              />

                              <Tooltip />
                              <Legend />

                              {/* --------------------- Area ទី ៣ (ពណ៌ខ្មៅ + ស្រមោល) --------------------- */}
                              <Area
                                    type="monotone"
                                    dataKey="revenueC"
                                    stroke="#111827"
                                    strokeWidth={2.5}
                                    fillOpacity={1}
                                    fill="url(#colorDark)"
                                    name="Series C"
                              />

                              {/* --------------------- Area ទី ២ (ពណ៌ត្នោត/មាស + ស្រមោល) --------------------- */}
                              <Area
                                    type="monotone"
                                    dataKey="revenueB"
                                    stroke="#d97706"
                                    strokeWidth={2.5}
                                    fillOpacity={1}
                                    fill="url(#colorOrange)"
                                    name="Series B"
                              />

                              {/* --------------------- Area ទី ១ (ពណ៌ខៀវ + ស្រមោល) --------------------- */}
                              <Area
                                    type="monotone"
                                    dataKey="revenueA"
                                    stroke="#3b82f6"
                                    strokeWidth={2.5}
                                    fillOpacity={1}
                                    fill="url(#colorBlue)"
                                    name="Series A"
                              />

                        </AreaChart>
                  </ResponsiveContainer>
            </div>
      );
}