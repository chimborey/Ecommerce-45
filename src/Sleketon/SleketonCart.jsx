export default function SleketonCart() {
      return (
            <section className="w-full bg-white flex relative flex-col space-y-3 overflow-hidden p-4 rounded-2xl border border-gray-100 shadow-sm animate-pulse">
                  {/* ============= image ================= */}
                  <div className="w-full h-48 rounded-xl bg-gray-200"></div>

                  {/* ============= discount badge placeholder ============= */}
                  <div className="absolute top-6 left-6 w-12 h-6 rounded-full bg-gray-300"></div>

                  {/* ============= name ============= */}
                  <div className="w-3/4 h-5 rounded-md bg-gray-200 mt-1"></div>

                  {/* ============= kg + inCreaseQuantity and deCreaseQuantity ============= */}
                  <div className="flex justify-between items-center">
                        <div className="w-10 h-4 rounded bg-gray-200"></div>
                        <div className="w-20 h-7 rounded-lg bg-gray-200"></div>
                  </div>

                  {/* ============= price + rating ============= */}
                  <div className="flex items-center justify-between pt-1">
                        <div className="w-14 h-5 rounded bg-gray-200"></div>
                        <div className="w-10 h-4 rounded bg-gray-200"></div>
                  </div>

                  {/* ============= addToCart ============= */}
                  <div className="w-full h-9 rounded-xl bg-gray-200 mt-2"></div>
            </section>
      )
}