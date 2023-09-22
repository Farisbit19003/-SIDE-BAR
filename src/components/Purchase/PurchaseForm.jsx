import { useState } from "react";
import Card from "../common/cards";
import Description from "../common/discription";
import { AddPurchaseTable } from "./AddPurchaseTable";

const PurchaseForm = ({ shops, values, setValues, product }) => {
  
  const [products, setProducts] = useState([]);
  const { store, order_address } = values;

  const onShopChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const filter = product?.filter((p) => {
      return p.store._id === e.target.value;
    });
    filter && setProducts(filter);
    const updatedProducts = filter.map((p) => {
      return {
        Product: p._id, // Set the product ID
        order_quantity: p.quantity, // Initialize the order quantity as an empty string
      };
    });

    setValues((prevValues) => ({
      ...prevValues,
      Products: updatedProducts, // Update the Products field in the state
    }));
  };

    const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form>
        {/* SHOP AND PRODUCTS */}
        <div className="my-2 flex flex-wrap border-b-2 border-dashed  pb-8 sm:my-8">
          <div className="flex sm:pe-4 md:pe-5  w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
            <Description
              title={"Shop & Products"}
              details={"Select shop and products from here"}
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
                className="h-12 my-2  bg-white border !outline-none border-[#f2f2f2] rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              >
                <option>--Select--</option>
                {shops &&
                  shops.map((shop) => (
                    <option key={shop._id} value={shop._id}>
                      {shop.Storename}
                    </option>
                  ))}
              </select>
                {/* ADD PURCHASING PRODUCTS */}
              <label className="font-semibold ">Products</label>
              <AddPurchaseTable
                products={products}
                values={values}
                setValues={setValues}
              />
            </div>
          </Card>
        </div>

        {/* ADDRESS */}
        <div className="my-5 flex flex-wrap sm:my-8">
          <Description
            title={"Address"}
            details={"Add purshase's address"}
            className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
          />
          <Card>
            <div className="p-3 font-sans w-full flex flex-col">
              <label className="font-semibold ">Address</label>

              <input
                onChange={onChange}
                name="order_address"
                value={order_address}
                type="text"
                className="h-12 my-2  bg-white border !outline-none border-[#f2f2f2] rounded-lg px-3 py-2 text-lg font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-[#248f59]"
              />
            </div>
          </Card>
        </div>
      </form>
    </>
  );
};

export default PurchaseForm;
