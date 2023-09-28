import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { PutFunction } from "../../Helper/Service";
import ShopLayout from "../../layout/Shop/index";
import SaveButton from "../common/save";
import ProductForm from "./ProductForm";
import { SellerProducts } from "./functions";

const UpdateProducts = () => {
  const [shops, setShops] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const { loggedIn, sellerShops, product } = useSelector((state) => ({
    ...state,
  }));
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
  const params = useParams();

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
        discription: singleProduct?.discription,
        store: singleProduct?.store?._id,
        category: singleProduct?.category?._id,
        salePrice: singleProduct?.salePrice,
        purchasePrice: singleProduct?.purchasePrice,
        quantity: singleProduct?.quantity,
        unit: singleProduct?.unit,
        gallery_pics: singleProduct?.gallery_pics,
        feature_pic: singleProduct?.feature_pic,
      });
    }
  }, [singleProduct]);

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let obj = {
        ...values, // Spread the values object
      };
      PutFunction(`/product/update/${params.slug}`, obj).then((res) => {
        if (res.hasError) {
          setLoading(false);
          if (res.error.name) {
            toast.error(res.error.name);
          }
          if (res.error.discription) {
            toast.error(res.error.discription);
          }
          if (res.error.salePrice) {
            toast.error(res.error.salePrice);
          }
          if (res.error.purchasePrice) {
            toast.error(res.error.purchasePrice);
          }
          if (res.error.quantity) {
            toast.error(res.error.quantity);
          }
          if (res.error.gallery_pics) {
            toast.error(res.error.gallery_pics);
          }
          if (res.error.feature_pic) {
            toast.error(res.error.feature_pic);
          }
          if (res.error.unit) {
            toast.error(res.error.unit);
          }
          if (res.error.category) {
            toast.error(res.error.category);
          }
          if (res.error.store) {
            toast.error(res.error.store);
          }
        } else {
          toast.success("Product Created");
          setValues({
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
      {!singleProduct || product === null ? (
        <>
          <div className=" inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
              <span className="mt-16 text-gray-500 text-lg font-semibold">
                Loading 
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
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
            <SaveButton handleSubmit={handleSubmit} loading={loading} />
          </div>
        </>
      )}
    </ShopLayout>
  );
};

export default UpdateProducts;
