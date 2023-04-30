import React from "react";
import { Headings, PopularProductData } from "./popularProductData";

export const PopularProductTable=()=>{
    return(
        <>
         <div className="mb-6 flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">
              Popular Products
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
                {PopularProductData.map((item, index) => (
                  <tr className="bg-white cursor-default hover:!bg-gray-100 border-b-2" key={index}>
                    <td className="px-4 py-2">{item.Name}</td>
                    <td className="px-4 py-2">{item.Shop}</td>
                    <td className="px-4 py-2">{item.Price}</td>
                    <td className="px-4 py-2">{item.Quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div></>
    );
}