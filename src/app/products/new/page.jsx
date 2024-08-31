"use client"

import { ProductForm } from "@/components/product/form/ProductForm";
import { useNewProductPage } from "./useNewProductPage";

const NewProductPage = () => {
  const { handleCreateProduct } = useNewProductPage()

  return (
    <ProductForm onSubmit={handleCreateProduct} />
  );
};

export default NewProductPage;