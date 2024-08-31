"use client"

import { ProductForm } from '@/components/product/form/ProductForm';
import { useProductDetailPage } from './useProductDetailPage';

const ProductDetailPage = () => {
  const {
    product,
    handleUpdateProduct
  } = useProductDetailPage()

  if (!product) return (
    <>
      <div>Loading...</div>
    </>
  )

  return (
    <div>
      <ProductForm onSubmit={handleUpdateProduct} initialData={product} initialDeleteButton={true} />
    </div>
  );
};

export default ProductDetailPage;