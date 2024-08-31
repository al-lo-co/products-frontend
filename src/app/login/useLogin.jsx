"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { errorMessage } from '../utils/errorMessage';
import { login } from '@/services/Auth';

export const useLoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { status } = await login(loginForm.email, loginForm.password);

    if (status === 200) {
      router.push('/products');
    } else if (status === 401) {
      setError(errorMessage['invalidCredentials']);
    } else {
      setError(errorMessage['somethingWentWrong']);
    }
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target

    setLoginForm((prev) => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  return {
    loginForm,
    error,
    handleSubmit,
    handleOnChange
  }
}