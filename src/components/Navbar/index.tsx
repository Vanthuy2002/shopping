import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import FlexLayout from 'src/Layout/Flex';
import Button from 'src/modules/Button';
import Input from 'src/modules/Input';
import WebBrand from '../Brand';
import User from '../User';
import { useNavigate } from 'react-router-dom';
import { useToggle } from 'usehooks-ts';
import classNames from 'classnames';
import CartProducts from '../Cart';
import { useAppStore } from 'src/store';

const Navbar = () => {
  const navigate = useNavigate();
  const [show, toggle] = useToggle(false);

  const user = useAppStore((state) => state.users);

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <FlexLayout className='flex-wrap justify-between max-w-screen-xl p-4 mx-auto'>
        <WebBrand />

        <FlexLayout className='md:order-2 gap-x-2'>
          {user?.email ? (
            <FlexLayout className='gap-8'>
              <CartProducts />
              <User user={user} />
            </FlexLayout>
          ) : (
            <Button onClick={() => navigate('/register')}>Get Started</Button>
          )}

          <Button customstyles='md:hidden' variant='light' onClick={toggle}>
            {show ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3BottomRightIcon className='w-6 h-6' />
            )}
          </Button>
        </FlexLayout>

        <div
          className={classNames(
            'items-center justify-between w-full mt-5 md:mt-0 md:flex md:max-w-sm md:order-1',
            { hidden: !show }
          )}
        >
          <Input placeholder='Search products any...' />
        </div>
      </FlexLayout>
    </nav>
  );
};
export default Navbar;
