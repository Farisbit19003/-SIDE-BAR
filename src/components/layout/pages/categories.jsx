import React from 'react';
import AdminLayout from '../admin';
import { Link } from 'react-router-dom';
import CatTable from '../../comp/category/categoryTable';

const Categories = () => {
  return (
    <AdminLayout>
    <div className='flex mb-4 flex-row bg-white shadow justify-between p-3 items-center'>
     <h1 className='text-[#248F59] font-serif text-3xl'>Categories</h1>
   
    <button className='bg-[#248F59] font-sans uppercase text-[#FFFFFF] p-3'>
      <Link to="/categories/create">Add Categories</Link>
    </button>
    </div>
    <div className='flex w-full'>    <CatTable/></div>

    </AdminLayout>
  );
};

export default Categories;
