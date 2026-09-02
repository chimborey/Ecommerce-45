import product_01_1 from "../../assets/OrganicProducts/product-01-1.webp"
import product_02_1 from "../../assets/OrganicProducts/product-02-1.webp"
import product_03_1 from "../../assets/OrganicProducts/product-03-1.webp"
import product_04_1 from "../../assets/OrganicProducts/product-04-1.webp"
import product_05_1 from "../../assets/OrganicProducts/product-05-1.webp"
import product_19_1 from "../../assets/OrganicProducts/product-19-1.webp"
import product_18_1 from "../../assets/OrganicProducts/product-18-1.webp"
import product_17_1 from "../../assets/OrganicProducts/product-17-1.webp"
import product_16_2 from "../../assets/OrganicProducts/product-16-2.webp"
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2"
import { FaBoxOpen } from "react-icons/fa"

export const inventoryTableData = [
      {
            id: 1,
            imgurl: product_01_1,
            nameProducts: "Organic Fresh Lemon Extra Large Premium Quality", // ដាក់ឈ្មោះវែងបន្តិចដើម្បីតេស្តកាត់អក្សរ
            sku: "ZK-01",
            brand: "Nature Farm",
            price: "$2.50",
            currentStock: "120 pcs",
            minStock: "20 pcs",
            status: "In Stock",
            lastUpdate: "2026-09-01",
      },
      {
            id: 2,
            imgurl: product_02_1,
            nameProducts: "Fresh Organic Broccoli",
            sku: "ZK-02",
            brand: "Green Valley",
            price: "$3.20",
            currentStock: "15 pcs",
            minStock: "25 pcs",
            status: "Low Stock",
            lastUpdate: "2026-08-30",
      },
      {
            id: 3,
            imgurl: product_03_1,
            nameProducts: "Organic Red Apple",
            sku: "ZK-03",
            brand: "Fresh Organic",
            price: "$4.00",
            currentStock: "85 pcs",
            minStock: "10 pcs",
            status: "In Stock",
            lastUpdate: "2026-09-02",
      },
      {
            id: 4,
            imgurl: product_04_1,
            nameProducts: "Organic Fresh Carrots",
            sku: "ZK-04",
            brand: "AgriRoots",
            price: "$1.80",
            currentStock: "200 pcs",
            minStock: "30 pcs",
            status: "In Stock",
            lastUpdate: "2026-08-28",
      },
      {
            id: 5,
            imgurl: product_05_1,
            nameProducts: "Organic Cavendish Banana",
            sku: "ZK-05",
            brand: "Tropical Fruit",
            price: "$2.00",
            currentStock: "8 pcs",
            minStock: "15 pcs",
            status: "Low Stock",
            lastUpdate: "2026-09-01",
      },
      {
            id: 6,
            imgurl: product_19_1,
            nameProducts: "Organic Fresh Kiwi",
            sku: "ZK-06",
            brand: "Zesty Farm",
            price: "$5.50",
            currentStock: "45 pcs",
            minStock: "10 pcs",
            status: "In Stock",
            lastUpdate: "2026-08-25",
      },
      {
            id: 7,
            imgurl: product_18_1,
            nameProducts: "Organic Fresh Watermelon",
            sku: "ZK-07",
            brand: "Summer Harvest",
            price: "$6.00",
            currentStock: "0 pcs",
            minStock: "5 pcs",
            status: "Out of Stock",
            lastUpdate: "2026-08-20",
      },
      {
            id: 8,
            imgurl: product_17_1,
            nameProducts: "Organic Fresh Grapes",
            sku: "ZK-08",
            brand: "Vineyard Best",
            price: "$4.50",
            currentStock: "60 pcs",
            minStock: "12 pcs",
            status: "In Stock",
            lastUpdate: "2026-09-02",
      },
      {
            id: 9,
            imgurl: product_16_2,
            nameProducts: "Organic Fresh Mango Sweet & Juicy",
            sku: "ZK-09",
            brand: "Tropical Delight",
            price: "$3.80",
            currentStock: "90 pcs",
            minStock: "15 pcs",
            status: "In Stock",
            lastUpdate: "2026-09-01",
      },
]

export const inventoryKPIKey = [
      {
            id: 1,
            name: "Total Products",
            price: "1,248",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+12.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <FaBoxOpen />,
            iconColor: "text-orange-600",
            iconBg: "bg-orange-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className=" w-[87%] h-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"></div>
                  </div>
            )
      },
      {
            id: 2,
            name: "Total Inventory Value",
            price: "15,763",
            upTrendIcon: <HiArrowTrendingUp />,
            upTrendNumber: "+18.5%",
            upTrendColor: "text-green-500",
            desc: "vs last month",
            icon: <FaBoxOpen />,
            iconColor: "text-orange-600",
            iconBg: "bg-orange-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className=" w-[87%] h-2 rounded-full bg-gradient-to-r from-green-500 via-sky-500 to-purple-500"></div>
                  </div>
            )
      },
      {
            id: 3,
            name: "Low Stock Items",
            price: "18",
            upTrendNumber: "-3.1%",
            upTrendIcon: <HiArrowTrendingDown />,
            desc: "vs last month",
            icon: "⚠️",
            color: "bg-amber-50 text-amber-600 border-amber-100",
            iconColor: "text-red-600",
            upTrendColor: "text-red-500",
            iconBg: "bg-red-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className=" w-[87%] h-2 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500"></div>
                  </div>
            )
      },
      {
            id: 4,
            name: "Out of Stock",
            price: "4",
            upTrendNumber: "+1.2%",
            isIncrease: true,
            desc: "vs last month",
            icon: "❌",
            upTrendIcon: <HiArrowTrendingDown />,
            color: "bg-red-50 text-red-600 border-red-100",
            iconColor: "text-red-600",
            upTrendColor: "text-red-500",
            iconBg: "bg-red-50",
            prograss: (
                  <div className=" w-full h-2 rounded-full bg-[#0F2942]">
                        <div className=" w-[87%] h-2 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-sky-500"></div>
                  </div>
            )
      },
];