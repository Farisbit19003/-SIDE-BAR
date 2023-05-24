import React, { useState, useEffect } from "react";
import Card from "../../comp/common/cards";
import Description from "../../comp/common/discription";
import FileInput from "../../comp/common/fileInput";
import SaveButton from "../../comp/common/save";
import { toast } from "react-toastify";
import { BecomeSeller, UpdateProfile } from "../../auth/auth";
import { LoadingOutlined } from "@ant-design/icons";
const Form = ({dispatch,loggedIn,avatarInfo }) => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Conpassword, setConPassword] = useState("");
  const [stripe_account_id, setStripe_account_id] = useState("");
  const [image, setImage] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      setEmail(loggedIn.user.email);
      setName(loggedIn.user.name);
      setWhatsapp(loggedIn.user.whatsapp);
      setStripe_account_id(loggedIn.user?.stripe_account_id);
      loggedIn.user.image&&setImage([loggedIn.user.image]);
    }
  }, [loggedIn && loggedIn.token]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!name) {
        return toast.error("Please Enter Your Name");
      }
      if (password&&password.length < 6) {
        return toast.error("Please Enter Password atleast 6 characters");
      }
      if (password !== Conpassword) {
        return toast.error("Password Does't match");
      }
      setloading(true);
      UpdateProfile(name, email, password, whatsapp, image).then((res) => {
        if (res.error) {
          setloading(false);
          toast.error(res.error);
        } else {
          //update in local Storage
          let auth = JSON.parse(window.localStorage.getItem("auth"));
          auth.user = res.user;
          window.localStorage.setItem("auth", JSON.stringify(auth));
          //update in state
          dispatch({
            type:"LOGGED_IN_USER",
            payload:{
              ...loggedIn,
              user:auth.user,
            }
          })
          setloading(false);
          toast.success("User Updated");
        }
      });
    } catch (error) {
      toast.error(error);
      setloading(false);
    }
  };

  const handleStripe=(e)=>{
    e.preventDefault();
    try {
      setloading(true);
      BecomeSeller().then((res) => {
        if (res.error) {
          setloading(false);
          toast.error(res.error);
        } else {
          window.location.href=res.url;
          setloading(false);
        }
      });
    } catch (error) {
      toast.error(error);
      setloading(false);
    } 
  }
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
                disabled
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
            <FileInput loading={loading}
             setImage={setImage} setloading={setloading} image={image} keyPrefix={"sixth"} />
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
               {stripe_account_id?(<> 
              <label className="font-semibold ">Stripe Payment ID</label>
              <input
                value={stripe_account_id}
                onChange={(e) => setStripe_account_id(e.target.value)}
                className="h-10 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              />
          
            </>
            ):
            (<> 
              <label className="font-semibold ">Stripe Account Setup</label>
              <button
              onClick={handleStripe}
              className="bg-[#248F59] mt-2 text-white py-3 px-3 rounded">
                 
                 {loading?<LoadingOutlined/>: "  Complete Stripe OnBoarding"}
                 
                </button>
            </>
            )
            }
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
          <SaveButton handleSubmit={handleSubmit} loading={loading} />
        </div>
      </form>
    </>
  );
};

export default Form;
