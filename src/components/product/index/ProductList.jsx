import Link from 'next/link';
import { useProductList } from './useProductList';

export const ProductList = ({ products }) => {
  const { handleDelete } = useProductList()

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-xl mx-auto mt-4">
      <div className="flex items-center justify-between p-4">
        <div className='my-5 text-2xl'>Products</div>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-md" href="/products/new">Create New Product</Link>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="py-5 px-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">{product.name}</h3>
                <Link className="font-medium text-indigo-600 hover:text-indigo-500" href={`/products/${product.id}`}>Edit</Link>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="mt-1 max-w-2xl text-sm text-gray-500">${product.price}</p>
                < button className="font-medium text-red-600 hover:text-indigo-500" onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))
        }
      </ul >
    </div >
  );
};