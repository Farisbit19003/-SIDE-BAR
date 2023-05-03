import React from "react";
import AdminLayout from "../admin";
import Description from "../../comp/common/discription";
import Card from "../../comp/common/cards";
import FileInput from "../../comp/common/fileInput";
import SaveButton from "../../comp/common/save";
import Email from "../../comp/profile/email";
import BioInfo from "../../comp/profile/info";
import Password from "../../comp/profile/password";
const Profile =()=>{
    const avatarInfo = (
        <span>
          {"Upload your profile image from here."} <br />
          {"Dimension of the avatar should be "}
          <span className="font-bold">140 x 140px Pixel.</span>
        </span>
      );
    return(


<AdminLayout>
      <>
        <form>
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <h1 className="text-[#248F59] font-serif text-3xl font-normal">
             Profile
            </h1>
          </div>
          {/* EMAIL */}
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Email"}
                details={"Change Your  Email"}
              />
            </div>
       
            <Card>
              <Email/>
            </Card>   
          </div>
          
          {/* Avatar */}
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Avatar"}
                details={avatarInfo}
              />
            </div>
          
            <Card>
              <FileInput keyPrefix={"sixth"}/>
            </Card>   
          </div>
          {/* INFORMATION */}
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Information"}
                details={"Add your profile information from here"}
              />
            </div>
         
            <Card>
              <BioInfo/>
            </Card>   
          </div>
           {/* Password */}
           <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
              <Description
                title={"Password"}
                details={"Change your password from here"}
              />
            </div>
            {/*IMAGE  */}
            <Card>
              <Password/>
            </Card>   
          </div>
       
          <div className="flex justify-end">
            <SaveButton />
          </div>
        </form>
      </>
    </AdminLayout>
);}
export default Profile;