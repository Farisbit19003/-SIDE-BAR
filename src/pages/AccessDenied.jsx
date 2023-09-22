import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const AccessDenied = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex gap-4 flex-col items-center">
          <AiFillCloseCircle
            color="#248F59"
            className="animate-pulse"
            size={100}
          />
          <span className="text-red-500 font-serif text-5xl font-semibold">
            Access Denied
          </span>
          <span className="text-gray-500 font-sans text-lg font-semibold">
            You are not authenticated!
          </span>
        </div>
      </div>
    </>
  );
};

export default AccessDenied;
