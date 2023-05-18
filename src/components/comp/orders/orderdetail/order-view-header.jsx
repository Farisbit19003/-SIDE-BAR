import React,{useState} from "react";

import Dropdown from "./status";
import InvoicePDF from "./invoice";

const OrderViewHeader = () => {
  
 

 
  // const isPaymentCOD = [PaymentGateway.COD, PaymentGateway.CASH].includes(order?.payment_gateway);
  // const isOrderPending = ![OrderStatus.CANCELLED, OrderStatus.FAILED].includes(order?.order_status);
  // const isPaymentActionPending = !isPaymentCOD && isOrderPending && order?.payment_status !== PaymentStatus.SUCCESS;
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
  return (
    <>
      <div className="px-11 py-5 bg-white">
        <div className="mb-2 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
          <div className="flex flex-col sm:!flex-row">
            <span className="mb-2 block lg:mb-0 font-sans lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
              order-status :
            </span>
            <span className="bg-[#248F59] flex items-center justify-center rounded-lg text-base font-normal ml-1 p-2 text-[#f2f2f2] font-sans h-fit">
              Spending
            </span>
            {/* <Badge
              text={(order?.order_status)}
              color={StatusColor(order?.order_status)}
            /> */}
          </div>
          <div className="flex flex-col sm:!flex-row">
            <span className="mb-2 block lg:mb-0 font-sans lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
              payment-status :
            </span>
            <span className="bg-[#248F59] rounded-lg flex items-center justify-center text-base font-normal ml-1 p-2 text-[#f2f2f2] font-sans h-fit">
              Cash
            </span>
            {/* <Badge
              text={t(order?.payment_status)}
              color={StatusColor(order?.payment_status)}
            /> */}
          </div>
        </div>

        <div className="mb-2 justify-center flex">
          <InvoicePDF />
        </div>
        <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-between ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              OrderId- 12121212
            </h1>
          </div>

          <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
            <Dropdown />
            <div className=" flex ">
              <button className="bg-[#248F59] w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#f2f2f2]">
                Change Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderViewHeader;
