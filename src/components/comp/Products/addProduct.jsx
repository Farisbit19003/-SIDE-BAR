import React from "react";
import ShopLayout from "../../layout/Shop/index"
import Description from "../common/discription";
import Card from "../common/cards";
import FileInput from "../common/fileInput";
import GroupCategory from "./group&cat";
import ProductDescription from "./productDes";
import PricenQuantity from "./pricequantity";
import SaveButton from "../common/save";

const AddProduct = () => {
  return (
    <ShopLayout>
      {/* {errorMessage ? (
            <Alert
              message={t(`common:${errorMessage}`)}
              variant="error"
              closeable={true}
              className="mt-5"
              onClose={() => setErrorMessage(null)}
            />
          ) : null}
          <FormProvider {...methods}> */}
      <form>
        {/* Image */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Image"}
              details={"Upload your Product feature image here"}
            />
          </div>

          <Card>
            <FileInput keyPrefix="third" />
          </Card>
        </div>

        {/* Gallery */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Gallery"}
              details={"Upload your product image gallery here"}
            />
          </div>
          <Card>
            <FileInput keyPrefix="fourth" multiple="true" />
          </Card>
        </div>
        {/* GROUP AND CATEGORY */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Group & Categories"}
              details={"Select product group and categories from here"}
            />
          </div>
          <Card>
            <GroupCategory />
          </Card>
        </div>

        {/* DESCRIPTION */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Description"}
              details={"Add your product description and necessary information from here"}
            />
          </div>
          <Card>
            <ProductDescription />
          </Card>
        </div>

      
          {/* PRICE QUANTITY */}
        <div className="my-5 flex flex-wrap sm:my-8">
          <Description
            title={"Simple Product Information"}
            details={"Add your simple product description and necessary information from here"}
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
        <Card>
          <PricenQuantity/>
        </Card>
          </div>
          
      </form>
      <div className="float-right"> <SaveButton/></div>
    </ShopLayout>
  );
};

export default AddProduct;
