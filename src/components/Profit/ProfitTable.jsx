import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
export const ProfitTable = ({ orders, keyword, Searched }) => {
  let row = 1;
  const Revenue = orders?.map((order) => {
    const orderTotal = order.Products?.reduce((acc, product) => {
      const productTotal =
        product?.Product?.salePrice * product?.order_quantity * 0.9;
      const purchaseTotal =
        product?.Product?.purchasePrice * product?.order_quantity;
      const profit = productTotal - purchaseTotal;
      return acc + profit;
    }, 0);

    return orderTotal; // Subtracting 10% from the order total
  });

  const totalRevenue = Revenue?.reduce((acc, orderTotal) => {
    return acc + orderTotal;
  }, 0);

  return (
    <>
      {!orders || orders.length === 0 ? (
        <>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <span className="mt-4 text-gray-500 text-lg font-semibold">
                Loading...
              </span>
              <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
                No Order Found
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="my-6 p-3 flex border bg-white  rounded border-[#f2f2f2]">
            <div className="mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-between items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg ">
                  Profit / Loss
                </p>
                <p className="flex font-serif text-[#248f59] text-xl ">
                  Net Profit:
                  {Math.round(totalRevenue).toLocaleString("en-US", {
                    style: "currency",
                    currency: "PKR",
                  })}
                </p>
              </div>
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 border border-[#f2f2f2] rounded whitespace-nowrap font-sans shadow">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 py-2">Sr#</th>
                      <th className="px-4 py-2">Tracking ID</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Order By</th>
                      <th className="px-4 py-2">Store</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Sale Amount-10%</th>
                      <th className="px-4 py-2">Purchase Amount</th>
                      <th className="px-4 py-2">Total Profit</th>
                      <th className="px-4 py-2">Action</th>
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
                              {DateTime.fromISO(item?.createdAt).toLocaleString(
                                DateTime.DATE_FULL
                              )}
                            </td>

                            <td className="px-4 py-2">{item?.orderBy?.name}</td>
                            <td className="px-4 py-2">
                              {item?.store?.Storename}
                            </td>
                            <td className="px-4 py-2">
                              {item?.Products?.reduce((acc, p) => {
                                return acc + p.order_quantity;
                              }, 0)}
                            </td>
                            <td className="px-4 py-2">
                              {Math.round(
                                item?.Products?.reduce((acc, p) => {
                                  return (
                                    acc +
                                    p.Product?.salePrice * p.order_quantity
                                  );
                                }, 0) * 0.9
                              ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "PKR",
                              })}
                            </td>
                            <td className="px-4 py-2">
                              {Math.round(
                                item?.Products?.reduce((acc, p) => {
                                  return (
                                    acc +
                                    p.Product?.purchasePrice * p.order_quantity
                                  );
                                }, 0)
                              ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "PKR",
                              })}
                            </td>
                            <td className="px-4 py-2">
                              {Math.round(
                                item?.Products?.reduce((acc, p) => {
                                  return (
                                    acc +
                                    p.Product?.salePrice * p.order_quantity
                                  );
                                }, 0) *
                                  0.9 -
                                  item?.Products?.reduce((acc, p) => {
                                    return (
                                      acc +
                                      p.Product?.purchasePrice *
                                        p.order_quantity
                                    );
                                  }, 0)
                              ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "PKR",
                              })}
                            </td>

                            <td className="px-4 py-2 flex items-center justify-center">
                              <Link to={`/order/detail/${item._id}`}>
                                <AiOutlineEye size={25} color="green" />
                              </Link>
                            </td>
                          </tr>
                        </>
                      ))}
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
