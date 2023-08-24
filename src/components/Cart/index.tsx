import { Link } from 'react-router-dom';
import Typo from '../Typo';
import { useAppStore } from 'src/store';

const CartProducts = () => {
  const { carts } = useAppStore((state) => state);
  const totalProducts = carts?.items.length;

  return (
    <Link
      to='/cart'
      className='relative inline-flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer'
    >
      <img src='/cart.svg' alt='cart' className='object-cover w-6 h-6' />
      {(totalProducts as number) > 0 && (
        <Typo
          as='span'
          className='absolute top-0 right-0 w-5 h-5 leading-5 text-center text-white bg-red-500 rounded-full'
        >
          {totalProducts}
        </Typo>
      )}
    </Link>
  );
};

export default CartProducts;
