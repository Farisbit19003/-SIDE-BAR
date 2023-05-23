import React from "react";

export const OrderDetailTable = ({
  handleDelete,
  keyword,
  Searched,
  products,
  orders,
}) => {
  return (
    <>
      {!orders || orders.length === 0 ? (
        // Render loading or no orders found message
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <span className="mt-4 text-gray-500 text-lg font-semibold">
              Loading...
            </span>
            <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
              No Orders Found
            </span>
          </div>
        </div>
      ) : (
        // Render the table with order details
        <div className="my-6 flex border bg-white shadow">
          <div className="mx-auto mt-2 h-fit w-full">
            <div className="flex flex-row justify-center items-center mx-2 my-2">
              <p className="flex font-sans font-semibold text-lg">
                Order Detail
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="mx-2 my-2 flex flex-col justify-center font-sans shadow">
                <thead>
                  <tr className="bg-[#F2F2F2] w-full flex justify-between">
                    <th className="px-4 whitespace-nowrap py-2">Product</th>
                    <th className="px-4 whitespace-nowrap py-2">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {orders
                    .filter(Searched(keyword))
                    .map((item, index) => {
                      // Find the corresponding product for the order item
                      const product = products.find(
                        (product) => product._id === item.productId
                      );

                      return (
                        <tr
                          className="bg-white cursor-default flex justify-between whitespace-nowrap hover:!bg-gray-100 border-b-2 font-normal font-sans"
                          key={item._id}
                        >
                          <td className="px-4 py-2">
                            <span>
                              <img
                                src={product?.feature_pic?.url}
                                className="h-30 w-30"
                                alt={product?.name}
                              />
                            </span>
                            <span>{product?.name}</span>
                            <span>x</span>
                            <span className="font-bold">
                              {item.order_quantity}
                            </span>
                          </td>
                          <td className="px-4 py-2">{item.price}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
