import Input from 'src/modules/Input';
import { FormControl } from 'src/modules/Form';
import { useToggle, useOnClickOutside } from 'usehooks-ts';
import CartItem from './Item';
import { createUUID } from 'src/utils/constants';
import { useRef } from 'react';

const CartProducts = () => {
  const [show, toggle, setShow] = useToggle(false);
  const ref = useRef(null);

  const handleCLickOut = () => setShow(false);
  useOnClickOutside(ref, handleCLickOut);

  return (
    <section ref={ref} className='relative p-2 '>
      <img
        src='/cart.svg'
        alt='cart'
        onClick={toggle}
        className='object-cover w-6 h-6 cursor-pointer'
      />

      {show && (
        <div className='absolute z-10 min-w-[400px] min-h-[400px] bg-white rounded-lg shadow -translate-x-[80%] w-60 dark:bg-gray-700'>
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
