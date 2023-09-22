import axios from "axios";
import { toast } from "react-toastify";
export const CreateProduct = async (values) => {
  const { data } = await axios.post("/product/create", { values });
  return data;
};
export const UpdateProduct = async (slug, values) => {
  const { data } = await axios.put(`/product/update/${slug}`, { values });
  return data;
};
export const DeleteProduct = async (values) => {
  const { data } = await axios.post(`/product/delete/${values?.slug}`, {
    values,
  });
  return data;
};

export const AllProducts = async (dispatch) => {
  const { data } = await axios.get("/product/AllProducts");
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "All_PRODUCTS",
      payload: data.products,
    });
  }
};
export const SellerProducts = async (dispatch) => {
  const { data } = await axios.get(`/product/seller-products`);
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "PRODUCTS",
      payload: data.products,
    });
  }
};
export const AllOrders = async (dispatch) => {
  const { data } = await axios.get(`/allorders`);
  if (data.error) {
    toast.error(data.error);
  } else {
    dispatch({
      type: "YOUR_ORDERS",
      payload: data.orders,
    });
  }
};
