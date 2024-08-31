import { deleteProduct } from '@/services/Api';

export const useProductList = () => {
  const handleDelete = async (id) => {
    await deleteProduct(id);
    window.location.reload();
  };

  return ({
    handleDelete
  })
}