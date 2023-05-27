import React, { useState, useEffect } from "react";
import OrderViewHeader from "./orderdetail/order-view-header";
import ShopLayout from "../../layout/Shop";
import DetailPack from "./orderdetail/detailpack";
import { OrderDetailTable } from "./orderdetail/orderDetailTable";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
const handleDelete = () => {};
const OrderDetail = () => {
  const { allOrders, loggedIn } = useSelector((state) => ({ ...state }));
  const [singleOrder, setSingleOrder] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  let GrandTotal =
    singleOrder?.orderType == "Sales"
      ? singleOrder?.Products?.reduce((acc, p) => {
          return acc + p?.Product.salePrice * p.order_quantity;
        }, 0)
      : singleOrder?.Products?.reduce((acc, p) => {
          return acc + p?.Product.purchasePrice * p.order_quantity;
        }, 0);

  const LoadOrder = () => {
    const updated = allOrders?.filter((o) => {
      return params._id === o._id;
    });
    setSingleOrder(updated[0]);
  };
  useEffect(() => {
    if (allOrders && allOrders.length) {
      LoadOrder();
    }
  }, [params, allOrders]);
  useEffect(() => {
    if (!singleOrder || !loggedIn?.token) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [singleOrder, loggedIn]);
  return !singleOrder || allOrders === null || !loggedIn?.token ? (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <>
      <ShopLayout>
        <OrderViewHeader singleOrder={singleOrder} GrandTotal={GrandTotal} />
        <OrderDetailTable
          handleDelete={handleDelete}
          singleOrder={singleOrder}
        />
        <DetailPack singleOrder={singleOrder} GrandTotal={GrandTotal} />
      </ShopLayout>
    </>
  );
};
export default OrderDetail;
