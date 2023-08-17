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
import Toggle from 'src/modules/Checkbox/Toggle';
import { IEvents } from 'src/utils/types';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [show, toggle] = useToggle(false);
  const [query, setQuery] = useState<string>('');

  const user = useAppStore((state) => state.users);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const theme = useAppStore((state) => state.theme);

  const handleToggle = (e: IEvents) => {
    toggleTheme(e.target.checked);
  };

  const handleChange = (e: IEvents) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    setQuery('');
  };

  return (
    <nav className='h-20 bg-white border-gray-200 dark:bg-gray-900'>
      <FlexLayout className='flex-wrap justify-between max-w-screen-xl p-4 mx-auto'>
        <WebBrand />

        <FlexLayout className='md:order-2 gap-x-2'>
          <FlexLayout className='gap-8'>
            <Toggle onChange={handleToggle} text={theme} />
            {user?.email ? (
              <>
                <CartProducts />
                <User user={user} />
              </>
            ) : (
              <Button onClick={() => navigate('/register')}>Get Started</Button>
            )}
          </FlexLayout>

          <Button customstyles='md:hidden' variant='light' onClick={toggle}>
            {show ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3BottomRightIcon className='w-6 h-6' />
            )}
          </Button>
        </FlexLayout>

        <form
          onSubmit={handleSearch}
          className={classNames(
            'items-center justify-between w-full mt-5 md:mt-0 md:flex md:max-w-sm md:order-1',
            { hidden: !show }
          )}
        >
          <Input
            onChange={handleChange}
            value={query}
            placeholder='Search products....'
          />
        </form>
      </FlexLayout>
    </nav>
  );
};
export default Navbar;
