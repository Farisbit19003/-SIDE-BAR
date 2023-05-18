import React from "react";
import ShopLayout from "../../layout/Shop/index";
import SaveButton from "../common/save";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CreateProduct, SellerProducts } from "./functions";
import { useNavigate } from "react-router-dom";
import PurchaseForm from "./PurchaseForm";
const AddPurchase = () => {
  const [shops, setShops] = useState([]);
  const {sellerShops } = useSelector((state) => ({ ...state }));
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (sellerShops) {
      setShops(sellerShops);
    }
  }, [sellerShops]);
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
      CreateProduct(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
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
            gallery_pics: {},
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
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <h1 className="text-[#248F59] font-serif text-3xl font-normal">
          Add Purchase
        </h1>
      </div>
      <PurchaseForm
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
    </ShopLayout>
  );
};

export default AddPurchase;
