import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllShops,
  SellerOrders,
  SellerShops,
} from "../components/Create Shop/functions";
import {
  AllOrders,
  AllProducts,
  SellerProducts,
} from "../components/Products/functions";
import { AllCategory } from "../components/category/functions";
import { GetSettings } from "../components/settings/functions";
import { AllContacts, AllUsers } from "../components/user/Userfunction";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    token: "",
    user: {},
  });
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
  //const PUBLIC_API = "https://bazakrpk.onrender.com/api";
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
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
