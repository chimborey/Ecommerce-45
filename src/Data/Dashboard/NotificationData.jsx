import { FaBoxOpen, FaMobileAlt, FaRegClock, FaUserTag } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline, IoMdNotifications } from "react-icons/io";
import { MdEmail, MdOutlinePayment, MdReportProblem } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

export const notification_CardData = [
      {
            id: 1,
            name: "Order Notification",
            span: "Get notified about customer orders",
            items: [
                  { icon: <HiMiniShoppingCart />, label: "New Order", defaultState: true },
                  { icon: <IoMdCloseCircleOutline />, label: "Order Cancel", defaultState: false },
                  { icon: <IoMdCheckmarkCircleOutline />, label: "Order Completed", defaultState: true },
            ]
      },
      {
            id: 2,
            name: "Inventory Notification",
            span: "Monitor stock levels and product availability",
            items: [
                  { icon: <FaBoxOpen />, label: "Low Stock", defaultState: true },
                  { icon: <FaBoxOpen />, label: "Out of Stock", defaultState: true },
            ]
      },
      {
            id: 3,
            name: "Payment Notification",
            span: "Track transaction payment status",
            items: [
                  { icon: <MdOutlinePayment />, label: "Payment Received", defaultState: true },
                  { icon: <MdReportProblem />, label: "Payment Failed", defaultState: false },
                  { icon: <LuRefreshCw />, label: "Refund", defaultState: true },
            ]
      },
      {
            id: 4,
            name: "Staff Notification",
            span: "Stay updated on staff activity statuses",
            items: [
                  { icon: <FaUserTag />, label: "Staff Login", defaultState: false },
                  { icon: <FaRegClock />, label: "Shift Started", defaultState: true },
                  { icon: <FaRegClock />, label: "Shift Ended", defaultState: true },
            ]
      },
      {
            id: 5,
            name: "Notification Channel",
            span: "Choose where you want to receive alerts",
            items: [
                  { icon: <IoMdNotifications />, label: "In App", defaultState: true },
                  { icon: <MdEmail />, label: "Email", defaultState: true },
                  { icon: <FaMobileAlt />, label: "Push Notification", defaultState: false },
            ]
      },
];