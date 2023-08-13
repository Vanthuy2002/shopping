import React from 'react';
import CurrentLayout from 'src/Layout';
import { FilterBrand } from 'src/components/Category/Filter';
import { ProductItems } from 'src/components/Products';
import { fakeData } from 'src/utils/constants';

const CategoryDetails: React.FC = () => {
  return (
    <CurrentLayout>
      <section className='max-w-screen-xl mx-auto mt-16'>
        <div className='grid grid-cols-4 gap-7'>
          {/* filter */}
          <FilterBrand />
          <div className='grid grid-cols-3 col-start-2 col-end-5 gap-8'>
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <ProductItems key={index} {...fakeData} />
              ))}
          </div>
        </div>
      </section>
    </CurrentLayout>
  );
};

export default CategoryDetails;
