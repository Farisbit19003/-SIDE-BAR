import React, { useEffect, useState } from "react";
import StickerCard from "./StickerCards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineDollarCircle, AiOutlineShopping } from "react-icons/ai";
import { BiCartDownload } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

const Card = () => {
  const { loggedIn, allShops, product, sellerShops, allOrders } = useSelector(
    (state) => ({
      ...state,
    })
  );
  const role = loggedIn && loggedIn.user && loggedIn.user.role;

  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const SellerRevenue = allOrders?.filter((order) => order.orderType === "Sales") // Filter orders with orderType "Sales"
  .map((order) => {
    const orderDate = new Date(order.createdAt);
    if (orderDate >= thirtyDaysAgo && orderDate <= currentDate) {
      const orderTotal = order.Products?.reduce((acc, product) => {
        return acc + product.Product.salePrice * product.order_quantity;
      }, 0);
      return orderTotal * (role === "Admin" ? 0.1 : 0.9);
    } else {
      return 0;
    }
  });

  const SellertotalRevenue = SellerRevenue?.reduce((acc, orderTotal) => {
    return acc + orderTotal;
  }, 0);



  const today = new Date(); // Get the current date
  const todayOrders = allOrders?.filter((order) => {
    const orderDate = new Date(order.createdAt); // Assuming 'date' property contains the order date
    return orderDate.toDateString() === today.toDateString(); // Compare the order date with today's date
  });
  const SellerTodayRevenue = todayOrders?.filter((order) => order.orderType === "Sales")
  .map((order) => {
    const orderTotal = order.Products?.reduce((acc, product) => {
      return acc + product.Product.salePrice * product.order_quantity;
    }, 0);

    return orderTotal * (role==="Admin"?0.1:0.9); // Subtracting 10% from the order total
  });

  const SellerTodaytotalRevenue = SellerTodayRevenue?.reduce(
    (acc, orderTotal) => {
      return acc + orderTotal;
    },
    0
  );


  return (
    <>
      <div className="mb-1 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        <div className="w-full ">
          {role === "Seller" && (
            <StickerCard
              titleTransKey="Total Products"
              icon={
                <AiOutlineShopping
                  size={35}
                  className="align-middle text-[#ffb300]"
                />
              }
              iconBgStyle={{ backgroundColor: "#ffe8b2" }}
              price={product?.length}
            />
          )}
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="Total Revenue"
            subtitleTransKey="(Last 30 Days)"
            icon={
              <BiCartDownload
                size={30}
                className=" align-middle text-[#ff6e6e]"
              />
            }
            iconBgStyle={{ backgroundColor: "#facaca" }}
            price={`${SellertotalRevenue}/PKR`}
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
            price={`${SellerTodaytotalRevenue}/PKR`}
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
    </>
  );
};
export default Card;
