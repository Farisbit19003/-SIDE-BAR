import React from "react";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const SocialInfo = () => {
  return (
    <>
      <div className="p-3 font-sans w-full flex flex-col">
        <label className="font-semibold ">Set Location From Map</label>

        <input
          type="text"
          className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <label className="font-semibold ">Contact Number</label>

        <input
          type="number"
          className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <label className="font-semibold ">Website</label>

        <input
          type="url"
          className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <label className="font-semibold flex">Instagram <AiOutlineInstagram size={25} className="align-middle" color="orange"  /></label>

        <input
          type="url"
          className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold flex">Facebook <AiFillFacebook size={25} className="align-middle" color="blue" /></label>

        <input
          type="url"
          className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <label className="font-semibold flex ">
          Twitter{" "}
          <AiOutlineTwitter size={25} className="align-middle" color="blue" />
        </label>

        <input
          type="url"
          className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
    </>
  );
};
export default SocialInfo;
