import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Typography from 'src/components/Typography';

const CountProducts = () => {
  return (
    <FlexLayout className='gap-3 rounded-md border-2 overflow-auto border-gray-300'>
      <button className='bg-[#d3f7af] p-2'>
        <PlusIcon className='w-6 h-6' />
      </button>
      <Typography as='span' className='font-bold text-xl'>
        0
      </Typography>
      <button className='bg-[#dbe4d2] p-2'>
        <MinusIcon className='w-6 h-6' />
      </button>
    </FlexLayout>
  );
};

export default CountProducts;
