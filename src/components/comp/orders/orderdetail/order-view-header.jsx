import { LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { SellerOrders } from "../../Create Shop/functions";
import { UpdateOrderStatus } from "../functions";
import InvoicePDF from "./invoice";
import Dropdown from "./status";
const OrderViewHeader = ({ singleOrder, GrandTotal }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleStatus = (e) => {
    e.preventDefault();
    if (!status) {
      toast.error("Please Add Status");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      UpdateOrderStatus(singleOrder?._id, status).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Status Updated");
          setStatus("");
          setLoading(false);
          SellerOrders(dispatch);
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="px-11 py-5 border border-[#f2f2f2] rounded bg-white">
        <div className="mb-2 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
          <div className="flex mb-2 p-2 items-center justify-center flex-row">
            <span className="mr-2 block lg:mb-0 font-sans lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
              Order-status :
            </span>
            <span className="bg-[#248F59] hover:scale-95 transition-transform uppercase rounded cursor-default hover:text-white flex items-center justify-center text-base font-normal ml-1 p-2 text-[#f2f2f2] font-sans h-fit">
              {singleOrder?.orderStatus}
            </span>
          </div>
          <div className="flex mb-2 p-2 items-center justify-center flex-row">
            <span className="mr-2 block lg:mb-0 font-sans lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
              Payment-Mode :
            </span>
            <span className="bg-[#248F59] hover:scale-95 transition-transform uppercase cursor-default rounded flex items-center justify-center text-base font-normal ml-1 p-2 text-[#f2f2f2] font-sans h-fit">
              {singleOrder?.paymentType}
            </span>
          </div>
        </div>

        <div className="mb-2 justify-center flex">
          <InvoicePDF singleOrder={singleOrder} GrandTotal={GrandTotal} />
        </div>

        <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded shadow-sm flex-col sm:flex-row items-center justify-between ">
          <div>
            <h1 className="font-serif font-normal lg:text-3xl sm:text-base text-[#248F59]">
              Order Id- #{singleOrder?._id}
            </h1>
          </div>

          {singleOrder?.orderType === "Sales" &&
            singleOrder.orderStatus !== "cancelled" && (
              <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
                <Dropdown status={status} setStatus={setStatus} />
                <div className=" flex ">
                  <button
                    onClick={handleStatus}
                    className="bg-[#248F59] hover:scale-95 transition-transform hover:text-white w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#f2f2f2]"
                  >
                    {loading ? <LoadingOutlined /> : "Change Status"}
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};
export default OrderViewHeader;
