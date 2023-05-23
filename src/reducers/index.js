import { combineReducers } from "redux";
import {
  userReducer,
  CategoryReducer,
  ShopsReducer,
  ProductReducer,
  SiteReducer,
  AllUsersReducer,
  SellerShopsReducer,
  AllProductsReducer,
  OrderReducer
} from "./Reducers";


const rootReducers = combineReducers({
  loggedIn: userReducer,
  category: CategoryReducer,
  allShops:ShopsReducer,
  product: ProductReducer,
  siteSetting:SiteReducer,
  allusers:AllUsersReducer,
  sellerShops:SellerShopsReducer,
  allProducts:AllProductsReducer,
  allOrders:OrderReducer,
});

export default rootReducers;
