"use client"

import { useEffect, useState } from 'react';
import { getProduct, updateProduct } from '@/services/Api';
import { useParams, useRouter } from 'next/navigation';
import { getToken } from '@/services/Auth';

export const useProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const router = useRouter();
  const token = getToken()

  useEffect(() => {
    if (token) {
      if (id) {
        const fetchProduct = async () => {
          const { data, status } = await getProduct(id);
          if (status == 404) {
            router.push('/');
          } else {
            setProduct(data);
          }
        };
        fetchProduct();
      }
    }
  }, [id]);

  const handleUpdateProduct = async (updatedProduct) => {
    await updateProduct(id, updatedProduct);
    router.push('/products');
  };

  return ({
    product,
    handleUpdateProduct
  })
}