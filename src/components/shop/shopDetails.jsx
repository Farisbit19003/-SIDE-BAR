import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ShopLayout from "../../layout/Shop";
import AdminLayout from "../../layout/admin";
import DetailsCard from "./DetailsCard";


const ShopDetails = () => {

  const [singleShop, setSingleShop] = useState({});
  const [productLength, setProductLength] = useState([]);
  const [OrdersLength, setOrdersLength] = useState([]);
  const [GrandTotal,setGrandTotal]=useState("");
  const [ok, setOk] = useState(true);

  const { loggedIn, allShops,allOrders ,sellerShops, product, allProducts } = useSelector(
    (state) => ({ ...state })
  );
  const role = loggedIn && loggedIn.user && loggedIn.user.role;

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "Admin" && allShops && params?.slug) {
      const filtered = allShops?.filter((s) => {
        return s.slug === params.slug;
      });
      filtered && setSingleShop(filtered[0]);
    }
    if (role === "Seller" && sellerShops && params?.slug) {
      const filtered = sellerShops?.filter((s) => {
        return s.slug === params.slug;
      });
      filtered && setSingleShop(filtered[0]);
    }
  }, [params, params.slug]);
  
  useEffect(() => {
    if (role === "Admin") {
      const pro = allProducts?.filter((p) => {
        return p.store._id === singleShop?._id;
      });
      setProductLength(pro);
    } else if (role === "Seller") {
      const pro = product?.filter((p) => {
        return p.store._id === singleShop?._id;
      });
      setProductLength(pro);
    }
    setOk(false);
  }, [singleShop,product,allProducts]);

  useEffect(() => {
    const salesOrders = allOrders?.filter((order) => {
      return order.store._id === singleShop?._id && order.orderType === "Sales"
      &&order.orderStatus!=="cancelled";
    });
    
    setOrdersLength(salesOrders);
    
    const revenue = salesOrders?.map((order) => {
      const orderTotal = order.Products?.reduce((acc, product) => {
        return acc + product.Product.salePrice * product.order_quantity;
      }, 0);
    
      return orderTotal * 0.9; // Subtracting 10% from the order total
    });
    
    const total = revenue?.reduce((acc, orderTotal) => {
      return acc + orderTotal;
    }, 0);
    
      setGrandTotal(total);
  }, [singleShop,allShops,sellerShops,allOrders]);

  useEffect(() => {
    if (!singleShop) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [singleShop]);

  return (
    <>
      {role === "Admin" ? (
        <>
          <AdminLayout>
            {!singleShop || allShops === null ? (
              <>
                <div className=" inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <FaSpinner className="mt-48 text-6xl w-16 h-16 text-[#248F59] animate-spin" />
                    <span className="mt-16 text-gray-500 text-lg font-semibold">
                      Loading.....................
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <DetailsCard
                  ok={ok}
                  page="Admin"
                  singleShop={singleShop}
                  proLength={productLength}
                  OrdersLength={OrdersLength}
                  GrandTotal={GrandTotal}
                />
              </>
            )}
          </AdminLayout>
        </>
      ) : (
        <>
          <ShopLayout>
            {!singleShop || sellerShops === null ? (
              <>
                <div className=" inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <FaSpinner className="mt-48 text-6xl w-16 h-16 text-[#248F59] animate-spin" />
                    <span className="mt-16 text-gray-500 text-lg font-semibold">
                      Loading.....................
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <DetailsCard
                  ok={ok}
                  singleShop={singleShop}
                  proLength={productLength}
                  OrdersLength={OrdersLength}
                  GrandTotal={GrandTotal}
                />
              </>
            )}
          </ShopLayout>
        </>
      )}
    </>
  );
};
export default ShopDetails;
