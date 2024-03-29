import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { TbCircleCheck } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  AllShops,
  ApproveStore,
  DisApproveStore,
} from "../Create Shop/functions";
import { FaSpinner } from "react-icons/fa";

export const ShopTable = ({ page, shops, Searched, keyword }) => {

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
  
  const dispatch = useDispatch();
  
  const handleApprove = (_id) => {
    try {
      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          ApproveStore(_id)
            .then((res) => {
              if (res.error) {
                toast.error(res.error);
              } else {
                swal("Approved SuccessFully and Notified to Seller", {
                  icon: "success",
                });
                AllShops(dispatch);
              }
            })
            .catch((error) => {
              toast.error(error);
            });
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  const handleDisApprove = (_id) => {
    try {
      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          DisApproveStore(_id)
            .then((res) => {
              if (res.error) {
                toast.error(res.error);
              } else {
                swal("Disapproved Successfully", {
                  icon: "success",
                });
                AllShops(dispatch);
              }
            })
            .catch((error) => {
              toast.error(error);
            });
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      {!shops || shops.length === 0 ? (
        <>
          <div className="flex  justify-center">
            <div className="flex flex-col items-center">
              <FaSpinner color="#248f59" className="text-6xl" />
              <span className="mt-4 text-[#248F59] font-serif text-3xl font-semibold">
                No Shops Found
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="my-6 p-3 flex border border-[#f2f2f2] bg-white rounded">
            <div className=" mx-auto mt-2 h-fit w-full">
              <div className="flex flex-row justify-center items-center mx-2 my-2">
                <p className="flex font-sans font-semibold text-lg ">Shops</p>
              </div>
              <div className="overflow-x-auto p-2 flex flex-col justify-center">
                <table className="mx-2 my-2 border rounded border-[#f2f2f2] font-sans whitespace-nowrap shadow-sm">
                  <thead>
                    <tr className="bg-[#F2F2F2]">
                      <th className="px-4 py-2">Sr#</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Slug</th>
                      <th className="px-4 py-2">Category</th>
                      <th className="px-4 py-2">Owner</th>
                      <th className="px-4 py-2">Whatspp</th>
                      <th className="px-4 py-2">Address</th>
                      <th className="px-4 py-2">City</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {shops &&
                      shops.filter(Searched(keyword)).map((item, index) => (
                        <tr
                          className="bg-white cursor-default hover:!bg-gray-100 border-b-2 font-sans"
                          key={index}
                        >
                          <td className="px-4 py-2">{row++}</td>
                          <td className="px-4 py-2">{item.Storename}</td>
                          <td className="cursor-pointer px-4 py-2">
                            {item.slug}
                          </td>
                          <td className="px-4 py-2">{item.category?.name}</td>
                          <td className="px-4 py-2">{item.user?.name}</td>

                          <td className="px-4 py-2">{item.Storewhatsapp}</td>
                          <td
                            className="px-4 py-2 text-ellipsis overflow-hidden max-w-xs"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {item.mapAddress}
                          </td>
                          <td className="px-4 py-2">{item.City}</td>
                          <td
                            className={`px-4 py-2 font-medium  ${
                              item.status === "Active"
                                ? "text-[#248F59]"
                                : "text-red-600"
                            }`}
                          >
                            {item.status}
                          </td>

                          <td className="px-4 cursor-pointer py-2 gap-3 items-center justify-center flex flex-row">
                            {page === "Admin" ? (
                              <>
                                {" "}
                                {item.status === "Active" ? (
                                  <TiDelete
                                    onClick={() => handleDisApprove(item._id)}
                                    size={25}
                                    color="red"
                                  />
                                ) : (
                                  <TbCircleCheck
                                    onClick={() => handleApprove(item._id)}
                                    color="green"
                                    size={25}
                                  />
                                )}
                              </>
                            ) : (
                              ""
                            )}
                            <Link to={`/shop-detail/${item.slug}`}>
                              <AiOutlineEye size={25} color="green" />
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
