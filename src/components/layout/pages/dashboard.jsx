import React from "react";
import AdminLayout from "../admin";
import Card from "../../comp/Dashboard/card";
import Graph from "../../comp/Dashboard/graph";
import Table from "../../comp/Dashboard/table";
const Dashboard = () => {
  return (
    <AdminLayout>
      {/* CARD */}
      <Card />
      {/* GRAPH */}
      <Graph />
      {/* TABLE */}
      <Table />
    </AdminLayout>
  );
};

export default Dashboard;
