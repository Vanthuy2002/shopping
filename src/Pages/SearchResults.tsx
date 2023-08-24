import classNames from 'classnames';
import { ProductItems } from 'src/components/Products';
import Typo from 'src/components/Typo';
import Seleton from 'src/modules/Effect/Seleton';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { queryProducts } from 'src/services/products.sevice';
import { ReponseFromApi } from 'src/utils/types';
import Pagination from 'src/components/Pagination';

const limit = 5;

const SearchResults = () => {
  const { slug } = useParams();
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useQuery({
    queryKey: ['search', slug, page],
    queryFn: () => queryProducts(slug as string, page, limit),
  });

  const totalProducts = data?.headers['x-total-count'];
  const totalPage = Math.ceil(totalProducts / limit);

  return (
    <section className='max-w-screen-xl mx-auto mt-16'>
      <Typo as='h2' className='mb-5 text-lg font-semibold'>
        {data && totalProducts
          ? `Founded ${totalProducts} products`
          : 'No products was found'}
      </Typo>
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
              data.data.map((product: ReponseFromApi) => (
                <ProductItems key={product.id} item={product} />
              ))}
          </Fragment>
        )}
      </div>

      <Pagination pages={page} setPage={setPage} totalPage={totalPage} />
    </section>
  );
};

export default SearchResults;
