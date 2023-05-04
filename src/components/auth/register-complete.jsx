import { useState,useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context";
import { registerComplete } from "./auth";
import { LoadingOutlined } from "@ant-design/icons";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const RegisterComplete = () => {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setloading] = useState(false);
  //state
  const [state] = useContext(UserContext);
  const navigate = useNavigate();
  //useEffect for PreFilled Email
  useEffect(()=>{
  setEmail(window.localStorage.getItem("Email",email));
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !secret) {
        return toast.error("Please Fill al Fields");
      }
      setloading(true);
     registerComplete( email, secret).then((res) => {
        if (res.error) {
          setloading(false);
          toast.error(res.error);
        } else {
          setloading(false);
          setEmail("");
          setSecret("");
          window.localStorage.removeItem("Email",email);
          navigate("/login")
        }
      });
    } catch (err) {
      toast.error(err.response.data);
      setloading(false);
    }
  };
  useEffect(() => {
    if (state && state.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000); // 5 seconds
    }
  }, [state && state.token]);
  return state && state.token ? (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Redirecting to Homepage...
        </span>
      </div>
    </div>
  ) : (
    <>
      <div className="bg-gray-200 flex flex-wrap h-screen lg:p-4   mx-auto justify-center">
        <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
          {/* LOGO */}
          <img src="../../src/assets/Logo.svg" className="h-10" alt="" />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
           Complete Registration
          </h1>
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Email
          </label>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          disabled
           type="email"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* PASSWORD */}
          <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
            Secret
          </label>
          <Link
            to="/forgot-password"
            className="text-end cursor-pointer justify-end text-sm flex flex-wrap text-[#248F59] italic mb-2 -mt-6 align-middle"
          >
            Forgot Password?
          </Link>
          <input
           value={secret}
           onChange={(e)=>setSecret(e.target.value)}
            type="password"
            className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {/* LOGIN */}
          <button onClick={handleSubmit} className="h-12 my-3 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#FFFFFF]">
          {loading? <LoadingOutlined/>:"Complete Registration"}
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterComplete;
