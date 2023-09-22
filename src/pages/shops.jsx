import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../components/common/Search";
import { ShopTable } from "../components/shop/shopsTable";
import AdminLayout from "../layout/admin";

const Shops = () => {
  const [shops, setShops] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { allShops } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (allShops && allShops.length) {
      setShops(allShops);
    }
  }, [allShops]);

  const Searched = (keyword) => (c) =>c.Storename.toLowerCase().includes(keyword);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(15);
  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalposts = shops?.length ? ((shops.length / 15) * 10).toFixed() : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData = shops?.slice(startIndex, endIndex);

  return (
    <>
      <AdminLayout>
        <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              All Shops
            </h1>
          </div>

          <Search setKeyword={setKeyword}/>
        </div>

        <ShopTable
          shops={paginatedData}
          Searched={Searched}
          keyword={keyword}
          page="Admin"
        />

        <div className="text-center">
          <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            total={totalposts}
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default Shops;
