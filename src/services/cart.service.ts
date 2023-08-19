import { api } from 'src/api';
import { CartProps } from 'src/utils/types';

const getCartProducts = async () => {
  const res = await api.get<CartProps>(`/carts/1`);
  return res.data;
};

export { getCartProducts };
