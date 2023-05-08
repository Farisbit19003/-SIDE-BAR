import React, { useEffect, useState } from "react";
import AdminLayout from "../admin";
import { BiSearch } from "react-icons/bi";
import { ShopTable } from "../../comp/shop/shopsTable";
import { useSelector } from "react-redux";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { allShops } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (allShops && allShops.length) {
      setShops(allShops);
    }
  }, [allShops]);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c.Storename.toLowerCase().includes(keyword);
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            All Shops
          </h1>
        </div>

        <div className="relative w-full max-w-md">
          <input
          onChange={handleSearchInputChange}
            type="search"
            placeholder="Type queries"
            className="w-full sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 px-3 sm:px-4 whitespace-pre-wrap my-2 text-gray-400 outline-none focus:outline-none active:outline-none"
          >
            <BiSearch size={25} className="inline-block align-middle" />
          </button>
        </div>
      </div>
      <ShopTable shops={shops} Searched={Searched} keyword={keyword} page="Admin" />  
        </AdminLayout>
  );
};

export default Shops;
