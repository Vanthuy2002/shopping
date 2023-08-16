import Input from 'src/modules/Input';
import { FormControl } from 'src/modules/Form';
import { useToggle, useOnClickOutside } from 'usehooks-ts';
import CartItem from './Item';
import { createUUID } from 'src/utils/constants';
import { useRef } from 'react';
import Typography from '../Typography';

const CartProducts = () => {
  const [show, toggle, setShow] = useToggle(false);
  const ref = useRef(null);

  const handleCLickOut = () => setShow(false);
  useOnClickOutside(ref, handleCLickOut);

  return (
    <section ref={ref} className='relative'>
      <span
        onClick={toggle}
        className='inline-flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer'
      >
        <img src='/cart.svg' alt='' className='object-cover w-6 h-6' />
      </span>

      {show && (
        <div className='absolute z-10 min-w-[400px] min-h-[400px] bg-white rounded-lg shadow -translate-x-[80%] translate-y-4 w-60 dark:bg-gray-700'>
          <Typography as='h2' className='p-3 text-xl font-bold dark:text-white'>
            My Cart
          </Typography>
          <FormControl className='p-3'>
            <Input placeholder='Search cart...' />
          </FormControl>

          <ul className='px-3 pb-3 overflow-y-auto text-sm text-gray-700 divide-y divide-gray-200 dark:divide-gray-700 dark:text-gray-200'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <li className='py-3 sm:py-4' key={index}>
                  <CartItem
                    id={createUUID()}
                    title='Vegetable very sweet'
                    desc='Lorem ipsum dolor sit amet consectetur'
                    price={100}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CartProducts;
