import { FaBoxOpen, FaUserFriends } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp, FaCartShopping } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";


export const overviewsData = [
      {
            name: "total revenue",
            price: "$124, 563",
            icon: <MdOutlineAttachMoney />,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            upTrendIcon: <FaArrowTrendUp />,
            upTrendNumber: "20.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            process: (
                  <div className=" w-[100%] h-2 rounded-lg bg-[#0F2942]">
                        <div className=" w-[80%] h-2 rounded-lg bg-gradient-to-tr from-green-500 to bg-green-900"></div>
                  </div>
            )
      },

      {
            name: "Customer",
            price: "8,549",
            icon: <FaUserFriends />,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            upTrendIcon: <FaArrowTrendUp />,
            upTrendNumber: "22.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            process: (
                  <div className=" w-[100%] h-2 rounded-lg bg-[#0F2942]">
                        <div className=" w-[80%] h-2 rounded-lg bg-gradient-to-tr from-blue-500 to bg-blue-900"></div>
                  </div>
            )
      },

      {
            name: "total order",
            price: "2,847",
            icon: <FaCartShopping />,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            upTrendIcon: <FaArrowTrendDown />,
            upTrendNumber: "15.5%",
            upTrendColor: "text-red-500",
            desc: "vs last month",
            process: (
                  <div className=" w-[100%] h-2 rounded-lg bg-[#0F2942]">
                        <div className=" w-[80%] h-2 rounded-lg bg-gradient-to-tr from-purple-500 to bg-purple-900"></div>
                  </div>
            )
      },

      {
            name: "total Products",
            price: "14,892.20",
            icon: <FaBoxOpen />,
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600",
            upTrendIcon: <FaArrowTrendUp />,
            upTrendNumber: "12.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            process: (
                  <div className=" w-[100%] h-2 rounded-lg bg-[#0F2942]">
                        <div className=" w-[80%] h-2 rounded-lg bg-gradient-to-tr from-orange-500 to bg-green-900"></div>
                  </div>
            )
      },

      {
            name: "low stock",
            price: "120",
            icon: <LuNotebookPen />,
            iconBg: "bg-red-100",
            iconColor: "text-red-600",
            upTrendIcon: <FaArrowTrendUp />,
            upTrendNumber: "12.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            process: (
                  <div className=" w-[100%] h-2 rounded-lg bg-[#0F2942]">
                        <div className=" w-[80%] h-2 rounded-lg bg-gradient-to-tr from-red-500 to bg-red-900"></div>
                  </div>
            )
      },

      
]