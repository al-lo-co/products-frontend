"use client"

import { ProductList } from '../components/product/index/ProductList';
import { ProtectedRoute } from '../components/shared/ProtectedRoute';
import { useProductsPage } from './useProductsPage';

const ProductsPage = () => {
  const { products } = useProductsPage()

  return (
    <ProtectedRoute>
      <ProductList products={products} />
    </ProtectedRoute>
  );
};

export default ProductsPage;
