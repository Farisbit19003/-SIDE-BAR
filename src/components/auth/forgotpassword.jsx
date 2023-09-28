import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PutFunction } from "../../Helper/Service";
import Logo from "./logo";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [Newpassword, setNewPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setloading] = useState(false);
  const [ok, setOK] = useState(false);
  
  const navigate = useNavigate();
  
  const { loggedIn } = useSelector((state) => ({ ...state }));
  
  const sendResetEmail = (e) => {
    e.preventDefault();
    try {
      setloading(true);
      let obj= {email}
      PutFunction("/forgot",obj).then((res) => {
        if (res.hasError) {
          setloading(false);
          toast.error(res.error.email);
        } else {
          setloading(false);
          setOK(true);
          toast.success("Email Send SuccessFully..Please Check your Email");
        }
      });
    } catch (err) {
      toast.error("SOMETHING WENT WRONG!");
      setloading(false);
    }
  };

  const ForgotNow = (e) => {
    e.preventDefault();
    try {
      let obj = { secret, Newpassword, email }; 
      setloading(true);
      PutFunction("/forgot/complete", obj).then((res) => {
        if (res.hasError) {
          setloading(false);
          if (res.error.secret) {
            toast.error(res.error.secret);
          }
          if (res.error.Newpassword) {
            toast.error(res.error.Newpassword);
          }
          if (res.error.email) {
            toast.error(res.error.email);
          }
        } else {
          setloading(false);
          toast.success("Forgot Password Successfully");
          navigate("/login");
        }
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error("SOMETHING WENT WRONG!");
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
 
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setNewPassword(input);
  };

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
      <div className="bg-gray-200 flex flex-wrap h-screen lg:p-4 mx-auto justify-center">
        <div className="bg-white flex flex-col p-4 md:w-4/12 w-full mx-auto border-2 justify-center shadow">
          <Logo />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
            Forgot Password
          </h1>
          {/* EMAIL */}
          <label className="mb-3 block font-sans text-sm font-semibold leading-none ">
            Email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />
          
          {ok ? (
            <>
            {/* PASSWORD */}
              <label className="mb-3 block text-sm font-sans font-semibold leading-none ">
                New Password
              </label>
              <input
                value={Newpassword}
                onChange={handlePasswordChange}
                type="password"
                className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              />
             
              {/* CODE */}
              <label className="mb-3 block text-sm font-sans font-semibold leading-none ">
                Code
              </label>
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="password"
                className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              />
            </>
          ) : (
            ""
          )}
          {/* SUBMIT */}
          {!ok ? (
            <button
              onClick={sendResetEmail}
              className="h-12 my-2 transition-transform hover:scale-95 font-sans flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#F2F2F2] hover:text-white"
            >
              {loading ? <LoadingOutlined /> : "Submit Email"}
            </button>
          ) : (
            <button
              onClick={ForgotNow}
              className="h-12 my-2 flex flex-wrap font-sans transition-transform hover:scale-95 justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#F2F2F2] hover:text-white"
            >
              {loading ? <LoadingOutlined /> : "Forgot Password"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
