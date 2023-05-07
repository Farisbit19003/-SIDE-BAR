import { useState, useEffect } from "react";
import ShopLayout from "../../layout/Shop/index";
import SaveButton from "../../comp/common/save";
import ShopForm from "../../comp/Create Shop/ShopForm";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CreateStore } from "../../comp/Create Shop/functions";
import { useNavigate } from "react-router-dom";
const CreateShops = () => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    Storename: "",
    description: "",
    Storewhatsapp: "",
    Streetaddress: "",
    stripe_account_id: "",
    Country: "",
    City: "",
    category: "",
    facebook: "",
    insta: "",
    mapAddress: "",
    location: {},
    main_pic: {},
    cover_pic: {},
  });
  const [loading, setLoading] = useState(false);
  const { category } = useSelector((state) => ({ ...state }));
  const navigate=useNavigate();
  useEffect(() => {
    if (category) {
      setCategories(category);
    }
  }, [category]);
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.Storename ||
      !values.description ||
      !values.Storewhatsapp ||
      !values.Streetaddress ||
      !values.stripe_account_id ||
      !values.Country ||
      !values.City ||
      !values.category ||
      !values.facebook ||
      !values.insta ||
      !values.mapAddress ||
      Object.keys(values.location).length === 0 ||
      Object.keys(values.main_pic).length === 0 ||
      Object.keys(values.cover_pic).length === 0
    ) {
      toast.error("Please Fill all Fields");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      CreateStore(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Store Created");
          setValues({
            Storename: "",
            description: "",
            Storewhatsapp: "",
            Streetaddress: "",
            stripe_account_id: "",
            Country: "",
            City: "",
            category: "",
            facebook: "",
            insta: "",
            mapAddress: "",
            location: {},
            main_pic: {},
            cover_pic: {}
        });
          setLoading(false);
          navigate("/my-shop")
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <ShopLayout>
      <>
              <form>
          <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
            <h1 className="text-[#248F59] font-serif text-3xl font-normal">
              Create Shops
            </h1>
          </div>
          <ShopForm
            categories={categories}
            values={values}
            setValues={setValues}
            setLoading={setLoading}
            loading={loading}
          />
          <div className="flex justify-end">
            <SaveButton handleSubmit={handleSubmit} loading={loading} />
          </div>
        </form>
      </>
    </ShopLayout>
  );
};

export default CreateShops;
