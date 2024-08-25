import { useState } from 'react';
import { deleteProduct } from '@/services/Api';
import { useParams, useRouter } from 'next/navigation';

export const useProductForm = ({ initialData, onSubmit }) => {
  const [productForm, setProductForm] = useState(initialData)
  const router = useRouter()
  const params = useParams();
  const { id } = params;

  const handleDeleteProduct = async () => {
    await deleteProduct(id);
    router.push('/products');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productForm);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target

    setProductForm((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  return ({
    handleSubmit,
    handleDeleteProduct,
    handleOnChange,
    productForm
  })
}