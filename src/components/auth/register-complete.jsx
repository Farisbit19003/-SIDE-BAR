import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PutFunction } from "../../Helper/Service";
import Logo from "./logo";

const RegisterComplete = () => {

  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setloading] = useState(false);

  const {loggedIn}=useSelector((state)=>({...state}));
  const navigate = useNavigate();

  useEffect(()=>{
  setEmail(window.localStorage.getItem("Email",email));
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      let obj = {email, secret};
      PutFunction("/register/complete", obj).then((e) => {
        if (e.hasError) {
          setloading(false);
          // Display error messages in toast notifications
          if (e.error.email) {
            toast.error(e.error.email);
          }
          if (e.error.secret) {
            toast.error(e.error.secret);
          }
        } else {
          setloading(false);
          setEmail("");
          setSecret("");
          window.localStorage.removeItem("Email", email);
          navigate("/login");
        }
      });
    } catch (err) {
      toast.error("Something went wrong!");
      setloading(false);
    }
  };

  useEffect(() => {
    if (loggedIn && loggedIn.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000); // 5 seconds
    }
  }, [loggedIn && loggedIn.token]);

  return loggedIn && loggedIn.token ? (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
          <span className="mt-4 text-gray-500 font-sans text-lg font-semibold">
            Redirecting to Homepage...
          </span>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="bg-gray-200 flex flex-wrap h-screen lg:p-4 font-sans mx-auto justify-center">
        <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
          {/* LOGO */}
          <Logo />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
            Complete Registration
          </h1>
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-semibold leading-none">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
            type="email"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />
          {/* Secret */}
          <label className="mb-3 block text-sm font-semibold leading-none">
            Secret
          </label>
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="password"
            className="h-12 mb-4 flex flex-wrap  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />
          {/* LOGIN */}
          <button
            onClick={handleSubmit}
            className="h-12 my-3 flex flex-wrap justify-center transition-transform hover:scale-95 items-center rounded-lg w-full bg-[#248F59] uppercase text-[#F2F2F2] hover:text-white"
          >
            {loading ? <LoadingOutlined /> : "Complete Registration"}
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterComplete;
