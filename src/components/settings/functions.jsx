import axios from "axios";
import {toast} from "react-toastify"
export const GetSettings = async (dispatch) => {
    const { data } = await axios.get("/siteSettings");
        if (data.error) {
          toast.error(data.error);
        } else {
        const setting=data.setting;
        dispatch({
            type:"GET_SETTINGS",
            payload:setting
        })
        }
};
export const UpdateSetting = async (_id,values) => {
    const { data } = await axios.put(`/updateSettings/${_id}`,{values});
    return data;
};