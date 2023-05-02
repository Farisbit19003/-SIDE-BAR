import React from "react";

const GroupCategory = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        <label className="font-semibold ">Group</label>

        <select
          type="text"
          className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option className="">--Select--</option>
          <option className="">Electronics</option>
          <option className="">Shoes</option>
          <option className="">Laptops</option>
          <option className="">Grocery</option>
          <option className="">Make Up</option>
        </select>
        <label className="font-semibold ">Categories</label>

        <select
          type="text"
          className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option className="">--Select--</option>
          <option className="">Fish</option>
          <option className="">Bakery</option>
          <option className="">Biscuite</option>
          <option className="">Snacks</option>
          <option className="">TOFFEES</option>
        </select>
      </div>
    </>
  );
};
export default GroupCategory;
