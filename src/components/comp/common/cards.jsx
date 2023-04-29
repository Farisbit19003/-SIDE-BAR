import React from "react";
import FileInput from "../Create Shop/fileInput";

const Card = () => {
  return (
    <>
      <div className="bg-white w-full h-fit p-5 ">
        <div className="flex border-2 border-green-500 border-dashed justify-center items-center">
          <FileInput />
        </div>
      </div>
    </>
  );
};

export default Card;
