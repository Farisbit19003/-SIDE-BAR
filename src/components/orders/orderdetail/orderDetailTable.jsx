import React from "react";
export const OrderDetailTable = ({ singleOrder }) => {
  return (
    <>
      <div className="my-6 p-3 flex border border-[#f2f2f2] rounded bg-white ">
        <div className=" mx-auto mt-2 h-fit w-full">
          <div className="flex flex-row justify-center items-center mx-2 my-2">
            <p className="flex font-sans font-semibold text-lg ">Order</p>
          </div>
          <div className="overflow-x-auto flex flex-col justify-center">
            <table className="mx-2 my-2 border border-[#f2f2f2] rounded whitespace-nowrap font-sans shadow">
              <thead>
                <tr className="bg-[#F2F2F2]">
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Ordered Quantity</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>

              <tbody>
                {singleOrder?.Products?.map((item, index) => (
                  <tr
                    className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                    key={index}
                  >
                    <td className="px-4 py-2">{item?.Product?.name}</td>
                    <td className="px-4 py-2">
                      <img
                        src={item?.Product?.feature_pic?.url}
                        className="h-8 w-8"
                      />
                    </td>
                    <td className="px-4 flex items-center justify-center py-2">
                      {item?.order_quantity}
                    </td>
                    <td className="px-4 py-2">
                      Rs:
                      {singleOrder?.orderType === "Sales"
                        ? item?.Product?.salePrice
                        : item?.Product?.purchasePrice}
                    </td>
                    <td className="px-4 py-2">
                      Rs:
                      {singleOrder?.orderType === "Sales"
                        ? item?.Product?.salePrice * item?.order_quantity
                        : item?.Product?.purchasePrice * item?.order_quantity}
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
