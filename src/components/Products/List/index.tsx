import { useNavigate } from 'react-router-dom';
import { ProductItems } from 'src/components/Products';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { fakeData } from 'src/utils/constants';

const ListProducts = ({
  label,
  tag,
  col = 4,
}: {
  label?: string;
  tag: string;
  col?: number;
}) => {
  const navigate = useNavigate();
  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      {label && (
        <Typography as='h2' className='mb-5 text-lg font-bold'>
          {label}
        </Typography>
      )}
      <div className='grid grid-cols-4 gap-5'>
        {Array(col)
          .fill(0)
          .map((_, index) => (
            <ProductItems
              title={fakeData.title}
              desc={fakeData.desc}
              image={fakeData.image}
              id={fakeData.id}
              price={fakeData.price}
              key={index}
            />
          ))}
      </div>

      <div className='mt-5 text-right'>
        <Button onClick={() => navigate(`/category/${tag}`)}>
          More Products
        </Button>
      </div>
    </section>
  );
};

export default ListProducts;
