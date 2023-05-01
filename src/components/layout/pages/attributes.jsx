import React from "react";
import AdminLayout from "../admin";
import { Link } from "react-router-dom";
import { AttributeTable } from "../../comp/attributes/attributeTable";

const Attributes = () => {
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex  shadow flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Categories
          </h1>
        </div>
        <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
          <div className=" flex ">
            <button className="bg-[#248F59] w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#FFFFFF]">
              <Link to="/attributes/create">Add Attribute</Link>
            </button>
          </div>
        </div>
      </div>
      <AttributeTable />
    </AdminLayout>
  );
};

export default Attributes;
