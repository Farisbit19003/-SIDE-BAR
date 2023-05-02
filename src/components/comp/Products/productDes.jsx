import React from "react";

const ProductDescription=()=>{
    return (
      <>
        <div className="p-3 font-sans w-full flex flex-col">
          <label className="font-semibold ">Name</label>

          <input
            type="text"
            className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <label className="font-semibold ">Unit</label>

          <input
            type="text"
            className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <label className="font-semibold ">Description</label>

          <textarea className="my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
      </>
    );
}

export default ProductDescription;