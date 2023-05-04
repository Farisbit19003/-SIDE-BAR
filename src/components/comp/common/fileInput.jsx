import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const FileInput = ({ keyPrefix, multiple }) => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    const validFiles = newFiles.filter((file) => {
      const fileType = file.type.split("/")[1];
      return fileType === "png" || fileType === "jpg";
    });
    if (multiple) {
      setFiles([...files, ...validFiles]);
    } else {
      setFiles([...validFiles.slice(0, 1)]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newFiles = Array.from(event.dataTransfer.files);
    const validFiles = newFiles.filter((file) => {
      const fileType = file.type.split("/")[1];
      return fileType === "png" || fileType === "jpg";
    });
    if (multiple) {
      setFiles([...files, ...validFiles]);
    } else {
      setFiles([...validFiles.slice(0, 1)]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <>
      <div className="flex flex-col cursor-pointer w-full border-green-500 border-2 border-dashed">
        <label htmlFor={`${keyPrefix}-file-input`}>
          <div
            className="flex items-center cursor-pointer md:w-full justify-center flex-col font-sans rounded-lg p-5"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <AiOutlineCloudUpload size={40} />
            <div className="text-center">
              <p>
                <span className="text-[#248F59]">Upload an image</span> or drag
                and drop
              </p>
              <p>PNG, JPG</p>
            </div>
          </div>
        </label>
        <input
          id={`${keyPrefix}-file-input`}
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          {...(multiple ? { multiple: "multiple" } : {})}
        />
        <div className="flex flex-row justify-start ">
          {files.map((file, index) => (
            <div key={index} className="flex flex-row m-2  my-2">
              <div className="flex-1  text-gray-500 font-semibold">
                {file.name}
                <span><img src={file.path} height={50} width={50} /></span>
              </div>
              <TiDeleteOutline
                color="red"
                className="cursor-pointer"
                size={20}
                onClick={() => handleRemoveFile(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FileInput;
