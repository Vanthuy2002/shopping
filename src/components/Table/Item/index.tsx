import { TrashIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Discount from 'src/components/Discount';
import { CountProducts } from 'src/components/Products/Detail';
import Button from 'src/modules/Button';
import { getSingleProduct } from 'src/services/products.sevice';
import { getNewPrice } from 'src/utils/constants';

const TableItem = ({ id, quantity }: { id?: number; quantity?: number }) => {
  const { data } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getSingleProduct(id as number),
  });

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='flex items-center gap-3 p-4'>
        <img
          src={data?.images[0]}
          alt={data?.title}
          className='flex-shrink-0 object-cover w-32 rounded h-28'
        />
        <FlexLayout className='flex-col gap-y-2 !items-start'>
          <Link
            to={`/product/${id}`}
            className='text-base font-semibold text-gray-600 dark:text-white'
          >
            {data?.title}
          </Link>
          <Discount text={`${data?.discountPercentage}%`} />
        </FlexLayout>
      </td>
      <td className='px-6 py-4'>
        <CountProducts quantity={quantity as number} />
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
        ${getNewPrice(data?.price, data?.discountPercentage)}
      </td>
      <td className='px-6 py-4'>
        <Button variant='remove' size='normal'>
          <TrashIcon className='w-6 h-6' />
        </Button>
      </td>
    </tr>
  );
};

export default TableItem;
