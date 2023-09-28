import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostFunction } from "../../Helper/Service";
import ShopLayout from "../../layout/Shop/index";
import SaveButton from "../common/save";
import ProductForm from "./ProductForm";
import { SellerProducts } from "./functions";
const AddProduct = () => {
  const [shops, setShops] = useState([]);
  const { sellerShops } = useSelector((state) => ({ ...state }));
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
    try {
      setLoading(true);
      let obj = {
       values
      };
      PostFunction("/product/create", obj).then((res) => {
        if (res.hasError) {
          setLoading(false);
          if (res.error.salePrice) {
            toast.error.salePrice;
          }
          if (res.error.store) {
            toast.error.store;
          }
          if (res.error.category) {
            toast.error.category;
          }
          if (res.error.name) {
            toast.error.name;
          }
          if (res.error.gallery_pics) {
            toast.error.gallery_pics;
          }
          if (res.error.feature_pic) {
            toast.error.feature_pic;
          }
          if (res.error.quantity) {
            toast.error.quantity;
          }
          if (res.error.unit) {
            toast.error.unit;
          }
          if (res.error.purchasePrice) {
            toast.error.purchasePrice;
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
    <>
      <ShopLayout>
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <h1 className="text-[#248F59] font-serif text-3xl font-normal">
            Create Products
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
      </ShopLayout>
    </>
  );
};

export default AddProduct;
