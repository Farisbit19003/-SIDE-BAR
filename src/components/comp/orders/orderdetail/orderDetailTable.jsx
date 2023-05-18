import React from "react";

import { Link } from "react-router-dom";

export const OrderDetailTable = () => {
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
 
  return (
    <>
      <div className="my-6  flex border   bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">
              Order Detail
            </p>
          </div>
          <div className="overflow-x-auto ">
            <table className="mx-2 my-2 flex flex-col justify-center font-sans shadow">
              <thead>
                <tr className="bg-[#F2F2F2] w-full flex justify-between">
                  <th className="px-4 whitespace-nowrap py-2">Product</th>
                  <th className="px-4 whitespace-nowrap py-2">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white cursor-default flex justify-between whitespace-nowrap hover:!bg-gray-100 border-b-2 font-normal font-sans">
                  <td className="px-4 py-2">
                    <span> Image</span>
                    <span> Name</span> <span >x</span>
                    <span className="font-bold"> Quantity</span>
                  </td>
                  <td className="px-4 py-2">Price</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
