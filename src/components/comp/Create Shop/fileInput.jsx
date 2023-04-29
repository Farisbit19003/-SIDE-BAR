import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const FileInput = () => {
  const [filename, setFilename] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.split("/")[1];

    if (fileType === "png" || fileType === "jpg") {
      setFilename(file.name);
    } else {
      alert("Please upload only PNG or JPG files.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    const fileType = file.type.split("/")[1];

    if (fileType === "png" || fileType === "jpg") {
      setFilename(file.name);
    } else {
      alert("Please upload only PNG or JPG files.");
    }
  };

  return (
    <>
      <label htmlFor="file-input">
        <div
          className="flex items-center  cursor-pointer md:w-full justify-center flex-col font-sans rounded-lg p-5"
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
        id="file-input"
        type="file"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <p className="text-gray-500 font-semibold">{filename}</p>
    </>
  );
};

export default FileInput;
