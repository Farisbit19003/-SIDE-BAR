import axios from "axios";
export const CreateOrder = async (values) => {
  const { data } = await axios.post("/order/create-purchase", {values});
  return data;
};


