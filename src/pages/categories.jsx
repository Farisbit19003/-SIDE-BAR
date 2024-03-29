import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import CatTable from "../components/category/categoryTable";
import { AllCategory, DeleteCategory } from "../components/category/functions";
import Search from "../components/common/Search";
import AdminLayout from "../layout/admin";

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

  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(15);
  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalposts = categories?.length
    ? ((categories.length / 15) * 10).toFixed()
    : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData = categories?.slice(startIndex, endIndex);

  return (
    <>
      <AdminLayout>
        <div className="p-3 md:p-6 mb-6 flex  border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              Categories
            </h1>
          </div>
          {/* SEARCH */}
          <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
            <Search setKeyword={setKeyword} />
            {/* ADD CATEGORY */}
            <div className=" flex ">
              <button className="bg-[#248F59] transition-transform hover:scale-95 hover:text-white w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#F2F2F2]">
                <Link to="/categories/create">Add Categories</Link>
              </button>
            </div>
          </div>
        </div>
        {/* CATEGORY TABLE */}
        <CatTable
          ok={ok}
          category={paginatedData}
          handleDelete={handleDelete}
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

export default Categories;
