import {
  AuditOutlined,
  CalendarOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbCategory, TbTruckDelivery } from "react-icons/tb";
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
      // {
      //   href: "",
      //   label: "sidebar-nav-item-groups",
      //   icon: "TypesIcon",
      // },
      {
        id: 6,
        label: "Categories",
        icon: <TbCategory />,
        to: "/categories",
      },
      // {
      //   href: "",
      //   label: "sidebar-nav-item-tags",
      //   icon: "TagIcon",
      // },
      // {
      //   href: "",
      //   label: "sidebar-nav-item-manufacturers",
      //   icon: "DiaryIcon",
      // },
      // {
      //   href: "",
      //   label: "sidebar-nav-item-authors",
      //   icon: "FountainPenIcon",
      // },
      {
        id: 7,
        label: "Orders",
        icon: <AiOutlineUnorderedList />,
        to: "/orders",
      },
      {
        id: 8,
        label: "Create-Order",
        icon: <CalendarOutlined />,
        to: "/orders/creates",
      },
      {
        id: 9,
        label: "Users",
        icon: <UserOutlined />,
        to: "/users",
      },
      // {
      //   href: "",
      //   label: "sidebar-nav-item-coupons",
      //   icon: "CouponsIcon",
      // },
      // {
      //   href: "",
      //   label: "sidebar-nav-item-taxes",
      //   icon: "TaxesIcon",
      // },
      {
        id: 10,
        label: "Shippings",
        icon: <TbTruckDelivery />,
        to: "/shippings",
      },
      // {
      //   href: "",
      //   label: "Withdraw",
      //   icon: "WithdrawIcon",
      // },
      {
        id: 11,
        label: "Refunds",
        icon: <HiOutlineReceiptRefund />,
        to: "/refunds",
      },
      // {
      //   href: "",
      //   label: "sidebar-nav-item-questions",
      //   icon: "QuestionIcon",
      // },
      {
        id: 12,
        label: "Reviews",
        icon: <AuditOutlined />,
        to: "/reviews",
      },
      {
        id: 13,
        label: "Settings",
        icon: <SettingOutlined />,
        to: "/settings",
      },
    ],
    // shop: [
    //   {
    //     href: (shop: string) => `${Routes.dashboard}${shop}`,
    //     label: 'sidebar-nav-item-dashboard',
    //     icon: 'DashboardIcon',
    //     permissions: adminOwnerAndStaffOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.attribute.list}`,
    //     label: 'sidebar-nav-item-attributes',
    //     icon: 'AttributeIcon',
    //     permissions: adminOwnerAndStaffOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.product.list}`,
    //     label: 'sidebar-nav-item-products',
    //     icon: 'ProductsIcon',
    //     permissions: adminOwnerAndStaffOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.author.list}`,
    //     label: 'sidebar-nav-item-authors',
    //     icon: 'FountainPenIcon',
    //     permissions: adminAndOwnerOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.manufacturer.list}`,
    //     label: 'sidebar-nav-item-manufacturers',
    //     icon: 'DiaryIcon',
    //     permissions: adminAndOwnerOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.order.list}`,
    //     label: 'sidebar-nav-item-orders',
    //     icon: 'OrdersIcon',
    //     permissions: adminOwnerAndStaffOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.refund.list}`,
    //     label: 'sidebar-nav-item-refunds',
    //     icon: 'RefundsIcon',
    //     permissions: adminOwnerAndStaffOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.staff.list}`,
    //     label: 'sidebar-nav-item-staffs',
    //     icon: 'UsersIcon',
    //     permissions: adminAndOwnerOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.withdraw.list}`,
    //     label: 'sidebar-nav-item-withdraws',
    //     icon: 'AttributeIcon',
    //     permissions: adminAndOwnerOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.reviews.list}`,
    //     label: 'sidebar-nav-item-reviews',
    //     icon: 'ReviewIcon',
    //     permissions: adminAndOwnerOnly,
    //   },
    //   {
    //     href: (shop: string) => `/${shop}${Routes.question.list}`,
    //     label: 'sidebar-nav-item-questions',
    //     icon: 'QuestionIcon',
    //     permissions: adminAndOwnerOnly,
    //   },
    // ],
  },
  //   product: {
  //     placeholder: '/product-placeholder.svg',
  //   },
  //   avatar: {
  //     placeholder: '/avatar-placeholder.svg',
  //   },
};
