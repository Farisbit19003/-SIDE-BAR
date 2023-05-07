import React from "react";
import ShopLayout from "../../layout/Shop/index";
import SaveButton from "../common/save";
import ShopForm from "./ShopForm";


const UpdateShop = () => {
  return (
    <ShopLayout>
      <>
        <form>
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <h1 className="text-[#248F59] font-serif text-3xl font-normal">
              Create Shops
            </h1>
          </div>
          <ShopForm />
          <div className="flex justify-end">
            <SaveButton />
          </div>
        </form>
      </>
    </ShopLayout>
  );
};

export default UpdateShop;
