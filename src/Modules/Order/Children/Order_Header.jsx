export default function Order_Header() {
      return (
            <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 py-3 px-3">
                  <div className="flex flex-col space-y-1">
                        <h1 className="text-xl font-bold text-gray-800">Order Managements</h1>
                        <p className="text-xs text-gray-400">Manage and track customer orders, statuses, and fulfillment.</p>
                  </div>
            </section>
      );
}