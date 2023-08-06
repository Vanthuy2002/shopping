import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Typography from '../Typography';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <FlexLayout className='flex-wrap justify-between max-w-screen-xl p-4 mx-auto'>
        <Link to='/'>
          <Typography
            as='span'
            className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'
          >
            Shopping App
          </Typography>
        </Link>
        <FlexLayout className='md:order-2'>
          <button
            type='button'
            className='px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Get started
          </button>
          <button
            type='button'
            className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          >
            <Bars3BottomRightIcon className='w-6 h-6' />
          </button>
        </FlexLayout>
        <div className='items-center justify-between hidden w-full mt-5 md:mt-0 md:flex md:max-w-sm md:order-1'>
          <input
            type='text'
            className='w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search products...'
          />
        </div>
      </FlexLayout>
    </nav>
  );
};

export default Navbar;
