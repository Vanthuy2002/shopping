import Typography from 'src/components/Typography';

interface PriceProps {
  oldPrice?: number | undefined;
  newPrice: number | undefined;
}

const PriceDetails = ({ oldPrice, newPrice }: PriceProps) => {
  return (
    <div>
      <Typography as='p' className='text-2xl font-semibold text-[#6a983c]'>
        {newPrice} USD
      </Typography>
      <Typography
        as='span'
        className='line-through text-xs font-semibold text-gray-500'
      >
        {oldPrice} USD
      </Typography>
    </div>
  );
};

export default PriceDetails;
