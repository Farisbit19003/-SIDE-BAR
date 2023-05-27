import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
export const PurchaseOrderTable = ({ orders, keyword, Searched }) => {
  let row = 1;
  const Revenue = orders?.map((order) => {
    const orderTotal = order.Products?.reduce((acc, product) => {
      return acc + product.Product.purchasePrice * product.order_quantity;
    }, 0);
    
    return orderTotal; // Subtracting 10% from the order total
  });
  
  const totalRevenue = Revenue?.reduce((acc, orderTotal) => {
    return acc + orderTotal;
  }, 0);
  
  function handleMouseEnter(event) {
    const cell = event.currentTarget;
    const review = cell.textContent;
    cell.setAttribute("title", review);
    cell.classList.add("show-review");
  }

  function handleMouseLeave(event) {
    const cell = event.currentTarget;
    cell.removeAttribute("title");
    cell.classList.remove("show-review");
  }

  function getStatusColorClass(status) {
    switch (status) {
      case "Order Processing":
        return "text-[#EAB308]";
      case "Order Completed":
        return "text-[green]";
      case "Order Cancelled":
        return "text-pink-500";
      case "Order Failed":
        return "text-red-500";
      case "Order Refund":
        return "text-amber-800";
      case "Order At Local Facility":
        return "text-slate-800";
      case "Order Out For Delivery":
        return "text-emerald-500";
      case "Order Pending":
        return "text-orange-600";
      default:
        return "";
    }
  }

  return (
    <>
      {!orders || orders.length === 0 ? (
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            {/* <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" /> */}
            <span className="mt-4 text-gray-500 text-lg font-semibold">
              Loading...
            </span>
            <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
              No Order Found
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="my-6 flex border bg-white shadow">
            <div className="mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-center items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg ">Orders</p>
              </div>
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 font-sans shadow">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 whitespace-nowrap py-2">Sr#</th>
                      <th className="px-4 whitespace-nowrap py-2">
                        Tracking ID
                      </th>
                      <th className="px-4 whitespace-nowrap py-2">Date</th>
                      <th className="px-4 whitespace-nowrap py-2">Status</th>
                      <th className="px-4 whitespace-nowrap py-2">
                        Order Type
                      </th>
                      <th className="px-4 whitespace-nowrap py-2">
                        Order Address
                      </th>
                      <th className="px-4 whitespace-nowrap py-2">Quantity</th>
                      <th className="px-4 whitespace-nowrap py-2">Order By</th>
                      <th className="px-4 whitespace-nowrap py-2">Store</th>
                      <th className="px-4 whitespace-nowrap py-2">Total</th>
                      <th className="px-4 whitespace-nowrap py-2">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders &&
                      orders.filter(Searched(keyword)).map((item, index) => (
                        <>
                          <tr
                            className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                            key={index}
                          >
                            <td className="px-4 py-2">{row++}</td>
                            <td className="px-4 py-2">{item._id}</td>
                            <td className="px-4 py-2">
                              {moment(item?.createdAt).format("MMMM D, YYYY")}
                            </td>
                            <td
                              className={`px-4 py-2 font-semibold  ${getStatusColorClass(
                                orders.orderStatus
                              )}`}
                            >
                              {item.orderStatus}
                            </td>
                            <td className="px-4 py-2">{item?.orderType}</td>
                            <td
                              className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              {item.order_address}
                            </td>
                            <td className="px-4 py-2">
                              {item?.Products?.reduce((acc, p) => {
                                return acc + p.order_quantity;
                              }, 0)}
                            </td>
                            <td className="px-4 py-2">{item?.orderBy?.name}</td>
                            <td className="px-4 py-2">
                              {item?.store?.Storename}
                            </td>
                            <td className="px-4 py-2">
                              {item?.Products?.reduce((acc, p) => {
                                return (
                                  acc + p.Product.purchasePrice * p.order_quantity
                                );
                              }, 0)}
                            </td>
                            <td className="px-4 py-2 flex items-center justify-center">
                              <Link to={`/order/detail/${item._id}`}>
                                <AiOutlineEye />
                              </Link>
                            </td>
                          </tr>
                        </>
                      ))}
                    <tr className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans">
                      <td className="px-4 py-2 font-bold">Total:{totalRevenue}/PKR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};