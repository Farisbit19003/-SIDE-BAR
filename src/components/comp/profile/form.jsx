import React, { useState } from "react";
import Card from "../../comp/common/cards";
import Description from "../../comp/common/discription";
import FileInput from "../../comp/common/fileInput";
import SaveButton from "../../comp/common/save";
const Form = ({ state, avatarInfo }) => {
  const [email, setEmail] = useState(state && state.user && state.user.email);
  const [whatsapp, setWhatsapp] = useState(
    state && state.user && state.user.whatsapp && state.user.whatsapp
  );
  const [name, setName] = useState(state && state.user && state.user.name);
  const [password, setPassword] = useState("");
  const [Conpassword, setConPassword] = useState("");
  const handleSubmit = () => {};
  return (
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
            <Description title={"Email"} details={"Change Your  Email"} />
          </div>
          <Card>
            <div className="p-3 font-sans w-full flex flex-col">
              <label className="font-semibold ">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </Card>
        </div>

        {/* Avatar */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description title={"Avatar"} details={avatarInfo} />
          </div>

          <Card>
            <FileInput multiple={true} keyPrefix={"sixth"} />
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
            <div className="p-3 font-sans w-full flex flex-col">
              <label className="font-semibold ">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <label className="font-semibold ">Contact</label>
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                type="number"
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
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
          <Card>
            <div className="p-3 font-sans w-full flex flex-col">
              <label className="font-semibold ">New Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className=" my-2 h-10 bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <label className="font-semibold ">Confirm Password</label>
              <input
                value={Conpassword}
                onChange={(e) => setConPassword(e.target.value)}
                type="password"
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </Card>
        </div>
        <div className="flex justify-end">
          <SaveButton handleSubmit={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default Form;
