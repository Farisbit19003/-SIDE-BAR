import ShopLayout from "../../layout/Shop/index";
import SaveButton from "../common/save";
import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { SellerProducts, UpdateProduct } from "./functions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
const UpdateProducts = () => {
  const [shops, setShops] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const {loggedIn,sellerShops,product } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState({
    name: "",
    discription: "",
    store: "",
    category: "",
    salePrice: "",
    purchasePrice: "",
    quantity: "",
    unit: "",
    gallery_pics: [],
    feature_pic: {},
  });
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams()

  useEffect(() => {
    if (sellerShops) {
      setShops(sellerShops);
    }
  }, [sellerShops]);
  useEffect(() => {
    if (role === "Seller" && product) {
      const filtered = product?.filter((s) => {
        return s.slug === params.slug;
      });
      filtered && setSingleProduct(filtered[0]);
    }
  }, [product, params.slug]);
  useEffect(() => {
    if (!singleProduct) {
      const timeoutId = setTimeout(() => {
        navigate("/products");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
    if (singleProduct) {
      setValues({
        name: singleProduct?.name,
        discription:singleProduct?.discription,
        store:singleProduct?.store?._id,
        category:singleProduct?.category?._id,
        salePrice:singleProduct?.salePrice,
        purchasePrice: singleProduct?.purchasePrice,
        quantity:singleProduct?.quantity,
        unit:singleProduct?.unit,
        gallery_pics:singleProduct?.gallery_pics,
        feature_pic:singleProduct?.feature_pic,
      });
    }
  }, [singleProduct]);
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.name ||
      !values.discription ||
      !values.store ||
      !values.category ||
      !values.salePrice ||
      !values.purchasePrice ||
      !values.quantity ||
      !values.feature_pic
    ) {
      toast.error("Please Fill all Fields");
      setLoading(false);
      return;
    }
    if (values.gallery_pics.length < 3) {
      toast.error("Please add at least Three Gallery Images");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      UpdateProduct(params.slug,values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          toast.success("Product Updated");
          setLoading(false);
          SellerProducts(dispatch);
          navigate("/products");
        }
      });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <ShopLayout>
     {!singleProduct || product===null ? (
        <div className=" inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
          <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
            <span className="mt-16 text-gray-500 text-lg font-semibold">
             Loading ....................................
            </span>
          </div>
        </div>
      ) : <>
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <h1 className="text-[#248F59] font-serif text-3xl font-normal">
         Update Products
        </h1>
      </div>
      <ProductForm
        shops={shops}
        values={values}
        setValues={setValues}
        setLoading={setLoading}
        loading={loading}
      />
      <div className="float-right">
        {" "}
        <SaveButton handleSubmit={handleSubmit} loading={loading} />
      </div>
      </>}
    </ShopLayout>
  );
};

export default UpdateProducts;
