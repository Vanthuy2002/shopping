import FlexLayout from 'src/Layout/Flex';
import Discount from 'src/components/Discount';
import Button from 'src/modules/Button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { getSingleProduct } from 'src/services/products.sevice';
import { getNewPrice } from 'src/utils/constants';
import { Fragment, useState } from 'react';
import { CountProducts } from 'src/components/Products/Detail';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CartProps } from 'src/utils/types';
import {
  updateProductQuantity,
  removeProductsInCart,
} from 'src/services/cart.service';

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
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getSingleProduct(id as number),
  });

  const mutation = useMutation({
    mutationKey: ['carts', id],
    mutationFn: () => updateProductQuantity(cartData, id as number, Qty),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const actionDelete = useMutation({
    mutationFn: () => removeProductsInCart(cartData, id as number),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const deleteProducts = () => {
    actionDelete.mutate();
    toast.success('Delete products success!!');
  };

  const update = () => {
    mutation.mutate();
    toast.success('Update carts succeed!!');
  };

  const priceProducts = getNewPrice(data?.price, data?.discountPercentage);
  const newPrice = Number(priceProducts) * Qty;

  return (
    <Fragment>
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='flex items-center gap-3 p-4'>
          <img
            src={data?.images[0]}
            alt={data?.title}
            className='flex-shrink-0 object-cover w-24 h-24 rounded'
          />
          <FlexLayout className='flex-col gap-y-2 !items-start'>
            <Link
              to={`/product/${id}?cart=true`}
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
            <Button
              data-tooltip-id='action-btn'
              data-tooltip-content='Save Change'
              onClick={update}
              variant='secondary'
              size='normal'
            >
              <CheckCircleIcon className='w-6 h-6' />
            </Button>
            <Button
              data-tooltip-id='action-btn'
              data-tooltip-content='Remove'
              variant='remove'
              size='normal'
              onClick={deleteProducts}
            >
              <TrashIcon className='w-6 h-6' />
            </Button>
          </FlexLayout>
        </td>
        <Tooltip
          id='action-btn'
          render={({ content }) => <span>{content}</span>}
        />
      </tr>
    </Fragment>
  );
};

export default TableItem;
