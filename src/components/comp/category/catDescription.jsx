import React from "react";
import { categoryTypes } from "./catItypes";
import { categoryParent } from "./catParent";

const CategoryDes = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        <label className="font-semibold ">Name</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <label className="font-semibold ">Detail</label>

        <textarea
          type="number"
          className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {/* <label className="font-semibold ">Select Icon</label>

    
          <CategoryDropdown /> */}

        <label className="font-semibold flex">Types</label>

        <select className="mb-2 p-3  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600">
          <option></option>
          {categoryTypes.map((category) => (
            <option key={category.value}>{category.label}</option>
          ))}
        </select>
        <label className="font-semibold flex">Parent Category</label>

        <select className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600">
        
          {categoryParent.map((category) => (
            <option key={category.label}>{category.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default CategoryDes;
