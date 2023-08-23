import { SetStateAction } from 'react';
import FlexLayout from 'src/Layout/Flex';

const Pagination = ({
  totalPage,
  setPage,
  pages,
}: {
  totalPage: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  pages: number;
}) => {
  const handleSetPage = (page: number) => setPage(page);
  const handleChange = (type: 'prev' | 'next') => {
    type === 'next' ? setPage(pages + 1) : setPage(pages - 1);
  };

  return (
    <nav className='flex justify-end'>
      <FlexLayout className='h-8 -space-x-px text-sm'>
        <button
          onClick={() => handleChange('prev')}
          disabled={pages === 1}
          className='flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Prev
        </button>
        {totalPage > 0 &&
          Array(totalPage)
            .fill(null)
            .map((_, index) => (
              <button
                onClick={() => handleSetPage(index + 1)}
                className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                {index + 1}
              </button>
            ))}
        <button
          onClick={() => handleChange('next')}
          disabled={pages === totalPage}
          className='flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        >
          Next
        </button>
      </FlexLayout>
    </nav>
  );
};

export default Pagination;
