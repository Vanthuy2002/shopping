import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import { getAllCategory } from 'src/services/products.sevice';
import { capitalize, createUUID } from 'src/utils/constants';

const TagsProducts = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategory,
  });

  return (
    <FlexLayout className='flex-wrap gap-4 mt-5'>
      {data &&
        data.map((item) => (
          <Link
            key={createUUID()}
            to={`/category/${item}`}
            className='px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'
          >
            {capitalize(item)}
          </Link>
        ))}
    </FlexLayout>
  );
};

export default TagsProducts;
