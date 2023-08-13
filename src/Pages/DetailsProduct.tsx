import FlexLayout from 'src/Layout/Flex';
import { CountProducts } from 'src/components/Products/Detail';
import PriceDetails from 'src/components/Products/Detail/Price';
import Rating from 'src/components/Rating';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { fakeData, imagesPlaceholder } from 'src/utils/constants';
import { ProductItems } from 'src/components/Products';

const DetailsProduct = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      <div className='grid grid-cols-2 gap-8'>
        {/* images */}
        <div className='flex flex-col gap-y-8 w-full'>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src={imagesPlaceholder}
                alt='products'
                className='w-full h-[436px] object-cover rounded-xl'
              />
            ))}
        </div>

        {/* artice */}
        <article>
          <Typography className='font-semibold text-[32px] mb-2'>
            Carrots from Tomissy Farm
          </Typography>

          <Rating star={4} />

          <Typography as='p' className='my-10'>
            Carrots from Tomissy Farm are one of the best on the market. Tomisso
            and his family are giving a full love to his Bio products. Tomisso’s
            carrots are growing on the fields naturally.
          </Typography>

          {/* infomations */}
          <FlexLayout className='justify-between'>
            <PriceDetails newPrice={36.5} oldPrice={43.2} />
            <CountProducts />
            <Button variant='secondary'>Add to cart</Button>
          </FlexLayout>

          {/* relate products */}
          <Typography as='p' className='font-semibold text-lg my-8'>
            Related Products
          </Typography>
          <div className='grid grid-cols-2 gap-8'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <ProductItems {...fakeData} key={index} />
              ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default DetailsProduct;
