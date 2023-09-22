import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import Search from "../components/common/Search";
import { AllUsers, DeleteUser } from "../components/user/Userfunction";
import { UserTable } from "../components/user/userTable";
import AdminLayout from "../layout/admin";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [ok, setOk] = useState([]);
  const { allusers, allShops, allOrders } = useSelector((state) => ({
    ...state,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (allusers && allusers.length) {
      setUsers(allusers);
      const usersWithShopAndOrders = allusers?.filter((user) => {
        const hasAssociatedShop = allShops?.some(
          (shop) => shop.user._id === user._id
        );
        const hasAssociatedOrder = allOrders?.some(
          (order) => order?.orderBy?._id === user._id
        );
        return hasAssociatedShop || hasAssociatedOrder;
      });

      setOk(usersWithShopAndOrders);
    }
  }, [allusers, allShops]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        DeleteUser(id)
          .then((res) => {
            swal("Deleted SuccessFully", {
              icon: "success",
            });
            AllUsers(dispatch);
          })
          .catch((error) => {
            toast.error(error);
          });
      }
    });
  };

  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(15);
  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalposts = users?.length ? ((users.length / 15) * 10).toFixed() : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData = users?.slice(startIndex, endIndex);
  return (
    <>
      <AdminLayout>
        <div className="p-3 md:p-6 mb-6 border rounded border-[#f2f2f2] flex flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              Users
            </h1>
          </div>
          {/* SEARCH */}
          <Search setKeyword={setKeyword} />
        </div>
        <UserTable
          ok={ok}
          handleDelete={handleDelete}
          users={paginatedData}
          Searched={Searched}
          keyword={keyword}
        />

        <div className="text-center">
          <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            total={totalposts}
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default Users;
