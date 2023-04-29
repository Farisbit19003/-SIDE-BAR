import React from "react";

const ShopInfo = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        <label className="font-semibold ">Country</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold ">City</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold ">State</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold ">Zip</label>

        <input
          type="number"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <label className="font-semibold ">Street Address</label>

        <textarea
          
          className=" mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
    </>
  );
};
export default ShopInfo;
