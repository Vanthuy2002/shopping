import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Typography from '../Typography';

const Pagination = ({
  page,
  setPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleChangePage = (type: 'next' | 'prev') => {
    if (type === 'next') {
      setPage(page + 1);
    } else if (type === 'prev') {
      setPage(page - 1);
    }
  };
  return (
    <nav className='mt-5 flex justify-between'>
      <Typography as='p' className='text-gray-500'>
        Page <strong>{page}</strong> of <strong>20</strong>
      </Typography>
      <div className='inline-flex -space-x-px text-sm'>
        <button
          className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          disabled={page === 1}
          onClick={() => handleChangePage('prev')}
        >
          <ChevronLeftIcon className='w-5 h-5' />
        </button>

        <button
          className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          onClick={() => handleChangePage('next')}
        >
          <ChevronRightIcon className='w-5 h-5' />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
