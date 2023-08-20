import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Button from 'src/modules/Button';
import { IEvents } from 'src/utils/types';

const CountProducts = ({
  quantity,
  setQuantyti,
}: {
  quantity: number;
  setQuantyti: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleQuantity = (type: 'up' | 'down') => {
    type === 'up' ? setQuantyti(quantity + 1) : setQuantyti(quantity - 1);
  };

  const handleChange = (e: IEvents) => {
    setQuantyti(Number(e.target.value));
  };

  return (
    <FlexLayout className='space-x-3'>
      <Button onClick={() => handleQuantity('down')} size='md' variant='light'>
        <MinusIcon className='w-6 h-6' />
      </Button>
      <div>
        <input
          value={quantity}
          onChange={handleChange}
          type='number'
          id='first_product'
          className='w-16 px-2 py-1 border-2 border-gray-200 rounded-md focus:border-purple-500'
          placeholder='1'
        />
      </div>
      <Button onClick={() => handleQuantity('up')} size='md' variant='light'>
        <PlusIcon className='w-6 h-6' />
      </Button>
    </FlexLayout>
  );
};

export default CountProducts;
