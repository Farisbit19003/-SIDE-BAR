import React from "react";
import { AiOutlineEye } from "react-icons/ai";

export const ReviewTable = ({ keyword, Searched, products }) => {
  let row = 1;

  return !products || products.length === 0 ? (
    <div className="flex  justify-center">
      <div className="flex flex-col items-center">
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
        <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
          No Review Found
        </span>
      </div>
    </div>
  ) : (
    <>
      <div className="my-6 p-3 flex bg-white border border-[#f2f2f2] rounded">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Reviews</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 font-sans border border-[#f2f2f2] rounded">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  <th className="px-4 py-2">Sr#</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Review Count</th>
                  <th className="px-4 py-2">View</th>
                </tr>
              </thead>

              <tbody>
                {products &&
                  products.filter(Searched(keyword)).map((item, index) => (
                    <tr
                      className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                      key={index}
                    >
                      <td className="px-4 py-2">{row++}</td>
                      <td className="px-4 py-2">
                        <img className="h-6 w-6" src={item?.feature_pic?.url} />
                      </td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">
                        {item.rating?.reduce((total, r) => total + r?.star, 0) /
                          item.rating?.length}
                      </td>
                      <td className="px-4 flex items-center justify-center py-2">
                        {item.rating?.length}
                      </td>
                      <td className="px-4 py-2">
                        <a
                          href={`https://bazakr-pk-frontend.vercel.app/product/${item.slug}`}
                          target="_blank"
                        >
                          <AiOutlineEye color="green" size={20} />
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
