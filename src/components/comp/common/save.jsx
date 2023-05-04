import React from "react";

const SaveButton = ({handleSubmit}) => {
  return (
    <>
      <button onClick={handleSubmit} className="h-12 w-24 my-3 flex flex-wrap justify-center items-center rounded-lg  bg-[#248F59] uppercase text-[#FFFFFF]">
        Save
      </button>
    </>
  );
};
export default SaveButton;
