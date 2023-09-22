import React from "react";

const Search = ({ setKeyword }) => {
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <>
      <div className="relative w-full max-w-md">
        <input
          onChange={handleSearchInputChange}
          type="search"
          placeholder="Type queries"
          className="w-full sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#248f59]"
        />
      </div>
    </>
  );
};

export default Search;
