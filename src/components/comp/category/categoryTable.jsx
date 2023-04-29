import React from "react";
import { Headings, catTableData } from "./categoryTableData";

const CatTable=()=>{
return(
    <>
    <table className="w-full">
        <thead>
        <tr className="bg-[#f2f2f245] text-lg">
                  {Headings.map((heading, index) => (
                    <th className="px-4 py-2" key={index}>
                      {heading}
                    </th>
                  ))}
                </tr>
        </thead>
        <tbody>
            
                {catTableData.map((item, index)=>(
                  <tr className="bg-white" key={index}>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.Name}</td>
                  <td className="px-4 py-2">{item.Slug}</td>
                  <td className="px-4 py-2">{item.Icon}</td>
                  <td className="px-4 py-2">{item.Group}</td>
                  <td className="px-4 py-2">{item.Action}</td>
                </tr>
                ))}
            
        </tbody>
    </table>
    </>
);
}
export default CatTable;