import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BsFilterSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PurchaseOrderTable } from "../../comp/Purchase/Table";
import Filters from "../../comp/common/filter";
import ShopLayout from "../../layout/Shop/index";
import { Pagination } from "antd";

const Purchase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [orders, setOrders] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { sellerShops, allOrders, product } = useSelector((state) => ({
    ...state,
  }));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
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
  const update = allOrders
    ?.filter((c) => {
      return c.orderType === "Purchase";
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
    const filter = update?.filter((p) => {
      return p.store._id === e.target.value;
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
        return c.orderType === "Purchase";
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
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(15);
  //Sort Products Based on Sold
  // calculate the start and end indexes of the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalposts = orders?.length
    ? ((orders?.length / 15) * 10).toFixed()
    : "";
  // extract a portion of the array based on the start and end indexes
  const paginatedData = orders?.slice(startIndex, endIndex);
  return (
    <ShopLayout>
      <div className="p-3 md:p-6 mb-6 flex border rounded border-[#f2f2f2] md:gap-2 sm:gap-3 flex-col sm:flex-row items-center justify-between bg-white ">
        <div>
          <h1 className="font-serif font-normal text-3xl text-[#248F59]">
            Purchase Report
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
        <div className=" flex ">
          <button className="bg-[#248F59] w-full px-4 transition-transform hover:scale-95  py-2 sm:py-3 rounded-md text-base sm:text-sm whitespace-nowrap flex justify-center items-center font-sans uppercase hover:text-white text-[#f2f2f2]">
            <Link to="/purchase/add">Add Purchase</Link>
          </button>
        </div>
      </div>

      {/* Button to toggle visibility */}
      <div className="flex mb-1 items-center justify-end">
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
      <PurchaseOrderTable
        orders={paginatedData}
        Searched={Searched}
        keyword={keyword}
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

export default Purchase;
