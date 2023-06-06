import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ShopTable } from "../../comp/shop/shopsTable";
import AdminLayout from "../admin";
import { Pagination } from "antd";
const Shops = () => {
  const [shops, setShops] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { allShops } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (allShops && allShops.length) {
      setShops(allShops);
    }
  }, [allShops]);

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) =>
    c.Storename.toLowerCase().includes(keyword);
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(15);
    //Sort Products Based on Sold
    // calculate the start and end indexes of the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalposts = shops?.length
      ? ((shops.length / 15) * 10).toFixed()
      : "";
    // extract a portion of the array based on the start and end indexes
    const paginatedData = shops?.slice(startIndex, endIndex);
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
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
        </div>
      </div>
      <ShopTable
        shops={paginatedData}
        Searched={Searched}
        keyword={keyword}
        page="Admin"
      />
            <div className="row">
        <div className="col text-center mb-5">
          <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            total={totalposts}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Shops;
