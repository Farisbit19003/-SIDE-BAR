import React,{useState, useEffect} from "react";
import ShopLayout from "../../layout/Shop/index"
import { BiSearch } from "react-icons/bi";
import { OrderTable } from "../../comp/orders/orderTable";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {sellerShops,allOrders,product } = useSelector((state) => ({
    ...state,
  }));
  const update = allOrders?.filter((c) => {
    return c.orderType === "Sales";
  });
  const onShopChange = (e) => {
    if (e.target.value === "select") {
      update&&setOrders(update);
      setProducts(product);
      document.getElementById("productSelect").value = "select";
      return;
    }
    const filter = allOrders?.filter((p) => {
      return p.store._id === e.target.value &&p.orderType==="Sales";
    });
    filter && setOrders(filter);
    const profilter = product?.filter((p) => {
      return p.store._id === e.target.value;
    });
    profilter&&setProducts(profilter);
  };
  const onProductChange = (e) => {
    if (e.target.value === "select") {
      return update&&setOrders(update);
    }
    const filter = update?.filter((order) => {
      return order?.Products?.some((p) => p.Product?._id === e.target.value);
    });
    filter && setOrders(filter);
  };
  
useEffect(()=>{
setProducts(product);
},[product])
  useEffect(() => {
    if (allOrders && allOrders.length) {
      const update = allOrders?.filter((c) => {
        return c.orderType === "Sales";
      });
      const sortedOrders = update?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // Compare the dates in descending order for newest orders on top
      }); 
      setOrders(sortedOrders);
    }
  }, [allOrders]);
  
  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const Searched = (keyword) => (c) => c._id.includes(keyword);

  return (
    <ShopLayout>
      <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Sales Report
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
      <div className="p-3 md:p-6 mb-6 flex shadow flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Filter
          </h1>
        </div>

        <div className="flex flex-col px-2 py-2 sm:flex-row gap-3 justify-center  items-center">
          <label className="font-semibold mr-2">Shops</label>

          <select
            type="text"
            onChange={onShopChange}
            name="store"
            id="shopSelect"
            className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="select">--Select--</option>
            {sellerShops?.map((shop) => (
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
  {products?.map((p) => (
    <option key={p._id} value={p._id}>
      {p.name}
    </option>
  ))}
</select>

        </div>
      </div>
      <OrderTable orders={orders} Searched={Searched} keyword={keyword} />
    </ShopLayout>
  );
};

export default Orders;
