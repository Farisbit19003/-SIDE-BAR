import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ShopLayout from "../../layout/Shop";
import SaveButton from "../common/save";
import ShopForm from "./ShopForm";
import { SellerShops, UpdateStore } from "./functions";

const UpdateShop = () => {
  const [categories, setCategories] = useState([]);
  const [singleShop, setSingleShop] = useState({});
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

  const { loggedIn, category, sellerShops } = useSelector((state) => ({
    ...state,
  }));
  

  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      setCategories(category);
    }
  }, [category]);

  useEffect(() => {
    if (role === "Seller" && sellerShops) {
      const filtered = sellerShops?.filter((s) => {
        return s.slug === params.slug;
      });
      filtered && setSingleShop(filtered[0]);
    }
  }, [sellerShops, params.slug]);

  useEffect(() => {
    if (!singleShop) {
      const timeoutId = setTimeout(() => {
        navigate("/my-shop");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
    if (singleShop) {
      setValues({
        Storename: singleShop?.Storename,
        description: singleShop?.description,
        Storewhatsapp: singleShop?.Storewhatsapp,
        Streetaddress: singleShop?.Streetaddress,
        Country: singleShop?.Country,
        City: singleShop?.City,
        category: singleShop?.category?._id,
        facebook: singleShop?.facebook,
        insta: singleShop?.insta,
        mapAddress: singleShop?.mapAddress,
        location: singleShop?.location,
        main_pic: singleShop?.main_pic,
        cover_pic: singleShop?.cover_pic,
      });
    }
  }, [singleShop]);

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
      UpdateStore(singleShop?._id, values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Store Updated");
          setLoading(false);
          navigate("/my-shop");
          SellerShops(dispatch);
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <ShopLayout>
        {!singleShop || sellerShops === null ? (
          <div className=" inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
              <span className="mt-16 text-gray-500 text-lg font-semibold">
                Loading ....................................
              </span>
            </div>
          </div>
        ) : (
          <>
            <form>
              <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
                <h1 className="text-[#248F59] font-serif text-3xl font-normal">
                  Update Shops
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
        )}
      </ShopLayout>
    </>
  );
};

export default UpdateShop;
