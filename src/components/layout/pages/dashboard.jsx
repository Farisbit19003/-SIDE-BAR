import AdminLayout from "../admin";
import ShopLayout from "../../layout/Shop";
import Card from "../../comp/Dashboard/card";
import Graph from "../../comp/Dashboard/graph";
import Table from "../../comp/Dashboard/table";
import { UserContext } from "../../../context";
import { useContext } from "react";
const Dashboard = () => {
const [state,setState]=useContext(UserContext)
const role=state&&state.user&&state.user.role;

  return (
    <>
    {role==="Admin"?
    <AdminLayout>
      {/* CARD */}
      <Card />
      {/* GRAPH */}
      <Graph />
      {/* TABLE */}
      <Table />
    </AdminLayout>
    :
    <ShopLayout>
      {/* CARD */}
      <Card />
      {/* GRAPH */}
      <Graph />
      {/* TABLE */}
      <Table />
    </ShopLayout>
  }
    </>
  );
};

export default Dashboard;
