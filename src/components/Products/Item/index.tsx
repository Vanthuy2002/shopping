import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Rating from 'src/components/Rating';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { getNewPrice } from 'src/utils/constants';
import { ReponseFromApi } from 'src/utils/types';

type ItemProducts = {
  item: Partial<ReponseFromApi>;
};

const ProductItems = ({ item }: ItemProducts) => {
  const {
    id,
    description,
    title,
    thumbnail,
    price,
    rating,
    discountPercentage,
  } = item;

  return (
    <FlexLayout className='p-4 flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link className='flex-shrink-0' to={`/product/${id}`}>
        <img
          className='rounded-lg object-cover w-[270px] h-[200px]'
          src={thumbnail}
          alt={title}
        />
      </Link>
      <div className='mt-5 flex flex-col flex-1'>
        <Link to={`/product/$${id}`}>
          <Typography
            as='h5'
            className='mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white'
          >
            {title}
          </Typography>
        </Link>
        <Typography
          as='p'
          className='mb-3 text-xs text-over text-gray-500 dark:text-gray-400'
        >
          {description}
        </Typography>

        <div className='mt-auto'>
          <Rating star={Math.floor(rating as number)} />

          <FlexLayout className='justify-between'>
            <Typography
              as='h3'
              className='text-lg font-semibold dark:text-white'
            >
              {getNewPrice(price, discountPercentage)} USD
            </Typography>
            <Button variant='secondary'>Add to cart</Button>
          </FlexLayout>
        </div>
      </div>
    </FlexLayout>
  );
};

export default ProductItems;
