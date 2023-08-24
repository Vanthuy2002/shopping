import Typo from 'src/components/Typo';

interface PriceProps {
  oldPrice?: number | undefined;
  newPrice: number | undefined;
}

const PriceDetails = ({ oldPrice, newPrice }: PriceProps) => {
  return (
    <div>
      <Typo as='p' className='text-2xl font-semibold text-[#6a983c]'>
        {newPrice} USD
      </Typo>
      <Typo
        as='span'
        className='line-through text-xs font-semibold text-gray-500'
      >
        {oldPrice} USD
      </Typo>
    </div>
  );
};

export default PriceDetails;
