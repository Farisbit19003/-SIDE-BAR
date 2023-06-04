import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { ReviewTable } from "../../comp/reviews/reviewTable";
import ShopLayout from "../../layout/Shop/index";

const Reviews = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { product, sellerShops, category, allOrders } = useSelector(
    (state) => ({
      ...state,
    })
  );
  useEffect(() => {
    if (product && product.length) {
      const filter = product?.filter((r) => {
        return r?.rating?.length > 0;
      });
      filter && setProducts(filter);
    }
  }, [product]);

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
            Reviews
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
      <ReviewTable products={products} Searched={Searched} keyword={keyword} />
    </ShopLayout>
  );
};

export default Reviews;
