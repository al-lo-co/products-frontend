"use client"
import { getProducts } from '@/services/Api';
import { useEffect, useState } from 'react';
import { getToken } from '@/services/Auth';


export const useProductsPage = () => {
  const [products, setProducts] = useState([]);
  const token = getToken()

  useEffect(() => {
    if (token) {
      const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
      };
      fetchProducts();
    }
  }, []);

  return ({ products })
}