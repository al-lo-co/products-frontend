"use client"

import { ProductForm } from "@/app/components/product/ProductForm";
import { ProtectedRoute } from "@/app/components/shared/ProtectedRoute";
import { createProduct } from "@/services/Api";
import { useRouter } from "next/navigation";

const NewProductPage = () => {
  const router = useRouter();

  const handleCreateProduct = async (createdProduct) => {
    await createProduct(createdProduct);
    router.push('/products');
  };

  return (
    <ProtectedRoute>
      <ProductForm onSubmit={handleCreateProduct} />
    </ProtectedRoute>
  );
};

export default NewProductPage;