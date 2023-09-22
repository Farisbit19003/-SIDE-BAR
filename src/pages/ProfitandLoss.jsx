import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { ProfitTable } from "../components/Profit/ProfitTable";
import FilterButton from "../components/common/FilterButton";
import Search from "../components/common/Search";
import Filters from "../components/common/filter";
import ShopLayout from "../layout/Shop";

const ProfitandLoss = () => {
  const [orders, setOrders] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const { sellerShops, allOrders, product } = useSelector((state) => ({
    ...state,
  }));
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
      return c.orderType === "Sales" && c.orderStatus !== "cancelled";
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
      setStartDate(null); // Reset the startDate
      setEndDate(null); // Reset the endDate
      document.getElementById("productSelect").value = "select";
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
      update && setOrders(update);
      return;
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
        return c.orderType === "Sales" && c.orderStatus !== "cancelled";
      });
      const sortedOrders = update?.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // Compare the dates in descending order for newest orders on top
      });
      setOrders(sortedOrders);
    }
  }, [allOrders]);

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
    <>
      <ShopLayout>
        <div className="p-3 md:p-6 mb-6 flex border border-[#f2f2f2] rounded flex-col sm:flex-row items-center justify-between bg-white ">
          <div>
            <h1 className="font-serif font-normal text-3xl text-[#248F59]">
              Profit and Loss Report
            </h1>
          </div>

          <Search setKeyword={setKeyword}/>
        </div>
         {/*Filter Button  */}
         <FilterButton onClick={toggleVisibility} />
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
        <ProfitTable
          orders={paginatedData}
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
      </ShopLayout>
    </>
  );
};

export default ProfitandLoss;
