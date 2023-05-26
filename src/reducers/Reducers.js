let initialUser={};
if(localStorage.getItem("auth"))
{
   initialUser=JSON.parse(window.localStorage.getItem("auth"));
}
else{
   initialUser={};
}
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
export const ContactReducer=(state=null,{type,payload})=>{
   switch(type){
      case "CONTACTS":
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
export const SellerShopsReducer=(state=null,{type,payload})=>{
   switch(type){
      case "YOUR_SHOPS":
      return payload;
      default:
      return state;
   }
}
export const ProductReducer=(state=null,{type,payload})=>{
   switch(type){
      case "PRODUCTS":
      return payload;
      default:
      return state;
   }
}
export const AllProductsReducer=(state=null,{type,payload})=>{
   switch(type){
      case "All_PRODUCTS":
      return payload;
      default:
      return state;
   }
}

export const OrderReducer=(state=null,{type,payload})=>{
   switch(type){
      case "YOUR_ORDERS":
      return payload;
      default:
      return state;
   }
}
