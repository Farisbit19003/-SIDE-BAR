import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword=()=>{
    return(
        <>
    
       <div className="bg-gray-200 flex flex-wrap h-screen  lg:p-4 mx-auto justify-center">
         <div className="bg-white flex flex-col p-4   md:w-fit w-full mx-auto border-2 justify-center shadow">
           <img src="../../src/assets/Logo.svg" className="h-10" alt="" />
           <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
             Forgot Password
           </h1>
           {/* EMAIL */}
           <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Email</label>
           <input
             type="email"
             className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
          {/* SUBMIT */}
          <button className="h-12 my-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]">
            <Link to="/">Submit Email</Link>
          </button>

           
         </div>
       </div>
    
   </>
    );
}

export default ForgotPassword;