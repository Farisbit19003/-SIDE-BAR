import React from "react";
import AdminLayout from "../admin";
import { RefundTable } from "../../comp/refund/refundTable";

const Refunds = () => {
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-center bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Refunds
          </h1>
        </div>
      </div>
      <RefundTable />
    </AdminLayout>
  );
};

export default Refunds;
