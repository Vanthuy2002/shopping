import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import { getAllCategory } from 'src/services/products.sevice';
import { capitalize, createUUID } from 'src/utils/constants';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const MenuCategory = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategory,
  });

  const listToShow = data && data.slice(0, 8);

  return (
    <section className='bg-[#f9f9f9] mt-5'>
      <FlexLayout className='max-w-screen-xl mx-auto gap-7'>
        {listToShow &&
          listToShow.map((item) => (
            <Link
              key={createUUID()}
              className='p-4 text-base font-medium first:pl-0 last:pr-0 hover:text-gray-400'
              to={`/category/${item}`}
            >
              {capitalize(item)}
            </Link>
          ))}
        <Link
          key={createUUID()}
          className='p-4 text-base font-medium first:pl-0 last:pr-0 hover:text-gray-400'
          to={`/category`}
        >
          <span className='flex items-center gap-1'>
            More
            <ArrowLongRightIcon className='w-6 h-6' />
          </span>
        </Link>
      </FlexLayout>
    </section>
  );
};

export default MenuCategory;
