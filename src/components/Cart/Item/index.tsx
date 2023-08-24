import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Typo from 'src/components/Typo';
import { imagesPlaceholder } from 'src/utils/constants';

type CartItemsProps = {
  title: string;
  desc: string;
  price: number | string;
  image?: string;
  id: string | number;
};

const CartItem = ({
  title,
  desc,
  price,
  id,
  image = imagesPlaceholder,
}: CartItemsProps) => {
  return (
    <FlexLayout className='space-x-4'>
      <Link to={`/product/${id}`} className='flex-shrink-0'>
        <img className='w-8 h-8 rounded-full' src={image} alt='cart' />
      </Link>
      <div className='flex-1 min-w-0'>
        <Link
          to={`/product/${id}`}
          className='text-sm font-medium text-gray-900 truncate dark:text-white'
        >
          {title}
        </Link>
        <Typo
          as='p'
          className='text-sm text-gray-500 truncate dark:text-gray-400'
        >
          {desc}
        </Typo>
      </div>
      <Typo
        as='p'
        className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'
      >
        {price} $
      </Typo>
    </FlexLayout>
  );
};

export default CartItem;
