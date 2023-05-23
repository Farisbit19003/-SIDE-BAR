import React from "react";
import OrderViewHeader from "./orderdetail/order-view-header";
import ShopLayout from "../../layout/Shop";
import DetailPack from "./orderdetail/detailpack";
import { OrderDetailTable } from "./orderdetail/orderDetailTable";

const OrderDetail=()=>{
    return (
      <>
        <ShopLayout>
          <OrderViewHeader />
          <OrderDetailTable
            handleDelete={handleDelete}
            keyword={keyword}
            Searched={Searched}
            products={products}
            orders={orders}
          />
          <DetailPack />
        </ShopLayout>
      </>
    );
}
export default OrderDetail;