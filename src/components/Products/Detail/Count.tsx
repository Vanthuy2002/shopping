import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Button from 'src/modules/Button';

const CountProducts = () => {
  return (
    <FlexLayout className='space-x-3'>
      <Button size='md' variant='light'>
        <MinusIcon className='w-6 h-6' />
      </Button>
      <div>
        <input
          type='text'
          id='first_product'
          className='px-2 py-1 w-16 rounded-md border-2 border-gray-200 focus:border-purple-500'
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
