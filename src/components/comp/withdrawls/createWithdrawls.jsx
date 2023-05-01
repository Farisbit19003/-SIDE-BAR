 import React from "react";
import AdminLayout from "../../layout/admin";
import Description from "../common/discription";
import WithdrawlsDes from "./withdrawDes";
import SaveButton from "../common/save";

 const CreateWithdrawls=()=>{
    return (
        <AdminLayout>
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <h1 className="text-[#248F59] font-serif text-3xl font-normal">
              Request New Withdrawls
            </h1>
          </div>
          
           {/* Description */}
           <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              < Description
                title={"Description"}
                details={"Add Withdrawal request from here"}
              />
            </div>
            <div className="flex w-full sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
            <WithdrawlsDes/>
            </div>
          </div>
          <div className="float-right"> <SaveButton/></div>
        </AdminLayout>
      );
 } 
 export default CreateWithdrawls;