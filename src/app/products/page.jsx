"use client"

import { ProductList } from '@/components/product/index/ProductList';
import { useProductsPage } from './useProductsPage';

const ProductsPage = () => {
  const { products } = useProductsPage()

  return (
    <ProductList products={products} />
  );
};

export default ProductsPage;
