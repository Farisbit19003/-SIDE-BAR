import axios from "axios"
import {toast} from "react-toastify"
export const createSeller = async (name, email, password) => {
  const { data } = await axios.post("/register-seller", {
    name,
    email,
    password,
  });
  return data;
};
export const LOGIN = async (email, password,setloading,navigate,dispatch) => {
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
      dispatch({
        type:"LOGGED_IN_USER",
        payload:{
          user:auth.user,
          token:auth.token
        }
      })
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
  export const UpdateProfile = async (name,email,password,whatsapp,image) => {
    const { data } = await axios.put("profile-update", { name,email,password,whatsapp,image});
    return data;
  };
  export const BecomeSeller = async () => {
    const { data } = await axios.post("become-seller");
    return data;
  };