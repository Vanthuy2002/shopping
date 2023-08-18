import FlexLayout from 'src/Layout/Flex';
import PriceDetails from 'src/components/Products/Detail/Price';
import Rating from 'src/components/Rating';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { getNewPrice } from 'src/utils/constants';
import { useQuery } from '@tanstack/react-query';
import {
  getProductsByCategories,
  getSingleProduct,
} from 'src/services/products.sevice';
import { Fragment } from 'react';
import Seleton from 'src/modules/Effect/Seleton';
import { useParams } from 'react-router-dom';
import { ProductItems } from 'src/components/Products';

const DetailsProduct = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['details', id],
    queryFn: () => getSingleProduct(Number(id)),
  });

  const query = useQuery({
    queryKey: ['products', data?.category],
    queryFn: () => getProductsByCategories(data?.category as string),
  });

  const relatedData =
    query?.data && query?.data.filter((item) => item.id !== Number(id));

  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      <div className='grid grid-cols-2 gap-8'>
        {/* images */}
        <div className='flex flex-col w-full gap-y-8'>
          {isLoading ? (
            <Fragment>
              <Seleton onlyImage />
              <Seleton onlyImage />
              <Seleton onlyImage />
            </Fragment>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
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
              newPrice={
                getNewPrice(data?.price, data?.discountPercentage) as number
              }
              oldPrice={data?.price}
            />
            <Button size='lg' variant='secondary'>
              Add to cart
            </Button>
          </FlexLayout>

          {/* relate products */}
          <Typography as='p' className='my-8 text-lg font-semibold'>
            Related Products
          </Typography>
          <div className='grid grid-cols-2 gap-8'>
            {isLoading ? (
              <Fragment>
                <Seleton />
                <Seleton />
              </Fragment>
            ) : (
              <Fragment>
                {relatedData &&
                  relatedData.map((product) => (
                    <ProductItems key={product.id} item={product} />
                  ))}
              </Fragment>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default DetailsProduct;
