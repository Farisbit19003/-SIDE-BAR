import React from "react";
import Description from "../common/discription";
import Card from "../common/cards";
import FileInput from "../common/fileInput";
import AdminLayout from "../../layout/admin";
import CategoryDes from "./catDescription";
import SaveButton from "../common/save";

const NewCategory=()=>{
    return (
      <AdminLayout>
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <h1 className="text-[#248F59] font-serif text-3xl font-normal">
            Create New Category
          </h1>
        </div>
        {/* Image */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Image"}
              details={"Upload your category image here"}
            />
          </div>
          
            <Card >
              <FileInput />
            </Card>
          
        </div>
         {/* Description */}
         <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Description"}
              details={"Add your category details and necessary information from here"}
            />
          </div>
          <div className="flex w-full sm:whitespace-nowrap bg-white sm:w-8/12 md:w-2/3">
            <CategoryDes/>
          </div>
        </div>
      
        <div className="float-right"> <SaveButton/></div>
       
      </AdminLayout>
    );
}
export default NewCategory;
