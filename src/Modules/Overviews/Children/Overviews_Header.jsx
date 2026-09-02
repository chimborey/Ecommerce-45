import DateTime from '../../../Utils/DateTime';
import Export_Report from '../../../Utils/Export_Report';

export default function Overviews_Header() {

      return (
            <section className="w-full flex flex-col md:flex-row md:items-center justify-between bg-white p-4 rounded-2xl shadow-sm border mb-6 gap-4">

                  {/* ===================== ផ្នែកខាងឆ្វេង: Title & Subtitle ===================== */}
                  <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                        <p className="text-sm text-gray-500">Welcome back! Here is your latest summary.</p>
                  </div>

                  <>
                        <DateTime />
                  </>

                  {/* ===================== ផ្នែកខាងស្ដាំ: Actions, Search, Profile ===================== */}
                  <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-5">
                        <Export_Report />
                  </div>
            </section>
      );
}