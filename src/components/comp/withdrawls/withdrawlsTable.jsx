import React from "react";
import { Headings, WithdrwalsData } from "./withdrawlsData";

export const WithdrawlsTable = () => {
  function getStatusColorClass(status) {
    switch (status) {
      case "APPROVED":
        return "text-green-500";
      case "PENDING":
        return "text-blue-500";
      case "ON_HOLD":
        return "text-pink-500";
      case "REJECTED":
        return "text-red-500";
      case "PROCESSING":
        return "text-yellow-500";
      default:
        return "";
    }
  }
  return (
      <>
      <div className="my-6  flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Withdraws</p>
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
                {WithdrwalsData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.ShopName}</td>
                    <td className="px-4 py-2">{item.Amount}</td>
                    <td
                      className={`px-4 py-2 font-semibold  ${getStatusColorClass(
                        item.Status
                      )}`}
                    >
                      {item.Status}
                    </td>

                    <td className="px-4 py-2">{item.Created}</td>
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
