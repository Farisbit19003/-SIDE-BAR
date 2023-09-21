import { useEffect, useState } from "react";
import Card from "../common/cards";
import Description from "../common/discription";
import FileInput from "../common/fileInput";
const ProductForm = ({ shops, values, setValues, loading, setLoading }) => {
  const [categories, setCategories] = useState([]);
  const [featurepic, setFeaturepic] = useState([]);
  const [gallerypics, setGallerypics] = useState([]);
  const {
    name,
    discription,
    category,
    salePrice,
    purchasePrice,
    quantity,
    unit,
    store,
    gallery_pics,
    feature_pic,
  } = values;

  useEffect(() => {
    setValues({ ...values, feature_pic: featurepic[0] });
  }, [featurepic]);
  useEffect(() => {
    setValues({ ...values, gallery_pics: gallerypics });
  }, [gallerypics]);
  useEffect(() => {
    gallery_pics & setGallerypics(gallery_pics);
    feature_pic && setFeaturepic([feature_pic]);
  }, [feature_pic || gallery_pics]);
  const onShopChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const filter = shops?.filter((s) => {
      return s._id === e.target.value;
    });
    filter && setCategories([filter[0]?.category]);
  };
  useEffect(() => {
    const filter = shops?.filter((s) => {
      return s._id === store;
    });
    filter && setCategories([filter[0]?.category]);
    setValues({ ...values, store: store });
  }, [store]);
  const onChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    if (name === 'purchasePrice' || name === 'salePrice' || name === 'quantity' || name==="unit") {
      sanitizedValue = value.replace(/^[0\.\-+]+/, '');
    }
    setValues({ ...values, [e.target.name]: sanitizedValue });
  };
  return (
    <form>
      {/* Image */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Image"}
            details={"Upload your Product feature image here"}
          />
        </div>

        <Card>
          <FileInput
            image={featurepic}
            setImage={setFeaturepic}
            loading={loading}
            setloading={setLoading}
            keyPrefix="third"
          />
        </Card>
      </div>

      {/* Gallery */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Gallery"}
            details={"Upload your product image gallery here"}
          />
        </div>
        <Card>
          <FileInput
            image={gallerypics}
            setImage={setGallerypics}
            loading={loading}
            setloading={setLoading}
            keyPrefix="fourth"
            multiple="true"
          />
        </Card>
      </div>
      {/* GROUP AND CATEGORY */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Shop & Category"}
            details={"Select product Shop and categories from here"}
          />
        </div>
        <Card>
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold ">Shops</label>

            <select
              type="text"
              onChange={onShopChange}
              value={store}
              name="store"
              className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            >
              <option>--Select--</option>
              {shops &&
                shops.map((shop) => (
                  <option key={shop._id} value={shop._id}>
                    {shop.Storename}
                  </option>
                ))}
            </select>
            <label className="font-semibold ">Categories</label>

            <select
              onChange={onChange}
              name="category"
              value={category}
              type="text"
              className="h-12 mb-2  text-md bg-white border-gray-400 rounded-lg px-3 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            >
              <option className="">--Select--</option>
              {categories &&
                categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
                  </option>
                ))}
            </select>
          </div>
        </Card>
      </div>

      {/* DESCRIPTION */}
      <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
        <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
          <Description
            title={"Description"}
            details={
              "Add your product description and necessary information from here"
            }
          />
        </div>
        <Card>
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold ">Name</label>

            <input
              type="text"
              onChange={onChange}
              name="name"
              value={name}
              className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
            <label className="font-semibold ">Unit</label>

            <input
              onChange={onChange}
              name="unit"
              value={unit}
              type="text"
              className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
            <label className="font-semibold ">Description</label>

            <textarea
              onChange={onChange}
              name="discription"
              value={discription}
              className="my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
          </div>
        </Card>
      </div>

      {/* PRICE QUANTITY */}
      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={"Product Price Information"}
          details={"Add your product's sale and purchase price here."}
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />
        <Card>
          <div className="p-3 font-sans w-full flex flex-col">
            <label className="font-semibold">Purchase Price</label>
            <input
              onChange={onChange}
              name="purchasePrice"
              value={purchasePrice}
              type="number"
              className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />

            <label className="font-semibold">Sale Price</label>
            <input
              onChange={onChange}
              name="salePrice"
              value={salePrice}
              type="number"
              className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />

            <label className="font-semibold">Quantity</label>
            <input
              onChange={onChange}
              name="quantity"
              value={quantity}
              type="number"
              className="h-12 my-2  bg-white border border-gray-400 rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
            />
          </div>
        </Card>
      </div>
    </form>
  );
};

export default ProductForm;
