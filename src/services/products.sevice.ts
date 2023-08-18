import { apiProduct } from 'src/api';
import { ReponseFromApi } from 'src/utils/types';

const getProductsByCategories = async (categories: string, limit = 4) => {
  const res = await apiProduct.get(`/category/${categories}?limit=${limit}`);
  const products: ReponseFromApi[] = res.data.products;
  return products;
};

const getSingleProduct = async (id: number) => {
  const res = await apiProduct.get<ReponseFromApi>(`/${id}`);
  return res.data;
};

const getAllCategory = async () => {
  const res = await apiProduct.get<string[]>(`/categories`);
  const listCategory = res.data;
  return listCategory;
};

const queryProducts = async (query: string) => {
  const res = await apiProduct.get(`/search?q=${query}`);
  const products: ReponseFromApi[] = res.data.products;
  return products;
};

const deleteProduct = async (id: number) => {
  await apiProduct.delete<ReponseFromApi>(`/${id}`);
};

export {
  getProductsByCategories,
  getSingleProduct,
  getAllCategory,
  queryProducts,
  deleteProduct,
};
