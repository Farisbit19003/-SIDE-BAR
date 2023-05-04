import { createContext,useEffect,useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const UserContext=createContext();

const UserProvider=({children})=>{
const[state,setState]=useState({
    token:"",
    user:{}
});
const PUBLIC_API="http://localhost:10000/api"
 const navigate=useNavigate();

//Default setting
const token=state && state.token? state.token:"";
axios.defaults.baseURL=PUBLIC_API;
axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
//When Token Expire Logout automatically
axios.interceptors.response.use(
function (response){
return response;
},
function(Error){
let res=Error.response;
if(res.status===401&& res.config && !res.config._isRetryREquest){
    setState(null);
    window.localStorage.removeItem("auth");
    navigate("/login");
}
}
);
//useeffct for storing login information in state
useEffect(()=>{
 setState(JSON.parse(window.localStorage.getItem("auth")))
},[])
//return and wrap statement
return (<UserContext.Provider value={[state,setState]}>
 {children}
</UserContext.Provider>
);
};

export {UserContext,UserProvider};