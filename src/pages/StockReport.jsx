import { Pagination } from "antd";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import {
  DeleteProduct,
  SellerProducts,
} from "../components/Products/functions";
import { ProductsTable } from "../components/Products/productsTable";
import FilterButton from "../components/common/FilterButton";
import Search from "../components/common/Search";
import ShopLayout from "../layout/Shop/index";

const StockReport = () => {
  const [products, setProducts] = useState([]);
  const [listproducts, setListProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [Shops, setShops] = useState([]);
  const { product, sellerShops, allOrders } = useSelector((state) => ({
    ...state,
  }));
  const [ok, setOk] = useState([]);
  const dispatch = useDispatch();
  const update = product?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const onShopChange = (e) => {
    if (e.target.value === "select") {
      product && setProducts(product);
      product && setListProducts(product);
      return;
    }
    const filter = product?.filter((p) => {
      return p.store._id === e.target.value;
    });
    filter && setProducts(filter);
    filter && setListProducts(filter);
  };

  const onProductChange = (e) => {
    if (e.target.value === "select") {
      product && setProducts(listproducts);
      product && setListProducts(listproducts);
      return;
    }
    const filter = product?.filter((p) => {
      return p._id === e.target.value;
    });
    filter && setProducts(filter);
  };

  useEffect(() => {
    setShops(sellerShops);
  }, [sellerShops]);

  useEffect(() => {
    if (product && product.length) {
      setProducts(product);
      setListProducts(product);
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

  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
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
    <>
      <ShopLayout>
        <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              Stock Report
            </h1>
          </div>
          <Search setKeyword={setKeyword} />
        </div>
        {/*Filter Button  */}
        <FilterButton onClick={toggleVisibility} />
        
        {isHidden ? null : (
          <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
            <div>
              <h1 className="font-serif font-normal text-3xl text-[#248F59]">
                Filter By:
              </h1>
            </div>

            <div className="flex flex-col px-2 py-2 md:flex-row gap-2 justify-center  items-center">
              <label className="font-semibold mr-2">Shops</label>
              <select
                type="text"
                onChange={onShopChange}
                name="store"
                id="shopSelect"
                className="h-12 mb-2 focus:border-none text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              >
                <option value="select">--Select--</option>
                {Shops?.map((shop) => (
                  <option key={shop._id} value={shop._id}>
                    {shop.Storename}
                  </option>
                ))}
              </select>

              <label className="font-semibold mr-2">Products</label>
              <select
                type="text"
                onChange={onProductChange}
                name="store"
                id="productSelect"
                className="h-12 mb-2 focus:border-none text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              >
                <option value="select">--Select--</option>
                {listproducts?.map((p) => (
                  <option key={p._id} value={p._id}>
                    {p.name}
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
          page="Stock"
        />

        <div className="text-center">
          <Pagination
            current={page}
            onChange={(value) => setPage(value)}
            total={totalposts}
          />
        </div>
      </ShopLayout>
    </>
  );
};

export default StockReport;
