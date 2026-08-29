import { useState, useEffect } from 'react';

export default function DateTime() {
      const [currentDateTime, setCurrentDateTime] = useState(new Date());

      useEffect(() => {
            // កំណត់ឱ្យវាធ្វើបច្ចុប្បន្នភាពម៉ោងរៀងរាល់ ១ វិនាទី (1000ms)
            const timer = setInterval(() => {
                  setCurrentDateTime(new Date());
            }, 1000);

            // សម្អាត Timer វិញពេល Component ត្រូវបាន unmount
            return () => clearInterval(timer);
      }, []);

      // ទម្រង់សម្រាប់បង្ហាញថ្ងៃ ខែ ឆ្នាំ (ឧទាហរណ៍: Sat, Aug 29, 2026)
      const formattedDate = currentDateTime.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
      });

      // ទម្រង់សម្រាប់បង្ហាញម៉ោង (ឧទាហរណ៍: 11:21:35 PM)
      const formattedTime = currentDateTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
      });

      return (
            <section className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-gray-700">
                  {/* Icon នាឡិកា និងកាលបរិច្ឆេទ */}
                  <span className="text-xl">🕒</span>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                        <span className="text-sm font-semibold text-gray-800">{formattedDate}</span>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span className="text-xs sm:text-sm font-mono text-green-600 font-bold">{formattedTime}</span>
                  </div>
            </section>
      );
}