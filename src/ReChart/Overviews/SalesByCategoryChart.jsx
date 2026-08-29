import {
      ResponsiveContainer,
      ComposedChart,
      Bar,
      Line,
      XAxis,
      YAxis,
      Tooltip,
      CartesianGrid
} from 'recharts';

export default function SalesByCategoryChart() {

      // ============================= បង្កើត Data សម្រាប់ Bar និង Line =============================
      const data = [
            { category: 'Cat 1', bar1: 420, bar2: 80, line1: 350, line2: 380 },
            { category: 'Cat 2', bar2: 90, bar1: 520, line1: 420, line2: 460 },
            { category: 'Cat 3', bar2: 120, bar1: 680, line1: 570, line2: 600 },
            { category: 'Cat 4', bar2: 70, bar1: 560, line1: 490, line2: 520 },
            { category: 'Cat 5', bar2: 60, bar1: 420, line1: 380, line2: 400 },
            { category: 'Cat 6', bar2: 40, bar1: 300, line1: 270, line2: 300 },
            { category: 'Cat 7', bar2: 100, bar1: 720, line1: 610, line2: 650 },
            { category: 'Cat 8', bar2: 85, bar1: 600, line1: 560, line2: 580 },
      ];

      return (
            <div className="w-full h-96 bg-white p-6 rounded-2xl shadow-sm border">

                  {/* --------------------- Header ជាមួយចំណងជើង និង Dropdown --------------------- */}
                  <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-gray-800">Sales by Category</h2>
                        <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-600 bg-white outline-none">
                              <option>This Month</option>
                              <option>Last Month</option>
                              <option>This Year</option>
                        </select>
                  </div>

                  {/* --------------------- Chart Container --------------------- */}
                  <ResponsiveContainer width="100%" height="80%">
                        <ComposedChart data={data}>

                              <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#f3f4f6"
                              />

                              <XAxis
                                    dataKey="category"
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

                              {/* --------------------- របារឈរធំ (ពណ៌ខៀវ) --------------------- */}
                              <Bar
                                    dataKey="bar1"
                                    fill="#3b82f6"
                                    barSize={16}
                                    radius={[6, 6, 0, 0]}
                              />

                              {/* --------------------- របារឈរតូច (ពណ៌ក្រហម) --------------------- */}
                              <Bar
                                    dataKey="bar2"
                                    fill="#ef4444"
                                    barSize={16}
                                    radius={[6, 6, 0, 0]}
                              />

                              {/* --------------------- ខ្សែកោងដាច់ៗ (Dashed Line) --------------------- */}
                              <Line
                                    type="monotone"
                                    dataKey="line1"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    strokeDasharray="4 4"
                                    dot={false}
                              />

                              {/* --------------------- ខ្សែកោងពិន្ទុពណ៌លឿង (Solid Line with Dots) --------------------- */}
                              <Line
                                    type="monotone"
                                    dataKey="line2"
                                    stroke="#eab308"
                                    strokeWidth={2.5}
                                    dot={{ r: 4, fill: "#eab308", strokeWidth: 2, stroke: "#fff" }}
                              />

                        </ComposedChart>
                  </ResponsiveContainer>
            </div>
      );
}