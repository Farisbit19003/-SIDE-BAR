import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BsFilterSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../comp/common/filter";
import { OrderTable } from "../../comp/orders/orderTable";
import ShopLayout from "../../layout/Shop/index";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      const startOfDay = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate(),
        0,
        0,
        0
      );
      const endOfDay = new Date(
        end.getFullYear(),
        end.getMonth(),
        end.getDate(),
        23,
        59,
        59
      );
      if (
        document.getElementById("productSelect").value !== "select" ||
        document.getElementById("shopSelect").value !== "select"
      ) {
        const filter = orders
          ?.filter((o) => {
            const orderDate = new Date(o.createdAt);
            return orderDate >= startOfDay && orderDate <= endOfDay;
          })
          .sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA; // Compare the dates in descending order for newest orders on top
          });
        setOrders(filter);
      } else {
        const filter = update?.filter((o) => {
          const orderDate = new Date(o.createdAt);
          return orderDate >= startOfDay && orderDate <= endOfDay;
        });
        setOrders(filter);
      }
    }
  };

  const dispatch = useDispatch();
  const { sellerShops, allOrders, product } = useSelector((state) => ({
    ...state,
  }));
  const update = allOrders
    ?.filter((c) => {
      return c.orderType === "Sales";
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA; // Compare the dates in descending order for newest orders on top
    });
  const onShopChange = (e) => {
    if (e.target.value === "select") {
      update && setOrders(update);
      setProducts(product);
      document.getElementById("productSelect").value = "select";
      setStartDate(null); // Reset the startDate
      setEndDate(null); // Reset the endDate
      return;
    }
    setStartDate(null); // Reset the startDate
    setEndDate(null); // Reset the endDate
    const filter = allOrders?.filter((p) => {
      return p.store._id === e.target.value && p.orderType === "Sales";
    });
    filter && setOrders(filter);
    const profilter = product?.filter((p) => {
      return p.store._id === e.target.value;
    });
    profilter && setProducts(profilter);
  };
  const onProductChange = (e) => {
    if (e.target.value === "select") {
      return update && setOrders(update);
    }
    setStartDate(null); // Reset the startDate
    setEndDate(null); // Reset the endDate
    const filter = update?.filter((order) => {
      return order?.Products?.some((p) => p.Product?._id === e.target.value);
    });
    filter && setOrders(filter);
  };

  useEffect(() => {
    setProducts(product);
  }, [product]);
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

  const handleReset = (e) => {
    e.preventDefault();
    setStartDate(null);
    setEndDate(null);
    document.getElementById("productSelect").value = "select";
    document.getElementById("shopSelect").value = "select";
    setOrders(update);
  };
  return (
    <ShopLayout>
      <div className="p-3 md:p-6 mb-6 flex border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
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
        </div>
      </div>
      {/* Button to toggle visibility */}
      <div className="flex items-center justify-end mb-1">
        <button onClick={toggleVisibility}>
          <BsFilterSquare color="green" size={25} />
        </button>
      </div>
      {!isHidden && (
        <Filters
          sellerShops={sellerShops}
          products={products}
          startDate={startDate}
          endDate={endDate}
          onShopChange={onShopChange}
          onProductChange={onProductChange}
          onChange={onChange}
          handleReset={handleReset}
        />
      )}
      <div id="orderTable">
        <OrderTable orders={orders} Searched={Searched} keyword={keyword} />
      </div>{" "}
    </ShopLayout>
  );
};

export default Orders;
