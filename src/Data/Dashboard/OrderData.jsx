
import { VscServerProcess } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { MdOutlinePendingActions, } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { FcCancel } from "react-icons/fc";
import { HiReceiptRefund } from "react-icons/hi";


// ========================== productsKPIKey ==========================
export const OrderKPICard = [
      {
            name: "Total Order",
            price: "367",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+12.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <FiShoppingCart />,
            iconColor: "text-orange-600",
            iconBg: "bg-orange-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className=" w-[87%] h-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
                  </div>
            )
      },
      {
            name: "Pending",
            price: "79",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+8.2%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <MdOutlinePendingActions />,
            iconColor: "text-blue-600",
            iconBg: "bg-blue-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className="w-[60%] h-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400"></div>
                  </div>
            )
      },
      {
            name: "Processing",
            price: "120",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "12.1%",
            upTrendColor: "text-red-500",
            desc: "vs last month",
            icon: <VscServerProcess />,
            iconColor: "text-red-600",
            iconBg: "bg-red-50",
            prograss: <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                  <div className="w-[35%] h-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-pink-500"></div>
            </div>
      },
      {
            name: "Completed",
            price: "109",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+4.0%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <GrCompliance />,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className="w-[57%] h-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500"></div>
                  </div>
            )
      },
      {
            name: "Cancelled",
            price: "11",
            upTrendIcon: <HiArrowTrendingDown />,
            upTrendNumber: "-4.0%",
            upTrendColor: "text-red-500",
            desc: "vs last month",
            icon: <FcCancel />,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className="w-[57%] h-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500"></div>
                  </div>
            )
      },
      {
            name: "Refunded",
            price: "0",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+4.0%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <HiReceiptRefund />,
            iconColor: "text-purple-600",
            iconBg: "bg-purple-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className="w-[57%] h-2 rounded-full bg-gradient-to-r from-purple-600 via-red-500 to-pink-500"></div>
                  </div>
            )
      },
];

// =================================== orderTableData ===================================
export const orderTableData = [
      {
            id: 1,
            number: "order-01ZK",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Srey Leak",
            items: "Wireless Mouse, Keyboard",
            qty: 2,
            totalPrice: "$45.00",
            paymentMethod: "ABA Pay",
            status: "Completed",
            time: "10:30 AM",
      },
      {
            id: 2,
            number: "order-02ZK",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Dara Smith",
            items: "Gaming Headset",
            qty: 1,
            totalPrice: "$85.50",
            paymentMethod: "Cash",
            status: "Pending",
            time: "11:15 AM",
      },
      {
            id: 3,
            number: "order-03ZK",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Chan Sokha",
            items: "Type-C Cable, Adapter",
            qty: 3,
            totalPrice: "$25.00",
            paymentMethod: "ABA Pay",
            status: "Completed",
            time: "12:00 PM",
      },
      {
            id: 4,
            number: "order-04ZK",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Vicheka Rith",
            items: "Mechanical Keyboard",
            qty: 1,
            totalPrice: "$65.00",
            paymentMethod: "Visa",
            status: "Processing",
            time: "01:20 PM",
      },
      {
            id: 5,
            number: "order-05ZK",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Bopha Pich",
            items: "Phone Case, Screen Protector",
            qty: 2,
            totalPrice: "$18.00",
            paymentMethod: "ABA Pay",
            status: "Completed",
            time: "02:10 PM",
      },
      {
            id: 6,
            number: "order-06ZK",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Sovann Dara",
            items: "Bluetooth Speaker",
            qty: 1,
            totalPrice: "$50.00",
            paymentMethod: "Cash",
            status: "Cancelled",
            time: "03:05 PM",
      },
      {
            id: 7,
            number: "order-07ZK",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Nita Kong",
            items: "Smart Watch",
            qty: 1,
            totalPrice: "$120.00",
            paymentMethod: "ABA Pay",
            status: "Completed",
            time: "03:45 PM",
      },
      {
            id: 8,
            number: "order-08ZK",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Visal Tep",
            items: "Laptop Stand",
            qty: 1,
            totalPrice: "$35.00",
            paymentMethod: "Mastercard",
            status: "Processing",
            time: "04:30 PM",
      },
      {
            id: 9,
            number: "order-09ZK",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
            nameCustomer: "Ratanak Chea",
            items: "USB Hub 4-in-1",
            qty: 2,
            totalPrice: "$22.50",
            paymentMethod: "Cash",
            status: "Pending",
            time: "05:00 PM",
      },
];