import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filters = ({
  sellerShops,
  products,
  startDate,
  endDate,
  onShopChange,
  onProductChange,
  onChange,
  handleReset,
}) => {
  return (
    <div className="p-3 md:p-6 mb-6 border rounded border-[#f2f2f2] flex flex-col items-center justify-between bg-white">
      <div className="flex justify-center items-center">
        <h1 className="font-serif font-normal text-3xl text-[#248F59]">
          Filter By
        </h1>
      </div>

      <div className="flex flex-col md:flex-row px-2 py-2 w-full gap-2 justify-between items-center">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <label className="font-semibold font-sans">Shops</label>
          <select
            type="text"
            onChange={onShopChange}
            name="store"
            id="shopSelect"
            className="w-full md:w-auto h-12 mb-2 bg-white border-gray-400 rounded-lg px-3 py-2 font-sans font-normal tracking-normal text-left focus:outline-none focus:border-none focus:ring-2 focus:ring-[#248f59]"
          >
            <option value="select">--Select--</option>
            {sellerShops?.map((shop) => (
              <option key={shop._id} value={shop._id}>
                {shop.Storename}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center gap-2 md:flex-row">
          <label className="font-semibold font-sans">Products</label>
          <select
            type="text"
            onChange={onProductChange}
            name="store"
            id="productSelect"
            className="w-full md:w-auto h-12 mb-2 text-md bg-white border-gray-400 rounded-lg px-3 py-2 font-sans font-normal tracking-normal text-left focus:outline-none focus:border-none focus:ring-2 focus:ring-[#248f59]"
          >
            <option value="select">--Select--</option>
            {products?.map((p) => (
              <option key={p._id} value={p._id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-2 py-2 w-full gap-2 justify-between items-center">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <label className="font-semibold whitespace-nowrap">Date Range</label>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            selectsRange
            className="w-full md:w-auto h-12 mb-2 text-md bg-white border-gray-400 rounded-lg px-3 py-2 font-sans font-normal tracking-normal text-left focus:outline-none focus:border-none focus:ring-2 focus:ring-[#248f59]"
          />
        </div>

        <button
          onClick={handleReset}
          className="bg-[#248F59] transition-transform hover:scale-95 hover:text-white w-full md:w-auto px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#f2f2f2]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
