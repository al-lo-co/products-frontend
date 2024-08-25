"use client"
import { getProducts } from '@/services/Api';
import { ProductList } from '../components/product/ProductList';
import { ProtectedRoute } from '../components/shared/ProtectedRoute';
import { useEffect, useState } from 'react';
import { getToken } from '@/services/Auth';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const token = getToken()

  useEffect(() => {
    if (token) {
      const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
      };
      fetchProducts();
    }
  }, []);

  return (
    <ProtectedRoute>
      <ProductList products={products} />
    </ProtectedRoute>
  );
};

export default ProductsPage;
