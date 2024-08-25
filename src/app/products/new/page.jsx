"use client"

import { ProtectedRoute } from "@/app/components/shared/ProtectedRoute";
import { useNewProductPage } from "./useNewProductPage";
import { ProductForm } from "@/app/components/product/form/ProductForm";

const NewProductPage = () => {
  const { handleCreateProduct } = useNewProductPage()

  return (
    <ProtectedRoute>
      <ProductForm onSubmit={handleCreateProduct} />
    </ProtectedRoute>
  );
};

export default NewProductPage;