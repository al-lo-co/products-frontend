"use client"

import { useProductForm } from "./useProductForm";

export const ProductForm = ({ onSubmit, initialData = { name: '', description: '', price: '' }, initialDeleteButton = false }) => {
  const {
    handleSubmit,
    handleDeleteProduct,
    handleOnChange,
    productForm
  } = useProductForm({ initialData, onSubmit })

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-xl mx-auto mt-4 p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className=''>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" value={productForm.name} onChange={handleOnChange} name="name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" value={productForm.description} onChange={handleOnChange} name="description" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="number" value={productForm.price} onChange={handleOnChange} name="price" />
        </div>
        <div className='flex items-center justify-between px-4'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
          {initialDeleteButton && (<button className="bg-red-500 text-white px-4 py-2 rounded-md my-5" onClick={handleDeleteProduct} type="reset">Delete</button>)}
        </div>
      </form>
    </div>
  );
};