import React, { useEffect, useState } from "react";
import Description from "../common/discription";
import FileInput from "../common/fileInput";
import Card from "../common/cards";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import SearchField from "./SearchField";
const coverImageInformation = (
  <span>
    {"Upload your shop cover image from here."} <br />
    {"Dimension of the cover image should be"} <br />
    <span className="font-bold">1170 x 435</span>
  </span>
);
const ShopForm = ({ categories, values, setValues, setLoading, loading,setWhatsappError,whatsappError }) => {
  const {
    Storename,
    description,
    Storewhatsapp,
    Streetaddress,
    Country,
    City,
    category,
    facebook,
    insta,
    main_pic,
    cover_pic,
    mapAddress,
  } = values;
  const [mainpic, setMainpic] = useState([]);
  const [coverpic, setCoverpic] = useState([]);
  useEffect(() => {
    setValues({ ...values, main_pic: mainpic[0] });
  }, [mainpic]);
  useEffect(() => {
    setValues({ ...values, cover_pic: coverpic[0] });
  }, [coverpic]);
  useEffect(() => {
    cover_pic && setCoverpic([cover_pic]);
    main_pic && setMainpic([main_pic]);
  }, [main_pic || cover_pic]);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleWhatsappChange = (e) => {
    const input = e.target.value;
    // Remove any non-digit characters
    const digitsOnly = input.replace(/\D/g, "");
    // Limit the input to a maximum of 11 digits
    const limitedInput = digitsOnly.slice(0, 11);
    setValues({ ...values, [e.target.name]: limitedInput });

    // Validate Pakistan phone number
    const regex = /^(\+92|0)?[0-9]{10}$/;
    if (!regex.test(limitedInput)) {
      setWhatsappError("Please enter a valid Pakistan phone number.");
    } else {
      setWhatsappError("");
    }
  };
  return (
    <>
      {/* LOGO */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Logo"}
            details={"Upload your shop logo from here"}
          />
        </div>
        {/*IMAGE  */}
        <Card>
          <FileInput
            image={mainpic}
            setImage={setMainpic}
            loading={loading}
            setloading={setLoading}
            values={values}
            setValues={setValues}
            props="main_pic"
            keyPrefix="first"
          />
        </Card>
      </div>
      {/* COVER IMAGE */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description title={"Cover Image"} details={coverImageInformation} />
        </div>
        <Card>
          <FileInput
            image={coverpic}
            setImage={setCoverpic}
            loading={loading}
            setloading={setLoading}
            values={values}
            setValues={setValues}
            props="cover_pic"
            keyPrefix="second"
          />
        </Card>
      </div>
      {/* Basic Info */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Basic Info"}
            details={"Add some basic info about your shop from here"}
          />
        </div>
        <div className="flex w-full bg-white sm:w-8/12 md:w-2/3">
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold ">Name</label>

            <input
              value={Storename}
              name="Storename"
              onChange={onChange}
              type="text"
              className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />

            <label className="font-semibold ">Description</label>

            <textarea
              value={description}
              name="description"
              onChange={onChange}
              className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
          </div>
        </div>
      </div>
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Store Category"}
            details={"Select Your Store Category"}
          />
        </div>
        <div className="flex w-full bg-white sm:w-8/12 md:w-2/3">
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold flex">Category</label>
            <select
              value={category}
              onChange={onChange}
              name="category"
              className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            >
              <option value=""></option>
              {categories &&
                categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {/* SHOP INFO */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Shop Address"}
            details={"Add your physical shop address from here"}
          />
        </div>
        <div className="flex w-full bg-white sm:w-8/12 md:w-2/3">
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold ">Country</label>

            <input
              value={Country}
              name="Country"
              onChange={onChange}
              type="text"
              className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
            <label className="font-semibold ">City</label>

            <input
              value={City}
              name="City"
              onChange={onChange}
              type="text"
              className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />

            <label className="font-semibold ">Street Address</label>

            <textarea
              value={Streetaddress}
              name="Streetaddress"
              onChange={onChange}
              className=" mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
          </div>
        </div>
      </div>
      {/* SOCIAL INFO */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Shop Settings"}
            details={"Add your shop settings information from here"}
          />
        </div>
        <div className="flex w-full bg-white sm:w-8/12 md:w-2/3">
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold ">Your Location</label>

            <SearchField
              values={values}
              setValues={setValues}
              mapAddress={mapAddress}
            />

            <label className="font-semibold ">Contact Number</label>

            <input
              value={Storewhatsapp}
              name="Storewhatsapp"
              onChange={handleWhatsappChange}
              type="number"
              className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
              {whatsappError && <p className="text-red-500 font-sans">{whatsappError}</p>}

            <label className="font-semibold flex">
              Instagram{" "}
              <AiOutlineInstagram
                size={25}
                className="align-middle"
                color="orange"
              />
            </label>

            <input
              value={insta}
              name="insta"
              onChange={onChange}
              type="url"
              className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
            <label className="font-semibold flex">
              Facebook{" "}
              <AiFillFacebook size={25} className="align-middle" color="blue" />
            </label>

            <input
              value={facebook}
              name="facebook"
              onChange={onChange}
              type="url"
              className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopForm;
