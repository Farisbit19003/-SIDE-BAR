import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import Logo from "./logo";
import { PostFunction } from "../../Helper/Service";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const { loggedIn } = useSelector((state) => ({ ...state }));
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      let obj = { name, email, password };

      PostFunction("/register-seller", obj).then((e) => {
        console.log(e);
        if (e.hasError) {
          setloading(false);
          // Display error messages in toast notifications
          if (e.error.name) {
            toast.error(e.error.name);
          }
          if (e.error.email) {
            toast.error(e.error.email);
          }
          if (e.error.password) {
            toast.error(e.error.password);
          }
        } else {
          setloading(false);
          setEmail("");
          setName("");
          setPassword("");
          window.localStorage.setItem("Email", email);
          swal("Please Check your Email and Complete Registration");
        }
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error("An error occurred while processing your request.");
      setloading(false);
    }
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
        <div className="bg-white flex flex-col p-8 md:w-4/12 w-full mx-auto border-2 justify-center shadow">
          <Logo />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
            Register New Account
          </h1>
          {/* NAME */}
          <label className="mb-3 block font-sans text-sm font-semibold leading-none">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-sans font-semibold leading-none">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />

          {/* PASSWORD */}
          <label className="font-semibold font-sans flex flex-wrap mb-3 text-sm leading-none">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="h-12 mb-3 font-sans transition-transform hover:scale-95 flex flex-wrap justify-center items-center rounded-lg w-full bg-[#248F59] uppercase text-[#F2F2F2] hover:text-white"
          >
            {loading ? <LoadingOutlined /> : " Register"}
          </button>
          {/* OR */}
          <div className="relative flex flex-col mt-2 items-center justify-center text-sm">
            <hr className="w-full" />
            <span className="start-2/4 -ms-4 absolute font-sans -top-2.5 bg-white px-2">
              OR
            </span>
          </div>
          <span className="font-sans text-base font-normal my-3 text-center">
            Already have an Account?
            <Link to="/login" className="text-[#248F59]">
              {" "}
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
export default Register;
