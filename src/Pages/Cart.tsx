import { TrashIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Discount from 'src/components/Discount';
import Pagination from 'src/components/Pagination';
import { CountProducts } from 'src/components/Products/Detail';
import Button from 'src/modules/Button';
import { getCartFromApi } from 'src/services/cart.service';
import { deleteProduct } from 'src/services/products.sevice';
import { createUUID, getNewPrice } from 'src/utils/constants';

const CartPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['cart', page],
    queryFn: () => getCartFromApi(page),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 1,
  });

  const mutation = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
  });

  const products = data?.products;

  const handleDelete = (index: number, id: number) => {
    mutation.mutate(id);
    products?.splice(index, 1);
  };
  return (
    <section className='max-w-screen-xl mx-auto mt-5'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-md'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Product
              </th>
              <th scope='col' className='px-6 py-3'>
                Quantity
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <Fragment>
              {products &&
                products.map((product, index) => {
                  const newPrice = getNewPrice(
                    product.price,
                    product.discountPercentage
                  );
                  const totalPrice = (newPrice as number) * product.quantity;
                  return (
                    <tr
                      key={createUUID()}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                    >
                      <td className='p-4 flex items-center gap-3'>
                        <img
                          src='/avatar.jpg'
                          alt={product.title}
                          className='w-32 flex-shrink-0 h-full object-cover rounded'
                        />
                        <FlexLayout className='flex-col gap-y-2 !items-start'>
                          <Link
                            to={`/product/${product.id}`}
                            className='font-semibold text-base text-gray-600 dark:text-white'
                          >
                            {product.title}
                          </Link>
                          <Discount text={`${product.discountPercentage}%`} />
                        </FlexLayout>
                      </td>
                      <td className='px-6 py-4'>
                        <CountProducts quantity={product.quantity} />
                      </td>
                      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                        ${totalPrice.toFixed(2)}
                      </td>
                      <td className='px-6 py-4'>
                        <Button
                          onClick={() => handleDelete(index, product.id)}
                          variant='remove'
                          size='normal'
                        >
                          <TrashIcon className='w-6 h-6' />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </Fragment>
          </tbody>
        </table>
      </div>

      <Pagination page={page} setPage={setPage} />
    </section>
  );
};

export default CartPage;
