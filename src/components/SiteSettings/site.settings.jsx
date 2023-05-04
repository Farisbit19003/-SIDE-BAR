import {
  AuditOutlined, SettingOutlined,
  ShopOutlined,
  ShoppingOutlined,
  TagsOutlined,
  UserOutlined
} from "@ant-design/icons";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsShopWindow } from "react-icons/bs";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
export const siteSettings = {
  name: "Bazar.pk",
  //   description: '',
  //   logo: {
  //     url: '/logo.svg',
  //     alt: 'PickBazar',
  //     href: '/',
  //     width: 128,
  //     height: 40,
  //   },
  //   defaultLanguage: 'en',
  //   author: {
  //     name: 'RedQ, Inc.',
  //     websiteUrl: 'https://redq.io',
  //     address: '',
  //   },
  //   headerLinks: [],
  //   authorizedLinks: [
  //     {
  //       href: Routes.profileUpdate,
  //       labelTransKey: 'authorized-nav-item-profile',
  //     },
  //     {
  //       href: Routes.logout,
  //       labelTransKey: 'authorized-nav-item-logout',
  //     },
  //   ],
  //   currencyCode: 'USD',
  sidebarLinks: {
    admin: [
      {
        id: 1,
        label: "Dashboard",
        icon: <MdOutlineDashboard />,
        to: "/",
      },
      {
        id: 2,
        label: "Shops",
        icon: <ShopOutlined />,
        to: "/shop",
      },,
      {
        id: 6,
        label: "Categories",
        icon: <TbCategory />,
        to: "/categories",
      },
      {
        id: 9,
        label: "Users",
        icon: <UserOutlined />,
        to: "/users",
      },
      {
        id: 12,
        label: "Refunds",
        icon: <HiOutlineReceiptRefund />,
        to: "/refunds",
      },
      {
        id: 14,
        label: "Settings",
        icon: <SettingOutlined />,
        to: "/settings",
      },
    ],
    shop: [
      {
        id: 1,
        label: "Dashboard",
        icon: <MdOutlineDashboard />,
        to: "/",
      },
      {
        id: 3,
        label: "My-Shops",
        icon: <BsShopWindow />,
        to: "/my-shop",
      },
      {
        id: 4,
        label: "Products",
        icon: <ShoppingOutlined />,
        to: "/products",
      },
      {
        id: 5,
        label: "Attributes",
        icon: <TagsOutlined />,
        to: "/attributes",
      },
      {
        id: 7,
        label: "Orders",
        icon: <AiOutlineUnorderedList />,
        to: "/orders",
      },
     {
       id: 11,
       label: "Withdraws",
       icon: <BiMoneyWithdraw/>,
       to:"/withdraws"
     },
      {
        id: 13,
        label: "Reviews",
        icon: <AuditOutlined />,
        to: "/reviews",
      },
    ],
  },

};
