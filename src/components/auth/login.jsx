import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-wrap h-screen lg:p-4   mx-auto justify-center">
      <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
          {/* LOGO */}
          <img src="../../src/assets/Logo.svg" className="h-10" alt="" />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
            Login to Admin
          </h1>
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Email</label>
          <input
            type="email"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* PASSWORD */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Password</label>
          <Link to="/forgot-password" className="text-end cursor-pointer justify-end text-sm flex flex-wrap text-[#248F59] italic mb-2 -mt-6 align-middle">
            Forgot Password?
          </Link>
          <input
            type="password"
            className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* LOGIN */}
          <button className="h-12 my-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]">
            <Link to="/">Login</Link>
          </button>
          {/* OR */}
          <div className="relative flex my-5 flex-col items-center justify-center text-sm text-heading">
            <hr className="w-full" />
            <span className="start-2/4 -ms-4 absolute -top-2.5 bg-light px-2">
              OR
            </span>
          </div>
          {/* REGISTER */}
          <span className="font-sans text-base font-normal my-2 text-center">
            Don't have any account?
            <Link to="/register" className="text-[#248F59]">
              {" "}
              Register as Shop Owner
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
export default Login;
