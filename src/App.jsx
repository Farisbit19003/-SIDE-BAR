import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
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
import { AllContacts, AllUsers } from "./components/comp/user/Userfunction";
import { AllCategory } from "./components/comp/category/functions";
import { AllShops, SellerShops, SellerOrders } from "./components/comp/Create Shop/functions";
import UpdateShop from "./components/comp/Create Shop/UpdateShop";
import NotFound from "./components/layout/pages/404";
import { AllOrders, AllProducts, SellerProducts } from "./components/comp/Products/functions";
import UpdateProducts from "./components/comp/Products/UpdateProduct";
import Purchase from "./components/layout/pages/purchase";
import AddPurchase from "./components/comp/Purchase/addPurchase";
import OrderDetail from "./components/comp/orders/order-detail";
import StripeCallBack from "./components/comp/profile/Callback"
import Contact from "./components/layout/pages/Contact";
function App() {
const {loggedIn}=useSelector((state)=>({...state}))
const dispatch=useDispatch();
useEffect(()=>{
GetSettings(dispatch);
AllCategory(dispatch);
if(loggedIn&&loggedIn.user&&loggedIn.user.role==="Admin")
{
AllUsers(dispatch);
AllContacts(dispatch);
AllShops(dispatch);
AllProducts(dispatch);
AllOrders(dispatch);
}
if(loggedIn&&loggedIn.user&&loggedIn.user.role==="Seller")
{
SellerShops(dispatch);
SellerProducts(dispatch);
SellerOrders(dispatch);
}
},[loggedIn])
const PUBLIC_API="http://localhost:10000/api"
//Default setting
axios.defaults.baseURL=PUBLIC_API;
let token=loggedIn?.token;
axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
// When Token Expire Logout automatically
axios.interceptors.response.use(
function (response){
return response;
},
function(Error){
let res=Error.response;
if(res.status===401&& res.config && !res.config._isRetryREquest){
    window.localStorage.removeItem("auth");
    window.location.href="/login"
}
}
);
  return (
    <>
     <Router>
     
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register-complete" element={<RegisterComplete />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contacts" element={<Contact />} />
          <Route exact path="/AccessDenied" element={<AccessDenied />} />
          <Route exact path="/callback" element={<StripeCallBack />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/shop" element={<Shops />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/add" element={<AddProduct />} />
          <Route exact path="/products/update/:slug" element={<UpdateProducts />} />
          <Route exact path="/my-shop" element={<MyShops />} />
          <Route exact path="/attributes" element={<Attributes />} />
          <Route exact path="/attributes/create" element={<NewAttribute />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/order/detail/:_id" element={<OrderDetail/>}/>
          <Route exact path="/purchase" element={<Purchase/>}/> 
          <Route exact path="/purchase/add" element={<AddPurchase/>}/> 
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
          <Route exact path="/my-shop/create" element={<CreateShops />} />
          <Route exact path="/profile-update" element={<Profile />} />
          <Route exact path="/shop-detail/:slug" element={<ShopDetails />} />
          <Route exact path="/update-shop/:slug" element={<UpdateShop />} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <ToastContainer/>
      </Router>
    </>

  );
}

export default App;
