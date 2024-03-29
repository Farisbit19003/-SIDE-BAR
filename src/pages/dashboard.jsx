import { useSelector } from "react-redux";
import Card from "../components/Dashboard/card";
import Graph from "../components/Dashboard/graph";
import Table from "../components/Dashboard/table";
import ShopLayout from "../layout/Shop";
import AdminLayout from "../layout/admin";

const Dashboard = () => {
  
  const { loggedIn } = useSelector((state) => ({ ...state }));
  const role = loggedIn && loggedIn.user && loggedIn.user.role;
  return (
    <>
      {role === "Admin" ? (
        <AdminLayout>
          {/* CARD */}
          <Card />
          {/* GRAPH */}
          <Graph />
          {/* TABLE */}
        </AdminLayout>
      ) : (
        <ShopLayout>
          {/* CARD */}
          <Card />
          {/* GRAPH */}
          <Graph />
          {/* TABLE */}
          <Table />
        </ShopLayout>
      )}
    </>
  );
};

export default Dashboard;
