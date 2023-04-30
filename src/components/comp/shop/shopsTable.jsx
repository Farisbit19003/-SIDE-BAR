import React from "react";
import { TiDelete } from "react-icons/ti";
import { TbCircleCheck } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { Headings, ShopData } from "./shopsData";
import { Link } from "react-router-dom";
export const ShopTable = () => {
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
                {ShopData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.Logo}</td>
                    <td className="cursor-pointer px-4 py-2">{item.Name}</td>
                    <td className="px-4 py-2">{item.OwnerName}</td>
                    <td className="px-4 py-2">{item.Products}</td>
                    <td className="px-4 py-2">{item.Orders}</td>
                    <td
                      className={`px-4 py-2 font-medium  ${
                        item.Status === "Active"
                          ? "text-[#248F59]"
                          : "text-red-600"
                      }`}
                    >
                      {item.Status}
                    </td>

                    <td className="px-4 cursor-pointer py-2 gap-3 flex flex-row">
                      {item.Status === "Active"
                        ? item.Action.filter((icon) => icon.type === TiDelete)
                        : item.Action.filter(
                            (icon) => icon.type === TbCircleCheck
                          )}
                      <Link to="/shop/details">
                        <AiOutlineEye size={25} />
                      </Link>
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
