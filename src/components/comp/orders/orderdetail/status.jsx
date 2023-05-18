import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'pending', label: 'Order Pending' },
  { value: 'processing', label: 'Order Processing' },
  { value: 'local', label: 'Order At Local Facility' },
  { value: 'delivery', label: 'Order Out For Delivery' },
  { value: 'completed', label: 'Order Completed' },
  { value: 'canceled', label: 'Order Canceled' }
];

const Dropdown = () => {
  const handleChange = (selectedOption) => {
    console.log(`Selected option: ${selectedOption.label}`);
    // Do something with the selected option
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '2px solid #f2f2f2',
      borderRadius: '0.375rem',
      minHeight: '2.5rem',
      '&:hover': {
        border: '2px solid #248F59'
      },
      boxShadow: 'none'
    })
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      styles={customStyles}
      isSearchable={false}
      placeholder="Select an order status"
    />
  );
};

export default Dropdown;
