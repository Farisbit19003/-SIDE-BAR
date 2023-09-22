import React from "react";
import { DateTime } from "luxon"; 

export const RecentPurchasesTable = ({ recentOrders }) => {
  let row = 1;
  return (
    <>
      <div className="mb-6 p-3 border rounded border-[#f2f2f2] flex  bg-white ">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">
              Recent Purchases
            </p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 border whitespace-nowrap rounded border-[#f2f2f2] font-sans shadow">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  <th className="px-4 py-2">Sr#</th>
                  <th className="px-4 py-2">OrderID</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Shopname</th>
                  <th className="px-4 py-2">Order Quantity</th>
                  <th className="px-4 py-2">Payment</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders?.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2"
                    key={index}
                  >
                    <td className="px-4 py-2">{row++}</td>
                    <td className="px-4 py-2">{item._id}</td>

                    <td className="px-4 py-2">
                      {DateTime.fromISO(item?.createdAt).toLocaleString(DateTime.DATE_MED)}
                    </td>
                    <td className="px-4 py-2">{item.store?.Storename}</td>
                    <td className="px-4 py-2">
                      {item?.Products?.reduce((acc, p) => {
                        return acc + p.order_quantity;
                      }, 0)}
                    </td>
                    <td className="px-4 py-2">
                      <div
                        className={`h-fit text-[#248F59] bg-[#DEEEE6] w-fit whitespace-nowrap px-2 py-2 rounded uppercase text-xs font-sans`}
                      >
                        {item.paymentType}
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      {" "}
                      {item?.Products?.reduce((acc, p) => {
                        return acc + p.Product.salePrice * p.order_quantity;
                      }, 0) * 0.9}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
