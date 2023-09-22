import React from "react";
const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="mt-4 text-red-600 text-6xl font-serif font-semibold">
            404 Error
          </span>
          <span className="mt-4 text-gray-500 font-sans text-center text-xl font-medium">
            The page you are looking for does not exist...!!!
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
