import React from "react";
import { useSelector } from "react-redux";
import BarChart from "./column-chart";


const Graph = () => {
  const { loggedIn, allOrders } = useSelector((state) => ({ ...state }));
  const revenueByMonth = [];
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  allOrders?.forEach((order) => {
    const { createdAt, Products, orderType } = order;
    if (orderType === "Sales") { // Filter orders with orderType "Sales"
      const orderMonth = new Date(createdAt).toLocaleString("default", { month: "long" });
      const monthlyRevenue = Products.reduce((totalRevenue, product) => {
        return totalRevenue + product.Product.salePrice * product.order_quantity;
      }, 0) * (role === "Admin" ? 0.1 : 0.9);
  
      const existingMonth = revenueByMonth.find((entry) => entry.month === orderMonth);
  
      if (existingMonth) {
        existingMonth.revenue += monthlyRevenue;
      } else {
        revenueByMonth.push({ month: orderMonth, revenue: monthlyRevenue });
      }
    }
  });
  

  const series = revenueByMonth.map((entry) => entry.revenue);
  const categories = revenueByMonth.map((entry) => entry.month);

  return (
    <div className="mb-6 flex w-full flex-wrap md:flex-nowrap bg-white">
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
