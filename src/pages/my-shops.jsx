import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../components/common/Search";
import { ShopTable } from "../components/shop/shopsTable";
import ShopLayout from "../layout/Shop/";

const MyShops = () => {
  
  const [shops, setShops] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { sellerShops } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (sellerShops && sellerShops.length) {
      setShops(sellerShops);
    }
  }, [sellerShops]);
 
  const Searched = (keyword) => (c) => c.Storename.toLowerCase().includes(keyword);
 
  return (
    <>
      <ShopLayout>
        <div className="p-3 md:p-6 mb-6 flex border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              My Shops
            </h1>
          </div>
            {/* SEARCH */}
            <Search setKeyword={setKeyword}/>
        </div>
        {/* SHOP TABLE */}
        <ShopTable shops={shops} Searched={Searched} keyword={keyword} />
      </ShopLayout>
    </>
  );
};

export default MyShops;
