import React from "react";
import { BiSearch } from "react-icons/bi";

const SingleSearch = ({
  className,
  onSearch,
  variant = "outline",
  shadow = false,
  inputClassName,
  ...rest
}) => {
  return (
    <>
      <form
        noValidate
        role="search"
        className="relative  flex justify-end  p-3 w-full items-center"
      >
         <div className="relative ">
  <input
    type="text"
    id="search"
    placeholder="Type your query"
    aria-label="Search input"
    autoComplete="off"
    {...rest}
    className="px-8 py-2 w-[22rem] md:!w-full flex items-center border-gray-400 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-600"
  />
  <button
    type="submit"
    className="absolute top-0 right-0 px-3 whitespace-pre-wrap py-2 text-gray-400 outline-none focus:outline-none active:outline-none"
  >
    <BiSearch size={25} className="inline-block align-middle" />
  </button> 
</div>


      </form>
    </>
  );
};
export default SingleSearch;
