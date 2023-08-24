import {
  Bars3BottomRightIcon,
  XMarkIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import FlexLayout from 'src/Layout/Flex';
import Button from 'src/modules/Button';
import { useToggle } from 'usehooks-ts';
import UserInfo from '../User';
import { useAppStore } from 'src/store';
import Typography from '../Typography';
import Toggle from 'src/modules/Checkbox/Toggle';
import { IEvents } from 'src/utils/types';

const NavDashBoard = () => {
  const [show, toggle] = useToggle(false);
  const user = useAppStore((state) => state.users);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  const handleToggle = (e: IEvents) => {
    toggleTheme(e.target.checked);
  };
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <section className='px-3 py-3 lg:px-5 lg:pl-3'>
        <FlexLayout className='justify-between'>
          <FlexLayout className='justify-start gap-2'>
            <Button
              size='normal'
              customstyles='md:hidden'
              variant='light'
              onClick={toggle}
            >
              {show ? (
                <XMarkIcon className='w-6 h-6' />
              ) : (
                <Bars3BottomRightIcon className='w-6 h-6' />
              )}
            </Button>
            <Link to='/' className='flex items-center'>
              <img src='/Logo.png' className='h-8 mr-3' alt='Logo' />
              <Typography
                className='text-xl dark:text-white hidden md:block font-semibold'
                as='span'
              >
                Shopping App
              </Typography>
            </Link>
          </FlexLayout>

          {/* USER with dropdown */}
          <FlexLayout className='gap-4'>
            <Toggle onChange={handleToggle} text='Theme' />
            <UserInfo user={user} />

            <Button size='md' variant='light'>
              <EllipsisHorizontalIcon className='w-6 h-6' />
            </Button>
          </FlexLayout>
        </FlexLayout>
      </section>
    </nav>
  );
};

export default NavDashBoard;
