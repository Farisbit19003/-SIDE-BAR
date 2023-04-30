import React from "react";
import { TiDelete } from "react-icons/ti";
import { TbCircleCheck } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { Headings, ProductsData,  } from "./productsData";
import { Link } from "react-router-dom";
export const ProductsTable = () => {
  return (
    <>
      <div className="my-6  flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Shops</p>
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
                {ProductsData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.Image}</td>
                    <td className="px-4 py-2">{item.Name}</td>
                    <td className="px-4 py-2">{item.Group}</td>
                    <td className="px-4 py-2">{item.Shop}</td>
                    <td className="px-4 py-2">{item.Price}</td>
                    <td className="px-4 py-2">{item.Quantity}</td>
                    <td className="px-4 py-2 text-[#248F59]">{item.Status}</td>
                    <td className="px-4 py-2 cursor-pointer flex gap-2">{item.Action}</td>

                    
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
