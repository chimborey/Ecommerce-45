import { FaBoxOpen, FaUserFriends } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp, FaCartShopping } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";

// ============= overviewsData ====================
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

// ============= OverviewsRecentOrderData ====================
export const OverviewsRecentOrderData = [
      {
            id: 1,
            idOrder: "#101P",
            customerName: "Sok Dara",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
            items: "2 items (Latte, Croissant)",
            Payment: "KHQR",
            Amount: "$4.75",
            Status: "Completed",
            Time: "2 mins ago"
      },
      {
            id: 2,
            idOrder: "#102P",
            customerName: "Chan Thy",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
            items: "1 item (Cappuccino)",
            Payment: "ABA Pay",
            Amount: "$2.50",
            Status: "Completed",
            Time: "8 mins ago"
      },
      {
            id: 3,
            idOrder: "#103P",
            customerName: "Vichea Roth",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
            items: "4 items (Matcha, Cake...)",
            Payment: "Cash",
            Amount: "$12.00",
            Status: "Pending",
            Time: "15 mins ago"
      },
      {
            id: 4,
            idOrder: "#104P",
            customerName: "Srey Leak",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
            items: "3 items (Mocha, Espresso)",
            Payment: "KHQR",
            Amount: "$7.25",
            Status: "Completed",
            Time: "24 mins ago"
      },
      {
            id: 5,
            idOrder: "#105P",
            customerName: "Dara Smith",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
            items: "1 item (Americano)",
            Payment: "Card",
            Amount: "$2.25",
            Status: "Cancelled",
            Time: "35 mins ago"
      },
      {
            id: 6,
            idOrder: "#106P",
            customerName: "Kim Heng",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
            items: "2 items (Green Tea)",
            Payment: "KHQR",
            Amount: "$5.00",
            Status: "Completed",
            Time: "42 mins ago"
      },
      {
            id: 7,
            idOrder: "#107P",
            customerName: "Nary Lin",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
            items: "5 items (Mixed Bakery)",
            Payment: "ABA Pay",
            Amount: "$18.50",
            Status: "Completed",
            Time: "1 hour ago"
      },
];

// ============= OverviewsTopSellingData ====================
import product_01_1 from "../../assets/OrganicProducts/product-01-1.webp"
import product_02_1 from "../../assets/OrganicProducts/product-02-1.webp"
import product_03_1 from "../../assets/OrganicProducts/product-03-1.webp"
import product_04_6 from "../../assets/OrganicProducts/product-04-6.webp"
import product_05_3 from "../../assets/OrganicProducts/product-05-3.webp"
import product_07_1 from "../../assets/OrganicProducts/product-07-1.webp"
import product_08_1 from "../../assets/OrganicProducts/product-08-1.webp"
export const OverviewsTopSellingData = [
      {
            id: 1,
            name: "Organic Fresh Lemon",
            imgUrl: product_01_1,
            sold: "142 sold",
            revenue: "$568.00",
      },
      {
            id: 2,
            name: "Fresh Organic Broccoli",
            imgUrl: product_02_1,
            sold: "128 sold",
            revenue: "$512.00",
      },
      {
            id: 3,
            name: "Organic Red Apple",
            imgUrl: product_03_1,
            sold: "98 sold",
            revenue: "$294.00",
      },
      {
            id: 4,
            name: "Organic Fresh Carrots",
            imgUrl: product_04_6,
            sold: "85 sold",
            revenue: "$255.00",
      },
      {
            id: 5,
            name: "Organic Green Cabbage",
            imgUrl: product_07_1,
            sold: "64 sold",
            revenue: "$320.00",
      },
      {
            id: 5,
            name: "Organic Cavendish Banana",
            imgUrl: product_05_3,
            sold: "64 sold",
            revenue: "$320.00",
      },
      {
            id: 5,
            name: "Fresh Organic Potato",
            imgUrl: product_08_1,
            sold: "64 sold",
            revenue: "$320.00",
      },
];

// ============= OverviewsInventoryData ====================
export const OverviewsInventoryData = [
      {
            id: 1,
            itemName: "Coffee Beans (Arabica)",
            category: "Raw Material",
            stockLeft: "15 kg",
            status: "In Stock",
            percentage: 80,
      },
      {
            id: 2,
            itemName: "Fresh Milk (Anchor)",
            category: "Dairy",
            stockLeft: "4 cartons",
            status: "Low Stock",
            percentage: 20,
      },
      {
            id: 3,
            itemName: "Matcha Powder",
            category: "Raw Material",
            stockLeft: "8 packs",
            status: "In Stock",
            percentage: 60,
      },
      {
            id: 4,
            itemName: "Paper Cups (12oz)",
            category: "Packaging",
            stockLeft: "45 pcs",
            status: "Critical",
            percentage: 10,
      },
      {
            id: 5,
            itemName: "Caramel Syrup",
            category: "Flavoring",
            stockLeft: "12 bottles",
            status: "In Stock",
            percentage: 75,
      },
];

// ============= OverviewsLowStockData ====================
export const OverviewsLowStockData = [
      {
            id: 1,
            imgUrl: product_01_1,
            name: "Organic Fresh Lemon",
            status: "Critical",
            stock: "3 pcs left",
      },
      {
            id: 2,
            imgUrl: product_03_1,
            name: "Organic Red Apple",
            status: "Critical",
            stock: "5 pcs left",
      },
      {
            id: 3,
            imgUrl: product_05_3,
            name: "Organic Cavendish Banana",
            status: "Critical",
            stock: "2 combs left",
      },
      {
            id: 4,
            imgUrl: product_08_1,
            name: "Fresh Organic Potato",
            status: "Critical",
            stock: "4 kg left",
      },
];

// ============= OverviewsCountryData ====================
export const OverviewsCountryData = [
      {
            id: 1,
            imgUrl: "https://ips-cambodia.com/wp-content/uploads/2023/01/Phnom-Penh-skyline-IPS-Cambodia.jpg",
            location: "Phnom Penh",
            code: "PP",
            flag: "🇰🇭",
            percentage: 65,
            orders: "1,240 orders",
      },
      {
            id: 2,
            imgUrl: "https://lubd.com/wp-content/uploads/2025/08/cover-2.jpg",
            location: "Siem Reap",
            code: "SR",
            flag: "🇰🇭",
            percentage: 20,
            orders: "380 orders",
      },
      {
            id: 3,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgWSrJNtsz0d9Vk_tkUYp0WEAY_cNZeuozOELQkVVfqawJPMZnXFtAy8&s=10",
            location: "Sihanoukville",
            code: "SHV",
            flag: "🇰🇭",
            percentage: 10,
            orders: "190 orders",
      },
      {
            id: 4,
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Aerial_view_of_Battambang_city.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
            location: "Battambang",
            code: "BTB",
            flag: "🇰🇭",
            percentage: 5,
            orders: "95 orders",
      },
];

