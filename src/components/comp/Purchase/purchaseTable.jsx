import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { DeleteProduct } from "./functions";

export const PurchaseTable = ({ products }) => {
  const [updatedProducts, setUpdatedProducts] = useState(products);

  const calculateTotal = () => {
    let total = 0;
    updatedProducts?.forEach((product) => {
      const price = product.purchasePrice;
      const subtotal = price * product.quantity;
      total += subtotal;
    });
    return total;
  };

  const handleDelete = (item) => {
    swal({
      title: "Are you sure?",
      text: "This item will be removed from the table.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // Remove the item from the updatedProducts array
        const updatedList = updatedProducts.filter(
          (product) => product._id !== item._id
        );
        setUpdatedProducts(updatedList);

        swal("Deleted Successfully", {
          icon: "success",
        });
      }
    });
  };

  console.log(products);
  return (
    <>
      {!updatedProducts || updatedProducts.length === 0 ? (
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
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
          <div className="my-6 flex border bg-white shadow">
            <div className="mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-center items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg">Purchase</p>
              </div>
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 font-sans shadow">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Category</th>
                      <th className="px-4 py-2">Store</th>
                      <th className="px-4 py-2">Purchase Price</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Total</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updatedProducts?.map((item, index) => (
                      <tr
                        className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                        key={item._id}
                      >
                        <td className="px-4 py-2">
                          <img src={item?.feature_pic?.url} className="h-16 w-16" alt="Product" />
                        </td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.category.name}</td>
                        <td className="px-4 py-2">{item.store.Storename}</td>
                        <td className="px-4 py-2">{item.purchasePrice}</td>
                        <td className="px-4 py-2">{item.quantity}</td>
                        <td className="px-4 py-2">
                          {item.quantity * item.purchasePrice}
                        </td>
                        <td className="px-4 cursor-pointer py-2">
                          <TiDelete
                            size={25}
                            color="red"
                            onClick={() => handleDelete(item)}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-white font-bold cursor-default hover:!bg-gray-100 border-b-2 font-sans">
                      <td className="px-4 py-2">
                        Total Amount: {calculateTotal()} /PKR
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
