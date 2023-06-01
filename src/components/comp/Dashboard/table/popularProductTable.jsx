import React from "react";

export const PopularProductTable = ({ products }) => {
let row=1;
  return (
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
                <th className="px-4 py-2">Sr#</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Shop</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item, index) => (
                  <tr
                    className="bg-white whitespace-nowrap cursor-default hover:!bg-gray-100 border-b-2"
                    key={index}
                  >
                    <td className="px-4 py-2">{row++}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.store?.Storename}</td>
                    <td className="px-4 py-2">{item.salePrice}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
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
