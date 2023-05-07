import axios from "axios";
import {toast} from "react-toastify"
export const CreateCategory = async (values) => {
  const { data } = await axios.post("/category/create", {values});
  return data;
};
export const UpdateCat = async (slug,values) => {
    const { data } = await axios.put(`/category/update/${slug}`,{values});
    return data;
  };
  export const SingleCategory = async (slug) => {
    const { data } = await axios.get(`/category/SingleCategory/${slug}`);
    return data;
  };
export const AllCategory = async (dispatch) => {
    const { data } = await axios.get("/category/AllCategories");
    if(data.error){
      toast.error(data.error);
    }else{
      dispatch({
        type:"GET_CATEGORY",
        payload:data.category
      })
    }
  };
  export const DeleteCategory = async (slug) => {
    const { data } = await axios.delete(`/category/delete/${slug}`);
    return data;
  };