import React from "react";
import { Headings, ReviewData } from "./reviewdata";
import { AiOutlineEye } from "react-icons/ai";

export const ReviewTable = ({ keyword, Searched, products }) => {
  let row = 1;
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
  return !products || products.length === 0 ? (
    <div className="flex  justify-center">
      <div className="flex flex-col items-center">
        {/* <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" /> */}
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
        <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
          No Product Found
        </span>
      </div>
    </div>
  ) : (
    <>
      <div className="my-6  flex border bg-white shadow">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Reviews</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 font-sans shadow">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  <th className="px-4 whitespace-nowrap py-2">Sr#</th>
                  <th className="px-4 whitespace-nowrap py-2">Image</th>
                  <th className="px-4 whitespace-nowrap py-2">Name</th>
                  <th className="px-4 whitespace-nowrap py-2">
                    Average Rating
                  </th>
                  <th className="px-4 whitespace-nowrap py-2">No oF rating</th>
                  <th className="px-4 whitespace-nowrap py-2">View</th>
                </tr>
              </thead>

              <tbody>
                {products &&
                  products.filter(Searched(keyword)).map((item, index) => (
                    <tr
                      className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                      key={index}
                    >
                      <td className="px-4 py-2">{row++}</td>
                      <td className="px-4 py-2">
                        <img className="h-6 w-6" src={item?.feature_pic?.url} />
                      </td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs">
                        { item.rating?.reduce((total, r) => total + r?.star, 0)/item.rating?.length}
                      </td>
                      <td className="px-4 py-2">{item.rating?.length}</td>
                      <td className="px-4 py-2">
                        <a href={`https://bazakr-pk-frontend.vercel.app/product/${item.slug}`}
                        target="_blank"
                        >
                        <AiOutlineEye/>
                        </a>
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
