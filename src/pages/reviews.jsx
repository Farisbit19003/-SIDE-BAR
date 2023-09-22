import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import Search from "../components/common/Search";
import { ReviewTable } from "../components/reviews/reviewTable";
import ShopLayout from "../layout/Shop";
const Reviews = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { product } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (product && product.length) {
      const filter = product?.filter((r) => {
        return r?.rating?.length > 0;
      });
      filter && setProducts(filter);
    }
  }, [product]);

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
              Reviews
            </h1>
          </div>
          {/* SEARCH */}
          <Search setKeyword={setKeyword} />
        </div>
        <ReviewTable
          products={paginatedData}
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

export default Reviews;
