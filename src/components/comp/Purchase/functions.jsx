import axios from "axios";
export const CreateOrder = async (values) => {
  const { data } = await axios.post("/order/create-purchase", {values});
  return data;
};

export const DeleteProduct = async (values) => {
  const { data } = await axios.post(`/product/delete/${values?.slug}`,{values});
  return data;
};
