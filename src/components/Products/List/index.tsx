import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ProductItems } from 'src/components/Products';
import Typography from 'src/components/Typography';
import Button from 'src/modules/Button';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategories } from 'src/services/products.sevice';
import Seleton from 'src/modules/Effect/Seleton';
import { Fragment } from 'react';
import { ListProps } from 'src/utils/types';

const ListProducts = ({
  label,
  tag,
  className = '',
  isButton = true,
}: ListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['products', tag],
    queryFn: () => getProductsByCategories(tag as string),
  });

  const navigate = useNavigate();
  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      {label && (
        <Typography as='h2' className='mb-5 text-lg font-bold'>
          {label}
        </Typography>
      )}
      <div className={classNames('grid grid-cols-4 gap-5', className)}>
        {isLoading ? (
          <Fragment>
            <Seleton />
            <Seleton />
            <Seleton />
            <Seleton />
          </Fragment>
        ) : (
          <Fragment>
            {data &&
              data.map((product) => (
                <ProductItems key={product.id} item={product} />
              ))}
          </Fragment>
        )}
      </div>

      {isButton && (
        <div className='mt-5 text-right'>
          <Button size='lg' onClick={() => navigate(`/category/${tag}`)}>
            More Products
          </Button>
        </div>
      )}
    </section>
  );
};

export default ListProducts;
