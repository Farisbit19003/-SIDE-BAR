import React from "react";
import { BsFilterSquare } from "react-icons/bs";

const FilterButton = ({ onClick }) => {
  return (
    <>
      <div className="flex items-center mb-2 p-2 w-fit bg-white border rounded border-[#f2f2f2]">
        <button
          onClick={onClick}
          className="transition-transform hover:scale-95 "
        >
          <BsFilterSquare color="#248f59" size={25} />
        </button>
      </div>
    </>
  );
};

export default FilterButton;
