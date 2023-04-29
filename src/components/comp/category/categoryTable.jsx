import React from "react";
import { Headings, catTableData } from "./categoryTableData";

const CatTable=()=>{
  return(
    <>
     <div className="mb-6 flex border w-full bg-white shadow">
    <div className=" mx-auto mt-2 h-fit w-full">
      <div className="flex flex-row justify-center items-center mx-2 my-2">
        <p className="flex font-sans font-semibold text-lg ">
          Categories
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
            {catTableData.map((item, index) => (
              <tr className="bg-white" key={index}>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.Name}</td>
                <td className="px-4 py-2">{item.Icon}</td>
                <td className="px-4 py-2">{item.Slug}</td>
                <td className="px-4 py-2">{item.Group}</td>
                <td className="px-4 py-2 bg-none flex flex-row">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div></>
);
}
export default CatTable;