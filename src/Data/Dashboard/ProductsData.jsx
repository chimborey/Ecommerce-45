import { BiSolidCategory } from "react-icons/bi";
import { FaBoxOpen } from "react-icons/fa";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { MdReportProblem } from "react-icons/md";
import { TfiCheckBox } from "react-icons/tfi";

// ========================== productsKPIKey ==========================
export const productsKPIKey = [
      {
            name: "Total Products",
            price: "14,892",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+12.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <FaBoxOpen/>,
            iconColor: "text-orange-600",
            iconBg: "bg-orange-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className=" w-[87%] h-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
                  </div>
            )
      },
      {
            name: "Active Products",
            price: "12,450",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+8.2%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <TfiCheckBox />,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className="w-[60%] h-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400"></div>
                  </div>
            )
      },
      {
            name: "Low Stock",
            price: "120",
            upTrendIcon: <HiArrowTrendingDown />,
            upTrendNumber: "-3.1%",
            upTrendColor: "text-red-500",
            desc: "vs last month",
            icon: <MdReportProblem />,
            iconColor: "text-red-600",
            iconBg: "bg-red-50",
            prograss: <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                  <div className="w-[35%] h-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-pink-500"></div>
            </div>
      },
      {
            name: "Total Categories",
            price: "34",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+4.0%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <BiSolidCategory />,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className="w-[57%] h-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500"></div>
                  </div>
            )
      }
];

// ========================== productsData ==========================
export const productsData = [
      {
            id:1,
            number: "Z-01",
            name: "Wireless Bluetooth Headphones",
            category: "Electronics",
            price: 79.99,
            stock: 120,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:2,
            number: "Z-02",
            name: "Smart Fitness Watch",
            category: "Wearables",
            price: 129.50,
            stock: 45,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:3,
            number: "Z-03",
            name: "Ergonomic Office Chair",
            category: "Furniture",
            price: 249.99,
            stock: 12,
            status: "Low Stock",
            image: "https://images.unsplash.com/photo-1580481077494-e3299ac25e94?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:4,
            number: "Z-04",
            name: "Minimalist Leather Backpack",
            category: "Accessories",
            price: 89.00,
            stock: 0,
            status: "Out of Stock",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:5,
           number: "Z-05",
            name: "Mechanical Gaming Keyboard",
            category: "Electronics",
            price: 95.00,
            stock: 65,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:5,
           number: "Z-05",
            name: "Mechanical Gaming Keyboard",
            category: "Electronics",
            price: 95.00,
            stock: 65,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:7,
           number: "Z-05",
            name: "Mechanical Gaming Keyboard",
            category: "Electronics",
            price: 95.00,
            stock: 65,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:8,
           number: "Z-05",
            name: "Mechanical Gaming Keyboard",
            category: "Electronics",
            price: 95.00,
            stock: 65,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&auto=format&fit=crop&q=60"
      },
      {
            id:9,
           number: "Z-05",
            name: "Mechanical Gaming Keyboard",
            category: "Electronics",
            price: 95.00,
            stock: 65,
            status: "In Stock",
            image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&auto=format&fit=crop&q=60"
      },
];