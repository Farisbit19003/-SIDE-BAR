import React, { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "./column-chart";

const Graph = () => {
  const { loggedIn, allOrders } = useSelector((state) => ({ ...state }));
  const [selectedvalue,setSelectedValue]=useState("day");
  const revenueByMonth = [];
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  allOrders?.forEach((order) => {
    const { createdAt, Products, orderType,orderStatus } = order;
    if (orderType === "Sales"&&orderStatus!=="cancelled") {
      // Filter orders with orderType "Sales"
      let orderMonth;
      if(selectedvalue==="day"){
        orderMonth =new Date(createdAt).toLocaleString("default", {
          dateStyle: "long",
        })
      }else{
        orderMonth=new Date(createdAt).toLocaleString("default", {
          month:"long",
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

  const series = revenueByMonth.map((entry) => entry.revenue);
  const categories = revenueByMonth.map((entry) => entry.month);

  const handlChange=(e)=>{
  if(e.target.value==="select"){
    return setSelectedValue("day");
  }
   setSelectedValue(e.target.value);
  }
  return (
    <div className="mb-6 flex w-full flex-wrap md:flex-nowrap bg-white">
      <div className="pt-2 flex justify-end">
      <label className="font-semibold mr-2 mt-2">Filter By</label>
        <select
          type="text"
          name="store"
          id="shopSelect"
          value={selectedvalue}
          onChange={handlChange}
          className="h-12 mb-2 text-md bg-white border-gray-400 rounded-lg px-3 py-2 font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
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
  );
};

export default Graph;
