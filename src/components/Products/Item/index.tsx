import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { ProductItemsProps } from 'src/utils/types';

const ProductItems = ({
  id,
  title,
  desc,
  image,
  price,
}: Partial<ProductItemsProps>) => {
  return (
    <div className='bg-white p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link to={`/details/${id}`}>
        <img className='rounded-lg object-cover' src={image} alt={title} />
      </Link>
      <div className='mt-5'>
        <Link to={`/details/${id}`}>
          <Typography
            as='h5'
            className='mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white'
          >
            {title}
          </Typography>
        </Link>
        <Typography
          as='p'
          className='mb-3 text-xs text-gray-500 dark:text-gray-400'
        >
          {desc}
        </Typography>

        <FlexLayout className='justify-between'>
          <Typography as='h3' className='text-lg font-semibold'>
            {price} USD
          </Typography>
          <Button variant='secondary'>Add to cart</Button>
        </FlexLayout>
      </div>
    </div>
  );
};

export default ProductItems;
