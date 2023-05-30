import React, { useEffect, useState } from "react";
import { RecentPurchasesTable } from "./table/recentPurchasesTable";
import { PopularProductTable } from "./table/popularProductTable";
import { useSelector } from "react-redux";
const Table = () => {
  const { loggedIn, allOrders, product } = useSelector((state) => ({
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

  return (
    <>
      <RecentPurchasesTable recentOrders={recentOrders} />

      <PopularProductTable products={products} />
    </>
  );
};
export default Table;
