import { useQuery } from '@tanstack/react-query';
import { Fragment, useEffect } from 'react';
import FlexLayout from 'src/Layout/Flex';
import BlankItem from 'src/components/NotFound/BlankItem';
import TableItem from 'src/components/Table/Item';
import Button from 'src/modules/Button';
import { getCartProducts } from 'src/services/cart.service';
import { useAppStore } from 'src/store';
import { createUUID } from 'src/utils/constants';

const CartPage = () => {
  const setCarts = useAppStore((state) => state.setCarts);
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartProducts,
  });

  useEffect(() => {
    if (data) {
      setCarts(data);
    }
  }, [data, setCarts]);
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
            {data?.items.length === 0 ? (
              <BlankItem />
            ) : (
              <Fragment>
                {data &&
                  data.items.length > 0 &&
                  data.items.map((item) => (
                    <TableItem
                      key={createUUID()}
                      id={item.productId}
                      quantity={item.quantity}
                      cartData={data}
                    />
                  ))}
              </Fragment>
            )}
          </tbody>
        </table>
      </div>
      <FlexLayout className='justify-end mt-4'>
        <Button size='lg'>Check Out</Button>
      </FlexLayout>
    </section>
  );
};

export default CartPage;
