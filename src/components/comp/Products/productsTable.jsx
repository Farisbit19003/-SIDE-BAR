import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { TiTrash } from "react-icons/ti";
import { Link } from "react-router-dom";
export const ProductsTable = ({
  handleDelete,
  keyword,
  Searched,
  products,
  ok,
  page,
}) => {
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
  const TotalStock = products?.reduce((acc, p) => {
    const stock = p.quantity;
    return acc + stock;
  }, 0);
  const TotalStold = products?.reduce((acc, p) => {
    const stock = p.totalSold;
    return acc + stock;
  }, 0);
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
              No Product Found
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="my-6 p-3 flex border bg-white rounded border-[#f2f2f2]">
            <div className=" mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-between items-center mx-2 my-2">
                <p className="flex font-serif text-[#248f59] text-lg ">
                  Total Stock :{TotalStock}
                </p>
                <div>
                  {page === "Stock" ? (
                    <p className="flex font-sans font-semibold text-lg">
                      Stock Report
                    </p>
                  ) : (
                    <p className="flex font-sans font-semibold text-lg">
                      Product
                    </p>
                  )}
                </div>
                <p className="flex font-serif text-[#248f59] text-lg ">
                  Total Sold:{TotalStold}
                </p>
              </div>
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 font-sans whitespace-nowrap shadow">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 py-2">Sr#</th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Name</th>
                      {page === "Stock" ? (
                        ""
                      ) : (
                        <>
                          {" "}
                          <th className="px-4 py-2">Discription</th>
                          <th className="px-4 py-2">Catgeory</th>
                        </>
                      )}
                      <th className="px-4 py-2">Store</th>
                      <th className="px-4 py-2">Sales Price</th>
                      <th className="px-4 py-2">Purchase Price</th>
                      <th className="px-4 py-2">
                        {page === "Stock" ? "Stock" : "Quantity"}
                      </th>
                      <th className="px-4 py-2">Sold</th>
                      {page == "Stock" ? (
                        ""
                      ) : (
                        <>
                          {" "}
                          <th className="px-4 py-2">Unit</th>
                          <th className="px-4 py-2">Actions</th>
                        </>
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    {products &&
                      products.filter(Searched(keyword)).map((item, index) => (
                        <tr
                          className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                          key={item._id}
                        >
                          <td className="px-4 py-2">{row++}</td>
                          <td className="px-4 py-2">
                            <img
                              src={item?.feature_pic?.url}
                              className="h-30 w-30"
                            />
                          </td>
                          <td className="px-4 py-2">{item.name}</td>
                          {page == "Stock" ? (
                            ""
                          ) : (
                            <>
                              {" "}
                              <td
                                className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                              >
                                {item.discription}
                              </td>
                              <td className="px-4 py-2">
                                {item.category.name}
                              </td>
                            </>
                          )}
                          <td className="px-4 py-2">{item.store.Storename}</td>
                          <td className="px-4 py-2">{item.salePrice}</td>
                          <td className="px-4 py-2">{item.purchasePrice}</td>
                          <td className="px-4 py-2">{item.quantity}</td>
                          <td className="px-4 py-2">{item.totalSold}</td>
                          {page == "Stock" ? (
                            ""
                          ) : (
                            <>
                              {" "}
                              <td className="px-4 py-2">{item?.unit}</td>
                              <td className="px-4 py-2 cursor-pointer flex items-center justify-center mx-auto my-auto mt-4 gap-2">
                                {ok.includes(item) ? (
                                  ""
                                ) : (
                                  <TiTrash
                                    onClick={() => handleDelete(item)}
                                    size={25}
                                    color="red"
                                  />
                                )}
                                <Link to={`/products/update/${item.slug}`}>
                                  <TfiWrite size={22} />
                                </Link>
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    <tr className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans">
                      {page === "Stock" ? (
                        <>
                          <td className="px-4 py-2"></td>
                          <td className="px-4 py-2"></td>
                          <td className="px-4 py-2"></td>
                          <td className="px-4 py-2"></td>
                          <td className="px-4 py-2"></td>
                          <td className="px-4 py-2"></td>
                          <td className="px-4 py-2 font-bold">
                            Total Stock:{TotalStock}
                          </td>
                          <td className="px-4 py-2 font-bold">
                            Total Sold:{TotalStold}
                          </td>
                        </>
                      ) : (
                        ""
                      )}
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
