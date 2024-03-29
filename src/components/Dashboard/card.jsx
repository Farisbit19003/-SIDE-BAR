import React from "react";
import { AiOutlineDollarCircle, AiOutlineShopping } from "react-icons/ai";
import { BiCartDownload } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { useSelector } from "react-redux";
import StickerCard from "./StickerCards";
import { DateTime } from "luxon"; 

const Card = () => {
  const { loggedIn, allShops, product, sellerShops, allOrders, allusers } =
    useSelector((state) => ({
      ...state,
    }));

  const role = loggedIn && loggedIn.user && loggedIn.user.role;

  const currentDate = DateTime.now();
  const thirtyDaysAgo = currentDate.minus({ days: 30 });
  
  const SellerRevenue = allOrders
    ?.filter(
      (order) =>
        order.orderType === "Sales" && order.orderStatus !== "cancelled"
    )
    .map((order) => {
      const orderDate = DateTime.fromISO(order.createdAt);
      if (orderDate >= thirtyDaysAgo && orderDate <= currentDate) {
        const orderTotal = order.Products?.reduce((acc, product) => {
          return acc + product?.Product?.salePrice * product?.order_quantity;
        }, 0);
        return orderTotal * (role === "Admin" ? 0.1 : 0.9);
      } else {
        return 0;
      }
    });

  const SellertotalRevenue = SellerRevenue?.reduce((acc, orderTotal) => {
    return acc + orderTotal;
  }, 0);

  const today = DateTime.now();
  const todayOrders = allOrders?.filter((order) => {
    const orderDate = DateTime.fromISO(order.createdAt);
    return orderDate.hasSame(today, 'day');
  });

  const SellerTodayRevenue = todayOrders
    ?.filter(
      (order) =>
        order.orderType === "Sales" && order.orderStatus !== "cancelled"
    )
    .map((order) => {
      const orderTotal = order.Products?.reduce((acc, product) => {
        return acc + product?.Product?.salePrice * product?.order_quantity;
      }, 0);

      return orderTotal * (role === "Admin" ? 0.1 : 0.9);
    });

  const SellerTodaytotalRevenue = SellerTodayRevenue?.reduce(
    (acc, orderTotal) => {
      return acc + orderTotal;
    },
    0
  );

  const profitRevenue = allOrders
    ?.filter(
      (order) =>
        order.orderType === "Sales" && order.orderStatus !== "cancelled"
    )
    .map((order) => {
      const orderTotal = order.Products?.reduce((acc, product) => {
        const productTotal =
          product?.Product?.salePrice * product?.order_quantity * 0.9;
        const purchaseTotal =
          product?.Product?.purchasePrice * product?.order_quantity;
        const profit = productTotal - purchaseTotal;
        return acc + profit;
      }, 0);

      return orderTotal;
    });

  const profit = profitRevenue?.reduce((acc, orderTotal) => {
    return acc + orderTotal;
  }, 0);

  const sellersLength = allusers?.filter((user) => user.role === "Seller");

  return (
    <>
      <div className="mb-1 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {/* DASHBOARD TOP CARDS */}
        <div className="w-full ">
          {role === "Seller" ? (
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
          ) : (
            <StickerCard
              titleTransKey="Total Sellers"
              icon={
                <AiOutlineShopping
                  size={35}
                  className="align-middle text-[#ffb300]"
                />
              }
              iconBgStyle={{ backgroundColor: "#ffe8b2" }}
              price={sellersLength?.length}
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
                className="align-middle text-[#ff6e6e]"
              />
            }
            iconBgStyle={{ backgroundColor: "#facaca" }}
            price={`${
              SellertotalRevenue
                ? Math.round(SellertotalRevenue).toLocaleString("en-US", {
                    style: "currency",
                    currency: "PKR",
                  })
                : 0
            }`}
          />
        </div>
        <div className="w-full ">
          <StickerCard
            titleTransKey="Today Revenue"
            icon={
              <AiOutlineDollarCircle
                size={35}
                className="align-middle text-[#ffb300]"
              />
            }
            iconBgStyle={{ backgroundColor: "#ffe8b2" }}
            price={`${
              SellerTodaytotalRevenue
                ? Math.round(SellerTodaytotalRevenue).toLocaleString("en-US", {
                    style: "currency",
                    currency: "PKR",
                  })
                : 0
            }`}
          />
        </div>
        {role === "Seller" && (
          <div className="w-full ">
            <StickerCard
              titleTransKey="Total Profit"
              icon={
                <AiOutlineDollarCircle
                  size={35}
                  className="align-middle text-[#ffb300]"
                />
              }
              iconBgStyle={{ backgroundColor: "#ffe8b2" }}
              price={`${
                profit
                  ? Math.round(profit).toLocaleString("en-US", {
                      style: "currency",
                      currency: "PKR",
                    })
                  : 0
              }`}
            />
          </div>
        )}
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
