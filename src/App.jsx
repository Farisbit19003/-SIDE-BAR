import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Pages
import ForgotPassword from "./components/auth/forgotpassword";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import NewCategory from "./components/comp/category/newCategory";
import ShopDetails from "./components/comp/shop/shopDetails";
import CreateWithdrawls from "./components/comp/withdrawls/createWithdrawls";
import Profile from "./components/layout/pages/profile";
import Attributes from "./components/layout/pages/attributes";
import Categories from "./components/layout/pages/categories";
import CreateShops from "./components/layout/pages/createshop";
import Dashboard from "./components/layout/pages/dashboard";
import MyShops from "./components/layout/pages/my-shops";
import Orders from "./components/layout/pages/orders";
import Products from "./components/layout/pages/products";
import Refunds from "./components/layout/pages/refunds";
import Reviews from "./components/layout/pages/reviews";
import Settings from "./components/layout/pages/settings";
import Shippings from "./components/layout/pages/shippings";
import Shops from "./components/layout/pages/shops";
import Users from "./components/layout/pages/users";
import Withdraws from "./components/layout/pages/withdraws";
import NewAttribute from "./components/comp/attributes/attributeForm";
import AddProduct from "./components/comp/Products/addProduct";
import RegisterComplete from "./components/auth/register-complete";
import AccessDenied from "./components/layout/pages/AccessDenied";
import UpdateCategory  from "./components/comp/category/UpdateCategory";
import { UserProvider } from "./context";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { GetSettings } from "./components/comp/settings/functions";
import { AllUsers } from "./components/comp/user/Userfunction";
import { AllCategory } from "./components/comp/category/functions";
import { AllShops } from "./components/comp/Create Shop/functions";

function App() {
const {loggedIn}=useSelector((state)=>({...state}))
const dispatch=useDispatch();
useEffect(()=>{
AllShops(dispatch);
GetSettings(dispatch);
AllCategory(dispatch);
if(loggedIn&&loggedIn.user&&loggedIn.user.role==="Admin")
{
AllUsers(dispatch);
}


},[])
  return (
    <>
     <Router>
     
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register-complete" element={<RegisterComplete />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/AccessDenied" element={<AccessDenied />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/shop" element={<Shops />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/add" element={<AddProduct />} />
          <Route exact path="/my-shop" element={<MyShops />} />
          <Route exact path="/attributes" element={<Attributes />} />
          <Route exact path="/attributes/create" element={<NewAttribute />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/create" element={<NewCategory />} />
          <Route exact path="/categories/update/:slug" element={<UpdateCategory />} />
          <Route exact path="/refunds" element={<Refunds />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/withdraws" element={<Withdraws />} />
          <Route exact path="/withdrawls/request" element={<CreateWithdrawls />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/shippings" element={<Shippings />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/shop/create" element={<CreateShops />} />
          <Route exact path="/profile-update" element={<Profile />} />
          <Route exact path="/shop/details" element={<ShopDetails />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </>

  );
}

export default App;
