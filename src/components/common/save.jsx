import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
const SaveButton = ({ handleSubmit, loading }) => {
  return (
    <>
      <button
        onClick={handleSubmit}
        className="h-12 w-24 my-3 hover:text-white  hover:scale-95 transition-transform flex flex-wrap font-sans text-lg justify-center items-center rounded  bg-[#248F59] uppercase text-[#f2f2f2]"
      >
        {loading ? <LoadingOutlined /> : "Save"}
      </button>
    </>
  );
};
export default SaveButton;
