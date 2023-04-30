import React from "react";
import { recentPurchasesData,Headings } from "./recentPurchasesData";
export const RecentPurchasesTable=()=>{
    return (
      <>
        <div className="mb-6 flex border bg-white shadow">
          <div className=" mx-auto mt-2 h-fit w-full">
            <div className="flex flex-row justify-center items-center mx-2 my-2">
              <p className="flex font-sans font-semibold text-lg ">
                Recent Purchases
              </p>
            </div>
            <div className="overflow-x-auto flex flex-col justify-center">
              <table className="mx-2 my-2 font-sans shadow">
                <thead>
                  <tr className="bg-[#F2F2F2]">
                    {Headings.map((heading, index) => (
                      <th className="px-4 py-2" key={index}>
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentPurchasesData.map((item, index) => (
                    <tr className="bg-white cursor-default hover:!bg-gray-100 border-b-2" key={index}>
                      <td className="px-4 py-2">{item.orderId}</td>
                      <td className="px-4 py-2">{item.product}</td>
                      <td className="px-4 py-2">
                        <div
                          className={`h-fit w-fit whitespace-nowrap px-2 py-2 rounded text-xs font-sans ${item.payment.backgroundColor}`}
                        >
                          {item.payment.status}
                          {item.payment.icon}
                        </div>
                      </td>
                      <td className="px-4 py-2">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
}