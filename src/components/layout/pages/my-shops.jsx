import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ShopTable } from "../../comp/shop/shopsTable";
import ShopLayout from "../../layout/Shop/index";
const MyShops = () => {
  const [shops, setShops] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { sellerShops } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (sellerShops && sellerShops.length) {
      setShops(sellerShops);
    }
  }, [sellerShops]);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) =>
    c.Storename.toLowerCase().includes(keyword);
  return (
    <>
      <ShopLayout>
        <div className="p-3 md:p-6 mb-6 flex border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              My Shops
            </h1>
          </div>

          <div className="relative w-full max-w-md">
            <input
              onChange={handleSearchInputChange}
              type="search"
              placeholder="Type queries"
              className="w-full sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
        <ShopTable shops={shops} Searched={Searched} keyword={keyword} />
      </ShopLayout>
    </>
  );
};

export default MyShops;
