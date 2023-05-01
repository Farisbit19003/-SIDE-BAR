import React from "react";
import AdminLayout from "../admin";
import Description from "../../comp/common/discription";
import Card from "../../comp/common/cards";
import BasicInfo from "../../comp/Create Shop/basicInfo";
import PaymentInfo from "../../comp/Create Shop/paymentInfo";
import ShopInfo from "../../comp/Create Shop/shopInfo";
import SocialInfo from "../../comp/Create Shop/socialInfo";
import SaveButton from "../../comp/common/save";

const coverImageInformation = (
  <span>
    {"Upload your shop cover image from here."} <br />
    {"Dimension of the cover image should be"} &nbsp;
    <span className="font-bold">1170 x 435</span>
  </span>
);

const CreateShops = () => {
  return (
    <AdminLayout>
      <>
        <form>
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <h1 className="text-[#248F59] font-serif text-3xl font-normal">
              Create Shops
            </h1>
          </div>
          {/* LOGO */}
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Logo"}
                details={"Upload your shop logo from here"}
              />
            </div>
            <div className="flex w-full sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
              <Card />
            </div>
          </div>
          {/* COVER IMAGE */}
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Cover Image"}
                details={coverImageInformation}
              />
            </div>
            <div className="flex w-full sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
              <Card />
            </div>
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
              <BasicInfo />
            </div>
          </div>
          {/* PAYMENT INFO */}
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Payment Info"}
                details={"Add your payment information from here"}
              />
            </div>
            <div className="flex w-full bg-white sm:w-8/12 md:w-2/3">
              <PaymentInfo />
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
              <ShopInfo />
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
              <SocialInfo />
            </div>
          </div>
          <div className="flex justify-end">
            <SaveButton />
          </div>
        </form>
      </>
    </AdminLayout>
  );
};

export default CreateShops;
