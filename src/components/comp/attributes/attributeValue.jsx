import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';

const Value = () => {
    const [values, setValues] = useState([]);

  const addValue = () => {
    setValues([...values, { value: '', meta: '' }]);
  };
  const handleDelete = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };
  const handleChange = (index, field, value) => {
    const newValues = [...values];
    newValues[index][field] = value;
    setValues(newValues);
  };
  return (
    <>
      <div className="p-3 font-sans w-full flex justify-center  flex-col">
        <button
          className="h-fit w-fit p-3 my-3 flex flex-wrap justify-center items-center rounded-lg  bg-[#248F59] uppercase text-[#FFFFFF]"
          onClick={addValue}
        >
          Add Value
        </button>
        {values.map((item, index) => (
          <div className="flex flex-col md:flex-row gap-2" key={index}>
            <FaTrash className="flex items-center cursor-pointer align-middle" onClick={() => handleDelete(index)} size={20} color="red" />
            <div className="flex flex-col">
              <label className="font-semibold " htmlFor={`value-${index}`}>
                Value
              </label>
              <input
                type="text"
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
                id={`value-${index}`}
                value={item.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold " htmlFor={`meta-${index}`}>
                Meta:
              </label>
              <input
                type="text"
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
                id={`meta-${index}`}
                value={item.meta}
                onChange={(e) => handleChange(index, "meta", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Value;