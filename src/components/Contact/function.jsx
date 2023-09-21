import axios from "axios";
export const SendMessage = async (values,message) => {
  const { data } = await axios.post(`/contact/reply/`, { values,message });
  return data;
};