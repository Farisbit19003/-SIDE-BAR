import {useEffect,useState } from "react"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
const StripeCallback = () => {
const{loggedIn}=useSelector((state)=>({...state}));
const dispatch=useDispatch();
const navigate=useNavigate();
const handleStatus=async()=>{
  if(loggedIn)
      {
    const {data}= await axios.post("/get-account-status");
    if(data.error){
        toast.error(data.error);
    }else{
        let auth = JSON.parse(window.localStorage.getItem("auth"));
        auth.user = data.user;
        window.localStorage.setItem("auth", JSON.stringify(auth));
        //update in state
        dispatch({
          type:"LOGGED_IN_USER",
          payload:{
            ...loggedIn,
            user:auth.user,
          }
        })
        navigate("/");
    }
      }
}
    useEffect(()=>{
      handleStatus();
    } ,[loggedIn]);
  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="flex flex-col items-center">
    <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
      <span className="mt-4 text-gray-500 text-lg font-semibold">Loading</span>
    </div>
  </div>
  )
}

export default StripeCallback