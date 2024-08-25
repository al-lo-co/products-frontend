"use client"

import { ProtectedRoute } from '@/app/components/shared/ProtectedRoute';
import { useProductDetailPage } from './useProductDetailPage';
import { ProductForm } from '@/app/components/product/form/ProductForm';

const ProductDetailPage = () => {
  const {
    product,
    handleUpdateProduct
  } = useProductDetailPage()

  if (!product) return (
    <>
      <ProtectedRoute>
        <div>Loading...</div>
      </ProtectedRoute>
    </>
  )

  return (
    <div>
      <ProtectedRoute>
        <ProductForm onSubmit={handleUpdateProduct} initialData={product} initialDeleteButton={true} />
      </ProtectedRoute>
    </div>
  );
};

export default ProductDetailPage;