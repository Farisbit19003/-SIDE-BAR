import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import ForgotPassword from "./components/auth/forgotpassword";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import NewCategory from "./components/category/newCategory";
import ShopDetails from "./components/shop/shopDetails";
import Profile from "./pages/profile";
import Categories from "./pages/categories";
import CreateShops from "./pages/createshop";
import Dashboard from "./pages/dashboard";
import MyShops from "./pages/my-shops";
import Sales from "./pages/sales";
import Products from "./pages/products";
import Reviews from "./pages/reviews";
import Settings from "./pages/settings";
import Shops from "./pages/shops";
import Users from "./pages/users";
import AddProduct from "./components/Products/addProduct";
import RegisterComplete from "./components/auth/register-complete";
import AccessDenied from "./pages/AccessDenied";
import UpdateCategory from "./components/category/UpdateCategory";
import UpdateShop from "./components/Create Shop/UpdateShop";
import NotFound from "./pages/404";
import UpdateProducts from "./components/Products/UpdateProduct";
import Purchase from "./pages/purchase";
import AddPurchase from "./components/Purchase/addPurchase";
import OrderDetail from "./components/orders/order-detail";
import StripeCallBack from "./components/profile/Callback";
import Contact from "./pages/Contact";
import ProfitandLoss from "./pages/ProfitandLoss";
import StockReport from "./pages/StockReport";
import ScrollToTop from "./Helper/ScrollToTop";

const App=()=> {
 
  return (
    <>
      <Router>
        <ScrollToTop />
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
          <Route exact path="/sales" element={<Sales />} />
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
