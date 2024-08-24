"use client"

import { useState } from 'react';
import { deleteProduct } from '@/services/Api';
import { useParams, useRouter } from 'next/navigation';

export const ProductForm = ({ onSubmit, initialData = {}, initialDeleteButton = false }) => {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [price, setPrice] = useState(initialData.price || '');
  const router = useRouter()
  const params = useParams();
  const { id } = params;

  const handleDeleteProduct = async () => {
    await deleteProduct(id);
    router.push('/products');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price });
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-xl mx-auto mt-4 p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className=''>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='flex items-center justify-between px-4'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">Submit</button>
          {initialDeleteButton && (<button className="bg-red-500 text-white px-4 py-2 rounded-md my-5" onClick={handleDeleteProduct} type="reset">Delete</button>)}
        </div>
      </form>
    </div>
  );
};