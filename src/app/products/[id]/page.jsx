"use client"

import { useEffect, useState } from 'react';
import { getProduct, updateProduct } from '@/services/Api';
import { ProductForm } from '@/app/components/product/ProductForm';
import { useParams, useRouter } from 'next/navigation';
import { ProtectedRoute } from '@/app/components/shared/ProtectedRoute';
import { getToken } from '@/services/Auth';

const ProductDetailPage = () => {
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