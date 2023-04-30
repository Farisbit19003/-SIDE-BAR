import React from 'react';
import AdminLayout from '../admin';
import SingleSearch from '../../comp/common/singleSearch';
import { ShopTable } from '../../comp/shop/shopsTable';


const Shops = () => {
  return (
    <AdminLayout>
    <div className="mb-8 flex flex-col">
        <div className="bg-white flex py-3 mx-auto shadow w-full  flex-col items-center md:flex-row">
          <div className="flex px-3 md:mb-0 md:w-3/4">
            <h1 className="text-4xl flex font-serif text-[#248F59] font-normal text-heading">
              Shops
            </h1>     
          </div>
          <div className="flex">
          <SingleSearch />
          </div>
        </div>
        <ShopTable/>
      </div>
    </AdminLayout>
  );
};

export default Shops;
