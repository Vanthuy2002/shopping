import { ProductItems } from 'src/components/Products';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { createUUID } from 'src/utils/constants';
import { ProductItemsProps } from 'src/utils/types';

const fakeData: ProductItemsProps = {
  id: createUUID(),
  title: 'Product title',
  desc: 'Lorem ipsum dolor sit amet.',
  image:
    'https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=600',
  price: 1.84,
};

const SellingProducts = ({ label }: { label: string }) => {
  return (
    <section className='mt-16 max-w-screen-xl mx-auto'>
      <Typography as='h2' className='mb-5 font-bold text-lg'>
        {label}
      </Typography>
      <div className='grid gap-5 grid-cols-4'>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ProductItems
              title={fakeData.title}
              desc={fakeData.desc}
              image={fakeData.image}
              id={fakeData.id}
              price={1.87}
              key={index}
            />
          ))}
      </div>

      <div className='mt-5 text-right'>
        <Button>More Products</Button>
      </div>
    </section>
  );
};

export default SellingProducts;
