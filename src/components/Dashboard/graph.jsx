import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";
import BarChart from "./column-chart";

const Graph = () => {
  const { loggedIn, allOrders } = useSelector((state) => ({ ...state }));

  const [selectedvalue, setSelectedValue] = useState("day");
  const revenueByMonth = [];
  const role = loggedIn && loggedIn.user && loggedIn.user.role;

  allOrders?.forEach((order) => {
    const { createdAt, Products, orderType, orderStatus } = order;
    if (orderType === "Sales" && orderStatus !== "cancelled") {
      let orderMonth;
      if (selectedvalue === "day") {
        orderMonth = DateTime.fromISO(createdAt).toLocaleString(
          DateTime.DATE_MED
        );
      } else {
        orderMonth = DateTime.fromISO(createdAt).toLocaleString({
          month: "long",
        });
      }

      const monthlyRevenue =
        Products.reduce((totalRevenue, product) => {
          return (
            totalRevenue + product?.Product?.salePrice * product?.order_quantity
          );
        }, 0) * (role === "Admin" ? 0.1 : 0.9);

      const existingMonth = revenueByMonth.find(
        (entry) => entry.month === orderMonth
      );

      if (existingMonth) {
        existingMonth.revenue += monthlyRevenue;
      } else {
        revenueByMonth.push({ month: orderMonth, revenue: monthlyRevenue });
      }
    }
  });

  if (selectedvalue === "month") {
    // Sort the revenueByMonth array by month number (1 to 12)
    revenueByMonth.sort((a, b) => {
      const monthA = DateTime.fromFormat(a.month, "MMMM");
      const monthB = DateTime.fromFormat(b.month, "MMMM");
      return monthB - monthA;
    });
  } else {
    // Sort the revenueByMonth array in descending order based on the month
    revenueByMonth.sort((a, b) => new Date(b.month) - new Date(a.month));
  }

  const last15Months = revenueByMonth.slice(0, 15);
  const series = last15Months.map((entry) => Math.round(entry.revenue));
  const categories = last15Months.map((entry) => entry.month);

  const handlChange = (e) => {
    if (e.target.value === "select") {
      return setSelectedValue("day");
    }
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div className="mb-6 p-3 flex-col flex w-full border border-[#f2f2f2] rounded  bg-white">
        <div className="pt-2 mb-2 w-full flex items-center justify-center md:justify-end ">
          <label className="font-normal font-sans opacity-80 text-lg m-2 p-2">
            Filter by:
          </label>
          <select
            type="text"
            name="store"
            id="shopSelect"
            value={selectedvalue}
            onChange={handlChange}
            className="h-12 my-2 bg-white focus:border-none border border-[#f2f2f2] rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
          >
            <option value="select">--Select--</option>
            <option value="month">Monthly</option>
            <option value="day">Daily</option>
          </select>
        </div>

        <BarChart
          widgetTitle={"Sales History"}
          colors={["#03D3B5"]}
          series={series}
          categories={categories}
        />
      </div>
    </>
  );
};

export default Graph;
