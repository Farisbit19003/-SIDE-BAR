import React from "react";

const SitePayments = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        
        <label className="font-semibold ">Stripe Account ID</label>

        <input
          type="number"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
    </>
  );
};
export default SitePayments;
