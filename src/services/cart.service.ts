import { api } from 'src/api';
import { CartFromApi } from 'src/utils/types';

const getCartFromApi = async (page: number) => {
  const res = await api.get<CartFromApi>(`/carts/${page}`);
  return res.data;
};

const updateQuantity = async (
  quantity: number,
  idCart: number,
  idProduct: number
) => {
  const res = await api.put<CartFromApi>(`/carts/${idCart}`, {
    merge: true,
    products: [{ id: idProduct, quantity: quantity }],
  });
  return res.data;
};

export { getCartFromApi, updateQuantity };
