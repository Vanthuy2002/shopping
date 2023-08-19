import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Button from 'src/modules/Button';

const CountProducts = ({ quantity }: { quantity: number; id?: number }) => {
  return (
    <FlexLayout className='space-x-3'>
      <Button size='md' variant='light'>
        <MinusIcon className='w-6 h-6' />
      </Button>
      <div>
        <input
          defaultValue={quantity}
          type='number'
          id='first_product'
          className='w-16 px-2 py-1 border-2 border-gray-200 rounded-md focus:border-purple-500'
          placeholder='1'
        />
      </div>
      <Button size='md' variant='light'>
        <PlusIcon className='w-6 h-6' />
      </Button>
    </FlexLayout>
  );
};

export default CountProducts;
