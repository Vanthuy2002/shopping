import FlexLayout from 'src/Layout/Flex';
import { CountProducts } from 'src/components/Products/Detail';
import PriceDetails from 'src/components/Products/Detail/Price';
import Rating from 'src/components/Rating';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { getNewPrice } from 'src/utils/constants';
import { useQuery } from '@tanstack/react-query';
import { getSingleProduct } from 'src/services/products.sevice';
import { Fragment } from 'react';
import Seleton from 'src/modules/Effect/Seleton';
import { useParams } from 'react-router-dom';

const DetailsProduct = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getSingleProduct(Number(id)),
  });

  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      <div className='grid grid-cols-2 gap-8'>
        {/* images */}
        <div className='flex flex-col gap-y-8 w-full'>
          {data &&
            data?.images &&
            data.images
              .slice(0, 3)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={data.title}
                  className='w-full h-[436px] object-cover rounded-xl'
                />
              ))}
        </div>

        {/* artice */}
        <article>
          <Typography className='font-semibold text-[32px] mb-2'>
            {data?.title}
          </Typography>

          <Rating star={data && Math.floor(data.rating)} />

          <Typography as='p' className='my-10'>
            {data?.description}
          </Typography>

          {/* infomations */}
          <FlexLayout className='justify-between'>
            <PriceDetails
              newPrice={getNewPrice(data?.price, data?.discountPercentage)}
              oldPrice={data?.price}
            />
            <CountProducts />
            <Button variant='secondary'>Add to cart</Button>
          </FlexLayout>

          {/* relate products */}
          <Typography as='p' className='font-semibold text-lg my-8'>
            Related Products
          </Typography>
          <div className='grid grid-cols-2 gap-8'>
            {isLoading ? (
              <Fragment>
                <Seleton />
                <Seleton />
                <Seleton />
                <Seleton />
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default DetailsProduct;
