import React,{useState, useEffect} from "react";
import ShopLayout from "../../layout/Shop/index"
import { BiSearch } from "react-icons/bi";
import { OrderTable } from "../../comp/orders/orderTable";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PurchaseOrderTable } from "../../comp/Purchase/Table";
const Purchase = () => {
  const [orders, setOrders] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { allOrders } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (allOrders && allOrders.length) {
      const update = allOrders?.filter((c) => {
        return c.orderType === "Purchase";
      });
      
      const sortedOrders = update?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // Compare the dates in descending order for newest orders on top
      });
      
      setOrders(sortedOrders);
      
      // const catWithShop = category?.filter((c) => {
      //   return allShops?.some((shop) => shop.category._id === c._id);
      // });
      // setOk(catWithShop);
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
           Purchase Orders
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
        <div className=" flex ">
<button className="bg-[#248F59] w-full px-4 py-2 sm:py-3 rounded-md text-sm sm:text-base whitespace-nowrap flex justify-center items-center font-sans uppercase text-[#f2f2f2]">
  <Link to="/purchase/add">Add Purchase</Link>
</button>
</div>
      </div>
      <PurchaseOrderTable orders={orders} Searched={Searched} keyword={keyword} />
    </ShopLayout>
  );
};

export default Purchase;
