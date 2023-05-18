import React, { useEffect, useState } from "react";
import StickerCard from "./StickerCards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineDollarCircle, AiOutlineShopping } from "react-icons/ai";
import { BiCartDownload } from "react-icons/bi";
import { TfiMoney } from "react-icons/tfi";
import { BsShop } from "react-icons/bs";

const Card = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { loggedIn, allShops, product, sellerShops } = useSelector((state) => ({
    ...state,
  }));
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

    if (role === "Seller" && product) {
      const filtered = product?.filter((p) => {
        return p.slug === params.slug;
      });
      filtered && setSingleProduct(filtered[0]);
    }
  }, [role, allShops, product, sellerShops, params, params.slug]);


  return (
    <>
      <div className="mb-1 grid w-full grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-4">
        <div className="w-full ">
          <StickerCard
            titleTransKey="Total Revenue"
            subtitleTransKey="(Last 30 Days)"
            icon={
              <TfiMoney size={30} className=" align-middle text-[#047857]" />
            }
            iconBgStyle={{ backgroundColor: "#A7F3D0" }}
            price={787}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="Total Order"
            subtitleTransKey="(Last 30 Days)"
            icon={
              <BiCartDownload
                size={30}
                className=" align-middle text-[#ff6e6e]"
              />
            }
            iconBgStyle={{ backgroundColor: "#facaca" }}
            price={767}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="Today Revenue"
            icon={
              <AiOutlineDollarCircle
                size={35}
                className=" align-middle text-[#ffb300]"
              />
            }
            iconBgStyle={{ backgroundColor: "#ffe8b2" }}
            price={878}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey={role === "Admin" ? "Total Shops" : "My Shops"}
            icon={<BsShop size={25} className="align-middle text-[#1D4ED8]" />}
            iconBgStyle={{ backgroundColor: "#93C5FD" }}
            price={
              role === "Admin"
                ? allShops
                  ? allShops.length
                  : 0
                : sellerShops
                ? sellerShops.length
                : 0
            }
          />
        </div>
      </div>
      <div className="w-full col-span-4 md!:col-span-2 sm!:col-span-1">
        {role === "Seller" && (
          <div className="mb-4">
            <StickerCard
              titleTransKey="Total Products"
              icon={
                <AiOutlineShopping
                  size={35}
                  className="align-middle text-[#ffb300]"
                />
              }
              iconBgStyle={{ backgroundColor: "#ffe8b2" }}
              price={product.length}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default Card;
