import { api } from 'src/api';
import { CartProps, ItemCartProps } from 'src/utils/types';

const getCartProducts = async () => {
  const res = await api.get<CartProps>(`/carts/1`);
  return res.data;
};

const updateProductQuantity = async (
  body: CartProps,
  idProducts: number,
  quantity: number
) => {
  const res = await api.put(`/carts/1`, {
    ...body,
    items: body.items.map((item) => {
      if (item.productId === idProducts) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    }),
  });
  return res.data;
};

const removeProductsInCart = async (body: CartProps, idProducts: number) => {
  const res = await api.put('/carts/1', {
    ...body,
    items: body.items.filter((item) => item.productId !== idProducts),
  });
  return res.data;
};

const addToCart = async (body: CartProps, data: ItemCartProps) => {
  if (body === null) return;
  const cloneItems = [...body.items, data];
  const res = await api.put('/carts/1', {
    ...body,
    items: cloneItems,
  });
  return res.data;
};

export {
  getCartProducts,
  updateProductQuantity,
  removeProductsInCart,
  addToCart,
};
