import React from "react";
import { Headings, ReviewData } from "./reviewdata";

export const ReviewTable = () => {
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
                {ReviewData.map((item, index) => (
                  <tr
                    className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item.image}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td
                      className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.review}
                    </td>
                    <td className="px-4 py-2">{item.rating}</td>
                    <td className="px-4 py-2">{item.products}</td>
                    <td className="px-4 py-2">{item.reports}</td>
                    <td className="px-4 py-2">{item.Date}</td>
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
