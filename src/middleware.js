import { NextResponse } from 'next/server'
import { getToken } from './services/Auth';

export async function middleware(request) {
  const accessToken = getToken()

  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/products')) {
    if (!accessToken) {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  } else if (url.pathname.startsWith('/login')) {
    if (accessToken) {
      url.pathname = '/products';
      return NextResponse.redirect(url);
    }
  }
}