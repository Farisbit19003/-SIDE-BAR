import axios from "axios";
import {toast} from "react-toastify"
export const CreateStore = async (values) => {
  const { data } = await axios.post("/shop/create", {values});
  return data;
};
// export const UpdateCat = async (slug,values) => {
//     const { data } = await axios.put(`/category/update/${slug}`,{values});
//     return data;
//   };
//   export const SingleCategory = async (slug) => {
//     const { data } = await axios.get(`/category/SingleCategory/${slug}`);
//     return data;
//   };
export const AllShops = async (dispatch) => {
    const { data } = await axios.get("/shop/AllShops");
    if(data.error){
      toast.error(data.error);
    }else{
      dispatch({
        type:"GET_SHOPS",
        payload:data.shops
      })
    }
  };
//   export const DeleteCategory = async (slug) => {
//     const { data } = await axios.delete(`/category/delete/${slug}`);
//     return data;
//   };