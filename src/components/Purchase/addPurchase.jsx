import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ShopLayout from "../../layout/Shop/index";
import { SellerOrders } from "../Create Shop/functions";
import SaveButton from "../common/save";
import PurchaseForm from "./PurchaseForm";
import { CreateOrder } from "./functions";

const AddPurchase = () => {
  const [shops, setShops] = useState([]);
  const {sellerShops,product } = useSelector((state) => ({ ...state }));
  const [values, setValues] = useState({
    Products: [
      {
        Product: "",
        order_quantity: "",
      },
    ],
    store: "",
    orderType: "Purchase",
    orderStatus:"confirmed",
    order_address: "",
    paymentType: "COD",
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
  const handleSubmit = () => {
    if (!values.store) {
      return toast.error("Please Select Store");
    }
    if (!values.Products.length) {
      return toast.error("Please Add Products");
    }
    if (!values.order_address) {
      return toast.error("Please Add Your Address");
    }
      hanldeCod();
  };
  
  const hanldeCod = () => {
    try {
      setLoading(true);
      CreateOrder(values).then((res) => {
        if (res.error) {
          toast.error(res.error);
          setLoading(false);
        } else {
          console.log(res.order);
          toast.success("Order Placed SuccessFully");
          setLoading(false);
          SellerOrders(dispatch);
          navigate(`/purchase`);
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
            Add Purchase
          </h1>
        </div>
        <PurchaseForm
          shops={shops}
          product={product}
          values={values}
          setValues={setValues}
        />
        <div className="flex justify-end">
          <SaveButton handleSubmit={handleSubmit} loading={loading} />
        </div>
      </ShopLayout>
    </>
  );
};

export default AddPurchase;
