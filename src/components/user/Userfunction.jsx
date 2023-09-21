import axios from "axios";
import {toast} from "react-toastify"
export const AllUsers = async (dispatch) => {
  const { data } = await axios.get("/users");
  if(data.error){
    toast.error(data.error);
  }else{
    dispatch({
      type:"GET_Users",
      payload:data.user
    }
    )
  }
};
export const AllContacts = async (dispatch) => {
  const { data } = await axios.get("/contacts");
  if(data.error){
    toast.error(data.error);
  }else{
    dispatch({
      type:"CONTACTS",
      payload:data.contacts
    }
    )
  }
};
export const DeleteUser = async (id) => {
    const { data } = await axios.delete(`/delete-users/${id}`);
    return data;
  };
  export const DeleteContact = async (id) => {
    const { data } = await axios.delete(`/delete-contact/${id}`);
    return data;
  };