import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateShops from "./components/Shops/createshop";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import NewCategory from "./components/comp/category/newCategory";
import Profile from "./components/layout/admin/profile";
import AddProducts from "./components/layout/pages/add-products";
import Attributes from "./components/layout/pages/attributes";
import Categories from "./components/layout/pages/categories";
import CreateOrders from "./components/layout/pages/create-orders copy";
import Dashboard from "./components/layout/pages/dashboard";
import MyShops from "./components/layout/pages/my-shops";
import Orders from "./components/layout/pages/orders";
import Refunds from "./components/layout/pages/refunds";
import Reviews from "./components/layout/pages/reviews";
import Settings from "./components/layout/pages/settings";
import Shippings from "./components/layout/pages/shippings";
import Shops from "./components/layout/pages/shops";
import Users from "./components/layout/pages/users";
import ForgotPassword from "./components/auth/forgotpassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/shop" element={<Shops />} />
          <Route exact path="/products" element={<AddProducts />} />
          <Route exact path="/my-shop" element={<MyShops />} />
          <Route exact path="/attributes" element={<Attributes />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orders/create" element={<CreateOrders />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/create" element={<NewCategory />} />
          <Route exact path="/refunds" element={<Refunds />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/shippings" element={<Shippings />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/shop/create" element={<CreateShops />} />
          <Route exact path="/profile-update" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
