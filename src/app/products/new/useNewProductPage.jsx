
import { createProduct } from "@/services/Api";
import { useRouter } from "next/navigation";

export const useNewProductPage = () => {
  const router = useRouter();

  const handleCreateProduct = async (createdProduct) => {
    await createProduct(createdProduct);
    router.push('/products');
  };

  return ({
    handleCreateProduct
  })
}
