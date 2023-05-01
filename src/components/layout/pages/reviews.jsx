import React from "react";
import AdminLayout from "../admin";
import { ReviewTable } from "../../comp/reviews/reviewTable";

const Reviews = () => {
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-center bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Reviews
          </h1>
        </div>
      </div>
      <ReviewTable />
    </AdminLayout>
  );
};

export default Reviews;
