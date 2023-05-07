import {useEffect,useState} from "react";
import {useNavigate } from "react-router-dom";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { useSelector } from "react-redux";
import {LoadingOutlined} from "@ant-design/icons"
import { ForgotEmail,Reset} from "./auth";
import { toast } from "react-toastify";
const ForgotPassword=()=>{
  const [email, setEmail] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setloading] = useState(false);
  const [ok, setOK] = useState(false);
  const navigate = useNavigate();
  const {loggedIn}=useSelector((state)=>({...state}));
  const sendResetEmail=(e)=>{
  e.preventDefault();
  try {
    if (!email) {
      return toast.error("Please Add Email");
    }
    setloading(true);
   ForgotEmail( email).then((res) => {
      if (res.error) {
        setloading(false);
        toast.error(res.error);
      } else {
        setloading(false);
        setOK(true);
        toast.success("Email Send SuccessFully..Please Check your Email");
      }
    });
  } catch (err) {
    toast.error(err.response.data);
    setloading(false);
  }
};

const ForgotNow=(e)=>{
  e.preventDefault();
  try {
    if (!email||!Newpassword||!secret) {
      return toast.error("Please Fill all Fields");
    }
    if (Newpassword.length<6) {
      return toast.error("Please Enter Strong Password");
    }
   setloading(true);
   Reset( email,Newpassword,secret).then((res) => {
      if (res.error) {
        setloading(false);
        toast.error(res.error);
      } else {
        setloading(false);
        toast.success("Forgot Password Succesfully");
        navigate("/login");
      }
    });
  } catch (err) {
    toast.error(err.response.data);
    setloading(false);
  }
}

  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000); // 5 seconds
    }
  }, [loggedIn && loggedIn.token]);
  return loggedIn && loggedIn.token? (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Redirecting to Homepage...
        </span>
      </div>
    </div>
  ) :(
        <>
       <div className="bg-gray-200 flex flex-wrap h-screen  lg:p-4 mx-auto justify-center">
         <div className="bg-white flex flex-col p-4   md:w-fit w-full mx-auto border-2 justify-center shadow">
           <img src="../../src/assets/Logo.svg" className="h-10" alt="" />
           <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
             Forgot Password
           </h1>
           {/* EMAIL */}
           <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Email</label>
           <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
             type="email"
             className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
        {ok?<>
           <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">New Password</label>
           <input
           value={Newpassword}
           onChange={(e)=>setNewPassword(e.target.value)}
             type="password"
             className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
           <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">Code</label>
           <input
           value={secret}
           onChange={(e)=>setSecret(e.target.value)}
             type="password"
             className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
           />
           </>:""}
          {/* SUBMIT */}
         {!ok? <button onClick={sendResetEmail} className="h-12 my-2 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]">
          {loading? <LoadingOutlined/>:"Submit Email"}
          </button>:<button onClick={ForgotNow} className="h-12 my-2 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]">
          {loading? <LoadingOutlined/>:"Forgot Password"}
          </button>}

           
         </div>
       </div>
    
   </>
    );
}

export default ForgotPassword;