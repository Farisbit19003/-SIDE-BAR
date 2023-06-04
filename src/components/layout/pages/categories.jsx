import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import CatTable from "../../comp/category/categoryTable";
import { AllCategory, DeleteCategory } from "../../comp/category/functions";
import AdminLayout from "../admin";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { category, allShops } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (category && category.length) {
      setCategories(category);
      const catWithShop = category?.filter((c) => {
        return allShops?.some((shop) => shop.category._id === c._id);
      });
      setOk(catWithShop);
    }
  }, [category, allShops]);

  const handleDelete = (slug) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        DeleteCategory(slug)
          .then((res) => {
            swal("Deleted SuccessFully", {
              icon: "success",
            });
            AllCategory(dispatch);
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
      <div className="p-3 md:p-6 mb-6 flex  border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Categories
          </h1>
        </div>
        <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
          <div className="relative">
            <input
              onChange={handleSearchInputChange}
              type="search"
              placeholder="Type queries"
              className=" sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 px-3 sm:px-4 whitespace-pre-wrap  my-2 text-gray-400 outline-none focus:outline-none active:outline-none"
            >
              <BiSearch size={25} className="inline-block align-middle" />
            </button>
          </div>
          <div className=" flex ">
            <button className="bg-[#248F59] transition-transform hover:scale-95 hover:text-white w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#FFFFFF]">
              <Link to="/categories/create">Add Categories</Link>
            </button>
          </div>
        </div>
      </div>
      <CatTable
        ok={ok}
        category={categories}
        handleDelete={handleDelete}
        Searched={Searched}
        keyword={keyword}
      />
    </AdminLayout>
  );
};

export default Categories;
