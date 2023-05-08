import {useEffect, useState} from "react";
import { AiOutlineCloudUpload} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import {LoadingOutlined}  from "@ant-design/icons"
import axios from "axios";
import { useSelector } from "react-redux";
const FileInput = ({ keyPrefix, multiple,image ,setImage,setloading,loading,values,setValues,props}) => {
  const [files, setFiles] = useState([]);
  const {loggedIn}=useSelector((state)=>({...state}))
  const formData = new FormData();
  const uploadImageToCloud=async(event)=>{
      setloading(true);
      const { data } = await axios.post("/image/upload", formData);
      setImage([{
        url:data.url,
        public_id:data.public_id
      }]);
      setloading(false);
      event.target.value = null;
  }
  
  const handleFileUpload =(event) => {
    const newFiles = Array.from(event.target.files);
    let file = event.target.files[0];
    formData.append("image",file);
    if (multiple) {
      setFiles([...files, ...newFiles]);
    } else {
      setFiles([...newFiles.slice(0, 1)]);
      uploadImageToCloud(event);
    }
  };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const newFiles = Array.from(event.dataTransfer.files);
  //   let file = event.target.files[0];
  //   formData.append("image",file);
  //   if (multiple) {
  //     setFiles([...files, ...newFiles]);
  //   } else {
  //     setFiles([...newFiles.slice(0, 1)]);
  //     uploadImageToCloud(event);
  //   }
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  // };
  const handleRemoveFile = (index) => {
    const newFiles = [...image];
    newFiles.splice(index, 1);
    setImage(newFiles);
  };

  return (
    <>
      <div className="flex flex-col cursor-pointer w-full border-green-500 border-2 border-dashed">
        <label htmlFor={`${keyPrefix}-file-input`}>
          <div
            className="flex items-center cursor-pointer md:w-full justify-center flex-col font-sans rounded-lg p-5"
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
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
          {loading?<LoadingOutlined/>:image&&image.map((file, index) => (
            <div key={index} className="flex flex-row m-2  my-2">
              <div className="flex-1  text-gray-500 font-semibold">
                <span><img src={file.url}  height={100} width={100} /></span>
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
