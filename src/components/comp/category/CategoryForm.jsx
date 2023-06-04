import React from "react";
import Description from "../common/discription";
const CategoryForm = ({ values, setValues }) => {
  const { name, details } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
      <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
        <Description
          title={"Description"}
          details={
            "Add your category details and necessary information from here"
          }
        />
      </div>
      <div className="flex w-full border rounded border-[#f2f2f2] sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
        <div className="p-3 font-sans w-full flex flex-col">
          <label className="font-semibold ">Name</label>

          <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            className="h-12 mb-2  bg-white border  border-[#f2f2f2] rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <label className="font-semibold ">Detail</label>

          <textarea
            value={details}
            onChange={handleChange}
            name="details"
            className="mb-2  bg-white border border-[#f2f2f2] rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
