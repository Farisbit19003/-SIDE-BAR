import axios from "axios";
let initialUser={};
if(localStorage.getItem("auth"))
{
   initialUser=JSON.parse(window.localStorage.getItem("auth"));
}
else{
   initialUser={};
}
// const PUBLIC_API="http://localhost:10000/api"
// axios.defaults.baseURL=PUBLIC_API;
//    //Default setting
//    axios.defaults.headers.common["Authorization"]=`Bearer ${initialUser.token}`;
//    //When Token Expire Logout automatically
//    axios.interceptors.response.use(
//    function (response){
//    return response;
//    },
//    function(Error){
//    let res=Error.response;
//    if(res.status===401&& res.config && !res.config._isRetryREquest){
//        window.localStorage.removeItem("auth");
//        window.location.href="/login"
//    }
//    }
//    );
export const userReducer=(state=initialUser,action)=>{
 switch(action.type){
    case "LOGGED_IN_USER":
    return action.payload;
    case "LOGOUT":
    return action.payload;
    default:
    return state;
 }
}
export const SiteReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_SETTINGS":
      return payload;
      default:
      return state;
   }
}
export const CategoryReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_CATEGORY":
      return payload;
      default:
      return state;
   }
}
export const AllUsersReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_Users":
      return payload;
      default:
      return state;
   }
}
export const ShopsReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_SHOPS":
      return payload;
      default:
      return state;
   }
}
export const ProductReducer=(state=null,{type,payload})=>{
   switch(type){
      case "GET_PRODUCTS":
      return payload;
      default:
      return state;
   }
}
let initial=[];
if(localStorage.getItem("cart"))
{
   initial=JSON.parse(window.localStorage.getItem("cart"));

}
else{
   initial=[];
}
export const AddtoCart=(state=initial,{type,payload})=>{
   switch(type){
      case "Cart":
      return payload;
      default:
      return state;
   }
}
export const SearchReducer=(state={text:""},{type,payload})=>{
   switch(type){
      case "Search":
      return {...state,...payload};
      default:
      return state;
   }
}
export const drawer=(state=false,{type,payload})=>{
   switch(type){
      case "Visible":
      return payload;
      default:
      return state;
   }
}