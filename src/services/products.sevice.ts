import { api } from 'src/api';
import { ReponseFromApi } from 'src/utils/types';

const getProductsByCategories = async (categories: string, limit = 4) => {
  const res = await api.get<ReponseFromApi[]>(
    `/products?category=${categories}&_limit=${limit}`
  );
  const products = res.data;
  return products;
};

const getSingleProduct = async (id: number) => {
  const res = await api.get<ReponseFromApi>(`products/${id}`);
  return res.data;
};

const getAllCategory = async () => {
  const res = await api.get<string[]>(`/categories`);
  const listCategory = res.data;
  return listCategory;
};

const queryProducts = async (query: string) => {
  const res = await api.get(`/products?q=${query}`);
  const products: ReponseFromApi[] = res.data.products;
  return products;
};

const deleteProduct = async (id: number) => {
  await api.delete<ReponseFromApi>(`/products/${id}`);
};

export {
  getProductsByCategories,
  getSingleProduct,
  getAllCategory,
  queryProducts,
  deleteProduct,
};
