import React from "react";
import { Link } from "react-router-dom";

const Register =()=>{
 return (
   <>
    
       <div className="bg-gray-200 flex flex-wrap h-screen lg:p-4  mx-auto justify-center">
         <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
           <img src="../../src/assets/Logo.svg" className="h-10" alt="" />
           <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
             Register New Account
           </h1>
           {/* NAME */}
           <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Name</label>
           <input
             type="text"
             className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
           {/* EMAIL */}
           <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Email</label>
           <input
             type="email"
             className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
           {/* PASSWORD */}
           <label className="font-semibold flex flex-wrap mb-3  text-sm leading-none text-body-dark">Password</label>
           <input
             type="password"
             className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
           {/* BUTTON */}
           <button className="h-12 mb-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]">
             <Link to="/login">Register</Link>
           </button>
           {/* OR */}
           <div className="relative flex flex-col mt-2 items-center justify-center text-sm text-heading">
             <hr className="w-full " />
             <span className="start-2/4 -ms-4 absolute -top-2.5 bg-light px-2">
               OR
             </span>
           </div>
           <span className="font-sans text-base font-normal my-3 text-center">
             Already have an Account?
             <Link to="/login" className="text-[#248F59]">
               {" "}
               Login
             </Link>
           </span>
         </div>
       </div>
    
   </>
 );
}
export default Register;