import React from "react";
import Select from "react-select";

const options = [
  { value: "processing", label: "Order Processing" },
  { value: "delivered", label: "Delivered" },
  { value: "confirmed", label: "Order Confirmed" },
  { value: "cancelled", label: "Order Cancelled" },
];

const Dropdown = ({ status, setStatus }) => {
  const handleChange = (selectedOption) => {
    setStatus(selectedOption?.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "2px solid #f2f2f2",
      borderRadius: "0.375rem",
      minHeight: "2.5rem",
      "&:hover": {
        border: "2px solid #248F59",
      },
      boxShadow: "none",
    }),
  };

  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        styles={customStyles}
        isSearchable={false}
        placeholder="Select an order status"
      />
    </>
  );
};

export default Dropdown;
