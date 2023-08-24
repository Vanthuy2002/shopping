import Typo from '../Typo';

const Discount = ({ text }: { text?: string }) => {
  return (
    <Typo
      as='span'
      className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
    >
      {text} off
    </Typo>
  );
};

export default Discount;
