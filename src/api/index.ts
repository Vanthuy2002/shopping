import axios from 'axios';

export const apiProduct = axios.create({
  baseURL: 'https://dummyjson.com/products',
  headers: { 'Content-Type': 'application/json' },
});
