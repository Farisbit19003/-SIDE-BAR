import React, { useEffect} from "react";
const NotFound = () => {

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="mt-4 text-[#248F59] text-lg font-serif font-normal">
            404 Error
          </span>
          <span className="mt-4 text-gray-500 font-sans text-lg font-semibold">
            Its Look like the Page Doesn't Exist
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
