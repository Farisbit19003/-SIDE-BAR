import React from "react"
import Description from "../common/discription";
import Card from "../common/cards";
import FileInput from "../common/fileInput";
import SiteInfo from "./siteInfo";
import SiteSocials from "./siteSocials";
import SitePayments from "./sitePayments";
import SiteTime from "./siteTime";
import SaveButton from "../common/save";

const SettingsForm = () => {
    const logoInformation = (
        <span>
          {"Upload your site logo from here"} <br />
          {"Dimension of the logo should be"}
          <span className="font-bold">128x40 Pixel</span>
        </span>
      );
    return (
        <>
            <form>
        {/* Logo */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Logo"}
              details={logoInformation}
            />
          </div>

          <Card>
            <FileInput keyPrefix="fifth" />
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
            <SiteInfo />
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
            <SitePayments />
          </Card>
        </div>

        {/* Delivery Schedule */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Delivery Schedule"}
              details={"Add your delivery schedule time with proper description from here"}
            />
          </div>

          <Card>
            <SiteTime />
          </Card>
        </div>

        {/* Shop Settings */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Shop Settings"}
              details={"Add your shop settings information from here"}
            />
          </div>

          <Card>
            <SiteSocials />
          </Card>
        </div>

        <div className="float-right">
        <SaveButton/>
        </div>
      </form>
        </>
    )
}

export default SettingsForm