import React from "react";
const DetailPack = ({ singleOrder, GrandTotal }) => {
  return (
    <>
      <div className="flex flex-col font-sans bg-white p-3  my-2  gap-2 sm:flex-row">
        <div className="flex w-full flex-col border-2 shadow-sm border-[#248F59] rounded-md   px-5 py-4 ltr:sm:border-r rtl:sm:border-l md:w-2/5">
          <span className="mb-2 block text-sm  font-bold ">
            Shipping Address
          </span>

          <span className="text-sm ">
            {singleOrder?.order_address}
          </span>
        </div>

        <div className="flex w-full border-2 shadow-sm border-[#248F59] rounded flex-col px-5 py-4 md:w-3/5">
          <div className="mb-3 flex w-full justify-between">
            <span className="text-sm ">
              Sub Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>
            <span className="text-sm ">{GrandTotal}/PKR</span>
          </div>

          <div className="mb-3 flex w-full  justify-between">
            <span className="text-sm ">
              Delivery Fee
              <span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>
            <span className="text-sm ">0.00</span>
          </div>
          <div className="mb-3 flex w-full  justify-between">
            <span className="text-sm ">
              TAX<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>
            <span className="text-sm ">0.00%</span>
          </div>

          <div className="flex w-full  justify-between">
            <span className="text-sm font-bold ">
              Total<span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>
            <span className="text-sm font-bold ">
              {Math.round(GrandTotal).toLocaleString("en-US", {
                style: "currency",
                currency: "PKR",
              })}
            </span>
          </div>
          <div className="flex w-full  justify-between">
            <span className="text-sm font-bold ">
              {singleOrder?.orderType === "Sales"
                ? "Amount After 10% Platform Commission"
                : "Total Amount"}
              <span className="ml-1 ltr:mr-auto rtl:ml-auto">:</span>
            </span>
            <span className="text-sm font-bold ">
              {Math.round(
                GrandTotal * (singleOrder?.orderType === "Sales" ? 0.9 : 1)
              ).toLocaleString("en-US", {
                style: "currency",
                currency: "PKR",
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPack;
