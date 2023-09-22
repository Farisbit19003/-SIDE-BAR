import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PopularProductTable } from "./table/popularProductTable";
import { RecentPurchasesTable } from "./table/recentPurchasesTable";
const Table = () => {
  const { allOrders, product } = useSelector((state) => ({
    ...state,
  }));

  const [products, setProducts] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const updated = product?.filter((p) => {
      return p.totalSold >= 5;
    });
    setProducts(updated);
  }, [product]);

  useEffect(() => {
    const filteredOrders = allOrders
      ?.filter((order) => {
        return order.orderType === "Purchase";
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const limitedOrders = filteredOrders?.slice(0, 10); // Get the first 10 elements
    setRecentOrders(limitedOrders);
  }, [allOrders]);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(15);

  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalposts = products?.length
    ? ((products.length / 15) * 10).toFixed()
    : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData = products?.slice(startIndex, endIndex);
  const [page1, setPage1] = useState(1);
  const [itemsPerPage1] = useState(15);

  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex1 = (page1 - 1) * itemsPerPage1;
  const endIndex1 = startIndex1 + itemsPerPage1;
  const totalposts1 = recentOrders?.length
    ? ((recentOrders.length / 15) * 10).toFixed()
    : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData1 = recentOrders?.slice(startIndex1, endIndex1);
  return (
    <>
      {/* RECENT PURCHASE */}
      <RecentPurchasesTable recentOrders={paginatedData1} />

      <div className=" text-center mb-5">
        <Pagination
          current={page1}
          onChange={(value) => setPage1(value)}
          total={totalposts1}
        />
      </div>

      {/* POPULAR PRODUCTS */}
      <PopularProductTable products={paginatedData} />

      <div className=" text-center">
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          total={totalposts}
        />
      </div>
    </>
  );
};
export default Table;
