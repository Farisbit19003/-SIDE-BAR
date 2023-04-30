import React from "react";
import AdminLayout from "../admin";
import { Link } from "react-router-dom";
import CatTable from "../../comp/category/categoryTable";
import Search from "../../comp/common/search";

const Categories = () => {
  //  function handleSearch({ searchText }:
  //   { searchText: string }) {
  //   setSearchTerm(searchText);
  //   setPage(1);
  // }
  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col">
        <div className="flex p-3 bg-white justify-center w-full flex-col items-center md:flex-row">
          <div className="flex items-center justify-center md:mb-0 md:w-1/4">
            <h1 className="text-4xl flex items-center justify-center font-serif text-[#248F59] font-normal text-heading">
              Category
            </h1>
          </div>

          <div className="  w-full  flex sm:flex-row flex-col   xl:w-3/4 border-2 border-red-900  ">
            <Search className="flex" />

            {/* <TypeFilter
              className="md:ms-6"
              onTypeFilter={({ slug }: { slug: string }) => {
                setType(slug);
                setPage(1);
              }}
            /> */}
              <div className="flex w-full sm:w-fit">
            <button className="bg-[#248F59] my-auto rounded h-10 w-full sm:w-full text-sm whitespace-nowrap flex  justify-center items-center font-sans uppercase text-[#FFFFFF] p-3">
              <Link to="/categories/create">Add Categories</Link>
            </button></div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        {" "}
        <CatTable />
      </div>
    </AdminLayout>
  );
};

export default Categories;
