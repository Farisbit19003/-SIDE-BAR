import axios from "axios";
import { toast } from "react-toastify";
export const CreateStore = async (values) => {
  const { data } = await axios.post("/shop/create", { values });
  return data;
};
export const UpdateStore = async (_id, values) => {
  const { data } = await axios.put(`/shop/update/${_id}`, { values });
  return data;
};
export const DeleteStore = async (_id, values) => {
  const { data } = await axios.delete(`/shop/delete/${_id}`);
  return data;
};
export const AdminDeleteStore = async (_id, values) => {
  const { data } = await axios.delete(`/admin-shop-delete/delete/${_id}`);
  return data;
};
export const AllShops = async (dispatch) => {
  const { data } = await axios.get("/shop/AllShops");
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "GET_SHOPS",
      payload: data.shops,
    });
  }
};
export const SellerShops = async (dispatch) => {
  const { data } = await axios.get(`/shop/SellerShops`);
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "YOUR_SHOPS",
      payload: data.shops,
    });
  }
};
export const ApproveStore = async (_id) => {
  const { data } = await axios.put(`/shop/approve/${_id}`);
  return data;
};
export const DisApproveStore = async (_id) => {
  const { data } = await axios.put(`/shop/disapprove/${_id}`);
  return data;
};

export const SellerOrders = async (dispatch) => {
  const { data } = await axios.get(`/sellerOrders`);
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "YOUR_ORDERS",
      payload: data.orders,
    });
  }
};
