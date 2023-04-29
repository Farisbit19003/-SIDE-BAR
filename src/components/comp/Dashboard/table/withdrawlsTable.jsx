import React from "react";
import { recentPurchasesData,Headings } from "./withdrawlsData";
export const WithdrawlsTable=()=>{
    return(
        <>
         <div className="mb-6 flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">
              Withdrawls
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
                  <tr className="bg-white" key={index}>
                    <td className="px-4 py-2">{item.ShopName}</td>
                    <td className="px-4 py-2">{item.amount}</td>
                    <td className="px-4 py-2">
                      <div
                        className={`h-fit w-fit whitespace-nowrap px-2 py-2 rounded text-xs font-sans ${item.payment.backgroundColor}`}
                      >
                        {item.payment.status}
                        {item.payment.icon}
                      </div>
                    </td>
                    <td className="px-4 py-2">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div></>
    );
}