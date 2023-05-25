import React from "react";
import { TiTrash } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
export const PurchaseTable = ({
  handleDelete,
  products,
}) => {
  const calculateTotal = () => {
    let total = 0;
    products?.forEach((product) => {
        const price = product.purchasePrice;
        const subtotal = price *product.quantity;
        total += subtotal;
    });
  
    return total;
  };
  
 
 
  return (
    <>
      {!products || products.length === 0 ? (
        <div className="flex  justify-center">
          <div className="flex flex-col items-center">
            {/* <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" /> */}
            <span className="mt-4 text-gray-500 text-lg font-semibold">
              Loading...
            </span>
            <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
              No Purchase Found
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="my-6  flex border bg-white shadow">
            <div className=" mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-center items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg ">
                  Purchase
                </p>
              </div>
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 font-sans shadow">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Catgeory</th>
                      <th className="px-4 py-2">Store</th>
                      <th className="px-4 py-2">PurchasePrice</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      products?.map((item, index) => (
                        <tr
                          className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                          key={item._id}
                        >
                          <td className="px-4 py-2">
                            <img
                              src={item?.feature_pic?.url}
                              className="h-16 w-16"
                            />
                          </td>
                          <td className="px-4 py-2">{item.name}</td>
                          <td className="px-4 py-2">{item.category.name}</td>
                          <td className="px-4 py-2">{item.store.Storename}</td>
                          <td className="px-4 py-2">{item.purchasePrice}</td>
                          <td className="px-4 py-2">{item.quantity}</td>
                          <td className="px-4 py-2">{item.quantity*item.purchasePrice}</td>
                        </tr>
                      ))}
                  <tr
                          className="bg-white font-bold cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                          
                        >
                          <td className="px-4 py-2">
                        Total Amount:{calculateTotal()}/PKR
                          </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
