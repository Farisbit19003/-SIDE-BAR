import React from "react";


const Password = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        <label className="font-semibold ">Old Password</label>

        <input
          type="password"
          className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

      
        <label className="font-semibold ">New Password</label>

        <input
          type="password"
          className=" my-2 h-10 bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

      
        <label className="font-semibold ">Confirm Password</label>

        <input
          type="password"
          className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

      </div>
    </>
  );
};
export default Password;
