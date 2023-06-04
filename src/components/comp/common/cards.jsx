import React from "react";

const Card = ({ children }) => {
  return (
    <>
      <div className="flex w- h-fit border rounded border-[#f2f2f2] justify-center items-center w-full p-4 sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
        {children}
      </div>
    </>
  );
};

export default Card;
