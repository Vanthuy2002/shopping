import { Link } from 'react-router-dom';

const CartProducts = () => {
  return (
    <Link
      to='/cart'
      className='inline-flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer'
    >
      <img src='/cart.svg' alt='' className='object-cover w-6 h-6' />
    </Link>
  );
};

export default CartProducts;
