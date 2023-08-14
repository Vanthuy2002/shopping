import { api } from 'src/api';
import { ReponseFromApi } from 'src/utils/types';

const getProductsByCategories = async (categories: string, limit = 4) => {
  const res = await api.get(`products/category/${categories}?limit=${limit}`);
  const products: ReponseFromApi[] = res.data.products;
  return products;
};

const getSingleProduct = async (id: number) => {
  const res = await api.get<ReponseFromApi>(`/products/${id}`);
  return res.data;
};

export { getProductsByCategories, getSingleProduct };
