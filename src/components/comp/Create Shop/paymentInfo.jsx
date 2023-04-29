import React from "react";

const PaymentInfo = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        <label className="font-semibold ">Account Holder Name</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold ">Account Holder Email</label>

        <input
          type="email"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold ">Bank Name</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold ">Account Number</label>

        <input
          type="number"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        
      </div>
    </>
  );
};
export default PaymentInfo;
