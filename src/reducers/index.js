import { combineReducers } from "redux";
import {
  userReducer,
  CategoryReducer,
  ShopsReducer,
  ProductReducer,
  SearchReducer,
  AddtoCart,
  drawer,
  SiteReducer,
  AllUsersReducer
} from "./Reducers";


const rootReducers = combineReducers({
  loggedIn: userReducer,
  category: CategoryReducer,
  allShops:ShopsReducer,
  product: ProductReducer,
  search: SearchReducer,
  cart: AddtoCart,
  drawer: drawer,
  siteSetting:SiteReducer,
  allusers:AllUsersReducer
});

export default rootReducers;
