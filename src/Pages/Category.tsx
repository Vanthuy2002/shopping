import { useQuery } from '@tanstack/react-query';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { FilterBrand } from 'src/components/Category/Filter';
import { ProductItems } from 'src/components/Products';
import Seleton from 'src/modules/Effect/Seleton';
import { getProductsByCategories } from 'src/services/products.sevice';

const CategoryDetails: React.FC = () => {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['products', slug],
    queryFn: () => getProductsByCategories(slug as string, 10),
  });

  return (
    <Fragment>
      <section className='max-w-screen-xl mx-auto mt-16'>
        <div className='grid grid-cols-4 gap-7'>
          {/* filter */}
          <FilterBrand />
          <div className='grid grid-cols-3 col-start-2 col-end-5 gap-8'>
            {isLoading ? (
              <Fragment>
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
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryDetails;
