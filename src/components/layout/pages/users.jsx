import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { AllUsers, DeleteUser } from "../../comp/user/Userfunction";
import { UserTable } from "../../comp/user/userTable";
import AdminLayout from "../admin";
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
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <AdminLayout>
      <div className="p-3 md:p-6 mb-6 border rounded border-[#f2f2f2] flex flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Users
          </h1>
        </div>

        <div className="relative w-full max-w-md">
          <input
            onChange={handleSearchInputChange}
            type="search"
            placeholder="Type queries"
            className="w-full sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 px-3 sm:px-4 whitespace-pre-wrap my-2 text-gray-400 outline-none focus:outline-none active:outline-none"
          >
            <BiSearch size={25} className="inline-block align-middle" />
          </button>
        </div>
      </div>
      <UserTable
        ok={ok}
        handleDelete={handleDelete}
        users={users}
        Searched={Searched}
        keyword={keyword}
      />
    </AdminLayout>
  );
};

export default Users;
