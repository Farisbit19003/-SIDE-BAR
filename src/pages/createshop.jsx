import { useState, useEffect } from "react";
import ShopLayout from "../layout/Shop/index";
import SaveButton from "../components/common/save";
import ShopForm from "../components/Create Shop/ShopForm";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CreateStore,SellerShops } from "../components/Create Shop/functions";
import { useNavigate } from "react-router-dom";
const CreateShops = () => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    Storename: "",
    description: "",
    Storewhatsapp: "",
    Streetaddress: "",
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
  const [whatsappError, setWhatsappError] = useState("");
  const { category } = useSelector((state) => ({ ...state }));
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    if (category) {
      setCategories(category);
    }
  }, [category]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.Storename ||
      !values.description ||
      !values.Storewhatsapp ||
      !values.Streetaddress ||
      !values.Country ||
      !values.City ||
      !values.category ||
      !values.facebook ||
      !values.insta ||
      !values.mapAddress ||
      !values.location ||
      !values.main_pic ||
      !values.cover_pic
    ) {
      toast.error("Please Fill all Fields");
      setLoading(false);
      return;
    }
    if (whatsappError) {
      return toast.error("Please Enter valid Contact Number");
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
          SellerShops(dispatch);
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
            whatsappError={whatsappError}
            setWhatsappError={setWhatsappError}
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
