import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: { 'Content-Type': 'application/json' },
});

export const apiProduct = axios.create({
  baseURL: 'https://dummyjson.com/products',
  headers: { 'Content-Type': 'application/json' },
});
