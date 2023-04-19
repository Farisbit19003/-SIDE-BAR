import {
  ShopOutlined,
  ShoppingOutlined,
  SettingOutlined,
  UserOutlined,
  CalendarOutlined,
  TagsOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { BsShopWindow } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Dashboard from "../layout/pages/dashboard";
import Shops from "../layout/pages/shops";
import myShops from "../layout/pages/my-shops";
import addProducts from "../layout/pages/add-products";
import Attributes from "../layout/pages/attributes";
import Categories from "../layout/pages/categories";
import Orders from "../layout/pages/orders";
import createOrders from "../layout/pages/create-orders copy";
import Users from "../layout/pages/users";
import Shippings from "../layout/pages/shippings";
import Reviews from "../layout/pages/reviews";
import Refunds from "../layout/pages/refunds";
import Settings from "../layout/pages/settings";
export const siteSettings = {
  name: "PickBazar",
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
        component: Dashboard,
      },
      {
        id: 2,
        label: "Shops",
        icon: <ShopOutlined />,
        component: Shops,
      },
      {
        id: 3,
        label: "My-Shops",
        icon: <BsShopWindow />,
        component: myShops,
      },
      {
        id: 4,
        label: "Add Products",
        icon: <ShoppingOutlined />,
        component: addProducts,
      },
      {
        id: 5,
        label: "Attributes",
        icon: <TagsOutlined />,
        component: Attributes,
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
        component: Categories,
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
        component: Orders,
      },
      {
        id: 8,
        label: "Create-Order",
        icon: <CalendarOutlined />,
        component: createOrders,
      },
      {
        id: 9,
        label: "Users",
        icon: <UserOutlined />,
        component: Users,
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
        component: Shippings,
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
        component: Refunds,
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
        component: Reviews,
      },
      {
        id: 13,
        label: "Settings",
        icon: <SettingOutlined />,
        component: Settings,
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
