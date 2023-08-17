import classNames from 'classnames';
import { ProductItems } from 'src/components/Products';
import Typography from 'src/components/Typography';
import Seleton from 'src/modules/Effect/Seleton';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { queryProducts } from 'src/services/products.sevice';

const SearchResults = () => {
  const { slug } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['search', slug],
    queryFn: () => queryProducts(slug as string),
  });

  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      <Typography as='h2' className='mb-5 text-lg font-bold'>
        {data && data?.length > 0
          ? `Founded ${data?.length} products`
          : 'No products was found'}
      </Typography>
      <div className={classNames('grid grid-cols-4 gap-5')}>
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
    </section>
  );
};

export default SearchResults;
