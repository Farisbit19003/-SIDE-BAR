import React from "react";
import { Headings, UserData } from "./userData";

export const UserTable = () => {
  return (
    <>
      <div className="my-6  flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Refunds</p>
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
                {UserData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.avatar}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2 ">{item.email}</td>
                    <td className="px-4 py-2">{item.role}</td>
                    <td
                      className={`px-4 py-2 font-medium  ${
                        item.status === "Active"
                          ? "text-[#248F59]"
                          : "text-red-600"
                      }`}
                    >
                      {item.status}
                    </td>
                    <td className="px-4 py-2 flex gap-2 items-center justify-center">
                      {item.Action}
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
