import axios from "axios";
import {toast} from "react-toastify"
export const createSeller = async (name, email, password) => {
  const { data } = await axios.post("/register-seller", {
    name,
    email,
    password,
  });
  return data;
};
export const LOGIN = async (email, password,setState,setloading) => {
  try{
    const { data } = await axios.post("/login", { email, password });
    if (data.error) {
      setloading(false);
      toast.error(data.error);
    } else {
      setloading(false);
      const auth={
        user:data.user,
        token:data.token
      }
      window.localStorage.setItem("auth",JSON.stringify(auth));
      setState(auth);
      navigate("/");
    }
}
catch (err) {
    console.log("catch",err)
    toast.error(err);
    setloading(false);
  }
};
export const registerComplete = async (email, secret) => {
    const { data } = await axios.put("/register/complete", { email, secret });
    return data;
  };
  export const ForgotEmail = async (email) => {
    const { data } = await axios.put("/forgot", { email});
    return data;
  };
  export const Reset = async (email,Newpassword,secret) => {
    const { data } = await axios.put("/forgot/complete", { email,Newpassword,secret});
    return data;
  };