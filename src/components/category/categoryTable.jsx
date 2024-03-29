import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const CatTable = ({ category, handleDelete, keyword, Searched, ok }) => {
  
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
  
  return (
    <>
      {!category || category.length === 0 ? (
        <>
          <div className="flex  justify-center">
            <div className="flex flex-col items-center">
              <span className="mt-4 text-gray-500 font-sans text-lg font-semibold">
                Loading...
              </span>
              <span className="mt-4 text-[#248F59] font-serif text-3xl font-normal">
                No Category Found
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-6 flex border rounded border-[#f2f2f2] w-full bg-white ">
            <div className=" mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-center items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg ">
                  Categories
                </p>
              </div>
              {/* CATEGORY TABLE */}
              <div className="overflow-x-auto flex flex-col justify-center">
                <table className="mx-2 my-2 border rounded border-[#f2f2f2] font-sans shadow-sm">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 py-2">Sr#</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Slug</th>
                      <th className="px-4 py-2">Details</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {category &&
                      category.filter(Searched(keyword)).map((item, index) => (
                        <tr
                          className="bg-white cursor-default whitespace-nowrap hover:!bg-gray-100 border-b-2 font-sans"
                          key={index}
                        >
                          <td className="px-4 py-2">{row++}</td>
                          <td className="px-4 py-2">{item.name}</td>
                          <td className="px-4 py-2">{item.slug}</td>
                          <td
                            className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {item.details}
                          </td>
                          <td className="px-4 py-2 b gap-2 cursor-pointer items-center justify-center flex flex-row">
                            {ok.includes(item) ? (
                              ""
                            ) : (
                              <BiTrash
                                onClick={() => handleDelete(item.slug)}
                                size={25}
                                color="red"
                              />
                            )}
                            <Link to={`/categories/update/${item.slug}`}>
                              <BiEdit size={25} />
                            </Link>
                          </td>
                        </tr>
                      ))}
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
export default CatTable;
