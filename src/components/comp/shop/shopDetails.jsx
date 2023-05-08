import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/admin";
import ShopLayout from "../../layout/Shop";
import DetailsCard from "./DetailsCard";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ShopDetails = () => {
  const [singleShop,setSingleShop]=useState({});
  const { loggedIn,allShops,sellerShops } = useSelector((state) => ({ ...state }));
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  const params=useParams();
  const navigate=useNavigate();
useEffect(()=>{
if(role==="Admin"&&allShops&&params?.slug){
 const filtered=allShops?.filter((s)=>{
  return s.slug===params.slug;
 })
 filtered&&setSingleShop(filtered[0]);
}
if(role==="Seller"&&sellerShops&&params?.slug){
  const filtered=sellerShops?.filter((s)=>{
    return s.slug===params.slug;
   })
   filtered&&setSingleShop(filtered[0]);
}
},[params,params.slug])
useEffect(()=>{
  if (!singleShop) {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }
},[singleShop])
  return(
    <>
      {role === "Admin" ? (
        <AdminLayout>
         {!singleShop || allShops===null?(
    <div className=" inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
      <AiOutlineLoading3Quarters className="mt-48 text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-16 text-gray-500 text-lg font-semibold">
          Loading.....................
        </span>
      </div>
    </div>
  ):<DetailsCard page="Admin" singleShop={singleShop} />}
        </AdminLayout>
      ) : (
        <ShopLayout>
        {!singleShop || sellerShops===null?(
    <div className=" inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
      <AiOutlineLoading3Quarters className="mt-48 text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-16 text-gray-500 text-lg font-semibold">
          Loading.....................
        </span>
      </div>
    </div>
  ):  <DetailsCard singleShop={singleShop} />}
        </ShopLayout >
      )}
    </>
  );
};
export default ShopDetails;
