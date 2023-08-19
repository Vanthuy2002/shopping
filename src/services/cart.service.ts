import { api } from 'src/api';
import { CartProps } from 'src/utils/types';

const getCartProducts = async (id: number) => {
  const res = await api.get<CartProps>(`/carts/${id}`);
  return res.data;
};

export { getCartProducts };
