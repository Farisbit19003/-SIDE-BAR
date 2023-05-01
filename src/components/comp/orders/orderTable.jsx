import React from "react";
import { Headings, OrderData } from "./orderData";

export const OrderTable = () => {
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
      <div className="my-6  flex border   bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Orders</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 font-sans shadow">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  {Headings.map((heading, index) => (
                    <th className="px-4 whitespace-nowrap py-2" key={index}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {OrderData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.trackingNO}</td>
                    <td className="px-4 py-2">{item.deliveryFee}</td>
                    <td className="px-4 py-2">{item.total}</td>
                    <td className="px-4 py-2">{item.OrderDate}</td>
                    <td
                      className={`px-4 py-2 font-semibold  ${getStatusColorClass(
                        item.Status
                      )}`}
                    >
                      {item.Status}
                    </td>
                    <td
                      className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >{item.address}</td>
                    <td className="px-4 py-2 flex justify-center">{item.Action}</td>
                    
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
