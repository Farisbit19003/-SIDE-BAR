import axios from "axios";
export const UpdateOrderStatus = async (_id,status) => {
  const { data } = await axios.put(`/order/update/${_id}`, { status });
  return data;
};