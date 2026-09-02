import { Sparkles, ArrowRight, Lightbulb, } from "lucide-react";

// ============= AI Insights Data ====================
const aiInsightsData = [
      {
            id: 1,
            title: "Peak Hours Alert:",
            description: "Customer traffic increases by ",
            highlight: "45%",
            remainingText: " between 2:00 PM and 4:00 PM. Consider allocating more staff during this window.",
            type: "peak"
      },
      {
            id: 2,
            title: "Inventory Recommendation:",
            description: "Item ",
            highlight: "Organic Fresh Lemon",
            remainingText: " is selling 3x faster than usual. Restock soon to prevent running out.",
            type: "inventory"
      },
      {
            id: 3,
            title: "Sales Trend:",
            description: "Iced Caramel Macchiato remains the top revenue driver this week, contributing ",
            highlight: "28% ",
            remainingText: "of total beverage sales.",
            type: "trend"
      }
];

export default function Overviews_AIInsight() {
      return (
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                  {/* HEADER */}
                  <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                        <div className="flex items-center gap-2">
                              <div className="rounded-xl bg-[#C49A45]/10 p-2 text-[#C49A45] border border-[#C49A45]/20">
                                    <Sparkles className="h-4 w-4" />
                              </div>
                              <h3 className="text-sm font-bold tracking-wide text-gray-800 md:text-base">
                                    Zon AI Insights
                              </h3>
                        </div>
                        <span className="rounded-full bg-[#C49A45]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#C49A45] border border-[#C49A45]/20">
                              Smart Analysis
                        </span>
                  </div>

                  {/* INSIGHTS LIST CONTAINER WITH SCROLL */}
                  <div className="max-h-[260px] space-y-3 overflow-y-auto pr-1">
                        {aiInsightsData.map((item) => (
                              <div
                                    key={item.id}
                                    className="flex items-start gap-2.5 rounded-xl bg-gray-50 p-3.5 border border-gray-100 transition-colors hover:bg-gray-50/80"
                              >
                                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#C49A45]" />
                                    <p className="text-xs leading-relaxed text-gray-600">
                                          <strong className="text-gray-800">{item.title}</strong> {item.description}
                                          <span className="text-[#C49A45] font-bold">{item.highlight}</span>
                                          {item.remainingText}
                                    </p>
                              </div>
                        ))}
                  </div>

                  {/* ACTION BUTTON */}
                  <div className="mt-4 pt-2">
                        <button
                              type="button"
                              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2945] py-2.5 text-xs font-bold text-white transition-all hover:bg-[#16385c]"
                        >
                              <span>View Detailed AI Report</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                  </div>
            </div>
      );
}