import React from "react";
import {LoadingOutlined} from "@ant-design/icons"
const SaveButton = ({handleSubmit,loading}) => {
  return (
    <>
      <button onClick={handleSubmit} className="h-12 w-24 my-3 flex flex-wrap justify-center items-center rounded-lg  bg-[#248F59] uppercase text-[#FFFFFF]">
       {loading?<LoadingOutlined/>:"Save"}
      </button>
    </>
  );
};
export default SaveButton;
