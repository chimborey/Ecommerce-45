

export default function Notification_Header() {
      return (
            <section className=" flex items-center justify-between border-b py-3 px-3">

                  {/* ------------------------------- Notification ------------------------------- */}
                  <div className=" flex flex-col space-y-3">
                        <h3 className=" text-md text-black font-bold capitalize">Notification</h3>
                        <p className=" text-xs text-gray-500">Control system alert and notification preferance accross your Ecommerce 45.</p>
                  </div>

                  {/* ------------------------------- Button Edit/Save ------------------------------- */}
                  <div className="flex justify-end pt-2">
                        <button
                              type="button"
                              className="py-2 px-5 rounded-lg bg-[#0F2945] text-white text-xs font-medium shadow-sm transition-all duration-300 hover:bg-opacity-90 active:scale-95"
                        >
                              Edit Notification
                        </button>
                  </div>
            </section>
      )
}