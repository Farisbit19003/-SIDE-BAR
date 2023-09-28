import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostFunction } from "../../Helper/Service";
import { LOGIN } from "./auth";
import Logo from "./logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const { loggedIn } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      let obj = { email, password };

      PostFunction("/login", obj).then((e) => {
        console.log(e);
        if (e.hasError) {
          setloading(false);
          // Display error messages in toast notifications
          if (e.error.email) {
            toast.error(e.error.email);
          }
          if (e.error.password) {
            toast.error(e.error.password);
          }
        } else {
          setloading(true);
          LOGIN(email, password, setloading, navigate, dispatch);
        }
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error("An error occurred while processing your request.");
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

  return loggedIn && loggedIn.token ? (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
          <span className="mt-4 text-gray-500 text-lg font-semibold">
            Redirecting to Homepage...
          </span>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="bg-gray-200 flex flex-wrap h-screen lg:p-4   mx-auto justify-center">
        <div className="bg-white flex flex-col p-4 md:w-fit w-full mx-auto border-2 justify-center shadow">
          {/* LOGO */}
          <Logo />
          <h1 className="text-gray-400 font-thin flex justify-center items-center italic mb-6 font-sans">
            Login
          </h1>
          {/* EMAIL */}
          <label className="mb-3 block text-sm font-sans font-semibold leading-none ">
            Email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />

          {/* PASSWORD */}
          <label className="mb-3 block text-sm font-sans font-semibold leading-none ">
            Password
          </label>
          <Link
            to="/forgot-password"
            className="text-end cursor-pointer font-sans justify-end text-sm flex flex-wrap text-[#248F59] italic mb-2 -mt-6 align-middle"
          >
            Forgot Password?
          </Link>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="h-12 mb-4 flex flex-wrap bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          />
          {/* LOGIN */}
          <button
            onClick={handleSubmit}
            className="h-12 my-3 flex flex-wrap font-sans justify-center transition-transform hover:scale-95 items-center rounded-lg w-full bg-[#248F59] uppercase text-[#F2F2F2] hover:text-white"
          >
            {loading ? <LoadingOutlined /> : " Login"}
          </button>
          {/* OR */}
          <div className="relative flex my-5 flex-col items-center justify-center text-sm ">
            <hr className="w-full" />
            <span className="start-2/4 -ms-4 absolute font-sans -top-2.5 bg-white px-2">
              OR
            </span>
          </div>
          {/* REGISTER */}
          <span className="font-sans text-base font-normal my-2 text-center">
            Don't have any account?
            <Link to="/register" className="text-[#248F59]">
              {" "}
              Register as Shop Owner
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
export default Login;
