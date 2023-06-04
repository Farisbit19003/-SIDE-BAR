import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";
import { BsFilterSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { DeleteProduct, SellerProducts } from "../../comp/Products/functions";
import { ProductsTable } from "../../comp/Products/productsTable";
import ShopLayout from "../../layout/Shop/index";
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

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);
  return (
    <ShopLayout>
      <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Stock Report
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
        </div>
      </div>
      {/* Button to toggle visibility */}
      <div className="flex items-center mb-2 justify-end">
        <button onClick={toggleVisibility}>
          <BsFilterSquare color="green" size={25} />
        </button>
      </div>
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
              className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
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
              className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
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
        products={products}
        handleDelete={handleDelete}
        Searched={Searched}
        keyword={keyword}
        ok={ok}
        page="Stock"
      />
    </ShopLayout>
  );
};

export default StockReport;
