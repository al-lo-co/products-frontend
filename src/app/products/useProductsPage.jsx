"use client"
import { getProducts } from '@/services/Api';
import { useEffect, useState } from 'react';

export const useProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();

  }, []);

  return ({ products })
}