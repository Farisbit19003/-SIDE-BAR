import axios from "axios";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StripeCallback = () => {

  const { loggedIn } = useSelector((state) => ({ ...state }));
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleStatus = async () => {
    if (loggedIn) {
      const { data } = await axios.post("/get-account-status");
      if (data.error) {
        toast.error(data.error);
        navigate("/profile-update");
      } else {
        let auth = JSON.parse(window.localStorage.getItem("auth"));
        auth.user = data.user;
        window.localStorage.setItem("auth", JSON.stringify(auth));
        //update in state
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            ...loggedIn,
            user: auth.user,
          },
        });
        toast("Stripe Payout Successfully Setup");
        navigate("/");
      }
    }
  };
  
  useEffect(() => {
    handleStatus();
  }, [loggedIn]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading
        </span>
      </div>
    </div>
  );
};

export default StripeCallback;
