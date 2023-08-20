import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Discount from 'src/components/Discount';
import { CountProducts } from 'src/components/Products/Detail';
import Button from 'src/modules/Button';
import { updateProductQuantity } from 'src/services/cart.service';
import { getSingleProduct } from 'src/services/products.sevice';
import { getNewPrice } from 'src/utils/constants';
import { CartProps } from 'src/utils/types';
import { toast } from 'react-toastify';

const TableItem = ({
  id,
  quantity,
  cartData,
}: {
  id?: number;
  quantity?: number;
  cartData: CartProps;
}) => {
  const [Qty, setQty] = useState<number>(quantity || 0);

  const { data } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getSingleProduct(id as number),
  });

  const mutation = useMutation({
    mutationKey: ['carts', id],
    mutationFn: () => updateProductQuantity(cartData, id as number, Qty),
  });

  const update = () => {
    toast.success('Update carts succeed!!');
    mutation.mutate();
  };

  const priceProducts = getNewPrice(data?.price, data?.discountPercentage);
  const newPrice = Number(priceProducts) * Qty;

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='flex items-center gap-3 p-4'>
        <img
          src={data?.images[0]}
          alt={data?.title}
          className='flex-shrink-0 object-cover w-24 h-24 rounded'
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
        <CountProducts quantity={Qty} setQuantyti={setQty} />
      </td>
      <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
        ${newPrice}
      </td>
      <td className='px-6 py-4'>
        <FlexLayout className='gap-2'>
          <Button onClick={update} variant='secondary' size='normal'>
            <CheckCircleIcon className='w-6 h-6' />
          </Button>
          <Button variant='remove' size='normal'>
            <TrashIcon className='w-6 h-6' />
          </Button>
        </FlexLayout>
      </td>
    </tr>
  );
};

export default TableItem;
