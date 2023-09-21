import { useEffect, useState } from "react";
import { BsFilterSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { DeleteProduct, SellerProducts } from "../components/Products/functions";
import { ProductsTable } from "../components/Products/productsTable";
import ShopLayout from "../layout/Shop/";
import { Pagination } from "antd";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [Shops, setShops] = useState([]);
  const [categories, setCategories] = useState([]);
  const { product, sellerShops, category, allOrders } = useSelector(
    (state) => ({
      ...state,
    })
  );
  const [ok, setOk] = useState([]);
  const dispatch = useDispatch();
  const update = product?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const onShopChange = (e) => {
    if (e.target.value === "select") {
      return setProducts(product);
    }
    const filter = update?.filter((p) => {
      return p.store._id === e.target.value;
    });
    filter && setProducts(filter);
    document.getElementById("categorySelect").value = "select";
  };
  const onCatChange = (e) => {
    if (e.target.value === "select") {
      return setProducts(product);
    }
    const filter = update?.filter((p) => {
      return p.category._id === e.target.value;
    });
    filter && setProducts(filter);
    document.getElementById("shopSelect").value = "select";
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setCategories(category);
    setShops(sellerShops);
  }, [sellerShops, category]);
  useEffect(() => {
    if (product && product.length) {
      setProducts(update);
      const productWithOrder = product?.filter((p) => {
        const hasAssociatedOrder = allOrders?.some((order) =>
          order?.Products?.some((pro) => pro?.Product?._id === p?._id)
        );
        return hasAssociatedOrder;
      });
      setOk(productWithOrder);
    }
  }, [product]);

  const handleDelete = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        DeleteProduct(item)
          .then((res) => {
            swal("Deleted SuccessFully", {
              icon: "success",
            });
            SellerProducts(dispatch);
          })
          .catch((error) => {
            toast.error(error);
          });
      }
    });
  };
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c?.name?.toLowerCase().includes(keyword);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(15);
  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalposts = products?.length
    ? ((products.length / 15) * 10).toFixed()
    : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData = products?.slice(startIndex, endIndex);
  return (
    <ShopLayout>
      <div className="p-3 md:p-6 mb-6 flex border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Products
          </h1>
        </div>

        <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
          <div className="relative">
            <input
              onChange={handleSearchInputChange}
              type="search"
              placeholder="Type queries"
              className="sm:py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#248f59] w-full"
            />
          </div>

          <div className=" flex ">
            <button className="bg-[#248F59] transition-transform hover:scale-95 w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase hover:text-white text-[#f2f2f2]">
              <Link to="/products/add">Add Products</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Button to toggle visibility */}
      <div className="flex items-center mb-1 justify-end">
        <button onClick={toggleVisibility}>
          <BsFilterSquare color="green" size={25} />
        </button>
      </div>

      {isHidden ? null : (
        <div className="p-3 md:p-6 mb-6 flex border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              Filter By
            </h1>
          </div>

          <div className="flex flex-col px-2 py-2 md:flex-row gap-2 justify-center  items-center">
            <label className="font-semibold mr-2">Shops</label>

            <select
              type="text"
              onChange={onShopChange}
              name="store"
              id="shopSelect"
              className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            >
              <option value="select">--Select--</option>
              {Shops?.map((shop) => (
                <option key={shop._id} value={shop._id}>
                  {shop.Storename}
                </option>
              ))}
            </select>
            <label className="font-semibold mr-2">Category</label>

            <select
              type="text"
              onChange={onCatChange}
              name="store"
              id="categorySelect"
              className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            >
              <option value="select">--Select--</option>
              {categories?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <ProductsTable
        products={paginatedData}
        handleDelete={handleDelete}
        Searched={Searched}
        keyword={keyword}
        ok={ok}
      />
      <div className="row">
        <div className="col text-center mb-5">
          <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            total={totalposts}
          />
        </div>
      </div>
    </ShopLayout>
  );
};

export default Products;
