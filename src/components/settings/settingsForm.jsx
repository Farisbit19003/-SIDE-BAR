import React, { useState } from "react";
import Description from "../common/discription";
import Card from "../common/cards";
import FileInput from "../common/fileInput";
import SaveButton from "../common/save";

const SettingsForm = ({
  values,
  setValues,
  setImage,
  image,
  setloading,
  loading,
  handleSubmit,
}) => {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const logoInformation = (
    <span>
      {"Upload your site logo from here"} <br />
      {"Dimension of the logo should be"} <br />
      <span className="font-bold">128 x 40 Pixel</span>
    </span>
  );
  return (
    <>
      <form>
        {/* Logo */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description title={"Logo"} details={logoInformation} />
          </div>

          <Card>
            <FileInput
              setImage={setImage}
              image={image}
              loading={loading}
              setloading={setloading}
              keyPrefix="fifth"
            />
          </Card>
        </div>

        {/* Information */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Information"}
              details={"Change your site information from here"}
            />
          </div>

          <Card>
            <div className="p-3 font-sans w-full flex flex-col">
              <label className="font-semibold ">Site Title</label>

              <input
                value={values.siteTitle}
                onChange={handleChange}
                type="text"
                name="siteTitle"
                className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              />

              <label className="font-semibold ">Site Subtitle</label>

              <input
                value={values.siteSubtitle}
                onChange={handleChange}
                name="siteSubtitle"
                type="text"
                className="mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              />
            </div>
          </Card>
        </div>

        {/* Payment */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Payment"}
              details={"Configure Payment Option"}
            />
          </div>

          <Card>
            <div className="p-3 font-sans w-full flex flex-col">
              <label className="font-semibold ">Stripe Account ID</label>

              <input
                value={values.stripe_account_id}
                onChange={handleChange}
                name="stripe_account_id"
                type="text"
                className="h-12 mb-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              />
            </div>
          </Card>
        </div>

        <div className="flex items-center justify-end">
          <SaveButton loading={loading} handleSubmit={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
