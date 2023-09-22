import {
  AiOutlineAudit,
  AiOutlineBarChart,
  AiOutlineContacts,
  AiOutlineSetting,
  AiOutlineShop,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TbCategory, TbReceiptTax } from "react-icons/tb";
import { TfiReceipt } from "react-icons/tfi";

export const siteSettings = {
  name: "Bazar.pk",
  sidebarLinks: {
    admin: [
      {
        id: 1,
        label: "Dashboard",
        icon: <MdOutlineDashboard size={20} />,
        to: "/",
      },
      {
        id: 2,
        label: "Shops",
        icon: <AiOutlineShop size={20} />,
        to: "/shop",
      },
      ,
      {
        id: 6,
        label: "Categories",
        icon: <TbCategory size={20} />,
        to: "/categories",
      },
      {
        id: 9,
        label: "Users",
        icon: <AiOutlineUser size={20} />,
        to: "/users",
      },
      {
        id: 14,
        label: "Contact Us",
        icon: <AiOutlineContacts size={20} />,
        to: "/contacts",
      },
      {
        id: 15,
        label: "Settings",
        icon: <AiOutlineSetting size={20} />,
        to: "/settings",
      },
    ],
    shop: [
      {
        id: 1,
        label: "Dashboard",
        icon: <MdOutlineDashboard size={20} />,
        to: "/",
      },
      {
        id: 3,
        label: "My-Shops",
        icon: <BsShopWindow size={20} />,
        to: "/my-shop",
      },
      {
        id: 4,
        label: "Products",
        icon: <AiOutlineShopping size={20} />,
        to: "/products",
      },
      {
        id: 7,
        label: "Sales Report",
        icon: <AiOutlineBarChart size={20} />,
        to: "/sales",
      },
      {
        id: 11,
        label: "Purchase Report",
        icon: <TfiReceipt size={20} />,
        to: "/purchase",
      },
      {
        id: 12,
        label: "Profit and Loss Report",
        icon: <TbReceiptTax size={20} />,
        to: "/profit",
      },
      {
        id: 13,
        label: "Stock Report",
        icon: <BiBarChart size={20} />,
        to: "/stock-report",
      },
      {
        id: 14,
        label: "Reviews",
        icon: <AiOutlineAudit size={20} />,
        to: "/reviews",
      },
    ],
  },
};
