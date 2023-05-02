import React from "react";

const PricenQuantity=()=>{
    return (
      <>
        <div className="p-3 font-sans w-full flex flex-col">
          <label className="font-semibold ">Price</label>

          <input
            type="number"
            className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <label className="font-semibold ">Sale Price</label>

          <input
            type="number"
            className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <label className="font-semibold ">Quantity</label>

          <input
            type="number"
            className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
         
        </div>
      </>
    );
}

export default PricenQuantity;