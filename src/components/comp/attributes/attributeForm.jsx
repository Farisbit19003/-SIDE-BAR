import React from "react";
import Description from "../common/discription";
import Name from "./attributeName";
import SaveButton from "../common/save";
import Value from "./attributeValue";
import ShopLayout from "../../layout/Shop";
const NewAttribute=()=>{
    return (
      <ShopLayout>
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <h1 className="text-[#248F59] font-serif text-3xl font-normal">
            Create New Attribute
          </h1>
        </div>
         {/* Name */}
         <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Attribute"}
              details={"Add your Attribute name and necessary information from here"}
            />
          </div>
          <div className="flex w-full sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
            <Name/>
          </div>
        </div>
        {/* Description */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Attribute Values"}
              details={"Add your attribute value and necessary information from here"}
            />
          </div>
          <div className="flex w-full sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
            <Value/>
          </div>
        </div>
        <div className="float-right"> <SaveButton/></div>
      </ShopLayout>
    );
}
export default NewAttribute;