import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// Pages
import ForgotPassword from "./components/auth/forgotpassword";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import NewCategory from "./components/category/newCategory";
import ShopDetails from "./components/shop/shopDetails";
import CreateWithdrawls from "./components/withdrawls/createWithdrawls";
import Profile from "./pages/profile";
import Categories from "./pages/categories";
import CreateShops from "./pages/createshop";
import Dashboard from "./pages/dashboard";
import MyShops from "./pages/my-shops";
import Orders from "./pages/orders";
import Products from "./pages/products";
import Reviews from "./pages/reviews";
import Settings from "./pages/settings";
import Shops from "./pages/shops";
import Users from "./pages/users";
import AddProduct from "./components/Products/addProduct";
import RegisterComplete from "./components/auth/register-complete";
import AccessDenied from "./pages/AccessDenied";
import UpdateCategory from "./components/category/UpdateCategory";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSettings } from "./components/settings/functions";
import { AllContacts, AllUsers } from "./components/user/Userfunction";
import { AllCategory } from "./components/category/functions";
import {
  AllShops,
  SellerShops,
  SellerOrders,
} from "./components/Create Shop/functions";
import UpdateShop from "./components/Create Shop/UpdateShop";
import NotFound from "./pages/404";
import {
  AllOrders,
  AllProducts,
  SellerProducts,
} from "./components/Products/functions";
import UpdateProducts from "./components/Products/UpdateProduct";
import Purchase from "./pages/purchase";
import AddPurchase from "./components/Purchase/addPurchase";
import OrderDetail from "./components/orders/order-detail";
import StripeCallBack from "./components/profile/Callback";
import Contact from "./pages/Contact";
import ProfitandLoss from "./pages/ProfitandLoss";
import StockReport from "./pages/StockReport";
function App() {
  const { loggedIn } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  useEffect(() => {
    GetSettings(dispatch);
    AllCategory(dispatch);
    if (loggedIn && loggedIn.user && loggedIn.user.role === "Admin") {
      AllUsers(dispatch);
      AllContacts(dispatch);
      AllShops(dispatch);
      AllProducts(dispatch);
      AllOrders(dispatch);
    }
    if (loggedIn && loggedIn.user && loggedIn.user.role === "Seller") {
      SellerShops(dispatch);
      SellerProducts(dispatch);
      SellerOrders(dispatch);
    }
  }, [loggedIn]);
  const PUBLIC_API = "https://bazakrpk.onrender.com/api";
  //Default setting
  axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_API;
  let token = loggedIn?.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // When Token Expire Logout automatically
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (Error) {
      let res = Error.response;
      if (res.status === 401 && res.config && !res.config._isRetryREquest) {
        window.localStorage.removeItem("auth");
        window.location.href = "/login";
      }
    }
  );
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/stock-report" element={<StockReport />} />
          <Route exact path="/profit" element={<ProfitandLoss />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/register-complete"
            element={<RegisterComplete />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contacts" element={<Contact />} />
          <Route exact path="/AccessDenied" element={<AccessDenied />} />
          <Route exact path="/callback" element={<StripeCallBack />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/shop" element={<Shops />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/add" element={<AddProduct />} />
          <Route
            exact
            path="/products/update/:slug"
            element={<UpdateProducts />}
          />
          <Route exact path="/my-shop" element={<MyShops />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/order/detail/:_id" element={<OrderDetail />} />
          <Route exact path="/purchase" element={<Purchase />} />
          <Route exact path="/purchase/add" element={<AddPurchase />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/create" element={<NewCategory />} />
          <Route
            exact
            path="/categories/update/:slug"
            element={<UpdateCategory />}
          />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route
            exact
            path="/withdrawls/request"
            element={<CreateWithdrawls />}
          />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/my-shop/create" element={<CreateShops />} />
          <Route exact path="/profile-update" element={<Profile />} />
          <Route exact path="/shop-detail/:slug" element={<ShopDetails />} />
          <Route exact path="/update-shop/:slug" element={<UpdateShop />} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
