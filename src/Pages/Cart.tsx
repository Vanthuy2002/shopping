import { TrashIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Discount from 'src/components/Discount';
import { CountProducts } from 'src/components/Products/Detail';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';

const CartPage = () => {
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
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='p-4 flex items-center gap-3'>
                <img
                  src='/avatar.jpg'
                  alt='Apple Watch'
                  className='w-32 flex-shrink-0 h-full object-cover rounded'
                />
                <FlexLayout className='flex-col gap-y-2 !items-start'>
                  <Typography
                    as='span'
                    className='font-semibold text-base text-gray-600 dark:text-white'
                  >
                    Apple Watch
                  </Typography>
                  <Discount text='20%'></Discount>
                </FlexLayout>
              </td>
              <td className='px-6 py-4'>
                <CountProducts />
              </td>
              <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                $599
              </td>
              <td className='px-6 py-4'>
                <Button variant='remove' size='normal'>
                  <TrashIcon className='w-6 h-6' />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CartPage;
