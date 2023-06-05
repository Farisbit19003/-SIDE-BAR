import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UpdateSetting } from "../../comp/settings/functions";
import SettingsForm from "../../comp/settings/settingsForm";
import AdminLayout from "../admin";
const Settings = () => {
  const { siteSetting } = useSelector((state) => ({ ...state }));
  const [image, setImage] = useState([]);
  const [values, setValues] = useState({
    siteTitle: "",
    siteSubtitle: "",
    stripe_account_id: "",
  });
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (siteSetting) {
      setValues({
        siteTitle: siteSetting.siteTitle,
        siteSubtitle: siteSetting.siteSubtitle,
        stripe_account_id: siteSetting.stripe_account_id,
      });
      setImage([siteSetting.image]);
      setId([siteSetting._id]);
    }
  }, [siteSetting]);
  values.image = image[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.siteTitle ||
      !values.siteSubtitle ||
      !values.stripe_account_id ||
      image.length < 1
    ) {
      return toast.error("ALl Fields are Required");
    }
    try {
      setLoading(true);
      UpdateSetting(id, values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Settings Updated");
          dispatch({
            type: "GET_SETTINGS",
            payload: res.settings,
          });
          setLoading(false);
        }
      });
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };
  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-center bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Site Settings
          </h1>
        </div>
      </div>
      <SettingsForm
        values={values}
        setValues={setValues}
        image={image}
        setImage={setImage}
        loading={loading}
        setloading={setLoading}
        handleSubmit={handleSubmit}
      />
    </AdminLayout>
  );
};

export default Settings;
